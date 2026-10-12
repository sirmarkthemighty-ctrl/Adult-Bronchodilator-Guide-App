#!/usr/bin/env node
// Load-time benchmark for bronchodilator-guide.html: headless Edge/Chrome, phone viewport,
// CPU slowed 4x (roughly a mid-range phone). Prints the median of N cold loads.
// Usage: node .claude/perf-bronchodilator.js [file.html] [runs]

const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');
const { pathToFileURL } = require('url');

const ROOT = path.resolve(__dirname, '..');
const PAGE = path.resolve(process.argv[2] || path.join(ROOT, 'bronchodilator-guide.html'));
const RUNS = +process.argv[3] || 5;
const RATE = +process.argv[4] || 4;
const BROWSERS = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
];
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const median = (a) => { const s = [...a].sort((x, y) => x - y); return s[Math.floor(s.length / 2)]; };

async function main() {
  const exe = BROWSERS.find(p => fs.existsSync(p));
  if (!exe) throw new Error('No Edge or Chrome found.');
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'bdg-perf-'));
  const browser = spawn(exe, ['--headless=new', '--disable-gpu', '--no-first-run', '--remote-debugging-port=0',
    '--disable-background-timer-throttling', '--disable-renderer-backgrounding', `--user-data-dir=${profile}`, 'about:blank'], { stdio: 'ignore' });
  try {
    let port;
    for (let i = 0; i < 100 && !port; i++) { await sleep(100); try { port = fs.readFileSync(path.join(profile, 'DevToolsActivePort'), 'utf8').split('\n')[0].trim(); } catch (e) {} }
    let target;
    for (let i = 0; i < 50 && !target; i++) { const list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json(); target = list.find(t => t.type === 'page'); if (!target) await sleep(100); }
    const ws = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
    let nextId = 1; const pending = new Map();
    ws.onmessage = (m) => { const msg = JSON.parse(m.data); if (pending.has(msg.id)) { pending.get(msg.id)(msg); pending.delete(msg.id); } };
    const send = (method, params = {}) => new Promise((resolve, reject) => {
      const id = nextId++;
      const timer = setTimeout(() => { pending.delete(id); reject(new Error(method + ' timed out')); }, 60000);
      pending.set(id, (msg) => { clearTimeout(timer); msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result); });
      ws.send(JSON.stringify({ id, method, params }));
    });
    const evaluate = async (expression) => (await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true })).result.value;

    await send('Page.enable');
    await send('Performance.enable');
    // --no-fonts: block the web-font requests to time the page's own code without network noise
    if (process.argv.includes('--no-fonts')) { await send('Network.enable'); await send('Network.setBlockedURLs', { urls: ['*fonts.googleapis.com*', '*fonts.gstatic.com*'] }); }
    await send('Emulation.setDeviceMetricsOverride', { width: 375, height: 812, deviceScaleFactor: 2, mobile: true });
    await send('Emulation.setCPUThrottlingRate', { rate: RATE });
    // Record timings inside the page: first paint, and the moment the drug list appears
    await send('Page.addScriptToEvaluateOnNewDocument', { source: `
      window.__perf = {};
      try { new PerformanceObserver((l) => { for (const e of l.getEntries()) if (e.name === 'first-contentful-paint') window.__perf.fcp = Math.round(e.startTime); }).observe({ type: 'paint', buffered: true }); } catch (e) {}
      new MutationObserver((m, o) => { if (document.querySelector('#printable-drug-list h3')) { window.__perf.list = Math.round(performance.now()); requestAnimationFrame(() => requestAnimationFrame(() => { window.__perf.painted = Math.round(performance.now()); })); o.disconnect(); } }).observe(document, { childList: true, subtree: true });
      const tick = () => { const l = document.querySelector('#printable-drug-list'); if (l && (l.dataset.allCards === '1' || l.dataset.allCards === undefined && l.querySelector('h3'))) window.__perf.all = Math.round(performance.now()); else setTimeout(tick, 16); }; tick();
    ` });
    const rows = [];
    for (let i = 0; i < RUNS; i++) {
      await send('Network.clearBrowserCache').catch(() => {});
      await send('Page.navigate', { url: 'about:blank' });
      await sleep(300);
      await send('Page.navigate', { url: pathToFileURL(PAGE).href });
      let p = null;
      for (let k = 0; k < 400 && !(p && p.painted && p.all); k++) { await sleep(100); p = await evaluate('window.__perf || null').catch(() => null); }
      await sleep(500);
      p = await evaluate('window.__perf');
      const cards = await evaluate("document.querySelectorAll('#printable-drug-list h3').length");
      const m = Object.fromEntries((await send('Performance.getMetrics')).metrics.map(x => [x.name, x.value]));
      rows.push({ all: p.all, rendered: p.painted, list: p.list, fcp: p.fcp || 0, script: Math.round(m.ScriptDuration * 1000), cards });
    }
    ws.close();
    const kb = (fs.statSync(PAGE).size / 1024).toFixed(0);
    console.log(`${path.basename(PAGE)}: ${kb} KB, ${RUNS} loads (phone viewport, CPU ${RATE}x slower)`);
    console.log(`  first paint (FCP):        ${median(rows.map(r => r.fcp))} ms`);
    console.log(`  drug list on screen:      ${median(rows.map(r => r.rendered))} ms   (${rows[0].cards} cards)`);
    console.log(`  every card drawn:         ${median(rows.map(r => r.all))} ms`);
    console.log('  runs: ' + rows.map(r => `${r.fcp}/${r.rendered}`).join('  '));
  } finally {
    browser.kill();
    await sleep(400);
    try { fs.rmSync(profile, { recursive: true, force: true }); } catch (e) {}
  }
}
main().catch((e) => { console.error('Perf run failed:', e.message); process.exitCode = 1; });
