// Browser-side regression checks for bronchodilator-guide.html, driven through the
// real UI (typing, clicking, keyboard). Run with: node .claude/test-bronchodilator.js
// Defines window.__bdgE2E(), which resolves to [{ name, pass, detail }].
window.__bdgE2E = async function () {
  const out = [];
  const log = (name, pass, detail) => out.push({ name, pass: !!pass, detail: pass ? '' : detail });
  const wait = (ms) => new Promise(r => setTimeout(r, ms));
  // the first paint draws only the first cards; wait for the full list
  { const first = document.querySelectorAll('#printable-drug-list h3').length; for (let i = 0; i < 100 && !document.querySelector('#printable-drug-list[data-all-cards="1"]'); i++) await wait(50);
    log('all cards are drawn shortly after the first paint', !!document.querySelector('#printable-drug-list[data-all-cards="1"]') && document.querySelectorAll('#printable-drug-list h3').length >= first, first); }
  // brand rows are on by default: check the default view, then list every strength for the checks below
  const groupBtn = () => document.querySelector('[data-group-toggle] button');
  { const rows = document.querySelectorAll('#printable-drug-list [data-brand-group]').length, cards = document.querySelectorAll('#printable-drug-list h3').length;
    log('default view groups strengths: brand rows are shown and fewer cards than products', groupBtn().getAttribute('aria-pressed') === 'true' && rows >= 5 && cards + rows < 58 && /in \d+ rows/.test((document.querySelector('[data-brand-rows]') || {}).textContent || ''), [rows, cards]);
    const sa = document.querySelector('[data-brand-group="seretide accuhaler|Diskus"]');
    const before = document.querySelectorAll('#printable-drug-list h3').length;
    log('Seretide Accuhaler is one row with its three strengths, closed at first', !!sa && sa.dataset.open === '0' && [...sa.querySelectorAll('[data-brand-strength]')].map(x => x.textContent).join() === '50/100,50/250,50/500' && /3 strengths/.test(sa.querySelector('[data-brand-count]').textContent) && sa.querySelector('[data-brand-name]').textContent === 'Seretide Accuhaler' && ![...document.querySelectorAll('#printable-drug-list h3')].some(h => /Seretide Accuhaler/.test(h.textContent)), sa && sa.textContent.slice(0, 80));
    { const card = [...document.querySelectorAll('#printable-drug-list > div[data-shape]')][0];
      const it = sa.querySelector('[data-brand-pick="62"]');
      log('tile view: a brand row is as tall as its content (no empty space under the last strength)', sa.getBoundingClientRect().bottom - sa.lastElementChild.getBoundingClientRect().bottom < 24 && Math.abs(sa.getBoundingClientRect().height - card.getBoundingClientRect().height) > 40, [Math.round(sa.getBoundingClientRect().height), Math.round(card.getBoundingClientRect().height)]);
      const top = sa.querySelector('[data-brand-common]');
      log('brand row: shared details once at the top (picture, device, holder, NLEM, indications, 5 country chips)', !!top.querySelector('svg') && /DPI/.test(top.textContent) && /GlaxoSmithKline \(Thailand\) Ltd\./.test(top.textContent) && /NLEM/.test(top.textContent) && /Asthma/.test(top.textContent) && top.querySelectorAll('[data-country]').length === 5 && sa.querySelector('[data-brand-name]').textContent === 'Seretide Accuhaler', top.textContent.slice(0, 160));
      log('brand row: each strength shows only its strength and class-labelled components, with Select and Details', it.querySelector('[data-brand-strength]').textContent === '50/250' && /ICS\s*: Fluticasone propionate 250 mcg/.test(it.textContent) && /LABA\s*: Salmeterol 50 mcg/.test(it.textContent) && !it.querySelector('[data-country]') && !/GlaxoSmithKline|Asthma|NLEM/.test(it.textContent) && !!it.querySelector('[data-brand-select]') && !!it.querySelector('[data-brand-details]'), it.textContent.slice(0, 160));
      { const sy = document.querySelector('[data-brand-group="symbicort turbuhaler|Turbuhaler"]'); const rows = [...sy.querySelectorAll('[data-brand-pick]')];
        log('brand row: a detail that differs between strengths stays on each strength (Symbicort Turbuhaler: Japan only for 160/4.5)', rows.length === 2 && !sy.querySelector('[data-brand-common] [data-country]') && rows.every(r => r.querySelectorAll('[data-country="th"]').length === 1) && rows.map(r => { const j = r.querySelector('[data-country="jp"]'); return j ? j.dataset.status : 'no chip'; }).join() === 'no chip,current', rows.map(r => r.textContent.slice(0, 40))); }
      it.querySelector('[data-brand-details]').click(); await wait(400);
      log('Details on a strength in the brand row opens that strength', !!document.querySelector('[data-detail-modal]') && document.querySelector('[data-detail-modal] h2').textContent === 'Seretide Accuhaler 50/250', '');
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })); await wait(300);
      sa.querySelector('[data-brand-pick="62"]').click(); await wait(500);
      const picked = document.querySelector('#drug-62');
      log('tapping a strength opens the row and highlights that strength\'s card', !!picked && /ring-sky-400/.test(picked.className) && document.querySelector('[data-brand-group="seretide accuhaler|Diskus"]').dataset.open === '1', !!picked);
      document.querySelector('[data-brand-group="seretide accuhaler|Diskus"] [data-brand-toggle]').click(); await wait(400); }
    sa.querySelector('[data-brand-toggle]').click(); await wait(400);
    const members = [...document.querySelectorAll('#printable-drug-list [data-brand-member="seretide accuhaler|Diskus"] h3')].map(h => h.textContent);
    const sa2 = document.querySelector('[data-brand-group="seretide accuhaler|Diskus"]');
    log('opening the row shows each strength as its own card, right after the row', members.join() === 'Seretide Accuhaler 50/100,Seretide Accuhaler 50/250,Seretide Accuhaler 50/500' && sa2.dataset.open === '1' && sa2.nextElementSibling.querySelector('h3').textContent === 'Seretide Accuhaler 50/100' && document.querySelectorAll('#printable-drug-list h3').length === before + 3, members);
    sa2.querySelector('[data-brand-toggle]').click(); await wait(300);
    const si = document.querySelector('input[type="text"]');
    Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(si, 'seretide'); si.dispatchEvent(new Event('input', { bubbles: true })); await wait(500);
    { const groups = () => [...document.querySelectorAll('#printable-drug-list [data-brand-group]')];
      log('searching shows the matching brand rows only, not their full cards', groups().length === 2 && groups().every(g => g.dataset.open === '0') && document.querySelectorAll('#printable-drug-list h3').length === 0 && groups().map(g => g.querySelector('[data-brand-name]').textContent).join() === 'Seretide Accuhaler,Seretide Evohaler', [groups().length, document.querySelectorAll('#printable-drug-list h3').length]);
      groups()[0].querySelector('[data-brand-toggle]').click(); await wait(400);
      log('while searching, a brand row opens and closes with its button', groups()[0].dataset.open === '1' && document.querySelectorAll('#printable-drug-list h3').length === 3, document.querySelectorAll('#printable-drug-list h3').length);
      groups()[0].querySelector('[data-brand-toggle]').click(); await wait(400);
      log('and closes again', groups()[0].dataset.open === '0' && document.querySelectorAll('#printable-drug-list h3').length === 0, ''); }
    Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(si, ''); si.dispatchEvent(new Event('input', { bubbles: true })); await wait(400);
    log('brand rule: 131 products make 93 rows; Foster MDI 100/6 and Foster 200/6 share a row; devices stay apart', new Set(deviceData.map(brandKey)).size === 93 && brandKey(deviceData.find(d => d.id === 32)) === brandKey(deviceData.find(d => d.id === 33)) && brandKey(deviceData.find(d => d.id === 61)) !== brandKey(deviceData.find(d => d.id === 41)) && strengthLabel(deviceData.find(d => d.id === 62)) === '50/250' && brandLabel('Qvar 100 Aerosol') === 'Qvar Aerosol', new Set(deviceData.map(brandKey)).size);
    groupBtn().click(); await wait(500);
    log('Group strengths off: every strength is listed again and the choice is saved', groupBtn().getAttribute('aria-pressed') === 'false' && !document.querySelector('#printable-drug-list [data-brand-group]') && document.querySelectorAll('#printable-drug-list h3').length === 58 && localStorage.getItem('bdg-group-brand') === '0', document.querySelectorAll('#printable-drug-list h3').length); }
  const setInput = (el, v) => {
    const proto = el.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
    Object.getOwnPropertyDescriptor(proto, 'value').set.call(el, v);
    el.dispatchEvent(new Event('input', { bubbles: true }));
  };
  const esc = async () => { window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })); await wait(300); };
  const cardNames = () => [...document.querySelectorAll('#printable-drug-list h3')].map(h => h.textContent.trim());
  const countText = () => (document.querySelector('[aria-live="polite"]') || {}).textContent || '';
  const btnByText = (txt) => [...document.querySelectorAll('button')].find(b => b.textContent.trim().includes(txt));
  const search = () => document.querySelector('input[type="text"]');
  const pif = () => document.querySelector('input[type="number"]');
  const cardFor = (name) => [...document.querySelectorAll('#printable-drug-list > div')].find(c => c.querySelector('h3') && c.querySelector('h3').textContent.trim() === name);
  const sel = (name) => { const c = cardFor(name); const b = c && [...c.querySelectorAll('button')].find(x => /Select/i.test(x.textContent)); if (b) b.click(); return !!b; };
  const modalDrugNames = () => [...document.querySelectorAll('.fixed h3')].map(h => h.textContent.trim());
  // product detail view: opened from a card's Details button
  const openDetail = async (name) => { const c = cardFor(name); c.querySelector('[data-details]').click(); await wait(400); return document.querySelector('[data-detail-modal]'); };

  // --- Countries toggle (multi-select TH / US / UK / EU): default Thailand
  const btnExact = (txt) => [...document.querySelectorAll('button')].find(b => b.textContent.trim() === txt);
  const chip = (name, r) => { const c = cardFor(name); const el = c && c.querySelector('[data-country="' + r + '"]'); return el ? el.dataset.licensed === '1' : null; };
  const click = async (t) => { btnExact(t).click(); await wait(300); };
  const reg = (k) => document.querySelector('[data-threg="' + k + '"]');
  { const chips = (name) => [...cardFor(name).querySelectorAll('[data-countries] [data-country]')].map(c => c.dataset.country + ':' + c.dataset.status).join();
    log('Thailand view: a Thai-only product shows the TH chip alone (no grey chips for unselected countries); other registrations still show', chips('Aerobidol Inhaler') === 'th:current' && chips('Spiriva HandiHaler') === 'th:current,us:current,uk:current,eu:current,jp:current', [chips('Aerobidol Inhaler'), chips('Spiriva HandiHaler')]);
    await click('US');
    log('with the US selected too, a product not registered there shows the grey US chip', chips('Aerobidol Inhaler') === 'th:current,us:never', chips('Aerobidol Inhaler'));
    await click('US');
    const so = document.querySelector('[data-search-open]'), sb = document.querySelector('[data-search-box]');
    log('computer width: the search box is always open (the magnifier button is for phones) and the guides carry their full names', so.getBoundingClientRect().width === 0 && sb.getBoundingClientRect().width > 150 && [...document.querySelectorAll('[data-guide]')].map(b => b.dataset.guide + '=' + b.textContent.trim()).join() === 'exac=Exacerbation,maint=Initial Maintenance,follow=Follow-up,device=Device Guide,spacer=Spacer & Mask,steroid=Steroid Dose', [...document.querySelectorAll('[data-guide]')].map(b => b.textContent.trim())); }
  log('count shows the database total', /\(131 in database\)/.test(countText()), countText());
  { const fc = cardFor('Ventolin Evohaler 100 mcg');
    log('tile cards keep the full facts: flow, spacer, price, pack, expiry, dose, last-checked and ventilator use, plus a Details button', !!fc.querySelector('[data-card-facts]') && !!fc.querySelector('[data-flow]') && !!fc.querySelector('[data-card-pack]') && !!fc.querySelector('[data-card-exp]') && /Volumatic/.test(fc.querySelector('[data-spacer]').textContent) && !!fc.querySelector('[data-checked]') && /Ventilator/.test(fc.textContent) && /Rec. Dose/.test(fc.textContent) && !!fc.querySelector('[data-details]'), fc.textContent.slice(0, 200));
    { const ac = fc.querySelector('[data-card-actions]'), sb = ac.querySelector('button').getBoundingClientRect(), db = ac.querySelector('[data-details]').getBoundingClientRect();
      log('tile card: Details button sits directly under the Select button', db.top >= sb.bottom && db.top - sb.bottom < 12 && Math.abs(db.right - sb.right) < 2, [sb.bottom, db.top, sb.right, db.right]); }
    const dm = await openDetail('Ventolin Evohaler 100 mcg');
    const r = dm && dm.querySelector('[data-card-pack]');
    log('detail view opens from the Details button, with pack size on one line', !!dm && dm.querySelector('h2').textContent === 'Ventolin Evohaler 100 mcg' && r && /200 puffs/.test(r.textContent) && Math.abs(r.children[0].getBoundingClientRect().top - r.children[1].getBoundingClientRect().top) < 4, dm && dm.textContent.slice(0, 120));
    log('detail view shows the last-checked line', /Last checked: Thai FDA 7 Oct 2026 · label 8 Oct 2026 · price 7 Oct 2026/.test(dm.querySelector('[data-checked]').textContent), dm.querySelector('[data-checked]').textContent);
    log('detail view shows the spacer (Ventolin: Volumatic), expiry and ventilator use', /Volumatic/.test(dm.querySelector('[data-spacer]').textContent) && /Until Expiry Date/.test(dm.querySelector('[data-card-exp]').textContent) && /Compatible/.test(dm.querySelector('[data-detail-vent]').textContent), '');
    { const tg = dm.querySelector('[data-src-toggle]'); const before = dm.querySelectorAll('[data-src]').length;
      tg.click(); await wait(250);
      log('detail view: Source lines are hidden until Show sources is pressed, and the choice is saved', before === 0 && dm.querySelectorAll('[data-src]').length >= 14 && tg.getAttribute('aria-pressed') === 'true' && /Hide sources/.test(tg.textContent) && localStorage.getItem('bdg-show-sources') === '1', [before, dm.querySelectorAll('[data-src]').length]); }
    { const sl = (k) => dm.querySelector('[data-src="' + k + '"]');
      const href = (k, n = 0) => { const a = sl(k) && sl(k).querySelectorAll('a[data-src-link]')[n]; return a ? a.getAttribute('href') : ''; };
      const keys = ['indications', 'dose', 'flow', 'spacer', 'vent', 'price', 'pack', 'expiry', 'reg-th', 'reg-us', 'reg-uk', 'reg-eu', 'reg-jp', 'maker'];
      log('detail view: every fact has a Source line', keys.every(k => sl(k) && /^Source:/.test(sl(k).textContent)), keys.filter(k => !sl(k)));
      log('source links open in a new tab and none is empty', [...dm.querySelectorAll('a[data-src-link]')].length >= 9 && [...dm.querySelectorAll('a[data-src-link]')].every(a => /^https:\/\//.test(a.getAttribute('href')) && a.target === '_blank' && /noopener/.test(a.rel)), dm.querySelectorAll('a[data-src-link]').length);
      log('Ventolin sources: Thai FDA register and NLEM, DailyMed and MHRA searches for Ventolin, HPRA, PMDA, reference price, Dhand 1996', /pertento\.fda\.moph\.go\.th/.test(href('reg-th')) && /ndp\.fda\.moph\.go\.th/.test(href('reg-th', 1)) && /accessdata\.fda\.gov/.test(href('reg-us')) && /dailymed.*query=Ventolin/.test(href('reg-us', 1)) && /products\.mhra\.gov\.uk\/search\/\?search=Ventolin/.test(href('reg-uk')) && /hpra\.ie.*authorised-medicines\?data=/.test(href('reg-eu')) && JSON.parse(atob(href('reg-eu').split('data=')[1])).query === 'Ventolin' && /pmda\.go\.jp/.test(href('reg-jp')) && /dmsic\.moph\.go\.th/.test(href('price')) && /10\.1164/.test(href('vent')), [href('reg-us', 1), href('reg-uk'), href('price'), href('vent')]);
      log('MDI flow cites Laube 2011, and product-information facts say no link is recorded', /Laube 2011/.test(sl('flow').textContent) && /10\.1183/.test(href('flow')) && !dm.querySelector('[data-src-none]') && /no link recorded/.test(sl('pack').textContent) && /UK SmPC/.test(sl('spacer').textContent) && !sl('pack').querySelector('a'), sl('flow').textContent);
    }
    const th = dm.querySelector('[data-detail-country="th"]'), us = dm.querySelector('[data-detail-country="us"]');
    log('detail view lists all five countries with status, holder and detail; Thailand with the NLEM type; plus the manufacturer', dm.querySelectorAll('[data-detail-country]').length === 5 && /Registered/.test(th.textContent) && /GlaxoSmithKline \(Thailand\) Ltd\./.test(th.querySelector('[data-detail-holder]').textContent) && /NLEM/.test(th.textContent) && /Licensed for: /.test(th.querySelector('[data-detail-status]').textContent) && us.querySelector('[data-detail-holder]').textContent === 'GlaxoSmithKline' && /Glaxo Wellcome S\.A\., Spain/.test(dm.querySelector('[data-detail-maker]').textContent), th.textContent.slice(0, 160));
    await esc();
    log('Escape closes the detail view', !document.querySelector('[data-detail-modal]'), '');
    fc.querySelector('h3').click(); await wait(400);
    const viaCard = !!document.querySelector('[data-detail-modal]');
    await esc(); fc.querySelector('button').click(); await wait(300);
    log('clicking the card opens the detail view; clicking a button on the card (Select) does not', viaCard && !document.querySelector('[data-detail-modal]') && !!document.querySelector('[data-select-bar]'), viaCard);
    btnByText('Clear').click(); await wait(300); }
  { sel('Ventolin Evohaler 100 mcg'); await wait(300); const bar = document.querySelector('[data-select-bar]'); log('selection bar is compact and needs no sideways scroll', bar && bar.getBoundingClientRect().height <= 80 && bar.scrollWidth <= bar.clientWidth && ![...bar.querySelectorAll('button')].some(x => x.getBoundingClientRect().right > window.innerWidth), bar && bar.getBoundingClientRect().height); btnByText('Clear').click(); await wait(300); }
  { sel('Ventolin Evohaler 100 mcg'); await wait(300); [...document.querySelectorAll('[data-select-bar] .grid button')][3].click(); await wait(600); const fw = document.querySelector('[data-fit-width]'); log('Patient Sheet preview fits its box (no sideways scroll)', fw && fw.scrollWidth <= fw.clientWidth + 1 && fw.parentElement.scrollWidth <= fw.parentElement.clientWidth + 1, fw && [fw.scrollWidth, fw.clientWidth]); await esc(); btnByText('Clear').click(); await wait(300); }
  log('FDA label with the tick icon (no emoji) on the registration filter', document.querySelector('[data-threg-label]').textContent.trim() === 'FDA' && !!document.querySelector('[data-threg-label] svg'), document.querySelector('[data-threg-label]').textContent);
  log('NLEM only sits right after FDA', document.querySelector('[data-threg-group]').nextElementSibling === document.querySelector('[data-nlem-group]') && /NLEM only/.test(document.querySelector('[data-nlem-group]').textContent), '');
  log('default: FDA = Currently, 58 registered products', cardNames().length === 58 && /58 of 58/.test(countText()) && reg('current').getAttribute('aria-pressed') === 'true' && reg('past').getAttribute('aria-pressed') === 'false' && !document.querySelector('#printable-drug-list [data-th-cancelled]'), countText());
  reg('current').click(); await wait(300);
  log('the last status cannot be turned off', reg('current').getAttribute('aria-pressed') === 'true', '');
  reg('past').click(); await wait(300); reg('current').click(); await wait(300);
  log('Past only: 43 previously registered, all with the chip', cardNames().length === 43 && document.querySelectorAll('#printable-drug-list [data-th-cancelled="1"]').length === 43, countText());
  reg('never').click(); await wait(300);
  log('Past + Never: adds the 30 never registered in Thailand (QVAR RediHaler, no chip)', cardNames().length === 73 && cardNames().includes('QVAR RediHaler 40') && !cardFor('QVAR RediHaler 40').querySelector('[data-th-cancelled]'), countText());
  reg('never').click(); await wait(300); reg('current').click(); await wait(300);
  log('Currently + Past shows all 101', cardNames().length === 101 && /101 of 101/.test(countText()), countText());
  log('no-longer-registered products carry the TH † chip', document.querySelectorAll('#printable-drug-list [data-th-cancelled="1"]').length === 43 && !!cardFor('Pulmicort Turbuhaler 200 mcg').querySelector('[data-th-cancelled="1"]') && !cardFor('Spiriva HandiHaler').querySelector('[data-th-cancelled]'), document.querySelectorAll('#printable-drug-list [data-th-cancelled="1"]').length);
  log('previously registered chip: TH †, with the detail on hover', cardFor('Pulmicort Turbuhaler 200 mcg').querySelector('[data-th-cancelled]').textContent.trim() === 'TH †' && /previously registered/.test(cardFor('Pulmicort Turbuhaler 200 mcg').querySelector('[data-th-cancelled]').title), '');
  log('TH view hides products never registered in Thailand', !cardNames().some(n => /QVAR|Bufomix|Combivent Respimat|Foster 200\/6/.test(n)), cardNames());
  log('cards show licensed countries', chip('Seretide Accuhaler 50/100', 'th') === true && chip('Breztri Aerosphere', 'us') === true && chip('Ventolin Evohaler 100 mcg', 'eu') === true, '');
  await click('US');
  log('TH + US: adds US-licensed products (QVAR), not EU-only ones (Bufomix)', cardNames().includes('QVAR RediHaler 40') && !cardNames().includes('Bufomix Easyhaler 160/4.5'), countText());
  log('QVAR chips: not TH, licensed US', chip('QVAR RediHaler 40', 'th') === false && chip('QVAR RediHaler 40', 'us') === true, '');
  await click('TH');
  await click('COPD');
  log('US only: COPD only for Advair Diskus 250/50 strength', !cardNames().includes('Seretide Accuhaler 50/100') && cardNames().includes('Seretide Accuhaler 50/250') && !cardNames().includes('Seretide Accuhaler 50/500'), cardNames().filter(n => /Seretide/.test(n)));
  // status filter is Currently + Past here: US-discontinued products are listed and marked; with Past off they are hidden
  { const oc = cardFor('Onbrez Breezhaler 150 mcg'), us = oc && oc.querySelector('[data-country="us"]');
    log('US view: Onbrez (discontinued in the US) is marked US †; NLEM is not offered without Thailand', !!us && us.getAttribute('data-status') === 'past' && us.textContent.trim() === 'US †' && oc.querySelector('[data-country="th"]').textContent.trim() === 'TH †' && !document.querySelector('[data-nlem-group]') && !/NLEM/.test(document.getElementById('printable-drug-list').textContent) && /previously marketed, now discontinued/.test(us.title) && /Drugs@FDA/.test(us.title) && statusIn(deviceData.find(d => d.id === 303), 'us') === 'past', us && us.textContent);
    reg('past').click(); await wait(300);
    log('US view, status Currently only: US-discontinued products are not listed', !cardNames().some(n => /Onbrez|Seebri|Ultibro/.test(n)) && cardNames().includes('Spiriva HandiHaler'), cardNames().filter(n => /Onbrez|Seebri|Ultibro/.test(n)));
    reg('past').click(); await wait(300);
    log('status per country: EU past = Atrovent inhaler and Combivent UDV; UK has none past; Thai statuses unchanged', deviceData.filter(d => statusIn(d, 'eu') === 'past').map(d => d.id).sort((a, b) => a - b).join() === '23,421,535,536,545' && deviceData.every(d => statusIn(d, 'uk') !== 'past') && deviceData.filter(d => statusIn(d, 'us') === 'past').length === 4 && deviceData.filter(d => statusIn(d, 'th') === 'past').length === 43, ''); }
  await click('UK'); await click('US');
  log('UK only: COPD for Seretide 500 Accuhaler only; Trelegy 100 COPD', cardNames().includes('Seretide Accuhaler 50/500') && !cardNames().includes('Seretide Accuhaler 50/250') && cardNames().includes('Trelegy Ellipta 100/62.5/25 mcg'), cardNames().filter(n => /Seretide|Trelegy/.test(n)));
  await click('COPD'); await click('Asthma');
  log('UK only: Trelegy 100 and Symbicort pMDI 160 not listed for asthma', !cardNames().includes('Trelegy Ellipta 100/62.5/25 mcg') && !cardNames().includes('Symbicort Rapihaler 160/4.5 mcg'), cardNames().filter(n => /Trelegy|Rapihaler/.test(n)));
  await click('Asthma');
  await click('UK');
  log('the last country can be switched off: nothing is listed, with a note to choose a country', btnExact('UK').getAttribute('aria-pressed') === 'false' && cardNames().length === 0 && /No country selected/.test(document.querySelector('[data-empty-note]').textContent), cardNames().length);
  const allBtn = () => document.querySelector('[data-country-all]');
  allBtn().click(); await wait(400);
  log('All selects every country', allBtn().getAttribute('aria-pressed') === 'true' && ['TH', 'US', 'UK', 'EU'].every(c => btnExact(c).getAttribute('aria-pressed') === 'true'), '');
  allBtn().click(); await wait(400);
  log('All pressed again clears every country and lists nothing', allBtn().getAttribute('aria-pressed') === 'false' && ['TH', 'US', 'UK', 'EU'].every(c => btnExact(c).getAttribute('aria-pressed') === 'false') && cardNames().length === 0, cardNames().length);
  allBtn().click(); await wait(400);
  log('all four countries: all 131 shown', cardNames().length === 131, countText());

  log('app renders 131 drugs', cardNames().length === 131, countText());

  // --- Search synonyms
  for (const [q, mustHave] of [
    ['salbutamol', ['Ventolin Evohaler 100 mcg', 'Salbutamol Nebules 2.5 mg', 'Combivent Respimat', 'Aerotamol MDI 100 mcg']],
    ['albuterol', ['Aerotamol MDI 100 mcg', 'Ventolin Evohaler 100 mcg']],
    ['beclometasone', ['QVAR RediHaler 40', 'Foster MDI 100/6', 'Trimbow MDI 87/5/9']],
    ['beclomethasone', ['Foster 200/6', 'QVAR RediHaler 40']],
    ['glycopyrronium', ['Breztri Aerosphere', 'Seebri Breezhaler 50 mcg']],
    ['glycopyrrolate', ['Ultibro Breezhaler 110/50 mcg', 'Breztri Aerosphere']],
    ['albute', ['Aerotamol MDI 100 mcg']],
    ['ซิมบิคอร์ท', ['Symbicort Turbuhaler 160/4.5 mcg', 'Symbicort Rapihaler 160/4.5 mcg']],
    ['บูเดโซไนด์', ['Pulmicort Respules', 'Giona Easyhaler 200 mcg', 'DuoResp Spiromax 160/4.5']],
    ['ซัลบูทามอล', ['Ventolin Evohaler 100 mcg', 'Combivent UDV']],
    ['เรสพิแมท', ['Spiriva Respimat 2.5 mcg', 'Spiolto Respimat 2.5/2.5 mcg']],
    ['tiotropium', ['Spiriva HandiHaler', 'Tropoair 18 mcg (LupinHaler)', 'Spiolto Respimat 2.5/2.5 mcg']],
    ['duoresp', ['DuoResp Spiromax 160/4.5', 'DuoResp Spiromax 320/9']],
  ]) {
    setInput(search(), q); await wait(250);
    const names = cardNames();
    const missing = mustHave.filter(n => !names.includes(n));
    log(`search "${q}" finds all spellings`, missing.length === 0, { missing });
  }
  setInput(search(), ''); await wait(250);

  // --- Inspiratory-flow filter
  setInput(pif(), '45'); await wait(250);
  log('flow 45 L/min hides only Breezhaler (needs 50)', !cardNames().some(n => /Breezhaler/.test(n)) && cardNames().some(n => /Turbuhaler/.test(n)) && cardNames().some(n => /HandiHaler/.test(n)), countText());
  setInput(pif(), '25'); await wait(250);
  log('flow 25 L/min keeps HandiHaler (needs 20), hides other DPIs', cardNames().includes('Spiriva HandiHaler') && !cardNames().some(n => /Accuhaler|Ellipta|Breezhaler|Easyhaler|Turbuhaler|Diskus/.test(n)), countText());
  setInput(pif(), ''); await wait(250);
  log('clearing flow restores all 131', cardNames().length === 131, countText());

  // --- NLEM filter, badges, cost range, labels
  btnByText('NLEM only').click(); await wait(250);
  log('NLEM only shows 45 drugs (registered in Thailand only)', cardNames().length === 45 && !cardNames().includes('Pulmicort Turbuhaler 200 mcg') && !cardNames().includes('Bufomix Easyhaler 160/4.5'), cardNames().length);
  btnByText('NLEM only').click(); await wait(250);
  const firstCard = document.querySelector('#printable-drug-list > div');
  log('cost shown as $$$$ range, no amounts', /\${4}/.test(firstCard.textContent) && !/฿\s?\d|≈/.test(document.getElementById('root').innerText), '');
  const anoroPrice = cardFor('Anoro Ellipta 62.5/25 mcg').querySelector('[aria-label^="Approx. price"]');
  log('Anoro (reference price 340 THB) shows band 2/4', anoroPrice && /2\/4/.test(anoroPrice.getAttribute('aria-label')), anoroPrice && anoroPrice.getAttribute('aria-label'));
  log('cards show NLEM badge', /NLEM|Not in NLEM/.test(firstCard.textContent), '');
  log('header has no separate age note (ages shown on each card)', !/ages 12 and over/.test(document.querySelector('header').textContent), '');
  log('dose labels say 12+', /12\+/.test(firstCard.textContent), '');
  // HTML text only: labels drawn inside the device SVGs scale with the icon
  const tiny = [...document.querySelectorAll('#root *')].filter(el => !el.closest('svg') && el.childElementCount === 0 && el.textContent.trim() && parseFloat(getComputedStyle(el).fontSize) < 10);
  log('no text smaller than 10px', tiny.length === 0, tiny.slice(0, 5).map(el => `${el.tagName} ${getComputedStyle(el).fontSize} "${el.textContent.trim().slice(0, 30)}" .${el.className}`));
  log('language button has no flag emoji', !!btnByText('ไทย') && !/🇹🇭|🇬🇧/.test(document.body.innerText), '');

  // --- Disclaimer and references
  const disc = document.getElementById('disclaimer-heading');
  log('disclaimer section with 5 points', disc && disc.parentElement.querySelectorAll('li').length === 5, '');
  log('header links to disclaimer', !!document.querySelector('header a[href="#disclaimer-heading"]'), '');
  log('references collapsed by default', !document.getElementById('refs-list') && document.getElementById('refs-heading').textContent.includes('(22)'), '');
  document.querySelector('#refs-heading button').click(); await wait(250);
  log('22 references listed when opened', document.querySelectorAll('#refs-list ol > li').length === 22, '');
  document.querySelector('#refs-heading button').click(); await wait(200);

  // --- One drug selected: Patient Sheet + Equivalent Drugs
  log('can select Seretide Accuhaler 50/250', sel('Seretide Accuhaler 50/250'), '');
  await wait(300);
  log('Equivalent Drugs button with 1 selected', !!btnByText('Equivalent Drugs'), '');
  const sheetBtn = btnByText('Patient Sheet');
  log('Patient Sheet button with 1 selected', !!sheetBtn, '');
  sheetBtn.click(); await wait(500);
  let sheet = document.getElementById('patient-sheet-print');
  log('patient sheet renders', !!sheet, '');
  log('sheet in Thai with plain-language dose', sheet && /สูดยา 1 ครั้ง เช้าและเย็น/.test(sheet.textContent), sheet && sheet.textContent.slice(0, 200));
  log('sheet has mouth rinse and 1669', sheet && /บ้วนปาก/.test(sheet.textContent) && /1669/.test(sheet.textContent), '');
  btnByText('English').click(); await wait(300);
  sheet = document.getElementById('patient-sheet-print');
  log('sheet switches to English', /1 inhalation twice a day, morning and evening/.test(sheet.textContent), '');
  const relSel = [...document.querySelectorAll('select')].find(s => [...s.options].some(o => /Ventolin/.test(o.textContent)));
  relSel.value = [...relSel.options].find(o => /Ventolin/.test(o.textContent)).value;
  relSel.dispatchEvent(new Event('change', { bubbles: true })); await wait(300);
  log('chosen reliever named on sheet', /use your reliever: Ventolin/.test(document.getElementById('patient-sheet-print').textContent), '');
  // Asthma action plan (page 2, on by default for asthma)
  let planEl = document.querySelector('#patient-sheet-print .plan-page');
  log('asthma action plan added as page 2', !!planEl && /GREEN/.test(planEl.textContent) && /YELLOW/.test(planEl.textContent) && /RED/.test(planEl.textContent), '');
  log('plan (SABA reliever): reliever named, seek care if needed again within 3 hours', planEl && /Ventolin/.test(planEl.textContent) && /again within 3 hours/.test(planEl.textContent), planEl && planEl.textContent.slice(0, 300));
  const pefIn = [...document.querySelectorAll('input[type="number"]')].find(i => i.placeholder === 'L/min');
  setInput(pefIn, '500'); await wait(300);
  planEl = document.querySelector('#patient-sheet-print .plan-page');
  log('personal best PEF 500 → zones 400 / 300–400 / below 300', /above 400 L\/min/.test(planEl.textContent) && /300–400 L\/min/.test(planEl.textContent) && /below 300 L\/min/.test(planEl.textContent), '');
  btnByText('COPD').click(); await wait(300);
  const copdPlan = document.querySelector('#patient-sheet-print .plan-page');
  log('COPD action plan on page 2 (flare-up: prednisolone 40 mg 5 days, 1669)', !!copdPlan && /COPD Action Plan/.test(copdPlan.textContent) && /usually 40 mg for 5 days/.test(copdPlan.textContent) && /1669/.test(copdPlan.textContent), copdPlan && copdPlan.textContent.slice(0, 200));
  // preview shows the whole sheet (not squeezed into the space left over) and the window scrolls
  { const pv = document.querySelector('[data-sheet-preview]'), fw = pv.querySelector('[data-fit-width]'), sc = pv.parentElement;
    log('sheet preview is not squeezed: whole sheet shown and the window scrolls', Math.abs(pv.clientHeight - fw.offsetHeight) <= 2 && fw.offsetHeight > 300 && sc.scrollHeight > sc.clientHeight, [pv.clientHeight, fw.offsetHeight, sc.scrollHeight, sc.clientHeight]); }
  // Save PDF and the Print fallback: catch the file the app hands to the browser
  { let saved = null;
    const realClick = HTMLAnchorElement.prototype.click, realPrint = window.print, realCanShare = navigator.canShare;
    HTMLAnchorElement.prototype.click = function () { if (this.download) { saved = { name: this.download, bytes: fetch(this.href).then(r => r.arrayBuffer()) }; return; } return realClick.call(this); };
    try { Object.defineProperty(navigator, 'canShare', { value: undefined, configurable: true }); } catch (e) {}
    const waitSaved = async () => { for (let i = 0; i < 300 && !saved; i++) await wait(100); return saved; };
    const toastText = () => { const el = document.querySelector('[data-toast]'); return el ? el.textContent : ''; };
    try {
      document.querySelector('[data-sheet-pdf]').click();
      let got = await waitSaved();
      const pdf = got ? new TextDecoder('latin1').decode(await got.bytes) : '';
      // every cross-reference entry must point at the start of its object
      const xrefAt = +((/startxref\n(\d+)\n%%EOF\n$/.exec(pdf) || [])[1] || -1);
      const rows = xrefAt > 0 ? pdf.slice(xrefAt).split('\n').slice(3).filter(l => / 00000 n $/.test(l)) : [];
      const xrefOk = rows.length === 8 && rows.every((l, i) => pdf.startsWith((i + 1) + ' 0 obj\n', parseInt(l, 10)));
      log('Save PDF: A4 file with 2 pages (sheet, action plan)', got && /\.pdf$/.test(got.name) && pdf.startsWith('%PDF-1.4') && /\/Count 2 /.test(pdf) && pdf.split('/DCTDecode').length === 3 && pdf.split('/MediaBox [0 0 595.28 841.89]').length === 3 && xrefOk, got ? [got.name, pdf.length, rows.length, xrefOk, pdf.slice(0, 120)] : 'no file');
      for (let i = 0; i < 30 && !/A4 PDF/.test(toastText()); i++) await wait(100);
      log('Save PDF: confirmation message', /saved as an A4 PDF/.test(toastText()), toastText());
      // printing works: the print dialog opens and no file is saved
      saved = null;
      window.print = () => { window.dispatchEvent(new Event('beforeprint')); window.dispatchEvent(new Event('afterprint')); };
      document.querySelector('[data-sheet-print]').click(); await wait(2200);
      log('Print: when the print dialog opens, no PDF is saved', !saved && !/blocked/.test(toastText()), [saved && saved.name, toastText()]);
      // printing blocked (print() ignored, as in a sandboxed frame): falls back to the PDF and says so
      window.print = () => {};
      document.querySelector('[data-sheet-print]').click();
      got = await waitSaved();
      for (let i = 0; i < 30 && !/blocked/.test(toastText()); i++) await wait(100);
      const tb = document.querySelector('[data-toast]');
      log('Print: where printing is blocked, the sheet is saved as a PDF and a message says so', got && /\.pdf$/.test(got.name) && /Printing is blocked/.test(toastText()), [got && got.name, toastText()]);
      // (width and wrapping, not position: the message slides in and a headless page does not run animations)
      log('message is never wider than the screen and can wrap', tb && tb.offsetWidth <= window.innerWidth - 8 && getComputedStyle(tb).maxWidth !== 'none' && getComputedStyle(tb.querySelector('span')).whiteSpace !== 'nowrap', tb && [tb.offsetWidth, getComputedStyle(tb).maxWidth]);
      log('print mode is switched off again', !document.documentElement.classList.contains('printing-sheet'), '');
    } finally {
      HTMLAnchorElement.prototype.click = realClick; window.print = realPrint;
      try { Object.defineProperty(navigator, 'canShare', { value: realCanShare, configurable: true }); } catch (e) {}
    }
  }
  await esc();
  log('Escape closes the sheet', !document.getElementById('patient-sheet-print'), '');

  // --- Two selected: Dose Conversion
  log('can select Spiolto as second drug', sel('Spiolto Respimat 2.5/2.5 mcg'), ''); await wait(300);
  const convBtn = btnByText('Dose Conversion');
  log('Dose Conversion button with 2 selected', !!convBtn, '');
  convBtn.click(); await wait(400);
  log('Dose Conversion guide opens', [...document.querySelectorAll('h2')].some(h => h.textContent === 'Dose Conversion Guide'), '');
  log('Seretide→Spiolto shows GOLD ICS-withdrawal warning', /ICS withdrawal \(GOLD\)/.test(document.body.innerText), '');
  log('Seretide→Spiolto shows the NLEM condition', /NLEM condition: COPD group B/.test(document.body.innerText), '');
  await esc();
  btnByText('Clear').click(); await wait(300);

  // --- Device Guide
  log('card view: at most 3 cards per row', !/xl:grid-cols-4/.test(document.getElementById('printable-drug-list').className) && /lg:grid-cols-3/.test(document.getElementById('printable-drug-list').className), document.getElementById('printable-drug-list').className);
  // --- Accuhaler icons show each product's own strength
  { const lab = (name) => { const c = cardFor(name), g = c && c.querySelector('[data-icon-label]'); return g ? g.getAttribute('data-icon-label') + ':' + g.children.length : 'none'; };
    const got = ['Seretide Accuhaler 50/100', 'Seretide Accuhaler 50/250', 'Seretide Accuhaler 50/500'].map(lab);
    log('Seretide Accuhaler icons show 100, 250 and 500', got.join() === '100:3,250:3,500:3', got);
    log('icon number comes from the product: Serevent Diskus 50; other devices have none', iconLabel(deviceData.find(d => d.id === 24)) === '50' && deviceData.filter(d => d.shape !== 'Diskus').every(d => iconLabel(d) === null), iconLabel(deviceData.find(d => d.id === 24))); }
  // --- Thai licence holder under the product name (Thai FDA register)
  { const hd = (name) => { const c = cardFor(name), e = c && c.querySelector('[data-holder-name]'); return e ? e.textContent.trim() : 'none'; };
    log('cards show the Thai licence holder under the name', hd('Ventolin Evohaler 100 mcg') === 'GlaxoSmithKline (Thailand) Ltd.' && hd('Aeronide 200 mcg') === 'Inpac Pharma Co., Ltd.' && hd('Budecort-200 Inhaler') === 'Healol Pharmaceuticals Co., Ltd.' && hd('Salbutamol Nebules 2.5 mg') === 'Licence holder: Unknown' && /Glaxo Wellcome S\.A\., Spain/.test(cardFor('Ventolin Evohaler 100 mcg').querySelector('[data-holder]').title), [hd('Ventolin Evohaler 100 mcg'), hd('Aeronide 200 mcg'), hd('Salbutamol Nebules 2.5 mg')]);
    const noHolder = deviceData.filter(d => !LICENCE_HOLDER[d.id]).map(d => d.id).sort((x, y) => x - y);
    const en = { isTh: false, unknown: 'Unknown', holderLabel: 'Licence holder', holderNone: 'Not registered in Thailand' }, th = { ...en, isTh: true };
    log('no licence holder only where there is no Thai registration; English and Thai names', noHolder.join() === '16,17,33,261,291,501,502,503,504,507,508,509,510,512,513,514,515,516,518,522,524,525,526,527,528,529,530,542,543,544,546' && holderText(deviceData.find(d => d.id === 261), en) === 'Not registered in Thailand' && holderText(deviceData.find(d => d.id === 422), en) === 'Ikaros Pharmaceutical Co., Ltd.' && holderText(deviceData.find(d => d.id === 435), en) === 'Thitiratsanon Co., Ltd.' && holderText(deviceData.find(d => d.id === 422), th) === 'บริษัท อิคารอส ฟาร์มาซูติคัล จำกัด' && holderText(deviceData.find(d => d.id === 1), th) === 'บริษัท แกล็กโซสมิทไคล์น (ประเทศไทย) จำกัด' && deviceData.filter(d => LICENCE_HOLDER[d.id]).every(d => thaiStatus(d) !== 'never'), noHolder);
    // marked with its country, also in list view, and can be hidden (remembered on the device)
    const wasOn = ['TH', 'US', 'UK', 'EU'].filter(c => btnExact(c).getAttribute('aria-pressed') === 'true');
    const setCountries = async (want) => { for (const c of ['TH', 'US', 'UK', 'EU', 'JP']) { if ((btnExact(c).getAttribute('aria-pressed') === 'true') !== want.includes(c) && want.includes(c)) await click(c); } for (const c of ['TH', 'US', 'UK', 'EU', 'JP']) { if ((btnExact(c).getAttribute('aria-pressed') === 'true') !== want.includes(c)) await click(c); } };
    await setCountries(['TH']);
    for (let i = 0; i < 40 && !cardFor('Ventolin Evohaler 100 mcg'); i++) await wait(100);
    const vc = cardFor('Ventolin Evohaler 100 mcg');
    log('licence holder carries the TH country chip', vc.querySelector('[data-holder] [data-holder-country]').textContent === 'TH' && vc.querySelectorAll('[data-holder-line]').length === 1 && /each country selected/.test(vc.querySelector('[data-holder]').title), '');
    // other countries: one line per selected country, Unknown where the holder has not been read, none where not licensed
    await setCountries(['TH', 'US', 'UK', 'EU']);
    for (let i = 0; i < 40 && !cardFor('QVAR RediHaler 40'); i++) await wait(100);
    const lines = (name) => { const c = cardFor(name); return c ? [...c.querySelectorAll('[data-holder-line]')].map(l => l.getAttribute('data-holder-line') + '=' + l.querySelector('[data-holder-name]').textContent).join(' / ') : 'no card'; };
    log('all countries selected: Ventolin lists its holder in TH, US, UK and EU', lines('Ventolin Evohaler 100 mcg') === 'th=GlaxoSmithKline (Thailand) Ltd. / us=GlaxoSmithKline / uk=GlaxoSmithKline UK / eu=GlaxoSmithKline (Ireland) Limited', lines('Ventolin Evohaler 100 mcg'));
    log('not licensed in a country: no line; licensed but not read: Unknown', lines('Aeronide 200 mcg') === 'th=Inpac Pharma Co., Ltd.' && lines('QVAR RediHaler 40') === 'us=Norton (Waterford)' && cardFor('QVAR RediHaler 40').querySelector('[data-country-rest] [data-country="th"]').getAttribute('data-status') === 'never' && cardFor('QVAR RediHaler 40').querySelector('[data-country-rest] [data-country="th"]').textContent.trim() === 'TH ⊘' && document.querySelector('[data-threg="never"]').textContent.includes('⊘') && document.querySelector('[data-threg="past"]').textContent.includes('†') && /uk=GlaxoSmithKline UK \/ eu=/.test(lines('Seretide Accuhaler 50/250')) && /eu=GlaxoSmithKline \(Ireland\) Limited/.test(lines('Seretide Accuhaler 50/250')) && /uk=Orion Corporation \/ eu=Orion Corporation/.test(lines('Giona Easyhaler 200 mcg')) && lines('Salbutamol Nebules 2.5 mg') === 'th=Licence holder: Unknown / us=Unknown / uk=Unknown / eu=Unknown', [lines('Aeronide 200 mcg'), lines('QVAR RediHaler 40'), lines('Seretide Accuhaler 50/250'), lines('Giona Easyhaler 200 mcg')]);
    const ukMissing = deviceData.filter(d => licenceIn(d, 'uk') && !HOLDER_ABROAD.uk[d.id]).map(d => d.id), usMissing = deviceData.filter(d => licenceIn(d, 'us') && !HOLDER_ABROAD.us[d.id]).map(d => d.id), euMissing = deviceData.filter(d => licenceIn(d, 'eu') && !HOLDER_ABROAD.eu[d.id]).map(d => d.id).sort((x, y) => x - y);
    log('holders are filled in for every licensed product except the generic nebules entry', ukMissing.join() === '17' && usMissing.join() === '17' && euMissing.join() === '17', [ukMissing, usMissing, euMissing]);
    const abroadOk = ['us', 'uk', 'eu'].every(r => Object.keys(HOLDER_ABROAD[r]).every(id => statusIn(deviceData.find(d => d.id === +id), r) !== 'never'));
    log('every foreign holder belongs to a product that is or was registered in that country', abroadOk, '');
    // one line per country: status chip, holder, and the NLEM type on the Thailand line; the rest as chips on one row
    const vv = cardFor('Ventolin Evohaler 100 mcg'), sv = cardFor('Aeronide 200 mcg');
    log('Thailand line carries the NLEM type; each country appears exactly once per card', /NLEM/.test(vv.querySelector('[data-holder-line="th"]').textContent) && !/NLEM/.test(vv.querySelector('[data-holder-line="us"]').textContent) && [...document.querySelectorAll('#printable-drug-list > div')].every(c => ['th', 'us', 'uk', 'eu'].every(r => c.querySelectorAll('[data-country="' + r + '"]').length === 1) && c.querySelectorAll('[data-country="jp"]').length <= 1 && !c.querySelector('[data-country="jp"][data-status="never"]')) && sv.querySelectorAll('[data-country-rest] [data-country]').length === 3, [vv.querySelector('[data-holder-line="th"]').textContent, sv.querySelectorAll('[data-country-rest] [data-country]').length]);
    await setCountries(wasOn); await wait(300);
    document.querySelector('button[aria-label="List View"]').click(); await wait(300);
    const rowsWith = [...document.querySelectorAll('#printable-drug-list > div')].filter(r => r.querySelector('[data-holder-name]')).length;
    log('list view rows show the licence holder too', rowsWith === cardNames().length && hd('Ventolin Evohaler 100 mcg') === 'GlaxoSmithKline (Thailand) Ltd.', [rowsWith, cardNames().length]);
    const tg = document.querySelector('[data-holder-toggle] button');
    tg.click(); await wait(300);
    const hiddenList = document.querySelectorAll('#printable-drug-list [data-holder]').length;
    document.querySelector('button[aria-label="Grid View"]').click(); await wait(300);
    log('Licence holder button hides the names in list and card view (chips stay on one row), and the choice is saved', hiddenList === 0 && document.querySelectorAll('#printable-drug-list [data-holder]').length === 0 && [...document.querySelectorAll('#printable-drug-list > div')].every(c => { const on = ['TH', 'US', 'UK', 'EU', 'JP'].filter(x => btnExact(x).getAttribute('aria-pressed') === 'true').map(x => x.toLowerCase()); const ch = [...c.querySelectorAll('[data-country-rest] [data-country]')]; return on.every(r => ch.filter(x => x.dataset.country === r).length === 1) && ch.every(x => x.dataset.status !== 'never' || on.includes(x.dataset.country)); }) && tg.getAttribute('aria-pressed') === 'false' && localStorage.getItem('bdg-show-holder') === '0', [hiddenList, localStorage.getItem('bdg-show-holder')]);
    tg.click(); await wait(300);
    log('Licence holder button shows the line again', document.querySelectorAll('#printable-drug-list [data-holder]').length === cardNames().length && localStorage.getItem('bdg-show-holder') === '1', '');
    log('register corrections: Ultibro is a past registration (cancelled 15 Sep 2025)', thaiStatus(deviceData.find(d => d.id === 14)) === 'past' && TH_CANCELLED[14].date === 'September 15, 2025' && TH_CANCELLED[303].date === 'November 6, 2024', thaiStatus(deviceData.find(d => d.id === 14))); }
  // --- No reference picture of the inhaler: N/A icon, never another device's drawing
  { const na = (name) => { const c = cardFor(name); return !!(c && c.querySelector('svg[data-icon-na]')); };
    log('Pulvisonide 200 shows the N/A picture; products with a reference do not', na('Pulvisonide 200') && !na('Tropoair 18 mcg (LupinHaler)') && !!cardFor('Spiriva HandiHaler') && !na('Spiriva HandiHaler') && !na('Seretide Accuhaler 50/250') && document.querySelectorAll('#printable-drug-list svg[data-icon-na]').length === cardNames().filter(n => deviceData.some(d => d.marketName === n && ICON_UNKNOWN.has(d.id))).length && ICON_UNKNOWN.size === 4, [na('Pulvisonide 200'), document.querySelectorAll('#printable-drug-list svg[data-icon-na]').length]);
    // icon colour without a reference picture: neutral grey and labelled
    { document.querySelector('[data-threg="past"]').click();
      for (let i = 0; i < 40 && !cardFor('Beclocip 100 HFA'); i++) await wait(100); // the longer list takes a moment to draw
      const a = cardFor('Beclocip 100 HFA'), v = cardFor('Ventolin Evohaler 100 mcg'), ae = cardFor('Aeronide 200 mcg'), bu = cardFor('Budecort-200 Inhaler');
      const grey = (c) => !!c && c.querySelector('svg[viewBox="0 0 100 100"]').outerHTML.toLowerCase().includes('#94a3b8');
      log('unverified icon colour: Beclocip 100 HFA is grey and labelled, Ventolin keeps its colour', grey(a) && /Colour not verified/.test(a.querySelector('[data-colour-unknown]').textContent) && v && !v.querySelector('[data-colour-unknown]') && !grey(v) && COLOUR_UNKNOWN.size === 13 && !COLOUR_UNKNOWN.has(532) && ICON_CAP[532] === '#3fc1c9' && [...COLOUR_UNKNOWN].every(id => thaiStatus(deviceData.find(d => d.id === id)) !== 'current') && iconHex(deviceData.find(d => d.id === 433)) === '#9a1f45' && iconHex(deviceData.find(d => d.id === 431)) === '#f1eec9' && ICON_CAP[431] === '#4b2c8a' && deviceData.find(d => d.id === 414).hex === '#c58fb6' && iconHex(deviceData.find(d => d.id === 435)) === '#94a3b8' && iconHex(deviceData.find(d => d.id === 422)) === '#4f8198' && ICON_CAP[422] === '#1f2a37' && iconHex(deviceData.find(d => d.id === 441)) === '#2b7de0' && ICON_CAP[441] === '#f1f5f9', [grey(a), grey(v), COLOUR_UNKNOWN.size]);
      document.querySelector('[data-threg="past"]').click(); await wait(400);
      const aeSvg = ae ? ae.querySelector('svg[viewBox="0 0 100 100"]').outerHTML.toLowerCase() : '';
      log('Aeronide 200 icon from the pack photo: maroon-brown body, orange cap, no not-verified label', aeSvg.includes('#7a2e28') && aeSvg.includes('#f5922a') && !ae.querySelector('[data-colour-unknown]'), aeSvg.slice(0, 200));
      const svgOf = (name) => { const c = cardFor(name); return c ? c.querySelector('svg[viewBox="0 0 100 100"]').outerHTML.toLowerCase() : ''; };
      log('icons recoloured from product pictures: Aerotide (purple, lilac cap), Seroflo (green cap), Aerobidol (aqua cap), Buto-Asma (blue, navy cap), Salflumix (purple)', svgOf('Aerotide 125').includes('#6b4fc0') && svgOf('Aerotide 250').includes('#b9a8e6') && svgOf('Seroflo 125 Inhaler').includes('#7cb83f') && svgOf('Aerobidol Inhaler').includes('#62bcd0') && svgOf('Buto-Asma 100 mcg').includes('#1e3a6e') && svgOf('Salflumix Easyhaler 50/250').includes('#8f3b9c') && iconHex(deviceData.find(d => d.id === 440)) === '#2a9fb3' && !document.querySelector('#drug-408 [data-colour-unknown]'), [svgOf('Aerotide 125').slice(0, 80)]);
      const buSvg = bu ? bu.querySelector('svg[viewBox="0 0 100 100"]').outerHTML.toLowerCase() : '';
      log('Budecort-200 icon from the pack photo: white body, magenta cap, no not-verified label', buSvg.includes('#e6eaf0') && buSvg.includes('#c2255c') && !bu.querySelector('[data-colour-unknown]'), buSvg.slice(0, 200));
      const ox = deviceData.find(d => d.id === 440);
      log('Oxis Turbuhaler: strength, dose and pack size are Unknown', ox.marketName === 'Oxis Turbuhaler' && /strength unknown/.test(ox.substance) && ox.doseRange === 'Unknown' && ox.totalDoses === 'Unknown', [ox.marketName, ox.substance, ox.doseRange, ox.totalDoses]); }
    // values without a reference read "Unknown", never an assumed number
    const flowOf = (name) => { const c = cardFor(name), e = c && c.querySelector('[data-flow]'); return e ? e.textContent.trim() : 'none'; };
    const fl = ['Pulvisonide 200', 'Tropoair 18 mcg (LupinHaler)', 'Xalflu Airmaster 50/100', 'Xalflu Airmaster 50/250', 'Spiriva HandiHaler'].map(flowOf);
    log('minimum inspiratory flow without a reference shows Unknown (Pulvisonide, Tropoair, Xalflu Airmaster); Spiriva keeps its figure', fl.join('|') === 'Unknown|Unknown|Unknown|Unknown|≥ 20 L/min' && deviceData.filter(flowUnknown).length === 8, fl);
    const tc = cardFor('Tropoair 18 mcg (LupinHaler)');
    log('Tropoair card: labelled LupinHaler with its own icon, still in the HandiHaler technique group', tc && tc.querySelector('[data-shape-label]').textContent === 'LupinHaler' && tc.getAttribute('data-shape') === 'Handihaler' && shapeLabel(deviceData.find(d => d.marketName === 'Spiriva HandiHaler')) === 'Handihaler', tc && tc.querySelector('[data-shape-label]').textContent);
    const capsule = TECHNIQUE.OtherDPI;
    log('unidentified capsule inhaler: no assumed technique steps', capsule.en.steps.length === 1 && /^Unknown:/.test(capsule.en.steps[0]) && capsule.en.errors.length === 0 && capsule.th.steps.length === 1 && (CRITICAL_STEPS.OtherDPI || []).length === 0 && !TECHNIQUE.Capsule && deviceData.find(d => d.id === 404).shape === 'OtherDPI' && shapeLabel(deviceData.find(d => d.id === 404)) === 'Other DPI', capsule.en.steps);
    // inspiratory-flow filter keeps devices with an unknown minimum, with a note
    setInput(pif(), '25'); await wait(400);
    const note = document.querySelector('[data-pif-unknown]');
    log('flow filter at 25 L/min: unknown-flow products stay listed with a note', cardNames().includes('Pulvisonide 200') && cardNames().includes('Xalflu Airmaster 50/100') && !cardNames().includes('Seretide Accuhaler 50/250') && note && /5 shown have no published minimum flow/.test(note.textContent), [cardNames().length, note && note.textContent]);
    setInput(pif(), ''); await wait(400); }
  // --- Filter bar: registration filters on row 1, clinical filters on row 2
  { const r1 = document.querySelector('[data-filter-row="registration"]'), r2 = document.querySelector('[data-filter-row="clinical"]');
    const has = (row, sel) => !!row.querySelector(sel), txt = (row) => row.textContent;
    log('filter row 1: Countries, FDA status, NLEM only, Licence holder', has(r1, '[data-country-all]') && has(r1, '[data-threg-group]') && has(r1, '[data-nlem-group]') && has(r1, '[data-holder-toggle]') && !has(r1, '[data-role]') && !/Asthma|MART|SABA/.test(txt(r1)), txt(r1).slice(0, 120));
    log('filter row 2: Asthma / COPD, classes, roles, MART / Extra-fine, flow, device types', /Asthma/.test(txt(r2)) && /COPD/.test(txt(r2)) && /LABA/.test(txt(r2)) && has(r2, '[data-role="Exacerbation"]') && /MART Only/.test(txt(r2)) && /Extra-fine Only/.test(txt(r2)) && /Insp\. flow/.test(txt(r2)) && /Nebulizer/.test(txt(r2)) && !has(r2, '[data-country-all]') && r1.getBoundingClientRect().bottom <= r2.getBoundingClientRect().top + 1, txt(r2).slice(0, 160));
    log('sort menu sits beside the search box (in the pinned search row), with no second copy in the filter rows', !!document.querySelector('[data-search-bar] [data-sort] select') && document.querySelectorAll('[data-filter-bar] select').length === 0 && document.querySelectorAll('[data-search-bar] select').length === 1 && !!document.querySelector('[data-search-bar] [data-filters-toggle]'), '');
    { const ft = document.querySelector('[data-filters-toggle]'), fb = document.querySelector('[data-filter-bar]');
      const openByDefault = ft.getBoundingClientRect().width > 0 && ft.getAttribute('aria-expanded') === 'true' && getComputedStyle(fb).display === 'flex';
      ft.click(); await wait(300);
      const closed = ft.getAttribute('aria-expanded') === 'false' && getComputedStyle(fb).display === 'none';
      ft.click(); await wait(300);
      log('Filters button on desktop: panel open by default, the button closes and reopens it', openByDefault && closed && getComputedStyle(fb).display === 'flex', [openByDefault, closed]); }
    log('filter rows wrap (no sideways scrolling) and sit in their own bar under the pinned search row', [r1, r2].every(r => getComputedStyle(r).flexWrap === 'wrap' && getComputedStyle(r).overflowX === 'visible' && r.scrollWidth <= r.clientWidth + 1) && !!document.querySelector('[data-search-bar]') && document.querySelector('[data-filter-bar]').contains(r1) && getComputedStyle(document.querySelector('[data-search-bar]')).position === 'sticky', [getComputedStyle(r1).flexWrap, getComputedStyle(r1).overflowX]); }
  // --- Clear button: shown only while a filter is on, resets everything to the default view
  { const clr = () => document.querySelector('[data-clear-filters]');
    const pressed = (x) => btnExact(x).getAttribute('aria-pressed');
    const wasOn = ['TH', 'US', 'UK', 'EU'].filter(c => pressed(c) === 'true'), pastWasOn = document.querySelector('[data-threg="past"]').getAttribute('aria-pressed') === 'true';
    if (!wasOn.includes('US')) await click('US');
    await click('ICS'); setInput(search(), 'bude'); if (!pastWasOn) document.querySelector('[data-threg="past"]').click(); await wait(500);
    const shown = !!clr() && clr().textContent.trim() === 'Clear';
    clr().click(); await wait(600);
    log('Clear button appears with filters on and resets search, class, status and countries to the default view', shown && !clr() && search().value === '' && pressed('TH') === 'true' && pressed('US') === 'false' && pressed('ICS') !== 'true' && document.querySelector('[data-threg="past"]').getAttribute('aria-pressed') === 'false' && cardNames().length === 58, [shown, !!clr(), cardNames().length]);
    // put the earlier state back for the checks that follow
    for (const c of wasOn) if (pressed(c) !== 'true') await click(c);
    if (!wasOn.includes('TH') && pressed('TH') === 'true') await click('TH');
    if (pastWasOn) { document.querySelector('[data-threg="past"]').click(); await wait(400); } }
  // --- Role filter: Maintenance / Reliever / Exacerbation
  { const roleBtn = (r) => document.querySelector('[data-role="' + r + '"]');
    const shown = () => cardNames().map(n => deviceData.find(d => d.marketName === n));
    const labels = [...document.querySelectorAll('[data-role]')].map(b => b.textContent.trim());
    log('role filter: Maintenance, Reliever, Exacerbation, each with a hover explanation', labels.join() === 'Maintenance,Reliever,Exacerbation' && [...document.querySelectorAll('[data-role]')].every(b => b.title.length > 15), labels);
    const nebBud = deviceData.filter(d => d.type === 'Nebulizer' && d.class === 'ICS'), nebBd = deviceData.filter(d => d.type === 'Nebulizer' && d.class !== 'ICS');
    log('data: nebulised budesonide is exacerbation only; nebulised short-acting bronchodilators are reliever + exacerbation; the two long-acting nebules (Perforomist, Yupelri) are maintenance; nothing else is', nebBud.length === 3 && nebBud.every(d => d.role.join() === 'Exacerbation') && nebBd.filter(d => /SABA|SAMA/.test(d.class)).length === 12 && nebBd.every(d => d.role.join() === (/SABA|SAMA/.test(d.class) ? 'Reliever,Exacerbation' : 'Controller')) && nebBd.filter(d => !/SABA|SAMA/.test(d.class)).map(d => d.id).join() === '518,521' && deviceData.filter(d => d.type !== 'Nebulizer').every(d => !d.role.includes('Exacerbation') && d.role.every(r => r === 'Controller' || r === 'Reliever')), [nebBud.map(d => d.role.join()), nebBd.length]);
    roleBtn('Exacerbation').click(); await wait(300);
    let list = shown();
    log('Exacerbation filter: only nebulisers, with Pulmicort Respules and Salbutamol Nebules', list.length > 3 && list.every(d => d && d.type === 'Nebulizer') && cardNames().includes('Pulmicort Respules') && cardNames().includes('Salbutamol Nebules 2.5 mg'), cardNames());
    const pc = cardFor('Pulmicort Respules'), sc = cardFor('Salbutamol Nebules 2.5 mg');
    log('cards carry the Exacerbation use tag; nebulised budesonide also the licence note', pc && /Exacerbation use/.test(pc.querySelector('[data-exac-use]').textContent) && /Licensed for maintenance treatment of asthma/.test(pc.querySelector('[data-exac-note]').textContent) && sc && sc.querySelector('[data-exac-use]') && !sc.querySelector('[data-exac-note]'), '');
    // Patient Sheet wording for a flare-up-only medicine
    sel('Pulmicort Respules'); await wait(300);
    btnByText('Patient Sheet').click(); await wait(500);
    btnByText('English').click(); await wait(300);
    const ps = document.getElementById('patient-sheet-print');
    log('Patient Sheet for nebulised budesonide: flare-up treatment, not a daily inhaler or reliever, reliever asked for, no action plan by default', /Flare-up treatment: use it for the number of days your doctor tells you/.test(ps.textContent) && !/Maintenance inhaler \(preventer\)/.test(ps.textContent) && !/Reliever: use it when you have symptoms/.test(ps.textContent) && /use the reliever your doctor prescribed/.test(ps.textContent) && !ps.querySelector('.plan-page'), ps.textContent.slice(0, 260));
    await esc(); btnByText('Clear').click(); await wait(300);
    roleBtn('Exacerbation').click(); await wait(100); roleBtn('Controller').click(); await wait(300); // one click per task: React applies each click's state change in a microtask
    list = shown();
    log('Maintenance filter: no nebulisers except the long-acting nebules', list.length > 20 && list.every(d => d && (d.type !== 'Nebulizer' || [518, 521].includes(d.id)) && d.role.includes('Controller')), cardNames().filter(n => /Respules|Nebul/.test(n)));
    roleBtn('Controller').click(); await wait(100); roleBtn('Reliever').click(); await wait(300);
    log('Reliever filter: nebulised bronchodilators yes, nebulised budesonide no', cardNames().includes('Salbutamol Nebules 2.5 mg') && !cardNames().some(n => /Respules/.test(n)), cardNames().filter(n => /Respules|Nebul/.test(n)));
    roleBtn('Reliever').click(); await wait(300);
    { const byId0 = (id) => deviceData.find(d => d.id === id);
      const srcOf = async (name) => { const d = await openDetail(name); const o = {}; d.querySelectorAll('[data-src]').forEach(p => { o[p.dataset.src] = { text: p.textContent, hrefs: [...p.querySelectorAll('a')].map(a => a.getAttribute('href')), unknown: !!p.querySelector('[data-src-unknown]'), none: !!p.querySelector('[data-src-none]') }; }); await esc(); return o; };
      const ser = await srcOf('Seretide Accuhaler 50/250');
      log('Seretide Accuhaler sources: flow from Ghosh 2017 and Weers 2022, ventilator use with no recorded source; the US search uses the US name (Advair Diskus)', /Ghosh 2017/.test(ser.flow.text) && /10\.1089\/jamp\.2017/.test(ser.flow.hrefs[0]) && /Weers 2022/.test(ser.flow.text) && /10\.3389/.test(ser.flow.hrefs[1]) && /query=Advair%20Diskus/.test(ser['reg-us'].hrefs[1]) && /search=Seretide/.test(ser['reg-uk'].hrefs[0]) && ser.vent.none, [ser.flow.text, ser['reg-us'].hrefs]);
      const fos = await srcOf('Foster NEXThaler 100/6');
      log('Foster NEXThaler sources: flow from Corradi 2014; no verified UK or EU search word, so the register front page', /Ghosh 2017/.test(fos.flow.text) && /Corradi 2014/.test(fos.flow.text) && /10\.1517/.test(fos.flow.hrefs[1]) && fos['reg-uk'].hrefs[0] === 'https://products.mhra.gov.uk/' && /authorised-medicines$/.test(fos['reg-eu'].hrefs[0]), [fos.flow.text, fos['reg-uk'].hrefs, fos['reg-eu'].hrefs]);
      const duo = await srcOf('DuoResp Spiromax 160/4.5');
      log('DuoResp Spiromax: 40 L/min from Ghosh 2017', /Ghosh 2017/.test(duo.flow.text) && /10\.1089\/jamp\.2017/.test(duo.flow.hrefs[0]) && pifNeeded(byId0(405).flowRate) === 40, duo.flow.text);
    }
    // Equivalent Drugs: exacerbation use alone does not make two drugs alternatives
    sel('Pulmicort Respules'); await wait(300);
    btnByText('Equivalent Drugs').click(); await wait(500);
    const eq = modalDrugNames();
    const eqText = (document.querySelector('.fixed.inset-0') || document.body).textContent;
    log('Equivalent Drugs for nebulised budesonide: other ICS products, no bronchodilator nebulisers', eq.some(n => /Direct equivalents.*\((\d{2,}|[1-9])\)/.test(n)) && eq.some(n => /Other options.*\(0\)/.test(n)) && !/Salbutamol Nebules|Berodual Nebules|Combivent UDV/.test(eqText), eq.slice(0, 12));
    { const rows = () => [...document.querySelectorAll('[data-equiv-row]')];
      const pressed = () => [...document.querySelectorAll('[data-equiv-country][aria-pressed="true"]')].map(b => b.dataset.equivCountry).join();
      const mainPressed = () => ['TH', 'US', 'UK', 'EU', 'JP'].filter(c => btnExact(c).getAttribute('aria-pressed') === 'true').join().toLowerCase();
      const has = (row, r) => !!row.querySelector('[data-equiv-avail] [data-country="' + r + '"]');
      const eqClick = async (sel) => { document.querySelector(sel).click(); await wait(400); };
      const main0 = mainPressed();
      log('Equivalent Drugs: the country filter starts on the main list\'s countries', pressed() === main0 && main0 !== '', [pressed(), main0]);
      if (pressed() !== 'th,us,uk,eu,jp') await eqClick('[data-equiv-country-all]');
      const nAll = rows().length;
      log('All selects the five countries', pressed() === 'th,us,uk,eu,jp' && nAll > 0, [pressed(), nAll]);
      await eqClick('[data-equiv-country-all]');
      log('no country chosen: a hint replaces the lists', pressed() === '' && rows().length === 0 && !!document.querySelector('[data-equiv-nocountry]'), rows().length);
      await eqClick('[data-equiv-country="th"]');
      const n0 = rows().length;
      log('Thailand only: every equivalent is registered in Thailand', pressed() === 'th' && n0 > 0 && n0 < nAll && rows().every(r => has(r, 'th')), [n0, nAll]);
      await eqClick('[data-equiv-country="jp"]');
      const n1 = rows().length;
      log('adding Japan lists more equivalents, some of them not registered in Thailand', n1 > n0 && rows().some(r => !has(r, 'th') && has(r, 'jp')) && rows().every(r => has(r, 'th') || has(r, 'jp')), [n0, n1]);
      await eqClick('[data-equiv-country="th"]');
      log('Japan only: every equivalent is registered in Japan', pressed() === 'jp' && rows().length > 0 && rows().length < n1 && rows().every(r => has(r, 'jp')), rows().length);
      await esc();
      log('the main list keeps its own countries', mainPressed() === main0, [mainPressed(), main0]);
    }
    await esc(); btnByText('Clear').click(); await wait(300);
  }
  // list view: country chips on their own second row in every row
  document.querySelector('button[aria-label="List View"]').click(); await wait(300);
  { const rows = [...document.querySelectorAll('#printable-drug-list > div')];
    const bad = rows.filter(r => {
      const c = r.querySelector('[data-list-countries]'), h = r.querySelector('h3');
      const cs = c ? [...c.querySelectorAll('[data-country]')].map(x => x.dataset.country) : [];
      if (!c || !h || cs.length < 1 || new Set(cs).size !== cs.length) return true;
      const cr = c.getBoundingClientRect(), nameLine = h.parentElement.getBoundingClientRect();
      const caution = r.querySelector('[data-list-countries] button');
      if (h.parentElement.querySelector('button')) return true; // the cautions button belongs on the countries row
      return h.parentElement.querySelector('[data-country]') || cr.top < nameLine.bottom - 1 || Math.abs(cr.left - nameLine.left) > 1 || (caution && caution.getBoundingClientRect().top > cr.bottom);
    }).map(r => r.querySelector('h3') && r.querySelector('h3').textContent);
    log('list view: countries sit on their own second row in every row', rows.length > 6 && bad.length === 0, [rows.length, bad.slice(0, 5)]); }
  document.querySelector('button[aria-label="Grid View"]').click(); await wait(300);
  btnByText('Device Guide').click(); await wait(400);
  const tabs =[...document.querySelectorAll('[role="tab"]')].filter(x => x.querySelector('svg'));
  log('Device Guide has 15 devices', tabs.length === 15, tabs.map(x => x.textContent.trim()));
  log('Device Guide MDI: shake before each puff, product-specific priming, GINA teaching points', /Shake the inhaler immediately before each puff/.test(document.body.innerText) && /Foster: release 1 puff/.test(document.body.innerText) && /re-check technique at every visit/.test(document.querySelector('[data-dev-teach]').textContent), '');
  tabs.find(x => x.textContent.trim() === 'HandiHaler').click(); await wait(300);
  log('HandiHaler steps shown', /piercing button/.test(document.body.innerText), '');
  log('HandiHaler card lists Spiriva HandiHaler', /Products in this guide:\s*Spiriva HandiHaler/.test(document.body.innerText), '');
  log('HandiHaler card also lists Tropoair (LupinHaler)', /Tropoair 18 mcg \(LupinHaler\)/.test(document.body.innerText), '');
  // Technique checklist: all correct except one critical step
  tabs.find(x => x.textContent.trim() === 'NEXThaler').click(); await wait(300);
  log('NEXThaler card: dose counter check and Foster NEXThaler listed', /dose counter has gone down by one/.test(document.body.innerText) && /Foster NEXThaler 100\/6/.test(document.body.innerText), '');
  tabs.find(x => x.textContent.trim() === 'Airmaster').click(); await wait(300);
  log('Airmaster card: press the red button, each click opens a blister', /red button/.test(document.body.innerText) && /wastes it/.test(document.body.innerText), '');
  tabs.find(x => x.textContent.trim() === 'HandiHaler').click(); await wait(300);
  btnByText('Technique checklist').click(); await wait(300);
  const rows = [...document.querySelectorAll('[data-check-step]')];
  log('checklist lists every HandiHaler step', rows.length === 8, rows.length);
  rows.forEach((r, i) => [...r.querySelectorAll('button')].find(b => (i === 6 ? /Wrong/ : /Correct/).test(b.textContent)).click());
  await wait(300);
  const summary = document.querySelector('[data-check-summary]').textContent;
  log('checklist scores 7/8 and flags step 7 (second inhalation) as a critical error', /7 of 8 steps correct/.test(summary) && /Critical errors: Step 7/.test(summary), summary);
  btnByText('Reset').click(); await wait(200);
  log('checklist resets', /0 of 8 steps correct \(0 of 8 checked\)/.test(document.querySelector('[data-check-summary]').textContent), '');
  await esc();
  log('Escape closes Device Guide', document.querySelectorAll('[role="tab"]').length === 0, '');

  // --- Exacerbation Guide device lists (chosen by rule)
  btnExact('Exacerbation').click(); await wait(400);
  let ex = modalDrugNames();
  const exLists = () => [...document.querySelectorAll('.fixed [data-exac-groups]')].filter(x => x.offsetParent);
  const exCheck = (rule, el) => {
    const keys = [...el.querySelectorAll('[data-exac-group]')].map(x => x.dataset.exacGroup);
    const ok = keys.every(k => { const g = EXAC_LIST_GROUPS[rule].find(x => x[0] === k); return [...el.querySelectorAll('[data-exac-group="' + k + '"] h3')].every(h => g[1](deviceData.find(d => d.marketName === h.textContent.trim()))); });
    return { keys: keys.join(), ok, closed: ![...el.querySelectorAll('details')].some(d => d.open) };
  };
  { const [m, sv] = exLists(); const a = exCheck('asthmaMild', m), b = exCheck('asthmaSevere', sv);
    log('asthma mild-moderate groups follow the text: SABA pMDI, SABA nebulised, budesonide-formoterol (MART), controller ICS', /^saba,sabaNeb,icsForm,(sama,)?ics$/.test(a.keys) && a.ok && a.closed && /use ICS-formoterol as reliever/.test(m.querySelector('[data-exac-note]').textContent) && /MART · max 12 inhalations\/day/.test(m.querySelector('[data-exac-group="icsForm"]').textContent), a);
    log('asthma mild-moderate: no fixed SABA/SAMA inhaler, no budesonide-formoterol 80/4.5', ![...m.querySelectorAll('h3')].some(h => /Berodual|Aerobidol|80\/4\.5/.test(h.textContent)), '');
    log('asthma severe groups follow the text: SABA pMDI, SABA nebulised, plus ipratropium, high-dose ICS (ED)', b.keys === 'saba,sabaNeb,ipra,icsNeb' && b.ok, b);
    const meds = [...m.querySelectorAll('[data-exac-group="saba"] h3')].map(h => deviceData.find(d => d.marketName === h.textContent.trim()));
    const nl = meds.map(d => !!nlemOf(d));
    log('exacerbation rows: by device type, NLEM first, then A-Z', meds.every((d, i) => i === 0 || DEVICE_TYPE_ORDER[meds[i - 1].type] < DEVICE_TYPE_ORDER[d.type] || (meds[i - 1].type === d.type && (nl[i - 1] && !nl[i] || nl[i - 1] === nl[i] && meds[i - 1].marketName.localeCompare(d.marketName) <= 0))) && m.querySelectorAll('[data-exac-group="saba"] [data-exac-type]').length >= 2, meds.map(d => d.marketName)); }
  log('asthma exacerbation: expected products listed', ['Ventolin Evohaler 100 mcg', 'Bricanyl Turbuhaler', 'Salbutamol Nebules 2.5 mg', 'Pulmicort Respules', 'Flixotide Evohaler 125 mcg', 'Symbicort Turbuhaler 160/4.5 mcg', 'Berodual Nebules / Drops'].every(n => ex.includes(n)), ex);
  log('asthma exacerbation: controller line, GINA avoid points and home-resources discharge criterion', /Start or step up ICS-containing treatment/.test(document.body.innerText) && /do not use sedatives/.test(document.body.innerText) && /Adequate resources and support at home/.test(document.body.innerText), '');
  btnByText('COPD (GOLD 2026)').click(); await wait(400);
  ex = modalDrugNames();
  { const [m, sv] = exLists(); const a = exCheck('copdMild', m), b = exCheck('copdSevere', sv);
    log('COPD groups follow the text: SABA, SABA + SAMA, SAMA, nebulised budesonide (mild-moderate and severe)', a.keys === 'saba,sabaSama,sama,icsNeb' && b.keys === 'saba,sabaSama,sama,icsNeb' && a.ok && b.ok, { a, b });
    log('COPD: SABA includes pMDI and nebulised salbutamol', ['Ventolin Evohaler 100 mcg', 'Salbutamol Nebules 2.5 mg'].every(n => [...sv.querySelectorAll('[data-exac-group="saba"] h3')].some(h => h.textContent.trim() === n)), ''); }
  log('COPD exacerbation: SABA ± SAMA, no asthma-only drugs', ['Berodual Inhaler', 'Combivent Respimat', 'Atrovent HFA', 'Pulmicort Respules', 'Berodual Nebules / Drops'].every(n => ex.includes(n)) && ex.includes('Aerotamol MDI 100 mcg') && !ex.includes('Flixotide Evohaler 125 mcg'), ex);
  await esc();

  // --- Maintenance Guide ranking (COPD Group A)
  btnByText('Initial Maintenance').click(); await wait(400);
  btnByText('COPD (GOLD)').click(); await wait(300);
  btnByText('GOLD 2 (Moderate)').click(); await wait(200);
  btnByText('Grade 0:').click(); await wait(200);
  btnByText('Zero Moderate or Severe Exacerbation').click(); await wait(400);
  const planDrugs = () => modalDrugNames().filter(n => !/^\d+\.|^GOLD Group|^GINA Step/.test(n));
  log('COPD Group A: NLEM drug ranked first', planDrugs()[0] === 'Spiriva HandiHaler', planDrugs());
  const showAll = btnByText('Show all');
  log('COPD Group A: "Show all 10 options" (all countries: adds Incruse, Striverdi and Tudorza)', showAll && /10/.test(showAll.textContent), showAll && showAll.textContent);
  if (showAll) { showAll.click(); await wait(300); }
  log('Show all lists every option', ['Spiriva HandiHaler', 'Serevent Diskus', 'Onbrez Breezhaler 150 mcg', 'Onbrez Breezhaler 300 mcg', 'Seebri Breezhaler 50 mcg', 'Spiriva Respimat 2.5 mcg'].every(n => planDrugs().includes(n)), planDrugs());
  { const rb = [...document.querySelectorAll('button')].filter(b => /^Show all/.test(b.textContent.trim())); for (const b of rb) { b.click(); await wait(200); } }
  log('COPD plan lists no nebulisers (hospital use only)', !planDrugs().some(n => /Nebules|Respules/.test(n)) && planDrugs().includes('Ventolin Evohaler 100 mcg'), planDrugs());
  await esc();

  // --- Maintenance Guide: asthma Step 4 → Step 5 (optional "uncontrolled despite Step 4" question)
  btnByText('Initial Maintenance').click(); await wait(400);
  btnByText('Asthma (GINA)').click(); await wait(300);
  btnByText('Symptoms most days').click(); await wait(150);
  btnByText('Low lung function').click(); await wait(150);
  btnByText('≥ 1 exacerbation in the last year').click(); await wait(400);
  const stageText = () => modalDrugNames().find(n => /^GINA Step/.test(n)) || '';
  log('asthma UI: most days (not daily) + low FEV1 + exacerbation → GINA Step 3 (Table 3 row 3)', /^GINA Step 3/.test(stageText()), stageText());
  { const n = document.querySelector('[data-gina-risk]'); log('asthma UI: exacerbation risk note shown, says it does not raise the step here', !!n && /does not raise the GINA step/.test(n.textContent), n ? n.textContent : 'missing'); }
  btnByText('Daily symptoms').click(); await wait(400);
  { const n = document.querySelector('[data-gina-risk]'); log('asthma UI: at Step 4 the risk note no longer says the step is unchanged', !!n && !/does not raise/.test(n.textContent), n ? n.textContent : 'missing'); }
  log('asthma: daily symptoms + low FEV1 + exacerbation → GINA Step 4 (highest initial step)', /^GINA Step 4/.test(stageText()), stageText());
  log('Initial Maintenance Guide: no "current treatment" Step 5 question (handled in Follow-up)', !btnByText('Uncontrolled despite Step 4') && !document.body.innerText.includes('Current Treatment (optional)') && /Initial Maintenance Guide/.test(document.body.innerText), '');
  await esc();

  // --- Maintenance Guide device lists follow each product's own dose levels (GINA Table 6/7)
  btnByText('Initial Maintenance').click(); await wait(400);
  btnByText('Asthma (GINA)').click(); await wait(300);
  btnByText('Symptoms most days').click(); await wait(150);
  btnByText('Normal lung function').click(); await wait(150);
  btnByText('0 exacerbations').click(); await wait(400);
  { const b = btnByText('Show all'); if (b) { b.click(); await wait(300); } }
  log('Track 1 Step 3 (low-dose MART, 12+): Symbicort 160/4.5 listed, children\'s 80/4.5 not', /^GINA Step 3/.test(stageText()) && planDrugs().includes('Symbicort Turbuhaler 160/4.5 mcg') && !planDrugs().some(n => /80\/4\.5/.test(n)), planDrugs());
  btnByText('Track 2').click(); await wait(200);
  btnByText('Symptoms 2 days/week or less').click(); await wait(400);
  { const b = btnByText('Show all'); if (b) { b.click(); await wait(300); } }
  log('Maintenance Guide lists no nebulisers (hospital use only)', !planDrugs().some(n => /Nebules|Respules/.test(n)), planDrugs());
  log('Track 2 Step 1 (low-dose ICS, 12+): Giona 200 listed, no nebulised budesonide', /^GINA Step 1/.test(stageText()) && planDrugs().includes('Giona Easyhaler 200 mcg') && !planDrugs().includes('Pulmicort Respules'), planDrugs());
  await esc();

  // --- GINA 2026 Table 6: fluticasone furoate 100 mcg is low–medium
  const relvar = deviceData.find(d => d.id === 101), trelegy = deviceData.find(d => d.id === 12);
  log('Relvar 100/25 valid at low and medium ICS', icsLevels(relvar).join() === 'low,medium', icsLevels(relvar));
  log('Trelegy valid at low and medium ICS', icsLevels(trelegy).join() === 'low,medium', icsLevels(trelegy));
  log('Relvar 200/25 remains high only', icsLevels(deviceData.find(d => d.id === 102)).join() === 'high', '');
  const conv = buildConversion(deviceData.find(d => d.id === 41), relvar, 'Asthma', 'low', null, translations.en);
  log('Seretide 25/50 (low) → Relvar 100/25 matches at low, no level change', conv.toLvl === 'low' && !conv.nearest, { toLvl: conv.toLvl, nearest: conv.nearest });
  { const acc100 = deviceData.find(d => d.id === 61);
    const c2 = buildConversion(relvar, acc100, 'Asthma', 'medium', null, translations.en);
    log('Relvar 100 (medium) → Accuhaler 50/100: nearest low, recommends Accuhaler 50/250', c2.nearest && c2.toLvl === 'low' && c2.alternatives.map(a => a.id).join() === '62', { toLvl: c2.toLvl, alts: c2.alternatives.map(a => a.id) });
    const host = document.createElement('div'); document.body.appendChild(host);
    const r = ReactDOM.createRoot(host); r.render(React.createElement(DoseConversionModal, { pair: [relvar, acc100], t: translations.en, onClose: () => {} }));
    await wait(200);
    const med = [...host.querySelectorAll('button')].find(b => /^Medium/.test(b.textContent.trim())); if (med) med.click(); await wait(200);
    const main = host.querySelector('[data-convert-main]'), alt = host.querySelector('[data-convert-alt="62"]');
    log('Dose switch UI: chosen product greyed, Accuhaler 50/250 card with dose and level', main && main.dataset.greyed === 'true' && !!alt && /Seretide Accuhaler 50\/250/.test(alt.textContent) && /1 blister BID/.test(alt.textContent) && /Medium ICS \(GINA\)/.test(alt.textContent) && /500 mcg\/day/.test(alt.textContent), alt ? alt.textContent : (main ? main.dataset.greyed : 'no result'));
    const comps = host.querySelector('[data-convert-components]'), notes = host.querySelector('[data-convert-notes]');
    log('Dose switch UI: What changes and guidance follow Accuhaler 50/250', /100 mcg\/day → 500 mcg\/day/.test(comps.textContent) && !/lowers the ICS dose level/.test(notes.textContent) && /for the recommended Seretide Accuhaler 50\/250/.test(host.textContent), comps.textContent);
    r.unmount(); host.remove(); }

  // --- GINA 2026 Table 3: initial step for adults/adolescents
  const MOST = 'Symptoms most days (e.g. 4 days/week)', DAILY = 'Daily symptoms, or waking at night ≥ 1 time/week', LOW = 'Low lung function (FEV1 < 80% predicted)', EXAC = '≥ 1 exacerbation in the last year';
  log('GINA: low lung function alone → Step 3', ginaStep([LOW]) === 3, ginaStep([LOW]));
  log('GINA: symptoms most days alone → Step 3', ginaStep([MOST]) === 3, ginaStep([MOST]));
  log('GINA: most days + low lung function → Step 3 (Table 3 row 3)', ginaStep([MOST, LOW]) === 3, ginaStep([MOST, LOW]));
  log('GINA: daily symptoms + low lung function → Step 4', ginaStep([DAILY, LOW]) === 4, ginaStep([DAILY, LOW]));
  log('GINA: daily symptoms / night waking alone → Step 3', ginaStep([DAILY]) === 3, ginaStep([DAILY]));
  log('GINA: daily symptoms + exacerbation → Step 4', ginaStep([DAILY, EXAC]) === 4, ginaStep([DAILY, EXAC]));
  log('GINA: exacerbation alone (infrequent symptoms, normal lung function) → Step 1, not raised', ginaStep(['Symptoms 2 days/week or less', 'Normal lung function (FEV1 ≥ 80% predicted)', EXAC]) === 1, ginaStep(['Symptoms 2 days/week or less', EXAC]));
  log('GINA: exacerbation + >2 but <3–5 days/week → Step 2', ginaStep(['Symptoms > 2 days/week, but less than 3–5 days/week', EXAC]) === 2, '');
  log('GINA: most days + exacerbation → Step 3 (not 4)', ginaStep([MOST, EXAC]) === 3, ginaStep([MOST, EXAC]));
  log('GINA: 2 days/week or less → Step 1', ginaStep(['Symptoms 2 days/week or less']) === 1, '');
  log('GINA: >2 but <3–5 days/week, normal lung function → Step 2', ginaStep(['Symptoms > 2 days/week, but less than 3–5 days/week', 'Normal lung function (FEV1 ≥ 80% predicted)', '0 exacerbations in the last year']) === 2, '');
  log('GINA initial step is at most Step 4', ginaStep([DAILY, LOW, EXAC]) === 4 && ginaStep(['Symptoms severely limiting daily activities', LOW]) === 4, '');
  log('Thai labels exist for every asthma symptom option', asthmaSeverityGroups[0].options.every(o => !!translations.th[o]), '');

  // --- Trelegy 200/62.5/25 (asthma only, high-dose ICS)
  const t200 = deviceData.find(d => d.id === 103);
  log('Trelegy 200 is high-dose ICS only', t200 && icsLevels(t200).join() === 'high', t200 && icsLevels(t200));
  log('Trelegy 200 is asthma only', t200 && t200.indications.join() === 'Asthma', '');

  // --- National reference price tiers (<250 / 250–599 / 600–999 / ≥1000 THB)
  const lvl = id => deviceData.find(d => d.id === id).priceLevel;
  const byId = id => deviceData.find(d => d.id === id);
  { const regs = new Set(); deviceData.forEach(d => { (typeof d.doseRange === 'string' ? [d.doseRange] : Object.values(d.doseRange)).forEach(v => regs.add(v)); if (d.martMax) regs.add(d.martMax); });
    const left = [...regs].map(r => [r, doseText(r, translations.th)]).filter(([, x]) => /[A-Za-z]/.test(x.replace(/\b(mg|mcg|mL|GINA|MART)\b/g, '')));
    log('every dose and MART maximum has a Thai form (only mg, mL, GINA, MART left in Latin script)', left.length === 0, left); }
  log('Thai dose examples', doseText('1-2 puffs Q4-6H PRN (Max 8/day)', translations.th) === '1–2 พัฟ ทุก 4–6 ชม. เมื่อมีอาการ (ไม่เกิน 8 ครั้ง/วัน)' && doseText('1 inhalation ONCE daily', translations.th) === 'สูด 1 ครั้ง วันละ 1 ครั้ง' && doseText('2 puffs BID', translations.en) === '2 puffs BID', doseText('1-2 puffs Q4-6H PRN (Max 8/day)', translations.th));
  log('last checked dates: original 7/8/7 Oct, re-checked brands and MIMS additions 9 Oct', lastChecked(byId(1)).reg === 'October 7, 2026' && lastChecked(byId(92)).reg === 'October 9, 2026' && lastChecked(byId(405)).price === 'October 9, 2026' && lastChecked(byId(1)).label === 'October 8, 2026', '');
  log('every pack size and after-opening expiry has a Thai translation', deviceData.every(d => TOTAL_DOSES_TH[d.totalDoses] && EXPIRY_TH[d.expiration]), deviceData.filter(d => !TOTAL_DOSES_TH[d.totalDoses] || !EXPIRY_TH[d.expiration]).map(d => d.marketName));
  log('pack and expiry text follow the language', packText(byId(1), translations.th) === '200 พัฟ' && expText(byId(1), translations.th) === 'ใช้ได้จนถึงวันหมดอายุบนฉลาก' && packText(byId(1), translations.en) === '200 puffs', '');
  log('spacer fit: Ventolin Volumatic, Trimbow AeroChamber Plus, Aerotamol any, QVAR none, Relvar DPI, Spiriva Respimat SMI, nebules none', spacerFit(byId(1)).names.join() === 'Volumatic' && spacerFit(byId(25)).names.join() === 'AeroChamber Plus' && spacerFit(byId(301)).kind === 'any' && spacerFit(byId(261)).kind === 'breath' && spacerFit(byId(101)).kind === 'dpi' && spacerFit(byId(15)).kind === 'smi' && spacerFit(byId(17)) === null, '');
  log('NLEM: past/never registered products do not count (Pulmicort Turbuhaler 200, Bufomix); Giona 200 does', !nlemOf(byId(92)) && !nlemOf(byId(291)) && nlemOf(byId(294)).list === 'b', '');
  log('TH-cancelled products: shown in TH view only, flagged, never planned', countryView(byId(92), ['th'], ['past']) && !countryView(byId(92), ['th']) && !countryView(byId(16), ['th'], ['current', 'past']) && countryView(byId(16), ['th'], ['never']) && thCancelled(byId(440)) && !thCancelled(byId(72)) && !asthmaPlanDevices(2, false, deviceData.filter(d => countryView(d, ['th'])).map(d => ({ ...d, notRegistered: !licenceIn(d, 'th') })).filter(d => !d.notRegistered)).controllers.some(d => TH_CANCELLED[d.id]), '');
  log('MIMS: DuoResp 160/4.5 is MART, metered 200 mcg, medium ICS; 320/9 high only, not MART', byId(405).isMart && icsInfo(byId(405)).mcg === 200 && icsLevels(byId(406)).join() === 'medium,high' && !byId(406).isMart, '');
  log('MIMS: every new product has a Thai licence and a device technique card', [401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427].every(id => byId(id) && licenceIn(byId(id), 'th') && TECHNIQUE[byId(id).shape]), '');
  log('MIMS: Pulvisonide 200 costs band 2 (≈300 THB/month), salbutamol solutions priced per pack', lvl(404) === 2 && byId(426).priceBasis === 'pack' && byId(421).hiddenPrice === 27.5, '');
  log('monthly cost bands: Ventolin 1, Spiriva HandiHaler 2, Relvar 100 3, Spiriva Respimat 4', lvl(1) === 1 && lvl(13) === 2 && lvl(101) === 3 && lvl(15) === 4, [lvl(1), lvl(13), lvl(101), lvl(15)]);
  log('every product priced except the US additions (no Thai price: Unknown); estimates flagged only where no reference price', deviceData.every(d => (d.id >= 500 ? d.priceLevel == null && d.hiddenPrice == null : d.priceLevel >= 1 && d.priceLevel <= 4 && d.hiddenPrice > 0)) && deviceData.filter(d => d.priceEst).length === 17, deviceData.filter(d => d.priceEst).length);
  log('SMI ventilator note gives no dose multiplier', !/2-4x|Multiply/.test(translations.en.ventDoseSmi) && /nebuli/.test(translations.en.ventDoseSmi), '');

  // --- Ventilator strip: short label, full note on hover/click
  const vdm = await openDetail('Ventolin Evohaler 100 mcg');
  const ventBtn = [...vdm.querySelectorAll('button')].find(b => b.textContent.trim() === '2x puffs');
  log('MDI ventilator note in the detail view shows "2x puffs"', !!ventBtn, '');
  if (ventBtn) { ventBtn.click(); await wait(200); }
  const tip = document.querySelector('[role="tooltip"]');
  log('clicking "2x puffs" shows the full note', tip && /in-line spacer/.test(tip.textContent), tip && tip.textContent.slice(0, 80));
  document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true })); await wait(200);
  log('clicking elsewhere closes the note', !document.querySelector('[role="tooltip"]'), '');
  await esc();
  { const sdm = await openDetail('Spiriva Respimat 2.5 mcg');
    log('SMI ventilator note in the detail view shows "No set dose"', [...sdm.querySelectorAll('button')].some(b => b.textContent.trim() === 'No set dose'), '');
    await esc(); }

  // --- Thai UI
  btnByText('ไทย').click(); await wait(300);
  log('Thai: NLEM badge text', /บัญชียาหลัก|นอกบัญชียาหลัก/.test(document.querySelector('#printable-drug-list').textContent), '');
  log('Thai: references heading', /เอกสารอ้างอิง/.test(document.body.innerText), '');
  const thCard = document.querySelector('#printable-drug-list > div');
  log('Thai: cost shown as ฿฿฿฿', /฿{4}/.test(thCard.textContent) && !/\$/.test(thCard.textContent), '');
  btnByText(APP_VERSION).click(); await wait(400);
  log('Thai: changelog in Thai with Buddhist-era dates', /บันทึกการเปลี่ยนแปลงแสดงเป็นภาษาไทยแล้ว/.test(document.body.innerText) && /8 ต\.ค\. 2569/.test(document.body.innerText), '');
  await esc();
  btnByText('EN').click(); await wait(300);

  // --- MART action plan wording (unit render)
  {
    const host = document.createElement('div'); document.body.appendChild(host);
    const sym = deviceData.find(d => d.id === 72);
    const r = ReactDOM.createRoot(host); r.render(React.createElement(AsthmaActionPlan, { med: sym, lang: 'th', doseText: 'x', reliever: null, pefBest: '' }));
    await wait(200);
    log('MART plan (Thai): extra inhalation + daily maximum 12', /สูดเพิ่ม 1 ครั้ง/.test(host.textContent) && /ไม่เกิน 12 ครั้ง/.test(host.textContent), host.textContent.slice(0, 200));
    r.unmount(); host.remove();
  }

  // --- Share link + deep link
  log('no copy-link button on cards', !document.querySelector('#drug-41 button[title*="link" i]') && typeof shareUrlFor === 'undefined', '');
  // --- Steroid-dose grading (GINA 2026 Table 6)
  log('ICS grade: budesonide 800 adult = medium, 801 = high', gradeIcs('bud', 800, 'adult') === 'medium' && gradeIcs('bud', 801, 'adult') === 'high', '');
  log('ICS grade: FP 500 adult = medium, 1000 = high; FF 100 low to medium (one GINA band), 200 high', gradeIcs('fp', 500, 'adult') === 'medium' && gradeIcs('fp', 1000, 'adult') === 'high' && gradeIcs('ff', 100, 'adult') === 'lowmed' && gradeIcs('ff', 200, 'adult') === 'high' && /low to medium 100, high >100/.test(ICS_TEXT.en.band(ICS_BANDS.adult.ff)), '');
  log('ICS metered: Symbicort Turbuhaler 160/4.5 = 200 mcg, Trimbow = 100 extrafine', icsInfo(deviceData.find(d => d.id === 72)).mcg === 200 && icsInfo(deviceData.find(d => d.id === 25)).key === 'bdpEf' && icsInfo(deviceData.find(d => d.id === 25)).mcg === 100, '');
  log('mometasone pMDI (GINA 2026: 200-400 low to medium, >400 high): Asmanex HFA 100 and Dulera 100/5 are Low / Medium, the 200 strengths High; the DPIs have no level', icsLevels(byId(509)).join() === 'low,medium' && icsLevels(byId(515)).join() === 'low,medium' && icsLevels(byId(510)).join() === 'high' && icsLevels(byId(516)).join() === 'high' && [511, 537, 538, 539, 540, 541].every(id => icsLevels(byId(id)).length === 0 && icsInfo(byId(id)) === null), [509, 510, 515, 516].map(id => icsLevels(byId(id)).join('/')));
  log('steroid calculator: mometasone pMDI graded 400 = low to medium, 800 = high, 100 = below; label maximum 4 inhalations a day', icsInfo(byId(509)).key === 'mom' && icsInfo(byId(509)).mcg === 100 && icsInfo(byId(516)).mcg === 200 && gradeIcs('mom', 400) === 'lowmed' && gradeIcs('mom', 200) === 'lowmed' && gradeIcs('mom', 800) === 'high' && gradeIcs('mom', 401) === 'high' && gradeIcs('mom', 100) === 'below' && [509, 510, 515, 516].every(id => LABEL_MAX[id].n === 4) && /low to medium 200–400, high >400/.test(ICS_TEXT.en.band(ICS_BANDS.adult.mom)), [gradeIcs('mom', 400), gradeIcs('mom', 800), ICS_TEXT.en.band(ICS_BANDS.adult.mom)]);
  log('ciclesonide (GINA 2026: 80-160 low, >160-320 medium, >320 high): Alvesco 80 Low / Medium / High, Alvesco 160 Medium / High; calculator grades 160 low, 320 medium, 640 high; label maximum 640 mcg a day', icsLevels(byId(505)).join() === 'low,medium,high' && icsLevels(byId(506)).join() === 'medium,high' && byId(505).doseRange.low === '1 puff BID' && byId(506).doseRange.medium === '1 puff BID' && icsInfo(byId(505)).key === 'cic' && icsInfo(byId(506)).mcg === 160 && gradeIcs('cic', 160) === 'low' && gradeIcs('cic', 320) === 'medium' && gradeIcs('cic', 640) === 'high' && gradeIcs('cic', 40) === 'below' && LABEL_MAX[505].mcg === 640 && LABEL_MAX[506].mcg === 640, [icsLevels(byId(505)).join('/'), icsLevels(byId(506)).join('/'), gradeIcs('cic', 320)]);
  location.hash = '#drug=261'; await wait(900);
  log('deep link to QVAR (not in TH) adds a licensed country and highlights it', btnExact('US').getAttribute('aria-pressed') === 'true' && !!document.getElementById('drug-261') && /ring-4/.test(document.getElementById('drug-261').className), '');
  location.hash = ''; await wait(200);

  { const names = [...document.querySelectorAll('header button')].map(b => b.textContent.trim());
    const i = names.findIndex(n => n.includes('Device Guide'));
    log('header: Device Guide sits right before Spacer & Mask', i >= 0 && (names[i + 1] || '').includes('Spacer & Mask'), names); }
  // --- Top-right controls stay under pop-ups
  { const ctl = document.querySelector('[data-top-controls]');
    // a smooth scroll from an earlier step may still be running: keep scrolling until the controls are on screen
    for (let i = 0; i < 30 && ctl.children[1].getBoundingClientRect().top < 0; i++) { window.scrollTo({ top: 0, behavior: 'instant' }); await wait(100); }
    const rc = ctl.children[1].getBoundingClientRect();
    const x = rc.left + rc.width / 2, y = rc.top + rc.height / 2;
    const before = ctl.contains(document.elementFromPoint(x, y));
    [...document.querySelectorAll('header button')].find(b => b.textContent.includes('Spacer & Mask')).click(); await wait(300);
    const covered = !ctl.contains(document.elementFromPoint(x, y));
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })); await wait(250);
    log('top-right controls are hidden behind an open pop-up', before && covered, { before, covered, top: Math.round(rc.top), scrollY }); }
  // --- Spacer & Mask guide
  { const b = [...document.querySelectorAll('header button')].find(x => x.textContent.includes('Spacer & Mask')); b.click(); await wait(300);
    const g = document.querySelector('[data-spacer-guide]');
    const no = g && g.querySelector('[data-spacer-group="noSpacer"]'), yes = g && g.querySelector('[data-spacer-group="spacer"]');
    log('Spacer guide: children\'s rows for comparison, adult row highlighted, grouped inhalers', !!g && !!g.querySelector('[data-adult-row]') && /Adults/.test(g.querySelector('[data-adult-row]').textContent) && /0–3 years/.test(g.textContent) && /for comparison/.test(g.textContent) && no.textContent.includes('QVAR RediHaler') && no.textContent.includes('Relvar') && yes.textContent.includes('Ventolin') && !yes.textContent.includes('QVAR'), g ? '' : 'missing');
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })); await wait(250);
    log('Escape closes the Spacer guide', !document.querySelector('[data-spacer-guide]'), ''); }
  // --- Steroid-dose calculator UI
  { const b = [...document.querySelectorAll('header button')].find(x => x.textContent.includes('Steroid Dose')); b.click(); await wait(300);
    const m = document.querySelector('[data-ics-calc]');
    const res = () => m.querySelector('[data-ics-result="bud"]');
    log('Steroid calc opens: Symbicort 160/4.5 1 BID = 400 mcg budesonide, low', !!m && res() && res().dataset.grade === 'low' && res().textContent.includes('400 mcg/day'), m ? (res() || m).textContent.slice(0, 160) : 'missing');
    const setVal = (el, v) => { const p = Object.getOwnPropertyDescriptor(el.tagName === 'SELECT' ? HTMLSelectElement.prototype : HTMLInputElement.prototype, 'value'); p.set.call(el, v); el.dispatchEvent(new Event(el.tagName === 'SELECT' ? 'change' : 'input', { bubbles: true })); };
    setVal(m.querySelector('[data-ics-per]'), '2'); await wait(150);
    log('Steroid calc: 2 BID = 800 mcg, medium', res().dataset.grade === 'medium' && res().textContent.includes('800 mcg/day'), res().textContent);
    setVal(m.querySelector('[data-ics-prn]'), '1'); await wait(150);
    { const mx = () => m.querySelector('[data-ics-max]');
      setVal(m.querySelector('[data-ics-prn]'), '0'); await wait(150);
      log('Steroid calc: label maximum shown (Symbicort 160/4.5: 8 a day, UK SmPC)', !!mx() && mx().dataset.icsMax === 'ok' && /8 inhalations a day \(UK SmPC\)/.test(mx().textContent), mx() ? mx().textContent : 'missing');
      setVal(m.querySelector('[data-ics-per]'), '5'); await wait(150);
      log('Steroid calc: 5 inhalations twice daily (10) → above label maximum warning', mx().dataset.icsMax === 'over' && /Above the label maximum of 8/.test(mx().textContent) && /above its label maximum/.test(m.textContent), mx().textContent);
      setVal(m.querySelector('[data-ics-per]'), '2'); await wait(150);
      setVal(m.querySelector('[data-ics-prn]'), '1'); await wait(150); }
    log('Steroid calc: + 1 MART inhalation = 1000 mcg, high', res().dataset.grade === 'high' && m.querySelector('[data-ics-overall]').dataset.icsOverall === 'high', res().textContent);
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })); await wait(250);
    log('Escape closes the Steroid calc', !document.querySelector('[data-ics-calc]'), ''); }

  // --- Step-down content inside the Follow-up Guide (GINA Box 4-13, GOLD 2026)
  { log('header: Step Down Guide button removed (merged into Follow-up)', ![...document.querySelectorAll('header button')].some(x => x.textContent.includes('Step Down')), '');
    [...document.querySelectorAll('header button')].find(x => x.textContent.includes('Follow-up')).click(); await wait(400);
    const m = document.querySelector('[data-followup]');
    log('Follow-up: step-down guide collapsed by default', !m.querySelector('[data-stepdown]'), '');
    m.querySelector('[data-fu-sdref]').click(); await wait(200);
    const g = m.querySelector('[data-stepdown]');
    const cur = g ? [...g.querySelectorAll('tr[data-current]')].map(r => r.textContent) : [];
    log('Follow-up: full Box 4-13 table (9 rows), Track 1 Step 4 row highlighted', !!g && g.querySelectorAll('[data-stepdown-table] tbody tr').length === 9 && cur.length === 1 && /Medium-dose ICS-formoterol MART/.test(cur[0]), cur);
    const clipped = [...m.querySelectorAll('section')].filter(x => x.scrollHeight > x.clientHeight + 2).length;
    log('Follow-up: sections not clipped', clipped === 0, 'clipped ' + clipped);
    m.querySelector('[data-fu-stable]').click(); await wait(200);
    log('Follow-up step-down outcome lists GINA when-and-how points (25–50%, risk factors)', /25–50%/.test(m.querySelector('[data-fu-result]').textContent) && /close supervision/.test(m.querySelector('[data-fu-result]').textContent), '');
    m.querySelector('[data-followup-tab="copd"]').click(); await wait(200);
    log('Follow-up COPD: ICS reference closed for LABA + LAMA', !m.querySelector('[data-copd-ics-ref]'), '');
    m.querySelector('[data-fu-cur="triple"]').click(); await wait(200);
    const r = m.querySelector('[data-copd-ics-ref]');
    log('Follow-up COPD: on triple, GOLD ICS-withdrawal reference opens with the four reasons', !!r && /started inappropriately/.test(r.textContent) && /recurrent pneumonia/.test(r.textContent) && /≥300 cells/.test(r.textContent) && !/not generally recommended/.test(r.textContent), r ? '' : 'missing');
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })); await wait(250);
    log('Escape closes the Follow-up Guide (step-down check)', !document.querySelector('[data-followup]'), ''); }

  // --- Follow-up Guide (GINA 2026 Table 2 / Figure 2 / Box 4-13; GOLD 2026 Figure 3.9)
  { [...document.querySelectorAll('header button')].find(b => b.textContent.includes('Follow-up')).click(); await wait(400);
    const m = document.querySelector('[data-followup]');
    const res = () => m.querySelector('[data-fu-result]');
    log('Follow-up opens on asthma Track 1 Step 4, well controlled → continue', !!m && res().dataset.fuResult === 'hold', m ? res().dataset.fuResult : 'missing');
    m.querySelector('[data-fu-q="0"]').click(); m.querySelector('[data-fu-q="1"]').click(); await wait(200);
    log('Follow-up: 2 control problems on Step 4 MART → step up to Step 5 with checks first', res().dataset.fuResult === 'up' && /Partly controlled/.test(res().textContent) && /Then step up to GINA Step 5/.test(res().textContent) && /Watch the patient use the inhaler/.test(res().textContent) && /3–6 months on Step 4/.test(res().textContent), res().textContent.slice(0, 160));
    { for (const b of [...m.querySelectorAll('button')].filter(b => /^Show all/.test(b.textContent.trim()))) { b.click(); await wait(200); }
      const names = [...m.querySelectorAll('h3')].map(h => h.textContent.trim());
      log('Follow-up Step 5: add-on LAMA, biologics advice; list adds tiotropium and asthma triple inhalers', /add-on LAMA/.test(res().textContent) && /anti-TSLP/.test(res().textContent) && names.includes('Spiriva Respimat 2.5 mcg') && names.some(n => /Trelegy|Trimbow/.test(n)), names); }
    m.querySelector('[data-fu-q="0"]').click(); m.querySelector('[data-fu-q="1"]').click(); await wait(200);
    m.querySelector('[data-fu-stable]').click(); await wait(200);
    log('Follow-up: well controlled 2–3 months on Step 4 MART → Box 4-13 step-down option', res().dataset.fuResult === 'down' && /Medium-dose ICS-formoterol MART/.test(res().textContent), res().textContent.slice(0, 160));
    m.querySelector('[data-fu-track="2"]').click(); await wait(100); m.querySelector('[data-fu-step="1"]').click(); await wait(200);
    log('Follow-up: Track 2 Step 1 well controlled → lowest step, keep ICS with SABA', /Already at the lowest step/.test(res().textContent), res().textContent.slice(0, 120));
    m.querySelector('[data-fu-exac]').click(); await wait(200);
    log('Follow-up: exacerbation → step up to Step 2, suggests Track 1, review within 1 week', res().dataset.fuResult === 'up' && /Then step up to GINA Step 2/.test(res().textContent) && /switching to Track 1/.test(res().textContent) && /within 1 week/.test(res().textContent), res().textContent.slice(0, 160));
    m.querySelector('[data-followup-tab="copd"]').click(); await wait(200);
    const copd = () => m.querySelector('[data-fu-copd]').textContent;
    log('Follow-up COPD: LABA+LAMA with dyspnoea → switch device/molecules, rehab, ensifentrine', /switching inhaler device or molecules/.test(copd()) && /ensifentrine/.test(copd()), copd().slice(0, 160));
    m.querySelector('[data-fu-prob="exac"]').click(); await wait(200);
    m.querySelector('[data-fu-cur="mono"]').click(); await wait(100); m.querySelector('[data-fu-eos="high"]').click(); await wait(200);
    log('Follow-up COPD (Fig 3.9): LABA or LAMA + exacerbation + eos ≥ 300 → LABA + LAMA + ICS', /escalate to LABA \+ LAMA \+ ICS/.test(copd()), copd().slice(0, 200));
    m.querySelector('[data-fu-eos="mid"]').click(); await wait(200);
    log('Follow-up COPD (Fig 3.9): LABA or LAMA + exacerbation + eos < 300 → LABA + LAMA', /Blood eosinophils < 300 cells\/µL: escalate to LABA \+ LAMA\./.test(copd()), '');
    m.querySelector('[data-fu-cur="dual"]').click(); await wait(200);
    log('Follow-up COPD: LABA+LAMA with exacerbations, eos 100–299 → add ICS (triple)', /Escalate to LABA \+ LAMA \+ ICS/.test(copd()), copd().slice(0, 160));
    m.querySelector('[data-fu-eos="low"]').click(); await wait(200);
    log('Follow-up COPD: default = currently smoking → stop-smoking advice; azithromycin less preferred', /Stop smoking/.test((m.querySelector('[data-fu-quit]') || {}).textContent || '') && /less preferred/.test(copd()), '');
    m.querySelector('[data-fu-exsmoker]').click(); await wait(150);
    log('Follow-up COPD: eos < 100 → azithromycin (ex-smoker), no ICS', /Azithromycin/.test(copd()) && !/Escalate to LABA \+ LAMA \+ ICS/.test(copd()), copd().slice(0, 160));
    m.querySelector('[data-fu-cur="triple"]').click(); await wait(100); m.querySelector('[data-fu-eos="high"]').click(); await wait(200);
    log('Follow-up COPD: ex-smoker → no stop-smoking box', !m.querySelector('[data-fu-quit]'), '');
    log('Follow-up COPD (Fig 3.9): triple, eos ≥ 300, no severe history → biologic only conditional', /is an option if there were ≥ 2 moderate/.test(copd()), '');
    m.querySelector('[data-fu-sevexac]').click(); await wait(150);
    log('Follow-up COPD (Fig 3.9): triple + ≥ 2 moderate/1 severe + eos ≥ 300 → biologic', /Biologic therapy \(≥ 2 moderate/.test(copd()) && /Azithromycin/.test(copd()), '');
    log('Follow-up COPD: triple with exacerbations, eos ≥ 300 → biologic', /dupilumab/.test(copd()) && /mepolizumab/.test(copd()), copd().slice(0, 160));
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })); await wait(250);
    log('Escape closes the Follow-up Guide', !document.querySelector('[data-followup]'), ''); }

  // --- Follow-up Guide: current treatment from selected inhalers → detected GINA step
  { const clear = () => { const b = [...document.querySelectorAll('button')].find(x => x.textContent.trim() === 'Clear'); if (b) b.click(); };
    const pick = async (id) => { const card = document.getElementById('drug-' + id); const b = card && [...card.querySelectorAll('button')].find(x => /Select/.test(x.textContent)); if (b) { b.click(); await wait(150); } return !!b; };
    const setV = (el, v) => { const p = Object.getOwnPropertyDescriptor(el.tagName === 'SELECT' ? HTMLSelectElement.prototype : HTMLInputElement.prototype, 'value'); p.set.call(el, v); el.dispatchEvent(new Event(el.tagName === 'SELECT' ? 'change' : 'input', { bubbles: true })); };
    const openFU = async () => { document.querySelector('[data-bar-followup]').click(); await wait(400); return document.querySelector('[data-followup]'); };
    clear(); await wait(150);
    const okPick = await pick(72);
    let m = await openFU();
    const det = () => m.querySelector('[data-fu-detected]');
    log('Follow-up current: Symbicort 160/4.5 MART 1 BID (400 mcg metered, low) → Track 1 Step 3, chips set', okPick && det() && det().dataset.fuDetected === '1-3' && m.querySelector('[data-fu-track="1"]').getAttribute('aria-pressed') === 'true' && m.querySelector('[data-fu-step="3"]').getAttribute('aria-pressed') === 'true', det() ? det().textContent : 'missing');
    setV(m.querySelector('[data-fu-row="72"] [data-fu-per]'), '2'); await wait(200);
    log('Follow-up current: 2 inhalations BID (800 mcg, medium) → Track 1 Step 4', det().dataset.fuDetected === '1-4' && m.querySelector('[data-fu-step="4"]').getAttribute('aria-pressed') === 'true', det().textContent);
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })); await wait(250);
    clear(); await wait(150);
    await pick(62); await pick(1);
    m = await openFU();
    log('Follow-up current: Seretide Accuhaler 50/250 BID + Ventolin reliever → Track 2 Step 4 (medium ICS-LABA)', det() && det().dataset.fuDetected === '2-4' && /SABA is the reliever/.test(det().textContent), det() ? det().textContent : 'missing');
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })); await wait(250);
    await pick(15);
    m = await openFU();
    log('Follow-up current: + Spiriva Respimat (add-on LAMA) → Step 5', det() && det().dataset.fuDetected === '2-5' && /Add-on LAMA/.test(det().textContent), det() ? det().textContent : 'missing');
    m.querySelector('[data-followup-tab="copd"]').click(); await wait(200);
    const cd = m.querySelector('[data-fu-copd-detected]');
    log('Follow-up COPD: triple therapy matches GOLD Group E', (m.querySelector('[data-fu-gold]') || {}).dataset?.fuGold === 'triple' && /Group E/.test(m.querySelector('[data-fu-gold]').textContent), '');
    log('Follow-up COPD: selected ICS-LABA + LAMA detected as triple', !!cd && cd.dataset.fuCopdDetected === 'triple' && m.querySelector('[data-fu-cur="triple"]').getAttribute('aria-pressed') === 'true', cd ? cd.textContent : 'missing');
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })); await wait(250);
    clear(); await wait(150);
    [...document.querySelectorAll('header button')].find(b => b.textContent.includes('Follow-up')).click(); await wait(400);
    log('Follow-up with nothing selected shows the Select tip', !!document.querySelector('[data-fu-hint]'), '');
    { const fm = document.querySelector('[data-followup]');
      const setV2 = (el, v) => { const p = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value'); p.set.call(el, v); el.dispatchEvent(new Event('input', { bubbles: true })); };
      setV2(fm.querySelector('[data-fu-search]'), 'relvar'); await wait(200);
      const addBtn = fm.querySelector('[data-fu-add="101"]');
      log('Follow-up search finds Relvar Ellipta 100/25', !!addBtn, [...fm.querySelectorAll('[data-fu-add]')].map(b => b.textContent));
      if (addBtn) { addBtn.click(); await wait(200); }
      const d1 = fm.querySelector('[data-fu-detected]');
      log('Follow-up search: added Relvar 100 once daily (FF 100, low ICS-LABA) → Track 2 Step 3', !!fm.querySelector('[data-fu-row="101"]') && !!d1 && d1.dataset.fuDetected === '2-3', d1 ? d1.textContent : 'missing');
      fm.querySelector('[data-fu-remove="101"]').click(); await wait(200);
      log('Follow-up: remove clears the row', !fm.querySelector('[data-fu-row="101"]') && !!fm.querySelector('[data-fu-hint]'), '');
      setV2(fm.querySelector('[data-fu-search]'), 'lama'); await wait(200);
      const firstIds = [...fm.querySelectorAll('[data-fu-add]')].map(b => +b.dataset.fuAdd);
      log('Follow-up search by class: "lama" lists LAMA inhalers first (then LABA/LAMA, triple)', firstIds.length > 0 && deviceData.find(d => d.id === firstIds[0]).class === 'LAMA' && firstIds.some(id => deviceData.find(d => d.id === id).class === 'LABA / LAMA'), firstIds.map(id => deviceData.find(d => d.id === id).marketName));
      setV2(fm.querySelector('[data-fu-search]'), ''); await wait(100); }
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })); await wait(250);
    // Anoro (COPD only) → opens on COPD; asthma tab flags it as not indicated
    clear(); await wait(150);
    await pick(11);
    m = await openFU();
    log('Follow-up opens on COPD for Anoro (COPD-only), row shown, detected LABA + LAMA', m.querySelector('[data-followup-tab="copd"]').getAttribute('aria-selected') === 'true' && !!m.querySelector('[data-fu-row="11"]') && (m.querySelector('[data-fu-copd-detected]') || {}).dataset?.fuCopdDetected === 'dual', '');
    log('Follow-up COPD: Anoro (LABA + LAMA) matches GOLD Group B or E', (m.querySelector('[data-fu-gold]') || {}).dataset?.fuGold === 'dual' && /Group B or E/.test(m.querySelector('[data-fu-gold]').textContent), '');
    m.querySelector('[data-fu-prob="exac"]').click(); await wait(200);
    log('Follow-up COPD: LABA + LAMA with exacerbations → Group E', m.querySelector('[data-fu-gold]').dataset.fuGold === 'dualE', '');
    m.querySelector('[data-fu-sym="high"]').click(); m.querySelector('[data-fu-gexac="0"]').click(); await wait(200);
    log('Follow-up colours: high symptoms red, no exacerbations green', /bg-red-600/.test(m.querySelector('[data-fu-sym="high"]').className) && /bg-emerald-600/.test(m.querySelector('[data-fu-gexac="0"]').className), '');
    log('Follow-up COPD ABE: mMRC ≥ 2, no exacerbations → Group B; Anoro appropriate', m.querySelector('[data-fu-group]').dataset.fuGroup === 'B' && m.querySelector('[data-fu-verdict]').dataset.fuVerdict === 'ok' && /Appropriate for Group B/.test(m.querySelector('[data-fu-row="11"] [data-fu-row-verdict]').textContent), '');
    m.querySelector('[data-fu-sym="low"]').click(); await wait(200);
    log('Follow-up COPD ABE: low symptoms → Group A; LABA + LAMA is more than GOLD for A', m.querySelector('[data-fu-group]').dataset.fuGroup === 'A' && m.querySelector('[data-fu-verdict]').dataset.fuVerdict === 'above', '');
    m.querySelector('[data-fu-gexac="1"]').click(); await wait(200);
    log('Follow-up COPD ABE: ≥ 1 exacerbation → Group E; LABA + LAMA appropriate, ICS hint', m.querySelector('[data-fu-group]').dataset.fuGroup === 'E' && m.querySelector('[data-fu-verdict]').dataset.fuVerdict === 'ok' && /Consider adding ICS/.test(m.querySelector('[data-fu-verdict]').textContent), '');
    m.querySelector('[data-followup-tab="asthma"]').click(); await wait(200);
    const ni = m.querySelector('[data-fu-notind="Asthma"]');
    log('Follow-up asthma tab: Anoro still listed, flagged not indicated, LABA-without-ICS warning, no GINA step', !!m.querySelector('[data-fu-row="11"] [data-fu-notind-badge]') && !!ni && /Anoro/.test(ni.textContent) && /must not be used without an ICS/.test(ni.textContent) && !m.querySelector('[data-fu-detected]'), ni ? ni.textContent : 'missing');
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })); await wait(250);
    clear(); await wait(150);
    [...document.querySelectorAll('header button')].find(b => b.textContent.includes('Follow-up')).click(); await wait(400);
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })); await wait(250); }

  // --- Follow-up logic (v1.11.7)
  { const d1 = inferGinaFromRegimen([{ id: 202, per: 0, freq: 2, rel: true }, { id: 1, per: 0, freq: 2, rel: true }]);
    log('GINA detect: ICS taken with SABA (no daily ICS) → Track 2 Step 1, no SABA-only warning', d1.track === 2 && d1.step === 1 && d1.basis === 'icsWithSaba', d1);
    log('Step-down rows: Track 2 Step 5 includes high-dose ICS-LABA (Box 4-13)', STEPDOWN_ROWS[2][5].includes(2), STEPDOWN_ROWS[2][5]);
    const clear = () => { const b = [...document.querySelectorAll('button')].find(x => x.textContent.trim() === 'Clear'); if (b) b.click(); };
    const pick = async (id) => { const card = document.getElementById('drug-' + id); const b = card && [...card.querySelectorAll('button')].find(x => /Select/.test(x.textContent)); if (b) { b.click(); await wait(150); } };
    clear(); await wait(150); await pick(72); await pick(1);
    document.querySelector('[data-bar-followup]').click(); await wait(400);
    let m = document.querySelector('[data-followup]');
    const det = m.querySelector('[data-fu-detected]');
    log('Follow-up: Symbicort + Ventolin defaults to Symbicort maintenance + SABA reliever → Track 2 Step 3', !!det && det.dataset.fuDetected === '2-3' && !m.querySelector('[data-fu-row="72"] [data-fu-rel]').checked, det ? det.textContent : 'missing');
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })); await wait(250);
    clear(); await wait(150); await pick(1);
    document.querySelector('[data-bar-followup]').click(); await wait(400);
    m = document.querySelector('[data-followup]');
    m.querySelector('[data-followup-tab="copd"]').click(); await wait(200);
    const copdBox = () => m.querySelector('[data-fu-copd]').textContent;
    log('Follow-up COPD: Ventolin only → "Short-acting only", initial treatment by group (pending)', m.querySelector('[data-fu-cur="short"]').getAttribute('aria-pressed') === 'true' && /Not on long-acting maintenance/.test(copdBox()) && /Assess the GOLD group/.test(copdBox()), copdBox().slice(0, 160));
    m.querySelector('[data-fu-sym="low"]').click(); m.querySelector('[data-fu-gexac="0"]').click(); await wait(200);
    log('Follow-up COPD: short-acting only, Group A → LABA or LAMA preferred, mono list', /Group A: a long-acting bronchodilator/.test(copdBox()) && /LABA or LAMA inhalers/.test(copdBox()), '');
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })); await wait(250);
    clear(); await wait(150); }

  // --- Cautions per drug class on cards
  // Cautions are a ⚠ symbol; a click opens a popover with the full text
  const cautionText = async (name) => {
    const c = cardFor(name); const btn = c && c.querySelector('[data-cautions-btn]');
    if (!btn) return '';
    btn.click(); await wait(250);
    const pop = document.querySelector('[data-cautions-pop]'); const txt = pop ? pop.textContent : '';
    document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true })); await wait(200);
    return txt;
  };
  log('cautions collapsed to a symbol on cards (no text until clicked)', !!cardFor('Spiriva HandiHaler').querySelector('[data-cautions-btn]') && !/glaucoma/.test(cardFor('Spiriva HandiHaler').textContent), '');
  await wait(1200); // let any smooth scroll from earlier steps finish (scrolling closes the popover)
  const lamaC = await cautionText('Spiriva HandiHaler');
  log('LAMA card cautions: glaucoma and urinary retention', /glaucoma/.test(lamaC) && /urinary retention/.test(lamaC), lamaC.slice(0, 120));
  const icsC = await cautionText('Seretide Accuhaler 50/250');
  log('ICS-LABA card cautions: pneumonia in COPD and never LABA without ICS', /pneumonia/.test(icsC) && /never use a LABA without an ICS/.test(icsC), '');
  const sabaC = await cautionText('Ventolin Evohaler 100 mcg');
  log('SABA card cautions: tremor; no ICS cautions on SABA', /Tremor/.test(sabaC) && !/thrush/.test(sabaC), '');
  log('caution popover closes on outside click', !document.querySelector('[data-cautions-pop]'), '');

  // --- Adult-only app (v1.11.0)
  log('adult only: no Children guide button, no ages 6–11 dose rows', !btnByText('Children 6–11') && !document.querySelector('[data-child-dose]') && typeof CHILD_DOSE === 'undefined' && !/Ages 6–11/.test(document.body.innerText), '');
  { const h = document.querySelector('header');
    const made = [...h.querySelectorAll('p')].find(p => /Made by Warodom/.test(p.textContent)), link = h.querySelector('a[href="#disclaimer-heading"]');
    log('title "Adult Bronchodilator Device Guide", subtitle cites GINA and GOLD 2026', h.querySelector('h1').textContent === 'Adult Bronchodilator Device Guide' && /based on GINA and GOLD 2026/.test(h.textContent) && document.title === 'Adult Bronchodilator Device Guide', document.title);
    log('disclaimer link sits below "Made by"', !!made && !!link && (made.compareDocumentPosition(link) & Node.DOCUMENT_POSITION_FOLLOWING) > 0, ''); }

  // --- Thai changelog covers every version, line for line
  const clGaps = changelogData.filter(e => !CHANGELOG_TH[e.version] || CHANGELOG_TH[e.version].features.length !== e.features.length || CHANGELOG_TH[e.version].bugs.length !== e.bugs.length).map(e => e.version);
  log('Thai changelog has every version with matching line counts', clGaps.length === 0, clGaps);

  // --- Patient sheet: nebuliser doses written out
  const respules = deviceData.find(d => d.id === 19);
  log('nebuliser dose in Thai: budesonide respules', patientDose(respules, respules.doseRange, 'th') === 'พ่นยาผ่านเครื่องพ่นละออง 0.25–1 mg วันละ 1–2 ครั้ง', patientDose(respules, respules.doseRange, 'th'));
  const salNeb = deviceData.find(d => d.id === 17);
  log('nebuliser dose in English: salbutamol nebule PRN', patientDose(salNeb, salNeb.doseRange, 'en') === 'Nebulise 2.5 mg every 4–6 hours when needed', patientDose(salNeb, salNeb.doseRange, 'en'));
  const berNeb = deviceData.find(d => d.id === 18);
  log('nebuliser dose in Thai: Berodual drops', /หยด/.test(patientDose(berNeb, berNeb.doseRange, 'th')) && /วันละ 4 ครั้ง/.test(patientDose(berNeb, berNeb.doseRange, 'th')), patientDose(berNeb, berNeb.doseRange, 'th'));
  const ind = id => deviceData.find(d => d.id === id).indications.join();
  log('indications follow Thai FDA labels', ind(301) === 'Asthma,COPD' && ind(202) === 'Asthma' && ind(71) === 'Asthma' && ind(102) === 'Asthma,COPD' && ind(72) === 'Asthma,COPD' && ind(61) === 'Asthma,COPD' && ind(11) === 'COPD', [301, 202, 71, 102, 72, 61, 11].map(ind));
  log('non-Thai products follow US FDA labels', [201, 203, 91, 92, 51, 261].every(id => ind(id) === 'Asthma') && ind(16) === 'COPD' && ind(24) === 'Asthma,COPD', [201, 203, 91, 92, 51, 261, 16, 24].map(ind));
  const lic = (id, r) => (licenceIn(deviceData.find(d => d.id === id), r) || ['-']).join();
  log('EU (Irish) label: Flixotide and Pulmicort Turbuhaler include COPD; UK asthma only', lic(201, 'eu') === 'Asthma,COPD' && lic(92, 'eu') === 'Asthma,COPD' && lic(202, 'uk') === 'Asthma' && lic(91, 'uk') === 'Asthma', [lic(201, 'eu'), lic(92, 'eu'), lic(202, 'uk'), lic(91, 'uk')]);
  log('no Thai/US product: follows UK/EU label', ind(33) === 'Asthma' && ind(293) === 'Asthma' && ind(302) === 'Asthma' && ind(291) === 'Asthma,COPD' && ind(8) === 'Asthma', [33, 293, 302, 291, 8].map(ind));
  log('Giona 200 mcg: asthma only, 200 doses', deviceData.find(d => d.id === 294).indications.join() === 'Asthma' && deviceData.find(d => d.id === 294).totalDoses === '200 doses', '');

  // --- Device Type sort: named device A-Z, then brand A-Z within each device
  const sortSel = [...document.querySelectorAll('select')].find(x => [...x.options].some(o => o.value === 'deviceAsc'));
  const setSort = async (v) => { Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value').set.call(sortSel, v); sortSel.dispatchEvent(new Event('change', { bubbles: true })); await wait(300); };
  const sortedRows = () => [...document.querySelectorAll('#printable-drug-list > div[data-shape]')].map(c => [c.dataset.shape, c.querySelector('h3').textContent.trim()]);
  const inOrder = (rows, dir) => rows.every((r, i) => { if (!i) return true; const p = rows[i - 1]; const d = p[0].localeCompare(r[0], 'en', { sensitivity: 'base' }) * dir; return d < 0 || (d === 0 && p[1].localeCompare(r[1]) <= 0); });
  await setSort('deviceAsc');
  const asc = sortedRows();
  log('Device sort A-Z: devices alphabetical, brands A-Z within each', asc.length > 5 && inOrder(asc, 1) && asc[0][0] === 'Breezhaler' || (asc.length > 5 && inOrder(asc, 1)), asc.map(r => r.join(':')).join(' | '));
  await setSort('deviceDesc');
  const desc = sortedRows();
  log('Device sort Z-A: devices reverse, brands still A-Z within each', desc.length > 5 && inOrder(desc, -1), desc.map(r => r.join(':')).join(' | '));
  await setSort('nameAsc');

  // --- Active-filter chips, the Key, and text sizes (default view: Thailand, currently registered, no filters)
  { const chips = () => [...document.querySelectorAll('[data-active-filters] [data-chip]')].map(c => c.dataset.chip);
    const fbtn = (txt) => [...document.querySelectorAll('[data-filter-bar] button')].find(b => b.textContent.trim() === txt);
    { const c = document.querySelector('[data-clear-filters]'); if (c) { c.click(); await wait(400); } }
    log('no filter chips in the default view', !document.querySelector('[data-active-filters]'), chips());
    const before = cardNames().length;
    fbtn('ICS').click(); await wait(300); fbtn('MDI').click(); await wait(300); fbtn('US').click(); await wait(300);
    setInput(search(), 'a'); await wait(400);
    log('each active filter shows as a chip (search, countries, class, device)', ['search', 'countries', 'class-ICS', 'device-MDI'].every(k => chips().includes(k)) && chips().length === 4 && /Countries: TH, US/.test(document.querySelector('[data-chip="countries"]').textContent) && !!document.querySelector('[data-active-filters] [data-clear-filters]') && !document.querySelector('[data-filter-bar] [data-clear-filters]') && document.querySelector('[data-active-filters]').firstElementChild.hasAttribute('data-clear-filters'), chips());
    document.querySelector('[data-chip="class-ICS"]').click(); await wait(300);
    log('a chip removes only its own filter', !chips().includes('class-ICS') && chips().length === 3 && fbtn('ICS').className.indexOf('bg-indigo-600') < 0, chips());
    document.querySelector('[data-chip="countries"]').click(); await wait(300);
    log('the Countries chip returns the filter to Thailand only', !chips().includes('countries') && fbtn('US').getAttribute('aria-pressed') === 'false' && fbtn('TH').getAttribute('aria-pressed') === 'true', chips());
    document.querySelector('[data-clear-filters]').click(); await wait(400);
    log('Clear button at the start of the chips row resets everything', !document.querySelector('[data-active-filters]') && search().value === '' && cardNames().length === before, [chips(), cardNames().length, before]);
    reg('past').click(); await wait(300);
    const st = document.querySelector('[data-chip="status"]');
    log('FDA status chip shows the selected statuses', !!st && /FDA: Currently, Past/.test(st.textContent), st && st.textContent);
    st.click(); await wait(300);
    log('removing the FDA chip returns to Currently only', !document.querySelector('[data-active-filters]') && reg('past').getAttribute('aria-pressed') === 'false' && cardNames().length === before, cardNames().length);

    document.querySelector('[data-legend-btn]').click(); await wait(400);
    const lg = document.querySelector('[data-legend-modal]');
    log('Key button opens the key with every section', !!lg && ['reg', 'nlem', 'price', 'class', 'device', 'badges'].every(k => lg.querySelector('[data-legend-' + k + ']')) && /TH †/.test(lg.textContent) && /TH ⊘/.test(lg.textContent) && /NLEM · Basic \(b\)/.test(lg.textContent) && /Long-acting muscarinic antagonist/.test(lg.textContent) && /Soft mist inhaler/.test(lg.textContent) && !!lg.querySelector('[data-icon-na]'), lg && lg.textContent.slice(0, 200));
    await esc();
    log('Escape closes the key', !document.querySelector('[data-legend-modal]'), '');

    const px = (el) => parseFloat(getComputedStyle(el).fontSize);
    const dv = cardFor('Seretide Evohaler 25/125').querySelector('[data-dose-value]');
    log('cards: low / medium / high dose values are 12px', !!dv && px(dv) >= 12, dv && px(dv));
    document.querySelector('button[aria-label="List View"]').click(); await wait(400);
    const row = cardFor('Ventolin Evohaler 100 mcg');
    const sizes = [px(row.querySelector('h3')), px(row.querySelector('[data-holder-name]')), px(row.querySelector('[data-flow]'))];
    log('list rows: product name at least 13px, holder and flow at least 11px', sizes[0] >= 13 && sizes[1] >= 11 && sizes[2] >= 11, sizes);
    { const ls = row.querySelector('[data-list-select]'), sb = ls.querySelector('button').getBoundingClientRect(), db = ls.querySelector('[data-details]').getBoundingClientRect();
      log('list rows: Details button sits directly under the Select button, not in the facts line', db.top >= sb.bottom && db.top - sb.bottom < 12 && Math.abs(db.right - sb.right) < 2 && !row.querySelector('[data-list-details] [data-details]') && row.querySelectorAll('[data-details]').length === 1, [sb.bottom, db.top, sb.right, db.right]); }
    document.querySelector('button[aria-label="Grid View"]').click(); await wait(400); }

  // --- US products added from the FDA list and US labels
  { const us = deviceData.filter(d => d.id >= 500 && d.id <= 530);
    log('US additions: 30 products, each with a US licence, a US holder and a technique card; Trimbow has its US licence', us.length === 30 && licenceIn(byId(25), 'us').join() === 'Asthma' && HOLDER_ABROAD.us[25] === 'Chiesi' && us.every(d => licenceIn(d, 'us') && HOLDER_ABROAD.us[d.id] && TECHNIQUE[d.shape] && IconMap[d.shape]), us.filter(d => !(licenceIn(d, 'us') && HOLDER_ABROAD.us[d.id] && TECHNIQUE[d.shape])).map(d => d.id));
    log('US additions: Thai status from the register (Yupelri current; Alvesco, Asmanex Twisthaler, Striverdi, Incruse, Tudorza, Duaklir past; the rest never)', us.filter(d => thaiStatus(d) === 'current').map(d => d.id).join() === '521' && us.filter(d => thaiStatus(d) === 'past').map(d => d.id).join() === '505,506,511,517,519,520,523' && holderText(byId(521), { isTh: false }) === 'Viatris Pharmaceutical (Thailand) Ltd.', us.filter(d => thaiStatus(d) !== 'never').map(d => d.id));
    log('minimum flow from references: Spiromax / RespiClick and Pressair (Genuair) 40, Twisthaler 28 (Ghosh 2017, Clark 2020); RespiClick uses the Spiromax card with its own label', [405, 406, 501, 512, 513, 514, 520, 523].every(id => pifNeeded(byId(id).flowRate) === 40) && pifNeeded(byId(511).flowRate) === 28 && byId(501).shape === 'Spiromax' && shapeLabel(byId(501)) === 'RespiClick' && DEVICE_NAMES.Spiromax.en === 'Spiromax / RespiClick', '');
    const yc = cardFor('Yupelri 175 mcg/3 mL');
    log('Yupelri is listed in the default (Thailand) view with price Unknown', !!yc && !!yc.querySelector('[data-price-unknown]') && yc.querySelector('[data-price-unknown]').textContent === 'Unknown', !!yc);
    document.querySelector('button[aria-label="List View"]').click(); await wait(400);
    const an = cardFor('Anoro Ellipta 62.5/25 mcg');
    const noCond = !!an && !an.querySelector('[data-nlem-condition]') && !/NLEM condition/.test(an.textContent);
    an.querySelector('[data-details]').click(); await wait(400);
    const dm = document.querySelector('[data-detail-modal]');
    log('Anoro: the NLEM condition is not on the list row, only in the detail view', noCond && !!dm && /NLEM condition: COPD group B/.test(dm.querySelector('[data-detail-nlem]').textContent), noCond);
    await esc(); document.querySelector('button[aria-label="Grid View"]').click(); await wait(400); }

  // --- Japan (PMDA)
  { const jp = deviceData.filter(d => licenceIn(d, 'jp'));
    log('Japan: 53 products licensed, each with a holder and a Japanese name; per-strength indications', jp.length === 53 && jp.every(d => HOLDER_ABROAD.jp[d.id] && JP_NAME[d.id]) && licenceIn(byId(62), 'jp').join() === 'Asthma,COPD' && licenceIn(byId(61), 'jp').join() === 'Asthma' && licenceIn(byId(102), 'jp').join() === 'Asthma' && licenceIn(byId(13), 'jp').join() === 'COPD' && !licenceIn(byId(71), 'jp') && statusIn(byId(71), 'jp') === 'never', jp.length);
    const jb = [...document.querySelectorAll('[data-filter-bar] button')].find(b => b.textContent.trim() === 'JP'), tb = [...document.querySelectorAll('[data-filter-bar] button')].find(b => b.textContent.trim() === 'TH');
    jb.click(); await wait(300); tb.click(); await wait(500);
    log('JP button alone lists the 53 products sold in Japan', cardNames().length === 53 && cardNames().includes('Seretide Accuhaler 50/250') && !cardNames().includes('Symbicort Turbuhaler 80/4.5'), cardNames().length);
    const dm = await openDetail('Ventolin Evohaler 100 mcg');
    const jr = dm.querySelector('[data-detail-country="jp"]');
    log('detail view: Japan row shows the holder and the Japanese name (Ventolin = Sultanol)', !!jr && /GlaxoSmithKline K\.K\./.test(jr.textContent) && /Sold in Japan as Sultanol Inhaler/.test(jr.querySelector('[data-detail-jpname]').textContent), jr && jr.textContent.slice(0, 160));
    await esc(); document.querySelector('[data-clear-filters]').click(); await wait(500); }

  // --- Trimbow 172/5/9 and the Japan-market additions
  { const add = deviceData.filter(d => d.id >= 531);
    log('16 more products: Trimbow 172/5/9 (Thailand, asthma) and 15 from the Japanese market, all with a technique card and holders where registered', add.length === 16 && thaiStatus(byId(531)) === 'current' && licenceIn(byId(531), 'th').join() === 'Asthma' && add.filter(d => d.id >= 532).every(d => licenceIn(d, 'jp') && HOLDER_ABROAD.jp[d.id] && TECHNIQUE[d.shape]) && statusIn(byId(535), 'eu') === 'past' && statusIn(byId(533), 'th') === 'past' && statusIn(byId(546), 'us') === 'current' && shapeLabel(byId(533)) === 'Swinghaler', add.length);
    { const fb = document.querySelector('[data-top-controls] [data-feedback]'), vb = document.querySelector('[data-top-controls] button');
      log('Meptin Swinghaler has its own picture in its teal colour, not N/A', !ICON_UNKNOWN.has(533) && ICON_SHAPE[533] === 'Swinghaler' && IconMap.Swinghaler === SwinghalerIcon && iconHex(byId(533)) === '#5ecfc9' && !COLOUR_UNKNOWN.has(533), '');
    log('Feedback button sits right after the version button and opens the form in a new tab', !!fb && fb.previousElementSibling === vb && fb.getAttribute('href') === 'https://forms.gle/ZMWtPk3WEjFvbkfj6' && fb.target === '_blank' && /noopener/.test(fb.rel) && /Feedback/.test(fb.textContent), fb && fb.outerHTML.slice(0, 120)); } }

  // --- Device filter: sub-types in A-Z order, Other DPI last
  { const fbtn = (txt) => [...document.querySelectorAll('[data-filter-bar] button')].find(b => b.textContent.trim() === txt);
    fbtn('DPI').click(); await wait(400);
    const names = [...document.querySelectorAll('[data-shape-group] button')].map(b => b.textContent.trim());
    const az = names.slice(0, -1);
    log('DPI device names are A-Z with Other DPI last; no Capsule entry', names.length > 8 && names[names.length - 1] === 'Other DPI' && !names.includes('Capsule') && az.join() === [...az].sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })).join(), names);
    fbtn('DPI').click(); await wait(300); }

  // --- Components directly under the name, above the country lines
  { const order = (c) => { const h = c.querySelector('h3'), cn = c.querySelector('[data-countries]'); const sub = [...c.querySelectorAll('div, span')].find(e => /^(SABA|ICS)\s*:/.test(e.textContent.trim()) && e.children.length <= 2); return sub && cn ? [Math.round(h.getBoundingClientRect().bottom), Math.round(sub.getBoundingClientRect().top), Math.round(cn.getBoundingClientRect().top)] : null; };
    const g = order(cardFor('Ventolin Evohaler 100 mcg'));
    document.querySelector('button[aria-label="List View"]').click(); await wait(400);
    const l = order(cardFor('Ventolin Evohaler 100 mcg'));
    log('components sit under the product name and above the country lines, in tile and list view', !!g && !!l && g[0] <= g[1] + 1 && g[1] < g[2] && l[0] <= l[1] + 1 && l[1] < l[2], [g, l]);
    document.querySelector('button[aria-label="Grid View"]').click(); await wait(400); }

  // --- Dark mode toggle
  document.querySelector('button[aria-label="Switch to dark mode"]').click(); await wait(300);
  log('dark mode toggles on', document.documentElement.classList.contains('dark'), '');
  document.querySelector('button[aria-label="Switch to light mode"]').click(); await wait(300);
  log('dark mode toggles off', !document.documentElement.classList.contains('dark'), '');

  // back to the default (brand rows on) for the next run
  if (groupBtn().getAttribute('aria-pressed') === 'false') { groupBtn().click(); await wait(300); }
  log('brand rows are back on at the end', localStorage.getItem('bdg-group-brand') === '1', localStorage.getItem('bdg-group-brand'));

  return out;
};
