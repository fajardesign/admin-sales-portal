# Log

## 2026-10-02 — Import design system
- Imported Amar Bank Internal Web DS from claude.ai/design project `806d634a-7101-4e84-b95e-12a21aee38bd` into `design-system/` (650 files: tokens, guidelines, 57 hand-authored component files, Figma-generated sets, assets, bisnis-web UI kit).
- Added summary notes in `knowledge-bundle/design-system/` (overview, foundations, components, layout-patterns, content-guidelines).
- Generated `design-system/COMPONENTS.md` (API reference) and `design-system/index.js` (barrel) via `design-system/scripts/gen_components.py`.
- 31 files truncated at the 256 KiB import limit; list in `design-system/.truncated.txt`.

## 2026-10-02 — Sales Portal Web (W1, W2, KC1)
- Imported design "Sales Portal Web.dc.html" from claude.ai/design project `4951b0b7-0220-4921-9f19-e1e9d94423eb`; source copy in `design-sources/sales-portal-web/` (the `_ds/` folder there is the same DS already in `design-system/`; `Sales Portal Web.html` bundle and `support.js` runtime not copied).
- Implemented screens W1 Login, Akses ditolak, W2a Manajemen Akun, W2b Tambah Pengguna, KC1 Aktivasi in `src/` with mock API + DevToolbar scenarios; replaced the earlier placeholder dashboard/leads pages.
- Added notes: `products/sales-portal-web.md`, `flows/w1-login.md`, `flows/w2-account-management.md`, `flows/kc1-activation.md`; DS gotchas in `design-system/components.md`; auth/admin layout patterns in `design-system/layout-patterns.md`.

## 2026-10-05 — Deploy GitHub Pages
- Pages sebelumnya menyajikan source mentah dari branch `main` (index.html memuat `/src/main.jsx` → tidak jalan). Diganti workflow GitHub Actions `deploy-pages.yml` yang membangun `dist/` dengan base `/admin-sales-portal/`.
- Build Pages memakai `VITE_DEMO=true` (`src/lib/env.js`): DevToolbar, sesi contoh, dan catatan demo login tampil di demo publik; build biasa tetap tanpa itu.
- PR #1 ter-merge sebelum commit `4a27dc1` (layar Sales Portal Web) masuk — perlu PR lanjutan dari `feat/design-system-setup`.
