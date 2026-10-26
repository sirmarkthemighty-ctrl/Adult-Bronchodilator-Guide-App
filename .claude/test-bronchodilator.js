#!/usr/bin/env node
// Regression test for bronchodilator-guide.html.
// Opens the built page in headless Edge/Chrome, runs bronchodilator-src/tests/e2e.js
// inside it through the DevTools protocol, and prints pass/fail. Exit code 1 on any failure.
//
// Usage:  node .claude/test-bronchodilator.js        (or: node .claude/build-bronchodilator.js --test)

const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');
const { pathToFileURL } = require('url');

const ROOT = path.resolve(__dirname, '..');
const PAGE = path.join(ROOT, 'bronchodilator-guide.html');
const TEST = path.join(ROOT, 'bronchodilator-src', 'tests', 'e2e.js');
// UI audit: overlapping / cut-off / overflowing text and sideways scrolling on every screen
const AUDIT = path.join(__dirname, 'ui-audit.js');
const AUDIT_RUN = path.join(__dirname, 'ui-audit-run.js');
// Host page that embeds the guide in a frame taller than the screen (served over http so the test can look inside)
const EMBED_HOST = path.join(ROOT, 'bronchodilator-src', 'tests', 'embed-host.html');
const http = require('http');
const BROWSERS = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome', '/usr/bin/chromium',
];

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function main() {
  const exe = BROWSERS.find(p => fs.existsSync(p));
  if (!exe) throw new Error('No Edge or Chrome found.');
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'bdg-test-'));
  const browser = spawn(exe, [
    '--headless=new', '--disable-gpu', '--no-first-run', '--remote-debugging-port=0',
    // keep timers at full speed: background throttling made long runs crawl and time out
    '--disable-background-timer-throttling', '--disable-renderer-backgrounding', '--disable-backgrounding-occluded-windows',
    `--user-data-dir=${profile}`, '--blink-settings=preferredColorScheme=1', '--window-size=1280,1000',
    pathToFileURL(PAGE).href,
  ], { stdio: 'ignore' });
  let server = null;

  try {
    // The browser writes its chosen debugging port to DevToolsActivePort
    let port;
    for (let i = 0; i < 100 && !port; i++) {
      await sleep(100);
      try { port = fs.readFileSync(path.join(profile, 'DevToolsActivePort'), 'utf8').split('\n')[0].trim(); } catch (e) {}
    }
    if (!port) throw new Error('Browser did not open a debugging port.');
    let target;
    for (let i = 0; i < 50 && !target; i++) {
      const list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
      target = list.find(t => t.type === 'page' && t.url.startsWith('file:'));
      if (!target) await sleep(100);
    }

    const ws = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
    let nextId = 1;
    const pending = new Map();
    ws.onmessage = (m) => { const msg = JSON.parse(m.data); if (pending.has(msg.id)) { pending.get(msg.id)(msg); pending.delete(msg.id); } };
    // Every DevTools call has a time limit so a stuck page fails the run instead of hanging it
    const send = (method, params = {}, ms = 30000) => new Promise((resolve, reject) => {
      const id = nextId++;
      const timer = setTimeout(() => { pending.delete(id); reject(new Error(method + ' timed out')); }, ms);
      pending.set(id, (msg) => { clearTimeout(timer); if (msg.error) reject(new Error(msg.error.message)); else resolve(msg.result); });
      ws.send(JSON.stringify({ id, method, params }));
    });
    const evaluate = (expression, ms = 240000) => new Promise((resolve, reject) => {
      const id = nextId++;
      const timer = setTimeout(() => { pending.delete(id); reject(new Error('evaluate timed out after ' + ms / 1000 + ' s')); }, ms);
      pending.set(id, (msg) => {
        clearTimeout(timer);
        if (msg.error) return reject(new Error(msg.error.message));
        const r = msg.result;
        if (r.exceptionDetails) return reject(new Error(r.exceptionDetails.exception ? r.exceptionDetails.exception.description : r.exceptionDetails.text));
        resolve(r.result.value);
      });
      ws.send(JSON.stringify({ id, method: 'Runtime.evaluate', params: { expression, awaitPromise: true, returnByValue: true } }));
    });

    // Wait for the app to render (React and fonts load from CDNs)
    let ready = false;
    for (let i = 0; i < 150 && !ready; i++) {
      ready = await evaluate("document.querySelectorAll('#printable-drug-list h3').length > 0").catch(() => false);
      if (!ready) await sleep(200);
    }
    if (!ready) throw new Error('App did not render within 30 s (check network access to cdnjs).');

    await evaluate(fs.readFileSync(TEST, 'utf8'));
    const results = await evaluate('window.__bdgE2E()', 480000); // the e2e walk now takes more than 4 minutes on this machine
    console.error('[runner] e2e finished: ' + results.length + ' checks');

    // UI audits on a fresh page: desktop (light), phone 375 px (light and dark), English and Thai
    const waitReady = async () => {
      for (let i = 0; i < 150; i++) {
        if (await evaluate("document.querySelectorAll('#printable-drug-list h3').length > 0", 5000).catch(() => false)) return;
        await sleep(200);
      }
      throw new Error('App did not render after reload.');
    };
    const audits = [
      ['desktop 1280 px, light', null, 'light'],
      ['phone 375 px, light', { width: 375, height: 812, deviceScaleFactor: 2, mobile: true }, 'light'],
      ['phone 375 px, dark', { width: 375, height: 812, deviceScaleFactor: 2, mobile: true }, 'dark'],
    ];
    for (const [label, metrics, scheme] of audits) {
      if (metrics) await send('Emulation.setDeviceMetricsOverride', metrics); else await send('Emulation.clearDeviceMetricsOverride');
      await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-color-scheme', value: scheme }] });
      await send('Page.reload', { ignoreCache: false });
      await sleep(500);
      await waitReady();
      await evaluate([fs.readFileSync(AUDIT, 'utf8'), fs.readFileSync(AUDIT_RUN, 'utf8')].join('\n'));
      console.error('[runner] UI audit: ' + label);
      // run in the page and poll, so a slow or stuck step is reported by name
      await evaluate('window.__auditDone = null; window.__uiAuditRun().then(r => { window.__auditDone = { r }; }, e => { window.__auditDone = { e: String(e && e.stack || e) }; }); 0');
      let done = null, step = '';
      const t0 = Date.now();
      while (!done && Date.now() - t0 < 240000) { await sleep(1000); try { [done, step] = await evaluate('[window.__auditDone, window.__auditStep]', 20000); } catch (e) { step = step + ' (page busy)'; } }
      if (!done) throw new Error('UI audit (' + label + ') stuck at: ' + step);
      if (done.e) throw new Error('UI audit (' + label + ') error: ' + done.e.slice(0, 300));
      const found = done.r;
      const states = Object.keys(found);
      results.push({ name: 'UI audit (' + label + '): no overlapping, cut-off or overflowing text on any screen', pass: states.length === 0, detail: states.length ? Object.fromEntries(states.slice(0, 6).map(k => [k, found[k].slice(0, 4)])) : '' });
    }

    // Embedded in another site: the frame runs 90 px past the bottom of a phone screen (as it does under a
    // mobile browser's toolbar). The selection bar and dialogs must stay inside the visible part.
    const files = { '/bronchodilator-guide.html': PAGE, '/bronchodilator-src/tests/embed-host.html': EMBED_HOST };
    server = http.createServer((req, res) => {
      const file = files[req.url.split('?')[0]];
      if (!file) { res.writeHead(404); res.end(); return; }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      fs.createReadStream(file).pipe(res);
    });
    await new Promise(r => server.listen(0, '127.0.0.1', r));
    await send('Emulation.setDeviceMetricsOverride', { width: 375, height: 812, deviceScaleFactor: 2, mobile: true });
    await send('Page.navigate', { url: `http://127.0.0.1:${server.address().port}/bronchodilator-src/tests/embed-host.html?extra=90` });
    console.error('[runner] embedded-frame check');
    // the measurement is delivered when the browser draws a frame; a headless page draws none on its own,
    // so keep asking for screenshots while the check runs
    // (one at a time: queued screenshot requests can stall a page that is still loading)
    let drawing = false;
    const draw = setInterval(() => { if (drawing) return; drawing = true; send('Page.captureScreenshot', { format: 'jpeg', quality: 1 }, 10000).catch(() => {}).then(() => { drawing = false; }); }, 400);
    let embed;
    try { embed = await evaluate(`(async () => {
      const wait = (ms) => new Promise(r => setTimeout(r, ms));
      let f, d, w;
      for (let i = 0; i < 150; i++) {
        f = document.getElementById('app'); d = f && f.contentDocument; w = f && f.contentWindow;
        if (d && d.querySelector('#printable-drug-list[data-all-cards="1"]')) break;
        await wait(100);
      }
      const clip = () => w.getComputedStyle(d.documentElement).getPropertyValue('--clip-bottom').trim();
      for (let i = 0; i < 50 && clip() !== '90px'; i++) await wait(100);
      [...d.querySelectorAll('#printable-drug-list button')].find(b => b.querySelector('svg')).click(); await wait(500);
      // the bar and the dialog slide in: wait until their entry animations have finished
      const settled = async (el) => { for (let i = 0; i < 50 && el.getAnimations().some(a => a.playState !== 'finished'); i++) await wait(100); return el.getBoundingClientRect(); };
      const bar = await settled(d.querySelector('[data-select-bar]').parentElement).then(() => d.querySelector('[data-select-bar]').getBoundingClientRect());
      d.querySelector('[data-guide="device"]').click(); await wait(600);
      const ov = d.querySelector('.fixed.inset-0'), o = ov.getBoundingClientRect(), p = await settled(ov.firstElementChild);
      return { screen: window.innerHeight, frame: w.innerHeight, clip: clip(), bar: [Math.round(bar.top), Math.round(bar.bottom)], overlay: Math.round(o.bottom), panel: [Math.round(p.top), Math.round(p.bottom)] };
    })()`, 60000); } finally { clearInterval(draw); }
    results.push({ name: 'embedded frame taller than the phone screen: the hidden strip is measured (90 px)', pass: embed.frame === embed.screen + 90 && embed.clip === '90px', detail: embed });
    results.push({ name: 'embedded frame: the selection bar stays inside the visible screen', pass: embed.bar[0] > 0 && embed.bar[1] <= embed.screen, detail: embed });
    results.push({ name: 'embedded frame: dialogs stay inside the visible screen', pass: embed.overlay <= embed.screen && embed.panel[0] >= 0 && embed.panel[1] <= embed.screen, detail: embed });
    ws.close();

    const failed = results.filter(r => !r.pass);
    for (const r of results) {
      console.log(`${r.pass ? 'PASS' : 'FAIL'}  ${r.name}${r.pass ? '' : `\n      ${JSON.stringify(r.detail).slice(0, 400)}`}`);
    }
    console.log(`\n${results.length - failed.length} passed, ${failed.length} failed`);
    process.exitCode = failed.length ? 1 : 0;
  } finally {
    if (server) server.close();
    browser.kill();
    await sleep(500);
    try { fs.rmSync(profile, { recursive: true, force: true }); } catch (e) {}
  }
}

// The headless browser occasionally stops answering (seen after the computer wakes from sleep):
// retry once with a fresh browser before reporting a failure.
(async () => {
  for (let attempt = 1; attempt <= 2; attempt++) {
    try { await main(); return; }
    catch (e) {
      if (attempt === 2 || !/timed out|stuck at|did not render|debugging port/.test(e.message)) { console.error('Test run failed:', e.message); process.exitCode = 1; return; }
      console.error('[runner] browser stopped responding (' + e.message + '); retrying once with a fresh browser');
    }
  }
})();
