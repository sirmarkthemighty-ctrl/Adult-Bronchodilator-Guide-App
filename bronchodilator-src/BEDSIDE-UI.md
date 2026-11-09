# Bedside UI

The design language of the Adult Bronchodilator Device Guide, named so other apps (the Thai DLD guide, future guides) can reuse it. Bedside UI is for single-file, offline, bilingual (EN / TH) clinical reference tools used on a phone at the bedside.

Reference implementation: `app.jsx`, `styles.css`, `tailwind.config.js`, `shell.html` in this folder. Live: https://sirmarkthemighty-ctrl.github.io/Adult-Bronchodilator-Guide-App/

## Principles

1. **One file, no runtime dependencies.** React 18 UMD, Tailwind 3 compiled at build time, everything inlined. Works offline on a hospital intranet. The only optional network call is the Google Fonts stylesheet, added by script.
2. **Colour carries meaning.** A colour is used for one thing everywhere (country, drug class, role, status). Switched-on filters with no meaning of their own use one indigo.
3. **Never assume content.** Missing data shows `Unknown` / `N/A`, never a stand-in.
4. **Phone first.** Designed at 375 px, checked at 320 px, desktop 1280 px. No sideways page scrolling; wide content (tables) scrolls inside its own box.
5. **Bilingual by default.** Every string has an EN and a TH version; data strings go through formatting helpers, not raw.
6. **Light and dark equal.** Dark mode is generated from the same class names, not a second stylesheet.

## Tokens

**Type.** `IBM Plex Sans`, then `IBM Plex Sans Thai`, then the system stack (`tailwind.config.js`). Weights 400-800. Labels and chips are 10 px bold; body facts 11-12 px; card titles `text-lg font-extrabold`.

**Neutrals.** Tailwind `slate`. Page ground `#f1f5f9` light, `#0b1220` dark. Cards are white / `#151f32`; inset panels `slate-50` / `#101a2b`; borders `slate-200` / `#263449`.

**Accent.** `indigo-600` with white text and `shadow-sm` is the single "on" state for filters, selection and primary buttons.

**Meaning colours.**

| Meaning | Colours |
|---|---|
| Country chips | TH emerald, US blue, UK rose, EU amber, JP violet (`COUNTRY_COLORS`: `on`, `off`, `chip`) |
| NLEM type | basic emerald, supplemental sky, exclusive amber, none slate (`NLEM_STYLE`) |
| Drug class text | ICS orange, LABA sky, LAMA lime, SABA blue, SAMA green, combinations purple / rose / fuchsia (`getClassColor`) |
| Status | current = country colour, past = amber with †, never = grey with ⊘ |
| Caution | orange; exacerbation use rose; warnings amber |

**Soft tint pattern.** A coloured control is `bg-{c}-50 hover:bg-{c}-100 border-{c}-200 text-{c}-700` (guide buttons, chips). Solid `bg-{c}-600 text-white` is reserved for the "on" state.

**Shape and space.** Cards `rounded-xl md:rounded-2xl border shadow-sm p-3.5 md:p-5`. Chips `rounded border px-1 py-px text-[10px] font-bold`. Modals `rounded-2xl`, overlay `bg-slate-900/70 backdrop-blur-sm`, `z-50`. Motion: short fade / zoom-in (150-200 ms), switched off by `prefers-reduced-motion`.

## Dark mode

A runtime layer in `app.jsx` (top of file, `dark-theme-layer`) writes `html.dark .class` rules for the neutral classes and, for each colour family, the `-50 / -100` backgrounds (translucent), `-500..900` text and `-100..300` borders. Add a family to the `tints` map and its classes work in both themes. Use plain classes (`bg-slate-50`), not opacity variants such as `bg-slate-50/80`, which are not covered. Theme is stored in `localStorage` key `bdg-theme` and applied before first paint by `shell.html`.

## Page anatomy

1. **Header.** Title, subtitle, "Made by" line, disclaimer line; right side: version pill (opens the changelog), Feedback, language pill (`TH` / `EN`), round sun / moon button.
2. **Guide bar.** Six tinted tiles (icon tiles with short names under 640 px). Pinned with the search bar.
3. **Search + sort + view toggle + Filters.** Phone: the search is a magnifier that opens across the row. View toggle (grid / list / table) shows the name of the view in use.
4. **Filter rails.** Chip groups in rounded boxes, horizontal scroll without scrollbar (`hide-scrollbar`), active-filter chips with a Clear button, result count, Key button.
5. **Content.** Tile cards (1 / 2 / 3 columns), list rows (one frame each), table (first column pinned), expandable group rows for related items.
6. **Detail modal.** Facts with an optional "Source:" line each (folded behind "Show sources"), registration per country, cautions.
7. **Tool modals.** Calculator, conversion, patient sheet (prints to A4), guideline figures. Escape closes the top-most one.
8. **Key to symbols.** Every chip, mark and colour is explained there; add a row when a new mark is introduced.

## Rules that travel with the design

- Changelog: one entry per day, new day = new version; every EN line has a TH line (equal counts).
- Labelled icons: an icon-only button needs `aria-label` and `title`; where room allows it also shows a word (the active view, Cautions).
- Frames: one frame per item; never a box inside a box.
- Donate: a heart button opens a small pop-up with the PromptPay QR (`DonateButton` in `app.jsx`; the QR stays white in dark mode via `light-lock`). The shared copy lives in `shared/donate/`; add it to another app only when asked.
- Floating UI (pop-overs) opens on the side with room, caps its height and scrolls inside.
- Embedded in another page (Google Sites): `shell.html` measures the hidden part of the frame and `styles.css` keeps bars, dialogs and the toast inside the visible part.
- Tests: an in-page e2e suite plus a UI audit (overlap, cut-off, overflow) at 1280 px, 375 px light and 375 px dark; check 320 px and Thai by hand.

## Adapting it to another project

1. Copy `tailwind.config.js` (font), the base and animation parts of `styles.css`, and the early theme script in `shell.html`.
2. Copy the dark-theme layer and the `tints` map from the top of `app.jsx`.
3. Copy the reusable pieces: header, guide bar, filter rail, chip / badge patterns, card, modal shell, `LegendModal`, `SourceLine`, changelog modal.
4. Replace the meaning colours with your own table, keeping "one colour, one meaning".
5. Keep the build shape: JSX compiled with Babel, Tailwind CLI, terser, everything inlined into one HTML file.

Not part of the design (domain-specific): the inhaler drawings, the drug data, GINA / GOLD tables and the Thai register lookups.
