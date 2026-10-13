// Walks the bronchodilator guide's screens and modals, running window.__uiAudit on each.
// Load ui-audit.js first. Usage (in the page): await window.__uiAuditRun() -> { state: issues[] }
window.__uiAuditRun = async () => {
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const btn = (re, scope = document) => [...scope.querySelectorAll('button')].find((b) => re.test(b.textContent.trim()));
  const esc = async () => { window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })); await wait(300); };
  const modal = () => [...document.querySelectorAll('.fixed.inset-0')].pop();
  for (let i = 0; i < 100 && !document.querySelector('#printable-drug-list[data-all-cards="1"]'); i++) await wait(50); // full list drawn
  const out = {};
  window.__auditStep = 'start';
  const audit = (name, root) => { window.__auditStep = name; const r = window.__uiAudit(root || document.getElementById('root')); if (r.length) out[name] = r; };
  const openAll = (root) => root.querySelectorAll('details').forEach((d) => { d.open = true; });
  const select = async (id) => { const c = document.getElementById('drug-' + id); const b = c && [...c.querySelectorAll('button')].find((x) => /Select|เลือก|Selected|เลือกแล้ว/.test(x.textContent) || x.className.includes('w-7 h-7')); if (b) { b.click(); await wait(300); } };
  const clearSel = async () => { const b = document.querySelector('[data-select-bar] button'); if (b) { [...document.querySelectorAll('[data-select-bar] button')].find((x) => /Clear|ล้าง/.test(x.textContent))?.click(); await wait(300); } };

  for (const lang of ['EN', 'TH']) {
    const L = (en, th) => (lang === 'EN' ? en : th);
    const langBtn = btn(lang === 'EN' ? /^EN$/ : /^ไทย$/);
    if (langBtn) { langBtn.click(); await wait(400); }
    window.scrollTo(0, 0);
    // main page, grid and list
    document.querySelector('button[aria-label="Grid View"], button[aria-label="มุมมองตาราง"]')?.click(); await wait(300);
    audit(lang + ' main grid');
    document.querySelector('button[aria-label="List View"], button[aria-label="มุมมองรายการ"]')?.click(); await wait(300);
    audit(lang + ' main list');
    // brand rows: open the first one, audit the list with its strengths showing, close it
    { const bt = document.querySelector('#printable-drug-list [data-brand-toggle]'); if (bt) { bt.click(); await wait(400); audit(lang + ' main list, brand row open'); const b2 = document.querySelector('#printable-drug-list [data-brand-group][data-open="1"] [data-brand-toggle]'); if (b2) { b2.click(); await wait(300); } } }
    // product detail view (a product with a past registration and several countries, then a plain one)
    for (const id of [303, 1]) { const b = document.querySelector('#drug-' + id + ' [data-details]') || document.querySelector('[data-details]'); if (b) { b.click(); await wait(400); const st = document.querySelector('[data-src-toggle][aria-pressed="false"]'); if (st) { st.click(); await wait(250); } if (modal()) audit(lang + ' detail view ' + id, modal()); await esc(); } }
    // key to symbols
    { const lb = document.querySelector('[data-legend-btn]'); if (lb) { lb.click(); await wait(400); if (modal()) audit(lang + ' key', modal()); await esc(); } }
    // phones: the filters sit behind the Filters button; open the panel, audit it, close it
    { const ft = document.querySelector('[data-filters-toggle]'); if (ft && ft.getBoundingClientRect().width > 0) { ft.click(); await wait(300); audit(lang + ' filter panel (phone)', document.querySelector('[data-filter-bar]')); audit(lang + ' search row (phone)', document.querySelector('[data-search-bar]')); ft.click(); await wait(200); } }
    // phones: the search bar opened from the magnifier button
    { const so = document.querySelector('[data-search-open]'); if (so && so.getBoundingClientRect().width > 0) { so.click(); await wait(300); audit(lang + ' search bar open (phone)', document.querySelector('[data-search-bar]')); document.activeElement && document.activeElement.blur(); await wait(200); } }
    audit(lang + ' header', document.querySelector('header')); audit(lang + ' pinned bar (guides and search)', document.querySelector('[data-search-bar]'));
    document.querySelector('button[aria-label="Grid View"], button[aria-label="มุมมองตาราง"]')?.click(); await wait(300);
    // selection bar with 1 and 2 drugs, and the modals it opens
    await select(1);
    audit(lang + ' bar 1 drug', document.querySelector('[data-select-bar]'));
    const barBtns = () => [...document.querySelectorAll('[data-select-bar] .grid button')];
    barBtns()[2]?.click(); await wait(500); if (modal()) audit(lang + ' Equivalent Drugs', modal()); await esc();
    barBtns()[3]?.click(); await wait(500); if (modal()) audit(lang + ' Patient Sheet', modal()); await esc();
    await select(72);
    audit(lang + ' bar 2 drugs', document.querySelector('[data-select-bar]'));
    barBtns()[2]?.click(); await wait(500); if (modal()) audit(lang + ' Compare', modal()); await esc();
    barBtns()[3]?.click(); await wait(500); if (modal()) audit(lang + ' Dose Conversion', modal()); await esc();
    barBtns()[1]?.click(); await wait(500); if (modal()) audit(lang + ' Follow-up (2 drugs)', modal()); await esc();
    await clearSel();
    // header guides
    const guides = [['exac', 'Exacerbation'], ['maint', 'Initial Maintenance'], ['follow', 'Follow-up'], ['spacer', 'Spacer & Mask'], ['steroid', 'Steroid Dose']];
    for (const [label, name] of guides) {
      const b = document.querySelector('[data-guide="' + label + '"]');
      if (!b) { out[lang + ' ' + name] = [{ type: 'missing-button', label }]; continue; }
      b.click(); await wait(600);
      const m = modal();
      if (m) { openAll(m); await wait(200); audit(lang + ' ' + name, m); }
      if (name === 'Exacerbation' && m) {
        const copd = [...m.querySelectorAll('button')].find((x) => /COPD/.test(x.textContent) && /GOLD/.test(x.textContent));
        if (copd) { copd.click(); await wait(400); openAll(m); await wait(200); audit(lang + ' Exacerbation COPD', m); }
      }
      if (name === 'Follow-up' && m) {
        const copd = [...m.querySelectorAll('[role="tab"], button')].find((x) => /^COPD/.test(x.textContent.trim()));
        if (copd) { copd.click(); await wait(400); openAll(m); audit(lang + ' Follow-up COPD', m); }
      }
      await esc();
    }
    // Device Guide, every device tab
    const dg = document.querySelector('[data-guide="device"]');
    if (dg) {
      dg.click(); await wait(600);
      const m = modal();
      const tabs = [...m.querySelectorAll('[role="tab"]')].filter((x) => x.querySelector('svg'));
      for (const tb of tabs) { tb.click(); await wait(250); audit(lang + ' Device Guide ' + tb.textContent.trim(), m); }
      await esc();
    }
  }
  return out;
};
'run ready';
