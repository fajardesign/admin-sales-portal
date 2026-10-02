---
name: amar-bank-design
description: Amar Bank Internal Web design system (Jewel Blue, Inter/Mulish, AlignUI-style kit) — the mandatory component library for every Admin Sales Portal page, screen, form, table, dashboard, modal or prototype. Use before writing or changing any UI in this repo.
user-invocable: true
---

Every Admin Sales Portal UI must be built with the design system in `design-system/`.

1. Read the knowledge bundle `knowledge-bundle/design-system/` first: overview.md (rules, setup, gaps), foundations.md (tokens), components.md, layout-patterns.md, content-guidelines.md.
2. Look up exact props in `design-system/COMPONENTS.md` (or the component's `.d.ts`/JSDoc).
3. Import components from `design-system/index.js`; import `design-system/styles.core.css` once at the app entry (full `styles.css` only when rendering the Figma-generated sets).
4. Follow the reference screens in `design-system/ui_kits/bisnis-web/` (Shell = Sidebar + PageHeader layout).
5. No raw hex/px/fonts — use `var(--token)` values. UI copy in Indonesian, no emoji.
6. For throwaway HTML mocks, copy assets from `design-system/assets/` and link `design-system/styles.css`.

If a needed component doesn't exist, compose it from existing primitives and tokens, and tell the user.
Deeper source: `design-system/readme.md`, `design-system/guidelines/*.html`.
