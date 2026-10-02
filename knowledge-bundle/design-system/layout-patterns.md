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
