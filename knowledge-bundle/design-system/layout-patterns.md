---
title: Admin Portal Layout Patterns
description: Page shell, dashboard grid, list/table and multi-step patterns from the bisnis-web UI kit
type: design-system
tags: [layout, patterns, ui-kit]
source: claude.ai/design project 806d634a-7101-4e84-b95e-12a21aee38bd (Amar Bank Internal Web DS)
library_path: design-system/
updated: 2026-10-02
---

# Admin Portal Layout Patterns

## Layout Admin Portal (dari UI kit bisnis-web)
- Artboard 1440; **Sidebar 272px** (bisa `theme="dark"` di `--bg-surface-800`) + konten.
- **PageHeader 88px** (judul + deskripsi + aksi kanan), lalu konten dengan padding 32.
- Dashboard: grid 3 kolom (2 fluid + rail 352px), gap 24; tiap widget dibungkus `WidgetCard` (radius 16).
- Halaman list/tabel: `HorizontalFilter` (ButtonGroup/SegmentedControl + search `TextInput size="xs"`) → `Table` → `Pagination`; detail baris di `Drawer` (400px dari kanan).
- Alur multi-step (mis. form pengajuan): `StepIndicatorHorizontal` + konfirmasi di `Modal` + hasil `StatusModal`/`TransactionIllustration`.
- Struktur nav sidebar contoh: section **Utama** / **Atur**, label UPPERCASE; item dengan ikon Remix 20px + chevron.

## Halaman auth (Keycloak themed)
Dipakai login, akses ditolak, aktivasi (lihat `src/components/AuthLayout.jsx`):
- Latar `--bg-weak-50`, header (logo `AmarBankLogo` horizontal color 30px + label kanan) dan footer dengan padding `24px 44px`.
- Kartu 440px, padding 32, radius 20, `--shadow-stroke-xs`, gap 24 (form) / 16 (pesan status).
- Hero: halo gradient (`--bg-weak-50` → transparan, padding 16) berisi lingkaran putih 64px + ikon 32px; judul `--title-h5`, deskripsi `--paragraph-md`.
- Pesan status: medallion 56px `--state-*-lighter` + ikon 28px `--state-*-base`, judul `--title-h6`, isi `--paragraph-sm`.

## Halaman admin (shell portal)
`src/components/AdminShell.jsx`: Sidebar dark + header (medallion ikon 48px, `--label-lg` judul, `--paragraph-sm` deskripsi, chip pengguna 36px `--primary-alpha-10`, tombol Keluar) dengan stroke bawah; konten pad `24 32 32`, gap 16.

## State data
Loading = skeleton pulse (`@keyframes sk-pulse`, 1.4s) dengan bar `--bg-soft-200`; empty/error = ilustrasi 108px + pesan + satu aksi (`src/components/EmptyState.jsx`).
