---
title: Design System Overview
description: Golden rules, app setup and known import gaps of the Amar Bank Internal Web DS used by every Admin Sales Portal page
type: design-system
tags: [overview, rules, setup]
source: claude.ai/design project 806d634a-7101-4e84-b95e-12a21aee38bd (Amar Bank Internal Web DS)
library_path: design-system/
updated: 2026-10-02
---

# Design System Overview

## Aturan wajib (Golden rules)

1. **Selalu pakai komponen dari library ini** (`design-system/index.js`) sebelum membuat UI sendiri.
   Kalau tidak ada komponen yang cocok, komposisikan dari primitif yang ada; jangan membuat versi baru Button/Input/Table dll.
2. **Jangan hardcode warna hex, px, atau font.** Pakai token CSS `var(--…)` (lihat [foundations](foundations.md)). Ini juga dicek oleh
   `design-system/_adherence.oxlintrc.json` (raw hex, raw px, font selain Inter/Mulish → warning).
3. **Import `design-system/styles.core.css` sekali** di entry app (fonts + semua token + base). `styles.css` = core + `fig-assets.css` untuk set Figma-generated; pakai hanya bila merender set tersebut.
4. **Bahasa UI: Indonesia** (label menu, tombol, pesan). Nada singkat, fungsional, orang kedua ("Anda"/"your").
5. **Tanpa emoji** di copy UI. Tanpa gradient/foto/tekstur di layar produk — halaman putih datar.
6. Pakai **hand-authored components** (actions, forms, display, feedback, navigation, brand, icons, illustrations).
   Set "Figma-generated" (`brand-sets/`, `widget-sets/`, `misc-sets/`, `variants/`) hanya bila butuh replika 1:1 Figma.

## Setup di aplikasi

```jsx
// main.jsx
import '@ds/styles.core.css';   // alias @ds = /design-system (vite.config.js)
import { Button, TextInput, Table, Sidebar, PageHeader, Icon, AmarBankLogo } from '@ds/index.js';
```
- Komponen = ES module JSX murni (`import React from 'react'`), inline style + token CSS. Butuh React 18+ (app memakai React 19), tanpa dependency lain.
- Font: Inter + Mulish dari Google Fonts (di-`@import` oleh `styles.core.css`). "Inter Display" fallback ke Inter.
- Theme: `data-mode` pada root bisa mengganti primary (purple/orange/gold); default Jewel Blue. Dark mode tersedia via token.

## Keterbatasan import (file terpotong di 256 KiB)
Tool impor membatasi 256 KiB per file. File berikut **tidak lengkap** (`design-system/.truncated.txt`) dan perlu diekspor manual dari
claude.ai/design bila dibutuhkan:
- `_ds_bundle.js` → `ui_kits/bisnis-web/index.html` tidak bisa dijalankan langsung. **Tidak memengaruhi** pemakaian komponen via `index.js`.
- `components/flags/flag-data.js` → `Flag` belum bisa dipakai (dikeluarkan dari barrel `index.js`).
- `assets/avatars/*.png` (7), `components/misc-sets/assets/*.png` (19), `components/widget-sets/assets/26f191cfd55fa96e.png`.
- `components/widget-sets/WidgetsFinanceBanking11.jsx`, `WidgetsHRManagement11.jsx` (katalog widget Figma).
