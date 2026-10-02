# Admin Sales Portal

## Design system (wajib)
Semua UI di repo ini **harus** memakai Amar Bank Internal Web DS di `design-system/`
(diimpor dari claude.ai/design project `806d634a-7101-4e84-b95e-12a21aee38bd`).

- Baca knowledge bundle `knowledge-bundle/design-system/` (overview, foundations, components, layout-patterns, content-guidelines) sebelum membuat/mengubah halaman; props ada di `design-system/COMPONENTS.md`.
- Import komponen dari `design-system/index.js`, dan `design-system/styles.core.css` sekali di entry app (`styles.css` hanya bila memakai set Figma-generated).
- Jangan membuat ulang komponen yang sudah ada (Button, TextInput, Select, Table, Modal, Drawer, Sidebar, PageHeader, …).
- Tanpa hardcode hex/px/font — pakai token `var(--…)`. Copy UI dalam Bahasa Indonesia, tanpa emoji.
- Layout acuan: `design-system/ui_kits/bisnis-web/` (Sidebar 272px + PageHeader + konten pad 32).
- Jangan edit isi `design-system/` untuk kebutuhan satu halaman; itu salinan library. `COMPONENTS.md` dan `index.js`
  di-generate dari `.d.ts` — regenerate bila komponen berubah.
- Skill `/amar-bank-design` memuat panduan yang sama.
