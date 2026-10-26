const { useState, useEffect, useMemo } = React;

// --- Native SVG Icons ---
const Search = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>);
const LayoutGrid = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>);
const ListIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>);
const SortIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="15" y1="18" x2="15" y2="6"></line><polyline points="11 10 15 6 19 10"></polyline><line x1="9" y1="6" x2="9" y2="18"></line><polyline points="5 14 9 18 13 14"></polyline></svg>);
const ActivityIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>);
const BoxIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>);
const Check = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"></polyline></svg>);
const X = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>);
const Wind = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path><path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path><path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path></svg>);
const Sparkles = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275-1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4M3 5h4M19 3v4M17 5h4"/></svg>);
const CompareIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="8" height="14" x="3" y="5" rx="2"></rect><rect width="8" height="14" x="13" y="5" rx="2"></rect><line x1="11" x2="13" y1="12" y2="12"></line></svg>);
const Stethoscope = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path><circle cx="20" cy="10" r="2"></circle></svg>);
const ShieldPlus = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M8 11h8"></path><path d="M12 7v8"></path></svg>);
const HistoryIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>);
const BookOpen = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>);

const SunIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></svg>);
const MoonIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>);
const ArrowRightLeft = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m16 3 4 4-4 4"></path><path d="M20 7H4"></path><path d="m8 21-4-4 4-4"></path><path d="M4 17h16"></path></svg>);
const AlertTriangle = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>);
const InfoIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>);

// --- Dark theme layer ---
// The UI is written in light-mode Tailwind classes. Rather than add a dark:
// variant to every class, this remaps each colour utility the app uses when
// <html> has class "dark". Anything inside .light-lock (the PNG export cards)
// is excluded so exported images stay light.
(() => {
  const tints = { // Tailwind 300 / 400 / 500 as "r,g,b"
    amber: ['252,211,77', '251,191,36', '245,158,11'], blue: ['147,197,253', '96,165,250', '59,130,246'],
    cyan: ['103,232,249', '34,211,238', '6,182,212'], emerald: ['110,231,183', '52,211,153', '16,185,129'],
    fuchsia: ['240,171,252', '232,121,249', '217,70,239'], green: ['134,239,172', '74,222,128', '34,197,94'],
    indigo: ['165,180,252', '129,140,248', '99,102,241'], lime: ['190,242,100', '163,230,53', '132,204,22'],
    orange: ['253,186,116', '251,146,60', '249,115,22'], pink: ['249,168,212', '244,114,182', '236,72,153'],
    purple: ['216,180,254', '192,132,252', '168,85,247'], red: ['252,165,165', '248,113,113', '239,68,68'],
    rose: ['253,164,175', '251,113,133', '244,63,94'], sky: ['125,211,252', '56,189,248', '14,165,233'],
    stone: ['214,211,209', '168,162,158', '120,113,108'], teal: ['94,234,212', '45,212,191', '20,184,166'],
    violet: ['196,181,253', '167,139,250', '139,92,246'],
    yellow: ['253,224,71', '250,204,21', '234,179,8'],
  };
  const neutrals = {
    'bg-white': 'background-color:#151f32', 'bg-slate-50': 'background-color:#101a2b',
    'bg-slate-50/50': 'background-color:rgba(16,26,43,.5)', 'bg-slate-100': 'background-color:#0b1220',
    'bg-slate-100/95': 'background-color:rgba(11,18,32,.95)', 'bg-slate-200': 'background-color:#24324a',
    'text-slate-900': 'color:#f1f5f9', 'text-slate-800': 'color:#e2e8f0', 'text-slate-700': 'color:#cbd5e1',
    'text-slate-600': 'color:#a8b4c6', 'text-slate-500': 'color:#94a3b8', 'text-slate-400': 'color:#7d8ba1',
    'text-slate-300': 'color:#4a5a73', 'text-slate-200': 'color:#33425a',
    'border-slate-100': 'border-color:#1d2940', 'border-slate-200': 'border-color:#263449',
    'border-slate-200/50': 'border-color:rgba(38,52,73,.5)', 'border-slate-300': 'border-color:#33435c',
  };
  const hoverNeutrals = {
    'hover:bg-white': 'background-color:#1b2740', 'hover:bg-slate-50': 'background-color:#1b2740',
    'hover:bg-slate-100': 'background-color:#1f2c45', 'hover:bg-slate-300': 'background-color:#2f3e58',
    'hover:text-slate-600': 'color:#cbd5e1', 'hover:text-slate-700': 'color:#e2e8f0',
  };
  const esc = (c) => c.replace(/[:/]/g, (m) => '\\' + m);
  const rules = [];
  const add = (cls, decl, hover) => rules.push(`html.dark .${esc(cls)}${hover ? ':hover' : ''}:not(.light-lock *){${decl}}`);
  Object.entries(neutrals).forEach(([c, d]) => add(c, d));
  Object.entries(hoverNeutrals).forEach(([c, d]) => add(c, d, true));
  Object.entries(tints).forEach(([f, [c300, c400, c500]]) => {
    [['50', 0.12], ['100', 0.2]].forEach(([shade, a]) => {
      add(`bg-${f}-${shade}`, `background-color:rgba(${c500},${a})`);
      [10, 50, 80].forEach((o) => add(`bg-${f}-${shade}/${o}`, `background-color:rgba(${c500},${(a * o / 100).toFixed(3)})`));
      add(`hover:bg-${f}-${shade}`, `background-color:rgba(${c500},${a + 0.06})`, true);
    });
    ['500', '600'].forEach((s) => add(`text-${f}-${s}`, `color:rgb(${c400})`));
    ['700', '800', '900'].forEach((s) => add(`text-${f}-${s}`, `color:rgb(${c300})`));
    ['500', '600'].forEach((s) => add(`hover:text-${f}-${s}`, `color:rgb(${c300})`, true));
    [['100', 0.28], ['200', 0.35], ['300', 0.45]].forEach(([s, a]) => {
      add(`border-${f}-${s}`, `border-color:rgba(${c500},${a})`);
      add(`hover:border-${f}-${s}`, `border-color:rgba(${c500},.6)`, true);
    });
  });
  const style = document.createElement('style');
  style.id = 'dark-theme-layer';
  style.textContent = rules.join('\n');
  document.head.appendChild(style);
})();

// --- Custom Device SVGs ---
// Mix a hex colour toward another (0 = unchanged, 1 = target). Returns rgb() so
// both SVG and the html2canvas PNG export can read it.
const mixHex = (hex, target, t) => {
  const a = parseInt(hex.slice(1), 16), b = parseInt(target.slice(1), 16);
  const m = (s) => Math.round(((a >> s) & 255) + ((((b >> s) & 255) - ((a >> s) & 255)) * t));
  return `rgb(${m(16)}, ${m(8)}, ${m(0)})`;
};

// Flat MDI traced from the reference: tilted canister, actuator with a darker
// top rim and left face, mouthpiece with rim and dust cap. `color` is the
// actuator (the part that identifies the drug); canister stays aluminium.
const MdiIcon = ({ className, color, cap }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" strokeLinejoin="round">
    {/* Canister */}
    <path d="M 17.2 26.9 L 13.33 13.38 Q 12.5 10.5 15.38 9.65 L 35.42 3.75 Q 38.3 2.9 39.13 5.78 L 43 19.3 Z" fill="#e8ecf1" stroke="rgba(100,116,139,0.35)" strokeWidth="0.6" />
    <path d="M 17.2 26.9 L 13.33 13.38 Q 12.5 10.5 15.38 9.65 L 18.7 8.7 L 23.5 25.1 Z" fill="#c9d1da" />
    {/* Actuator: rim, left face and mouthpiece top in shade, front face in colour */}
    <path d="M 11.4 27.1 L 47.07 16.65 Q 48.6 16.2 49.04 17.74 L 64.4 70.9 L 71.8 70.9 L 71.8 96 L 37.1 96 Q 31.7 96 30.17 90.82 Z" fill={mixHex(color, '#000000', 0.14)} />
    <path d="M 21.6 26.8 L 49.3 18.7 L 63.4 66.9 L 44.2 70.9 L 71.8 70.9 L 71.8 96 L 45.7 96 Q 41.7 96 40.6 92.2 Z" fill={color} />
    {/* Mouthpiece rim and banded dust cap */}
    <rect x="71.8" y="71.6" width="1.9" height="24" fill="#c8cdd4" />
    <path d="M 73.7 74.6 L 86.2 74.6 Q 87.7 74.6 87.7 76.1 L 87.7 93 Q 87.7 94.5 86.2 94.5 L 73.7 94.5 Z" fill={cap || mixHex(color, '#ffffff', 0.55)} />
    <rect x="73.7" y="79" width="14" height="4.3" fill={cap ? mixHex(cap, '#ffffff', 0.25) : mixHex(color, '#ffffff', 0.72)} />
    <path d="M 73.7 88.8 L 87.7 88.8 L 87.7 93 Q 87.7 94.5 86.2 94.5 L 73.7 94.5 Z" fill={cap ? mixHex(cap, '#000000', 0.1) : mixHex(color, '#ffffff', 0.42)} />
  </svg>
);

// Respimat traced from the reference: flared cap with front hood, grey body with
// centre highlight, side dose-release button, colour stripe and the clear base
// with its cartridge. `color` drives cap, hood and stripe.
const SmiIcon = ({ className, color }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" strokeLinejoin="round">
    {/* Clear base with cartridge */}
    <path d="M 41 78.3 L 61.6 78.3 L 60 93.5 Q 59.7 96 57.2 96 L 45.1 96 Q 42.6 96 42.3 93.5 Z" fill="#e6e8ea" stroke="#aeb3b8" strokeWidth="0.7" />
    <rect x="45" y="80.7" width="12.7" height="10" rx="1" fill="#cfd3d7" />
    <rect x="45" y="85.3" width="12.7" height="0.6" fill="#b3b8bd" />
    {/* Dose-release button */}
    <rect x="35.6" y="45.6" width="4.5" height="26.3" rx="1.2" fill="#b4b9be" />
    {/* Body */}
    <path d="M 38.8 25.5 L 64.4 25.5 L 62.2 76 Q 62 78.6 59.4 78.6 L 43.4 78.6 Q 40.8 78.6 40.6 76 Z" fill="#c4c7ca" />
    <path d="M 47 25.5 L 56.5 25.5 L 55.6 78.6 L 47.6 78.6 Z" fill="#dcdee0" />
    <rect x="41.6" y="59.2" width="19.6" height="1.7" fill={color} />
    {/* Cap: front hood, then the flared top */}
    <path d="M 39.7 24.5 L 64.3 24.5 L 64.3 28.5 Q 64.3 32.6 60 32.6 L 47.5 32.6 Q 43 32.6 41.2 29 Q 40.2 27 39.7 24.5 Z" fill={color} />
    <path d="M 39.9 4 L 61.8 4 Q 64.2 4 64.8 6.4 L 66.8 21.8 L 67.6 23.5 Q 68 25.2 66.3 25.2 L 33.7 25.2 Q 32 25.2 32.4 23.5 L 33.5 21.8 L 36.9 6.4 Q 37.5 4 39.9 4 Z" fill={color} />
    <path d="M 34 25.2 L 66 25.2" stroke={mixHex(color, '#000000', 0.18)} strokeWidth="0.8" />
  </svg>
);

// Easyhaler traced from the reference: dose button on top of a grey body, with
// the mouthpiece seen in perspective at the lower left. `color` is the button.
const EasyhalerIcon = ({ className, color }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" strokeLinejoin="round">
    <path d="M 13 58.8 L 47.5 50 L 47.5 83.4 L 10.4 78.2 Z" fill="#a9acad" />
    <path d="M 47.4 37 L 47.4 9 Q 47.4 5.1 51.3 5.1 L 83.1 5.1 Q 87 5.1 87 9 L 87 37 Z" fill={color} />
    <rect x="46.5" y="35" width="43.1" height="59.9" rx="4" fill="#d9dbdc" stroke="#b6b9bb" strokeWidth="0.8" />
  </svg>
);

// Breezhaler traced from the reference: white outlined cap with moulded creases,
// grip dots either side of the seam, and a base whose side panels carry `color`.
const BreezhalerIcon = ({ className, color }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" strokeLinecap="round" strokeLinejoin="round">
    {/* Base */}
    <path d="M 18.6 77.8 L 81.4 77.8 L 81.4 90 Q 81.4 95.6 75.8 95.6 L 24.2 95.6 Q 18.6 95.6 18.6 90 Z" fill="#ffffff" />
    <path d="M 18.6 77.8 L 31.3 77.8 L 31.3 95.6 L 24.2 95.6 Q 18.6 95.6 18.6 90 Z" fill={color} />
    <path d="M 81.4 77.8 L 68.7 77.8 L 68.7 95.6 L 75.8 95.6 Q 81.4 95.6 81.4 90 Z" fill={color} />
    <path d="M 18.6 77.8 L 81.4 77.8 L 81.4 90 Q 81.4 95.6 75.8 95.6 L 24.2 95.6 Q 18.6 95.6 18.6 90 Z" stroke="#3f4447" strokeWidth="1.6" />
    {/* Cap */}
    <path d="M 30 5.1 L 70 5.1 Q 76.6 5.1 77 11.7 L 80.3 77.8 Q 50 75.6 19.7 77.8 L 23 11.7 Q 23.4 5.1 30 5.1 Z" fill="#ffffff" stroke="#3f4447" strokeWidth="1.6" />
    <g stroke="#9aa0a4" strokeWidth="0.7">
      <path d="M 35 11.5 Q 50 9 65 11.5" />
      <path d="M 35 11.5 L 32.9 75.4" />
      <path d="M 65 11.5 L 68.2 75.4" />
    </g>
    {/* Grip dots */}
    <g fill="#9aa0a4">
      <circle cx="45.2" cy="73" r="0.9" />
      <circle cx="50" cy="72.6" r="0.9" />
      <circle cx="54.8" cy="73" r="0.9" />
      <circle cx="45.2" cy="83.2" r="0.9" />
      <circle cx="50" cy="83.6" r="0.9" />
      <circle cx="54.8" cy="83.2" r="0.9" />
    </g>
  </svg>
);
// Accuhaler / Diskus traced from the reference: light outer shell with the
// thumb grip, dark body rising in an arch around the white dose-counter
// window, and wavy grip ridges. `color` is the body; shell and digits are tints.
// Digits for the number in the window, drawn in the traced style of the original "100":
// a filled "1", outlined rounded "0", and stroked "2" and "5" in the same 6.73 x 14.31 cell.
const diskusDigits = (label) => {
  if (label === '100') return [['1', 37.22], ['0', 45.29], ['0', 56.18]]; // positions as traced from the reference
  const chars = String(label).split('').filter(c => '0125'.includes(c));
  const width = (c) => (c === '1' ? 4.4 : 6.73), gap = 3.4;
  let x = 50 - (chars.reduce((sum, c) => sum + width(c), 0) + gap * (chars.length - 1)) / 2;
  return chars.map(c => { const at = [c, x]; x += width(c) + gap; return at; });
};
const DiskusDigit = ({ ch, x, tint }) => {
  if (ch === '1') return <path transform={`translate(${x} 40.34)`} d="M 2.32 0 L 4.4 0 L 4.4 16.14 L 2.32 16.14 L 2.32 2.32 L 0 4.28 L 0 2.08 Z" fill={tint} />;
  if (ch === '0') return <rect x={x} y="41.44" width="6.73" height="14.31" rx="3.36" stroke={tint} strokeWidth="2.2" />;
  const d = ch === '2'
    ? 'M 0 3.4 A 3.365 3.4 0 0 1 6.73 3.4 C 6.73 7.2 0 9.8 0 14.31 L 6.73 14.31'
    : 'M 6.3 0 L 0.9 0 L 0.4 6.3 C 1.4 5.3 2.4 5 3.3 5 A 3.43 4.65 0 0 1 3.3 14.31 C 1.9 14.31 0.7 13.6 0 12.3';
  return <path transform={`translate(${x} 41.44)`} d={d} stroke={tint} strokeWidth="2.2" strokeLinecap="round" />;
};
const DiskusIcon = ({ className, color, label = '100' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" strokeLinejoin="round">
    {/* Outer shell with thumb grip */}
    <path d="M 50 5.41 A 43 43 0 0 1 86.02 24.93 L 87.61 26.03 Q 88.6 23.6 90.05 23.95 Q 90.9 24.3 90.42 26.15 A 12.72 12.72 0 0 0 92.87 46.94 Q 95 47.4 96.54 49.02 Q 95 50.3 92.99 50.61 A 43 43 0 1 1 50 5.41 Z" fill={mixHex(color, '#ffffff', 0.45)} />
    {/* Body */}
    <path d="M 4.14 51.59 C 10.1 49.3, 18.6 43.9, 22.6 39.6 C 33 28.5, 39 21.38, 50 21.38 C 61 21.38, 67 28.5, 77.4 39.6 C 81.4 43.9, 89.9 49.3, 95.86 51.59 A 46 46 0 0 1 4.14 51.59 Z" fill={color} />
    <g stroke={mixHex(color, '#000000', 0.15)} strokeWidth="1.1">
      <path d="M 5.39 59.91 Q 10.07 58.81 15.57 58.81 C 22.3 58.81 40.64 74.22 50 74.22 C 59.36 74.22 77.7 58.81 84.43 58.81 Q 89.93 58.81 94.61 59.91" />
      <path d="M 6.12 62.47 Q 8.85 61.62 12.52 61.62 C 19.24 61.62 40.64 76.54 50 76.54 C 59.36 76.54 80.76 61.62 87.48 61.62 Q 91.15 61.62 93.88 62.47" />
      <path d="M 6.96 64.92 Q 8.6 64.43 10.68 64.43 C 17.41 64.43 40.64 79.35 50 79.35 C 59.36 79.35 82.59 64.43 89.32 64.43 Q 91.4 64.43 93.04 64.92" />
      <path d="M 8.14 67.73 Q 8.85 67.37 9.46 67.37 C 16.19 67.37 40.64 82.16 50 82.16 C 59.36 82.16 83.81 67.37 90.54 67.37 Q 91.15 67.37 91.86 67.73" />
      <path d="M 9.76 71.04 Q 10.31 70.55 11.29 70.55 C 15.57 71.4 40.64 84.86 50 84.86 C 59.36 84.86 84.43 71.4 88.71 70.55 Q 89.69 70.55 90.24 71.04" />
    </g>
    {/* Dose counter window */}
    <circle cx="50" cy="48.53" r="23.19" fill="#ffffff" />
    <path d="M 51.2 29.45 C 52.2 29.45, 52.2 30.6, 52.1 32.2 C 52 33.6, 51 34.25, 49.9 34.25 C 48.6 34.25, 47.7 33.4, 47.8 32.3 C 47.9 30.9, 49.6 29.45, 51.2 29.45 Z" fill={mixHex(color, '#ffffff', 0.45)} />
    <g data-icon-label={label}>
      {diskusDigits(label).map(([ch, x], i) => <DiskusDigit key={i} ch={ch} x={x} tint={mixHex(color, '#ffffff', 0.55)} />)}
    </g>
    <g fill="#cccccc">
      <rect x="41.87" y="59.29" width="16.39" height="1.35" rx="0.67" />
      <rect x="41.87" y="62.96" width="16.39" height="1.35" rx="0.67" />
    </g>
    {/* Half-way dose marker on the thumb grip */}
    <g transform="rotate(-20 80.69 40.09)">
      <rect x="78.19" y="38.64" width="5" height="2.9" rx="1.45" fill="#ffffff" />
      <text x="80.69" y="40.92" fontSize="2.3" fontWeight="700" fill="#1a1a1a" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif">50</text>
    </g>
  </svg>
);

// HandiHaler traced from the reference: rounded grey body with a top highlight,
// lid seam, capsule window, piercing button on the left and the mouthpiece
// cover at the lower right. `color` is the button dot and the cover.
const HandihalerIcon = ({ className, color }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" strokeLinecap="round" strokeLinejoin="round">
    {/* Body */}
    <path d="M 47.7 6.6 C 56 6.6, 64 8.6, 69.3 12 C 74 15, 77 18.6, 78.9 22.8 C 82 29, 84 33.5, 84.9 38.3 C 86 44, 86.3 49, 86.3 53.9 C 86.3 59, 86.2 64, 85.8 69.5 C 85.4 75, 84.8 79.5, 83.7 83.8 C 82.8 87.5, 81.8 89.6, 80.1 91 C 78.6 92.4, 76.6 92.95, 74.1 92.95 L 23.2 92.95 C 20.6 92.95, 19 92.2, 17.8 91 C 16 89, 14.9 86, 14.2 82.6 C 13 77, 12.2 74, 11.8 69.5 C 11.3 65, 11.1 60.5, 11.2 56.3 C 11.3 51, 11.6 46, 12.4 41.9 C 13.3 37, 14.6 32.7, 16.6 28.7 C 19 23.6, 22.3 19.3, 26.2 15.6 C 32 10, 39.5 6.6, 47.7 6.6 Z" fill="#e3e2dd" stroke="#b9b8b2" strokeWidth="0.6" />
    <ellipse cx="47" cy="19" rx="9" ry="5.5" fill="#ffffff" opacity="0.5" />
    {/* Lid seam */}
    <path d="M 29.5 50.9 Q 58 52 85.9 55.3" stroke="#8f8e88" strokeWidth="0.7" />
    {/* Capsule window */}
    <ellipse cx="45.33" cy="69.47" rx="6.2" ry="10.8" fill="#55585c" />
    <ellipse cx="46.9" cy="69.7" rx="4.2" ry="8.6" fill="#cfd3d7" />
    <ellipse cx="47.6" cy="69.7" rx="2.2" ry="6.8" fill="#f1f3f5" />
    {/* Mouthpiece cover */}
    <path d="M 83.9 55.93 L 96 59.64 L 88.69 84.44 L 75.52 84.08 Z" fill={color} />
    <path d="M 83.9 55.93 L 85.46 56.41 L 77.08 84.12 L 75.52 84.08 Z" fill={mixHex(color, '#000000', 0.2)} />
    {/* Piercing button */}
    <path d="M 29.2 51.5 C 22 52.6, 14 54.2, 9.4 53.9 A 5.4 5.4 0 0 1 9.4 43.1 C 14 43.3, 22 48.3, 29.2 51.5 Z" fill="#e8e7e2" stroke="#aaa9a3" strokeWidth="0.6" />
    <circle cx="9.4" cy="48.5" r="1.8" fill={mixHex(color, '#000000', 0.3)} />
    <circle cx="9.4" cy="48.5" r="1.15" fill={color} />
  </svg>
);
// Turbuhaler traced from the reference photo: tilted white cylinder with a domed top and a slightly
// wider ribbed `color` grip at the base.
const TurbuhalerIcon = ({ className, color }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" strokeLinejoin="round">
    <g transform="rotate(-22 50 50)">
      <path d="M 36 24 Q 36 6 50 6 Q 64 6 64 24 L 65 70 L 35 70 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.6" />
      <path d="M 44 7.5 Q 50 5.5 56 7.5" stroke="#cbd5e1" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M 40 30 V 62" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M 33 69 L 67 69 Q 69 69 69 71 L 69 88 Q 69 92 65 92 L 35 92 Q 31 92 31 88 L 31 71 Q 31 69 33 69 Z" fill={color} stroke={mixHex(color, '#000000', 0.25)} strokeWidth="1.4" />
      <g stroke={mixHex(color, '#000000', 0.22)} strokeWidth="1.6" strokeLinecap="round">{[37, 43, 50, 57, 63].map(x => <path key={x} d={`M ${x} 73 V 89`} />)}</g>
    </g>
  </svg>
);
// Flat Ellipta illustration traced from the reference drawing: cream body, a
// lens-shaped ridged cover, a front label with raised top-left, a white front
// panel holding the dose counter and window, and the moulded seam on the right.
// `color` drives cover, label and counter (Anoro crimson, Relvar yellow, Trelegy beige).

// Brighter, more saturated version of the device colour for the counter window
// (comma hsl() syntax so the html2canvas PNG export can parse it).
const counterTint = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  const r = ((n >> 16) & 255) / 255, g = ((n >> 8) & 255) / 255, b = (n & 255) / 255;
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, d = mx - mn;
  let h = 0, s = 0;
  if (d) {
    s = d / (1 - Math.abs(2 * l - 1));
    h = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
    h *= 60;
    if (h < 0) h += 360;
  }
  return `hsl(${Math.round(h)}, ${Math.round(Math.min(s * 1.6, 0.9) * 100)}%, ${Math.round(Math.min(l + 0.17, 0.85) * 100)}%)`;
};

// Light device colours (e.g. Trelegy beige) all but vanish against the cream
// body, so they get an outline in a darker shade of the same colour. Darker
// colours (Anoro, Relvar) contrast on their own and stay unoutlined.
const elliptaEdge = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  if ((0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 < 0.65) return 'none';
  return `rgb(${Math.round(r * 0.62)}, ${Math.round(g * 0.62)}, ${Math.round(b * 0.62)})`;
};

const ElliptaIcon = ({ className, color }) => {
  const edge = elliptaEdge(color);
  return (
  <svg viewBox="0 0 100 100" className={className} fill="none" strokeLinecap="round" strokeLinejoin="round">
    {/* Body */}
    <path d="M 51 2.6 C 62 2.6, 70 5, 76 9.5 C 81 14, 87.8 27, 87.8 49 C 87.8 64, 85.5 75, 82.5 83.3 C 80 90.5, 77 96, 72 97.8 C 64 98.8, 36 98.8, 29 97.8 C 24 96.6, 21 90, 19 85 C 16.5 78, 12.2 64, 12.2 49 C 12.2 36, 15 27, 18.5 21 C 20.5 17.5, 22 14, 22.3 10.5 C 27 9, 40 3.4, 51 2.6 Z" fill="#ede7db" stroke="rgba(120,100,80,0.18)" strokeWidth="0.6" />
    {/* White front panel */}
    <path d="M 22.2 65.4 L 40.6 65.4 L 40.6 76 C 40.6 79.5, 42.5 81.4, 47 81.4 L 55 81.4 C 55.9 81.4, 56.3 82, 56.3 83 L 56.3 89 C 56.3 90.5, 55.5 91.2, 54 91.2 L 40 91.2 C 34 91.2, 29 89, 27 84 Z" fill="#ffffff" />
    {/* Moulded seam */}
    <path d="M 54.7 38.2 C 59 38.6, 63 40, 63.8 44 C 64.6 48, 64.4 56, 63.6 61 C 63 66, 63.6 71, 66.5 75.5 C 69.5 80, 74 83.5, 79.4 87" stroke="#ffffff" strokeWidth="1.1" />
    {/* Dose counter */}
    <rect x="50" y="66.5" width="6" height="8.4" rx="1.4" fill="#fbf1ef" />
    <rect x="44.8" y="66.4" width="5.4" height="8.6" rx="1.6" fill={counterTint(color)} stroke={edge} strokeWidth="0.8" />
    <rect x="52.2" y="68.6" width="0.9" height="4.7" rx="0.45" fill="#7f8080" />
    {/* Bottom window */}
    <rect x="37.8" y="84.2" width="15.2" height="3.7" fill="#ffffff" stroke="#d6d6d7" strokeWidth="1.8" />
    {/* Label */}
    <path d="M 21.15 64.7 L 21.15 46 C 21.15 40, 24 34, 30 34 C 33.5 34, 40 41, 55.8 46.6 C 57.3 47.2, 57.9 48.5, 57.9 50.3 L 57.9 58.7 C 57.9 61.2, 56.6 62.1, 54.2 62.1 C 46 62.6, 41 64.7, 35 64.7 Z" fill={color} stroke={edge} strokeWidth="1.2" />
    <g fill="#ffffff">
      <rect x="26.1" y="39.8" width="8.3" height="3.9" />
      <rect x="23.9" y="46.6" width="19.7" height="4.6" rx="2.3" />
      <rect x="24.3" y="54.6" width="29.4" height="1.1" />
      <rect x="24.3" y="57.4" width="29.4" height="1.1" />
    </g>
    {/* Cover */}
    <path d="M 21.7 9.9 C 28 8.5, 40 2.6, 51 2.2 C 62 2.2, 68 5, 73 8.5 C 76 10, 78.5 10.5, 80.7 10.9 C 79.5 17, 62 37.1, 52.6 37.1 C 42 37.1, 25 22, 21.7 9.9 Z" fill={color} stroke={edge} strokeWidth="1.2" />
    <g stroke="#ffffff" strokeOpacity="0.45" strokeWidth="1">
      <path d="M 31.1 20.9 C 42 20.5, 57 18, 66.3 7.8" />
      <path d="M 39.5 27.7 C 48 26.5, 64 19.5, 70.5 10.4" />
      <path d="M 46.9 33 C 56 29.5, 69 23.5, 74.1 12.5" />
    </g>
  </svg>
  );
};
// Nebulizer: face mask + elbow + medicine cup (product colour) + tubing + compressor (drawn from the author's reference picture).
const NebulizerIcon = ({ className, color }) => (<svg viewBox="0 0 100 100" className={className} fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path d="M 67 43 C 68 14, 45 10, 44 32 C 43 46, 45 54, 41 59" stroke="#60a5fa" strokeWidth="3.4" />
  <path d="M 32 81 C 31 95, 52 95, 53 82" stroke="#60a5fa" strokeWidth="3.4" />
  <rect x="58" y="40" width="37" height="44" rx="8" fill="#60a5fa" />
  <path d="M 47 54 Q 47 45 57 45 L 85 45 Q 92 45 92 53 L 92 77 Q 92 84 85 84 L 54 84 Q 47 84 47 77 Z" fill="#93c5fd" />
  <rect x="62" y="39" width="10" height="6" rx="2" fill="#3b82f6" />
  <path d="M 61 63 H 78 M 61 67.5 H 78 M 61 72 H 78" stroke="#3b82f6" strokeWidth="2" />
  <path d="M 32 45 V 33 Q 32 28 27 28 H 25" stroke="#60a5fa" strokeWidth="6.5" />
  <rect x="23.5" y="44" width="17" height="31" rx="4.5" fill="#bfdbfe" />
  <rect x="23.5" y="44" width="17" height="31" rx="4.5" fill={color} fillOpacity="0.45" stroke="#60a5fa" strokeWidth="1.8" />
  <path d="M 23.5 57 H 40.5" stroke="#3b82f6" strokeWidth="2.6" />
  <rect x="27" y="74.5" width="10" height="7.5" rx="2" fill="#93c5fd" />
  <rect x="39" y="57.5" width="6.5" height="5.5" rx="1.6" fill="#2563eb" />
  <path d="M 25 25 L 14 8 Q 6 1 3.5 13 Q 1.5 30 9.5 39 Q 15.5 44 25 33 Z" fill="#22d3ee" stroke="#0e7490" strokeWidth="2.2" />
  <path d="M 25 25 L 19 15 L 15.5 36 L 25 33 Z" fill="#67e8f9" fillOpacity="0.55" />
  <circle cx="18" cy="21" r="1.6" fill="#0e7490" fillOpacity="0.45" /><circle cx="21.5" cy="26" r="1.6" fill="#0e7490" fillOpacity="0.45" /><circle cx="17.5" cy="29" r="1.6" fill="#0e7490" fillOpacity="0.45" /><circle cx="21" cy="31.5" r="1.4" fill="#0e7490" fillOpacity="0.45" />
</svg>);

// Spiromax traced from the reference photo: tall white body tilted to the left, angled `color`
// mouthpiece cover at the lower right with a small tab, green label marks.
const SpiromaxIcon = ({ className, color }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" strokeLinejoin="round">
    <g transform="rotate(-14 50 50)">
      <path d="M 30 9 Q 30 5 34 5 L 60 5 Q 64 5 64 9 L 64 66 L 30 66 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.6" />
      <path d="M 47 5 V 66" stroke="#e2e8f0" strokeWidth="1.2" />
      <path d="M 33 40 H 37 M 33 44 H 37" stroke="#22c55e" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M 56 30 H 61" stroke="#22c55e" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M 30 62 L 64 58 L 82 78 L 80 88 Q 79 92 75 92 L 48 92 Q 36 92 33 84 Z" fill={color} fillOpacity="0.92" stroke={mixHex(color, '#000000', 0.3)} strokeWidth="1.4" />
      <path d="M 64 60 L 80 79" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="69" cy="94" r="3.4" fill={color} stroke={mixHex(color, '#000000', 0.3)} strokeWidth="1.2" />
    </g>
  </svg>
);

// NEXThaler traced from the reference photo: rounded `color` shell (large disc at the left, arch over the
// top), cream body at the right with the dose-counter window and dotted grip, round white label.
const NexthalerIcon = ({ className, color }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" strokeLinejoin="round">
    <path d="M 38 22 L 84 22 Q 93 22 93 31 L 93 42 L 52 42 L 52 86 L 38 86 Q 6 86 6 54 Q 6 22 38 22 Z" fill={color} stroke={mixHex(color, '#000000', 0.25)} strokeWidth="1.4" />
    <path d="M 40 26 L 82 26" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" />
    <path d="M 50 40 L 90 40 Q 94 40 94 44 L 94 82 Q 94 86 90 86 L 50 86 Z" fill="#f5f3ee" stroke="#a8a29e" strokeWidth="1.4" />
    <path d="M 50 40 Q 56 34 64 40" fill="#f5f3ee" stroke="#a8a29e" strokeWidth="1.2" />
    <rect x="53" y="52" width="13" height="10" rx="2.5" fill="#e7e5e4" stroke="#78716c" strokeWidth="1" />
    <path d="M 56.5 57 H 63" stroke="#44403c" strokeWidth="1.4" strokeLinecap="round" />
    <g fill="#d6d3d1">{[72, 80, 88].map(x => [50, 60, 70].map(y => <circle key={x + '-' + y} cx={x} cy={y} r="1.4" />))}</g>
    <circle cx="31" cy="57" r="19" fill="#ffffff" stroke={mixHex(color, '#000000', 0.15)} strokeWidth="1" />
    <path d="M 21 53 H 41 M 23 59 H 39 M 25 64 H 37" stroke={color} strokeOpacity="0.7" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

// Airmaster traced from the reference photo: white rounded body, `color` mouthpiece cover with a
// serrated top edge, white centre panel, red square button on the right and the dose counter on the left.
const AirmasterIcon = ({ className, color }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" strokeLinejoin="round">
    <path d="M 31 27 L 71 27 Q 75 27 77 31 L 81 41 Q 82 43 82 46 L 82 80 Q 82 88 74 88 L 33 88 Q 26 88 25 81 L 19 46 Q 18 42 20 39 L 26 30 Q 28 27 31 27 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.6" />
    <path d="M 20 41 Q 30 44 34 50 L 34 70 Q 28 74 23 70 Z" fill="#eef2f6" />
    <path d="M 33 13 L 35.5 6 L 38.5 12 L 41.5 6 L 44.5 12 L 47.5 6 L 50.5 12 L 53.5 6 L 56.5 12 L 59.5 6 L 62.5 12 L 65.5 6 L 68 13 L 68 36 L 62 47 L 62 53 L 41 53 L 41 47 L 33 38 Z" fill={color} stroke={mixHex(color, '#000000', 0.25)} strokeWidth="1.4" />
    <path d="M 36 18 H 65" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1.6" strokeLinecap="round" />
    <rect x="39.5" y="47" width="23" height="28" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.4" />
    <rect x="71" y="36" width="8" height="8" rx="1.2" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
    <ellipse cx="28" cy="59" rx="4.2" ry="3" fill="#e2e8f0" stroke="#64748b" strokeWidth="1" />
  </svg>
);

// LupinHaler drawn from the reference photo: white body with a domed cap, ridged `color` piercing button
// on the left, oval capsule window in the centre and a round `color` hinge at the top right of the base.
const LupinhalerIcon = ({ className, color }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" strokeLinejoin="round">
    {/* Domed cap */}
    <path d="M 8 47 L 8 36 C 8 17 28 6 50 6 C 73 6 91 19 91 43 L 91 47 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.6" />
    {/* Base, stepped in under the hinge */}
    <path d="M 20 45 L 91 45 Q 95 47 94 53 Q 93 58 88 61 Q 84 63 84 69 L 84 88 Q 84 94 78 94 L 18 94 Q 12 94 12 88 L 12 80 L 20 80 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.6" />
    {/* Piercing button with grip ridges */}
    <rect x="5" y="46" width="16" height="35" rx="3" fill={color} />
    <g stroke={mixHex(color, '#000000', 0.25)} strokeWidth="1.3" strokeLinecap="round">
      <path d="M 6.5 52 H 19.5" /><path d="M 6.5 58 H 19.5" /><path d="M 6.5 64 H 19.5" /><path d="M 6.5 70 H 19.5" /><path d="M 6.5 76 H 19.5" />
    </g>
    {/* Capsule window */}
    <rect x="43" y="52" width="14" height="28" rx="7" fill="#d6d3d1" stroke="#a8a29e" strokeWidth="1.2" />
    <rect x="46.8" y="56" width="6.4" height="15" rx="1.5" fill="#f5f5f4" />
    <ellipse cx="50" cy="74" rx="4.6" ry="1.8" fill="#a8a29e" />
    {/* Hinge */}
    <circle cx="88" cy="51" r="4.6" fill={mixHex(color, '#000000', 0.25)} />
    <circle cx="88" cy="51" r="2.2" fill="#7dd3fc" />
  </svg>
);
// Shown when there is no reference picture of a product's inhaler. Never borrow another device's drawing:
// a wrong picture misleads more than a missing one.
const NaIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" data-icon-na role="img" aria-label="Device picture not available">
    <title>Device picture not available</title>
    <rect x="12" y="12" width="76" height="76" rx="14" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="3" strokeDasharray="7 6" />
    <text x="50" y="59" fontSize="25" fontWeight="700" fill="#64748b" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif">N/A</text>
  </svg>
);
// Products with no reference picture of their inhaler: 404 Pulvisonide 200 (inhaler not identified).
const ICON_UNKNOWN = new Set([404, 542, 543, 544]); // also the BudeForu devices: no reference picture
// Products whose inhaler is not the one their device group is named after: its own picture and name.
// 415 Tropoair: LupinHaler. It stays in the HandiHaler group for technique because Lupin's instructions for use
// give the same steps (capsule in the centre chamber, press the piercing button once, two inhalations per capsule).
const ICON_SHAPE = { 415: 'LupinHaler', 533: 'Swinghaler' };
// Teva's RespiClick (US) is the Spiromax inhaler under its US name: same picture and technique card, own label
const SHAPE_LABEL = { 501: 'RespiClick', 512: 'RespiClick', 513: 'RespiClick', 514: 'RespiClick', 533: 'Swinghaler' };
// Device names as shown in the filter and on cards; A-Z order with Other DPI last
const shapeName = (shape) => (shape === 'OtherDPI' ? 'Other DPI' : shape);
const shapeSort = (a, b) => (a === 'OtherDPI') - (b === 'OtherDPI') || shapeName(a).localeCompare(shapeName(b), 'en', { sensitivity: 'base' });
const shapeLabel = (med) => SHAPE_LABEL[med.id] || ICON_SHAPE[med.id] || shapeName(med.shape);

// Pressair (Genuair in Europe) traced from pack photos: white body lying flat, a `color` press button on top at
// the back, a large rounded `color` protective cap over the mouthpiece at the front, and the control window.
const PressairIcon = ({ className, color }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" strokeLinejoin="round">
    <path d="M 62 22 L 80 22 Q 86 22 86 28 L 86 36 L 58 36 L 58 26 Q 58 22 62 22 Z" fill={color} stroke={mixHex(color, '#000000', 0.25)} strokeWidth="1.4" />
    <path d="M 34 34 L 86 34 Q 93 34 93 41 L 93 70 Q 93 77 86 77 L 44 77 L 30 60 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.6" />
    <rect x="56" y="44" width="13" height="7" rx="1.8" fill="#ef4444" stroke="#94a3b8" strokeWidth="1" />
    <path d="M 60 60 H 84 M 60 66 H 78" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
    <path d="M 7 64 Q 5 46 22 40 L 40 35 Q 47 34 47 42 L 47 78 Q 47 86 39 87 L 25 89 Q 9 88 7 64 Z" fill={color} fillOpacity="0.94" stroke={mixHex(color, '#000000', 0.28)} strokeWidth="1.4" />
    <path d="M 14 58 Q 16 48 26 45" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
// Twisthaler traced from pack photos: upright white cylinder (the screw cap, which carries the label) on a
// `color` grip base with the dose-counter window.
const TwisthalerIcon = ({ className, color }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" strokeLinejoin="round">
    <path d="M 37 12 Q 37 6 43 6 L 57 6 Q 63 6 63 12 L 65 66 L 35 66 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.6" />
    <path d="M 38.5 28 H 61.5 V 50 H 38.5 Z" fill={color} fillOpacity="0.16" stroke={mixHex(color, '#000000', 0.1)} strokeOpacity="0.5" strokeWidth="1" />
    <path d="M 42 35 H 58 M 42 41 H 54" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    <path d="M 33 66 L 67 66 Q 70 66 70 69 L 70 88 Q 70 93 65 93 L 35 93 Q 30 93 30 88 L 30 69 Q 30 66 33 66 Z" fill={color} stroke={mixHex(color, '#000000', 0.25)} strokeWidth="1.4" />
    <rect x="43" y="74" width="14" height="10" rx="1.8" fill="#f8fafc" stroke={mixHex(color, '#000000', 0.25)} strokeWidth="1.2" />
  </svg>
);

// Swinghaler (Meptin) traced from the user's photo: rounded `color` upper shell carrying the white label, a
// translucent white lower body with the dose-counter window, the `color` lever on the left edge and a small
// `color` square at the lower right.
const SwinghalerIcon = ({ className, color }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" strokeLinejoin="round" data-icon-swinghaler>
    <path d="M 16 52 L 16 90 Q 16 95 21 95 L 79 95 Q 84 95 84 90 L 84 52 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.6" />
    <path d="M 22 70 H 78 V 90 H 22 Z" fill="#ffffff" fillOpacity="0.7" stroke="#cbd5e1" strokeWidth="1" />
    <rect x="41" y="57" width="18" height="9" rx="1.5" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
    <rect x="68" y="72" width="11" height="12" rx="1.5" fill={color} stroke={mixHex(color, '#000000', 0.2)} strokeWidth="1" />
    <path d="M 14 54 L 14 30 Q 14 8 36 8 L 64 8 Q 86 8 86 30 L 86 54 Z" fill={color} stroke={mixHex(color, '#000000', 0.22)} strokeWidth="1.6" />
    <path d="M 14 46 L 8 50 Q 6 52 7 55 L 10 66 Q 11 68 14 67 Z" fill={color} stroke={mixHex(color, '#000000', 0.22)} strokeWidth="1.4" />
    <rect x="24" y="26" width="52" height="22" rx="3" fill="#ffffff" stroke={mixHex(color, '#000000', 0.12)} strokeWidth="1" />
    <path d="M 30 33 H 52 M 30 40 H 46" stroke="#ef4444" strokeWidth="2.4" strokeLinecap="round" />
    <rect x="56" y="30" width="14" height="8" rx="1.5" fill="#ef4444" />
    <path d="M 46 16 H 70 M 52 21 H 70" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

// Brand grouping for the main list. Two products are the same brand row when their names differ only in the
// strength (50/250, 125 mcg, 0.01%, 5 mg/mL ...) and they use the same device. "MDI" in a name is ignored
// (Foster MDI 100/6 and Foster 200/6 are one row). The strength is the first strength token of the name.
const STRENGTH_RE = /\b\d+(?:\.\d+)?(?:\s*\/\s*\d+(?:\.\d+)?)*\s*(?:mcg|mg|μg|%)?(?:\s*\/\s*\d*(?:\.\d+)?\s*mL)?/g;
const brandLabel = (name) => name.replace(/\(([^)]*)\)/g, ' ($1) ').replace(STRENGTH_RE, ' ').replace(/\bmcg\b|\bmg\b/g, ' ')
  .replace(/-\s/g, ' ').replace(/\s+/g, ' ').replace(/\s+\)/g, ')').replace(/\(\s+/g, '(').trim();
const brandKey = (med) => brandLabel(med.marketName).replace(/\bMDI\b/, '').replace(/\s+/g, ' ').trim().toLowerCase() + '|' + med.shape;
const strengthLabel = (med) => { const m = med.marketName.match(STRENGTH_RE); return m ? m[0].trim() : med.marketName; };
// One row for a brand with several strengths. As tall as its content (never stretched to the neighbouring card).
// Top: what every strength shares, shown once under the common name: picture, device tags, and the country lines
// and indications when they are the same for all strengths. Then one line per strength: its strength, its
// components, anything that differs between the strengths (country lines, indications), and its own Select and
// Details buttons. Doses stay on each strength's full card (Show full cards, or tap a strength to jump to it).
const BrandGroupRow = ({ meds, open, onToggle, onPick, onSelect, onDetails, isSelected, t, grid, regions, showHolder }) => {
  const first = meds[0];
  const selectedCount = meds.filter(isSelected).length;
  const same = (fn) => meds.every(m => fn(m) === fn(first));
  // registration status in every country, the holder and the NLEM type on the lines that are shown
  const countrySig = (m) => LABEL_REGIONS.map(r => { const n = r === 'th' ? nlemOf(m) : null; return [statusIn(m, r), showHolder && regions.includes(r) ? holderIn(m, r, t) || '' : '', n ? n.list + (n.note || '') : r === 'th' && NLEM_STATUS[m.id] ? 'x' : '', r === 'th' && TH_AWAITING[m.id] ? '?' : ''].join('~'); }).join('|');
  const commonCountries = same(countrySig);
  const commonInd = same(m => (m.indications || []).join());
  const icon = ICON_UNKNOWN.has(first.id) ? <NaIcon className="w-11 h-11 md:w-12 md:h-12" /> : getIcon(ICON_SHAPE[first.id] || first.shape, iconHex(first), 'w-11 h-11 md:w-12 md:h-12 text-slate-700', ' ', ICON_CAP[first.id]) /* ' ' = no strength number on the shared picture */;
  return (
    <div data-brand-group={brandKey(first)} data-open={open ? '1' : '0'} className="self-start w-full rounded-xl md:rounded-2xl border border-indigo-200 bg-indigo-50 shadow-sm p-2.5 md:p-3 flex flex-col gap-2">
      <div className="flex items-start gap-3 min-w-0" data-brand-common>
        <div className="p-1.5 rounded-lg bg-white border border-indigo-100 shrink-0">{icon}</div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5 mb-1">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${first.tagColor}`}>{first.type}</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{shapeLabel(first)}</span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded border border-indigo-200 bg-white text-indigo-700 whitespace-nowrap" data-brand-count>{t.brandCount(meds.length)}</span>
            {meds.every(m => m.isExtraFine) && <ExtraFineBadge t={t} compact={true} />}
            <ExacBadge med={first} t={t} />
            {selectedCount > 0 && <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-600 text-white whitespace-nowrap">{t.brandSelected(selectedCount)}</span>}
          </div>
          <p className="font-extrabold text-slate-800 text-base md:text-lg leading-tight break-words" data-brand-name>{brandLabel(first.marketName)}</p>
          {commonCountries && <CountryLines med={first} t={t} regions={regions} showHolder={showHolder} className="text-[11px] mt-1.5" />}
          {commonInd && <DiagnosticBadges indications={first.indications} t={t} med={first} className="mt-2" />}
        </div>
      </div>
      <div className={grid ? 'flex flex-col gap-1.5' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 items-start'} data-brand-strengths>
        {meds.map(m => {
          const sel = isSelected(m);
          return (
            <div key={m.id} data-brand-pick={m.id} aria-label={m.marketName} title={t.brandJump} onClick={(e) => { if (e.target.closest('button, a, [data-cautions-pop]')) return; onPick(m); }}
              className={`flex items-start gap-2 rounded-lg border bg-white hover:border-indigo-300 transition-colors p-2 md:p-2.5 min-w-0 cursor-pointer ${sel ? 'border-indigo-500 ring-1 ring-indigo-500' : 'border-indigo-100'}`}>
              <div className="min-w-0 flex-1">
                <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded-full border border-slate-200 bg-slate-50 text-slate-700 whitespace-nowrap" data-brand-strength>{strengthLabel(m)}</span>
                <RenderSubstances medClass={m.class} medSubstance={m.substance} className="text-xs mt-1.5" />
                {!commonCountries && <CountryLines med={m} t={t} regions={regions} showHolder={showHolder} className="text-[11px] mt-1.5" />}
                {!commonInd && <DiagnosticBadges indications={m.indications} t={t} med={m} className="mt-2" />}
              </div>
              <div className="shrink-0 flex flex-col items-end gap-1.5 print:hidden">
                <button onClick={() => onSelect(m)} data-brand-select title={sel ? t.selected : t.select} aria-label={`${sel ? t.selected : t.select}: ${m.marketName}`} className={`flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase transition-colors border ${sel ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-400 border-slate-200 hover:border-indigo-300 hover:text-indigo-500 hover:bg-indigo-50 shadow-sm'}`}>
                  {sel ? <Check className="w-3 h-3" /> : <CompareIcon className="w-3 h-3" />}
                  <span className="hidden sm:inline">{sel ? t.selected : t.select}</span>
                </button>
                <button onClick={() => onDetails(m)} data-brand-details className="flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase transition-colors border border-indigo-100 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 shadow-sm">
                  {t.detailBtn} <span aria-hidden="true">›</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button type="button" onClick={onToggle} aria-expanded={open} data-brand-toggle
        className="w-full flex items-center justify-center gap-1 rounded-lg border border-indigo-100 bg-white hover:bg-indigo-100 transition-colors px-2 py-1.5 text-[11px] font-bold text-indigo-700">
        {open ? t.brandHide : t.brandShow}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
      </button>
    </div>
  );
};

// Feedback: the header button opens this form in a new tab. Empty = the button is not shown.
const FEEDBACK_FORM_URL = 'https://forms.gle/ZMWtPk3WEjFvbkfj6';

// O(1) Icon Mapping Dictionary
const IconMap = {
  'MDI': MdiIcon,
  'Diskus': DiskusIcon,
  'Turbuhaler': TurbuhalerIcon,
  'Ellipta': ElliptaIcon,
  'Handihaler': HandihalerIcon,
  'Breezhaler': BreezhalerIcon,
  'Respimat': SmiIcon,
  'Nebulizer': NebulizerIcon,
  'Easyhaler': EasyhalerIcon,
  'Spiromax': SpiromaxIcon,
  'Pressair': PressairIcon,
  'Twisthaler': TwisthalerIcon,
  'NEXThaler': NexthalerIcon,
  'Airmaster': AirmasterIcon,
  'OtherDPI': NaIcon,
  'Swinghaler': SwinghalerIcon,
  'LupinHaler': LupinhalerIcon
};

const getIcon = (shape, hex, className, label, cap) => {
  const IconComponent = IconMap[shape] || MdiIcon;
  const extra = {};
  if (label) extra.label = label;
  if (cap) extra.cap = cap;
  return <IconComponent className={className} color={hex} {...extra} />;
};
// Number shown on a product's icon. Accuhaler / Diskus: the strength printed on the device
// (Seretide 50/100, 50/250, 50/500 -> 100, 250, 500; Serevent -> 50).
const iconLabel = (med) => {
  if (med.shape !== 'Diskus') return null;
  const m = /\/(\d+)\s*$/.exec(med.marketName) || /(\d+) mcg/.exec(med.substance);
  return m ? m[1] : null;
};
// Products whose inhaler colour has no reference picture: drawn in neutral grey and labelled, never in an
// assumed colour. Checked 11 Oct 2026 on MIMS Thailand and by web image search: Beclocip, Beclosal and
// BudeSpray-200 have no device picture. Remove an id once a pack
// photo confirms the colour in its data row.
const COLOUR_UNKNOWN = new Set([432, 435, 436, 437, 438, 439, 534, 535, 537, 538, 539, 545, 546]); // Japan-market additions with no clear pack photo
const iconHex = (med) => (COLOUR_UNKNOWN.has(med.id) ? '#94a3b8' : med.hex);
// Dust-cap colour where a product picture shows it differs from the body (sources in each data row):
// Aeronide 200 orange, Budecort-200 magenta, Aerotide lilac, Seroflo green, Aerobidol aqua, Buto-Asma navy,
// Asthalin white, BudeSpray-100 purple, Budiair burgundy (same as its body), Salvo dark slate.
// US products: actuator and cap colours as described in the US label (section 16), checked against pack photos
const ICON_CAP = { 532: '#3fc1c9', 531: '#16a34a', 524: '#f8fafc', 525: '#f97316', 529: '#9ca3af', 530: '#9ca3af', 261: '#f8fafc', 504: '#f8fafc', 502: '#dc2626', 503: '#f1f5f9', 505: '#dc2626', 506: '#b91c1c', 509: '#ec4899', 510: '#ec4899', 515: '#16a34a', 516: '#16a34a', 522: '#f97316', 422: '#1f2a37', 433: '#8e1c40', 431: '#4b2c8a', 401: '#f5922a', 402: '#c2255c', 408: '#b9a8e6', 409: '#b9a8e6', 410: '#7cb83f', 416: '#62bcd0', 423: '#1e3a6e', 441: '#f1f5f9' };
const medIcon = (med, className) => (ICON_UNKNOWN.has(med.id) ? <NaIcon className={className} /> : getIcon(ICON_SHAPE[med.id] || med.shape, iconHex(med), className, iconLabel(med), ICON_CAP[med.id]));

const getClassColor = (cls) => {
  if (cls.includes('ICS / LABA / LAMA')) return 'text-fuchsia-600';
  if (cls.includes('ICS / LABA')) return 'text-purple-600';
  if (cls.includes('LABA / LAMA')) return 'text-rose-600';
  if (cls.includes('SABA / SAMA')) return 'text-teal-600';
  if (cls === 'ICS') return 'text-orange-600';
  if (cls === 'LABA') return 'text-sky-600';
  if (cls === 'LAMA') return 'text-lime-600';
  if (cls === 'SABA') return 'text-blue-600';
  if (cls === 'SAMA') return 'text-green-600';
  return 'text-indigo-600';
};

// --- Translation Dictionary ---
const translations = {
  en: {
    // Top Level
    title: "Adult Bronchodilator Device Guide",
    subtitle: "Visual reference mapped to real-world inhaler colors, based on GINA and GOLD 2026.",
    searchPlaceholder: "Search name, drug, colour, company…",
    searchPlaceholderShort: "Name, colour, company…",
    filtersBtn: "Filters",
    sortLabel: "Sort order",
    maintenanceGuide: "Initial Maintenance",
    exacGuide: "Exacerbation",
    deviceGuide: "Device Guide",
    martOnly: "MART Only",
    clearFilters: "Clear all filters",
    clearShort: "Clear",
    noMeds: "No medications found.",
    noCountry: "No country selected. Choose a country in the Countries filter.",
    countriesAll: "All",
    countriesAllTitle: "Select every country. Press again to clear them all.",
    select: "Select",
    selected: "Selected",
    compare: "Compare",
    clear: "Clear",
    exportPNG: "Export PNGs",
    extraFine: "Extra-fine",
    extraFineOnly: "Extra-fine Only",

    // Chrome / shared UI
    compareTitle: "Head-to-Head Comparison",
    deviceLabel: "Device",
    changelogTitle: "Update Changelog",
    changelogSub: "Version history and features",
    newFeatures: "New Features & Updates",
    bugFixes: "Bug Fixes",
    latest: "Latest",
    dose: "Dose:",
    ventShortMdi: "2x puffs",
    ventShortSmi: "No set dose",
    ventDoseMdi: "Use an in-line spacer and actuate at the start of inspiration. 4 puffs of salbutamol gave near-maximal bronchodilation in ventilated COPD (about 2x the usual 2 puffs); higher doses added tachycardia without more benefit.",
    ventDoseSmi: "No validated dose adjustment. Even with an in-line adapter (actuated at the start of expiration) delivery is about 3x lower than with spontaneous breathing; the study authors advise avoiding SMI on a ventilator. Prefer MDI + in-line spacer or a nebuliser.",
    exporting: "Exporting...",
    toastPreparing: "Preparing export...",
    toastSuccess: (n) => `Successfully exported ${n} image(s)!`,
    toastNone: "Export completed, but no images were generated.",
    toastFail: "Failed to export images. Please check your network.",
    gridView: "Grid View",
    listView: "List View",
    themeToDark: "Switch to dark mode",
    themeToLight: "Switch to light mode",
    countShowing: "Showing",
    countOf: "of",
    countDrugs: "drugs",
    isTh: false,
    countTotal: (n) => `(${n} in database)`,
    spacerLabel: "Spacer",
    spacerKinds: { any: "Any valved spacer", dpi: "No (dry powder)", smi: "Not needed (soft mist)", breath: "No (breath-actuated)" },
    spacerTitles: { any: "The label names no spacer: use a valved spacer with a universal mouthpiece (e.g. AeroChamber Plus) and keep to the same make.", dpi: "Never use a spacer with a dry-powder inhaler.", smi: "A soft-mist inhaler releases a slow mist; a spacer is not needed.", breath: "Breath-actuated pMDI: do not use a spacer." },
    spacerNamedTitle: (src) => `Spacer named in the product label (${src}). Keep to the same make: switching spacers can change the dose reaching the lungs.`,
    discLink: "Decision support only: read the disclaimer",
    discTitle: "Disclaimer",
    discPoints: [
      "This guide is decision support for healthcare professionals. It does not replace clinical judgement, the full GINA and GOLD reports, or the product information.",
      "Check every dose against the current product label and your hospital formulary, and individualise treatment to the patient (age, comorbidities, inhaler technique, preference).",
      "This guide is for adults only; doses shown are the licensed doses for ages 12 and over. Cost ranges are relative and approximate; actual prices differ between hospitals.",
      "Patient sheets must be reviewed by the prescriber or pharmacist before they are given to a patient.",
      "The author accepts no responsibility for decisions made using this guide. Report errors so they can be corrected.",
    ],
    discReviewed: "Content reflects GINA 2026, GOLD 2026 and the Thai NLEM 2569. Last reviewed: 7 October 2026.",
    planRankNote: "Ranked by NLEM status (basic first), then lower cost range.",
    planShowAll: (n) => `Show all ${n} options`,
    planShowFewer: "Show fewer",
    nlemTitle: "Thai National List of Essential Medicines (บัญชียาหลักแห่งชาติ พ.ศ. 2569)",
    nlemNotRegistered: "The generic and form are on the NLEM, but this product has no current Thai FDA registration, so it cannot be supplied under the NLEM.",
    nlemLabel: { b: "NLEM · Basic (b)", s: "NLEM · Supplemental (s)", ex: "NLEM · Exclusive (ex)", none: "Not in NLEM" },
    nlemNotes: {
      budForm: "NLEM note: for relief and control in patients aged 12 years and over.",
      fpSalm: "NLEM note: for control in patients aged 6 years and over.",
      tio: "NLEM: tiotropium DPI 18 mcg only.",
      umecVil: "NLEM condition: COPD group B (mMRC ≥2 and CAT ≥10); 22+55 mcg/dose only. NLEM negotiated price applies.",
      olodTio: "NLEM condition: COPD group B (mMRC ≥2 and CAT ≥10) still uncontrolled on tiotropium DPI 18 mcg. NLEM negotiated price applies.",
    },
    nlemOnly: "NLEM only",
    countriesLabel: "Countries",
    countriesTitle: "Show products licensed in any of the selected countries. Asthma/COPD tags combine those countries' licensed indications. EU = EMA, or the Irish (HPRA) label for nationally licensed products. JP = Japan (PMDA package inserts).",
    countryCodes: { th: "TH", us: "US", uk: "UK", eu: "EU", jp: "JP" },
    countryNames: { th: "Thailand", us: "United States", uk: "United Kingdom", eu: "European Union", jp: "Japan" },
    jpName: (x) => `Sold in Japan as ${x}.`,
    countryInd: { Asthma: "Asthma", COPD: "COPD" },
    countryNotLicensed: (c) => `Not licensed in ${c}`,
    countryDiscontinued: "discontinued",
    thGone: "previously registered",
    checkedLabel: "Last checked",
    checkedReg: "Thai FDA",
    checkedLabelSrc: "label",
    checkedPrice: "price",
    checkedTitle: "When this product's Thai FDA registration, licensed indications (labels) and national reference price were last verified.",
    thRegLabel: "FDA",
    thRegTitle: "Registration status in the selected countries. Currently: registered now. Past: registered before, now cancelled, expired, withdrawn or discontinued (†). Never: no registration found in that country (⊘).",
    usGoneTitle: "United States: previously marketed, now discontinued (marketing status Discontinued in the FDA's Drugs@FDA data).",
    euGoneTitle: (date) => `EU (Ireland): previously licensed; licence withdrawn on ${date} (HPRA withdrawn list).`,
    thRegOpts: { current: "Currently", past: "Past", never: "Never" },
    thNever: "Never registered in Thailand",
    thAwaiting: (d) => `The Thai FDA register shows this registration as "awaiting status check" (seen ${d}). It is still listed here as registered: confirm in the register before relying on it.`,
    thAwaitingShort: "status check pending",
    thGoneTitle: (g) => `Thailand: previously registered, no current registration. Thai FDA registration ${g.lic} ${g.kind === 'expired' ? 'expired' : g.kind === 'smp' ? 'ended after safety monitoring (SMP) with no full registration' : 'cancelled'} on ${g.date}. Previously sold in Thailand; old stock or MIMS listings may remain. Not suggested by the guides.`,
    close: "Close",
    nlemStatus: "NLEM status",
    priceSymbol: "$",
    priceDisclaimer: "Relative cost per month at the usual maintenance dose ($ lowest – $$$$ highest; as-needed relievers: per pack), from the Thai national reference price (ราคากลางยา). Actual prices vary between hospitals.",
    priceEstNote: "No national reference price for this product: level estimated (~).",
    priceUnknownNote: "No Thai reference price for this product, so no price level is shown.",
    groupLabel: "Group strengths",
    groupTitle: "One row per brand and device, listing its strengths; open it to see each strength's full card with its own dose. Switch off to list every strength as its own card.",
    brandCount: (n) => `${n} strengths`,
    brandSelected: (n) => `${n} selected`,
    brandShow: "Show full cards with dose",
    brandJump: "Open this strength's card",
    brandHide: "Hide full cards",
    brandRows: (n) => `in ${n} rows`,
    feedbackBtn: "Feedback",
    feedbackTitle: "Send feedback (opens a form in a new tab)",
    priceEstShort: "estimated",
    pifLabel: "Insp. flow",
    pifHint: "Patient's peak inspiratory flow, measured against the device's resistance (e.g. In-Check DIAL). Hides devices that need more flow.",
    pifClear: "Clear inspiratory flow",
    pifHidden: (pif, list) => `Inspiratory flow ${pif} L/min: hiding devices that need more (${list}).`,
    pifAllOk: (pif) => `Inspiratory flow ${pif} L/min: every device in the list is usable.`,
    pifUnknown: (n) => `${n} shown ${n === 1 ? 'has' : 'have'} no published minimum flow (Unknown): check before choosing.`,
    unknown: "Unknown",
    chipsLabel: "Active filters",
    chipRemove: (x) => `Remove filter: ${x}`,
    chipSearch: "Search",
    chipNone: "none",
    legendBtn: "Key",
    legendTitle: "Key to symbols",
    legendSub: "What the chips, marks and colours on the cards mean.",
    legendReg: "Registration by country",
    legendRegNow: "Registered there now. The chip takes the country's colour.",
    legendRegPast: "Registered before; now cancelled, expired, withdrawn or discontinued.",
    legendRegNever: "No registration found in that country.",
    legendCountries: "TH = Thailand, US = United States, UK = United Kingdom, EU = European Union (EMA, or the Irish label for nationally licensed products), JP = Japan.",
    legendNlem: "NLEM (Thailand)",
    legendNlemNote: "The type sits on the Thailand line of each product.",
    legendPrice: "Price",
    legendClass: "Drug class",
    legendClassNames: { ICS: "Inhaled corticosteroid", LABA: "Long-acting beta-agonist", LAMA: "Long-acting muscarinic antagonist", SABA: "Short-acting beta-agonist", SAMA: "Short-acting muscarinic antagonist" },
    legendDevice: "Device type",
    legendDeviceNames: { MDI: "Pressurised metered-dose inhaler", DPI: "Dry-powder inhaler", SMI: "Soft mist inhaler", Nebulizer: "Solution or suspension for a nebuliser" },
    legendBadges: "Badges and marks",
    legendExtraFine: "Delivers an extra-fine aerosol (for example Foster, Trimbow, QVAR).",
    legendMart: "Maintenance and reliever in one inhaler (MART).",
    legendCautions: "tap the warning sign to read this product's cautions.",
    legendColour: "the picture is grey because no reference for the device colour was found.",
    legendUnknown: "No reference was found for this value, so none is shown.",
    detailBtn: "Details",
    detailClose: "Close",
    detailDose: "Recommended dose",
    detailDevice: "Device and use",
    detailPack: "Price and pack",
    detailReg: "Registration and licence holder",
    regNow: "Registered",
    regPast: "Previously registered",
    regNever: "Not registered",
    detailCurrent: (inds) => `Licensed for: ${inds}.`,
    detailThPast: (g) => `Thai FDA registration ${g.lic} ${g.kind === 'expired' ? 'expired' : 'cancelled'} on ${g.date}.`,
    detailUsPast: "Marketing status Discontinued in the FDA's Drugs@FDA data.",
    detailEuPast: (date) => `Licence withdrawn in Ireland on ${date} (HPRA).`,
    detailSources: "Sources: Thai FDA register (TH), FDA Drugs@FDA (US), UK SmPCs (UK), Irish HPRA lists (EU). Manufacturer of the finished product from the Thai FDA register.",
    detailNoPicture: "No reference picture of this product's inhaler is available.",
    srcLabel: "Source",
    srcShow: "Show sources",
    srcHide: "Hide sources",
    searchOpen: "Search",
    searchClose: "Clear and close the search",
    guideShort: { exac: "Exac.", maint: "Maint.", follow: "Follow-up", device: "Device", spacer: "Spacer", steroid: "Steroid" },
    srcNone: "No source recorded",
    srcUnknown: "No reference found, so the value is Unknown",
    srcProductInfo: "Manufacturer's product information (no link recorded; the labels are in the registers below)",
    srcProductInfoShort: "Manufacturer's product information (no link recorded)",
    srcSearch: (site, q) => `${site}: search "${q}"`,
    srcRecord: (site) => `${site}: this product's record`,
    srcLabelDoc: (site) => `${site}: this product's label`,
    srcThFda: "Thai FDA register",
    srcNlem: "National List of Essential Medicines 2026",
    srcRefPrice: "National reference price database",
    srcSpacerPmdi: "spacers are accessory devices to be used with pMDIs",
    srcSpacerBreath: "spacers should not be used with breath-actuated pMDIs",
    srcVentLaube: "ventilated patients receive aerosols by pMDI with an in-line spacer, or by nebuliser",
    srcFlowMdi: "below 30 L/min is the ideal flow with a pMDI (inhale slowly)",
    srcFlowSmi: "minimal 10, optimal 30 L/min (inhale slowly)",
    srcFlowNeb: "normal (tidal) breaths",
    srcFlowGenuair: "listed as Genuair, the name of Pressair outside the US",
    srcFlowRespiClick: "listed as Spiromax, the name of RespiClick outside the US",
    srcFlowTwist: "the lower limit of acceptable performance in vitro lies between 20 and 28 L/min; 28 is shown",
    srcNamedLabel: (src) => `Product label (${src}), no link recorded`,
    srcIndications: "Licensed indications in each country's label; see Registration below",
    srcGinaLevels: "GINA 2026 (low, medium and high ICS dose levels)",
    srcVentMdiNote: "salbutamol MDI study, applied to MDIs as a class",
    srcVentSmiNote: "tiotropium soft mist study in vitro, applied to soft mist inhalers as a class",
    makerLabel: "Manufacturer",
    holderLabel: "Licence holder",
    holderNone: "Not registered in Thailand",
    holderTitle: "One line for each country selected in the Countries filter: registration status († = previously registered, ⊘ = not registered) and licence holder. TH: Thai FDA register. US: Drugs@FDA. UK: SmPC. EU: Irish (HPRA) lists.",
    holderToggleTitle: "Show or hide the licence holder names. Hidden: each product shows one row of country chips.",
    colourUnknown: "Colour not verified",
    nFlowUnknown: (t) => `The minimum inspiratory flow for ${t} is not known (no published figure). Check that the patient can use it.`,
    devStepsTitle: "How to use",
    devErrorsTitle: "Common mistakes",
    devModeSteps: "Steps",
    devModeCheck: "Technique checklist",
    chkIntro: "Watch the patient use the inhaler and mark each step. ★ = critical step: getting it wrong means little or no medicine reaches the lungs.",
    chkPass: "Correct",
    chkFail: "Wrong / missed",
    chkScore: (ok, done, n) => `${ok} of ${n} steps correct (${done} of ${n} checked)`,
    chkCritical: "Critical errors",
    chkNoCritical: "No critical errors",
    chkAdvice: "Re-teach the steps marked wrong, ask the patient to show you again, and recheck at every visit.",
    chkReset: "Reset",
    chkCopy: "Copy result",
    chkCopied: "Result copied for the medical record.",
    chkNote: (dev, date, ok, n, crit) => `Inhaler technique check (${dev}) ${date}: ${ok}/${n} steps correct. ${crit.length ? 'Critical errors: ' + crit.join('; ') + '.' : 'No critical errors.'} Technique re-taught.`,
    chkStep: "Step",
    cautionsTitle: "Cautions",
    lang: "en",
    cautionsAll: "Paradoxical bronchospasm can occur with any inhaler: stop it and use a reliever.",
    cautions: {
      SABA: ["Tremor, palpitations and tachycardia; low potassium at high doses.", "Use with care in heart disease, arrhythmia, hyperthyroidism or diabetes.", "Asthma: needing a SABA more than twice a week means poor control; regular SABA use is not recommended."],
      LABA: ["Not for acute relief, except ICS-formoterol used as reliever (MART / AIR).", "Asthma: never use a LABA without an ICS.", "Use with care in heart disease (arrhythmia, QT prolongation), hyperthyroidism or diabetes; may lower potassium."],
      LAMA: ["Narrow-angle glaucoma: keep spray or powder out of the eyes; seek care for eye pain or blurred vision.", "May worsen urinary retention or prostate enlargement.", "Dry mouth is common; use with care in severe renal impairment.", "Don't use regularly together with ipratropium."],
      SAMA: ["Narrow-angle glaucoma: keep spray or mist out of the eyes (use a mouthpiece rather than a mask when nebulising).", "May worsen urinary retention or prostate enlargement."],
      ICS: ["Oral thrush and hoarse voice: rinse the mouth and spit after each dose; use a spacer with a pMDI.", "COPD: increases the risk of pneumonia, especially with severe airflow limitation.", "Long-term high doses: adrenal suppression, osteoporosis, cataract, glaucoma.", "Strong CYP3A4 inhibitors (e.g. ritonavir, ketoconazole, itraconazole, clarithromycin) raise systemic steroid levels."],
    },
    devTipTitle: "Good to know",
    devTeachTitle: "Teaching inhaler technique (GINA 2026)",
    devTeach: [
      "Ask the patient to show you how they use the inhaler; don't just ask whether they know how.",
      "Check against a device-specific checklist, then demonstrate (placebo device or video) and re-check; 2–3 rounds in one visit may be needed.",
      "Errors often return within 4–6 weeks: re-check technique at every visit.",
      "Avoid mixing device types (e.g. pMDI and DPI) in one patient; consider another device only if technique stays poor after repeated training.",
    ],
    devUsedBy: "Products in this guide",
    devFlowNeeded: "Inspiratory flow needed",
    sheetBtn: "Patient Sheet",
    sheetTitle: "Patient Instruction Sheet",
    sheetSub: "Print or save a handout for this inhaler",
    sheetLang: "Sheet language",
    sheetCondition: "Condition",
    sheetLevel: "ICS dose level",
    sheetDose: "Dose instruction (editable)",
    sheetReset: "Reset",
    sheetReliever: "Reliever to name on the sheet",
    sheetPlan: "Add asthma action plan (page 2)",
    sheetPlanCopd: "Add COPD action plan (page 2)",
    sheetPef: "Personal best PEF",
    sheetNoReliever: "— leave blank to write in —",
    sheetPrint: "Print",
    sheetSave: "Save image",
    sheetSaved: "Patient sheet saved.",
    sheetPdf: "Save PDF",
    sheetPdfSaved: "Patient sheet saved as an A4 PDF.",
    sheetPrintFail: "Printing is blocked on this page, so the sheet was saved as an A4 PDF. Open the PDF to print it.",
    refTitle: "References",
    refUsedFor: "Used for",
    refUsed: {
      gina: "asthma maintenance steps, ICS dose levels, MART, step-down, asthma exacerbations, dose conversion and switch rules.",
      gold: "COPD groups A/B/E, initial and follow-up treatment, ICS use and withdrawal, COPD exacerbations, NIV and intubation criteria, switch rules.",
      nlem: "NLEM status and conditions.",
      refprice: "cost range of each product (reference price per pack).",
      dhand: "MDI dosing through a ventilator circuit.",
      fang: "SMI use through a ventilator circuit.",
      cat: "CAT score in the Initial Maintenance Guide.",
      mmrc: "mMRC dyspnoea grades in the Initial Maintenance Guide.",
      usmani: "common mistakes in the device technique cards.",
      mahler: "the inspiratory-flow device filter.",
      weers: "minimum inspiratory flow for HandiHaler, Turbuhaler, Diskus/Accuhaler and Breezhaler.",
      grant: "minimum inspiratory flow for Ellipta.",
      haikarainen: "minimum inspiratory flow for Easyhaler.",
      corradi: "minimum inspiratory flow for NEXThaler.",
      ghosh: "minimal inspiratory flow for each dry-powder inhaler (Turbuhaler, Diskus, Ellipta, Easyhaler, HandiHaler, NEXThaler, Spiromax, Genuair, Breezhaler).",
      clark: "lower limit of acceptable performance for Twisthaler.",
      laube: "ideal inspiratory flow with a pMDI (below 30 L/min), tidal breathing with a nebuliser, which inhalers take a spacer, and aerosol delivery to ventilated patients.",
      wu: "minimal and optimal inspiratory flow for the soft mist inhaler.",
      fda: "Thai availability (active registration) of each product.",
      bts: "oxygen target of 88–92% in COPD exacerbations.",
      labels: "the US, UK and EU options of the Label toggle (licensed asthma/COPD indications).",
      spc: "strengths, regimens, MART maximum doses, discard periods, class cautions (SmPC section 4.4), and device steps (checked against the patient leaflets for Ventolin Evohaler, Spiriva Respimat, Symbicort Turbohaler, Seretide/Serevent Accuhaler, Trelegy Ellipta, Fobumix Easyhaler, Spiriva HandiHaler and Seebri/Onbrez Breezhaler).",
    },
    refAuthorNote: "Author's content without an external reference: cost ranges marked ~ (products with no national reference price).",

    // Dose conversion guide
    convertBtn: "Dose Conversion",
    equivBtn: "Equivalent Drugs",
    equivTitle: "Equivalent Drugs",
    equivSub: "Drugs you could switch to in the countries you choose, with the equivalent regimen",
    equivRegIn: "Registered in",
    equivRegInTitle: "Lists equivalents currently registered in any chosen country. Starts with the countries of the main list; changing it here does not change the main list.",
    equivNoCountry: "Choose at least one country to list the equivalents.",
    equivSame: "Direct equivalents (same drug classes)",
    equivOther: "Other options with the same role (class change)",
    equivNone: "No drugs in the database match.",
    equivOpen: "Conversion guide",
    equivLevelDiffers: "Different ICS level",
    equivAll: "All",
    equivLevelNote: (lvl) => `Regimens are matched to the ${lvl}-dose ICS level. Open the conversion guide to choose another level.`,
    convertTitle: "Dose Conversion Guide",
    convertSub: "Switching inhalers: ICS matched by GINA dose level, with GINA & GOLD 2026 switch rules",
    convertFrom: "Switching from",
    convertTo: "Switching to",
    convertSwap: "Swap direction",
    convertCondition: "Patient's condition",
    convertCurrentDose: "Current ICS dose level",
    convertStartDose: "Starting ICS dose level",
    convertEquivalent: "Equivalent regimen",
    convertNewRegimen: "New regimen",
    convertFixedDose: "Fixed-dose combination",
    convertNoIcs: "No ICS",
    convertIcsPerDay: "ICS",
    convertComponents: "What changes",
    convertGuidance: "Switch guidance",
    convertStatus: { continue: "Continue", start: "Start", stop: "Stop" },
    convertLevel: { low: "Low", medium: "Medium", high: "High" },
    convertFreq: { 1: "once daily", 2: "twice daily", 3: "three times daily", 4: "four times daily", prn: "as needed" },
    convertNearest: (want, got) => `This product has no ${want}-dose regimen. The nearest is ${got}, so this switch changes the ICS dose level.`,
    convertRecommendedAlt: (lvl) => `Recommended: same brand and device, keeps the ${lvl} dose level`,
    convertDetailFor: (name) => `for the recommended ${name}`,
    convertDisclaimer: "Decision support only. Confirm against the product information and local formulary, and individualise to the patient.",
    nRoleMismatch: (f, t) => `${f} and ${t} have different roles (maintenance, reliever or exacerbation use), so this is not a like-for-like switch. Make sure the patient still has both a maintenance inhaler and a reliever.`,
    nAsthmaNotIndicated: (t) => `${t} is not indicated for asthma.`,
    nAsthmaLabaNoIcs: (t) => `In asthma a long-acting bronchodilator must never be used without an ICS (GINA): it raises the risk of severe exacerbations and asthma death. Continue a separate ICS with ${t}, or choose an ICS-containing inhaler instead.`,
    nAsthmaIcsStopped: "Stopping ICS in asthma raises the risk of severe exacerbations. GINA recommends ICS-containing treatment for all adults and adolescents with asthma.",
    nAsthmaMartTo: (t, max) => `MART: ${t} is used for both daily maintenance and as-needed relief${max ? ` (maximum ${max})` : ''}. Stop the separate SABA reliever.`,
    nAsthmaMartFrom: (f) => `The patient was on MART. Stop using ${f} for relief and prescribe a separate reliever (as-needed SABA, or as-needed low-dose ICS-formoterol).`,
    nAsthmaLamaAdded: "In asthma, GINA reserves add-on LAMA for patients still uncontrolled on medium/high-dose ICS-LABA. Check inhaler technique and adherence before adding it.",
    nAsthmaLabaStopped: "The LABA is stopped while the ICS continues. In GINA terms, moving from ICS-LABA to ICS alone is a step down: only after about 3 months of good control.",
    nStepDown: "This lowers the ICS dose level. GINA advises stepping down only after about 3 months of good control, reducing the ICS dose by 25–50%.",
    nStepUp: "This raises the ICS dose level. Review after 2–3 months and step back down once asthma is well controlled.",
    nCopdNotIndicated: (t) => `${t} is not indicated for COPD.`,
    nCopdIcsStopped: "ICS withdrawal (GOLD): reasonable if the patient had pneumonia, an inappropriate original indication, or no response to ICS. Avoid if blood eosinophils are ≥300 cells/µL or exacerbations are frequent, and watch for exacerbations after the switch.",
    nCopdIcsStarted: "ICS added (GOLD): indicated for exacerbations with blood eosinophils ≥300 cells/µL (consider from ≥100). Watch for pneumonia, especially with severe airflow limitation.",
    nCopdLamaStopped: "A LAMA is stopped. GOLD maintenance therapy is built on long-acting bronchodilators, so make sure this is an intended step-down.",
    nCopdLabaStopped: "A LABA is stopped. Make sure losing this bronchodilator is an intended step-down.",
    nCopdMart: (t) => `MART is an asthma strategy. In COPD, use ${t} at its maintenance dose and keep a separate SABA/SAMA reliever.`,
    nCopdDual: "Dual long-acting bronchodilation (LABA + LAMA) is GOLD's preferred maintenance for persistent dyspnoea, or for exacerbations without high blood eosinophils.",
    nRelievers: "Both are relievers: use the new product at its own dose as written.",
    nLikeForLike: "Same drug classes on both sides: this is mainly a device or brand change.",
    nNebIcs: "Nebulised budesonide isn't covered by the GINA inhaler dose table. Use the product information for its dose.",
    nExtraFine: "Extra-fine ICS reaches the small airways at lower microgram doses, so doses are matched by GINA dose level rather than by micrograms.",
    nFlow: (t, flow) => `${t} needs an inspiratory flow of ${flow} through the device. Check that the patient can generate it (e.g. In-Check DIAL); if not, an MDI with spacer or a soft-mist inhaler may suit better.`,
    nVent: (t) => `${t} cannot be used through a ventilator circuit.`,
    nDeviceChange: (a, b) => `New device type (${a} → ${b}): demonstrate and check the inhaler technique before the first dose.`,
    nSpacer: "MDI: use a spacer if the patient struggles to coordinate pressing and inhaling.",
    nFreq: (a, b) => `Dosing changes from ${a} to ${b}.`,
    nTiming: (f, t) => `No washout or overlap: stop ${f} and take the first ${t} dose when the next ${f} dose would have been due. Do not use both.`,
    nRinse: (t) => `${t} contains an ICS: rinse the mouth and spit after each dose.`,
    nFollowAsthma: "Review symptom control, inhaler technique and adherence 2–3 months after the switch (GINA).",
    nFollowCopd: "Review dyspnoea, exacerbations and inhaler technique after the switch, following GOLD's review–assess–adjust cycle.",

    // Specs
    flow: "Flow",
    exp: "Expires",
    recDose: "Rec. Dose (12+)",
    martMax: "MART Max",
    recDoseRange: "Rec. Dose Range (age 12+)",
    recDoseRangeGina: "Rec. Dose Range (GINA, age 12+)",
    totalDosesExp: "Total Doses",
    expLabel: "Expiration (after opening)",
    instructions: "Instructions",
    peakFlow: "Peak Inspiratory Flow Rate",
    estCost: "Approx. price",
    pharmacologicalClass: "Pharmacological Class",
    indication: "Indication",
    ventilator: "Ventilator",
    compatible: "Compatible",
    notCompatible: "Not Compatible",
    ventChangeAlt: "Consider changing to MDI + in-line spacer or a nebulizer",
    martApproved: "MART Approved",
    lowDose: "low Dose",
    mediumDose: "medium Dose",
    highDose: "high Dose",

    // Sorting
    sortNameAsc: "Name (A - Z)",
    sortNameDesc: "Name (Z - A)",
    sortDeviceAsc: "Device Type (A - Z)",
    sortDeviceDesc: "Device Type (Z - A)",
    sortCostLow: "Cost (Low to High)",
    sortCostHigh: "Cost (High to Low)",

    // Maintenance Guide Modal
    maintGuideTitle: "Initial Maintenance Guide",
    maintGuideSub: "First maintenance treatment (GINA & GOLD 2026). Already on treatment? Use the Follow-up Guide.",
    step1Title: "1. Select Disease Indication",
    step2Title: "2. GINA Treatment Track",
    step2Sub: "Select the preferred therapeutic pathway.",
    track1Title: "Track 1: MART (Preferred)",
    track1Sub: "Uses low-dose ICS-formoterol as BOTH the daily maintenance and the reliever.",
    track2Title: "Track 2: SABA Reliever (Alternative)",
    track2Sub: "Uses a fixed-dose ICS or ICS/LABA for maintenance, with a separate SABA for relief.",
    severityTitle: "Severity & Exacerbation History",
    severitySub: "Please complete the required clinical metrics to unlock the layout formulation.",
    symptomBurden: "Symptom Burden (Select mMRC or CAT)",
    mmrcScale: "mMRC Scale",
    catScore: "CAT / CAAT™ Score",
    answer8: "Answer 8 Questions",
    total: "Total:",
    calcClinicalType: "Calculated Clinical Type",
    generatePlan: "Generate Clinical Plan",
    incompleteProfile: "Incomplete Clinical Profile",
    incompleteSub: "Please complete the following required metrics to generate a plan:",
    calcGuideClass: "Calculated Guidelines Classification",
    clinicalProfile: "Clinical Profile",
    pharmRec: "Pharmacological Recommendation",
    recMart: "Recommended MART (Maintenance & Reliever Inhalers)",
    noMart: "No MART options available.",
    recMaint: "Recommended Maintenance Inhalers",
    roleLabels: { Controller: "Maintenance", Reliever: "Reliever", Exacerbation: "Exacerbation" },
    roleTitles: { Controller: "Maintenance: regular daily inhaler", Reliever: "Reliever: used as needed for symptoms", Exacerbation: "Exacerbation: used during a flare-up, usually in hospital" },
    exacUse: "Exacerbation use",
    exacUseNote: "Used during exacerbations, usually in hospital.",
    exacUseNoteIcs: "Licensed for maintenance treatment of asthma; in adults it is mainly used during exacerbations.",
    noMaint: "No daily maintenance drug indicated for this profile group.",
    recRescue: "Recommended Rescue Relievers",
    noRescue: "No specific reliever configured.",
    clearForm: "Clear Form",

    // Exacerbation Guide Modal
    exacGuideTitle: "Exacerbation Management Guide",
    exacGuideSub: "Acute clinical pathways mapped to GINA & GOLD 2026",
    mildModExac: "Mild to Moderate Exacerbation",
    criteria: "Criteria:",
    vitals: "Vitals:",
    initMgmt: "Initial Management:",
    severeExac: "Severe Exacerbation",
    transferED: "TRANSFER TO ED/ICU",
    severeRespFail: "Severe (Acute Respiratory Failure)",
    hospAdmit: "HOSPITAL ADMISSION",
    inpatientMgmt: "Inpatient Management:",
    recDevices: "Recommended Devices",
    exacLabels: {
      asthmaMild: { saba: "SABA: salbutamol 4–6 puffs by pMDI + spacer", sabaNeb: "SABA nebulised 2.5 mg (moderate)", icsForm: "Budesonide-formoterol 160/4.5, 2 puffs (alternative reliever)", sama: "Ipratropium 4 puffs (add-on, moderate)", ics: "Maintenance: start or step up ICS" },
      asthmaSevere: { saba: "SABA: salbutamol 6–10 puffs by pMDI + spacer", sabaNeb: "SABA nebulised 5 mg", ipra: "Plus ipratropium (SAMA or SABA + SAMA)", icsNeb: "High-dose ICS in the ED (nebulised budesonide)" },
      copdMild: { saba: "SABA", sabaSama: "SABA + SAMA", sama: "SAMA", icsNeb: "Nebulised budesonide (alternative to oral corticosteroid)" },
      copdSevere: { saba: "SABA by pMDI + spacer or nebuliser", sabaSama: "SABA + SAMA by pMDI + spacer or nebuliser", sama: "SAMA", icsNeb: "Nebulised budesonide (alternative to systemic corticosteroid)" },
    },
    ctrlLabel: "Maintenance:",
    asthmaMildCtrl: "Start or step up ICS-containing treatment (GINA Figure 9); check inhaler technique and adherence.",
    exacTypes: { MDI: "MDI", SMI: "Soft mist (SMI)", DPI: "Dry powder (DPI)", Nebulizer: "Nebulizer" },
    respSupport: "Respiratory Support & Refractory Assessment",
    refractoryNext: "Refractory Next Steps:",
    refractoryNextDesc: "Reassess at 1 hour or earlier. If worsening or not improving, transfer to higher-level care; transfer to ICU if drowsy, confused or silent chest.",
    nivCaution: "⚠️ NIV Caution",
    nivCautionDesc: "Routine use of Non-Invasive Ventilation (NIV) is NOT recommended in pure asthma exacerbations unless a distinct COPD overlap exists.",
    respSupportProto: "Respiratory Support Protocols",
    nivIndication: "NIV Indications (First-line support):",
    intubationInd: "Indications for Intubation:",
    disposition: "Disposition Matrix",
    whenDischarge: "When to Discharge",
    whenAdmit: "When to Admit",

    // Device Guide Details
    devGuideTitle: "Inhaler Technique Guide",
    devGuideSub: "Step-by-step technique and common mistakes for each device",
    mdiStep1: "Remove cap and shake well.",
    mdiStep2: "Breathe out gently away from the inhaler.",
    mdiStep3: "Press canister once while breathing in slowly and deeply.",
    mdiStep4: "Hold breath for 5-10 seconds, then breathe out slowly.",
    dpiStep1: "Load the dose (slide, twist, or open depending on device).",
    dpiStep2: "Breathe out fully (do not blow into the mouthpiece).",
    dpiStep3: "Inhale quickly and deeply through the mouth.",
    dpiStep4: "Hold breath for 5-10 seconds, then breathe out slowly.",
    smiStep1: "Turn the clear base in direction of arrows until it clicks.",
    smiStep2: "Open the cap fully.",
    smiStep3: "Breathe out gently, close lips around mouthpiece.",
    smiStep4: "Press dose release button while breathing in slowly and deeply, hold breath.",
    nebStep1: "Assemble nebulizer cup and add prescribed medication.",
    nebStep2: "Connect mouthpiece/mask and attach tubing to compressor.",
    nebStep3: "Turn on compressor.",
    nebStep4: "Breathe normally through mouth until medication is gone (10-15 mins).",

    // Exac Details - Asthma
    asthmaMildCrit: "Talks in sentences or phrases, prefers sitting, not agitated; little or some accessory muscle use.",
    asthmaMildVit: "RR ≤ 30/min, O₂ Sat ≥ 92% on room air, PEF ≥ 50% of best/predicted (mild: O₂ Sat ≥ 94%, PEF > 70%).",
    asthmaMildSaba: "Mild: salbutamol 4 puffs by pMDI + spacer (or budesonide-formoterol 160/4.5, 2 puffs); repeat once after 30–60 min if needed. Moderate: 4–6 puffs (or 2.5 mg nebulised) up to 3 times, 20–30 min apart; if needed, add ipratropium 4 puffs with each salbutamol dose, up to 3 times.",
    asthmaMildCs: "Prednisolone 40–50 mg each morning for 5–7 days (adults); usually not needed for mild exacerbations.",
    asthmaMildOx: "If needed, titrate oxygen to O₂ Sat 92–95%.",
    asthmaMildMart: "Continue maintenance dose, use ICS-formoterol as reliever (max up to 12 puffs/day).",
    avoidLabel: "Avoid:",
    asthmaAvoid: "Do not routinely order a chest X-ray or blood gases or give antibiotics; do not use sedatives. Consider other causes (e.g. heart failure, upper-airway dysfunction, inhaled foreign body, pulmonary embolism). If anaphylaxis with asthma, give epinephrine first.",
    asthmaSevCrit: "Unable to speak, drink or lie down; silent or quiet chest. Drowsy, confused or cyanosed = life-threatening.",
    asthmaSevVit: "RR > 30/min, O₂ Sat < 92% on room air, PEF < 50% of best/predicted.",
    asthmaSevSabaSama: "Salbutamol 6–10 puffs by pMDI + spacer (or 5 mg nebulised) every 20–30 min, plus ipratropium 4 puffs each time for up to 3 doses.",
    asthmaSevCs: "Systemic Corticosteroids (IV or Oral).",
    asthmaSevCsAlt: "GINA: in the ED, high-dose ICS within the first hour reduces hospitalisation in patients not given systemic corticosteroids. Added to systemic CS the evidence is conflicting in adults; the best agent and dose are not established.",
    asthmaSevAdj: "Not routine. Consider IV magnesium sulfate 2 g over 20 min if there is no response to initial treatment with persistent hypoxaemia (also adults with FEV₁ < 25–30% predicted at presentation). Nebulised magnesium: no benefit.",
    asthmaSevOx: "Oxygen to target O₂ Sat 92–95%.",
    astDis1: "Symptoms improved and meet the mild criteria for at least 1–2 hours after the last salbutamol dose.",
    astDis2: "PEF improving and > 70% of personal best/predicted.",
    astDis3: "O₂ Sat ≥ 92% on room air.",
    astDis4: "Adequate resources and support at home.",
    astDisAct: "Action: start or step up ICS-containing treatment: preferably Step 4 ICS-formoterol MART if ≥ 12 years, otherwise daily medium-dose ICS-LABA. Reliever as needed, not routinely. Continue oral CS if started. Check inhaler technique and adherence, give an interim written action plan and enough medication until follow-up, and follow up within 2–7 days. Consider early specialist referral after a hospital admission or repeated ED visits.",
    astAdm1: "Status 1 hour after starting treatment (e.g. unable to lie flat, poor lung function), or no response to initial bronchodilator.",
    astAdm2: "Severe attack: needed resuscitation or rapid intervention, RR > 22/min, O₂ Sat < 95%, final PEF < 50% predicted.",
    astAdm3: "Past severe attacks (intubation, admissions), recent unscheduled or ED visits needing oral steroids, or > 8 reliever puffs in the previous 24 h.",
    astAdm4: "Female sex, older age, socio-economic disadvantage; poor support or resources at home.",

    // Exac Details - COPD
    copdMildCrit: "GOLD 2026 (Rome) mild: dyspnoea VAS < 5, RR < 24/min, HR < 95/min, SpO₂ ≥ 92% on air (or usual O₂) with a fall ≤ 3% if known, CRP < 10 mg/L if available. Moderate: at least 3 of VAS ≥ 5, RR ≥ 24, HR ≥ 95, SpO₂ < 92% and/or a fall > 3%, CRP ≥ 10. No signs of acute respiratory failure.",
    copdMildSaba: "SABA +/- SAMA only.",
    copdMildMod: "SABA ± SAMA + oral corticosteroid (prednisone 40 mg daily) for 5 days.",
    copdMildModAlt: "GOLD: nebulised budesonide may be a suitable alternative to oral corticosteroids in some patients.",
    copdMildAbx: "Indicated with purulent sputum, a prior positive sputum culture, or need for mechanical ventilation (invasive or NIV); 5 days.",
    copdMildOx: "If hypoxaemic, give controlled oxygen (GOLD 2026). Target O₂ Sat 88–92% in patients at risk of hypercapnia (BTS 2017).",
    copdSevCrit: "GOLD 2026 (Rome) severe: as moderate, plus hypercapnia and acidosis on blood gas (PaCO₂ > 45 mmHg and pH < 7.35). Red flags: severe dyspnoea, accessory muscle use, paradoxical abdominal movement, altered mental status, worsening hypoxaemia.",
    copdSevBronch: "SABA ± SAMA by pMDI (with spacer) or nebuliser; a nebuliser may be easier for sicker patients. Drive nebulisers with air, not oxygen, to avoid raising PaCO₂. Continue long-acting bronchodilators, or start them before discharge. IV methylxanthines are not recommended.",
    copdSevCs: "Systemic Corticosteroids (IV or Oral).",
    copdSevCsAlt: "GOLD: nebulised budesonide may be an alternative to systemic corticosteroids in some patients.",
    copdSevAbx: "If purulent sputum, prior positive sputum culture or ventilated (invasive or NIV): 5 days, chosen by local protocol.",
    copdSevVent: "Controlled oxygen first. NIV is the first-line ventilatory support for acute respiratory failure (preferred over HFNT in hypercapnic failure). HFNT if hypoxaemia persists despite conventional oxygen or NIV is not tolerated.",

    // Intubation & NIV details
    intub1: "Unable to tolerate HFNT and/or NIV.",
    intub2: "Impending respiratory or cardiac arrest.",
    intub3: "Massive aspiration or persistent vomiting.",
    intub4: "Severe ventricular or supraventricular arrhythmias.",
    intub5: "Persistent life-threatening hypoxaemia despite HFNT or NIV.",
    intub6: "Deteriorating mental status (drowsy, confused, lethargic).",
    intub7: "\"Silent chest\" on auscultation (life-threatening failure of ventilation).",
    intub8: "Refractory hypoxemia/hypercapnia despite maximal non-invasive support.",
    intub9: "Diminished consciousness, or agitation inadequately controlled by sedation.",
    intub10: "Persistent inability to remove respiratory secretions.",
    intub11: "Severe haemodynamic instability without response to fluids and vasoactive drugs.",
    niv1: "Respiratory acidosis (pH ≤ 7.35 and/or PaCO₂ ≥ 45 mmHg).",
    niv2: "Severe dyspnoea with signs of respiratory muscle fatigue or increased work of breathing (accessory muscles, paradoxical abdominal motion, intercostal retraction).",
    niv3: "Persistent hypoxaemia despite supplemental oxygen.",

    // Validation Requirements
    reqSymptomFreq: "Symptom Frequency",
    reqLungFunc: "Lung Function",
    reqExacHist: "Exacerbation History",
    reqGoldStage: "GOLD Spirometry Stage",
    reqSymptomBurden: "Symptom Burden (mMRC or CAT score)",
    reqEosinophils: "Blood Eosinophils Level",

    // Result Generation Variables
    reasonSevere: "daily symptoms or night waking (or symptoms severely limiting daily activities), together with low lung function or a recent exacerbation",
    reasonFrequent: "symptoms on most days, daily symptoms or night waking, or low lung function",
    reasonModerate: "symptoms on more than 2 but fewer than 3–5 days a week, with normal or mildly reduced lung function",
    reasonInfrequent: "infrequent symptoms (2 days/week or less)",
    riskExac: (alone, track1) => `${alone ? 'An exacerbation in the last year does not raise the GINA step on its own, but it' : 'An exacerbation in the last year'} is a risk factor for future exacerbations: make sure treatment contains an ICS${track1 ? '' : ' (GINA prefers Track 1, with as-needed ICS-formoterol as the reliever)'}, give a written asthma action plan, and review more often than for lower-risk patients (GINA 2026).`,
    riskExacTitle: "Exacerbation risk",
    martRec1: "As-needed low-dose ICS-formoterol only: 1 inhalation when needed (max 12 inhalations/day)",
    martRec2: "Low-dose MART: ICS-formoterol 1 inhalation twice (or once) daily + 1 as needed (max 12 inhalations/day in total)",
    martRec3: "Medium-dose MART: ICS-formoterol 2 inhalations twice daily + 1 as needed (max 12 inhalations/day in total)",
    martRec5: "Medium-dose MART; consider add-on LAMA; refer for phenotypic assessment and biologics (anti-IgE, anti-IL5/5R, anti-IL4Rα, anti-TSLP); consider a trial of high-dose maintenance ICS-formoterol, limited to 3–6 months",
    convRec1: "Take low-dose ICS whenever SABA is taken (if ICS-SABA is available, use it as needed instead)",
    convRec2: "Daily low-dose maintenance ICS + as-needed SABA (or ICS-SABA if available)",
    convRec3: "Daily low-dose maintenance ICS-LABA + as-needed SABA (or ICS-SABA if available), OR daily medium-dose ICS + as-needed SABA",
    convRec4: "Daily medium-dose maintenance ICS-LABA + as-needed SABA (or ICS-SABA if available)",
    convRec5: "Medium-dose ICS-LABA; consider add-on LAMA; refer for phenotypic assessment and biologics (anti-IgE, anti-IL5/5R, anti-IL4Rα, anti-TSLP); consider a trial of high-dose ICS-LABA, limited to 3–6 months",
    rationaleAsthma: (reason, step) => `Patient presents with ${reason}, placing them in GINA Step ${step}.`,
    recommendation: (rec) => `Guidelines recommend: ${rec}.`,
    copdHighEosRat: "Patient has a high exacerbation risk with elevated blood eosinophils (≥ 300 cells/µL).",
    copdHighEosRec: "Guidelines recommend LABA + LAMA; consider LABA + LAMA + ICS (blood eosinophils ≥ 300). Triple inhalers are listed first, then LABA + LAMA.",
    copdLowEosRat: "Patient has a high exacerbation risk without significantly elevated eosinophils (< 300 cells/µL).",
    copdLowEosRec: "Guidelines recommend Dual Bronchodilation (LABA + LAMA).",
    copdGroupBRat: "Patient presents with a high symptom burden (mMRC ≥ 2 or CAT ≥ 10) but a low exacerbation risk.",
    copdGroupBRec: "Guidelines recommend Dual Bronchodilation (LABA + LAMA).",
    copdGroupARat: "Patient presents with a low symptom burden and a low exacerbation risk.",
    copdGroupARec: "Guidelines recommend a bronchodilator (long-acting LABA or LAMA options are listed).",

    catQs: [
      { left: "I never cough", right: "I cough all the time" },
      { left: "I have no phlegm (mucus) in my chest at all", right: "My chest is completely full of phlegm (mucus)" },
      { left: "My chest does not feel tight at all", right: "My chest feels very tight" },
      { left: "When I walk up a hill or one flight of stairs I am not breathless", right: "When I walk up a hill or one flight of stairs I am very breathless" },
      { left: "I am not limited doing any activities at home", right: "I am very limited doing activities at home" },
      { left: "I am confident leaving my home despite my lung condition", right: "I am not at all confident leaving my home because of my lung condition" },
      { left: "I sleep soundly", right: "I don't sleep soundly because of my lung condition" },
      { left: "I have lots of energy", right: "I have no energy at all" }
    ],

    // Step Down Guide Details
  },
  th: {
    // Top Level
    title: "คู่มือยาพ่นขยายหลอดลมสำหรับผู้ใหญ่",
    subtitle: "อ้างอิงภาพและสีตามอุปกรณ์จริง ตามแนวทาง GINA และ GOLD 2026",
    searchPlaceholder: "ค้นหาชื่อยา ตัวยา สี บริษัท…",
    searchPlaceholderShort: "ชื่อยา สี บริษัท…",
    filtersBtn: "ตัวกรอง",
    sortLabel: "การเรียงลำดับ",
    maintenanceGuide: "แนวทางยาควบคุมเริ่มต้น",
    exacGuide: "แนวทางเมื่อกำเริบ",
    deviceGuide: "วิธีใช้อุปกรณ์",
    martOnly: "เฉพาะ MART",
    clearFilters: "ล้างตัวกรองทั้งหมด",
    clearShort: "ล้าง",
    noMeds: "ไม่พบข้อมูลยา",
    noCountry: "ยังไม่ได้เลือกประเทศ เลือกประเทศในตัวกรองประเทศ",
    countriesAll: "ทั้งหมด",
    countriesAllTitle: "เลือกทุกประเทศ กดอีกครั้งเพื่อยกเลิกทั้งหมด",
    select: "เลือก",
    selected: "เลือกแล้ว",
    compare: "เปรียบเทียบ",
    clear: "ล้าง",
    exportPNG: "บันทึก PNG",
    extraFine: "อนุภาคละเอียดพิเศษ (Extra-fine)",
    extraFineOnly: "เฉพาะ Extra-fine",

    // Chrome / shared UI
    compareTitle: "เปรียบเทียบแบบเคียงข้าง",
    deviceLabel: "อุปกรณ์",
    changelogTitle: "ประวัติการอัปเดต",
    changelogSub: "ประวัติเวอร์ชันและฟีเจอร์",
    newFeatures: "ฟีเจอร์ใหม่และการปรับปรุง",
    bugFixes: "การแก้ไขข้อผิดพลาด",
    latest: "ล่าสุด",
    dose: "ขนาดยา:",
    ventShortMdi: "2 เท่าของจำนวนพัฟ",
    ventShortSmi: "ไม่มีขนาดที่กำหนด",
    ventDoseMdi: "ใช้ spacer ต่อในวงจร และกดพ่นตอนเริ่มหายใจเข้า salbutamol 4 พัฟให้ผลขยายหลอดลมเกือบสูงสุดในผู้ป่วย COPD ที่ใช้เครื่องช่วยหายใจ (ประมาณ 2 เท่าของ 2 พัฟตามปกติ) ขนาดสูงกว่านี้เพิ่มหัวใจเต้นเร็วโดยไม่ได้ผลเพิ่ม",
    ventDoseSmi: "ไม่มีขนาดยาที่ปรับแล้วผ่านการพิสูจน์ แม้ใช้ adapter ในวงจร (กดพ่นตอนเริ่มหายใจออก) ยาก็ถึงปอดน้อยกว่าการหายใจเองประมาณ 3 เท่า ผู้วิจัยแนะนำให้หลีกเลี่ยง SMI กับเครื่องช่วยหายใจ ควรใช้ MDI + spacer ในวงจร หรือ nebulizer แทน",
    exporting: "กำลังบันทึก...",
    toastPreparing: "กำลังเตรียมไฟล์...",
    toastSuccess: (n) => `บันทึกรูปภาพสำเร็จ ${n} ไฟล์`,
    toastNone: "ดำเนินการเสร็จสิ้น แต่ไม่มีรูปภาพถูกสร้าง",
    toastFail: "บันทึกรูปภาพไม่สำเร็จ กรุณาตรวจสอบการเชื่อมต่อ",
    gridView: "มุมมองตาราง",
    listView: "มุมมองรายการ",
    themeToDark: "เปลี่ยนเป็นโหมดมืด",
    themeToLight: "เปลี่ยนเป็นโหมดสว่าง",
    countShowing: "แสดง",
    countOf: "จาก",
    countDrugs: "รายการยา",
    isTh: true,
    countTotal: (n) => `(ทั้งหมด ${n} รายการในฐานข้อมูล)`,
    spacerLabel: "Spacer",
    spacerKinds: { any: "ใช้ spacer แบบมีวาล์วได้ทุกชนิด", dpi: "ไม่ใช้ (ผงแห้ง)", smi: "ไม่จำเป็น (ละอองฝอย)", breath: "ไม่ใช้ (กดเมื่อหายใจเข้า)" },
    spacerTitles: { any: "ฉลากไม่ได้ระบุ spacer: ใช้ spacer แบบมีวาล์วที่มีปากต่อสากล (เช่น AeroChamber Plus) และใช้ยี่ห้อเดิมตลอด", dpi: "ห้ามใช้ spacer กับยาสูดชนิดผงแห้ง", smi: "ยาพ่นละอองฝอยปล่อยละอองช้า ไม่จำเป็นต้องใช้ spacer", breath: "pMDI ที่ทำงานเมื่อหายใจเข้า ห้ามใช้ spacer" },
    spacerNamedTitle: (src) => `spacer ที่ระบุในฉลากยา (${src}) ใช้ยี่ห้อเดิมตลอด การเปลี่ยน spacer อาจเปลี่ยนปริมาณยาที่ถึงปอด`,
    discLink: "เป็นเครื่องมือช่วยตัดสินใจเท่านั้น: อ่านข้อจำกัดความรับผิดชอบ",
    discTitle: "ข้อจำกัดความรับผิดชอบ",
    discPoints: [
      "คู่มือนี้เป็นเครื่องมือช่วยตัดสินใจสำหรับบุคลากรทางการแพทย์ ไม่สามารถใช้แทนวิจารณญาณทางคลินิก แนวทาง GINA และ GOLD ฉบับเต็ม หรือเอกสารกำกับยา",
      "ตรวจสอบขนาดยาทุกครั้งกับเอกสารกำกับยาฉบับปัจจุบันและบัญชียาของโรงพยาบาล และปรับการรักษาให้เหมาะกับผู้ป่วยแต่ละราย (อายุ โรคร่วม เทคนิคการพ่นยา และความต้องการของผู้ป่วย)",
      "คู่มือนี้สำหรับผู้ใหญ่เท่านั้น ขนาดยาที่แสดงเป็นขนาดตามทะเบียนสำหรับอายุ 12 ปีขึ้นไป ช่วงราคาเป็นการเปรียบเทียบโดยประมาณ ราคาจริงแตกต่างกันในแต่ละโรงพยาบาล",
      "ใบคำแนะนำผู้ป่วยต้องได้รับการตรวจทานโดยแพทย์หรือเภสัชกรก่อนให้ผู้ป่วย",
      "ผู้จัดทำไม่รับผิดชอบต่อการตัดสินใจที่เกิดจากการใช้คู่มือนี้ หากพบข้อผิดพลาดโปรดแจ้งเพื่อแก้ไข",
    ],
    discReviewed: "เนื้อหาอ้างอิง GINA 2026, GOLD 2026 และบัญชียาหลักแห่งชาติ พ.ศ. 2569 ทบทวนล่าสุด: 7 ตุลาคม 2569",
    planRankNote: "เรียงตามสถานะบัญชียาหลัก (บัญชีพื้นฐานก่อน) แล้วตามช่วงราคาที่ต่ำกว่า",
    planShowAll: (n) => `แสดงทั้งหมด ${n} รายการ`,
    planShowFewer: "แสดงน้อยลง",
    nlemTitle: "บัญชียาหลักแห่งชาติ พ.ศ. 2569",
    nlemNotRegistered: "ตัวยาและรูปแบบยานี้อยู่ในบัญชียาหลัก แต่ผลิตภัณฑ์นี้ไม่มีทะเบียน อย. ในปัจจุบัน จึงจัดหาตามบัญชียาหลักไม่ได้",
    nlemLabel: { b: "บัญชียาหลัก · พื้นฐาน (b)", s: "บัญชียาหลัก · ทางเลือก (s)", ex: "บัญชียาหลัก · เฉพาะโรค (ex)", none: "นอกบัญชียาหลัก" },
    nlemNotes: {
      budForm: "หมายเหตุบัญชียาหลัก: ใช้สำหรับบรรเทาอาการและควบคุมอาการ ในผู้ป่วยอายุตั้งแต่ 12 ปีขึ้นไป",
      fpSalm: "หมายเหตุบัญชียาหลัก: ใช้สำหรับควบคุมอาการ ในผู้ป่วยอายุตั้งแต่ 6 ปีขึ้นไป",
      tio: "บัญชียาหลัก: เฉพาะ tiotropium DPI 18 mcg",
      umecVil: "เงื่อนไขบัญชียาหลัก: ใช้สำหรับผู้ป่วยโรคปอดอุดกั้นเรื้อรัง group B (mMRC≥2 และ CAT score ≥10) เฉพาะ 22+55 mcg/dose ใช้ราคาที่ต่อรองได้ตามบัญชียาหลัก",
      olodTio: "เงื่อนไขบัญชียาหลัก: ใช้สำหรับผู้ป่วยโรคปอดอุดกั้นเรื้อรัง group B (mMRC≥2 และ CAT score ≥10) ที่เคยได้รับ tiotropium DPI 18 ไมโครกรัมแต่ยังควบคุมอาการไม่ได้ ใช้ราคาที่ต่อรองได้ตามบัญชียาหลัก",
    },
    nlemOnly: "เฉพาะบัญชียาหลัก",
    countriesLabel: "ประเทศ",
    countriesTitle: "แสดงยาที่มีทะเบียนในประเทศที่เลือกอย่างน้อยหนึ่งประเทศ ป้ายหืด/COPD รวมข้อบ่งใช้ตามฉลากของประเทศที่เลือก โดย EU ใช้ฉลาก EMA หรือฉลากของไอร์แลนด์ (HPRA) สำหรับยาที่ขึ้นทะเบียนรายประเทศ JP = ญี่ปุ่น (เอกสารกำกับยาของ PMDA)",
    countryCodes: { th: "TH", us: "US", uk: "UK", eu: "EU", jp: "JP" },
    countryNames: { th: "ไทย", us: "สหรัฐฯ", uk: "สหราชอาณาจักร", eu: "สหภาพยุโรป", jp: "ญี่ปุ่น" },
    jpName: (x) => `จำหน่ายในญี่ปุ่นในชื่อ ${x}`,
    countryInd: { Asthma: "หืด", COPD: "COPD" },
    countryNotLicensed: (c) => `ไม่มีทะเบียนใน${c}`,
    countryDiscontinued: "เลิกจำหน่ายแล้ว",
    thGone: "เคยมีทะเบียน",
    checkedLabel: "ตรวจสอบล่าสุด",
    checkedReg: "อย.",
    checkedLabelSrc: "ฉลาก",
    checkedPrice: "ราคา",
    checkedTitle: "วันที่ตรวจสอบทะเบียน อย. ข้อบ่งใช้ตามฉลาก และราคากลางของผลิตภัณฑ์นี้ครั้งล่าสุด",
    thRegLabel: "อย.",
    thRegTitle: "สถานะทะเบียนในประเทศที่เลือก ปัจจุบัน: มีทะเบียนอยู่ เคยมี: เคยมีทะเบียนแต่ถูกยกเลิก หมดอายุ ถอนทะเบียน หรือเลิกจำหน่าย (†) ไม่เคยมี: ไม่พบทะเบียนในประเทศนั้น (⊘)",
    usGoneTitle: "สหรัฐฯ: เคยจำหน่าย ปัจจุบันเลิกจำหน่ายแล้ว (สถานะ Discontinued ในข้อมูล Drugs@FDA)",
    euGoneTitle: (date) => `สหภาพยุโรป (ไอร์แลนด์): เคยมีทะเบียน ถอนทะเบียนเมื่อ ${date} (รายการถอนทะเบียนของ HPRA)`,
    thRegOpts: { current: "ปัจจุบัน", past: "เคยมี", never: "ไม่เคยมี" },
    thNever: "ไม่เคยขึ้นทะเบียนในไทย",
    thAwaiting: (d) => `ทะเบียน อย. แสดงสถานะทะเบียนนี้ว่า "รอตรวจสอบสถานะ" (ตรวจเมื่อ ${d}) ในที่นี้ยังแสดงว่ามีทะเบียน ควรยืนยันกับทะเบียนก่อนใช้ข้อมูล`,
    thAwaitingShort: "รอตรวจสอบสถานะ",
    thGoneTitle: (g) => `ไทย: เคยมีทะเบียน ปัจจุบันไม่มีทะเบียน ทะเบียน อย. ${g.lic} ${g.kind === 'expired' ? 'หมดอายุ' : g.kind === 'smp' ? 'สิ้นสุดการติดตามความปลอดภัย (SMP) โดยไม่ได้ทะเบียนถาวร' : 'ถูกยกเลิก'} เมื่อ ${thaiDate(g.date)} เคยจำหน่ายในไทย อาจยังพบในคลังยาหรือใน MIMS ไม่ถูกแนะนำในแนวทางต่างๆ`,
    close: "ปิด",
    nlemStatus: "สถานะบัญชียาหลัก",
    priceSymbol: "฿",
    priceDisclaimer: "ช่วงราคาต่อเดือนโดยเปรียบเทียบ ที่ขนาดยาควบคุมอาการตามปกติ (฿ ต่ำสุด – ฿฿฿฿ สูงสุด; ยาบรรเทาอาการคิดต่อหน่วยบรรจุ) อ้างอิงราคากลางยาของประเทศ ราคาจริงแตกต่างกันในแต่ละโรงพยาบาล",
    priceEstNote: "ยานี้ไม่มีราคากลาง ระดับราคาเป็นการประมาณ (~)",
    priceUnknownNote: "ยานี้ไม่มีราคากลางในไทย จึงไม่แสดงระดับราคา",
    groupLabel: "รวมขนาดยา",
    groupTitle: "แสดงหนึ่งแถวต่อชื่อการค้าและอุปกรณ์ พร้อมรายการขนาดยา เปิดเพื่อดูการ์ดเต็มของแต่ละขนาดยาพร้อมขนาดที่ใช้ ปิดตัวเลือกนี้เพื่อแสดงทุกขนาดยาเป็นการ์ดแยก",
    brandCount: (n) => `${n} ขนาด`,
    brandSelected: (n) => `เลือก ${n}`,
    brandShow: "แสดงการ์ดเต็มพร้อมขนาดที่ใช้",
    brandJump: "เปิดการ์ดของขนาดยานี้",
    brandHide: "ซ่อนการ์ดเต็ม",
    brandRows: (n) => `รวมเป็น ${n} แถว`,
    feedbackBtn: "ข้อเสนอแนะ",
    feedbackTitle: "ส่งข้อเสนอแนะ (เปิดแบบฟอร์มในแท็บใหม่)",
    priceEstShort: "ประมาณการ",
    pifLabel: "แรงสูด",
    pifHint: "แรงสูดสูงสุดของผู้ป่วย วัดที่ความต้านทานของอุปกรณ์ (เช่น In-Check DIAL) ซ่อนอุปกรณ์ที่ต้องใช้แรงสูดมากกว่านี้",
    pifClear: "ล้างค่าแรงสูด",
    pifHidden: (pif, list) => `แรงสูด ${pif} L/min: ซ่อนอุปกรณ์ที่ต้องใช้แรงสูดมากกว่านี้ (${list})`,
    pifAllOk: (pif) => `แรงสูด ${pif} L/min: ใช้ได้ทุกอุปกรณ์ในรายการ`,
    pifUnknown: (n) => `มี ${n} รายการที่ไม่มีข้อมูลแรงสูดขั้นต่ำ (ไม่มีข้อมูล) ควรตรวจสอบก่อนเลือก`,
    unknown: "ไม่มีข้อมูล",
    chipsLabel: "ตัวกรองที่เปิดอยู่",
    chipRemove: (x) => `เอาตัวกรองออก: ${x}`,
    chipSearch: "ค้นหา",
    chipNone: "ไม่เลือก",
    legendBtn: "สัญลักษณ์",
    legendTitle: "คำอธิบายสัญลักษณ์",
    legendSub: "ความหมายของป้าย เครื่องหมาย และสีบนการ์ดยา",
    legendReg: "การขึ้นทะเบียนในแต่ละประเทศ",
    legendRegNow: "ขึ้นทะเบียนอยู่ในปัจจุบัน ป้ายเป็นสีของประเทศนั้น",
    legendRegPast: "เคยขึ้นทะเบียน ปัจจุบันถูกยกเลิก หมดอายุ ถอนทะเบียน หรือเลิกจำหน่ายแล้ว",
    legendRegNever: "ไม่พบการขึ้นทะเบียนในประเทศนั้น",
    legendCountries: "TH = ไทย, US = สหรัฐฯ, UK = สหราชอาณาจักร, EU = สหภาพยุโรป (EMA หรือฉลากของไอร์แลนด์สำหรับยาที่ขึ้นทะเบียนรายประเทศ), JP = ญี่ปุ่น",
    legendNlem: "บัญชียาหลักแห่งชาติ (ไทย)",
    legendNlemNote: "ประเภทบัญชีแสดงอยู่ในบรรทัดประเทศไทยของยาแต่ละรายการ",
    legendPrice: "ราคา",
    legendClass: "กลุ่มยา",
    legendClassNames: { ICS: "คอร์ติโคสเตียรอยด์ชนิดสูด", LABA: "ยากลุ่ม beta-agonist ออกฤทธิ์ยาว", LAMA: "ยากลุ่ม muscarinic antagonist ออกฤทธิ์ยาว", SABA: "ยากลุ่ม beta-agonist ออกฤทธิ์สั้น", SAMA: "ยากลุ่ม muscarinic antagonist ออกฤทธิ์สั้น" },
    legendDevice: "ชนิดอุปกรณ์",
    legendDeviceNames: { MDI: "ยาสูดพ่นกำหนดขนาดชนิดอัดแก๊ส (pMDI)", DPI: "ยาสูดชนิดผงแห้ง", SMI: "ยาสูดชนิดละอองนุ่ม (soft mist)", Nebulizer: "ยาน้ำสำหรับเครื่องพ่นละอองฝอย" },
    legendBadges: "ป้ายและเครื่องหมาย",
    legendExtraFine: "ให้ละอองยาอนุภาคละเอียดพิเศษ (เช่น Foster, Trimbow, QVAR)",
    legendMart: "ใช้เป็นทั้งยาควบคุมและยาบรรเทาอาการในหลอดเดียว (MART)",
    legendCautions: "แตะเครื่องหมายเตือนเพื่ออ่านข้อควรระวังของยานี้",
    legendColour: "รูปเป็นสีเทาเพราะไม่พบแหล่งอ้างอิงยืนยันสีของอุปกรณ์",
    legendUnknown: "ไม่พบแหล่งอ้างอิงของค่านี้ จึงไม่แสดงค่า",
    detailBtn: "รายละเอียด",
    detailClose: "ปิด",
    detailDose: "ขนาดยาแนะนำ",
    detailDevice: "อุปกรณ์และการใช้",
    detailPack: "ราคาและบรรจุภัณฑ์",
    detailReg: "ทะเบียนและผู้รับอนุญาต",
    regNow: "มีทะเบียน",
    regPast: "เคยมีทะเบียน",
    regNever: "ไม่มีทะเบียน",
    detailCurrent: (inds) => `ข้อบ่งใช้ตามทะเบียน: ${inds}`,
    detailThPast: (g) => `ทะเบียน อย. ${g.lic} ${g.kind === 'expired' ? 'หมดอายุ' : 'ถูกยกเลิก'}เมื่อ ${g.date}`,
    detailUsPast: "สถานะ Discontinued ในข้อมูล Drugs@FDA ของ FDA สหรัฐฯ",
    detailEuPast: (date) => `ถอนทะเบียนในไอร์แลนด์เมื่อ ${date} (HPRA)`,
    detailSources: "แหล่งข้อมูล: ทะเบียน อย. (TH), Drugs@FDA (US), SmPC ของสหราชอาณาจักร (UK), รายการของ HPRA ไอร์แลนด์ (EU) ผู้ผลิตยาสำเร็จรูปตามทะเบียน อย.",
    detailNoPicture: "ไม่มีรูปอ้างอิงของอุปกรณ์สูดของยานี้",
    srcLabel: "แหล่งข้อมูล",
    srcShow: "แสดงแหล่งข้อมูล",
    srcHide: "ซ่อนแหล่งข้อมูล",
    searchOpen: "ค้นหา",
    searchClose: "ล้างและปิดการค้นหา",
    guideShort: { exac: "กำเริบ", maint: "ยาควบคุม", follow: "ติดตาม", device: "อุปกรณ์", spacer: "Spacer", steroid: "สเตียรอยด์" },
    srcNone: "ไม่มีแหล่งอ้างอิงที่บันทึกไว้",
    srcUnknown: "ไม่พบแหล่งอ้างอิง จึงแสดงเป็น ไม่มีข้อมูล",
    srcProductInfo: "เอกสารกำกับยาของผู้ผลิต (ไม่มีลิงก์ที่บันทึกไว้ ดูฉลากได้จากทะเบียนด้านล่าง)",
    srcProductInfoShort: "เอกสารกำกับยาของผู้ผลิต (ไม่มีลิงก์ที่บันทึกไว้)",
    srcSearch: (site, q) => `${site}: ค้นหา "${q}"`,
    srcRecord: (site) => `${site}: ข้อมูลทะเบียนของยานี้`,
    srcLabelDoc: (site) => `${site}: ฉลากของยานี้`,
    srcThFda: "ทะเบียน อย.",
    srcNlem: "บัญชียาหลักแห่งชาติ พ.ศ. 2569",
    srcRefPrice: "ฐานข้อมูลราคากลางยา",
    srcSpacerPmdi: "spacer เป็นอุปกรณ์เสริมสำหรับใช้กับ pMDI",
    srcSpacerBreath: "ไม่ควรใช้ spacer กับ pMDI ชนิดกดเองเมื่อสูด (breath-actuated)",
    srcVentLaube: "ผู้ป่วยที่ใช้เครื่องช่วยหายใจให้ยาด้วย pMDI ต่อ spacer ในวงจร หรือ nebulizer",
    srcFlowMdi: "แรงสูดต่ำกว่า 30 L/min เหมาะที่สุดสำหรับ pMDI (สูดช้า ๆ)",
    srcFlowSmi: "ขั้นต่ำ 10 และเหมาะสม 30 L/min (สูดช้า ๆ)",
    srcFlowNeb: "หายใจปกติ (tidal)",
    srcFlowGenuair: "ระบุในชื่อ Genuair ซึ่งเป็นชื่อของ Pressair นอกสหรัฐฯ",
    srcFlowRespiClick: "ระบุในชื่อ Spiromax ซึ่งเป็นชื่อของ RespiClick นอกสหรัฐฯ",
    srcFlowTwist: "ขีดล่างของสมรรถนะที่ยอมรับได้ในหลอดทดลองอยู่ระหว่าง 20 ถึง 28 L/min จึงแสดง 28",
    srcNamedLabel: (src) => `ฉลากยา (${src}) ไม่มีลิงก์ที่บันทึกไว้`,
    srcIndications: "ข้อบ่งใช้ตามฉลากของแต่ละประเทศ ดูหัวข้อทะเบียนด้านล่าง",
    srcGinaLevels: "GINA 2026 (ระดับขนาด ICS ต่ำ กลาง สูง)",
    srcVentMdiNote: "การศึกษา salbutamol MDI ใช้กับ MDI ทั้งกลุ่ม",
    srcVentSmiNote: "การศึกษา tiotropium soft mist ในหลอดทดลอง ใช้กับยาสูดชนิด soft mist ทั้งกลุ่ม",
    makerLabel: "ผู้ผลิต",
    holderLabel: "ผู้รับอนุญาต",
    holderNone: "ไม่ได้ขึ้นทะเบียนในไทย",
    holderTitle: "หนึ่งบรรทัดต่อประเทศที่เลือกในตัวกรองประเทศ: สถานะทะเบียน († = เคยมีทะเบียน, ⊘ = ไม่มีทะเบียน) และผู้รับอนุญาต TH: ทะเบียน อย. US: Drugs@FDA UK: SmPC EU: รายการของ HPRA ไอร์แลนด์",
    holderToggleTitle: "แสดงหรือซ่อนชื่อผู้รับอนุญาต เมื่อซ่อน แต่ละรายการจะแสดงป้ายประเทศแถวเดียว",
    colourUnknown: "ยังไม่ยืนยันสี",
    nFlowUnknown: (t) => `ไม่มีข้อมูลแรงสูดขั้นต่ำของ ${t} (ไม่มีตัวเลขที่ตีพิมพ์) ตรวจสอบว่าผู้ป่วยใช้ได้`,
    devStepsTitle: "วิธีใช้",
    devErrorsTitle: "ข้อผิดพลาดที่พบบ่อย",
    devModeSteps: "ขั้นตอน",
    devModeCheck: "แบบตรวจเทคนิคการใช้ยา",
    chkIntro: "ให้ผู้ป่วยสาธิตการใช้ยาพ่น แล้วบันทึกแต่ละขั้นตอน ★ = ขั้นตอนสำคัญ หากทำผิด ยาจะเข้าปอดได้น้อยหรือไม่เข้าเลย",
    chkPass: "ถูกต้อง",
    chkFail: "ผิด / ไม่ได้ทำ",
    chkScore: (ok, done, n) => `ถูกต้อง ${ok} จาก ${n} ขั้นตอน (ตรวจแล้ว ${done} จาก ${n})`,
    chkCritical: "ข้อผิดพลาดสำคัญ",
    chkNoCritical: "ไม่มีข้อผิดพลาดสำคัญ",
    chkAdvice: "สอนขั้นตอนที่ทำผิดใหม่ ให้ผู้ป่วยสาธิตอีกครั้ง และตรวจซ้ำทุกครั้งที่มาพบแพทย์",
    chkReset: "เริ่มใหม่",
    chkCopy: "คัดลอกผล",
    chkCopied: "คัดลอกผลสำหรับบันทึกเวชระเบียนแล้ว",
    chkNote: (dev, date, ok, n, crit) => `ตรวจเทคนิคการใช้ยาพ่น (${dev}) ${date}: ถูกต้อง ${ok}/${n} ขั้นตอน ${crit.length ? 'ข้อผิดพลาดสำคัญ: ' + crit.join('; ') : 'ไม่มีข้อผิดพลาดสำคัญ'} ได้สอนเทคนิคการใช้ยาซ้ำแล้ว`,
    chkStep: "ขั้นที่",
    cautionsTitle: "ข้อควรระวัง",
    lang: "th",
    cautionsAll: "อาจเกิดหลอดลมหดเกร็งหลังพ่นยาได้ทุกชนิด (paradoxical bronchospasm) ให้หยุดยาและใช้ยาบรรเทาอาการ",
    cautions: {
      SABA: ["มือสั่น ใจสั่น หัวใจเต้นเร็ว และโพแทสเซียมต่ำเมื่อใช้ขนาดสูง", "ระวังในผู้ป่วยโรคหัวใจ หัวใจเต้นผิดจังหวะ ไทรอยด์เป็นพิษ หรือเบาหวาน", "โรคหืด: ต้องใช้ SABA เกิน 2 ครั้งต่อสัปดาห์แสดงว่าควบคุมโรคได้ไม่ดี ไม่แนะนำให้ใช้ SABA เป็นประจำ"],
      LABA: ["ไม่ใช้บรรเทาอาการเฉียบพลัน ยกเว้น ICS-formoterol ที่ใช้เป็นยาบรรเทาอาการ (MART / AIR)", "โรคหืด: ห้ามใช้ LABA โดยไม่มี ICS", "ระวังในโรคหัวใจ (หัวใจเต้นผิดจังหวะ QT ยาว) ไทรอยด์เป็นพิษ หรือเบาหวาน อาจทำให้โพแทสเซียมต่ำ"],
      LAMA: ["ต้อหินมุมปิด: ระวังไม่ให้ละอองหรือผงยาเข้าตา หากปวดตาหรือตาพร่าให้พบแพทย์", "อาจทำให้ปัสสาวะคั่งหรือต่อมลูกหมากโตแย่ลง", "ปากแห้งพบบ่อย ระวังในผู้ป่วยไตเสื่อมรุนแรง", "ไม่ใช้ร่วมกับ ipratropium เป็นประจำ"],
      SAMA: ["ต้อหินมุมปิด: ระวังไม่ให้ละอองยาเข้าตา (เมื่อพ่นละอองให้ใช้ปากกระบอกแทนหน้ากาก)", "อาจทำให้ปัสสาวะคั่งหรือต่อมลูกหมากโตแย่ลง"],
      ICS: ["เชื้อราในช่องปากและเสียงแหบ: บ้วนปากและบ้วนทิ้งหลังพ่นทุกครั้ง ใช้ spacer กับยาพ่นชนิด pMDI", "COPD: เพิ่มความเสี่ยงปอดอักเสบ โดยเฉพาะผู้ที่หลอดลมอุดกั้นรุนแรง", "ใช้ขนาดสูงระยะยาว: กดการทำงานของต่อมหมวกไต กระดูกพรุน ต้อกระจก ต้อหิน", "ยายับยั้ง CYP3A4 ชนิดแรง (เช่น ritonavir, ketoconazole, itraconazole, clarithromycin) เพิ่มระดับสเตียรอยด์ในเลือด"],
    },
    devTipTitle: "ข้อควรรู้",
    devTeachTitle: "การสอนเทคนิคการใช้ยาสูด (GINA 2026)",
    devTeach: [
      "ให้ผู้ป่วยสาธิตการใช้ยาให้ดู ไม่ใช่เพียงถามว่าใช้เป็นหรือไม่",
      "ตรวจตามรายการตรวจของอุปกรณ์นั้น แล้วสาธิต (อุปกรณ์จำลองหรือวิดีโอ) และตรวจซ้ำ อาจต้องทำ 2–3 รอบในการนัดครั้งเดียว",
      "ข้อผิดพลาดมักกลับมาภายใน 4–6 สัปดาห์: ตรวจเทคนิคซ้ำทุกครั้งที่นัด",
      "หลีกเลี่ยงการใช้อุปกรณ์ต่างชนิดกัน (เช่น pMDI กับ DPI) ในผู้ป่วยคนเดียว พิจารณาเปลี่ยนอุปกรณ์เฉพาะเมื่อยังใช้ไม่ถูกหลังสอนซ้ำหลายครั้ง",
    ],
    devUsedBy: "ยาในคู่มือนี้",
    devFlowNeeded: "แรงสูดที่ต้องการ",
    sheetBtn: "ใบคำแนะนำผู้ป่วย",
    sheetTitle: "ใบคำแนะนำการใช้ยาสำหรับผู้ป่วย",
    sheetSub: "พิมพ์หรือบันทึกเอกสารแนะนำการใช้ยาพ่นนี้",
    sheetLang: "ภาษาของเอกสาร",
    sheetCondition: "โรค",
    sheetLevel: "ระดับขนาดยา ICS",
    sheetDose: "ขนาดยา (แก้ไขได้)",
    sheetReset: "คืนค่าเดิม",
    sheetReliever: "ยาบรรเทาอาการที่ระบุในเอกสาร",
    sheetPlan: "เพิ่มแผนปฏิบัติการโรคหืด (หน้า 2)",
    sheetPlanCopd: "เพิ่มแผนปฏิบัติการ COPD (หน้า 2)",
    sheetPef: "ค่า PEF ดีที่สุด",
    sheetNoReliever: "— เว้นว่างไว้เขียนเอง —",
    sheetPrint: "พิมพ์",
    sheetSave: "บันทึกรูปภาพ",
    sheetSaved: "บันทึกใบคำแนะนำแล้ว",
    sheetPdf: "บันทึก PDF",
    sheetPdfSaved: "บันทึกใบคำแนะนำเป็นไฟล์ PDF ขนาด A4 แล้ว",
    sheetPrintFail: "หน้านี้สั่งพิมพ์ไม่ได้ จึงบันทึกใบคำแนะนำเป็นไฟล์ PDF ขนาด A4 แทน เปิดไฟล์ PDF เพื่อพิมพ์",
    refTitle: "เอกสารอ้างอิง",
    refUsedFor: "ใช้สำหรับ",
    refUsed: {
      gina: "ขั้นการรักษาโรคหืด ระดับขนาดยา ICS, MART การลดขั้นการรักษา การจัดการหืดกำเริบ การแปลงขนาดยาและหลักการเปลี่ยนยา",
      gold: "กลุ่ม COPD A/B/E การรักษาเริ่มต้นและการติดตาม การใช้และหยุด ICS การจัดการ COPD กำเริบ ข้อบ่งชี้ NIV และการใส่ท่อช่วยหายใจ หลักการเปลี่ยนยา",
      nlem: "สถานะบัญชียาหลักและเงื่อนไข",
      refprice: "ช่วงราคาของยาแต่ละรายการ (ราคากลางต่อหน่วยบรรจุ)",
      dhand: "การให้ยา MDI ผ่านวงจรเครื่องช่วยหายใจ",
      fang: "การใช้ SMI ผ่านวงจรเครื่องช่วยหายใจ",
      cat: "คะแนน CAT ในแนวทางยาควบคุมเริ่มต้น",
      mmrc: "ระดับ mMRC ในแนวทางยาควบคุมเริ่มต้น",
      usmani: "ข้อผิดพลาดที่พบบ่อยในคู่มือการใช้อุปกรณ์",
      mahler: "การกรองอุปกรณ์ตามแรงสูด",
      weers: "แรงสูดขั้นต่ำของ HandiHaler, Turbuhaler, Diskus/Accuhaler และ Breezhaler",
      grant: "แรงสูดขั้นต่ำของ Ellipta",
      haikarainen: "แรงสูดขั้นต่ำของ Easyhaler",
      corradi: "แรงสูดขั้นต่ำของ NEXThaler",
      ghosh: "แรงสูดขั้นต่ำของยาสูดชนิดผงแห้งแต่ละอุปกรณ์ (Turbuhaler, Diskus, Ellipta, Easyhaler, HandiHaler, NEXThaler, Spiromax, Genuair, Breezhaler)",
      clark: "ขีดล่างของสมรรถนะที่ยอมรับได้ของ Twisthaler",
      laube: "แรงสูดที่เหมาะสมของ pMDI (ต่ำกว่า 30 L/min) การหายใจปกติขณะใช้ nebulizer อุปกรณ์ที่ใช้กับ spacer ได้ และการให้ยาในผู้ป่วยที่ใช้เครื่องช่วยหายใจ",
      wu: "แรงสูดขั้นต่ำและที่เหมาะสมของยาสูดชนิด soft mist",
      fda: "การมีจำหน่ายในไทย (ทะเบียนที่ยังคงอยู่) ของยาแต่ละรายการ",
      bts: "เป้าหมาย O₂ Sat 88–92% ในผู้ป่วย COPD กำเริบ",
      labels: "ตัวเลือกฉลากสหรัฐฯ UK และ EU (ข้อบ่งใช้หืด/COPD ที่ได้รับอนุมัติ)",
      spc: "ความแรง ขนาดยา ขนาดสูงสุดของ MART ระยะเวลาทิ้งยา และขั้นตอนการใช้อุปกรณ์",
    },
    refAuthorNote: "เนื้อหาของผู้จัดทำที่ไม่มีเอกสารอ้างอิงภายนอก: ช่วงราคาที่มีเครื่องหมาย ~ (ยาที่ไม่มีราคากลาง)",

    // Dose conversion guide (Thai)
    convertBtn: "แปลงขนาดยา",
    equivBtn: "ยาที่เทียบเท่า",
    equivTitle: "ยาที่เทียบเท่า",
    equivSub: "ยาที่เปลี่ยนไปใช้ได้ในประเทศที่เลือก พร้อมขนาดยาที่เทียบเท่า",
    equivRegIn: "ขึ้นทะเบียนใน",
    equivRegInTitle: "แสดงยาที่เทียบเท่าซึ่งขึ้นทะเบียนอยู่ในประเทศที่เลือกอย่างน้อยหนึ่งประเทศ เริ่มต้นตามประเทศของรายการหลัก การเปลี่ยนที่นี่ไม่เปลี่ยนรายการหลัก",
    equivNoCountry: "เลือกอย่างน้อยหนึ่งประเทศเพื่อแสดงยาที่เทียบเท่า",
    equivSame: "เทียบเท่าโดยตรง (กลุ่มยาเหมือนกัน)",
    equivOther: "ทางเลือกอื่นที่มีบทบาทเดียวกัน (เปลี่ยนกลุ่มยา)",
    equivNone: "ไม่มียาในฐานข้อมูลที่ตรงเงื่อนไข",
    equivOpen: "คู่มือแปลงขนาดยา",
    equivLevelDiffers: "ระดับ ICS ต่างกัน",
    equivAll: "ทั้งหมด",
    equivLevelNote: (lvl) => `ขนาดยาเทียบที่ระดับ ICS ${lvl} เปิดคู่มือแปลงขนาดยาเพื่อเลือกระดับอื่น`,
    convertTitle: "คู่มือการเปลี่ยนยาและแปลงขนาดยา",
    convertSub: "เทียบ ICS ตามระดับขนาดยาของ GINA พร้อมหลักการเปลี่ยนยาตาม GINA & GOLD 2026",
    convertFrom: "เปลี่ยนจาก",
    convertTo: "เปลี่ยนเป็น",
    convertSwap: "สลับทิศทาง",
    convertCondition: "โรคของผู้ป่วย",
    convertCurrentDose: "ระดับขนาดยา ICS ปัจจุบัน",
    convertStartDose: "ระดับขนาดยา ICS เริ่มต้น",
    convertEquivalent: "ขนาดยาที่เทียบเท่า",
    convertNewRegimen: "ขนาดยาใหม่",
    convertFixedDose: "ยาผสมขนาดคงที่",
    convertNoIcs: "ไม่มี ICS",
    convertIcsPerDay: "ICS",
    convertComponents: "สิ่งที่เปลี่ยนแปลง",
    convertGuidance: "คำแนะนำในการเปลี่ยนยา",
    convertStatus: { continue: "ใช้ต่อ", start: "เริ่ม", stop: "หยุด" },
    convertLevel: { low: "Low", medium: "Medium", high: "High" },
    convertFreq: { 1: "วันละครั้ง", 2: "วันละ 2 ครั้ง", 3: "วันละ 3 ครั้ง", 4: "วันละ 4 ครั้ง", prn: "เมื่อมีอาการ" },
    convertNearest: (want, got) => `ยานี้ไม่มีขนาดระดับ ${want} ขนาดที่ใกล้เคียงที่สุดคือ ${got} การเปลี่ยนนี้จึงเปลี่ยนระดับขนาดยา ICS ด้วย`,
    convertRecommendedAlt: (lvl) => `แนะนำ: ยี่ห้อและอุปกรณ์เดียวกัน คงระดับขนาดยา ${lvl}`,
    convertDetailFor: (name) => `สำหรับ ${name} ที่แนะนำ`,
    convertDisclaimer: "เป็นเครื่องมือช่วยตัดสินใจเท่านั้น โปรดตรวจสอบกับเอกสารกำกับยาและบัญชียาของโรงพยาบาล และปรับให้เหมาะกับผู้ป่วยแต่ละราย",
    nRoleMismatch: (f, t) => `${f} และ ${t} มีบทบาทต่างกัน (ยาควบคุมอาการ ยาบรรเทาอาการ หรือยาที่ใช้ช่วงกำเริบ) จึงไม่ใช่การเปลี่ยนแบบเทียบเท่า ตรวจสอบให้ผู้ป่วยยังมีทั้งยาควบคุมและยาบรรเทาอาการ`,
    nAsthmaNotIndicated: (t) => `${t} ไม่มีข้อบ่งใช้ในโรคหืด`,
    nAsthmaLabaNoIcs: (t) => `ในโรคหืด ห้ามใช้ยาขยายหลอดลมออกฤทธิ์ยาวโดยไม่มี ICS (GINA) เพราะเพิ่มความเสี่ยงหอบกำเริบรุนแรงและเสียชีวิต ต้องใช้ ICS แยกต่อไปร่วมกับ ${t} หรือเลือกยาพ่นที่มี ICS แทน`,
    nAsthmaIcsStopped: "การหยุด ICS ในโรคหืดเพิ่มความเสี่ยงหอบกำเริบรุนแรง GINA แนะนำให้ผู้ใหญ่และวัยรุ่นที่เป็นโรคหืดทุกรายได้รับยาที่มี ICS",
    nAsthmaMartTo: (t, max) => `MART: ใช้ ${t} ทั้งเป็นยาควบคุมประจำวันและยาบรรเทาอาการเมื่อมีอาการ${max ? ` (สูงสุด ${max})` : ''} หยุดใช้ SABA ที่แยกไว้`,
    nAsthmaMartFrom: (f) => `ผู้ป่วยเคยใช้ MART ให้หยุดใช้ ${f} เพื่อบรรเทาอาการ และสั่งยาบรรเทาอาการแยก (SABA เมื่อมีอาการ หรือ ICS-formoterol ขนาดต่ำเมื่อมีอาการ)`,
    nAsthmaLamaAdded: "ในโรคหืด GINA ให้เพิ่ม LAMA เฉพาะผู้ที่ยังคุมอาการไม่ได้ด้วย ICS-LABA ขนาดปานกลาง/สูง ตรวจสอบเทคนิคการพ่นและความสม่ำเสมอในการใช้ยาก่อนเพิ่มยา",
    nAsthmaLabaStopped: "หยุด LABA แต่ยังใช้ ICS ต่อ — ตาม GINA การเปลี่ยนจาก ICS-LABA เป็น ICS อย่างเดียวถือเป็นการลดขั้นการรักษา ควรทำเมื่อคุมอาการได้ดีต่อเนื่องประมาณ 3 เดือนเท่านั้น",
    nStepDown: "เป็นการลดระดับขนาดยา ICS — GINA แนะนำให้ลดยาเมื่อคุมอาการได้ดีต่อเนื่องประมาณ 3 เดือน โดยลดขนาด ICS ลง 25–50%",
    nStepUp: "เป็นการเพิ่มระดับขนาดยา ICS — ประเมินซ้ำใน 2–3 เดือน และลดยาลงเมื่อคุมอาการได้ดี",
    nCopdNotIndicated: (t) => `${t} ไม่มีข้อบ่งใช้ใน COPD`,
    nCopdIcsStopped: "การหยุด ICS (GOLD): พิจารณาได้หากเคยเป็นปอดอักเสบ ข้อบ่งชี้เดิมไม่เหมาะสม หรือไม่ตอบสนองต่อ ICS หลีกเลี่ยงหาก Blood eosinophils ≥300 cells/µL หรือกำเริบบ่อย และติดตามอาการกำเริบหลังเปลี่ยนยา",
    nCopdIcsStarted: "เพิ่ม ICS (GOLD): มีข้อบ่งชี้เมื่อมีอาการกำเริบร่วมกับ Blood eosinophils ≥300 cells/µL (พิจารณาได้ตั้งแต่ ≥100) ระวังปอดอักเสบ โดยเฉพาะผู้ที่มีการอุดกั้นทางเดินหายใจรุนแรง",
    nCopdLamaStopped: "มีการหยุด LAMA — การรักษาต่อเนื่องตาม GOLD ใช้ยาขยายหลอดลมออกฤทธิ์ยาวเป็นหลัก ตรวจสอบว่าเป็นการลดยาโดยตั้งใจ",
    nCopdLabaStopped: "มีการหยุด LABA — ตรวจสอบว่าการหยุดยาขยายหลอดลมนี้เป็นการลดยาโดยตั้งใจ",
    nCopdMart: (t) => `MART เป็นแนวทางสำหรับโรคหืด ใน COPD ให้ใช้ ${t} ตามขนาดยาควบคุม และมี SABA/SAMA แยกไว้บรรเทาอาการ`,
    nCopdDual: "ยาขยายหลอดลมออกฤทธิ์ยาว 2 ชนิด (LABA + LAMA) เป็นการรักษาต่อเนื่องที่ GOLD แนะนำสำหรับผู้ที่เหนื่อยต่อเนื่อง หรือกำเริบโดยไม่มี Blood eosinophils สูง",
    nRelievers: "ทั้งสองเป็นยาบรรเทาอาการ: ใช้ยาใหม่ตามขนาดของยานั้น",
    nLikeForLike: "กลุ่มยาเหมือนกันทั้งสองฝั่ง เป็นการเปลี่ยนอุปกรณ์หรือยี่ห้อเป็นหลัก",
    nNebIcs: "ขนาด budesonide ชนิดพ่นละอองไม่อยู่ในตารางขนาดยาของ GINA ใช้ขนาดตามเอกสารกำกับยา",
    nExtraFine: "ICS อนุภาคละเอียดพิเศษเข้าถึงหลอดลมเล็กได้ที่ขนาดไมโครกรัมต่ำกว่า จึงเทียบขนาดยาตามระดับขนาดของ GINA ไม่ใช่ตามจำนวนไมโครกรัม",
    nFlow: (t, flow) => `${t} ต้องใช้แรงสูดผ่านอุปกรณ์ ${flow} ตรวจสอบว่าผู้ป่วยสูดได้แรงพอ (เช่น In-Check DIAL) หากไม่ได้ อาจเหมาะกับ MDI ร่วมกับกระบอกพ่นยา (spacer) หรือยาพ่นชนิดละอองฝอย (SMI) มากกว่า`,
    nVent: (t) => `${t} ใช้ผ่านเครื่องช่วยหายใจไม่ได้`,
    nDeviceChange: (a, b) => `เปลี่ยนชนิดอุปกรณ์ (${a} → ${b}) สาธิตและตรวจสอบเทคนิคการพ่นก่อนใช้ยาครั้งแรก`,
    nSpacer: "MDI: ใช้ร่วมกับกระบอกพ่นยา (spacer) หากผู้ป่วยกดและสูดไม่สัมพันธ์กัน",
    nFreq: (a, b) => `ความถี่ในการใช้ยาเปลี่ยนจาก ${a} เป็น ${b}`,
    nTiming: (f, t) => `ไม่ต้องเว้นช่วงหรือใช้ซ้อนกัน: หยุด ${f} และเริ่ม ${t} ครั้งแรกในเวลาที่ควรได้ ${f} ครั้งถัดไป ห้ามใช้ทั้งสองตัว`,
    nRinse: (t) => `${t} มี ICS: บ้วนปากและบ้วนทิ้งหลังพ่นยาทุกครั้ง`,
    nFollowAsthma: "ประเมินการควบคุมอาการ เทคนิคการพ่นยา และความสม่ำเสมอในการใช้ยาใน 2–3 เดือนหลังเปลี่ยนยา (GINA)",
    nFollowCopd: "ประเมินอาการเหนื่อย การกำเริบ และเทคนิคการพ่นยาหลังเปลี่ยนยา ตามวงจร ทบทวน–ประเมิน–ปรับ ของ GOLD",

    // Specs
    flow: "แรงสูด",
    exp: "อายุยา",
    recDose: "ขนาดยาแนะนำ (12+)",
    martMax: "MART สูงสุด",
    recDoseRange: "ขนาดยาที่แนะนำ (อายุ 12+)",
    recDoseRangeGina: "ขนาดยาที่แนะนำ (GINA, อายุ 12+)",
    totalDosesExp: "จำนวนโดสทั้งหมด",
    expLabel: "อายุยาหลังเปิดใช้",
    instructions: "คำแนะนำการใช้งาน",
    peakFlow: "แรงสูดที่ต้องการ (Peak Inspiratory Flow)",
    estCost: "ราคาโดยประมาณ",
    pharmacologicalClass: "กลุ่มยา",
    indication: "ข้อบ่งใช้",
    ventilator: "เครื่องช่วยหายใจ",
    compatible: "ใช้ร่วมได้",
    notCompatible: "ใช้ร่วมไม่ได้",
    ventChangeAlt: "พิจารณาเปลี่ยนเป็น MDI + spacer ในวงจร หรือ nebulizer",
    martApproved: "รองรับ MART",
    lowDose: "ขนาดต่ำ",
    mediumDose: "ขนาดปานกลาง",
    highDose: "ขนาดสูง",

    // Sorting
    sortNameAsc: "ชื่อ (A - Z)",
    sortNameDesc: "ชื่อ (Z - A)",
    sortDeviceAsc: "ชนิดอุปกรณ์ (A - Z)",
    sortDeviceDesc: "ชนิดอุปกรณ์ (Z - A)",
    sortCostLow: "ราคา (ต่ำ ไป สูง)",
    sortCostHigh: "ราคา (สูง ไป ต่ำ)",

    // Maintenance Guide Modal
    maintGuideTitle: "แนวทางยาควบคุมเริ่มต้น (Initial Maintenance)",
    maintGuideSub: "ยาควบคุมเมื่อเริ่มการรักษา (GINA & GOLD 2026) หากรักษาอยู่แล้ว ใช้แนวทางการติดตามผล",
    step1Title: "1. เลือกโรค (Disease Indication)",
    step2Title: "2. แนวทางการรักษาตาม GINA",
    step2Sub: "เลือกรูปแบบการรักษาที่ต้องการ",
    track1Title: "รูปแบบที่ 1: MART (แนะนำ)",
    track1Sub: "ใช้ ICS-formoterol ขนาดต่ำเป็นทั้งยาควบคุมและยาบรรเทาอาการ",
    track2Title: "รูปแบบที่ 2: ใช้ SABA บรรเทาอาการ (ทางเลือก)",
    track2Sub: "ใช้ ICS หรือ ICS/LABA คงที่เป็นยาควบคุม และใช้ SABA เป็นยาบรรเทาแยกต่างหาก",
    severityTitle: "ความรุนแรงและประวัติการกำเริบ",
    severitySub: "กรุณาระบุข้อมูลทางคลินิกที่จำเป็นเพื่อประมวลผลแผนการรักษา",
    symptomBurden: "ภาระอาการ (เลือก mMRC หรือ CAT)",
    mmrcScale: "แบบประเมิน mMRC",
    catScore: "แบบประเมิน CAT / CAAT™",
    answer8: "ตอบคำถาม 8 ข้อ",
    total: "คะแนนรวม:",
    calcClinicalType: "ผลการประเมินเบื้องต้น",
    generatePlan: "สร้างแผนการรักษา",
    incompleteProfile: "ข้อมูลทางคลินิกไม่ครบถ้วน",
    incompleteSub: "กรุณาระบุข้อมูลดังต่อไปนี้ให้ครบถ้วนเพื่อประมวลผล:",
    calcGuideClass: "ผลการจัดกลุ่มตามแนวทางมาตรฐาน",
    clinicalProfile: "ข้อมูลทางคลินิก",
    pharmRec: "คำแนะนำการใช้ยา",
    recMart: "ยา MART ที่แนะนำ (ควบคุมและบรรเทาในหลอดเดียว)",
    noMart: "ไม่มียา MART ในระบบ",
    recMaint: "ยาควบคุมอาการ (Maintenance) ที่แนะนำ",
    roleLabels: { Controller: "Maintenance", Reliever: "Reliever", Exacerbation: "Exacerbation" },
    roleTitles: { Controller: "Maintenance: ยาที่ใช้เป็นประจำทุกวัน", Reliever: "Reliever: ยาบรรเทาอาการ ใช้เมื่อมีอาการ", Exacerbation: "Exacerbation: ใช้ช่วงอาการกำเริบ ส่วนใหญ่ในโรงพยาบาล" },
    exacUse: "ใช้ช่วงกำเริบ",
    exacUseNote: "ใช้ช่วงอาการกำเริบ ส่วนใหญ่ในโรงพยาบาล",
    exacUseNoteIcs: "ขึ้นทะเบียนเป็นยาควบคุมโรคหืด ในผู้ใหญ่ใช้ช่วงอาการกำเริบเป็นหลัก",
    noMaint: "ไม่มีข้อบ่งชี้การใช้ยาควบคุมอาการประจำวันสำหรับกลุ่มนี้",
    recRescue: "ยาบรรเทาอาการฉุกเฉิน (Rescue Relievers) ที่แนะนำ",
    noRescue: "ไม่ได้ระบุยาบรรเทาอาการเฉพาะ",
    clearForm: "ล้างข้อมูลทั้งหมด",

    // Exacerbation Guide Modal
    exacGuideTitle: "แนวทางการจัดการภาวะกำเริบ (Exacerbation)",
    exacGuideSub: "อ้างอิงตามแนวทาง GINA & GOLD 2026",
    mildModExac: "กำเริบระดับเล็กน้อยถึงปานกลาง (Mild to Moderate)",
    criteria: "เกณฑ์:",
    vitals: "สัญญาณชีพ:",
    initMgmt: "การรักษาเบื้องต้น:",
    severeExac: "กำเริบระดับรุนแรง (Severe)",
    transferED: "ส่งตัวเข้า ER/ICU ทันที",
    severeRespFail: "รุนแรง (ภาวะระบบหายใจล้มเหลวเฉียบพลัน)",
    hospAdmit: "รับไว้รักษาในโรงพยาบาล (ADMIT)",
    inpatientMgmt: "การจัดการสำหรับผู้ป่วยใน:",
    recDevices: "อุปกรณ์พ่นยาที่แนะนำ",
    exacLabels: {
      asthmaMild: { saba: "SABA: salbutamol 4–6 พัฟ ผ่าน pMDI + spacer", sabaNeb: "SABA พ่นละออง 2.5 mg (ระดับปานกลาง)", icsForm: "Budesonide-formoterol 160/4.5 2 พัฟ (ยาบรรเทาอาการทางเลือก)", sama: "Ipratropium 4 พัฟ (ยาเสริม ระดับปานกลาง)", ics: "ยาควบคุมอาการ: เริ่มหรือเพิ่ม ICS" },
      asthmaSevere: { saba: "SABA: salbutamol 6–10 พัฟ ผ่าน pMDI + spacer", sabaNeb: "SABA พ่นละออง 5 mg", ipra: "ร่วมกับ ipratropium (SAMA หรือ SABA + SAMA)", icsNeb: "ICS ขนาดสูงในห้องฉุกเฉิน (budesonide พ่นละออง)" },
      copdMild: { saba: "SABA", sabaSama: "SABA + SAMA", sama: "SAMA", icsNeb: "Budesonide พ่นละออง (ทางเลือกแทนสเตียรอยด์ชนิดรับประทาน)" },
      copdSevere: { saba: "SABA ผ่าน pMDI + spacer หรือเครื่องพ่นละออง", sabaSama: "SABA + SAMA ผ่าน pMDI + spacer หรือเครื่องพ่นละออง", sama: "SAMA", icsNeb: "Budesonide พ่นละออง (ทางเลือกแทนสเตียรอยด์ชนิดระบบ)" },
    },
    ctrlLabel: "ยาควบคุมอาการ:",
    asthmaMildCtrl: "เริ่มหรือเพิ่มยาที่มี ICS (GINA Figure 9) ตรวจเทคนิคการใช้ยาสูดและความสม่ำเสมอในการใช้ยา",
    exacTypes: { MDI: "MDI", SMI: "ยาพ่นละอองฝอย (SMI)", DPI: "ยาสูดผงแห้ง (DPI)", Nebulizer: "เครื่องพ่นละอองยา" },
    respSupport: "การช่วยหายใจ และ การประเมินการตอบสนอง",
    refractoryNext: "เมื่อไม่ตอบสนองต่อการรักษา (Refractory):",
    refractoryNextDesc: "ประเมินซ้ำภายใน 1 ชั่วโมงหรือเร็วกว่า หากแย่ลงหรือไม่ดีขึ้น ส่งต่อการดูแลระดับสูงขึ้น ส่ง ICU หากซึม สับสน หรือฟังปอดไม่ได้ยินเสียงลม",
    nivCaution: "⚠️ ข้อควรระวังในการใช้ NIV",
    nivCautionDesc: "ไม่แนะนำให้ใช้เครื่องช่วยหายใจชนิดไม่ใส่ท่อ (NIV) เป็นประจำในภาวะหอบหืดกำเริบ เว้นแต่มีภาวะ COPD ร่วมด้วยอย่างชัดเจน",
    respSupportProto: "แนวทางการช่วยหายใจ (Respiratory Support)",
    nivIndication: "ข้อบ่งชี้ในการใช้ NIV (บรรเทาอาการเบื้องต้น):",
    intubationInd: "ข้อบ่งชี้ในการใส่ท่อช่วยหายใจ (Intubation):",
    disposition: "เกณฑ์การพิจารณาจำหน่ายผู้ป่วย",
    whenDischarge: "เมื่อใดควรพิจารณาให้กลับบ้าน",
    whenAdmit: "เมื่อใดควรรับไว้ในโรงพยาบาล",

    // Device Guide Details (Thai)
    devGuideTitle: "คู่มือการใช้อุปกรณ์พ่นยา",
    devGuideSub: "ขั้นตอนการใช้และข้อผิดพลาดที่พบบ่อยของแต่ละอุปกรณ์",
    mdiStep1: "เปิดฝาและเขย่าหลอดยาก่อนใช้",
    mdiStep2: "หายใจออกทางปากให้สุด (หันหน้าหนีอุปกรณ์)",
    mdiStep3: "อมปากกระบอก กดหลอดยา 1 ครั้ง พร้อมกับหายใจเข้าช้าๆ และลึกๆ",
    mdiStep4: "กลั้นหายใจ 5-10 วินาที แล้วหายใจออกช้าๆ",
    dpiStep1: "เตรียมยา (เลื่อน, บิด, หรือเปิดฝา ตามชนิดอุปกรณ์)",
    dpiStep2: "หายใจออกให้สุด (ห้ามเป่าลมเข้าไปในอุปกรณ์)",
    dpiStep3: "อมปากกระบอก หายใจเข้าทางปากให้ เร็ว แรง และ ลึก",
    dpiStep4: "กลั้นหายใจ 5-10 วินาที แล้วหายใจออกช้าๆ",
    smiStep1: "บิดฐานใสตามลูกศรจนดังคลิก",
    smiStep2: "เปิดฝาครอบออกให้สุด",
    smiStep3: "หายใจออกให้สุด อมปากกระบอกให้สนิท",
    smiStep4: "กดปุ่มปล่อยยา พร้อมกับหายใจเข้าช้าๆ และลึกๆ แล้วกลั้นหายใจ",
    nebStep1: "ประกอบกระเปาะพ่นยาและใส่ยาตามแพทย์สั่ง",
    nebStep2: "ต่อหน้ากาก/ท่ออม และต่อสายเข้ากับเครื่องพ่นยา",
    nebStep3: "เปิดเครื่อง",
    nebStep4: "หายใจเข้าออกตามปกติทางปากจนกว่ายาจะหมด (10-15 นาที)",

    // Exac Details - Asthma (Thai)
    asthmaMildCrit: "พูดเป็นประโยคหรือเป็นวลีได้, ชอบนั่งมากกว่านอน, ไม่กระสับกระส่าย, ใช้กล้ามเนื้อช่วยหายใจเล็กน้อยหรือบ้าง",
    asthmaMildVit: "อัตราหายใจ ≤ 30 ครั้ง/นาที, O₂ Sat ≥ 92% (อากาศปกติ), PEF ≥ 50% ของค่าดีที่สุด/ค่าคาดการณ์ (ระดับเล็กน้อย: O₂ Sat ≥ 94%, PEF > 70%)",
    asthmaMildSaba: "ระดับเล็กน้อย: salbutamol 4 พัฟ ผ่าน pMDI + spacer (หรือ budesonide-formoterol 160/4.5 2 พัฟ) ซ้ำได้ 1 ครั้งหลัง 30–60 นาที ระดับปานกลาง: 4–6 พัฟ (หรือพ่นละออง 2.5 mg) ได้ถึง 3 ครั้ง ห่างกัน 20–30 นาที หากจำเป็นเพิ่ม ipratropium 4 พัฟพร้อม salbutamol แต่ละครั้ง ได้ถึง 3 ครั้ง",
    asthmaMildCs: "Prednisolone 40–50 mg ทุกเช้า 5–7 วัน (ผู้ใหญ่) โดยทั่วไปไม่จำเป็นในการกำเริบระดับเล็กน้อย",
    asthmaMildOx: "หากจำเป็น ให้ออกซิเจนโดยปรับเป้าหมาย O₂ Sat 92–95%",
    asthmaMildMart: "ใช้ยา ICS-formoterol ขนาดเดิมต่อไป และใช้ยาตัวเดิมพ่นบรรเทาอาการ (สูงสุด 12 puffs/วัน)",
    avoidLabel: "หลีกเลี่ยง:",
    asthmaAvoid: "ไม่ส่งเอกซเรย์ทรวงอก ไม่ตรวจก๊าซในเลือด และไม่ให้ยาปฏิชีวนะเป็นประจำ ห้ามใช้ยากล่อมประสาท พิจารณาสาเหตุอื่น (เช่น หัวใจล้มเหลว ความผิดปกติของทางเดินหายใจส่วนบน สำลักสิ่งแปลกปลอม ลิ่มเลือดอุดกั้นในปอด) หากมีภาวะแพ้รุนแรง (anaphylaxis) ร่วมกับหืด ให้ epinephrine ก่อน",
    asthmaSevCrit: "พูดไม่ได้ ดื่มน้ำไม่ได้ หรือนอนราบไม่ได้, ฟังปอดเสียงเบาหรือไม่ได้ยิน (silent chest) หากซึม สับสน หรือเขียว = อันตรายถึงชีวิต",
    asthmaSevVit: "อัตราหายใจ > 30 ครั้ง/นาที, O₂ Sat < 92% (อากาศปกติ), PEF < 50% ของค่าดีที่สุด/ค่าคาดการณ์",
    asthmaSevSabaSama: "Salbutamol 6–10 พัฟ ผ่าน pMDI + spacer (หรือพ่นละออง 5 mg) ทุก 20–30 นาที ร่วมกับ ipratropium 4 พัฟทุกครั้ง ได้ถึง 3 ครั้ง",
    asthmaSevCs: "ให้คอร์ติโคสเตียรอยด์ (ทางหลอดเลือดดำ หรือ กิน)",
    asthmaSevCsAlt: "GINA: ในห้องฉุกเฉิน การให้ ICS ขนาดสูงภายในชั่วโมงแรกลดการนอนโรงพยาบาลในผู้ป่วยที่ไม่ได้รับสเตียรอยด์ชนิดฉีด/กิน หากให้ร่วมกับสเตียรอยด์ ผลในผู้ใหญ่ยังขัดแย้งกัน และยังไม่มีชนิดหรือขนาดยาที่แนะนำชัดเจน",
    asthmaSevAdj: "ไม่ให้เป็นประจำ พิจารณาให้ magnesium sulfate ทางหลอดเลือดดำ 2 g ใน 20 นาที หากไม่ตอบสนองต่อการรักษาเบื้องต้นและยังมีออกซิเจนต่ำ (รวมถึงผู้ใหญ่ที่ FEV₁ < 25–30% ของค่าคาดการณ์เมื่อแรกรับ) การพ่น magnesium ไม่มีประโยชน์",
    asthmaSevOx: "ให้ออกซิเจนโดยมีเป้าหมาย O₂ Sat 92–95%",
    astDis1: "อาการดีขึ้นและเข้าเกณฑ์ระดับเล็กน้อย อย่างน้อย 1–2 ชั่วโมงหลังพ่น salbutamol ครั้งสุดท้าย",
    astDis2: "PEF ดีขึ้น และ > 70% ของค่าที่ดีที่สุด/ค่าคาดการณ์",
    astDis3: "O₂ Sat ≥ 92% โดยไม่ใช้ออกซิเจน",
    astDis4: "มีความพร้อมและผู้ช่วยเหลือที่บ้านเพียงพอ",
    astDisAct: "การปฏิบัติ: เริ่มหรือเพิ่มยาที่มี ICS โดยแนะนำ ICS-formoterol แบบ MART ขั้นที่ 4 หากอายุ ≥ 12 ปี หรือ ICS-LABA ขนาดปานกลางทุกวัน ใช้ยาบรรเทาอาการเมื่อมีอาการเท่านั้น ไม่ใช้เป็นประจำ กินสเตียรอยด์ต่อหากเริ่มแล้ว ตรวจเทคนิคการพ่นยาและการใช้ยาสม่ำเสมอ ให้แผนปฏิบัติการชั่วคราวเป็นลายลักษณ์อักษรและยาเพียงพอจนถึงวันนัด และนัดติดตามภายใน 2–7 วัน พิจารณาส่งต่อผู้เชี่ยวชาญเร็วหลังนอนโรงพยาบาลหรือมาห้องฉุกเฉินซ้ำ",
    astAdm1: "สภาพผู้ป่วย 1 ชั่วโมงหลังเริ่มรักษา (เช่น นอนราบไม่ได้ สมรรถภาพปอดต่ำ) หรือไม่ตอบสนองต่อยาขยายหลอดลมเบื้องต้น",
    astAdm2: "กำเริบรุนแรง: ต้องกู้ชีพหรือรักษาเร่งด่วนเมื่อแรกรับ, อัตราหายใจ > 22 ครั้ง/นาที, O₂ Sat < 95%, PEF สุดท้าย < 50% ของค่าคาดการณ์",
    astAdm3: "เคยกำเริบรุนแรง (ใส่ท่อช่วยหายใจ นอนโรงพยาบาล) เคยมาห้องฉุกเฉิน/นอกนัดที่ต้องใช้สเตียรอยด์ชนิดกิน หรือใช้ยาบรรเทาอาการ > 8 พัฟใน 24 ชม. ที่ผ่านมา",
    astAdm4: "เพศหญิง อายุมาก ฐานะทางเศรษฐกิจด้อย หรือขาดผู้ดูแล/ทรัพยากรที่บ้าน",

    // Exac Details - COPD (Thai)
    copdMildCrit: "GOLD 2026 (Rome) ระดับเล็กน้อย: ความเหนื่อย VAS < 5, RR < 24/นาที, HR < 95/นาที, SpO₂ ≥ 92% ขณะหายใจอากาศปกติ (หรือออกซิเจนที่ใช้ประจำ) และลดลง ≤ 3% หากทราบค่าเดิม, CRP < 10 mg/L หากตรวจได้ ระดับปานกลาง: มีอย่างน้อย 3 ข้อจาก VAS ≥ 5, RR ≥ 24, HR ≥ 95, SpO₂ < 92% และ/หรือลดลง > 3%, CRP ≥ 10 ไม่มีภาวะระบบหายใจล้มเหลวเฉียบพลัน",
    copdMildSaba: "พ่น SABA +/- SAMA เท่านั้น",
    copdMildMod: "พ่น SABA ± SAMA + กินสเตียรอยด์ (prednisone 40 mg/วัน) 5 วัน",
    copdMildModAlt: "GOLD: การพ่น budesonide แบบละอองอาจใช้แทนสเตียรอยด์ชนิดกินได้ในผู้ป่วยบางราย",
    copdMildAbx: "มีข้อบ่งชี้เมื่อเสมหะเป็นหนอง เคยเพาะเชื้อจากเสมหะขึ้น หรือต้องใช้เครื่องช่วยหายใจ (ใส่ท่อหรือ NIV) ให้ 5 วัน",
    copdMildOx: "หากออกซิเจนต่ำ ให้ออกซิเจนแบบควบคุมปริมาณ (GOLD 2026) เป้าหมาย O₂ Sat 88–92% ในผู้ป่วยที่เสี่ยงคาร์บอนไดออกไซด์คั่ง (BTS 2017)",
    copdSevCrit: "GOLD 2026 (Rome) ระดับรุนแรง: เหมือนระดับปานกลาง ร่วมกับคาร์บอนไดออกไซด์คั่งและเลือดเป็นกรดจากก๊าซในเลือด (PaCO₂ > 45 mmHg และ pH < 7.35) สัญญาณอันตราย: หายใจลำบากรุนแรง ใช้กล้ามเนื้อช่วยหายใจ ท้องขยับสลับทาง ซึมสับสน ออกซิเจนต่ำลงเรื่อยๆ",
    copdSevBronch: "SABA ± SAMA ผ่าน pMDI (ร่วมกับ spacer) หรือเครื่องพ่นละออง ซึ่งอาจใช้ง่ายกว่าในผู้ป่วยที่อาการหนัก ให้ใช้อากาศขับเครื่องพ่นละออง ไม่ใช้ออกซิเจน เพื่อไม่ให้ PaCO₂ สูงขึ้น ใช้ยาขยายหลอดลมชนิดออกฤทธิ์ยาวต่อ หรือเริ่มก่อนกลับบ้าน ไม่แนะนำ methylxanthines ทางหลอดเลือดดำ",
    copdSevCs: "ให้คอร์ติโคสเตียรอยด์ (ทางหลอดเลือดดำ หรือ กิน)",
    copdSevCsAlt: "GOLD: การพ่น budesonide แบบละอองอาจใช้แทนสเตียรอยด์ชนิดฉีด/กินได้ในผู้ป่วยบางราย",
    copdSevAbx: "หากเสมหะเป็นหนอง เคยเพาะเชื้อขึ้น หรือใช้เครื่องช่วยหายใจ (ใส่ท่อหรือ NIV): ให้ 5 วัน เลือกยาตามแนวทางของโรงพยาบาล",
    copdSevVent: "ให้ออกซิเจนแบบควบคุมก่อน NIV เป็นการช่วยหายใจอันดับแรกในภาวะหายใจล้มเหลวเฉียบพลัน (ดีกว่า HFNT เมื่อมีคาร์บอนไดออกไซด์คั่ง) ใช้ HFNT เมื่อออกซิเจนยังต่ำแม้ให้ออกซิเจนแบบปกติ หรือทนต่อ NIV ไม่ได้",

    // Intubation & NIV details (Thai)
    intub1: "ไม่สามารถทน HFNT และ/หรือ NIV ได้",
    intub2: "ระบบหายใจ หรือหัวใจกำลังจะหยุดเต้น",
    intub3: "สำลักปริมาณมาก หรืออาเจียนต่อเนื่อง",
    intub4: "หัวใจเต้นผิดจังหวะรุนแรงชนิด ventricular หรือ supraventricular",
    intub5: "ออกซิเจนต่ำรุนแรงต่อเนื่องแม้ใช้ HFNT หรือ NIV",
    intub6: "ระดับความรู้สึกตัวแย่ลง (ซึม, สับสน, ไม่รู้สึกตัว)",
    intub7: "ฟังปอดไม่ได้ยินเสียงลม (Silent chest - สัญญาณอันตรายว่าหยุดหายใจ)",
    intub8: "ออกซิเจนต่ำ/คาร์บอนไดออกไซด์คั่ง อย่างต่อเนื่องแม้จะช่วยหายใจเต็มที่แล้ว",
    intub9: "ระดับความรู้สึกตัวลดลง หรือกระสับกระส่ายที่ควบคุมด้วยยาระงับประสาทไม่ได้",
    intub10: "ไม่สามารถขับเสมหะออกได้อย่างต่อเนื่อง",
    intub11: "ความดันโลหิต/ระบบไหลเวียนไม่คงที่รุนแรง ไม่ตอบสนองต่อสารน้ำและยากระตุ้นความดัน",
    niv1: "ภาวะเลือดเป็นกรดจากการหายใจ (pH ≤ 7.35 และ/หรือ PaCO₂ ≥ 45 mmHg)",
    niv2: "หายใจลำบากรุนแรงร่วมกับสัญญาณกล้ามเนื้อหายใจล้าหรือออกแรงหายใจมาก (ใช้กล้ามเนื้อช่วยหายใจ ท้องขยับสลับทาง ช่องซี่โครงบุ๋ม)",
    niv3: "ออกซิเจนต่ำต่อเนื่องแม้ได้รับออกซิเจนเสริม",

    // Validation Requirements (Thai)
    reqSymptomFreq: "ความถี่ของอาการ (Symptom Frequency)",
    reqLungFunc: "สมรรถภาพปอด (Lung Function)",
    reqExacHist: "ประวัติการกำเริบ (Exacerbation History)",
    reqGoldStage: "ระยะสมรรถภาพปอด (GOLD Spirometry Stage)",
    reqSymptomBurden: "ภาระอาการ (คะแนน mMRC หรือ CAT)",
    reqEosinophils: "ระดับความเข้มข้น Blood Eosinophils",

    // Native Logic Keys -> Thai UI Mapping
    "Symptom Frequency": "ความถี่ของอาการ",
    "Symptoms 2 days/week or less": "มีอาการ 2 วัน/สัปดาห์ หรือน้อยกว่า",
    "Symptoms > 2 days/week, but less than 3–5 days/week": "มีอาการ > 2 วัน/สัปดาห์ แต่น้อยกว่า 3–5 วัน/สัปดาห์",
    "Symptoms most days (e.g. 4 days/week)": "มีอาการเกือบทุกวัน (เช่น 4 วัน/สัปดาห์)",
    "Daily symptoms, or waking at night ≥ 1 time/week": "มีอาการทุกวัน หรือตื่นกลางดึกเพราะหอบ ≥ 1 ครั้ง/สัปดาห์",
    "Symptoms severely limiting daily activities": "อาการรบกวนชีวิตประจำวันอย่างรุนแรง",
    "Lung Function": "สมรรถภาพปอด",
    "Normal lung function (FEV1 ≥ 80% predicted)": "ปกติ (FEV1 ≥ 80% predicted)",
    "Low lung function (FEV1 < 80% predicted)": "ต่ำ (FEV1 < 80% predicted)",
    "Exacerbation History": "ประวัติการกำเริบ",
    "0 exacerbations in the last year": "ไม่มีการกำเริบใน 1 ปีที่ผ่านมา",
    "≥ 1 exacerbation in the last year": "มีการกำเริบ ≥ 1 ครั้ง ใน 1 ปีที่ผ่านมา",
    "GOLD Spirometry Stage (Post-bronchodilator FEV1)": "ระยะ GOLD Spirometry (Post-bronchodilator FEV1)",
    "GOLD 1 (Mild): FEV1 ≥ 80% predicted": "GOLD 1 (Mild): FEV1 ≥ 80% predicted",
    "GOLD 2 (Moderate): 50% ≤ FEV1 < 80%": "GOLD 2 (Moderate): 50% ≤ FEV1 < 80%",
    "GOLD 3 (Severe): 30% ≤ FEV1 < 50%": "GOLD 3 (Severe): 30% ≤ FEV1 < 50%",
    "GOLD 4 (Very Severe): FEV1 < 30%": "GOLD 4 (Very Severe): FEV1 < 30%",
    "Exacerbation History (per year)": "ประวัติการกำเริบ (ต่อปี)",
    "Zero Moderate or Severe Exacerbation": "ไม่มีการกำเริบปานกลางหรือรุนแรง",
    "One or More moderate or severe exacerbation": "กำเริบปานกลางหรือรุนแรง ≥ 1 ครั้ง",
    "Blood Eosinophils": "ระดับ Blood Eosinophils",
    "Blood Eosinophils < 300 cells/µL": "น้อยกว่า 300 cells/µL",
    "Blood Eosinophils ≥ 300 cells/µL": "มากกว่าหรือเท่ากับ 300 cells/µL",
    "Grade 0: I only get breathless with strenuous exercise.": "Grade 0: เหนื่อยเฉพาะเมื่อออกกำลังกายอย่างหนัก",
    "Grade 1: I get short of breath when hurrying on level ground or walking up a slight hill.": "Grade 1: เหนื่อยเมื่อรีบเดินบนพื้นราบ หรือเดินขึ้นเนินเล็กน้อย",
    "Grade 2: On level ground, I walk slower than people of the same age because of breathlessness, or I have to stop for breath when walking at my own pace.": "Grade 2: เดินบนพื้นราบได้ช้ากว่าคนวัยเดียวกัน หรือต้องหยุดพักหายใจเมื่อเดินตามความเร็วของตนเอง",
    "Grade 3: I stop for breath after walking about 100 meters or after a few minutes on level ground.": "Grade 3: ต้องหยุดพักหายใจหลังเดินได้ประมาณ 100 เมตร หรือไม่กี่นาทีบนพื้นราบ",
    "Grade 4: I am too breathless to leave the house or I am breathless when dressing or undressing.": "Grade 4: เหนื่อยมากจนออกจากบ้านไม่ได้ หรือเหนื่อยแม้กระทั่งตอนแต่งตัว",

    // Result Generation Variables (Thai)
    reasonSevere: "อาการทุกวันหรือตื่นกลางคืน (หรืออาการรบกวนชีวิตประจำวันอย่างรุนแรง) ร่วมกับสมรรถภาพปอดต่ำหรือมีการกำเริบเร็วๆ นี้",
    reasonFrequent: "อาการเกือบทุกวัน อาการทุกวันหรือตื่นกลางคืน หรือสมรรถภาพปอดต่ำ",
    reasonModerate: "อาการมากกว่า 2 วัน/สัปดาห์ แต่น้อยกว่า 3–5 วัน/สัปดาห์ สมรรถภาพปอดปกติหรือลดลงเล็กน้อย",
    reasonInfrequent: "อาการนานๆ ครั้ง (2 วัน/สัปดาห์ หรือน้อยกว่า)",
    riskExac: (alone, track1) => `${alone ? 'การกำเริบในปีที่ผ่านมาเพียงอย่างเดียวไม่ทำให้ขั้นการรักษาของ GINA สูงขึ้น แต่' : 'การกำเริบในปีที่ผ่านมา'}เป็นปัจจัยเสี่ยงต่อการกำเริบในอนาคต: ให้แน่ใจว่าการรักษามี ICS${track1 ? '' : ' (GINA แนะนำแนวทางที่ 1 โดยใช้ ICS-formoterol เป็นยาบรรเทาอาการ)'} ให้แผนปฏิบัติการโรคหืดเป็นลายลักษณ์อักษร และนัดติดตามบ่อยกว่าผู้ป่วยที่มีความเสี่ยงต่ำ (GINA 2026)`,
    riskExacTitle: "ความเสี่ยงต่อการกำเริบ",
    martRec1: "ICS-formoterol ขนาดต่ำ เฉพาะเมื่อมีอาการ: สูด 1 ครั้งเมื่อมีอาการ (ไม่เกิน 12 ครั้ง/วัน)",
    martRec2: "MART ขนาดต่ำ: ICS-formoterol สูด 1 ครั้ง วันละ 2 ครั้ง (หรือ 1 ครั้ง) + 1 ครั้งเมื่อมีอาการ (รวมไม่เกิน 12 ครั้ง/วัน)",
    martRec3: "MART ขนาดปานกลาง: ICS-formoterol สูด 2 ครั้ง วันละ 2 ครั้ง + 1 ครั้งเมื่อมีอาการ (รวมไม่เกิน 12 ครั้ง/วัน)",
    martRec5: "MART ขนาดปานกลาง พิจารณาเพิ่ม LAMA ส่งต่อผู้เชี่ยวชาญเพื่อประเมิน phenotype และยาชีววัตถุ (anti-IgE, anti-IL5/5R, anti-IL4Rα, anti-TSLP) พิจารณาทดลอง ICS-formoterol ขนาดสูงเป็นยาควบคุม ไม่เกิน 3–6 เดือน",
    convRec1: "พ่น ICS ขนาดต่ำทุกครั้งที่พ่น SABA (หากมี ICS-SABA ให้ใช้แทนเมื่อมีอาการ)",
    convRec2: "พ่น ICS ขนาดต่ำเป็นประจำทุกวัน + พ่น SABA เมื่อมีอาการ (หรือ ICS-SABA หากมี)",
    convRec3: "พ่น ICS-LABA ขนาดต่ำเป็นประจำทุกวัน + พ่น SABA เมื่อมีอาการ (หรือ ICS-SABA หากมี) หรือ พ่น ICS ขนาดปานกลางเป็นประจำทุกวัน + พ่น SABA เมื่อมีอาการ",
    convRec4: "พ่น ICS-LABA ขนาดปานกลางเป็นประจำทุกวัน + พ่น SABA เมื่อมีอาการ (หรือ ICS-SABA หากมี)",
    convRec5: "ICS-LABA ขนาดปานกลาง พิจารณาเพิ่ม LAMA ส่งต่อผู้เชี่ยวชาญเพื่อประเมิน phenotype และยาชีววัตถุ (anti-IgE, anti-IL5/5R, anti-IL4Rα, anti-TSLP) พิจารณาทดลอง ICS-LABA ขนาดสูง ไม่เกิน 3–6 เดือน",
    rationaleAsthma: (reason, step) => `ผู้ป่วยมี${reason} จัดอยู่ในกลุ่มรักษา GINA Step ${step}`,
    recommendation: (rec) => `คำแนะนำตาม GINA: ${rec}`,
    copdHighEosRat: "ผู้ป่วยมีความเสี่ยงกำเริบสูง และมีระดับ Eosinophils สูง (≥ 300 cells/µL)",
    copdHighEosRec: "แนวทางแนะนำ LABA + LAMA และพิจารณา LABA + LAMA + ICS (Eosinophils ≥ 300) รายการแสดงยา 3 ชนิดก่อน ตามด้วย LABA + LAMA",
    copdLowEosRat: "ผู้ป่วยมีความเสี่ยงกำเริบสูง แต่ระดับ Eosinophils ไม่ถึงเกณฑ์ (< 300 cells/µL)",
    copdLowEosRec: "แนวทางแนะนำการใช้ยาขยายหลอดลม 2 ชนิดคู่กัน (Dual Bronchodilation: LABA + LAMA)",
    copdGroupBRat: "ผู้ป่วยมีภาระอาการรบกวนมาก (mMRC ≥ 2 หรือ CAT ≥ 10) แต่มีความเสี่ยงกำเริบต่ำ",
    copdGroupBRec: "แนวทางแนะนำการใช้ยาขยายหลอดลม 2 ชนิดคู่กัน (Dual Bronchodilation: LABA + LAMA)",
    copdGroupARat: "ผู้ป่วยมีอาการรบกวนน้อย และมีความเสี่ยงกำเริบต่ำ",
    copdGroupARec: "แนวทางแนะนำยาขยายหลอดลม 1 ชนิด (รายการแสดงยาออกฤทธิ์ยาว LABA หรือ LAMA)",

    catQs: [
      { left: "ฉันไม่เคยไอเลย", right: "ฉันไออยู่ตลอดเวลา" },
      { left: "ฉันไม่มีเสมหะในอกเลย", right: "หน้าอกฉันเต็มไปด้วยเสมหะ" },
      { left: "ฉันไม่รู้สึกแน่นหน้าอกเลย", right: "ฉันรู้สึกแน่นหน้าอกมาก" },
      { left: "ฉันไม่เหนื่อยเลยเวลาเดินขึ้นเนินหรือขึ้นบันได", right: "ฉันเหนื่อยมากเวลาเดินขึ้นเนินหรือขึ้นบันได" },
      { left: "ฉันสามารถทำกิจกรรมที่บ้านได้ปกติ", right: "กิจกรรมในบ้านฉันถูกจำกัดอย่างมาก" },
      { left: "ฉันมั่นใจที่จะออกนอกบ้านแม้จะมีโรคปอด", right: "ฉันไม่กล้าออกนอกบ้านเลยเพราะโรคปอดของฉัน" },
      { left: "ฉันนอนหลับได้สนิทดี", right: "ฉันนอนไม่หลับเลยเพราะโรคปอดของฉัน" },
      { left: "ฉันมีพลังงานเหลือเฟือ", right: "ฉันไม่มีพลังงานเลย" }
    ],

    // Step Down Guide Details
  }
};

// Role of a product in care (the Maintenance / Reliever / Exacerbation filter).
// The internal key 'Controller' is shown as "Maintenance": GINA's term since 2023 for treatment taken on a
// regular schedule. 'Exacerbation' = used during a flare-up, usually in hospital: the nebulised
// bronchodilators (also relievers) and nebulised budesonide (exacerbation only; GINA lists high-dose ICS in
// emergency care and GOLD lists nebulised budesonide as an alternative to oral corticosteroids, neither
// lists it as adult maintenance treatment).
const ROLES = ['Controller', 'Reliever', 'Exacerbation'];
const ROLE_STYLE = {
  Controller: ['bg-indigo-600 text-white shadow-sm', 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'],
  Reliever: ['bg-orange-500 text-white shadow-sm', 'text-orange-600 hover:bg-orange-50'],
  Exacerbation: ['bg-rose-600 text-white shadow-sm', 'text-rose-600 hover:bg-rose-50'],
};
const isExacOnly = (med) => med.role.join() === 'Exacerbation';
const exacNoteOf = (med, t) => (isExacOnly(med) ? t.exacUseNoteIcs : null);
const ExacBadge = ({ med, t }) => (med.role.includes('Exacerbation') ? (
  <span title={isExacOnly(med) ? t.exacUseNoteIcs : t.exacUseNote} data-exac-use className="text-[10px] font-bold rounded border px-1.5 py-0.5 inline-flex items-center whitespace-nowrap border-rose-200 bg-rose-50 text-rose-700">{t.exacUse}</span>
) : null);

const ExtraFineBadge = ({ t, compact = false, className = "" }) => (
  <span className={`font-bold rounded border border-fuchsia-200 bg-fuchsia-50 text-fuchsia-700 inline-flex items-center whitespace-nowrap ${compact ? 'text-[10px] px-1.5 py-0.5 gap-0.5' : 'text-[10px] px-2 py-0.5 gap-1'} ${className}`}>
    <Sparkles className={compact ? "w-2.5 h-2.5" : "w-3 h-3"} />
    {t.extraFine}
  </span>
);

// NOTE: this zips class components against substance components POSITIONALLY.
// deviceData must therefore list substances in the same order as the class string
// (e.g. class 'LABA / LAMA' -> 'Vilanterol ... / Umeclidinium ...').
const RenderSubstances = ({ medClass, medSubstance, className = "", compact = false }) => {
  const classes = medClass.split('/').map(s => s.trim());
  const substances = medSubstance.split('/').map(s => s.trim());

  if (classes.length === substances.length && classes.length > 1) {
    return (
      <div className={`flex ${compact ? 'flex-row flex-wrap gap-x-1.5 gap-y-0.5' : 'flex-col gap-1'} ${className}`}>
        {classes.map((c, i) => (
          <div key={i} className={`leading-snug flex items-start ${compact ? '' : 'flex-wrap'}`}>
            <span className={`font-bold ${getClassColor(c)} shrink-0`}>{c}</span>
            <span className={`text-slate-500 break-words ${compact ? 'ml-0.5' : 'ml-1.5'}`}>: {substances[i]}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`leading-snug flex items-start flex-wrap ${className}`}>
      <span className={`font-bold ${getClassColor(medClass)} shrink-0`}>{medClass}</span>
      <span className={`text-slate-500 break-words ${compact ? 'ml-0.5' : 'ml-1.5'}`}>: {medSubstance}</span>
    </div>
  );
};

const DiagnosticBadges = ({ indications, t, className = "mt-3 mb-2", med = null }) => (
  <div className={`flex flex-col gap-2 ${className}`}>
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mr-1">{t.indication}:</span>
      {indications?.includes('Asthma') && (
        <span className="text-[10px] font-bold px-2 py-0.5 rounded border border-indigo-200 bg-indigo-50 text-indigo-700">
          Asthma
        </span>
      )}
      {indications?.includes('COPD') && (
        <span className="text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-200 bg-emerald-50 text-emerald-700">
          COPD
        </span>
      )}
      {med && <CautionsPanel med={med} t={t} />}
    </div>
  </div>
);

// Short ventilator dose label ("2x" / "No set dose"); hover or click shows the full,
// referenced note. The popover is portalled to <body> so card overflow can't clip it.
const VentDosePopover = ({ label, full }) => {
  const [pos, setPos] = useState(null);
  const [pinned, setPinned] = useState(false);
  const ref = React.useRef(null);
  const place = () => {
    const r = ref.current.getBoundingClientRect();
    const w = Math.min(288, window.innerWidth - 16);
    setPos({ left: Math.max(8, Math.min(r.left, window.innerWidth - w - 8)), top: r.bottom + 6, width: w });
  };
  useEffect(() => {
    if (!pinned) return;
    const close = (e) => { if (!ref.current || !ref.current.contains(e.target)) { setPinned(false); setPos(null); } };
    const hide = () => { setPinned(false); setPos(null); };
    document.addEventListener('mousedown', close);
    window.addEventListener('scroll', hide, true);
    return () => { document.removeEventListener('mousedown', close); window.removeEventListener('scroll', hide, true); };
  }, [pinned]);
  return (
    <>
      <button type="button" ref={ref} aria-label={full} aria-expanded={!!pos}
        onMouseEnter={place} onMouseLeave={() => { if (!pinned) setPos(null); }}
        onClick={(e) => { e.stopPropagation(); if (pinned) { setPinned(false); setPos(null); } else { place(); setPinned(true); } }}
        className="font-extrabold underline decoration-dotted underline-offset-2 cursor-help">
        {label}
      </button>
      {pos && ReactDOM.createPortal(
        <div role="tooltip" style={{ position: 'fixed', left: pos.left, top: pos.top, width: pos.width, zIndex: 1000 }}
          className="rounded-lg border border-cyan-200 bg-white p-3 text-xs font-medium leading-relaxed text-slate-700 shadow-xl">
          {full}
        </div>, document.body)}
    </>
  );
};

// Shared ventilator strip: same copy in grid card, compare panel and export card.
const VentNote = ({ med, t }) => {
  if (med.ventCompatible && (med.type === 'MDI' || med.type === 'SMI')) {
    const isMdi = med.type === 'MDI';
    return <><strong>{t.dose}</strong> <VentDosePopover label={isMdi ? t.ventShortMdi : t.ventShortSmi} full={isMdi ? t.ventDoseMdi : t.ventDoseSmi} /></>;
  }
  if (!med.ventCompatible) return <>{t.ventChangeAlt}</>;
  return null;
};

// DRY Utility Component: Handles string vs object dose structures uniformly
// Regimen text ("1-2 puffs Q4-6H PRN (Max 8/day)") in the app language; clinical shorthand in Thai.
const DOSE_TH_RULES = [
  [/Not appropriate/g, 'ไม่เหมาะสม'],
  [/\(GINA: up to (\d+) temporarily\)/g, '(GINA: เพิ่มได้ถึง $1 ชั่วคราว)'],
  [/(\d+) puffs\/day/g, '$1 พัฟ/วัน'],
  [/(\d+) inhalations\/day/g, '$1 ครั้ง/วัน'],
  [/\(Max (\d+)\/day\)/g, '(ไม่เกิน $1 ครั้ง/วัน)'],
  [/\((\d+)-(\d+) drops\)/g, '($1–$2 หยด)'],
  [/\(1 vial\)/g, '(1 หลอด)'],
  [/ in saline/g, ' ผสมน้ำเกลือ'],
  [/([\d.]+(?:-[\d.]+)?) (?:puffs?|actuations?)\b/g, '$1 พัฟ'],
  [/([\d.]+(?:-[\d.]+)?) inhalations?\b/g, 'สูด $1 ครั้ง'],
  [/([\d.]+(?:-[\d.]+)?) capsules?\b/g, '$1 แคปซูล'],
  [/([\d.]+(?:-[\d.]+)?) blisters?\b/g, '$1 ช่องยา'],
  [/Nebulized/g, 'พ่นละออง'],
  [/QD or BID/g, 'วันละ 1–2 ครั้ง'],
  [/ONCE daily/g, 'วันละ 1 ครั้ง'],
  [/\bBID\b/g, 'วันละ 2 ครั้ง'],
  [/\bTID\b/g, 'วันละ 3 ครั้ง'],
  [/\bQID\b/g, 'วันละ 4 ครั้ง'],
  [/Q(\d+)-(\d+)H/g, 'ทุก $1–$2 ชม.'],
  [/\bPRN\b/g, 'เมื่อมีอาการ'],
  [/(\d)-(\d)/g, '$1–$2'],
];
const doseText = (reg, t) => (t && t.isTh && typeof reg === 'string' ? (reg === 'Unknown' ? t.unknown : DOSE_TH_RULES.reduce((x, [re, to]) => x.replace(re, to), reg)) : reg);

const DoseRangeDisplay = ({ doseRange: rawDose, viewType = 'compact', isMart, martMax: rawMartMax, t, full = false }) => {
  const doseRange = typeof rawDose === 'object' ? Object.fromEntries(Object.entries(rawDose).map(([k, v]) => [k, doseText(v, t)])) : doseText(rawDose, t);
  const martMax = doseText(rawMartMax, t);
  const isObject = typeof doseRange === 'object';

  const martBadge = isMart ? (
    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded border border-amber-200 bg-amber-50 text-amber-700 inline-flex items-center gap-1 shadow-sm shrink-0 whitespace-nowrap">
      <Sparkles className="w-2.5 h-2.5" /> {t.martApproved}
    </span>
  ) : null;

  if (viewType === 'compact') {
    const displayDose = isObject
      ? (!rawDose.medium.includes('Not appropriate') ? doseRange.medium :
         !rawDose.low.includes('Not appropriate') ? doseRange.low :
         doseRange.high)
      : doseRange.split('(')[0].trim();

    return (
      <div className={full ? 'flex flex-wrap items-center gap-x-1.5 gap-y-0.5 min-w-0' : 'flex items-center gap-1.5'}>
        <span className={`font-bold text-indigo-700 ${full ? 'leading-tight break-words min-w-0' : 'leading-none truncate max-w-[80px]'}`} title={displayDose}>{displayDose}</span>
        {martBadge}
      </div>
    );
  }

  if (viewType === 'expanded-card') {
    return (
      <>
        {isObject ? (
          <div className="flex flex-col pt-1.5 gap-1.5 min-w-0">
            <div className="flex items-center justify-between border-b border-slate-200 pb-1.5 mb-1">
              <span className="text-slate-500 font-medium">{t.recDoseRangeGina}</span>
              {martBadge}
            </div>
            {['low', 'medium', 'high'].map(level => (
              <div key={level} className="flex justify-between items-start gap-3">
                <span className={`text-[13px] shrink-0 capitalize ${!rawDose[level].includes('Not') ? 'font-bold text-orange-600' : 'text-slate-400'}`}>{t[`${level}Dose`]}</span>
                <span className={`text-[12px] font-bold text-right break-words min-w-0 ${rawDose[level].includes('Not') ? 'text-slate-400 font-normal' : 'text-indigo-700'}`}>{doseRange[level].trim()}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col border-b border-slate-200 pb-2 pt-1 min-w-0">
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-slate-500 font-medium">{t.recDoseRange}</span>
              {martBadge}
            </div>
            <span className="font-bold text-indigo-700 break-words">{doseRange}</span>
          </div>
        )}
        {martMax && (
          <div className="flex flex-col pt-2 min-w-0">
            <span className="text-slate-500 font-medium mb-0.5">{t.martMax}</span>
            <span className="font-bold text-amber-600 break-words">{martMax}</span>
          </div>
        )}
      </>
    );
  }

  // Grid/List View detailed
  return (
    <div className="flex flex-col w-full gap-1">
      {isObject ? (
        <div className="flex flex-col pt-1 gap-1 min-w-0 w-full">
          <div className="flex items-center justify-between border-b border-slate-200 pb-1 mb-0.5">
            <span className="text-slate-500 font-medium">{t.recDoseRangeGina}</span>
            {martBadge}
          </div>
          {['low', 'medium', 'high'].map(level => {
            const isNotApp = rawDose[level].includes('Not');
            return (
               <div key={level} className="flex justify-between items-start gap-2">
                  <span className={`text-xs shrink-0 capitalize ${!isNotApp ? 'font-bold text-orange-600' : 'text-slate-400 font-medium'}`}>{t[`${level}Dose`]}</span>
                  <span className={`text-xs text-right break-words min-w-0 ${!isNotApp ? 'font-bold text-indigo-700' : 'text-slate-400'}`} data-dose-value>{doseRange[level].trim()}</span>
               </div>
            );
          })}
        </div>
      ) : (
        <div className="flex items-center justify-between min-w-0 shrink-0 w-full pt-1 pb-1 border-b border-slate-200">
          <div className="flex items-start gap-1">
             <span className="text-slate-400 font-medium whitespace-nowrap">{t.recDose}:</span>
             <span className="font-bold text-indigo-700 break-words">{doseRange}</span>
          </div>
          {martBadge}
        </div>
      )}

      {martMax && (
        <div className="flex items-start gap-1 min-w-0 shrink-0 mt-1">
          <span className="text-slate-400 font-medium whitespace-nowrap">{t.martMax}:</span>
          <span className="font-bold text-amber-600 break-words">{martMax}</span>
        </div>
      )}
    </div>
  );
};

const DeviceListSnippet = ({ med, getIcon, t, large = false, showHolder = false, holderRegions = ['th'] }) => {
  // main list rows leave the NLEM condition to the detail view; guide suggestions keep it
  const cond = large ? null : nlemConditionOf(med, t);
  const nameBlock = (
    <div className={`flex items-center ${large ? 'gap-3 md:w-[44%]' : 'gap-2 sm:w-[40%]'} w-full shrink-0 min-w-0`}>
      <div title={COLOUR_UNKNOWN.has(med.id) ? t.colourUnknown : undefined} className={`${large ? 'p-1.5 rounded-lg' : 'p-1 rounded'} bg-slate-50 border border-slate-100 shrink-0 flex items-center justify-center`}>
        {medIcon(med, large ? "w-14 h-14 md:w-16 md:h-16 text-slate-700" : "w-6 h-6 text-slate-700")}
      </div>
      {/* main list on a phone: leave room for the Select and Details buttons in the row's top-right corner */}
      <div className={`flex flex-col min-w-0 w-full leading-tight ${large ? 'pr-9 sm:pr-0' : ''}`}>
        <div className="flex items-center gap-1.5 flex-wrap mb-0.5">
           <h3 className={`font-bold text-slate-800 ${large ? 'text-[13px] sm:text-sm' : 'text-[11px]'} break-words min-w-0`}>{med.marketName}</h3>
           <span className={`text-[10px] font-bold px-1 rounded uppercase tracking-wider ${med.tagColor}`}>{med.type}</span>
           {med.isExtraFine && <ExtraFineBadge t={t} compact={true} className={large ? '!whitespace-normal text-left max-w-full' : ''} />}
           <ExacBadge med={med} t={t} />
           {!large && <NlemBadge med={med} t={t} compact={true} />}
           {!large && <AvailBadge med={med} t={t} />}
           {!large && <CautionsPanel med={med} t={t} />}
        </div>
        {/* main list: components directly under the name, then the country block on its own rows, so every row reads the same */}
        <RenderSubstances medClass={med.class} medSubstance={med.substance} compact={true} className={`${large ? 'text-[11px] sm:text-xs mb-1' : 'text-[10px]'} text-slate-500`} />
        {large && <CountryLines med={med} t={t} regions={holderRegions} showHolder={showHolder} listRow className="text-[11px]"><CautionsPanel med={med} t={t} /></CountryLines>}
      </div>
    </div>
  );
  // main list: a fact wraps inside the row on a narrow phone; compact snippets keep one line
  const item = (label, value) => <div className={large ? 'flex flex-wrap items-baseline gap-x-1 gap-y-0.5 min-w-0 max-w-full' : 'flex items-baseline gap-1 whitespace-nowrap'}><span className="text-slate-400 whitespace-nowrap">{label}:</span> {value}</div>;
  const details = (
    <div className={`flex flex-wrap items-center ${large ? 'gap-x-5 gap-y-1.5 md:flex-1 md:min-w-0 md:border-l md:pl-4' : 'gap-x-3 gap-y-1 sm:flex-grow sm:border-l sm:pl-3'} w-full ${large ? 'text-[11px] sm:text-xs' : 'text-[10px]'} border-slate-100`} data-list-details>
      {item(t.flow, <span className="font-bold text-cyan-700" data-flow>{flowText(med, t)}</span>)}
      {!large && item(t.exp, <span className="font-bold text-rose-600 truncate max-w-[60px]" title={expText(med, t)}>{expText(med, t)}</span>)}
      {item(t.recDose, <DoseRangeDisplay doseRange={med.doseRange} viewType="compact" isMart={med.isMart} martMax={med.martMax} t={t} full={large} />)}
    </div>
  );
  const exacNote = exacNoteOf(med, t);
  const note = (cond || exacNote) && (
    <div className="w-full flex flex-col gap-0.5">
      {exacNote && <p className="text-[11px] font-medium leading-snug text-rose-700" data-exac-note>{exacNote}</p>}
      {cond && <p className="text-[11px] font-medium leading-snug text-amber-700" data-nlem-condition>{cond}</p>}
    </div>
  );
  if (large) return (
    <div className="rounded border border-slate-200 bg-white p-2 shadow-sm transition-all flex flex-col gap-2 relative w-full min-w-0">
      <div className="flex flex-col md:flex-row md:items-center gap-2 w-full min-w-0">{nameBlock}{details}</div>
      {note}
    </div>
  );
  return (
    <div className="rounded border border-slate-200 bg-white p-2 shadow-sm transition-all flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 relative w-full">
      {nameBlock}
      {details}
      {note && <div className="w-full sm:basis-full">{note}</div>}
    </div>
  );
};

// Exacerbation Guide device list: collapsible groups following the card's recommendation text (labels
// quote it), compact rows ordered by device type (MDI, SMI, DPI, nebuliser, each with a small label),
// then NLEM products first, then A-Z.
const ExacDeviceGroups = ({ rule, list, t, notes = {} }) => {
  const byNlem = (a, b) => DEVICE_TYPE_ORDER[a.type] - DEVICE_TYPE_ORDER[b.type] || (nlemOf(a) ? 0 : 1) - (nlemOf(b) ? 0 : 1) || a.marketName.localeCompare(b.marketName);
  return (
    <div className="flex flex-col gap-1.5" data-exac-groups>
      {EXAC_LIST_GROUPS[rule].map(([key, test]) => {
        const items = list.filter(test).sort(byNlem);
        if (!items.length) return null;
        return (
          <details key={key} className="group rounded-md border border-slate-200 bg-white" data-exac-group={key}>
            <summary className="flex items-center justify-between gap-2 px-2.5 py-1.5 cursor-pointer select-none list-none text-[11px] font-extrabold text-slate-700 hover:bg-slate-50 rounded-md">
              <span>{t.exacLabels[rule][key]} <span className="font-bold text-slate-400">({items.length})</span></span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-slate-400 transition-transform group-open:rotate-180"><polyline points="6 9 12 15 18 9" /></svg>
            </summary>
            <ul className="border-t border-slate-100 divide-y divide-slate-100">
              {notes[key] && <li className="px-2.5 py-1.5 text-[10px] leading-snug text-amber-800 bg-amber-50" data-exac-note={key}><strong>MART:</strong> {notes[key]}</li>}
              {items.map((med, i) => {
                const st = nlemOf(med);
                const cond = nlemConditionOf(med, t);
                const head = (i === 0 || items[i - 1].type !== med.type) && (
                  <li key={'h-' + med.type} className="px-2 pt-1.5 pb-0.5 text-[9px] font-extrabold uppercase tracking-wider text-slate-400 bg-slate-50" data-exac-type={med.type}>{t.exacTypes[med.type]}</li>
                );
                return [head, (
                  <li key={med.id} className="flex items-center gap-2 px-2 py-1 min-w-0" data-exac-item={med.id}>
                    <span className="shrink-0">{medIcon(med, 'w-6 h-6')}</span>
                    <div className="min-w-0 flex-1 leading-tight">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <h3 className="text-[11px] font-bold text-slate-800">{med.marketName}</h3>
                        <span className={`text-[9px] font-bold px-1 rounded uppercase ${med.tagColor}`}>{med.type}</span>
                        {st && <span title={t.nlemTitle} className={`text-[9px] font-bold px-1 rounded border ${NLEM_STYLE[st.list]}`}>NLEM {st.list}</span>}
                      </div>
                      <RenderSubstances medClass={med.class} medSubstance={med.substance} compact={true} className="text-[9px] text-slate-500" />
                      {cond && <p className="text-[9px] text-amber-700 leading-snug">{cond}</p>}
                    </div>
                    <span className="shrink-0 text-[10px] font-bold text-indigo-700 text-right max-w-[45%]">{typeof med.doseRange === 'string' ? doseText(med.doseRange, t) : med.isMart && med.martMax ? <span className="text-amber-700">MART · {t.isTh ? 'สูงสุด' : 'max'} {doseText(med.martMax, t)}</span> : ''}</span>
                  </li>
                )];
              })}
            </ul>
          </details>
        );
      })}
    </div>
  );
};

// --- Dedicated PNG Export Card ---
const DeviceExportCard = ({ med, getIcon, t }) => {
  return (
    <div className="w-[450px] rounded-2xl border border-slate-200 bg-white p-6 flex flex-col shadow-lg relative font-sans text-slate-900 h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
          {medIcon(med, "w-16 h-16 text-slate-700")}
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex gap-2 items-center mb-1.5 flex-wrap">
          <span className={`text-[11px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${med.tagColor}`}>{med.type}</span>
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">{shapeLabel(med)}</span>
          {med.isExtraFine && <ExtraFineBadge t={t} />}
          <NlemBadge med={med} t={t} />
          <AvailBadge med={med} t={t} />
        </div>
        <h3 className="text-2xl font-extrabold text-slate-800 leading-tight mb-1 mt-2">{med.marketName}</h3>
        <RenderSubstances medClass={med.class} medSubstance={med.substance} className="text-sm mb-2 mt-1" />
        <DiagnosticBadges indications={med.indications} t={t} className="mt-2 mb-3" />

        <div className="space-y-2 text-[13px] bg-slate-50 p-4 rounded-xl border border-slate-100 mt-5">
          <div className="flex justify-between items-start gap-3 border-b border-slate-200 pb-2 min-w-0">
            <span className="text-slate-500 font-medium break-words min-w-0">{t.peakFlow}</span>
            <span className="font-bold text-cyan-700 text-right break-words shrink-0 max-w-[65%]" data-flow>{flowText(med, t)}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-200 pb-2">
            <span className="text-slate-500 font-medium shrink-0">{t.estCost}</span>
            <PriceTag med={med} t={t} className="text-sm shrink-0" />
          </div>
          <div className="flex justify-between items-start gap-3 border-b border-slate-200 pb-2 pt-1 min-w-0">
            <span className="text-slate-500 font-medium shrink-0">{t.totalDosesExp}</span>
            <span className="font-bold text-slate-700 text-right break-words min-w-0">{packText(med, t)}</span>
          </div>
          <div className="flex justify-between items-start gap-3 border-b border-slate-200 pb-2 pt-1 min-w-0">
            <span className="text-slate-500 font-medium shrink-0">{t.expLabel}</span>
            <span className="font-bold text-rose-600 text-right break-words min-w-0">{expText(med, t)}</span>
          </div>

          <DoseRangeDisplay doseRange={med.doseRange} viewType="expanded-card" isMart={med.isMart} martMax={med.martMax} t={t} />
        </div>
      </div>
      <div className="mt-5 pt-4 border-t border-slate-100">
        <div className={`flex items-center gap-3 p-4 rounded-xl border h-[84px] ${med.ventCompatible ? 'bg-cyan-50 border-cyan-200 text-cyan-800' : 'bg-rose-50 border-rose-200 text-rose-800'}`}>
          <Wind className={`w-6 h-6 shrink-0 ${med.ventCompatible ? 'text-cyan-600' : 'text-rose-500 opacity-60'}`} />
          <div className="flex flex-col justify-center">
            <span className="text-sm font-bold flex items-center gap-1.5 leading-tight">
              {med.ventCompatible ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />} {t.ventilator} {med.ventCompatible ? t.compatible : t.notCompatible}
            </span>
            <span className="text-[13px] mt-1 font-medium opacity-90 leading-tight"><VentNote med={med} t={t} /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

const MMRC_OPTIONS = [
  "Grade 0: I only get breathless with strenuous exercise.",
  "Grade 1: I get short of breath when hurrying on level ground or walking up a slight hill.",
  "Grade 2: On level ground, I walk slower than people of the same age because of breathlessness, or I have to stop for breath when walking at my own pace.",
  "Grade 3: I stop for breath after walking about 100 meters or after a few minutes on level ground.",
  "Grade 4: I am too breathless to leave the house or I am breathless when dressing or undressing."
];

const asthmaSeverityGroups = [
  { title: "Symptom Frequency", options: ["Symptoms 2 days/week or less", "Symptoms > 2 days/week, but less than 3–5 days/week", "Symptoms most days (e.g. 4 days/week)", "Daily symptoms, or waking at night ≥ 1 time/week", "Symptoms severely limiting daily activities"] },
  { title: "Lung Function", options: ["Normal lung function (FEV1 ≥ 80% predicted)", "Low lung function (FEV1 < 80% predicted)"] },
  { title: "Exacerbation History", options: ["0 exacerbations in the last year", "≥ 1 exacerbation in the last year"] },
];

const copdSeverityGroups = [
  { title: "GOLD Spirometry Stage (Post-bronchodilator FEV1)", options: ["GOLD 1 (Mild): FEV1 ≥ 80% predicted", "GOLD 2 (Moderate): 50% ≤ FEV1 < 80%", "GOLD 3 (Severe): 30% ≤ FEV1 < 50%", "GOLD 4 (Very Severe): FEV1 < 30%"] },
  { title: "Exacerbation History (per year)", options: ["Zero Moderate or Severe Exacerbation", "One or More moderate or severe exacerbation"] }
];

// Initial GINA step for adults/adolescents (GINA 2026 Summary Guide Table 3; full report Box 4-4).
// Step 3 (low-dose MART / low-dose ICS-LABA): symptoms most days (e.g. 4 days/week), or night waking
// ≥ 1/week, or low lung function. Step 4 (medium dose) needs DAILY symptoms or night waking ≥ 1/week
// AND low lung function or a recent exacerbation; "most days" with low lung function stays Step 3.
// An exacerbation in the last year raises the step only together with daily symptoms / night waking
// (Step 4). On its own it is a risk factor, not a step (GINA 2026 full report p.74): the plan shows a
// risk note instead. Author decision: symptoms severely limiting daily activities count as daily symptoms.
// This is the INITIAL step (max Step 4); stepping up to Step 5 at review is in the Follow-up Guide.
const ginaStep = (severity) => {
  const daily = severity.includes("Daily symptoms, or waking at night ≥ 1 time/week") ||
                severity.includes("Symptoms severely limiting daily activities");
  const mostDays = severity.includes("Symptoms most days (e.g. 4 days/week)");
  const lowLung = severity.includes("Low lung function (FEV1 < 80% predicted)");
  const exacerbation = severity.includes("≥ 1 exacerbation in the last year");
  if (daily && (lowLung || exacerbation)) return 4;
  if (daily || mostDays || lowLung) return 3;
  if (severity.includes("Symptoms > 2 days/week, but less than 3–5 days/week")) return 2;
  return 1;
};

const EOSINOPHIL_GROUP = { title: "Blood Eosinophils", options: ["Blood Eosinophils < 300 cells/µL", "Blood Eosinophils ≥ 300 cells/µL"] };

const getMutuallyExclusiveGroup = (groupTitle) => {
  if (groupTitle.includes("Spirometry")) return "gold_stage";
  if (groupTitle.includes("Exacerbation")) return "exacerbation_history";
  if (groupTitle.includes("Frequency")) return "asthma_symptoms";
  if (groupTitle.includes("Function")) return "lung_function";
  if (groupTitle.includes("Eosinophils")) return "eosinophils";
  return null;
};

const changelogData = [
  {
    version: "v1.12.6",
    date: "October 26, 2026",
    features: [
      "Guide windows have a Figures button (Exacerbation, Initial Maintenance, Follow-up, Device Guide, Spacer & Mask, Steroid Dose). It lists the matching diagrams from GINA 2026 (for example Box 4-6, the main treatment figure, and Box 9-4, exacerbations in primary care) and GOLD 2026 (for example Figures 3.8 and 3.9, initial and follow-up treatment, and Figure 4.2, exacerbation severity), and each opens the official report at that figure's page. The figures are copyrighted, so they are linked, not copied into the app.",
    ],
    bugs: [],
  },
  {
    version: "v1.12.5",
    date: "October 14, 2026",
    features: [
      "Search now also finds products by the colour of the device (for example purple, orange, เขียว) and by company: the Thai licence holder, the holders in the other countries and the manufacturer (for example GlaxoSmithKline, Inpac, แอสตร้าเซนเนก้า). Colours follow the inhaler pictures; a product whose colour is not verified is not found by colour.",
      "Xalflu Airmaster 50/100: the Thai FDA register shows its registration as \"awaiting status check\" (seen 14 October 2026). It stays listed as registered, with a ? on its TH chip and a note in the detail view. The 50/250 strength is registered as normal.",
      "Source links now open the product's own record where one could be matched with certainty: the Thai FDA register record (99 products), the brand owner's label on DailyMed (48) and the Irish HPRA record (48). The other products keep the search link, and the UK (MHRA) and Japan (PMDA) links still open a search.",
      "Spacer and ventilator use now cite a reference. The ERS/ISAM report (Laube 2011) states that spacers are for pMDIs and should not be used with breath-actuated pMDIs, and that ventilated patients receive aerosols by pMDI with an in-line spacer or by nebuliser.",
      "Estimated prices are removed. The 17 products that have no Thai reference price (for example Trelegy, Breztri, Trimbow 87/5/9, Serevent and Combivent Respimat) now show Unknown for the price instead of an estimated level, and sort last by price.",
    ],
    bugs: [],
  },
  {
    version: "v1.12.4",
    date: "October 13, 2026",
    features: [
      "Brand rows no longer stretch into a tall, mostly empty card in tile view: a brand row is now only as tall as its content. Details shared by every strength are shown once at the top, under the common name: picture, device, and the country lines (licence holder, NLEM type) and indications when they are the same for all strengths. Each strength then shows its strength and its components labelled by drug class (ICS : ..., LABA : ...), anything that differs from the other strengths, and its own Select and Details buttons. Tapping a strength jumps to its full card, where the dose is; the button under the strengths shows or hides all the full cards.",
      "Device filter: the device names under DPI, MDI and the other types are now in A to Z order. The unidentified capsule inhaler (Pulvisonide) is listed under Other DPI, together with the dry-powder inhalers that have no technique reference yet; Other DPI comes last.",
      "Two buttons at the top have shorter names in English: Exacerbation (was Exacerbation Guide) and Initial Maintenance (was Initial Maintenance Guide). The Thai names are unchanged.",
      "The components (for example ICS : Fluticasone propionate 100 mcg, LABA : Salmeterol 50 mcg) now sit directly under the product name, above the country lines, on cards, list rows and brand rows, because some product names carry no strength.",
      "Equivalent Drugs: a Registered in filter (All, TH, US, UK, EU, JP) in the window chooses the countries to look in, for example to find the Thai equivalents of an inhaler from Japan. It starts with the countries of the main list, and changing it there does not change the main list. Each equivalent shows the countries where it is currently registered, and its Asthma / COPD tags follow the labels of the chosen countries.",
      "Detail view: every fact now has a Source line, opened with the Show sources button at the bottom of the view (the choice is remembered). Registration in each country links to that country's register (Thai FDA, Drugs@FDA and DailyMed, MHRA Products, the Irish HPRA list, PMDA), with a search for the product already filled in where the search was checked to find it; NLEM, price, minimum inspiratory flow and ventilator use link to their reference. Where no source is recorded, the line says so instead of showing a link. The reference list gains Corradi 2014, the source of the NEXThaler minimum flow.",
      "Phones: the top of the page is shorter, so more of the list shows on opening. The title takes one line, the tagline is hidden, the credit and the disclaimer link share a line, and the six guides sit in one row of icon buttons with short names (Exac., Maint., Follow-up, Device, Spacer, Steroid). Tablet and computer layouts are unchanged.",
      "Phones: the search box is now a magnifying-glass button. Tapping it opens the search bar across the row; the sort menu uses the space it frees. The button turns blue while a search is active, and the X in the bar clears and closes the search.",
      "The six guide buttons now stay pinned at the top with the search row while you scroll, on every screen size, so a guide is always one tap away.",
      "Cards and list rows no longer show a grey not-registered chip (for example US ⊘) for a country that is not selected in the Countries filter. A chip still shows for every selected country, and for any other country where the product is or was registered. The detail view lists all five countries as before.",
      "Mometasone checked against GINA 2026: the pressurised inhalers now carry an ICS dose level. GINA gives one band for low and medium together (200 to 400 mcg a day) and high above 400, so Asmanex HFA 100 and Dulera 100/5 (2 puffs twice a day, 400 mcg) show Low / Medium, and Asmanex HFA 200 and Dulera 200/5 (800 mcg) show High. The Steroid Dose calculator has a mometasone pMDI row with the same band and the US label maximum. The level uses the label strength, which is the delivered dose, because the US label gives no metered dose. Mometasone dry-powder inhalers (Asmanex Twisthaler, Atectura, Enerzair) still have no level: GINA says the dose depends on the device.",
      "Minimum inspiratory flow now has a reference for every device that shows a figure, listed under Show sources in the detail view. Dry-powder inhalers follow the table in Ghosh 2017: HandiHaler 20; Turbuhaler, Diskus, Ellipta and Easyhaler 30; NEXThaler 35; Spiromax and Genuair 40; Breezhaler 50 L/min. This changes DuoResp Spiromax from 30 to 40 L/min and gives a figure to products that showed Unknown: the RespiClick products and Tudorza and Duaklir Pressair (40; the reference lists them as Spiromax and Genuair, their names outside the US) and Asmanex Twisthaler (28; Clark 2020 puts the lower limit of acceptable performance between 20 and 28). MDIs cite the ERS/ISAM report (Laube 2011: below 30 L/min is the ideal flow), soft mist inhalers cite Wu 2023 (minimal 10, optimal 30 L/min) and nebulisers cite Laube 2011 (normal tidal breaths). Still Unknown because no reference was found: Airmaster, LupinHaler, Swinghaler, BudeForu and the Pulvisonide capsule inhaler. The reference list gains the four papers.",
      "Ciclesonide (Alvesco) has GINA 2026 dose levels: low 80 to 160, medium above 160 to 320, high above 320 mcg a day. Alvesco 80 shows 1 puff twice a day (low), 2 puffs (medium) and 4 puffs (high); Alvesco 160 shows 1 puff twice a day (medium) and 2 puffs (high), following the US label's twice-daily doses up to 320 mcg twice a day. The Steroid Dose calculator has a ciclesonide row. The level uses the label strength, which is the dose from the actuator.",
      "Steroid Dose calculator: fluticasone furoate 100 mcg a day is graded Low to medium dose, because GINA 2026 gives one band for low and medium together. It was shown as Low dose.",
    ],
    bugs: [
      "Searching forced every matching brand open, so a brand row and its full cards showed together and hiding them did nothing. A search now shows the brand row only; open it to see the full cards, or switch Group strengths off to list every strength.",
    ],
  },
  {
    version: "v1.12.3",
    date: "October 12, 2026",
    features: [
      "Brand rows: products that differ only in strength now share one row in the list (for example Seretide Accuhaler with 50/100, 50/250 and 50/500), which cuts the full list from 131 cards to 93 rows. Tapping a row shows each strength's own card, unchanged, so every dose stays with its own strength. Searching opens the matching brands, and the result count says how many rows the products make. The new Group strengths button in the filter bar switches this off; the choice is remembered on the device.",
      "New Feedback button beside the version button at the top of the page. It opens the feedback form in a new tab, for reporting wrong data, a missing drug or a suggestion.",
      "Added Trimbow 172/5/9, registered in Thailand (2C 9/67) for asthma in adults not controlled on high-dose ICS + LABA; also licensed in the US, UK and EU. No Thai price is recorded yet, so its price shows Unknown.",
      "Countries filter: new JP (Japan) button. 53 products in the guide are on the Japanese market, read from the PMDA package-insert search by active ingredient (12 Oct 2026), with the indications each Japanese insert gives (for example Adoair has COPD only for 250 Diskus and 125 Aerosol; Relvar and Trelegy only for 100) and the Japanese marketing authorisation holder. Many are sold there under another name (Seretide as Adoair, Flixotide / Flovent as Flutide, Ventolin as Sultanol, Incruse as Encruse, Tudorza as Eklira Genuair); the detail view shows the Japanese name. Fifteen products were added from the Japanese market, each also checked in the Thai, UK and Irish/EU registers: Meptin Air, Meptin Swinghaler and Meptin Inhalation Solution (procaterol), Qvar 50 and 100 Aerosol, Atectura Breezhaler (three strengths), Enerzair Breezhaler (two strengths), the three BudeForu budesonide-formoterol generics, Berotec Aerosol 100 and Spiriva 1.25 μg Respimat. Meptin, Qvar, Atectura, Enerzair and Berotec were registered in Thailand before and show †. The Meptin Air and Meptin Swinghaler pictures follow photos of the devices. The BudeForu inhalers have no reference picture yet (N/A), and they and the Meptin Swinghaler have no technique steps yet (Unknown).",
      "Added 30 US products from 22 brands, taken from the FDA's Drugs@FDA list and each brand's US label (12 Oct 2026): ProAir HFA, Proventil HFA, Flovent Diskus 50, 100 and 250, Symbicort Aerosphere 80/4.8 and 160/4.8, ProAir RespiClick, Xopenex HFA, Airsupra, QVAR RediHaler 80, Alvesco 80 and 160, Arnuity Ellipta 100 and 200, Asmanex HFA 100 and 200, Asmanex Twisthaler 220, AirDuo RespiClick 55/14, 113/14 and 232/14, Dulera 100/5 and 200/5, Striverdi Respimat, Perforomist, Incruse Ellipta, Tudorza Pressair, Yupelri, Bevespi Aerosphere and Duaklir Pressair. Dose, pack size, discard period and device colours come from the US label; colours and device shapes were checked against pack photos. Select US in the Countries filter to list them. ProAir HFA, Proventil HFA and Flovent Diskus are still listed as marketed by the FDA, but no current label from their makers was found, so their cards say to check supply; Symbicort Aerosphere is taken from the FDA's label PDF. The existing Trimbow card now shows its US licence (asthma, adults).",
      "Each new product was also checked in the Thai FDA register, the UK MHRA products site and the Irish/EU list. Yupelri is registered in Thailand now (1C 13/66). Alvesco, Asmanex Twisthaler, Striverdi Respimat, Incruse Ellipta, Eklira Genuair (Tudorza) and Duaklir Genuair were registered in Thailand before and show † with the cancellation date. UK and EU chips are on for Alvesco, Asmanex Twisthaler, Striverdi, Incruse, Tudorza and Duaklir (as Genuair) and Bevespi, and EU for AirDuo 113/14 and 232/14 (as Seffalair Spiromax).",
      "Device Guide: new technique cards for Pressair / Genuair and Twisthaler, written from the US instructions for use (15 devices). The Spiromax card now also covers RespiClick, the same inhaler under its US name.",
      "Products without a Thai price show Unknown for the price and sort last when sorting by price. The new US products have no Thai price, no minimum inspiratory flow for RespiClick, Pressair and Twisthaler (Unknown), and no low / medium / high ICS level for mometasone, ciclesonide and AirDuo, because the guide's GINA table has no row for them.",
      "Cards and list rows show one line for each country selected in the Countries filter: a country chip that carries the registration status (coloured = registered now, † = previously registered), then the licence holder there, and on the Thailand line the NLEM type. Countries that are not selected, or where the product is not registered (⊘), share one row of chips. Sources: Thai FDA register (TH), FDA Drugs@FDA (US), UK SmPCs (UK) and the Irish HPRA lists (EU). Hovering shows the detail and the manufacturer of the finished product.",
      "The only entry without a holder is the generic salbutamol nebules, which shows Unknown. The four products never registered in Thailand say so. Giona Easyhaler is not licensed in Ireland, so its EU holder comes from the Swedish SmPC.",
      "New Licence holder button in the filter bar hides the holder names, leaving one compact row of country chips per product; the choice is remembered on the device.",
      "New product detail view: click or tap a card or list row (or its Details button) to open one sheet with everything about the product: recommended dose, inspiratory flow, spacer, ventilator use, price, pack size and expiry, and for each country the registration status with its date or licence number, the licence holder, the NLEM type and note, plus the manufacturer and when each fact was last checked. This makes the detail that was only in hover text reachable on a phone.",
      "Cards in tile view keep all their information (flow, spacer, price, pack size, expiry, dose, last-checked line and ventilator use) and list rows are shorter: they keep the name, components, country lines, inspiratory flow and recommended dose; expiry and spacer are in the detail view. In both views a Details button sits under the Select button (an information icon on phones in list view).",
      "Phones: the six guide buttons take two compact rows of three instead of three rows, and the title is smaller, so the drug list starts higher on the screen.",
      "Active filters appear as chips above the result count, also while the filter panel is closed. Each chip removes its own filter; the Countries and FDA chips return that filter to its default (Thailand, currently registered). The Clear button is the first item in this row.",
      "New Key button beside the result count opens a key to the symbols: registration chips (coloured, †, ⊘) and country codes, NLEM types, price marks, drug class colours, device types, and the Extra-fine, MART, Exacerbation use, cautions, N/A picture, grey picture and Unknown marks.",
      "Larger text for the key values: list rows show the product name at 13 to 14 px (11 px before) and the components, licence holder, flow and dose at 11 to 12 px (10 px before); the low / medium / high dose lines on cards are 12 px (10 to 11 px before).",
      "New Clear button at the start of the active-filter row, above the result count. It appears whenever a search or filter is on, also while the filter panel is closed, and resets everything to the default view (Thailand, currently registered).",
      "The filter bar is split into two rows. Row 1, registration: Countries, FDA status, NLEM only and Licence holder. Row 2, clinical: Asthma / COPD, drug class, Maintenance / Reliever / Exacerbation, MART only / Extra-fine only, inspiratory flow and device type. On a narrow screen the buttons wrap onto further lines, so nothing has to be scrolled sideways. The sort menu stays beside the search box on every screen. A Filters button in the pinned search row opens and closes the filters: open by default on tablets and desktops, closed by default on phones. It also shows how many filters are on.",
      "Countries filter: new All button selects every country; pressing it again clears them all, which lists nothing until a country is chosen. Each country can now be switched off on its own, including the last one. Thailand remains the default.",
      "Registration status is now shown for every country, not only Thailand, with one symbol each: † previously registered, ⊘ never registered. Previously registered covers US products the FDA lists as discontinued (Onbrez, Seebri, Ultibro) and products withdrawn in Ireland (Atrovent inhaler, Combivent UDV). The NLEM only button and the NLEM type appear only while Thailand is selected, because the list is Thailand's.",
      "The FDA filter (Currently / Past / Never) now applies to every selected country, using each country's own register: Thai FDA, FDA Drugs@FDA (US), MHRA SmPCs (UK) and the Irish HPRA lists (EU)."
    ],
    bugs: [
      "Tile cards on narrow phones: a short inspiratory-flow value such as \"< 30 L/min\" was split across three lines when its label was long (Thai). The label now wraps and the value stays whole.",
      "QVAR RediHaler 40 was drawn maroon, which is the 80 mcg strength; the US label gives a beige actuator with a white cap for 40 mcg. Both strengths now follow the label.",
      "Thai registration status corrected against the register: Ultibro Breezhaler was registered and then cancelled (15 September 2025), so it now shows as previously registered instead of never registered. Cancellation dates updated for Onbrez (6 November 2024), Seebri (21 July 2022) and Flixotide Evohaler 250 (31 January 2017)."
    ]
  },
  {
    version: "v1.12.2",
    date: "October 11, 2026",
    features: [
      "Patient Sheet: new Save PDF button. It saves an A4 PDF with the instruction sheet on page 1 and the action plan on page 2, which can be printed or shared from any device.",
      "Role filter: Controller is renamed Maintenance (GINA's term for treatment taken on a regular schedule) and a third category, Exacerbation, is added for drugs used during a flare-up, usually in hospital. Hovering over a button shows its meaning.",
      "Nebulised budesonide (Pulmicort, Budecort and Bunase Respules) is listed under Exacerbation only, no longer under Controller and Reliever; nebulised salbutamol and salbutamol/ipratropium are listed under both Reliever and Exacerbation. These products carry an Exacerbation use tag, and nebulised budesonide a note that it is licensed for asthma maintenance but mainly used during exacerbations in adults."
    ],
    bugs: [
      "Seretide Accuhaler icons show their own strength in the window: 250 for 50/250 and 500 for 50/500 (all three used to show 100). Serevent Diskus shows 50.",
      "No reference, no assumed value. Pulvisonide 200: its inhaler is not identified, so the picture is N/A, the minimum inspiratory flow is Unknown and the Device Guide gives no technique steps (it refers to the package leaflet). Xalflu Airmaster and Tropoair: minimum inspiratory flow is Unknown (no published figure). With the inspiratory-flow filter on, these products stay in the list with a note.",
      "Icon colours without a reference picture are drawn in neutral grey and labelled Colour not verified: BudeSpray-200 HFA, Beclocip 50, 100, 200 and 250 HFA and Beclosal HFA. No device picture was found for them on MIMS Thailand or by web search.",
      "Icons redrawn in their real colours from pack photos: Aeronide 200 mcg (maroon-brown inhaler, orange dust cap), Budecort-200 Inhaler (white inhaler, magenta dust cap), Asthalin Inhaler (blue inhaler, white dust cap), BudeSpray-100 HFA (cream inhaler, purple dust cap), Budiair 200 (burgundy inhaler and dust cap), Salvo Inhaler (steel-blue inhaler, dark dust cap) and Xalflu Airmaster 50/250 (mauve-pink cover).",
      "Icons recoloured from product pictures found online: Aerotide 125 and 250 (purple, lilac cap), Seroflo 125 (white, green cap), Aerobidol (white, aqua cap), Buto-Asma (blue, navy cap), Salflumix Easyhaler 50/250 and 50/500 (purple top) and Oxis Turbuhaler (turquoise grip).",
      "Oxis Turbuhaler: strength, dose and pack size are shown as Unknown, because neither the Thai register nor MIMS Thailand states which strength was registered.",
      "Tropoair 18 mcg: new LupinHaler icon drawn from a photo of the device, and its card is labelled LupinHaler instead of HandiHaler. Its technique steps stay with the HandiHaler card because Lupin's instructions for use give the same steps.",
      "Patient Sheet: the preview was squeezed into the space left in the window and cut off, most visibly on phones. The whole sheet is now shown and the window scrolls.",
      "Patient Sheet: where the browser blocks printing (the app embedded in another website, some phone browsers) the Print button did nothing. It now saves the A4 PDF instead and says so.",
      "Pop-up messages at the top of the screen now wrap on a phone instead of running off the screen.",
      "Patient Sheet for nebulised budesonide: described as flare-up treatment (use for the days prescribed, does not replace the regular inhaler) instead of a reliever, asks for the reliever to name, and leaves the action plan off by default.",
      "Wording: maintenance replaces controller in the English patient sheet, the Maintenance Guide heading, the asthma exacerbation card and the switching notes."
    ]
  },
  {
    version: "v1.12.1",
    date: "October 10, 2026",
    features: [],
    bugs: [
      "The FDA filter label uses the app's own small tick icon instead of the bright emoji, matching the other filters.",
      "List view: the country chips (TH / US / UK / EU) and the cautions button always sit on their own second row under the product name, so every row has the same layout.",
      "Embedded in another website on a phone: the selection bar at the bottom was hidden behind the browser's toolbar. The app now measures how much of its frame is off screen and keeps the selection bar and pop-up guides inside the visible part.",
      "List view on a phone: the Select button in the top-right corner of each row was hidden under the row's inner box and could not be tapped; it now sits on top, and the test run checks that no button is covered.",
      "Faster loading: the first screen of cards is drawn immediately and the rest follow right after; the font stylesheet no longer delays the first paint; the app code is minified and the image-export library runs only when an image is saved (page download about 9% smaller)."
    ]
  },
  {
    version: "v1.12.0",
    date: "October 9, 2026",
    features: [
      "In Thai, doses are shown in Thai on cards, list rows, the detail view and the Exacerbation Guide (e.g. 1–2 พัฟ ทุก 4–6 ชม. เมื่อมีอาการ (ไม่เกิน 8 ครั้ง/วัน), สูด 1 ครั้ง วันละ 1 ครั้ง), including the MART maximum and the low / medium / high dose labels.",
      "Each card shows when its data was last checked: Thai FDA registration, label (licensed indications) and national reference price.",
      "The test run now also audits every screen for overlapping, cut-off or overflowing text and sideways scrolling, on desktop and on a phone (light and dark), in English and Thai.",
      "The selection bar shown when cards are selected is compact: one line for the count, names and Clear, then one row of equal-width buttons that fits any screen, including phones, with no sideways scrolling.",
      "Cards show total doses and the after-opening expiry on one line each (label left, value right), and in Thai mode both values are in Thai (e.g. 200 พัฟ, ใช้ได้จนถึงวันหมดอายุบนฉลาก).",
      "Card view shows at most 3 cards per row.",
      "Exacerbation Guide: severe asthma and severe COPD now also list SABA ± SAMA pMDIs (used with a spacer), as their text recommends; asthma mild-moderate no longer lists fixed SABA/SAMA combination inhalers (ipratropium is an add-on) and adds the controller step (start or step up ICS). Mild-moderate COPD lists nebulised SABA and SABA + SAMA.",
      "Exacerbation Guide: recommended devices are grouped to match each card's recommendation text, in its order, as collapsible sections that hold only their own drugs, e.g. asthma mild-moderate: SABA by pMDI + spacer, SABA nebulised 2.5 mg, budesonide-formoterol 160/4.5 (with the MART instructions), ipratropium add-on, controller ICS; asthma severe: SABA pMDI, SABA nebulised 5 mg, plus ipratropium, high-dose ICS in the ED; COPD: SABA, SABA + SAMA, SAMA, nebulised budesonide. Rows are compact (name, components, dose), ordered by device type, NLEM products first, then A-Z.",
      "Details checked: Aerotide (at least 120 puffs) and Aerobidol (at least 200 puffs) pack sizes confirmed in the Thai FDA register; Seroflo 125 holds 120 puffs; Oxis Turbuhaler is the 4.5 mcg (6 mcg metered) strength; Spiromax delivers a consistent dose from 30 L/min. Pulvisonide comes in blister strips of 5 capsules, with the inhaler in some packs only. Airmaster, NEXThaler, Spiromax and Turbuhaler icons redrawn from the real devices; Xalflu cover colours follow the strength.",
      "Search in Thai: brand names as registered with the Thai FDA (e.g. ซิมบิคอร์ท, เวนโทลิน, พูลมิคอร์ท), Thai generic names in common spellings (e.g. บูเดโซไนด์, ซาลบูทามอล / ซัลบูทามอล) and device names (e.g. เทอร์บูเฮเลอร์, เรสพิแมท), in the main search and the Follow-up Guide.",
      "Spacer fit for every inhaler, on cards, list rows and the Spacer & Mask guide list: the spacer named in the product label (Volumatic for Ventolin and Seretide Evohaler; Volumatic or AeroChamber Plus for Flixotide; AeroChamber Plus for Symbicort Rapihaler, Trimbow and Foster; AeroChamber Plus Flow-Vu for Breztri and Flutiform), otherwise any valved spacer; no spacer for dry-powder or breath-actuated inhalers, none needed for Respimat.",
      "List view rows show the details (flow, expiry, dose, spacer) in full beside the name, using the full row width, with any NLEM condition on its own line below; the drug count also shows the total in the database.",
      "NLEM status now counts only for products currently registered in Thailand: Flixotide Evohaler 50 and 250, Pulmicort Turbuhaler 100 and 200, Giona Easyhaler 100 and Bufomix Easyhaler show \"Not in NLEM\" (hover: the generic is listed, but these products cannot be supplied) and no longer appear under NLEM only or rank first in the guides. NLEM only now sits next to FDA ✓, and MART Only / Extra-fine Only come before the inspiratory-flow box.",
      "Products once sold in Thailand whose Thai FDA registration has been cancelled, has expired or ended after safety monitoring stay in the Thailand view with an amber \"TH ⊘ previously registered\" chip (hover for the registration number and date), and a new \"FDA ✓ Currently / Past / Never\" filter (Thai FDA registration, default Currently) chooses which products the Thailand view lists: Past shows these, Never shows products never registered in Thailand; the guides never suggest them. Marked: Bricanyl Turbuhaler, Atrovent inhaler, Flixotide Evohaler 50 and 250, Pulmicort Turbuhaler 100 and 200, Symbicort Rapihaler 80/4.5, Flutiform 125/5, Giona Easyhaler 100, Serevent Accuhaler, Onbrez 150 and 300 and Seebri Breezhaler. Added from MIMS Thailand with the same chip: BudeSpray-100 and -200 HFA, Budiair, Bunase Respules, Beclocip 50, 100, 200 and 250 HFA, Beclosal HFA (beclometasone + salbutamol), Oxis Turbuhaler and Asthalin.",
      "Added 27 products sold in Thailand, from MIMS Thailand and each checked as active in the Thai FDA register (9 Oct 2026): DuoResp Spiromax 160/4.5 and 320/9; Foster NEXThaler 100/6; Aerotide 125 and 250, Seroflo 125, Salflumix Easyhaler 50/250 and 50/500, Xalflu Airmaster 50/100 and 50/250 (fluticasone + salmeterol); Aeronide 200 and Budecort-200 inhalers, Pulvisonide 200 capsules and Budecort Respules (budesonide); Tropoair 18 mcg (tiotropium, LupinHaler); Aerobidol inhaler, Iperol, Iperol Forte, Punol and Inhalex Forte (fenoterol + ipratropium); Combivent UDV (salbutamol + ipratropium nebules); Salvo and Buto-Asma inhalers, Asmasal SDU, Salda Inhale, Salda Forte Inhale and Venterol solution (salbutamol). Each has its Thai licensed indications, NLEM status and national reference price.",
      "Device Guide: new technique cards for Spiromax, NEXThaler, Airmaster and other capsule inhalers (13 devices). HandiHaler card also covers the LupinHaler (Tropoair)."
    ],
    bugs: [
      "Patient Sheet preview scales to fit the screen, so on a phone the whole A4 page is visible without scrolling sideways (printing and image export are unchanged). List rows and Follow-up current-treatment rows show full drug names instead of cutting them off, and the selection bar shows all selected names.",
      "Checked the existing products against MIMS Thailand: Symbicort Turbuhaler 80/4.5 is sold in Thailand as 60 doses only (was 60 or 120); Spiolto Respimat notes the Reusable version with refill cartridges, also registered in Thailand.",
      "Follow-up Guide, COPD: exacerbation advice now follows GOLD 2026 Figure 3.9. On LABA or LAMA: eosinophils < 300 → LABA + LAMA, ≥ 300 → LABA + LAMA + ICS. On LABA + LAMA: ≥ 100 → add ICS, < 100 → roflumilast (FEV₁ < 50% and chronic bronchitis) or azithromycin (preferentially in former smokers). On LABA + LAMA + ICS: roflumilast or azithromycin, and biologic therapy (dupilumab if chronic bronchitis, or mepolizumab) when there were ≥ 2 moderate or ≥ 1 severe exacerbations and eosinophils ≥ 300. FEV₁ < 50%, chronic bronchitis and exacerbation count are separate options, and a note says single-inhaler therapy is preferred."
    ]
  },
  {
    version: "v1.11.11",
    date: "October 8, 2026",
    features: [
      "Follow-up Guide, COPD tab: assess the GOLD group from symptoms (mMRC 0–1 / CAT < 10, or mMRC ≥ 2 / CAT ≥ 10) and exacerbations in the past year (none, or ≥ 1 moderate or severe) → Group A, B or E. The current regimen is then judged against GOLD's treatment for that group (appropriate, below GOLD, more than GOLD, or not recommended, with the reason), each selected drug carries the matching badge (relievers marked \"as needed\"), and the box still shows which group the regimen itself is for.",
      "Follow-up Guide, COPD tab: shows which GOLD group the current treatment matches (GOLD 2026 initial treatment): short-acting only or LABA/LAMA alone = Group A; LABA + LAMA = Group B or E (E when exacerbations are the problem); LABA + LAMA + ICS = Group E; LABA + ICS or ICS alone = no GOLD group (not recommended). A note explains that GOLD groups are set by symptoms and exacerbations, not by the drugs.",
      "Follow-up Guide reads the inhalers selected on the main page (Select on up to 3 cards; Follow-up is also on the selection bar). Enter each inhaler's maintenance dose and whether it is used as the reliever, and the app detects the current GINA track and step (ICS-formoterol reliever = Track 1; maintenance ICS dose level by GINA Table 6, ICS-LABA and add-on LAMA set the step), explains why, warns about SABA-only treatment, duplicate ICS or mixed LABAs, and sets the track and step for the advice. The COPD tab detects the current class (LABA or LAMA, LABA + LAMA, LABA + ICS, triple).",
      "Steroid-Dose Calculator shows each inhaler's adult label maximum (e.g. Symbicort Turbuhaler 160/4.5: 8 inhalations a day; Seretide Accuhaler: 2; Flixotide: 2000 mcg a day; QVAR RediHaler: 640 mcg a day) and turns it into a red warning when the entered dose is above it. Sources: UK SmPC, US label (QVAR RediHaler), Australian PI (Symbicort Rapihaler). MART totals keep their own daily maximum check.",
      "The app is now for adults only and renamed \"Adult Bronchodilator Device Guide\". The subtitle states that it is based on GINA and GOLD 2026.",
      "Follow-up Guide (header button): for asthma, choose the current track and GINA step and answer the 4 GINA symptom-control questions plus any exacerbation; it shows whether to step up (with GINA's checks first: technique, adherence, diagnosis, risk factors, comorbidities), stay, or step down after 2–3 months of good control (GINA Box 4-13 options for that treatment), with the inhalers for the new step. For COPD, choose the current treatment, main problem (dyspnoea, exacerbations or both) and eosinophils to get GOLD 2026 Figure 3.9 advice (LABA + LAMA, add ICS, azithromycin, roflumilast, biologics, ICS withdrawal) with matching inhalers.",
      "Step Down Guide checked against GINA 2026 and GOLD 2026 and expanded: asthma now lists GINA's when-and-how principles (risk factors need close supervision, action plan and enough medication to go back, 25–50% ICS reduction, wait 2–3 months between steps) and the Box 4-13 step-down options for each current treatment from Step 5 to Step 2.",
      "Spacer & Mask guide (header button): who needs a spacer, mouthpiece or face mask by age (GINA Box 11-4), single-breath and tidal-breathing technique, getting the full dose, cleaning and care, nebuliser tips, and every inhaler in the guide grouped as use with a spacer / do not use a spacer / soft mist / nebuliser.",
      "Steroid-Dose Calculator (header button): add each ICS-containing inhaler with inhalations per dose, times a day and as-needed MART inhalations; shows the total daily metered dose per ICS and grades it low / medium / high by GINA 2026 Table 6 for ages 12+. Delivered-dose labels are converted to metered (e.g. Symbicort 160/4.5 = 200 mcg), and it flags duplicate ICS, high doses and MART totals above the daily maximum.",
      "COPD action plan: the Patient Sheet adds page 2 for COPD (on by default) with green / yellow / red zones: usual day (maintenance and reliever, activity, vaccines, no smoking); flare-up (more reliever, prescribed prednisolone usually 40 mg for 5 days, antibiotic for yellow/green sputum usually 5 days, tell the clinic within 1–2 days); emergency (1669, reliever, home oxygen at the set flow). Based on GOLD 2026.",
      "Inhaler technique checklist (Device Guide → Technique checklist): mark each step Correct or Wrong while the patient demonstrates. Critical steps (★: dose preparation, not exhaling into a DPI, the inhalation itself) are flagged when wrong. Shows the score, lists critical errors, and copies a one-line result for the medical record. English and Thai.",
      "Cautions per drug class on every card, in the comparison view and in guide lists (tap to expand): ICS (thrush and hoarseness, pneumonia in COPD, high-dose systemic effects, CYP3A4 inhibitors), LABA (not for acute relief except ICS-formoterol, never without ICS in asthma, cardiac), LAMA/SAMA (narrow-angle glaucoma, urinary retention, renal impairment) and SABA (cardiac and potassium effects, overuse in asthma).",
      "Asthma action plan: the Patient Sheet adds a second page (on by default for asthma) with GINA's green / yellow / red zones, built from the selected inhaler. MART users get extra-inhalation instructions with the daily maximum; others get reliever use, a doctor-filled preventer increase and when to seek care (reliever needed again within 3 hours, or not better in 2–3 days). Enter a personal best PEF to print the 80% / 60% zone limits.",
      "React and the image exporter are now built into the page instead of loading from a CDN.",
      "Availability and Label toggles combined into one multi-select Countries toggle (TH / US / UK / EU, default TH). Products licensed in any selected country are shown; Asthma/COPD tags combine the selected countries' licensed indications.",
      "The Asthma/COPD toggle moved to the start of the second filter row, before Countries.",
      "Every card shows the four countries: highlighted where licensed, struck through where not. Hover a country to see its licensed indications (e.g. \"United Kingdom: COPD\"). † marks a product discontinued in the US.",
      "Label toggle (Thai FDA / US / UK / EU), default Thai FDA: sets each product's Asthma/COPD tags from that regulator's licensed indications, including strength-specific differences (e.g. US COPD for Advair Diskus 250/50 only, UK/EU Symbicort pMDI COPD only, UK/EU Trelegy COPD only). Filters, guides and Equivalent Drugs follow the chosen label.",
      "Products with no licence under the chosen label stay in the list with a \"Not licensed in …\" badge, tagged from the next available label. Onbrez, Seebri and Ultibro show \"US: discontinued\".",
      "EU uses the EMA label for centrally authorised products, otherwise the Irish HPRA label (or another EU national label where Ireland has none).",
      "Changelog is now available in Thai.",
      "Patient sheet: nebuliser doses are written out in Thai (and in plain English), e.g. \"Nebulise 0.25–1 mg once or twice a day\"."
    ],
    bugs: [
      "Follow-up Guide, COPD tab: smoking status is always shown as \"Ex-smoker (not currently smoking)\". Unticked, the patient is treated as currently smoking: a stop-smoking advice box appears (advise at every visit, counselling plus cessation medicine).",
      "Follow-up Guide choices are colour-coded by meaning: green for good (low symptoms, no exacerbations, responding well, well controlled), amber for intermediate (dyspnoea, eosinophils 100–299, Group B), red for severe (high symptoms, exacerbations, eosinophils ≥ 300, Group E, uncontrolled-asthma answers, smoking and ICS problems); treatment, track and step choices are neutral.",
      "Follow-up Guide: the inhaler search also matches drug classes (e.g. LAMA, LABA/LAMA, ICS), with exact class matches listed first. COPD tab: blood eosinophils moved into the GOLD group assessment and always shown.",
      "Follow-up Guide, COPD tab: the GOLD group assessment now comes first, with the current treatment below it.",
      "Follow-up Guide, Asthma tab: the current treatment now sits below the current track (track → current treatment → GINA step and control questions).",
      "Follow-up Guide logic checked against GINA 2026 and GOLD 2026. Asthma: stepping down from Step 5 now also lists Box 4-13's high-dose ICS-LABA option (Track 2) and a 25–50% reduction for high-dose MART (Track 1); ICS taken whenever SABA is taken can be entered and is detected as Step 1 (no SABA-only warning); when a SABA is also listed, an ICS-formoterol inhaler defaults to maintenance with the SABA as reliever (Track 2). COPD: \"Short-acting only\" and \"ICS alone\" are now current-treatment options with GOLD's initial treatment by group (Group A lists LABA or LAMA inhalers) instead of advice for LABA + LAMA.",
      "Follow-up Guide: the current treatment now appears on both the Asthma and COPD tabs (it disappeared on COPD). The guide opens on the tab that matches the drugs' indication (e.g. Anoro opens on COPD); a drug not indicated for the open tab is labelled \"Not indicated\", explained in a warning (with GINA's LABA-without-ICS warning for asthma) and left out of that tab's detection. Inhalers can be searched and added (up to 5) or removed inside the guide, with or without a selection on the main page.",
      "Follow-up Guide warns when both ICS-formoterol and a SABA are ticked as relievers (on MART, ICS-formoterol replaces the SABA).",
      "New nebulizer icon: face mask, nebulizer cup (in the product colour), tubing and compressor.",
      "Device Guide checked against GINA 2026 and the product leaflets. MDI: shake immediately before every puff (GINA advises this for all pMDIs; QVAR RediHaler excepted), priming follows each leaflet (e.g. Ventolin 2 puffs after 5 days unused, Foster 1 puff after 14 days), and spacer tidal breathing is 5–6 breaths. Every device page now ends with GINA's teaching points (ask the patient to show you, checklist, demonstrate, re-check at every visit, avoid mixing device types). Other devices already matched their leaflets.",
      "The \"Decision support only\" disclaimer link now sits below \"Made by Warodom Phaenthong, M.D.\", and the disclaimer states that the guide is for adults only.",
      "Maintenance Guide renamed \"Initial Maintenance Guide\" (it chooses the first treatment; the subtitle points to the Follow-up Guide for patients already on treatment).",
      "Step Down Guide merged into the Follow-up Guide, and its header button removed. Asthma tab: when stepping down, the full GINA when-and-how points are shown, and a collapsible step-down guide holds the complete Box 4-13 table with the current treatment highlighted. COPD tab: a collapsible GOLD 2026 section on stopping inhaled steroids opens by itself when the current treatment contains ICS.",
      "Exacerbation Guide checked against GINA 2026 and GOLD 2026. Asthma: mild/moderate inhaler list now includes budesonide-formoterol 160/4.5 (GINA alternative to salbutamol) and handheld ipratropium inhalers; nebulised budesonide moved to the severe (ED) list; ipratropium is given up to 3 times; added GINA's \"avoid\" points (no routine chest X-ray, blood gases or antibiotics, no sedatives; consider other causes; epinephrine first in anaphylaxis); discharge adds adequate resources at home, Step 4 MART or medium-dose ICS-LABA, reliever as needed only, interim action plan and early specialist referral. COPD: severity now uses GOLD 2026 Rome criteria; nebulisers should be driven by air, not oxygen; long-acting bronchodilators continued; IV methylxanthines not recommended; ventilation corrected to controlled oxygen first, NIV first-line for respiratory failure, HFNT if hypoxaemia persists or NIV is not tolerated.",
      "Maintenance Guide no longer lists nebulisers (e.g. Salbutamol Nebules, Berodual Nebules, Pulmicort Respules) as controllers or relievers for asthma or COPD, because they are used in hospital only. They remain in the Exacerbation Guide and the drug list.",
      "Maintenance Guide device lists now match each inhaler by the GINA dose levels its own regimens reach, instead of a single dose tag. Low-dose MART (Track 1 Steps 1–3) now lists Symbicort Turbuhaler/Rapihaler 160/4.5 and Bufomix 160/4.5 (1 inhalation twice daily) and no longer suggests the children's 80/4.5 strength for ages 12+ (GINA 2026 Table 7). Low-dose ICS lists include Giona 200 and Flixotide 125 at 1 inhalation twice daily, and nebulised budesonide is no longer suggested for ages 12+ (no GINA dose band).",
      "Maintenance Guide follows GINA 2026 on exacerbation history: an exacerbation in the last year raises the step only together with daily symptoms or night waking (Step 4). On its own it no longer moves the patient to Step 3; the plan instead shows an exacerbation-risk note (ICS-containing treatment, Track 1 preferred, written action plan, review more often).",
      "Maintenance Guide checked against GINA 2026 (Table 3 / Box 4-4) and GOLD 2026. Asthma symptom options now use GINA 2026 wording: 2 days/week or less (Step 1), more than 2 but fewer than 3–5 days/week (Step 2), most days e.g. 4 days/week (Step 3), and daily symptoms or night waking ≥ 1/week. Step 4 (medium dose) now needs daily symptoms or night waking together with low lung function or a recent exacerbation; symptoms on most days with low lung function stay at Step 3 (low-dose MART), as in GINA. Track 2 Step 3 adds GINA's alternative of daily medium-dose ICS, and medium-dose ICS inhalers are listed after the low-dose ICS-LABA options. COPD (GOLD Groups A, B and E, eosinophil threshold for triple therapy) was already correct.",
      "Header buttons reordered: Device Guide now sits next to Spacer & Mask.",
      "The version, language and theme buttons at the top right no longer show on top of pop-up windows; they stay on the main page only.",
      "Dose switching: when a recommended strength is shown, \"What changes\" and \"Switch guidance\" now describe that strength (e.g. ICS 100 → 500 mcg/day for Seretide Accuhaler 50/250, no dose-level change note) and say which product they refer to.",
      "Dose switching: when the chosen product has no regimen at the current ICS dose level but another strength of the same brand and device does (e.g. Relvar 100 medium → Seretide Accuhaler 50/100), the chosen product is greyed out and the recommended strength is shown below as a full card with its dose, GINA level and ICS mcg/day (Seretide Accuhaler 50/250, 1 blister BID).",
      "Step Down Guide, COPD: ICS withdrawal criteria corrected to GOLD 2026's four reasons (started inappropriately, no response, significant side effects, severe or recurrent pneumonia); added GOLD's advice for patients on LABA+ICS. Removed 'de-escalation of LABA/LAMA is not generally recommended', which is not a GOLD statement; GOLD notes de-escalation trials only include ICS.",
      "Pictures in the drug list view are larger.",
      "Device Type sort now groups by the named device in alphabetical order (Breezhaler, Diskus, Easyhaler, Ellipta, Handihaler, MDI, Nebulizer, Respimat, Turbuhaler), then by brand name A–Z within each device. It previously sorted by the broad type (DPI / MDI / SMI).",
      "Countries are colour-coded: TH green, US blue, UK rose, EU amber, both in the Countries filter and on each card's country chips.",
      "References are now a collapsible section at the bottom of the page: closed by default, showing the number of references; tap the heading to open or close the full list.",
      "Cautions now take up just a ⚠ symbol next to the Asthma/COPD badges (and in list rows). Click it to see the full cautions in a popover; click elsewhere, scroll or press Escape to close.",
      "Salbutamol is tagged for both asthma and COPD on every product: Aerotamol (generic salbutamol MDI) now shows COPD as well, although its Thai label lists asthma.",
      "Seebri Breezhaler's EU label confirmed as COPD (EMA).",
      "UK/EU labels checked against SmPCs for the remaining products. EU (Irish label) now includes COPD for Flixotide Evohaler 50/125/250 and Pulmicort Turbuhaler 100/200 (UK labels remain asthma only). Confirmed unchanged: Symbicort Turbuhaler 100/6 asthma, 200/6 and 400/12 asthma + COPD; Fostair 100/6 asthma + COPD; Spiriva HandiHaler, Spiolto, Anoro, Ultibro, Onbrez and Trixeo COPD; salbutamol nebules asthma + COPD.",
      "MDI technique: the 2-puff test spray after 5 days unused is confirmed from the Ventolin Evohaler leaflet.",
      "Code cleanup: removed text and a helper left over from the old Availability and Label toggles (no visible change).",
      "Device technique checked against the patient leaflets: Turbuhaler has no breath-hold step (breathe out gently) and the grip clicks even when empty; Ellipta breath-hold is at least 3–4 seconds; Easyhaler at least 5 seconds, with how to empty a double click and to keep it dry; Breezhaler is held with the side buttons facing left and right; Respimat re-priming after 7 and 21 days unused; MDI test-spray of 2 puffs when new or unused for 5 days.",
      "Products with no Thai or US registration now follow their UK/EU label (SmPC, checked 8 Oct 2026). Changed to asthma only: Foster 200/6 (UK Fostair 200/6; the COPD licence covers 100/6 only) and Giona Easyhaler 100 mcg (UK Easyhaler Budesonide). Already matching: Flutiform (asthma; no COPD data), Bufomix Easyhaler 160/4.5 (asthma and COPD, Irish SmPC) and Bricanyl Turbuhaler (asthma).",
      "Products not registered in Thailand now follow their US FDA label (openFDA / Drugs@FDA, checked 8 Oct 2026). Changed to asthma only: Flixotide Evohaler 50 and 250 (US Flovent HFA), Pulmicort Turbuhaler 100 and 200 (US Pulmicort Flexhaler) and Symbicort Rapihaler 80/4.5 (the US COPD dose is 160/4.5 only). Already matching: Combivent Respimat and Atrovent HFA (COPD), QVAR RediHaler (asthma), Serevent Diskus (asthma and COPD), Onbrez, Seebri and Ultibro Breezhaler (COPD; US Neohaler versions now discontinued). No US product, original labelling kept: Bricanyl Turbuhaler, Foster 200/6, Flutiform, Bufomix Easyhaler and Giona Easyhaler 100 mcg.",
      "Asthma/COPD tags now follow each product's Thai FDA label (checked 8 Oct 2026). Changed: Aerotamol MDI, Flixotide Evohaler 125 and Symbicort Turbuhaler 80/4.5 are asthma only; Relvar Ellipta 200/25 is asthma and COPD. The other Thai-registered products already matched. Products not registered in Thailand keep their original labelling.",
      "GINA Track 2 checked against GINA 2026 Figure 7: Step 4 is medium-dose ICS-LABA (high dose only as a Step 5 trial), and each step notes that ICS-SABA should replace SABA as reliever where available (budesonide-salbutamol is not registered in Thailand). Step 4 lists no longer include high-dose-only inhalers.",
      "MART checked against GINA 2026 Table 7: Step 3 one inhalation twice (or once) daily, Steps 4–5 two inhalations twice daily, max 12 inhalations a day in total. Foster 100/6 maximum shown as 8 (label), with GINA allowing up to 12 temporarily.",
      "Asthma admission criteria updated to GINA 2026: status 1 hour after starting treatment predicts admission better than status on arrival; added GINA's predictors (severity markers, past severe attacks, recent oral steroid courses, > 8 reliever puffs in 24 h, female sex, older age, socio-economic disadvantage). The old PEF < 60% threshold is no longer in GINA.",
      "Giona Easyhaler 200 mcg: pack size confirmed as 200 doses (Thai FDA 1C 74/62); indication limited to asthma, as on its Thai label."
    ]
  },
  {
    version: "v1.10.11",
    date: "October 7, 2026",
    features: [
      "Added Giona Easyhaler 200 (budesonide 200 mcg, 200 doses; Thai FDA registered, NLEM basic list): low 1, medium 2, high 4 inhalations twice daily. Cost range $$ (≈334 THB/month at medium dose).",
      "Added the BTS 2017 oxygen guideline to the references.",
      "Availability toggle (Thailand / Other countries), default Thailand: shows only products with an active Thai FDA registration. \"Other countries\" shows the whole database, with a \"Not in Thailand\" badge on the 18 products that have none. The Maintenance and Exacerbation Guides and Equivalent Drugs follow the same setting.",
      "Cost range is now per month at the usual maintenance dose (as-needed relievers: per pack), from the national reference price: $ < 300, $$ 300–599, $$$ 600–999, $$$$ ≥ 1,000 THB.",
      "NLEM conditions (Anoro, Spiolto: COPD group B criteria) now show under the drug in the Maintenance and Exacerbation Guides and as a warning in the Dose Conversion Guide.",
      "Four new references: Weers 2022, Grant 2015 and Haikarainen 2018 (inspiratory flow) and the Thai FDA product database (availability).",
      "Ventilator strip shortened: MDI shows \"Dose: 2x puffs\" and SMI shows \"Dose: No set dose\". Hover over or tap the label to see the full referenced note (technique, evidence and alternatives).",
      "Cost ranges now come from the Thai national reference price (ราคากลางยา, MOPH Drug and Medical Supply Information Center) for 33 of 46 products, per pack: $ < 250, $$ 250–599, $$$ 600–999, $$$$ ≥ 1,000 THB. Prices themselves stay hidden.",
      "Products with no national reference price (13) show a faded range marked ~ as an estimate.",
      "Added Trelegy Ellipta 200/62.5/25 mcg (fluticasone furoate 200 / umeclidinium 62.5 / vilanterol 25), one inhalation once daily: asthma only, high-dose ICS. The existing Trelegy entry is renamed Trelegy Ellipta 100/62.5/25 mcg.",
      "Expiration now has its own label (\"Expiration (after opening)\") on drug cards, the compare panel and the export card, instead of sharing one heading with Total Doses.",
      "Ventilator notes are now referenced: MDI dosing from Dhand et al. 1996; SMI delivery from Fang et al. 2020.",
      "Faster loading: the app is now compiled once at build time instead of in the browser on every visit. Babel (about 3 MB) and the Tailwind runtime are no longer downloaded; styles ship as a 42 KB stylesheet.",
      "Automated regression test (49 checks through the real interface) runs after each build.",
      "Disclaimer section on the main page, linked from the header, stating that the guide is decision support for professionals, the age range, how cost ranges work, and the guideline versions and review date.",
      "Maintenance Guide now lists every matching inhaler, ranked by NLEM status (basic first) and then by lower cost range. The top three are shown, with a 'Show all' button for the rest.",
      "Prices are shown only as a cost range ($ to $$$$ in English, ฿ to ฿฿฿฿ in Thai); actual amounts are hidden because they vary widely between hospitals.",
      "Anoro Ellipta and Spiolto Respimat now use their NLEM negotiated prices, moving them from the highest cost band to the lowest and second-lowest.",
      "Search matches every spelling of a molecule: salbutamol finds albuterol products (Ventolin, nebules, Combivent), beclometasone finds QVAR, glycopyrronium finds Breztri, and the reverse.",
      "Inspiratory-flow finder: enter the patient's measured peak inspiratory flow (L/min) in the filter bar to hide devices that need more flow; the line under the count lists what was hidden.",
      "Device Guide rebuilt as technique cards for each device (MDI with spacer, Respimat, Turbuhaler, Accuhaler, Ellipta, Easyhaler, HandiHaler, Breezhaler, nebulizer): numbered steps, common mistakes and practical tips, in English and Thai.",
      "Patient Sheet: select one drug and press Patient Sheet for a printable handout in Thai or English covering the dose, how to use the device, mouth rinsing, the reliever plan, when to see a doctor and when to go to hospital (1669). Print it or save it as an image.",
      "NLEM status from บัญชียาหลักแห่งชาติ พ.ศ. 2569 on every drug (basic b / supplemental s / exclusive ex / not listed), with listing conditions and negotiated prices in the comparison view, plus an NLEM-only filter.",
      "Prices now show the approximate amount in baht (฿) instead of $ symbols.",
      "Doses are labelled as being for age 12 and over on every dose range.",
      "References section at the bottom of the page listing the sources behind each part of the app.",
      "Equivalent Drugs: select one drug from the list and press Equivalent Drugs to see every drug you could switch to. Direct equivalents (same drug classes) are listed first with the regimen at the same GINA ICS dose level; other options with the same role (class changes) follow. Filter by Asthma or COPD, and open the full Dose Conversion Guide for any switch with one tap.",
      "Dose Conversion Guide: select two drugs from the list and press Dose Conversion to see how to switch from one to the other. ICS is matched by GINA dose level (low/medium/high) with mcg/day shown, suggesting the nearest level or another strength of the same brand when needed.",
      "The guide lists which components continue, start or stop (ICS, LABA, LAMA, SABA, SAMA), and gives Asthma (GINA) or COPD (GOLD) switch rules: LABA/LAMA without ICS in asthma, ICS withdrawal or addition in COPD, MART changes, inspiratory flow and device technique, ventilator use, dosing frequency, timing of the first dose, and follow-up.",
      "Swap button reverses the direction of the switch; Asthma/COPD toggle changes which guideline rules apply."
    ],
    bugs: [
      "Foster 200/6 confirmed not available in Thailand.",
      "Phones: the Availability toggle now comes first in the filter row so it is visible without scrolling, and the page declares a mobile viewport (it rendered 980 px wide when the file was opened directly on a phone).",
      "Giona Easyhaler names now include the unit: Giona Easyhaler 100 mcg and Giona Easyhaler 200 mcg.",
      "IV magnesium (severe asthma) now follows the full GINA 2026 report: not routine; 2 g over 20 min if no response to initial treatment with persistent hypoxaemia; nebulised magnesium has no benefit.",
      "Inhaled steroid in the ED (severe asthma): the unreferenced 'nebulised budesonide 1–2 mg twice daily' dose is removed. GINA 2026: high-dose ICS within the first hour reduces admissions in patients not given systemic steroids; agent and dose are not established.",
      "COPD oxygen: GOLD 2026 says only 'controlled oxygen therapy'. The 88–92% target is kept and now attributed to the BTS 2017 guideline.",
      "Inspiratory flow needed per DPI is now referenced: HandiHaler ≥ 20, Turbuhaler / Accuhaler / Ellipta / Easyhaler ≥ 30, Breezhaler ≥ 50 L/min. Turbuhaler and HandiHaler were previously listed as > 60 L/min, so the flow filter hid them from patients who could use them.",
      "Asthma exacerbations updated to GINA 2026: mild/moderate vs severe criteria, salbutamol doses (4 / 4–6 / 6–10 puffs), oxygen target 92–95%, oral steroids not needed for mild attacks, discharge criteria (O₂ Sat ≥ 92%, PEF > 70%) and follow-up within 2–7 days.",
      "COPD updated to GOLD 2026: Group E with eosinophils ≥ 300 is LABA + LAMA with triple therapy to consider (both are listed); Group A is \"a bronchodilator\"; antibiotics for purulent sputum, prior positive culture or ventilation, 5 days; HFNT first for hypoxaemic failure; NIV and intubation indications match Figures 4.8–4.9; ICS de-escalation criteria match Figure 3.9; the CAT is labelled CAT / CAAT™.",
      "Asthma step-down: 2–3 months of good control, reduce ICS by 25–50%, never stop ICS completely in adults/adolescents (GINA 2026).",
      "US product names replaced with Thai ones: Ventolin Evohaler 100 mcg, Salbutamol Nebules 2.5 mg; Breztri strengths shown as on the Thai label (glycopyrronium 7.2 mcg).",
      "The v1.10.6 changelog and the price tooltip showed \"$$\" where \"$$$$\" was meant.",
      "SMI on a ventilator no longer advises 2–4x the dose: no study supports a multiplier, and in-vitro delivery is about 3x lower than spontaneous breathing. The note now advises MDI + in-line spacer or a nebuliser instead.",
      "\"Consider changing\" advice for devices that cannot go through a ventilator no longer suggests SMI.",
      "Asthma Maintenance Guide: low lung function on its own now gives GINA Step 3 instead of Step 4. Per GINA 2026 Table 3, Step 4 (medium-dose MART / medium-dose ICS-LABA) needs symptoms on most days or night waking together with low lung function or a recent exacerbation.",
      "Rationale text for asthma Steps 3 and 4 reworded to match the GINA 2026 criteria.",
      "Relvar Ellipta 100/25 and Trelegy Ellipta are now classed as low-to-medium dose ICS: GINA 2026 Table 6 places fluticasone furoate 100 mcg across both the low and medium columns (200 mcg is high). Relvar 100/25 was previously medium only, so it was missing from low-dose ICS-LABA suggestions (GINA Step 3) and from low-level dose conversions.",
      "Fixed-dose ICS products listed at two dose levels now count as valid at both in the Dose Conversion Guide and Equivalent Drugs.",
      "All text is now at least 10 px; the smallest 8–9 px labels (chips, badges, list details) were hard to read on phones.",
      "The language button shows 'ไทย' / 'EN' as text instead of flag emoji, which Windows displayed as the letters 'TH TH'.",
      "Exacerbation Guide recommended devices are now selected by rule (drug class, device type and indication) instead of fixed product IDs, so they stay correct when drugs are added or removed. Asthma lists SABA plus nebulised budesonide; COPD lists SABA ± SAMA plus nebulised budesonide; severe exacerbations list nebulised options.",
      "Maintenance Guide relievers and COPD options are now limited to products licensed for that condition (e.g. Bricanyl, asthma-only, no longer appears for COPD).",
      "Dose Conversion Guide (asthma) now warns when a switch drops the LABA but keeps the ICS, since moving from ICS-LABA to ICS alone is a GINA step down."
    ]
  },
  {
    version: "v1.7.0",
    date: "October 6, 2026",
    features: [
      "Result count above the drug list: \"Showing X of Y drugs\" (Thai: แสดง X จาก Y รายการยา) updates live as you search, filter or clear filters.",
      "Redrew the Accuhaler/Diskus icon traced from a reference: light outer shell with thumb grip and half-way marker, darker body arching around the white dose-counter window, and wavy grip ridges. Applies to Seretide Accuhaler and Serevent Diskus.",
      "Redrew the HandiHaler icon: rounded grey body with lid seam and capsule window, piercing button with coloured dot, and the coloured mouthpiece cover.",
      "Seretide Accuhaler and Spiriva HandiHaler colours adjusted to their reference purple and green.",
      "Light and dark mode: a sun/moon button next to the language switch toggles the theme. The app follows your device setting until you choose, then remembers your choice. Exported PNG cards stay light for printing and sharing.",
      "Redrew the MDI icon as a flat illustration traced from a reference: tilted aluminium canister, actuator in the drug's colour with shaded rim and side, mouthpiece and banded dust cap.",
      "Redrew the Respimat icon: flared cap with front hood, grey body with side dose-release button, colour stripe and the clear base with its cartridge.",
      "Redrew the Easyhaler icon: coloured dose button on a grey body with the mouthpiece in perspective.",
      "Redrew the Breezhaler icon: white outlined cap with moulded creases and grip dots, and a base with side panels in the drug's colour.",
      "Trelegy Ellipta's beige cover, label and counter now have a darker outline so they stand out from the cream body. Any light-coloured Ellipta added later gets the same outline automatically; Anoro and Relvar are dark enough without one.",
      "Redrew the Ellipta icon as a flat illustration traced from a reference drawing: cream body, lens-shaped ridged cover, label with a raised top-left corner, white front panel with the dose counter and window, and the moulded seam down the right side. Applies to Anoro, Relvar and Trelegy.",
      "Anoro Ellipta colour adjusted to the reference's crimson."
    ],
    bugs: []
  },
  {
    version: "v1.5.3",
    date: "October 5, 2026",
    features: [
      "Redrew the Ellipta device icon from the real inhaler: pebble-shaped body with left-edge grip ridges, a ridged cover hooding the top, a front label in the cover colour and the '30' dose-counter window. Applies to Anoro, Relvar and Trelegy.",
      "Anoro Ellipta now uses its true crimson cover colour instead of a generic red."
    ],
    bugs: []
  },
  {
    version: "v1.5.2",
    date: "September 9, 2026",
    features: [
      "Full Thai coverage for the comparison modal, changelog, ventilator dosing notes and export status messages — no more English leaking through the TH toggle.",
      "Press Escape to close any open modal.",
      "Grid view is now restored automatically when a narrow window is widened past the mobile breakpoint."
    ],
    bugs: [
      "Corrected class-to-substance labelling on Trelegy Ellipta, Anoro Ellipta and Spiolto Respimat, which displayed the LABA and LAMA components swapped.",
      "Fixed the COPD severe exacerbation panel referencing a non-existent drug ID, which silently hid the recommended nebulized devices.",
      "Tightened the maintenance engine's drug-class matching so triple therapy (ICS/LABA/LAMA) can no longer be returned where a dual ICS/LABA inhaler is indicated.",
      "GINA Track 2 Steps 1-2 no longer suggests high-dose ICS inhalers against its own low-dose recommendation text.",
      "GINA Track 1 now labels Step 2 as 'Step 1-2', matching the single combined treatment box it recommends.",
      "Restored the missing entrance animations and hid the stray scrollbars on the horizontal filter rails.",
      "PNG export now works when the app is opened from a hosted link, where the previous download method was silently inert."
    ]
  },
  {
    version: "v1.5.1",
    date: "July 22, 2026",
    features: [
      "New Extra-fine Particle Identifier: Added dynamic data mapping and a dedicated UI badge (Extra-fine / อนุภาคละเอียดพิเศษ) to automatically flag devices dispensing extra-fine aerosols (e.g., Foster, Trimbow, QVAR) across all views."
    ],
    bugs: []
  },
  {
    version: "v1.5.0",
    date: "July 18, 2026",
    features: [
      "New Step Down Guide: Added a dedicated clinical module outlining explicit criteria for safely de-escalating ICS therapies mapped to GINA & GOLD 2026.",
      "New Device Technique Guide: Added an interactive tutorial modal detailing standardized administration steps for MDI, DPI, SMI, and Nebulizers.",
      "Instant Clinical Rationale: Decoupled the clinical algorithm to dynamically preview GINA/GOLD Step reasoning as soon as symptoms are checked.",
      "Derived State Maintenance Guide: The complete pharmacological treatment plan now renders instantly as soon as prerequisites are met, completely eliminating the manual 'Generate Plan' button."
    ],
    bugs: [
      "Completely rewrote the PNG export engine to bypass iframe sandbox constraints and prevent silent failures.",
      "Fixed layout engine squashing during image export by utilizing absolute offscreen rendering instead of hidden clip-paths."
    ]
  },
  {
    version: "v1.2.8",
    date: "July 17, 2026",
    features: [
      "Added Trimbow MDI (Beclometasone/Formoterol/Glycopyrronium) to the triple therapy database.",
      "Expanded the drug database to include Giona Easyhaler (Budesonide 100, 200, and 400 mcg)"
    ],
    bugs: []
  },
  {
    version: "v1.2.6",
    date: "July 16, 2026",
    features: [
      "Completely overhauled the mobile floating menu bar to use a highly compact 3-row layout with swipeable horizontal filters",
      "Restored deeply embedded clinical logic for the Stepped Therapy Maintenance Guide",
      "Implemented 'Fixed-Offscreen' rendering to protect mobile viewports from hidden image engine layout blow-ups"
    ],
    bugs: [
      "Eliminated vertical layout stacking to save crucial screen space on small mobile devices",
      "Fixed critical mobile 'Blank Screen' crashing caused by undeclared function references",
      "Removed unstable DOM viewport injection to respect native mobile browser scaling",
      "Eliminated React hydration mismatches on initial viewport detection"
    ]
  }
];

const APP_VERSION = changelogData[0].version;

// Thai changelog, keyed by version (same order of features/bugs as changelogData)
const CHANGELOG_TH = {
 "v1.12.6": {
  "features": [
    "หน้าต่างคู่มือมีปุ่ม แผนภาพ (กำเริบ, ยาควบคุมเริ่มต้น, ติดตามผล, วิธีใช้อุปกรณ์, Spacer และหน้ากาก, ขนาดสเตียรอยด์) แสดงรายการแผนภาพที่เกี่ยวข้องจาก GINA 2026 (เช่น Box 4-6 แผนภาพการรักษาหลัก และ Box 9-4 การดูแลภาวะกำเริบในหน่วยบริการปฐมภูมิ) และ GOLD 2026 (เช่น Figure 3.8 และ 3.9 การรักษาเริ่มต้นและการติดตาม และ Figure 4.2 ความรุนแรงของภาวะกำเริบ) แต่ละรายการเปิดเอกสารฉบับทางการที่หน้าของแผนภาพนั้น แผนภาพมีลิขสิทธิ์ จึงใช้การเชื่อมโยงแทนการคัดลอกมาไว้ในแอป"
  ],
  "bugs": []
 },
 "v1.12.5": {
  "features": [
    "ช่องค้นหาค้นได้ตามสีของอุปกรณ์ด้วย (เช่น ม่วง, ส้ม, green) และตามบริษัท ได้แก่ ผู้รับอนุญาตในไทย ผู้รับอนุญาตในประเทศอื่น และผู้ผลิต (เช่น GlaxoSmithKline, Inpac, แอสตร้าเซนเนก้า) สีอ้างอิงตามรูปอุปกรณ์ ยาที่ยังไม่ได้ยืนยันสีจะไม่ถูกค้นพบด้วยสี",
    "Xalflu Airmaster 50/100: ทะเบียน อย. แสดงสถานะว่า รอตรวจสอบสถานะ (ตรวจเมื่อ 14 ต.ค. 2569) ยายังแสดงว่ามีทะเบียน โดยป้าย TH มีเครื่องหมาย ? และหน้ารายละเอียดมีหมายเหตุกำกับ ส่วนขนาด 50/250 มีทะเบียนตามปกติ",
    "ลิงก์แหล่งข้อมูลเปิดไปยังข้อมูลทะเบียนของยานั้นโดยตรงในกรณีที่จับคู่ได้แน่นอน: ทะเบียน อย. (99 รายการ) ฉลากของเจ้าของชื่อการค้าใน DailyMed (48 รายการ) และทะเบียนของ HPRA ไอร์แลนด์ (48 รายการ) รายการอื่นยังเป็นลิงก์ค้นหา และลิงก์ของสหราชอาณาจักร (MHRA) กับญี่ปุ่น (PMDA) ยังเปิดไปยังหน้าค้นหา",
    "การใช้ spacer และการใช้กับเครื่องช่วยหายใจมีเอกสารอ้างอิงแล้ว รายงาน ERS/ISAM (Laube 2011) ระบุว่า spacer ใช้กับ pMDI และไม่ควรใช้กับ pMDI ชนิด breath-actuated และผู้ป่วยที่ใช้เครื่องช่วยหายใจให้ยาด้วย pMDI ต่อ spacer ในวงจร หรือ nebulizer",
    "ยกเลิกราคาประมาณการ ยา 17 รายการที่ไม่มีราคากลางในไทย (เช่น Trelegy, Breztri, Trimbow 87/5/9, Serevent และ Combivent Respimat) แสดงราคาเป็น Unknown แทนระดับราคาที่ประมาณ และอยู่ท้ายสุดเมื่อเรียงตามราคา"
  ],
  "bugs": []
 },
 "v1.12.4": {
  "features": [
    "แถวชื่อการค้าในมุมมองตารางไม่ยืดเป็นการ์ดสูงที่ว่างเปล่าอีกแล้ว แถวจะสูงเท่าเนื้อหาเท่านั้น ข้อมูลที่เหมือนกันทุกขนาดยาแสดงครั้งเดียวด้านบนใต้ชื่อร่วม ได้แก่ รูป ชนิดอุปกรณ์ และบรรทัดประเทศ (ผู้รับอนุญาต ประเภทบัญชียาหลัก) กับข้อบ่งใช้เมื่อเหมือนกันทุกขนาดยา จากนั้นแต่ละขนาดยาแสดงขนาดยาและส่วนประกอบที่ระบุกลุ่มยา (ICS : ..., LABA : ...) ข้อมูลที่ต่างจากขนาดยาอื่น และปุ่มเลือกกับปุ่มรายละเอียดของตัวเอง เมื่อแตะขนาดยาจะเลื่อนไปที่การ์ดเต็มซึ่งมีขนาดที่ใช้ ส่วนปุ่มใต้รายการขนาดยาใช้แสดงหรือซ่อนการ์ดเต็มทั้งหมด",
    "ตัวกรองอุปกรณ์: ชื่ออุปกรณ์ภายใต้ DPI, MDI และชนิดอื่น เรียงจาก A ถึง Z แล้ว อุปกรณ์สูดแคปซูลที่ยังไม่ทราบชนิด (Pulvisonide) จัดอยู่ใน Other DPI ร่วมกับยาสูดชนิดผงแห้งที่ยังไม่มีแหล่งอ้างอิงวิธีใช้ โดย Other DPI อยู่ลำดับสุดท้าย",
    "ปุ่มด้านบนสองปุ่มใช้ชื่อภาษาอังกฤษสั้นลง: Exacerbation (เดิม Exacerbation Guide) และ Initial Maintenance (เดิม Initial Maintenance Guide) ส่วนชื่อภาษาไทยไม่เปลี่ยน",
    "ส่วนประกอบ (เช่น ICS : Fluticasone propionate 100 mcg, LABA : Salmeterol 50 mcg) ย้ายมาอยู่ใต้ชื่อยาโดยตรง เหนือบรรทัดประเทศ ทั้งในการ์ด แถวรายการ และแถวชื่อการค้า เพราะชื่อยาบางรายการไม่มีขนาดยาอยู่ในชื่อ",
    "ยาที่เทียบเท่า: มีตัวกรอง ขึ้นทะเบียนใน (ทั้งหมด, TH, US, UK, EU, JP) ในหน้าต่าง ใช้เลือกประเทศที่ต้องการค้นหา เช่น หายาที่เทียบเท่าในไทยของยาสูดจากญี่ปุ่น ตัวกรองเริ่มต้นตามประเทศของรายการหลัก และการเปลี่ยนในหน้าต่างนี้ไม่เปลี่ยนรายการหลัก ยาที่เทียบเท่าแต่ละรายการแสดงประเทศที่ขึ้นทะเบียนอยู่ในปัจจุบัน และป้าย Asthma / COPD เป็นไปตามฉลากของประเทศที่เลือก",
    "หน้ารายละเอียด: ข้อมูลทุกรายการมีบรรทัด แหล่งข้อมูล ซึ่งเปิดด้วยปุ่ม แสดงแหล่งข้อมูล ด้านล่างของหน้า (ระบบจำตัวเลือกไว้) ทะเบียนของแต่ละประเทศเชื่อมไปยังฐานข้อมูลทะเบียนของประเทศนั้น (อย., Drugs@FDA และ DailyMed, MHRA Products, รายการของ HPRA ไอร์แลนด์, PMDA) โดยกรอกคำค้นของยาให้แล้วในกรณีที่ตรวจสอบแล้วว่าค้นพบ ส่วนบัญชียาหลัก ราคา แรงสูดขั้นต่ำ และการใช้กับเครื่องช่วยหายใจ เชื่อมไปยังเอกสารอ้างอิง หากไม่มีแหล่งอ้างอิงที่บันทึกไว้ บรรทัดจะระบุเช่นนั้นแทนการแสดงลิงก์ รายการเอกสารอ้างอิงเพิ่ม Corradi 2014 ซึ่งเป็นแหล่งที่มาของแรงสูดขั้นต่ำของ NEXThaler",
    "มือถือ: ส่วนบนของหน้าสั้นลง ทำให้เห็นรายการยามากขึ้นเมื่อเปิดแอป ชื่อแอปอยู่ในบรรทัดเดียว ซ่อนคำอธิบายใต้ชื่อ เครดิตกับลิงก์ข้อจำกัดความรับผิดชอบอยู่บรรทัดเดียวกัน และคู่มือทั้งหกเป็นปุ่มไอคอนแถวเดียวพร้อมชื่อสั้น (กำเริบ, ยาควบคุม, ติดตาม, อุปกรณ์, Spacer, สเตียรอยด์) ส่วนแท็บเล็ตและคอมพิวเตอร์ไม่เปลี่ยน",
    "มือถือ: ช่องค้นหาเป็นปุ่มรูปแว่นขยาย เมื่อแตะจะเปิดแถบค้นหาเต็มแถว และเมนูเรียงลำดับใช้พื้นที่ที่ว่างขึ้น ปุ่มจะเป็นสีน้ำเงินขณะมีคำค้น และปุ่ม X ในแถบใช้ล้างและปิดการค้นหา",
    "ปุ่มคู่มือทั้งหกปุ่มตรึงอยู่ด้านบนพร้อมแถวค้นหาขณะเลื่อนหน้าจอในทุกขนาดจอ จึงเปิดคู่มือได้ในหนึ่งแตะเสมอ",
    "การ์ดและแถวรายการไม่แสดงป้ายสีเทาว่าไม่มีทะเบียน (เช่น US ⊘) ของประเทศที่ไม่ได้เลือกในตัวกรองประเทศอีกแล้ว แต่ยังแสดงป้ายของทุกประเทศที่เลือก และของประเทศอื่นที่ยามีหรือเคยมีทะเบียน หน้ารายละเอียดยังแสดงครบทั้งห้าประเทศเช่นเดิม",
    "ตรวจสอบ mometasone กับ GINA 2026: ยาสูดชนิด pMDI มีระดับขนาด ICS แล้ว GINA ให้เกณฑ์เดียวสำหรับขนาดต่ำและปานกลางรวมกัน (200 ถึง 400 mcg ต่อวัน) และขนาดสูงเมื่อเกิน 400 ดังนั้น Asmanex HFA 100 และ Dulera 100/5 (2 พัฟ วันละ 2 ครั้ง รวม 400 mcg) แสดง Low / Medium ส่วน Asmanex HFA 200 และ Dulera 200/5 (800 mcg) แสดง High เครื่องคำนวณขนาดสเตียรอยด์มีแถว mometasone pMDI ด้วยเกณฑ์เดียวกันและขนาดสูงสุดตามฉลากสหรัฐฯ ระดับนี้ใช้ความแรงตามฉลากซึ่งเป็นขนาดที่ออกจากอุปกรณ์ เพราะฉลากสหรัฐฯ ไม่ระบุขนาดที่ตวง ส่วน mometasone ชนิดผงแห้ง (Asmanex Twisthaler, Atectura, Enerzair) ยังไม่มีระดับ เพราะ GINA ระบุว่าขนาดยาขึ้นกับอุปกรณ์",
    "แรงสูดขั้นต่ำมีเอกสารอ้างอิงสำหรับทุกอุปกรณ์ที่แสดงตัวเลขแล้ว ดูได้จากปุ่ม แสดงแหล่งข้อมูล ในหน้ารายละเอียด ยาสูดชนิดผงแห้งใช้ตารางของ Ghosh 2017: HandiHaler 20; Turbuhaler, Diskus, Ellipta และ Easyhaler 30; NEXThaler 35; Spiromax และ Genuair 40; Breezhaler 50 L/min ทำให้ DuoResp Spiromax เปลี่ยนจาก 30 เป็น 40 L/min และยาที่เคยแสดง Unknown มีตัวเลขแล้ว ได้แก่ ยาที่ใช้ RespiClick กับ Tudorza และ Duaklir Pressair (40 โดยเอกสารอ้างอิงระบุในชื่อ Spiromax และ Genuair ซึ่งเป็นชื่อนอกสหรัฐฯ) และ Asmanex Twisthaler (28 โดย Clark 2020 ระบุว่าขีดล่างของสมรรถนะที่ยอมรับได้อยู่ระหว่าง 20 ถึง 28) ส่วน MDI อ้างอิงรายงาน ERS/ISAM (Laube 2011: แรงสูดต่ำกว่า 30 L/min เหมาะที่สุด) ยาสูดชนิด soft mist อ้างอิง Wu 2023 (ขั้นต่ำ 10 และเหมาะสม 30 L/min) และ nebulizer อ้างอิง Laube 2011 (หายใจปกติ) อุปกรณ์ที่ยังแสดง Unknown เพราะไม่พบเอกสารอ้างอิง: Airmaster, LupinHaler, Swinghaler, BudeForu และอุปกรณ์สูดแคปซูลของ Pulvisonide รายการเอกสารอ้างอิงเพิ่มเอกสารทั้งสี่ฉบับ",
    "Ciclesonide (Alvesco) มีระดับขนาดยาตาม GINA 2026: ต่ำ 80 ถึง 160 ปานกลางมากกว่า 160 ถึง 320 และสูงมากกว่า 320 mcg ต่อวัน Alvesco 80 แสดง 1 พัฟ วันละ 2 ครั้ง (ต่ำ) 2 พัฟ (ปานกลาง) และ 4 พัฟ (สูง) ส่วน Alvesco 160 แสดง 1 พัฟ วันละ 2 ครั้ง (ปานกลาง) และ 2 พัฟ (สูง) ตามขนาดยาวันละ 2 ครั้งในฉลากสหรัฐฯ ซึ่งสูงสุด 320 mcg วันละ 2 ครั้ง เครื่องคำนวณขนาดสเตียรอยด์มีแถว ciclesonide แล้ว ระดับนี้ใช้ความแรงตามฉลากซึ่งเป็นขนาดที่ออกจากปากอุปกรณ์",
    "เครื่องคำนวณขนาดสเตียรอยด์: fluticasone furoate 100 mcg ต่อวัน จัดเป็นขนาดต่ำถึงปานกลาง เพราะ GINA 2026 ให้เกณฑ์เดียวสำหรับขนาดต่ำและปานกลางรวมกัน เดิมแสดงเป็นขนาดต่ำ"
  ],
  "bugs": [
    "การค้นหาเคยบังคับเปิดทุกชื่อการค้าที่ตรงกัน ทำให้แถวชื่อการค้าและการ์ดเต็มแสดงพร้อมกันและซ่อนไม่ได้ ตอนนี้การค้นหาจะแสดงเฉพาะแถวชื่อการค้า เปิดแถวเพื่อดูการ์ดเต็ม หรือปิดตัวเลือก รวมขนาดยา เพื่อแสดงทุกขนาดยา"
  ]
 },
 "v1.12.3": {
  "features": [
    "แถวชื่อการค้า: ยาที่ต่างกันเฉพาะขนาดยาจะรวมอยู่ในแถวเดียว (เช่น Seretide Accuhaler ขนาด 50/100, 50/250 และ 50/500) ทำให้รายการทั้งหมดลดจาก 131 การ์ดเหลือ 93 แถว แตะแถวเพื่อแสดงการ์ดของแต่ละขนาดยาเหมือนเดิม ขนาดที่ใช้จึงอยู่กับขนาดยาของตัวเองเสมอ การค้นหาจะเปิดชื่อการค้าที่ตรงกัน และบรรทัดจำนวนผลลัพธ์บอกว่ารวมเป็นกี่แถว ปุ่ม รวมขนาดยา ใหม่ในแถบตัวกรองใช้ปิดการรวมนี้ได้ โดยจำค่าที่เลือกไว้ในอุปกรณ์",
    "ปุ่ม ข้อเสนอแนะ ใหม่ข้างปุ่มเวอร์ชันด้านบนของหน้า เปิดแบบฟอร์มข้อเสนอแนะในแท็บใหม่ สำหรับแจ้งข้อมูลผิด ยาที่ขาด หรือข้อเสนอแนะ",
    "เพิ่ม Trimbow 172/5/9 ซึ่งมีทะเบียนในไทย (2C 9/67) สำหรับโรคหืดในผู้ใหญ่ที่ควบคุมไม่ได้ด้วย ICS ขนาดสูงร่วมกับ LABA และมีทะเบียนในสหรัฐฯ สหราชอาณาจักร และสหภาพยุโรปด้วย ยังไม่มีข้อมูลราคาในไทย ราคาจึงแสดงเป็น Unknown",
    "ตัวกรองประเทศ: เพิ่มปุ่ม JP (ญี่ปุ่น) ยาในคู่มือ 53 รายการมีจำหน่ายในญี่ปุ่น ตรวจสอบจากระบบค้นหาเอกสารกำกับยาของ PMDA ตามชื่อตัวยาสำคัญ (12 ต.ค. 2569) พร้อมข้อบ่งใช้ตามเอกสารกำกับยาญี่ปุ่นของแต่ละรายการ (เช่น Adoair มีข้อบ่งใช้ COPD เฉพาะ 250 Diskus และ 125 Aerosol ส่วน Relvar และ Trelegy เฉพาะขนาด 100) และผู้รับอนุญาตในญี่ปุ่น หลายรายการจำหน่ายในชื่ออื่น (Seretide เป็น Adoair, Flixotide / Flovent เป็น Flutide, Ventolin เป็น Sultanol, Incruse เป็น Encruse, Tudorza เป็น Eklira Genuair) หน้ารายละเอียดแสดงชื่อที่ใช้ในญี่ปุ่น เพิ่มยา 15 รายการจากตลาดญี่ปุ่น ซึ่งตรวจสอบกับทะเบียนไทย สหราชอาณาจักร และไอร์แลนด์/สหภาพยุโรปด้วย ได้แก่ Meptin Air, Meptin Swinghaler และ Meptin Inhalation Solution (procaterol), Qvar 50 และ 100 Aerosol, Atectura Breezhaler (3 ขนาด), Enerzair Breezhaler (2 ขนาด), ยาสามัญ budesonide-formoterol ชื่อ BudeForu 3 รายการ, Berotec Aerosol 100 และ Spiriva 1.25 μg Respimat โดย Meptin, Qvar, Atectura, Enerzair และ Berotec เคยมีทะเบียนในไทย จึงแสดง † รูป Meptin Air และ Meptin Swinghaler วาดตามภาพถ่ายอุปกรณ์จริง ส่วนอุปกรณ์ของ BudeForu ยังไม่มีรูปอ้างอิง (แสดง N/A) และทั้ง BudeForu กับ Meptin Swinghaler ยังไม่มีขั้นตอนการใช้ (แสดง Unknown)",
    "เพิ่มยาที่จำหน่ายในสหรัฐฯ 30 รายการ จาก 22 ชื่อการค้า โดยอ้างอิงรายการ Drugs@FDA ของ FDA และฉลากยาสหรัฐฯ ของแต่ละชื่อการค้า (12 ต.ค. 2569): ProAir HFA, Proventil HFA, Flovent Diskus 50, 100 และ 250, Symbicort Aerosphere 80/4.8 และ 160/4.8, ProAir RespiClick, Xopenex HFA, Airsupra, QVAR RediHaler 80, Alvesco 80 และ 160, Arnuity Ellipta 100 และ 200, Asmanex HFA 100 และ 200, Asmanex Twisthaler 220, AirDuo RespiClick 55/14, 113/14 และ 232/14, Dulera 100/5 และ 200/5, Striverdi Respimat, Perforomist, Incruse Ellipta, Tudorza Pressair, Yupelri, Bevespi Aerosphere และ Duaklir Pressair ขนาดยา ขนาดบรรจุ ระยะเวลาที่ต้องทิ้ง และสีอุปกรณ์มาจากฉลากสหรัฐฯ ส่วนสีและรูปทรงอุปกรณ์ตรวจเทียบกับรูปบรรจุภัณฑ์แล้ว เลือก US ในตัวกรองประเทศเพื่อแสดงรายการเหล่านี้ ProAir HFA, Proventil HFA และ Flovent Diskus ยังอยู่ในรายการที่ FDA ระบุว่ามีจำหน่าย แต่ไม่พบฉลากฉบับปัจจุบันจากผู้ผลิต การ์ดจึงระบุให้ตรวจสอบการมีจำหน่าย ส่วน Symbicort Aerosphere อ้างอิงจากไฟล์ฉลากของ FDA การ์ด Trimbow เดิมแสดงทะเบียนสหรัฐฯ แล้ว (โรคหืด ผู้ใหญ่)",
    "ยาใหม่ทุกรายการตรวจสอบกับทะเบียน อย. ไทย เว็บไซต์ MHRA ของสหราชอาณาจักร และรายการของไอร์แลนด์/สหภาพยุโรปด้วย Yupelri มีทะเบียนในไทยปัจจุบัน (1C 13/66) ส่วน Alvesco, Asmanex Twisthaler, Striverdi Respimat, Incruse Ellipta, Eklira Genuair (Tudorza) และ Duaklir Genuair เคยมีทะเบียนในไทย จึงแสดง † พร้อมวันที่ยกเลิก ป้าย UK และ EU เปิดสำหรับ Alvesco, Asmanex Twisthaler, Striverdi, Incruse, Tudorza และ Duaklir (ชื่อ Genuair) และ Bevespi และ EU สำหรับ AirDuo 113/14 และ 232/14 (ชื่อ Seffalair Spiromax)",
    "วิธีใช้อุปกรณ์: เพิ่มการ์ดสำหรับ Pressair / Genuair และ Twisthaler เขียนจากคำแนะนำการใช้ในฉลากสหรัฐฯ (รวม 15 อุปกรณ์) การ์ด Spiromax ครอบคลุม RespiClick ซึ่งเป็นอุปกรณ์เดียวกันในชื่อที่ใช้ในสหรัฐฯ",
    "ยาที่ไม่มีข้อมูลราคาในไทยจะแสดงราคาเป็น Unknown และอยู่ท้ายสุดเมื่อเรียงตามราคา ยาสหรัฐฯ ที่เพิ่มใหม่ยังไม่มีราคาในไทย ไม่มีค่าแรงสูดขั้นต่ำของ RespiClick, Pressair และ Twisthaler (แสดง Unknown) และไม่มีระดับ ICS ต่ำ / กลาง / สูง ของ mometasone, ciclesonide และ AirDuo เพราะตาราง GINA ในคู่มือยังไม่มีแถวของยาเหล่านี้",
    "การ์ดและแถวรายการแสดงหนึ่งบรรทัดต่อประเทศที่เลือกในตัวกรองประเทศ: ป้ายประเทศที่บอกสถานะทะเบียน (มีสี = มีทะเบียนอยู่, † = เคยมีทะเบียน) ตามด้วยผู้รับอนุญาตในประเทศนั้น และบรรทัดประเทศไทยแสดงประเภทบัญชียาหลักด้วย ประเทศที่ไม่ได้เลือก หรือที่ยาไม่มีทะเบียน (⊘) จะอยู่รวมกันเป็นป้ายแถวเดียว แหล่งข้อมูล: ทะเบียน อย. (TH), Drugs@FDA (US), SmPC ของสหราชอาณาจักร (UK) และรายการของ HPRA ไอร์แลนด์ (EU) เมื่อชี้จะแสดงรายละเอียดและผู้ผลิตยาสำเร็จรูป",
    "รายการเดียวที่ไม่มีชื่อผู้รับอนุญาตคือ salbutamol nebules ที่เป็นชื่อสามัญ ซึ่งแสดง ไม่มีข้อมูล ส่วนยา 4 รายการที่ไม่เคยขึ้นทะเบียนในไทยจะระบุไว้ Giona Easyhaler ไม่ได้ขึ้นทะเบียนในไอร์แลนด์ จึงใช้ชื่อผู้รับอนุญาตใน EU จากเอกสารกำกับยา (SmPC) ของสวีเดน",
    "ปุ่ม ผู้รับอนุญาต ใหม่ในแถบตัวกรอง ใช้ซ่อนชื่อผู้รับอนุญาต เหลือป้ายประเทศแถวเดียวต่อรายการ และจำค่าที่เลือกไว้ในเครื่อง",
    "หน้ารายละเอียดยาใหม่: คลิกหรือแตะการ์ดหรือแถวรายการ (หรือปุ่ม รายละเอียด) เพื่อเปิดหน้าที่รวมข้อมูลทั้งหมดของยา ได้แก่ ขนาดยาแนะนำ แรงสูด spacer การใช้กับเครื่องช่วยหายใจ ราคา ขนาดบรรจุและอายุหลังเปิดใช้ และสำหรับแต่ละประเทศ สถานะทะเบียนพร้อมวันที่หรือเลขทะเบียน ผู้รับอนุญาต ประเภทและหมายเหตุบัญชียาหลัก รวมถึงผู้ผลิตและวันที่ตรวจสอบข้อมูลล่าสุด ทำให้รายละเอียดที่เคยอยู่ในข้อความเมื่อชี้เมาส์ดูได้บนมือถือ",
    "การ์ดในมุมมองตารางยังแสดงข้อมูลครบเหมือนเดิม (แรงสูด spacer ราคา ขนาดบรรจุ อายุหลังเปิดใช้ ขนาดยา วันที่ตรวจสอบล่าสุด และการใช้กับเครื่องช่วยหายใจ) ส่วนแถวในมุมมองรายการสั้นลง เหลือชื่อยา ส่วนประกอบ บรรทัดประเทศ แรงสูด และขนาดยาแนะนำ โดยอายุหลังเปิดใช้และ spacer อยู่ในหน้ารายละเอียด ทั้งสองมุมมองมีปุ่ม รายละเอียด อยู่ใต้ปุ่มเลือก (บนมือถือในมุมมองรายการเป็นไอคอนข้อมูล)",
    "มือถือ: ปุ่มแนวทาง 6 ปุ่มใช้ 2 แถว แถวละ 3 ปุ่มขนาดเล็ก แทน 3 แถว และหัวเรื่องเล็กลง รายการยาจึงเริ่มสูงขึ้นบนจอ",
    "ตัวกรองที่เปิดอยู่แสดงเป็นป้ายเหนือจำนวนผลลัพธ์ และเห็นได้แม้ปิดแผงตัวกรอง แตะป้ายเพื่อเอาตัวกรองนั้นออก ส่วนป้ายประเทศและ อย. จะคืนค่าเริ่มต้น (ไทย, ขึ้นทะเบียนปัจจุบัน) ปุ่ม ล้าง อยู่ลำดับแรกของแถวนี้",
    "ปุ่ม สัญลักษณ์ ใหม่ข้างจำนวนผลลัพธ์ เปิดคำอธิบายสัญลักษณ์: ป้ายทะเบียน (มีสี, †, ⊘) และรหัสประเทศ ประเภทบัญชียาหลัก เครื่องหมายราคา สีของกลุ่มยา ชนิดอุปกรณ์ และป้าย Extra-fine, MART, ใช้ช่วงกำเริบ, ข้อควรระวัง, รูป N/A, รูปสีเทา และ Unknown",
    "ตัวอักษรของข้อมูลสำคัญใหญ่ขึ้น: มุมมองรายการแสดงชื่อยาขนาด 13 ถึง 14 px (เดิม 11 px) ส่วนตัวยา ผู้รับอนุญาต แรงสูด และขนาดยา 11 ถึง 12 px (เดิม 10 px) และบรรทัดขนาดยาต่ำ / กลาง / สูงบนการ์ดเป็น 12 px (เดิม 10 ถึง 11 px)",
    "ปุ่ม ล้าง ใหม่ที่ต้นแถวตัวกรองที่เปิดอยู่ เหนือจำนวนผลลัพธ์ จะแสดงเมื่อมีการค้นหาหรือเปิดตัวกรอง แม้ปิดแผงตัวกรองอยู่ และคืนทุกอย่างเป็นมุมมองเริ่มต้น (ประเทศไทย มีทะเบียนอยู่)",
    "แบ่งแถบตัวกรองเป็นสองแถว แถวที่ 1 ด้านทะเบียน: ประเทศ สถานะ อย. เฉพาะบัญชียาหลัก และผู้รับอนุญาต แถวที่ 2 ด้านคลินิก: Asthma / COPD กลุ่มยา Maintenance / Reliever / Exacerbation MART / Extra-fine แรงสูด และชนิดอุปกรณ์ บนจอแคบปุ่มจะขึ้นบรรทัดใหม่ ไม่ต้องเลื่อนไปด้านข้าง เมนูเรียงลำดับอยู่ข้างช่องค้นหาในทุกขนาดจอ ปุ่ม ตัวกรอง ในแถวค้นหาที่ติดอยู่ด้านบนใช้เปิดและปิดตัวกรอง โดยเปิดไว้ตั้งแต่ต้นบนแท็บเล็ตและคอมพิวเตอร์ และปิดไว้ตั้งแต่ต้นบนมือถือ ปุ่มนี้แสดงจำนวนตัวกรองที่เปิดอยู่ด้วย",
    "ตัวกรองประเทศ: ปุ่ม ทั้งหมด ใหม่ใช้เลือกทุกประเทศ กดอีกครั้งจะยกเลิกทั้งหมดและไม่แสดงรายการจนกว่าจะเลือกประเทศ แต่ละประเทศปิดได้เองรวมถึงประเทศสุดท้าย ค่าเริ่มต้นยังเป็นประเทศไทย",
    "แสดงสถานะทะเบียนของทุกประเทศ ไม่เฉพาะไทย โดยใช้สัญลักษณ์: † เคยมีทะเบียน, ⊘ ไม่เคยมีทะเบียน เคยมีทะเบียนรวมถึงยาที่ FDA สหรัฐฯ ระบุว่าเลิกจำหน่าย (Onbrez, Seebri, Ultibro) และยาที่ถอนทะเบียนในไอร์แลนด์ (Atrovent inhaler, Combivent UDV) ปุ่มเฉพาะบัญชียาหลักและประเภทบัญชียาหลักจะแสดงเฉพาะเมื่อเลือกประเทศไทย เพราะเป็นบัญชีของไทย",
    "ตัวกรอง อย. (ปัจจุบัน / เคยมี / ไม่เคยมี) ใช้กับทุกประเทศที่เลือก ตามฐานข้อมูลของแต่ละประเทศ: อย. ไทย, Drugs@FDA (สหรัฐฯ), SmPC ของ MHRA (สหราชอาณาจักร) และรายการของ HPRA ไอร์แลนด์ (สหภาพยุโรป)"
  ],
  "bugs": [
    "การ์ดในมุมมองตารางบนมือถือจอแคบ: ค่าแรงสูดสั้นๆ เช่น \"< 30 L/min\" เคยถูกตัดเป็นสามบรรทัดเมื่อป้ายกำกับยาว (ภาษาไทย) ตอนนี้ป้ายกำกับขึ้นบรรทัดใหม่แทน และค่าอยู่ครบในบรรทัดเดียว",
    "QVAR RediHaler 40 เคยแสดงเป็นสีแดงเลือดหมู ซึ่งเป็นสีของขนาด 80 mcg ฉลากสหรัฐฯ ระบุว่าขนาด 40 mcg มีตัวหลอดสีเบจและฝาสีขาว ตอนนี้ทั้งสองขนาดแสดงตามฉลากแล้ว",
    "แก้สถานะทะเบียน อย. ให้ตรงกับฐานข้อมูล: Ultibro Breezhaler เคยขึ้นทะเบียนและถูกยกเลิก (15 กันยายน 2568) จึงแสดงเป็นเคยมีทะเบียน แทนไม่เคยมีทะเบียน และปรับวันยกเลิกของ Onbrez (6 พฤศจิกายน 2567), Seebri (21 กรกฎาคม 2565) และ Flixotide Evohaler 250 (31 มกราคม 2560)"
  ]
 },
 "v1.12.2": {
  "features": [
    "ใบคำแนะนำผู้ป่วย: เพิ่มปุ่มบันทึก PDF บันทึกเป็นไฟล์ PDF ขนาด A4 หน้า 1 เป็นใบคำแนะนำ หน้า 2 เป็นแผนปฏิบัติตัว พิมพ์หรือส่งต่อได้จากทุกอุปกรณ์",
    "ตัวกรองบทบาทของยา: เปลี่ยนชื่อ Controller เป็น Maintenance (คำที่ GINA ใช้สำหรับยาที่ใช้เป็นประจำ) และเพิ่มกลุ่มที่สาม Exacerbation สำหรับยาที่ใช้ช่วงอาการกำเริบ ส่วนใหญ่ในโรงพยาบาล เมื่อชี้ที่ปุ่มจะแสดงความหมาย",
    "Budesonide ชนิดพ่นละออง (Pulmicort, Budecort และ Bunase Respules) อยู่ในกลุ่ม Exacerbation เท่านั้น ไม่อยู่ใน Controller และ Reliever อีก ส่วน salbutamol และ salbutamol/ipratropium ชนิดพ่นละอองอยู่ทั้งในกลุ่ม Reliever และ Exacerbation ยาเหล่านี้มีป้าย ใช้ช่วงกำเริบ และ budesonide ชนิดพ่นละอองมีหมายเหตุว่าขึ้นทะเบียนเป็นยาควบคุมโรคหืด แต่ในผู้ใหญ่ใช้ช่วงอาการกำเริบเป็นหลัก"
  ],
  "bugs": [
    "ไอคอน Seretide Accuhaler แสดงความแรงของแต่ละขนาดในช่องตัวเลข: 250 สำหรับ 50/250 และ 500 สำหรับ 50/500 (เดิมแสดง 100 ทั้งสามขนาด) ส่วน Serevent Diskus แสดง 50",
    "ไม่มีเอกสารอ้างอิง ไม่ใส่ค่าที่คาดเดา Pulvisonide 200: ยังไม่ทราบชนิดอุปกรณ์ จึงแสดงรูป N/A แรงสูดขั้นต่ำเป็น ไม่มีข้อมูล และคู่มืออุปกรณ์ไม่แสดงขั้นตอนการใช้ (ให้ดูเอกสารกำกับยา) Xalflu Airmaster และ Tropoair: แรงสูดขั้นต่ำเป็น ไม่มีข้อมูล (ไม่มีตัวเลขที่ตีพิมพ์) เมื่อเปิดตัวกรองแรงสูด ยาเหล่านี้ยังอยู่ในรายการพร้อมหมายเหตุ",
    "สีไอคอนที่ไม่มีรูปอ้างอิงจะแสดงเป็นสีเทากลางพร้อมข้อความ ยังไม่ยืนยันสี: BudeSpray-200 HFA, Beclocip 50, 100, 200 และ 250 HFA และ Beclosal HFA เนื่องจากไม่พบรูปอุปกรณ์ใน MIMS Thailand หรือจากการค้นหาทางเว็บ",
    "ไอคอนที่ใช้สีจริงตามรูปถ่ายผลิตภัณฑ์: Aeronide 200 mcg (ตัวหลอดสีน้ำตาลแดง ฝาครอบสีส้ม), Budecort-200 Inhaler (ตัวหลอดสีขาว ฝาครอบสีชมพูเข้ม), Asthalin Inhaler (ตัวหลอดสีน้ำเงิน ฝาครอบสีขาว), BudeSpray-100 HFA (ตัวหลอดสีครีม ฝาครอบสีม่วง), Budiair 200 (ตัวหลอดและฝาครอบสีแดงเลือดหมู), Salvo Inhaler (ตัวหลอดสีน้ำเงินอมเทา ฝาครอบสีเข้ม) และ Xalflu Airmaster 50/250 (ฝาครอบสีชมพูอมม่วง)",
    "ไอคอนที่ปรับสีตามรูปผลิตภัณฑ์ที่พบทางออนไลน์: Aerotide 125 และ 250 (สีม่วง ฝาสีม่วงอ่อน), Seroflo 125 (สีขาว ฝาสีเขียว), Aerobidol (สีขาว ฝาสีฟ้าอมเขียว), Buto-Asma (สีน้ำเงิน ฝาสีกรมท่า), Salflumix Easyhaler 50/250 และ 50/500 (ส่วนบนสีม่วง) และ Oxis Turbuhaler (ฐานหมุนสีเทอร์ควอยซ์)",
    "Oxis Turbuhaler: ความแรง ขนาดยา และขนาดบรรจุแสดงเป็น ไม่มีข้อมูล เพราะทะเบียน อย. และ MIMS Thailand ไม่ระบุความแรงที่ขึ้นทะเบียน",
    "Tropoair 18 mcg: ไอคอน LupinHaler ใหม่วาดจากรูปถ่ายอุปกรณ์จริง และการ์ดระบุเป็น LupinHaler แทน HandiHaler ขั้นตอนการใช้ยังอยู่ในการ์ด HandiHaler เพราะเอกสารวิธีใช้ของ Lupin ระบุขั้นตอนเดียวกัน",
    "ใบคำแนะนำผู้ป่วย: ตัวอย่างเคยถูกบีบให้พอดีกับพื้นที่ที่เหลือในหน้าต่างและถูกตัด เห็นชัดบนมือถือ ตอนนี้แสดงทั้งใบและเลื่อนหน้าต่างได้",
    "ใบคำแนะนำผู้ป่วย: เมื่อเบราว์เซอร์ไม่ยอมให้พิมพ์ (แอปที่ฝังในเว็บไซต์อื่น หรือเบราว์เซอร์มือถือบางตัว) ปุ่มพิมพ์เคยไม่ทำงาน ตอนนี้จะบันทึกเป็น PDF ขนาด A4 แทนและแจ้งให้ทราบ",
    "ข้อความแจ้งเตือนด้านบนจอขึ้นบรรทัดใหม่บนมือถือ ไม่ล้นออกนอกจอ",
    "ใบคำแนะนำผู้ป่วยของ budesonide ชนิดพ่นละออง: ระบุเป็นยาสำหรับช่วงอาการกำเริบ (ใช้ตามจำนวนวันที่แพทย์สั่ง ไม่ใช้แทนยาพ่นประจำ) แทนยาบรรเทาอาการ ให้ระบุยาบรรเทาอาการ และไม่เลือกแผนปฏิบัติตัวไว้ตั้งแต่ต้น",
    "ถ้อยคำ: ใช้คำว่า maintenance แทน controller ในใบคำแนะนำผู้ป่วยภาษาอังกฤษ หัวข้อแนวทางยาควบคุม การ์ดภาวะหืดกำเริบ และหมายเหตุการเปลี่ยนยา"
  ]
 },
 "v1.12.1": {
  "features": [],
  "bugs": [
    "ป้ายตัวกรอง อย. ใช้ไอคอนเครื่องหมายถูกขนาดเล็กของแอปแทนอีโมจิสีสด ให้เข้ากับตัวกรองอื่น",
    "มุมมองรายการ: ป้ายประเทศ (TH / US / UK / EU) และปุ่มข้อควรระวังอยู่แถวที่สองใต้ชื่อยาเสมอ ทุกแถวจึงมีรูปแบบเดียวกัน",
    "เมื่อฝังในเว็บไซต์อื่นบนมือถือ: แถบรายการที่เลือกด้านล่างเคยถูกแถบเครื่องมือของเบราว์เซอร์บัง ตอนนี้แอปวัดส่วนของกรอบที่อยู่นอกจอ และจัดให้แถบรายการที่เลือกและหน้าต่างคู่มืออยู่ในส่วนที่มองเห็น",
    "มุมมองรายการบนมือถือ: ปุ่มเลือกที่มุมขวาบนของแต่ละแถวเคยถูกกรอบด้านในบังจนกดไม่ได้ ตอนนี้อยู่ด้านบนแล้ว และชุดทดสอบตรวจว่าไม่มีปุ่มใดถูกบัง",
    "โหลดเร็วขึ้น: แสดงการ์ดชุดแรกทันทีแล้วตามด้วยส่วนที่เหลือ สไตล์ชีตของฟอนต์ไม่หน่วงการแสดงผลครั้งแรก โค้ดถูกย่อขนาด และไลบรารีบันทึกรูปภาพทำงานเฉพาะเมื่อบันทึกรูป (ขนาดดาวน์โหลดเล็กลงประมาณ 9%)"
  ]
 },
 "v1.12.0": {
  "features": [
    "ในโหมดภาษาไทย ขนาดยาแสดงเป็นภาษาไทยในการ์ด แถวรายการ หน้ารายละเอียด และแนวทางการกำเริบเฉียบพลัน (เช่น 1–2 พัฟ ทุก 4–6 ชม. เมื่อมีอาการ (ไม่เกิน 8 ครั้ง/วัน), สูด 1 ครั้ง วันละ 1 ครั้ง) รวมถึงขนาดสูงสุดของ MART และป้ายขนาดต่ำ / ปานกลาง / สูง",
    "แต่ละการ์ดแสดงวันที่ตรวจสอบข้อมูลล่าสุด: ทะเบียน อย. ฉลาก (ข้อบ่งใช้) และราคากลาง",
    "การทดสอบตรวจทุกหน้าจอเพิ่มเติมว่าไม่มีข้อความซ้อนกัน ถูกตัด หรือล้นกรอบ และไม่ต้องเลื่อนด้านข้าง ทั้งบนจอคอมพิวเตอร์และมือถือ (โหมดสว่างและมืด) ทั้งภาษาอังกฤษและไทย",
    "แถบเมนูเมื่อเลือกการ์ดกะทัดรัดขึ้น: บรรทัดแรกแสดงจำนวน ชื่อยา และปุ่มล้าง บรรทัดที่สองเป็นปุ่มขนาดเท่ากันแถวเดียวที่พอดีทุกหน้าจอรวมถึงมือถือ ไม่ต้องเลื่อนด้านข้าง",
    "การ์ดแสดงจำนวนโดสทั้งหมดและอายุยาหลังเปิดใช้ในบรรทัดเดียว (ชื่อซ้าย ค่าขวา) และในโหมดภาษาไทยแสดงค่าทั้งสองเป็นภาษาไทย (เช่น 200 พัฟ, ใช้ได้จนถึงวันหมดอายุบนฉลาก)",
    "มุมมองการ์ดแสดงไม่เกิน 3 การ์ดต่อแถว",
    "แนวทางการกำเริบเฉียบพลัน: หืดรุนแรงและ COPD รุนแรงแสดงยาพ่น pMDI ที่เป็น SABA ± SAMA (ใช้ร่วมกับ spacer) ตามข้อความแนะนำด้วย หืดเล็กน้อยถึงปานกลางไม่แสดงยาสูดผสม SABA/SAMA แล้ว (ipratropium เป็นยาเสริม) และเพิ่มขั้นยาควบคุมอาการ (เริ่มหรือเพิ่ม ICS) COPD เล็กน้อยถึงปานกลางแสดง SABA และ SABA + SAMA ชนิดพ่นละออง",
    "แนวทางการกำเริบเฉียบพลัน: อุปกรณ์ที่แนะนำจัดกลุ่มตามข้อความคำแนะนำของแต่ละการ์ดตามลำดับ เป็นหัวข้อพับเก็บได้ที่มีเฉพาะยาของกลุ่มนั้น เช่น หืดเล็กน้อยถึงปานกลาง: SABA ผ่าน pMDI + spacer, SABA พ่นละออง 2.5 mg, budesonide-formoterol 160/4.5 (พร้อมคำแนะนำ MART), ipratropium เสริม, ยาควบคุมอาการ ICS; หืดรุนแรง: SABA pMDI, SABA พ่นละออง 5 mg, ร่วมกับ ipratropium, ICS ขนาดสูงในห้องฉุกเฉิน; COPD: SABA, SABA + SAMA, SAMA, budesonide พ่นละออง แต่ละแถวกะทัดรัด (ชื่อ ส่วนประกอบ ขนาดยา) เรียงตามชนิดอุปกรณ์ ยาในบัญชียาหลักก่อน แล้วตามตัวอักษร",
    "ตรวจสอบรายละเอียด: ขนาดบรรจุ Aerotide (อย่างน้อย 120 ครั้ง) และ Aerobidol (อย่างน้อย 200 ครั้ง) ยืนยันจากทะเบียน อย.; Seroflo 125 บรรจุ 120 ครั้ง; Oxis Turbuhaler เป็นขนาด 4.5 mcg (6 mcg ต่อโดสที่ตวง); Spiromax ให้ยาสม่ำเสมอตั้งแต่ 30 L/min Pulvisonide บรรจุแผงละ 5 แคปซูล บางกล่องมีอุปกรณ์สูด วาดไอคอน Airmaster, NEXThaler, Spiromax และ Turbuhaler ใหม่ตามอุปกรณ์จริง และสีฝาของ Xalflu ตามความแรง",
    "ค้นหาเป็นภาษาไทยได้: ชื่อการค้าตามทะเบียน อย. (เช่น ซิมบิคอร์ท, เวนโทลิน, พูลมิคอร์ท) ชื่อตัวยาภาษาไทยตามตัวสะกดที่ใช้บ่อย (เช่น บูเดโซไนด์, ซาลบูทามอล / ซัลบูทามอล) และชื่ออุปกรณ์ (เช่น เทอร์บูเฮเลอร์, เรสพิแมท) ทั้งในช่องค้นหาหลักและแนวทางการติดตามผล",
    "ระบุ spacer ที่ใช้ได้สำหรับยาสูดทุกรายการ ทั้งในการ์ด รายการ และรายชื่อยาในคู่มือ Spacer & Mask: spacer ที่ฉลากยาระบุ (Volumatic สำหรับ Ventolin และ Seretide Evohaler; Volumatic หรือ AeroChamber Plus สำหรับ Flixotide; AeroChamber Plus สำหรับ Symbicort Rapihaler, Trimbow และ Foster; AeroChamber Plus Flow-Vu สำหรับ Breztri และ Flutiform) นอกนั้นใช้ spacer แบบมีวาล์วได้ทุกชนิด ห้ามใช้กับยาสูดผงแห้งหรือชนิดกดเมื่อหายใจเข้า และไม่จำเป็นสำหรับ Respimat",
    "มุมมองรายการแสดงรายละเอียด (แรงสูด วันหมดอายุ ขนาดยา spacer) แบบเต็มข้างชื่อยาโดยใช้ความกว้างเต็มแถว และเงื่อนไขบัญชียาหลักแยกเป็นบรรทัดด้านล่าง และจำนวนยาแสดงจำนวนทั้งหมดในฐานข้อมูลด้วย",
    "สถานะบัญชียาหลักนับเฉพาะยาที่มีทะเบียนในไทยปัจจุบัน: Flixotide Evohaler 50 และ 250, Pulmicort Turbuhaler 100 และ 200, Giona Easyhaler 100 และ Bufomix Easyhaler แสดง \"นอกบัญชียาหลัก\" (ชี้เพื่อดูว่าตัวยาอยู่ในบัญชี แต่ผลิตภัณฑ์นี้จัดหาไม่ได้) และไม่แสดงในตัวกรองเฉพาะบัญชียาหลักหรือถูกจัดอันดับแรกในแนวทางอีก ปุ่มเฉพาะบัญชียาหลักย้ายไปอยู่ข้าง อย. ✓ และปุ่ม MART / Extra-fine ย้ายมาอยู่ก่อนช่องแรงสูด",
    "ยาที่เคยจำหน่ายในไทยแต่ทะเบียน อย. ถูกยกเลิก หมดอายุ หรือสิ้นสุดการติดตามความปลอดภัย ยังแสดงในมุมมองประเทศไทยพร้อมป้ายสีเหลืองอำพัน \"TH ⊘ เคยมีทะเบียน\" (ชี้เพื่อดูเลขทะเบียนและวันที่) และมีตัวกรองใหม่ \"อย. ✓ ปัจจุบัน / เคยมี / ไม่เคยมี\" (ค่าเริ่มต้น ปัจจุบัน) เลือกว่ามุมมองประเทศไทยแสดงยาใด เคยมี แสดงยาเหล่านี้ ไม่เคยมี แสดงยาที่ไม่เคยขึ้นทะเบียนในไทย ยาเหล่านี้ไม่ถูกแนะนำในแนวทางต่างๆ ที่ทำเครื่องหมาย: Bricanyl Turbuhaler, Atrovent ชนิดพ่น, Flixotide Evohaler 50 และ 250, Pulmicort Turbuhaler 100 และ 200, Symbicort Rapihaler 80/4.5, Flutiform 125/5, Giona Easyhaler 100, Serevent Accuhaler, Onbrez 150 และ 300 และ Seebri Breezhaler เพิ่มจาก MIMS Thailand พร้อมป้ายเดียวกัน: BudeSpray-100 และ -200 HFA, Budiair, Bunase Respules, Beclocip 50, 100, 200 และ 250 HFA, Beclosal HFA (beclometasone + salbutamol), Oxis Turbuhaler และ Asthalin",
    "เพิ่มยา 27 รายการที่จำหน่ายในไทย จาก MIMS Thailand และตรวจสอบว่าทะเบียน อย. ยังคงอยู่ (9 ต.ค. 2569): DuoResp Spiromax 160/4.5 และ 320/9; Foster NEXThaler 100/6; Aerotide 125 และ 250, Seroflo 125, Salflumix Easyhaler 50/250 และ 50/500, Xalflu Airmaster 50/100 และ 50/250 (fluticasone + salmeterol); Aeronide 200 และ Budecort-200 ชนิดพ่น, Pulvisonide 200 ชนิดแคปซูล และ Budecort Respules (budesonide); Tropoair 18 mcg (tiotropium, LupinHaler); Aerobidol ชนิดพ่น, Iperol, Iperol Forte, Punol และ Inhalex Forte (fenoterol + ipratropium); Combivent UDV (salbutamol + ipratropium ชนิดพ่นละออง); Salvo และ Buto-Asma ชนิดพ่น, Asmasal SDU, Salda Inhale, Salda Forte Inhale และ Venterol solution (salbutamol) แต่ละรายการมีข้อบ่งใช้ตามทะเบียนไทย สถานะบัญชียาหลัก และราคากลาง",
    "วิธีใช้อุปกรณ์: เพิ่มการ์ดสำหรับ Spiromax, NEXThaler, Airmaster และยาสูดชนิดแคปซูลอื่น (รวม 13 อุปกรณ์) การ์ด HandiHaler ครอบคลุม LupinHaler (Tropoair) ด้วย"
  ],
  "bugs": [
    "ตัวอย่างใบคำแนะนำผู้ป่วยย่อให้พอดีหน้าจอ บนมือถือเห็นหน้า A4 ทั้งหน้าโดยไม่ต้องเลื่อนด้านข้าง (การพิมพ์และบันทึกรูปภาพเหมือนเดิม) แถวในมุมมองรายการและแถวยาปัจจุบันในแนวทางการติดตามผลแสดงชื่อยาเต็มแทนการตัดคำ และแถบเมนูแสดงชื่อยาที่เลือกทั้งหมด",
    "ตรวจสอบยาเดิมกับ MIMS Thailand: Symbicort Turbuhaler 80/4.5 ในไทยมีเฉพาะขนาด 60 โดส (เดิมระบุ 60 หรือ 120); Spiolto Respimat ระบุรุ่น Reusable ที่เปลี่ยนตลับยาได้ ซึ่งมีทะเบียนในไทยเช่นกัน",
    "แนวทางการติดตามผล COPD: คำแนะนำเมื่อมีการกำเริบเป็นไปตาม GOLD 2026 Figure 3.9 ใช้ LABA หรือ LAMA: eosinophils < 300 → LABA + LAMA, ≥ 300 → LABA + LAMA + ICS ใช้ LABA + LAMA: ≥ 100 → เพิ่ม ICS, < 100 → roflumilast (FEV₁ < 50% และหลอดลมอักเสบเรื้อรัง) หรือ azithromycin (โดยเฉพาะในผู้ที่เลิกสูบบุหรี่แล้ว) ใช้ LABA + LAMA + ICS: roflumilast หรือ azithromycin และยาชีววัตถุ (dupilumab หากมีหลอดลมอักเสบเรื้อรัง หรือ mepolizumab) เมื่อกำเริบปานกลาง ≥ 2 ครั้งหรือรุนแรง ≥ 1 ครั้ง และ eosinophils ≥ 300 แยกตัวเลือก FEV₁ < 50% หลอดลมอักเสบเรื้อรัง และจำนวนการกำเริบ พร้อมหมายเหตุว่าการใช้ยาในหลอดเดียวเป็นที่แนะนำ"
  ]
 },
 "v1.11.11": {
  "features": [
    "แนวทางการติดตามผล แท็บ COPD: ประเมินกลุ่ม GOLD จากอาการ (mMRC 0–1 / CAT < 10 หรือ mMRC ≥ 2 / CAT ≥ 10) และการกำเริบในปีที่ผ่านมา (ไม่มี หรือ ≥ 1 ครั้งระดับปานกลางหรือรุนแรง) → กลุ่ม A, B หรือ E จากนั้นประเมินการรักษาปัจจุบันเทียบกับการรักษาของ GOLD สำหรับกลุ่มนั้น (เหมาะสม ต่ำกว่า GOLD มากกว่า GOLD หรือไม่แนะนำ พร้อมเหตุผล) ยาที่เลือกแต่ละตัวมีป้ายกำกับตามผล (ยาบรรเทาอาการระบุ \"ใช้เมื่อมีอาการ\") และยังแสดงว่าการรักษานี้เป็นของกลุ่มใด",
    "แนวทางการติดตามผล แท็บ COPD: แสดงว่าการรักษาปัจจุบันตรงกับกลุ่ม GOLD ใด (ยาเริ่มต้นตาม GOLD 2026): ยาออกฤทธิ์สั้นอย่างเดียวหรือ LABA/LAMA ตัวเดียว = กลุ่ม A, LABA + LAMA = กลุ่ม B หรือ E (E เมื่อปัญหาคือการกำเริบ), LABA + LAMA + ICS = กลุ่ม E, LABA + ICS หรือ ICS อย่างเดียว = ไม่ตรงกับกลุ่ม GOLD (ไม่แนะนำ) พร้อมหมายเหตุว่ากลุ่ม GOLD กำหนดจากอาการและการกำเริบ ไม่ใช่จากยา",
    "แนวทางการติดตามผลอ่านยาสูดที่เลือกไว้ในหน้าหลัก (กด Select ได้สูงสุด 3 การ์ด และมีปุ่มการติดตามผลบนแถบที่เลือกด้วย) ใส่ขนาดยาควบคุมของยาแต่ละตัวและระบุว่าใช้เป็นยาบรรเทาอาการหรือไม่ แอปจะระบุแนวทางและขั้นการรักษาของ GINA ปัจจุบัน (ใช้ ICS-formoterol เป็นยาบรรเทา = แนวทางที่ 1 ระดับขนาด ICS ของยาควบคุมตาม GINA Table 6 ICS-LABA และการเพิ่ม LAMA กำหนดขั้น) พร้อมเหตุผล เตือนเมื่อใช้ SABA อย่างเดียว ICS ซ้ำซ้อน หรือ LABA ต่างชนิด และตั้งแนวทางและขั้นให้คำแนะนำโดยอัตโนมัติ แท็บ COPD ระบุกลุ่มยาปัจจุบัน (LABA หรือ LAMA, LABA + LAMA, LABA + ICS, ยาสามตัว)",
    "เครื่องคำนวณขนาดสเตียรอยด์แสดงขนาดสูงสุดตามฉลากสำหรับผู้ใหญ่ของยาสูดแต่ละตัว (เช่น Symbicort Turbuhaler 160/4.5: 8 ครั้งต่อวัน Seretide Accuhaler: 2 ครั้ง Flixotide: 2000 mcg ต่อวัน QVAR RediHaler: 640 mcg ต่อวัน) และเปลี่ยนเป็นคำเตือนสีแดงเมื่อขนาดที่ใส่เกิน แหล่งข้อมูล: UK SmPC ฉลากสหรัฐฯ (QVAR RediHaler) และ PI ออสเตรเลีย (Symbicort Rapihaler) ส่วน MART ยังตรวจขนาดรวมสูงสุดต่อวันแยกต่างหาก",
    "แอปนี้ใช้สำหรับผู้ใหญ่เท่านั้น และเปลี่ยนชื่อเป็น \"คู่มือยาพ่นขยายหลอดลมสำหรับผู้ใหญ่\" คำบรรยายใต้ชื่อระบุว่าอ้างอิงตามแนวทาง GINA และ GOLD 2026",
    "แนวทางการติดตามผล (ปุ่มส่วนหัว): โรคหืด เลือกแนวทางและขั้น GINA ปัจจุบัน ตอบคำถามการควบคุมอาการ 4 ข้อของ GINA และการกำเริบ จะแสดงว่าควรเพิ่มขั้น (โดยตรวจสอบตาม GINA ก่อน: เทคนิค การใช้ยาสม่ำเสมอ การวินิจฉัย ปัจจัยเสี่ยง โรคร่วม) คงยา หรือลดขั้นเมื่อควบคุมได้ดี 2–3 เดือน (ทางเลือกตาม GINA Box 4-13 ของการรักษานั้น) พร้อมยาสูดสำหรับขั้นใหม่ COPD เลือกการรักษาปัจจุบัน ปัญหาหลัก (เหนื่อย กำเริบ หรือทั้งสองอย่าง) และ eosinophils เพื่อรับคำแนะนำตาม GOLD 2026 Figure 3.9 (LABA + LAMA เพิ่ม ICS azithromycin roflumilast ยาชีววัตถุ การหยุด ICS) พร้อมยาสูดที่ตรงกัน",
    "ตรวจสอบแนวทางการลดสเต็ปยากับ GINA 2026 และ GOLD 2026 และขยายเนื้อหา: โรคหืดแสดงหลักการว่าเมื่อไรและอย่างไรตาม GINA (ผู้มีปัจจัยเสี่ยงต้องติดตามใกล้ชิด ให้แผนปฏิบัติการและยาเพียงพอสำหรับกลับไปใช้ขนาดเดิม ลด ICS 25–50% รอ 2–3 เดือนระหว่างแต่ละขั้น) และทางเลือกในการลดยาตาม Box 4-13 สำหรับการรักษาปัจจุบันแต่ละแบบตั้งแต่ขั้นที่ 5 ถึงขั้นที่ 2",
    "คู่มือ Spacer และหน้ากาก (ปุ่มส่วนหัว): ใครควรใช้ spacer ปากกระบอก หรือหน้ากากตามอายุ (GINA Box 11-4) วิธีหายใจครั้งเดียวและวิธีหายใจปกติหลายครั้ง วิธีให้ได้ยาเต็มขนาด การทำความสะอาดและดูแล คำแนะนำเครื่องพ่นละออง และยาสูดทุกตัวในคู่มือแบ่งกลุ่มเป็น ใช้ร่วมกับ spacer / ห้ามใช้ spacer / ละอองช้า / เครื่องพ่นละออง",
    "เครื่องคำนวณขนาดสเตียรอยด์ (ปุ่มส่วนหัว): เพิ่มยาสูดที่มี ICS แต่ละตัว พร้อมจำนวนครั้งที่สูดต่อมื้อ วันละกี่ครั้ง และจำนวนครั้งที่สูดเพิ่มแบบ MART แสดงขนาดที่ตวงรวมต่อวันของ ICS แต่ละชนิด และจัดระดับต่ำ / ปานกลาง / สูงตาม GINA 2026 Table 6 สำหรับอายุ 12 ปีขึ้นไป แปลงฉลากที่ระบุขนาดที่ออกจากอุปกรณ์เป็นขนาดที่ตวง (เช่น Symbicort 160/4.5 = 200 mcg) และเตือนเมื่อใช้ ICS ซ้ำซ้อน ขนาดสูง หรือ MART เกินขนาดสูงสุดต่อวัน",
    "แผนปฏิบัติการ COPD: เอกสารสำหรับผู้ป่วยเพิ่มหน้าที่ 2 สำหรับ COPD (เปิดเป็นค่าเริ่มต้น) แบ่งโซนสีเขียว / เหลือง / แดง: วันปกติ (ยาควบคุมและยาบรรเทาอาการ การออกกำลังกาย วัคซีน งดบุหรี่) อาการกำเริบ (ใช้ยาบรรเทาอาการบ่อยขึ้น prednisolone ที่แพทย์สั่งโดยทั่วไป 40 mg นาน 5 วัน ยาปฏิชีวนะเมื่อเสมหะเหลือง/เขียวโดยทั่วไป 5 วัน แจ้งคลินิกภายใน 1–2 วัน) และฉุกเฉิน (1669 ยาบรรเทาอาการ ออกซิเจนที่บ้านตามอัตราที่กำหนด) อ้างอิง GOLD 2026",
    "แบบตรวจเทคนิคการใช้ยาพ่น (วิธีใช้อุปกรณ์ → แบบตรวจเทคนิคการใช้ยา): บันทึกแต่ละขั้นตอนว่าถูกหรือผิดขณะผู้ป่วยสาธิต ขั้นตอนสำคัญ (★: การเตรียมยา การไม่เป่าลมเข้า DPI และการสูดยา) จะถูกเน้นเมื่อทำผิด แสดงคะแนน รายการข้อผิดพลาดสำคัญ และคัดลอกผลหนึ่งบรรทัดสำหรับเวชระเบียน ทั้งภาษาอังกฤษและไทย",
    "ข้อควรระวังตามกลุ่มยาบนการ์ดยาทุกใบ ในหน้าเปรียบเทียบ และในรายการยาของแนวทาง (แตะเพื่อเปิด): ICS (เชื้อราในปาก เสียงแหบ ปอดอักเสบใน COPD ผลข้างเคียงทั่วร่างกายเมื่อใช้ขนาดสูง ยายับยั้ง CYP3A4) LABA (ไม่ใช้บรรเทาอาการเฉียบพลันยกเว้น ICS-formoterol ห้ามใช้โดยไม่มี ICS ในโรคหืด ระวังโรคหัวใจ) LAMA/SAMA (ต้อหินมุมปิด ปัสสาวะคั่ง ไตเสื่อม) และ SABA (ผลต่อหัวใจและโพแทสเซียม การใช้มากเกินในโรคหืด)",
    "แผนปฏิบัติการโรคหืด: เอกสารสำหรับผู้ป่วยเพิ่มหน้าที่ 2 (เปิดเป็นค่าเริ่มต้นสำหรับโรคหืด) แบ่งเป็นโซนสีเขียว / เหลือง / แดงตาม GINA จากยาพ่นที่เลือก ผู้ใช้ MART ได้คำแนะนำการสูดเพิ่มพร้อมจำนวนสูงสุดต่อวัน ผู้ใช้อื่นได้คำแนะนำการใช้ยาบรรเทาอาการ การเพิ่มยาป้องกันที่แพทย์เขียนให้ และเมื่อใดควรพบแพทย์ (ต้องใช้ยาบรรเทาอาการซ้ำภายใน 3 ชั่วโมง หรือไม่ดีขึ้นใน 2–3 วัน) ใส่ค่า PEF ที่ดีที่สุดเพื่อพิมพ์ขอบเขต 80% / 60%",
    "รวม React และระบบส่งออกรูปภาพไว้ในหน้าเว็บ แทนการโหลดจาก CDN",
    "รวมปุ่มการจำหน่ายและฉลากเป็นปุ่มประเทศแบบเลือกได้หลายประเทศ (TH / US / UK / EU ค่าเริ่มต้น TH) แสดงยาที่มีทะเบียนในประเทศที่เลือกอย่างน้อยหนึ่งประเทศ และป้ายหืด/COPD รวมข้อบ่งใช้ตามฉลากของประเทศที่เลือก",
    "ย้ายปุ่มหืด/COPD ไปไว้ต้นแถวตัวกรองที่สอง ก่อนปุ่มประเทศ",
    "การ์ดยาทุกใบแสดงทั้ง 4 ประเทศ: เน้นสีเมื่อมีทะเบียน ขีดฆ่าเมื่อไม่มี ชี้ที่ประเทศเพื่อดูข้อบ่งใช้ที่ได้รับอนุมัติ (เช่น \"สหราชอาณาจักร: COPD\") เครื่องหมาย † หมายถึงเลิกจำหน่ายในสหรัฐฯ แล้ว",
    "ปุ่มเลือกฉลาก (อย. ไทย / สหรัฐฯ / UK / EU) ค่าเริ่มต้นเป็น อย. ไทย: กำหนดป้ายหืด/COPD ของยาแต่ละรายการตามข้อบ่งใช้ที่หน่วยงานนั้นอนุมัติ รวมถึงความแตกต่างตามความแรง (เช่น สหรัฐฯ ให้ใช้ใน COPD เฉพาะ Advair Diskus 250/50, UK/EU ให้ Symbicort ชนิด pMDI ใช้เฉพาะ COPD, UK/EU ให้ Trelegy ใช้เฉพาะ COPD) ตัวกรอง แนวทาง และยาที่ใช้แทนกันได้ ใช้ฉลากที่เลือก",
    "ยาที่ไม่มีทะเบียนตามฉลากที่เลือกยังแสดงในรายการ พร้อมป้าย \"ไม่มีทะเบียนใน …\" และใช้ป้ายข้อบ่งใช้จากฉลากถัดไปที่มี Onbrez, Seebri และ Ultibro แสดง \"สหรัฐฯ: เลิกจำหน่าย\"",
    "EU ใช้ฉลาก EMA สำหรับยาที่อนุมัติแบบรวมศูนย์ หากไม่มีใช้ฉลากของไอร์แลนด์ (HPRA) หรือฉลากของประเทศอื่นใน EU หากไอร์แลนด์ไม่มี",
    "บันทึกการเปลี่ยนแปลงแสดงเป็นภาษาไทยแล้ว",
    "เอกสารสำหรับผู้ป่วย: ขนาดยาพ่นผ่านเครื่องพ่นละอองแสดงเป็นภาษาไทย (และภาษาอังกฤษที่อ่านง่าย) เช่น \"พ่นยาผ่านเครื่องพ่นละออง 0.25–1 mg วันละ 1–2 ครั้ง\""
  ],
  "bugs": [
    "แนวทางการติดตามผล แท็บ COPD: แสดงสถานะการสูบบุหรี่ตลอดเป็น \"เลิกสูบบุหรี่แล้ว (ไม่ได้สูบในปัจจุบัน)\" หากไม่เลือก ถือว่ายังสูบอยู่: แสดงคำแนะนำให้หยุดสูบบุหรี่ (แนะนำทุกครั้งที่นัด ให้คำปรึกษาร่วมกับยาช่วยเลิกบุหรี่)",
    "ตัวเลือกในแนวทางการติดตามผลใช้สีตามความหมาย: เขียวสำหรับสิ่งที่ดี (อาการน้อย ไม่มีการกำเริบ ตอบสนองดี ควบคุมได้ดี) เหลืองอำพันสำหรับระดับกลาง (เหนื่อย eosinophils 100–299 กลุ่ม B) แดงสำหรับความรุนแรง (อาการมาก มีการกำเริบ eosinophils ≥ 300 กลุ่ม E คำตอบที่บ่งว่าหืดควบคุมไม่ได้ การสูบบุหรี่ และปัญหาจาก ICS) ส่วนตัวเลือกการรักษา แนวทาง และขั้นเป็นสีกลาง",
    "แนวทางการติดตามผล: ช่องค้นหายาสูดค้นหาตามกลุ่มยาได้ด้วย (เช่น LAMA, LABA/LAMA, ICS) โดยแสดงกลุ่มที่ตรงกันพอดีก่อน แท็บ COPD: ย้าย eosinophils ในเลือดไปอยู่ในการประเมินกลุ่ม GOLD และแสดงตลอด",
    "แนวทางการติดตามผล แท็บ COPD: การประเมินกลุ่ม GOLD อยู่ก่อน และการรักษาปัจจุบันอยู่ด้านล่าง",
    "แนวทางการติดตามผล แท็บโรคหืด: การรักษาปัจจุบันอยู่ใต้แนวทางปัจจุบัน (แนวทาง → การรักษาปัจจุบัน → ขั้น GINA และคำถามการควบคุมอาการ)",
    "ตรวจสอบตรรกะของแนวทางการติดตามผลกับ GINA 2026 และ GOLD 2026 โรคหืด: การลดยาจากขั้นที่ 5 แสดงทางเลือกของ Box 4-13 สำหรับ ICS-LABA ขนาดสูง (แนวทางที่ 2) และการลดขนาด 25–50% สำหรับ MART ขนาดสูง (แนวทางที่ 1) ใส่การใช้ ICS ทุกครั้งที่ใช้ SABA ได้และระบุเป็นขั้นที่ 1 (ไม่เตือนว่าใช้ SABA อย่างเดียว) เมื่อมี SABA ในรายการ ยาสูด ICS-formoterol จะตั้งเป็นยาควบคุมโดยใช้ SABA เป็นยาบรรเทา (แนวทางที่ 2) COPD: เพิ่มตัวเลือกการรักษาปัจจุบัน \"ยาออกฤทธิ์สั้นอย่างเดียว\" และ \"ICS อย่างเดียว\" พร้อมยาเริ่มต้นของ GOLD ตามกลุ่ม (กลุ่ม A แสดงยาสูด LABA หรือ LAMA) แทนคำแนะนำสำหรับ LABA + LAMA",
    "แนวทางการติดตามผล: การรักษาปัจจุบันแสดงทั้งในแท็บโรคหืดและ COPD (เดิมหายไปในแท็บ COPD) เปิดที่แท็บตามข้อบ่งใช้ของยา (เช่น Anoro เปิดที่ COPD) ยาที่ไม่มีข้อบ่งใช้สำหรับแท็บที่เปิดอยู่จะมีป้าย \"ไม่มีข้อบ่งใช้\" พร้อมคำเตือน (รวมคำเตือนของ GINA เรื่อง LABA โดยไม่มี ICS ในโรคหืด) และไม่นำมาใช้ระบุในแท็บนั้น ค้นหาและเพิ่มยาสูดได้สูงสุด 5 ตัว หรือลบยาได้ภายในแนวทาง ไม่ว่าจะเลือกยาจากหน้าหลักหรือไม่",
    "แนวทางการติดตามผลเตือนเมื่อเลือกทั้ง ICS-formoterol และ SABA เป็นยาบรรเทา (ใน MART ใช้ ICS-formoterol แทน SABA)",
    "ไอคอนเครื่องพ่นละอองใหม่: หน้ากาก ถ้วยยา (สีตามผลิตภัณฑ์) สายยาง และเครื่องอัดอากาศ",
    "ตรวจสอบคู่มือการใช้อุปกรณ์กับ GINA 2026 และเอกสารกำกับยา MDI: เขย่าทันทีก่อนกดทุกครั้ง (GINA แนะนำสำหรับ pMDI ทุกชนิด ยกเว้น QVAR RediHaler) การพ่นทิ้งเป็นไปตามเอกสารกำกับยาแต่ละตัว (เช่น Ventolin 2 ครั้งเมื่อไม่ได้ใช้ 5 วัน Foster 1 ครั้งเมื่อไม่ได้ใช้ 14 วัน) และการหายใจปกติผ่าน spacer คือ 5–6 ครั้ง ทุกหน้าของอุปกรณ์มีหลักการสอนของ GINA (ให้ผู้ป่วยสาธิต ใช้รายการตรวจ สาธิตให้ดู ตรวจซ้ำทุกครั้งที่นัด หลีกเลี่ยงการใช้อุปกรณ์ต่างชนิดกัน) อุปกรณ์อื่นตรงกับเอกสารกำกับยาอยู่แล้ว",
    "ลิงก์ \"เป็นเครื่องมือช่วยตัดสินใจเท่านั้น\" ย้ายไปอยู่ใต้ \"Made by Warodom Phaenthong, M.D.\" และข้อจำกัดความรับผิดชอบระบุว่าคู่มือนี้สำหรับผู้ใหญ่เท่านั้น",
    "เปลี่ยนชื่อแนวทางการรักษาเป็น \"แนวทางยาควบคุมเริ่มต้น\" (ใช้เลือกยาเมื่อเริ่มการรักษา คำบรรยายใต้หัวข้อแนะนำให้ใช้แนวทางการติดตามผลสำหรับผู้ที่รักษาอยู่แล้ว)",
    "รวมแนวทางการลดสเต็ปยาเข้ากับแนวทางการติดตามผล และนำปุ่มส่วนหัวออก แท็บโรคหืด: เมื่อลดยาจะแสดงหลักการว่าเมื่อไรและอย่างไรตาม GINA ครบทุกข้อ และมีแนวทางการลดยาแบบย่อ/ขยายได้ซึ่งมีตาราง Box 4-13 ทั้งหมดและเน้นแถวของการรักษาปัจจุบัน แท็บ COPD: มีส่วนการหยุดสเตียรอยด์ชนิดสูดตาม GOLD 2026 แบบย่อ/ขยายได้ ซึ่งเปิดเองเมื่อการรักษาปัจจุบันมี ICS",
    "ตรวจสอบแนวทางภาวะกำเริบกับ GINA 2026 และ GOLD 2026 โรคหืด: รายการยาสำหรับระดับเล็กน้อย/ปานกลางเพิ่ม budesonide-formoterol 160/4.5 (ทางเลือกแทน salbutamol ตาม GINA) และยาสูด ipratropium ชนิดพกพา ย้าย budesonide ชนิดพ่นละอองไปอยู่ในรายการระดับรุนแรง (ห้องฉุกเฉิน) ให้ ipratropium ได้ถึง 3 ครั้ง เพิ่มข้อควรหลีกเลี่ยงของ GINA (ไม่ส่งเอกซเรย์ทรวงอก ก๊าซในเลือด หรือให้ยาปฏิชีวนะเป็นประจำ ห้ามใช้ยากล่อมประสาท พิจารณาสาเหตุอื่น ให้ epinephrine ก่อนเมื่อมี anaphylaxis) เกณฑ์กลับบ้านเพิ่มความพร้อมที่บ้าน MART ขั้นที่ 4 หรือ ICS-LABA ขนาดปานกลาง ใช้ยาบรรเทาเมื่อมีอาการเท่านั้น แผนปฏิบัติการชั่วคราว และการส่งต่อผู้เชี่ยวชาญเร็ว COPD: ความรุนแรงใช้เกณฑ์ Rome ของ GOLD 2026 ใช้อากาศขับเครื่องพ่นละอองแทนออกซิเจน ใช้ยาขยายหลอดลมชนิดออกฤทธิ์ยาวต่อ ไม่แนะนำ methylxanthines ทางหลอดเลือดดำ และแก้การช่วยหายใจเป็น ให้ออกซิเจนแบบควบคุมก่อน NIV เป็นอันดับแรกในภาวะหายใจล้มเหลว และ HFNT เมื่อออกซิเจนยังต่ำหรือทนต่อ NIV ไม่ได้",
    "แนวทางยาควบคุมไม่แสดงยาพ่นละออง (เช่น Salbutamol Nebules, Berodual Nebules, Pulmicort Respules) เป็นยาควบคุมหรือยาบรรเทาอาการสำหรับโรคหืดและ COPD อีกต่อไป เนื่องจากใช้เฉพาะในโรงพยาบาล ยังคงแสดงในแนวทางการรักษาภาวะกำเริบและรายการยา",
    "รายการยาในแนวทางยาควบคุมเลือกยาตามระดับขนาดยาของ GINA ที่ขนาดยาของยานั้นๆ ให้ได้จริง แทนการใช้ป้ายระดับขนาดยาเดียว MART ขนาดต่ำ (แนวทางที่ 1 ขั้นที่ 1–3) แสดง Symbicort Turbuhaler/Rapihaler 160/4.5 และ Bufomix 160/4.5 (สูด 1 ครั้ง วันละ 2 ครั้ง) และไม่แนะนำความแรง 80/4.5 ซึ่งเป็นขนาดสำหรับเด็กในผู้ที่อายุ 12 ปีขึ้นไป (GINA 2026 Table 7) รายการ ICS ขนาดต่ำรวม Giona 200 และ Flixotide 125 ที่สูด 1 ครั้ง วันละ 2 ครั้ง และไม่แนะนำ budesonide ชนิดพ่นละอองในผู้ที่อายุ 12 ปีขึ้นไป (GINA ไม่มีเกณฑ์ขนาดยา)",
    "แนวทางยาควบคุมใช้ประวัติการกำเริบตาม GINA 2026: การกำเริบในปีที่ผ่านมาทำให้ขั้นสูงขึ้นเฉพาะเมื่อร่วมกับอาการทุกวันหรือตื่นกลางดึก (ขั้นที่ 4) หากมีเพียงอย่างเดียวจะไม่เลื่อนเป็นขั้นที่ 3 อีกต่อไป แต่แผนการรักษาจะแสดงหมายเหตุความเสี่ยงต่อการกำเริบ (ใช้การรักษาที่มี ICS แนะนำแนวทางที่ 1 ให้แผนปฏิบัติการเป็นลายลักษณ์อักษร และนัดติดตามบ่อยขึ้น)",
    "ตรวจสอบแนวทางยาควบคุมกับ GINA 2026 (Table 3 / Box 4-4) และ GOLD 2026 ตัวเลือกอาการหืดใช้ถ้อยคำตาม GINA 2026: 2 วัน/สัปดาห์ หรือน้อยกว่า (ขั้นที่ 1) มากกว่า 2 แต่น้อยกว่า 3–5 วัน/สัปดาห์ (ขั้นที่ 2) เกือบทุกวัน เช่น 4 วัน/สัปดาห์ (ขั้นที่ 3) และอาการทุกวันหรือตื่นกลางดึก ≥ 1 ครั้ง/สัปดาห์ ขั้นที่ 4 (ขนาดปานกลาง) ต้องมีอาการทุกวันหรือตื่นกลางดึก ร่วมกับสมรรถภาพปอดต่ำหรือกำเริบเร็วๆ นี้ ส่วนอาการเกือบทุกวันร่วมกับสมรรถภาพปอดต่ำยังเป็นขั้นที่ 3 (MART ขนาดต่ำ) ตาม GINA แนวทางที่ 2 ขั้นที่ 3 เพิ่มทางเลือกของ GINA คือ ICS ขนาดปานกลางทุกวัน และแสดงยา ICS ขนาดปานกลางต่อจากตัวเลือก ICS-LABA ขนาดต่ำ ส่วน COPD (GOLD กลุ่ม A, B และ E และเกณฑ์ eosinophil สำหรับยาสามตัว) ถูกต้องอยู่แล้ว",
    "จัดลำดับปุ่มส่วนหัวใหม่: คู่มืออุปกรณ์อยู่ถัดจาก Spacer และหน้ากาก",
    "ปุ่มเวอร์ชัน ภาษา และธีมที่มุมขวาบนไม่แสดงทับหน้าต่างป๊อปอัปอีกต่อไป แสดงเฉพาะในหน้าหลัก",
    "การเปลี่ยนยา: เมื่อแสดงความแรงที่แนะนำ ส่วน \"สิ่งที่เปลี่ยนแปลง\" และ \"คำแนะนำในการเปลี่ยนยา\" จะอธิบายตามความแรงนั้น (เช่น ICS 100 → 500 mcg/วัน สำหรับ Seretide Accuhaler 50/250 ไม่มีข้อความเรื่องเปลี่ยนระดับขนาดยา) และระบุว่าหมายถึงยาตัวใด",
    "การเปลี่ยนยา: เมื่อยาที่เลือกไม่มีขนาดในระดับ ICS เดิม แต่ความแรงอื่นของยี่ห้อและอุปกรณ์เดียวกันมี (เช่น Relvar 100 ระดับปานกลาง → Seretide Accuhaler 50/100) ยาที่เลือกจะแสดงเป็นสีเทา และแสดงความแรงที่แนะนำด้านล่างเป็นการ์ดเต็มพร้อมขนาดยา ระดับตาม GINA และ ICS mcg/วัน (Seretide Accuhaler 50/250 สูด 1 ครั้ง วันละ 2 ครั้ง)",
    "แนวทางการลดสเต็ปยา COPD: แก้เกณฑ์การหยุด ICS ให้ตรงกับ 4 เหตุผลของ GOLD 2026 (เริ่มใช้โดยไม่มีข้อบ่งชี้ ไม่ตอบสนอง ผลข้างเคียงที่สำคัญ ปอดอักเสบรุนแรงหรือเป็นซ้ำ) เพิ่มคำแนะนำของ GOLD สำหรับผู้ที่ใช้ LABA+ICS และลบข้อความ 'โดยทั่วไปไม่แนะนำให้ลด LABA/LAMA' ซึ่งไม่ใช่ข้อความของ GOLD (GOLD ระบุว่าการศึกษาเรื่องการลดยาศึกษาเฉพาะ ICS)",
    "รูปภาพในมุมมองรายการยามีขนาดใหญ่ขึ้น",
    "การเรียงตามชนิดอุปกรณ์จัดกลุ่มตามชื่ออุปกรณ์เรียงตามตัวอักษร (Breezhaler, Diskus, Easyhaler, Ellipta, Handihaler, MDI, Nebulizer, Respimat, Turbuhaler) แล้วเรียงตามชื่อการค้า A–Z ในแต่ละอุปกรณ์ เดิมเรียงตามประเภทกว้าง (DPI / MDI / SMI)",
    "ประเทศแสดงด้วยสีต่างกัน: TH เขียว US น้ำเงิน UK ชมพูแดง EU เหลืองอำพัน ทั้งในตัวกรองประเทศและป้ายประเทศบนการ์ดยาแต่ละใบ",
    "เอกสารอ้างอิงเป็นส่วนที่ย่อ/ขยายได้ท้ายหน้า ปิดไว้เป็นค่าเริ่มต้นและแสดงจำนวนเอกสาร แตะที่หัวข้อเพื่อเปิดหรือปิดรายการทั้งหมด",
    "ข้อควรระวังแสดงเป็นสัญลักษณ์ ⚠ ข้างป้ายหืด/COPD (และในแถวรายการ) คลิกเพื่อดูข้อควรระวังทั้งหมดในหน้าต่างเล็ก คลิกที่อื่น เลื่อนหน้า หรือกด Escape เพื่อปิด",
    "Salbutamol ระบุใช้ได้ทั้งหืดและ COPD ในทุกผลิตภัณฑ์: Aerotamol (salbutamol MDI ชื่อสามัญ) แสดง COPD ด้วย แม้ฉลากในไทยระบุเฉพาะหืด",
    "ยืนยันฉลาก EU ของ Seebri Breezhaler ว่าใช้ใน COPD (EMA)",
    "ตรวจสอบฉลาก UK/EU กับ SmPC สำหรับยาที่เหลือ ฉลาก EU (ไอร์แลนด์) ระบุ COPD สำหรับ Flixotide Evohaler 50/125/250 และ Pulmicort Turbuhaler 100/200 (ฉลาก UK ยังเป็นเฉพาะหืด) ที่ยืนยันว่าไม่เปลี่ยน: Symbicort Turbuhaler 100/6 หืด, 200/6 และ 400/12 หืดและ COPD; Fostair 100/6 หืดและ COPD; Spiriva HandiHaler, Spiolto, Anoro, Ultibro, Onbrez และ Trixeo ใช้ใน COPD; salbutamol แบบพ่นละอองใช้ได้ทั้งหืดและ COPD",
    "วิธีใช้ MDI: ยืนยันการพ่นทดสอบ 2 ครั้งเมื่อไม่ได้ใช้ 5 วัน จากเอกสารกำกับยา Ventolin Evohaler",
    "ปรับปรุงโค้ด: ลบข้อความและฟังก์ชันที่เหลือจากปุ่มการจำหน่ายและฉลากเดิม (ไม่มีผลต่อการแสดงผล)",
    "ตรวจสอบวิธีใช้อุปกรณ์กับเอกสารกำกับยาสำหรับผู้ป่วย: Turbuhaler ไม่มีขั้นกลั้นหายใจ (ค่อยๆ หายใจออก) และฐานยังมีเสียงคลิกแม้ยาหมด Ellipta กลั้นหายใจอย่างน้อย 3–4 วินาที Easyhaler อย่างน้อย 5 วินาที พร้อมวิธีเทผงยาเมื่อกดคลิกซ้ำและเก็บให้แห้ง Breezhaler ถือให้ปุ่มด้านข้างหันซ้าย-ขวา Respimat เตรียมใหม่เมื่อไม่ได้ใช้ 7 และ 21 วัน MDI พ่นทดสอบ 2 ครั้งเมื่อเป็นหลอดใหม่หรือไม่ได้ใช้ 5 วัน",
    "ยาที่ไม่มีทะเบียนทั้งในไทยและสหรัฐฯ ใช้ข้อบ่งใช้ตามฉลากของสหราชอาณาจักร/สหภาพยุโรป (SmPC ตรวจสอบ 8 ต.ค. 2569) ที่เปลี่ยนเป็นเฉพาะโรคหืด: Foster 200/6 (Fostair 200/6 ในสหราชอาณาจักร ข้อบ่งใช้ COPD มีเฉพาะ 100/6) และ Giona Easyhaler 100 mcg (Easyhaler Budesonide ในสหราชอาณาจักร) ที่ตรงอยู่แล้ว: Flutiform (หืด ไม่มีข้อมูลใน COPD), Bufomix Easyhaler 160/4.5 (หืดและ COPD ตาม SmPC ไอร์แลนด์) และ Bricanyl Turbuhaler (หืด)",
    "ยาที่ไม่มีทะเบียนในไทยใช้ข้อบ่งใช้ตามฉลากของ US FDA (openFDA / Drugs@FDA ตรวจสอบ 8 ต.ค. 2569) ที่เปลี่ยนเป็นเฉพาะโรคหืด: Flixotide Evohaler 50 และ 250 (Flovent HFA ในสหรัฐฯ) Pulmicort Turbuhaler 100 และ 200 (Pulmicort Flexhaler ในสหรัฐฯ) และ Symbicort Rapihaler 80/4.5 (ขนาดสำหรับ COPD ในสหรัฐฯ คือ 160/4.5 เท่านั้น) ที่ตรงอยู่แล้ว: Combivent Respimat และ Atrovent HFA (COPD), QVAR RediHaler (หืด), Serevent Diskus (หืดและ COPD), Onbrez, Seebri และ Ultibro Breezhaler (COPD; รุ่น Neohaler ในสหรัฐฯ เลิกจำหน่ายแล้ว) ที่ไม่มีจำหน่ายในสหรัฐฯ คงข้อบ่งใช้เดิม: Bricanyl Turbuhaler, Foster 200/6, Flutiform, Bufomix Easyhaler และ Giona Easyhaler 100 mcg",
    "ข้อบ่งใช้หืด/COPD ของยาแต่ละรายการเป็นไปตามฉลากที่ขึ้นทะเบียนกับ อย. (ตรวจสอบ 8 ต.ค. 2569) ที่เปลี่ยน: Aerotamol MDI, Flixotide Evohaler 125 และ Symbicort Turbuhaler 80/4.5 ใช้เฉพาะโรคหืด ส่วน Relvar Ellipta 200/25 ใช้ได้ทั้งโรคหืดและ COPD ยาอื่นที่มีทะเบียนในไทยตรงกับฉลากอยู่แล้ว ยาที่ไม่มีทะเบียนในไทยคงข้อบ่งใช้ตามฉลากเดิม",
    "ตรวจสอบ GINA Track 2 กับ GINA 2026 Figure 7: ขั้นที่ 4 คือ ICS-LABA ขนาดปานกลาง (ขนาดสูงใช้ในขั้นที่ 5 เท่านั้น) และทุกขั้นระบุว่าควรใช้ ICS-SABA แทน SABA เป็นยาบรรเทาอาการหากมี (budesonide-salbutamol ยังไม่มีทะเบียนในไทย) รายการยาขั้นที่ 4 ไม่แสดงยาที่มีเฉพาะขนาดสูงแล้ว",
    "ตรวจสอบ MART กับ GINA 2026 Table 7: ขั้นที่ 3 สูด 1 ครั้ง วันละ 2 ครั้ง ขั้นที่ 4–5 สูด 2 ครั้ง วันละ 2 ครั้ง รวมไม่เกิน 12 ครั้งต่อวัน Foster 100/6 แสดงสูงสุด 8 ครั้ง (ตามฉลาก) โดย GINA อนุญาตได้ถึง 12 ครั้งชั่วคราว",
    "เกณฑ์การรับไว้ในโรงพยาบาล (หืด) ปรับตาม GINA 2026: สภาพผู้ป่วย 1 ชั่วโมงหลังเริ่มรักษาทำนายการต้องนอนโรงพยาบาลได้ดีกว่าสภาพแรกรับ เพิ่มปัจจัยทำนายของ GINA (ความรุนแรง ประวัติกำเริบรุนแรง การได้สเตียรอยด์ชนิดกินเมื่อเร็วๆ นี้ ใช้ยาบรรเทาอาการ > 8 พัฟใน 24 ชม. เพศหญิง อายุมาก ฐานะทางเศรษฐกิจ) เกณฑ์ PEF < 60% เดิมไม่มีใน GINA แล้ว",
    "Giona Easyhaler 200 mcg: ยืนยันขนาดบรรจุ 200 doses (อย. 1C 74/62) และจำกัดข้อบ่งใช้เป็นโรคหืดตามฉลากในไทย"
  ]
 },
 "v1.10.11": {
  "features": [
    "เพิ่ม Giona Easyhaler 200 (budesonide 200 mcg, 200 doses; มีทะเบียน อย. อยู่ในบัญชียาหลัก ก): ขนาดต่ำ 1 ปานกลาง 2 สูง 4 ครั้ง วันละ 2 ครั้ง ช่วงราคา ฿฿ (ประมาณ 334 บาท/เดือน ที่ขนาดปานกลาง)",
    "เพิ่มแนวทางการให้ออกซิเจนของ BTS 2017 ในเอกสารอ้างอิง",
    "ปุ่มเลือกการจำหน่าย (ไทย / ต่างประเทศ) ค่าเริ่มต้นเป็นไทย: แสดงเฉพาะยาที่มีทะเบียน อย. ที่ยังคงอยู่ \"ต่างประเทศ\" แสดงยาทั้งหมดในฐานข้อมูล โดยมีป้าย \"ไม่มีในไทย\" บนยา 18 รายการที่ไม่มีทะเบียน แนวทางการรักษา แนวทางเมื่อกำเริบ และยาที่ใช้แทนกันได้ ใช้การตั้งค่าเดียวกัน",
    "ช่วงราคาคิดต่อเดือนที่ขนาดยาควบคุมอาการตามปกติ (ยาบรรเทาอาการคิดต่อหน่วยบรรจุ) จากราคากลางยา: ฿ < 300, ฿฿ 300–599, ฿฿฿ 600–999, ฿฿฿฿ ≥ 1,000 บาท",
    "เงื่อนไขบัญชียาหลัก (Anoro, Spiolto: เกณฑ์ COPD group B) แสดงใต้ชื่อยาในแนวทางการรักษาและแนวทางเมื่อกำเริบ และเป็นคำเตือนในคู่มือการเปลี่ยนยา",
    "เพิ่มเอกสารอ้างอิง 4 รายการ: Weers 2022, Grant 2015 และ Haikarainen 2018 (แรงสูด) และฐานข้อมูลผลิตภัณฑ์ยาของ อย. (การมีจำหน่าย)",
    "แถบเครื่องช่วยหายใจสั้นลง: MDI แสดง \"ขนาดยา: 2 เท่าของจำนวนพัฟ\" และ SMI แสดง \"ไม่มีขนาดที่กำหนด\" ชี้หรือแตะที่ข้อความเพื่อดูคำอธิบายเต็มพร้อมแหล่งอ้างอิง (เทคนิค หลักฐาน และทางเลือก)",
    "ช่วงราคามาจากราคากลางยาของประเทศ (ศูนย์ข้อมูลข่าวสารด้านเวชภัณฑ์ กระทรวงสาธารณสุข) สำหรับยา 33 จาก 46 รายการ ต่อหน่วยบรรจุ: ฿ < 250, ฿฿ 250–599, ฿฿฿ 600–999, ฿฿฿฿ ≥ 1,000 บาท โดยยังไม่แสดงราคาจริง",
    "ยาที่ไม่มีราคากลาง (13 รายการ) แสดงช่วงราคาแบบจางพร้อมเครื่องหมาย ~ เป็นค่าประมาณ",
    "เพิ่ม Trelegy Ellipta 200/62.5/25 mcg (fluticasone furoate 200 / umeclidinium 62.5 / vilanterol 25) สูดวันละ 1 ครั้ง: เฉพาะโรคหืด ICS ขนาดสูง และเปลี่ยนชื่อรายการเดิมเป็น Trelegy Ellipta 100/62.5/25 mcg",
    "อายุยาหลังเปิดใช้มีหัวข้อของตัวเองบนการ์ดยา หน้าต่างเปรียบเทียบ และการ์ดส่งออก แทนการรวมหัวข้อกับจำนวนโดส",
    "คำแนะนำเครื่องช่วยหายใจมีแหล่งอ้างอิงแล้ว: ขนาด MDI จาก Dhand et al. 1996 และการนำส่ง SMI จาก Fang et al. 2020",
    "โหลดเร็วขึ้น: แอปคอมไพล์ครั้งเดียวตอนสร้างไฟล์ แทนการคอมไพล์ในเบราว์เซอร์ทุกครั้ง ไม่ต้องดาวน์โหลด Babel (ประมาณ 3 MB) และ Tailwind runtime อีก สไตล์ทั้งหมดเป็นไฟล์ขนาด 42 KB",
    "มีการทดสอบอัตโนมัติ (49 รายการผ่านหน้าจอจริง) หลังสร้างไฟล์ทุกครั้ง",
    "ส่วนข้อจำกัดความรับผิดชอบในหน้าหลัก (มีลิงก์จากส่วนหัว) ระบุว่าเป็นเครื่องมือช่วยตัดสินใจสำหรับบุคลากรทางการแพทย์ ช่วงอายุ วิธีคิดช่วงราคา และฉบับของแนวทางเวชปฏิบัติพร้อมวันที่ทบทวน",
    "แนวทางการรักษาแสดงยาทุกรายการที่ตรงเงื่อนไข เรียงตามสถานะบัญชียาหลัก (ก ก่อน) แล้วตามช่วงราคาที่ต่ำกว่า แสดง 3 รายการแรก พร้อมปุ่ม 'แสดงทั้งหมด'",
    "ราคาแสดงเป็นช่วงราคาเท่านั้น ($ ถึง $$$$ ในภาษาอังกฤษ, ฿ ถึง ฿฿฿฿ ในภาษาไทย) ไม่แสดงราคาจริงเพราะแตกต่างกันมากในแต่ละโรงพยาบาล",
    "Anoro Ellipta และ Spiolto Respimat ใช้ราคาที่ต่อรองได้ตามบัญชียาหลัก ทำให้ย้ายจากช่วงราคาสูงสุดมาเป็นช่วงต่ำสุดและต่ำรองลงมา",
    "การค้นหาตรงกับทุกการสะกดของชื่อยา: salbutamol พบยาที่ใช้ชื่อ albuterol (Ventolin, ยาพ่นละออง, Combivent) beclometasone พบ QVAR glycopyrronium พบ Breztri และในทางกลับกัน",
    "ตัวกรองแรงสูด: ใส่ค่าแรงสูดสูงสุดของผู้ป่วย (L/min) ในแถบตัวกรองเพื่อซ่อนอุปกรณ์ที่ต้องใช้แรงสูดมากกว่า บรรทัดใต้จำนวนยาแสดงสิ่งที่ถูกซ่อน",
    "วิธีใช้อุปกรณ์สร้างใหม่เป็นการ์ดสำหรับแต่ละอุปกรณ์ (MDI กับ spacer, Respimat, Turbuhaler, Accuhaler, Ellipta, Easyhaler, HandiHaler, Breezhaler, nebulizer): ขั้นตอนเป็นข้อ ข้อผิดพลาดที่พบบ่อย และเคล็ดลับ ทั้งภาษาอังกฤษและไทย",
    "เอกสารสำหรับผู้ป่วย: เลือกยา 1 รายการแล้วกด Patient Sheet เพื่อพิมพ์เอกสารภาษาไทยหรืออังกฤษ ครอบคลุมขนาดยา วิธีใช้อุปกรณ์ การบ้วนปาก แผนการใช้ยาบรรเทาอาการ เมื่อใดควรพบแพทย์ และเมื่อใดควรไปโรงพยาบาล (1669) พิมพ์หรือบันทึกเป็นรูปภาพได้",
    "สถานะบัญชียาหลักแห่งชาติ พ.ศ. 2569 บนยาทุกรายการ (ก / ข / ง / นอกบัญชี) พร้อมเงื่อนไขและราคาที่ต่อรองได้ในหน้าเปรียบเทียบ และตัวกรองเฉพาะบัญชียาหลัก",
    "ราคาแสดงเป็นจำนวนเงินโดยประมาณเป็นบาท (฿) แทนสัญลักษณ์ $",
    "ระบุว่าขนาดยาสำหรับอายุ 12 ปีขึ้นไปในทุกช่วงขนาดยา",
    "ส่วนเอกสารอ้างอิงท้ายหน้า ระบุแหล่งข้อมูลของแต่ละส่วนในแอป",
    "ยาที่ใช้แทนกันได้: เลือกยา 1 รายการแล้วกด Equivalent Drugs เพื่อดูยาทุกตัวที่เปลี่ยนไปใช้ได้ ยาที่เทียบเท่าโดยตรง (กลุ่มยาเดียวกัน) แสดงก่อนพร้อมขนาดยาที่ระดับ ICS ตาม GINA เดียวกัน ตามด้วยตัวเลือกอื่นที่มีบทบาทเดียวกัน (เปลี่ยนกลุ่มยา) กรองตามหืดหรือ COPD และเปิดคู่มือการเปลี่ยนยาฉบับเต็มได้ในคลิกเดียว",
    "คู่มือการเปลี่ยนยา: เลือกยา 2 รายการแล้วกด Dose Conversion เพื่อดูวิธีเปลี่ยนจากยาหนึ่งไปอีกยาหนึ่ง จับคู่ ICS ตามระดับขนาดยาของ GINA (ต่ำ/ปานกลาง/สูง) พร้อม mcg/วัน และแนะนำระดับที่ใกล้ที่สุดหรือความแรงอื่นของยี่ห้อเดียวกันเมื่อจำเป็น",
    "คู่มือแสดงส่วนประกอบที่ใช้ต่อ เริ่มใหม่ หรือหยุด (ICS, LABA, LAMA, SABA, SAMA) และหลักการเปลี่ยนยาตามหืด (GINA) หรือ COPD (GOLD): LABA/LAMA ที่ไม่มี ICS ในหืด การหยุดหรือเพิ่ม ICS ใน COPD การเปลี่ยน MART แรงสูดและเทคนิคการใช้อุปกรณ์ การใช้กับเครื่องช่วยหายใจ ความถี่ในการให้ยา เวลาของโดสแรก และการติดตาม",
    "ปุ่มสลับกลับทิศทางการเปลี่ยนยา และปุ่มหืด/COPD เปลี่ยนหลักการของแนวทางที่ใช้"
  ],
  "bugs": [
    "ยืนยันแล้วว่า Foster 200/6 ไม่มีจำหน่ายในไทย",
    "โทรศัพท์มือถือ: ปุ่มเลือกการจำหน่าย (Availability) อยู่ลำดับแรกของแถบตัวกรอง มองเห็นได้โดยไม่ต้องเลื่อน และหน้าเว็บกำหนด viewport สำหรับมือถือแล้ว (เดิมแสดงกว้าง 980 px เมื่อเปิดไฟล์บนโทรศัพท์โดยตรง)",
    "ชื่อ Giona Easyhaler ระบุหน่วยแล้ว: Giona Easyhaler 100 mcg และ Giona Easyhaler 200 mcg",
    "Magnesium ทางหลอดเลือดดำ (หืดกำเริบรุนแรง) ปรับตามรายงาน GINA 2026 ฉบับเต็ม: ไม่ให้เป็นประจำ ให้ 2 g ใน 20 นาทีหากไม่ตอบสนองต่อการรักษาเบื้องต้นและยังมีออกซิเจนต่ำ การพ่น magnesium ไม่มีประโยชน์",
    "สเตียรอยด์ชนิดสูดในห้องฉุกเฉิน (หืดกำเริบรุนแรง): ลบขนาด \"พ่น budesonide 1–2 mg วันละ 2 ครั้ง\" ที่ไม่มีแหล่งอ้างอิง GINA 2026: ICS ขนาดสูงภายในชั่วโมงแรกลดการนอนโรงพยาบาลในผู้ป่วยที่ไม่ได้รับสเตียรอยด์ชนิดฉีด/กิน ยังไม่มีชนิดและขนาดยาที่แนะนำชัดเจน",
    "ออกซิเจนใน COPD: GOLD 2026 ระบุเพียง \"ให้ออกซิเจนแบบควบคุมปริมาณ\" ยังคงเป้าหมาย 88–92% ไว้ โดยอ้างอิงแนวทาง BTS 2017",
    "แรงสูดที่อุปกรณ์ DPI แต่ละชนิดต้องการมีแหล่งอ้างอิงแล้ว: HandiHaler ≥ 20, Turbuhaler / Accuhaler / Ellipta / Easyhaler ≥ 30, Breezhaler ≥ 50 L/min เดิม Turbuhaler และ HandiHaler ระบุ > 60 L/min ทำให้ตัวกรองแรงสูดซ่อนอุปกรณ์จากผู้ป่วยที่ใช้ได้จริง",
    "หืดกำเริบปรับตาม GINA 2026: เกณฑ์เล็กน้อย/ปานกลางกับรุนแรง ขนาด salbutamol (4 / 4–6 / 6–10 พัฟ) เป้าหมายออกซิเจน 92–95% ไม่จำเป็นต้องให้สเตียรอยด์ชนิดกินในการกำเริบเล็กน้อย เกณฑ์การจำหน่าย (O₂ Sat ≥ 92%, PEF > 70%) และนัดติดตามภายใน 2–7 วัน",
    "COPD ปรับตาม GOLD 2026: กลุ่ม E ที่ eosinophils ≥ 300 ใช้ LABA + LAMA และพิจารณายา 3 ชนิด (แสดงทั้งสองแบบ) กลุ่ม A คือ \"ยาขยายหลอดลม 1 ชนิด\" ยาปฏิชีวนะเมื่อเสมหะเป็นหนอง เคยเพาะเชื้อขึ้น หรือใช้เครื่องช่วยหายใจ 5 วัน ใช้ HFNT ก่อนในภาวะออกซิเจนต่ำ ข้อบ่งชี้ NIV และการใส่ท่อตรงกับ Figure 4.8–4.9 เกณฑ์การลด ICS ตรงกับ Figure 3.9 และแบบประเมิน CAT ระบุเป็น CAT / CAAT™",
    "การลดยาหืด: ควบคุมได้ดี 2–3 เดือน ลด ICS ลง 25–50% และห้ามหยุด ICS ทั้งหมดในผู้ใหญ่/วัยรุ่น (GINA 2026)",
    "เปลี่ยนชื่อยาแบบสหรัฐฯ เป็นชื่อที่ใช้ในไทย: Ventolin Evohaler 100 mcg, Salbutamol Nebules 2.5 mg และแสดงความแรงของ Breztri ตามฉลากในไทย (glycopyrronium 7.2 mcg)",
    "บันทึก v1.10.6 และคำอธิบายราคาแสดง \"$$\" แทนที่ควรเป็น \"$$$$\"",
    "SMI กับเครื่องช่วยหายใจไม่แนะนำให้เพิ่มขนาด 2–4 เท่าแล้ว: ไม่มีการศึกษาสนับสนุน และในหลอดทดลองยาถึงปอดน้อยกว่าการหายใจเองประมาณ 3 เท่า จึงแนะนำ MDI + spacer ในวงจร หรือ nebulizer แทน",
    "คำแนะนำ \"พิจารณาเปลี่ยน\" สำหรับอุปกรณ์ที่ใช้ผ่านเครื่องช่วยหายใจไม่ได้ ไม่แนะนำ SMI อีกต่อไป",
    "แนวทางการรักษาโรคหืด: สมรรถภาพปอดต่ำเพียงอย่างเดียวให้ผลเป็น GINA ขั้นที่ 3 แทนขั้นที่ 4 ตาม GINA 2026 Table 3 ขั้นที่ 4 (MART หรือ ICS-LABA ขนาดปานกลาง) ต้องมีอาการเกือบทุกวันหรือตื่นกลางคืน ร่วมกับสมรรถภาพปอดต่ำหรือเพิ่งมีการกำเริบ",
    "ปรับคำอธิบายเหตุผลของขั้นที่ 3 และ 4 ให้ตรงกับเกณฑ์ GINA 2026",
    "Relvar Ellipta 100/25 และ Trelegy Ellipta จัดเป็น ICS ขนาดต่ำถึงปานกลาง: GINA 2026 Table 6 ระบุ fluticasone furoate 100 mcg อยู่ทั้งช่องขนาดต่ำและปานกลาง (200 mcg เป็นขนาดสูง) เดิม Relvar 100/25 เป็นขนาดปานกลางเท่านั้น จึงไม่ปรากฏในคำแนะนำ ICS-LABA ขนาดต่ำ (GINA ขั้นที่ 3) และการเปลี่ยนยาที่ระดับขนาดต่ำ",
    "ยา ICS ขนาดคงที่ที่อยู่ในสองระดับขนาด นับว่าใช้ได้ทั้งสองระดับในคู่มือการเปลี่ยนยาและยาที่ใช้แทนกันได้",
    "ตัวอักษรทั้งหมดมีขนาดอย่างน้อย 10 px ป้ายขนาด 8–9 px เดิม (ชิป ป้าย รายละเอียดในรายการ) อ่านยากบนโทรศัพท์",
    "ปุ่มภาษาแสดงข้อความ 'ไทย' / 'EN' แทนธงอีโมจิ ซึ่ง Windows แสดงเป็นตัวอักษร 'TH TH'",
    "อุปกรณ์ที่แนะนำในแนวทางเมื่อกำเริบเลือกตามกฎ (กลุ่มยา ชนิดอุปกรณ์ และข้อบ่งใช้) แทนรหัสยาที่กำหนดตายตัว จึงยังถูกต้องเมื่อเพิ่มหรือลบยา หืด: SABA และพ่น budesonide แบบละออง COPD: SABA ± SAMA และพ่น budesonide แบบละออง การกำเริบรุนแรงแสดงยาพ่นแบบละออง",
    "ยาบรรเทาอาการในแนวทางการรักษาและตัวเลือกสำหรับ COPD จำกัดเฉพาะยาที่มีข้อบ่งใช้ในโรคนั้น (เช่น Bricanyl ซึ่งใช้เฉพาะโรคหืด ไม่แสดงใน COPD แล้ว)",
    "คู่มือการเปลี่ยนยา (หืด) เตือนเมื่อการเปลี่ยนยาตัด LABA ออกแต่ยังคง ICS เพราะการเปลี่ยนจาก ICS-LABA เป็น ICS เดี่ยวเท่ากับการลดขั้นการรักษาตาม GINA"
  ]
 },
 "v1.7.0": {
  "features": [
    "แสดงจำนวนผลลัพธ์เหนือรายการยา: \"แสดง X จาก Y รายการยา\" อัปเดตทันทีเมื่อค้นหา กรอง หรือล้างตัวกรอง",
    "วาดไอคอน Accuhaler/Diskus ใหม่ตามภาพต้นแบบ: เปลือกนอกสีอ่อนพร้อมที่จับนิ้วโป้งและเครื่องหมายครึ่งทาง ตัวเครื่องสีเข้มโค้งรอบช่องตัวนับโดสสีขาว และร่องจับแบบลอนคลื่น ใช้กับ Seretide Accuhaler และ Serevent Diskus",
    "วาดไอคอน HandiHaler ใหม่: ตัวเครื่องสีเทาโค้งมนพร้อมรอยต่อฝาและช่องมองแคปซูล ปุ่มเจาะพร้อมจุดสี และฝาครอบปากกระบอกสี",
    "ปรับสี Seretide Accuhaler และ Spiriva HandiHaler ให้ตรงกับสีม่วงและเขียวของภาพต้นแบบ",
    "โหมดสว่างและมืด: ปุ่มดวงอาทิตย์/ดวงจันทร์ข้างปุ่มภาษาใช้สลับธีม แอปใช้ค่าของอุปกรณ์จนกว่าจะเลือกเอง แล้วจำค่าที่เลือกไว้ การ์ด PNG ที่ส่งออกยังเป็นโหมดสว่างสำหรับพิมพ์และแชร์",
    "วาดไอคอน MDI ใหม่เป็นภาพแบนตามต้นแบบ: กระป๋องอะลูมิเนียมเอียง ตัวกดสีตามยาพร้อมขอบและด้านข้างที่แรเงา ปากกระบอก และฝาครอบกันฝุ่นแบบมีแถบ",
    "วาดไอคอน Respimat ใหม่: ฝาบานพร้อมกระบังด้านหน้า ตัวเครื่องสีเทาพร้อมปุ่มปล่อยยาด้านข้าง แถบสี และฐานใสพร้อมตลับยา",
    "วาดไอคอน Easyhaler ใหม่: ปุ่มกดโดสสีบนตัวเครื่องสีเทา พร้อมปากกระบอกแบบมีมิติ",
    "วาดไอคอน Breezhaler ใหม่: ฝาสีขาวมีเส้นขอบพร้อมรอยพับและจุดกันลื่น และฐานที่มีแผงด้านข้างสีตามยา",
    "ฝาครอบ ฉลาก และตัวนับของ Trelegy Ellipta สีเบจมีขอบเข้มขึ้นให้เด่นจากตัวเครื่องสีครีม Ellipta สีอ่อนที่เพิ่มในอนาคตจะได้ขอบนี้อัตโนมัติ ส่วน Anoro และ Relvar สีเข้มพอไม่ต้องมีขอบ",
    "วาดไอคอน Ellipta ใหม่เป็นภาพแบนตามภาพต้นแบบ: ตัวเครื่องสีครีม ฝาครอบรูปเลนส์มีร่อง ฉลากที่มุมซ้ายบนยกขึ้น แผงด้านหน้าสีขาวพร้อมตัวนับโดสและช่องมอง และรอยต่อด้านขวา ใช้กับ Anoro, Relvar และ Trelegy",
    "ปรับสี Anoro Ellipta เป็นสีแดงเข้มตามภาพต้นแบบ"
  ],
  "bugs": []
 },
 "v1.5.3": {
  "features": [
    "วาดไอคอน Ellipta ใหม่จากอุปกรณ์จริง: ตัวเครื่องทรงกรวด ร่องจับด้านซ้าย ฝาครอบมีร่องคลุมด้านบน ฉลากด้านหน้าสีเดียวกับฝา และช่องตัวนับโดส '30' ใช้กับ Anoro, Relvar และ Trelegy",
    "Anoro Ellipta ใช้สีฝาแดงเข้มตามจริงแทนสีแดงทั่วไป"
  ],
  "bugs": []
 },
 "v1.5.2": {
  "features": [
    "แปลภาษาไทยครบในหน้าต่างเปรียบเทียบ บันทึกการเปลี่ยนแปลง คำแนะนำเครื่องช่วยหายใจ และข้อความสถานะการส่งออก ไม่มีภาษาอังกฤษหลุดเมื่อเลือกภาษาไทย",
    "กด Escape เพื่อปิดหน้าต่างที่เปิดอยู่",
    "มุมมองแบบตารางกลับมาอัตโนมัติเมื่อขยายหน้าต่างแคบให้กว้างเกินขนาดมือถือ"
  ],
  "bugs": [
    "แก้ไขการจับคู่กลุ่มยากับตัวยาใน Trelegy Ellipta, Anoro Ellipta และ Spiolto Respimat ที่แสดง LABA และ LAMA สลับกัน",
    "แก้ไขแผง COPD กำเริบรุนแรงที่อ้างอิงรหัสยาที่ไม่มีอยู่ ซึ่งทำให้อุปกรณ์พ่นละอองที่แนะนำหายไป",
    "ปรับการจับคู่กลุ่มยาในระบบแนวทางการรักษาให้เข้มงวดขึ้น ยา 3 ชนิด (ICS/LABA/LAMA) จะไม่ถูกแนะนำในกรณีที่ควรใช้ ICS/LABA",
    "GINA Track 2 ขั้นที่ 1–2 ไม่แนะนำ ICS ขนาดสูงที่ขัดกับคำแนะนำขนาดต่ำอีกต่อไป",
    "GINA Track 1 แสดงขั้นที่ 2 เป็น 'ขั้นที่ 1-2' ตรงกับกล่องการรักษาที่รวมกัน",
    "คืนแอนิเมชันการแสดงผลที่หายไป และซ่อนแถบเลื่อนที่เกินมาในแถบตัวกรองแนวนอน",
    "การส่งออก PNG ใช้งานได้เมื่อเปิดแอปจากลิงก์ที่โฮสต์ไว้ ซึ่งวิธีดาวน์โหลดเดิมไม่ทำงาน"
  ]
 },
 "v1.5.1": {
  "features": [
    "ตัวระบุอนุภาคละเอียดพิเศษ: เพิ่มข้อมูลและป้าย (Extra-fine / อนุภาคละเอียดพิเศษ) แสดงอุปกรณ์ที่ให้ละอองละเอียดพิเศษ (เช่น Foster, Trimbow, QVAR) ในทุกมุมมอง"
  ],
  "bugs": []
 },
 "v1.5.0": {
  "features": [
    "แนวทางการลดสเต็ปยา: เพิ่มส่วนเกณฑ์การลด ICS อย่างปลอดภัยตาม GINA และ GOLD 2026",
    "วิธีใช้อุปกรณ์: เพิ่มหน้าต่างสอนขั้นตอนการใช้ MDI, DPI, SMI และ Nebulizer",
    "เหตุผลทางคลินิกทันที: แยกอัลกอริทึมให้แสดงเหตุผลของขั้น GINA/GOLD ทันทีที่เลือกอาการ",
    "แนวทางการรักษาแสดงแผนการรักษาด้วยยาทันทีเมื่อข้อมูลครบ ไม่ต้องกดปุ่ม 'Generate Plan'"
  ],
  "bugs": [
    "เขียนระบบส่งออก PNG ใหม่ทั้งหมด เพื่อหลีกเลี่ยงข้อจำกัดของ iframe sandbox และป้องกันการส่งออกล้มเหลวโดยไม่แจ้ง",
    "แก้ไขเลย์เอาต์บีบตัวระหว่างส่งออกรูปภาพ โดยเรนเดอร์นอกหน้าจอแทนการซ่อนด้วย clip-path"
  ]
 },
 "v1.2.8": {
  "features": [
    "เพิ่ม Trimbow MDI (beclometasone/formoterol/glycopyrronium) ในฐานข้อมูลยา 3 ชนิด",
    "เพิ่ม Giona Easyhaler (budesonide 100, 200 และ 400 mcg) ในฐานข้อมูลยา"
  ],
  "bugs": []
 },
 "v1.2.6": {
  "features": [
    "ปรับแถบเมนูลอยบนมือถือเป็นแบบกะทัดรัด 3 แถว พร้อมตัวกรองแนวนอนที่ปัดได้",
    "คืนตรรกะทางคลินิกของแนวทางการรักษาแบบเป็นขั้น",
    "เรนเดอร์แบบ 'Fixed-Offscreen' ป้องกันเลย์เอาต์บนมือถือเสียจากระบบสร้างรูปภาพ"
  ],
  "bugs": [
    "เลิกเรียงเลย์เอาต์ซ้อนแนวตั้ง เพื่อประหยัดพื้นที่หน้าจอบนอุปกรณ์ขนาดเล็ก",
    "แก้ไขหน้าจอว่างบนมือถือที่เกิดจากการเรียกฟังก์ชันที่ไม่ได้ประกาศ",
    "ลบการแทรก viewport ทาง DOM ที่ไม่เสถียร เพื่อใช้การปรับขนาดของเบราว์เซอร์มือถือ",
    "แก้ไขความไม่ตรงกันของ React hydration เมื่อตรวจขนาดหน้าจอครั้งแรก"
  ]
 }
};
const TH_MONTHS = {"January":"ม.ค.","February":"ก.พ.","March":"มี.ค.","April":"เม.ย.","May":"พ.ค.","June":"มิ.ย.","July":"ก.ค.","August":"ส.ค.","September":"ก.ย.","October":"ต.ค.","November":"พ.ย.","December":"ธ.ค."};
// "October 7, 2026" → "7 ต.ค. 2569"
const thaiDate = (d) => { const m = /^(\w+) (\d+), (\d{4})$/.exec(d); return m && TH_MONTHS[m[1]] ? `${m[2]} ${TH_MONTHS[m[1]]} ${+m[3] + 543}` : d; };

// --- Drug Database ---
// NOTE: `substance` components must be listed in the same order as the `class`
// string so RenderSubstances pairs them correctly.
const deviceData = [
  // --- SABAs ---
  { id: 1, type: 'MDI', shape: 'MDI', marketName: 'Ventolin Evohaler 100 mcg', substance: 'Salbutamol 100 mcg', class: 'SABA', instructions: '1-2 puffs PRN. Use with a spacer for best results.', hex: '#2563eb', tagColor: 'bg-blue-100 text-blue-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: '200 puffs', expiration: 'Until Expiry Date', doseRange: '1-2 puffs Q4-6H PRN (Max 8/day)', isMart: false, role: ['Reliever'], flowRate: '< 30 L/min', priceLevel: 1, hiddenPrice: 45.62, priceBasis: 'pack' }, // reliever, per pack from national reference price 45.62 THB per pack: Salbutamol MDI 100 mcg (200 doses)
  { id: 301, type: 'MDI', shape: 'MDI', marketName: 'Aerotamol MDI 100 mcg', substance: 'Salbutamol 100 mcg', class: 'SABA', instructions: '1-2 puffs PRN for acute symptoms.', hex: '#3b82f6', tagColor: 'bg-blue-100 text-blue-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: '200 puffs', expiration: 'Until Expiry Date', doseRange: '1-2 puffs PRN (Max 8/day)', isMart: false, role: ['Reliever'], flowRate: '< 30 L/min', priceLevel: 1, hiddenPrice: 45.62, priceBasis: 'pack' }, // reliever, per pack from national reference price 45.62 THB per pack: Salbutamol MDI 100 mcg (200 doses) // Thai label lists asthma; tagged asthma + COPD like all salbutamol (generic SABA used in both; author decision)
  { id: 422, type: 'MDI', shape: 'MDI', marketName: 'Salvo Inhaler 100 mcg', substance: 'Salbutamol 100 mcg', class: 'SABA', instructions: '1-2 puffs PRN for acute symptoms.', hex: '#4f8198', tagColor: 'bg-blue-100 text-blue-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: '200 puffs', expiration: 'Until Expiry Date', doseRange: '1-2 puffs PRN (Max 8/day)', isMart: false, role: ['Reliever'], flowRate: '< 30 L/min', priceLevel: 1, hiddenPrice: 45.62, priceBasis: 'pack' }, // Colours from the product picture supplied by the user on 11 Oct 2026 (Salvo Inhaler CFC-free, 200 doses: steel-blue actuator, dark dust cap). MIMS Thailand brand; Thai FDA 1C 166/55 (200 doses); reference price 45.62 THB per pack: Salbutamol MDI 100 mcg (200 doses)
  { id: 423, type: 'MDI', shape: 'MDI', marketName: 'Buto-Asma 100 mcg', substance: 'Salbutamol 100 mcg', class: 'SABA', instructions: '1-2 puffs PRN for acute symptoms.', hex: '#2f6fce', tagColor: 'bg-blue-100 text-blue-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: '200 puffs', expiration: 'Until Expiry Date', doseRange: '1-2 puffs PRN (Max 8/day)', isMart: false, role: ['Reliever'], flowRate: '< 30 L/min', priceLevel: 1, hiddenPrice: 45.62, priceBasis: 'pack' }, // Colours from Aldo-Union Buto-Asma pack photos (aldo-union.com, thuocsi.vn), seen 11 Oct 2026: blue actuator, navy dust cap. MIMS Thailand brand; Thai FDA 1B 6/47, 1C 238/46 (Aldo-Union, Spain); reference price 45.62 THB per pack: Salbutamol MDI 100 mcg (200 doses)
  { id: 441, type: 'MDI', shape: 'MDI', marketName: 'Asthalin Inhaler 100 mcg', substance: 'Salbutamol 100 mcg', class: 'SABA', instructions: '1-2 puffs PRN for acute symptoms.', hex: '#2b7de0', tagColor: 'bg-blue-100 text-blue-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: '200 puffs', expiration: 'Until Expiry Date', doseRange: '1-2 puffs PRN (Max 8/day)', isMart: false, role: ['Reliever'], flowRate: '< 30 L/min', priceLevel: 1, hiddenPrice: 45.62, priceBasis: 'pack' }, // Colours from the pack photo supplied by the user on 11 Oct 2026 (Cipla Asthalin inhaler with dose counter: blue actuator, white dust cap; 200 metered doses). MIMS Thailand brand; Thai FDA registration 1C 42/64 cancelled 30 Aug 2024 (Cipla); reference price as Salbutamol MDI 100 mcg
  { id: 8, type: 'DPI', shape: 'Turbuhaler', marketName: 'Bricanyl Turbuhaler', substance: 'Terbutaline 0.5 mg', class: 'SABA', instructions: '1 inhalation PRN. Twist blue base to load.', hex: '#0891b2', tagColor: 'bg-cyan-100 text-cyan-800', indications: ['Asthma'], ventCompatible: false, totalDoses: '200 doses', expiration: 'Until Expiry Date', doseRange: '1 inhalation PRN (Max 4/day)', isMart: false, role: ['Reliever'], flowRate: '≥ 30 L/min' }, // No national reference price: price Unknown

  // --- SABA / SAMAs ---
  { id: 2, type: 'MDI', shape: 'MDI', marketName: 'Berodual Inhaler', substance: 'Fenoterol 50 mcg / Ipratropium 20 mcg', class: 'SABA / SAMA', instructions: '1-2 puffs up to QID for acute relief.', hex: '#16a34a', tagColor: 'bg-green-100 text-green-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: '200 puffs', expiration: 'Until Expiry Date', doseRange: '1-2 puffs QID (Max 8/day)', isMart: false, role: ['Reliever'], flowRate: '< 30 L/min', priceLevel: 1, hiddenPrice: 114 }, // ≈114 THB/30 days from national reference price 189.39 THB per pack: Ipratropium + fenoterol MDI (200 doses)
  { id: 416, type: 'MDI', shape: 'MDI', marketName: 'Aerobidol Inhaler', substance: 'Fenoterol 50 mcg / Ipratropium 20 mcg', class: 'SABA / SAMA', instructions: '1-2 puffs up to QID for acute relief.', hex: '#e6eaf0', tagColor: 'bg-green-100 text-green-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: '200 puffs', expiration: 'Until Expiry Date', doseRange: '1-2 puffs QID (Max 8/day)', isMart: false, role: ['Reliever'], flowRate: '< 30 L/min', priceLevel: 1, hiddenPrice: 114 }, // Colours from the manufacturer picture at aerocare.co.th (Aerobidol Inhaler with FoldHaler), seen 11 Oct 2026: white actuator, aqua dust cap. MIMS Thailand brand; Thai FDA 2A 41/57 (ipratropium bromide monohydrate 21 mcg = 20 mcg anhydrous); reference price as Berodual MDI
  { id: 16, type: 'SMI', shape: 'Respimat', marketName: 'Combivent Respimat', substance: 'Albuterol 100 mcg / Ipratropium 20 mcg', class: 'SABA / SAMA', instructions: '1 inhalation QID. Orange base.', hex: '#ea580c', tagColor: 'bg-orange-100 text-orange-800', indications: ['COPD'], ventCompatible: true, totalDoses: '120 puffs (60 doses)', expiration: '3 months after assembly', doseRange: '1 inhalation QID', isMart: false, role: ['Reliever'], flowRate: '< 30 L/min' }, // No national reference price: price Unknown

  // --- SAMAs ---
  { id: 23, type: 'MDI', shape: 'MDI', marketName: 'Atrovent HFA', substance: 'Ipratropium 17 mcg', class: 'SAMA', instructions: '2 puffs QID. Do not exceed 12 puffs/24 hrs.', hex: '#22c55e', tagColor: 'bg-green-100 text-green-800', indications: ['COPD'], ventCompatible: true, totalDoses: '200 puffs', expiration: 'Until Expiry Date', doseRange: '2 puffs QID (Max 12/day)', isMart: false, role: ['Reliever'], flowRate: '< 30 L/min' }, // No national reference price: price Unknown

  // --- ICS ---
  { id: 201, type: 'MDI', shape: 'MDI', marketName: 'Flixotide Evohaler 50', substance: 'Fluticasone propionate 50 mcg', class: 'ICS', instructions: '2 puffs BID. Maintenance therapy. Rinse mouth after.', hex: '#ea580c', tagColor: 'bg-orange-100 text-orange-800', indications: ['Asthma'], ventCompatible: true, totalDoses: '120 puffs', expiration: 'Until Expiry Date', doseRange: { low: '2 puffs BID', medium: '4 puffs BID', high: 'Not appropriate' }, isMart: false, role: ['Controller'], flowRate: '< 30 L/min', icsDoseLevel: 'Low' }, // No national reference price: price Unknown // US FDA label (Flovent HFA): asthma only
  { id: 202, type: 'MDI', shape: 'MDI', marketName: 'Flixotide Evohaler 125 mcg', substance: 'Fluticasone propionate 125 mcg', class: 'ICS', instructions: '2 puffs BID. Maintenance therapy. Rinse mouth after.', hex: '#ea580c', tagColor: 'bg-orange-100 text-orange-800', indications: ['Asthma'], ventCompatible: true, totalDoses: '120 puffs', expiration: 'Until Expiry Date', doseRange: { low: '1 puff BID', medium: '2 puffs BID', high: '4 puffs BID' }, isMart: false, role: ['Controller'], flowRate: '< 30 L/min', icsDoseLevel: 'Medium', priceLevel: 1, hiddenPrice: 224 }, // ≈224 THB/30 days from national reference price 223.63 THB per pack: Fluticasone propionate MDI 125 mcg (120 doses) // Thai FDA label: asthma only
  { id: 203, type: 'MDI', shape: 'MDI', marketName: 'Flixotide Evohaler 250', substance: 'Fluticasone propionate 250 mcg', class: 'ICS', instructions: '2 puffs BID. Maintenance therapy. Rinse mouth after.', hex: '#ea580c', tagColor: 'bg-orange-100 text-orange-800', indications: ['Asthma'], ventCompatible: true, totalDoses: '120 puffs', expiration: 'Until Expiry Date', doseRange: { low: 'Not appropriate', medium: '1 puff BID', high: '2 puffs BID' }, isMart: false, role: ['Controller'], flowRate: '< 30 L/min', icsDoseLevel: 'High' }, // No national reference price: price Unknown // US FDA label (Flovent HFA): asthma only
  { id: 91, type: 'DPI', shape: 'Turbuhaler', marketName: 'Pulmicort Turbuhaler 100', substance: 'Budesonide 100 mcg', class: 'ICS', instructions: '1-2 inhalations BID. Maintenance therapy.', hex: '#854d0e', tagColor: 'bg-amber-100 text-amber-800', indications: ['Asthma'], ventCompatible: false, totalDoses: '200 doses', expiration: 'Until Expiry Date', doseRange: { low: '1-2 inhalations BID', medium: '4 inhalations BID', high: 'Not appropriate' }, isMart: false, role: ['Controller'], flowRate: '≥ 30 L/min', icsDoseLevel: 'Low', priceLevel: 1, hiddenPrice: 91 }, // ≈91 THB/30 days from national reference price 301.92 THB per pack: Budesonide DPI 100 mcg (200 doses) // US FDA label (Pulmicort Flexhaler): asthma only
  { id: 92, type: 'DPI', shape: 'Turbuhaler', marketName: 'Pulmicort Turbuhaler 200 mcg', substance: 'Budesonide 200 mcg', class: 'ICS', instructions: '1-2 inhalations BID. Maintenance therapy.', hex: '#854d0e', tagColor: 'bg-amber-100 text-amber-800', indications: ['Asthma'], ventCompatible: false, totalDoses: '100 doses', expiration: 'Until Expiry Date', doseRange: { low: '1 inhalation BID', medium: '2 inhalations BID', high: '4 inhalations BID' }, isMart: false, role: ['Controller'], flowRate: '≥ 30 L/min', icsDoseLevel: 'Medium', priceLevel: 2, hiddenPrice: 492 }, // ≈492 THB/30 days from national reference price 410.24 THB per pack: Budesonide DPI 200 mcg (100 doses) // US FDA label (Pulmicort Flexhaler): asthma only
  { id: 401, type: 'MDI', shape: 'MDI', marketName: 'Aeronide 200 mcg', substance: 'Budesonide 200 mcg', class: 'ICS', instructions: '1-2 puffs BID. Maintenance therapy. Rinse mouth after.', hex: '#7a2e28', tagColor: 'bg-amber-100 text-amber-800', indications: ['Asthma'], ventCompatible: true, totalDoses: '200 puffs', expiration: 'Until Expiry Date', doseRange: { low: '1 puff BID', medium: '2 puffs BID', high: '4 puffs BID' }, isMart: false, role: ['Controller'], flowRate: '< 30 L/min', icsDoseLevel: 'Medium', priceLevel: 1, hiddenPrice: 53 }, // Colours from the pack photo supplied by the user on 11 Oct 2026 (AeroCare; maroon-brown actuator, orange dust cap; 200 metered actuations). MIMS Thailand brand; Thai FDA 1A 440/55, asthma; ≈53 THB/30 days from national reference price 87.63 THB per pack: Budesonide MDI 200 mcg (200 doses)
  { id: 402, type: 'MDI', shape: 'MDI', marketName: 'Budecort-200 Inhaler', substance: 'Budesonide 200 mcg', class: 'ICS', instructions: '1-2 puffs BID. Maintenance therapy. Rinse mouth after.', hex: '#e6eaf0', tagColor: 'bg-amber-100 text-amber-800', indications: ['Asthma'], ventCompatible: true, totalDoses: '200 puffs', expiration: 'Until Expiry Date', doseRange: { low: '1 puff BID', medium: '2 puffs BID', high: '4 puffs BID' }, isMart: false, role: ['Controller'], flowRate: '< 30 L/min', icsDoseLevel: 'Medium', priceLevel: 1, hiddenPrice: 53 }, // Colours from the pack photo supplied by the user on 11 Oct 2026 (Cipla Budecort inhaler 200 with dose counter: white actuator, magenta dust cap; 200 metered doses). MIMS Thailand brand; Thai FDA 1C 356/48 (CFC-free, Cipla/Medispray), asthma; Budecort-100 registration cancelled; reference price as Aeronide
  { id: 404, type: 'DPI', shape: 'OtherDPI', marketName: 'Pulvisonide 200', substance: 'Budesonide 200 mcg', class: 'ICS', instructions: '1-2 capsules inhaled BID with the supplied inhaler. Rinse mouth after.', hex: '#b45309', tagColor: 'bg-amber-100 text-amber-800', indications: ['Asthma'], ventCompatible: false, totalDoses: 'Blister strips of 5 capsules (inhaler included in some packs)', expiration: 'Keep capsules in the blister until use', doseRange: { low: '1 capsule BID', medium: '2 capsules BID', high: '4 capsules BID' }, isMart: false, role: ['Controller'], flowRate: 'Unknown', icsDoseLevel: 'Medium', priceLevel: 2, hiddenPrice: 300 }, // MIMS Thailand brand; Thai FDA 1A 154/60 (T.O. Chemicals), asthma; ≈300 THB/30 days from national reference price 250 THB per pack: Budesonide capsule for inhaler 200 mcg (100 capsules + device)
  { id: 431, type: 'MDI', shape: 'MDI', marketName: 'BudeSpray-100 HFA', substance: 'Budesonide 100 mcg', class: 'ICS', instructions: '1-2 puffs BID. Maintenance therapy. Rinse mouth after.', hex: '#f1eec9', tagColor: 'bg-amber-100 text-amber-800', indications: ['Asthma'], ventCompatible: true, totalDoses: '200 puffs', expiration: 'Until Expiry Date', doseRange: { low: '1-2 puffs BID', medium: '4 puffs BID', high: 'Not appropriate' }, isMart: false, role: ['Controller'], flowRate: '< 30 L/min', icsDoseLevel: 'Low', priceLevel: 1, hiddenPrice: 54 }, // Colours from the device photo supplied by the user on 11 Oct 2026 (BudeSpray 100: cream actuator, purple dust cap). MIMS Thailand brand; Thai FDA registration 1C 39/63 cancelled 14 Jul 2023, asthma; ≈54 THB/30 days from national reference price 180 THB per pack: Budesonide MDI 100 mcg (200 doses)
  { id: 432, type: 'MDI', shape: 'MDI', marketName: 'BudeSpray-200 HFA', substance: 'Budesonide 200 mcg', class: 'ICS', instructions: '1-2 puffs BID. Maintenance therapy. Rinse mouth after.', hex: '#a16207', tagColor: 'bg-amber-100 text-amber-800', indications: ['Asthma'], ventCompatible: true, totalDoses: '200 puffs', expiration: 'Until Expiry Date', doseRange: { low: '1 puff BID', medium: '2 puffs BID', high: '4 puffs BID' }, isMart: false, role: ['Controller'], flowRate: '< 30 L/min', icsDoseLevel: 'Medium', priceLevel: 1, hiddenPrice: 53 }, // MIMS Thailand brand; Thai FDA registration 1C 267/51 cancelled 14 Aug 2020, asthma; reference price as Budesonide MDI 200 mcg
  { id: 433, type: 'MDI', shape: 'MDI', marketName: 'Budiair 200 mcg', substance: 'Budesonide 200 mcg', class: 'ICS', instructions: '1-2 puffs BID. Maintenance therapy. Rinse mouth after.', hex: '#9a1f45', tagColor: 'bg-amber-100 text-amber-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: '200 puffs', expiration: 'Until Expiry Date', doseRange: { low: '1 puff BID', medium: '2 puffs BID', high: '4 puffs BID' }, isMart: false, role: ['Controller'], flowRate: '< 30 L/min', icsDoseLevel: 'Medium', priceLevel: 1, hiddenPrice: 53 }, // Colours from the pack photo supplied by the user on 11 Oct 2026 (Chiesi Budiair 200 Mikrogramm, German pack: burgundy actuator and dust cap; 200 puffs). MIMS Thailand brand; Thai FDA registration 1C 176/49 cancelled 28 Feb 2011 (Chiesi; Thai label asthma and COPD); reference price as Budesonide MDI 200 mcg
  { id: 435, type: 'MDI', shape: 'MDI', marketName: 'Beclocip 50 HFA', substance: 'Beclometasone 50 mcg', class: 'ICS', instructions: '2-4 puffs BID. Maintenance therapy. Rinse mouth after.', hex: '#991b1b', tagColor: 'bg-red-100 text-red-900', indications: ['Asthma'], ventCompatible: true, totalDoses: '200 puffs', expiration: 'Until Expiry Date', doseRange: { low: '2-4 puffs BID', medium: 'Not appropriate', high: 'Not appropriate' }, isMart: false, role: ['Controller'], flowRate: '< 30 L/min', icsDoseLevel: 'Low', priceLevel: 1, hiddenPrice: 112 }, // MIMS Thailand brand; Thai FDA registration 1C 224/52 cancelled 21 Oct 2019 (Cipla, standard-particle HFA); ≈112 THB/30 days from national reference price 187.25 THB per pack: Beclometasone MDI 50 mcg (200 doses)
  { id: 436, type: 'MDI', shape: 'MDI', marketName: 'Beclocip 100 HFA', substance: 'Beclometasone 100 mcg', class: 'ICS', instructions: '1-2 puffs BID. Maintenance therapy. Rinse mouth after.', hex: '#991b1b', tagColor: 'bg-red-100 text-red-900', indications: ['Asthma'], ventCompatible: true, totalDoses: '200 puffs', expiration: 'Until Expiry Date', doseRange: { low: '1-2 puffs BID', medium: '4 puffs BID', high: 'Not appropriate' }, isMart: false, role: ['Controller'], flowRate: '< 30 L/min', icsDoseLevel: 'Low', priceLevel: 1, hiddenPrice: 32 }, // MIMS Thailand brand; Thai FDA registration 1C 202/51 cancelled 5 May 2014; ≈32 THB/30 days from national reference price 106.19 THB per pack: Beclometasone MDI 100 mcg (200 doses)
  { id: 437, type: 'MDI', shape: 'MDI', marketName: 'Beclocip 200 HFA', substance: 'Beclometasone 200 mcg', class: 'ICS', instructions: '1-2 puffs BID. Maintenance therapy. Rinse mouth after.', hex: '#991b1b', tagColor: 'bg-red-100 text-red-900', indications: ['Asthma'], ventCompatible: true, totalDoses: '200 puffs', expiration: 'Until Expiry Date', doseRange: { low: '1 puff BID', medium: '2 puffs BID', high: '4 puffs BID' }, isMart: false, role: ['Controller'], flowRate: '< 30 L/min', icsDoseLevel: 'Medium' }, // MIMS Thailand brand; Thai FDA registration 1C 223/52 cancelled 5 May 2014; no reference price for 200 mcg: price Unknown
  { id: 438, type: 'MDI', shape: 'MDI', marketName: 'Beclocip 250 HFA', substance: 'Beclometasone 250 mcg', class: 'ICS', instructions: '2 puffs BID. Maintenance therapy. Rinse mouth after.', hex: '#991b1b', tagColor: 'bg-red-100 text-red-900', indications: ['Asthma'], ventCompatible: true, totalDoses: '200 puffs', expiration: 'Until Expiry Date', doseRange: { low: '1 puff BID', medium: '2 puffs BID', high: '4 puffs BID' }, isMart: false, role: ['Controller'], flowRate: '< 30 L/min', icsDoseLevel: 'Medium', priceLevel: 1, hiddenPrice: 138 }, // MIMS Thailand brand; Thai FDA registration 1C 225/52 cancelled 30 Sep 2021; ≈138 THB/30 days from national reference price 230.07 THB per pack: Beclometasone MDI 250 mcg (200 doses)
  { id: 439, type: 'MDI', shape: 'MDI', marketName: 'Beclosal HFA Inhaler', substance: 'Beclometasone 50 mcg / Salbutamol 100 mcg', class: 'ICS / SABA', instructions: '2 puffs 3-4 times daily. Rinse mouth after.', hex: '#4f46e5', tagColor: 'bg-indigo-100 text-indigo-800', indications: ['Asthma'], ventCompatible: true, totalDoses: '200 puffs', expiration: 'Until Expiry Date', doseRange: '2 puffs QID', isMart: false, role: ['Controller', 'Reliever'], flowRate: '< 30 L/min', icsDoseLevel: 'Low' }, // MIMS Thailand brand; Thai FDA registration 2C 9/63 cancelled 31 Aug 2023, asthma (salbutamol sulphate 120 mcg = 100 mcg base); no reference price, level estimated
  { id: 261, type: 'MDI', shape: 'MDI', marketName: 'QVAR RediHaler 40', substance: 'Beclomethasone 40 mcg', class: 'ICS', instructions: 'Breath-actuated. Do not use with a spacer. 1-4 puffs BID.', hex: '#d6c4a0', tagColor: 'bg-amber-100 text-amber-800', indications: ['Asthma'], ventCompatible: false, totalDoses: '120 puffs', expiration: 'Until Expiry Date', doseRange: { low: '1-2 puffs BID', medium: '4 puffs BID', high: 'Not appropriate' }, isMart: false, isExtraFine: true, role: ['Controller'], flowRate: '< 30 L/min', icsDoseLevel: 'Low / Medium' }, // No national reference price: price Unknown
  { id: 501, type: 'DPI', shape: 'Spiromax', marketName: 'ProAir RespiClick', substance: 'Salbutamol (albuterol) 90 mcg', class: 'SABA', instructions: '2 inhalations every 4-6 hours PRN. Open the red cap until it clicks. No spacer, no priming.', hex: '#dc2626', tagColor: 'bg-red-100 text-red-800', indications: ['Asthma', 'COPD'], ventCompatible: false, totalDoses: '200 doses', expiration: '13 months after opening the foil pouch', doseRange: '2 inhalations Q4-6H PRN', isMart: false, role: ['Reliever'], flowRate: '≥ 40 L/min' }, // US label (DailyMed, 12 Oct 2026); no Thai price recorded
  { id: 502, type: 'MDI', shape: 'MDI', marketName: 'Xopenex HFA', substance: 'Levalbuterol 45 mcg', class: 'SABA', instructions: '2 puffs every 4-6 hours PRN; 1 puff every 4 hours may be enough. Shake well.', hex: '#2563eb', tagColor: 'bg-blue-100 text-blue-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: '200 puffs', expiration: 'Until Expiry Date', doseRange: '2 puffs Q4-6H PRN', isMart: false, role: ['Reliever'], flowRate: '< 30 L/min' }, // US label (DailyMed, 12 Oct 2026); no Thai price recorded
  { id: 503, type: 'MDI', shape: 'MDI', marketName: 'Airsupra', substance: 'Salbutamol (albuterol) 90 mcg / Budesonide 80 mcg', class: 'SABA / ICS', instructions: 'As-needed reliever with ICS, adults 18+: 2 puffs PRN, maximum 6 doses (12 puffs) in 24 hours. Shake well.', hex: '#e2e8f0', tagColor: 'bg-teal-100 text-teal-800', indications: ['Asthma'], ventCompatible: true, totalDoses: '120 puffs', expiration: '12 months after opening the foil pouch', doseRange: '2 puffs PRN (Max 12/day)', isMart: false, role: ['Reliever'], flowRate: '< 30 L/min' }, // US label (DailyMed, 12 Oct 2026); no Thai price recorded
  { id: 504, type: 'MDI', shape: 'MDI', marketName: 'QVAR RediHaler 80', substance: 'Beclomethasone 80 mcg', class: 'ICS', instructions: 'Breath-actuated. Do not use with a spacer. 1-4 puffs BID.', hex: '#7f1d1d', tagColor: 'bg-red-100 text-red-900', indications: ['Asthma'], ventCompatible: false, totalDoses: '120 puffs', expiration: 'Until Expiry Date', doseRange: { low: '1 puff BID', medium: '2 puffs BID', high: '4 puffs BID' }, isMart: false, role: ['Controller'], flowRate: '< 30 L/min', isExtraFine: true, icsDoseLevel: 'Low / Medium / High' }, // US label (DailyMed, 12 Oct 2026); no Thai price recorded
  { id: 505, type: 'MDI', shape: 'MDI', marketName: 'Alvesco 80', substance: 'Ciclesonide 80 mcg', class: 'ICS', instructions: 'Starting dose 80 mcg BID; highest 320 mcg BID. Rinse mouth after.', hex: '#7c4a2d', tagColor: 'bg-amber-100 text-amber-800', indications: ['Asthma'], ventCompatible: true, totalDoses: '60 puffs', expiration: 'Until Expiry Date', doseRange: { low: '1 puff BID', medium: '2 puffs BID', high: '4 puffs BID' }, icsDoseLevel: 'Low / Medium / High', isMart: false, role: ['Controller'], flowRate: '< 30 L/min' }, // US label (DailyMed, 12 Oct 2026); no Thai price recorded
  { id: 506, type: 'MDI', shape: 'MDI', marketName: 'Alvesco 160', substance: 'Ciclesonide 160 mcg', class: 'ICS', instructions: 'Starting dose 80 mcg BID; highest 320 mcg BID. Rinse mouth after.', hex: '#dc2626', tagColor: 'bg-red-100 text-red-800', indications: ['Asthma'], ventCompatible: true, totalDoses: '60 puffs', expiration: 'Until Expiry Date', doseRange: { low: 'Not appropriate', medium: '1 puff BID', high: '2 puffs BID' }, icsDoseLevel: 'Medium / High', isMart: false, role: ['Controller'], flowRate: '< 30 L/min' }, // US label (DailyMed, 12 Oct 2026); no Thai price recorded
  { id: 507, type: 'DPI', shape: 'Ellipta', marketName: 'Arnuity Ellipta 100 mcg', substance: 'Fluticasone furoate 100 mcg', class: 'ICS', instructions: '1 inhalation ONCE daily. Open orange cover fully. Rinse mouth after.', hex: '#ea580c', tagColor: 'bg-orange-100 text-orange-800', indications: ['Asthma'], ventCompatible: false, totalDoses: '30 doses', expiration: '6 weeks after opening foil', doseRange: { low: '1 inhalation ONCE daily', medium: '1 inhalation ONCE daily', high: 'Not appropriate' }, isMart: false, role: ['Controller'], flowRate: '≥ 30 L/min', icsDoseLevel: 'Low / Medium' }, // US label (DailyMed, 12 Oct 2026); no Thai price recorded
  { id: 508, type: 'DPI', shape: 'Ellipta', marketName: 'Arnuity Ellipta 200 mcg', substance: 'Fluticasone furoate 200 mcg', class: 'ICS', instructions: '1 inhalation ONCE daily. Open orange cover fully. Rinse mouth after.', hex: '#ea580c', tagColor: 'bg-orange-100 text-orange-800', indications: ['Asthma'], ventCompatible: false, totalDoses: '30 doses', expiration: '6 weeks after opening foil', doseRange: { low: 'Not appropriate', medium: 'Not appropriate', high: '1 inhalation ONCE daily' }, isMart: false, role: ['Controller'], flowRate: '≥ 30 L/min', icsDoseLevel: 'High' }, // US label (DailyMed, 12 Oct 2026); no Thai price recorded
  { id: 509, type: 'MDI', shape: 'MDI', marketName: 'Asmanex HFA 100 mcg', substance: 'Mometasone 100 mcg', class: 'ICS', instructions: '2 puffs BID. Shake well. Rinse mouth after.', hex: '#2563eb', tagColor: 'bg-blue-100 text-blue-800', indications: ['Asthma'], ventCompatible: true, totalDoses: '120 puffs', expiration: 'Until Expiry Date', doseRange: '2 puffs BID', icsDoseLevel: 'Low / Medium', isMart: false, role: ['Controller'], flowRate: '< 30 L/min' }, // US label (DailyMed, 12 Oct 2026); no Thai price recorded
  { id: 510, type: 'MDI', shape: 'MDI', marketName: 'Asmanex HFA 200 mcg', substance: 'Mometasone 200 mcg', class: 'ICS', instructions: '2 puffs BID. Shake well. Rinse mouth after.', hex: '#2563eb', tagColor: 'bg-blue-100 text-blue-800', indications: ['Asthma'], ventCompatible: true, totalDoses: '120 puffs', expiration: 'Until Expiry Date', doseRange: '2 puffs BID', icsDoseLevel: 'High', isMart: false, role: ['Controller'], flowRate: '< 30 L/min' }, // US label (DailyMed, 12 Oct 2026); no Thai price recorded
  { id: 511, type: 'DPI', shape: 'Twisthaler', marketName: 'Asmanex Twisthaler 220 mcg', substance: 'Mometasone 220 mcg', class: 'ICS', instructions: '1 inhalation once daily in the evening; highest 440 mcg a day. Inhale fast and deep. Rinse mouth after. UK/EU label: 200 mcg (delivered dose).', hex: '#ec4899', tagColor: 'bg-pink-100 text-pink-800', indications: ['Asthma'], ventCompatible: false, totalDoses: '30, 60 or 120 doses', expiration: '45 days after opening the foil pouch', doseRange: '1 inhalation ONCE daily (Max 2/day)', isMart: false, role: ['Controller'], flowRate: '≥ 28 L/min' }, // US label (DailyMed, 12 Oct 2026); no Thai price recorded
  { id: 512, type: 'DPI', shape: 'Spiromax', marketName: 'AirDuo RespiClick 55/14', substance: 'Fluticasone propionate 55 mcg / Salmeterol 14 mcg', class: 'ICS / LABA', instructions: '1 inhalation BID. Open the yellow cap until it clicks. No spacer. Rinse mouth after.', hex: '#facc15', tagColor: 'bg-yellow-100 text-yellow-800', indications: ['Asthma'], ventCompatible: false, totalDoses: '60 doses', expiration: '30 days after opening the foil pouch', doseRange: '1 inhalation BID', isMart: false, role: ['Controller'], flowRate: '≥ 40 L/min' }, // US label (DailyMed, 12 Oct 2026); no Thai price recorded
  { id: 513, type: 'DPI', shape: 'Spiromax', marketName: 'AirDuo RespiClick 113/14', substance: 'Fluticasone propionate 113 mcg / Salmeterol 14 mcg', class: 'ICS / LABA', instructions: '1 inhalation BID. Open the yellow cap until it clicks. No spacer. Rinse mouth after. EU name: Seffalair Spiromax 12.75/100.', hex: '#facc15', tagColor: 'bg-yellow-100 text-yellow-800', indications: ['Asthma'], ventCompatible: false, totalDoses: '60 doses', expiration: '30 days after opening the foil pouch', doseRange: '1 inhalation BID', isMart: false, role: ['Controller'], flowRate: '≥ 40 L/min' }, // US label (DailyMed, 12 Oct 2026); no Thai price recorded
  { id: 514, type: 'DPI', shape: 'Spiromax', marketName: 'AirDuo RespiClick 232/14', substance: 'Fluticasone propionate 232 mcg / Salmeterol 14 mcg', class: 'ICS / LABA', instructions: '1 inhalation BID. Open the yellow cap until it clicks. No spacer. Rinse mouth after. EU name: Seffalair Spiromax 12.75/202.', hex: '#facc15', tagColor: 'bg-yellow-100 text-yellow-800', indications: ['Asthma'], ventCompatible: false, totalDoses: '60 doses', expiration: '30 days after opening the foil pouch', doseRange: '1 inhalation BID', isMart: false, role: ['Controller'], flowRate: '≥ 40 L/min' }, // US label (DailyMed, 12 Oct 2026); no Thai price recorded
  { id: 515, type: 'MDI', shape: 'MDI', marketName: 'Dulera 100/5', substance: 'Mometasone 100 mcg / Formoterol 5 mcg', class: 'ICS / LABA', instructions: '2 puffs BID. Shake well. Rinse mouth after.', hex: '#2563eb', tagColor: 'bg-blue-100 text-blue-800', indications: ['Asthma'], ventCompatible: true, totalDoses: '120 puffs', expiration: 'Until Expiry Date', doseRange: '2 puffs BID', icsDoseLevel: 'Low / Medium', isMart: false, role: ['Controller'], flowRate: '< 30 L/min' }, // US label (DailyMed, 12 Oct 2026); no Thai price recorded
  { id: 516, type: 'MDI', shape: 'MDI', marketName: 'Dulera 200/5', substance: 'Mometasone 200 mcg / Formoterol 5 mcg', class: 'ICS / LABA', instructions: '2 puffs BID. Shake well. Rinse mouth after.', hex: '#2563eb', tagColor: 'bg-blue-100 text-blue-800', indications: ['Asthma'], ventCompatible: true, totalDoses: '120 puffs', expiration: 'Until Expiry Date', doseRange: '2 puffs BID', icsDoseLevel: 'High', isMart: false, role: ['Controller'], flowRate: '< 30 L/min' }, // US label (DailyMed, 12 Oct 2026); no Thai price recorded
  { id: 517, type: 'SMI', shape: 'Respimat', marketName: 'Striverdi Respimat 2.5 mcg', substance: 'Olodaterol 2.5 mcg', class: 'LABA', instructions: '2 actuations ONCE daily. TOP: Turn, Open, Press. COPD only.', hex: '#facc15', tagColor: 'bg-yellow-100 text-yellow-800', indications: ['COPD'], ventCompatible: true, totalDoses: '60 puffs (30 doses)', expiration: '3 months after first use', doseRange: '2 actuations ONCE daily', isMart: false, role: ['Controller'], flowRate: '< 30 L/min' }, // US label (DailyMed, 12 Oct 2026); no Thai price recorded
  { id: 518, type: 'Nebulizer', shape: 'Nebulizer', marketName: 'Perforomist 20 mcg/2 mL', substance: 'Formoterol 20 mcg per 2 mL', class: 'LABA', instructions: '1 vial (20 mcg) by jet nebulizer BID; no more than 40 mcg a day. COPD only.', hex: '#2563eb', tagColor: 'bg-sky-100 text-sky-800', indications: ['COPD'], ventCompatible: true, totalDoses: 'Single use vial', expiration: 'Use immediately after opening', doseRange: '20 mcg Nebulized BID', isMart: false, role: ['Controller'], flowRate: 'Tidal' }, // US label (DailyMed, 12 Oct 2026); no Thai price recorded
  { id: 519, type: 'DPI', shape: 'Ellipta', marketName: 'Incruse Ellipta 62.5 mcg', substance: 'Umeclidinium 62.5 mcg', class: 'LAMA', instructions: '1 inhalation ONCE daily. Open light green cover fully. UK/EU label: 55 mcg (delivered dose).', hex: '#86c7a4', tagColor: 'bg-green-100 text-green-800', indications: ['COPD'], ventCompatible: false, totalDoses: '30 doses', expiration: '6 weeks after opening foil', doseRange: '1 inhalation ONCE daily', isMart: false, role: ['Controller'], flowRate: '≥ 30 L/min' }, // US label (DailyMed, 12 Oct 2026); no Thai price recorded
  { id: 520, type: 'DPI', shape: 'Pressair', marketName: 'Tudorza Pressair 400 mcg', substance: 'Aclidinium 400 mcg', class: 'LAMA', instructions: '1 inhalation BID. Press and release the green button, then inhale strongly. UK/EU/Thai name: Eklira Genuair 322 mcg (delivered dose).', hex: '#16a34a', tagColor: 'bg-green-100 text-green-800', indications: ['COPD'], ventCompatible: false, totalDoses: '60 doses', expiration: '45 days after opening the sealed bag', doseRange: '1 inhalation BID', isMart: false, role: ['Controller'], flowRate: '≥ 40 L/min' }, // US label (DailyMed, 12 Oct 2026); no Thai price recorded
  { id: 521, type: 'Nebulizer', shape: 'Nebulizer', marketName: 'Yupelri 175 mcg/3 mL', substance: 'Revefenacin 175 mcg per 3 mL', class: 'LAMA', instructions: '1 vial (175 mcg) by jet nebulizer with a mouthpiece, once daily. No dilution.', hex: '#16a34a', tagColor: 'bg-green-100 text-green-800', indications: ['COPD'], ventCompatible: true, totalDoses: 'Single use vial', expiration: 'Use immediately after opening', doseRange: '175 mcg Nebulized ONCE daily', isMart: false, role: ['Controller'], flowRate: 'Tidal' }, // US label (DailyMed, 12 Oct 2026); no Thai price recorded
  { id: 522, type: 'MDI', shape: 'MDI', marketName: 'Bevespi Aerosphere 9/4.8', substance: 'Formoterol 4.8 mcg / Glycopyrronium 9 mcg', class: 'LABA / LAMA', instructions: '2 puffs BID. Shake well. UK/EU label: 7.2/5 mcg (delivered dose).', hex: '#e2e8f0', tagColor: 'bg-orange-100 text-orange-800', indications: ['COPD'], ventCompatible: true, totalDoses: '120 puffs', expiration: '3 months after opening the foil pouch', doseRange: '2 puffs BID', isMart: false, role: ['Controller'], flowRate: '< 30 L/min' }, // US label (DailyMed, 12 Oct 2026); no Thai price recorded
  { id: 523, type: 'DPI', shape: 'Pressair', marketName: 'Duaklir Pressair 400/12', substance: 'Formoterol 12 mcg / Aclidinium 400 mcg', class: 'LABA / LAMA', instructions: '1 inhalation BID. Press and release the orange button, then inhale strongly. UK/EU/Thai name: Duaklir Genuair 340/12 (delivered dose).', hex: '#f97316', tagColor: 'bg-orange-100 text-orange-800', indications: ['COPD'], ventCompatible: false, totalDoses: '60 doses', expiration: '2 months after opening the sealed bag', doseRange: '1 inhalation BID', isMart: false, role: ['Controller'], flowRate: '≥ 40 L/min' }, // US label (DailyMed, 12 Oct 2026); no Thai price recorded
  { id: 524, type: 'MDI', shape: 'MDI', marketName: 'ProAir HFA', substance: 'Salbutamol (albuterol) 90 mcg', class: 'SABA', instructions: '2 puffs every 4-6 hours PRN; 1 puff every 4 hours may be enough. Shake well. FDA lists it as marketed, but no current label from its maker is on DailyMed (12 Oct 2026): check supply.', hex: '#dc2626', tagColor: 'bg-red-100 text-red-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: '200 puffs', expiration: 'Until Expiry Date', doseRange: '2 puffs Q4-6H PRN', isMart: false, role: ['Reliever'], flowRate: '< 30 L/min' }, // US label text from a 2021 repackager label (DailyMed); Drugs@FDA status Prescription; no Thai price recorded
  { id: 525, type: 'MDI', shape: 'MDI', marketName: 'Proventil HFA', substance: 'Salbutamol (albuterol) 90 mcg', class: 'SABA', instructions: '2 puffs every 4-6 hours PRN. Shake well. FDA lists it as marketed, but no current label from its maker is on DailyMed (12 Oct 2026): check supply.', hex: '#facc15', tagColor: 'bg-yellow-100 text-yellow-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: '200 puffs', expiration: 'Until Expiry Date', doseRange: '2 puffs Q4-6H PRN', isMart: false, role: ['Reliever'], flowRate: '< 30 L/min' }, // US label of Oct 2019 (Merck, DailyMed); Drugs@FDA status Prescription; no Thai price recorded
  { id: 526, type: 'DPI', shape: 'Diskus', marketName: 'Flovent Diskus 50 mcg', substance: 'Fluticasone propionate 50 mcg', class: 'ICS', instructions: 'Starting dose 100 mcg BID; maximum 1,000 mcg BID. Rinse mouth after. UK/EU name: Flixotide Accuhaler / Diskus. FDA lists it as marketed, but no current label from its maker is on DailyMed (12 Oct 2026): check supply.', hex: '#ea580c', tagColor: 'bg-orange-100 text-orange-800', indications: ['Asthma'], ventCompatible: false, totalDoses: '60 blisters', expiration: '6 weeks after opening foil', doseRange: { low: '1-2 blisters BID', medium: 'Not appropriate', high: 'Not appropriate' }, isMart: false, role: ['Controller'], flowRate: '≥ 30 L/min', icsDoseLevel: 'Low' }, // US label text from a 2024 repackager label (DailyMed); Drugs@FDA status Prescription; no Thai price recorded
  { id: 527, type: 'DPI', shape: 'Diskus', marketName: 'Flovent Diskus 100 mcg', substance: 'Fluticasone propionate 100 mcg', class: 'ICS', instructions: 'Starting dose 100 mcg BID; maximum 1,000 mcg BID. Rinse mouth after. UK/EU name: Flixotide Accuhaler / Diskus. FDA lists it as marketed, but no current label from its maker is on DailyMed (12 Oct 2026): check supply.', hex: '#ea580c', tagColor: 'bg-orange-100 text-orange-800', indications: ['Asthma'], ventCompatible: false, totalDoses: '60 blisters', expiration: '2 months after opening the foil pouch', doseRange: { low: '1 blister BID', medium: '2 blisters BID', high: 'Not appropriate' }, isMart: false, role: ['Controller'], flowRate: '≥ 30 L/min', icsDoseLevel: 'Low / Medium' }, // US label text from a 2024 repackager label (DailyMed); Drugs@FDA status Prescription; no Thai price recorded
  { id: 528, type: 'DPI', shape: 'Diskus', marketName: 'Flovent Diskus 250 mcg', substance: 'Fluticasone propionate 250 mcg', class: 'ICS', instructions: 'Starting dose 100 mcg BID; maximum 1,000 mcg BID. Rinse mouth after. UK/EU name: Flixotide Accuhaler / Diskus. FDA lists it as marketed, but no current label from its maker is on DailyMed (12 Oct 2026): check supply.', hex: '#ea580c', tagColor: 'bg-orange-100 text-orange-800', indications: ['Asthma'], ventCompatible: false, totalDoses: '60 blisters', expiration: '2 months after opening the foil pouch', doseRange: { low: 'Not appropriate', medium: '1 blister BID', high: '2 blisters BID' }, isMart: false, role: ['Controller'], flowRate: '≥ 30 L/min', icsDoseLevel: 'Medium / High' }, // US label text from a 2024 repackager label (DailyMed); Drugs@FDA status Prescription; no Thai price recorded
  { id: 529, type: 'MDI', shape: 'MDI', marketName: 'Symbicort Aerosphere 80/4.8', substance: 'Budesonide 80 mcg / Formoterol 4.8 mcg', class: 'ICS / LABA', instructions: '2 puffs BID (asthma, 12+). Shake well. Rinse mouth after. Not for relief of acute bronchospasm.', hex: '#e2e8f0', tagColor: 'bg-red-100 text-red-800', indications: ['Asthma'], ventCompatible: true, totalDoses: '120 puffs', expiration: '3 months after opening the foil pouch', doseRange: '2 puffs BID', isMart: false, role: ['Controller'], flowRate: '< 30 L/min' }, // FDA label PDF (NDA 216579 S-001, Apr 2026); no label on DailyMed yet; no Thai price recorded
  { id: 530, type: 'MDI', shape: 'MDI', marketName: 'Symbicort Aerosphere 160/4.8', substance: 'Budesonide 160 mcg / Formoterol 4.8 mcg', class: 'ICS / LABA', instructions: '2 puffs BID (asthma 12+; COPD). Shake well. Rinse mouth after. Not for relief of acute bronchospasm.', hex: '#e2e8f0', tagColor: 'bg-red-100 text-red-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: '120 puffs', expiration: '3 months after opening the foil pouch', doseRange: '2 puffs BID', isMart: false, role: ['Controller'], flowRate: '< 30 L/min' }, // FDA label PDF (NDA 216579 S-001, Apr 2026); no label on DailyMed yet; no Thai price recorded
  { id: 531, type: 'MDI', shape: 'MDI', marketName: 'Trimbow MDI 172/5/9', substance: 'Beclometasone 172 mcg / Formoterol 5 mcg / Glycopyrronium 9 mcg', class: 'ICS / LABA / LAMA', instructions: '2 puffs BID. Extra-fine particles; rinse mouth. Asthma only (adults not controlled on high-dose ICS + LABA).', hex: '#9ca3af', tagColor: 'bg-pink-100 text-pink-800', indications: ['Asthma'], ventCompatible: true, totalDoses: '120 puffs', expiration: '2 months after dispensing', doseRange: { low: 'Not appropriate', medium: 'Not appropriate', high: '2 puffs BID' }, isMart: false, role: ['Controller'], flowRate: '< 30 L/min', isExtraFine: true, icsDoseLevel: 'High' }, // Thai FDA register 2C 9/67 (indication as registered); US label PDF (NDA 219622); no Thai price recorded
  { id: 532, type: 'MDI', shape: 'MDI', marketName: 'Meptin Air 10 mcg', substance: 'Procaterol 10 mcg', class: 'SABA', instructions: 'Adults: 2 puffs (20 mcg) per dose PRN.', hex: '#e2e8f0', tagColor: 'bg-blue-100 text-blue-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: '100 puffs', expiration: 'Unknown', doseRange: '2 puffs PRN', isMart: false, role: ['Reliever'], flowRate: '< 30 L/min' }, // Japanese package insert (PMDA, 12 Oct 2026); no Thai price recorded
  { id: 533, type: 'DPI', shape: 'OtherDPI', marketName: 'Meptin Swinghaler 10 mcg', substance: 'Procaterol 10 mcg', class: 'SABA', instructions: 'Adults: 2 inhalations (20 mcg) per dose PRN.', hex: '#5ecfc9', tagColor: 'bg-blue-100 text-blue-800', indications: ['Asthma', 'COPD'], ventCompatible: false, totalDoses: '100 doses', expiration: 'Unknown', doseRange: '2 inhalations PRN', isMart: false, role: ['Reliever'], flowRate: 'Unknown' }, // Japanese package insert (PMDA, 12 Oct 2026); no Thai price recorded
  { id: 534, type: 'Nebulizer', shape: 'Nebulizer', marketName: 'Meptin Inhalation Solution 0.01%', substance: 'Procaterol 100 mcg per 1 mL', class: 'SABA', instructions: 'Adults: 30-50 mcg (0.3-0.5 mL) by nebulizer per dose PRN.', hex: '#94a3b8', tagColor: 'bg-blue-100 text-blue-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: 'Bottle or 0.3 / 0.5 mL unit doses', expiration: 'Unknown', doseRange: '30-50 mcg (0.3-0.5 mL) Nebulized PRN', isMart: false, role: ['Reliever', 'Exacerbation'], flowRate: 'Tidal' }, // Japanese package insert (PMDA, 12 Oct 2026); no Thai price recorded
  { id: 535, type: 'MDI', shape: 'MDI', marketName: 'Qvar 50 Aerosol', substance: 'Beclometasone 50 mcg', class: 'ICS', instructions: 'Adults: 100 mcg BID; maximum 800 mcg a day. Rinse mouth after.', hex: '#94a3b8', tagColor: 'bg-amber-100 text-amber-800', indications: ['Asthma'], ventCompatible: true, totalDoses: 'Unknown', expiration: 'Unknown', doseRange: { low: '2 puffs BID', medium: '4 puffs BID', high: '8 puffs BID' }, isMart: false, role: ['Controller'], flowRate: '< 30 L/min', isExtraFine: true, icsDoseLevel: 'Low / Medium / High' }, // Japanese package insert (PMDA, 12 Oct 2026); no Thai price recorded
  { id: 536, type: 'MDI', shape: 'MDI', marketName: 'Qvar 100 Aerosol', substance: 'Beclometasone 100 mcg', class: 'ICS', instructions: 'Adults: 100 mcg BID; maximum 800 mcg a day. Rinse mouth after.', hex: '#8b3a3a', tagColor: 'bg-red-100 text-red-900', indications: ['Asthma'], ventCompatible: true, totalDoses: 'Unknown', expiration: 'Unknown', doseRange: { low: '1 puff BID', medium: '2 puffs BID', high: '4 puffs BID' }, isMart: false, role: ['Controller'], flowRate: '< 30 L/min', isExtraFine: true, icsDoseLevel: 'Low / Medium / High' }, // Japanese package insert (PMDA, 12 Oct 2026); no Thai price recorded
  { id: 537, type: 'DPI', shape: 'Breezhaler', marketName: 'Atectura Breezhaler 125/62.5', substance: 'Mometasone 62.5 mcg / Indacaterol 125 mcg', class: 'ICS / LABA', instructions: '1 capsule ONCE daily with the Breezhaler. Rinse mouth after. Japan: Atectura low dose (150/80 mcg capsule content).', hex: '#94a3b8', tagColor: 'bg-red-100 text-red-800', indications: ['Asthma'], ventCompatible: false, totalDoses: 'Unknown', expiration: 'Unknown', doseRange: '1 capsule ONCE daily', isMart: false, role: ['Controller'], flowRate: '≥ 50 L/min' }, // Japanese package insert (PMDA, 12 Oct 2026); no Thai price recorded
  { id: 538, type: 'DPI', shape: 'Breezhaler', marketName: 'Atectura Breezhaler 125/127.5', substance: 'Mometasone 127.5 mcg / Indacaterol 125 mcg', class: 'ICS / LABA', instructions: '1 capsule ONCE daily with the Breezhaler. Rinse mouth after. Japan: Atectura medium dose (150/160 mcg capsule content).', hex: '#94a3b8', tagColor: 'bg-red-100 text-red-800', indications: ['Asthma'], ventCompatible: false, totalDoses: 'Unknown', expiration: 'Unknown', doseRange: '1 capsule ONCE daily', isMart: false, role: ['Controller'], flowRate: '≥ 50 L/min' }, // Japanese package insert (PMDA, 12 Oct 2026); no Thai price recorded
  { id: 539, type: 'DPI', shape: 'Breezhaler', marketName: 'Atectura Breezhaler 125/260', substance: 'Mometasone 260 mcg / Indacaterol 125 mcg', class: 'ICS / LABA', instructions: '1 capsule ONCE daily with the Breezhaler. Rinse mouth after. Japan: Atectura high dose (150/320 mcg capsule content).', hex: '#94a3b8', tagColor: 'bg-red-100 text-red-800', indications: ['Asthma'], ventCompatible: false, totalDoses: 'Unknown', expiration: 'Unknown', doseRange: '1 capsule ONCE daily', isMart: false, role: ['Controller'], flowRate: '≥ 50 L/min' }, // Japanese package insert (PMDA, 12 Oct 2026); no Thai price recorded
  { id: 540, type: 'DPI', shape: 'Breezhaler', marketName: 'Enerzair Breezhaler 114/46/68', substance: 'Mometasone 68 mcg / Indacaterol 114 mcg / Glycopyrronium 46 mcg', class: 'ICS / LABA / LAMA', instructions: '1 capsule ONCE daily with the Breezhaler. Rinse mouth after. Japan: Enerzair medium dose (150/50/80 mcg capsule content).', hex: '#15803d', tagColor: 'bg-green-100 text-green-800', indications: ['Asthma'], ventCompatible: false, totalDoses: 'Unknown', expiration: 'Unknown', doseRange: '1 capsule ONCE daily', isMart: false, role: ['Controller'], flowRate: '≥ 50 L/min' }, // Japanese package insert (PMDA, 12 Oct 2026); no Thai price recorded
  { id: 541, type: 'DPI', shape: 'Breezhaler', marketName: 'Enerzair Breezhaler 114/46/136', substance: 'Mometasone 136 mcg / Indacaterol 114 mcg / Glycopyrronium 46 mcg', class: 'ICS / LABA / LAMA', instructions: '1 capsule ONCE daily with the Breezhaler. Rinse mouth after. Japan: Enerzair high dose (150/50/160 mcg capsule content).', hex: '#15803d', tagColor: 'bg-green-100 text-green-800', indications: ['Asthma'], ventCompatible: false, totalDoses: 'Unknown', expiration: 'Unknown', doseRange: '1 capsule ONCE daily', isMart: false, role: ['Controller'], flowRate: '≥ 50 L/min' }, // Japanese package insert (PMDA, 12 Oct 2026); no Thai price recorded
  { id: 542, type: 'DPI', shape: 'OtherDPI', marketName: 'BudeForu Inhalation Powder (Nipro)', substance: 'Budesonide 160 mcg / Formoterol 4.5 mcg', class: 'ICS / LABA', instructions: '1-2 inhalations BID or as MART. Japanese generic of Symbicort Turbuhaler. Rinse mouth after.', hex: '#94a3b8', tagColor: 'bg-red-100 text-red-800', indications: ['Asthma', 'COPD'], ventCompatible: false, totalDoses: '30 or 60 doses', expiration: 'Unknown', doseRange: { low: '1 inhalation BID', medium: '2 inhalations BID', high: '4 inhalations BID' }, isMart: true, role: ['Controller', 'Reliever'], flowRate: 'Unknown', martMax: '12 inhalations/day', icsDoseLevel: 'Medium' }, // Japanese package insert (PMDA, 12 Oct 2026); no Thai price recorded
  { id: 543, type: 'DPI', shape: 'OtherDPI', marketName: 'BudeForu Inhalation Powder (JG)', substance: 'Budesonide 160 mcg / Formoterol 4.5 mcg', class: 'ICS / LABA', instructions: '1-2 inhalations BID or as MART. Japanese generic of Symbicort Turbuhaler. Rinse mouth after.', hex: '#94a3b8', tagColor: 'bg-red-100 text-red-800', indications: ['Asthma', 'COPD'], ventCompatible: false, totalDoses: '30 or 60 doses', expiration: 'Unknown', doseRange: { low: '1 inhalation BID', medium: '2 inhalations BID', high: '4 inhalations BID' }, isMart: true, role: ['Controller', 'Reliever'], flowRate: 'Unknown', martMax: '12 inhalations/day', icsDoseLevel: 'Medium' }, // Japanese package insert (PMDA, 12 Oct 2026); no Thai price recorded
  { id: 544, type: 'DPI', shape: 'OtherDPI', marketName: 'BudeForu Inhalation Powder (MYL)', substance: 'Budesonide 160 mcg / Formoterol 4.5 mcg', class: 'ICS / LABA', instructions: '1-2 inhalations BID or as MART. Japanese generic of Symbicort Turbuhaler. Rinse mouth after.', hex: '#94a3b8', tagColor: 'bg-red-100 text-red-800', indications: ['Asthma', 'COPD'], ventCompatible: false, totalDoses: '30 or 60 doses', expiration: 'Unknown', doseRange: { low: '1 inhalation BID', medium: '2 inhalations BID', high: '4 inhalations BID' }, isMart: true, role: ['Controller', 'Reliever'], flowRate: 'Unknown', martMax: '12 inhalations/day', icsDoseLevel: 'Medium' }, // Japanese package insert (PMDA, 12 Oct 2026); no Thai price recorded
  { id: 545, type: 'MDI', shape: 'MDI', marketName: 'Berotec Aerosol 100', substance: 'Fenoterol 100 mcg', class: 'SABA', instructions: '2 puffs (0.2 mg) per dose PRN; adults may take 1-2 more puffs after 2-5 minutes if needed.', hex: '#94a3b8', tagColor: 'bg-blue-100 text-blue-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: 'Unknown', expiration: 'Unknown', doseRange: '2 puffs PRN', isMart: false, role: ['Reliever'], flowRate: '< 30 L/min' }, // Japanese package insert (PMDA, 12 Oct 2026); no Thai price recorded
  { id: 546, type: 'SMI', shape: 'Respimat', marketName: 'Spiriva Respimat 1.25 mcg', substance: 'Tiotropium 1.25 mcg', class: 'LAMA', instructions: '2 actuations ONCE daily. TOP: Turn, Open, Press. Asthma strength.', hex: '#94a3b8', tagColor: 'bg-teal-100 text-teal-800', indications: ['Asthma'], ventCompatible: true, totalDoses: '60 puffs (30 doses)', expiration: '3 months after assembly', doseRange: '2 actuations ONCE daily', isMart: false, role: ['Controller'], flowRate: '< 30 L/min' }, // Japanese package insert (PMDA, 12 Oct 2026); US: Drugs@FDA lists the 1.25 mcg strength; no Thai price recorded

  // --- ICS / LABA ---
  { id: 41, type: 'MDI', shape: 'MDI', marketName: 'Seretide Evohaler 25/50', substance: 'Fluticasone propionate 50 mcg / Salmeterol 25 mcg', class: 'ICS / LABA', instructions: '2 puffs BID. Rinse mouth after.', hex: '#9333ea', tagColor: 'bg-purple-100 text-purple-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: '120 puffs', expiration: 'Until Expiry Date', doseRange: { low: '2 puffs BID', medium: 'Not appropriate', high: 'Not appropriate' }, isMart: false, role: ['Controller'], flowRate: '< 30 L/min', icsDoseLevel: 'Low', priceLevel: 2, hiddenPrice: 376 }, // ≈376 THB/30 days from national reference price 376.11 THB per pack: Salmeterol + fluticasone propionate MDI 25/50 (120 doses)
  { id: 42, type: 'MDI', shape: 'MDI', marketName: 'Seretide Evohaler 25/125', substance: 'Fluticasone propionate 125 mcg / Salmeterol 25 mcg', class: 'ICS / LABA', instructions: '2 puffs BID. Rinse mouth after.', hex: '#9333ea', tagColor: 'bg-purple-100 text-purple-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: '120 puffs', expiration: 'Until Expiry Date', doseRange: { low: 'Not appropriate', medium: '2 puffs BID', high: 'Not appropriate' }, isMart: false, role: ['Controller'], flowRate: '< 30 L/min', icsDoseLevel: 'Medium', priceLevel: 2, hiddenPrice: 300 }, // ≈300 THB/30 days from national reference price 299.6 THB per pack: Salmeterol + fluticasone propionate MDI 25/125 (120 doses)
  { id: 43, type: 'MDI', shape: 'MDI', marketName: 'Seretide Evohaler 25/250', substance: 'Fluticasone propionate 250 mcg / Salmeterol 25 mcg', class: 'ICS / LABA', instructions: '2 puffs BID. Rinse mouth after.', hex: '#9333ea', tagColor: 'bg-purple-100 text-purple-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: '120 puffs', expiration: 'Until Expiry Date', doseRange: { low: 'Not appropriate', medium: 'Not appropriate', high: '2 puffs BID' }, isMart: false, role: ['Controller'], flowRate: '< 30 L/min', icsDoseLevel: 'High', priceLevel: 2, hiddenPrice: 567 }, // ≈567 THB/30 days from national reference price 567.1 THB per pack: Salmeterol + fluticasone propionate MDI 25/250 (120 doses)
  { id: 61, type: 'DPI', shape: 'Diskus', marketName: 'Seretide Accuhaler 50/100', substance: 'Fluticasone propionate 100 mcg / Salmeterol 50 mcg', class: 'ICS / LABA', instructions: '1 blister twice daily (BID). Inhale fast & deep.', hex: '#69469b', tagColor: 'bg-purple-100 text-purple-800', indications: ['Asthma', 'COPD'], ventCompatible: false, totalDoses: '60 blisters', expiration: '1 month after opening foil', doseRange: { low: '1 blister BID', medium: 'Not appropriate', high: 'Not appropriate' }, isMart: false, role: ['Controller'], flowRate: '≥ 30 L/min', icsDoseLevel: 'Low', priceLevel: 2, hiddenPrice: 385 }, // ≈385 THB/30 days from national reference price 385.2 THB per pack: Salmeterol + fluticasone propionate DPI 50/100 (60 doses)
  { id: 62, type: 'DPI', shape: 'Diskus', marketName: 'Seretide Accuhaler 50/250', substance: 'Fluticasone propionate 250 mcg / Salmeterol 50 mcg', class: 'ICS / LABA', instructions: '1 blister twice daily (BID). Inhale fast & deep.', hex: '#69469b', tagColor: 'bg-purple-100 text-purple-800', indications: ['Asthma', 'COPD'], ventCompatible: false, totalDoses: '60 blisters', expiration: '1 month after opening foil', doseRange: { low: 'Not appropriate', medium: '1 blister BID', high: 'Not appropriate' }, isMart: false, role: ['Controller'], flowRate: '≥ 30 L/min', icsDoseLevel: 'Medium', priceLevel: 2, hiddenPrice: 468 }, // ≈468 THB/30 days from national reference price 467.59 THB per pack: Salmeterol + fluticasone propionate DPI 50/250 (60 doses)
  { id: 63, type: 'DPI', shape: 'Diskus', marketName: 'Seretide Accuhaler 50/500', substance: 'Fluticasone propionate 500 mcg / Salmeterol 50 mcg', class: 'ICS / LABA', instructions: '1 blister twice daily (BID). Inhale fast & deep.', hex: '#69469b', tagColor: 'bg-purple-100 text-purple-800', indications: ['Asthma', 'COPD'], ventCompatible: false, totalDoses: '60 blisters', expiration: '1 month after opening foil', doseRange: { low: 'Not appropriate', medium: 'Not appropriate', high: '1 blister BID' }, isMart: false, role: ['Controller'], flowRate: '≥ 30 L/min', icsDoseLevel: 'High', priceLevel: 2, hiddenPrice: 597 }, // ≈597 THB/30 days from national reference price 597.06 THB per pack: Salmeterol + fluticasone propionate DPI 50/500 (60 doses)
  { id: 408, type: 'MDI', shape: 'MDI', marketName: 'Aerotide 125', substance: 'Fluticasone propionate 125 mcg / Salmeterol 25 mcg', class: 'ICS / LABA', instructions: '2 puffs BID. Rinse mouth after.', hex: '#6b4fc0', tagColor: 'bg-purple-100 text-purple-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: '120 puffs', expiration: 'Until Expiry Date', doseRange: { low: 'Not appropriate', medium: '2 puffs BID', high: 'Not appropriate' }, isMart: false, role: ['Controller'], flowRate: '< 30 L/min', icsDoseLevel: 'Medium', priceLevel: 2, hiddenPrice: 300 }, // Colours from product photos at banyachalyn.com (Thai pharmacy), seen 11 Oct 2026: purple actuator, lilac dust cap. MIMS Thailand brand; Thai FDA 2A 1/66, asthma + COPD; reference price as Seretide Evohaler 25/125
  { id: 409, type: 'MDI', shape: 'MDI', marketName: 'Aerotide 250', substance: 'Fluticasone propionate 250 mcg / Salmeterol 25 mcg', class: 'ICS / LABA', instructions: '2 puffs BID. Rinse mouth after.', hex: '#6b4fc0', tagColor: 'bg-purple-100 text-purple-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: '120 puffs', expiration: 'Until Expiry Date', doseRange: { low: 'Not appropriate', medium: 'Not appropriate', high: '2 puffs BID' }, isMart: false, role: ['Controller'], flowRate: '< 30 L/min', icsDoseLevel: 'High', priceLevel: 2, hiddenPrice: 567 }, // Colours from product photos at banyachalyn.com (Thai pharmacy), seen 11 Oct 2026: purple actuator, lilac dust cap. MIMS Thailand brand; Thai FDA 2A 2/66 and 2A 5/67 (dose-counter version), asthma + COPD; reference price as Seretide Evohaler 25/250
  { id: 410, type: 'MDI', shape: 'MDI', marketName: 'Seroflo 125 Inhaler', substance: 'Fluticasone propionate 125 mcg / Salmeterol 25 mcg', class: 'ICS / LABA', instructions: '2 puffs BID. Rinse mouth after.', hex: '#e6eaf0', tagColor: 'bg-purple-100 text-purple-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: '120 puffs', expiration: 'Until Expiry Date', doseRange: { low: 'Not appropriate', medium: '2 puffs BID', high: 'Not appropriate' }, isMart: false, role: ['Controller'], flowRate: '< 30 L/min', icsDoseLevel: 'Medium', priceLevel: 2, hiddenPrice: 300 }, // Colours from Cipla Seroflo 125 pack photos (Indian market: apollopharmacy.in, indiamart.com), seen 11 Oct 2026: white actuator, green dust cap; the Thai pack was not seen. MIMS Thailand brand; Thai FDA 2C 6/50 (Cipla), asthma + COPD; reference price as Seretide Evohaler 25/125
  { id: 411, type: 'DPI', shape: 'Easyhaler', marketName: 'Salflumix Easyhaler 50/250', substance: 'Fluticasone propionate 250 mcg / Salmeterol 50 mcg', class: 'ICS / LABA', instructions: '1 inhalation BID. Shake before each dose. Rinse mouth.', hex: '#8f3b9c', tagColor: 'bg-violet-100 text-violet-800', indications: ['Asthma', 'COPD'], ventCompatible: false, totalDoses: '60 doses', expiration: 'Until Expiry Date', doseRange: { low: 'Not appropriate', medium: '1 inhalation BID', high: 'Not appropriate' }, isMart: false, role: ['Controller'], flowRate: '≥ 30 L/min', icsDoseLevel: 'Medium', priceLevel: 2, hiddenPrice: 468 }, // Colour from the MIMS Thailand product image (Salflumix Easyhaler 50/250), seen 11 Oct 2026: white body, purple top, navy cover. MIMS Thailand brand; Thai FDA 2C 15076/67 (Orion), asthma + COPD; reference price as Seretide Accuhaler 50/250
  { id: 412, type: 'DPI', shape: 'Easyhaler', marketName: 'Salflumix Easyhaler 50/500', substance: 'Fluticasone propionate 500 mcg / Salmeterol 50 mcg', class: 'ICS / LABA', instructions: '1 inhalation BID. Shake before each dose. Rinse mouth.', hex: '#8f3b9c', tagColor: 'bg-violet-100 text-violet-800', indications: ['Asthma', 'COPD'], ventCompatible: false, totalDoses: '60 doses', expiration: 'Until Expiry Date', doseRange: { low: 'Not appropriate', medium: 'Not appropriate', high: '1 inhalation BID' }, isMart: false, role: ['Controller'], flowRate: '≥ 30 L/min', icsDoseLevel: 'High', priceLevel: 2, hiddenPrice: 597 }, // Colour from the Orion product picture at min.medicin.dk (Salflumix Easyhaler 50/500), seen 11 Oct 2026: white body, purple top. MIMS Thailand brand; Thai FDA 2C 15077/67 (Orion), asthma + COPD; reference price as Seretide Accuhaler 50/500
  { id: 413, type: 'DPI', shape: 'Airmaster', marketName: 'Xalflu Airmaster 50/100', substance: 'Fluticasone propionate 100 mcg / Salmeterol 50 mcg', class: 'ICS / LABA', instructions: '1 inhalation BID. Hold flat, press button, turn cover until it clicks. Rinse mouth.', hex: '#f9a8d4', tagColor: 'bg-pink-100 text-pink-800', indications: ['Asthma', 'COPD'], ventCompatible: false, totalDoses: '60 doses', expiration: 'Until Expiry Date', doseRange: { low: '1 inhalation BID', medium: 'Not appropriate', high: 'Not appropriate' }, isMart: false, role: ['Controller'], flowRate: 'Unknown', icsDoseLevel: 'Low', priceLevel: 2, hiddenPrice: 385 }, // Colour: light pink cover, as the Fixkoh Airmaster 50/100 (same device; fixkoh.co.uk pictures seen 11 Oct 2026); the user confirmed on 11 Oct 2026 that Xalflu Airmaster 50/100 looks the same. MIMS Thailand brand; Thai FDA 2C 15028/66 (Neutec, Turkey; status "awaiting check" on 9 Oct 2026), asthma + COPD; reference price as Seretide Accuhaler 50/100
  { id: 414, type: 'DPI', shape: 'Airmaster', marketName: 'Xalflu Airmaster 50/250', substance: 'Fluticasone propionate 250 mcg / Salmeterol 50 mcg', class: 'ICS / LABA', instructions: '1 inhalation BID. Hold flat, press button, turn cover until it clicks. Rinse mouth.', hex: '#c58fb6', tagColor: 'bg-pink-100 text-pink-800', indications: ['Asthma', 'COPD'], ventCompatible: false, totalDoses: '60 doses', expiration: 'Until Expiry Date', doseRange: { low: 'Not appropriate', medium: '1 inhalation BID', high: 'Not appropriate' }, isMart: false, role: ['Controller'], flowRate: 'Unknown', icsDoseLevel: 'Medium', priceLevel: 2, hiddenPrice: 468 }, // Colour from the device photo supplied by the user on 11 Oct 2026 (Xalflu Airmaster 50 mcg/250 mcg: mauve-pink cover). MIMS Thailand brand; Thai FDA 2C 15029/66 (Neutec, Turkey), asthma + COPD; reference price as Seretide Accuhaler 50/250
  { id: 51, type: 'MDI', shape: 'MDI', marketName: 'Symbicort Rapihaler 80/4.5', substance: 'Budesonide 80 mcg / Formoterol 4.5 mcg', class: 'ICS / LABA', instructions: '2 puffs BID or used as SMART therapy.', hex: '#dc2626', tagColor: 'bg-red-100 text-red-800', indications: ['Asthma'], ventCompatible: true, totalDoses: '120 puffs', expiration: '3 months after foil removal', doseRange: { low: '2 puffs BID', medium: '4 puffs BID', high: 'Not appropriate' }, martMax: '12 puffs/day', isMart: true, role: ['Controller', 'Reliever'], flowRate: '< 30 L/min', icsDoseLevel: 'Low' }, // No national reference price: price Unknown // US FDA label (Symbicort: COPD dose is 160/4.5 only): asthma only
  { id: 52, type: 'MDI', shape: 'MDI', marketName: 'Symbicort Rapihaler 160/4.5 mcg', substance: 'Budesonide 160 mcg / Formoterol 4.5 mcg', class: 'ICS / LABA', instructions: '2 puffs BID or used as SMART therapy.', hex: '#dc2626', tagColor: 'bg-red-100 text-red-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: '120 puffs', expiration: '3 months after foil removal', doseRange: { low: '1 puff BID', medium: '2 puffs BID', high: '4 puffs BID' }, martMax: '12 puffs/day', isMart: true, role: ['Controller', 'Reliever'], flowRate: '< 30 L/min', icsDoseLevel: 'Medium', priceLevel: 2, hiddenPrice: 599 }, // ≈599 THB/30 days from national reference price 599.2 THB per pack: Formoterol + budesonide MDI 4.5/160 (120 doses)
  { id: 71, type: 'DPI', shape: 'Turbuhaler', marketName: 'Symbicort Turbuhaler 80/4.5', substance: 'Budesonide 80 mcg / Formoterol 4.5 mcg', class: 'ICS / LABA', instructions: '1-2 inhalations BID or as SMART. Twist red grip.', hex: '#dc2626', tagColor: 'bg-red-100 text-red-800', indications: ['Asthma'], ventCompatible: false, totalDoses: '60 doses', expiration: 'Until Expiry Date', doseRange: { low: '1-2 inhalations BID', medium: '4 inhalations BID', high: 'Not appropriate' }, martMax: '12 inhalations/day', isMart: true, role: ['Controller', 'Reliever'], flowRate: '≥ 30 L/min', icsDoseLevel: 'Low', priceLevel: 2, hiddenPrice: 428 }, // ≈428 THB/30 days from national reference price 428 THB per pack: Formoterol + budesonide DPI 4.5/80 (60 doses) // Thai FDA label: asthma only (2C 14/44)
  { id: 72, type: 'DPI', shape: 'Turbuhaler', marketName: 'Symbicort Turbuhaler 160/4.5 mcg', substance: 'Budesonide 160 mcg / Formoterol 4.5 mcg', class: 'ICS / LABA', instructions: '1-2 inhalations BID or as SMART. Twist red grip.', hex: '#dc2626', tagColor: 'bg-red-100 text-red-800', indications: ['Asthma', 'COPD'], ventCompatible: false, totalDoses: '60 or 120 doses', expiration: 'Until Expiry Date', doseRange: { low: '1 inhalation BID', medium: '2 inhalations BID', high: '4 inhalations BID' }, martMax: '12 inhalations/day', isMart: true, role: ['Controller', 'Reliever'], flowRate: '≥ 30 L/min', icsDoseLevel: 'Medium', priceLevel: 3, hiddenPrice: 820 }, // ≈820 THB/30 days from national reference price 409.81 THB per pack: Formoterol + budesonide DPI 4.5/160 (60 doses)
  { id: 31, type: 'DPI', shape: 'Turbuhaler', marketName: 'Symbicort Forte Turbuhaler 320/9', substance: 'Budesonide 320 mcg / Formoterol 9 mcg', class: 'ICS / LABA', instructions: '1 inhalation BID. High-dose maintenance therapy. Not for MART.', hex: '#dc2626', tagColor: 'bg-red-100 text-red-800', indications: ['Asthma', 'COPD'], ventCompatible: false, totalDoses: '60 doses', expiration: 'Until Expiry Date', doseRange: { low: 'Not appropriate', medium: '1 inhalation BID', high: '2 inhalations BID' }, isMart: false, role: ['Controller'], flowRate: '≥ 30 L/min', icsDoseLevel: 'High', priceLevel: 3, hiddenPrice: 963 }, // ≈963 THB/30 days from national reference price 481.5 THB per pack: Formoterol + budesonide DPI 9/320 (60 doses)
  { id: 405, type: 'DPI', shape: 'Spiromax', marketName: 'DuoResp Spiromax 160/4.5', substance: 'Budesonide 160 mcg / Formoterol 4.5 mcg', class: 'ICS / LABA', instructions: '1-2 inhalations BID or as MART. Do not shake. Rinse mouth.', hex: '#9f1239', tagColor: 'bg-rose-100 text-rose-800', indications: ['Asthma', 'COPD'], ventCompatible: false, totalDoses: '120 doses', expiration: '6 months after removing the foil wrapper', doseRange: { low: '1 inhalation BID', medium: '2 inhalations BID', high: '4 inhalations BID' }, martMax: '12 inhalations/day', isMart: true, role: ['Controller', 'Reliever'], flowRate: '≥ 40 L/min', icsDoseLevel: 'Medium', priceLevel: 3, hiddenPrice: 820 }, // MIMS Thailand brand; Thai FDA 2C 15090/63 (Teva), adults 18+, asthma + COPD; reference price as Symbicort Turbuhaler 160/4.5 (Formoterol + budesonide DPI 4.5/160)
  { id: 406, type: 'DPI', shape: 'Spiromax', marketName: 'DuoResp Spiromax 320/9', substance: 'Budesonide 320 mcg / Formoterol 9 mcg', class: 'ICS / LABA', instructions: '1 inhalation BID. High-dose maintenance therapy. Not for MART.', hex: '#9f1239', tagColor: 'bg-rose-100 text-rose-800', indications: ['Asthma', 'COPD'], ventCompatible: false, totalDoses: '60 doses', expiration: '6 months after removing the foil wrapper', doseRange: { low: 'Not appropriate', medium: '1 inhalation BID', high: '2 inhalations BID' }, isMart: false, role: ['Controller'], flowRate: '≥ 40 L/min', icsDoseLevel: 'High', priceLevel: 3, hiddenPrice: 963 }, // MIMS Thailand brand; Thai FDA 2C 15091/63 (Teva), adults 18+, asthma + COPD; reference price as Symbicort Forte Turbuhaler
  { id: 440, type: 'DPI', shape: 'Turbuhaler', marketName: 'Oxis Turbuhaler', substance: 'Formoterol (strength unknown)', class: 'LABA', instructions: 'Dose unknown (strength not on record). In asthma only with an ICS. Twist grip to load.', hex: '#2a9fb3', tagColor: 'bg-sky-100 text-sky-800', indications: ['Asthma', 'COPD'], ventCompatible: false, totalDoses: 'Unknown', expiration: 'Until Expiry Date', doseRange: 'Unknown', isMart: false, role: ['Controller'], flowRate: '≥ 30 L/min' }, // Colour from Oxis Turbuhaler product pictures (felleskatalogen.no, rightbreathe.com), seen 11 Oct 2026: white body, turquoise grip. MIMS Thailand brand; Thai FDA registration 1C 226/41 cancelled 12 Jan 2007 (AstraZeneca); strength not stated in the Thai register or on MIMS Thailand (checked 11 Oct 2026), so strength, dose and pack size are Unknown; no reference price, level estimated
  { id: 32, type: 'MDI', shape: 'MDI', marketName: 'Foster MDI 100/6', substance: 'Beclometasone 100 mcg / Formoterol 6 mcg', class: 'ICS / LABA', instructions: '1-2 puffs BID. Extra-fine particles; rinse mouth.', hex: '#db2777', tagColor: 'bg-pink-100 text-pink-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: '120 puffs', expiration: '5 months after dispensing', doseRange: { low: '1 puff BID', medium: '2 puffs BID', high: 'Not appropriate' }, martMax: '8 puffs/day (GINA: up to 12 temporarily)', isMart: true, isExtraFine: true, role: ['Controller', 'Reliever'], flowRate: '< 30 L/min', icsDoseLevel: 'Low / Medium', priceLevel: 2, hiddenPrice: 437 }, // ≈437 THB/30 days from national reference price 874.19 THB per pack: Formoterol + beclometasone MDI 6/100 (120 doses)
  { id: 407, type: 'DPI', shape: 'NEXThaler', marketName: 'Foster NEXThaler 100/6', substance: 'Beclometasone 100 mcg / Formoterol 6 mcg', class: 'ICS / LABA', instructions: '1-2 inhalations BID or as MART. Extra-fine powder; rinse mouth.', hex: '#be185d', tagColor: 'bg-pink-100 text-pink-800', indications: ['Asthma', 'COPD'], ventCompatible: false, totalDoses: '120 doses', expiration: '6 months after opening the pouch', doseRange: { low: '1 inhalation BID', medium: '2 inhalations BID', high: 'Not appropriate' }, martMax: '8 inhalations/day (GINA: up to 12 temporarily)', isMart: true, isExtraFine: true, role: ['Controller', 'Reliever'], flowRate: '≥ 35 L/min', icsDoseLevel: 'Low / Medium' }, // MIMS Thailand brand; Thai FDA 2C 15055/67 (Chiesi), asthma + COPD; no reference price for the DPI form: price Unknown from Foster MDI
  { id: 33, type: 'MDI', shape: 'MDI', marketName: 'Foster 200/6', substance: 'Beclometasone 200 mcg / Formoterol 6 mcg', class: 'ICS / LABA', instructions: '2 puffs BID. Extra-fine particles; rinse mouth.', hex: '#db2777', tagColor: 'bg-pink-100 text-pink-800', indications: ['Asthma'], ventCompatible: true, totalDoses: '120 puffs', expiration: '5 months after dispensing', doseRange: { low: 'Not appropriate', medium: '1 puff BID', high: '2 puffs BID' }, isMart: false, isExtraFine: true, role: ['Controller'], flowRate: '< 30 L/min', icsDoseLevel: 'High' }, // No national reference price: price Unknown // UK SmPC (Fostair 200/6): asthma only; COPD licence is 100/6 only
  { id: 302, type: 'MDI', shape: 'MDI', marketName: 'Flutiform MDI 125/5 mcg', substance: 'Fluticasone propionate 125 mcg / Formoterol 5 mcg', class: 'ICS / LABA', instructions: '2 puffs BID. Requires coordination or spacer.', hex: '#f97316', tagColor: 'bg-orange-100 text-orange-800', indications: ['Asthma'], ventCompatible: true, totalDoses: '120 puffs', expiration: '3 months after dispensing', doseRange: { low: 'Not appropriate', medium: '2 puffs BID', high: 'Not appropriate' }, isMart: false, role: ['Controller'], flowRate: '< 30 L/min', icsDoseLevel: 'Medium', priceLevel: 2, hiddenPrice: 589 }, // ≈589 THB/30 days from national reference price 588.5 THB per pack: Formoterol + fluticasone propionate MDI 5/125 (120 doses)
  { id: 101, type: 'DPI', shape: 'Ellipta', marketName: 'Relvar Ellipta 100/25 mcg', substance: 'Fluticasone furoate 100 mcg / Vilanterol 25 mcg', class: 'ICS / LABA', instructions: '1 inhalation ONCE daily. Open yellow cover fully.', hex: '#ca8a04', tagColor: 'bg-yellow-100 text-yellow-800', indications: ['Asthma', 'COPD'], ventCompatible: false, totalDoses: '30 doses', expiration: '6 weeks after opening foil', doseRange: { low: '1 inhalation ONCE daily', medium: '1 inhalation ONCE daily', high: 'Not appropriate' }, isMart: false, role: ['Controller'], flowRate: '≥ 30 L/min', icsDoseLevel: 'Low / Medium', priceLevel: 3, hiddenPrice: 733 }, // ≈733 THB/30 days from national reference price 732.68 THB per pack: Vilanterol + fluticasone furoate DPI 25/100 (30 doses)
  { id: 102, type: 'DPI', shape: 'Ellipta', marketName: 'Relvar Ellipta 200/25 mcg', substance: 'Fluticasone furoate 200 mcg / Vilanterol 25 mcg', class: 'ICS / LABA', instructions: '1 inhalation ONCE daily. Open yellow cover fully.', hex: '#ca8a04', tagColor: 'bg-yellow-100 text-yellow-800', indications: ['Asthma', 'COPD'], ventCompatible: false, totalDoses: '30 doses', expiration: '6 weeks after opening foil', doseRange: { low: 'Not appropriate', medium: 'Not appropriate', high: '1 inhalation ONCE daily' }, isMart: false, role: ['Controller'], flowRate: '≥ 30 L/min', icsDoseLevel: 'High', priceLevel: 3, hiddenPrice: 937 }, // ≈937 THB/30 days from national reference price 936.97 THB per pack: Vilanterol + fluticasone furoate DPI 25/200 (30 doses) // Thai FDA label: asthma and COPD (2C 5/65)
  { id: 291, type: 'DPI', shape: 'Easyhaler', marketName: 'Bufomix Easyhaler 160/4.5', substance: 'Budesonide 160 mcg / Formoterol 4.5 mcg', class: 'ICS / LABA', instructions: '1-2 inhalations BID. Shake well before use. Rinse mouth.', hex: '#dc2626', tagColor: 'bg-red-100 text-red-800', indications: ['Asthma', 'COPD'], ventCompatible: false, totalDoses: '120 doses', expiration: '4 months after opening foil', doseRange: { low: '1 inhalation BID', medium: '2 inhalations BID', high: '4 inhalations BID' }, martMax: '12 inhalations/day', isMart: true, role: ['Controller', 'Reliever'], flowRate: '≥ 30 L/min', icsDoseLevel: 'Medium', priceLevel: 3, hiddenPrice: 662 }, // ≈662 THB/30 days from national reference price 662.33 THB per pack: Formoterol + budesonide DPI 4.5/160 (120 doses)
  { id: 293, type: 'DPI', shape: 'Easyhaler', marketName: 'Giona Easyhaler 100 mcg', substance: 'Budesonide 100 mcg', class: 'ICS', instructions: '1-2 inhalations BID. Shake well before use. Rinse mouth after.', hex: '#854d0e', tagColor: 'bg-amber-100 text-amber-800', indications: ['Asthma'], ventCompatible: false, totalDoses: '200 doses', expiration: '6 months after opening foil', doseRange: { low: '1-2 inhalations BID', medium: '4 inhalations BID', high: 'Not appropriate' }, isMart: false, role: ['Controller'], flowRate: '≥ 30 L/min', icsDoseLevel: 'Low', priceLevel: 1, hiddenPrice: 91 }, // ≈91 THB/30 days from national reference price 301.92 THB per pack: Budesonide DPI 100 mcg (200 doses) // UK SmPC (Easyhaler Budesonide 100): asthma only
  { id: 294, type: 'DPI', shape: 'Easyhaler', marketName: 'Giona Easyhaler 200 mcg', substance: 'Budesonide 200 mcg', class: 'ICS', instructions: '1-2 inhalations BID. Rinse mouth after.', hex: '#854d0e', tagColor: 'bg-amber-100 text-amber-800', indications: ['Asthma'], ventCompatible: false, totalDoses: '200 doses', expiration: '6 months after opening foil', doseRange: { low: '1 inhalation BID', medium: '2 inhalations BID', high: '4 inhalations BID' }, isMart: false, role: ['Controller'], flowRate: '≥ 30 L/min', icsDoseLevel: 'Medium', priceLevel: 2, hiddenPrice: 334 }, // ≈334 THB/30 days from national reference price 556.40 THB per pack: Budesonide DPI 200 mcg (200 doses). Thai FDA 1C 74/62: 200 doses per inhaler; indication asthma

  // --- ICS / LABA / LAMA ---
  { id: 21, type: 'MDI', shape: 'MDI', marketName: 'Breztri Aerosphere', substance: 'Budesonide 160 mcg / Formoterol 5 mcg / Glycopyrronium 7.2 mcg', class: 'ICS / LABA / LAMA', instructions: '2 puffs BID. Shake well before use. Rinse mouth.', hex: '#eab308', tagColor: 'bg-yellow-100 text-yellow-800', indications: ['COPD'], ventCompatible: true, totalDoses: '120 puffs', expiration: '3 months after foil removal', doseRange: '2 puffs BID', isMart: false, role: ['Controller'], flowRate: '< 30 L/min', icsDoseLevel: 'Medium' }, // No national reference price: price Unknown
  { id: 25, type: 'MDI', shape: 'MDI', marketName: 'Trimbow MDI 87/5/9', substance: 'Beclometasone 87 mcg / Formoterol 5 mcg / Glycopyrronium 9 mcg', class: 'ICS / LABA / LAMA', instructions: '2 puffs BID. Extra-fine particles; rinse mouth.', hex: '#be185d', tagColor: 'bg-pink-100 text-pink-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: '120 puffs', expiration: '2 months after dispensing', doseRange: '2 puffs BID', isMart: false, isExtraFine: true, role: ['Controller'], flowRate: '< 30 L/min', icsDoseLevel: 'Medium' }, // No national reference price: price Unknown
  { id: 12, type: 'DPI', shape: 'Ellipta', marketName: 'Trelegy Ellipta 100/62.5/25 mcg', substance: 'Fluticasone furoate 100 mcg / Vilanterol 25 mcg / Umeclidinium 62.5 mcg', class: 'ICS / LABA / LAMA', instructions: '1 inhalation ONCE daily. Open beige/tan cover.', hex: '#d4b59e', tagColor: 'bg-stone-100 text-stone-800', indications: ['Asthma', 'COPD'], ventCompatible: false, totalDoses: '30 doses', expiration: '6 weeks after opening foil', doseRange: '1 inhalation ONCE daily', isMart: false, role: ['Controller'], flowRate: '≥ 30 L/min', icsDoseLevel: 'Low / Medium' }, // No national reference price: price Unknown
  { id: 103, type: 'DPI', shape: 'Ellipta', marketName: 'Trelegy Ellipta 200/62.5/25 mcg', substance: 'Fluticasone furoate 200 mcg / Vilanterol 25 mcg / Umeclidinium 62.5 mcg', class: 'ICS / LABA / LAMA', instructions: '1 inhalation ONCE daily. Open beige/tan cover. Asthma only.', hex: '#d4b59e', tagColor: 'bg-stone-100 text-stone-800', indications: ['Asthma'], ventCompatible: false, totalDoses: '30 doses', expiration: '6 weeks after opening foil', doseRange: { low: 'Not appropriate', medium: 'Not appropriate', high: '1 inhalation ONCE daily' }, isMart: false, role: ['Controller'], flowRate: '≥ 30 L/min', icsDoseLevel: 'High' }, // No national reference price: price Unknown

  // --- LABA ---
  { id: 24, type: 'DPI', shape: 'Diskus', marketName: 'Serevent Diskus', substance: 'Salmeterol 50 mcg', class: 'LABA', instructions: '1 blister BID. Not for acute bronchospasm.', hex: '#16a34a', tagColor: 'bg-green-100 text-green-800', indications: ['Asthma', 'COPD'], ventCompatible: false, totalDoses: '60 blisters', expiration: '6 weeks after opening foil', doseRange: '1 blister BID', isMart: false, role: ['Controller'], flowRate: '≥ 30 L/min' }, // No national reference price: price Unknown
  { id: 303, type: 'DPI', shape: 'Breezhaler', marketName: 'Onbrez Breezhaler 150 mcg', substance: 'Indacaterol 150 mcg', class: 'LABA', instructions: '1 capsule inhaled ONCE daily. Listen for "whirring".', hex: '#0ea5e9', tagColor: 'bg-sky-100 text-sky-800', indications: ['COPD'], ventCompatible: false, totalDoses: '30 capsules', expiration: 'Until Expiry Date', doseRange: '1 capsule ONCE daily', isMart: false, role: ['Controller'], flowRate: '≥ 50 L/min', priceLevel: 4, hiddenPrice: 1089 }, // ≈1089 THB/30 days from national reference price 1088.73 THB per pack: Indacaterol cap 150 mcg (30)
  { id: 304, type: 'DPI', shape: 'Breezhaler', marketName: 'Onbrez Breezhaler 300 mcg', substance: 'Indacaterol 300 mcg', class: 'LABA', instructions: '1 capsule inhaled ONCE daily. Listen for "whirring".', hex: '#0284c7', tagColor: 'bg-sky-100 text-sky-800', indications: ['COPD'], ventCompatible: false, totalDoses: '30 capsules', expiration: 'Until Expiry Date', doseRange: '1 capsule ONCE daily', isMart: false, role: ['Controller'], flowRate: '≥ 50 L/min', priceLevel: 4, hiddenPrice: 1089 }, // ≈1089 THB/30 days from national reference price 1088.73 THB per pack: Indacaterol cap 300 mcg (30)

  // --- LAMA ---
  { id: 13, type: 'DPI', shape: 'Handihaler', marketName: 'Spiriva HandiHaler', substance: 'Tiotropium 18 mcg', class: 'LAMA', instructions: '1 capsule inhaled daily. Pierce capsule once.', hex: '#4cc79a', tagColor: 'bg-teal-100 text-teal-800', indications: ['COPD'], ventCompatible: false, totalDoses: '30 capsules', expiration: 'Blister expires 9 days after exposing', doseRange: '1 capsule ONCE daily', isMart: false, role: ['Controller'], flowRate: '≥ 20 L/min', priceLevel: 2, hiddenPrice: 500 }, // ≈500 THB/30 days from national reference price 500 THB per pack: Tiotropium cap 18 mcg (30)
  { id: 415, type: 'DPI', shape: 'Handihaler', marketName: 'Tropoair 18 mcg (LupinHaler)', substance: 'Tiotropium 18 mcg', class: 'LAMA', instructions: '1 capsule inhaled daily (2 breaths). Pierce once.', hex: '#16a34a', tagColor: 'bg-teal-100 text-teal-800', indications: ['COPD'], ventCompatible: false, totalDoses: '30 capsules', expiration: 'Until Expiry Date', doseRange: '1 capsule ONCE daily', isMart: false, role: ['Controller'], flowRate: 'Unknown', priceLevel: 2, hiddenPrice: 500 }, // MIMS Thailand brand; Thai FDA 1C 31/68 (Lupin), COPD; LupinHaler is used like the HandiHaler; reference price 500 THB per pack: Tiotropium cap 18 mcg (30)
  { id: 15, type: 'SMI', shape: 'Respimat', marketName: 'Spiriva Respimat 2.5 mcg', substance: 'Tiotropium 2.5 mcg', class: 'LAMA', instructions: '2 actuations ONCE daily. TOP: Turn, Open, Press.', hex: '#0d9488', tagColor: 'bg-teal-100 text-teal-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: '60 puffs (30 doses)', expiration: '3 months after assembly', doseRange: '2 actuations ONCE daily', isMart: false, role: ['Controller'], flowRate: '< 30 L/min', priceLevel: 4, hiddenPrice: 1348 }, // ≈1348 THB/30 days from national reference price 1348.2 THB per pack: Tiotropium 2.5 mcg/dose (60 doses)
  { id: 305, type: 'DPI', shape: 'Breezhaler', marketName: 'Seebri Breezhaler 50 mcg', substance: 'Glycopyrronium 50 mcg', class: 'LAMA', instructions: '1 capsule inhaled ONCE daily. Listen for "whirring".', hex: '#ea580c', tagColor: 'bg-orange-100 text-orange-800', indications: ['COPD'], ventCompatible: false, totalDoses: '30 capsules', expiration: 'Until Expiry Date', doseRange: '1 capsule ONCE daily', isMart: false, role: ['Controller'], flowRate: '≥ 50 L/min', priceLevel: 3, hiddenPrice: 887 }, // ≈887 THB/30 days from national reference price 886.76 THB per pack: Glycopyrronium cap 50 mcg (30)

  // --- LABA / LAMA ---
  { id: 11, type: 'DPI', shape: 'Ellipta', marketName: 'Anoro Ellipta 62.5/25 mcg', substance: 'Vilanterol 25 mcg / Umeclidinium 62.5 mcg', class: 'LABA / LAMA', instructions: '1 inhalation ONCE daily. Open red cover fully.', hex: '#b24f56', tagColor: 'bg-rose-100 text-rose-800', indications: ['COPD'], ventCompatible: false, totalDoses: '30 doses', expiration: '6 weeks after opening foil', doseRange: '1 inhalation ONCE daily', isMart: false, role: ['Controller'], flowRate: '≥ 30 L/min', priceLevel: 2, hiddenPrice: 340 }, // ≈340 THB/30 days from national reference price 340 THB per pack: Vilanterol + umeclidinium DPI 22/55 (30 doses); 3 boxes 1,020
  { id: 14, type: 'DPI', shape: 'Breezhaler', marketName: 'Ultibro Breezhaler 110/50 mcg', substance: 'Indacaterol 110 mcg / Glycopyrronium 50 mcg', class: 'LABA / LAMA', instructions: '1 capsule inhaled daily. Listen for "whirring".', hex: '#eab308', tagColor: 'bg-yellow-100 text-yellow-800', indications: ['COPD'], ventCompatible: false, totalDoses: '30 capsules', expiration: 'Until Expiry Date', doseRange: '1 capsule ONCE daily', isMart: false, role: ['Controller'], flowRate: '≥ 50 L/min', priceLevel: 4, hiddenPrice: 1414 }, // ≈1414 THB/30 days from national reference price 1413.6 THB per pack: Indacaterol + glycopyrronium cap 110/50 (30)
  { id: 22, type: 'SMI', shape: 'Respimat', marketName: 'Spiolto Respimat 2.5/2.5 mcg', substance: 'Olodaterol 2.5 mcg / Tiotropium 2.5 mcg', class: 'LABA / LAMA', instructions: '2 actuations ONCE daily. TOP: Turn, Open, Press. Also sold as Spiolto Respimat Reusable (refill cartridges).', hex: '#84cc16', tagColor: 'bg-lime-100 text-lime-800', indications: ['COPD'], ventCompatible: true, totalDoses: '60 puffs (30 doses)', expiration: '3 months after assembly', doseRange: '2 actuations ONCE daily', isMart: false, role: ['Controller'], flowRate: '< 30 L/min', priceLevel: 2, hiddenPrice: 540 }, // ≈540 THB/30 days from national reference price 540 THB per pack: Olodaterol + tiotropium 2.5/2.5 (60 doses) with inhaler

  // --- Nebulizers ---
  { id: 17, type: 'Nebulizer', shape: 'Nebulizer', marketName: 'Salbutamol Nebules 2.5 mg', substance: 'Salbutamol 2.5 mg per 2.5 mL', class: 'SABA', instructions: 'Nebulize over 5-15 mins PRN.', hex: '#3b82f6', tagColor: 'bg-blue-100 text-blue-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: 'Single use vial', expiration: 'Use immediately after opening', doseRange: '2.5 mg Nebulized Q4-6H PRN', isMart: false, role: ['Reliever', 'Exacerbation'], flowRate: 'Tidal', priceLevel: 1, hiddenPrice: 10, priceBasis: 'pack' }, // reliever, per pack from national reference price 10 THB per pack: Salbutamol nebuliser solution 1 mg/mL (2.5 mL)
  { id: 424, type: 'Nebulizer', shape: 'Nebulizer', marketName: 'Asmasal SDU 2.5 mg', substance: 'Salbutamol 2.5 mg per 2.5 mL', class: 'SABA', instructions: 'Nebulize over 5-15 mins PRN.', hex: '#2563eb', tagColor: 'bg-blue-100 text-blue-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: 'Single use vial', expiration: 'Use immediately after opening', doseRange: '2.5 mg Nebulized Q4-6H PRN', isMart: false, role: ['Reliever', 'Exacerbation'], flowRate: 'Tidal', priceLevel: 1, hiddenPrice: 10, priceBasis: 'pack' }, // MIMS Thailand brand; Thai FDA 1A 164/64 (Inter Pharma); reference price 10 THB per tube: Salbutamol nebuliser solution 1 mg/mL (2.5 mL)
  { id: 425, type: 'Nebulizer', shape: 'Nebulizer', marketName: 'Salda Inhale 1 mg/mL', substance: 'Salbutamol 1 mg per 1 mL', class: 'SABA', instructions: 'Nebulize 2.5 mL (2.5 mg) over 5-15 mins PRN.', hex: '#3b82f6', tagColor: 'bg-blue-100 text-blue-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: 'Single use vial', expiration: 'Use immediately after opening', doseRange: '2.5 mg (2.5 mL) Nebulized Q4-6H PRN', isMart: false, role: ['Reliever', 'Exacerbation'], flowRate: 'Tidal', priceLevel: 1, hiddenPrice: 10, priceBasis: 'pack' }, // MIMS Thailand brand; Thai FDA 1A 265/52 (Millimed); reference price as Asmasal SDU
  { id: 426, type: 'Nebulizer', shape: 'Nebulizer', marketName: 'Salda Forte Inhale 5 mg/mL', substance: 'Salbutamol 5 mg per 1 mL', class: 'SABA', instructions: 'Dilute 0.5-1 mL in normal saline; nebulize PRN.', hex: '#1e40af', tagColor: 'bg-blue-100 text-blue-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: 'Multi-dose bottle', expiration: 'Until Expiry Date', doseRange: '2.5-5 mg (0.5-1 mL in saline) Nebulized Q4-6H PRN', isMart: false, role: ['Reliever', 'Exacerbation'], flowRate: 'Tidal', priceLevel: 1, hiddenPrice: 52.5, priceBasis: 'pack' }, // MIMS Thailand brand; Thai FDA 1A 266/52 (Millimed); reference price 52.5 THB per bottle: Salbutamol nebuliser solution 5 mg/mL (20 mL)
  { id: 427, type: 'Nebulizer', shape: 'Nebulizer', marketName: 'Venterol Solution 5 mg/mL', substance: 'Salbutamol 5 mg per 1 mL', class: 'SABA', instructions: 'Dilute 0.5-1 mL in normal saline; nebulize PRN.', hex: '#1e3a8a', tagColor: 'bg-blue-100 text-blue-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: 'Multi-dose bottle', expiration: 'Until Expiry Date', doseRange: '2.5-5 mg (0.5-1 mL in saline) Nebulized Q4-6H PRN', isMart: false, role: ['Reliever', 'Exacerbation'], flowRate: 'Tidal', priceLevel: 1, hiddenPrice: 52.5, priceBasis: 'pack' }, // MIMS Thailand brand; Thai FDA 1A 320/46 (salbutamol sulfate 6 mg/mL = 5 mg/mL base); reference price as Salda Forte
  { id: 18, type: 'Nebulizer', shape: 'Nebulizer', marketName: 'Berodual Nebules / Drops', substance: 'Fenoterol 0.5 mg / Ipratropium 0.25 mg per 1mL', class: 'SABA / SAMA', instructions: 'Add drops to normal saline, nebulize up to QID.', hex: '#16a34a', tagColor: 'bg-green-100 text-green-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: '20mL bottle or unit doses', expiration: '6 months after opening (drops)', doseRange: '1-2 mL (20-40 drops) QID', isMart: false, role: ['Reliever', 'Exacerbation'], flowRate: 'Tidal', priceLevel: 2, hiddenPrice: 570 }, // ≈570 THB/30 days from national reference price 95 THB per pack: Ipratropium + fenoterol nebuliser solution (20 mL)
  { id: 417, type: 'Nebulizer', shape: 'Nebulizer', marketName: 'Iperol Solution', substance: 'Fenoterol 0.5 mg / Ipratropium 0.25 mg per 1mL', class: 'SABA / SAMA', instructions: 'Add to normal saline, nebulize up to QID.', hex: '#16a34a', tagColor: 'bg-green-100 text-green-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: 'Multi-dose bottle', expiration: 'Until Expiry Date', doseRange: '1-2 mL (20-40 drops) QID', isMart: false, role: ['Reliever', 'Exacerbation'], flowRate: 'Tidal', priceLevel: 2, hiddenPrice: 570 }, // MIMS Thailand brand; Thai FDA 2A 56/53 (LBS); reference price as Berodual solution
  { id: 418, type: 'Nebulizer', shape: 'Nebulizer', marketName: 'Punol Inhalation Solution', substance: 'Fenoterol 0.5 mg / Ipratropium 0.25 mg per 1mL', class: 'SABA / SAMA', instructions: 'Add to normal saline, nebulize up to QID.', hex: '#22c55e', tagColor: 'bg-green-100 text-green-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: '20 mL bottle', expiration: 'Until Expiry Date', doseRange: '1-2 mL (20-40 drops) QID', isMart: false, role: ['Reliever', 'Exacerbation'], flowRate: 'Tidal', priceLevel: 2, hiddenPrice: 570 }, // MIMS Thailand brand; Thai FDA 2A 142/46 (Biolab); reference price as Berodual solution
  { id: 419, type: 'Nebulizer', shape: 'Nebulizer', marketName: 'Iperol Forte', substance: 'Fenoterol 1.25 mg / Ipratropium 0.5 mg per 4 mL', class: 'SABA / SAMA', instructions: 'Nebulize 1 vial (4 mL) undiluted, up to QID.', hex: '#15803d', tagColor: 'bg-green-100 text-green-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: 'Single use vial (4 mL)', expiration: 'Use immediately after opening', doseRange: '4 mL (1 vial) Nebulized QID', isMart: false, role: ['Reliever', 'Exacerbation'], flowRate: 'Tidal', priceLevel: 1, hiddenPrice: 7.16, priceBasis: 'pack' }, // MIMS Thailand brand; Thai FDA 2A 88/53 (LBS); reference price 7.16 THB per vial: Ipratropium + fenoterol nebuliser solution (0.5 + 1.25 mg)/4 mL
  { id: 420, type: 'Nebulizer', shape: 'Nebulizer', marketName: 'Inhalex Forte', substance: 'Fenoterol 1.25 mg / Ipratropium 0.5 mg per 4 mL', class: 'SABA / SAMA', instructions: 'Nebulize 4 mL undiluted, up to QID.', hex: '#166534', tagColor: 'bg-green-100 text-green-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: '4 mL per dose', expiration: 'Until Expiry Date', doseRange: '4 mL Nebulized QID', isMart: false, role: ['Reliever', 'Exacerbation'], flowRate: 'Tidal', priceLevel: 1, hiddenPrice: 7.16, priceBasis: 'pack' }, // MIMS Thailand brand; Thai FDA 2A 45/64 (Inter Pharma; 0.125 + 0.3125 mg/mL); reference price as Iperol Forte
  { id: 421, type: 'Nebulizer', shape: 'Nebulizer', marketName: 'Combivent UDV', substance: 'Salbutamol 2.5 mg / Ipratropium 0.5 mg per 2.5 mL', class: 'SABA / SAMA', instructions: 'Nebulize 1 vial undiluted, 3-4 times daily.', hex: '#f97316', tagColor: 'bg-orange-100 text-orange-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: 'Single use vial (2.5 mL)', expiration: 'Use immediately after opening', doseRange: '2.5 mL (1 vial) Nebulized QID', isMart: false, role: ['Reliever', 'Exacerbation'], flowRate: 'Tidal', priceLevel: 1, hiddenPrice: 27.5, priceBasis: 'pack' }, // MIMS Thailand brand; Thai FDA 2C 45/54 (reversible bronchospasm needing more than one bronchodilator); UK Combivent UDVs: COPD; reference price 27.5 THB per vial: Salbutamol + ipratropium nebuliser solution (2.5 + 0.5 mg)/2.5 mL
  { id: 19, type: 'Nebulizer', shape: 'Nebulizer', marketName: 'Pulmicort Respules', substance: 'Budesonide 0.25-1 mg', class: 'ICS', instructions: 'Nebulize QD or BID. Acute exacerbations: High dose.', hex: '#854d0e', tagColor: 'bg-amber-100 text-amber-800', indications: ['Asthma', 'COPD'], ventCompatible: true, totalDoses: 'Single use vial', expiration: 'Foil envelope expires in 2 months', doseRange: '0.25-1 mg Nebulized QD or BID', isMart: false, role: ['Exacerbation'], flowRate: 'Tidal', icsDoseLevel: 'Low / Medium / High', priceLevel: 4, hiddenPrice: 1996 }, // ≈1996 THB/30 days from national reference price 33.27 THB per pack: Budesonide nebuliser suspension 0.5 mg/2 mL
  { id: 403, type: 'Nebulizer', shape: 'Nebulizer', marketName: 'Budecort Respules 0.5 / 1 mg', substance: 'Budesonide 0.5-1 mg per 2 mL', class: 'ICS', instructions: 'Nebulize BID. Shake the respule gently first.', hex: '#78350f', tagColor: 'bg-amber-100 text-amber-800', indications: ['Asthma'], ventCompatible: true, totalDoses: 'Single use vial', expiration: 'Use immediately after opening', doseRange: '0.5-1 mg Nebulized BID', isMart: false, role: ['Exacerbation'], flowRate: 'Tidal', icsDoseLevel: 'Low / Medium / High', priceLevel: 4, hiddenPrice: 1996 }, // MIMS Thailand brand; Thai FDA 1C 1/67, 2/67 (Cipla), asthma; reference price 33.27 THB per 0.5 mg respule, as Pulmicort Respules
  { id: 434, type: 'Nebulizer', shape: 'Nebulizer', marketName: 'Bunase Respules 0.5 / 1 mg', substance: 'Budesonide 0.5-1 mg per 2 mL', class: 'ICS', instructions: 'Nebulize BID. Shake the respule gently first.', hex: '#78350f', tagColor: 'bg-amber-100 text-amber-800', indications: ['Asthma'], ventCompatible: true, totalDoses: 'Single use vial', expiration: 'Use immediately after opening', doseRange: '0.5-1 mg Nebulized BID', isMart: false, role: ['Exacerbation'], flowRate: 'Tidal', icsDoseLevel: 'Low / Medium / High', priceLevel: 4, hiddenPrice: 1996 }, // MIMS Thailand brand; Thai FDA registration 1C 335/51 and 1C 40/63 cancelled 21 Oct 2019 and 14 Jul 2023 (Macleods), asthma; reference price as Pulmicort Respules
];

// --- Dose conversion engine ---
// Switches are matched by GINA ICS dose level (low / medium / high) using each
// product's own doseRange, then annotated with GINA (asthma) or GOLD (COPD)
// switching rules derived from the products' classes, roles and devices.
const CONVERT_CLASSES = ['ICS', 'LABA', 'LAMA', 'SABA', 'SAMA'];
const DOSE_LEVELS = ['low', 'medium', 'high'];

// {class: {name, amount, unit}} using the positional class/substance pairing.
const medComponents = (med) => {
  const classes = med.class.split('/').map(s => s.trim());
  const subs = med.substance.split('/').map(s => s.trim());
  const out = {};
  classes.forEach((c, i) => {
    const s = subs[i] || subs[0];
    const m = s.match(/^(.*?)\s+([\d.]+)(?:\s*-\s*[\d.]+)?\s*(mcg|mg)\b/i);
    out[c] = m ? { name: m[1], amount: parseFloat(m[2]), unit: m[3].toLowerCase() } : { name: s, amount: null, unit: null };
  });
  return out;
};

// Doses per day from a regimen string; 'prn' for as-needed, null when variable.
const regimenFreq = (reg) => {
  if (!reg) return null;
  if (/PRN/i.test(reg) && !/BID|QID|TID|daily/i.test(reg)) return 'prn';
  if (/\bor\b/i.test(reg)) return null;
  if (/QID/i.test(reg)) return 4;
  if (/TID/i.test(reg)) return 3;
  if (/BID|twice/i.test(reg)) return 2;
  if (/ONCE daily|\bQD\b|\bOD\b/i.test(reg)) return 1;
  return null;
};

const regimenPuffs = (reg) => {
  const m = reg && reg.match(/(\d+)(?:\s*-\s*(\d+))?\s*(?:puffs?|inhalations?|blisters?|actuations?|capsules?)/i);
  return m ? [parseInt(m[1], 10), parseInt(m[2] || m[1], 10)] : null;
};

// ICS micrograms per day as [min, max], or null when it can't be derived.
const icsPerDay = (med, reg) => {
  const ics = medComponents(med).ICS;
  const f = regimenFreq(reg), p = regimenPuffs(reg);
  if (!ics || !ics.amount || typeof f !== 'number' || !p) return null;
  const mcg = ics.unit === 'mg' ? ics.amount * 1000 : ics.amount;
  return [Math.round(p[0] * f * mcg), Math.round(p[1] * f * mcg)];
};
const fmtMcg = (r) => (r ? `${r[0] === r[1] ? r[0] : `${r[0]}–${r[1]}`} mcg/day` : null);

// GINA ICS dose levels this product can deliver (nebulised ICS isn't in the GINA inhaler table).
const icsLevels = (med) => {
  if (!med.class.split('/').map(s => s.trim()).includes('ICS') || med.type === 'Nebulizer') return [];
  if (typeof med.doseRange === 'object') return DOSE_LEVELS.filter(l => !med.doseRange[l].includes('Not'));
  // Fixed-dose products: every level named in icsDoseLevel (e.g. 'Low / Medium')
  return (med.icsDoseLevel || '').split('/').map(s => s.trim().toLowerCase()).filter(l => DOSE_LEVELS.includes(l));
};
const regimenAt = (med, level) => (typeof med.doseRange === 'object' ? med.doseRange[level] : med.doseRange);
const defaultIcsLevel = (med) => {
  const lv = icsLevels(med);
  const pref = (med.icsDoseLevel || '').split('/')[0].trim().toLowerCase();
  return lv.includes(pref) ? pref : (lv[0] || null);
};
const brandOf = (med) => med.marketName.split(/\s+/)[0];

const buildConversion = (from, to, disease, fromLevelPick, toLevelPick, t) => {
  const fc = medComponents(from), tc = medComponents(to);
  const fHasIcs = 'ICS' in fc, tHasIcs = 'ICS' in tc;
  const fLevels = icsLevels(from), tLevels = icsLevels(to);

  const fromLvl = fLevels.length ? (fLevels.includes(fromLevelPick) ? fromLevelPick : defaultIcsLevel(from)) : null;
  let toLvl = null, nearest = false, alternatives = [];
  if (tLevels.length) {
    if (fromLvl) {
      if (tLevels.includes(fromLvl)) toLvl = fromLvl;
      else {
        const want = DOSE_LEVELS.indexOf(fromLvl);
        toLvl = [...tLevels].sort((a, b) => Math.abs(DOSE_LEVELS.indexOf(a) - want) - Math.abs(DOSE_LEVELS.indexOf(b) - want) || DOSE_LEVELS.indexOf(a) - DOSE_LEVELS.indexOf(b))[0];
        nearest = true;
        alternatives = deviceData.filter(d => d.id !== to.id && d.shape === to.shape && brandOf(d) === brandOf(to) && icsLevels(d).includes(fromLvl));
      }
    } else {
      toLvl = tLevels.includes(toLevelPick) ? toLevelPick : tLevels[0];
    }
  }
  const fromReg = fromLvl ? regimenAt(from, fromLvl) : (typeof from.doseRange === 'object' ? regimenAt(from, defaultIcsLevel(from) || 'medium') : from.doseRange);
  const toReg = toLvl ? regimenAt(to, toLvl) : (typeof to.doseRange === 'object' ? regimenAt(to, defaultIcsLevel(to) || 'medium') : to.doseRange);
  const fromMcg = fmtMcg(icsPerDay(from, fromReg)), toMcg = fmtMcg(icsPerDay(to, toReg));

  const components = CONVERT_CLASSES.filter(c => c in fc || c in tc).map(c => ({
    cls: c,
    status: c in fc && c in tc ? 'continue' : c in tc ? 'start' : 'stop',
    from: fc[c]?.name, to: tc[c]?.name,
    fromMcg: c === 'ICS' ? fromMcg : null, toMcg: c === 'ICS' ? toMcg : null,
  }));

  const notes = [];
  const add = (sev, text) => notes.push({ sev, text });
  const fN = from.marketName, tN = to.marketName;
  const tLongActing = 'LABA' in tc || 'LAMA' in tc;
  const sharesRole = from.role.some(r => to.role.includes(r));

  if (!sharesRole) add('warning', t.nRoleMismatch(fN, tN));

  if (disease === 'Asthma') {
    if (!to.indications.includes('Asthma')) add('critical', t.nAsthmaNotIndicated(tN));
    if (!tHasIcs && tLongActing) add('critical', t.nAsthmaLabaNoIcs(tN));
    else if (fHasIcs && !tHasIcs) add('critical', t.nAsthmaIcsStopped);
    if (to.isMart) add('info', t.nAsthmaMartTo(tN, to.martMax));
    if (from.isMart && !to.isMart && tHasIcs) add('warning', t.nAsthmaMartFrom(fN));
    if (!('LAMA' in fc) && 'LAMA' in tc) add('info', t.nAsthmaLamaAdded);
    if ('LABA' in fc && !('LABA' in tc) && tHasIcs) add('warning', t.nAsthmaLabaStopped);
    if (fromLvl && toLvl && fromLvl !== toLvl) add('info', DOSE_LEVELS.indexOf(toLvl) < DOSE_LEVELS.indexOf(fromLvl) ? t.nStepDown : t.nStepUp);
  } else {
    if (!to.indications.includes('COPD')) add('critical', t.nCopdNotIndicated(tN));
    if (fHasIcs && !tHasIcs) add('warning', t.nCopdIcsStopped);
    if (!fHasIcs && tHasIcs) add('info', t.nCopdIcsStarted);
    if ('LAMA' in fc && !('LAMA' in tc)) add('warning', t.nCopdLamaStopped);
    if ('LABA' in fc && !('LABA' in tc)) add('warning', t.nCopdLabaStopped);
    if (to.isMart) add('info', t.nCopdMart(tN));
    if ('LABA' in tc && 'LAMA' in tc && !tHasIcs && !('LABA' in fc && 'LAMA' in fc && !fHasIcs)) add('info', t.nCopdDual);
  }

  const relieverOnly = (d) => d.role.includes('Reliever') && !d.role.includes('Controller');
  if (relieverOnly(from) && relieverOnly(to)) add('info', t.nRelievers);
  else if ([...Object.keys(fc)].sort().join() === [...Object.keys(tc)].sort().join()) add('info', t.nLikeForLike);
  if ((fHasIcs && from.type === 'Nebulizer') || (tHasIcs && to.type === 'Nebulizer')) add('info', t.nNebIcs);
  if (fHasIcs && tHasIcs && !!from.isExtraFine !== !!to.isExtraFine) add('info', t.nExtraFine);

  if (flowUnknown(to)) add('warning', t.nFlowUnknown(tN));
  else if (pifNeeded(to.flowRate) > pifNeeded(from.flowRate)) add('warning', t.nFlow(tN, to.flowRate));
  if (from.ventCompatible && !to.ventCompatible) add('warning', t.nVent(tN));
  if (nlemConditionOf(to, t)) add('warning', nlemConditionOf(to, t));
  if (from.type !== to.type) add('info', t.nDeviceChange(from.type, to.type));
  if (to.type === 'MDI' && from.type !== 'MDI' && !/do not use with a spacer/i.test(to.instructions)) add('info', t.nSpacer);

  const f1 = regimenFreq(fromReg), f2 = regimenFreq(toReg);
  if (f1 && f2 && f1 !== f2) add('info', t.nFreq(t.convertFreq[f1], t.convertFreq[f2]));
  add('info', t.nTiming(fN, tN));
  if (tHasIcs) add('info', t.nRinse(tN));
  add('info', disease === 'Asthma' ? t.nFollowAsthma : t.nFollowCopd);

  const rank = { critical: 0, warning: 1, info: 2 };
  notes.sort((a, b) => rank[a.sev] - rank[b.sev]);

  return {
    fromLvl, toLvl, fLevels, tLevels, nearest, alternatives, fromReg, toReg, fromMcg, toMcg,
    tHasIcs, toFixed: tHasIcs && typeof to.doseRange !== 'object', components, notes,
  };
};

const SEV_STYLE = {
  critical: 'bg-rose-50 border-rose-200 text-rose-800',
  warning: 'bg-amber-50 border-amber-200 text-amber-800',
  info: 'bg-white border-slate-200 text-slate-700',
};
const STATUS_STYLE = {
  continue: 'bg-slate-200 text-slate-700',
  start: 'bg-emerald-100 text-emerald-800',
  stop: 'bg-rose-100 text-rose-800',
};

const IcsLevelPicker = ({ med, levels, value, onPick, t }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
    {levels.map(l => {
      const reg = regimenAt(med, l);
      const mcg = fmtMcg(icsPerDay(med, reg));
      const on = l === value;
      return (
        <button key={l} onClick={() => onPick(l)} aria-pressed={on} className={`text-left p-3 rounded-xl border-2 transition-all ${on ? 'border-purple-600 bg-purple-50' : 'border-slate-200 bg-white hover:border-purple-300'}`}>
          <span className={`block text-[11px] font-bold uppercase tracking-wider ${on ? 'text-purple-700' : 'text-slate-500'}`}>{t.convertLevel[l]}</span>
          <span className="block font-bold text-slate-800 text-sm mt-0.5">{reg}</span>
          {mcg && <span className="block text-[11px] text-slate-500 mt-0.5 tabular-nums">{mcg}</span>}
        </button>
      );
    })}
  </div>
);

const ConvertSideCard = ({ label, med, regimen, t }) => (
  <div className="bg-white rounded-xl border border-slate-200 p-3 flex items-start gap-3 min-w-0">
    <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100 shrink-0">{medIcon(med, 'w-10 h-10')}</div>
    <div className="min-w-0">
      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</span>
      <span className="block font-extrabold text-slate-800 leading-tight">{med.marketName}</span>
      <RenderSubstances medClass={med.class} medSubstance={med.substance} compact={true} className="text-[11px] mt-0.5" />
      {regimen && <span className="block text-xs font-bold text-indigo-700 mt-1">{regimen}</span>}
    </div>
  </div>
);

const DoseConversionModal = ({ pair, t, onClose }) => {
  const [reversed, setReversed] = useState(false);
  const [diseaseChoice, setDiseaseChoice] = useState(null);
  const [fromLevel, setFromLevel] = useState(null);
  const [toLevel, setToLevel] = useState(null);
  const from = reversed ? pair[1] : pair[0];
  const to = reversed ? pair[0] : pair[1];
  const disease = diseaseChoice || (from.indications.includes('Asthma') && to.indications.includes('Asthma') ? 'Asthma' : 'COPD');
  const conv = buildConversion(from, to, disease, fromLevel, toLevel, t);
  const greyed = conv.nearest && conv.alternatives.length > 0;
  // With a recommended strength shown, "What changes" and the guidance describe that strength.
  const rec = greyed ? conv.alternatives[0] : null;
  const detail = rec ? buildConversion(from, rec, disease, conv.fromLvl, null, t) : conv;
  const swap = () => { setReversed(r => !r); setFromLevel(null); setToLevel(null); };
  const sevIcon = { critical: <X className="w-3.5 h-3.5 mt-0.5 shrink-0 text-rose-600" />, warning: <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600" />, info: <InfoIcon className="w-4 h-4 shrink-0 text-sky-600" /> };

  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 print:hidden">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col max-h-[95vh] animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-purple-50/80 rounded-t-2xl shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 text-purple-600 rounded-xl"><ArrowRightLeft className="w-5 h-5" /></div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 leading-tight">{t.convertTitle}</h2>
              <p className="text-xs text-slate-500">{t.convertSub}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-700 hover:bg-white rounded-full transition-colors" aria-label="Close"><X className="w-6 h-6" /></button>
        </div>

        <div className="p-4 sm:p-6 flex-grow overflow-y-auto bg-slate-50 flex flex-col gap-5">
          {/* Condition + direction */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t.convertCondition}</span>
              <div className="flex bg-white rounded-lg border border-slate-200 p-0.5">
                {['Asthma', 'COPD'].map(d => (
                  <button key={d} onClick={() => setDiseaseChoice(d)} aria-pressed={disease === d} className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${disease === d ? (d === 'Asthma' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-emerald-600 text-white shadow-sm') : 'text-slate-500 hover:bg-slate-50'}`}>{d}</button>
                ))}
              </div>
            </div>
            <button onClick={swap} className="flex items-center gap-1.5 text-xs font-bold text-purple-700 bg-white border border-purple-200 hover:bg-purple-50 px-3 py-1.5 rounded-lg transition-colors">
              <ArrowRightLeft className="w-3.5 h-3.5" /> {t.convertSwap}
            </button>
          </div>

          {/* From -> To */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-2 md:gap-3">
            <ConvertSideCard label={t.convertFrom} med={from} regimen={conv.fLevels.length > 1 ? null : conv.fromReg} t={t} />
            <div className="flex justify-center text-purple-500 text-2xl font-bold leading-none" aria-hidden="true"><span className="md:hidden">↓</span><span className="hidden md:inline">→</span></div>
            <ConvertSideCard label={t.convertTo} med={to} regimen={null} t={t} />
          </div>

          {/* ICS dose level */}
          {conv.fLevels.length > 1 && (
            <div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{t.convertCurrentDose} · {from.marketName}</h3>
              <IcsLevelPicker med={from} levels={conv.fLevels} value={conv.fromLvl} onPick={setFromLevel} t={t} />
            </div>
          )}
          {!conv.fromLvl && conv.tLevels.length > 1 && (
            <div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{t.convertStartDose} · {to.marketName}</h3>
              <IcsLevelPicker med={to} levels={conv.tLevels} value={conv.toLvl} onPick={setToLevel} t={t} />
            </div>
          )}

          {/* Result */}
          {/* If the chosen product cannot keep the ICS dose level but a same-brand strength can,
              the chosen product is greyed out and the better strength gets its own full card. */}
          <div className="bg-white rounded-2xl border border-purple-200 shadow-sm p-4 sm:p-5" data-convert-result>
            <span className="text-[10px] font-bold text-purple-600 uppercase tracking-widest">{conv.fromLvl && conv.toLvl ? t.convertEquivalent : t.convertNewRegimen}</span>
            <div className={`flex items-center gap-3 mt-2 ${greyed ? 'opacity-50 grayscale' : ''}`} data-convert-main data-greyed={greyed ? 'true' : 'false'}>
              <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100 shrink-0">{medIcon(to, 'w-12 h-12')}</div>
              <div className="min-w-0">
                <div className="font-extrabold text-slate-800 leading-tight">{to.marketName}</div>
                <div className="text-xl sm:text-2xl font-extrabold text-purple-700 leading-tight mt-1">{conv.toReg}</div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {conv.toLvl && <span className="text-[10px] font-bold px-2 py-0.5 rounded border border-purple-200 bg-purple-50 text-purple-700">{t.convertLevel[conv.toLvl]} ICS (GINA)</span>}
                  {conv.toMcg && <span className="text-[10px] font-bold px-2 py-0.5 rounded border border-slate-200 bg-slate-50 text-slate-600 tabular-nums">{t.convertIcsPerDay}: {conv.toMcg}</span>}
                  {conv.toFixed && <span className="text-[10px] font-bold px-2 py-0.5 rounded border border-slate-200 bg-slate-50 text-slate-600">{t.convertFixedDose}</span>}
                  {!conv.tHasIcs && <span className="text-[10px] font-bold px-2 py-0.5 rounded border border-slate-200 bg-slate-50 text-slate-600">{t.convertNoIcs}</span>}
                  {to.isMart && disease === 'Asthma' && to.martMax && <span className="text-[10px] font-bold px-2 py-0.5 rounded border border-amber-200 bg-amber-50 text-amber-700">{t.martMax}: {to.martMax}</span>}
                </div>
              </div>
            </div>
            {conv.nearest && <p className="mt-3 text-xs font-medium text-amber-800 bg-amber-50 border border-amber-200 rounded-lg p-2.5">{t.convertNearest(t.convertLevel[conv.fromLvl], t.convertLevel[conv.toLvl])}</p>}
            {greyed && conv.alternatives.map(a => {
              const reg = regimenAt(a, conv.fromLvl);
              const mcg = fmtMcg(icsPerDay(a, reg));
              return (
                <div key={a.id} data-convert-alt={a.id} className="mt-3 rounded-xl border-2 border-purple-300 bg-purple-50/50 p-3 sm:p-4">
                  <span className="text-[10px] font-bold text-purple-700 uppercase tracking-widest">{t.convertRecommendedAlt(t.convertLevel[conv.fromLvl])}</span>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="p-1.5 rounded-lg bg-white border border-slate-100 shrink-0">{medIcon(a, 'w-12 h-12')}</div>
                    <div className="min-w-0">
                      <div className="font-extrabold text-slate-800 leading-tight">{a.marketName}</div>
                      <div className="text-xl sm:text-2xl font-extrabold text-purple-700 leading-tight mt-1">{reg}</div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded border border-purple-200 bg-purple-50 text-purple-700">{t.convertLevel[conv.fromLvl]} ICS (GINA)</span>
                        {mcg && <span className="text-[10px] font-bold px-2 py-0.5 rounded border border-slate-200 bg-slate-50 text-slate-600 tabular-nums">{t.convertIcsPerDay}: {mcg}</span>}
                        {a.isMart && disease === 'Asthma' && a.martMax && <span className="text-[10px] font-bold px-2 py-0.5 rounded border border-amber-200 bg-amber-50 text-amber-700">{t.martMax}: {a.martMax}</span>}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Component changes */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{t.convertComponents}{rec && <span className="normal-case tracking-normal font-semibold text-purple-700"> · {t.convertDetailFor(rec.marketName)}</span>}</h3>
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden" data-convert-components>
              {detail.components.map(c => (
                <div key={c.cls} className="grid grid-cols-[3.5rem_5rem_1fr] items-center gap-2 px-3 py-2.5 border-b border-slate-100 last:border-b-0 text-xs sm:text-sm">
                  <span className={`font-extrabold ${getClassColor(c.cls)}`}>{c.cls}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded text-center ${STATUS_STYLE[c.status]}`}>{t.convertStatus[c.status]}</span>
                  <span className="text-slate-700 min-w-0 break-words">
                    {c.status === 'continue' && c.from !== c.to ? <>{c.from} <span className="text-slate-400">→</span> {c.to}</> : (c.from || c.to)}
                    {c.cls === 'ICS' && (c.fromMcg || c.toMcg) && <span className="block text-[11px] text-slate-500 tabular-nums">{c.fromMcg || '—'} → {c.toMcg || '—'}</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Guidance */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{t.convertGuidance} · {disease === 'Asthma' ? 'GINA' : 'GOLD'} 2026{rec && <span className="normal-case tracking-normal font-semibold text-purple-700"> · {t.convertDetailFor(rec.marketName)}</span>}</h3>
            <ul className="flex flex-col gap-2" data-convert-notes>
              {detail.notes.map((n, i) => (
                <li key={i} className={`flex items-start gap-2.5 p-3 rounded-xl border text-xs sm:text-sm leading-relaxed ${SEV_STYLE[n.sev]}`}>
                  {sevIcon[n.sev]}<span>{n.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-[11px] text-slate-500 leading-relaxed">{t.convertDisclaimer}</p>
        </div>
      </div>
    </div>
  );
};

// --- Equivalent drugs: every possible switch from one selected drug ---
// Direct equivalents share the exact class combination; other options share a
// role (controller/reliever) but change classes. Regimens come from the same
// GINA dose-level matching as the Dose Conversion Guide.
const sameClasses = (a, b) => Object.keys(medComponents(a)).sort().join() === Object.keys(medComponents(b)).sort().join();

const EquivalentRow = ({ med, conv, t, onConvert }) => (
  <li data-equiv-row={med.id} className="bg-white rounded-xl border border-slate-200 p-3 flex flex-col sm:flex-row sm:items-center gap-3">
    <div className="flex items-start gap-3 min-w-0 flex-grow">
      <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100 shrink-0">{medIcon(med, 'w-9 h-9')}</div>
      <div className="min-w-0">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-extrabold text-slate-800 text-sm leading-tight">{med.marketName}</span>
          <span className={`text-[10px] font-bold px-1.5 rounded uppercase tracking-wider ${med.tagColor}`}>{med.type}</span>
          {med.indications.map(ind => (
            <span key={ind} className={`text-[10px] font-bold px-1.5 rounded border ${ind === 'Asthma' ? 'border-indigo-200 bg-indigo-50 text-indigo-700' : 'border-emerald-200 bg-emerald-50 text-emerald-700'}`}>{ind}</span>
          ))}
        </div>
        <RenderSubstances medClass={med.class} medSubstance={med.substance} compact={true} className="text-[11px] mt-0.5" />
        <div className="flex items-center gap-0.5 flex-wrap mt-1" data-equiv-avail aria-label={t.equivRegIn}>
          {LABEL_REGIONS.filter(r => statusIn(med, r) === 'current').map(r => (
            <span key={r} title={t.countryNames[r]} data-country={r} className={`text-[10px] font-bold rounded border px-1 py-px leading-none whitespace-nowrap ${COUNTRY_COLORS[r].chip}`}>{t.countryCodes[r]}</span>
          ))}
        </div>
        <div className="flex items-center gap-1.5 flex-wrap mt-1">
          <span className="text-xs font-bold text-purple-700">{conv.toReg}</span>
          {conv.toLvl && <span className="text-[10px] font-bold px-1.5 py-0.5 rounded border border-purple-200 bg-purple-50 text-purple-700">{t.convertLevel[conv.toLvl]} ICS</span>}
          {conv.toMcg && <span className="text-[10px] font-bold text-slate-500 tabular-nums">{conv.toMcg}</span>}
          {conv.nearest && <span className="text-[10px] font-bold px-1.5 py-0.5 rounded border border-amber-200 bg-amber-50 text-amber-700">{t.equivLevelDiffers}</span>}
        </div>
      </div>
    </div>
    <button onClick={() => onConvert(med)} className="shrink-0 self-start sm:self-center flex items-center gap-1.5 text-xs font-bold text-purple-700 bg-white border border-purple-200 hover:bg-purple-50 px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap">
      <ArrowRightLeft className="w-3.5 h-3.5" /> {t.equivOpen}
    </button>
  </li>
);

const EquivalentDrugsModal = ({ med, t, onClose, onConvert, countries = ['th'] }) => {
  const [condition, setCondition] = useState('All');
  // Countries to look in: starts as the main list's countries and is changed here without touching the main list.
  // A product counts when it is currently registered in a chosen country; its indications are those countries' labels.
  const [regions, setRegions] = useState(countries);
  const toggleRegion = (r) => setRegions(prev => (prev.includes(r) ? prev.filter(x => x !== r) : LABEL_REGIONS.filter(x => x === r || prev.includes(x))));
  const allRegions = regions.length === LABEL_REGIONS.length;
  const pool = useMemo(() => deviceData.map(d => { const ind = countryView(d, regions); return ind ? { ...d, indications: ind } : null; }).filter(Boolean), [regions]);
  const disease = condition === 'Asthma' ? 'Asthma' : 'COPD';
  const candidates = pool
    .filter(d => d.id !== med.id && (condition === 'All' || d.indications.includes(condition)))
    .map(d => ({ d, conv: buildConversion(med, d, disease, null, null, t) }));
  const order = (a, b) => (a.conv.nearest - b.conv.nearest) || a.d.marketName.localeCompare(b.d.marketName);
  const direct = candidates.filter(c => sameClasses(med, c.d)).sort(order);
  const other = candidates.filter(c => !sameClasses(med, c.d) && med.role.some(r => r !== 'Exacerbation' && c.d.role.includes(r))).sort(order);
  const fromLvl = defaultIcsLevel(med);

  const section = (title, list, empty) => (
    <div>
      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{title} <span className="text-slate-400 tabular-nums">({list.length})</span></h3>
      {list.length ? (
        <ul className="flex flex-col gap-2">{list.map(c => <EquivalentRow key={c.d.id} med={c.d} conv={c.conv} t={t} onConvert={onConvert} />)}</ul>
      ) : (
        <p className="text-sm text-slate-500 italic p-3 bg-white rounded-xl border border-slate-200">{empty}</p>
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 print:hidden">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl flex flex-col max-h-[95vh] animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-purple-50/80 rounded-t-2xl shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 text-purple-600 rounded-xl"><ListIcon className="w-5 h-5" /></div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 leading-tight">{t.equivTitle}</h2>
              <p className="text-xs text-slate-500">{t.equivSub}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-700 hover:bg-white rounded-full transition-colors" aria-label="Close"><X className="w-6 h-6" /></button>
        </div>

        <div className="p-4 sm:p-6 flex-grow overflow-y-auto bg-slate-50 flex flex-col gap-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <ConvertSideCard label={t.convertFrom} med={med} regimen={fromLvl ? `${regimenAt(med, fromLvl)} · ${t.convertLevel[fromLvl]} ICS` : regimenAt(med, null)} t={t} />
            <div className="flex flex-col gap-2 sm:items-end sm:shrink-0 min-w-0" data-equiv-filters>
            <div className="flex items-center gap-2 flex-wrap" data-equiv-countries title={t.equivRegInTitle}>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t.equivRegIn}</span>
              <div className="flex flex-wrap bg-white rounded-lg border border-slate-200 p-0.5 gap-0.5" role="group" aria-label={t.equivRegIn}>
                <button onClick={() => setRegions(allRegions ? [] : [...LABEL_REGIONS])} aria-pressed={allRegions} data-equiv-country-all
                  className={`px-2 py-1 rounded-md text-xs font-bold transition-all whitespace-nowrap ${allRegions ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}>{t.countriesAll}</button>
                {LABEL_REGIONS.map(r => (
                  <button key={r} onClick={() => toggleRegion(r)} aria-pressed={regions.includes(r)} title={t.countryNames[r]} data-equiv-country={r}
                    className={`px-2 py-1 rounded-md text-xs font-bold transition-all whitespace-nowrap ${regions.includes(r) ? COUNTRY_COLORS[r].on : COUNTRY_COLORS[r].off}`}>{t.countryCodes[r]}</button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t.indication}</span>
              <div className="flex bg-white rounded-lg border border-slate-200 p-0.5">
                {['All', 'Asthma', 'COPD'].map(c => (
                  <button key={c} onClick={() => setCondition(c)} aria-pressed={condition === c} className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${condition === c ? (c === 'Asthma' ? 'bg-indigo-600 text-white shadow-sm' : c === 'COPD' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-purple-600 text-white shadow-sm') : 'text-slate-500 hover:bg-slate-50'}`}>{c === 'All' ? t.equivAll : c}</button>
                ))}
              </div>
            </div>
            </div>
          </div>
          {fromLvl && <p className="text-[11px] text-slate-500 -mt-2">{t.equivLevelNote(t.convertLevel[fromLvl])}</p>}

          {regions.length === 0 ? (
            <p className="text-sm text-slate-500 italic p-3 bg-white rounded-xl border border-slate-200" data-equiv-nocountry>{t.equivNoCountry}</p>
          ) : (<>
            {section(t.equivSame, direct, t.equivNone)}
            {section(t.equivOther, other, t.equivNone)}
          </>)}

          <p className="text-[11px] text-slate-500 leading-relaxed">{t.convertDisclaimer}</p>
        </div>
      </div>
    </div>
  );
};

// =====================================================================
// Search synonyms, NLEM status, baht prices, inspiratory-flow finder
// =====================================================================

// Spellings of the same molecule (INN vs USAN / older BAN). A product matches a
// search for any spelling of a molecule it contains.
// Thai spellings follow the Thai FDA register and common hospital usage.
const DRUG_SYNONYMS = [
  ['salbutamol', 'albuterol', 'ซาลบูทามอล', 'ซัลบูทามอล', 'ซาลบิวทามอล', 'ซัลบิวทามอล'],
  ['beclometasone', 'beclomethasone', 'เบโคลเมทาโซน', 'เบคโลเมทาโซน', 'บีโคลเมทาโซน'],
  ['glycopyrronium', 'glycopyrrolate', 'ไกลโคไพโรเนียม'],
  ['formoterol', 'eformoterol', 'ฟอร์โมเทอรอล'],
  ['budesonide', 'บูเดโซไนด์', 'บูดีโซไนด์', 'บิวเดโซไนด์'],
  ['fluticasone', 'ฟลูติคาโซน'],
  ['salmeterol', 'ซาลมีเทอรอล', 'ซัลมีเทอรอล', 'ซาลเมเทอรอล'],
  ['ipratropium', 'ไอปราโทรเปียม', 'ไอพราโทรเปียม'],
  ['fenoterol', 'เฟโนเทอรอล'],
  ['terbutaline', 'เทอร์บูทาลีน'],
  ['tiotropium', 'ไทโอโทรเปียม', 'ทิโอโทรเปียม'],
  ['umeclidinium', 'ยูมีคลิดิเนียม'],
  ['vilanterol', 'วิแลนเทอรอล', 'ไวแลนเทอรอล'],
  ['indacaterol', 'อินดาคาเทอรอล'],
  ['olodaterol', 'โอโลดาเทอรอล'],
];
// Thai brand names as registered with the Thai FDA (checked 9 Oct 2026); products with no Thai name
// in the register use the usual Thai transliteration.
const THAI_BRANDS = [
  [/^Ventolin/, 'เวนโทลิน'], [/^Aerotamol/, 'แอโรทามอล'], [/^Bricanyl/, 'บริคานิล'], [/^Berodual/, 'บีโรดูอัล เบอโรดูอัล'],
  [/^Combivent/, 'คอมบิเวนท์'], [/^Atrovent/, 'อะโทรเวนท์'], [/^Flixotide/, 'ฟลิโซไทด์ ฟลิกโซไทด์'], [/^Pulmicort/, 'พูลมิคอร์ท พลูมิคอร์ท'],
  [/^QVAR/, 'คิววา'], [/^Seretide/, 'ซีรีไทด์ เซเรไทด์'], [/^Symbicort/, 'ซิมบิคอร์ท'], [/^Foster/, 'ฟอสเตอร์'],
  [/^Flutiform/, 'ฟลูติฟอร์ม'], [/^Relvar/, 'เรลวาร์'], [/^Bufomix/, 'บูโฟมิกซ์'], [/^Giona/, 'จิโอน่า ไจโอน่า'],
  [/^Breztri/, 'เบร็สทรี เบรซทรี'], [/^Trimbow/, 'ทริมโบ'], [/^Trelegy/, 'เทรเลจี'], [/^Serevent/, 'ซีรีเวนท์'],
  [/^Onbrez/, 'ออนเบรซ'], [/^Spiriva/, 'สไปรีวา'], [/^Seebri/, 'ซีบรี'], [/^Anoro/, 'แอโนโร'], [/^Ultibro/, 'อัลทิโบร'],
  [/^Spiolto/, 'สไปออลโต'], [/^Aeronide/, 'แอโรไนด์'], [/^Budecort/, 'บูดีคอร์ท บูดีคอร์ด'], [/^Pulvisonide/, 'พัลวิโซไนด์'],
  [/^DuoResp/, 'ดูโอ้เรส ดูโอเรส'], [/^Aerotide/, 'แอโรไทด์'], [/^Seroflo/, 'ซีโรโฟล'], [/^Salflumix/, 'ซาลฟลูมิกซ์'],
  [/^Xalflu/, 'ซาลฟลู'], [/^Tropoair/, 'โทรโปแอร์'], [/^Aerobidol/, 'แอโรบิดอล'], [/^Iperol/, 'ไอเพอรอล'], [/^Punol/, 'พูนอล'],
  [/^Inhalex/, 'อินฮาเล็กซ์'], [/^Salvo/, 'ซาลโว'], [/^Buto-Asma/, 'บูโต-แอสมา บูโตแอสมา'], [/^Asmasal/, 'แอสมาซาล'],
  [/^Salda/, 'แซลด้า'], [/^Venterol/, 'เวนเทอรอล'], [/^BudeSpray/, 'บูเดสเปรย์'], [/^Budiair/, 'บูดิแอร์'], [/^Bunase/, 'บูเนส'],
  [/^Beclocip/, 'บีโคลซิพ'], [/^Beclosal/, 'บีโคลซาล'], [/^Oxis/, 'อ๊อกซิส ออกซิส'], [/^Asthalin/, 'แอสทาลิน'],
];
const THAI_DEVICE_WORDS = [
  [/Evohaler/, 'อีโวเฮเลอร์'], [/Turbuhaler/, 'เทอร์บูเฮเลอร์ เทอร์บูเฮเล่อร์'], [/Accuhaler/, 'แอคคิวเฮเลอร์'], [/Rapihaler/, 'เรปปิเฮเลอร์ เรปปิเฮเล่อร์'],
  [/Respimat/, 'เรสพิแมท'], [/Ellipta/, 'เอลลิปต้า'], [/Breezhaler/, 'บรีซเฮเลอร์'], [/HandiHaler/, 'แฮนดิเฮเลอร์'], [/Easyhaler/, 'อีซี่เฮเลอร์'],
  [/Spiromax/, 'สไปโรแม็ค'], [/RespiClick/, 'เรสปิคลิก'], [/Pressair/, 'เพรสแอร์'], [/Twisthaler/, 'ทวิสต์เฮเลอร์'], [/NEXThaler/, 'เน็กซ์เฮเลอร์'], [/Airmaster/, 'แอร์มาสเตอร์'], [/Respules/, 'เรสพูลส์'], [/Nebules/, 'เน็บบิวส์'],
];
// Colour words for the search box, named from the colour the inhaler picture is drawn in (body and cap). A product
// whose colour is not verified, or that has no picture, gets no colour word.
const COLOUR_WORDS = {
  white: 'white ขาว', grey: 'grey gray เทา', black: 'black ดำ', red: 'red แดง', maroon: 'maroon dark red red แดงเข้ม แดง เลือดหมู',
  orange: 'orange ส้ม', brown: 'brown น้ำตาล', beige: 'beige cream tan ครีม เบจ', yellow: 'yellow เหลือง', green: 'green เขียว',
  teal: 'teal turquoise เขียวอมฟ้า ฟ้า เทอร์ควอยซ์', blue: 'blue น้ำเงิน ฟ้า', purple: 'purple violet ม่วง', pink: 'pink ชมพู',
};
const colourOf = (hex) => {
  if (!/^#[0-9a-f]{6}$/i.test(hex || '')) return null;
  const n = parseInt(hex.slice(1), 16), r = (n >> 16) / 255, g = ((n >> 8) & 255) / 255, b = (n & 255) / 255;
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, d = mx - mn;
  const sat = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  let h = 0;
  if (d) { h = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; h = (h * 60 + 360) % 360; }
  if (l > 0.86 && sat < 0.45) return 'white';
  if (sat < 0.25) return l < 0.25 ? 'black' : 'grey';
  if (l < 0.2 && sat < 0.4) return 'black';
  if (h < 15 || h >= 320 && l < 0.4) return l < 0.4 ? 'maroon' : 'red';
  if (h >= 345) return 'red';
  if (h < 70 && sat < 0.6 && l > 0.6) return 'beige';
  if (h < 40) return l < 0.42 ? 'brown' : 'orange';
  if (h < 70) return l < 0.38 ? 'brown' : 'yellow';
  if (h < 165) return 'green';
  if (h < 195) return 'teal';
  if (h < 245) return 'blue';
  if (h < 290) return 'purple';
  return l > 0.6 ? 'pink' : (h < 320 ? 'purple' : 'pink');
};
const colourNames = (med) => (COLOUR_UNKNOWN.has(med.id) || ICON_UNKNOWN.has(med.id) ? [] : [...new Set([colourOf(med.hex), colourOf(ICON_CAP[med.id])].filter(Boolean))]);
// Companies behind a product: the Thai licence holder (English and Thai), the holders in the other countries, the maker
const companyWords = (med) => [...(LICENCE_HOLDER[med.id] || []), ...LABEL_REGIONS.map(r => (HOLDER_ABROAD[r] || {})[med.id]), MANUFACTURER[med.id]].filter(Boolean).join(' ');
const searchCache = new Map();
const drugSearchText = (med) => {
  if (searchCache.has(med.id)) return searchCache.get(med.id);
  const base = `${med.marketName} ${med.substance}`.toLowerCase();
  const extra = DRUG_SYNONYMS.filter(g => g.some(n => base.includes(n))).flat().join(' ');
  const thai = [...THAI_BRANDS, ...THAI_DEVICE_WORDS].filter(([re]) => re.test(med.marketName)).map(x => x[1]).join(' ');
  const colours = colourNames(med).map(c => COLOUR_WORDS[c]).join(' ');
  const text = `${base} ${extra} ${thai} ${colours} ${companyWords(med).toLowerCase()}`;
  searchCache.set(med.id, text);
  return text;
};

// Thai National List of Essential Medicines, บัญชียาหลักแห่งชาติ พ.ศ. 2569
// (announced 12 Feb 2026; Royal Gazette vol. 143, special issue 85 ง, 30 Mar 2026),
// chapter 3 Respiratory. Listed by generic + dosage form, so any brand of a listed
// generic/form qualifies. Products missing from this map are not on the list.
const NLEM_STATUS = {
  1: { list: 'b' }, 301: { list: 'b' }, 17: { list: 'b' },                      // salbutamol MDI / nebuliser solution
  2: { list: 'b' }, 18: { list: 'b' },                                           // ipratropium + fenoterol MDI / nebuliser solution
  201: { list: 'b' }, 202: { list: 'b' }, 203: { list: 'b' },                    // fluticasone propionate MDI
  91: { list: 'b' }, 92: { list: 'b' }, 293: { list: 'b' }, 294: { list: 'b' }, 19: { list: 'b' },   // budesonide DPI / MDI / nebuliser suspension
  401: { list: 'b' }, 402: { list: 'b' }, 403: { list: 'b' }, 404: { list: 'b' },                    // ... Aeronide, Budecort MDI and Respules, Pulvisonide capsules
  422: { list: 'b' }, 423: { list: 'b' }, 424: { list: 'b' }, 425: { list: 'b' }, 426: { list: 'b' }, 427: { list: 'b' }, // salbutamol MDI / nebuliser solution (MIMS brands)
  416: { list: 'b' }, 417: { list: 'b' }, 418: { list: 'b' }, 419: { list: 'b' }, 420: { list: 'b' }, // ipratropium + fenoterol MDI / nebuliser solution (MIMS brands)
  405: { list: 'b', note: 'budForm' }, 406: { list: 'b', note: 'budForm' },  // DuoResp Spiromax (budesonide + formoterol DPI)
  408: { list: 'b', note: 'fpSalm' }, 409: { list: 'b', note: 'fpSalm' }, 410: { list: 'b', note: 'fpSalm' }, // Aerotide, Seroflo MDI
  411: { list: 'b', note: 'fpSalm' }, 412: { list: 'b', note: 'fpSalm' }, 413: { list: 'b', note: 'fpSalm' }, 414: { list: 'b', note: 'fpSalm' }, // Salflumix, Xalflu DPI
  415: { list: 's', note: 'tio' },   // Tropoair (tiotropium DPI 18 mcg)
  71: { list: 'b', note: 'budForm' }, 72: { list: 'b', note: 'budForm' },        // budesonide + formoterol DPI
  31: { list: 'b', note: 'budForm' }, 291: { list: 'b', note: 'budForm' },
  41: { list: 'b', note: 'fpSalm' }, 42: { list: 'b', note: 'fpSalm' }, 43: { list: 'b', note: 'fpSalm' }, // fluticasone propionate + salmeterol MDI
  61: { list: 'b', note: 'fpSalm' }, 62: { list: 'b', note: 'fpSalm' }, 63: { list: 'b', note: 'fpSalm' }, // ... and DPI
  13: { list: 's', note: 'tio' },       // tiotropium DPI, 18 mcg only
  11: { list: 's', note: 'umecVil' },   // vilanterol + umeclidinium DPI 22+55 mcg delivered (= Anoro 62.5/25 metered)
  22: { list: 'ex', note: 'olodTio' },  // olodaterol + tiotropium inhalation solution
};
// NLEM lists a generic + form; a product counts only while it is registered in Thailand
// (past or never registered products cannot be supplied under the NLEM).
const nlemOf = (d) => (licenceIn(d, 'th') && NLEM_STATUS[d.id]) || null;
const NLEM_STYLE = {
  b: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  s: 'border-sky-200 bg-sky-50 text-sky-700',
  ex: 'border-amber-200 bg-amber-50 text-amber-700',
  none: 'border-slate-200 bg-slate-50 text-slate-500',
};
const NlemBadge = ({ med, t, compact = false }) => {
  const st = nlemOf(med);
  const key = st ? st.list : 'none';
  const note = st && st.note ? t.nlemNotes[st.note] : NLEM_STATUS[med.id] ? t.nlemNotRegistered : null;
  return (
    <span title={note ? `${t.nlemTitle}\n${note}` : t.nlemTitle} className={`font-bold rounded border inline-flex items-center whitespace-nowrap ${compact ? 'text-[10px] px-1 py-px' : 'text-[10px] px-2 py-0.5'} ${NLEM_STYLE[key]}`}>
      {t.nlemLabel[key]}
    </span>
  );
};
// NLEM notes that restrict who may receive the drug (shown wherever it is suggested)
const NLEM_CONDITION_NOTES = ['umecVil', 'olodTio'];
const nlemConditionOf = (med, t) => {
  const st = nlemOf(med);
  return st && NLEM_CONDITION_NOTES.includes(st.note) ? t.nlemNotes[st.note] : null;
};
// Countries where the product is licensed: TH / US / UK / EU chips, hover for indications
const AvailBadge = ({ med, t }) => (
  <span className="inline-flex flex-wrap items-center gap-0.5 min-w-0" aria-label={t.countriesLabel}>
    {LABEL_REGIONS.map(r => {
      const st = statusIn(med, r);
      // past: registered before, not now (cancelled, expired, withdrawn or discontinued)
      if (st === 'past') {
        const gone = r === 'th' && thCancelled(med);
        const title = gone ? t.thGoneTitle(gone) : r === 'us' ? t.usGoneTitle : r === 'eu' ? t.euGoneTitle(EU_WITHDRAWN[med.id]) : t.countryNames[r];
        return (
          <span key={r} title={title} data-country={r} data-licensed="0" data-status="past" {...(r === 'th' ? { 'data-th-cancelled': '1' } : {})}
            className="text-[10px] font-bold rounded border px-1 py-px leading-none whitespace-nowrap border-amber-300 bg-amber-50 text-amber-800">
            {t.countryCodes[r]} † {t.thGone}
          </span>
        );
      }
      const ind = st === 'current' ? licenceIn(med, r) : null;
      const title = ind ? `${t.countryNames[r]}: ${ind.map(x => t.countryInd[x]).join(', ')}` : r === 'th' ? t.thNever : t.countryNotLicensed(t.countryNames[r]);
      return (
        <span key={r} title={title} data-country={r} data-licensed={ind ? '1' : '0'} data-status={st}
          className={`text-[10px] font-bold rounded border px-1 py-px leading-none whitespace-nowrap ${ind ? COUNTRY_COLORS[r].chip : 'border-slate-200 text-slate-400'}`}>
          {t.countryCodes[r]}{ind ? '' : ' ⊘'}
        </span>
      );
    })}
  </span>
);
const nlemNoteOf = (med, t) => {
  const st = nlemOf(med);
  return st && st.note ? t.nlemNotes[st.note] : null;
};

// Relative cost range (1–4 symbols) only; actual prices are never shown because
// they differ widely between hospitals, especially private ones. Levels come from the
// national reference price, as cost per 30 days at the usual maintenance dose
// (as-needed relievers: per pack): <300 / 300–599 / 600–999 / ≥1000 THB.
const PriceTag = ({ med, t, className = '' }) => (med.priceLevel == null ? (
  <span className={`font-bold text-slate-400 ${className}`} title={t.priceUnknownNote} data-price-unknown>{t.unknown}</span>
) : (
  <span className={`inline-flex items-center gap-0.5 font-extrabold ${med.priceEst ? 'opacity-60' : ''} ${className}`} title={med.priceEst ? `${t.priceDisclaimer} ${t.priceEstNote}` : t.priceDisclaimer} aria-label={`${t.estCost}: ${med.priceLevel}/4${med.priceEst ? ` (${t.priceEstShort})` : ''}`}>
    {[1, 2, 3, 4].map(n => (
      <span key={n} className={n <= med.priceLevel ? 'text-emerald-600' : 'text-slate-200'}>{t.priceSymbol}</span>
    ))}
    {med.priceEst && <span className="ml-0.5 text-[10px] font-bold text-slate-400">~</span>}
  </span>
));

// Spacer fit per inhaler. Named spacers are those the product label names (checked 9 Oct 2026):
// Ventolin Evohaler and Seretide Evohaler UK SmPC (Volumatic); Flixotide Evohaler IE leaflet (Volumatic or
// AeroChamber Plus); Symbicort pMDI UK SmPC, Trimbow UK SmPC, Foster DE SmPC (AeroChamber Plus);
// Breztri SG PI and Flutiform IE SmPC (AeroChamber Plus Flow-Vu). Other pMDIs: no spacer named, any valved
// spacer with a universal mouthpiece. Never with dry-powder or breath-actuated inhalers; soft mist needs none.
const SPACER_NAMED = [
  [/^Ventolin Evohaler/, ['Volumatic'], 'UK SmPC'],
  [/^Seretide Evohaler/, ['Volumatic'], 'UK SmPC'],
  [/^Flixotide Evohaler/, ['Volumatic', 'AeroChamber Plus'], 'IE leaflet'],
  [/^Symbicort Rapihaler/, ['AeroChamber Plus Flow-Vu', 'AeroChamber Plus'], 'UK SmPC'],
  [/^Trimbow/, ['AeroChamber Plus'], 'UK SmPC'],
  [/^Foster (MDI )?\d/, ['AeroChamber Plus'], 'DE SmPC'],
  [/^Breztri/, ['AeroChamber Plus Flow-Vu'], 'SG PI'],
  [/^Flutiform/, ['AeroChamber Plus Flow-Vu'], 'IE SmPC'],
];
const spacerFit = (med) => {
  if (med.type === 'Nebulizer') return null;
  if (med.type === 'DPI') return { kind: 'dpi' };
  if (med.type === 'SMI') return { kind: 'smi' };
  if (BREATH_ACTUATED.has(med.id)) return { kind: 'breath' };
  const n = SPACER_NAMED.find(([re]) => re.test(med.marketName));
  return n ? { kind: 'named', names: n[1], src: n[2] } : { kind: 'any' };
};
const SpacerFit = ({ med, t, className = '' }) => {
  const sf = spacerFit(med);
  if (!sf) return null;
  const text = sf.kind === 'named' ? sf.names.join(' / ') : t.spacerKinds[sf.kind];
  const title = sf.kind === 'named' ? t.spacerNamedTitle(sf.src) : t.spacerTitles[sf.kind];
  const tone = sf.kind === 'named' || sf.kind === 'any' ? 'text-teal-700' : 'text-slate-500';
  return <span data-spacer={sf.kind} title={title} className={`font-bold ${tone} ${className}`}>{text}</span>;
};

// Minimum peak inspiratory flow (L/min) a device needs, read from its flowRate field
// ("≥ 30 L/min"); MDI, SMI and nebulisers need none (pMDI: below 30 L/min is the ideal flow, nebuliser: tidal
// breaths, Laube 2011; soft mist: minimal 10, optimal 30, Wu 2023). DPI minimums, checked 13 Oct 2026 against the
// table in Ghosh 2017 (minimal flow): HandiHaler 20; Turbuhaler, Diskus/Accuhaler, Ellipta and Easyhaler 30;
// NEXThaler 35; Spiromax 40 (so also RespiClick, its US name); Genuair 40 (so also Pressair, its US name);
// Breezhaler 50. Also Weers 2022, Grant 2015, Haikarainen 2018 and Corradi 2014 for single devices.
// Twisthaler 28: Clark 2020 puts the lower limit of acceptable in vitro performance between 20 and 28 L/min.
// No reference, so flowRate is 'Unknown' (never an assumed number): Airmaster, LupinHaler (Tropoair), Swinghaler,
// BudeForu and the unidentified capsule inhaler of Pulvisonide.
const pifNeeded = (flowRate) => { const m = /≥\s*(\d+)/.exec(flowRate); return m ? +m[1] : 0; };
const flowUnknown = (med) => /^unknown$/i.test(med.flowRate);
const flowText = (med, t) => (flowUnknown(med) ? t.unknown : med.flowRate);

// =====================================================================
// Export helpers shared by the PNG cards and the patient sheet
// =====================================================================
const loadHtml2Canvas = async () => {
  if (window.html2canvas) return;
  // The library ships inside the page, wrapped in a function, and runs only when first needed
  if (window.__loadHtml2Canvas) { try { window.__loadHtml2Canvas.call(window); } catch (e) {} }
  if (window.html2canvas) return;
  await new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};
const elementToCanvas = async (element, backgroundColor, windowWidth, scale = window.devicePixelRatio || 2) => {
  await loadHtml2Canvas();
  // Fixed layout width so mobile viewports don't squash the output
  return window.html2canvas(element, { scale, useCORS: true, backgroundColor, logging: false, windowWidth });
};
const elementToPngBlob = async (element, backgroundColor, windowWidth) => {
  const canvas = await elementToCanvas(element, backgroundColor, windowWidth);
  return new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
};
// Minimal PDF writer: one A4 page per canvas, drawn as a JPEG scaled to fit inside 10 mm margins.
// Used for the patient sheet where the browser cannot print (sandboxed frames, some phone browsers).
const canvasesToPdfBlob = async (canvases) => {
  const enc = new TextEncoder();
  const W = 595.28, H = 841.89, M = 28.35; // A4 and 10 mm in points
  const parts = [], offsets = [];
  let pos = 0;
  const push = (x) => { const b = typeof x === 'string' ? enc.encode(x) : x; parts.push(b); pos += b.length; };
  const obj = (n, body) => { offsets[n] = pos; push(n + ' 0 obj\n'); body(); push('\nendobj\n'); };
  const n = canvases.length;
  push('%PDF-1.4\n');
  obj(1, () => push('<< /Type /Catalog /Pages 2 0 R >>'));
  obj(2, () => push(`<< /Type /Pages /Count ${n} /Kids [${canvases.map((_, i) => (3 + i * 3) + ' 0 R').join(' ')}] >>`));
  for (let i = 0; i < n; i++) {
    const c = canvases[i];
    const jpg = new Uint8Array(await (await new Promise(resolve => c.toBlob(resolve, 'image/jpeg', 0.92))).arrayBuffer());
    const k = Math.min((W - 2 * M) / c.width, (H - 2 * M) / c.height);
    const w = c.width * k, h = c.height * k;
    const content = `q ${w.toFixed(2)} 0 0 ${h.toFixed(2)} ${((W - w) / 2).toFixed(2)} ${(H - M - h).toFixed(2)} cm /Im0 Do Q`;
    const p = 3 + i * 3;
    obj(p, () => push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H}] /Resources << /XObject << /Im0 ${p + 2} 0 R >> >> /Contents ${p + 1} 0 R >>`));
    obj(p + 1, () => push(`<< /Length ${content.length} >>\nstream\n${content}\nendstream`));
    obj(p + 2, () => { push(`<< /Type /XObject /Subtype /Image /Width ${c.width} /Height ${c.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpg.length} >>\nstream\n`); push(jpg); push('\nendstream'); });
  }
  const xref = pos, total = 3 + n * 3;
  push(`xref\n0 ${total}\n0000000000 65535 f \n`);
  for (let j = 1; j < total; j++) push(String(offsets[j]).padStart(10, '0') + ' 00000 n \n');
  push(`trailer\n<< /Size ${total} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`);
  return new Blob(parts, { type: 'application/pdf' });
};
// Present only inside the hosted artifact viewer; null when opened as a local file.
const getDownloads = async () => (window.claude?.use ? await window.claude.use('downloads') : null);
// 'saved' or 'declined'. Hosted viewer: the downloads capability (anchor and blob
// saves are inert there); then the native share sheet; then a plain download link.
const deliverFile = async (blob, fileName, downloads) => {
  const file = new File([blob], fileName, { type: blob.type || 'image/png' });
  if (downloads) {
    try { await downloads.save({ filename: fileName, data: blob }); return 'saved'; }
    catch (e) {
      if (e?.code === 'declined') return 'declined';
      console.log('Capability save failed, falling back.', e?.code);
    }
  }
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try { await navigator.share({ files: [file], title: fileName }); return 'saved'; }
    catch (e) { console.log('Share aborted or failed, falling back to download.'); }
  }
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = fileName;
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return 'saved';
};

// =====================================================================
// Per-device inhaler technique (steps, critical errors, tips), en + th.
// Steps follow each device's patient information leaflet; the error lists
// follow the critical-error literature (Usmani et al., Respir Res 2018).
// =====================================================================
const DEVICE_ORDER = ['MDI', 'Respimat', 'Turbuhaler', 'Spiromax', 'Diskus', 'Airmaster', 'Ellipta', 'Easyhaler', 'NEXThaler', 'Pressair', 'Twisthaler', 'Handihaler', 'Breezhaler', 'OtherDPI', 'Nebulizer'];
const DEVICE_NAMES = {
  MDI: { en: 'Metered-dose inhaler (MDI)', th: 'ยาพ่นชนิดกด (MDI)', short: 'MDI' },
  Respimat: { en: 'Respimat soft-mist inhaler', th: 'Respimat ยาพ่นชนิดละอองฝอย', short: 'Respimat' },
  Turbuhaler: { en: 'Turbuhaler', th: 'Turbuhaler', short: 'Turbuhaler' },
  Diskus: { en: 'Accuhaler / Diskus', th: 'Accuhaler / Diskus', short: 'Accuhaler' },
  Ellipta: { en: 'Ellipta', th: 'Ellipta', short: 'Ellipta' },
  Easyhaler: { en: 'Easyhaler', th: 'Easyhaler', short: 'Easyhaler' },
  Handihaler: { en: 'HandiHaler / LupinHaler', th: 'HandiHaler / LupinHaler', short: 'HandiHaler' },
  Spiromax: { en: 'Spiromax / RespiClick', th: 'Spiromax / RespiClick', short: 'Spiromax' },
  Pressair: { en: 'Pressair / Genuair', th: 'Pressair / Genuair', short: 'Pressair' },
  Twisthaler: { en: 'Twisthaler', th: 'Twisthaler', short: 'Twisthaler' },
  NEXThaler: { en: 'NEXThaler', th: 'NEXThaler', short: 'NEXThaler' },
  Airmaster: { en: 'Airmaster', th: 'Airmaster', short: 'Airmaster' },
  OtherDPI: { en: 'Other DPI (device not identified, or no technique reference)', th: 'DPI อื่น (ยังไม่ทราบชนิดอุปกรณ์ หรือยังไม่มีแหล่งอ้างอิงวิธีใช้)', short: 'Other DPI' },
  Breezhaler: { en: 'Breezhaler', th: 'Breezhaler', short: 'Breezhaler' },
  Nebulizer: { en: 'Nebulizer', th: 'เครื่องพ่นละอองยา (Nebulizer)', short: 'Nebulizer' },
};

const TECHNIQUE = {
  "MDI": {
    "en": {
      "steps": [
        "Remove the cap and check the mouthpiece is clean. Shake the inhaler immediately before each puff.",
        "If the inhaler is new or has not been used for a while, prime it as its leaflet says (e.g. Ventolin: shake and release 2 puffs into the air if new or unused for 5 days or more; Foster: release 1 puff if new or unused for 14 days or more).",
        "Breathe out gently, away from the inhaler.",
        "Seal your lips around the mouthpiece. Start breathing in slowly and deeply, and press the canister once at the same time.",
        "Keep breathing in slowly (3–5 seconds), then hold your breath for up to 10 seconds.",
        "For a second puff, wait about 30 seconds and start again from step 1.",
        "Replace the cap. If it contains a steroid, rinse your mouth and spit."
      ],
      "errors": [
        "Pressing before or after breathing in (poor coordination): use a spacer.",
        "Breathing in too fast.",
        "Not shaking before each puff, or not priming a new inhaler.",
        "Firing two puffs at once.",
        "Not holding the breath after inhaling."
      ],
      "tip": "Spacer: press one puff into the spacer and start breathing in straight away: one slow deep breath with a breath-hold, or 5–6 normal breaths if breathless. Recommended for anyone who can't coordinate, and with steroid inhalers to reduce mouth deposits. QVAR RediHaler is breath-actuated: don't shake it, don't press it, and don't use it with a spacer."
    },
    "th": {
      "steps": [
        "เปิดฝาครอบ ตรวจดูว่าปากกระบอกสะอาด เขย่าหลอดยาทันทีก่อนกดทุกครั้ง",
        "หลอดใหม่หรือไม่ได้ใช้มานาน ให้พ่นทิ้งตามเอกสารกำกับยา (เช่น Ventolin: เขย่าแล้วพ่นทิ้งในอากาศ 2 ครั้ง หากเป็นหลอดใหม่หรือไม่ได้ใช้ตั้งแต่ 5 วันขึ้นไป; Foster: พ่นทิ้ง 1 ครั้ง หากเป็นหลอดใหม่หรือไม่ได้ใช้ตั้งแต่ 14 วันขึ้นไป)",
        "หายใจออกเบาๆ ให้สุด โดยหันออกจากหลอดยา",
        "อมปากกระบอกให้สนิท เริ่มหายใจเข้าช้าๆ ลึกๆ พร้อมกับกดหลอดยา 1 ครั้ง",
        "หายใจเข้าช้าๆ ต่อเนื่อง (3–5 วินาที) แล้วกลั้นหายใจนานที่สุดไม่เกิน 10 วินาที",
        "หากต้องพ่นครั้งที่สอง รอประมาณ 30 วินาที แล้วเริ่มใหม่ตั้งแต่ข้อ 1",
        "ปิดฝาครอบ หากเป็นยาที่มีสเตียรอยด์ ให้บ้วนปากและบ้วนทิ้ง"
      ],
      "errors": [
        "กดหลอดยาก่อนหรือหลังหายใจเข้า (ไม่สัมพันธ์กัน) ควรใช้กระบอกพ่นยา (spacer)",
        "หายใจเข้าเร็วเกินไป",
        "ไม่เขย่าก่อนกดทุกครั้ง หรือไม่พ่นทิ้งเมื่อเป็นหลอดใหม่",
        "กดพ่นสองครั้งติดกัน",
        "ไม่กลั้นหายใจหลังสูดยา"
      ],
      "tip": "กระบอกพ่นยา (spacer): กดยา 1 ครั้งเข้าในกระบอกแล้วเริ่มหายใจเข้าทันที: หายใจเข้าช้าๆ ลึกๆ 1 ครั้งแล้วกลั้นหายใจ หรือหายใจปกติ 5–6 ครั้งหากหอบ แนะนำสำหรับผู้ที่กดและสูดไม่สัมพันธ์กัน และช่วยลดยาตกค้างในปากเมื่อใช้ยาสเตียรอยด์ · QVAR RediHaler ปล่อยยาเมื่อสูดหายใจ: ไม่ต้องเขย่า ไม่ต้องกด และห้ามใช้กับ spacer"
    }
  },
  "Respimat": {
    "en": {
      "steps": [
        "Turn: keep the cap closed and turn the clear base half a turn in the direction of the arrows until it clicks.",
        "Open: flip the cap open fully.",
        "Breathe out slowly and fully. Close your lips around the mouthpiece without covering the air vents.",
        "Press: point the inhaler to the back of your throat. While taking a slow, deep breath, press the dose-release button and keep breathing in slowly for as long as comfortable.",
        "Hold your breath for about 10 seconds, or as long as comfortable.",
        "Repeat Turn–Open–Press for the second puff (2 puffs = 1 dose for Spiriva and Spiolto), then close the cap."
      ],
      "errors": [
        "Not turning the base until it clicks.",
        "Breathing in too fast.",
        "Covering the air vents with the lips or fingers.",
        "Taking one puff when the dose is two.",
        "Not priming a newly assembled inhaler."
      ],
      "tip": "New cartridge: insert it, then prime by doing Turn–Open–Press towards the ground until a cloud is visible, then 3 more times. Not used for more than 7 days: release 1 puff towards the ground; more than 21 days: prime again as for a new cartridge."
    },
    "th": {
      "steps": [
        "หมุน: ปิดฝาไว้ หมุนฐานใสครึ่งรอบตามทิศลูกศรจนได้ยินเสียงคลิก",
        "เปิด: เปิดฝาครอบจนสุด",
        "ค่อยๆ หายใจออกให้สุด อมปากกระบอกให้สนิทโดยไม่ปิดช่องอากาศ",
        "กด: หันปากกระบอกไปทางด้านหลังลำคอ ขณะหายใจเข้าช้าๆ ลึกๆ ให้กดปุ่มปล่อยยา และหายใจเข้าช้าๆ ต่อไปให้นานที่สุดเท่าที่ทำได้",
        "กลั้นหายใจประมาณ 10 วินาที หรือนานเท่าที่ทำได้",
        "ทำ หมุน–เปิด–กด ซ้ำสำหรับการพ่นครั้งที่สอง (2 ครั้ง = 1 โดส สำหรับ Spiriva และ Spiolto) แล้วปิดฝา"
      ],
      "errors": [
        "หมุนฐานไม่สุดจนไม่มีเสียงคลิก",
        "หายใจเข้าเร็วเกินไป",
        "ใช้ริมฝีปากหรือนิ้วปิดช่องอากาศ",
        "พ่นเพียงครั้งเดียวทั้งที่ 1 โดสคือ 2 ครั้ง",
        "ไม่ได้พ่นทิ้งเพื่อเตรียมหลอดยาที่ประกอบใหม่"
      ],
      "tip": "หลอดยาใหม่: ใส่หลอดยา แล้วเตรียมโดย หมุน–เปิด–กด หันลงพื้นจนเห็นละอองยา แล้วทำซ้ำอีก 3 ครั้ง ถ้าไม่ได้ใช้เกิน 7 วัน ให้พ่นทิ้งลงพื้น 1 ครั้ง ถ้าไม่ได้ใช้เกิน 21 วัน ให้เตรียมใหม่เหมือนหลอดยาใหม่"
    }
  },
  "Turbuhaler": {
    "en": {
      "steps": [
        "Unscrew and lift off the cover.",
        "Hold it upright with the coloured grip at the bottom (don't hold the mouthpiece). Twist the grip as far as it goes one way, then back the other way until it clicks: one dose is loaded.",
        "Breathe out fully, away from the mouthpiece.",
        "Place the mouthpiece between your teeth, close your lips, and breathe in as deeply and as hard as you can. Don't chew or bite the mouthpiece.",
        "Remove the inhaler from your mouth, then breathe out gently, away from it.",
        "Replace the cover. If it contains a steroid, rinse your mouth and spit."
      ],
      "errors": [
        "Not holding it upright while loading.",
        "Not twisting fully both ways (no click).",
        "Breathing out into the mouthpiece (moisture clumps the powder).",
        "Breathing in too slowly or weakly."
      ],
      "tip": "First use: prime it by twisting the grip fully back and forth twice. You may not taste or feel the powder; this is normal. The grip still twists and clicks when empty, so check the dose indicator: a red mark means about 20 doses left. The rattle when shaken is a drying agent, not the medicine."
    },
    "th": {
      "steps": [
        "หมุนเปิดฝาครอบออก",
        "ถือหลอดยาตั้งตรง ให้ฐานสีอยู่ด้านล่าง (อย่าจับที่ปากกระบอก) บิดฐานสีไปทางหนึ่งจนสุด แล้วบิดกลับจนได้ยินเสียงคลิก ยาพร้อมใช้ 1 โดส",
        "หายใจออกให้สุด โดยหันออกจากปากกระบอก",
        "วางปากกระบอกระหว่างฟัน ปิดปากให้สนิท แล้วสูดหายใจเข้าแรงและลึกที่สุด อย่ากัดหรือเคี้ยวปากกระบอก",
        "นำหลอดยาออกจากปาก แล้วค่อยๆ หายใจออกโดยหันออกจากหลอดยา",
        "ปิดฝาครอบ หากเป็นยาที่มีสเตียรอยด์ ให้บ้วนปากและบ้วนทิ้ง"
      ],
      "errors": [
        "ไม่ถือหลอดยาตั้งตรงขณะบิดเตรียมยา",
        "บิดไม่สุดทั้งสองทาง (ไม่มีเสียงคลิก)",
        "เป่าลมหายใจเข้าไปในปากกระบอก (ความชื้นทำให้ผงยาจับตัว)",
        "สูดยาเบาหรือช้าเกินไป"
      ],
      "tip": "ใช้ครั้งแรก: บิดไป-กลับจนสุด 2 รอบเพื่อเตรียมหลอดยา อาจไม่รู้สึกถึงรสหรือผงยา ซึ่งเป็นเรื่องปกติ ฐานยังบิดและมีเสียงคลิกได้แม้ยาหมด จึงต้องดูแถบแสดงยาที่เหลือ เมื่อเห็นแถบสีแดงแสดงว่าเหลือประมาณ 20 โดส เสียงกรุ๊งกริ๊งเมื่อเขย่าคือสารดูดความชื้น ไม่ใช่ยา"
    }
  },
  "Diskus": {
    "en": {
      "steps": [
        "Hold the outer case in one hand and push the thumb grip away until it clicks open.",
        "Hold it level with the mouthpiece towards you. Slide the lever away until it clicks: one dose is loaded and the counter goes down by one.",
        "Keeping it level, breathe out fully, away from the mouthpiece.",
        "Seal your lips around the mouthpiece and breathe in steadily and deeply.",
        "Remove it, hold your breath for about 10 seconds, then breathe out slowly.",
        "Close it by sliding the thumb grip back until it clicks. If it contains a steroid, rinse your mouth and spit."
      ],
      "errors": [
        "Tilting or shaking it after loading (the powder spills).",
        "Sliding the lever without inhaling (a dose is wasted).",
        "Breathing out into the mouthpiece.",
        "Breathing in too slowly or weakly."
      ],
      "tip": "The counter shows the doses left; the last 5 numbers appear in red."
    },
    "th": {
      "steps": [
        "ถือตัวเครื่องด้วยมือข้างหนึ่ง ใช้นิ้วหัวแม่มือดันที่จับออกจนได้ยินเสียงคลิกเพื่อเปิด",
        "ถือเครื่องในแนวราบ หันปากกระบอกเข้าหาตัว เลื่อนคันโยกออกจนได้ยินเสียงคลิก ยาพร้อมใช้ 1 โดส และตัวเลขนับโดสลดลง 1",
        "ถือเครื่องในแนวราบ หายใจออกให้สุดโดยหันออกจากปากกระบอก",
        "อมปากกระบอกให้สนิท สูดหายใจเข้าอย่างสม่ำเสมอและลึก",
        "นำเครื่องออก กลั้นหายใจประมาณ 10 วินาที แล้วค่อยๆ หายใจออก",
        "ปิดเครื่องโดยเลื่อนที่จับกลับจนได้ยินเสียงคลิก หากเป็นยาที่มีสเตียรอยด์ ให้บ้วนปากและบ้วนทิ้ง"
      ],
      "errors": [
        "เอียงหรือเขย่าเครื่องหลังเตรียมยา (ผงยาหก)",
        "เลื่อนคันโยกโดยไม่ได้สูดยา (เสียยา 1 โดส)",
        "เป่าลมหายใจเข้าไปในปากกระบอก",
        "สูดยาเบาหรือช้าเกินไป"
      ],
      "tip": "ตัวเลขนับโดสแสดงจำนวนยาที่เหลือ และจะเป็นสีแดงเมื่อเหลือ 5 โดสสุดท้าย"
    }
  },
  "Ellipta": {
    "en": {
      "steps": [
        "Slide the cover down fully until it clicks: one dose is loaded and the counter goes down by one. Don't shake it.",
        "Holding it away from your mouth, breathe out fully.",
        "Seal your lips around the mouthpiece. Don't block the air vent with your fingers.",
        "Take one long, steady, deep breath in.",
        "Hold your breath for at least 3–4 seconds, or as long as comfortable, then breathe out slowly and gently.",
        "Slide the cover back up over the mouthpiece. If it contains a steroid (Relvar, Trelegy), rinse your mouth and spit."
      ],
      "errors": [
        "Opening and closing the cover without inhaling (the dose is lost).",
        "Blocking the air vent with the fingers.",
        "Breathing out into the mouthpiece.",
        "Shaking the inhaler."
      ],
      "tip": "Use it once a day at the same time. Write the date you open the tray on the label and discard it 6 weeks after opening."
    },
    "th": {
      "steps": [
        "เลื่อนฝาครอบลงจนสุดจนได้ยินเสียงคลิก ยาพร้อมใช้ 1 โดส และตัวเลขนับโดสลดลง 1 ไม่ต้องเขย่า",
        "ถือเครื่องห่างจากปาก หายใจออกให้สุด",
        "อมปากกระบอกให้สนิท ระวังอย่าให้นิ้วปิดช่องอากาศ",
        "สูดหายใจเข้ายาวๆ สม่ำเสมอ และลึก 1 ครั้ง",
        "กลั้นหายใจอย่างน้อย 3–4 วินาที หรือนานเท่าที่ทำได้ แล้วค่อยๆ หายใจออก",
        "เลื่อนฝาครอบปิดปากกระบอก หากเป็นยาที่มีสเตียรอยด์ (Relvar, Trelegy) ให้บ้วนปากและบ้วนทิ้ง"
      ],
      "errors": [
        "เปิด-ปิดฝาครอบโดยไม่ได้สูดยา (ยาโดสนั้นเสียไป)",
        "ใช้นิ้วปิดช่องอากาศ",
        "เป่าลมหายใจเข้าไปในปากกระบอก",
        "เขย่าเครื่อง"
      ],
      "tip": "ใช้วันละครั้งในเวลาเดียวกันทุกวัน เขียนวันที่เปิดถาดยาไว้บนฉลาก และทิ้งหลังเปิดใช้ 6 สัปดาห์"
    }
  },
  "Easyhaler": {
    "en": {
      "steps": [
        "Remove the cap. Hold the inhaler upright and shake it 3–5 times.",
        "Still holding it upright, press the top down until it clicks, then let it return: one dose is loaded.",
        "Breathe out fully, away from the mouthpiece.",
        "Seal your lips around the mouthpiece and breathe in strongly and deeply.",
        "Hold your breath for at least 5 seconds, then breathe out normally, away from the inhaler.",
        "Replace the cap. If it contains a steroid, rinse your mouth and spit."
      ],
      "errors": [
        "Clicking more than once (extra powder collects in the mouthpiece).",
        "Not holding it upright while clicking.",
        "Breathing out into the mouthpiece.",
        "Breathing in too slowly or weakly."
      ],
      "tip": "Clicked more than once, or breathed into it? Tap the mouthpiece to empty the powder onto a table or your palm, then shake, click once and inhale. Keep it dry: wipe the mouthpiece with a dry cloth, never water."
    },
    "th": {
      "steps": [
        "เปิดฝาครอบ ถือหลอดยาตั้งตรงแล้วเขย่า 3–5 ครั้ง",
        "ถือหลอดยาตั้งตรง กดส่วนบนลงจนได้ยินเสียงคลิก แล้วปล่อย ยาพร้อมใช้ 1 โดส",
        "หายใจออกให้สุด โดยหันออกจากปากกระบอก",
        "อมปากกระบอกให้สนิท สูดหายใจเข้าแรงและลึก",
        "กลั้นหายใจอย่างน้อย 5 วินาที แล้วหายใจออกตามปกติโดยหันออกจากหลอดยา",
        "ปิดฝาครอบ หากเป็นยาที่มีสเตียรอยด์ ให้บ้วนปากและบ้วนทิ้ง"
      ],
      "errors": [
        "กดคลิกมากกว่า 1 ครั้ง (ผงยาสะสมในปากกระบอก)",
        "ไม่ถือหลอดยาตั้งตรงขณะกดคลิก",
        "เป่าลมหายใจเข้าไปในปากกระบอก",
        "สูดยาเบาหรือช้าเกินไป"
      ],
      "tip": "หากเผลอกดคลิกเกิน 1 ครั้ง หรือเป่าลมเข้าหลอดยา ให้เคาะปากกระบอกเทผงยาออกบนโต๊ะหรือฝ่ามือ แล้วเขย่า กดคลิก 1 ครั้ง และสูดใหม่ เก็บให้แห้ง เช็ดปากกระบอกด้วยผ้าแห้ง ห้ามใช้น้ำ"
    }
  },
  "Pressair": {
    "en": {
      "steps": [
        "Remove the protective cap by squeezing the arrows on its sides and pulling it straight off. Check that nothing blocks the mouthpiece.",
        "Hold the inhaler flat with the mouthpiece towards you and the coloured button on top. Press the button all the way down, then release it. Do not tilt the inhaler.",
        "Check that the control window has changed from red to green: the dose is ready.",
        "Breathe out completely, away from the inhaler. Never breathe out into it.",
        "Close your lips tightly around the mouthpiece and take a strong, deep breath through your mouth. Keep breathing in after you hear the click. Do not hold the button down while inhaling.",
        "Take the inhaler out of your mouth, hold your breath for as long as is comfortable, then breathe out slowly away from the inhaler.",
        "Check that the control window is now red: the dose was inhaled correctly. If it is still green, inhale strongly again. Push the protective cap back on."
      ],
      "errors": [
        "Holding the button down while inhaling.",
        "Tilting the inhaler while pressing the button.",
        "Stopping the breath at the click instead of continuing to breathe in.",
        "Not checking that the window turned red after inhaling."
      ],
      "tip": "Green window: dose ready. Red window: dose inhaled correctly. The inhaler locks when it is empty. After opening the sealed bag, discard Tudorza Pressair after 45 days and Duaklir Pressair after 2 months. Sold in Europe as the Genuair inhaler."
    },
    "th": {
      "steps": [
        "ถอดฝาครอบออกโดยบีบลูกศรด้านข้างของฝาแล้วดึงออกตรงๆ ตรวจดูว่าไม่มีสิ่งใดอุดปากกระบอก",
        "ถือหลอดยาในแนวนอน ให้ปากกระบอกหันเข้าหาตัวและปุ่มสีอยู่ด้านบน กดปุ่มลงจนสุดแล้วปล่อย ห้ามเอียงหลอดยา",
        "ตรวจดูว่าช่องควบคุมเปลี่ยนจากสีแดงเป็นสีเขียว แสดงว่ายาพร้อมใช้",
        "หายใจออกให้สุด โดยหันออกจากหลอดยา ห้ามหายใจออกเข้าไปในหลอดยา",
        "ปิดริมฝีปากให้สนิทรอบปากกระบอก แล้วสูดหายใจเข้าทางปากให้แรงและลึก สูดต่อไปแม้ได้ยินเสียงคลิกแล้ว ห้ามกดปุ่มค้างไว้ขณะสูด",
        "นำหลอดยาออกจากปาก กลั้นหายใจนานเท่าที่ทำได้ แล้วค่อยๆ หายใจออกโดยหันออกจากหลอดยา",
        "ตรวจดูว่าช่องควบคุมเป็นสีแดง แสดงว่าสูดยาถูกต้อง หากยังเป็นสีเขียว ให้สูดแรงๆ อีกครั้ง แล้วปิดฝาครอบกลับ"
      ],
      "errors": [
        "กดปุ่มค้างไว้ขณะสูดยา",
        "เอียงหลอดยาขณะกดปุ่ม",
        "หยุดสูดเมื่อได้ยินเสียงคลิก แทนที่จะสูดต่อ",
        "ไม่ตรวจดูว่าช่องควบคุมเปลี่ยนเป็นสีแดงหลังสูด"
      ],
      "tip": "ช่องสีเขียว: ยาพร้อมใช้ ช่องสีแดง: สูดยาถูกต้องแล้ว หลอดยาจะล็อกเมื่อยาหมด หลังเปิดซองให้ทิ้ง Tudorza Pressair เมื่อครบ 45 วัน และ Duaklir Pressair เมื่อครบ 2 เดือน ในยุโรปจำหน่ายในชื่ออุปกรณ์ Genuair"
    }
  },
  "Twisthaler": {
    "en": {
      "steps": [
        "Hold the inhaler upright with the coloured base at the bottom. Holding the base, twist the white cap counterclockwise and lift it off: this loads one dose and the counter goes down by one.",
        "Breathe out fully, away from the inhaler.",
        "Hold the inhaler on its side, close your lips firmly around the mouthpiece and take a fast, deep breath. Do not cover the ventilation holes.",
        "Take the inhaler out of your mouth and hold your breath for about 10 seconds, or as long as comfortable. Do not breathe out into the inhaler.",
        "Wipe the mouthpiece dry if needed, put the cap back on and turn it clockwise while pressing down gently until it clicks.",
        "Rinse your mouth with water and spit it out."
      ],
      "errors": [
        "Removing the cap while the inhaler is not upright, so the dose does not load fully.",
        "Breathing in slowly or weakly.",
        "Covering the ventilation holes.",
        "Breathing out into the inhaler."
      ],
      "tip": "Removing the cap loads the dose, so open it only when a dose is due. The inhaler stops delivering doses when the counter reads 00. Discard it 45 days after opening the foil pouch."
    },
    "th": {
      "steps": [
        "ถือหลอดยาตั้งตรงให้ฐานสีอยู่ด้านล่าง จับฐานไว้แล้วหมุนฝาสีขาวทวนเข็มนาฬิกาและยกออก ขั้นตอนนี้บรรจุยา 1 โดส และตัวนับลดลง 1",
        "หายใจออกให้สุด โดยหันออกจากหลอดยา",
        "ถือหลอดยาในแนวนอน ปิดริมฝีปากให้แน่นรอบปากกระบอก แล้วสูดหายใจเข้าให้เร็วและลึก ห้ามปิดรูระบายอากาศ",
        "นำหลอดยาออกจากปาก กลั้นหายใจประมาณ 10 วินาที หรือนานเท่าที่ทำได้ ห้ามหายใจออกเข้าไปในหลอดยา",
        "เช็ดปากกระบอกให้แห้งหากจำเป็น ปิดฝากลับแล้วหมุนตามเข็มนาฬิกาพร้อมกดลงเบาๆ จนได้ยินเสียงคลิก",
        "บ้วนปากด้วยน้ำแล้วบ้วนทิ้ง"
      ],
      "errors": [
        "ถอดฝาขณะที่หลอดยาไม่ได้ตั้งตรง ทำให้บรรจุยาไม่ครบ",
        "สูดช้าหรือเบาเกินไป",
        "ปิดรูระบายอากาศ",
        "หายใจออกเข้าไปในหลอดยา"
      ],
      "tip": "การถอดฝาเป็นการบรรจุยา จึงควรเปิดเมื่อถึงเวลาใช้ยาเท่านั้น หลอดยาจะไม่ปล่อยยาอีกเมื่อตัวนับแสดง 00 ให้ทิ้งเมื่อครบ 45 วันหลังเปิดซองฟอยล์"
    }
  },
  "Spiromax": {
    "en": {
      "steps": [
        "Hold the inhaler upright with the mouthpiece cover at the bottom. Do not shake it.",
        "Open the mouthpiece cover by folding it down until you hear one click: one dose is loaded.",
        "Breathe out gently, as far as comfortable, away from the inhaler. Never breathe out through it.",
        "Place the mouthpiece between your teeth and close your lips around it (do not bite). Breathe in through your mouth as hard and as deeply as you can, keeping the air vents uncovered.",
        "Remove the inhaler and hold your breath for about 10 seconds, or as long as comfortable, then breathe out gently.",
        "Close the mouthpiece cover. If it contains a steroid, rinse your mouth with water and spit it out."
      ],
      "errors": [
        "Breathing out into the mouthpiece.",
        "Covering the air vents with lips or fingers.",
        "Breathing in too slowly or weakly.",
        "Opening the cover when you are not about to take a dose."
      ],
      "tip": "The dose counter goes down each time the cover is opened. You may not taste the powder: do not take an extra dose. Keep the cover closed when not in use and wipe the mouthpiece with a dry cloth, never water."
    },
    "th": {
      "steps": [
        "ถือหลอดยาตั้งตรงให้ฝาครอบปากกระบอกอยู่ด้านล่าง ไม่ต้องเขย่า",
        "เปิดฝาครอบปากกระบอกโดยพับลงจนได้ยินเสียงคลิก 1 ครั้ง ยาพร้อมใช้ 1 โดส",
        "ค่อยๆ หายใจออกเท่าที่ทำได้ โดยหันออกจากหลอดยา ห้ามหายใจออกเข้าไปในหลอดยา",
        "วางปากกระบอกไว้ระหว่างฟันและปิดริมฝีปากให้สนิท (ไม่ต้องกัด) สูดหายใจเข้าทางปากให้แรงและลึกที่สุด โดยไม่ปิดช่องระบายอากาศ",
        "นำหลอดยาออกจากปาก กลั้นหายใจประมาณ 10 วินาที หรือนานเท่าที่ทำได้ แล้วค่อยๆ หายใจออก",
        "ปิดฝาครอบปากกระบอก หากเป็นยาที่มีสเตียรอยด์ ให้บ้วนปากด้วยน้ำแล้วบ้วนทิ้ง"
      ],
      "errors": [
        "หายใจออกเข้าไปในปากกระบอก",
        "ริมฝีปากหรือนิ้วปิดช่องระบายอากาศ",
        "สูดยาช้าหรือเบาเกินไป",
        "เปิดฝาครอบทั้งที่ยังไม่พร้อมสูดยา"
      ],
      "tip": "ตัวนับโดสจะลดลงทุกครั้งที่เปิดฝาครอบ อาจไม่รู้สึกถึงรสผงยา ห้ามสูดซ้ำ ปิดฝาครอบเมื่อไม่ใช้ และเช็ดปากกระบอกด้วยผ้าแห้ง ห้ามใช้น้ำ"
    }
  },
  "NEXThaler": {
    "en": {
      "steps": [
        "Check the dose counter. Hold the inhaler upright and open the cover fully. Do not shake it.",
        "Breathe out slowly, as far as comfortable, away from the inhaler.",
        "Seal your lips around the mouthpiece and breathe in quickly and deeply. You may hear a click as the dose is released. Do not cover the air vent.",
        "Remove the inhaler and hold your breath for 5–10 seconds, or as long as comfortable, then breathe out slowly.",
        "Close the cover fully and check that the dose counter has gone down by one.",
        "Rinse your mouth with water and spit it out."
      ],
      "errors": [
        "Breathing in too slowly to release the dose (the counter does not go down).",
        "Breathing out into the mouthpiece.",
        "Covering the air vent.",
        "Not checking the dose counter after the inhalation."
      ],
      "tip": "The dose is released, and counted, only when you breathe in hard enough. If the counter has not gone down, close the cover and repeat the steps. Opening and closing the cover without inhaling does not waste a dose. Keep it dry; wipe the mouthpiece with a dry cloth."
    },
    "th": {
      "steps": [
        "ตรวจดูตัวนับโดส ถือหลอดยาตั้งตรงแล้วเปิดฝาครอบจนสุด ไม่ต้องเขย่า",
        "ค่อยๆ หายใจออกเท่าที่ทำได้ โดยหันออกจากหลอดยา",
        "อมปากกระบอกให้สนิท สูดหายใจเข้าเร็วและลึก อาจได้ยินเสียงคลิกเมื่อยาถูกปล่อย อย่าปิดช่องระบายอากาศ",
        "นำหลอดยาออกจากปาก กลั้นหายใจ 5–10 วินาที หรือนานเท่าที่ทำได้ แล้วค่อยๆ หายใจออก",
        "ปิดฝาครอบให้สนิท และตรวจว่าตัวนับโดสลดลง 1",
        "บ้วนปากด้วยน้ำแล้วบ้วนทิ้ง"
      ],
      "errors": [
        "สูดยาช้าเกินไปจนยาไม่ถูกปล่อย (ตัวนับไม่ลดลง)",
        "หายใจออกเข้าไปในปากกระบอก",
        "ปิดช่องระบายอากาศ",
        "ไม่ตรวจตัวนับโดสหลังสูดยา"
      ],
      "tip": "ยาจะถูกปล่อยและนับโดสเมื่อสูดแรงพอเท่านั้น หากตัวนับไม่ลดลง ให้ปิดฝาครอบแล้วทำซ้ำ การเปิดและปิดฝาโดยไม่สูดยาไม่ทำให้เสียยา เก็บให้แห้งและเช็ดปากกระบอกด้วยผ้าแห้ง"
    }
  },
  "Airmaster": {
    "en": {
      "steps": [
        "Hold the inhaler flat and level. Press the red button with your thumb and turn the mouthpiece cover away from you as far as it goes, until it clicks: a blister opens and one dose is ready.",
        "Breathe out as far as comfortable, away from the inhaler. Do not breathe into it.",
        "Put the mouthpiece to your lips and breathe in steadily and deeply through it, not through your nose.",
        "Remove the inhaler and hold your breath for about 10 seconds, or as long as comfortable, then breathe out slowly.",
        "Close the inhaler by turning the cover back towards you as far as it goes, until it clicks.",
        "Rinse your mouth with water and spit it out."
      ],
      "errors": [
        "Opening the cover when not taking a dose (each click opens a blister and wastes it).",
        "Not holding the inhaler flat while opening it.",
        "Breathing out into the inhaler.",
        "Breathing in through the nose or too weakly."
      ],
      "tip": "You may not taste or feel the powder: do not take an extra dose. The counter on top shows the doses left; 5 to 0 appear in red. Keep it dry and wipe the mouthpiece with a dry cloth or tissue."
    },
    "th": {
      "steps": [
        "ถือหลอดยาในแนวราบ ใช้นิ้วโป้งกดปุ่มสีแดง แล้วหมุนฝาครอบปากกระบอกออกจากตัวจนสุดจนได้ยินเสียงคลิก แผงยา 1 ช่องจะเปิดและยาพร้อมใช้ 1 โดส",
        "หายใจออกเท่าที่ทำได้ โดยหันออกจากหลอดยา ห้ามเป่าลมเข้าไปในหลอดยา",
        "อมปากกระบอก สูดหายใจเข้าทางปากอย่างสม่ำเสมอและลึก ไม่หายใจทางจมูก",
        "นำหลอดยาออกจากปาก กลั้นหายใจประมาณ 10 วินาที หรือนานเท่าที่ทำได้ แล้วค่อยๆ หายใจออก",
        "ปิดหลอดยาโดยหมุนฝาครอบกลับเข้าหาตัวจนสุดจนได้ยินเสียงคลิก",
        "บ้วนปากด้วยน้ำแล้วบ้วนทิ้ง"
      ],
      "errors": [
        "เปิดฝาครอบทั้งที่ไม่ได้สูดยา (คลิกแต่ละครั้งเปิดแผงยาและเสียยา 1 โดส)",
        "ไม่ถือหลอดยาในแนวราบขณะเปิด",
        "เป่าลมหายใจเข้าไปในหลอดยา",
        "สูดทางจมูกหรือสูดเบาเกินไป"
      ],
      "tip": "อาจไม่รู้สึกถึงรสผงยา ห้ามสูดซ้ำ ตัวนับด้านบนบอกจำนวนโดสที่เหลือ ตัวเลข 5 ถึง 0 เป็นสีแดง เก็บให้แห้งและเช็ดปากกระบอกด้วยผ้าหรือกระดาษแห้ง"
    }
  },
  "OtherDPI": {
    "en": {
      "steps": [
        "Unknown: no instructions-for-use reference has been recorded for this inhaler (Meptin Swinghaler, BudeForu generics), or the inhaler itself has not been identified (the capsule inhaler supplied with Pulvisonide), so no technique steps are given here. Use it as its package leaflet shows."
      ],
      "errors": [],
      "tip": "Dry-powder inhalers are used without a spacer and need a fast, deep breath in. Never breathe out into the inhaler. Capsules for inhalation go in the supplied inhaler only and are never swallowed."
    },
    "th": {
      "steps": [
        "ไม่มีข้อมูล: ยังไม่มีแหล่งอ้างอิงวิธีใช้ของอุปกรณ์นี้ (Meptin Swinghaler, ยาสามัญ BudeForu) หรือยังไม่ทราบชนิดของอุปกรณ์ (อุปกรณ์สูดแคปซูลที่มาพร้อม Pulvisonide) จึงไม่แสดงขั้นตอนการใช้ ให้ใช้ตามเอกสารกำกับยา"
      ],
      "errors": [],
      "tip": "ยาสูดชนิดผงแห้งไม่ใช้ร่วมกับ spacer และต้องสูดเข้าให้เร็วและลึก ห้ามหายใจออกเข้าไปในอุปกรณ์ แคปซูลสำหรับสูดใช้กับอุปกรณ์ที่มาพร้อมกันเท่านั้น ห้ามกลืน"
    }
  },
  "Handihaler": {
    "en": {
      "steps": [
        "Open the dust cap, then open the mouthpiece.",
        "Take one capsule from the blister just before use and place it in the centre chamber. Never swallow the capsule.",
        "Close the mouthpiece firmly until it clicks; leave the dust cap open.",
        "Holding it upright, press the piercing button fully once, then release.",
        "Breathe out fully, away from the mouthpiece.",
        "Seal your lips and breathe in slowly and deeply, strongly enough to hear or feel the capsule vibrate. Hold your breath for about 10 seconds, or as long as comfortable, then breathe out.",
        "Breathe in from the same capsule a second time to empty it.",
        "Open the mouthpiece, tip out the used capsule and close the inhaler."
      ],
      "errors": [
        "Swallowing capsules instead of inhaling them.",
        "Inhaling only once (two inhalations per capsule).",
        "Not pressing the piercing button fully, or pressing it repeatedly.",
        "Storing capsules outside the blister (humidity).",
        "Breathing out into the mouthpiece."
      ],
      "tip": "Peel back the blister only enough to remove one capsule. The capsule should rattle as you inhale; if it doesn't, check that it was pierced."
    },
    "th": {
      "steps": [
        "เปิดฝาครอบกันฝุ่น แล้วเปิดปากกระบอก",
        "แกะแคปซูล 1 เม็ดจากแผงก่อนใช้ทันที ใส่ในช่องตรงกลาง ห้ามกลืนแคปซูล",
        "ปิดปากกระบอกให้แน่นจนได้ยินเสียงคลิก โดยเปิดฝาครอบกันฝุ่นไว้",
        "ถือเครื่องตั้งตรง กดปุ่มเจาะแคปซูลจนสุด 1 ครั้ง แล้วปล่อย",
        "หายใจออกให้สุด โดยหันออกจากปากกระบอก",
        "อมปากกระบอกให้สนิท สูดหายใจเข้าช้าๆ ลึกๆ แรงพอจนได้ยินหรือรู้สึกว่าแคปซูลสั่น กลั้นหายใจประมาณ 10 วินาทีหรือนานเท่าที่ทำได้ แล้วหายใจออก",
        "สูดยาจากแคปซูลเดิมซ้ำอีกครั้ง เพื่อให้ยาหมด",
        "เปิดปากกระบอก เทแคปซูลที่ใช้แล้วทิ้ง แล้วปิดเครื่อง"
      ],
      "errors": [
        "กลืนแคปซูลแทนการสูด",
        "สูดเพียงครั้งเดียว (ต้องสูด 2 ครั้งต่อแคปซูล)",
        "กดปุ่มเจาะไม่สุด หรือกดซ้ำหลายครั้ง",
        "เก็บแคปซูลนอกแผง (ความชื้น)",
        "เป่าลมหายใจเข้าไปในปากกระบอก"
      ],
      "tip": "แกะแผงยาเพียงพอให้หยิบแคปซูลได้ 1 เม็ด ขณะสูดควรได้ยินเสียงแคปซูลสั่น หากไม่ได้ยิน ให้ตรวจว่าเจาะแคปซูลแล้ว"
    }
  },
  "Breezhaler": {
    "en": {
      "steps": [
        "Pull off the cap. Hold the base and tilt the mouthpiece to open the inhaler.",
        "Take a capsule from the blister just before use and place it in the capsule chamber, never in the mouthpiece. Never swallow the capsule.",
        "Close the inhaler until it clicks.",
        "Holding it upright, press both side buttons firmly once at the same time, then release.",
        "Breathe out fully, away from the mouthpiece.",
        "Hold it with the side buttons facing left and right (don't press them). Seal your lips and breathe in rapidly and as deeply as you can. You should hear a whirring sound as the capsule spins.",
        "Hold your breath for at least 5–10 seconds. Open the inhaler: if powder is left in the capsule, repeat the inhalation.",
        "Remove and discard the empty capsule, close the inhaler and replace the cap."
      ],
      "errors": [
        "Swallowing capsules instead of inhaling them.",
        "No whirring sound: the capsule is stuck or the breath was too weak.",
        "Pressing the buttons more than once.",
        "Putting the capsule into the mouthpiece."
      ],
      "tip": "If there's no whirring, open the inhaler and loosen the capsule by tapping the base. Don't press the buttons again."
    },
    "th": {
      "steps": [
        "ดึงฝาครอบออก จับฐานแล้วเอียงปากกระบอกเพื่อเปิดเครื่อง",
        "แกะแคปซูลจากแผงก่อนใช้ทันที ใส่ในช่องใส่แคปซูล ห้ามใส่ในปากกระบอก และห้ามกลืนแคปซูล",
        "ปิดเครื่องจนได้ยินเสียงคลิก",
        "ถือเครื่องตั้งตรง กดปุ่มด้านข้างทั้งสองข้างพร้อมกันให้แน่น 1 ครั้ง แล้วปล่อย",
        "หายใจออกให้สุด โดยหันออกจากปากกระบอก",
        "ถือให้ปุ่มด้านข้างหันไปทางซ้ายและขวา (อย่ากดปุ่ม) อมปากกระบอกให้สนิท สูดหายใจเข้าเร็วและลึกที่สุด จะได้ยินเสียงแคปซูลหมุน",
        "กลั้นหายใจอย่างน้อย 5–10 วินาที เปิดเครื่องดู หากยังมีผงยาเหลือในแคปซูล ให้สูดซ้ำ",
        "นำแคปซูลเปล่าออกทิ้ง ปิดเครื่องและปิดฝาครอบ"
      ],
      "errors": [
        "กลืนแคปซูลแทนการสูด",
        "ไม่ได้ยินเสียงแคปซูลหมุน: แคปซูลติด หรือสูดไม่แรงพอ",
        "กดปุ่มเจาะมากกว่า 1 ครั้ง",
        "ใส่แคปซูลในปากกระบอก"
      ],
      "tip": "หากไม่ได้ยินเสียงหมุน ให้เปิดเครื่องแล้วเคาะที่ฐานเบาๆ ให้แคปซูลหลุด ห้ามกดปุ่มซ้ำ"
    }
  },
  "Nebulizer": {
    "en": {
      "steps": [
        "Wash your hands. Assemble the nebulizer cup and add the prescribed medicine (and saline if instructed).",
        "Attach the mouthpiece or mask and connect the tubing to the compressor.",
        "Sit upright and switch on the compressor.",
        "Breathe normally through the mouth (or with the mask fitted snugly) until the mist stops, usually 10–15 minutes.",
        "Switch off. After a steroid (budesonide), rinse your mouth, and wash your face if you used a mask.",
        "Wash and dry the cup and mouthpiece after every use."
      ],
      "errors": [
        "Not cleaning the parts after use (infection risk).",
        "A loose mask leaking mist towards the eyes.",
        "Talking or taking breaks while nebulizing."
      ],
      "tip": "A mouthpiece delivers more drug than a mask; use a mask when the patient can't use a mouthpiece."
    },
    "th": {
      "steps": [
        "ล้างมือ ประกอบกระเปาะพ่นยาและใส่ยาตามแพทย์สั่ง (และน้ำเกลือหากได้รับคำแนะนำ)",
        "ต่อท่ออมหรือหน้ากาก และต่อสายเข้ากับเครื่องพ่นยา",
        "นั่งตัวตรง แล้วเปิดเครื่อง",
        "หายใจทางปากตามปกติ (หรือสวมหน้ากากให้แนบสนิท) จนละอองยาหมด ประมาณ 10–15 นาที",
        "ปิดเครื่อง หลังพ่นยาสเตียรอยด์ (budesonide) ให้บ้วนปาก และล้างหน้าหากใช้หน้ากาก",
        "ล้างและผึ่งกระเปาะยาและท่ออมให้แห้งหลังใช้ทุกครั้ง"
      ],
      "errors": [
        "ไม่ล้างอุปกรณ์หลังใช้ (เสี่ยงติดเชื้อ)",
        "หน้ากากไม่แนบ ทำให้ละอองยาเข้าตา",
        "พูดคุยหรือหยุดพักระหว่างพ่นยา"
      ],
      "tip": "ท่ออมให้ยาได้มากกว่าหน้ากาก ใช้หน้ากากเมื่อผู้ป่วยใช้ท่ออมไม่ได้"
    }
  }
};

// Steps (0-based, matching TECHNIQUE) where an error means little or no dose reaches the
// lungs: preparing/loading the dose, not exhaling into a DPI, and the inhalation itself
// (coordination for MDI/SMI, forceful for DPIs). Errors of this kind are the ones linked to
// poor disease control (Usmani 2018); the per-device selection follows the leaflets.
const CRITICAL_STEPS = {
  MDI: [0, 3], Respimat: [0, 3], Turbuhaler: [1, 2, 3], Diskus: [1, 2, 3], Ellipta: [0, 1, 3],
  Easyhaler: [0, 1, 2, 3], Handihaler: [1, 3, 4, 5, 6], Breezhaler: [1, 3, 4, 5], Nebulizer: [0, 3],
  Spiromax: [1, 2, 3], NEXThaler: [0, 1, 2], Airmaster: [0, 1, 2],
  Pressair: [1, 2, 4], Twisthaler: [0, 2], OtherDPI: [],
};
const TechniqueChecklist = ({ shape, tech, devName, t, lang, onToast }) => {
  const [marks, setMarks] = useState({});
  useEffect(() => { setMarks({}); }, [shape]);
  const crit = CRITICAL_STEPS[shape] || [];
  const n = tech.steps.length;
  const done = Object.keys(marks).length;
  const ok = Object.values(marks).filter(v => v === 'ok').length;
  const critErrors = crit.filter(i => marks[i] === 'bad');
  const short = (i) => `${t.chkStep} ${i + 1}`;
  const copy = async () => {
    const date = new Date().toLocaleDateString(lang === 'th' ? 'th-TH' : 'en-GB');
    const text = t.chkNote(devName, date, ok, n, critErrors.map(i => `${short(i)} (${tech.steps[i].split(/[.:]/)[0]})`));
    try { await navigator.clipboard.writeText(text); onToast(t.chkCopied); } catch (e) { window.prompt(t.chkCopy, text); }
  };
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex flex-col gap-3">
      <p className="text-xs text-slate-500 leading-relaxed">{t.chkIntro}</p>
      <ol className="flex flex-col gap-2">
        {tech.steps.map((st, i) => {
          const m = marks[i];
          const isCrit = crit.includes(i);
          return (
            <li key={i} data-check-step={i} className={`flex flex-col sm:flex-row sm:items-center gap-2 rounded-xl border p-2.5 ${m === 'bad' ? (isCrit ? 'border-red-300 bg-red-50' : 'border-amber-300 bg-amber-50') : m === 'ok' ? 'border-emerald-200 bg-emerald-50' : 'border-slate-200'}`}>
              <div className="flex items-start gap-2.5 flex-1 min-w-0 text-sm text-slate-700 leading-snug">
                <span className="shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center tabular-nums">{i + 1}</span>
                <span>{isCrit && <span className="font-extrabold text-red-600" title={t.chkCritical}>★ </span>}{st}</span>
              </div>
              <div className="flex gap-1.5 shrink-0 self-end sm:self-auto">
                <button onClick={() => setMarks(p => ({ ...p, [i]: 'ok' }))} aria-pressed={m === 'ok'} className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition-colors ${m === 'ok' ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-emerald-300 text-emerald-700 hover:bg-emerald-50'}`}>✓ {t.chkPass}</button>
                <button onClick={() => setMarks(p => ({ ...p, [i]: 'bad' }))} aria-pressed={m === 'bad'} className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition-colors ${m === 'bad' ? 'bg-red-600 border-red-600 text-white' : 'border-red-300 text-red-700 hover:bg-red-50'}`}>✕ {t.chkFail}</button>
              </div>
            </li>
          );
        })}
      </ol>
      <div className={`rounded-xl border-2 p-3 ${critErrors.length ? 'border-red-500 bg-red-50' : done === n ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 bg-slate-50'}`} aria-live="polite" data-check-summary>
        <div className="font-extrabold text-slate-800 text-sm">{t.chkScore(ok, done, n)}</div>
        {critErrors.length > 0
          ? <div className="text-sm font-bold text-red-700 mt-1">{t.chkCritical}: {critErrors.map(short).join(', ')}</div>
          : done === n && <div className="text-sm font-bold text-emerald-700 mt-1">{t.chkNoCritical}</div>}
        {Object.values(marks).includes('bad') && <div className="text-xs text-slate-600 mt-1">{t.chkAdvice}</div>}
      </div>
      <div className="flex gap-2">
        <button onClick={() => setMarks({})} className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-600 text-xs font-bold hover:bg-slate-50">{t.chkReset}</button>
        <button onClick={copy} disabled={!done} className="px-3 py-1.5 rounded-lg bg-blue-600 disabled:bg-slate-300 text-white text-xs font-bold hover:bg-blue-500">{t.chkCopy}</button>
      </div>
    </div>
  );
};

const DeviceTechniqueModal = ({ t, lang, onClose, onToast = () => {} }) => {
  const [shape, setShape] = useState('MDI');
  const [mode, setMode] = useState('steps');
  const products = deviceData.filter(d => d.shape === shape);
  const rep = products[0];
  const tech = TECHNIQUE[shape][lang === 'th' ? 'th' : 'en'];
  const nameOf = (s) => DEVICE_NAMES[s][lang === 'th' ? 'th' : 'en'];

  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 print:hidden">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl flex flex-col max-h-[95vh] animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-blue-50/80 rounded-t-2xl shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-xl"><BookOpen className="w-5 h-5" /></div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 leading-tight">{t.devGuideTitle}</h2>
              <p className="text-xs text-slate-500">{t.devGuideSub}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 shrink-0"><GuidelineFiguresButton set="device" lang={lang} /><button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-700 hover:bg-white rounded-full transition-colors" aria-label="Close"><X className="w-6 h-6" /></button></div>
        </div>

        {/* Device picker */}
        <div className="flex gap-2 px-3 sm:px-5 py-3 border-b border-slate-100 bg-white overflow-x-auto hide-scrollbar shrink-0" role="tablist">
          {DEVICE_ORDER.map(s => {
            const r = deviceData.find(d => d.shape === s);
            const on = s === shape;
            return (
              <button key={s} role="tab" aria-selected={on} onClick={() => setShape(s)} className={`shrink-0 flex flex-col items-center gap-1 px-2.5 py-2 rounded-xl border-2 transition-all w-[84px] ${on ? 'border-blue-600 bg-blue-50' : 'border-slate-100 bg-white hover:border-blue-300'}`}>
                {getIcon(s, r ? iconHex(r) : '#cbd5e1', 'w-9 h-9')}
                <span className={`text-[10px] font-bold leading-tight text-center ${on ? 'text-blue-700' : 'text-slate-600'}`}>{DEVICE_NAMES[s].short}</span>
              </button>
            );
          })}
        </div>

        <div className="p-4 sm:p-6 flex-grow overflow-y-auto bg-slate-50 flex flex-col gap-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row gap-4">
            <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 self-start shrink-0">{getIcon(shape, iconHex(rep), 'w-20 h-20')}</div>
            <div className="min-w-0">
              <h3 className="text-xl font-extrabold text-slate-800 leading-tight">{nameOf(shape)}</h3>
              <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${rep.tagColor}`}>{rep.type}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded border border-cyan-200 bg-cyan-50 text-cyan-700">{t.devFlowNeeded}: {flowText(rep, t)}</span>
              </div>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed"><span className="font-bold text-slate-600">{t.devUsedBy}:</span> {products.map(p => p.marketName).join(', ')}</p>
            </div>
          </div>

          <div className="flex bg-white rounded-lg border border-slate-200 p-0.5 self-start" role="tablist">
            {[['steps', t.devModeSteps], ['check', t.devModeCheck]].map(([k, label]) => (
              <button key={k} role="tab" aria-selected={mode === k} onClick={() => setMode(k)} className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${mode === k ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-50'}`}>{label}</button>
            ))}
          </div>

          {mode === 'check' && <TechniqueChecklist shape={shape} tech={tech} devName={nameOf(shape)} t={t} lang={lang} onToast={onToast} />}

          {mode === 'steps' && <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5">
              <h4 className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-3">{t.devStepsTitle}</h4>
              <ol className="flex flex-col gap-2.5">
                {tech.steps.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center tabular-nums">{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex flex-col gap-4">
              {tech.errors.length > 0 && (
              <div className="bg-rose-50 rounded-2xl border border-rose-200 p-4 sm:p-5">
                <h4 className="text-xs font-bold text-rose-700 uppercase tracking-wider mb-3">{t.devErrorsTitle}</h4>
                <ul className="flex flex-col gap-2">
                  {tech.errors.map((e, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-rose-800 leading-snug"><X className="w-3.5 h-3.5 mt-0.5 shrink-0 text-rose-600" /><span>{e}</span></li>
                  ))}
                </ul>
              </div>
              )}
              <div className="bg-sky-50 rounded-2xl border border-sky-200 p-4 sm:p-5">
                <h4 className="text-xs font-bold text-sky-700 uppercase tracking-wider mb-2 flex items-center gap-1.5"><InfoIcon className="w-4 h-4" /> {t.devTipTitle}</h4>
                <p className="text-sm text-sky-900 leading-relaxed">{tech.tip}</p>
              </div>
            </div>
          </div>}

          <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5" data-dev-teach>
            <h4 className="text-xs font-bold text-indigo-700 uppercase tracking-wider mb-2">{t.devTeachTitle}</h4>
            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">{t.devTeach.map((x, i) => <li key={i}>{x}</li>)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// =====================================================================
// Patient instruction sheet (Thai or English, printable / saveable)
// =====================================================================
const EXPIRY_TH = {
  'Unknown': 'ไม่มีข้อมูล',
  'Until Expiry Date': 'ใช้ได้จนถึงวันหมดอายุบนฉลาก',
  '1 month after opening foil': 'ทิ้งหลังเปิดซองฟอยล์ 1 เดือน',
  '2 months after dispensing': 'ทิ้งหลังได้รับยา 2 เดือน',
  '3 months after assembly': 'ทิ้งหลังประกอบหลอดยา 3 เดือน',
  '3 months after dispensing': 'ทิ้งหลังได้รับยา 3 เดือน',
  '3 months after foil removal': 'ทิ้งหลังแกะซองฟอยล์ 3 เดือน',
  '4 months after opening foil': 'ทิ้งหลังเปิดซองฟอยล์ 4 เดือน',
  '5 months after dispensing': 'ทิ้งหลังได้รับยา 5 เดือน',
  '6 months after opening (drops)': 'ทิ้งหลังเปิดขวด 6 เดือน (ชนิดหยด)',
  '6 months after opening foil': 'ทิ้งหลังเปิดซองฟอยล์ 6 เดือน',
  '6 weeks after opening foil': 'ทิ้งหลังเปิดซองฟอยล์ 6 สัปดาห์',
  'Blister expires 9 days after exposing': 'แคปซูลในแผงที่แกะแล้วต้องใช้ภายใน 9 วัน',
  'Foil envelope expires in 2 months': 'ทิ้งหลังเปิดซองฟอยล์ 2 เดือน',
  'Use immediately after opening': 'ใช้ทันทีหลังเปิด',
  '6 months after removing the foil wrapper': 'ทิ้งหลังแกะซองฟอยล์ 6 เดือน',
  '6 months after opening the pouch': 'ทิ้งหลังเปิดซอง 6 เดือน',
  '13 months after opening the foil pouch': 'ทิ้งหลังเปิดซองฟอยล์ 13 เดือน',
  '12 months after opening the foil pouch': 'ทิ้งหลังเปิดซองฟอยล์ 12 เดือน',
  '3 months after opening the foil pouch': 'ทิ้งหลังเปิดซองฟอยล์ 3 เดือน',
  '45 days after opening the foil pouch': 'ทิ้งหลังเปิดซองฟอยล์ 45 วัน',
  '30 days after opening the foil pouch': 'ทิ้งหลังเปิดซองฟอยล์ 30 วัน',
  '45 days after opening the sealed bag': 'ทิ้งหลังเปิดซอง 45 วัน',
  '2 months after opening the sealed bag': 'ทิ้งหลังเปิดซอง 2 เดือน',
  '3 months after first use': 'ทิ้งหลังใช้ครั้งแรก 3 เดือน',
  '2 months after opening the foil pouch': 'ทิ้งหลังเปิดซองฟอยล์ 2 เดือน',
  'Keep capsules in the blister until use': 'เก็บแคปซูลไว้ในแผงจนถึงเวลาใช้',
};
const TOTAL_DOSES_TH = {
  '200 puffs': '200 พัฟ', '120 puffs': '120 พัฟ', '60 puffs': '60 พัฟ', '120 puffs (60 doses)': '120 พัฟ (60 โดส)', '60 puffs (30 doses)': '60 พัฟ (30 โดส)',
  'Unknown': 'ไม่มีข้อมูล', '200 doses': '200 โดส', '120 doses': '120 โดส', '100 doses': '100 โดส', '60 doses': '60 โดส', '30 doses': '30 โดส', '60 or 120 doses': '60 หรือ 120 โดส',
  '60 blisters': '60 ช่องยา (blister)', '30 capsules': '30 แคปซูล',
  '30, 60 or 120 doses': '30, 60 หรือ 120 โดส', '30 or 60 doses': '30 หรือ 60 โดส', '100 puffs': '100 พัฟ', 'Bottle or 0.3 / 0.5 mL unit doses': 'ขวด หรือหลอดใช้ครั้งเดียว 0.3 / 0.5 mL',
  'Blister strips of 5 capsules (inhaler included in some packs)': 'แผงละ 5 แคปซูล (บางกล่องมีอุปกรณ์สูด)',
  'Single use vial': 'หลอดใช้ครั้งเดียว', 'Single use vial (4 mL)': 'หลอดใช้ครั้งเดียว (4 mL)', 'Single use vial (2.5 mL)': 'หลอดใช้ครั้งเดียว (2.5 mL)',
  'Multi-dose bottle': 'ขวดใช้หลายครั้ง', '20 mL bottle': 'ขวด 20 mL', '20mL bottle or unit doses': 'ขวด 20 mL หรือหลอดใช้ครั้งเดียว', '4 mL per dose': '4 mL ต่อครั้ง',
};
// Pack size and after-opening expiry in the app language (unknown phrases fall back to English)
const packText = (med, t) => (t.isTh ? (TOTAL_DOSES_TH[med.totalDoses] || med.totalDoses.replace(/\bpuffs?\b/g, 'พัฟ').replace(/\bdoses?\b/g, 'โดส').replace(/\bcapsules?\b/g, 'แคปซูล')) : med.totalDoses);
const expText = (med, t) => (t.isTh ? (EXPIRY_TH[med.expiration] || med.expiration) : med.expiration);

// Plain-language dose from a regimen string; unusual regimens (e.g. nebulised mg
// doses) are returned as written for the prescriber to edit.
// Nebuliser regimens ("2.5 mg Nebulized Q4-6H PRN", "1-2 mL (20-40 drops) QID",
// "0.25-1 mg Nebulized QD or BID") written out for patients.
const nebDose = (reg, lang) => {
  const amt = ((reg.match(/^[\d.]+(?:\s*-\s*[\d.]+)?\s*(?:mg|mL)/i) || [''])[0]).replace(/\s*-\s*/, '–');
  const drops = (reg.match(/\((\d+)\s*-\s*(\d+)\s*drops\)/i) || []).slice(1).join('–');
  const qh = reg.match(/Q(\d+)\s*-\s*(\d+)H/i);
  const prn = /PRN/i.test(reg);
  const th = lang === 'th';
  const when = /QD or BID/i.test(reg) ? (th ? 'วันละ 1–2 ครั้ง' : 'once or twice a day')
    : qh ? (th ? `ทุก ${qh[1]}–${qh[2]} ชั่วโมง` : `every ${qh[1]}–${qh[2]} hours`)
    : /QID/i.test(reg) ? (th ? 'วันละ 4 ครั้ง' : '4 times a day')
    : /TID/i.test(reg) ? (th ? 'วันละ 3 ครั้ง' : '3 times a day')
    : /BID/i.test(reg) ? (th ? 'วันละ 2 ครั้ง' : 'twice a day')
    : /\bQD\b|daily/i.test(reg) ? (th ? 'วันละ 1 ครั้ง' : 'once a day') : '';
  const need = prn ? (th ? ' เมื่อมีอาการ' : ' when needed') : '';
  if (!amt || !when) return reg;
  return th
    ? `พ่นยาผ่านเครื่องพ่นละออง ${amt}${drops ? ` (${drops} หยด) ผสมน้ำเกลือตามที่แพทย์สั่ง` : ''} ${when}${need}`
    : `Nebulise ${amt}${drops ? ` (${drops} drops) mixed with saline as prescribed` : ''} ${when}${need}`;
};

const patientDose = (med, reg, lang) => {
  if (!reg) return '';
  if (med.type === 'Nebulizer') return nebDose(reg, lang);
  const p = regimenPuffs(reg), f = regimenFreq(reg);
  if (!p || f == null) return reg;
  const n = p[0] === p[1] ? `${p[0]}` : `${p[0]}–${p[1]}`;
  const capsule = /capsule/i.test(reg);
  const max = (reg.match(/Max\s*(\d+)\s*\/\s*day/i) || [])[1];
  if (lang === 'th') {
    const what = capsule ? `สูดยา ${n} แคปซูล` : (med.type === 'DPI' ? `สูดยา ${n} ครั้ง` : `พ่นยา ${n} ครั้ง`);
    const when = f === 'prn' ? 'เมื่อมีอาการ' : f === 1 ? 'วันละ 1 ครั้ง เวลาเดียวกันทุกวัน' : f === 2 ? 'เช้าและเย็น (วันละ 2 ครั้ง)' : `วันละ ${f} ครั้ง`;
    return `${what} ${when}${max ? ` ไม่เกิน ${max} ครั้งต่อวัน` : ''}`;
  }
  const plural = p[1] > 1;
  const unit = capsule ? (plural ? 'capsules' : 'capsule') : med.type === 'DPI' ? (plural ? 'inhalations' : 'inhalation') : (plural ? 'puffs' : 'puff');
  const when = f === 'prn' ? 'when needed for symptoms' : f === 1 ? 'once a day, at the same time each day' : f === 2 ? 'twice a day, morning and evening' : `${f} times a day`;
  return `${n} ${unit} ${when}${max ? ` (no more than ${max} a day)` : ''}`;
};

const SHEET_TEXT = {
  en: {
    title: 'How to use your inhaler',
    copdPlan: {
      title: 'COPD Action Plan', sub: 'Keep this plan with your inhalers. Bring it to every visit.',
      signs: 'Signs', whatToDo: 'What to do',
      greenTitle: 'GREEN: A usual day',
      greenSigns: ['Your usual breathlessness', 'Your usual amount and colour of sputum', 'Sleeping and eating as usual', 'Able to do your usual activities'],
      greenActions: ['Keep active every day; join pulmonary rehabilitation if offered.', 'Don\'t smoke. Keep flu, COVID-19 and pneumonia vaccines up to date.'],
      yellowTitle: 'YELLOW: Flare-up (getting worse)',
      yellowSigns: ['More breathless than usual', 'More sputum, or sputum turning yellow or green', 'Worse cough or wheeze', 'Needing your reliever more often'],
      moreReliever: (x) => `Use your reliever more often: ${x}`,
      pred: 'If prescribed: start prednisolone ____ mg once a day for ____ days (usually 40 mg for 5 days).',
      abx: 'If your sputum turns yellow or green and an antibiotic was prescribed: start ________________ for ____ days (usually 5 days).',
      contact: 'Tell your doctor or clinic within 1–2 days that you have started these medicines. See a doctor if you are not better within 2–3 days.',
      redTitle: 'RED: Emergency',
      redSigns: ['Severely breathless at rest, or can\'t speak in full sentences', 'Chest pain', 'Confused, drowsy or very agitated', 'Lips or fingertips blue or grey'],
      call1669: 'Call 1669 or go to hospital NOW.',
      relieverWhileWaiting: (x) => `Keep using your reliever while you wait for help: ${x}`,
      oxygen: 'If you use home oxygen, use it at the flow rate your doctor set. Do not turn it up.',
      sitUp: 'Sit upright, lean forward slightly, and breathe slowly.',
      dailyController: (x) => `Every day, take: ${x}`,
      useReliever: (x) => `Reliever when needed: ${x}`,
      doctor: 'Doctor / hospital:', reviewDate: 'Review date:',
      source: 'Based on GOLD 2026 self-management and exacerbation guidance',
    },
    plan: {
      title: 'Asthma Action Plan', sub: 'Keep this plan with your inhaler. Show it to your doctor at every visit.',
      pefBest: 'Personal best peak flow', signs: 'Signs', whatToDo: 'What to do',
      greenTitle: 'GREEN: Asthma under control',
      greenSigns: ['Few or no symptoms during the day', 'No waking at night because of asthma', 'You can do your usual activities and exercise'],
      yellowTitle: 'YELLOW: Asthma getting worse',
      yellowSigns: ['Cough, wheeze, chest tightness or breathlessness more often', 'Waking at night because of asthma', 'Needing your reliever more than usual', 'A cold or chest infection is making asthma worse'],
      redTitle: 'RED: Severe attack (emergency)',
      redSigns: ['Very short of breath, or can\'t speak in full sentences', 'Reliever not helping, or symptoms come back quickly', 'Lips or fingertips blue or grey', 'Drowsy or confused'],
      pefAbove: (v) => `Peak flow above ${v} L/min`, pefBetween: (lo, hi) => `Peak flow ${lo}–${hi} L/min`, pefBelow: (v) => `Peak flow below ${v} L/min`,
      martDaily: (x) => `Every day, take ${x}`,
      martExtra: 'Take 1 extra inhalation whenever you have symptoms; if not better after a few minutes, take 1 more.',
      martKeep: 'Keep taking your usual daily doses.',
      martMax: (n) => `Do not take more than ${n} inhalations in a day in total (regular + extra).`,
      seeDoctorMart: (n) => `See your doctor if not improving after 2–3 days, or if you have needed more than ${n} inhalations in a day.`,
      dailyController: (x) => `Every day, take your preventer: ${x}`,
      useReliever: (x) => `Use your reliever when needed: ${x}`,
      increaseIcs: 'Increase your preventer to: __________________ for ____ days (your doctor writes this).',
      ocs: 'If your doctor has prescribed it: prednisolone ____ mg each morning for ____ days, and contact your doctor.',
      seeDoctorSaba: 'See your doctor if not improving after 2–3 days, or if you need your reliever again within 3 hours.',
      call1669: 'Call 1669 or go to hospital NOW.',
      relieverWhileWaiting: (x) => `Keep using your reliever while you wait for help: ${x}`,
      sitUp: 'Sit upright and try to stay calm.',
      doctor: 'Doctor / hospital:', reviewDate: 'Review date:',
      source: 'Based on GINA 2026 written asthma action plan',
    },
    patient: 'Patient', hn: 'HN', date: 'Date',
    roleController: 'Maintenance inhaler (preventer): use it every day, even when you feel well.',
    roleExac: 'Flare-up treatment: use it for the number of days your doctor tells you. It does not replace your regular inhaler.',
    roleReliever: 'Reliever: use it when you have symptoms.',
    roleMart: 'Maintenance and reliever in one inhaler (MART).',
    yourDose: 'Your dose',
    howToUse: 'How to use it',
    afterDose: 'After each dose',
    rinse: 'Rinse your mouth with water and spit it out. This helps prevent mouth thrush and a hoarse voice.',
    reliefTitle: 'When you have symptoms',
    martRelief: (max) => `Take 1 extra inhalation of this inhaler whenever you have symptoms. If symptoms continue after a few minutes, take 1 more.${max ? ` Do not take more than ${max} inhalations in a day in total, including your regular doses.` : ''}`,
    controllerRelief: (name) => (name
      ? `This inhaler does not relieve sudden symptoms. For symptoms, use your reliever: ${name}.`
      : 'This inhaler does not relieve sudden symptoms. For symptoms, use the reliever your doctor prescribed: ______________________'),
    relieverUseAsthma: 'If you need your reliever more than twice a week, see your doctor: your asthma may not be well controlled.',
    relieverUseCopd: 'If you need your reliever more often than usual, see your doctor.',
    soonTitle: 'See your doctor within 1–2 days if',
    soonAsthma: ['Your symptoms are worse than usual, or you wake at night because of your asthma.', 'You need your reliever more than usual.', 'A cold or chest infection is making your breathing worse.'],
    soonCopd: ['You are more breathless than usual.', 'You are coughing up more sputum, or it has turned yellow or green.', 'You have a fever.'],
    urgentTitle: 'Go to hospital now or call 1669 if',
    urgent: ['You are too breathless to speak in full sentences.', 'Your lips or fingertips look blue or grey.', 'You feel drowsy or confused.', 'Your reliever is not helping, or your symptoms come back quickly.'],
    goodToKnow: 'Good to know',
    expiry: 'Discard',
    counter: 'Check the dose counter and get a new inhaler before it runs out.',
    bring: 'Bring your inhalers to every appointment so your technique can be checked.',
    prescriber: 'Doctor / pharmacist', hospital: 'Hospital', contact: 'Contact',
    footer: 'Adult Bronchodilator Device Guide',
  },
  th: {
    title: 'คำแนะนำการใช้ยาพ่น',
    copdPlan: {
      title: 'แผนปฏิบัติการโรคปอดอุดกั้นเรื้อรัง (COPD)', sub: 'เก็บแผนนี้ไว้กับยาพ่น และนำมาทุกครั้งที่มาพบแพทย์',
      signs: 'อาการ', whatToDo: 'สิ่งที่ต้องทำ',
      greenTitle: 'สีเขียว: วันปกติ',
      greenSigns: ['เหนื่อยเท่าที่เป็นอยู่ตามปกติ', 'เสมหะปริมาณและสีเหมือนปกติ', 'นอนหลับและรับประทานอาหารได้ตามปกติ', 'ทำกิจวัตรได้ตามปกติ'],
      greenActions: ['ออกกำลังกายสม่ำเสมอทุกวัน เข้าโปรแกรมฟื้นฟูสมรรถภาพปอดหากมี', 'ไม่สูบบุหรี่ ฉีดวัคซีนไข้หวัดใหญ่ โควิด-19 และปอดอักเสบให้ครบ'],
      yellowTitle: 'สีเหลือง: อาการกำเริบ (แย่ลง)',
      yellowSigns: ['เหนื่อยมากกว่าปกติ', 'เสมหะมากขึ้น หรือเปลี่ยนเป็นสีเหลืองหรือเขียว', 'ไอหรือหายใจมีเสียงวี้ดมากขึ้น', 'ต้องใช้ยาบรรเทาอาการบ่อยขึ้น'],
      moreReliever: (x) => `ใช้ยาบรรเทาอาการบ่อยขึ้น: ${x}`,
      pred: 'หากแพทย์สั่งไว้: เริ่มกิน prednisolone ____ mg วันละครั้ง นาน ____ วัน (โดยทั่วไป 40 mg นาน 5 วัน)',
      abx: 'หากเสมหะเป็นสีเหลืองหรือเขียวและแพทย์สั่งยาปฏิชีวนะไว้: เริ่ม ________________ นาน ____ วัน (โดยทั่วไป 5 วัน)',
      contact: 'แจ้งแพทย์หรือคลินิกภายใน 1–2 วันว่าเริ่มยาเหล่านี้แล้ว และพบแพทย์หากไม่ดีขึ้นภายใน 2–3 วัน',
      redTitle: 'สีแดง: ฉุกเฉิน',
      redSigns: ['เหนื่อยมากแม้ขณะพัก หรือพูดไม่จบประโยค', 'เจ็บหน้าอก', 'สับสน ง่วงซึม หรือกระสับกระส่ายมาก', 'ริมฝีปากหรือปลายนิ้วเขียวหรือคล้ำ'],
      call1669: 'โทร 1669 หรือไปโรงพยาบาลทันที',
      relieverWhileWaiting: (x) => `ใช้ยาบรรเทาอาการต่อระหว่างรอความช่วยเหลือ: ${x}`,
      oxygen: 'หากใช้ออกซิเจนที่บ้าน ให้ใช้ตามอัตราที่แพทย์กำหนด ห้ามเพิ่มเอง',
      sitUp: 'นั่งตัวตรง โน้มตัวไปข้างหน้าเล็กน้อย และหายใจช้าๆ',
      dailyController: (x) => `ใช้ยาทุกวัน: ${x}`,
      useReliever: (x) => `ยาบรรเทาอาการเมื่อมีอาการ: ${x}`,
      doctor: 'แพทย์ / โรงพยาบาล:', reviewDate: 'วันที่ทบทวน:',
      source: 'อ้างอิงแนวทางการดูแลตนเองและการกำเริบของ GOLD 2026',
    },
    plan: {
      title: 'แผนปฏิบัติการโรคหืด', sub: 'เก็บแผนนี้ไว้กับยาพ่น และนำมาให้แพทย์ดูทุกครั้งที่มาตรวจ',
      pefBest: 'ค่าเป่าลมสูงสุดที่ดีที่สุด (PEF)', signs: 'อาการ', whatToDo: 'สิ่งที่ต้องทำ',
      greenTitle: 'สีเขียว: ควบคุมโรคหืดได้ดี',
      greenSigns: ['ไม่มีอาการหรือมีน้อยในเวลากลางวัน', 'ไม่ตื่นกลางคืนเพราะโรคหืด', 'ทำกิจวัตรและออกกำลังกายได้ตามปกติ'],
      yellowTitle: 'สีเหลือง: โรคหืดเริ่มแย่ลง',
      yellowSigns: ['ไอ หายใจมีเสียงวี้ด แน่นหน้าอก หรือเหนื่อยบ่อยขึ้น', 'ตื่นกลางคืนเพราะโรคหืด', 'ต้องใช้ยาบรรเทาอาการบ่อยกว่าปกติ', 'เป็นหวัดหรือติดเชื้อทางเดินหายใจทำให้อาการแย่ลง'],
      redTitle: 'สีแดง: หอบรุนแรง (ฉุกเฉิน)',
      redSigns: ['เหนื่อยมาก หรือพูดไม่จบประโยค', 'ยาบรรเทาอาการไม่ช่วย หรืออาการกลับมาเร็ว', 'ริมฝีปากหรือปลายนิ้วเขียวหรือคล้ำ', 'ง่วงซึมหรือสับสน'],
      pefAbove: (v) => `ค่าเป่าลมสูงกว่า ${v} ลิตร/นาที`, pefBetween: (lo, hi) => `ค่าเป่าลม ${lo}–${hi} ลิตร/นาที`, pefBelow: (v) => `ค่าเป่าลมต่ำกว่า ${v} ลิตร/นาที`,
      martDaily: (x) => `ใช้ยาทุกวัน: ${x}`,
      martExtra: 'เมื่อมีอาการ สูดเพิ่ม 1 ครั้ง หากไม่ดีขึ้นภายในไม่กี่นาที สูดเพิ่มได้อีก 1 ครั้ง',
      martKeep: 'ใช้ยาขนาดประจำวันต่อไปตามเดิม',
      martMax: (n) => `รวมทั้งวันไม่เกิน ${n} ครั้ง (รวมขนาดประจำและที่สูดเพิ่ม)`,
      seeDoctorMart: (n) => `พบแพทย์หากไม่ดีขึ้นใน 2–3 วัน หรือต้องสูดเกิน ${n} ครั้งต่อวัน`,
      dailyController: (x) => `ใช้ยาป้องกันทุกวัน: ${x}`,
      useReliever: (x) => `ใช้ยาบรรเทาอาการเมื่อมีอาการ: ${x}`,
      increaseIcs: 'เพิ่มยาป้องกันเป็น: __________________ นาน ____ วัน (แพทย์เขียนให้)',
      ocs: 'หากแพทย์สั่งไว้: กิน prednisolone ____ mg ทุกเช้า นาน ____ วัน และติดต่อแพทย์',
      seeDoctorSaba: 'พบแพทย์หากไม่ดีขึ้นใน 2–3 วัน หรือต้องใช้ยาบรรเทาอาการซ้ำภายใน 3 ชั่วโมง',
      call1669: 'โทร 1669 หรือไปโรงพยาบาลทันที',
      relieverWhileWaiting: (x) => `ใช้ยาบรรเทาอาการต่อระหว่างรอความช่วยเหลือ: ${x}`,
      sitUp: 'นั่งตัวตรงและพยายามตั้งสติ',
      doctor: 'แพทย์ / โรงพยาบาล:', reviewDate: 'วันที่ทบทวน:',
      source: 'อ้างอิงแผนปฏิบัติการโรคหืดของ GINA 2026',
    },
    patient: 'ชื่อผู้ป่วย', hn: 'HN', date: 'วันที่',
    roleController: 'ยาควบคุมอาการ: ใช้ทุกวัน แม้ไม่มีอาการ',
    roleExac: 'ยาสำหรับช่วงอาการกำเริบ: ใช้ตามจำนวนวันที่แพทย์สั่ง ไม่ใช้แทนยาพ่นประจำ',
    roleReliever: 'ยาบรรเทาอาการ: ใช้เมื่อมีอาการ',
    roleMart: 'ยาควบคุมและบรรเทาอาการในหลอดเดียว (MART)',
    yourDose: 'ขนาดยาที่แพทย์สั่ง',
    howToUse: 'วิธีใช้',
    afterDose: 'หลังพ่นยาทุกครั้ง',
    rinse: 'บ้วนปากและกลั้วคอด้วยน้ำเปล่า แล้วบ้วนทิ้ง เพื่อป้องกันเชื้อราในช่องปากและเสียงแหบ',
    reliefTitle: 'เมื่อมีอาการหอบเหนื่อย',
    martRelief: (max) => `พ่นยานี้เพิ่ม 1 ครั้งเมื่อมีอาการ หากยังมีอาการหลังผ่านไปไม่กี่นาที พ่นเพิ่มได้อีก 1 ครั้ง${max ? ` รวมทั้งวันไม่เกิน ${max} ครั้ง (นับรวมขนาดที่ใช้ประจำ)` : ''}`,
    controllerRelief: (name) => (name
      ? `ยานี้ไม่ใช่ยาบรรเทาอาการเฉียบพลัน เมื่อมีอาการให้ใช้ยาบรรเทาอาการ: ${name}`
      : 'ยานี้ไม่ใช่ยาบรรเทาอาการเฉียบพลัน เมื่อมีอาการให้ใช้ยาบรรเทาอาการที่แพทย์สั่ง: ______________________'),
    relieverUseAsthma: 'หากต้องใช้ยาบรรเทาอาการมากกว่าสัปดาห์ละ 2 ครั้ง ควรพบแพทย์ เพราะอาจควบคุมโรคหืดได้ไม่ดี',
    relieverUseCopd: 'หากต้องใช้ยาบรรเทาอาการบ่อยกว่าปกติ ควรพบแพทย์',
    soonTitle: 'ควรพบแพทย์ภายใน 1–2 วัน หาก',
    soonAsthma: ['อาการแย่กว่าปกติ หรือตื่นกลางดึกเพราะหอบ', 'ต้องใช้ยาบรรเทาอาการมากกว่าปกติ', 'เป็นหวัดหรือติดเชื้อทางเดินหายใจแล้วหายใจลำบากขึ้น'],
    soonCopd: ['เหนื่อยมากกว่าปกติ', 'เสมหะมากขึ้น หรือเปลี่ยนเป็นสีเหลืองหรือเขียว', 'มีไข้'],
    urgentTitle: 'ไปโรงพยาบาลทันที หรือโทร 1669 หาก',
    urgent: ['หอบเหนื่อยมากจนพูดเป็นประโยคไม่ได้', 'ริมฝีปากหรือปลายนิ้วเขียวคล้ำ', 'ซึมหรือสับสน', 'ใช้ยาบรรเทาอาการแล้วไม่ดีขึ้น หรืออาการกลับมาอย่างรวดเร็ว'],
    goodToKnow: 'ข้อควรรู้',
    expiry: 'การทิ้งยา',
    counter: 'ตรวจดูตัวนับโดส และรับยาหลอดใหม่ก่อนยาหมด',
    bring: 'นำยาพ่นมาด้วยทุกครั้งที่พบแพทย์ เพื่อตรวจสอบวิธีการพ่นยา',
    prescriber: 'แพทย์/เภสัชกร', hospital: 'โรงพยาบาล', contact: 'ติดต่อ',
    footer: 'คู่มือยาพ่นขยายหลอดลมสำหรับผู้ใหญ่',
  },
};

const sheetRelievers = () => deviceData.filter(d => d.class.split('/').every(c => ['SABA', 'SAMA'].includes(c.trim())));

// The printable sheet itself: always light, fixed A4-like width.
// Cautions by drug class: ICS from GINA 2026 (p.39) and GOLD 2026 (pneumonia in COPD);
// SABA/LABA/SAMA/LAMA from the products' SmPC section 4.4 (special warnings).
const CAUTION_ORDER = ['ICS', 'LABA', 'LAMA', 'SAMA', 'SABA'];
// ⚠ symbol; a click opens the class cautions in a popover (portalled so cards can't clip it).
const CautionsPanel = ({ med, t }) => {
  const [pos, setPos] = useState(null);
  const ref = React.useRef(null);
  const cls = med.class.split('/').map(x => x.trim());
  const groups = CAUTION_ORDER.filter(c => cls.includes(c) && t.cautions[c]);
  useEffect(() => {
    if (!pos) return;
    const close = (e) => { if (ref.current && ref.current.contains(e.target)) return; if (e.target.closest && e.target.closest('[data-cautions-pop]')) return; setPos(null); };
    const hide = () => setPos(null);
    const key = (e) => { if (e.key === 'Escape') setPos(null); };
    document.addEventListener('mousedown', close);
    window.addEventListener('scroll', hide, true);
    window.addEventListener('keydown', key);
    return () => { document.removeEventListener('mousedown', close); window.removeEventListener('scroll', hide, true); window.removeEventListener('keydown', key); };
  }, [pos]);
  if (!groups.length) return null;
  const toggle = (e) => {
    e.stopPropagation();
    if (pos) { setPos(null); return; }
    const r = ref.current.getBoundingClientRect();
    const w = Math.min(340, window.innerWidth - 16);
    const left = Math.max(8, Math.min(r.left, window.innerWidth - w - 8));
    const below = r.bottom + 6, maxH = Math.min(420, window.innerHeight - 16);
    const top = below + maxH > window.innerHeight - 8 ? Math.max(8, r.top - 6 - maxH) : below;
    setPos({ left, top, width: w, maxH });
  };
  return (
    <>
      <button type="button" ref={ref} onClick={toggle} title={t.cautionsTitle} aria-label={t.cautionsTitle} aria-expanded={!!pos} data-cautions-btn
        className="inline-flex items-center justify-center w-6 h-6 rounded-md border border-orange-200 bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors shrink-0 print:hidden">
        <AlertTriangle className="w-3.5 h-3.5" />
      </button>
      {pos && ReactDOM.createPortal(
        <div data-cautions-pop role="dialog" aria-label={t.cautionsTitle} style={{ position: 'fixed', left: pos.left, top: pos.top, width: pos.width, maxHeight: pos.maxH, zIndex: 1000 }}
          className="overflow-y-auto rounded-xl border border-orange-200 bg-white shadow-2xl p-3 text-xs text-slate-700">
          <div className="flex items-center gap-1.5 font-extrabold text-orange-700 mb-2"><AlertTriangle className="w-3.5 h-3.5" /> {t.cautionsTitle}: {med.marketName}</div>
          <div className="flex flex-col gap-2">
            {groups.map(c => (
              <div key={c}>
                <div className="font-extrabold text-orange-700">{c}</div>
                <ul className="list-disc pl-4 space-y-0.5 leading-snug">{t.cautions[c].map((x, i) => <li key={i}>{x}</li>)}</ul>
              </div>
            ))}
            <p className="leading-snug italic text-slate-500">{t.cautionsAll}</p>
          </div>
        </div>, document.body)}
    </>
  );
};


// ---- Official guideline figures ----
// The GINA and GOLD reports are copyrighted ("do not copy or distribute"), so their figures are not copied into the app:
// each entry opens the official PDF at the figure's page (PDF page numbers, checked 26 Oct 2026 against the files
// below; GINA 2026 Strategy Report, GOLD 2026 Report v1.3).
const GUIDELINE_DOCS = {
  gina: { name: 'GINA 2026', url: 'https://ginasthma.org/wp-content/uploads/2026/05/GINA-2026-Strategy-Report-WMS.pdf', mb: 17 },
  gold: { name: 'GOLD 2026', url: 'https://goldcopd.org/wp-content/uploads/2026/01/GOLD-REPORT-2026-v1.3-8Dec2025_WMV2.pdf', mb: 20 },
};
// key: [document, figure label, PDF page, title as printed in the report]
const GUIDELINE_FIGURES = {
  'gina-2-4': ['gina', 'Box 2-4', 53, 'Investigating poor symptom control and/or exacerbations despite ICS-containing treatment'],
  'gina-4-2': ['gina', 'Box 4-2', 78, 'Low, medium and high daily metered doses of inhaled corticosteroids (alone or with LABA)'],
  'gina-4-3': ['gina', 'Box 4-3', 81, 'Asthma treatment tracks for adults and adolescents'],
  'gina-4-4': ['gina', 'Box 4-4', 82, 'Initial asthma treatment for adults and adolescents with a diagnosis of asthma'],
  'gina-4-5': ['gina', 'Box 4-5', 83, 'Flowchart for selecting initial treatment in adults and adolescents with a diagnosis of asthma'],
  'gina-4-6': ['gina', 'Box 4-6', 84, 'Personalized management for adults and adolescents to control symptoms and minimize future risk'],
  'gina-4-7': ['gina', 'Box 4-7', 85, 'Track 1 (preferred) treatment Steps 1–4 for adults and adolescents'],
  'gina-4-13': ['gina', 'Box 4-13', 113, 'Options for stepping down treatment in adults and adolescents once asthma is well controlled'],
  'gina-5-1': ['gina', 'Box 5-1', 119, 'Shared decision-making between healthcare provider and patient about choice of inhalers'],
  'gina-5-2': ['gina', 'Box 5-2', 120, 'Choice and effective use of inhaler devices'],
  'gina-9-2': ['gina', 'Box 9-2', 175, 'Medication options for written asthma action plans for adults and adolescents'],
  'gina-9-4': ['gina', 'Box 9-4', 182, 'Management of asthma exacerbations in primary care (adults, adolescents, children 6–11 years)'],
  'gina-9-5': ['gina', 'Box 9-5', 184, 'Discharge management after primary care visit for an asthma exacerbation'],
  'gina-9-6': ['gina', 'Box 9-6', 187, 'Management of asthma exacerbations in acute care facility'],
  'gina-9-7': ['gina', 'Box 9-7', 192, 'Discharge management after acute care or ED management for an asthma exacerbation'],
  'gold-3-7': ['gold', 'Figure 3.7', 72, 'Diagnosis and Management Cycle'],
  'gold-3-8': ['gold', 'Figure 3.8', 73, 'Initial Pharmacological Treatment'],
  'gold-3-9': ['gold', 'Figure 3.9', 74, 'Follow-up Pharmacological Treatment'],
  'gold-3-10': ['gold', 'Figure 3.10', 78, 'Factors to Consider when Initiating ICS Treatment'],
  'gold-4-2': ['gold', 'Figure 4.2', 107, 'Classification of the Severity of COPD Exacerbations'],
  'gold-4-3': ['gold', 'Figure 4.3', 108, 'Conditions That May Mimic or Worsen Exacerbation-like Symptoms'],
  'gold-4-4': ['gold', 'Figure 4.4', 109, 'Assessing the Appropriate Place of Management During COPD Exacerbation'],
  'gold-4-5': ['gold', 'Figure 4.5', 113, 'Management of Severe but not Life-threatening Exacerbations'],
};
// figures shown for each guide window
const GUIDE_FIGURE_SETS = {
  exac: ['gina-9-4', 'gina-9-5', 'gina-9-6', 'gina-9-7', 'gold-4-2', 'gold-4-3', 'gold-4-4', 'gold-4-5'],
  maint: ['gina-4-3', 'gina-4-4', 'gina-4-5', 'gina-4-6', 'gina-4-7', 'gina-4-2', 'gold-3-7', 'gold-3-8', 'gold-3-10'],
  follow: ['gina-4-6', 'gina-4-13', 'gina-2-4', 'gina-9-2', 'gold-3-7', 'gold-3-9', 'gold-3-10'],
  device: ['gina-5-1', 'gina-5-2'],
  spacer: ['gina-5-2'],
  steroid: ['gina-4-2'],
};
const FIG_TEXT = {
  en: { btn: 'Figures', title: 'Guideline figures', sub: 'The original diagrams, opened in the official report', asthma: 'Asthma: GINA 2026', copd: 'COPD: GOLD 2026',
    open: (p) => `Open (PDF page ${p})`,
    note: 'GINA and GOLD figures are copyrighted, so they are not copied into this app: each link opens the official report at that page (a large PDF, 17 to 20 MB). If your browser opens the report at its first page, go to the PDF page shown.' },
  th: { btn: 'แผนภาพ', title: 'แผนภาพจากแนวทางเวชปฏิบัติ', sub: 'แผนภาพต้นฉบับ เปิดในเอกสารฉบับทางการ', asthma: 'โรคหืด: GINA 2026', copd: 'COPD: GOLD 2026',
    open: (p) => `เปิด (หน้า PDF ${p})`,
    note: 'แผนภาพของ GINA และ GOLD มีลิขสิทธิ์ จึงไม่ได้คัดลอกมาไว้ในแอปนี้ ลิงก์แต่ละรายการเปิดเอกสารฉบับทางการที่หน้านั้น (ไฟล์ PDF ขนาดใหญ่ 17 ถึง 20 MB) หากเบราว์เซอร์เปิดที่หน้าแรก ให้ไปที่หน้า PDF ที่ระบุ' },
};
const GuidelineFiguresButton = ({ set, lang }) => {
  const [open, setOpen] = useState(false);
  const c = FIG_TEXT[lang] || FIG_TEXT.en;
  const keys = GUIDE_FIGURE_SETS[set] || [];
  useEffect(() => {
    if (!open) return;
    // Escape closes this list first, not the guide window under it
    const esc = (e) => { if (e.key === 'Escape') { e.stopImmediatePropagation(); setOpen(false); } };
    window.addEventListener('keydown', esc, true);
    return () => window.removeEventListener('keydown', esc, true);
  }, [open]);
  if (!keys.length) return null;
  const group = (doc, heading) => {
    const items = keys.filter(k => GUIDELINE_FIGURES[k][0] === doc);
    if (!items.length) return null;
    return (
      <section className="flex flex-col gap-2">
        <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{heading}</h3>
        {items.map(k => {
          const [d, label, page, title] = GUIDELINE_FIGURES[k];
          return (
            <a key={k} href={`${GUIDELINE_DOCS[d].url}#page=${page}`} target="_blank" rel="noopener noreferrer" data-figure={k}
              className="block bg-white rounded-xl border border-slate-200 p-3 hover:border-indigo-300 hover:bg-indigo-50/40 transition-colors min-w-0">
              <span className="block text-[11px] font-bold text-indigo-600">{GUIDELINE_DOCS[d].name} · {label}</span>
              <span className="block text-sm font-bold text-slate-800 leading-snug break-words">{title}</span>
              <span className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-indigo-700">{c.open(page)} <span aria-hidden="true">↗</span></span>
            </a>
          );
        })}
      </section>
    );
  };
  return (
    <>
      <button onClick={() => setOpen(true)} data-figures-btn={set} aria-label={c.title} title={c.title}
        className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors shrink-0">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 15l3-4 3 3 4-5" /><circle cx="8" cy="8" r="1.5" /></svg>
        <span className="hidden sm:inline">{c.btn}</span>
      </button>
      {open && ReactDOM.createPortal(
        <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-[60] flex items-center justify-center p-2 sm:p-4 print:hidden" onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }} data-figures-modal>
          <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh]" role="dialog" aria-modal="true" aria-label={c.title}>
            <div className="flex items-start justify-between gap-3 p-4 border-b border-slate-100 bg-slate-50 rounded-t-2xl shrink-0">
              <div className="min-w-0">
                <h2 className="text-base sm:text-lg font-bold text-slate-800 leading-tight">{c.title}</h2>
                <p className="text-xs text-slate-500">{c.sub}</p>
              </div>
              <button onClick={() => setOpen(false)} className="p-2 -m-1 text-slate-400 hover:text-slate-700 hover:bg-white rounded-full transition-colors shrink-0" aria-label="Close"><X className="w-5 h-5" /></button>
            </div>
            <div className="p-3 sm:p-4 overflow-y-auto flex flex-col gap-4 bg-slate-50">
              {group('gina', c.asthma)}
              {group('gold', c.copd)}
              <p className="text-[11px] text-slate-500 leading-snug">{c.note}</p>
            </div>
          </div>
        </div>, document.body)}
    </>
  );
};

// --- Steroid-dose calculator ---
// GINA 2026 Summary Guide Table 6 (adults and adolescents): low / medium / high total daily METERED ICS doses (mcg).
// lo–hi = low, >hi–med = medium, >med = high. med null: nothing above hi is graded
// (over = grade used above hi). Bands are dose levels, not dose equivalence.
// merged: GINA gives one band for low and medium together (fluticasone furoate 100, mometasone pMDI 200-400),
// graded "low to medium". Ciclesonide (pMDI, extrafine): 80-160 low, >160-320 medium, >320 high.
// Mometasone DPI has no band ("depends on DPI device - see product information").
const ICS_BANDS = {
  adult: {
    bdp:   { lo: 200, hi: 500, med: 1000 },
    bdpEf: { lo: 100, hi: 200, med: 400 },
    bud:   { lo: 200, hi: 400, med: 800 },
    budNeb: null,
    ff:    { lo: 100, hi: 100, med: 100, merged: true },
    fp:    { lo: 100, hi: 250, med: 500 },
    mom:   { lo: 200, hi: 400, med: 400, merged: true },
    cic:   { lo: 80, hi: 160, med: 320 },
  },
};
const ICS_GRADE_RANK = { below: 0, low: 1, lowmed: 1.5, medium: 2, high: 3, above: 3, na: -1 };
const gradeIcs = (key, mcg, age = 'adult') => {
  const b = ICS_BANDS[age][key];
  if (!b || !(mcg > 0)) return 'na';
  if (mcg < b.lo) return 'below';
  if (mcg <= b.hi) return b.merged ? 'lowmed' : 'low';
  if (b.med == null) return b.over || 'high';
  if (mcg <= b.med) return 'medium';
  return 'high';
};
// Labels that state the DELIVERED dose, converted to the metered dose GINA uses:
// budesonide-formoterol 80/4.5 = 100/6, 160/4.5 = 200/6, 320/9 = 400/12; Trimbow 87/5/9 = 100/6/10.
const ICS_METERED = { 51: 100, 52: 200, 71: 100, 72: 200, 31: 400, 291: 200, 25: 100, 405: 200, 406: 400, 531: 200, 542: 200, 543: 200, 544: 200 };
const NEB_STRENGTHS = [250, 500, 1000];
// Adult label maximum per product, checked 8 Oct 2026: n = inhalations a day, mcg = labelled ICS
// mcg a day. UK SmPC unless noted (US label: QVAR RediHaler; AU PI: Symbicort Rapihaler).
// MART totals are checked against each product's martMax instead. Pulmicort Respules: no fixed
// adult maximum in the SmPC ("in very severe cases the dosage may be further increased").
const LABEL_MAX = {
  201: { mcg: 2000, src: 'UK SmPC' }, 202: { mcg: 2000, src: 'UK SmPC' }, 203: { mcg: 2000, src: 'UK SmPC' },   // Flixotide Evohaler: 1000 mcg BID
  91: { mcg: 1600, src: 'UK SmPC' }, 92: { mcg: 1600, src: 'UK SmPC' },                                         // Pulmicort Turbohaler
  293: { mcg: 1600, src: 'SmPC' }, 294: { mcg: 1600, src: 'SmPC' },                                             // Giona Easyhaler
  261: { mcg: 640, src: 'US label' }, 504: { mcg: 640, src: 'US label' },                                      // QVAR RediHaler: 320 mcg BID
  526: { mcg: 2000, src: 'US label' }, 527: { mcg: 2000, src: 'US label' }, 528: { mcg: 2000, src: 'US label' },                                     // Flovent Diskus: 1,000 mcg BID
  507: { n: 1, src: 'US label' }, 508: { n: 1, src: 'US label' }, 512: { n: 2, src: 'US label' }, 513: { n: 2, src: 'US label' }, 514: { n: 2, src: 'US label' }, // Arnuity Ellipta once daily; AirDuo 1 BID
  41: { n: 4, src: 'UK SmPC' }, 42: { n: 4, src: 'UK SmPC' }, 43: { n: 4, src: 'UK SmPC' },                    // Seretide Evohaler: 2 puffs BID
  61: { n: 2, src: 'UK SmPC' }, 62: { n: 2, src: 'UK SmPC' }, 63: { n: 2, src: 'UK SmPC' },                    // Seretide Accuhaler: 1 BID
  51: { n: 4, src: 'AU PI' }, 52: { n: 8, src: 'AU PI' },                                                      // Symbicort Rapihaler 100/6, 200/6
  71: { n: 8, src: 'UK SmPC' }, 72: { n: 8, src: 'UK SmPC' }, 31: { n: 4, src: 'UK SmPC' }, 291: { n: 8, src: 'SmPC' }, // Symbicort / Bufomix
  32: { n: 4, src: 'UK SmPC' }, 33: { n: 4, src: 'UK SmPC' },                                                  // Foster 100/6, 200/6 (maintenance)
  302: { n: 4, src: 'UK SmPC' },                                                                               // Flutiform 125/5: 2 puffs BID
  101: { n: 1, src: 'UK SmPC' }, 102: { n: 1, src: 'UK SmPC' }, 12: { n: 1, src: 'UK SmPC' }, 103: { n: 1, src: 'UK SmPC' }, // Ellipta
  531: { n: 4, src: 'UK SmPC' }, 535: { mcg: 800, src: 'JP insert' }, 536: { mcg: 800, src: 'JP insert' }, 542: { n: 8, src: 'JP insert' }, 543: { n: 8, src: 'JP insert' }, 544: { n: 8, src: 'JP insert' }, // Trimbow 172, Qvar aerosol, BudeForu
  25: { n: 4, src: 'UK SmPC' }, 21: { n: 4, src: 'label' },                                                    // Trimbow, Breztri: 2 BID
  505: { mcg: 640, src: 'US label' }, 506: { mcg: 640, src: 'US label' },                                       // Alvesco: 320 mcg BID (label read 13 Oct 2026)
  509: { n: 4, src: 'US label' }, 510: { n: 4, src: 'US label' }, 515: { n: 4, src: 'US label' }, 516: { n: 4, src: 'US label' }, // Asmanex HFA, Dulera: 2 inhalations BID (labels read 13 Oct 2026)
  401: { mcg: 1600, src: 'label' }, 402: { mcg: 1600, src: 'label' }, 404: { mcg: 1600, src: 'label' },       // budesonide MDI / capsules (MIMS brands)
  431: { mcg: 1600, src: 'label' }, 432: { mcg: 1600, src: 'label' }, 433: { mcg: 1600, src: 'label' },       // BudeSpray, Budiair
  435: { mcg: 2000, src: 'label' }, 436: { mcg: 2000, src: 'label' }, 437: { mcg: 2000, src: 'label' }, 438: { mcg: 2000, src: 'label' }, // Beclocip (standard-particle BDP)
  405: { n: 8, src: 'UK SmPC' }, 406: { n: 4, src: 'UK SmPC' }, 407: { n: 4, src: 'UK SmPC' },                // DuoResp Spiromax, Foster NEXThaler (maintenance)
  408: { n: 4, src: 'label' }, 409: { n: 4, src: 'label' }, 410: { n: 4, src: 'label' },                      // Aerotide, Seroflo: 2 puffs BID
  411: { n: 2, src: 'SmPC' }, 412: { n: 2, src: 'SmPC' }, 413: { n: 2, src: 'SmPC' }, 414: { n: 2, src: 'SmPC' }, // Salflumix, Xalflu: 1 BID
};
const icsInfo = (med) => {
  const c = medComponents(med).ICS;
  if (!c) return null;
  const n = c.name.toLowerCase();
  let key = null;
  if (/beclo/.test(n)) key = med.isExtraFine ? 'bdpEf' : 'bdp';
  else if (/budesonide/.test(n)) key = med.type === 'Nebulizer' ? 'budNeb' : 'bud';
  else if (/mometasone/.test(n)) key = med.type === 'MDI' ? 'mom' : null; // GINA: a band for the pMDI only
  else if (/ciclesonide/.test(n)) key = med.type === 'MDI' ? 'cic' : null;
  else if (/furoate/.test(n)) key = 'ff';
  else if (/propionate/.test(n)) key = 'fp';
  if (!key) return null;
  const neb = med.type === 'Nebulizer';
  const mcg = neb ? NEB_STRENGTHS[0] : (ICS_METERED[med.id] || (c.unit === 'mg' ? c.amount * 1000 : c.amount));
  // Asmanex HFA, Dulera: the US label strength is the delivered dose and gives no metered dose in mcg, so the label
  // strength is graded as it stands (user decision 13 Oct 2026).
  // Alvesco: the label strength is the dose from the actuator (80 / 160 mcg; 100 / 200 mcg from the valve, US label);
  // GINA's ciclesonide band is graded on the label strength, like mometasone.
  return { key, mcg, neb, converted: !!ICS_METERED[med.id], labelled: c.amount, labelNote: key === 'mom' ? 'labelOnly' : key === 'cic' ? 'labelCic' : null };
};
// Default regimen from the product's instructions, e.g. "2 puffs BID", "1 inhalation ONCE daily".
const defaultRegimen = (med) => {
  const ins = med.instructions || '';
  const m = /(\d+)(?:\s*-\s*\d+)?\s*(?:puff|inhalation|blister|capsule|actuation)/i.exec(ins);
  const per = m ? +m[1] : 1;
  const freq = /QID/.test(ins) ? 4 : /TID/.test(ins) ? 3 : /BID/.test(ins) ? 2 : /ONCE|QD|daily/i.test(ins) ? 1 : 2;
  return { per, freq };
};
const ICS_TEXT = {
  en: {
    btn: 'Steroid Dose',
    title: 'Inhaled Steroid Dose Calculator',
    sub: 'Total daily inhaled corticosteroid (ICS) dose, graded low / medium / high by GINA 2026',
    inhaler: 'Inhaler',
    per: 'Inhalations per dose',
    perNeb: 'Nebules per dose',
    freq: 'Times a day',
    strength: 'Strength per nebule',
    prn: 'Extra as-needed inhalations a day (MART)',
    add: 'Add another inhaler',
    remove: 'Remove',
    resultTitle: 'Total daily ICS dose',
    overall: 'Overall',
    molecule: { bdp: 'Beclometasone (standard particle)', bdpEf: 'Beclometasone (extrafine)', bud: 'Budesonide', budNeb: 'Budesonide (nebules)', ff: 'Fluticasone furoate', fp: 'Fluticasone propionate', mom: 'Mometasone (pMDI)', cic: 'Ciclesonide (pMDI)' },
    grade: { below: 'Below low dose', low: 'Low dose', lowmed: 'Low to medium dose (GINA gives one band)', medium: 'Medium dose', high: 'High dose', above: 'Above the GINA table', na: 'Not graded' },
    band: (b) => b ? `GINA bands: ${b.merged ? 'low to medium' : 'low'} ${b.lo === b.hi ? b.lo : b.lo + '–' + b.hi}${b.med == null ? '' : b.med === b.hi ? `, high >${b.hi}` : `, medium >${b.hi}–${b.med}, high >${b.med}`} mcg/day` : 'No GINA band for this age group',
    metered: (lab, mcg) => `Label states ${lab} mcg delivered = ${mcg} mcg metered (GINA uses metered doses).`,
    labelOnly: 'The label strength is the delivered dose; the US label gives no metered dose, so the label strength is graded.',
    labelCic: 'The label strength (the dose from the actuator) is graded; the valve delivers 100 or 200 mcg.',
    martMax: (n, max) => `${n} inhalations a day in total exceeds the maximum of ${max}.`,
    maxAmount: (m) => m.n ? `${m.n} inhalation${m.n > 1 ? 's' : ''} a day` : `${m.mcg} mcg a day`,
    maxInfo: (txt, src) => `Label maximum (adults): ${txt} (${src}).`,
    maxOver: (txt, src) => `Above the label maximum of ${txt} (${src}).`,
    warnMax: 'At least one inhaler is above its label maximum: check the dose.',
    warnDup: 'More than one ICS-containing inhaler: check this is intended (duplicate ICS).',
    warnMix: 'Different ICS molecules are graded separately. GINA bands are dose levels, not dose equivalence, so the doses are not added together.',
    warnHigh: 'High-dose ICS: long-term use increases the risk of local and systemic side effects. Check technique and adherence; once asthma has been well controlled for about 3 months, consider stepping down.',
    warnNebAdult: 'Nebulised budesonide has no GINA dose band for ages 12 and over.',
    empty: 'Add an inhaler to start.',
    notes: [
      'Count every ICS-containing inhaler, including as-needed ICS-formoterol (MART) doses.',
      'Doses are total metered mcg a day. Low dose gives most of the benefit for most patients; high doses are rarely needed (GINA).',
      'These are GINA asthma bands. GOLD does not set ICS dose bands for COPD.',
    ],
    source: 'Source: GINA 2026 Summary Guide, Table 6 (low, medium and high daily metered doses of inhaled corticosteroids).',
  },
  th: {
    btn: 'ขนาดสเตียรอยด์',
    title: 'คำนวณขนาดยาสเตียรอยด์ชนิดสูด',
    sub: 'ขนาดยาสเตียรอยด์ชนิดสูด (ICS) รวมต่อวัน แบ่งเป็นขนาดต่ำ / ปานกลาง / สูง ตาม GINA 2026',
    inhaler: 'ยาสูด',
    per: 'จำนวนครั้งที่สูดต่อมื้อ',
    perNeb: 'จำนวนหลอดต่อครั้ง',
    freq: 'วันละกี่ครั้ง',
    strength: 'ความแรงต่อหลอด',
    prn: 'สูดเพิ่มเมื่อมีอาการต่อวัน (MART)',
    add: 'เพิ่มยาสูดอีกตัว',
    remove: 'ลบ',
    resultTitle: 'ขนาด ICS รวมต่อวัน',
    overall: 'สรุป',
    molecule: { bdp: 'Beclometasone (อนุภาคมาตรฐาน)', bdpEf: 'Beclometasone (อนุภาคละเอียดพิเศษ)', bud: 'Budesonide', budNeb: 'Budesonide (ชนิดพ่นละออง)', ff: 'Fluticasone furoate', fp: 'Fluticasone propionate', mom: 'Mometasone (pMDI)', cic: 'Ciclesonide (pMDI)' },
    grade: { below: 'ต่ำกว่าขนาดต่ำ', low: 'ขนาดต่ำ', lowmed: 'ขนาดต่ำถึงปานกลาง (GINA ให้เกณฑ์เดียว)', medium: 'ขนาดปานกลาง', high: 'ขนาดสูง', above: 'เกินตาราง GINA', na: 'ไม่มีการจัดระดับ' },
    band: (b) => b ? `เกณฑ์ GINA: ${b.merged ? 'ต่ำถึงปานกลาง' : 'ต่ำ'} ${b.lo === b.hi ? b.lo : b.lo + '–' + b.hi}${b.med == null ? '' : b.med === b.hi ? `, สูง >${b.hi}` : `, ปานกลาง >${b.hi}–${b.med}, สูง >${b.med}`} mcg/วัน` : 'ไม่มีเกณฑ์ GINA สำหรับกลุ่มอายุนี้',
    metered: (lab, mcg) => `ฉลากระบุ ${lab} mcg เป็นขนาดที่ออกจากอุปกรณ์ เท่ากับ ${mcg} mcg ขนาดที่ตวง (GINA ใช้ขนาดที่ตวง)`,
    labelOnly: 'ความแรงตามฉลากเป็นขนาดที่ออกจากอุปกรณ์ ฉลากสหรัฐฯ ไม่ระบุขนาดที่ตวง จึงจัดระดับจากความแรงตามฉลาก',
    labelCic: 'จัดระดับจากความแรงตามฉลาก (ขนาดที่ออกจากปากอุปกรณ์) โดยวาล์วปล่อยยา 100 หรือ 200 mcg',
    martMax: (n, max) => `รวม ${n} ครั้งต่อวัน เกินขนาดสูงสุด ${max} ครั้ง`,
    maxAmount: (m) => m.n ? `${m.n} ครั้งต่อวัน` : `${m.mcg} mcg ต่อวัน`,
    maxInfo: (txt, src) => `ขนาดสูงสุดตามฉลาก (ผู้ใหญ่): ${txt} (${src})`,
    maxOver: (txt, src) => `เกินขนาดสูงสุดตามฉลาก ${txt} (${src})`,
    warnMax: 'มียาสูดอย่างน้อยหนึ่งตัวเกินขนาดสูงสุดตามฉลาก: ตรวจสอบขนาดยา',
    warnDup: 'ใช้ยาสูดที่มี ICS มากกว่าหนึ่งตัว: ตรวจสอบว่าตั้งใจให้ ICS ซ้ำซ้อนหรือไม่',
    warnMix: 'ICS ต่างชนิดจัดระดับแยกกัน เกณฑ์ของ GINA เป็นระดับขนาดยา ไม่ใช่ขนาดที่เทียบเท่ากัน จึงไม่นำมารวมกัน',
    warnHigh: 'ICS ขนาดสูง: การใช้ระยะยาวเพิ่มความเสี่ยงต่อผลข้างเคียงเฉพาะที่และทั่วร่างกาย ตรวจเทคนิคการสูดและการใช้ยาสม่ำเสมอ เมื่อควบคุมหืดได้ดีประมาณ 3 เดือน พิจารณาลดขนาดยา',
    warnNebAdult: 'Budesonide ชนิดพ่นละอองไม่มีเกณฑ์ขนาดยาของ GINA สำหรับอายุ 12 ปีขึ้นไป',
    empty: 'เพิ่มยาสูดเพื่อเริ่มคำนวณ',
    notes: [
      'นับยาสูดที่มี ICS ทุกตัว รวมถึงการสูด ICS-formoterol เมื่อมีอาการ (MART)',
      'ขนาดยาเป็น mcg ที่ตวงรวมต่อวัน ขนาดต่ำให้ประโยชน์ส่วนใหญ่ในผู้ป่วยส่วนมาก และแทบไม่จำเป็นต้องใช้ขนาดสูง (GINA)',
      'เกณฑ์นี้เป็นของ GINA สำหรับโรคหืด GOLD ไม่ได้กำหนดเกณฑ์ขนาด ICS สำหรับ COPD',
    ],
    source: 'ที่มา: GINA 2026 Summary Guide, Table 6 (ขนาด ICS ที่ตวงต่อวัน ระดับต่ำ ปานกลาง และสูง)',
  },
};
const GRADE_TONE = { below: 'bg-slate-100 text-slate-700 border-slate-200', low: 'bg-emerald-100 text-emerald-800 border-emerald-200', lowmed: 'bg-amber-100 text-amber-800 border-amber-200', medium: 'bg-amber-100 text-amber-800 border-amber-200', high: 'bg-red-100 text-red-800 border-red-200', above: 'bg-red-100 text-red-800 border-red-200', na: 'bg-slate-100 text-slate-700 border-slate-200' };
const CalcIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="11" x2="8" y2="11.01" /><line x1="12" y1="11" x2="12" y2="11.01" /><line x1="16" y1="11" x2="16" y2="11.01" /><line x1="8" y1="15" x2="8" y2="15.01" /><line x1="12" y1="15" x2="12" y2="15.01" /><line x1="16" y1="15" x2="16" y2="18" /><line x1="8" y1="18" x2="12" y2="18" /></svg>);
const ICS_PRODUCTS = deviceData.filter(d => icsInfo(d)).sort((a, b) => a.marketName.localeCompare(b.marketName));
const newIcsRow = (id) => {
  const med = deviceData.find(d => d.id === id);
  const r = defaultRegimen(med);
  return { key: Math.random().toString(36).slice(2), id, per: med.type === 'Nebulizer' ? 1 : r.per, freq: r.freq, prn: 0, neb: NEB_STRENGTHS[1] };
};

const IcsCalculatorModal = ({ lang, onClose }) => {
  const c = ICS_TEXT[lang];
  const [rows, setRows] = useState(() => [newIcsRow(72)]);
  const upd = (k, patch) => setRows(rs => rs.map(r => r.key === k ? { ...r, ...patch } : r));
  const num = (v, max) => Math.max(0, Math.min(max, parseInt(v, 10) || 0));
  const lines = rows.map(r => {
    const med = deviceData.find(d => d.id === r.id);
    const info = icsInfo(med);
    const perMcg = info.neb ? r.neb : info.mcg;
    const count = r.per * r.freq + (med.isMart ? r.prn : 0);
    const martMax = med.isMart && med.martMax ? parseInt((med.martMax.match(/\d+/) || [])[0], 10) : null;
    // Label maximum: inhalation counts check the maintenance dose (MART totals use martMax);
    // microgram limits use the labelled strength.
    const lm = LABEL_MAX[med.id] || null;
    const usingMart = med.isMart && r.prn > 0;
    const overMax = !!lm && (lm.n ? !usingMart && r.per * r.freq > lm.n : info.labelled * count > lm.mcg);
    return { r, med, info, perMcg, count, mcg: perMcg * count, martMax, lm, overMax };
  });
  const byKey = {};
  lines.forEach(l => { byKey[l.info.key] = (byKey[l.info.key] || 0) + l.mcg; });
  const results = Object.keys(byKey).map(k => ({ k, mcg: byKey[k], grade: gradeIcs(k, byKey[k]) }));
  const overall = results.reduce((best, x) => (ICS_GRADE_RANK[x.grade] > ICS_GRADE_RANK[best] ? x.grade : best), 'na');
  const warns = [];
  if (lines.length > 1) warns.push(c.warnDup);
  if (results.length > 1) warns.push(c.warnMix);
  if (results.some(x => x.grade === 'high' || x.grade === 'above')) warns.push(c.warnHigh);
  if (byKey.budNeb) warns.push(c.warnNebAdult);
  if (lines.some(l => l.overMax)) warns.push(c.warnMax);
  const field = 'w-full rounded-lg border border-slate-200 bg-white text-slate-800 text-sm p-2';
  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 print:hidden">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col max-h-[95vh] animate-in fade-in zoom-in-95 duration-200" data-ics-calc>
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-fuchsia-50/80 rounded-t-2xl shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-fuchsia-100 text-fuchsia-600 rounded-xl"><CalcIcon className="w-5 h-5" /></div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 leading-tight">{c.title}</h2>
              <p className="text-xs text-slate-500">{c.sub}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 shrink-0"><GuidelineFiguresButton set="steroid" lang={lang} /><button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-700 hover:bg-white rounded-full transition-colors" aria-label="Close"><X className="w-6 h-6" /></button></div>
        </div>
        <div className="p-4 sm:p-6 flex-grow overflow-y-auto bg-slate-50 flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            {lines.length === 0 && <p className="text-sm text-slate-500">{c.empty}</p>}
            {lines.map(({ r, med, info, perMcg, count, martMax, lm, overMax }) => (
              <div key={r.key} data-ics-row className="bg-white rounded-xl border border-slate-200 p-3 flex flex-col gap-2">
                <div className="flex items-end gap-2">
                  <label className="flex-1 min-w-0">
                    <span className="block text-[11px] font-bold text-slate-500 mb-1">{c.inhaler}</span>
                    <select value={r.id} onChange={(e) => { const n = newIcsRow(+e.target.value); upd(r.key, { id: n.id, per: n.per, freq: n.freq, prn: 0 }); }} className={field}>
                      {ICS_PRODUCTS.map(d => <option key={d.id} value={d.id}>{d.marketName}</option>)}
                    </select>
                  </label>
                  <button type="button" onClick={() => setRows(rs => rs.filter(x => x.key !== r.key))} className="shrink-0 px-3 py-2 rounded-lg border border-slate-200 bg-white text-xs font-bold text-slate-500 hover:text-red-600 hover:border-red-300">{c.remove}</button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {info.neb && (
                    <label>
                      <span className="block text-[11px] font-bold text-slate-500 mb-1">{c.strength}</span>
                      <select value={r.neb} onChange={(e) => upd(r.key, { neb: +e.target.value })} className={field}>
                        {NEB_STRENGTHS.map(s => <option key={s} value={s}>{s / 1000} mg</option>)}
                      </select>
                    </label>
                  )}
                  <label>
                    <span className="block text-[11px] font-bold text-slate-500 mb-1">{info.neb ? c.perNeb : c.per}</span>
                    <input type="number" min="0" max="8" value={r.per} onChange={(e) => upd(r.key, { per: num(e.target.value, 8) })} className={field} data-ics-per />
                  </label>
                  <label>
                    <span className="block text-[11px] font-bold text-slate-500 mb-1">{c.freq}</span>
                    <select value={r.freq} onChange={(e) => upd(r.key, { freq: +e.target.value })} className={field} data-ics-freq>
                      {[1, 2, 3, 4].map(f => <option key={f} value={f}>{f}</option>)}
                    </select>
                  </label>
                  {med.isMart && (
                    <label className="col-span-2 sm:col-span-1">
                      <span className="block text-[11px] font-bold text-slate-500 mb-1">{c.prn}</span>
                      <input type="number" min="0" max="12" value={r.prn} onChange={(e) => upd(r.key, { prn: num(e.target.value, 12) })} className={field} data-ics-prn />
                    </label>
                  )}
                </div>
                <div className="text-xs text-slate-600">
                  <span className="font-semibold">{c.molecule[info.key]}</span>: {perMcg} mcg × {count} = <span className="font-bold tabular-nums">{perMcg * count} mcg/day</span>
                  {info.converted && <span className="block text-slate-500">{c.metered(info.labelled, info.mcg)}</span>}
                  {info.labelNote && <span className="block text-slate-500" data-ics-labelonly>{c[info.labelNote]}</span>}
                  {martMax && count > martMax && <span className="block font-semibold text-red-700">{c.martMax(count, martMax)}</span>}
                  {lm && <span data-ics-max={overMax ? 'over' : 'ok'} className={`block ${overMax ? 'font-semibold text-red-700' : 'text-slate-500'}`}>{overMax ? c.maxOver(c.maxAmount(lm), lm.src) : c.maxInfo(c.maxAmount(lm), lm.src)}</span>}
                </div>
              </div>
            ))}
            <button type="button" onClick={() => setRows(rs => [...rs, newIcsRow(ICS_PRODUCTS[0].id)])} className="self-start px-3 py-2 rounded-lg border border-dashed border-fuchsia-300 bg-white text-xs font-bold text-fuchsia-700 hover:bg-fuchsia-50">+ {c.add}</button>
          </div>

          {results.length > 0 && (
            <section className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col gap-3" data-ics-results>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-extrabold text-slate-800">{c.resultTitle}</h3>
                <span data-ics-overall={overall} className={`px-3 py-1 rounded-full border text-sm font-extrabold ${GRADE_TONE[overall]}`}>{c.overall}: {c.grade[overall]}</span>
              </div>
              <div className="flex flex-col divide-y divide-slate-100">
                {results.map(x => (
                  <div key={x.k} data-ics-result={x.k} data-grade={x.grade} className="py-2 flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <div className="text-sm font-bold text-slate-800">{c.molecule[x.k]}: <span className="tabular-nums">{x.mcg} mcg/day</span></div>
                      <div className="text-[11px] text-slate-500">{c.band(ICS_BANDS.adult[x.k])}</div>
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full border text-xs font-bold ${GRADE_TONE[x.grade]}`}>{c.grade[x.grade]}</span>
                  </div>
                ))}
              </div>
              {warns.length > 0 && (
                <ul className="list-disc pl-5 text-xs text-amber-800 space-y-1 bg-amber-50 border border-amber-200 rounded-xl p-3">{warns.map((w, i) => <li key={i}>{w}</li>)}</ul>
              )}
            </section>
          )}

          <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">{c.notes.map((x, i) => <li key={i}>{x}</li>)}</ul>
          <p className="text-[11px] text-slate-500">{c.source}</p>
        </div>
      </div>
    </div>
  );
};

// --- Spacer & mask guide (GINA 2026: Box 5-2, Box 11-4, Table 6 footnote, section 11) ---
const SPACER_TEXT = {
  en: {
    btn: 'Spacer & Mask',
    title: 'Spacer & Mask Guide',
    sub: 'Who needs a spacer, mouthpiece or face mask, how to use and clean it (GINA 2026)',
    whoTitle: 'Who should use a spacer',
    who: [
      'Every inhaled steroid (ICS) given by pMDI: a spacer improves lung delivery and reduces mouth and throat side effects.',
      'Acute asthma: give salbutamol by pMDI plus spacer, 1 puff at a time.',
      'Anyone who cannot press the canister and breathe in at the same time.',
      'Never use a spacer with a dry-powder inhaler (Turbuhaler, Spiromax/RespiClick, Ellipta, Easyhaler, NEXThaler, Accuhaler/Diskus, Airmaster, Pressair, Twisthaler, Breezhaler, HandiHaler or other capsule inhalers) or a breath-actuated pMDI (QVAR RediHaler).',
    ],
    ageTitle: 'Mouthpiece or face mask, by age',
    ageNote: "Children's rows (GINA Box 11-4, ages 5 and under) are shown for comparison only; this guide is for adults.",
    adultTag: 'This guide',
    ageHead: ['Age', 'Preferred', 'Alternative'],
    ages: [
      ['0–3 years', 'pMDI + valved spacer with face mask', 'Nebuliser with face mask'],
      ['4–5 years', 'pMDI + valved spacer with mouthpiece', 'Spacer with face mask, or (if not available) nebuliser with mouthpiece or face mask'],
      ['Adults', 'pMDI + spacer with mouthpiece', 'Face mask only for people who cannot seal their lips around the mouthpiece (e.g. elderly, frail)'],
    ],
    maskTitle: 'If a face mask is used',
    mask: [
      'Fit it tightly over the mouth and nose so no drug is lost and none reaches the eyes.',
      'Clean the skin around the nose and mouth straight after the dose (especially with steroids).',
    ],
    singleTitle: 'Single-breath technique (preferred)',
    single: [
      'Remove the cap and shake the inhaler immediately before each puff.',
      'Fit the inhaler into the spacer.',
      'Breathe out gently, away from the spacer.',
      'Seal your lips around the mouthpiece and press the canister once.',
      'Breathe in slowly and deeply, then hold your breath for about 10 seconds or as long as comfortable.',
      'For a second puff, shake again and repeat. Rinse your mouth after steroid inhalers.',
    ],
    tidalTitle: 'Tidal breathing (too breathless for a deep breath)',
    tidal: [
      'Shake, then press once into the spacer when the mouthpiece or mask is in place.',
      'Take 5–6 normal breaths in and out through the spacer after each puff.',
      'Watch the valve move with each breath.',
    ],
    tipsTitle: 'Getting the full dose',
    tips: [
      'Only 1 puff into the spacer at a time: several puffs at once markedly reduce the dose inhaled.',
      'Start breathing in as soon as possible after the puff.',
      'Spacers deliver different doses, so take care when changing brand.',
    ],
    careTitle: 'Cleaning and care',
    care: [
      'Wash in warm water with dishwashing detergent, do not rinse, and let it air-dry (no towel). This reduces static that holds the drug on the plastic.',
      'Wash a new plastic spacer before first use. A spacer kept for emergencies should be washed regularly (e.g. monthly).',
      'Anti-static or metal spacers are less affected by static.',
      'Replace it if it is cracked or the valve no longer moves, and as the maker advises.',
    ],
    nebTitle: 'Nebulisers',
    neb: [
      'Use only when a spacer cannot be used effectively.',
      'Give inhaled steroids with a mouthpiece to keep the drug out of the eyes; if a mask is used, clean the face afterwards.',
      'Ipratropium-containing solutions (Berodual): prefer a mouthpiece and keep the mist away from the eyes (caution in narrow-angle glaucoma).',
      'Follow infection control: nebulisers can spread respiratory viruses up to 1 metre.',
    ],
    listTitle: 'Inhalers in this guide',
    groups: { spacer: 'Use with a spacer (pMDI)', noSpacer: 'Do not use a spacer', smi: 'Soft mist inhaler: slow mist, spacer not usually needed', neb: 'Nebuliser: mouthpiece or face mask' },
    source: 'Source: GINA 2026 full report, Box 5-2 (effective use of inhaler devices), Box 11-4 (devices for children 5 years and under, shown for comparison) and section 11 (pMDI and spacer technique); GINA 2026 Summary Guide, Table 6 footnote. Ipratropium eye caution: product information.',
  },
  th: {
    btn: 'Spacer และหน้ากาก',
    title: 'คู่มือ Spacer และหน้ากาก',
    sub: 'ใครควรใช้ spacer, ปากกระบอก (mouthpiece) หรือหน้ากาก และวิธีใช้และทำความสะอาด (GINA 2026)',
    whoTitle: 'ใครควรใช้ spacer',
    who: [
      'ยาสเตียรอยด์ชนิดสูด (ICS) ทุกตัวที่เป็น pMDI: spacer ช่วยให้ยาเข้าปอดมากขึ้นและลดผลข้างเคียงในปากและคอ',
      'หืดกำเริบเฉียบพลัน: ให้ salbutamol ทาง pMDI ร่วมกับ spacer ทีละ 1 ครั้ง',
      'ผู้ที่ไม่สามารถกดกระบอกยาพร้อมกับหายใจเข้าได้',
      'ห้ามใช้ spacer กับยาสูดชนิดผงแห้ง (Turbuhaler, Spiromax/RespiClick, Ellipta, Easyhaler, NEXThaler, Accuhaler/Diskus, Airmaster, Pressair, Twisthaler, Breezhaler, HandiHaler หรือยาสูดชนิดแคปซูลอื่น) หรือ pMDI ที่ทำงานเมื่อหายใจเข้า (QVAR RediHaler)',
    ],
    ageTitle: 'ปากกระบอกหรือหน้ากาก ตามอายุ',
    ageNote: 'แถวของเด็ก (GINA Box 11-4 อายุ 5 ปีหรือน้อยกว่า) แสดงเพื่อเปรียบเทียบเท่านั้น คู่มือนี้สำหรับผู้ใหญ่',
    adultTag: 'คู่มือนี้',
    ageHead: ['อายุ', 'แนะนำ', 'ทางเลือก'],
    ages: [
      ['0–3 ปี', 'pMDI + spacer มีวาล์ว ร่วมกับหน้ากาก', 'เครื่องพ่นละอองร่วมกับหน้ากาก'],
      ['4–5 ปี', 'pMDI + spacer มีวาล์ว ร่วมกับปากกระบอก', 'spacer ร่วมกับหน้ากาก หรือ (ถ้าไม่มี) เครื่องพ่นละอองร่วมกับปากกระบอกหรือหน้ากาก'],
      ['ผู้ใหญ่', 'pMDI + spacer ร่วมกับปากกระบอก', 'ใช้หน้ากากเฉพาะผู้ที่ปิดริมฝีปากรอบปากกระบอกให้สนิทไม่ได้ (เช่น ผู้สูงอายุ ผู้ที่อ่อนแอ)'],
    ],
    maskTitle: 'ถ้าใช้หน้ากาก',
    mask: [
      'ครอบให้แนบสนิทรอบปากและจมูก เพื่อไม่ให้ยารั่วและไม่ให้ยาเข้าตา',
      'เช็ดผิวรอบจมูกและปากทันทีหลังพ่นยา (โดยเฉพาะยาสเตียรอยด์)',
    ],
    singleTitle: 'วิธีหายใจครั้งเดียว (แนะนำ)',
    single: [
      'เปิดฝาและเขย่ายาทันทีก่อนกดทุกครั้ง',
      'เสียบยาเข้ากับ spacer',
      'หายใจออกเบาๆ โดยหันออกจาก spacer',
      'ปิดริมฝีปากรอบปากกระบอกให้สนิท แล้วกดยา 1 ครั้ง',
      'หายใจเข้าช้าๆ ลึกๆ แล้วกลั้นหายใจประมาณ 10 วินาที หรือนานเท่าที่ทำได้',
      'ถ้าต้องพ่นครั้งที่สอง เขย่าใหม่แล้วทำซ้ำ บ้วนปากหลังใช้ยาสเตียรอยด์',
    ],
    tidalTitle: 'วิธีหายใจปกติหลายครั้ง (หอบจนหายใจลึกไม่ได้)',
    tidal: [
      'เขย่า แล้วกดยา 1 ครั้งเข้า spacer เมื่อปากกระบอกหรือหน้ากากอยู่ในตำแหน่งแล้ว',
      'หายใจเข้าออกตามปกติ 5–6 ครั้งผ่าน spacer หลังกดยาแต่ละครั้ง',
      'สังเกตว่าวาล์วขยับทุกครั้งที่หายใจ',
    ],
    tipsTitle: 'เพื่อให้ได้ยาเต็มขนาด',
    tips: [
      'กดยาเข้า spacer ครั้งละ 1 ครั้งเท่านั้น: การกดหลายครั้งพร้อมกันทำให้ได้ยาลดลงมาก',
      'เริ่มหายใจเข้าเร็วที่สุดหลังกดยา',
      'spacer แต่ละยี่ห้อให้ยาได้ไม่เท่ากัน ระวังเมื่อเปลี่ยนยี่ห้อ',
    ],
    careTitle: 'การทำความสะอาดและดูแล',
    care: [
      'ล้างด้วยน้ำอุ่นผสมน้ำยาล้างจาน ไม่ต้องล้างน้ำเปล่าออก และปล่อยให้แห้งเอง (ไม่ใช้ผ้าเช็ด) เพื่อลดไฟฟ้าสถิตที่ทำให้ยาเกาะผนังพลาสติก',
      'ล้าง spacer พลาสติกใหม่ก่อนใช้ครั้งแรก spacer ที่เก็บไว้ใช้ฉุกเฉินควรล้างเป็นประจำ (เช่น เดือนละครั้ง)',
      'spacer ชนิดป้องกันไฟฟ้าสถิตหรือโลหะได้รับผลจากไฟฟ้าสถิตน้อยกว่า',
      'เปลี่ยนใหม่เมื่อแตกร้าวหรือวาล์วไม่ขยับ และตามที่ผู้ผลิตแนะนำ',
    ],
    nebTitle: 'เครื่องพ่นละออง',
    neb: [
      'ใช้เฉพาะเมื่อไม่สามารถใช้ spacer ได้อย่างมีประสิทธิภาพ',
      'ให้ยาสเตียรอยด์ผ่านปากกระบอกเพื่อไม่ให้ยาเข้าตา ถ้าใช้หน้ากากให้เช็ดหน้าหลังพ่นยา',
      'ยาน้ำที่มี ipratropium (Berodual): ควรใช้ปากกระบอกและไม่ให้ละอองยาเข้าตา (ระวังในต้อหินมุมปิด)',
      'ปฏิบัติตามหลักการควบคุมการติดเชื้อ: เครื่องพ่นละอองแพร่เชื้อไวรัสทางเดินหายใจได้ไกลถึง 1 เมตร',
    ],
    listTitle: 'ยาสูดในคู่มือนี้',
    groups: { spacer: 'ใช้ร่วมกับ spacer (pMDI)', noSpacer: 'ห้ามใช้ spacer', smi: 'ยาสูดชนิดละอองช้า (Respimat): ละอองออกช้า โดยทั่วไปไม่ต้องใช้ spacer', neb: 'เครื่องพ่นละออง: ปากกระบอกหรือหน้ากาก' },
    source: 'ที่มา: GINA 2026 full report, Box 5-2 (การใช้อุปกรณ์สูดยาอย่างมีประสิทธิภาพ), Box 11-4 (อุปกรณ์สำหรับเด็กอายุ 5 ปีหรือน้อยกว่า เพื่อเปรียบเทียบ) และหมวด 11 (เทคนิค pMDI ร่วมกับ spacer); GINA 2026 Summary Guide, หมายเหตุท้าย Table 6 ข้อควรระวังเรื่องตาของ ipratropium: เอกสารกำกับยา',
  },
};
const BREATH_ACTUATED = new Set([261, 504]);
const spacerGroupOf = (d) => d.type === 'Nebulizer' ? 'neb' : d.type === 'SMI' ? 'smi' : d.type === 'MDI' && !BREATH_ACTUATED.has(d.id) ? 'spacer' : 'noSpacer';
const SpacerIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 10h4v4H2z" /><path d="M6 9l3-2h9a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H9l-3-2z" /><line x1="12" y1="7" x2="12" y2="17" /></svg>);

const SpacerGuideModal = ({ lang, onClose }) => {
  const c = SPACER_TEXT[lang];
  const groups = { spacer: [], noSpacer: [], smi: [], neb: [] };
  [...deviceData].sort((a, b) => a.marketName.localeCompare(b.marketName)).forEach(d => groups[spacerGroupOf(d)].push(d));
  const tone = { spacer: 'border-teal-200 bg-teal-50 text-teal-800', noSpacer: 'border-red-200 bg-red-50 text-red-800', smi: 'border-sky-200 bg-sky-50 text-sky-800', neb: 'border-violet-200 bg-violet-50 text-violet-800' };
  const Card = ({ title, items, ordered, toneCls = 'text-teal-800' }) => (
    <section className="bg-white rounded-2xl border border-slate-200 p-4">
      <h3 className={`font-extrabold ${toneCls} mb-2`}>{title}</h3>
      {ordered
        ? <ol className="list-decimal pl-5 text-sm text-slate-700 space-y-1">{items.map((x, i) => <li key={i}>{x}</li>)}</ol>
        : <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">{items.map((x, i) => <li key={i}>{x}</li>)}</ul>}
    </section>
  );
  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 print:hidden">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col max-h-[95vh] animate-in fade-in zoom-in-95 duration-200" data-spacer-guide>
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-teal-50/80 rounded-t-2xl shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-teal-100 text-teal-600 rounded-xl"><SpacerIcon className="w-5 h-5" /></div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 leading-tight">{c.title}</h2>
              <p className="text-xs text-slate-500">{c.sub}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 shrink-0"><GuidelineFiguresButton set="spacer" lang={lang} /><button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-700 hover:bg-white rounded-full transition-colors" aria-label="Close"><X className="w-6 h-6" /></button></div>
        </div>
        <div className="p-4 sm:p-6 flex-grow overflow-y-auto bg-slate-50 flex flex-col gap-4">
          <Card title={c.whoTitle} items={c.who} />
          <section>
            <h3 className="font-extrabold text-slate-800 mb-2">{c.ageTitle}</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
              <table className="w-full text-sm">
                <thead><tr className="bg-slate-100 text-slate-600 text-xs uppercase tracking-wide">{c.ageHead.map((h, i) => <th key={i} className="p-2.5 text-left">{h}</th>)}</tr></thead>
                <tbody className="divide-y divide-slate-100">
                  {c.ages.map((r, i) => { const adult = i === c.ages.length - 1; return (
                    <tr key={i} data-adult-row={adult ? '' : undefined} className={adult ? 'bg-teal-50' : 'opacity-60'}>
                      {r.map((cell, j) => <td key={j} className={`p-2.5 align-top ${j === 0 ? 'font-bold whitespace-nowrap ' + (adult ? 'text-teal-800 border-l-4 border-teal-500' : 'text-slate-500') : j === 1 ? (adult ? 'text-slate-800 font-bold' : 'text-slate-600') : 'text-slate-600'}`}>
                        {cell}{adult && j === 0 && <span className="ml-1.5 align-middle text-[10px] font-bold px-1.5 py-0.5 rounded bg-teal-600 text-white">{c.adultTag}</span>}
                      </td>)}
                    </tr>); })}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-500 mt-1.5">{c.ageNote}</p>
          </section>
          <Card title={c.maskTitle} items={c.mask} toneCls="text-amber-700" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card title={c.singleTitle} items={c.single} ordered />
            <Card title={c.tidalTitle} items={c.tidal} ordered toneCls="text-sky-800" />
          </div>
          <Card title={c.tipsTitle} items={c.tips} toneCls="text-indigo-700" />
          <Card title={c.careTitle} items={c.care} toneCls="text-emerald-700" />
          <Card title={c.nebTitle} items={c.neb} toneCls="text-violet-700" />
          <section>
            <h3 className="font-extrabold text-slate-800 mb-2">{c.listTitle}</h3>
            <div className="flex flex-col gap-3">
              {['spacer', 'noSpacer', 'smi', 'neb'].filter(g => groups[g].length).map(g => (
                <div key={g} data-spacer-group={g} className={`rounded-xl border p-3 ${tone[g]}`}>
                  <div className="text-xs font-extrabold mb-2">{c.groups[g]} ({groups[g].length})</div>
                  <div className="flex flex-wrap gap-1.5">{groups[g].map(d => { const sf = g === 'spacer' && spacerFit(d); return <span key={d.id} title={sf && sf.kind === 'named' ? 'Spacer: ' + sf.names.join(' / ') + ' (' + sf.src + ')' : undefined} className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-semibold text-slate-700">{d.marketName}{sf && sf.kind === 'named' && <span className="ml-1 font-bold text-teal-700" data-spacer-named>· {sf.names.join(' / ')}</span>}</span>; })}</div>
                </div>
              ))}
            </div>
          </section>
          <p className="text-[11px] text-slate-500">{c.source}</p>
        </div>
      </div>
    </div>
  );
};

// Step-down guide. Asthma: GINA 2026 Summary Guide p.27 and full report Box 4-13 (adults and
// adolescents). COPD: GOLD 2026 report, follow-up pharmacological treatment (Figure 3.9, 3.12).
const STEPDOWN_TEXT = {
  en: {
    aTitle: 'Asthma step-down (GINA 2026)',
    aWhenTitle: 'When and how',
    aWhen: [
      'Consider stepping down once symptoms have been well controlled and lung function stable for 2–3 months (GINA full report: at least 3 months).',
      'Choose a suitable time: no respiratory infection, not travelling, not pregnant.',
      'Risk factors for exacerbation (e.g. an exacerbation or emergency visit in the past year, low lung function or persistent airflow limitation): step down only with close supervision.',
      'Treat each step as a therapeutic trial: record symptom control and lung function, give a written asthma action plan and enough medication to go back to the previous dose, monitor symptoms and/or PEF, and book a follow-up visit.',
      'Reduce the maintenance ICS dose by 25–50%, using a lower strength of the same ICS or fewer inhalations. Wait 2–3 months to confirm asthma is stable before the next step.',
      'Do not stop ICS completely in adults or adolescents: it significantly increases the risk of exacerbations.',
    ],
    aOptTitle: 'Options by current treatment (GINA Box 4-13, adults and adolescents)',
    aHead: ['Step', 'Current treatment', 'Step-down options'],
    aRows: [
      ['5', 'High-dose ICS-LABA plus oral corticosteroids (OCS)', 'Optimise inhaled therapy to reduce the OCS dose. If type 2-high severe asthma, add a biologic if eligible and reduce OCS. For low-dose OCS, use alternate-day dosing.'],
      ['5', 'Biologic plus high-dose ICS-LABA', 'Stop other add-on medicines first, especially OCS, then consider reducing the ICS-LABA dose.'],
      ['4', 'Medium- to high-dose ICS-LABA maintenance', 'Continue ICS-LABA and reduce the ICS component by 50%, or switch to MART with ICS-formoterol at a lower maintenance dose. Caution: stopping the LABA may cause deterioration.'],
      ['4', 'Medium-dose ICS-formoterol MART', 'Reduce maintenance ICS-formoterol to low dose and continue the as-needed low-dose ICS-formoterol reliever.'],
      ['4', 'High-dose ICS plus a second controller', 'Reduce the ICS dose by 50% and continue the second controller.'],
      ['3', 'Low-dose ICS-LABA maintenance', 'Reduce ICS-LABA to once daily. Caution: stopping the LABA may cause deterioration.'],
      ['3', 'Low-dose ICS-formoterol MART', 'Reduce maintenance to once daily and continue the as-needed reliever, or consider stepping down to as-needed-only low-dose ICS-formoterol.'],
      ['3', 'Medium- or high-dose ICS', 'Reduce the ICS dose by 50%. Adding a LABA may allow the ICS dose to be stepped down.'],
      ['2', 'Low-dose maintenance ICS', 'Once-daily dosing (budesonide, ciclesonide, mometasone, fluticasone furoate); or switch to as-needed-only low-dose ICS-formoterol; or take ICS whenever SABA is taken. Caution: do not stop ICS completely (SABA-only treatment raises exacerbation risk).'],
    ],
    aNote: 'MART = low-dose budesonide-formoterol or beclometasone-formoterol.',
    cTitle: 'COPD: ICS de-escalation (GOLD 2026)',
    cTripleTitle: 'On LABA+LAMA+ICS',
    cTriple: [
      'Do not withdraw the ICS unless: it was started inappropriately, there has been no response to ICS, there are significant side effects, or there is severe or recurrent pneumonia.',
      'Weigh the risks and benefits of stopping ICS. With blood eosinophils ≥300 cells/µL, de-escalation is more likely to be followed by exacerbations.',
      'Any treatment change, especially de-escalation, should be under close medical supervision.',
    ],
    cDualTitle: 'On LABA+ICS (no features of asthma)',
    cDual: [
      'Well controlled for symptoms and exacerbations: continuing LABA+ICS is an option.',
      'Further exacerbations: escalate to LABA+LAMA+ICS if blood eosinophils ≥100 cells/µL, or switch to LABA+LAMA if <100 cells/µL.',
      'Major symptoms: change to LABA+LAMA or LABA+LAMA+ICS, depending on the previous response to ICS.',
    ],
    cNote: 'GOLD notes that de-escalation trials are limited and only include ICS, so there is no evidence-based scheme for stopping long-acting bronchodilators.',
  },
  th: {
    aTitle: 'การลดยาโรคหืด (GINA 2026)',
    aWhenTitle: 'เมื่อไรและอย่างไร',
    aWhen: [
      'พิจารณาลดยาเมื่อควบคุมอาการได้ดีและสมรรถภาพปอดคงที่ 2–3 เดือน (GINA ฉบับเต็ม: อย่างน้อย 3 เดือน)',
      'เลือกช่วงเวลาที่เหมาะสม: ไม่มีการติดเชื้อทางเดินหายใจ ไม่เดินทาง ไม่ตั้งครรภ์',
      'ผู้ที่มีปัจจัยเสี่ยงต่อการกำเริบ (เช่น เคยกำเริบหรือไปห้องฉุกเฉินในปีที่ผ่านมา สมรรถภาพปอดต่ำ หรือทางเดินหายใจอุดกั้นถาวร): ลดยาภายใต้การติดตามอย่างใกล้ชิดเท่านั้น',
      'ถือว่าการลดยาแต่ละขั้นเป็นการทดลองรักษา: บันทึกการควบคุมอาการและสมรรถภาพปอด ให้แผนปฏิบัติการโรคหืดเป็นลายลักษณ์อักษรและยาเพียงพอสำหรับกลับไปใช้ขนาดเดิม ติดตามอาการและ/หรือ PEF และนัดติดตาม',
      'ลดขนาด ICS ที่ใช้ควบคุมลง 25–50% โดยเปลี่ยนเป็นความแรงที่ต่ำกว่าของ ICS ตัวเดิมหรือลดจำนวนครั้งที่สูด รอ 2–3 เดือนเพื่อยืนยันว่าอาการคงที่ก่อนลดขั้นต่อไป',
      'ห้ามหยุด ICS ทั้งหมดในผู้ใหญ่และวัยรุ่น: เพิ่มความเสี่ยงต่อการกำเริบอย่างมีนัยสำคัญ',
    ],
    aOptTitle: 'ทางเลือกตามการรักษาปัจจุบัน (GINA Box 4-13 ผู้ใหญ่และวัยรุ่น)',
    aHead: ['ขั้น', 'การรักษาปัจจุบัน', 'ทางเลือกในการลดยา'],
    aRows: [
      ['5', 'ICS-LABA ขนาดสูง ร่วมกับสเตียรอยด์ชนิดรับประทาน (OCS)', 'ปรับยาสูดให้เหมาะสมเพื่อลดขนาด OCS ถ้าเป็นหืดรุนแรงชนิด type 2-high ให้เพิ่มยาชีววัตถุถ้าเข้าเกณฑ์และลด OCS ถ้าใช้ OCS ขนาดต่ำ ให้ใช้แบบวันเว้นวัน'],
      ['5', 'ยาชีววัตถุ ร่วมกับ ICS-LABA ขนาดสูง', 'หยุดยาเสริมอื่นก่อน โดยเฉพาะ OCS แล้วจึงพิจารณาลดขนาด ICS-LABA'],
      ['4', 'ICS-LABA ขนาดปานกลางถึงสูงเป็นยาควบคุม', 'ใช้ ICS-LABA ต่อและลดส่วนของ ICS ลง 50% หรือเปลี่ยนเป็น MART ด้วย ICS-formoterol โดยใช้ขนาดควบคุมที่ต่ำลง ข้อควรระวัง: การหยุด LABA อาจทำให้อาการแย่ลง'],
      ['4', 'MART ด้วย ICS-formoterol ขนาดปานกลาง', 'ลด ICS-formoterol ที่ใช้ควบคุมเป็นขนาดต่ำ และใช้ ICS-formoterol ขนาดต่ำเมื่อมีอาการต่อไป'],
      ['4', 'ICS ขนาดสูง ร่วมกับยาควบคุมตัวที่สอง', 'ลดขนาด ICS ลง 50% และใช้ยาควบคุมตัวที่สองต่อ'],
      ['3', 'ICS-LABA ขนาดต่ำเป็นยาควบคุม', 'ลด ICS-LABA เป็นวันละครั้ง ข้อควรระวัง: การหยุด LABA อาจทำให้อาการแย่ลง'],
      ['3', 'MART ด้วย ICS-formoterol ขนาดต่ำ', 'ลดยาควบคุมเป็นวันละครั้งและใช้ยาบรรเทาอาการเมื่อมีอาการต่อไป หรือพิจารณาลดเป็น ICS-formoterol ขนาดต่ำเมื่อมีอาการเท่านั้น'],
      ['3', 'ICS ขนาดปานกลางหรือสูง', 'ลดขนาด ICS ลง 50% การเพิ่ม LABA อาจช่วยให้ลดขนาด ICS ได้'],
      ['2', 'ICS ขนาดต่ำเป็นยาควบคุม', 'ใช้วันละครั้ง (budesonide, ciclesonide, mometasone, fluticasone furoate) หรือเปลี่ยนเป็น ICS-formoterol ขนาดต่ำเมื่อมีอาการเท่านั้น หรือใช้ ICS ทุกครั้งที่ใช้ SABA ข้อควรระวัง: ห้ามหยุด ICS ทั้งหมด (การใช้ SABA อย่างเดียวเพิ่มความเสี่ยงต่อการกำเริบ)'],
    ],
    aNote: 'MART = budesonide-formoterol หรือ beclometasone-formoterol ขนาดต่ำ',
    cTitle: 'COPD: การลด/หยุด ICS (GOLD 2026)',
    cTripleTitle: 'ผู้ที่ใช้ LABA+LAMA+ICS',
    cTriple: [
      'ไม่ควรหยุด ICS เว้นแต่: เริ่มใช้ ICS โดยไม่มีข้อบ่งชี้ ไม่ตอบสนองต่อ ICS มีผลข้างเคียงที่สำคัญ หรือมีปอดอักเสบรุนแรงหรือเป็นซ้ำ',
      'ชั่งน้ำหนักความเสี่ยงและประโยชน์ของการหยุด ICS หาก eosinophils ในเลือด ≥300 cells/µL การหยุด ICS มีแนวโน้มทำให้กำเริบมากขึ้น',
      'การปรับการรักษาทุกครั้ง โดยเฉพาะการลดยา ควรอยู่ภายใต้การดูแลของแพทย์อย่างใกล้ชิด',
    ],
    cDualTitle: 'ผู้ที่ใช้ LABA+ICS (ไม่มีลักษณะของโรคหืด)',
    cDual: [
      'ควบคุมอาการและการกำเริบได้ดี: ใช้ LABA+ICS ต่อได้',
      'ยังกำเริบอีก: เพิ่มเป็น LABA+LAMA+ICS ถ้า eosinophils ในเลือด ≥100 cells/µL หรือเปลี่ยนเป็น LABA+LAMA ถ้า <100 cells/µL',
      'อาการมาก: เปลี่ยนเป็น LABA+LAMA หรือ LABA+LAMA+ICS ขึ้นกับการตอบสนองต่อ ICS ที่ผ่านมา',
    ],
    cNote: 'GOLD ระบุว่าการศึกษาเรื่องการลดยามีจำกัดและศึกษาเฉพาะ ICS จึงไม่มีแนวทางที่อิงหลักฐานสำหรับการหยุดยาขยายหลอดลมชนิดออกฤทธิ์ยาว',
  },
};
const STEP_TONE = { '5': 'bg-red-100 text-red-800', '4': 'bg-orange-100 text-orange-800', '3': 'bg-amber-100 text-amber-800', '2': 'bg-emerald-100 text-emerald-800' };

// Step-down reference (GINA Box 4-13; GOLD 2026 ICS de-escalation), shown inside the Follow-up Guide.
// `current` = Box 4-13 row indexes matching the patient's current treatment (highlighted).
const AsthmaStepDownRef = ({ lang, current = [] }) => {
  const c = STEPDOWN_TEXT[lang];
  return (
    <div className="flex flex-col gap-4" data-stepdown>
      <div>
        <h4 className="font-bold text-slate-800 text-sm mb-1.5">{c.aWhenTitle}</h4>
        <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">{c.aWhen.map((x, i) => <li key={i}>{x}</li>)}</ul>
      </div>
      <div>
        <h4 className="font-bold text-slate-800 text-sm mb-1.5">{c.aOptTitle}</h4>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm" data-stepdown-table>
            <thead><tr className="bg-slate-100 text-slate-600 text-xs uppercase tracking-wide">{c.aHead.map((h, i) => <th key={i} className="p-2.5 text-left">{h}</th>)}</tr></thead>
            <tbody className="divide-y divide-slate-100">
              {c.aRows.map((r, i) => (
                <tr key={i} data-current={current.includes(i) ? 'true' : undefined} className={current.includes(i) ? 'bg-violet-50' : ''}>
                  <td className="p-2.5 align-top"><span className={`inline-block px-2 py-0.5 rounded-md text-xs font-extrabold ${STEP_TONE[r[0]]}`}>{r[0]}</span></td>
                  <td className="p-2.5 align-top font-semibold text-slate-800 min-w-[9rem]">{r[1]}</td>
                  <td className="p-2.5 align-top text-slate-700">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mt-2">{c.aNote}</p>
      </div>
    </div>
  );
};
const CopdIcsRef = ({ lang }) => {
  const c = STEPDOWN_TEXT[lang];
  const list = (items) => <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">{items.map((x, i) => <li key={i}>{x}</li>)}</ul>;
  return (
    <div className="flex flex-col gap-4" data-copd-ics-ref>
      <div><h4 className="font-bold text-slate-800 text-sm mb-1.5">{c.cTripleTitle}</h4>{list(c.cTriple)}</div>
      <div><h4 className="font-bold text-slate-800 text-sm mb-1.5">{c.cDualTitle}</h4>{list(c.cDual)}</div>
      <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100 text-xs text-emerald-800 font-medium">{c.cNote}</div>
    </div>
  );
};

// --- Follow-up guide: adjust treatment at review ---
// Asthma: GINA 2026 Summary Guide Table 2 (symptom control), Figure 2 (investigate before stepping
// up), "assess, adjust, review", stepping down + full report Box 4-13. COPD: GOLD 2026 Figure 3.9.
const FOLLOW_TEXT = {
  en: {
    btn: 'Follow-up',
    title: 'Follow-up Guide',
    sub: 'At review: step up, stay or step down (GINA 2026, GOLD 2026)',
    tabAsthma: 'Asthma (GINA)', tabCopd: 'COPD (GOLD)',
    curTitle: "Current treatment (selected on the main page or added here)",
    curHint: "No inhalers yet: search below to add the patient's inhalers, or press Select on drug cards on the main page.",
    maintLabel: 'Maintenance', perLabel: 'inhalation(s) ×', freqLabel: 'times a day', relLabel: 'Used as reliever',
    detected: (s, tr) => `Detected: GINA Step ${s}, ${tr === 1 ? 'Track 1 (MART)' : 'Track 2 (SABA reliever)'}`,
    overrideNote: 'The track and step below are set from this; you can still change them.',
    rTrack1: 'ICS-formoterol is used as the reliever → Track 1.',
    rTrack2Saba: 'SABA is the reliever → Track 2.',
    rTrack2None: 'No ICS-formoterol reliever → Track 2.',
    rLevel: (m, mcg, g) => `${m}: ${mcg} mcg/day maintenance (metered) = ${g}.`,
    rAirOnly: 'ICS-formoterol as needed only, no maintenance → Steps 1–2.',
    rMart: 'MART maintenance dose sets the step: low → Step 3, medium → Step 4, high → Step 5.',
    rLaba: 'Maintenance ICS-LABA: low → Step 3, medium → Step 4, high → Step 5.',
    rIcsOnly: 'Maintenance ICS alone: low → Step 2, medium or high → Step 3.',
    rIcsWithSaba: 'ICS taken whenever SABA is taken (no daily ICS) → Step 1.',
    sdHighMart: 'High-dose MART: reduce the maintenance ICS-formoterol by 25–50% (e.g. to medium dose) and keep the as-needed ICS-formoterol reliever.',
    rLama: 'Add-on LAMA (triple inhaler or tiotropium) → Step 5.',
    wSabaOnly: 'SABA without any ICS: GINA does not recommend SABA-only treatment. Start ICS-containing treatment.',
    wNone: 'No ICS-containing treatment entered.',
    wDup: 'More than one ICS-containing maintenance inhaler: check for duplication.',
    wMix: 'GINA: do not use ICS-formoterol as reliever with a maintenance ICS-LABA that contains a different LABA.',
    wNeb: 'Nebulised ICS is not graded for adults (hospital use).',
    wBothRel: 'Both ICS-formoterol and SABA are ticked as relievers: on MART (Track 1), ICS-formoterol replaces the SABA reliever.',
    searchPh: 'Search inhalers to add (brand or drug)…',
    remove: 'Remove',
    maxRows: 'Up to 5 inhalers.',
    notInd: { Asthma: 'Not indicated for asthma', COPD: 'Not indicated for COPD' },
    notIndNote: (names, dis) => `Not indicated for ${dis === 'Asthma' ? 'asthma' : 'COPD'}: ${names}. Left out of the ${dis === 'Asthma' ? 'GINA step' : 'COPD class'} detection.`,
    labaNoIcs: 'GINA: a LABA must not be used without an ICS in asthma (risk of severe exacerbations).',
    copdDetected: (lbl) => `Detected from the selected inhalers: ${lbl}`,
    goldTitle: 'Which GOLD group this regimen is for',
    abeTitle: 'Assess the GOLD group (ABE)',
    symLabel: 'Symptoms', symOpts: { low: 'mMRC 0–1 or CAT < 10', high: 'mMRC ≥ 2 or CAT ≥ 10' },
    gexacLabel: 'Exacerbations in the past year', gexacOpts: { '0': 'None', '1': '≥ 1 moderate or severe' },
    groupIs: (g) => `GOLD Group ${g}`,
    groupPending: 'Choose symptoms and exacerbations to set the group.',
    vLabel: { ok: (g) => `Appropriate for Group ${g}`, below: (g) => `Below GOLD for Group ${g}`, above: (g) => `More than GOLD for Group ${g}`, no: () => 'Not recommended in COPD (GOLD)', reliever: () => 'Reliever: as needed' },
    verdict: {
      A: { short: 'A short-acting bronchodilator as needed is an option for Group A; a long-acting bronchodilator is preferred unless breathlessness is very occasional.', mono: 'A long-acting bronchodilator (LABA or LAMA) is the GOLD treatment for Group A.', dual: 'More than the GOLD initial treatment for Group A (one bronchodilator). Reasonable if it was escalated for persistent breathlessness.', triple: 'ICS is not indicated in Group A (no exacerbations). Consider stepping down to bronchodilators.', laIcs: 'LABA + ICS is not encouraged in COPD; Group A needs one long-acting bronchodilator.', icsOnly: 'ICS alone is not recommended in COPD; use a bronchodilator.' },
      B: { short: 'GOLD recommends LABA + LAMA for Group B; a short-acting bronchodilator alone is not enough.', mono: 'GOLD recommends LABA + LAMA for Group B: escalate from one long-acting bronchodilator.', dual: 'LABA + LAMA is the GOLD treatment for Group B.', triple: 'ICS is for exacerbations (Group E). In Group B, review why the ICS was started and whether it can be withdrawn.', laIcs: 'LABA + ICS is not encouraged in COPD; GOLD recommends LABA + LAMA for Group B.', icsOnly: 'ICS alone is not recommended in COPD; GOLD recommends LABA + LAMA for Group B.' },
      E: { short: 'GOLD recommends LABA + LAMA for Group E; a short-acting bronchodilator alone is not enough.', mono: 'GOLD recommends LABA + LAMA for Group E: escalate from one long-acting bronchodilator.', dual: 'LABA + LAMA is the GOLD treatment for Group E. Consider adding ICS if blood eosinophils are ≥ 300 cells/µL.', triple: 'LABA + LAMA + ICS fits Group E (blood eosinophils ≥ 300 cells/µL, or ≥ 100 with further exacerbations).', tripleLow: 'With blood eosinophils < 100 cells/µL, ICS is unlikely to help; GOLD suggests LABA + LAMA (consider withdrawing the ICS under supervision).', laIcs: 'LABA + ICS is not encouraged in COPD: escalate to LABA + LAMA + ICS if eosinophils ≥ 100 cells/µL, or switch to LABA + LAMA if < 100.', icsOnly: 'ICS alone is not recommended in COPD; GOLD recommends LABA + LAMA for Group E.' },
    },
    gold: {
      short: 'Group A: a short-acting bronchodilator as needed is a GOLD option for Group A (a long-acting bronchodilator is preferred unless breathlessness is very occasional).',
      mono: 'Group A: a long-acting bronchodilator (LABA or LAMA) is the GOLD initial treatment for Group A.',
      dual: 'Group B or E: LABA + LAMA is the GOLD initial treatment for both. It is Group E if there was at least 1 moderate or severe exacerbation in the past year.',
      dualE: 'Group E: LABA + LAMA is the GOLD initial treatment for Group E (exacerbations reported).',
      triple: 'Group E: LABA + LAMA + ICS is the GOLD option for Group E with blood eosinophils ≥ 300 cells/µL.',
      laIcs: 'No GOLD group: LABA + ICS is not encouraged in COPD. If an ICS is indicated, GOLD prefers LABA + LAMA + ICS.',
      icsOnly: 'No GOLD group: long-term ICS alone is not recommended in COPD.',
    },
    goldNote: "GOLD groups are set by symptoms (mMRC/CAT) and exacerbations in the past year; the drugs only show which group's initial treatment they match. At follow-up, GOLD adjusts treatment by the main problem, whatever the group.",
    track: 'Current track', track1: 'Track 1 (MART)', track2: 'Track 2 (SABA reliever)',
    step: 'Current GINA step', stepLabel: (s) => `Step ${s}`,
    ctlTitle: 'In the past 4 weeks, has the patient had:',
    ctlQ: ['Daytime symptoms more than twice a week', 'Any night waking due to asthma', 'SABA reliever needed more than twice a week (not counting before exercise)', 'Any activity limitation due to asthma'],
    exac: 'An exacerbation since the last review',
    stable: 'Well controlled for at least 2–3 months',
    level: { well: 'Well controlled', partly: 'Partly controlled', uncontrolled: 'Uncontrolled' },
    levelNote: (n) => `${n} of 4 control questions`,
    withExac: '+ exacerbation',
    upTitle: 'Not well controlled: check first, then step up',
    checksTitle: 'Before stepping up (GINA Figure 2)',
    checks: ['Watch the patient use the inhaler and correct errors with a device-specific checklist.', 'Discuss adherence and barriers to use.', 'Confirm the diagnosis of asthma.', 'Remove risk factors: smoking, beta-blockers, NSAIDs, allergen exposure.', 'Manage comorbidities: rhinitis, obesity, GERD, depression/anxiety.'],
    toStep: (s) => `Then step up to GINA Step ${s}`,
    atStep5: 'Already at Step 5: continue Step 5 care',
    referNote: 'If asthma is still uncontrolled after 3–6 months on Step 4, refer for expert advice (earlier if symptoms are severe or the diagnosis is in doubt).',
    track1Tip: 'For adults and adolescents, GINA suggests switching to Track 1 (MART with ICS-formoterol) if available.',
    shortTerm: 'A short-term step-up to the next level can be considered (shared decision). On MART, patients already adjust day to day with extra as-needed inhalations.',
    exacReview: 'After an exacerbation, review within 1 week.',
    reviewAfterChange: 'After any change, reassess symptoms, exacerbations, side effects and lung function, and review 1–3 months later.',
    holdTitle: 'Well controlled: continue the current treatment',
    hold: ['Keep the current treatment and inhaler.', 'Consider stepping down once good control has lasted 2–3 months.', 'Review 1–3 months after starting treatment, then every 3–12 months.'],
    downTitle: 'Well controlled for 2–3 months: consider stepping down',
    downOptions: 'Options for the current treatment (GINA Box 4-13)',
    sdRef: 'Step-down guide: when, how and all options (GINA Box 4-13)',
    icsRef: 'Stopping inhaled steroids in COPD (GOLD 2026)',
    lowest: { 1: 'Already at the lowest step: continue as-needed low-dose ICS-formoterol.', 2: 'Already at the lowest step: keep taking ICS whenever SABA is taken. Do not stop ICS completely.' },
    devicesTitle: 'Inhalers for this step',
    relieversTitle: 'Reliever',
    cur: 'Current maintenance treatment',
    curOpts: { short: 'Short-acting only', mono: 'LABA or LAMA', dual: 'LABA + LAMA', laIcs: 'LABA + ICS', triple: 'LABA + LAMA + ICS', icsOnly: 'ICS alone' },
    prob: 'Main problem now',
    probOpts: { none: 'Responding well', dyspnoea: 'Dyspnoea / exercise limitation', exac: 'Exacerbations', both: 'Both' },
    eos: 'Blood eosinophils',
    eosOpts: { low: '< 100 cells/µL', mid: '100–299 cells/µL', high: '≥ 300 cells/µL' },
    exSmoker: 'Ex-smoker (not currently smoking)',
    quitSmoking: 'Stop smoking: advise the patient to quit at every visit and offer support (counselling plus nicotine replacement or other cessation medicine). Quitting is the most effective way to slow COPD (GOLD 2026).',
    cb: "Chronic bronchitis (productive cough for 3 months in the past year)",
    sevExac: "≥ 2 moderate or ≥ 1 severe exacerbation in the past year",
    fev50: "FEV₁ < 50% predicted",
    icsIssue: 'ICS problem: pneumonia, significant side effects, no response, or started without an indication',
    copdChecksTitle: 'First (GOLD 2026)',
    copdChecks: ['Check adherence, inhaler technique and interfering comorbidities.', 'Consider pulmonary rehabilitation and other non-drug treatment.'],
    copdRecTitle: 'Suggested change (GOLD Figure 3.9)',
    maintain: 'Good response: maintain the current treatment.',
    laIcsOk: 'On LABA + ICS without features of asthma and well controlled: continuing LABA + ICS is an option.',
    noMaint: 'Not on long-acting maintenance: start the GOLD initial treatment for the patient\'s group.',
    initA: 'Group A: a long-acting bronchodilator (LABA or LAMA) is preferred; a short-acting one alone is enough only if breathlessness is very occasional.',
    initB: 'Group B: start LABA + LAMA.',
    initE: 'Group E: start LABA + LAMA; consider LABA + LAMA + ICS if blood eosinophils are ≥ 300 cells/µL.',
    initPending: 'Assess the GOLD group above to choose the first maintenance treatment.',
    icsOnlyRec: 'ICS alone is not recommended in COPD: change to LABA + LAMA, or to LABA + LAMA + ICS if the patient has exacerbations and blood eosinophils ≥ 300 cells/µL.',
    toDual: 'Escalate to LABA + LAMA.',
    monoToTriple: "Blood eosinophils ≥ 300 cells/µL: escalate to LABA + LAMA + ICS.",
    toDualExac: "Blood eosinophils < 300 cells/µL: escalate to LABA + LAMA.",
    dyspOpts: 'Already on two long-acting bronchodilators: consider switching inhaler device or molecules, start or step up pulmonary rehabilitation, consider ensifentrine if available, and look for other causes of dyspnoea.',
    laIcsDysp: 'Change to LABA + LAMA, or to LABA + LAMA + ICS if the patient responded to ICS before.',
    bothNote: 'Both dyspnoea and exacerbations: follow the exacerbation pathway.',
    addIcs: 'Escalate to LABA + LAMA + ICS (benefit seen at eosinophils ≥ 100 cells/µL, greater at higher counts).',
    lowEos: 'Eosinophils < 100 cells/µL: ICS is unlikely to help. Consider:',
    azithro: "Azithromycin, preferentially in former smokers; weigh the risk of resistant organisms.",
    azithroSmoker: "The patient still smokes, so azithromycin is less preferred.",
    roflu: "Roflumilast (FEV₁ < 50% predicted and chronic bronchitis).",
    laIcsToTriple: 'Escalate to LABA + LAMA + ICS (eosinophils ≥ 100 cells/µL).',
    laIcsToDual: 'Switch to LABA + LAMA (eosinophils < 100 cells/µL).',
    biologic: "Biologic therapy (≥ 2 moderate or ≥ 1 severe exacerbation and eosinophils ≥ 300 cells/µL): dupilumab (if chronic bronchitis) or mepolizumab.",
    singleInhaler: "Single-inhaler therapy may be more convenient and effective than multiple inhalers (GOLD).",
    addOnTitle: "Add-on options:",
    biologicNeed: "Eosinophils ≥ 300 cells/µL: biologic therapy (dupilumab if chronic bronchitis, or mepolizumab) is an option if there were ≥ 2 moderate or ≥ 1 severe exacerbations in the past year.",
    icsWithdraw: 'Because of the ICS problem, the ICS may be withdrawn; weigh risks and benefits under close supervision.',
    icsWithdrawEos: ' With eosinophils ≥ 300 cells/µL, de-escalation is more likely to be followed by exacerbations.',
    listTitles: { mono: 'LABA or LAMA inhalers', dual: 'LABA + LAMA inhalers', triple: 'LABA + LAMA + ICS inhalers' },
    source: 'Sources: GINA 2026 Summary Guide (Table 2, Figure 2, adjusting and stepping down treatment) and full report Box 4-13; GOLD 2026 report, follow-up pharmacological treatment (Figures 3.9 and 3.12).',
  },
  th: {
    btn: 'การติดตามผล',
    title: 'แนวทางการติดตามผล',
    sub: 'เมื่อนัดติดตาม: เพิ่มยา คงยา หรือลดยา (GINA 2026, GOLD 2026)',
    tabAsthma: 'โรคหืด (GINA)', tabCopd: 'COPD (GOLD)',
    curTitle: "การรักษาปัจจุบัน (เลือกจากหน้าหลักหรือเพิ่มที่นี่)",
    curHint: "ยังไม่มียาสูด: ค้นหาด้านล่างเพื่อเพิ่มยาสูดของผู้ป่วย หรือกด Select บนการ์ดยาในหน้าหลัก",
    maintLabel: 'ยาควบคุม', perLabel: 'ครั้ง ×', freqLabel: 'ครั้งต่อวัน', relLabel: 'ใช้เป็นยาบรรเทาอาการ',
    detected: (s, tr) => `ระบุได้: GINA ขั้นที่ ${s} ${tr === 1 ? 'แนวทางที่ 1 (MART)' : 'แนวทางที่ 2 (SABA เป็นยาบรรเทา)'}`,
    overrideNote: 'แนวทางและขั้นด้านล่างตั้งตามนี้ และยังเปลี่ยนเองได้',
    rTrack1: 'ใช้ ICS-formoterol เป็นยาบรรเทาอาการ → แนวทางที่ 1',
    rTrack2Saba: 'ใช้ SABA เป็นยาบรรเทาอาการ → แนวทางที่ 2',
    rTrack2None: 'ไม่ได้ใช้ ICS-formoterol เป็นยาบรรเทา → แนวทางที่ 2',
    rLevel: (m, mcg, g) => `${m}: ยาควบคุม ${mcg} mcg/วัน (ขนาดที่ตวง) = ${g}`,
    rAirOnly: 'ใช้ ICS-formoterol เมื่อมีอาการเท่านั้น ไม่มียาควบคุม → ขั้นที่ 1–2',
    rMart: 'ขนาดยาควบคุมใน MART กำหนดขั้น: ต่ำ → ขั้นที่ 3 ปานกลาง → ขั้นที่ 4 สูง → ขั้นที่ 5',
    rLaba: 'ยาควบคุม ICS-LABA: ต่ำ → ขั้นที่ 3 ปานกลาง → ขั้นที่ 4 สูง → ขั้นที่ 5',
    rIcsOnly: 'ยาควบคุม ICS อย่างเดียว: ต่ำ → ขั้นที่ 2 ปานกลางหรือสูง → ขั้นที่ 3',
    rIcsWithSaba: 'ใช้ ICS ทุกครั้งที่ใช้ SABA (ไม่มี ICS ประจำวัน) → ขั้นที่ 1',
    sdHighMart: 'MART ขนาดสูง: ลดขนาด ICS-formoterol ที่ใช้ควบคุมลง 25–50% (เช่น เป็นขนาดปานกลาง) และใช้ ICS-formoterol เมื่อมีอาการต่อไป',
    rLama: 'เพิ่ม LAMA (ยาสูดสามตัวในหลอดเดียว หรือ tiotropium) → ขั้นที่ 5',
    wSabaOnly: 'ใช้ SABA โดยไม่มี ICS: GINA ไม่แนะนำการรักษาด้วย SABA อย่างเดียว ให้เริ่มการรักษาที่มี ICS',
    wNone: 'ไม่ได้ใส่การรักษาที่มี ICS',
    wDup: 'ใช้ยาควบคุมที่มี ICS มากกว่าหนึ่งตัว: ตรวจสอบความซ้ำซ้อน',
    wMix: 'GINA: ไม่ใช้ ICS-formoterol เป็นยาบรรเทา ร่วมกับยาควบคุม ICS-LABA ที่มี LABA ต่างชนิด',
    wNeb: 'ICS ชนิดพ่นละอองไม่มีการจัดระดับสำหรับผู้ใหญ่ (ใช้ในโรงพยาบาล)',
    wBothRel: 'เลือกทั้ง ICS-formoterol และ SABA เป็นยาบรรเทา: ใน MART (แนวทางที่ 1) ใช้ ICS-formoterol แทน SABA',
    searchPh: 'ค้นหายาสูดเพื่อเพิ่ม (ชื่อการค้าหรือตัวยา)…',
    remove: 'ลบ',
    maxRows: 'ได้สูงสุด 5 ยาสูด',
    notInd: { Asthma: 'ไม่มีข้อบ่งใช้สำหรับโรคหืด', COPD: 'ไม่มีข้อบ่งใช้สำหรับ COPD' },
    notIndNote: (names, dis) => `ไม่มีข้อบ่งใช้สำหรับ${dis === 'Asthma' ? 'โรคหืด' : ' COPD'}: ${names} จึงไม่นำมาใช้ระบุ${dis === 'Asthma' ? 'ขั้น GINA' : 'กลุ่มยา COPD'}`,
    labaNoIcs: 'GINA: ห้ามใช้ LABA โดยไม่มี ICS ในโรคหืด (เสี่ยงต่อการกำเริบรุนแรง)',
    copdDetected: (lbl) => `ระบุจากยาสูดที่เลือก: ${lbl}`,
    goldTitle: 'การรักษานี้เป็นของกลุ่ม GOLD ใด',
    abeTitle: 'ประเมินกลุ่ม GOLD (ABE)',
    symLabel: 'อาการ', symOpts: { low: 'mMRC 0–1 หรือ CAT < 10', high: 'mMRC ≥ 2 หรือ CAT ≥ 10' },
    gexacLabel: 'การกำเริบในปีที่ผ่านมา', gexacOpts: { '0': 'ไม่มี', '1': '≥ 1 ครั้ง ระดับปานกลางหรือรุนแรง' },
    groupIs: (g) => `GOLD กลุ่ม ${g}`,
    groupPending: 'เลือกอาการและการกำเริบเพื่อกำหนดกลุ่ม',
    vLabel: { ok: (g) => `เหมาะสมกับกลุ่ม ${g}`, below: (g) => `ต่ำกว่า GOLD สำหรับกลุ่ม ${g}`, above: (g) => `มากกว่า GOLD สำหรับกลุ่ม ${g}`, no: () => 'ไม่แนะนำใน COPD (GOLD)', reliever: () => 'ยาบรรเทาอาการ: ใช้เมื่อมีอาการ' },
    verdict: {
      A: { short: 'ยาขยายหลอดลมชนิดออกฤทธิ์สั้นเมื่อมีอาการเป็นทางเลือกสำหรับกลุ่ม A แนะนำชนิดออกฤทธิ์ยาวมากกว่า เว้นแต่เหนื่อยนานๆ ครั้ง', mono: 'ยาขยายหลอดลมชนิดออกฤทธิ์ยาว (LABA หรือ LAMA) เป็นการรักษาของ GOLD สำหรับกลุ่ม A', dual: 'มากกว่ายาเริ่มต้นของ GOLD สำหรับกลุ่ม A (ยาขยายหลอดลมตัวเดียว) เหมาะสมหากเพิ่มยาเพราะยังเหนื่อยต่อเนื่อง', triple: 'กลุ่ม A ไม่มีข้อบ่งชี้ของ ICS (ไม่มีการกำเริบ) พิจารณาลดเหลือยาขยายหลอดลม', laIcs: 'ไม่แนะนำ LABA + ICS ใน COPD กลุ่ม A ใช้ยาขยายหลอดลมชนิดออกฤทธิ์ยาวตัวเดียว', icsOnly: 'ไม่แนะนำ ICS อย่างเดียวใน COPD ให้ใช้ยาขยายหลอดลม' },
      B: { short: 'GOLD แนะนำ LABA + LAMA สำหรับกลุ่ม B ยาขยายหลอดลมชนิดออกฤทธิ์สั้นอย่างเดียวไม่เพียงพอ', mono: 'GOLD แนะนำ LABA + LAMA สำหรับกลุ่ม B: เพิ่มจากยาขยายหลอดลมชนิดออกฤทธิ์ยาวตัวเดียว', dual: 'LABA + LAMA เป็นการรักษาของ GOLD สำหรับกลุ่ม B', triple: 'ICS ใช้สำหรับผู้ที่มีการกำเริบ (กลุ่ม E) ในกลุ่ม B ทบทวนเหตุผลที่เริ่ม ICS และพิจารณาหยุดได้หรือไม่', laIcs: 'ไม่แนะนำ LABA + ICS ใน COPD GOLD แนะนำ LABA + LAMA สำหรับกลุ่ม B', icsOnly: 'ไม่แนะนำ ICS อย่างเดียวใน COPD GOLD แนะนำ LABA + LAMA สำหรับกลุ่ม B' },
      E: { short: 'GOLD แนะนำ LABA + LAMA สำหรับกลุ่ม E ยาขยายหลอดลมชนิดออกฤทธิ์สั้นอย่างเดียวไม่เพียงพอ', mono: 'GOLD แนะนำ LABA + LAMA สำหรับกลุ่ม E: เพิ่มจากยาขยายหลอดลมชนิดออกฤทธิ์ยาวตัวเดียว', dual: 'LABA + LAMA เป็นการรักษาของ GOLD สำหรับกลุ่ม E พิจารณาเพิ่ม ICS หาก eosinophils ในเลือด ≥ 300 cells/µL', triple: 'LABA + LAMA + ICS เหมาะกับกลุ่ม E (eosinophils ในเลือด ≥ 300 cells/µL หรือ ≥ 100 เมื่อยังกำเริบ)', tripleLow: 'หาก eosinophils ในเลือด < 100 cells/µL ICS ไม่น่าจะได้ประโยชน์ GOLD แนะนำ LABA + LAMA (พิจารณาหยุด ICS ภายใต้การติดตาม)', laIcs: 'ไม่แนะนำ LABA + ICS ใน COPD: เพิ่มเป็น LABA + LAMA + ICS หาก eosinophils ≥ 100 cells/µL หรือเปลี่ยนเป็น LABA + LAMA หาก < 100', icsOnly: 'ไม่แนะนำ ICS อย่างเดียวใน COPD GOLD แนะนำ LABA + LAMA สำหรับกลุ่ม E' },
    },
    gold: {
      short: 'กลุ่ม A: ยาขยายหลอดลมชนิดออกฤทธิ์สั้นเมื่อมีอาการเป็นทางเลือกของ GOLD สำหรับกลุ่ม A (แนะนำชนิดออกฤทธิ์ยาวมากกว่า เว้นแต่เหนื่อยนานๆ ครั้ง)',
      mono: 'กลุ่ม A: ยาขยายหลอดลมชนิดออกฤทธิ์ยาว (LABA หรือ LAMA) เป็นยาเริ่มต้นของ GOLD สำหรับกลุ่ม A',
      dual: 'กลุ่ม B หรือ E: LABA + LAMA เป็นยาเริ่มต้นของ GOLD สำหรับทั้งสองกลุ่ม เป็นกลุ่ม E หากมีการกำเริบระดับปานกลางหรือรุนแรงอย่างน้อย 1 ครั้งในปีที่ผ่านมา',
      dualE: 'กลุ่ม E: LABA + LAMA เป็นยาเริ่มต้นของ GOLD สำหรับกลุ่ม E (มีการกำเริบ)',
      triple: 'กลุ่ม E: LABA + LAMA + ICS เป็นทางเลือกของ GOLD สำหรับกลุ่ม E ที่มี eosinophils ในเลือด ≥ 300 cells/µL',
      laIcs: 'ไม่ตรงกับกลุ่ม GOLD: ไม่แนะนำ LABA + ICS ใน COPD หากมีข้อบ่งชี้ของ ICS GOLD แนะนำ LABA + LAMA + ICS',
      icsOnly: 'ไม่ตรงกับกลุ่ม GOLD: ไม่แนะนำการใช้ ICS อย่างเดียวระยะยาวใน COPD',
    },
    goldNote: 'กลุ่ม GOLD กำหนดจากอาการ (mMRC/CAT) และการกำเริบในปีที่ผ่านมา ยาที่ใช้บอกได้เพียงว่าตรงกับยาเริ่มต้นของกลุ่มใด เมื่อนัดติดตาม GOLD ปรับยาตามปัญหาหลัก ไม่ว่าจะเป็นกลุ่มใด',
    track: 'แนวทางปัจจุบัน', track1: 'แนวทางที่ 1 (MART)', track2: 'แนวทางที่ 2 (SABA เป็นยาบรรเทา)',
    step: 'ขั้นการรักษา GINA ปัจจุบัน', stepLabel: (s) => `ขั้นที่ ${s}`,
    ctlTitle: 'ใน 4 สัปดาห์ที่ผ่านมา ผู้ป่วยมี:',
    ctlQ: ['อาการช่วงกลางวันมากกว่า 2 ครั้ง/สัปดาห์', 'ตื่นกลางดึกเพราะหอบ', 'ต้องใช้ยา SABA มากกว่า 2 ครั้ง/สัปดาห์ (ไม่นับก่อนออกกำลังกาย)', 'ทำกิจกรรมได้จำกัดเพราะหอบ'],
    exac: 'มีการกำเริบตั้งแต่การนัดครั้งก่อน',
    stable: 'ควบคุมได้ดีอย่างน้อย 2–3 เดือน',
    level: { well: 'ควบคุมได้ดี', partly: 'ควบคุมได้บางส่วน', uncontrolled: 'ควบคุมไม่ได้' },
    levelNote: (n) => `ตอบ "มี" ${n} จาก 4 ข้อ`,
    withExac: '+ มีการกำเริบ',
    upTitle: 'ควบคุมไม่ดี: ตรวจสอบก่อน แล้วจึงเพิ่มขั้น',
    checksTitle: 'ก่อนเพิ่มขั้นการรักษา (GINA Figure 2)',
    checks: ['ดูผู้ป่วยใช้ยาสูดและแก้ไขข้อผิดพลาดตามรายการตรวจของอุปกรณ์นั้น', 'พูดคุยเรื่องการใช้ยาสม่ำเสมอและอุปสรรคในการใช้ยา', 'ยืนยันการวินิจฉัยโรคหืด', 'ขจัดปัจจัยเสี่ยง: การสูบบุหรี่ ยา beta-blocker ยา NSAIDs การสัมผัสสารก่อภูมิแพ้', 'รักษาโรคร่วม: จมูกอักเสบ โรคอ้วน กรดไหลย้อน ซึมเศร้า/วิตกกังวล'],
    toStep: (s) => `จากนั้นเพิ่มเป็น GINA ขั้นที่ ${s}`,
    atStep5: 'อยู่ขั้นที่ 5 แล้ว: ดูแลตามขั้นที่ 5 ต่อ',
    referNote: 'หากยังควบคุมไม่ได้หลังใช้การรักษาขั้นที่ 4 นาน 3–6 เดือน ให้ส่งต่อผู้เชี่ยวชาญ (ส่งเร็วกว่านั้นหากอาการรุนแรงหรือไม่แน่ใจการวินิจฉัย)',
    track1Tip: 'สำหรับผู้ใหญ่และวัยรุ่น GINA แนะนำให้เปลี่ยนเป็นแนวทางที่ 1 (MART ด้วย ICS-formoterol) หากมียา',
    shortTerm: 'พิจารณาเพิ่มขั้นระยะสั้นได้ (ตัดสินใจร่วมกับผู้ป่วย) ผู้ที่ใช้ MART ปรับยาเองรายวันด้วยการสูดเพิ่มเมื่อมีอาการอยู่แล้ว',
    exacReview: 'หลังการกำเริบ ให้นัดติดตามภายใน 1 สัปดาห์',
    reviewAfterChange: 'ทุกครั้งที่ปรับยา ประเมินอาการ การกำเริบ ผลข้างเคียง และสมรรถภาพปอดใหม่ และนัดติดตามใน 1–3 เดือน',
    holdTitle: 'ควบคุมได้ดี: ใช้การรักษาเดิมต่อ',
    hold: ['ใช้ยาและอุปกรณ์สูดยาเดิมต่อ', 'พิจารณาลดยาเมื่อควบคุมได้ดีต่อเนื่อง 2–3 เดือน', 'นัดติดตาม 1–3 เดือนหลังเริ่มยา จากนั้นทุก 3–12 เดือน'],
    downTitle: 'ควบคุมได้ดี 2–3 เดือน: พิจารณาลดขั้น',
    downOptions: 'ทางเลือกสำหรับการรักษาปัจจุบัน (GINA Box 4-13)',
    sdRef: 'แนวทางการลดยา: เมื่อไร อย่างไร และทางเลือกทั้งหมด (GINA Box 4-13)',
    icsRef: 'การหยุดสเตียรอยด์ชนิดสูดใน COPD (GOLD 2026)',
    lowest: { 1: 'อยู่ขั้นต่ำสุดแล้ว: ใช้ ICS-formoterol ขนาดต่ำเมื่อมีอาการต่อไป', 2: 'อยู่ขั้นต่ำสุดแล้ว: ใช้ ICS ทุกครั้งที่ใช้ SABA ต่อไป ห้ามหยุด ICS ทั้งหมด' },
    devicesTitle: 'ยาสูดสำหรับขั้นนี้',
    relieversTitle: 'ยาบรรเทาอาการ',
    cur: 'ยาควบคุมปัจจุบัน',
    curOpts: { short: 'ยาออกฤทธิ์สั้นอย่างเดียว', mono: 'LABA หรือ LAMA', dual: 'LABA + LAMA', laIcs: 'LABA + ICS', triple: 'LABA + LAMA + ICS', icsOnly: 'ICS อย่างเดียว' },
    prob: 'ปัญหาหลักขณะนี้',
    probOpts: { none: 'ตอบสนองดี', dyspnoea: 'เหนื่อย / ออกกำลังได้จำกัด', exac: 'มีการกำเริบ', both: 'ทั้งสองอย่าง' },
    eos: 'Eosinophils ในเลือด',
    eosOpts: { low: '< 100 cells/µL', mid: '100–299 cells/µL', high: '≥ 300 cells/µL' },
    exSmoker: 'เลิกสูบบุหรี่แล้ว (ไม่ได้สูบในปัจจุบัน)',
    quitSmoking: 'หยุดสูบบุหรี่: แนะนำให้ผู้ป่วยเลิกบุหรี่ทุกครั้งที่นัด และให้การช่วยเหลือ (การให้คำปรึกษาร่วมกับนิโคตินทดแทนหรือยาช่วยเลิกบุหรี่อื่น) การเลิกบุหรี่เป็นวิธีที่ได้ผลที่สุดในการชะลอการดำเนินของ COPD (GOLD 2026)',
    cb: "หลอดลมอักเสบเรื้อรัง (ไอมีเสมหะ 3 เดือนในปีที่ผ่านมา)",
    sevExac: "กำเริบระดับปานกลาง ≥ 2 ครั้ง หรือระดับรุนแรง ≥ 1 ครั้งในปีที่ผ่านมา",
    fev50: "FEV₁ < 50% ของค่าคาดการณ์",
    icsIssue: 'ปัญหาจาก ICS: ปอดอักเสบ ผลข้างเคียงสำคัญ ไม่ตอบสนอง หรือเริ่มใช้โดยไม่มีข้อบ่งชี้',
    copdChecksTitle: 'ขั้นแรก (GOLD 2026)',
    copdChecks: ['ตรวจการใช้ยาสม่ำเสมอ เทคนิคการสูดยา และโรคร่วมที่อาจรบกวน', 'พิจารณาการฟื้นฟูสมรรถภาพปอดและการรักษาที่ไม่ใช้ยา'],
    copdRecTitle: 'การปรับยาที่แนะนำ (GOLD Figure 3.9)',
    maintain: 'ตอบสนองดี: ใช้การรักษาเดิมต่อ',
    laIcsOk: 'ใช้ LABA + ICS โดยไม่มีลักษณะของโรคหืดและควบคุมได้ดี: ใช้ LABA + ICS ต่อได้',
    noMaint: 'ยังไม่ได้ใช้ยาควบคุมชนิดออกฤทธิ์ยาว: เริ่มยาเริ่มต้นของ GOLD ตามกลุ่มของผู้ป่วย',
    initA: 'กลุ่ม A: แนะนำยาขยายหลอดลมชนิดออกฤทธิ์ยาว (LABA หรือ LAMA) ชนิดออกฤทธิ์สั้นอย่างเดียวเพียงพอเฉพาะเมื่อเหนื่อยนานๆ ครั้ง',
    initB: 'กลุ่ม B: เริ่ม LABA + LAMA',
    initE: 'กลุ่ม E: เริ่ม LABA + LAMA พิจารณา LABA + LAMA + ICS หาก eosinophils ในเลือด ≥ 300 cells/µL',
    initPending: 'ประเมินกลุ่ม GOLD ด้านบนเพื่อเลือกยาควบคุมตัวแรก',
    icsOnlyRec: 'ไม่แนะนำ ICS อย่างเดียวใน COPD: เปลี่ยนเป็น LABA + LAMA หรือ LABA + LAMA + ICS หากมีการกำเริบและ eosinophils ในเลือด ≥ 300 cells/µL',
    toDual: 'เพิ่มเป็น LABA + LAMA',
    monoToTriple: "Eosinophils ในเลือด ≥ 300 cells/µL: เพิ่มเป็น LABA + LAMA + ICS",
    toDualExac: "Eosinophils ในเลือด < 300 cells/µL: เพิ่มเป็น LABA + LAMA",
    dyspOpts: 'ใช้ยาขยายหลอดลมชนิดออกฤทธิ์ยาวสองตัวอยู่แล้ว: พิจารณาเปลี่ยนอุปกรณ์หรือตัวยา เริ่มหรือเพิ่มการฟื้นฟูสมรรถภาพปอด พิจารณา ensifentrine หากมี และหาสาเหตุอื่นของอาการเหนื่อย',
    laIcsDysp: 'เปลี่ยนเป็น LABA + LAMA หรือ LABA + LAMA + ICS หากเคยตอบสนองต่อ ICS',
    bothNote: 'มีทั้งอาการเหนื่อยและการกำเริบ: ใช้แนวทางสำหรับการกำเริบ',
    addIcs: 'เพิ่มเป็น LABA + LAMA + ICS (ได้ประโยชน์เมื่อ eosinophils ≥ 100 cells/µL และมากขึ้นเมื่อค่าสูงขึ้น)',
    lowEos: 'Eosinophils < 100 cells/µL: ICS ไม่น่าจะได้ประโยชน์ พิจารณา:',
    azithro: "Azithromycin โดยเฉพาะในผู้ที่เลิกสูบบุหรี่แล้ว คำนึงถึงการเกิดเชื้อดื้อยา",
    azithroSmoker: "ผู้ป่วยยังสูบบุหรี่ จึงเป็นทางเลือกรองของ azithromycin",
    roflu: "Roflumilast (FEV₁ < 50% ของค่าคาดการณ์ และหลอดลมอักเสบเรื้อรัง)",
    laIcsToTriple: 'เพิ่มเป็น LABA + LAMA + ICS (eosinophils ≥ 100 cells/µL)',
    laIcsToDual: 'เปลี่ยนเป็น LABA + LAMA (eosinophils < 100 cells/µL)',
    biologic: "ยาชีววัตถุ (กำเริบปานกลาง ≥ 2 ครั้งหรือรุนแรง ≥ 1 ครั้ง และ eosinophils ≥ 300 cells/µL): dupilumab (หากมีหลอดลมอักเสบเรื้อรัง) หรือ mepolizumab",
    singleInhaler: "การใช้ยาในหลอดเดียวอาจสะดวกและได้ผลดีกว่าการใช้หลายหลอด (GOLD)",
    addOnTitle: "ทางเลือกเพิ่มเติม:",
    biologicNeed: "Eosinophils ≥ 300 cells/µL: ยาชีววัตถุ (dupilumab หากมีหลอดลมอักเสบเรื้อรัง หรือ mepolizumab) เป็นทางเลือกหากกำเริบปานกลาง ≥ 2 ครั้งหรือรุนแรง ≥ 1 ครั้งในปีที่ผ่านมา",
    icsWithdraw: 'จากปัญหาของ ICS อาจหยุด ICS ได้ โดยชั่งน้ำหนักความเสี่ยงและประโยชน์ภายใต้การติดตามใกล้ชิด',
    icsWithdrawEos: ' หาก eosinophils ≥ 300 cells/µL การหยุด ICS มีแนวโน้มทำให้กำเริบมากขึ้น',
    listTitles: { mono: 'ยาสูด LABA หรือ LAMA', dual: 'ยาสูด LABA + LAMA', triple: 'ยาสูด LABA + LAMA + ICS' },
    source: 'ที่มา: GINA 2026 Summary Guide (Table 2, Figure 2, การปรับและลดการรักษา) และฉบับเต็ม Box 4-13; GOLD 2026 report การรักษาด้วยยาในการติดตาม (Figure 3.9 และ 3.12)',
  },
};
const FollowIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 12a9 9 0 1 1-3-6.7" /><polyline points="21 3 21 9 15 9" /><polyline points="9 12 11 14 15 10" /></svg>);
// Box 4-13 rows (STEPDOWN_TEXT aRows index) for each current track and step
// Step 5 includes Box 4-13's high-dose ICS-LABA row (Track 2) as well as the OCS / biologic rows.
const STEPDOWN_ROWS = { 1: { '1-2': [], 3: [6], 4: [3], 5: [0, 1] }, 2: { 1: [], 2: [8], 3: [5, 7], 4: [2, 4], 5: [2, 0, 1] } };
const FU_STEPS = { 1: ['1-2', 3, 4, 5], 2: [1, 2, 3, 4, 5] };
const stepRecText = (t, track, step) => track === 1
  ? ({ '1-2': t.martRec1, 3: t.martRec2, 4: t.martRec3, 5: t.martRec5 })[step]
  : [null, t.convRec1, t.convRec2, t.convRec3, t.convRec4, t.convRec5][step];
const nextGinaStep = (track, step) => track === 1 ? ({ '1-2': 3, 3: 4, 4: 5, 5: 5 })[step] : Math.min(5, step + 1);
const copdDevices = (cls, list) => list.filter(d => d.class === cls && d.indications.includes('COPD') && d.type !== 'Nebulizer').sort(rankForPlan);

// Current GINA track/step from the patient's inhalers and doses (adults/adolescents).
// Track 1 if ICS-formoterol is the reliever, otherwise Track 2. The step follows the maintenance ICS dose
// level (GINA Table 6, metered dose), whether the maintenance contains a LABA, and any add-on LAMA.
const inferGinaFromRegimen = (rows) => {
  const items = rows.map(r => ({ ...r, med: deviceData.find(d => d.id === r.id) })).filter(x => x.med);
  const maintOf = (x) => x.per * x.freq;
  const martRel = items.some(x => x.med.isMart && x.rel);
  const sabaRel = items.some(x => isShortActingOnly(x.med) && x.rel);
  const icsWithSaba = sabaRel && items.some(x => x.med.class === 'ICS' && x.rel);   // GINA Track 2 Step 1
  const maint = items.filter(x => maintOf(x) > 0 && !isShortActingOnly(x.med));
  const hasLaba = maint.some(x => classesOf(x.med).includes('LABA'));
  const hasLama = maint.some(x => classesOf(x.med).includes('LAMA'));
  const byKey = {}; let neb = false;
  maint.forEach(x => { const info = icsInfo(x.med); if (!info) return; if (info.neb) { neb = true; return; } byKey[info.key] = (byKey[info.key] || 0) + info.mcg * maintOf(x); });
  const grades = Object.keys(byKey).map(k => ({ k, mcg: byKey[k], grade: gradeIcs(k, byKey[k]) }));
  // lowmed: GINA's single low-to-medium band (fluticasone furoate 100, mometasone pMDI 200-400) counts as the lower step
  const rank = { below: 1, low: 1, lowmed: 1, medium: 2, high: 3, above: 3, na: 1 };
  const lvl = grades.length ? ['', 'low', 'medium', 'high'][Math.max(...grades.map(g => rank[g.grade]))] : (neb ? 'low' : null);
  const track = martRel ? 1 : 2;
  let step, basis;
  if (!lvl) { step = track === 1 ? '1-2' : 1; basis = track === 1 ? 'airOnly' : icsWithSaba ? 'icsWithSaba' : (sabaRel ? 'sabaOnly' : 'none'); }
  else if (hasLama) { step = 5; basis = 'lama'; }
  else if (track === 1) { step = lvl === 'high' ? 5 : lvl === 'medium' ? 4 : 3; basis = 'mart'; }
  else if (hasLaba) { step = lvl === 'high' ? 5 : lvl === 'medium' ? 4 : 3; basis = 'icsLaba'; }
  else { step = lvl === 'low' ? 2 : 3; basis = 'icsOnly'; }
  const mixLaba = martRel && maint.some(x => classesOf(x.med).includes('LABA') && !/formoterol/i.test(x.med.substance));
  return { track, step, basis, grades, martRel, sabaRel, dupIcs: maint.filter(x => icsInfo(x.med)).length > 1, mixLaba, neb };
};
// COPD maintenance class from the selected inhalers (short-acting relievers ignored)
const copdClassFromRegimen = (rows) => {
  const cls = new Set();
  rows.forEach(r => { const med = deviceData.find(d => d.id === r.id); if (!med || isShortActingOnly(med) || r.per * r.freq === 0) return; classesOf(med).forEach(c => cls.add(c)); });
  if (cls.has('ICS') && cls.has('LABA') && cls.has('LAMA')) return 'triple';
  if (cls.has('LABA') && cls.has('LAMA')) return 'dual';
  if (cls.has('ICS') && cls.has('LABA')) return 'laIcs';
  if (cls.has('LABA') || cls.has('LAMA')) return 'mono';
  return null;
};

const FollowUpModal = ({ lang, t, regionData, onClose, current = [] }) => {
  const c = FOLLOW_TEXT[lang];
  // Open on the drugs' indication: COPD when some selected drug is not licensed for asthma but is for COPD (e.g. Anoro)
  const [tab, setTab] = useState(() => current.length && current.some(m => m.indications.includes('COPD')) && !current.every(m => m.indications.includes('Asthma')) ? 'copd' : 'asthma');
  const [track, setTrackRaw] = useState(1);
  const [step, setStep] = useState(4);
  const [q, setQ] = useState([false, false, false, false]);
  const [exac, setExac] = useState(false);
  const [stable, setStable] = useState(false);
  const [cur, setCur] = useState('dual');
  const [prob, setProb] = useState('dyspnoea');
  const [eos, setEos] = useState('mid');
  // Smoking status: unticked = currently smoking (stop-smoking advice; no azithromycin, GOLD); ticked = ex-smoker
  const [exSmoker, setExSmoker] = useState(false);
  const smoker = !exSmoker;
  const [cb, setCb] = useState(false);          // chronic bronchitis
  const [fev50, setFev50] = useState(false);
  const [sevExac, setSevExac] = useState(false);  // ≥ 2 moderate or ≥ 1 severe exacerbation
  const [icsIssue, setIcsIssue] = useState(false);
  const [sdOpen, setSdOpen] = useState(false);
  const [icsRefOpen, setIcsRefOpen] = useState(null);   // null = follow the current treatment
  const [goldSym, setGoldSym] = useState(null);         // 'low' | 'high'
  const [goldExac, setGoldExac] = useState(null);       // '0' | '1'
  const setTrack = (tr) => { setTrackRaw(tr); setStep(s => tr === 1 ? (s === 1 || s === 2 ? '1-2' : s) : (s === '1-2' ? 2 : s)); };
  // Inhalers selected on the main page: dose entry + automatic GINA step / COPD class
  // ICS-formoterol defaults to MART (reliever ticked) unless a SABA is also listed: then it is maintenance with a SABA reliever.
  const rowFor = (med, others = []) => { const reg = defaultRegimen(med); const reliever = isShortActingOnly(med); return { id: med.id, per: reliever ? 0 : reg.per, freq: reg.freq, rel: reliever || (!!med.isMart && !others.some(isShortActingOnly)) }; };
  const [curRows, setCurRows] = useState(() => current.map(m => rowFor(m, current)));
  const [findQ, setFindQ] = useState('');
  const findMed = (id) => regionData.find(d => d.id === id) || deviceData.find(d => d.id === id);
  const indicatedRows = (dis) => curRows.filter(r => { const m = findMed(r.id); return m && m.indications.includes(dis); });
  const updRow = (id, patch) => setCurRows(rs => rs.map(r => r.id === id ? { ...r, ...patch } : r));
  const asthmaRows = indicatedRows('Asthma'), copdRows = indicatedRows('COPD');
  const det = asthmaRows.length ? inferGinaFromRegimen(asthmaRows) : null;
  const copdDet = copdRows.length ? copdClassFromRegimen(copdRows) : null;
  // GOLD group matched by the current COPD treatment (GOLD 2026 initial pharmacological treatment)
  const copdKind = copdDet || (copdRows.some(r => r.per * r.freq > 0 && classesOf(findMed(r.id)).every(x => x === 'ICS')) ? 'icsOnly'
    : copdRows.some(r => isShortActingOnly(findMed(r.id))) ? 'short' : null);
  const goldKey = copdKind === 'dual' && (prob === 'exac' || prob === 'both') ? 'dualE' : copdKind;
  // GOLD 2026 ABE: E = at least 1 moderate or severe exacerbation in the past year; otherwise B if
  // mMRC ≥ 2 or CAT ≥ 10, else A. The regimen is then judged against GOLD's treatment for that group.
  const goldGroup = goldExac === '1' ? 'E' : goldExac === '0' && goldSym ? (goldSym === 'high' ? 'B' : 'A') : null;
  const V_STATUS = { A: { short: 'ok', mono: 'ok', dual: 'above', triple: 'above', laIcs: 'no', icsOnly: 'no' }, B: { short: 'below', mono: 'below', dual: 'ok', triple: 'above', laIcs: 'no', icsOnly: 'no' }, E: { short: 'below', mono: 'below', dual: 'ok', triple: 'ok', laIcs: 'no', icsOnly: 'no' } };
  const vKey = goldGroup && copdKind ? (goldGroup === 'E' && copdKind === 'triple' && eos === 'low' ? 'tripleLow' : copdKind) : null;
  const vStatus = vKey ? (vKey === 'tripleLow' ? 'above' : V_STATUS[goldGroup][copdKind]) : null;
  const V_TONE = { ok: 'border-emerald-300 bg-emerald-100 text-emerald-800', below: 'border-amber-300 bg-amber-100 text-amber-800', above: 'border-amber-300 bg-amber-100 text-amber-800', no: 'border-red-300 bg-red-100 text-red-800', reliever: 'border-sky-200 bg-sky-100 text-sky-800' };
  useEffect(() => { if (det) { setTrackRaw(det.track); setStep(det.step); } }, [det ? `${det.track}-${det.step}` : '']);
  useEffect(() => { if (copdKind) setCur(copdKind); }, [copdKind]);
  const gradeName = ICS_TEXT[lang].grade, molName = ICS_TEXT[lang].molecule;
  const detReasons = (d) => [
    d.martRel ? c.rTrack1 : d.sabaRel ? c.rTrack2Saba : c.rTrack2None,
    ...d.grades.map(g => c.rLevel(molName[g.k], g.mcg, gradeName[g.grade])),
    ({ airOnly: c.rAirOnly, lama: c.rLama, icsOnly: c.rIcsOnly, icsLaba: c.rLaba, mart: c.rMart, icsWithSaba: c.rIcsWithSaba })[d.basis],
  ].filter(Boolean);
  const detWarns = (d) => [d.basis === 'sabaOnly' && c.wSabaOnly, d.basis === 'none' && c.wNone, d.dupIcs && c.wDup, d.mixLaba && c.wMix, d.martRel && d.sabaRel && c.wBothRel, d.neb && c.wNeb].filter(Boolean);
  // Search by brand, ingredient or class (e.g. 'LAMA', 'LABA/LAMA', 'ICS'); exact class matches come first.
  const results = (() => {
    const qn = findQ.trim().toLowerCase(), qs = qn.replace(/[s+/]+/g, '');
    if (qn.length < 2) return [];
    const score = (d) => { const cls = d.class.toLowerCase().replace(/[s+/]+/g, ''); if (cls === qs) return 0; if (cls.includes(qs)) return 1 + (cls.length - qs.length) / 100; return drugSearchText(d).includes(qn) ? 2 : -1; };
    return regionData.filter(d => d.type !== 'Nebulizer' && !curRows.some(r => r.id === d.id)).map(d => [d, score(d)]).filter(x => x[1] >= 0)
      .sort((a, b) => a[1] - b[1] || a[0].marketName.localeCompare(b[0].marketName)).slice(0, 8).map(x => x[0]);
  })();
  const addRow = (med) => { setCurRows(rs => rs.length >= 5 || rs.some(r => r.id === med.id) ? rs : [...rs, rowFor(med, rs.map(r => findMed(r.id)))]); setFindQ(''); };
  const removeRow = (id) => setCurRows(rs => rs.filter(r => r.id !== id));
  // Current-treatment block, shared by both tabs; drugs not licensed for this tab's disease are flagged
  // and left out of that tab's detection.
  const currentSection = (dis) => {
    const notInd = curRows.map(r => findMed(r.id)).filter(m => m && !m.indications.includes(dis));
    const labaNoIcs = dis === 'Asthma' && notInd.some(m => classesOf(m).includes('LABA') && !classesOf(m).includes('ICS'));
    return (
      <section className="shrink-0 bg-white rounded-2xl border border-violet-200 p-4 flex flex-col gap-3" data-fu-current>
        {label(c.curTitle)}
        {curRows.length === 0 && <p className="text-xs text-slate-500" data-fu-hint>{c.curHint}</p>}
        {curRows.map(r => { const med = findMed(r.id); const canRel = isShortActingOnly(med) || !!med.isMart || med.class === 'ICS'; const ok = med.indications.includes(dis); return (
          <div key={r.id} data-fu-row={r.id} className={`rounded-xl border p-3 flex flex-col gap-2 ${ok ? 'border-slate-200' : 'border-red-200 bg-red-50'}`}>
            <div className="flex flex-wrap items-center gap-2 min-w-0">
              {medIcon(med, 'w-8 h-8 shrink-0')}
              <span className="font-bold text-sm text-slate-800 break-words min-w-0 flex-1">{med.marketName}</span>
              {!ok && <span data-fu-notind-badge className="shrink-0 text-[10px] font-bold px-2 py-0.5 rounded border border-red-200 bg-red-100 text-red-700">{c.notInd[dis]}</span>}
              {dis === 'COPD' && ok && vStatus && (() => { const k = isShortActingOnly(med) ? 'reliever' : vStatus; return <span data-fu-row-verdict={k} className={`shrink-0 text-[10px] font-bold px-2 py-0.5 rounded border ${V_TONE[k]}`}>{c.vLabel[k](goldGroup)}</span>; })()}
              <button type="button" onClick={() => removeRow(r.id)} data-fu-remove={r.id} className="ml-auto shrink-0 px-2 py-1 rounded-lg border border-slate-200 bg-white text-[11px] font-bold text-slate-500 hover:text-red-600 hover:border-red-300">{c.remove}</button>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
              <span className="font-bold">{c.maintLabel}:</span>
              <input type="number" min="0" max="8" value={r.per} data-fu-per onChange={(e) => updRow(r.id, { per: Math.max(0, Math.min(8, parseInt(e.target.value, 10) || 0)) })} className="w-14 rounded-lg border border-slate-200 bg-white text-slate-800 p-1.5 text-sm" />
              <span>{c.perLabel}</span>
              <select value={r.freq} data-fu-freq onChange={(e) => updRow(r.id, { freq: +e.target.value })} className="rounded-lg border border-slate-200 bg-white text-slate-800 p-1.5 text-sm">{[1, 2, 3, 4].map(n => <option key={n} value={n}>{n}</option>)}</select>
              <span>{c.freqLabel}</span>
              {canRel && <label className="flex items-center gap-1.5 sm:ml-auto font-semibold"><input type="checkbox" checked={r.rel} data-fu-rel onChange={(e) => updRow(r.id, { rel: e.target.checked })} />{c.relLabel}</label>}
            </div>
          </div>); })}
        {curRows.length < 5 ? (
          <div className="relative">
            <input type="search" value={findQ} onChange={(e) => setFindQ(e.target.value)} placeholder={c.searchPh} data-fu-search className="w-full rounded-lg border border-slate-200 bg-white text-slate-800 text-sm p-2" />
            {results.length > 0 && (
              <div className="mt-1 flex flex-col rounded-lg border border-slate-200 bg-white overflow-hidden" data-fu-results>
                {results.map(d => (
                  <button key={d.id} type="button" onClick={() => addRow(d)} data-fu-add={d.id} className="flex items-center gap-2 px-3 py-2 text-left text-sm hover:bg-violet-50 border-b border-slate-100 last:border-b-0">
                    {medIcon(d, 'w-6 h-6 shrink-0')}
                    <span className="font-semibold text-slate-800">+ {d.marketName}</span>
                    <span className="text-[11px] text-slate-500 truncate">{d.substance}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : <p className="text-[11px] text-slate-500">{c.maxRows}</p>}
        {notInd.length > 0 && (
          <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-xs font-semibold text-red-800" data-fu-notind={dis}>
            {c.notIndNote(notInd.map(m => m.marketName).join(', '), dis)}
            {labaNoIcs && <span className="block mt-1">{c.labaNoIcs}</span>}
          </div>
        )}
        {dis === 'Asthma' && det && (
          <div className="rounded-xl bg-violet-50 border border-violet-200 p-3" data-fu-detected={`${det.track}-${det.step}`}>
            <div className="font-extrabold text-violet-800 text-sm">{c.detected(det.step, det.track)}</div>
            <ul className="list-disc pl-5 text-xs text-violet-900 space-y-0.5 mt-1">{detReasons(det).map((x, i) => <li key={i}>{x}</li>)}</ul>
            {detWarns(det).length > 0 && <ul className="list-disc pl-5 text-xs font-semibold text-red-700 space-y-0.5 mt-1">{detWarns(det).map((x, i) => <li key={i}>{x}</li>)}</ul>}
            <p className="text-[11px] text-slate-500 mt-1.5">{c.overrideNote}</p>
          </div>
        )}
        {dis === 'COPD' && goldKey && (
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3" data-fu-gold={goldKey}>
            {copdDet && <div className="text-xs font-bold text-emerald-800" data-fu-copd-detected={copdDet}>{c.copdDetected(c.curOpts[copdDet])}</div>}
            <div className="font-extrabold text-emerald-800 text-sm mt-1">{c.goldTitle}</div>
            <p className="text-xs text-emerald-900 mt-0.5">{c.gold[goldKey]}</p>
            {vStatus && (
              <div className={`mt-2 rounded-lg border p-2 ${V_TONE[vStatus]}`} data-fu-verdict={vStatus}>
                <div className="text-xs font-extrabold">{c.vLabel[vStatus](goldGroup)}</div>
                <p className="text-xs mt-0.5">{c.verdict[goldGroup][vKey]}</p>
              </div>
            )}
            <p className="text-[11px] text-slate-500 mt-1.5">{c.goldNote}</p>
          </div>
        )}
      </section>
    );
  };

  // Colour by meaning: green = good, amber = intermediate, red = severe, indigo/violet = neutral choice.
  const CHIP_ON = { violet: 'bg-violet-600 text-white border-violet-600', emerald: 'bg-emerald-600 text-white border-emerald-600', amber: 'bg-amber-500 text-white border-amber-500', red: 'bg-red-600 text-white border-red-600', indigo: 'bg-indigo-600 text-white border-indigo-600' };
  const SEV_SYM = { low: 'emerald', high: 'red' }, SEV_EXAC = { '0': 'emerald', '1': 'red' }, SEV_EOS = { low: 'emerald', mid: 'amber', high: 'red' }, SEV_PROB = { none: 'emerald', dyspnoea: 'amber', exac: 'red', both: 'red' };
  const GROUP_TONE = { A: 'text-emerald-700', B: 'text-amber-700', E: 'text-red-700' };
  const TOGGLE_ON = { violet: ['bg-violet-50 border-violet-300 text-violet-900', 'bg-violet-600 border-violet-600 text-white'], red: ['bg-red-50 border-red-300 text-red-900', 'bg-red-600 border-red-600 text-white'], emerald: ['bg-emerald-50 border-emerald-300 text-emerald-900', 'bg-emerald-600 border-emerald-600 text-white'] };
  const chip = (on, tone = 'violet') => 'px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ' + (on ? CHIP_ON[tone] : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50');
  const toggle = (on, onClick, label, attr, tone = 'violet') => (
    <button type="button" onClick={onClick} aria-pressed={on} {...attr} className={`w-full text-left flex items-start gap-2 px-3 py-2 rounded-lg border text-sm transition-colors ${on ? TOGGLE_ON[tone][0] : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}>
      <span className={`mt-0.5 w-4 h-4 shrink-0 rounded border flex items-center justify-center ${on ? TOGGLE_ON[tone][1] : 'border-slate-300'}`}>{on && <Check className="w-3 h-3" />}</span>
      <span>{label}</span>
    </button>
  );
  const list = (items, cls = 'list-disc') => <ul className={`${cls} pl-5 text-sm text-slate-700 space-y-1`}>{items.map((x, i) => <li key={i}>{x}</li>)}</ul>;
  const label = (txt) => <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">{txt}</div>;

  // ---- asthma
  const score = q.filter(Boolean).length;
  const level = score === 0 ? 'well' : score <= 2 ? 'partly' : 'uncontrolled';
  const outcome = level !== 'well' || exac ? 'up' : stable ? 'down' : 'hold';
  const nxt = nextGinaStep(track, step);
  const rxList = regionData.filter(d => !d.notRegistered);
  const upPlan = outcome === 'up' ? asthmaPlanDevices(nxt, track === 1, rxList) : null;
  const sdRows = STEPDOWN_ROWS[track][step].map(i => STEPDOWN_TEXT[lang].aRows[i]);
  const levelTone = level === 'well' && !exac ? 'bg-emerald-100 text-emerald-800 border-emerald-200' : level === 'uncontrolled' || exac ? 'bg-red-100 text-red-800 border-red-200' : 'bg-amber-100 text-amber-800 border-amber-200';

  // ---- COPD (GOLD Figure 3.9)
  const exacPath = prob === 'exac' || prob === 'both';
  const recs = []; const lists = [];
  if (cur === 'short' || cur === 'icsOnly') {
    // Not on a GOLD maintenance regimen: initial treatment by group (GOLD 2026 Figure 3.8)
    if (cur === 'icsOnly') { recs.push(c.icsOnlyRec); lists.push('dual', 'triple'); }
    else {
      recs.push(c.noMaint);
      if (goldGroup === 'A') { recs.push(c.initA); lists.push('mono'); }
      else if (goldGroup === 'B') { recs.push(c.initB); lists.push('dual'); }
      else if (goldGroup === 'E') { recs.push(c.initE); lists.push('dual'); if (eos === 'high') lists.push('triple'); }
      else recs.push(c.initPending);
    }
  } else if (prob === 'none') {
    recs.push(c.maintain);
    if (cur === 'laIcs') recs.push(c.laIcsOk);
  } else if (!exacPath) {
    if (cur === 'mono') { recs.push(c.toDual); lists.push('dual'); }
    else if (cur === 'laIcs') { recs.push(c.laIcsDysp); lists.push('dual', 'triple'); }
    else recs.push(c.dyspOpts);
  } else {
    // GOLD 2026 Figure 3.9, one or more moderate or severe exacerbation
    if (prob === 'both') recs.push(c.bothNote);
    const addOns = () => { if (fev50 && cb) recs.push(c.roflu); recs.push(smoker ? c.azithro + ' ' + c.azithroSmoker : c.azithro); };
    if (cur === 'mono') {
      if (eos === 'high') { recs.push(c.monoToTriple); lists.push('triple'); } else { recs.push(c.toDualExac); lists.push('dual'); }
    } else if (cur === 'dual') {
      if (eos !== 'low') { recs.push(c.addIcs); lists.push('triple'); }
      else { recs.push(c.lowEos); addOns(); }
    } else if (cur === 'laIcs') {
      if (eos !== 'low') { recs.push(c.laIcsToTriple); lists.push('triple'); } else { recs.push(c.laIcsToDual); lists.push('dual'); }
    } else {
      recs.push(c.addOnTitle); addOns();
      if (eos === 'high') recs.push(sevExac ? c.biologic : c.biologicNeed);
    }
  }
  if (cur === 'triple' && icsIssue) recs.push(c.icsWithdraw + (eos === 'high' ? c.icsWithdrawEos : ''));
  const showAddOnFlags = exacPath && ((cur === 'dual' && eos === 'low') || cur === 'triple');
  const showSevExac = exacPath && cur === 'triple' && eos === 'high';
  const listCls = { dual: 'LABA / LAMA', triple: 'ICS / LABA / LAMA' };
  const icsOpen = icsRefOpen ?? (cur === 'triple' || cur === 'laIcs' || cur === 'icsOnly');
  const refSection = (open, onToggle, title, attr, body) => (
    <section className="shrink-0 bg-white rounded-2xl border border-slate-200">
      <button type="button" onClick={onToggle} aria-expanded={open} {...attr} className="w-full flex items-center justify-between gap-2 px-4 py-3 text-left text-sm font-extrabold text-slate-800">
        <span>{title}</span><span className={`text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`}>▾</span>
      </button>
      {open && <div className="px-4 pb-4">{body}</div>}
    </section>
  );

  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 print:hidden">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col max-h-[95vh] animate-in fade-in zoom-in-95 duration-200" data-followup>
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-violet-50/80 rounded-t-2xl shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-violet-100 text-violet-600 rounded-xl"><FollowIcon className="w-5 h-5" /></div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 leading-tight">{c.title}</h2>
              <p className="text-xs text-slate-500">{c.sub}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 shrink-0"><GuidelineFiguresButton set="follow" lang={lang} /><button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-700 hover:bg-white rounded-full transition-colors" aria-label="Close"><X className="w-6 h-6" /></button></div>
        </div>
        <div className="shrink-0 flex gap-2 px-4 sm:px-6 py-3 border-b border-slate-100 bg-white" role="tablist">
          {[['asthma', c.tabAsthma, 'bg-indigo-600 border-indigo-600'], ['copd', c.tabCopd, 'bg-emerald-600 border-emerald-600']].map(([k, lbl, on]) => (
            <button key={k} type="button" role="tab" aria-selected={tab === k} data-followup-tab={k} onClick={() => setTab(k)}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-bold border transition-colors ${tab === k ? on + ' text-white' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}>{lbl}</button>
          ))}
        </div>
        <div className="p-4 sm:p-6 flex-grow overflow-y-auto bg-slate-50 flex flex-col gap-4">
          {tab === 'asthma' ? (<>
            <section className="shrink-0 bg-white rounded-2xl border border-slate-200 p-4 flex flex-col gap-3">
              <div>
                {label(c.track)}
                <div className="flex flex-wrap gap-2">{[1, 2].map(tr => <button key={tr} type="button" data-fu-track={tr} aria-pressed={track === tr} onClick={() => setTrack(tr)} className={chip(track === tr, 'indigo')}>{tr === 1 ? c.track1 : c.track2}</button>)}</div>
              </div>
            </section>
            {currentSection('Asthma')}
            <section className="shrink-0 bg-white rounded-2xl border border-slate-200 p-4 flex flex-col gap-3">
              <div>
                {label(c.step)}
                <div className="flex flex-wrap gap-2">{FU_STEPS[track].map(s => <button key={s} type="button" data-fu-step={s} aria-pressed={step === s} onClick={() => setStep(s)} className={chip(step === s, 'indigo')}>{c.stepLabel(s)}</button>)}</div>
              </div>
              <div>
                {label(c.ctlTitle)}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">{c.ctlQ.map((txt, i) => <React.Fragment key={i}>{toggle(q[i], () => setQ(a => a.map((v, j) => j === i ? !v : v)), txt, { 'data-fu-q': i }, 'red')}</React.Fragment>)}</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {toggle(exac, () => setExac(v => !v), c.exac, { 'data-fu-exac': '' }, 'red')}
                {level === 'well' && !exac && toggle(stable, () => setStable(v => !v), c.stable, { 'data-fu-stable': '' }, 'emerald')}
              </div>
            </section>

            <section className="shrink-0 bg-white rounded-2xl border border-violet-200 shadow-sm p-4 sm:p-5 flex flex-col gap-3" data-fu-result={outcome}>
              <div className="flex flex-wrap items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full border text-xs font-bold ${levelTone}`}>{c.level[level]}{exac ? ' ' + c.withExac : ''}</span>
                <span className="text-[11px] text-slate-500">{c.levelNote(score)}</span>
              </div>
              {outcome === 'up' && (<>
                <h3 className="font-extrabold text-red-700">{c.upTitle}</h3>
                <div className="rounded-xl bg-amber-50 border border-amber-200 p-3">
                  <div className="text-xs font-bold text-amber-800 mb-1">{c.checksTitle}</div>
                  <ol className="list-decimal pl-5 text-sm text-amber-900 space-y-0.5">{c.checks.map((x, i) => <li key={i}>{x}</li>)}</ol>
                </div>
                <div>
                  <div className="font-extrabold text-violet-800">{step === 5 ? c.atStep5 : c.toStep(nxt)}</div>
                  <p className="text-sm text-slate-700 mt-1">{stepRecText(t, track, nxt)}</p>
                </div>
                {upPlan && upPlan.controllers.length > 0 && (<div>{label(c.devicesTitle)}<PlanDrugList key={`fu-${track}-${nxt}`} list={upPlan.controllers} t={t} /></div>)}
                {upPlan && upPlan.relievers.length > 0 && (<div>{label(c.relieversTitle)}<PlanDrugList key={`fur-${track}-${nxt}`} list={upPlan.relievers} t={t} initial={2} /></div>)}
                {list([track === 2 && c.track1Tip, c.shortTerm, (step === 4 || step === 5) && c.referNote, exac && c.exacReview, c.reviewAfterChange].filter(Boolean))}
              </>)}
              {outcome === 'hold' && (<>
                <h3 className="font-extrabold text-emerald-700">{c.holdTitle}</h3>
                {list(c.hold)}
              </>)}
              {outcome === 'down' && (<>
                <h3 className="font-extrabold text-amber-700">{c.downTitle}</h3>
                {sdRows.length > 0 ? (
                  <div>
                    {label(c.downOptions)}
                    <div className="flex flex-col gap-2">{sdRows.map((r, i) => <div key={i} data-fu-stepdown className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm"><div className="font-bold text-slate-800">{r[1]}</div><div className="text-slate-700 mt-0.5">{r[2]}</div></div>)}</div>
                  </div>
                ) : <p className="text-sm font-semibold text-slate-700">{c.lowest[track]}</p>}
                {track === 1 && step === 5 && <p className="text-sm font-semibold text-slate-700" data-fu-sd-highmart>{c.sdHighMart}</p>}
                {list(STEPDOWN_TEXT[lang].aWhen.slice(1))}
              </>)}
            </section>
            {refSection(sdOpen, () => setSdOpen(o => !o), c.sdRef, { 'data-fu-sdref': '' }, <AsthmaStepDownRef lang={lang} current={STEPDOWN_ROWS[track][step]} />)}
          </>) : (<>
            <section className="shrink-0 bg-white rounded-2xl border border-emerald-200 p-4 flex flex-col gap-2" data-fu-abe>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{c.abeTitle}</div>
              <div className="flex flex-wrap items-center gap-2"><span className="text-xs font-bold text-slate-600 w-full sm:w-auto">{c.symLabel}:</span>{['low', 'high'].map(k => <button key={k} type="button" data-fu-sym={k} aria-pressed={goldSym === k} onClick={() => setGoldSym(k)} className={chip(goldSym === k, SEV_SYM[k])}>{c.symOpts[k]}</button>)}</div>
              <div className="flex flex-wrap items-center gap-2"><span className="text-xs font-bold text-slate-600 w-full sm:w-auto">{c.gexacLabel}:</span>{['0', '1'].map(k => <button key={k} type="button" data-fu-gexac={k} aria-pressed={goldExac === k} onClick={() => setGoldExac(k)} className={chip(goldExac === k, SEV_EXAC[k])}>{c.gexacOpts[k]}</button>)}</div>
              <div data-fu-group={goldGroup || ''}>{goldGroup ? <span className={`text-sm font-extrabold ${GROUP_TONE[goldGroup]}`}>{c.groupIs(goldGroup)}</span> : <span className="text-xs text-slate-500">{c.groupPending}</span>}</div>
              <div className="flex flex-wrap items-center gap-2"><span className="text-xs font-bold text-slate-600 w-full sm:w-auto">{c.eos}:</span>{Object.keys(c.eosOpts).map(k => <button key={k} type="button" data-fu-eos={k} aria-pressed={eos === k} onClick={() => setEos(k)} className={chip(eos === k, SEV_EOS[k])}>{c.eosOpts[k]}</button>)}</div>
            </section>
            {currentSection('COPD')}
            <section className="shrink-0 bg-white rounded-2xl border border-slate-200 p-4 flex flex-col gap-3">
              <div>{label(c.cur)}<div className="flex flex-wrap gap-2">{Object.keys(c.curOpts).map(k => <button key={k} type="button" data-fu-cur={k} aria-pressed={cur === k} onClick={() => setCur(k)} className={chip(cur === k, 'indigo')}>{c.curOpts[k]}</button>)}</div></div>
              <div>{label(c.prob)}<div className="flex flex-wrap gap-2">{Object.keys(c.probOpts).map(k => <button key={k} type="button" data-fu-prob={k} aria-pressed={prob === k} onClick={() => setProb(k)} className={chip(prob === k, SEV_PROB[k])}>{c.probOpts[k]}</button>)}</div></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {toggle(exSmoker, () => setExSmoker(v => !v), c.exSmoker, { 'data-fu-exsmoker': '' }, 'emerald')}
                  {showAddOnFlags && toggle(fev50, () => setFev50(v => !v), c.fev50, { 'data-fu-fev50': '' }, 'red')}
                  {(showAddOnFlags || showSevExac) && toggle(cb, () => setCb(v => !v), c.cb, { 'data-fu-cb': '' }, 'red')}
                  {showSevExac && toggle(sevExac, () => setSevExac(v => !v), c.sevExac, { 'data-fu-sevexac': '' }, 'red')}
                  {cur === 'triple' && toggle(icsIssue, () => setIcsIssue(v => !v), c.icsIssue, { 'data-fu-ics': '' }, 'red')}
              </div>
            </section>
            <section className="shrink-0 bg-white rounded-2xl border border-emerald-200 shadow-sm p-4 sm:p-5 flex flex-col gap-3" data-fu-copd>
              <div className="rounded-xl bg-amber-50 border border-amber-200 p-3">
                <div className="text-xs font-bold text-amber-800 mb-1">{c.copdChecksTitle}</div>
                <ul className="list-disc pl-5 text-sm text-amber-900 space-y-0.5">{c.copdChecks.map((x, i) => <li key={i}>{x}</li>)}</ul>
              </div>
              <h3 className="font-extrabold text-emerald-800">{c.copdRecTitle}</h3>
              {smoker && <div data-fu-quit className="rounded-xl bg-red-50 border border-red-200 p-3 text-sm font-semibold text-red-800">{c.quitSmoking}</div>}
              {list(recs)}
              {lists.some(k => k !== 'mono') && <p className="text-[11px] text-slate-500" data-fu-single>{c.singleInhaler}</p>}
              {lists.map(k => { const items = k === 'mono' ? [...copdDevices('LAMA', rxList), ...copdDevices('LABA', rxList)] : copdDevices(listCls[k], rxList); return items.length > 0 && <div key={k}>{label(c.listTitles[k])}<PlanDrugList key={`fuc-${k}`} list={items} t={t} /></div>; })}
            </section>
            {refSection(icsOpen, () => setIcsRefOpen(!icsOpen), c.icsRef, { 'data-fu-icsref': '' }, <CopdIcsRef lang={lang} />)}
          </>)}
          <p className="text-[11px] text-slate-500">{c.source}</p>
        </div>
      </div>
    </div>
  );
};

// GINA written asthma action plan (green / yellow / red) for the selected inhaler.
// Zone actions follow the GINA 2026 Summary Guide (p.33–34): MART → extra inhalations,
// max total per day; SABA reliever → increase ICS-containing treatment, get care if SABA
// is needed again within 3 hours; get care if not improving after 2–3 days.
const AsthmaActionPlan = ({ med, lang, doseText, reliever, pefBest }) => {
  const s = SHEET_TEXT[lang].plan;
  const isMart = !!med.isMart;
  const isController = med.role.includes('Controller');
  const martMax = med.martMax ? parseInt((med.martMax.match(/\d+/) || [])[0], 10) : 12;
  const best = parseFloat(pefBest);
  const pef = best > 0 ? { hi: Math.round(best * 0.8), lo: Math.round(best * 0.6) } : null;
  const blank = '________________________';
  const controllerText = isController ? `${med.marketName}: ${doseText || blank}` : blank;
  const relieverText = isMart ? med.marketName : (reliever ? reliever.marketName : (!isController && !isExacOnly(med) ? med.marketName : blank));
  const Zone = ({ tone, title, signs, actions }) => {
    const c = { green: ['border-emerald-600', 'bg-emerald-600', 'bg-emerald-50'], yellow: ['border-amber-500', 'bg-amber-500', 'bg-amber-50'], red: ['border-red-600', 'bg-red-600', 'bg-red-50'] }[tone];
    return (
      <div className={`rounded-xl border-2 ${c[0]} overflow-hidden break-inside-avoid`}>
        <div className={`${c[1]} text-white px-3.5 py-1.5 text-[15px] font-extrabold`}>{title}</div>
        <div className={`grid grid-cols-2 gap-3 p-3 ${c[2]}`}>
          <div>
            <div className="text-[12px] font-bold uppercase tracking-wider text-slate-600 mb-1">{s.signs}</div>
            <ul className="list-disc pl-5 text-[13px] leading-snug space-y-0.5">{signs.filter(Boolean).map((x, i) => <li key={i}>{x}</li>)}</ul>
          </div>
          <div>
            <div className="text-[12px] font-bold uppercase tracking-wider text-slate-600 mb-1">{s.whatToDo}</div>
            <ul className="list-disc pl-5 text-[13px] leading-snug space-y-0.5 font-medium">{actions.filter(Boolean).map((x, i) => <li key={i}>{x}</li>)}</ul>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="plan-page bg-white text-slate-900 p-10 flex flex-col gap-3" style={{ width: '794px', fontFamily: "'IBM Plex Sans Thai', 'IBM Plex Sans', sans-serif" }}>
      <div className="flex items-end justify-between gap-4 border-b-2 border-slate-800 pb-2.5">
        <div>
          <h1 className="text-[24px] font-extrabold leading-tight">{s.title}</h1>
          <div className="text-[13px] text-slate-600">{s.sub}</div>
        </div>
        <div className="text-[13px] font-bold text-right">{s.pefBest}: {best > 0 ? `${Math.round(best)} L/min` : '______ L/min'}</div>
      </div>
      <Zone tone="green" title={s.greenTitle}
        signs={[...s.greenSigns, pef && s.pefAbove(pef.hi)]}
        actions={isMart ? [s.martDaily(controllerText), s.martExtra] : [s.dailyController(controllerText), s.useReliever(relieverText)]} />
      <Zone tone="yellow" title={s.yellowTitle}
        signs={[...s.yellowSigns, pef && s.pefBetween(pef.lo, pef.hi)]}
        actions={isMart
          ? [s.martKeep, s.martExtra, s.martMax(martMax), s.ocs, s.seeDoctorMart(martMax)]
          : [s.useReliever(relieverText), s.increaseIcs, s.ocs, s.seeDoctorSaba]} />
      <Zone tone="red" title={s.redTitle}
        signs={[...s.redSigns, pef && s.pefBelow(pef.lo)]}
        actions={[s.call1669, s.relieverWhileWaiting(relieverText), s.sitUp]} />
      <div className="flex gap-4 pt-1 text-[13px]">
        <div className="flex-1 border-b border-slate-400 pb-0.5"><span className="font-bold text-slate-600">{s.doctor}</span></div>
        <div className="w-48 border-b border-slate-400 pb-0.5"><span className="font-bold text-slate-600">{s.reviewDate}</span></div>
      </div>
      <div className="text-[11px] text-slate-400 text-right">{s.source} · {APP_VERSION}</div>
    </div>
  );
};

// COPD action plan: GOLD 2026 self-management (written action plan; exacerbations treated
// with short-acting bronchodilators, prednisone 40 mg for 5 days, antibiotics for 5 days
// when sputum is purulent).
const CopdActionPlan = ({ med, lang, doseText, reliever }) => {
  const s = SHEET_TEXT[lang].copdPlan;
  const isController = med.role.includes('Controller');
  const blank = '________________________';
  const controllerText = isController ? `${med.marketName}: ${doseText || blank}` : blank;
  const relieverText = reliever ? reliever.marketName : (!isController && !isExacOnly(med) ? med.marketName : blank);
  const Zone = ({ tone, title, signs, actions }) => {
    const c = { green: ['border-emerald-600', 'bg-emerald-600', 'bg-emerald-50'], yellow: ['border-amber-500', 'bg-amber-500', 'bg-amber-50'], red: ['border-red-600', 'bg-red-600', 'bg-red-50'] }[tone];
    return (
      <div className={`rounded-xl border-2 ${c[0]} overflow-hidden break-inside-avoid`}>
        <div className={`${c[1]} text-white px-3.5 py-1.5 text-[15px] font-extrabold`}>{title}</div>
        <div className={`grid grid-cols-2 gap-3 p-3 ${c[2]}`}>
          <div>
            <div className="text-[12px] font-bold uppercase tracking-wider text-slate-600 mb-1">{s.signs}</div>
            <ul className="list-disc pl-5 text-[13px] leading-snug space-y-0.5">{signs.map((x, i) => <li key={i}>{x}</li>)}</ul>
          </div>
          <div>
            <div className="text-[12px] font-bold uppercase tracking-wider text-slate-600 mb-1">{s.whatToDo}</div>
            <ul className="list-disc pl-5 text-[13px] leading-snug space-y-0.5 font-medium">{actions.map((x, i) => <li key={i}>{x}</li>)}</ul>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="plan-page bg-white text-slate-900 p-10 flex flex-col gap-3" style={{ width: '794px', fontFamily: "'IBM Plex Sans Thai', 'IBM Plex Sans', sans-serif" }}>
      <div className="border-b-2 border-slate-800 pb-2.5">
        <h1 className="text-[24px] font-extrabold leading-tight">{s.title}</h1>
        <div className="text-[13px] text-slate-600">{s.sub}</div>
      </div>
      <Zone tone="green" title={s.greenTitle} signs={s.greenSigns} actions={[s.dailyController(controllerText), s.useReliever(relieverText), ...s.greenActions]} />
      <Zone tone="yellow" title={s.yellowTitle} signs={s.yellowSigns} actions={[s.moreReliever(relieverText), s.pred, s.abx, s.contact]} />
      <Zone tone="red" title={s.redTitle} signs={s.redSigns} actions={[s.call1669, s.relieverWhileWaiting(relieverText), s.oxygen, s.sitUp]} />
      <div className="flex gap-4 pt-1 text-[13px]">
        <div className="flex-1 border-b border-slate-400 pb-0.5"><span className="font-bold text-slate-600">{s.doctor}</span></div>
        <div className="w-48 border-b border-slate-400 pb-0.5"><span className="font-bold text-slate-600">{s.reviewDate}</span></div>
      </div>
      <div className="text-[11px] text-slate-400 text-right">{s.source} · {APP_VERSION}</div>
    </div>
  );
};

// Shows fixed-width content (e.g. the A4 patient sheet, 794 px) scaled down to fit its container.
const FitWidth = ({ width = 794, children }) => {
  const outer = React.useRef(null), inner = React.useRef(null);
  const [fit, setFit] = useState({ s: 1, h: null });
  useEffect(() => {
    const o = outer.current, i = inner.current;
    if (!o || !i) return undefined;
    const update = () => { const sc = Math.min(1, o.clientWidth / width); setFit({ s: sc, h: Math.ceil(i.offsetHeight * sc) }); };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(o); ro.observe(i);
    return () => ro.disconnect();
  }, [width]);
  return (
    <div ref={outer} data-fit-width style={{ width: '100%', height: fit.h == null ? 'auto' : fit.h, overflow: 'hidden' }}>
      <div ref={inner} style={{ width, transform: `scale(${fit.s})`, transformOrigin: 'top left' }}>{children}</div>
    </div>
  );
};

const PatientSheet = ({ med, lang, condition, doseText, reliever }) => {
  const s = SHEET_TEXT[lang];
  const steps = TECHNIQUE[med.shape] ? TECHNIQUE[med.shape][lang].steps : [];
  const hasIcs = 'ICS' in medComponents(med);
  const isMartUse = med.isMart && condition === 'Asthma';
  const isController = med.role.includes('Controller');
  const martMax = med.martMax ? parseInt((med.martMax.match(/\d+/) || [])[0], 10) : null;
  const exacOnly = isExacOnly(med);
  const role = isMartUse ? s.roleMart : isController ? s.roleController : exacOnly ? s.roleExac : s.roleReliever;
  const relieverName = reliever ? `${reliever.marketName} — ${patientDose(reliever, typeof reliever.doseRange === 'string' ? reliever.doseRange : '', lang)}` : null;
  const line = (label) => (
    <div className="flex items-end gap-2 min-w-0 flex-1">
      <span className="text-[13px] font-bold text-slate-600 whitespace-nowrap">{label}</span>
      <span className="flex-1 border-b border-slate-400 h-5" />
    </div>
  );

  return (
    <div className="bg-white text-slate-900 p-10 flex flex-col gap-3.5" style={{ width: '794px', fontFamily: "'IBM Plex Sans Thai', 'IBM Plex Sans', sans-serif" }}>
      <div className="flex items-start justify-between gap-4 border-b-2 border-slate-800 pb-3 break-inside-avoid">
        <div>
          <h1 className="text-[26px] font-extrabold leading-tight">{s.title}</h1>
          <div className="text-[18px] font-bold mt-1">{med.marketName}</div>
          <div className="text-[13px] text-slate-600">{med.substance}</div>
          <div className="mt-2 inline-block text-[13px] font-bold px-2.5 py-1 rounded-md bg-slate-100 border border-slate-300">{role}</div>
        </div>
        <div className="p-2 rounded-xl border border-slate-200 shrink-0">{medIcon(med, 'w-20 h-20')}</div>
      </div>

      <div className="flex gap-4">{line(s.patient)}<div className="w-40 flex">{line(s.hn)}</div><div className="w-44 flex">{line(s.date)}</div></div>

      <div className="rounded-xl border-2 border-slate-800 px-4 py-3 break-inside-avoid">
        <div className="text-[13px] font-bold uppercase tracking-wider text-slate-600">{s.yourDose}</div>
        <div className="text-[22px] font-extrabold leading-snug mt-0.5">{doseText || '______________________________'}</div>
      </div>

      <div className="break-inside-avoid">
        <h2 className="text-[17px] font-extrabold mb-1.5">{s.howToUse}</h2>
        <ol className="flex flex-col gap-1.5">
          {steps.map((st, i) => (
            <li key={i} className="flex items-start gap-3 text-[14px] leading-snug">
              <span className="shrink-0 w-6 h-6 rounded-full bg-slate-800 text-white text-[12px] font-bold flex items-center justify-center">{i + 1}</span>
              <span>{st}</span>
            </li>
          ))}
        </ol>
      </div>

      {hasIcs && (
        <div className="rounded-xl bg-slate-100 border border-slate-300 px-3.5 py-2.5 text-[14px] leading-snug break-inside-avoid">
          <span className="font-extrabold">{s.afterDose}: </span>{s.rinse}
        </div>
      )}

      <div className="rounded-xl border border-slate-300 px-3.5 py-2.5 text-[14px] leading-snug break-inside-avoid">
        <div className="font-extrabold mb-1">{s.reliefTitle}</div>
        {isMartUse ? (
          <p>{s.martRelief(martMax)}</p>
        ) : (
          <>
            {(isController || exacOnly) && <p>{s.controllerRelief(relieverName)}</p>}
            <p className={isController || exacOnly ? 'mt-1' : ''}>{condition === 'Asthma' ? s.relieverUseAsthma : s.relieverUseCopd}</p>
          </>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 break-inside-avoid">
        <div className="rounded-xl border-2 border-amber-500 bg-amber-50 p-3.5">
          <div className="font-extrabold text-[14px] text-amber-900 mb-1.5">{s.soonTitle}</div>
          <ul className="list-disc pl-5 text-[13px] leading-relaxed text-amber-950 space-y-0.5">
            {(condition === 'Asthma' ? s.soonAsthma : s.soonCopd).map((x, i) => <li key={i}>{x}</li>)}
          </ul>
        </div>
        <div className="rounded-xl border-2 border-red-600 bg-red-50 p-3.5">
          <div className="font-extrabold text-[14px] text-red-800 mb-1.5">{s.urgentTitle}</div>
          <ul className="list-disc pl-5 text-[13px] leading-relaxed text-red-900 space-y-0.5">
            {s.urgent.map((x, i) => <li key={i}>{x}</li>)}
          </ul>
        </div>
      </div>

      <div className="text-[13px] leading-snug break-inside-avoid">
        <div className="font-extrabold text-[14px] mb-1">{s.goodToKnow}</div>
        <ul className="list-disc pl-5 space-y-0.5">
          <li><span className="font-bold">{s.expiry}:</span> {lang === 'th' ? (EXPIRY_TH[med.expiration] || med.expiration) : med.expiration}</li>
          <li>{s.counter}</li>
          <li>{s.bring}</li>
        </ul>
      </div>

      <div className="flex gap-4 pt-1 break-inside-avoid">{line(s.prescriber)}{line(s.hospital)}<div className="w-48 flex">{line(s.contact)}</div></div>
      <div className="text-[11px] text-slate-400 text-right">{s.footer} · {APP_VERSION}</div>
    </div>
  );
};

const PatientSheetModal = ({ med, t, appLang, onClose, onToast }) => {
  const [sheetLang, setSheetLang] = useState('th');
  const [condition, setCondition] = useState(med.indications.includes('Asthma') ? 'Asthma' : 'COPD');
  const levels = icsLevels(med);
  const [level, setLevel] = useState(defaultIcsLevel(med));
  const [doseEdit, setDoseEdit] = useState(null);
  const [relieverId, setRelieverId] = useState('');
  const [busy, setBusy] = useState(false);
  const [withPlan, setWithPlan] = useState(!isExacOnly(med));
  const [pefBest, setPefBest] = useState('');

  useEffect(() => { setDoseEdit(null); }, [sheetLang, level]);

  const reg = level ? regimenAt(med, level) : (typeof med.doseRange === 'object' ? regimenAt(med, defaultIcsLevel(med) || 'medium') : med.doseRange);
  const doseText = doseEdit ?? patientDose(med, reg, sheetLang);
  const relievers = sheetRelievers();
  const reliever = relievers.find(r => String(r.id) === relieverId) || null;
  const needsReliever = (med.role.includes('Controller') || isExacOnly(med)) && !(med.isMart && condition === 'Asthma');
  const sheetProps = { med, lang: sheetLang, condition, doseText, reliever: needsReliever ? reliever : null };
  const showPlan = withPlan;
  const planProps = { med, lang: sheetLang, doseText, reliever: needsReliever ? reliever : null, pefBest };

  const fileBase = `Inhaler_sheet_${med.marketName.replace(/[^a-zA-Z0-9]/g, '_')}`;
  // A4 PDF, one page per part (sheet, action plan): prints from any device, also where the browser cannot print
  const doPdf = async (note) => {
    setBusy('pdf');
    try {
      const el = document.getElementById('patient-sheet-print');
      const canvases = [];
      for (const page of el.children) canvases.push(await elementToCanvas(page, '#ffffff', 900, 2));
      const blob = await canvasesToPdfBlob(canvases);
      const res = await deliverFile(blob, fileBase + '.pdf', await getDownloads());
      // the print-fallback note is two sentences: keep it on screen longer
      if (res === 'saved') { if (typeof note === 'string') onToast(note, 9000); else onToast(t.sheetPdfSaved); }
    } catch (e) {
      console.error('Sheet PDF failed:', e);
      onToast(t.toastFail);
    } finally { setBusy(false); }
  };
  // Print only the sheet: a class on <html> switches on the print rules in the page CSS.
  const doPrint = () => {
    const root = document.documentElement;
    let opened = false, threw = false;
    const mark = () => { opened = true; };
    const cleanup = () => { root.classList.remove('printing-sheet'); window.removeEventListener('beforeprint', mark); };
    root.classList.add('printing-sheet');
    window.addEventListener('beforeprint', mark);
    window.addEventListener('afterprint', cleanup, { once: true });
    try { window.print(); } catch (e) { threw = true; }
    // A sandboxed frame (an embedded page) and some phone browsers ignore print() without any error.
    // No beforeprint event means no print dialog opened: save the A4 PDF instead and say so.
    setTimeout(() => { if (threw || !opened) { cleanup(); doPdf(t.sheetPrintFail); } }, threw ? 0 : 1200);
    setTimeout(cleanup, 60000);
  };
  const doSave = async () => {
    setBusy('png');
    try {
      const el = document.getElementById('patient-sheet-print');
      const blob = await elementToPngBlob(el, '#ffffff', 900);
      if (!blob) throw new Error('no image');
      const res = await deliverFile(blob, fileBase + '.png', await getDownloads());
      if (res === 'saved') onToast(t.sheetSaved);
    } catch (e) {
      console.error('Sheet export failed:', e);
      onToast(t.toastFail);
    } finally { setBusy(false); }
  };

  const seg = (opts, value, onPick) => (
    <div className="flex bg-white rounded-lg border border-slate-200 p-0.5">
      {opts.map(([v, label]) => (
        <button key={v} onClick={() => onPick(v)} aria-pressed={value === v} className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${value === v ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-50'}`}>{label}</button>
      ))}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 print:hidden">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl flex flex-col max-h-[95vh] animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-sky-50/80 rounded-t-2xl shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-sky-100 text-sky-600 rounded-xl"><BookOpen className="w-5 h-5" /></div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 leading-tight">{t.sheetTitle}</h2>
              <p className="text-xs text-slate-500">{t.sheetSub}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-700 hover:bg-white rounded-full transition-colors" aria-label="Close"><X className="w-6 h-6" /></button>
        </div>

        <div className="p-4 sm:p-6 flex-grow overflow-y-auto bg-slate-50 flex flex-col gap-4">
          {/* Controls */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col gap-3 shrink-0">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <div className="flex items-center gap-2"><span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t.sheetLang}</span>{seg([['th', 'ไทย'], ['en', 'English']], sheetLang, setSheetLang)}</div>
              <div className="flex items-center gap-2"><span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t.sheetCondition}</span>{seg([['Asthma', 'Asthma'], ['COPD', 'COPD']], condition, setCondition)}</div>
              {levels.length > 1 && (
                <div className="flex items-center gap-2"><span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t.sheetLevel}</span>{seg(levels.map(l => [l, t.convertLevel[l]]), level, setLevel)}</div>
              )}
            </div>
            <label className="flex flex-col gap-1">
              <span className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                {t.sheetDose}
                {doseEdit !== null && <button onClick={() => setDoseEdit(null)} className="normal-case tracking-normal text-sky-700 hover:underline">{t.sheetReset}</button>}
              </span>
              <textarea rows="2" value={doseText} onChange={(e) => setDoseEdit(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white text-sm text-slate-800 p-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
            </label>
            {needsReliever && (
              <label className="flex flex-col gap-1">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t.sheetReliever}</span>
                <select value={relieverId} onChange={(e) => setRelieverId(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white text-sm text-slate-800 p-2 focus:outline-none focus:ring-2 focus:ring-sky-500">
                  <option value="">{t.sheetNoReliever}</option>
                  {relievers.map(r => <option key={r.id} value={String(r.id)}>{r.marketName} — {typeof r.doseRange === 'string' ? r.doseRange : ''}</option>)}
                </select>
              </label>
            )}
            {(
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 cursor-pointer">
                  <input type="checkbox" checked={withPlan} onChange={(e) => setWithPlan(e.target.checked)} className="w-4 h-4 accent-sky-600" />
                  {condition === 'Asthma' ? t.sheetPlan : t.sheetPlanCopd}
                </label>
                {withPlan && condition === 'Asthma' && (
                  <label className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    {t.sheetPef}
                    <input type="number" min="50" max="900" value={pefBest} onChange={(e) => setPefBest(e.target.value)} placeholder="L/min" className="w-24 rounded-lg border border-slate-200 bg-white text-sm text-slate-800 p-1.5 normal-case tracking-normal" />
                  </label>
                )}
              </div>
            )}
            <div className="flex flex-wrap gap-2 pt-1">
              <button onClick={doPrint} disabled={!!busy} data-sheet-print className="bg-sky-600 hover:bg-sky-500 disabled:bg-slate-400 text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors">{t.sheetPrint}</button>
              <button onClick={doPdf} disabled={!!busy} data-sheet-pdf className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-400 text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors">{busy === 'pdf' ? t.exporting : t.sheetPdf}</button>
              <button onClick={doSave} disabled={!!busy} data-sheet-png className="bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-400 text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors">{busy === 'png' ? t.exporting : t.sheetSave}</button>
            </div>
          </div>

          {/* Preview (kept light in dark mode). shrink-0: a clipped box in a flex column would otherwise be
              squeezed to the space left over, cutting the sheet off instead of letting the panel scroll. */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 light-lock bg-white shrink-0" data-sheet-preview>
            <FitWidth>
              <PatientSheet {...sheetProps} />
              {showPlan && <div className="border-t-4 border-dashed border-slate-300">{condition === 'Asthma' ? <AsthmaActionPlan {...planProps} /> : <CopdActionPlan {...planProps} />}</div>}
            </FitWidth>
          </div>
        </div>
      </div>

      {/* Off-screen copy used for printing and image export */}
      {ReactDOM.createPortal(
        <div id="patient-sheet-print" className="light-lock" style={{ position: 'absolute', left: '-10000px', top: 0, width: '794px', background: '#ffffff' }}>
          <PatientSheet {...sheetProps} />
          {showPlan && (condition === 'Asthma' ? <AsthmaActionPlan {...planProps} /> : <CopdActionPlan {...planProps} />)}
        </div>,
        document.body
      )}
    </div>
  );
};

// =====================================================================
// References
// =====================================================================
const REFERENCES = [
  { key: 'gina', cite: 'Global Initiative for Asthma (GINA). Global Strategy for Asthma Management and Prevention, 2026 update. GINA; 2026.', url: 'https://ginasthma.org/2026-gina-strategy-report/' },
  { key: 'gold', cite: 'Global Initiative for Chronic Obstructive Lung Disease (GOLD). Global Strategy for Prevention, Diagnosis and Management of COPD: 2026 Report. GOLD; 2026.', url: 'https://goldcopd.org/2026-gold-report-and-pocket-guide/' },
  { key: 'nlem', cite: 'คณะกรรมการพัฒนาระบบยาแห่งชาติ. ประกาศคณะกรรมการพัฒนาระบบยาแห่งชาติ เรื่อง บัญชียาหลักแห่งชาติ พ.ศ. 2569 (ลงวันที่ 12 กุมภาพันธ์ 2569). ราชกิจจานุเบกษา เล่ม 143 ตอนพิเศษ 85 ง (30 มีนาคม 2569).', url: 'https://ndp.fda.moph.go.th/nlem/69-1' },
  { key: 'refprice', cite: 'คณะกรรมการพัฒนาระบบยาแห่งชาติ. ประกาศคณะกรรมการพัฒนาระบบยาแห่งชาติ เรื่อง กำหนดราคากลางยา. ฐานข้อมูลราคากลาง (ยา), ศูนย์ข้อมูลข่าวสารด้านเวชภัณฑ์ กระทรวงสาธารณสุข (accessed 7 October 2026).', url: 'https://dmsic.moph.go.th/index/drugsearch/3' },
  { key: 'dhand', cite: 'Dhand R, Duarte AG, Jubran A, Jenne JW, Fink JB, Fahey PJ, Tobin MJ. Dose-response to bronchodilator delivered by metered-dose inhaler in ventilator-supported patients. Am J Respir Crit Care Med. 1996;154(2 Pt 1):388–393.', url: 'https://doi.org/10.1164/ajrccm.154.2.8756811' },
  { key: 'fang', cite: 'Fang TP, Lin HL, Chiu SH, Wang SH, DiBlasi RM, Tsai YH, Fink JB. Optimal connection for tiotropium SMI delivery through mechanical ventilation: an in vitro study. Pharmaceutics. 2020;12(3):291.', url: 'https://doi.org/10.3390/pharmaceutics12030291' },
  { key: 'weers', cite: 'Weers J. Suboptimal inspiratory flow rates with passive dry powder inhalers: big issue or overstated problem? Front Drug Deliv. 2022;2:855234.', url: 'https://doi.org/10.3389/fddev.2022.855234' },
  { key: 'grant', cite: 'Grant AC, Walker R, Hamilton M, Garrill K. The ELLIPTA® dry powder inhaler: design, functionality, in vitro dosing performance and critical task compliance by patients and caregivers. J Aerosol Med Pulm Drug Deliv. 2015;28(6):474–485.', url: 'https://doi.org/10.1089/jamp.2015.1223' },
  { key: 'haikarainen', cite: 'Haikarainen J, Rytilä P, Roos S, Metsärinne S, Happonen A. Dose uniformity of budesonide Easyhaler® under simulated real-life conditions and with low inspiration flow rates. Chron Respir Dis. 2018;15(3):265–271.', url: 'https://doi.org/10.1177/1479972317745733' },
  { key: 'corradi', cite: 'Corradi M, Chrystyn H, Cosio BG, Pirozynski M, Loukides S, Louis R, Spinola M, Usmani OS. NEXThaler, an innovative dry powder inhaler delivering an extrafine fixed combination of beclometasone and formoterol to treat large and small airways in asthma. Expert Opin Drug Deliv. 2014;11(9):1497–1506.', url: 'https://doi.org/10.1517/17425247.2014.928282' },
  { key: 'ghosh', cite: 'Ghosh S, Ohar JA, Drummond MB. Peak inspiratory flow rate in chronic obstructive pulmonary disease: implications for dry powder inhalers. J Aerosol Med Pulm Drug Deliv. 2017;30(6):381–387.', url: 'https://doi.org/10.1089/jamp.2017.1416' },
  { key: 'clark', cite: 'Clark AR, Weers JG, Dhand R. The confusing world of dry powder inhalers: it is all about inspiratory pressures, not inspiratory flow rates. J Aerosol Med Pulm Drug Deliv. 2020;33(1):1–11.', url: 'https://doi.org/10.1089/jamp.2019.1556' },
  { key: 'laube', cite: 'Laube BL, Janssens HM, de Jongh FHC, Devadason SG, Dhand R, Diot P, Everard ML, Horvath I, Navalesi P, Voshaar T, Chrystyn H. What the pulmonary specialist should know about the new inhalation therapies. Eur Respir J. 2011;37(6):1308–1331.', url: 'https://doi.org/10.1183/09031936.00166410' },
  { key: 'wu', cite: 'Wu Y, Zhang J. Standardized inhalation capability assessment: a key to optimal inhaler selection for inhalation therapy. J Transl Intern Med. 2023;11(1):26–29.', url: 'https://doi.org/10.2478/jtim-2022-0073' },
  { key: 'fda', cite: 'สำนักงานคณะกรรมการอาหารและยา. ระบบค้นหาข้อมูลผลิตภัณฑ์ยา (accessed 7 October 2026).', url: 'https://pertento.fda.moph.go.th/FDA_SEARCH_DRUG/SEARCH_DRUG/FRM_SEARCH_DRUG.aspx' },
  { key: 'bts', cite: "O'Driscoll BR, Howard LS, Earis J, Mak V; British Thoracic Society Emergency Oxygen Guideline Group. BTS guideline for oxygen use in adults in healthcare and emergency settings. Thorax. 2017;72(Suppl 1):ii1–ii90.", url: 'https://doi.org/10.1136/thoraxjnl-2016-209729' },
  { key: 'labels', cite: 'US FDA drug labels (openFDA, Drugs@FDA); UK Summaries of Product Characteristics (electronic medicines compendium); EMA European public assessment reports; HPRA (Ireland) SmPCs (accessed 8 October 2026).', url: 'https://open.fda.gov/apis/drug/label/' },
  { key: 'cat', cite: 'Jones PW, Harding G, Berry P, Wiklund I, Chen WH, Kline Leidy N. Development and first validation of the COPD Assessment Test. Eur Respir J. 2009;34(3):648–654.' },
  { key: 'mmrc', cite: 'Bestall JC, Paul EA, Garrod R, Garnham R, Jones PW, Wedzicha JA. Usefulness of the Medical Research Council (MRC) dyspnoea scale as a measure of disability in patients with chronic obstructive pulmonary disease. Thorax. 1999;54(7):581–586.' },
  { key: 'usmani', cite: 'Usmani OS, Lavorini F, Marshall J, Dunlop WCN, Heron L, Farrington E, Dekhuijzen R. Critical inhaler errors in asthma and COPD: a systematic review of impact on health outcomes. Respir Res. 2018;19(1):10.', url: 'https://doi.org/10.1186/s12931-017-0710-y' },
  { key: 'mahler', cite: 'Mahler DA. Peak inspiratory flow rate as a criterion for dry powder inhaler use in chronic obstructive pulmonary disease. Ann Am Thorac Soc. 2017;14(7):1103–1107.' },
  { key: 'spc', cite: 'Manufacturers\' product information (summaries of product characteristics and patient information leaflets) for each listed product.' },
];


// Licensed indications by regulator (TH "-" = no active Thai FDA registration, checked 7 Oct 2026), checked 8 Oct 2026: "th us uk eu", each A (asthma),
// C (COPD), AC (both) or - (no product licensed there). Sources: Thai FDA product
// database; US FDA labels (openFDA, Drugs@FDA); UK SmPCs (medicines.org.uk); EU = EMA
// centrally authorised product, else Irish HPRA SmPC (else another EU national SmPC).
// Strength matters: e.g. US Advair Diskus COPD = 250/50 only, UK Seretide COPD = 500
// Accuhaler only, Relvar 184/22 (200) and Trelegy 184 are not for COPD in UK/EU.
const LABEL_REGIONS = ['th', 'us', 'uk', 'eu', 'jp'];
// Japan: licensed indications from the PMDA package inserts (pmda.go.jp product search by active ingredient,
// 12 Oct 2026; indication section of each insert). A product counts as licensed in Japan when the same brand,
// device and strength is on the Japanese market, often under another name (JP_NAME). Not in Japan: every
// product with no entry (no inhaled product of that ingredient, brand or strength was listed).
// Per strength: Adoair COPD only for 250 Diskus and 125 Aerosol; Relvar and Trelegy COPD only for 100.
const LABELS_JP = {
  1: 'AC', 23: 'AC', 13: 'C', 15: 'AC', 22: 'C', 11: 'C', 519: 'C', 12: 'AC', 103: 'A', 520: 'C', 14: 'C', 522: 'C', 305: 'C', 21: 'C',
  61: 'A', 62: 'AC', 63: 'A', 41: 'A', 42: 'AC', 43: 'A', 24: 'AC', 302: 'A', 72: 'AC', 440: 'C', 303: 'C', 101: 'AC', 102: 'A',
  507: 'A', 508: 'A', 526: 'A', 527: 'A', 201: 'A', 91: 'A', 92: 'A', 19: 'A', 511: 'A', 505: 'A', 506: 'A',
  532: 'AC', 533: 'AC', 534: 'AC', 535: 'A', 536: 'A', 537: 'A', 538: 'A', 539: 'A', 540: 'A', 541: 'A', 542: 'AC', 543: 'AC', 544: 'AC', 545: 'AC', 546: 'A',
};
// Name on the Japanese market (romanised from the PMDA listing)
const JP_NAME = {
  1: 'Sultanol Inhaler 100 μg', 23: 'Atrovent Aerosol 20 μg', 13: 'Spiriva Inhalation Capsules 18 μg', 15: 'Spiriva 2.5 μg Respimat', 22: 'Spiolto Respimat',
  11: 'Anoro Ellipta', 519: 'Encruse 62.5 μg Ellipta', 12: 'Trelegy 100 Ellipta', 103: 'Trelegy 200 Ellipta', 520: 'Eklira 400 μg Genuair',
  14: 'Ultibro Inhalation Capsules', 522: 'Bevespi Aerosphere', 305: 'Seebri Inhalation Capsules 50 μg', 21: 'Breztri Aerosphere',
  61: 'Adoair 100 Diskus', 62: 'Adoair 250 Diskus', 63: 'Adoair 500 Diskus', 41: 'Adoair 50 Aerosol', 42: 'Adoair 125 Aerosol', 43: 'Adoair 250 Aerosol',
  24: 'Serevent 50 Diskus', 302: 'Flutiform 125 Aerosol', 72: 'Symbicort Turbuhaler', 440: 'Oxis 9 μg Turbuhaler', 303: 'Onbrez Inhalation Capsules 150 μg',
  101: 'Relvar 100 Ellipta', 102: 'Relvar 200 Ellipta', 507: 'Arnuity 100 μg Ellipta', 508: 'Arnuity 200 μg Ellipta',
  526: 'Flutide 50 Diskus', 527: 'Flutide 100 Diskus', 201: 'Flutide 50 μg Aerosol', 91: 'Pulmicort 100 μg Turbuhaler', 92: 'Pulmicort 200 μg Turbuhaler',
  19: 'Pulmicort Inhalation Solution 0.25 mg / 0.5 mg', 511: 'Asmanex Twisthaler 200 μg',
  505: 'Alvesco 50 / 100 / 200 μg Inhaler (strengths labelled differently)', 506: 'Alvesco 50 / 100 / 200 μg Inhaler (strengths labelled differently)',
  532: 'Meptin Air 10 μg (100 puffs)', 533: 'Meptin Swinghaler 10 μg (100 inhalations)', 534: 'Meptin Inhalation Solution 0.01% / Unit 0.3 mL / Unit 0.5 mL',
  535: 'Qvar 50 Aerosol', 536: 'Qvar 100 Aerosol', 537: 'Atectura Inhalation Capsules Low Dose', 538: 'Atectura Inhalation Capsules Medium Dose', 539: 'Atectura Inhalation Capsules High Dose',
  540: 'Enerzair Inhalation Capsules Medium Dose', 541: 'Enerzair Inhalation Capsules High Dose', 542: 'BudeForu Inhalation Powder 30 / 60 "Nipro"', 543: 'BudeForu Inhalation Powder 30 / 60 "JG"',
  544: 'BudeForu Inhalation Powder 30 / 60 "MYL"', 545: 'Berotec Aerosol 100', 546: 'Spiriva 1.25 μg Respimat',
};
// Manufacturer of the finished product, read from each product's registration in the Thai FDA register
// (pertento.fda.moph.go.th: foreign manufacturer with the role "finished product", or the Thai licence holder
// for locally made products), checked 11 Oct 2026. Names as registered, in normal capitals; Thai companies
// by their English company names. Two names = two registrations of the same product from different sites.
// Budiair: the register lists no manufacturer; Chiesi is the name on the pack photo.
// No entry = no Thai registration to read it from (never registered, or a generic entry): shown as Unknown.
const MANUFACTURER = (() => {
  const groups = [
    ['Glaxo Wellcome S.A., Spain', [1, 202, 203, 41, 42, 43]],
    ['Glaxo Wellcome Production, France', [201]],
    ['GlaxoSmithKline LLC, USA; Glaxo Wellcome Production, France', [61, 62]],
    ['GlaxoSmithKline LLC, USA', [63, 101, 102, 103, 11]],
    ['Glaxo Operations UK Ltd, UK; GlaxoSmithKline LLC, USA', [12]],
    ['Glaxo Wellcome Operations, UK', [24]],
    ['AstraZeneca AB, Sweden', [71, 72, 31, 91, 92, 440]],
    ['AstraZeneca Dunkerque Production, France', [52, 51, 8, 21]],
    ['AstraZeneca AB, Sweden; AstraZeneca Pty Ltd, Australia', [19]],
    ['Boehringer Ingelheim Pharma GmbH & Co. KG, Germany', [2, 23, 13]],
    ['Boehringer Ingelheim Pharma GmbH & Co. KG, Germany; Boehringer Ingelheim España S.A., Spain', [15, 22]],
    ['Istituto De Angeli S.r.l., Italy; Laboratoire Unither, France', [18]],
    ['Laboratoire Unither, France', [421]],
    ['Chiesi Farmaceutici S.p.A., Italy', [32, 407, 25, 531]],
    ['Otsuka Pharmaceutical Co., Ltd., Japan', [532, 534]], ['Korea Otsuka Pharmaceutical Co., Ltd., Korea', [533]],
    ['Chiesi', [433]],
    ['Siegfried Barbera S.L., Spain', [303, 304, 14, 537, 538, 539, 540, 541]],
    ['Novartis Farmacéutica S.A., Spain', [305]],
    ['Recipharm HC Limited, UK', [302]],
    ['Orion Corporation, Finland', [411, 412, 293, 294]],
    ['Medispray Laboratories Pvt. Ltd., India', [402, 431, 432, 435, 436, 437, 438, 439]],
    ['Cipla Ltd., India', [403, 410, 434, 441]],
    ['Inpac Pharma Co., Ltd., Thailand', [301, 401, 408, 409, 416]],
    ['Jewim Pharmaceutical (Shandong) Co., Ltd., China', [422]],
    ['Laboratorio Aldo-Unión S.L., Spain', [423]],
    ['T.O. Chemicals (1979) Co., Ltd., Thailand', [404]],
    ['Norton (Waterford) Limited, Ireland', [405, 406]],
    ['Neutec Inhaler İlaç San. Tic. A.Ş., Turkey', [413, 414]],
    ['Lupin Limited, India', [415]],
    ['Inter Pharma PCL, Thailand', [424, 420]],
    ['Millimed BFS Co., Ltd., Thailand', [425, 426]],
    ['Greater Pharma Manufacturing Co., Ltd., Thailand', [427]],
    ['L.B.S. Laboratory Co., Ltd., Thailand', [417, 419]],
    ['Biolab Co., Ltd., Thailand', [418]],
    ['3M Health Care Limited, UK', [505, 506]], ['Boehringer Ingelheim Pharma GmbH & Co. KG, Germany', [517]], ['Glaxo Operations UK Limited, UK', [519]],
    ['Industrias Farmaceuticas Almirall, S.A., Spain', [520, 523]], ['The Ritedose Corporation, USA', [521]],
  ];
  const out = {};
  groups.forEach(([name, ids]) => ids.forEach(id => { out[id] = name; }));
  return out;
})();
const makerOf = (med) => MANUFACTURER[med.id] || null;
// Thai licence holder of each product's registration, as named in the Thai FDA register (checked 11-12 Oct 2026).
// [English company name, registered Thai name]. Ikaros Pharmaceutical and Thitiratsanon: English names given by
// the user on 12 Oct 2026. If an English name is ever missing (null), the registered Thai name is shown instead.
// No entry = no Thai registration (never registered in Thailand, or the generic salbutamol nebules entry).
const LICENCE_HOLDER = (() => {
  const groups = [
    [['GlaxoSmithKline (Thailand) Ltd.', 'บริษัท แกล็กโซสมิทไคล์น (ประเทศไทย) จำกัด'], [1, 202, 201, 203, 41, 42, 43, 61, 62, 63, 101, 102, 12, 103, 11, 519]],
    [['Glaxo Wellcome Vidhyasom Ltd.', 'บริษัท แกล็กโซ เวลคัม วิทยาศรม จำกัด'], [24]],
    [['AstraZeneca (Thailand) Ltd.', 'บริษัท แอสตร้าเซนเนก้า (ประเทศไทย) จำกัด'], [71, 72, 31, 52, 51, 91, 92, 19, 8, 440, 21, 505, 506, 520, 523]],
    [['MSD (Thailand) Ltd.', 'บริษัท เอ็มเอสดี (ประเทศไทย) จำกัด'], [511]],
    [['Viatris Pharmaceutical (Thailand) Ltd.', 'บริษัท เวียร์ทริศ ฟาร์มาซูติคอล (ประเทศไทย) จำกัด'], [521]], // English name confirmed by the user on 12 Oct 2026
    [['Boehringer Ingelheim (Thai) Ltd.', 'บริษัท เบอริงเกอร์ อินเกลไฮม์ (ไทย) จำกัด'], [2, 18, 421, 23, 13, 15, 22, 517, 545]],
    [['Pacific Healthcare (Thailand) Co., Ltd.', 'บริษัท แปซิฟิค เฮลธ์แคร์ (ไทยแลนด์) จำกัด'], [32, 407, 25, 433, 531]],
    [['Novartis (Thailand) Ltd.', 'บริษัท โนวาร์ตีส (ประเทศไทย) จำกัด'], [303, 304, 305, 14, 537, 538, 539, 540, 541]],
    [['Thai Otsuka Co., Ltd.', 'บริษัท ไทยโอซูก้า จำกัด'], [532, 533, 534]], [['Bausch & Lomb (Thailand) Ltd.', 'บริษัท บอช แอนด์ ลอมบ์ (ประเทศไทย) จำกัด'], [536]], [['3M Thailand Ltd.', 'บริษัท 3 เอ็ม ประเทศไทย จำกัด'], [535]], // English names rendered from the registered Thai names
    [['Mundipharma (Thailand) Ltd.', 'บริษัท มุนดิฟาร์มา (ประเทศไทย) จำกัด'], [302]],
    [['Orion Pharma Thai Co., Ltd.', 'บริษัท โอไรออน ฟาร์มา ไทย จำกัด'], [411, 412, 293, 294]],
    [['Healol Pharmaceuticals Co., Ltd.', 'บริษัท ฮีลลอล ฟาร์มาซูติคอล จำกัด'], [402, 403, 410, 441]],
    [['Thitiratsanon Co., Ltd.', 'บริษัท ฐิติรัตน์สานนท์ จำกัด'], [432, 435, 436, 437, 438, 439]],
    [['Meda Pharma (Thailand) Co., Ltd.', 'บริษัท เมด้า ฟาม่าร์ (ประเทศไทย) จำกัด'], [431, 434]],
    [['Inpac Pharma Co., Ltd.', 'บริษัท อินแพคฟาร์มา จำกัด'], [301, 401, 408, 409, 416]],
    [['Ikaros Pharmaceutical Co., Ltd.', 'บริษัท อิคารอส ฟาร์มาซูติคัล จำกัด'], [422]],
    [['Greater Pharma Manufacturing Co., Ltd.', 'บริษัท โรงงานเภสัชกรรม เกร๊ทเตอร์ฟาร์ม่า จำกัด'], [423, 427]],
    [['T.O. Chemicals (1979) Co., Ltd.', 'บริษัท ที.โอ. เคมีคอลส์ (1979) จำกัด'], [404]],
    [['Lotus Pharmaceutical (Thailand) Co., Ltd.', 'บริษัท โลตัส ฟาร์มาซูติคอล (ประเทศไทย) จำกัด'], [405, 406]],
    [['Mega Lifesciences PCL', 'บริษัท เมก้า ไลฟ์ไซแอ็นซ์ จำกัด (มหาชน)'], [413, 414, 415]],
    [['Interpharma PCL', 'บริษัท อินเตอร์ ฟาร์มา จำกัด (มหาชน)'], [424, 420]],
    [['Millimed BFS Co., Ltd.', 'บริษัท มิลลิเมด บีเอฟเอส จำกัด'], [425, 426]],
    [['L.B.S. Laboratory Co., Ltd.', 'บริษัท แอล.บี.เอส. แลบบอเรตอรี่ จำกัด'], [417, 419]],
    [['Biolab Co., Ltd.', 'บริษัท ไบโอแลป จำกัด'], [418]],
  ];
  const out = {};
  groups.forEach(([names, ids]) => ids.forEach(id => { out[id] = names; }));
  return out;
})();
// Licence holders outside Thailand, by country, read on 12 Oct 2026. No entry = not looked up or not found
// (shown as Unknown when the product is licensed there).
//  us: application holder in the FDA's Drugs@FDA data (api.fda.gov/drug/drugsfda), under the US brand name
//      (Flovent HFA, Advair, Breo, Pulmicort Flexhaler, Arcapta, Utibron, Stiolto ...).
//  uk: marketing authorisation holder in section 7 of the UK SmPC: 8 read on emc (medicines.org.uk), the rest from
//      the SmPC PDFs on the MHRA products site (products.mhra.gov.uk), one SmPC per product and strength.
//  eu: PA holder in the Irish regulator's published product list (HPRA, assets.hpra.ie/products/xml, 11 Oct 2026),
//      which also lists EU-wide licences. Giona Easyhaler is not licensed in Ireland: its holder is from section 7 of
//      the Swedish SmPC (Lakemedelsverket, docetp.mpa.se, Giona Easyhaler 100/200/400 micrograms per dose).
const HOLDER_ABROAD = (() => {
  const build = (groups) => { const out = {}; groups.forEach(([name, ids]) => ids.forEach(id => { out[id] = name; })); return out; };
  return {
    us: build([
      ['GlaxoSmithKline', [1, 12, 103, 24, 11, 507, 508]],
      ['Glaxo Group Ltd', [201, 202, 203, 41, 42, 43, 61, 62, 63, 101, 102, 526, 527, 528]],
      ['Boehringer Ingelheim', [16, 23, 13, 15, 22, 517, 546]],
      ['Cheplapharm', [91, 92]],
      ['Norton (Waterford)', [261, 504]],
      ['AstraZeneca', [51, 52, 19, 503, 522, 529, 530]],
      ['AstraZeneca AB', [21]],
      ['Novartis', [303, 304, 305, 14]],
      // sponsors as named in Drugs@FDA (12 Oct 2026)
      ['Teva Branded Pharm', [501, 524]], ['Kindeva', [525]], ['Chiesi', [25, 531]], ['Teva Pharm', [512, 513, 514]], ['Lupin', [502]], ['Azurity', [505, 506, 520, 523]],
      ['Organon LLC', [509, 510, 511, 515, 516]], ['Viatris Specialty', [518]], ['Glaxo Group (England)', [519]], ['Mylan Ireland Ltd', [521]],
    ]),
    uk: build([
      ['Azurity Pharmaceuticals Ireland Ltd. / Covis Pharma Europe B.V.', [505, 506, 520, 523]], ['Organon Pharma (UK) Limited', [511]], // two current SmPCs each for Alvesco, Eklira and Duaklir Genuair
      ['GlaxoSmithKline UK', [1, 201, 202, 203, 41, 42, 43, 61, 62, 63, 526, 527, 528]], // SmPC: "Glaxo Wellcome UK Ltd, trading as GlaxoSmithKline UK"; shortened at the user's request
      ['Glaxo Wellcome UK Ltd', [24]],
      ['GlaxoSmithKline UK Limited', [12, 101, 102, 11, 519]],
      ['AstraZeneca UK Limited', [8, 91, 92, 19, 52, 71, 72, 31, 21, 522]],
      ['Boehringer Ingelheim Limited', [23, 421]],
      ['Boehringer Ingelheim International GmbH', [13, 15, 22, 517]],
      ['Chiesi Limited', [32, 33, 407, 25, 531]], ['Novartis Pharmaceuticals UK Limited', [537, 538, 539, 541]], ['Teva UK Limited', [535, 536]],
      ['Napp Pharmaceuticals Limited', [302]],
      ['Orion Corporation', [291, 293, 294]],
      ['Novartis Pharmaceuticals UK Limited', [303, 304, 305, 14]],
      ['Teva UK Limited', [405, 406]],
    ]),
    jp: build([
      ['GlaxoSmithKline K.K.', [1, 11, 519, 12, 103, 61, 62, 63, 41, 42, 43, 24, 101, 102, 507, 508, 526, 527, 201]],
      ['Nippon Boehringer Ingelheim Co., Ltd.', [13, 15, 22, 545, 546]], ['Teijin Pharma Limited', [23, 505, 506]], ['Kyorin Pharmaceutical Co., Ltd.', [520, 302]],
      ['Novartis Pharma K.K.', [14, 305, 303, 537, 538, 539, 540, 541]], ['Otsuka Pharmaceutical Co., Ltd.', [532, 533, 534]], ['Sumitomo Pharma Co., Ltd.', [535, 536]],
      ['Nipro Corporation', [542]], ['Nihon Generic Co., Ltd.', [543]], ['Toa Pharmaceutical Co., Ltd.', [544]], ['AstraZeneca K.K.', [522, 21, 72, 440, 91, 92, 19]], ['Organon K.K.', [511]],
    ]),
    eu: build([
      ['GlaxoSmithKline Trading Services Limited', [519]], ['Boehringer Ingelheim International GmbH', [517]], ['AstraZeneca AB', [522]],
      ['Azurity Pharmaceuticals Ireland Limited', [505, 506]], ['Organon Pharma (Ireland) Limited', [511]], ['Covis Pharma Europe B.V.', [520, 523]], ['Teva B.V.', [513, 514]],
      ['GlaxoSmithKline (Ireland) Limited', [1, 201, 202, 203, 41, 42, 43, 61, 62, 63, 101, 102, 24, 526, 527, 528]],
      ['GlaxoSmithKline Trading Services Limited', [12, 11]],
      ['AstraZeneca AB', [8, 91, 92, 19, 52, 71, 72, 31, 21]],
      ['Boehringer Ingelheim International GmbH', [23, 13, 15, 22]],
      ['Boehringer Ingelheim Ltd', [421]], // Combivent UDVs, withdrawn list
      ['Chiesi Farmaceutici S.p.A.', [32, 33, 407, 25, 531]], ['Norton Waterford', [535, 536]], ['Boehringer Ingelheim Ltd', [545]],
      ['Mundipharma Pharmaceuticals Limited', [302]],
      ['Orion Corporation', [291, 293, 294]],
      ['Novartis Europharm Limited', [303, 304, 305, 14, 537, 538, 539, 541]],
      ['Teva Pharma B.V.', [405, 406]],
    ]),
  };
})();
// Holder shown for one country: Thailand as below; elsewhere the holder if the product is licensed there
// (Unknown if it has not been read), and no line at all where the product is not licensed.
const holderIn = (med, region, t) => {
  if (region === 'th') return holderText(med, t);
  if (statusIn(med, region) === 'never') return null;
  return HOLDER_ABROAD[region][med.id] || t.unknown;
};
// Text under the product name: the licence holder; "not registered" for products never registered in Thailand;
// Unknown only for an entry that is not one registered product.
const holderText = (med, t) => {
  const h = LICENCE_HOLDER[med.id];
  if (h) return (t.isTh ? h[1] : h[0]) || h[1];
  return thaiStatus(med) === 'never' && med.id !== 17 ? t.holderNone : `${t.holderLabel}: ${t.unknown}`;
};
// The holder is the Thai one: other countries may license the product to a different company, so the line
// carries the TH country chip.
// Country chip that carries the registration status there: coloured = registered now, amber with † =
// previously registered (cancelled, expired, withdrawn or discontinued), grey with ⊘ = not registered.
// Thai registrations the register lists as "awaiting status check" (รอตรวจสอบสถานะ): kept as current, with a note.
const TH_AWAITING = { 413: 'October 14, 2026' }; // Xalflu Airmaster 50/100, 2C 15028/66
const thAwaitingNote = (med, t) => (TH_AWAITING[med.id] && thaiStatus(med) === 'current' ? t.thAwaiting(t.isTh ? thaiDate(TH_AWAITING[med.id]) : TH_AWAITING[med.id]) : null);
const StatusChip = ({ med, r, t }) => {
  const st = statusIn(med, r);
  if (st === 'past') {
    const gone = r === 'th' && thCancelled(med);
    const title = gone ? t.thGoneTitle(gone) : r === 'us' ? t.usGoneTitle : r === 'eu' ? t.euGoneTitle(EU_WITHDRAWN[med.id]) : t.countryNames[r];
    return (
      <span title={title} data-country={r} data-licensed="0" data-status="past" data-holder-country {...(r === 'th' ? { 'data-th-cancelled': '1' } : {})}
        className="shrink-0 text-[10px] font-bold rounded border px-1 py-px leading-none whitespace-nowrap border-amber-300 bg-amber-50 text-amber-800">
        {t.countryCodes[r]} †
      </span>
    );
  }
  const ind = st === 'current' ? licenceIn(med, r) : null;
  const awaiting = r === 'th' ? thAwaitingNote(med, t) : null;
  const title = (ind ? `${t.countryNames[r]}: ${ind.map(x => t.countryInd[x]).join(', ')}` : r === 'th' ? t.thNever : t.countryNotLicensed(t.countryNames[r])) + (awaiting ? '\n' + awaiting : '');
  return (
    <span title={title} data-country={r} data-licensed={ind ? '1' : '0'} data-status={st} data-holder-country
      className={`shrink-0 text-[10px] font-bold rounded border px-1 py-px leading-none whitespace-nowrap ${ind ? COUNTRY_COLORS[r].chip : 'border-slate-200 text-slate-400'}`}>
      {t.countryCodes[r]}{ind ? '' : ' ⊘'}{awaiting ? ' ?' : ''}
    </span>
  );
};
// Country block on cards and list rows. One line per country selected in the Countries filter where the product
// is or was registered: status chip, licence holder there, and on the Thailand line the NLEM type. The other
// chips sit on one last row, with any extra controls (children): a selected country where the product is not
// registered (grey), and any unselected country where it is or was registered. An unselected country where it
// was never registered gets no chip (the detail view lists all five). With holders hidden, every chip is on that row.
const CountryLines = ({ med, t, regions = ['th'], showHolder = true, className = '', listRow = false, children = null }) => {
  const all = LABEL_REGIONS.map(r => [r, statusIn(med, r)]);
  const lined = showHolder ? all.filter(([r, st]) => regions.includes(r) && st !== 'never') : [];
  const rest = all.filter(([r, st]) => !lined.some(([x]) => x === r) && (st !== 'never' || regions.includes(r)));
  // NLEM is Thailand's list: its type sits next to the TH chip, and only while Thailand is selected
  const nlem = (r, st) => (r === 'th' && st !== 'never' && regions.includes('th') ? <NlemBadge med={med} t={t} compact={true} /> : null);
  return (
    <div className={`flex flex-col gap-1 min-w-0 ${className}`} data-countries {...(listRow ? { 'data-list-countries': '' } : {})}>
      {lined.length > 0 && (
        <div className="flex flex-col gap-1 min-w-0" title={holderTitle(med, t)} data-holder>
          {lined.map(([r, st]) => (
            <p key={r} className={`flex flex-wrap items-center gap-x-1.5 gap-y-0.5 min-w-0 text-slate-500 font-medium leading-snug`} data-holder-line={r}>
              <StatusChip med={med} r={r} t={t} />
              <span className="break-words min-w-0" data-holder-name>{holderIn(med, r, t) || t.unknown}</span>
              {nlem(r, st)}
            </p>
          ))}
        </div>
      )}
      {(rest.length > 0 || children) && (
        <div className={`flex flex-wrap items-center gap-1 min-w-0`} data-country-rest>
          {rest.map(([r, st]) => <React.Fragment key={r}><StatusChip med={med} r={r} t={t} />{nlem(r, st)}</React.Fragment>)}
          {children}
        </div>
      )}
    </div>
  );
};
const holderTitle = (med, t) => t.holderTitle + (makerOf(med) ? `\n${t.makerLabel}: ${makerOf(med)}` : '');
// One colour per country, used by the filter toggle (on / off) and the card chips.
const COUNTRY_COLORS = {
  th: { on: 'bg-emerald-600 text-white shadow-sm', off: 'text-emerald-700 hover:bg-emerald-50', chip: 'border-emerald-200 bg-emerald-50 text-emerald-700' },
  us: { on: 'bg-blue-600 text-white shadow-sm', off: 'text-blue-700 hover:bg-blue-50', chip: 'border-blue-200 bg-blue-50 text-blue-700' },
  uk: { on: 'bg-rose-600 text-white shadow-sm', off: 'text-rose-700 hover:bg-rose-50', chip: 'border-rose-200 bg-rose-50 text-rose-700' },
  jp: { on: 'bg-violet-600 text-white shadow-sm', off: 'text-violet-700 hover:bg-violet-50', chip: 'border-violet-200 bg-violet-50 text-violet-700' },
  eu: { on: 'bg-amber-500 text-white shadow-sm', off: 'text-amber-700 hover:bg-amber-50', chip: 'border-amber-200 bg-amber-50 text-amber-800' },
};
const LABELS = {
  1: 'AC AC AC AC',  301: 'AC - - -',     8: '- - A AC',      2: 'AC - - -',      // Ventolin, Aerotamol, Bricanyl, Berodual MDI
  16: '- C - -',     23: '- C AC AC',                                            // Combivent Respimat, Atrovent
  201: '- A A AC',   202: 'A A A AC',    203: '- A A AC',                        // Flixotide (US Flovent HFA; IE SmPC 2026 adds COPD)
  91: '- A A AC',    92: '- A A AC',     261: '- A - -',                         // Pulmicort Turbuhaler (US Flexhaler; IE SmPC adds COPD), QVAR RediHaler
  41: 'AC A A A',    42: 'AC A A A',     43: 'AC A A A',                         // Seretide Evohaler (US Advair HFA)
  61: 'AC A A A',    62: 'AC AC A A',    63: 'AC A AC AC',                       // Seretide Accuhaler (US Advair Diskus)
  51: '- A - -',     52: 'AC AC C C',                                            // Symbicort Rapihaler (UK/EU pMDI: COPD only)
  71: 'A - A A',     72: 'AC - AC AC',   31: 'AC - AC AC',                       // Symbicort Turbuhaler 100/6, 200/6, 400/12
  32: 'AC - AC AC',  33: '- - A A',      302: '- - A A',                         // Foster 100/6, 200/6, Flutiform
  101: 'AC AC AC AC', 102: 'AC A A A',                                           // Relvar (US Breo)
  291: '- - AC AC',  293: '- - A A',     294: 'A - A A',                         // Bufomix (UK Fobumix), Giona 100/200 (UK Easyhaler Budesonide)
  21: 'C C C C',     25: 'AC A AC AC',   12: 'AC AC C C',    103: 'A A - -',     // Breztri (EU Trixeo), Trimbow 87/5/9, Trelegy 100, 200
  24: '- AC AC AC',  303: '- C C C',     304: '- C C C',                         // Serevent, Onbrez (US Arcapta, discontinued)
  13: 'C C C C',     15: 'AC C AC AC',   305: '- C C C',                         // Spiriva HandiHaler, Respimat 2.5 (US asthma = 1.25 mcg), Seebri
  11: 'C C C C',     14: '- C C C',      22: 'C C C C',                          // Anoro, Ultibro, Spiolto (US Stiolto)
  17: 'AC AC AC AC', 18: 'AC - - -',     19: 'AC A A A',                         // salbutamol nebules, Berodual solution, Pulmicort Respules
  // MIMS Thailand brands, Thai FDA register checked 9 Oct 2026 (UK/EU only where the same product is licensed there)
  401: 'A - - -',   402: 'A - - -',     403: 'A - - -',     404: 'A - - -',     // Aeronide, Budecort-200, Budecort Respules, Pulvisonide
  405: 'AC - AC AC', 406: 'AC - AC AC', 407: 'AC - AC AC',                     // DuoResp Spiromax, Foster (UK Fostair) NEXThaler
  408: 'AC - - -',  409: 'AC - - -',    410: 'AC - - -',                        // Aerotide 125/250, Seroflo 125
  411: 'AC - - -',  412: 'AC - - -',    413: 'AC - - -',    414: 'AC - - -',    // Salflumix Easyhaler, Xalflu Airmaster
  415: 'C - - -',   416: 'AC - - -',    421: 'AC - C -',                        // Tropoair, Aerobidol, Combivent UDV (UK UDVs: COPD)
  417: 'AC - - -',  418: 'AC - - -',    419: 'AC - - -',    420: 'AC - - -',    // Iperol, Punol, Iperol Forte, Inhalex Forte
  422: 'AC - - -',  423: 'AC - - -',    424: 'AC - - -',    425: 'AC - - -',    426: 'AC - - -', 427: 'AC - - -', // Salvo, Buto-Asma, Asmasal SDU, Salda, Salda Forte, Venterol
  // US products added 12 Oct 2026. US: current label (DailyMed) and Drugs@FDA status. UK: SmPC listed on the MHRA products site.
  // EU: Irish HPRA list (incl. EU-wide licences). TH: Thai FDA register (only Yupelri is registered now).
  501: '- AC - -',  502: '- AC - -',    503: '- A - -',     504: '- A - -',     // ProAir RespiClick, Xopenex HFA, Airsupra, QVAR RediHaler 80
  505: '- A A A',   506: '- A A A',     507: '- A - -',     508: '- A - -',     // Alvesco 80/160 (UK, IE: same name), Arnuity Ellipta
  509: '- A - -',   510: '- A - -',     511: '- A A A',                         // Asmanex HFA; Asmanex Twisthaler (UK, IE: 200 mcg delivered dose)
  512: '- A - -',   513: '- A - A',     514: '- A - A',                         // AirDuo RespiClick (EU: Seffalair Spiromax 12.75/100 and 12.75/202)
  515: '- A - -',   516: '- A - -',     517: '- C C C',     518: '- C - -',     // Dulera, Striverdi Respimat, Perforomist
  519: '- C C C',   520: '- C C C',     521: 'C C - -',     522: '- C C C',     523: '- C C C', // Incruse, Tudorza (Eklira Genuair), Yupelri, Bevespi, Duaklir (Genuair)
  524: '- AC - -',  525: '- AC - -',    526: '- A A A',     527: '- A A A',     528: '- A A A', // ProAir HFA, Proventil HFA, Flovent Diskus (UK Flixotide Accuhaler: asthma; IE Flixotide Diskus: indication not read, shown as asthma)
  529: '- A - -',   530: '- AC - -',                                             // Symbicort Aerosphere (FDA label, Apr 2026)
  531: 'A A A A',                                                                // Trimbow 172/5/9 (TH 2C 9/67; UK PLGB 08829/0199; EU/1/17/1208/006-009; US 172/4.9/10.6)
  // products added from the Japanese market (Japan itself is in LABELS_JP); Thai, UK (MHRA) and Irish/EU checks 12 Oct 2026
  532: '- - - -',   533: '- - - -',     534: '- - - -',     545: '- - - -',     // Meptin Air / Swinghaler / solution, Berotec (earlier Thai registrations: TH_CANCELLED)
  535: '- - A -',   536: '- - A -',                                             // Qvar 50 / 100 Aerosol (UK Qvar Aerosol; IE withdrawn 2017)
  537: '- - A A',   538: '- - A A',     539: '- - A A',     540: '- - - -',     541: '- - A A', // Atectura, Enerzair (UK and EU: Enerzair 114/46/136 only)
  542: '- - - -',   543: '- - - -',     544: '- - - -',     546: '- A - -',     // BudeForu generics, Spiriva Respimat 1.25 (US: asthma)
  // MIMS Thailand brands whose Thai registration is cancelled (TH_CANCELLED): no current licence anywhere checked
  431: '- - - -',   432: '- - - -',     433: '- - - -',     434: '- - - -',     435: '- - - -', 436: '- - - -', 437: '- - - -', 438: '- - - -', 439: '- - - -', 440: '- - - -', 441: '- - - -',
};
const US_DISCONTINUED = new Set([303, 304, 305, 14]); // Neohaler versions discontinued in the US
// Once sold in Thailand, but no current Thai FDA registration (Thai FDA register checked 9 Oct 2026):
// shown in the Thailand view with a "TH †" chip (hidden by the filter), never suggested by the guides. kind: cancelled,
// expired, or smp (new-drug safety-monitoring registration ended with no full registration).
const TH_CANCELLED = {
  8: { lic: '1C 110/46', date: 'April 9, 2013' },          // Bricanyl Turbuhaler 0.5 mg
  23: { lic: '1C 138/46', date: 'July 8, 2016' },          // Atrovent metered aerosol
  201: { lic: '1C 19/47', date: 'February 15, 2010' },     // Flixotide Evohaler 50
  203: { lic: '1C 24/51', date: 'January 31, 2017' },      // Flixotide Evohaler 250 (latest registration)
  91: { lic: '1C 3/36', date: 'April 17, 2019' },          // Pulmicort Turbuhaler 100
  92: { lic: '1C 4/36', date: 'October 12, 2024', kind: 'expired' }, // Pulmicort Turbuhaler 200
  51: { lic: '2C 4/59', date: 'April 4, 2019' },           // Symbicort Rapihaler 80/4.5
  302: { lic: '2C 55/59', date: 'March 31, 2023' },        // Flutiform 125/5
  293: { lic: '1C 73/62', date: 'August 30, 2024' },       // Giona Easyhaler 100
  24: { lic: '1C 25/40', date: 'December 28, 2006' },      // Serevent Accuhaler
  303: { lic: '1C 70/54', date: 'November 6, 2024' }, 304: { lic: '1C 71/54', date: 'November 6, 2024' }, // Onbrez (safety-monitoring registration ended 28 Feb 2019, full registration cancelled 2024)
  305: { lic: '1C 21/57', date: 'July 21, 2022' },         // Seebri (safety-monitoring registration ended 22 Sep 2017, full registration cancelled 2022)
  14: { lic: '2C 27/58', date: 'September 15, 2025' },     // Ultibro Breezhaler
  505: { lic: '1C 21/60', date: 'July 10, 2020' }, 506: { lic: '1C 22/60', date: 'July 10, 2020' }, // Alvesco 80 / 160 Inhaler
  511: { lic: '1C 48/55', date: 'May 8, 2018' },            // Asmanex Twisthaler 200 mcg (latest registration)
  517: { lic: '1C 103/59', date: 'September 30, 2021' },    // Striverdi Respimat
  519: { lic: '1C 37/60', date: 'October 24, 2025' },       // Incruse Ellipta
  520: { lic: '1C 20/60', date: 'September 30, 2020' },     // Eklira Genuair (US: Tudorza Pressair)
  523: { lic: '2C 2/61', date: 'February 10, 2021' },       // Duaklir Genuair (US: Duaklir Pressair)
  532: { lic: '1C 156/33', date: 'April 9, 2013' }, 533: { lic: '1C 219/59', date: 'June 10, 2022' }, 534: { lic: '1C 158/33', date: 'April 9, 2013' }, // Meptin Air, Swinghaler, Inhalation Solution
  535: { lic: '1C 184/43', date: 'May 3, 2005' }, 536: { lic: '1C 99/58', date: 'April 17, 2019' }, // Qvar 50 / 100 Inhaler
  537: { lic: '2C 15061/65', date: 'June 30, 2026' }, 538: { lic: '2C 15062/65', date: 'June 30, 2026' }, 539: { lic: '2C 15063/65', date: 'June 30, 2026' }, // Atectura Breezhaler
  540: { lic: '2C 15067/65', date: 'June 30, 2026' }, 541: { lic: '2C 15068/65', date: 'June 30, 2026' }, // Enerzair Breezhaler
  545: { lic: '1C 116/35', date: 'April 3, 2006' },         // Berotec 100 Metered Dose Inhaler
  431: { lic: '1C 39/63', date: 'July 14, 2023' }, 432: { lic: '1C 267/51', date: 'August 14, 2020' }, // BudeSpray-100 / -200 HFA
  433: { lic: '1C 176/49', date: 'February 28, 2011' },    // Budiair
  434: { lic: '1C 40/63', date: 'July 14, 2023' },         // Bunase Respules
  435: { lic: '1C 224/52', date: 'October 21, 2019' }, 436: { lic: '1C 202/51', date: 'May 5, 2014' },
  437: { lic: '1C 223/52', date: 'May 5, 2014' }, 438: { lic: '1C 225/52', date: 'September 30, 2021' }, // Beclocip 50-250 HFA
  439: { lic: '2C 9/63', date: 'August 31, 2023' },        // Beclosal HFA
  440: { lic: '1C 226/41', date: 'January 12, 2007' },     // Oxis Turbuhaler
  441: { lic: '1C 42/64', date: 'August 30, 2024' },       // Asthalin
};
const thCancelled = (d) => (!licenceIn(d, 'th') && TH_CANCELLED[d.id]) || null;
// When each product's data was last verified. Thai FDA register: 7 Oct 2026 for the original list,
// re-checked 9 Oct 2026 for the brands below and for every product added from MIMS (ids >= 400).
// Labels (licensed indications by country): 8 Oct 2026, MIMS additions 9 Oct. National reference
// prices: 7 Oct 2026, MIMS additions 9 Oct.
const RECHECKED_9_OCT = new Set([8, 16, 23, 201, 202, 203, 91, 92, 19, 261, 51, 52, 71, 72, 31, 32, 33, 302, 291, 293, 294, 24, 303, 304, 305, 14, 12, 103]);
const lastChecked = (d) => {
  // US products added 12 Oct 2026: registers and labels read that day; no Thai price recorded
  if (d.id >= 500) return { reg: 'October 12, 2026', label: 'October 12, 2026', price: null };
  const priced = d.priceLevel != null; // no reference price: nothing to date
  const added = d.id >= 400;
  return {
    reg: added || RECHECKED_9_OCT.has(d.id) ? 'October 9, 2026' : 'October 7, 2026',
    label: added ? 'October 9, 2026' : 'October 8, 2026',
    price: !priced ? null : added ? 'October 9, 2026' : 'October 7, 2026',
  };
};
const shortDate = (d, t) => (t.isTh ? thaiDate(d) : d.replace(/^(\w{3})\w* (\d+), (\d{4})$/, '$2 $1 $3'));
const CheckedLine = ({ med, t }) => {
  const c = lastChecked(med);
  return (
    <p className="text-[10px] leading-snug text-slate-400 pt-1.5" data-checked title={t.checkedTitle}>
      {t.checkedLabel}: {t.checkedReg} {shortDate(c.reg, t)} · {t.checkedLabelSrc} {shortDate(c.label, t)}{c.price && <> · {t.checkedPrice} {shortDate(c.price, t)}</>}
    </p>
  );
};
// Product detail view: everything known about one product on one sheet, including what the cards only hint at
// (registration detail and dates, licence holders, manufacturer, pack, expiry, spacer, ventilator, last checks).
// Key to the chips, marks and colours on cards and list rows (opened from the Key button beside the result count).
const LegendModal = ({ t, onClose }) => {
  const section = (title, children, attrs = {}) => (
    <section className="bg-slate-50 rounded-xl border border-slate-200 p-3 sm:p-4" {...attrs}>
      <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">{title}</h3>
      <div className="flex flex-col">{children}</div>
    </section>
  );
  const row = (sample, text, key) => (
    <div key={key} className="flex flex-wrap items-center gap-x-2.5 gap-y-1 py-1.5 border-b border-slate-200 last:border-b-0 text-xs min-w-0">
      <span className="shrink-0 inline-flex items-center gap-1 min-w-[44px]">{sample}</span>
      <span className="text-slate-600 font-medium leading-snug break-words min-w-0 flex-1 basis-40">{text}</span>
    </div>
  );
  const chip = (cls, text, key) => <span key={key} className={`text-[10px] font-bold rounded border px-1 py-px leading-none whitespace-nowrap ${cls}`}>{text}</span>;
  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 print:hidden" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }} data-legend-modal>
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl flex flex-col max-h-[95vh] animate-in fade-in zoom-in-95 duration-200" role="dialog" aria-modal="true" aria-label={t.legendTitle}>
        <div className="flex items-start justify-between gap-3 p-4 sm:p-5 border-b border-slate-100 bg-slate-50 rounded-t-2xl shrink-0">
          <div className="min-w-0">
            <h2 className="text-lg font-extrabold text-slate-800 leading-tight">{t.legendTitle}</h2>
            <p className="text-xs text-slate-500 mt-0.5">{t.legendSub}</p>
          </div>
          <button onClick={onClose} className="p-2 -m-1 text-slate-400 hover:text-slate-700 hover:bg-white rounded-full transition-colors shrink-0" aria-label={t.detailClose}><X className="w-5 h-5" /></button>
        </div>
        <div className="p-3 sm:p-5 flex-grow overflow-y-auto flex flex-col gap-3 bg-white">
          {section(t.legendReg, <>
            {row(chip(COUNTRY_COLORS.th.chip, t.countryCodes.th), t.legendRegNow, 'now')}
            {row(chip('border-amber-300 bg-amber-50 text-amber-800', `${t.countryCodes.th} †`), t.legendRegPast, 'past')}
            {row(chip('border-slate-200 text-slate-400', `${t.countryCodes.th} ⊘`), t.legendRegNever, 'never')}
            {row(LABEL_REGIONS.map(r => chip(COUNTRY_COLORS[r].chip, t.countryCodes[r], r)), t.legendCountries, 'codes')}
          </>, { 'data-legend-reg': '' })}
          {section(t.legendNlem, <>
            <div className="flex flex-wrap gap-1.5 py-1.5">
              {['b', 's', 'ex', 'none'].map(k => <span key={k} className={`text-[10px] font-bold rounded border px-1.5 py-0.5 whitespace-nowrap ${NLEM_STYLE[k]}`}>{t.nlemLabel[k]}</span>)}
            </div>
            <p className="text-xs text-slate-600 font-medium leading-snug break-words">{t.nlemTitle}</p>
            <p className="text-xs text-slate-500 leading-snug break-words mt-0.5">{t.legendNlemNote}</p>
          </>, { 'data-legend-nlem': '' })}
          {section(t.legendPrice, <>
            {row(<><PriceTag med={{ priceLevel: 1 }} t={t} /><span className="text-slate-400">–</span><PriceTag med={{ priceLevel: 4 }} t={t} /></>, t.priceDisclaimer, 'levels')}
            {row(<span className="font-bold text-slate-400">{t.unknown}</span>, t.priceUnknownNote, 'est')}
          </>, { 'data-legend-price': '' })}
          {section(t.legendClass, ['ICS', 'LABA', 'LAMA', 'SABA', 'SAMA'].map(c => row(<span className={`font-extrabold ${getClassColor(c)}`}>{c}</span>, t.legendClassNames[c], c)), { 'data-legend-class': '' })}
          {section(t.legendDevice, ['MDI', 'DPI', 'SMI', 'Nebulizer'].map(d => row(<span className="text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider bg-slate-200 text-slate-700">{d}</span>, t.legendDeviceNames[d], d)), { 'data-legend-device': '' })}
          {section(t.legendBadges, <>
            {row(<ExtraFineBadge t={t} compact={true} />, t.legendExtraFine, 'xf')}
            {row(<span className="text-[10px] font-bold px-1.5 py-0.5 rounded border border-amber-200 bg-amber-50 text-amber-700 inline-flex items-center gap-1 whitespace-nowrap"><Sparkles className="w-2.5 h-2.5" /> {t.martApproved}</span>, t.legendMart, 'mart')}
            {row(<span className="text-[10px] font-bold rounded border px-1.5 py-0.5 inline-flex items-center whitespace-nowrap border-rose-200 bg-rose-50 text-rose-700">{t.exacUse}</span>, t.exacUseNote, 'exac')}
            {row(<AlertTriangle className="w-4 h-4 text-orange-600" />, `${t.cautionsTitle}: ${t.legendCautions}`, 'caution')}
            {row(<NaIcon className="w-7 h-7" />, t.detailNoPicture, 'na')}
            {row(<span className="w-5 h-5 rounded bg-slate-400 inline-block" aria-hidden="true" />, `${t.colourUnknown}: ${t.legendColour}`, 'colour')}
            {row(<span className="font-bold text-slate-700">{t.unknown}</span>, t.legendUnknown, 'unknown')}
          </>, { 'data-legend-badges': '' })}
        </div>
        <div className="flex items-center justify-end gap-2 p-3 sm:p-4 border-t border-slate-100 shrink-0">
          <button onClick={onClose} className="px-4 py-2 rounded-lg text-xs font-bold bg-slate-800 text-white hover:bg-slate-700 transition-colors">{t.detailClose}</button>
        </div>
      </div>
    </div>
  );
};
// ---- Sources shown in the detail view ----
// Search words checked on 13 Oct 2026: a search of that register for the word returns this product (same active
// substances). US = DailyMed, UK = MHRA Products, EU = the Irish HPRA list. A product with no word here gets the
// register's front page instead (its name differs in that country, or the register returned nothing).
const SRC_TERM = (() => {
  const src = {
    us: { 'Ventolin': [1], 'Anoro': [11], 'Trelegy': [12, 103], 'Spiriva': [13, 15, 546], 'Combivent': [16], 'Salbutamol': [17], 'Pulmicort': [19, 91, 92], 'Breztri': [21], 'Stiolto Respimat': [22], 'Atrovent': [23], 'Serevent': [24], 'Advair HFA': [41, 42, 43], 'Symbicort': [51, 52, 529, 530], 'Advair Diskus': [61, 62, 63], 'Breo Ellipta': [101, 102], 'Flovent HFA': [201, 202, 203], 'QVAR': [261, 504], 'ProAir': [501, 524], 'Xopenex': [502], 'Airsupra': [503], 'Alvesco': [505, 506], 'Arnuity': [507, 508], 'Asmanex': [509, 510, 511], 'AirDuo': [512, 513, 514], 'Dulera': [515, 516], 'Striverdi': [517], 'Perforomist': [518], 'Incruse': [519], 'Tudorza': [520], 'Yupelri': [521], 'Bevespi': [522], 'Duaklir': [523], 'Proventil': [525], 'Flovent': [526, 527, 528] },
    uk: { 'Ventolin': [1], 'Bricanyl': [8], 'Anoro': [11], 'Trelegy': [12], 'Spiriva': [13, 15], 'Ultibro': [14], 'Pulmicort': [19, 91, 92], 'Spiolto': [22], 'Atrovent': [23], 'Serevent': [24], 'Trimbow': [25, 531], 'Symbicort': [31, 52, 71, 72], 'Seretide': [41, 42, 43, 61, 62, 63], 'Relvar': [101, 102], 'Flixotide': [201, 202, 203], 'Flutiform': [302], 'Onbrez': [303, 304], 'Seebri': [305], 'DuoResp': [405, 406], 'Combivent': [421], 'Alvesco': [505, 506], 'Asmanex': [511], 'Striverdi': [517], 'Incruse': [519], 'Bevespi': [522], 'Duaklir': [523], 'Qvar': [535, 536], 'Atectura': [537, 538, 539], 'Enerzair': [541] },
    eu: { 'Ventolin': [1], 'Bricanyl': [8], 'Anoro': [11], 'Trelegy': [12], 'Spiriva': [13, 15], 'Ultibro': [14], 'Salbutamol': [17], 'Pulmicort': [19, 91, 92], 'Spiolto': [22], 'Atrovent': [23], 'Serevent': [24], 'Trimbow': [25, 531], 'Symbicort': [31, 52, 71, 72], 'Seretide': [41, 42, 43, 61, 62, 63], 'Relvar': [101, 102], 'Flixotide': [201, 202, 203], 'Bufomix': [291], 'Flutiform': [302], 'Onbrez': [303, 304], 'Seebri': [305], 'DuoResp': [405, 406], 'Combivent': [421], 'Alvesco': [505, 506], 'Asmanex': [511], 'Striverdi': [517], 'Incruse': [519], 'Bevespi': [522], 'Duaklir': [523], 'Qvar': [535, 536], 'Atectura': [537, 538, 539], 'Enerzair': [541], 'Berotec': [545] },
  };
  const out = {};
  for (const r in src) { out[r] = {}; for (const q in src[r]) src[r][q].forEach(id => { out[r][id] = q; }); }
  return out;
})();
// Each product's own record, checked on 13 Oct 2026. th: the Thai FDA register's record code (matched by registration
// number, or by name where the register has one current registration). us: the brand owner's label on DailyMed (set id;
// never a repackager's). eu: the licence number on the Irish HPRA list, which the list search returns as one record.
// A product missing here has no single record that could be matched with certainty and keeps the search link.
const SRC_RECORD = (() => {
  const us = { 'd92c5d6b-ff10-4087-36a2-1cfc464cb967': [1], '2dbd0671-c565-40c5-bf0f-e324db26799c': [11], 'b5a81d5a-4648-4c7a-951d-33c014a63c7e': [12, 103], '820839ef-e53d-47e8-a3b9-d911ff92e6a9': [13], '7b656b14-fcaa-2741-f6f0-e0be48971c02': [15, 546], '9832312e-0310-4ab6-8501-afa976fc7eb2': [16], '33cd9834-76df-4f26-3fa2-aab6b9eee8f2': [19], '715433dc-cb2b-43ea-b6df-c5b4177adc6c': [21], '01e15aee-40e0-23f3-537f-c96dd63e2cb1': [22], '170e98ef-5560-4068-be7d-e649068eb884': [23], '12d9728e-6b5c-4aee-bfb0-745e542ed2e4': [24], 'dfaca6f9-3277-47b2-319d-1377917cb54c': [41, 42, 43], 'fafa4cf1-99c2-43d5-73ad-51f256de3be0': [51, 52], '4eeb5f6a-593f-4a9e-9692-adefa2caf8fc': [61, 62, 63], '96428df1-ea05-431a-98d3-1ec2c4b63878': [101, 102], 'cada897a-264e-450d-ae00-36e7fe747080': [261, 504], '9324e2eb-26fd-4f14-9f10-e5aa467306f4': [501], '70a35706-d7a8-4a48-98c6-1cab1c42fe8d': [502], 'e60aa9f9-5139-44df-b886-ebddc3c7eb13': [503], '9f6112fb-78ef-43cf-8ae3-36370eb45468': [505, 506], '50f193ee-1691-486d-9370-a664df63695c': [507, 508], '0c6d63da-41bc-4894-bead-198e66c848ac': [509, 510], '10b36fb2-6b0d-4f20-b197-3564d6f594b9': [511], '9c122b91-a11f-49ca-80bb-3eec5112db87': [512, 513, 514], '8f399784-f257-4f31-b3dc-368bf2a1864d': [515, 516], '5d9a5433-857e-44ea-b3d6-2a400ca0cef5': [517], 'fb2fe258-fe2e-47f6-8adf-ca75bf6f90af': [518], 'dbb64747-1505-49d7-9a33-99dd402e96d3': [519], '6f92cceb-a63f-4470-99b6-56179d98f10f': [520], '6dfebf04-7c90-436a-9b16-750d3c1ee0a6': [521], 'ae02436e-9528-490e-a844-0c0f6f2843f9': [522], '2eba3089-28b4-4190-9fba-2511246cfd16': [523], 'f454947c-6055-474b-bf35-29a379e01aa3': [525] };
  const out = { th: { 1: 'U1DR1C1022520002511C', 2: 'U1DR2C1022450005011C', 8: 'U1DR1C1022460011011C', 11: 'U1DR2C1062650000311C', 12: 'U1DR2C1012640000411C', 13: 'U1DR1C1062450009111C', 14: 'U1DR2C1012580002711C', 15: 'U1DR1C1062530002611C,U1DR1C1062640002811C', 18: 'U1DR2C1022430001111C', 21: 'U1DR2C1012671502311C', 22: 'U1DR2C1062590004711C,U1DR2C1062640000911C', 23: 'U1DR1C1022460013811C', 24: 'U1DR1C1062400002511C', 25: 'U1DR2C1012671501811C', 31: 'U1DR2C1062510000411C', 32: 'U1DR2C1062550003611C', 41: 'U1DR2C1062540004111C', 42: 'U1DR2C1062540004211C', 43: 'U1DR2C1062540004311C', 51: 'U1DR2C1012590000411C', 52: 'U1DR2C1062590000511C', 61: 'U1DR2C1062550003711C,U1DR2C1012680000411C', 62: 'U1DR2C1062550003811C,U1DR2C1012680000511C', 63: 'U1DR2C1062550003911C,U1DR2C1012680000711C', 71: 'U1DR2C1062440001411C', 72: 'U1DR2C1062440001511C', 91: 'U1DR1C1022360000311C', 92: 'U1DR1C1022360000411C', 101: 'U1DR2C1062650000411C', 102: 'U1DR2C1062650000511C', 103: 'U1DR2C1012690031211C', 201: 'U1DR1C1062470001911C', 202: 'U1DR1C1062510002511C', 203: 'U1DR1C1062510002411C', 293: 'U1DR1C1022620007311C', 294: 'U1DR1C1022620007411C', 301: 'U1DR1A1022560016111C', 302: 'U1DR2C1012590005511C', 303: 'U1DR1C1062540007011C', 304: 'U1DR1C1062540007111C', 305: 'U1DR1C1062570002111C', 401: 'U1DR1A1022550044011C', 402: 'U1DR1C1022480035611C', 403: 'U1DR1C1022670000111C', 404: 'U1DR1A1022600015411C', 405: 'U1DR2C1052631509011C', 406: 'U1DR2C1052631509111C', 407: 'U1DR2C1012671505511C', 408: 'U1DR2A1052660000111C', 409: 'U1DR2A1052660000211C', 410: 'U1DR2C1052500000611C', 411: 'U1DR2C1052671507611C', 412: 'U1DR2C1052671507711C', 413: 'U1DR2C1052661502811C', 414: 'U1DR2C1052661502911C', 415: 'U1DR1C1052680003111C', 416: 'U1DR2A1022570004111C', 417: 'U1DR2A1022530005611C', 418: 'U1DR2A1022460014211C', 419: 'U1DR2A1022530008811C', 420: 'U1DR2A1022640004511C', 421: 'U1DR2C1022540004511C', 422: 'U1DR1C1022550016611C', 423: 'U1DR1B1022470000611C', 424: 'U1DR1A1022640016411C', 425: 'U1DR1A1022520026511C', 426: 'U1DR1A1022520026611C', 427: 'U1DR1A1022460032011C', 431: 'U1DR1C1022630003911C', 432: 'U1DR1C1022510026711C', 433: 'U1DR1C1022490017611C', 434: 'U1DR1C1022630004011C', 435: 'U1DR1C1022520022411C', 436: 'U1DR1C1022510020211C', 437: 'U1DR1C1022520022311C', 438: 'U1DR1C1022520022511C', 439: 'U1DR2C1022630000911C', 440: 'U1DR1C1062410022611C', 441: 'U1DR1C1022640004211C', 505: 'U1DR1C1012600002111C', 506: 'U1DR1C1012600002211C', 511: 'U1DR1C1012550004811C', 517: 'U1DR1C1012590010311C', 519: 'U1DR1C1012600003711C', 520: 'U1DR1C1012600002011C', 521: 'U1DR1C1012660001311C', 523: 'U1DR2C1012610000211C', 531: 'U1DR2C1012670000911C', 532: 'U1DR1C1022330015611C', 533: 'U1DR1C1022590021911C', 534: 'U1DR1C1022330015811C', 535: 'U1DR1C1022430018411C', 536: 'U1DR1C1022580009911C', 537: 'U1DR2C1012651506111C', 538: 'U1DR2C1012651506211C', 539: 'U1DR2C1012651506311C', 540: 'U1DR2C1012651506711C', 541: 'U1DR2C1012651506811C', 545: 'U1DR1C1022350011611C' }, us: {}, eu: { 1: 'PA1077/049/010', 8: 'PA1019/007/002', 11: 'EU/1/14/898/001-003', 12: 'EU/1/17/1236/001-003', 13: 'PA0775/002/001', 14: 'EU/1/13/862/001-006', 15: 'PA0775/002/002', 22: 'PA0775/009/001', 23: 'PA0775/012/001', 24: 'PA1077/047/003', 25: 'EU/1/17/1208/001-003', 31: 'PA1019/020/003', 41: 'PA1077/046/004', 42: 'PA1077/046/005', 43: 'PA1077/046/006', 52: 'PA1019/020/004', 61: 'PA1077/046/001', 62: 'PA1077/046/002', 63: 'PA1077/046/003', 71: 'PA1019/020/001', 72: 'PA1019/020/002', 91: 'PA1019/017/003', 92: 'PA1019/017/004', 101: 'EU/1/13/886/001-003', 102: 'EU/1/13/886/004-006', 201: 'PA1077/044/013', 202: 'PA1077/044/014', 203: 'PA1077/044/015', 291: 'PA1327/015/002', 302: 'PA1688/013/002', 303: 'EU/1/09/593/1-5', 304: 'EU/1/09/593/6-10', 305: 'EU/1/12/788/001-006', 405: 'EU/1/14/920 /001-003', 406: 'EU/1/14/920 /004-006', 421: 'PA0007/052/002', 505: 'PA25641/001/001', 506: 'PA25641/001/002', 511: 'PA23198/012/001', 517: 'PA0775/006/001', 519: 'EU/1/14/922/001-003', 522: 'EU/1/18/1339/001', 523: 'EU/1/14/964/001-003', 531: 'EU/1/17/1208/006-009', 537: 'EU/1/20/1439/001-004', 538: 'EU/1/20/1439/005-008', 539: 'EU/1/20/1439/009-012', 541: 'EU/1/20/1438/001-005' } };
  for (const setid in us) us[setid].forEach(id => { out.us[id] = setid; });
  return out;
})();
const refUrl = (key) => (REFERENCES.find(r => r.key === key) || {}).url;
const hpraUrl = (q, past) => 'https://www.hpra.ie/find-a-medicine/for-human-use/' + (past ? 'withdrawn-medicines' : 'authorised-medicines') + (q ? '?data=' +
  btoa(JSON.stringify({ id: null, skip: 0, take: 10, query: q, order: 'LastUpdated DESC', status: past ? 'Withdrawn' : 'Authorised', filters: { from: null, to: null, routes: null, placeOfSale: null, advertisingConditions: null, marketingAvailability: null, atcCode: null, medicineType: null } })) : '');
// Register links for one country: the register itself, plus a search for the product where a search word is verified
const registerSources = (med, r, t) => {
  const never = statusIn(med, r) === 'never';
  const q = never ? null : (SRC_TERM[r] || {})[med.id];
  const rec = never ? null : (SRC_RECORD[r] || {})[med.id]; // this product's own record, where one was matched
  // a product with two current Thai registrations (for example the original and the reusable Respimat) lists both records
  if (r === 'th') return rec ? rec.split(',').map((c, i, a) => ({ label: t.srcRecord(t.srcThFda) + (a.length > 1 ? ' (' + (i + 1) + ')' : ''), url: 'https://pertento.fda.moph.go.th/FDA_INFORMATION_DRUG/Home/Public_Information_Drug?Newcode=' + c, exact: true })) : [{ label: t.srcThFda, url: refUrl('fda') }];
  if (r === 'us') return [{ label: 'Drugs@FDA', url: 'https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm' },
    ...(rec ? [{ label: t.srcLabelDoc('DailyMed'), url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=' + rec, exact: true }]
      : q ? [{ label: t.srcSearch('DailyMed', q), url: 'https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=' + encodeURIComponent(q) }] : [])];
  if (r === 'eu' && rec) return [{ label: t.srcRecord('HPRA') + ' (' + rec.replace(/\s+/g, '') + ')', url: hpraUrl(rec, statusIn(med, r) === 'past'), exact: true }];
  if (r === 'uk') return [{ label: q ? t.srcSearch('MHRA Products', q) : 'MHRA Products', url: 'https://products.mhra.gov.uk/' + (q ? 'search/?search=' + encodeURIComponent(q) + '&page=1&doc=Spc' : '') }];
  if (r === 'eu') { const past = statusIn(med, r) === 'past'; return [{ label: q ? t.srcSearch('HPRA', q) : 'HPRA', url: hpraUrl(q, past) }]; }
  return [{ label: 'PMDA', url: 'https://www.pmda.go.jp/PmdaSearch/iyakuSearch/' }];
};
// Minimum inspiratory flow: the reference behind each device's value (see pifNeeded above)
const flowSources = (med, t) => {
  if (flowUnknown(med)) return null;
  const R = (key, label) => ({ label, url: refUrl(key) });
  const G = R('ghosh', 'Ghosh 2017'); // table of minimal and optimal flow for each dry-powder inhaler
  if (med.type === 'Nebulizer') return [R('laube', 'Laube 2011'), { label: t.srcFlowNeb }];
  if (med.type === 'MDI') return [R('laube', 'Laube 2011'), { label: t.srcFlowMdi }];
  if (med.type === 'SMI') return [R('wu', 'Wu 2023'), { label: t.srcFlowSmi }];
  if (['Turbuhaler', 'Diskus', 'Handihaler', 'Breezhaler'].includes(med.shape)) return [G, R('weers', 'Weers 2022')];
  if (med.shape === 'Ellipta') return [G, R('grant', 'Grant 2015')];
  if (med.shape === 'Easyhaler') return [G, R('haikarainen', 'Haikarainen 2018')];
  if (med.shape === 'NEXThaler') return [G, R('corradi', 'Corradi 2014')];
  if (med.shape === 'Spiromax') return [G, ...(SHAPE_LABEL[med.id] === 'RespiClick' ? [{ label: t.srcFlowRespiClick }] : [])];
  if (med.shape === 'Pressair') return [G, { label: t.srcFlowGenuair }];
  if (med.shape === 'Twisthaler') return [R('clark', 'Clark 2020'), { label: t.srcFlowTwist }];
  return [];
};
const isUnknownText = (x) => /^unknown$/i.test(String(x || '').trim());
// One "Source:" line. items: [{ label, url? }] (no url = plain text); [] = no source recorded; null = the value is Unknown.
const SourceLine = ({ items, t, k }) => (
  <p className="text-[10px] font-medium text-slate-400 leading-snug pt-1 break-words text-left" data-src={k}>
    <span className="font-bold">{t.srcLabel}:</span>{' '}
    {items == null ? <span data-src-unknown>{t.srcUnknown}</span> : items.length === 0 ? <span data-src-none>{t.srcNone}</span> : items.map((it, i) => (
      <span key={i}>{i > 0 && ' · '}{it.url
        ? <a href={it.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline decoration-dotted hover:decoration-solid" data-src-link {...(it.exact ? { 'data-src-exact': '' } : {})}>{it.label}</a>
        : <span data-src-text>{it.label}</span>}</span>
    ))}
  </p>
);

const DrugDetailModal = ({ med, t, onClose, isSelected, onToggleSelect }) => {
  const section = (title, children, attrs = {}) => (
    <section className="bg-slate-50 rounded-xl border border-slate-200 p-3 sm:p-4" {...attrs}>
      <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">{title}</h3>
      {children}
    </section>
  );
  const row = (label, value, attrs = {}, src = null) => (
    <div className="py-1.5 border-b border-slate-200 last:border-b-0 text-xs min-w-0">
      <div className="flex justify-between items-start gap-3 min-w-0" {...attrs}>
        <span className="text-slate-500 font-medium break-words min-w-0">{label}</span>
        <span className="font-bold text-slate-700 text-right break-words shrink-0 max-w-[65%]">{value}</span>
      </div>
      {src}
    </div>
  );
  // Source lines are folded away until asked for (remembered on this device)
  const [showSrc, setShowSrc] = useState(() => { try { return localStorage.getItem('bdg-show-sources') === '1'; } catch (e) { return false; } });
  const toggleSrc = () => setShowSrc(v => { try { localStorage.setItem('bdg-show-sources', v ? '0' : '1'); } catch (e) {} return !v; });
  const src = (k, items) => (showSrc ? <SourceLine k={k} items={items} t={t} /> : null);
  const statusLabel = { current: [t.regNow, 'text-emerald-700'], past: [t.regPast, 'text-amber-700'], never: [t.regNever, 'text-slate-400'] };
  const statusDetail = (r, st) => {
    if (st === 'current') return t.detailCurrent((licenceIn(med, r) || []).map(x => t.countryInd[x]).join(', '));
    if (st === 'never') return r === 'th' ? t.thNever : t.countryNotLicensed(t.countryNames[r]);
    const gone = r === 'th' && thCancelled(med);
    return gone ? t.detailThPast(gone) : r === 'us' ? t.detailUsPast : r === 'eu' ? t.detailEuPast(EU_WITHDRAWN[med.id]) : '';
  };
  const nlemNote = nlemNoteOf(med, t);
  const sf = spacerFit(med);
  // Laube 2011: ventilated patients receive aerosols by pMDI with an in-line spacer, or by nebuliser (so not by DPI or breath-actuated inhaler)
  const laubeVent = [{ label: 'Laube 2011', url: refUrl('laube') }, { label: t.srcVentLaube }];
  const ventSrc = med.ventCompatible && med.type === 'MDI' ? [{ label: 'Dhand 1996', url: refUrl('dhand') }, { label: t.srcVentMdiNote }, ...laubeVent]
    : med.ventCompatible && med.type === 'SMI' ? [{ label: 'Fang 2020', url: refUrl('fang') }, { label: t.srcVentSmiNote }] : laubeVent;
  const priceSrc = med.priceLevel == null ? null : med.priceEst ? [{ label: t.priceEstNote }] : [{ label: t.srcRefPrice, url: refUrl('refprice') }];
  const infoSrc = (value) => (isUnknownText(value) ? null : [{ label: t.srcProductInfoShort }]);
  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 print:hidden" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }} data-detail-modal>
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[95vh] animate-in fade-in zoom-in-95 duration-200" role="dialog" aria-modal="true" aria-label={med.marketName}>
        <div className="flex items-start gap-3 p-4 sm:p-5 border-b border-slate-100 bg-slate-50 rounded-t-2xl shrink-0">
          <div className="p-2 rounded-xl bg-white border border-slate-200 shrink-0">{medIcon(med, 'w-12 h-12 sm:w-14 sm:h-14 text-slate-700')}</div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1.5 mb-1">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${med.tagColor}`}>{med.type}</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{shapeLabel(med)}</span>
              {med.isExtraFine && <ExtraFineBadge t={t} compact={true} />}
              <ExacBadge med={med} t={t} />
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-800 leading-tight break-words">{med.marketName}</h2>
            <RenderSubstances medClass={med.class} medSubstance={med.substance} className="text-sm mt-1" />
          </div>
          <button onClick={onClose} className="p-2 -m-1 text-slate-400 hover:text-slate-700 hover:bg-white rounded-full transition-colors shrink-0" aria-label={t.detailClose}><X className="w-5 h-5" /></button>
        </div>

        <div className="p-3 sm:p-5 flex-grow overflow-y-auto flex flex-col gap-3 bg-white">
          <div>
            <DiagnosticBadges indications={med.indications} t={t} med={med} className="" />
            {src('indications', [{ label: t.srcIndications }])}
          </div>
          {exacNoteOf(med, t) && <p className="text-xs font-medium leading-snug text-rose-700" data-exac-note>{exacNoteOf(med, t)}</p>}

          {section(t.detailDose, (
            <>
              <div className="text-xs" data-detail-dose>
                <DoseRangeDisplay doseRange={med.doseRange} viewType="grid" isMart={med.isMart} martMax={med.martMax} t={t} />
              </div>
              {src('dose', [{ label: t.srcProductInfo }, ...(icsLevels(med).length ? [{ label: t.srcGinaLevels, url: refUrl('gina') }] : [])])}
            </>
          ))}

          {section(t.detailDevice, (
            <>
              {row(t.peakFlow, <span className="text-cyan-700" data-flow>{flowText(med, t)}</span>, {}, src('flow', flowSources(med, t)))}
              {sf && row(t.spacerLabel, <SpacerFit med={med} t={t} />, {}, src('spacer', sf.kind === 'named' ? [{ label: t.srcNamedLabel(sf.src) }] : [{ label: 'Laube 2011', url: refUrl('laube') }, { label: sf.kind === 'breath' ? t.srcSpacerBreath : t.srcSpacerPmdi }]))}
              {row(t.ventilator, (
                <span className={med.ventCompatible ? 'text-cyan-700' : 'text-rose-700'} data-detail-vent>
                  {med.ventCompatible ? t.compatible : t.notCompatible}
                  <span className="block text-[11px] font-medium opacity-90 leading-snug"><VentNote med={med} t={t} /></span>
                </span>
              ), {}, src('vent', ventSrc))}
            </>
          ))}

          {section(t.detailPack, (
            <>
              {row(t.estCost, <PriceTag med={med} t={t} className="text-[12px]" />, {}, src('price', priceSrc))}
              {row(t.totalDosesExp, packText(med, t), { 'data-card-pack': '' }, src('pack', infoSrc(med.totalDoses)))}
              {row(t.expLabel, <span className="text-rose-600">{expText(med, t)}</span>, { 'data-card-exp': '' }, src('expiry', infoSrc(med.expiration)))}
            </>
          ))}

          {section(t.detailReg, (
            <>
              {LABEL_REGIONS.map(r => {
                const st = statusIn(med, r);
                const holder = st === 'never' ? null : holderIn(med, r, t);
                return (
                  <div key={r} className="py-2 border-b border-slate-200 last:border-b-0 min-w-0" data-detail-country={r} data-status={st}>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <StatusChip med={med} r={r} t={t} />
                      <span className="text-xs font-bold text-slate-700">{t.countryNames[r]}</span>
                      <span className={`text-[11px] font-bold ${statusLabel[st][1]}`}>{statusLabel[st][0]}</span>
                      {r === 'th' && st !== 'never' && <NlemBadge med={med} t={t} compact={true} />}
                    </div>
                    {holder && <p className="text-xs text-slate-700 mt-1 break-words"><span className="text-slate-400 font-medium">{t.holderLabel}:</span> <span className="font-bold" data-detail-holder>{holder}</span></p>}
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug break-words" data-detail-status>{statusDetail(r, st)}</p>
                    {r === 'th' && thAwaitingNote(med, t) && <p className="text-[11px] text-amber-700 font-medium mt-0.5 leading-snug break-words" data-detail-awaiting>{thAwaitingNote(med, t)}</p>}
                    {r === 'th' && nlemNote && <p className="text-[11px] text-amber-700 font-medium mt-0.5 leading-snug break-words" data-detail-nlem>{t.nlemTitle}: {nlemNote}</p>}
                    {r === 'jp' && st !== 'never' && JP_NAME[med.id] && <p className="text-[11px] text-violet-700 font-medium mt-0.5 leading-snug break-words" data-detail-jpname>{t.jpName(JP_NAME[med.id])}</p>}
                    {src('reg-' + r, [...registerSources(med, r, t), ...(r === 'th' && nlemOf(med) ? [{ label: t.srcNlem, url: refUrl('nlem') }] : [])])}
                  </div>
                );
              })}
              {row(t.makerLabel, makerOf(med) || t.unknown, { 'data-detail-maker': '' }, src('maker', makerOf(med) ? [{ label: t.srcThFda, url: refUrl('fda') }] : null))}
            </>
          ), { 'data-detail-reg': '' })}

          <div>
            {COLOUR_UNKNOWN.has(med.id) && <p className="text-[11px] text-slate-500 leading-snug">{t.colourUnknown}</p>}
            {ICON_UNKNOWN.has(med.id) && <p className="text-[11px] text-slate-500 leading-snug">{t.detailNoPicture}</p>}
            <CheckedLine med={med} t={t} />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2 p-3 sm:p-4 border-t border-slate-100 shrink-0">
          <button onClick={toggleSrc} aria-pressed={showSrc} data-src-toggle className={`mr-auto flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold border transition-colors ${showSrc ? 'bg-slate-100 text-slate-800 border-slate-300' : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-600'}`}>
            <BookOpen className="w-3.5 h-3.5" /> {showSrc ? t.srcHide : t.srcShow}
          </button>
          <button onClick={onToggleSelect} data-detail-select className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold border transition-colors ${isSelected ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-600'}`}>
            {isSelected ? <Check className="w-3.5 h-3.5" /> : <CompareIcon className="w-3.5 h-3.5" />} {isSelected ? t.selected : t.select}
          </button>
          <button onClick={onClose} className="px-4 py-2 rounded-lg text-xs font-bold bg-slate-800 text-white hover:bg-slate-700 transition-colors">{t.detailClose}</button>
        </div>
      </div>
    </div>
  );
};
const TH_STATUSES = ['current', 'past', 'never'];
const thaiStatus = (d) => (licenceIn(d, 'th') ? 'current' : TH_CANCELLED[d.id] ? 'past' : 'never');
// Registration status in each country, checked 12 Oct 2026: current, past, or never (no registration found).
//  th: Thai FDA register (TH_CANCELLED = cancelled or expired).
//  us: FDA Drugs@FDA marketing status; "Discontinued" = past (US_DISCONTINUED), "Prescription" = current.
//  uk: every UK-licensed product here had a current SmPC on the MHRA products site or emc; none is past.
//  eu: the Irish regulator's lists (HPRA); on the withdrawn list = past (EU_WITHDRAWN, with the withdrawal date).
//      "Authorised but not marketed" still counts as current.
const EU_WITHDRAWN = { 23: 'September 18, 2026', 421: 'February 8, 2018', 535: 'August 18, 2017', 536: 'August 18, 2017', 545: 'October 31, 2010' }; // Atrovent Inhaler CFC-Free, Combivent UDVs
const statusIn = (d, r) => {
  if (r === 'th') return thaiStatus(d);
  if (r === 'us') return licenceIn(d, 'us') ? (US_DISCONTINUED.has(d.id) ? 'past' : 'current') : 'never';
  if (r === 'eu') return EU_WITHDRAWN[d.id] ? 'past' : licenceIn(d, 'eu') ? 'current' : 'never';
  return licenceIn(d, r) ? 'current' : 'never';
};
const IND_CODE = { A: ['Asthma'], C: ['COPD'], AC: ['Asthma', 'COPD'] };
// Cards drawn in the very first paint (about one screen); the rest follow immediately after.
const FIRST_PAINT_CARDS = 6;
// Deep links: #drug=<id> opens the guide on that product.
const drugIdFromHash = () => { const m = /drug=(\d+)/.exec(location.hash || ''); return m ? +m[1] : null; };

// Licensed indications in one country, or null when no product is licensed there
const licenceIn = (d, r) => { const c = r === 'jp' ? LABELS_JP[d.id] : (LABELS[d.id] || '').split(' ')[LABEL_REGIONS.indexOf(r)]; return c && c !== '-' ? IND_CODE[c] : null; };
// Selected countries → is the product shown, and which indications (union of those labels)
// A product is shown when its registration status (current / past / never) in at least one selected
// country is one of the selected `statuses`. Each such country adds its label; where it has none
// (past or never), the product's original labelling is used.
const countryView = (d, regions, statuses = ['current']) => {
  const lists = regions.filter(r => statuses.includes(statusIn(d, r))).map(r => licenceIn(d, r) || d.indications);
  if (!lists.length) return null;
  return ['Asthma', 'COPD'].filter(x => lists.some(l => l.includes(x)));
};

// =====================================================================
// Exacerbation Guide device lists: chosen by rule, not by product ID, so they
// stay correct as products are added or removed.
// =====================================================================
const classesOf = (d) => d.class.split('/').map(s => s.trim());
const isShortActingOnly = (d) => classesOf(d).every(c => c === 'SABA' || c === 'SAMA');
const isNebulisedIcs = (d) => d.type === 'Nebulizer' && classesOf(d).includes('ICS');
const DEVICE_TYPE_ORDER = { MDI: 0, SMI: 1, DPI: 2, Nebulizer: 3 };
// Device groups per exacerbation card, in the order of that card's recommendation text. A product is
// listed when it fits one group; each group holds only its own drugs.
const isSabaOnly = (d) => classesOf(d).join() === 'SABA';
const isNeb = (d) => d.type === 'Nebulizer';
const EXAC_LIST_GROUPS = {
  // GINA 2026 Figure 9 (primary care): salbutamol pMDI + spacer, or 2.5 mg nebulised (moderate);
  // budesonide-formoterol 160/4.5 as the alternative reliever (MART continues); ipratropium as an add-on
  // for moderate attacks (ipratropium alone; fixed SABA/SAMA combinations are not listed here);
  // controller: start or step up (ICS-only handheld inhalers).
  asthmaMild: [
    ['saba', (d) => isSabaOnly(d) && !isNeb(d)],
    ['sabaNeb', (d) => isSabaOnly(d) && isNeb(d)],
    ['icsForm', (d) => d.isMart && /Budesonide 160 mcg/.test(d.substance)],
    ['sama', (d) => classesOf(d).join() === 'SAMA' && !isNeb(d)],
    ['ics', (d) => classesOf(d).join() === 'ICS' && !isNeb(d)],
  ],
  // GINA 2026 (ED): salbutamol 6-10 puffs pMDI + spacer or 5 mg nebulised, plus ipratropium; high-dose
  // ICS (nebulised budesonide) in the first hour.
  asthmaSevere: [
    ['saba', (d) => isSabaOnly(d) && !isNeb(d)],
    ['sabaNeb', (d) => isSabaOnly(d) && isNeb(d)],
    ['ipra', (d) => isShortActingOnly(d) && classesOf(d).includes('SAMA')],
    ['icsNeb', (d) => isNebulisedIcs(d)],
  ],
  // GOLD 2026: SABA ± SAMA (pMDI with spacer or nebuliser); nebulised budesonide as an alternative to
  // oral (mild-moderate) or systemic (severe) corticosteroids.
  copdMild: [
    ['saba', isSabaOnly],
    ['sabaSama', (d) => classesOf(d).join() === 'SABA,SAMA'],
    ['sama', (d) => classesOf(d).join() === 'SAMA'],
    ['icsNeb', (d) => isNebulisedIcs(d)],
  ],
};
EXAC_LIST_GROUPS.copdSevere = EXAC_LIST_GROUPS.copdMild;
const EXAC_DEVICE_RULES = Object.fromEntries(Object.entries(EXAC_LIST_GROUPS).map(([k, gs]) => [k, (d) => gs.some(([, test]) => test(d))]));
const exacDevices = (rule, disease, list = deviceData) => list
  .filter(d => d.indications.includes(disease) && EXAC_DEVICE_RULES[rule](d))
  .sort((a, b) => DEVICE_TYPE_ORDER[a.type] - DEVICE_TYPE_ORDER[b.type] || a.marketName.localeCompare(b.marketName));

// =====================================================================
// Maintenance Guide ranking: NLEM basic → supplemental → exclusive → not
// listed, then lower cost range, then name.
// =====================================================================
const NLEM_RANK = { b: 0, s: 1, ex: 2 };
const nlemRankOf = (d) => (nlemOf(d) ? NLEM_RANK[nlemOf(d).list] : 3);
// Asthma inhalers for a GINA step and track (ages 12+), shared by the Maintenance and Follow-up guides.
// Products are matched by the GINA dose levels their own regimens reach (doseRange → icsLevels), not
// by a single tag: e.g. Symbicort 160/4.5 is low dose at 1 inhalation BID and medium at 2 BID.
// Nebulisers are hospital-only, so they are never listed (author decision).
const asthmaPlanDevices = (step, track1, list) => {
  const atLevel = (d, lv) => d.type !== 'Nebulizer' && icsLevels(d).includes(lv);
  const wanted = step === 5 ? ['medium', 'high'] : step === 4 ? ['medium'] : ['low'];
  const atWanted = (d) => wanted.some(lv => atLevel(d, lv));
  let controllers;
  if (track1) {
    // GINA 2026 Table 7 (12 years and over): budesonide-formoterol 160/4.5 (200/6 metered) or
    // beclometasone-formoterol 100/6; budesonide-formoterol 80/4.5 is the children's (6–11) strength.
    controllers = list.filter(d => d.isMart && !/Budesonide 80 mcg/.test(d.substance) && atWanted(d));
  } else if (step <= 2) {
    controllers = list.filter(d => d.class === 'ICS' && atWanted(d));          // low-dose ICS
  } else {
    controllers = list.filter(d => d.class === 'ICS / LABA' && atWanted(d));   // Step 3 low, 4 medium, 5 medium/high
  }
  controllers = [...controllers].sort(rankForPlan);
  // GINA Track 2 Step 3 alternative: medium-dose ICS alone (listed after low-dose ICS-LABA)
  if (!track1 && step === 3) controllers = [...controllers, ...list.filter(d => d.class === 'ICS' && atLevel(d, 'medium')).sort(rankForPlan)];
  // Step 5 add-on LAMA: asthma-licensed triple inhalers and tiotropium
  if (step === 5) controllers = [...controllers, ...list.filter(d => d.indications.includes('Asthma') && (d.class === 'ICS / LABA / LAMA' || d.class === 'LAMA')).sort(rankForPlan)];
  const relievers = track1 ? [] : list.filter(d => d.class === 'SABA' && d.indications.includes('Asthma')).sort(rankForPlan);
  const noNeb = (d) => d.type !== 'Nebulizer';
  return { controllers: controllers.filter(noNeb), relievers: relievers.filter(noNeb) };
};

const rankForPlan = (a, b) => nlemRankOf(a) - nlemRankOf(b) || (a.priceLevel ?? 9) - (b.priceLevel ?? 9) || a.marketName.localeCompare(b.marketName);

const PlanDrugList = ({ list, t, initial = 3 }) => {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? list : list.slice(0, initial);
  return (
    <div className="flex flex-col gap-3">
      {shown.map(med => <DeviceListSnippet key={med.id} med={med} getIcon={getIcon} t={t} />)}
      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
        <span>{t.planRankNote}</span>
        {list.length > initial && (
          <button onClick={() => setExpanded(!expanded)} className="font-bold text-indigo-600 hover:underline">
            {expanded ? t.planShowFewer : t.planShowAll(list.length)}
          </button>
        )}
      </div>
    </div>
  );
};

const DisclaimerSection = ({ t }) => (
  <section className="mt-10 md:mt-14 rounded-2xl border border-amber-200 bg-amber-50 p-4 md:p-5 print:hidden" aria-labelledby="disclaimer-heading">
    <h2 id="disclaimer-heading" className="text-sm font-extrabold text-amber-800 uppercase tracking-wider mb-2 flex items-center gap-2">
      <AlertTriangle className="w-4 h-4" /> {t.discTitle}
    </h2>
    <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm text-amber-900 leading-relaxed">
      {t.discPoints.map((p, i) => <li key={i}>{p}</li>)}
    </ul>
    <p className="mt-2 text-[11px] font-bold text-amber-700">{t.discReviewed}</p>
  </section>
);

// Collapsible: closed by default; the heading button opens the full list.
const ReferencesSection = ({ t }) => {
  const [open, setOpen] = useState(false);
  return (
  <section className="mt-10 md:mt-14 pt-6 border-t border-slate-200 print:hidden" aria-labelledby="refs-heading">
    <h2 id="refs-heading" className="text-sm font-extrabold text-slate-700 uppercase tracking-wider">
      <button type="button" onClick={() => setOpen(o => !o)} aria-expanded={open} aria-controls="refs-list" className="w-full flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 hover:bg-slate-50 transition-colors">
        <span className="uppercase tracking-wider">{t.refTitle} <span className="text-slate-400 font-bold normal-case tracking-normal">({REFERENCES.length})</span></span>
        <span className={`text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true">▾</span>
      </button>
    </h2>
    {open && <div id="refs-list" className="mt-3">
    <ol className="flex flex-col gap-2.5">
      {REFERENCES.map((r, i) => (
        <li key={r.key} className="flex gap-3 text-xs text-slate-600 leading-relaxed">
          <span className="shrink-0 font-bold text-slate-400 tabular-nums w-5 text-right">{i + 1}.</span>
          <span className="min-w-0">
            {r.cite}{' '}
            {r.url && <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline break-all">{r.url}</a>}
            <span className="block text-[11px] text-slate-500 mt-0.5"><span className="font-bold">{t.refUsedFor}:</span> {t.refUsed[r.key]}</span>
          </span>
        </li>
      ))}
    </ol>
    <p className="mt-4 text-[11px] text-slate-500 leading-relaxed">{t.refAuthorNote}</p>
    </div>}
  </section>
  );
};

function App() {
  const [lang, setLang] = useState('en');

  // Theme: a saved choice wins; otherwise follow the viewer's host theme or OS.
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('bdg-theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch (e) {}
    const stamped = document.documentElement.getAttribute('data-theme');
    if (stamped === 'light' || stamped === 'dark') return stamped;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem('bdg-theme', next); } catch (e) {}
  };
  const t = translations[lang];

  const [selectedDevices, setSelectedDevices] = useState([]);
  const [selectedShapes, setSelectedShapes] = useState([]);
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [selectedDiseases, setSelectedDiseases] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('nameAsc');
  const [viewMode, setViewMode] = useState('grid');
  const [martOnly, setMartOnly] = useState(false);
  const [extraFineOnly, setExtraFineOnly] = useState(false);
  const [nlemOnly, setNlemOnly] = useState(false);
  // Licence holder line on cards and list rows: shown by default, the choice is remembered on this device
  const [showHolder, setShowHolder] = useState(() => { try { return localStorage.getItem('bdg-show-holder') !== '0'; } catch (e) { return true; } });
  const toggleHolder = () => setShowHolder(v => { try { localStorage.setItem('bdg-show-holder', v ? '0' : '1'); } catch (e) {} return !v; });
  // Faster first paint: draw the first few cards, then the rest right after as a low-priority update
  // (React keeps the page responsive while it renders them).
  // Brand rows in the main list: on unless switched off (remembered on the device); which brands are opened
  const [groupBrands, setGroupBrands] = useState(() => { try { return localStorage.getItem('bdg-group-brand') !== '0'; } catch (e) { return true; } });
  const toggleGroupBrands = () => setGroupBrands(v => { try { localStorage.setItem('bdg-group-brand', v ? '0' : '1'); } catch (e) {} return !v; });
  const [openBrands, setOpenBrands] = useState(() => new Set());
  // A brand row opens only when the user opens it (or follows a link to one of its strengths), also while searching
  const flip = (prev, k) => { const n = new Set(prev); if (n.has(k)) n.delete(k); else n.add(k); return n; };
  const toggleBrand = (k) => { setHighlightId(null); setOpenBrands(prev => flip(prev, k)); };
  const pickStrength = (k, m) => {
    setOpenBrands(prev => (prev.has(k) ? prev : new Set(prev).add(k)));
    setHighlightId(m.id);
    setTimeout(() => { const el = document.getElementById('drug-' + m.id); if (el) el.scrollIntoView({ block: 'center', behavior: 'smooth' }); }, 120);
    setTimeout(() => setHighlightId(cur => (cur === m.id ? null : cur)), 3000);
  };
  const [showAllCards, setShowAllCards] = useState(false);
  useEffect(() => {
    const later = React.startTransition || ((fn) => fn());
    // a timer, not requestAnimationFrame: animation frames never fire while the tab is hidden
    const id = setTimeout(() => later(() => setShowAllCards(true)), 30);
    return () => clearTimeout(id);
  }, []);
  // Thai FDA registration filter: Currently by default (past and never registered shown only on request)
  const [thStatus, setThStatus] = useState(['current']);
  const toggleThStatus = (k) => setThStatus(prev => (prev.includes(k) ? (prev.length > 1 ? prev.filter(x => x !== k) : prev) : TH_STATUSES.filter(x => x === k || prev.includes(x))));
  // Countries: products licensed in any selected country are shown (default Thailand)
  const [countries, setCountries] = useState(['th']);
  const [highlightId, setHighlightId] = useState(null);
  // Each country is an independent switch; with none selected nothing is listed. Default: Thailand only.
  const toggleCountry = (r) => setCountries(prev => (prev.includes(r) ? prev.filter(x => x !== r) : LABEL_REGIONS.filter(x => x === r || prev.includes(x))));
  // All: select every country; pressed again (when all are on), clear them all
  const allCountries = countries.length === LABEL_REGIONS.length;
  const toggleAllCountries = () => setCountries(allCountries ? [] : [...LABEL_REGIONS]);
  const regionData = useMemo(() => deviceData.map(d => { const ind = countryView(d, countries, thStatus); return ind ? { ...d, indications: ind, notRegistered: !countries.some(r => statusIn(d, r) === 'current') } : null; }).filter(Boolean), [countries, thStatus]);
  // Guides only suggest products currently registered in a selected country (not ones shown as "†").
  const rxData = useMemo(() => regionData.filter(d => !d.notRegistered), [regionData]);
  const [pifInput, setPifInput] = useState('');
  const pifValue = parseFloat(pifInput);
  const pifActive = pifValue > 0 && pifValue < 400;

  const [compareList, setCompareList] = useState([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [isConvertOpen, setIsConvertOpen] = useState(false);
  const [isEquivOpen, setIsEquivOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isExportingImages, setIsExportingImages] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [isExacModalOpen, setIsExacModalOpen] = useState(false);
  const [isDeviceGuideOpen, setIsDeviceGuideOpen] = useState(false);
  const [isSpacerOpen, setIsSpacerOpen] = useState(false);
  const [isIcsCalcOpen, setIsIcsCalcOpen] = useState(false);
  const [isFollowOpen, setIsFollowOpen] = useState(false);
  const [isChangelogOpen, setIsChangelogOpen] = useState(false);
  const [exacTab, setExacTab] = useState('Asthma');
  const [wizardDisease, setWizardDisease] = useState('');
  const [wizardAsthmaTrack, setWizardAsthmaTrack] = useState(1);
  const [wizardSeverity, setWizardSeverity] = useState([]);

  const [copdMmrc, setCopdMmrc] = useState(null);
  const [copdCat, setCopdCat] = useState(Array(8).fill(0));
  const [copdCatTouched, setCopdCatTouched] = useState(false);
  const [activeSymptomTab, setActiveSymptomTab] = useState('mMRC');

  // Phone width (below 640 px): shorter search placeholder, and the filter panel starts closed
  const [narrow, setNarrow] = useState(() => typeof window !== 'undefined' && window.innerWidth < 640);
  // Phones: the search box is a magnifier button until tapped; it closes again when focus leaves it (the text stays)
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = React.useRef(null);
  // The pinned bar (guides + search row) changes height with the screen width and language; the filter panel pins under it
  const barRef = React.useRef(null);
  const [barH, setBarH] = useState(96);
  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const measure = () => setBarH(Math.round(el.getBoundingClientRect().height));
    measure();
    if (typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  useEffect(() => {
    if (!searchOpen) return;
    if (searchRef.current) searchRef.current.focus();
    // a tap anywhere outside the bar closes it too (the keyboard's focus does not always report leaving)
    const outside = (e) => { if (!e.target.closest('[data-search-box]')) setSearchOpen(false); };
    document.addEventListener('pointerdown', outside);
    return () => document.removeEventListener('pointerdown', outside);
  }, [searchOpen]);
  // Filter panel: open by default on tablet and desktop, closed by default on phones; the Filters button toggles it
  const [filtersOpen, setFiltersOpen] = useState(() => !(typeof window !== 'undefined' && window.innerWidth < 640));
  // Product detail view: opened from a card or list row (anywhere that is not itself a control)
  const [detailId, setDetailId] = useState(null);
  const [isLegendOpen, setIsLegendOpen] = useState(false);
  const openDetailFrom = (e, med) => { if (e.target.closest('button, a, input, select, summary, label, [data-cautions-pop]')) return; setDetailId(med.id); };

  // Responsive default. Only fires when the mobile breakpoint is actually
  // crossed, so it no longer traps a widened window in list view.
  useEffect(() => {
    let wasMobile = null;
    const handleResize = () => {
      const isMobile = window.innerWidth < 640;
      if (isMobile !== wasMobile) {
        wasMobile = isMobile;
        setViewMode(isMobile ? 'list' : 'grid');
        setNarrow(isMobile);
        setFiltersOpen(!isMobile);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const stepNumberSeverity = wizardDisease === 'Asthma' ? 3 : 2;

  const isSeverityComplete = wizardDisease === 'Asthma'
    ? asthmaSeverityGroups.slice(0, 3).every(g => wizardSeverity.some(v => g.options.includes(v)))
    : (
        wizardSeverity.some(s => s.includes("GOLD")) &&
        wizardSeverity.some(s => s.toLowerCase().includes("exacerbation")) &&
        (activeSymptomTab === 'mMRC' ? copdMmrc !== null : copdCatTouched) &&
        (wizardSeverity.includes("One or More moderate or severe exacerbation") ? wizardSeverity.some(s => s.includes("Eosinophils")) : true)
      );

  const getMissingRequirements = () => {
    const missing = [];
    if (!wizardDisease) return missing;

    if (wizardDisease === 'Asthma') {
      const hasSymptoms = wizardSeverity.some(s => asthmaSeverityGroups[0].options.includes(s));
      const hasLungFunction = wizardSeverity.some(s => asthmaSeverityGroups[1].options.includes(s));
      const hasExac = wizardSeverity.some(s => asthmaSeverityGroups[2].options.includes(s));

      if (!hasSymptoms) missing.push(t.reqSymptomFreq);
      if (!hasLungFunction) missing.push(t.reqLungFunc);
      if (!hasExac) missing.push(t.reqExacHist);
    }

    if (wizardDisease === 'COPD') {
      const hasGold = wizardSeverity.some(s => s.includes("GOLD"));
      const hasSymptoms = activeSymptomTab === 'mMRC' ? copdMmrc !== null : copdCatTouched;
      const hasExac = wizardSeverity.some(s => s.toLowerCase().includes("exacerbation"));

      if (!hasGold) missing.push(t.reqGoldStage);
      if (!hasSymptoms) missing.push(t.reqSymptomBurden);
      if (!hasExac) missing.push(t.reqExacHist);

      // Eosinophils only gate the ICS decision, so they are only required for Group E
      if (wizardSeverity.includes("One or More moderate or severe exacerbation")) {
        const hasEos = wizardSeverity.some(s => s.includes("Eosinophils"));
        if (!hasEos) missing.push(t.reqEosinophils);
      }
    }

    return missing;
  };

  const computePlanData = () => {
    let stage = '';
    let severityRationale = '';
    let drugRecommendation = '';
    let controllers = [];
    let relievers = [];
    let isMartTrack = false;
    let riskNote = null;

    if (wizardDisease === 'Asthma') {
      const calculatedStep = ginaStep(wizardSeverity);
      const severityReason = [null, t.reasonInfrequent, t.reasonModerate, t.reasonFrequent, t.reasonSevere][calculatedStep];

      // GINA Track 1 collapses Steps 1 and 2 into a single treatment box.
      const stepLabel = (calculatedStep <= 2 && wizardAsthmaTrack === 1) ? "1-2" : calculatedStep;

      stage = `GINA Step ${stepLabel} (${wizardAsthmaTrack === 1 ? 'MART' : 'Conventional'})`;

      // GINA 2026 Specific Recommendations Mapping
      let recommendedDrugs = '';
      if (wizardAsthmaTrack === 1) { // MART (Track 1)
        if (calculatedStep <= 2) recommendedDrugs = t.martRec1;
        else if (calculatedStep === 3) recommendedDrugs = t.martRec2;
        else if (calculatedStep === 4) recommendedDrugs = t.martRec3;
        else recommendedDrugs = t.martRec5;
      } else { // Conventional (Track 2)
        if (calculatedStep === 1) recommendedDrugs = t.convRec1;
        else if (calculatedStep === 2) recommendedDrugs = t.convRec2;
        else if (calculatedStep === 3) recommendedDrugs = t.convRec3;
        else if (calculatedStep === 4) recommendedDrugs = t.convRec4;
        else recommendedDrugs = t.convRec5;
      }

      severityRationale = t.rationaleAsthma(severityReason, stepLabel);
      if (wizardSeverity.includes("≥ 1 exacerbation in the last year")) riskNote = t.riskExac(calculatedStep < 4, wizardAsthmaTrack === 1);
      drugRecommendation = t.recommendation(recommendedDrugs);
      isMartTrack = wizardAsthmaTrack === 1;

      ({ controllers, relievers } = asthmaPlanDevices(calculatedStep, isMartTrack, rxData));

    } else {
      const isGoldE = wizardSeverity.includes("One or More moderate or severe exacerbation");
      const catScore = copdCat.reduce((a, b) => a + b, 0);
      const isHighlySymptomatic = activeSymptomTab === 'mMRC' ? copdMmrc >= 2 : catScore >= 10;

      if (isGoldE) {
        const highEos = wizardSeverity.includes("Blood Eosinophils ≥ 300 cells/µL");
        stage = 'GOLD Group E';
        if (highEos) {
          severityRationale = t.copdHighEosRat;
          drugRecommendation = t.copdHighEosRec;
          controllers = [
            ...rxData.filter(d => d.class === 'ICS / LABA / LAMA' && d.indications.includes('COPD')).sort(rankForPlan),
            ...rxData.filter(d => d.class === 'LABA / LAMA' && d.indications.includes('COPD')).sort(rankForPlan),
          ];
        } else {
          severityRationale = t.copdLowEosRat;
          drugRecommendation = t.copdLowEosRec;
          controllers = rxData.filter(d => d.class === 'LABA / LAMA' && d.indications.includes('COPD')).sort(rankForPlan);
        }
      } else if (isHighlySymptomatic) {
        stage = 'GOLD Group B';
        severityRationale = t.copdGroupBRat;
        drugRecommendation = t.copdGroupBRec;
        controllers = rxData.filter(d => d.class === 'LABA / LAMA' && d.indications.includes('COPD')).sort(rankForPlan);
      } else {
        stage = 'GOLD Group A';
        severityRationale = t.copdGroupARat;
        drugRecommendation = t.copdGroupARec;
        controllers = rxData.filter(d => (d.class === 'LABA' || d.class === 'LAMA') && d.indications.includes('COPD')).sort(rankForPlan);
      }
      relievers = rxData.filter(d => isShortActingOnly(d) && d.indications.includes('COPD')).sort(rankForPlan);
    }
    // Nebulisers are used in hospital only, so the maintenance plan lists inhalers only (author decision).
    controllers = controllers.filter(d => d.type !== 'Nebulizer');
    relievers = relievers.filter(d => d.type !== 'Nebulizer');
    return { stage, severityRationale, drugRecommendation, isMartTrack, controllers, relievers, riskNote };
  };

  // derived state - automatically calculated on the fly when dependencies are met
  const calculatedPlan = isSeverityComplete ? computePlanData() : null;

  const resetWizard = () => {
    setWizardDisease('');
    setWizardAsthmaTrack(1);
    setWizardSeverity([]);
    setCopdMmrc(null);
    setCopdCat(Array(8).fill(0));
    setCopdCatTouched(false);
    setActiveSymptomTab('mMRC');
  };

  // Escape closes the topmost open overlay.
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key !== 'Escape') return;
      // a guideline-figures list open over a guide closes itself; the guide stays open
      if (document.querySelector('[data-figures-modal]')) return;
      if (detailId != null) setDetailId(null);
      else if (isLegendOpen) setIsLegendOpen(false);
      else if (isConvertOpen) setIsConvertOpen(false);
      else if (isEquivOpen) setIsEquivOpen(false);
      else if (isSheetOpen) setIsSheetOpen(false);
      else if (isCompareModalOpen) setIsCompareModalOpen(false);
      else if (isChangelogOpen) setIsChangelogOpen(false);
      else if (isExacModalOpen) setIsExacModalOpen(false);
      else if (isDeviceGuideOpen) setIsDeviceGuideOpen(false);
      else if (isSpacerOpen) setIsSpacerOpen(false);
      else if (isIcsCalcOpen) setIsIcsCalcOpen(false);
      else if (isFollowOpen) setIsFollowOpen(false);
      else if (isWizardOpen) { setIsWizardOpen(false); resetWizard(); }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [detailId, isLegendOpen, isConvertOpen, isEquivOpen, isSheetOpen, isCompareModalOpen, isChangelogOpen, isExacModalOpen, isDeviceGuideOpen, isWizardOpen, isSpacerOpen, isIcsCalcOpen, isFollowOpen]);

  const toggleSeverityOption = (groupTitle, option) => {
    const exclusiveCategory = getMutuallyExclusiveGroup(groupTitle);
    let newSeverity = [...wizardSeverity];

    if (exclusiveCategory) {
      const allCopdGroups = [...copdSeverityGroups, EOSINOPHIL_GROUP];
      const groupOptions = wizardDisease === 'Asthma'
        ? asthmaSeverityGroups.find(g => g.title === groupTitle)?.options || []
        : allCopdGroups.find(g => g.title === groupTitle)?.options || [];
      newSeverity = newSeverity.filter(item => !groupOptions.includes(item));
    }

    if (!wizardSeverity.includes(option)) {
      newSeverity.push(option);
      // Clean up orphaned Eosinophil data if user downgrades to Zero Exacerbations
      if (option === "Zero Moderate or Severe Exacerbation") {
         newSeverity = newSeverity.filter(item => !item.includes("Eosinophils"));
      }
    } else {
      newSeverity = newSeverity.filter(item => item !== option);
    }
    setWizardSeverity(newSeverity);
  };

  const renderSeverityGroup = (group, idx) => (
    <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
      <h4 className="font-bold text-slate-700 mb-3 uppercase tracking-wider text-xs">{t[group.title] || group.title}</h4>
      <div className="flex flex-col gap-2">
        {group.options.map((opt, i) => {
          const isSelected = wizardSeverity.includes(opt);
          return (
            <button key={i} onClick={() => toggleSeverityOption(group.title, opt)} className={`text-left p-3.5 rounded-xl border-2 transition-all flex items-start gap-3 ${isSelected ? 'border-indigo-600 bg-indigo-50 text-indigo-800 shadow-sm' : 'border-slate-100 bg-slate-50 hover:border-indigo-300 text-slate-600'}`}>
              <div className={`mt-0.5 w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${isSelected ? 'border-indigo-600 bg-indigo-600' : 'border-slate-300'}`}>
                {isSelected && <Check className="w-2.5 h-2.5 text-white" />}
              </div>
              <span className="font-medium text-sm leading-tight">{t[opt] || opt}</span>
            </button>
          );
        })}
      </div>
    </div>
  );

  // Memoized so filtering does not re-run on unrelated state changes
  const filteredAndSortedData = useMemo(() => {
    const typesWithShapeFilter = selectedShapes.map(s => deviceData.find(d => d.shape === s)?.type);

    let filtered = regionData.filter(item => {
      const matchesDevice = selectedDevices.length === 0 || selectedDevices.includes(item.type);

      const matchesShape = selectedShapes.length === 0 || (
        selectedShapes.includes(item.shape) || !typesWithShapeFilter.includes(item.type)
      );

      const matchesClass = selectedClasses.length === 0 || (() => {
        const drugComps = item.class.split('/').map(s => s.trim());
        if (drugComps.length !== selectedClasses.length) return false;
        return selectedClasses.every(c => drugComps.includes(c));
      })();

      const matchesDisease = selectedDiseases.length === 0 || selectedDiseases.every(d => item.indications.includes(d));
      const matchesRole = selectedRoles.length === 0 || selectedRoles.every(r => item.role.includes(r));
      const matchesMart = !martOnly || item.isMart;
      const matchesExtraFine = !extraFineOnly || item.isExtraFine;
      const matchesNlem = !(nlemOnly && countries.includes('th')) || !!nlemOf(item);
      const matchesPif = !pifActive || pifNeeded(item.flowRate) <= pifValue;
      // Matches brand or molecule under any of its spellings (salbutamol / albuterol ...)
      const matchesSearch = drugSearchText(item).includes(searchTerm.toLowerCase().trim());

      return matchesDevice && matchesShape && matchesClass && matchesDisease && matchesRole && matchesMart && matchesExtraFine && matchesNlem && matchesPif && matchesSearch;
    });

    return filtered.sort((a, b) => {
      // unknown prices go last in both directions
      if (sortOrder === 'priceAsc') return (a.hiddenPrice ?? 1e9) - (b.hiddenPrice ?? 1e9) || a.marketName.localeCompare(b.marketName);
      if (sortOrder === 'priceDesc') return (b.hiddenPrice ?? -1) - (a.hiddenPrice ?? -1) || a.marketName.localeCompare(b.marketName);
      // Device sort groups by the named device (Breezhaler, Diskus, Easyhaler, Ellipta, MDI ...),
      // then by brand name A-Z within each device.
      if (sortOrder === 'deviceAsc' || sortOrder === 'deviceDesc') {
        const dev = a.shape.localeCompare(b.shape, 'en', { sensitivity: 'base' });
        return (sortOrder === 'deviceAsc' ? dev : -dev) || a.marketName.localeCompare(b.marketName);
      }
      if (sortOrder === 'nameDesc') return b.marketName.localeCompare(a.marketName);
      return a.marketName.localeCompare(b.marketName);
    });
  }, [selectedDevices, selectedShapes, selectedClasses, selectedDiseases, selectedRoles, martOnly, extraFineOnly, nlemOnly, countries, pifActive, pifValue, searchTerm, sortOrder, regionData]);

  // Device types the entered inspiratory flow rules out, grouped by the flow they need
  const pifHiddenSummary = useMemo(() => {
    if (!pifActive) return null;
    const groups = {};
    regionData.forEach(d => {
      if (pifNeeded(d.flowRate) > pifValue) {
        const name = DEVICE_NAMES[d.shape] ? DEVICE_NAMES[d.shape].short : d.shape;
        (groups[d.flowRate] = groups[d.flowRate] || new Set()).add(name);
      }
    });
    return Object.entries(groups).map(([flow, names]) => `${[...names].join(', ')}: ${flow}`).join('; ');
  }, [pifActive, pifValue, regionData]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedDevices([]);
    setSelectedShapes([]);
    setSelectedClasses([]);
    setSelectedDiseases([]);
    setSelectedRoles([]);
    setMartOnly(false);
    setExtraFineOnly(false);
    setNlemOnly(false);
    setThStatus(['current']);
    setPifInput('');
    setCountries(['th']);
  };
  const activeFilterCount = selectedDevices.length + selectedShapes.length + selectedClasses.length + selectedDiseases.length + selectedRoles.length
    + (martOnly ? 1 : 0) + (extraFineOnly ? 1 : 0) + (nlemOnly && countries.includes('th') ? 1 : 0) + (pifInput !== '' ? 1 : 0)
    + (thStatus.join() !== 'current' ? 1 : 0) + (countries.join() !== 'th' ? 1 : 0);
  // Active filters as removable chips above the result count (also visible while the filter panel is closed).
  // Countries and FDA status are one chip each; removing it returns that filter to its default.
  const filterChips = [
    ...(searchTerm !== '' ? [{ key: 'search', label: `${t.chipSearch}: ${searchTerm}`, off: () => setSearchTerm('') }] : []),
    ...(countries.join() !== 'th' ? [{ key: 'countries', label: `${t.countriesLabel}: ${countries.length ? countries.map(r => t.countryCodes[r]).join(', ') : t.chipNone}`, off: () => setCountries(['th']) }] : []),
    ...(thStatus.join() !== 'current' ? [{ key: 'status', label: `${t.thRegLabel}: ${thStatus.map(k => t.thRegOpts[k]).join(', ')}`, off: () => setThStatus(['current']) }] : []),
    ...(nlemOnly && countries.includes('th') ? [{ key: 'nlem', label: t.nlemOnly, off: () => setNlemOnly(false) }] : []),
    ...selectedDiseases.map(d => ({ key: `disease-${d}`, label: d, off: () => setSelectedDiseases(prev => prev.filter(x => x !== d)) })),
    ...selectedClasses.map(c => ({ key: `class-${c}`, label: c, off: () => setSelectedClasses(prev => prev.filter(x => x !== c)) })),
    ...selectedRoles.map(r => ({ key: `role-${r}`, label: t.roleLabels[r], off: () => setSelectedRoles(prev => prev.filter(x => x !== r)) })),
    ...(martOnly ? [{ key: 'mart', label: t.martOnly, off: () => setMartOnly(false) }] : []),
    ...(extraFineOnly ? [{ key: 'extrafine', label: t.extraFineOnly, off: () => setExtraFineOnly(false) }] : []),
    ...(pifInput !== '' ? [{ key: 'pif', label: `${t.pifLabel}: ${pifInput} L/min`, off: () => setPifInput('') }] : []),
    ...selectedDevices.map(d => ({ key: `device-${d}`, label: d, off: () => { setSelectedDevices(prev => prev.filter(x => x !== d)); setSelectedShapes(prev => prev.filter(x => deviceData.find(y => y.shape === x)?.type !== d)); } })),
    ...selectedShapes.map(x => ({ key: `shape-${x}`, label: shapeName(x), off: () => setSelectedShapes(prev => prev.filter(y => y !== x)) })),
  ];
  // Anything other than the default view (Thailand, currently registered, no search or other filter)
  const filtersActive = searchTerm !== '' || pifInput !== '' || martOnly || extraFineOnly || nlemOnly
    || selectedDevices.length + selectedShapes.length + selectedClasses.length + selectedDiseases.length + selectedRoles.length > 0
    || thStatus.join() !== 'current' || countries.join() !== 'th';

  // Main list items. With brand rows on, strengths of one brand collapse into a row; it opens when tapped or when
  // a link points at one of its strengths (a search shows the row, not the full cards). The position is that of the brand's first product.
  const brandGroups = useMemo(() => { const g = new Map(); filteredAndSortedData.forEach(m => { const k = brandKey(m); if (!g.has(k)) g.set(k, []); g.get(k).push(m); });
    // inside a brand, strengths go in ascending order whatever the list is sorted by
    const nums = (m) => (strengthLabel(m).match(/\d+(?:\.\d+)?/g) || []).map(Number);
    g.forEach(list => list.sort((a, b) => { const x = nums(a), y = nums(b); for (let i = 0; i < Math.max(x.length, y.length); i++) { const d = (x[i] || 0) - (y[i] || 0); if (d) return d; } return 0; }));
    return g; }, [filteredAndSortedData]);
  const listItems = useMemo(() => {
    const vis = showAllCards ? filteredAndSortedData : filteredAndSortedData.slice(0, FIRST_PAINT_CARDS);
    if (!groupBrands) return vis.map(med => ({ med }));
    const out = [], seen = new Set();
    vis.forEach(m => {
      const k = brandKey(m), g = brandGroups.get(k);
      if (g.length < 2) { out.push({ med: m }); return; }
      if (seen.has(k)) return;
      seen.add(k);
      const open = openBrands.has(k) || g.some(x => x.id === highlightId);
      out.push({ brand: k, meds: g, open });
      if (open) g.forEach(x => out.push({ med: x, grouped: k }));
    });
    return out;
  }, [filteredAndSortedData, brandGroups, showAllCards, groupBrands, openBrands, highlightId]);

  // Deep link: #drug=<id> → make sure the product is visible, then scroll to and highlight it
  useEffect(() => {
    const open = () => {
      const id = drugIdFromHash();
      const med = id != null && deviceData.find(d => d.id === id);
      if (!med) return;
      clearFilters();
      if (thCancelled(med)) setThStatus(prev => TH_STATUSES.filter(x => x === 'past' || prev.includes(x)));
      const lic = LABEL_REGIONS.filter(r => licenceIn(med, r) || (r === 'th' && thCancelled(med)));
      setCountries(prev => (prev.some(r => lic.includes(r)) ? prev : LABEL_REGIONS.filter(x => prev.includes(x) || x === lic[0])));
      setHighlightId(id);
    };
    open();
    window.addEventListener('hashchange', open);
    return () => window.removeEventListener('hashchange', open);
  }, []);
  useEffect(() => {
    if (highlightId == null || !showAllCards) return;
    const t1 = setTimeout(() => { const el = document.getElementById('drug-' + highlightId); if (el) el.scrollIntoView({ block: 'center', behavior: 'smooth' }); }, 350);
    const t2 = setTimeout(() => setHighlightId(null), 4500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [highlightId, showAllCards]);

  const showToast = (message, ms = 3500) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), ms);
  };

  const handleExportPNGs = async () => {
    setIsExportingImages(true);
    setToastMessage(t.toastPreparing);
    try {
      const downloads = await getDownloads();
      let successCount = 0;

      for (const med of compareList) {
        const element = document.getElementById(`export-snippet-${med.id}`);
        if (!element) continue;
        const blob = await elementToPngBlob(element, '#f8fafc', 800);
        if (!blob) continue;
        const fileName = `Bronchodilator_${med.marketName.replace(/[^a-zA-Z0-9]/g, '_')}.png`;
        // A declined save prompt is the viewer's choice; don't count it as exported
        if (await deliverFile(blob, fileName, downloads) === 'saved') successCount++;
      }

      setToastMessage(successCount > 0 ? t.toastSuccess(successCount) : t.toastNone);
      setTimeout(() => setToastMessage(null), 3500);

    } catch (error) {
      console.error("Export failed:", error);
      setToastMessage(t.toastFail);
      setTimeout(() => setToastMessage(null), 4000);
    } finally {
      setIsExportingImages(false);
    }
  };

  const toggleCompare = (med) => {
      if (compareList.some(c => c.id === med.id)) {
          setCompareList(compareList.filter(c => c.id !== med.id));
      } else if (compareList.length < 3) {   // 3 so a controller + add-on + reliever fits the Follow-up Guide
          setCompareList([...compareList, med]);
      }
  };

  const catQs = t.catQs || [];

  return (
    <div id="main-app-container" className="min-h-screen bg-slate-100 p-2 sm:p-4 md:p-8 font-sans text-slate-900 pb-32 text-sm md:text-base overflow-clip w-full relative">

      {/* Custom Toast UI to replace blocked alerts() */}
      {toastMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[100] w-max max-w-[calc(100vw-1rem)] animate-in fade-in slide-in-from-top-5" data-toast>
          <div className="bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-slate-700">
            <span className="font-bold text-sm min-w-0 break-words">{toastMessage}</span>
            <button onClick={() => setToastMessage(null)} className="text-slate-400 hover:text-white transition-colors shrink-0">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Compare Floating Banner */}
      {compareList.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 p-2 z-40 flex justify-center animate-in slide-in-from-bottom-5 print:hidden">
          <div className="bg-slate-900 text-white px-2.5 py-2 rounded-xl shadow-2xl flex flex-col gap-1.5 w-full max-w-3xl border border-slate-700" data-select-bar>
            <div className="flex items-center gap-1.5 min-w-0">
              <Check className="w-3 h-3 text-emerald-400 shrink-0" />
              <h3 className="font-bold text-xs whitespace-nowrap">{compareList.length} {t.selected}</h3>
              <p className="text-[10px] text-slate-400 leading-snug break-words min-w-0 flex-1">{compareList.map(m => m.marketName).join(', ')}</p>
              <button onClick={() => setCompareList([])} className="shrink-0 text-slate-400 hover:text-white px-1.5 py-0.5 text-[11px] font-medium transition-colors">{t.clear}</button>
            </div>
            {/* one row of equal-width buttons: labels wrap inside the button, never off screen */}
            <div className="grid grid-flow-col auto-cols-fr gap-1.5">
              <button onClick={handleExportPNGs} disabled={isExportingImages} className="bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed text-white h-full min-w-0 px-1 py-1.5 rounded-lg font-bold transition-colors shadow-sm text-[10px] sm:text-[11px] leading-tight text-center flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1">
                 {isExportingImages ? t.exporting : t.exportPNG}
              </button>
              <button onClick={() => setIsFollowOpen(true)} data-bar-followup className="bg-violet-600 hover:bg-violet-500 text-white h-full min-w-0 px-1 py-1.5 rounded-lg font-bold transition-colors shadow-sm text-[10px] sm:text-[11px] leading-tight text-center flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1">
                <FollowIcon className="w-3 h-3 shrink-0" /> {FOLLOW_TEXT[lang].btn}
              </button>
              {compareList.length === 2 && (
                <button onClick={() => setIsCompareModalOpen(true)} className="bg-indigo-600 hover:bg-indigo-500 text-white h-full min-w-0 px-1 py-1.5 rounded-lg font-bold transition-colors shadow-sm text-[10px] sm:text-[11px] leading-tight text-center flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1">{t.compare}</button>
              )}
              {compareList.length === 2 && (
                <button onClick={() => setIsConvertOpen(true)} className="bg-purple-600 hover:bg-purple-500 text-white h-full min-w-0 px-1 py-1.5 rounded-lg font-bold transition-colors shadow-sm text-[10px] sm:text-[11px] leading-tight text-center flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1">
                  <ArrowRightLeft className="w-3 h-3 shrink-0" /> {t.convertBtn}
                </button>
              )}
              {compareList.length === 1 && (
                <button onClick={() => setIsEquivOpen(true)} className="bg-purple-600 hover:bg-purple-500 text-white h-full min-w-0 px-1 py-1.5 rounded-lg font-bold transition-colors shadow-sm text-[10px] sm:text-[11px] leading-tight text-center flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1">
                  <ListIcon className="w-3 h-3 shrink-0" /> {t.equivBtn}
                </button>
              )}
              {compareList.length === 1 && (
                <button onClick={() => setIsSheetOpen(true)} className="bg-sky-600 hover:bg-sky-500 text-white h-full min-w-0 px-1 py-1.5 rounded-lg font-bold transition-colors shadow-sm text-[10px] sm:text-[11px] leading-tight text-center flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1">
                  <BookOpen className="w-3 h-3 shrink-0" /> {t.sheetBtn}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Equivalent Drugs: only reachable with one drug selected from the list */}
      {isEquivOpen && compareList.length === 1 && (
        <EquivalentDrugsModal
          key={compareList[0].id}
          med={compareList[0]}
          t={t}
          countries={countries}
          onClose={() => setIsEquivOpen(false)}
          onConvert={(target) => { setCompareList([compareList[0], target]); setIsEquivOpen(false); setIsConvertOpen(true); }}
        />
      )}

      {/* Patient Sheet: only reachable with one drug selected from the list */}
      {isSheetOpen && compareList.length === 1 && (
        <PatientSheetModal key={compareList[0].id} med={compareList[0]} t={t} appLang={lang} onClose={() => setIsSheetOpen(false)} onToast={showToast} />
      )}

      {/* Dose Conversion Guide: only reachable with two drugs selected from the list */}
      {isConvertOpen && compareList.length === 2 && (
        <DoseConversionModal key={compareList.map(m => m.id).join('-')} pair={compareList} t={t} onClose={() => setIsConvertOpen(false)} />
      )}

      {/* Compare Details Modal */}
      {isCompareModalOpen && compareList.length === 2 && (
        <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 print:hidden">
          <div className="bg-slate-100 w-full max-w-5xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">

            <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-white rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-100 text-indigo-600 rounded-xl">
                  <CompareIcon className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-800 leading-tight">{t.compareTitle}</h2>
              </div>
              <button onClick={() => setIsCompareModalOpen(false)} className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-5 flex-grow overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 h-full">
                {compareList.map((med, idx) => (
                  <div key={`comp-${med.id}`} className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col relative shadow-sm">
                    <div className="absolute top-0 right-0 bg-slate-100 text-slate-400 text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl border-b border-l border-slate-200 uppercase tracking-widest">
                      {t.deviceLabel} {idx + 1}
                    </div>

                    <div className="flex items-start gap-4 mb-5">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 shrink-0">
                        {medIcon(med, "w-16 h-16 text-slate-700")}
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold text-slate-800">{med.marketName}</h3>
                        <RenderSubstances medClass={med.class} medSubstance={med.substance} className="text-slate-500 font-medium mt-1" />
                        <div className="mt-2">
                          <DiagnosticBadges indications={med.indications} t={t} med={med} />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 text-sm flex-grow">
                      <div>
                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">{t.pharmacologicalClass}</span>
                        <span className="font-bold text-slate-800 text-base flex items-center gap-2 flex-wrap">
                          {med.class}
                          {med.isExtraFine && <ExtraFineBadge t={t} />}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">{t.peakFlow}</span>
                        <span className="font-bold text-cyan-700 text-base break-words block">{flowText(med, t)}</span>
                      </div>

                      <div>
                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">{t.estCost}</span>
                        <PriceTag med={med} t={t} className="text-base" />
                      </div>

                      <div>
                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">{t.nlemStatus}</span>
                        <NlemBadge med={med} t={t} /> <AvailBadge med={med} t={t} />
                        {nlemNoteOf(med, t) && <p className="text-xs text-slate-500 mt-1 leading-snug">{nlemNoteOf(med, t)}</p>}
                      </div>

                      <div className="mt-4 min-w-0">
                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">{t.totalDosesExp}</span>
                        <span className="font-bold text-slate-700 mb-1 break-words block">{packText(med, t)}</span>
                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wide mt-3 mb-1">{t.expLabel}</span>
                        <span className="font-bold text-rose-600 break-words block">{expText(med, t)}</span>
                      </div>

                      <div className="mt-4">
                        <DoseRangeDisplay doseRange={med.doseRange} viewType="expanded-card" isMart={med.isMart} martMax={med.martMax} t={t} />
                        <CheckedLine med={med} t={t} />
                      </div>

                      <div className="bg-indigo-50 border border-indigo-100 p-3 rounded-xl text-indigo-900 mt-4">
                        <span className="block text-[10px] font-bold text-indigo-400 uppercase tracking-wide mb-1">{t.instructions}</span>
                        <p className="font-medium">{med.instructions}</p>
                      </div>

                      <div className={`border p-3 rounded-xl flex items-center gap-2 h-[72px] ${med.ventCompatible ? 'bg-cyan-50 border-cyan-200 text-cyan-800' : 'bg-rose-50 border-rose-200 text-rose-800'}`}>
                        <Wind className={`w-5 h-5 shrink-0 ${med.ventCompatible ? 'text-cyan-600' : 'text-rose-500 opacity-60'}`} />
                        <div className="flex flex-col justify-center">
                           <span className={`flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide leading-tight ${med.ventCompatible ? 'text-cyan-600' : 'text-rose-600'}`}>
                             {med.ventCompatible ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />} {t.ventilator} {med.ventCompatible ? t.compatible : t.notCompatible}
                           </span>
                           <span className="font-medium text-[11px] mt-0.5 leading-tight opacity-90"><VentNote med={med} t={t} /></span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Exacerbation Guide Modal */}
      {isExacModalOpen && (
        <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 print:hidden">
          <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl flex flex-col max-h-[95vh] animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-rose-50/80 rounded-t-2xl shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-rose-100 text-rose-600 rounded-xl">
                  <ActivityIcon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-800 leading-tight">{t.exacGuideTitle}</h2>
                  <p className="text-xs text-slate-500">{t.exacGuideSub}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <GuidelineFiguresButton set="exac" lang={lang} />
                <button onClick={() => setIsExacModalOpen(false)} className="p-2 text-slate-400 hover:text-slate-700 hover:bg-white rounded-full transition-colors" aria-label="Close">
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex px-4 sm:px-6 pt-3 bg-slate-50 border-b border-slate-200 shrink-0 gap-4 sm:gap-6 overflow-x-auto hide-scrollbar">
              <button onClick={() => setExacTab('Asthma')} className={`pb-2.5 px-2 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${exacTab === 'Asthma' ? 'border-rose-600 text-rose-700' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>Asthma (GINA 2026)</button>
              <button onClick={() => setExacTab('COPD')} className={`pb-2.5 px-2 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${exacTab === 'COPD' ? 'border-orange-600 text-orange-700' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>COPD (GOLD 2026)</button>
            </div>

            <div className="p-4 sm:p-6 flex-grow overflow-y-auto flex flex-col gap-6 bg-slate-50">

              {exacTab === 'Asthma' && (
                <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-bottom-2">
                   {/* Severity Grids */}
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                       {/* Mild/Mod */}
                       <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-sm flex flex-col relative overflow-hidden">
                           <div className="absolute top-0 left-0 w-1 h-full bg-rose-400"></div>
                           <h4 className="font-extrabold text-rose-700 text-base mb-1">{t.mildModExac}</h4>
                           <p className="text-[11px] text-slate-500 mb-3 border-b border-slate-100 pb-3 leading-relaxed">
                             <strong>{t.criteria}</strong> {t.asthmaMildCrit} <br/>
                             <strong>{t.vitals}</strong> {t.asthmaMildVit}
                           </p>
                           <div className="font-bold text-xs text-slate-800 mb-2 uppercase tracking-wider">{t.initMgmt}</div>
                           <ul className="text-xs text-slate-700 list-disc pl-4 mb-4 space-y-1.5">
                               <li><span className="font-bold">SABA:</span> {t.asthmaMildSaba}</li>
                               <li><span className="font-bold">Corticosteroids:</span> {t.asthmaMildCs}</li>
                               <li><span className="font-bold">Oxygen:</span> {t.asthmaMildOx}</li>
                               <li className="text-amber-700 bg-amber-50 rounded px-1 -ml-1"><strong>MART:</strong> {t.asthmaMildMart}</li>
                               <li><span className="font-bold">{t.ctrlLabel}</span> {t.asthmaMildCtrl}</li>
                              <li><span className="font-bold">{t.avoidLabel}</span> {t.asthmaAvoid}</li>
                           </ul>
                           <div className="mt-auto flex flex-col gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.recDevices}</span>
                               <ExacDeviceGroups rule="asthmaMild" list={exacDevices('asthmaMild', 'Asthma', rxData)} t={t} notes={{ icsForm: t.asthmaMildMart }} />
                           </div>
                       </div>

                       {/* Severe */}
                       <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-sm flex flex-col relative overflow-hidden">
                           <div className="absolute top-0 left-0 w-1 h-full bg-rose-700"></div>
                           <h4 className="font-extrabold text-rose-800 text-base mb-1">{t.severeExac}</h4>
                           <p className="text-[11px] text-slate-500 mb-3 border-b border-slate-100 pb-3 leading-relaxed">
                             <strong>{t.criteria}</strong> {t.asthmaSevCrit}<br/>
                             <strong>{t.vitals}</strong> {t.asthmaSevVit}
                           </p>
                           <div className="font-bold text-xs text-slate-800 mb-2 uppercase tracking-wider flex justify-between">{t.initMgmt} <span className="text-rose-600 text-[10px] bg-rose-50 px-1.5 py-0.5 rounded">{t.transferED}</span></div>
                           <ul className="text-xs text-slate-700 list-disc pl-4 mb-4 space-y-1.5">
                               <li><span className="font-bold">SABA + SAMA:</span> {t.asthmaSevSabaSama}</li>
                               <li><span className="font-bold">Corticosteroids:</span> {t.asthmaSevCs} <br/><span className="text-[10px] text-slate-500"><em>{t.asthmaSevCsAlt}</em></span></li>
                               <li><span className="font-bold">Adjuncts:</span> {t.asthmaSevAdj}</li>
                               <li><span className="font-bold">Oxygen:</span> {t.asthmaSevOx}</li>
                           </ul>
                           <div className="mt-auto flex flex-col gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.recDevices}</span>
                               <ExacDeviceGroups rule="asthmaSevere" list={exacDevices('asthmaSevere', 'Asthma', rxData)} t={t} />
                           </div>
                       </div>
                   </div>

                   {/* Next Steps / Support */}
                   <div className="bg-rose-50/50 border border-rose-200 rounded-xl p-4 sm:p-5 shadow-sm">
                       <h4 className="font-bold text-rose-800 text-sm mb-3 flex items-center gap-2 border-b border-rose-100 pb-2"><Wind className="w-4 h-4"/> {t.respSupport}</h4>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-[11px] md:text-xs text-rose-900 leading-relaxed">
                           <div className="flex flex-col gap-3">
                               <div>
                                   <span className="font-bold underline text-rose-700 block mb-1">{t.refractoryNext}</span> {t.refractoryNextDesc}
                               </div>
                               <div className="bg-rose-100/80 p-2.5 rounded-lg border border-rose-300 shadow-sm text-rose-900">
                                   <span className="font-bold uppercase tracking-wide text-[10px] text-rose-700 block mb-0.5">{t.nivCaution}</span>
                                   {t.nivCautionDesc}
                               </div>
                           </div>
                           <div className="bg-rose-100/50 p-3 rounded-lg border border-rose-200">
                               <span className="font-bold underline text-rose-800 mb-1 flex items-center gap-1.5"><ActivityIcon className="w-3.5 h-3.5" /> {t.intubationInd}</span>
                               <ul className="list-disc pl-4 space-y-0.5 mt-1 text-rose-900">
                                   <li>{t.intub2}</li>
                                   <li>{t.intub6}</li>
                                   <li>{t.intub7}</li>
                                   <li>{t.intub8}</li>
                               </ul>
                           </div>
                       </div>
                   </div>

                   {/* Disposition */}
                   <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                       <h4 className="font-bold text-slate-800 text-sm mb-3">{t.disposition}</h4>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                           <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3 sm:p-4">
                               <div className="font-bold text-emerald-800 mb-2 uppercase tracking-wide border-b border-emerald-100 pb-1.5">{t.whenDischarge}</div>
                               <ul className="text-emerald-700 list-disc pl-4 space-y-1">
                                   <li>{t.astDis1}</li>
                                   <li>{t.astDis2}</li>
                                   <li>{t.astDis3}</li>
                                  <li>{t.astDis4}</li>
                                   <li><strong>{t.astDisAct}</strong></li>
                               </ul>
                           </div>
                           <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 sm:p-4">
                               <div className="font-bold text-amber-800 mb-2 uppercase tracking-wide border-b border-amber-100 pb-1.5">{t.whenAdmit}</div>
                               <ul className="text-amber-700 list-disc pl-4 space-y-1">
                                   <li>{t.astAdm1}</li>
                                   <li>{t.astAdm2}</li>
                                   <li>{t.astAdm3}</li>
                                   <li>{t.astAdm4}</li>
                               </ul>
                           </div>
                       </div>
                   </div>
                </div>
              )}

              {exacTab === 'COPD' && (
                <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-bottom-2">
                   {/* Severity Grids */}
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                       {/* Mild/Mod */}
                       <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-sm flex flex-col relative overflow-hidden">
                           <div className="absolute top-0 left-0 w-1 h-full bg-orange-400"></div>
                           <h4 className="font-extrabold text-orange-700 text-base mb-1">{t.mildModExac}</h4>
                           <p className="text-[11px] text-slate-500 mb-3 border-b border-slate-100 pb-3 leading-relaxed">
                             <strong>{t.criteria}</strong> {t.copdMildCrit}
                           </p>
                           <div className="font-bold text-xs text-slate-800 mb-2 uppercase tracking-wider">{t.initMgmt}</div>
                           <ul className="text-xs text-slate-700 list-disc pl-4 mb-4 space-y-1.5">
                               <li><span className="font-bold">Mild:</span> {t.copdMildSaba}</li>
                               <li><span className="font-bold">Moderate:</span> {t.copdMildMod} <br/><span className="text-[10px] text-slate-500"><em>{t.copdMildModAlt}</em></span></li>
                               <li><span className="font-bold">Antibiotics:</span> {t.copdMildAbx}</li>
                               <li><span className="font-bold">Oxygen:</span> {t.copdMildOx}</li>
                           </ul>
                           <div className="mt-auto flex flex-col gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.recDevices}</span>
                               <ExacDeviceGroups rule="copdMild" list={exacDevices('copdMild', 'COPD', rxData)} t={t} />
                           </div>
                       </div>

                       {/* Severe */}
                       <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-sm flex flex-col relative overflow-hidden">
                           <div className="absolute top-0 left-0 w-1 h-full bg-orange-700"></div>
                           <h4 className="font-extrabold text-orange-800 text-base mb-1">{t.severeRespFail}</h4>
                           <p className="text-[11px] text-slate-500 mb-3 border-b border-slate-100 pb-3 leading-relaxed">
                             <strong>{t.criteria}</strong> {t.copdSevCrit}
                           </p>
                           <div className="font-bold text-xs text-slate-800 mb-2 uppercase tracking-wider flex justify-between">{t.inpatientMgmt} <span className="text-orange-600 text-[10px] bg-orange-50 px-1.5 py-0.5 rounded">{t.hospAdmit}</span></div>
                           <ul className="text-xs text-slate-700 list-disc pl-4 mb-4 space-y-1.5">
                               <li><span className="font-bold">Bronchodilators:</span> {t.copdSevBronch}</li>
                               <li><span className="font-bold">Corticosteroids:</span> {t.copdSevCs} <br/><span className="text-[10px] text-slate-500"><em>{t.copdSevCsAlt}</em></span></li>
                               <li><span className="font-bold">Antibiotics:</span> {t.copdSevAbx}</li>
                               <li><span className="font-bold">Ventilation:</span> {t.copdSevVent}</li>
                           </ul>
                           <div className="mt-auto flex flex-col gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.recDevices}</span>
                               <ExacDeviceGroups rule="copdSevere" list={exacDevices('copdSevere', 'COPD', rxData)} t={t} />
                           </div>
                       </div>
                   </div>

                   {/* Next Steps / Support */}
                   <div className="bg-orange-50/50 border border-orange-200 rounded-xl p-4 sm:p-5 shadow-sm">
                       <h4 className="font-bold text-orange-800 text-sm mb-3 flex items-center gap-2 border-b border-orange-100 pb-2"><Wind className="w-4 h-4"/> {t.respSupportProto}</h4>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-[11px] md:text-xs text-orange-900 leading-relaxed">
                           <div className="bg-orange-100/50 p-3 rounded-lg border border-orange-200">
                               <span className="font-bold underline text-orange-800 block mb-1">{t.nivIndication}</span>
                               <ul className="list-disc pl-4 space-y-0.5 mt-1 text-orange-800">
                                 <li>{t.niv1}</li>
                                 <li>{t.niv2}</li>
                                 <li>{t.niv3}</li>
                               </ul>
                           </div>
                           <div className="p-3">
                               <span className="font-bold underline text-rose-700 mb-1 flex items-center gap-1.5"><ActivityIcon className="w-3.5 h-3.5" /> {t.intubationInd}</span>
                               <ul className="list-disc pl-4 space-y-0.5 mt-1 text-rose-900">
                                   <li>{t.intub1}</li>
                                   <li>{t.intub2}</li>
                                   <li>{t.intub3}</li>
                                   <li>{t.intub4}</li>
                                   <li>{t.intub5}</li>
                                   <li>{t.intub9}</li>
                                   <li>{t.intub10}</li>
                                   <li>{t.intub11}</li>
                               </ul>
                           </div>
                       </div>
                   </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* Changelog Modal */}
      {isChangelogOpen && (
        <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 print:hidden">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-slate-50 rounded-t-2xl shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-200 text-slate-700 rounded-xl">
                  <HistoryIcon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-800 leading-tight">{t.changelogTitle}</h2>
                  <p className="text-xs text-slate-500">{t.changelogSub}</p>
                </div>
              </div>
              <button onClick={() => setIsChangelogOpen(false)} className="p-2 text-slate-400 hover:text-slate-700 hover:bg-white rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4 sm:p-6 flex-grow overflow-y-auto flex flex-col gap-5 bg-slate-50/50">
              {changelogData.map((log, idx) => { const lt = lang === 'th' ? CHANGELOG_TH[log.version] : null; const feats = lt ? lt.features : log.features; const fixes = lt ? lt.bugs : log.bugs; return (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-sm relative">
                  {idx === 0 && <div className="absolute top-0 right-0 bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-xl uppercase tracking-widest">{t.latest}</div>}
                  <div className="flex items-baseline justify-between mb-3 border-b border-slate-100 pb-3">
                    <h3 className="text-lg font-extrabold text-slate-800">{log.version}</h3>
                    <span className="text-xs font-bold text-slate-400">{lang === 'th' ? thaiDate(log.date) : log.date}</span>
                  </div>

                  {feats.length > 0 && (
                    <div className="mb-4">
                      <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-wider mb-2 flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5" /> {t.newFeatures}</span>
                      <ul className="text-xs text-slate-700 space-y-1.5 pl-5 list-disc">
                        {feats.map((feat, i) => <li key={i}>{feat}</li>)}
                      </ul>
                    </div>
                  )}

                  {fixes.length > 0 && (
                    <div>
                      <span className="text-[10px] font-bold text-rose-500 uppercase tracking-wider mb-2 flex items-center gap-1.5"><X className="w-3 h-3" /> {t.bugFixes}</span>
                      <ul className="text-xs text-slate-700 space-y-1.5 pl-5 list-disc">
                        {fixes.map((bug, i) => <li key={i}>{bug}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              ); })}
            </div>
          </div>
        </div>
      )}

      {/* Stepped Therapy Native Guideline Modal */}
      {isWizardOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 print:hidden">
          <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col max-h-[95vh] animate-in fade-in zoom-in-95 duration-200">

            <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-emerald-50/50 rounded-t-2xl shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-100 text-emerald-600 rounded-xl">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-800 leading-tight">{t.maintGuideTitle}</h2>
                  <p className="text-xs text-slate-500">{t.maintGuideSub}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <GuidelineFiguresButton set="maint" lang={lang} />
                <button onClick={() => {setIsWizardOpen(false); resetWizard();}} className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-5 flex-grow overflow-y-auto flex flex-col gap-8 bg-slate-50">
              {/* Step 1 */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{t.step1Title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button onClick={() => { setWizardDisease('Asthma'); setWizardSeverity([]); }} className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 ${wizardDisease === 'Asthma' ? 'border-indigo-600 bg-indigo-50 text-indigo-700 shadow-md' : 'border-slate-200 bg-white hover:border-indigo-300 text-slate-500'}`}>
                    <ActivityIcon className="w-10 h-10" />
                    <span className="font-bold text-lg">Asthma (GINA)</span>
                  </button>
                  <button onClick={() => { setWizardDisease('COPD'); setWizardSeverity([]); }} className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 ${wizardDisease === 'COPD' ? 'border-emerald-600 bg-emerald-50 text-emerald-700 shadow-md' : 'border-slate-200 bg-white hover:border-emerald-300 text-slate-500'}`}>
                    <Wind className="w-10 h-10" />
                    <span className="font-bold text-lg">COPD (GOLD)</span>
                  </button>
                </div>
              </div>

              {/* Step 2: Asthma Track (Conditional) */}
              {wizardDisease === 'Asthma' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 border-t border-slate-200 pt-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{t.step2Title}</h3>
                  <p className="text-sm text-slate-500 mb-4">{t.step2Sub}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <button onClick={() => { setWizardAsthmaTrack(1); }} className={`text-left p-4 rounded-xl border-2 transition-all flex flex-col gap-1 ${wizardAsthmaTrack === 1 ? 'border-indigo-600 bg-indigo-50 shadow-md' : 'border-slate-200 bg-white hover:border-indigo-300'}`}>
                         <div className={`font-bold ${wizardAsthmaTrack === 1 ? 'text-indigo-800' : 'text-slate-700'}`}>{t.track1Title}</div>
                         <div className="text-xs text-slate-500 mt-1 leading-relaxed">{t.track1Sub}</div>
                      </button>
                      <button onClick={() => { setWizardAsthmaTrack(2); }} className={`text-left p-4 rounded-xl border-2 transition-all flex flex-col gap-1 ${wizardAsthmaTrack === 2 ? 'border-indigo-600 bg-indigo-50 shadow-md' : 'border-slate-200 bg-white hover:border-indigo-300'}`}>
                         <div className={`font-bold ${wizardAsthmaTrack === 2 ? 'text-indigo-800' : 'text-slate-700'}`}>{t.track2Title}</div>
                         <div className="text-xs text-slate-500 mt-1 leading-relaxed">{t.track2Sub}</div>
                      </button>
                  </div>
                </div>
              )}

              {/* Severity Step */}
              {wizardDisease && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 border-t border-slate-200 pt-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{stepNumberSeverity}. {t.severityTitle}</h3>
                  <p className="text-sm text-slate-500 mb-6">{t.severitySub}</p>

                  <div className="flex flex-col gap-6">
                    {wizardDisease === 'Asthma' && asthmaSeverityGroups.map(renderSeverityGroup)}

                    {wizardDisease === 'COPD' && (
                      <>
                        {renderSeverityGroup(copdSeverityGroups[0], 'gold-stage')}

                        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
                          <h4 className="font-bold text-slate-700 mb-3 uppercase tracking-wider text-xs">{t.symptomBurden}</h4>

                          <div className="flex bg-slate-100 p-1 rounded-xl w-fit mb-4">
                            <button
                              onClick={() => setActiveSymptomTab('mMRC')}
                              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${activeSymptomTab === 'mMRC' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                            >{t.mmrcScale}</button>
                            <button
                              onClick={() => setActiveSymptomTab('CAT')}
                              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${activeSymptomTab === 'CAT' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                            >{t.catScore}</button>
                          </div>

                          {activeSymptomTab === 'mMRC' && (
                            <div className="flex flex-col gap-2">
                              {MMRC_OPTIONS.map((opt, idx) => (
                                <button
                                  key={`mmrc-${idx}`}
                                  onClick={() => setCopdMmrc(idx)}
                                  className={`text-left p-3.5 rounded-xl border-2 transition-all flex items-start gap-3 ${copdMmrc === idx ? 'border-emerald-600 bg-emerald-50 text-emerald-800 shadow-sm' : 'border-slate-100 bg-slate-50 hover:border-emerald-300 text-slate-600'}`}
                                >
                                  <div className={`mt-0.5 w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${copdMmrc === idx ? 'border-emerald-600 bg-emerald-600' : 'border-slate-300'}`}>
                                    {copdMmrc === idx && <Check className="w-2.5 h-2.5 text-white" />}
                                  </div>
                                  <span className="font-medium text-sm leading-tight">{t[opt] || opt}</span>
                                </button>
                              ))}
                            </div>
                          )}

                          {activeSymptomTab === 'CAT' && (
                            <div className="flex flex-col gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                               <div className="flex justify-between items-center mb-1">
                                 <span className="font-bold text-slate-700">{t.answer8}</span>
                                 <span className="bg-emerald-600 text-white px-3 py-1.5 rounded-lg font-bold shadow-sm">{t.total} {copdCat.reduce((a,b)=>a+b,0)} / 40</span>
                               </div>
                               {catQs.map((q, idx) => (
                                 <div key={`cat-${idx}`} className="flex flex-col gap-1.5 p-3 bg-white rounded-lg border border-slate-200">
                                   <div className="flex justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wide leading-tight">
                                     <span className="w-1/2 text-left pr-2">{q.left}</span>
                                     <span className="w-1/2 text-right pl-2">{q.right}</span>
                                   </div>
                                   <div className="flex items-center gap-3 mt-1.5">
                                     <span className="text-xs font-bold text-slate-400 w-3 text-center">0</span>
                                     <input
                                       type="range"
                                       min="0" max="5" step="1"
                                       value={copdCat[idx]}
                                       onChange={(e) => {
                                         const newCat = [...copdCat];
                                         newCat[idx] = parseInt(e.target.value);
                                         setCopdCat(newCat);
                                         setCopdCatTouched(true);
                                       }}
                                       className="flex-grow h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                                     />
                                     <span className="text-xs font-bold text-emerald-600 w-3 text-center">{copdCat[idx]}</span>
                                   </div>
                                 </div>
                               ))}
                            </div>
                          )}
                        </div>

                        {renderSeverityGroup(copdSeverityGroups[1], 'exac-history')}

                        {wizardSeverity.includes("One or More moderate or severe exacerbation") && (
                          <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                            {renderSeverityGroup(EOSINOPHIL_GROUP, 'eos')}
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {!isSeverityComplete && wizardDisease && (
                    <div className="mt-6 bg-amber-50/80 border border-amber-200 rounded-xl p-4 flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2">
                      <div className="p-2 bg-amber-100 text-amber-600 rounded-lg shrink-0">
                        <ActivityIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-amber-800 mb-1">{t.incompleteProfile}</span>
                        <span className="text-xs text-amber-700">{t.incompleteSub}</span>
                        <ul className="list-disc pl-5 mt-2 text-xs font-bold text-amber-700 space-y-1">
                           {getMissingRequirements().map((req, idx) => (
                              <li key={idx}>{req}</li>
                           ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Results Display */}
              {calculatedPlan && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 border-t border-slate-200 pt-6">
                  <div className="bg-emerald-600 text-white rounded-t-2xl p-6 shadow-md">
                    <span className="block text-emerald-200 font-bold tracking-widest text-xs uppercase mb-1">{t.calcGuideClass}</span>
                    <h3 className="text-3xl font-extrabold mb-4">{calculatedPlan.stage}</h3>

                    <div className="bg-emerald-700/50 rounded-xl p-4 space-y-3 border border-emerald-500/30">
                      <div>
                        <span className="text-emerald-200 uppercase tracking-widest text-[10px] font-bold block mb-1">{t.clinicalProfile}</span>
                        <p className="text-emerald-50 leading-relaxed text-sm">{calculatedPlan.severityRationale}</p>
                      </div>
                      <div className="h-px bg-emerald-500/40 w-full"></div>
                      <div>
                        <span className="text-emerald-200 uppercase tracking-widest text-[10px] font-bold block mb-1">{t.pharmRec}</span>
                        <p className="text-white font-medium leading-relaxed text-sm">{calculatedPlan.drugRecommendation}</p>
                      </div>
                      {calculatedPlan.riskNote && (
                        <div data-gina-risk className="rounded-lg bg-amber-50 border border-amber-200 p-3 text-xs text-amber-900 leading-relaxed flex gap-2">
                          <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
                          <span><span className="font-bold">{t.riskExacTitle}: </span>{calculatedPlan.riskNote}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-white rounded-b-2xl p-6 shadow-md border-x border-b border-slate-200 space-y-8">
                    {calculatedPlan.isMartTrack ? (
                      <div>
                        <h4 className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                           <Sparkles className="w-4 h-4 text-amber-500" /> {t.recMart}
                        </h4>
                        {calculatedPlan.controllers.length > 0 ? (
                          <PlanDrugList key={`mart-${calculatedPlan.stage}`} list={calculatedPlan.controllers} t={t} />
                        ) : (
                          <p className="text-slate-500 text-sm italic p-4 bg-slate-50 rounded-xl border border-slate-100">{t.noMart}</p>
                        )}
                      </div>
                    ) : (
                      <>
                        <div>
                          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                             <ShieldPlus className="w-4 h-4 text-indigo-500" /> {t.recMaint}
                          </h4>
                          {calculatedPlan.controllers.length > 0 ? (
                            <PlanDrugList key={`maint-${calculatedPlan.stage}`} list={calculatedPlan.controllers} t={t} />
                          ) : (
                            <p className="text-slate-500 text-sm italic p-4 bg-slate-50 rounded-xl border border-slate-100">{t.noMaint}</p>
                          )}
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                             <ActivityIcon className="w-4 h-4 text-orange-500" /> {t.recRescue}
                          </h4>
                          {calculatedPlan.relievers.length > 0 ? (
                            <PlanDrugList key={`rel-${calculatedPlan.stage}`} list={calculatedPlan.relievers} t={t} />
                          ) : (
                            <p className="text-slate-500 text-sm italic">{t.noRescue}</p>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-slate-100 bg-white rounded-b-2xl flex justify-between shrink-0">
               <div />
               <button onClick={resetWizard} className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-6 py-2 rounded-xl font-bold transition-colors">{t.clearForm}</button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto relative pt-10 md:pt-0">

        {/* Top Right Controls: below the sticky filter bar (z-30) and every pop-up (z-50) */}
        <div className="absolute top-0 right-0 flex items-center gap-1.5 md:gap-2 z-20 print:hidden" data-top-controls>
          <button onClick={() => setIsChangelogOpen(true)} className="text-[10px] font-bold text-slate-500 bg-white shadow-sm px-2.5 py-1.5 rounded-full border border-slate-200 flex items-center gap-1.5 hover:bg-slate-50 hover:text-indigo-600 hover:border-indigo-200 transition-all cursor-pointer">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            {APP_VERSION}
          </button>
          {FEEDBACK_FORM_URL && (
            <a href={FEEDBACK_FORM_URL} target="_blank" rel="noopener noreferrer" title={t.feedbackTitle} aria-label={t.feedbackTitle} data-feedback
              className="text-[10px] font-bold text-slate-500 bg-white shadow-sm px-2.5 py-1.5 rounded-full border border-slate-200 flex items-center gap-1.5 hover:bg-slate-50 hover:text-indigo-600 hover:border-indigo-200 transition-all cursor-pointer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" /></svg>
              <span className="hidden sm:inline">{t.feedbackBtn}</span>
            </a>
          )}
          <button onClick={() => setLang(lang === 'en' ? 'th' : 'en')} className="text-[10px] md:text-xs font-bold text-slate-700 bg-white shadow-sm px-2.5 py-1.5 rounded-full border border-slate-200 flex items-center gap-1.5 hover:bg-slate-50 transition-all cursor-pointer">
            {lang === 'en' ? 'ไทย' : 'EN'}
          </button>
          <button onClick={toggleTheme} aria-label={theme === 'dark' ? t.themeToLight : t.themeToDark} title={theme === 'dark' ? t.themeToLight : t.themeToDark} className="w-7 h-7 text-slate-600 bg-white shadow-sm rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:text-slate-700 transition-all cursor-pointer">
            {theme === 'dark' ? <SunIcon className="w-3.5 h-3.5" /> : <MoonIcon className="w-3.5 h-3.5" />}
          </button>
        </div>

        <header className="mb-3 md:mb-4">
          <div>
            {/* Phones: one-line title, no tagline, credit and disclaimer link on one line, so the list starts higher */}
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-800 mb-1 md:mb-2 leading-tight sm:pr-32 md:pr-48">{t.title}</h1>
            <p className="hidden sm:block text-xs md:text-sm text-slate-600" data-subtitle>{t.subtitle}</p>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 sm:block" data-credit-line>
              <p className="text-[10px] md:text-xs font-semibold text-indigo-500 sm:mt-1">Made by Warodom Phaenthong, M.D.</p>
              <a href="#disclaimer-heading" onClick={(e) => { e.preventDefault(); document.getElementById('disclaimer-heading')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="block sm:mt-1 text-[11px] md:text-xs font-semibold text-amber-700 hover:underline print:hidden">{t.discLink}</a>
            </div>
          </div>

        </header>

        {/* Guides and search row: always pinned */}
        <div ref={barRef} className="sticky top-0 z-30 pt-2 pb-2 md:pt-3 md:pb-2.5 -mt-2 md:-mt-3 bg-slate-100/95 backdrop-blur-md print:hidden" data-search-bar>
          {/* Guides: pinned with the search row. On phones one row of six icon tiles with short names; a normal button row from tablet width up */}
          <div className="grid grid-cols-6 gap-1 sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:gap-2 print:hidden w-full mb-2" data-guide-buttons>
            {[
              ['exac', t.exacGuide, 'bg-rose-600 hover:bg-rose-700 border-rose-700', ActivityIcon, () => { setIsExacModalOpen(true); setIsWizardOpen(false); setIsDeviceGuideOpen(false); }],
              ['maint', t.maintenanceGuide, 'bg-emerald-600 hover:bg-emerald-700 border-emerald-700', Stethoscope, () => { setIsWizardOpen(true); setIsExacModalOpen(false); setIsDeviceGuideOpen(false); }],
              ['follow', FOLLOW_TEXT[lang].btn, 'bg-violet-600 hover:bg-violet-700 border-violet-700', FollowIcon, () => { setIsFollowOpen(true); setIsExacModalOpen(false); setIsWizardOpen(false); setIsDeviceGuideOpen(false); }],
              ['device', t.deviceGuide, 'bg-blue-600 hover:bg-blue-700 border-blue-700', BookOpen, () => { setIsDeviceGuideOpen(true); setIsExacModalOpen(false); setIsWizardOpen(false); }],
              ['spacer', SPACER_TEXT[lang].btn, 'bg-teal-600 hover:bg-teal-700 border-teal-700', SpacerIcon, () => { setIsSpacerOpen(true); setIsExacModalOpen(false); setIsWizardOpen(false); setIsDeviceGuideOpen(false); }],
              ['steroid', ICS_TEXT[lang].btn, 'bg-fuchsia-600 hover:bg-fuchsia-700 border-fuchsia-700', CalcIcon, () => { setIsIcsCalcOpen(true); setIsExacModalOpen(false); setIsWizardOpen(false); setIsDeviceGuideOpen(false); }],
            ].map(([k, label, tone, Icon, open]) => (
              <button key={k} onClick={open} data-guide={k} aria-label={label} title={label} className={`flex flex-col sm:flex-row min-w-0 sm:flex-grow-0 items-center justify-center gap-0.5 sm:gap-1.5 md:gap-2 ${tone} border text-white px-0.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-lg font-bold shadow-sm transition-all active:scale-95 text-xs md:text-sm`}>
                <Icon className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 shrink-0" /> <span className="text-[10px] max-[359px]:text-[9px] leading-[1.15] text-center sm:text-[length:inherit] sm:leading-normal sm:whitespace-nowrap min-w-0 max-w-full break-words">{narrow ? t.guideShort[k] : label}</span>
              </button>
            ))}
          </div>

          {/* Row 1: Search + Sort + View Mode (+ Filters button on phones) */}
          <div className="flex gap-2 md:gap-3 w-full h-9 md:h-10">
            <button onClick={() => setSearchOpen(true)} aria-label={t.searchOpen} title={t.searchOpen} aria-expanded={searchOpen} data-search-open
              className={`${searchOpen ? 'hidden' : 'flex sm:hidden'} shrink-0 h-full w-9 items-center justify-center rounded-lg border shadow-sm transition-colors ${searchTerm !== '' ? 'bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-500' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
              <Search className="w-4 h-4" />
            </button>
            <div className={`${searchOpen ? 'block flex-1' : 'hidden sm:block'} relative min-w-0 sm:flex-none sm:w-[45%] md:w-[35%] lg:w-1/3 h-full`} data-search-box>
              <input ref={searchRef} type="text" placeholder={narrow ? t.searchPlaceholderShort : t.searchPlaceholder} className="w-full h-full pl-3 pr-9 md:pl-4 md:pr-10 rounded-lg border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-base sm:text-xs md:text-sm transition-shadow" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onBlur={() => setSearchOpen(false)} onKeyDown={(e) => { if (e.key === 'Enter') e.currentTarget.blur(); }} />
              <Search className="hidden sm:block absolute right-2.5 md:right-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5 md:w-4 md:h-4 pointer-events-none" />
              <button onMouseDown={(e) => e.preventDefault()} onClick={() => { setSearchTerm(''); setSearchOpen(false); if (searchRef.current) searchRef.current.blur(); }} aria-label={t.searchClose} title={t.searchClose} data-search-close
                className="flex sm:hidden absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100"><X className="w-4 h-4" /></button>
            </div>

            <div className={`${searchOpen ? 'hidden sm:block' : 'block'} relative flex-1 min-w-0 sm:basis-auto h-full`} data-sort>
              <div className="absolute inset-y-0 left-0 pl-2 sm:pl-2.5 flex items-center pointer-events-none">
                <SortIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-slate-400" />
              </div>
              <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} aria-label={t.sortLabel} className="w-full h-full pl-6 pr-1 sm:pl-8 sm:pr-6 rounded-lg border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-600 text-[11px] md:text-xs font-bold appearance-none cursor-pointer">
                <option value="nameAsc">{t.sortNameAsc}</option>
                <option value="nameDesc">{t.sortNameDesc}</option>
                <option value="deviceAsc">{t.sortDeviceAsc}</option>
                <option value="deviceDesc">{t.sortDeviceDesc}</option>
                <option value="priceAsc">{t.sortCostLow}</option>
                <option value="priceDesc">{t.sortCostHigh}</option>
              </select>
            </div>

            <div className={`${searchOpen ? 'hidden sm:flex' : 'flex'} bg-white rounded-lg border border-slate-200 p-0.5 shadow-sm shrink-0 items-center h-full`}>
              <button onClick={() => setViewMode('grid')} className={`h-full px-2 md:px-2.5 rounded-md transition-colors flex items-center justify-center ${viewMode === 'grid' ? 'bg-slate-100 text-slate-900' : 'text-slate-400 hover:text-slate-600'}`} aria-label={t.gridView}>
                <LayoutGrid className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </button>
              <button onClick={() => setViewMode('list')} className={`h-full px-2 md:px-2.5 rounded-md transition-colors flex items-center justify-center ${viewMode === 'list' ? 'bg-slate-100 text-slate-900' : 'text-slate-400 hover:text-slate-600'}`} aria-label={t.listView}>
                <ListIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </button>
            </div>

            {/* Opens and closes the filter panel. Blue while any filter is on, so a closed panel still says filters apply. */}
            <button onClick={() => setFiltersOpen(v => !v)} aria-expanded={filtersOpen} aria-controls="filter-bar" aria-label={t.filtersBtn} title={t.filtersBtn} data-filters-toggle
              className={`shrink-0 h-full px-2 md:px-3 rounded-lg border shadow-sm flex items-center gap-1 md:gap-1.5 text-[10px] md:text-xs font-bold whitespace-nowrap transition-colors ${activeFilterCount ? 'bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-500' : filtersOpen ? 'bg-slate-100 border-slate-300 text-slate-900' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 md:w-3.5 md:h-3.5" aria-hidden="true"><path d="M3 5h18l-7 8.5V19l-4 2v-7.5z" /></svg>
              <span className="max-[359px]:hidden">{t.filtersBtn}</span>{activeFilterCount > 0 && <span className="tabular-nums" data-filter-count>{activeFilterCount}</span>}
            </button>
          </div>
        </div>

        {/* Filter rows: they wrap onto as many lines as the width needs (no sideways scrolling), pinned under the
            search row (the offsets are the search row's height). Shown while opened with the Filters button (the
            default on tablet and desktop); on phones the panel scrolls inside if taller than most of the screen. */}
        <div id="filter-bar" className={`${filtersOpen ? 'flex' : 'hidden'} sticky z-20 max-h-[70vh] overflow-y-auto sm:max-h-none sm:overflow-visible pb-2 md:pb-3 mb-3 md:mb-6 bg-slate-100/95 backdrop-blur-md border-b border-slate-200/50 print:hidden flex-col gap-2 md:gap-2.5`} style={{ top: barH - 1 }} data-filter-bar>
          {/* Filter row 1: registration. Countries, licence status, NLEM (Thailand only) and the licence-holder switch */}
          <div className="flex flex-wrap items-center gap-1.5 md:gap-2 w-full min-w-0" data-filter-row="registration">

            {/* Countries */}
            <div className="flex bg-white rounded-md border border-slate-200 p-0.5 shadow-sm shrink-0 items-center h-[26px] md:h-7 gap-0.5" role="group" aria-label={t.countriesLabel} title={t.countriesTitle}>
              <span className="pl-1 pr-0.5 text-[10px] font-bold text-slate-400 whitespace-nowrap">{t.countriesLabel}:</span>
              <button onClick={toggleAllCountries} aria-pressed={allCountries} title={t.countriesAllTitle} data-country-all
                className={`h-full px-1.5 md:px-2 rounded flex items-center justify-center text-[10px] font-bold transition-all whitespace-nowrap ${allCountries ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}>
                {t.countriesAll}
              </button>
              {LABEL_REGIONS.map(key => (
                <button key={key} onClick={() => toggleCountry(key)} aria-pressed={countries.includes(key)} title={t.countryNames[key]}
                  className={`h-full px-1.5 md:px-2 rounded flex items-center justify-center text-[10px] font-bold transition-all whitespace-nowrap ${countries.includes(key) ? COUNTRY_COLORS[key].on : COUNTRY_COLORS[key].off}`}>
                  {t.countryCodes[key]}
                </button>
              ))}
            </div>
            {/* Registration status in the selected countries */}
            <div className="flex bg-white rounded-md border border-slate-200 p-0.5 shadow-sm shrink-0 items-center h-[26px] md:h-7 gap-0.5" role="group" aria-label={t.thRegLabel} title={t.thRegTitle} data-threg-group>
              <span className="pl-1 pr-0.5 text-[10px] font-bold text-slate-400 whitespace-nowrap inline-flex items-center gap-0.5" data-threg-label>{t.thRegLabel}<Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-emerald-600" /></span>
              {TH_STATUSES.map(k => {
                const on = thStatus.includes(k);
                const tone = k === 'current' ? ['bg-emerald-600 text-white shadow-sm', 'text-emerald-700 hover:bg-emerald-50'] : k === 'past' ? ['bg-amber-500 text-white shadow-sm', 'text-amber-700 hover:bg-amber-50'] : ['bg-slate-600 text-white shadow-sm', 'text-slate-600 hover:bg-slate-50'];
                return (
                  <button key={k} onClick={() => toggleThStatus(k)} aria-pressed={on} data-threg={k}
                    className={`h-full px-1.5 md:px-2 rounded flex items-center justify-center gap-1 text-[10px] font-bold transition-all whitespace-nowrap ${on ? tone[0] : tone[1]}`}>
                    {k !== 'current' && <span aria-hidden="true">{k === 'past' ? '†' : '⊘'}</span>}{t.thRegOpts[k]}
                  </button>
                );
              })}
            </div>
            {/* NLEM, next to the FDA filter: Thailand's list, so only offered while Thailand is selected */}
            {countries.includes('th') && (
            <div className="flex bg-white rounded-md border border-slate-200 p-0.5 shadow-sm shrink-0 items-center h-[26px] md:h-7 gap-0.5" data-nlem-group>
                <button
                  onClick={() => setNlemOnly(!nlemOnly)}
                  title={t.nlemTitle}
                  className={`h-full px-1.5 md:px-2 rounded flex items-center justify-center gap-1 text-[10px] font-bold transition-all whitespace-nowrap ${nlemOnly ? 'bg-emerald-600 text-white shadow-sm' : 'text-emerald-700 hover:bg-emerald-50'}`}
                >
                  <Check className="w-2.5 h-2.5 md:w-3 md:h-3" /> {t.nlemOnly}
                </button>
            </div>
            )}

            {/* Display option: licence holder line */}
            <div className="flex bg-white rounded-md border border-slate-200 p-0.5 shadow-sm shrink-0 items-center h-[26px] md:h-7 gap-0.5" data-holder-toggle>
                <button
                  onClick={toggleHolder}
                  aria-pressed={showHolder}
                  title={t.holderToggleTitle}
                  className={`h-full px-1.5 md:px-2 rounded flex items-center justify-center gap-1 text-[10px] font-bold transition-all whitespace-nowrap ${showHolder ? 'bg-slate-600 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                  {showHolder ? <Check className="w-2.5 h-2.5 md:w-3 md:h-3" /> : <X className="w-2.5 h-2.5 md:w-3 md:h-3" />} {t.holderLabel}
                </button>
            </div>
            {/* Display option: one row per brand, strengths inside */}
            <div className="flex bg-white rounded-md border border-slate-200 p-0.5 shadow-sm shrink-0 items-center h-[26px] md:h-7 gap-0.5" data-group-toggle>
                <button
                  onClick={toggleGroupBrands}
                  aria-pressed={groupBrands}
                  title={t.groupTitle}
                  className={`h-full px-1.5 md:px-2 rounded flex items-center justify-center gap-1 text-[10px] font-bold transition-all whitespace-nowrap ${groupBrands ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                  {groupBrands ? <Check className="w-2.5 h-2.5 md:w-3 md:h-3" /> : <X className="w-2.5 h-2.5 md:w-3 md:h-3" />} {t.groupLabel}
                </button>
            </div>
          </div>

          {/* Filter row 2: clinical. Asthma / COPD, drug class, role, MART / extra-fine, inspiratory flow, device type */}
          <div className="flex flex-wrap items-center gap-1.5 md:gap-2 w-full min-w-0" data-filter-row="clinical">

            {/* Asthma / COPD */}
            <div className="flex bg-white rounded-md border border-slate-200 p-0.5 shadow-sm shrink-0 items-center h-[26px] md:h-7 gap-0.5">
              <div className="pl-1 pr-1 md:pl-1.5 md:pr-1.5 flex items-center pointer-events-none text-slate-400 border-r border-slate-100 mr-0.5">
                <ActivityIcon className="h-2.5 w-2.5 md:h-3 md:w-3" />
              </div>
              {['Asthma', 'COPD'].map(disease => {
                const isSelected = selectedDiseases.includes(disease);
                const activeStyle = disease === 'Asthma' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-emerald-600 text-white shadow-sm';
                const inactiveStyle = disease === 'Asthma' ? 'text-indigo-600 hover:bg-indigo-50' : 'text-emerald-600 hover:bg-emerald-50';
                return (
                  <button key={disease} onClick={() => { if (isSelected) { setSelectedDiseases(selectedDiseases.filter(d => d !== disease)); } else { setSelectedDiseases([...selectedDiseases, disease]); } }} className={`h-full px-1.5 md:px-2 rounded flex items-center justify-center text-[10px] font-bold transition-all whitespace-nowrap ${isSelected ? activeStyle : inactiveStyle}`}>
                    {disease}
                  </button>
                );
              })}
            </div>

            {/* Pharmacological Class Toggles */}
            <div className="flex bg-white rounded-md border border-slate-200 p-0.5 shadow-sm shrink-0 items-center h-[26px] md:h-7">
              {['ICS', 'LABA', 'LAMA', 'SABA', 'SAMA'].map(cls => {
                const isSelected = selectedClasses.includes(cls);
                const isReliever = cls === 'SAMA' || cls === 'SABA';
                const activeStyle = isReliever ? 'bg-orange-500 text-white shadow-sm' : 'bg-indigo-600 text-white shadow-sm';
                const inactiveStyle = isReliever ? 'text-orange-600 hover:bg-orange-50' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50';
                return (
                  <button key={cls} onClick={() => { if (isSelected) { setSelectedClasses(selectedClasses.filter(c => c !== cls)); } else { setSelectedClasses([...selectedClasses, cls]); } }} className={`h-full px-1.5 md:px-2 rounded flex items-center justify-center text-[10px] font-bold transition-all whitespace-nowrap ${isSelected ? activeStyle : inactiveStyle}`}>
                    {cls}
                  </button>
                );
              })}
            </div>

            {/* Role Toggles */}
            <div className="flex bg-white rounded-md border border-slate-200 p-0.5 shadow-sm shrink-0 items-center h-[26px] md:h-7">
              <div className="pl-1 pr-1 md:pl-1.5 md:pr-1.5 flex items-center pointer-events-none text-slate-400 border-r border-slate-100 mr-0.5">
                <ShieldPlus className="h-2.5 w-2.5 md:h-3 md:w-3" />
              </div>
              {ROLES.map(role => {
                const isSelected = selectedRoles.includes(role);
                const [activeStyle, inactiveStyle] = ROLE_STYLE[role];
                return (
                  <button key={role} data-role={role} title={t.roleTitles[role]} aria-pressed={isSelected} onClick={() => { if (isSelected) { setSelectedRoles(selectedRoles.filter(r => r !== role)); } else { setSelectedRoles([...selectedRoles, role]); } }} className={`h-full px-1.5 md:px-2 rounded flex items-center justify-center text-[10px] font-bold transition-all whitespace-nowrap ${isSelected ? activeStyle : inactiveStyle}`}>
                    {t.roleLabels[role]}
                  </button>
                );
              })}
            </div>

            {/* Feature Toggles (MART, Extra-fine) */}
            <div className="flex bg-white rounded-md border border-slate-200 p-0.5 shadow-sm shrink-0 items-center h-[26px] md:h-7 gap-0.5">
              <button
                onClick={() => setMartOnly(!martOnly)}
                className={`h-full px-1.5 md:px-2 rounded flex items-center justify-center gap-1 text-[10px] font-bold transition-all whitespace-nowrap ${martOnly ? 'bg-amber-500 text-white shadow-sm' : 'text-amber-600 hover:bg-amber-50'}`}
              >
                <Sparkles className="w-2.5 h-2.5 md:w-3 md:h-3" /> {t.martOnly}
              </button>
              <button
                onClick={() => setExtraFineOnly(!extraFineOnly)}
                className={`h-full px-1.5 md:px-2 rounded flex items-center justify-center gap-1 text-[10px] font-bold transition-all whitespace-nowrap ${extraFineOnly ? 'bg-fuchsia-600 text-white shadow-sm' : 'text-fuchsia-600 hover:bg-fuchsia-50'}`}
              >
                <Sparkles className="w-2.5 h-2.5 md:w-3 md:h-3" /> {t.extraFineOnly}
              </button>
            </div>

            {/* Inspiratory-flow device finder */}
            <label title={t.pifHint} className={`flex rounded-md border p-0.5 pl-1.5 shadow-sm shrink-0 items-center h-[26px] md:h-7 gap-1 ${pifActive ? 'bg-cyan-50 border-cyan-300' : 'bg-white border-slate-200'}`}>
              <Wind className="h-2.5 w-2.5 md:h-3 md:w-3 text-cyan-600" />
              <span className="text-[10px] font-bold text-cyan-700 whitespace-nowrap">{t.pifLabel}</span>
              <input
                type="number" inputMode="numeric" min="0" max="300" step="5"
                value={pifInput}
                onChange={(e) => setPifInput(e.target.value)}
                placeholder="—"
                aria-label={t.pifHint}
                className="w-11 md:w-12 h-full text-[10px] md:text-[11px] font-bold text-slate-800 bg-slate-50 rounded px-1 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-500 tabular-nums"
              />
              <span className="text-[10px] text-slate-400 pr-0.5">L/min</span>
              {pifInput !== '' && (
                <button onClick={(e) => { e.preventDefault(); setPifInput(''); }} aria-label={t.pifClear} className="text-slate-400 hover:text-slate-700 px-0.5"><X className="w-2.5 h-2.5" /></button>
              )}
            </label>

            {/* Device Type Toggles */}
            <div className="flex bg-white rounded-md border border-slate-200 p-0.5 shadow-sm shrink-0 items-center h-[26px] md:h-7">
              <div className="pl-1 pr-1 md:pl-1.5 md:pr-1.5 flex items-center pointer-events-none text-slate-400 border-r border-slate-100 mr-0.5">
                <BoxIcon className="h-2.5 w-2.5 md:h-3 md:w-3" />
              </div>
              {['MDI', 'DPI', 'SMI', 'Nebulizer'].map(type => {
                const isSelected = selectedDevices.includes(type);
                const activeStyle = 'bg-cyan-600 text-white shadow-sm';
                const inactiveStyle = 'text-cyan-600 hover:bg-cyan-50';

                return (
                  <button
                    key={type}
                    title={`${type} Inhaler`}
                    onClick={() => { if (isSelected) { setSelectedDevices(selectedDevices.filter(d => d !== type)); setSelectedShapes(prev => prev.filter(s => deviceData.find(x => x.shape === s)?.type !== type)); } else { setSelectedDevices([...selectedDevices, type]); } }}
                    className={`h-full px-1.5 md:px-2 rounded flex items-center justify-center text-[10px] font-bold transition-all whitespace-nowrap ${isSelected ? activeStyle : inactiveStyle}`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>

            {/* Sub-Type (Shapes) Floating Menu */}
            {(() => {
              const availableShapes = Array.from(new Set(
                deviceData
                  .filter(d => selectedDevices.includes(d.type))
                  .filter(d => {
                     const shapesForType = new Set(deviceData.filter(x => x.type === d.type).map(x => x.shape));
                     return shapesForType.size > 1;
                  })
                  .map(d => d.shape)
              )).sort(shapeSort);
              if (availableShapes.length === 0) return null;
              return (
                <div className="flex flex-wrap bg-cyan-50/80 rounded-md border border-cyan-100 p-0.5 shadow-sm items-center min-h-[26px] md:min-h-[28px] max-w-full animate-in fade-in zoom-in-95" data-shape-group>
                  <div className="pl-1 pr-1 md:pl-1.5 md:pr-1.5 flex items-center pointer-events-none text-cyan-400 border-r border-cyan-200 mr-0.5">
                    <LayoutGrid className="h-2.5 w-2.5 md:h-3 md:w-3" />
                  </div>
                  {availableShapes.map(shape => {
                    const isSelected = selectedShapes.includes(shape);
                    return (
                      <button key={shape} onClick={() => { if (isSelected) { setSelectedShapes(selectedShapes.filter(s => s !== shape)); } else { setSelectedShapes([...selectedShapes, shape]); } }} className={`h-full px-1.5 md:px-2 mx-0.5 rounded flex items-center justify-center text-[10px] font-bold transition-all whitespace-nowrap ${isSelected ? 'bg-cyan-600 text-white shadow-sm' : 'text-cyan-700 hover:bg-cyan-100'}`}>
                        {shapeName(shape)}
                      </button>
                    );
                  })}
                </div>
              );
            })()}
          </div>
        </div>

        {/* Active filters as removable chips, then the result count (drugs shown vs the whole database) with the Key button */}
        <div className={`${filtersOpen ? '-mt-1 md:-mt-3' : 'mt-1 md:mt-1.5'} mb-2 md:mb-3 px-0.5 print:hidden`}>
          {(filterChips.length > 0 || filtersActive) && (
            <div className="flex flex-wrap items-center gap-1.5 mb-1.5" role="group" aria-label={t.chipsLabel} data-active-filters>
              {/* Clear every filter: first in the row of active filters, so it shows whenever a filter is on */}
              <button onClick={clearFilters} title={t.clearFilters} data-clear-filters
                className="shrink-0 min-h-[26px] px-2.5 rounded-full border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 shadow-sm inline-flex items-center gap-1 text-[11px] font-bold whitespace-nowrap transition-colors">
                <X className="w-3 h-3" /> {t.clearShort}
              </button>
              {filterChips.map(c => (
                <button key={c.key} onClick={c.off} data-chip={c.key} title={t.chipRemove(c.label)} aria-label={t.chipRemove(c.label)}
                  className="max-w-full min-h-[26px] inline-flex items-center gap-1 pl-2.5 pr-1.5 py-0.5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-800 hover:bg-indigo-100 text-[11px] font-bold leading-tight text-left transition-colors">
                  <span className="break-words min-w-0">{c.label}</span><X className="w-3 h-3 shrink-0 opacity-60" />
                </button>
              ))}
            </div>
          )}
          <div className="flex items-start justify-between gap-2">
            <div className="text-[11px] md:text-xs text-slate-500 min-w-0 pt-0.5" aria-live="polite">
              {t.countShowing} <span className="font-bold text-slate-800 tabular-nums">{filteredAndSortedData.length}</span> {t.countOf} <span className="font-bold text-slate-800 tabular-nums">{regionData.length}</span> {t.countDrugs} <span className="text-slate-400" data-count-total>{t.countTotal(deviceData.length)}</span>{groupBrands && brandGroups.size < filteredAndSortedData.length && <span className="text-slate-400" data-brand-rows> · {t.brandRows(brandGroups.size)}</span>}
              {pifActive && (
                <span className="block mt-0.5 text-cyan-700 font-medium">{pifHiddenSummary ? t.pifHidden(pifValue, pifHiddenSummary) : t.pifAllOk(pifValue)}{filteredAndSortedData.some(flowUnknown) && <span data-pif-unknown> {t.pifUnknown(filteredAndSortedData.filter(flowUnknown).length)}</span>}</span>
              )}
            </div>
            <button onClick={() => setIsLegendOpen(true)} data-legend-btn title={t.legendTitle} aria-haspopup="dialog"
              className="shrink-0 inline-flex items-center gap-1 h-6 md:h-7 px-2 rounded-md border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 shadow-sm text-[11px] font-bold whitespace-nowrap transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3" aria-hidden="true"><circle cx="12" cy="12" r="9.5" /><path d="M9.3 9.2a2.8 2.8 0 1 1 4 2.6c-.8.5-1.3 1-1.3 2" /><path d="M12 17.2h.01" /></svg>
              {t.legendBtn}
            </button>
          </div>
        </div>

        {filteredAndSortedData.length === 0 ? (
          <div className="py-12 md:py-16 text-center text-slate-500 bg-white rounded-xl md:rounded-2xl border border-slate-200 border-dashed print:hidden">
            <Search className="w-8 h-8 md:w-10 md:h-10 text-slate-300 mx-auto mb-3 md:mb-4" />
            <p className="text-base md:text-lg font-medium" data-empty-note>{countries.length ? t.noMeds : t.noCountry}</p>
            <button onClick={clearFilters} className="mt-2 text-blue-600 hover:underline text-sm md:text-base">{t.clearFilters}</button>
          </div>
        ) : (
          <div id="printable-drug-list" data-all-cards={showAllCards ? '1' : '0'} className={viewMode === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5" : "flex flex-col gap-2 md:gap-3"}>
            {listItems.map(item => {
              if (item.brand) return <BrandGroupRow key={'brand-' + item.brand} meds={item.meds} open={item.open} onToggle={() => toggleBrand(item.brand)} onPick={(m) => pickStrength(item.brand, m)} onSelect={toggleCompare} onDetails={(m) => setDetailId(m.id)} isSelected={(m) => compareList.some(c => c.id === m.id)} t={t} grid={viewMode === 'grid'} regions={countries} showHolder={showHolder} />;
              const med = item.med;
              const isSelectedForCompare = compareList.some(c => c.id === med.id);

              if (viewMode === 'grid') {
                return (
                  <div key={med.id} id={'drug-' + med.id} data-shape={med.shape} {...(item.grouped ? { 'data-brand-member': item.grouped } : {})} onClick={(e) => openDetailFrom(e, med)} className={`${highlightId === med.id ? 'ring-4 ring-sky-400 ' : ''}${item.grouped ? 'ring-2 ring-indigo-200 ' : ''}cursor-pointer h-full rounded-xl md:rounded-2xl border ${isSelectedForCompare ? 'border-indigo-500 ring-1 ring-indigo-500 bg-indigo-50/10' : 'border-slate-200 bg-white hover:shadow-md'} p-3.5 md:p-5 flex flex-col shadow-sm transition-all relative`}>
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 print:hidden flex flex-col items-end gap-1.5" data-card-actions>
                       <button onClick={() => toggleCompare(med)} className={`flex items-center gap-1 md:gap-1.5 px-2 md:px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase transition-colors border ${isSelectedForCompare ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-400 border-slate-200 hover:border-indigo-300 hover:text-indigo-500 hover:bg-indigo-50 shadow-sm'}`}>
                         {isSelectedForCompare ? <Check className="w-3 h-3" /> : <CompareIcon className="w-3 h-3" />}
                         <span className="hidden sm:inline">{isSelectedForCompare ? t.selected : t.select}</span>
                       </button>
                       {/* Details: under Select */}
                       <button onClick={() => setDetailId(med.id)} data-details className="flex items-center gap-1 px-2 md:px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase transition-colors border border-indigo-100 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 shadow-sm">
                         {t.detailBtn} <span aria-hidden="true">›</span>
                       </button>
                    </div>
                    <div className="flex items-end gap-2 mb-3 md:mb-4 pt-1">
                      <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-slate-50 border border-slate-100">
                        {medIcon(med, "w-10 h-10 md:w-14 md:h-14 text-slate-700")}
                      </div>
                      {COLOUR_UNKNOWN.has(med.id) && <span className="text-[10px] font-medium leading-tight text-slate-400" data-colour-unknown>{t.colourUnknown}</span>}
                    </div>
                    <div className="flex-grow">
                      <div className="flex gap-2 items-center mb-1 flex-wrap">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${med.tagColor}`}>{med.type}</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide" data-shape-label>{shapeLabel(med)}</span>
                        {med.isExtraFine && <ExtraFineBadge t={t} compact={true} />}
                        <ExacBadge med={med} t={t} />
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-800 leading-tight mb-1 mt-2">{med.marketName}</h3>
                      {/* components first (some names carry no strength), then the country lines */}
                      <RenderSubstances medClass={med.class} medSubstance={med.substance} className="text-sm mb-2 mt-1" />
                      <CountryLines med={med} t={t} regions={countries} showHolder={showHolder} className="text-[11px] mb-2" />
                      <DiagnosticBadges indications={med.indications} t={t} med={med} />
                      {exacNoteOf(med, t) && <p className="mt-2 text-[11px] font-medium leading-snug text-rose-700" data-exac-note>{exacNoteOf(med, t)}</p>}
                      {/* Full facts on the card; the detail view (Details, or a click on the card) adds registration detail per country */}
                      <div className="space-y-1.5 text-xs bg-slate-50 p-3 rounded-lg border border-slate-100 mt-4" data-card-facts>
                        <div className="flex justify-between items-start gap-2 border-b border-slate-200 pb-1.5 pt-1 min-w-0">
                          <span className="text-slate-500 font-medium break-words min-w-0">{t.peakFlow}</span>
                          <span className="font-bold text-cyan-700 text-right break-words shrink-0 max-w-[65%]" data-flow>{flowText(med, t)}</span>
                        </div>
                        {spacerFit(med) && (
                          <div className="flex justify-between items-start gap-2 border-b border-slate-200 pb-1.5 pt-1 min-w-0">
                            <span className="text-slate-500 font-medium shrink-0">{t.spacerLabel}</span>
                            <SpacerFit med={med} t={t} className="text-right break-words min-w-0" />
                          </div>
                        )}
                        <div className="flex justify-between items-center border-b border-slate-200 pb-1.5 pt-1">
                          <span className="text-slate-500 font-medium shrink-0">{t.estCost}</span>
                          <PriceTag med={med} t={t} className="text-[12px] shrink-0" />
                        </div>
                        <div className="flex justify-between items-start gap-2 border-b border-slate-200 pb-1.5 pt-1 min-w-0" data-card-pack>
                          <span className="text-slate-500 font-medium shrink-0">{t.totalDosesExp}</span>
                          <span className="font-bold text-slate-700 text-right break-words min-w-0">{packText(med, t)}</span>
                        </div>
                        <div className="flex justify-between items-start gap-2 border-b border-slate-200 pb-1.5 pt-1 min-w-0" data-card-exp>
                          <span className="text-slate-500 font-medium shrink-0">{t.expLabel}</span>
                          <span className="font-bold text-rose-600 text-right break-words min-w-0">{expText(med, t)}</span>
                        </div>

                        <DoseRangeDisplay doseRange={med.doseRange} viewType="grid" isMart={med.isMart} martMax={med.martMax} t={t} />
                        <CheckedLine med={med} t={t} />

                      </div>
                    </div>
                    <div className="mt-auto pt-4 border-t border-slate-100">
                      <div className={`flex items-center gap-2.5 p-3 rounded-xl border h-[68px] ${med.ventCompatible ? 'bg-cyan-50 border-cyan-200 text-cyan-800' : 'bg-rose-50 border-rose-200 text-rose-800'}`}>
                        <Wind className={`w-5 h-5 shrink-0 ${med.ventCompatible ? 'text-cyan-600' : 'text-rose-500 opacity-60'}`} />
                        <div className="flex flex-col justify-center">
                          <span className="text-xs font-bold flex items-center gap-1 leading-tight">
                            {med.ventCompatible ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />} {t.ventilator} {med.ventCompatible ? t.compatible : t.notCompatible}
                          </span>
                          <span className="text-[11px] mt-0.5 font-medium opacity-90 leading-tight"><VentNote med={med} t={t} /></span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              // List View Render
              return (
                <div key={med.id} id={'drug-' + med.id} data-shape={med.shape} {...(item.grouped ? { 'data-brand-member': item.grouped } : {})} onClick={(e) => openDetailFrom(e, med)} className={`${highlightId === med.id ? 'ring-4 ring-sky-400 ' : ''}${item.grouped ? 'ring-2 ring-indigo-200 ' : ''}cursor-pointer w-full rounded-xl border ${isSelectedForCompare ? 'border-indigo-500 ring-1 ring-indigo-500 bg-indigo-50/10' : 'border-slate-200 bg-white hover:shadow-sm'} p-3 md:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 transition-all relative`}>
                   <div className="absolute z-10 top-3 right-3 sm:relative sm:top-0 sm:right-0 print:hidden shrink-0 order-first sm:order-last flex flex-col items-end sm:items-stretch gap-1.5" data-list-select>
                       <button onClick={() => toggleCompare(med)} className={`flex items-center justify-center w-7 h-7 sm:w-auto sm:h-auto sm:px-3 sm:py-1.5 rounded-md text-[10px] font-bold tracking-wider uppercase transition-colors border ${isSelectedForCompare ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-400 border-slate-200 hover:border-indigo-300 hover:text-indigo-500 hover:bg-indigo-50 shadow-sm'}`}>
                         {isSelectedForCompare ? <Check className="w-4 h-4 sm:w-3 sm:h-3" /> : <CompareIcon className="w-4 h-4 sm:w-3 sm:h-3" />}
                         <span className="hidden sm:inline sm:ml-1.5">{isSelectedForCompare ? t.selected : t.select}</span>
                       </button>
                       {/* Details: under Select; icon-only on phones, like Select */}
                       <button onClick={() => setDetailId(med.id)} data-details title={t.detailBtn} aria-label={t.detailBtn} className="flex items-center justify-center w-7 h-7 sm:w-auto sm:h-auto sm:px-3 sm:py-1.5 rounded-md text-[10px] font-bold tracking-wider uppercase transition-colors border border-indigo-100 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 shadow-sm">
                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:hidden" aria-hidden="true"><circle cx="12" cy="12" r="9.5" /><path d="M12 11v5.5" /><path d="M12 7.5h.01" /></svg>
                         <span className="hidden sm:inline">{t.detailBtn} <span aria-hidden="true">›</span></span>
                       </button>
                   </div>
                   <DeviceListSnippet med={med} getIcon={getIcon} t={t} large showHolder={showHolder} holderRegions={countries} />
                </div>
              );
            })}
          </div>
        )}

      <DisclaimerSection t={t} />
      <ReferencesSection t={t} />

      {/* Product detail view */}
      {isLegendOpen && <LegendModal t={t} onClose={() => setIsLegendOpen(false)} />}
      {detailId != null && (() => { const dm = regionData.find(d => d.id === detailId) || deviceData.find(d => d.id === detailId); return dm ? <DrugDetailModal med={dm} t={t} onClose={() => setDetailId(null)} isSelected={compareList.some(c => c.id === dm.id)} onToggleSelect={() => toggleCompare(dm)} /> : null; })()}

      {/* Device Guide: per-device technique cards */}
      {isDeviceGuideOpen && <DeviceTechniqueModal t={t} lang={lang} onClose={() => setIsDeviceGuideOpen(false)} onToast={showToast} />}

      {/* Step Down Guide Modal */}
      {isSpacerOpen && <SpacerGuideModal lang={lang} onClose={() => setIsSpacerOpen(false)} />}
      {isIcsCalcOpen && <IcsCalculatorModal lang={lang} onClose={() => setIsIcsCalcOpen(false)} />}
      {isFollowOpen && <FollowUpModal lang={lang} t={t} regionData={regionData} current={compareList} onClose={() => setIsFollowOpen(false)} />}

      </div>

      {/* Hidden Container for PNG Export Snippets */}
      <div className="light-lock" style={{ position: 'absolute', top: '-9999px', left: '-9999px', zIndex: -1000 }}>
         <div style={{ width: '800px', backgroundColor: '#f8fafc' }}>
             {compareList.map(med => (
                <div key={`export-${med.id}`} id={`export-snippet-${med.id}`} className="p-4 w-[450px]">
                   <DeviceExportCard med={med} getIcon={getIcon} t={t} />
                </div>
             ))}
         </div>
      </div>

    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
