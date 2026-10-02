---
okf_version: "0.2"
---
# Admin Sales Portal Knowledge

## Design System
Amar Bank Internal Web DS — wajib untuk setiap halaman web Admin Sales Portal. Library kode: `design-system/`.

- [Overview](design-system/overview.md) — aturan wajib, setup aplikasi, file yang terpotong saat impor
- [Foundations](design-system/foundations.md) — token warna, tipografi, spacing, radius, shadow, motion, state interaksi
- [Components & Assets](design-system/components.md) — katalog komponen + logo, ilustrasi, avatar (props lengkap: `design-system/COMPONENTS.md`)
- [Layout Patterns](design-system/layout-patterns.md) — shell Sidebar + PageHeader, grid dashboard, list/tabel, alur multi-step
- [Content Guidelines](design-system/content-guidelines.md) — bahasa, nada, casing, format angka & field

## Products
- [Sales Portal Web (Admin)](products/sales-portal-web.md) — peran, autentikasi Keycloak, daftar layar, status implementasi, pertanyaan terbuka

## PRD
_(belum ada — perilaku saat ini bersumber dari prototipe desain, lihat Products/Flows)_

## Flows
- [W1 · Login Admin & Akses Ditolak](flows/w1-login.md)
- [W2 · Manajemen Akun (Team Leader)](flows/w2-account-management.md) — daftar TL, modal Tambah Pengguna, validasi, hasil simpan
- [KC1 · Aktivasi Akun](flows/kc1-activation.md) — kebijakan password, state tautan
