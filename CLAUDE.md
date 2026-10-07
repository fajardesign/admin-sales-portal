# Admin Sales Portal

## Design system (wajib)
Semua UI di repo ini **harus** memakai Amar Bank Internal Web DS di `design-system/`
(diimpor dari claude.ai/design project `806d634a-7101-4e84-b95e-12a21aee38bd`).

- Baca knowledge bundle `/Users/amarbank/Documents/okf_repository_design/products/sales_dashboard/design_system/` (overview, foundations, components, layout_patterns, content_guidelines) sebelum membuat/mengubah halaman; props ada di `design-system/COMPONENTS.md`.
- Import komponen dari `design-system/index.js`, dan `design-system/styles.core.css` sekali di entry app (`styles.css` hanya bila memakai set Figma-generated).
- Jangan membuat ulang komponen yang sudah ada (Button, TextInput, Select, Table, Modal, Drawer, Sidebar, PageHeader, …).
- Tanpa hardcode hex/px/font — pakai token `var(--…)`. Copy UI dalam Bahasa Indonesia, tanpa emoji.
- Layout acuan: `design-system/ui_kits/bisnis-web/` (Sidebar 272px + PageHeader + konten pad 32).
- Jangan edit isi `design-system/` untuk kebutuhan satu halaman; itu salinan library. `COMPONENTS.md` dan `index.js`
  di-generate dari `.d.ts` — regenerate bila komponen berubah.
- Skill `/amar-bank-design` memuat panduan yang sama.

## Knowledge bundle (wajib dirawat)
Base knowledge proyek ada di `/Users/amarbank/Documents/okf_repository_design` (repo OKF).
Produk untuk repo ini: **`sales_dashboard`** → `/Users/amarbank/Documents/okf_repository_design/products/sales_dashboard/`.
Ikuti aturan di `/Users/amarbank/Documents/okf_repository_design/CLAUDE.md`. Setiap kali mengimpor desain, membangun/mengubah halaman, atau memutuskan aturan bisnis:
- Simpan pengetahuannya di folder produk: overview & navigasi → `index.md`, role & permission → `roles_matrix.md`,
  alur layar Web & aturan (validasi, pesan, state) → `flows_web/`, alur Android → `flows_android/`, design system → `design_system/`.
- Pakai frontmatter dan konvensi isi sesuai `/Users/amarbank/Documents/okf_repository_design/CLAUDE.md` (UX Flow: `type`, `title`, `platform`, `Role`, `epic_code`, plus `screen_id`/`code`/`updated` bila ada); copy UI ditulis persis.
- Daftarkan file flow baru di `index.md` folder-nya, dan catat setiap perubahan di `products/sales_dashboard/log.md`.
- Path kode dari repo ini ditulis dengan prefix `admin-sales-portal/` (contoh `admin-sales-portal/src/pages/Login.jsx`).
- Sumber desain mentah disimpan di `design-sources/<nama>/` (di repo ini).

## Sinkronisasi ke Figma (wajib approval)
Setiap perubahan atau penambahan (kode, desain, layar, komponen) **tidak boleh langsung di-generate atau ditulis ke Figma**.
- Selesaikan dan verifikasi perubahan di repo dulu, lalu **tanya dan tunggu approval eksplisit dari user** sebelum menulis ke Figma
  (capture `generate_figma_design`, `use_figma` yang mengubah canvas, membuat frame/section/komponen/variable).
- Approval berlaku untuk satu permintaan itu saja; perubahan berikutnya perlu approval baru.
- Membaca Figma (metadata, screenshot, variable, design context) untuk audit atau referensi boleh tanpa approval.
