// In-page UI audit: page overflow, truncated text, text bleeding out of its box, overlapping text, covered buttons.
window.__uiAudit = (root = document.body) => {
  const issues = [];
  const vw = window.innerWidth;
  if (document.documentElement.scrollWidth > vw + 1) issues.push({ type: 'pageOverflow', w: document.documentElement.scrollWidth, vw });
  const visible = (el) => {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return false;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.opacity === '0') return false;
    const d = el.closest('details');
    if (d && !d.open && !el.closest('summary')) return false;
    return true;
  };
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: (n) => (n.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT) });
  const texts = [];
  const scrollBoxes = new Map(); // element -> its box if it is a scrolling container with hidden content, else null
  while (walker.nextNode()) {
    const n = walker.currentNode, el = n.parentElement;
    if (!el || el.closest('svg, script, style, .sr-only, [data-audit-skip]') || !visible(el)) continue;
    const rg = document.createRange(); rg.selectNodeContents(n);
    // clamp each rect to the line box: some fonts (e.g. IBM Plex Sans Thai) draw a taller glyph box than the line height
    const cs0 = getComputedStyle(el); const lh = parseFloat(cs0.lineHeight) || parseFloat(cs0.fontSize) * 1.2;
    const rects = [...rg.getClientRects()].filter((r) => r.width > 0.5 && r.height > 0.5).map((r) => { const mid = (r.top + r.bottom) / 2, h = Math.min(r.height, lh); return { left: r.left, right: r.right, top: mid - h / 2, bottom: mid + h / 2, width: r.width, height: h }; });
    if (!rects.length) continue;
    // clip to scrolling ancestors: the part scrolled out of view is not drawn
    let hiddenByScroll = false;
    for (let e = el.parentElement; e && e !== document.body; e = e.parentElement) {
      let b = scrollBoxes.get(e);
      if (b === undefined) { const cs = getComputedStyle(e); b = /auto|scroll/.test(cs.overflowY) && e.scrollHeight > e.clientHeight + 1 ? e.getBoundingClientRect() : null; scrollBoxes.set(e, b); }
      if (!b) continue;
      for (let k = rects.length - 1; k >= 0; k--) {
        rects[k].top = Math.max(rects[k].top, b.top); rects[k].bottom = Math.min(rects[k].bottom, b.bottom);
        if (rects[k].bottom - rects[k].top < 1) rects.splice(k, 1);
      }
      if (!rects.length) { hiddenByScroll = true; break; }
    }
    if (hiddenByScroll) continue;
    texts.push({ n, el, rects, top: Math.min(...rects.map((r) => r.top)), bottom: Math.max(...rects.map((r) => r.bottom)), ctx: el.closest('.fixed') });
  }
  const short = (s) => s.replace(/\s+/g, ' ').trim().slice(0, 50);
  // truncated / clipped text
  const seen = new Set(), clipped = new Set();
  const inClipped = (el) => [...clipped].some((c) => c.contains(el));
  for (const { el } of texts) {
    let e = el;
    for (let i = 0; i < 3 && e; i++, e = e.parentElement) {
      if (seen.has(e)) break;
      const cs = getComputedStyle(e);
      const clip = /hidden|clip/.test(cs.overflowX) || cs.textOverflow === 'ellipsis';
      if (clip && e.scrollWidth > e.clientWidth + 1) { seen.add(e); clipped.add(e); issues.push({ type: 'truncated', text: short(e.textContent), sw: e.scrollWidth, cw: e.clientWidth }); break; }
    }
  }
  // text inside a box that cuts its content off at the bottom (a clipped box squeezed shorter than its content)
  const seenV = new Set();
  for (const { el } of texts) {
    for (let e = el; e && e !== document.body && e !== root.parentElement; e = e.parentElement) {
      if (seenV.has(e)) break;
      seenV.add(e);
      const cs = getComputedStyle(e);
      // [data-fit-width] boxes hold content scaled down with a transform: their unscaled height is not a cut-off
      if (/hidden|clip/.test(cs.overflowY) && cs.webkitLineClamp === 'none' && !e.hasAttribute('data-fit-width') && e.clientHeight > 0 && e.scrollHeight > e.clientHeight + 4) {
        clipped.add(e);
        issues.push({ type: 'cutOff', text: short(e.textContent), sh: e.scrollHeight, ch: e.clientHeight });
      }
    }
  }
  // text outside its nearest boxed ancestor (border or background)
  const boxOf = (el) => {
    for (let e = el; e && e !== document.body && e !== root.parentElement; e = e.parentElement) {
      const cs = getComputedStyle(e);
      const bordered = parseFloat(cs.borderLeftWidth) > 0 && cs.borderLeftStyle !== 'none';
      const filled = cs.backgroundColor !== 'rgba(0, 0, 0, 0)' && cs.backgroundColor !== 'transparent';
      if (bordered || filled) return e;
    }
    return null;
  };
  for (const t of texts) {
    if (inClipped(t.el)) continue; // already reported as truncated
    const box = boxOf(t.el);
    if (!box || /auto|scroll/.test(getComputedStyle(box).overflowX)) continue;
    const b = box.getBoundingClientRect();
    const r = t.rects.find((r) => r.right > b.right + 2 || r.left < b.left - 2 || r.bottom > b.bottom + 4 || r.top < b.top - 4);
    if (r) issues.push({ type: 'bleed', text: short(t.n.textContent), by: Math.round(Math.max(r.right - b.right, b.left - r.left, r.bottom - b.bottom, b.top - r.top)) });
  }
  // overlapping text from different text nodes (same layer)
  texts.sort((a, b) => a.top - b.top);
  for (let i = 0; i < texts.length; i++) {
    const A = texts[i];
    for (let j = i + 1; j < texts.length && texts[j].top < A.bottom; j++) {
      const B = texts[j];
      if (A.ctx !== B.ctx || inClipped(A.el) || inClipped(B.el)) continue;
      const hit = A.rects.some((a) => B.rects.some((b) => Math.min(a.right, b.right) - Math.max(a.left, b.left) > 2 && Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top) > 3));
      if (hit) issues.push({ type: 'overlap', a: short(A.n.textContent), b: short(B.n.textContent) });
    }
  }
  // input placeholders wider than their box (not text nodes, so measured with a canvas)
  const cv = document.createElement('canvas').getContext('2d');
  for (const inp of root.querySelectorAll('input[placeholder], textarea[placeholder]')) {
    if (!visible(inp) || !inp.placeholder) continue;
    const cs = getComputedStyle(inp); cv.font = cs.fontStyle + ' ' + cs.fontWeight + ' ' + cs.fontSize + ' ' + cs.fontFamily;
    const avail = inp.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    const w = cv.measureText(inp.placeholder).width;
    if (w > avail + 1) issues.push({ type: 'truncated', text: 'placeholder: ' + inp.placeholder.slice(0, 50), sw: Math.round(w), cw: Math.round(avail) });
  }
  // buttons, links and inputs on screen that another element covers (they cannot be clicked or tapped)
  for (const b of root.querySelectorAll('button, a[href], input, select, summary')) {
    if (!visible(b) || b.disabled || b.closest('svg, .sr-only, [data-audit-skip]') || getComputedStyle(b).pointerEvents === 'none') continue;
    const r = b.getBoundingClientRect();
    const x = r.left + r.width / 2, y = r.top + r.height / 2;
    if (r.width < 8 || r.height < 8 || x < 0 || y < 0 || x > vw || y > window.innerHeight) continue;
    // centre scrolled out of a scrolling box (for example under a dialog's footer): not drawn there, so not covered
    let outOfScroll = false;
    for (let e = b.parentElement; e && e !== document.body; e = e.parentElement) {
      const cs = getComputedStyle(e);
      if (/auto|scroll/.test(cs.overflowY) && e.scrollHeight > e.clientHeight + 1) { const s = e.getBoundingClientRect(); if (y < s.top + 1 || y > s.bottom - 1) { outOfScroll = true; break; } }
    }
    if (outOfScroll) continue;
    const top = document.elementFromPoint(x, y);
    if (!top || top === b || b.contains(top) || top.contains(b)) continue;
    const layer = top.closest('.fixed, .sticky');
    if (layer && !layer.contains(b)) continue; // behind an open dialog or a pinned bar, as intended
    const lab = top.closest('label');
    if (lab && lab.contains(b)) continue;
    issues.push({ type: 'covered', text: short(b.textContent || b.getAttribute('aria-label') || b.tagName), by: short(top.textContent) || top.tagName });
  }
  // collapse duplicates
  const key = (x) => JSON.stringify(x);
  const out = [], s = new Set();
  for (const x of issues) { const k = key(x); if (!s.has(k)) { s.add(k); out.push(x); } }
  return out;
};
'audit ready';
