---
name: verify
description: Build, launch and drive the TENX UmiJS site to verify changes at the browser surface.
---

# Verifying imweb (TENX website)

UmiJS 4 (`@umijs/max`) SPA. No backend needed for most pages (the `/server/api` proxy target on :5001 is only for dynamic data like events).

## Launch

Must run under the arm64 node from nvm — the default shell node here is an x64 (Rosetta) build, which makes esbuild resolve `@esbuild/darwin-x64` up the tree to a stray mismatched copy in `~/node_modules` and the dev server dies with `Host version "X" does not match binary version "Y"`.

```bash
source ~/.nvm/nvm.sh && nvm use 22.23.0
npm run start:no-mock        # same as ./run
```

- Picks a free port starting at 8000 (often ends up on 8002 — read the "App listening at" banner in the output).
- First compile takes ~30–60s ("Compiled in … ms" line). HMR applies edits in a few seconds.

## Drive

Playwright (Python) is installed globally with Chromium:

```bash
/Library/Frameworks/Python.framework/Versions/3.12/bin/python3 <script>.py
```

Useful checks: cold-load `document.title` timeline (poll every 10ms via `page.add_init_script` — a MutationObserver on `<title>` misses the changes), SPA nav via clicking header links, direct loads of subroutes.

## Gotchas

- Page titles are owned by each page's `<Seo>` component (Helmet); ProLayout's own page-title effect is disabled via `pageTitleRender: false` in `src/app.tsx`. If titles regress to route menu names ("Home"), check that flag first.
- Git root is the parent dir (`/Users/sprs/dev/projects/nl`), so diffs show paths as `imweb/...`.
