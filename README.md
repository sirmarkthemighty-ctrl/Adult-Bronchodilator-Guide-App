# Adult Bronchodilator Device Guide

A bilingual (English / Thai) reference to inhalers and nebulised bronchodilators for adults with asthma or COPD,
by Warodom Phaenthong, M.D. It runs as one self-contained HTML file.

It is decision support for healthcare professionals, not a substitute for the product label or clinical judgement.
Read the disclaimer inside the app.

## Files

- `bronchodilator-guide.html`: the app. This file is generated; do not edit it by hand.
- `index.html`: redirects to the app, so the site's home page opens it.
- `bronchodilator-src/`: the source (`app.jsx`, `styles.css`, `shell.html`, Tailwind config, tests).
- `.claude/build-bronchodilator.js`: builds the app from the source.
- `.claude/test-bronchodilator.js`: runs the regression tests and UI audits in headless Microsoft Edge.

## Build and test

Requires Node.js. The build installs its own tools on first run.

```bash
node .claude/build-bronchodilator.js
```

```bash
node .claude/test-bronchodilator.js
```

## Data sources

Registration status, licence holders and indications come from the Thai FDA register, the US FDA (Drugs@FDA and
product labels), the UK MHRA, the Irish HPRA / EMA lists and the Japanese PMDA package inserts. The date each
product was last checked is shown in the app, and the in-app version log records every change.

## Licence

Copyright (c) 2026 Warodom Phaenthong, M.D. Licensed under
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/): share and adapt for non-commercial use,
with credit, under the same licence. See `LICENSE` and `NOTICE` (which also lists the third-party software
included in the built file).
