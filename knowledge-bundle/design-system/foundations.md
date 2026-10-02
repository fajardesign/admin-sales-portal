---
title: Design Foundations
description: Color, typography, spacing, radius, shadow and motion tokens plus interaction states
type: design-system
tags: [tokens, color, typography, spacing]
source: claude.ai/design project 806d634a-7101-4e84-b95e-12a21aee38bd (Amar Bank Internal Web DS)
library_path: design-system/
updated: 2026-10-02
---

# Design Foundations

## Design tokens

**Warna (pakai nama token, bukan hex):**
| Peran | Token | Nilai |
|---|---|---|
| Primary / accent | `--primary-base` | Jewel Blue #009FAF |
| Primary hover | `--primary-darker` (`--primary-dark`) | #00717C |
| Primary tint | `--primary-lighter`, `--primary-alpha-10/16/24` | |
| Teks | `--text-strong-950` (utama), `--text-sub-600` (sekunder), `--text-soft-400` (tersier), `--text-disabled-300`, `--text-white-0` | |
| Background | `--bg-white-0` (halaman/kartu), `--bg-weak-50` #F7F7F7 (region nested, header tabel, hover), `--bg-soft-200`, `--bg-surface-800` (sidebar gelap), `--bg-strong-950` | |
| Border | `--stroke-soft-200` #EBEBEB (default), `--stroke-sub-300` (kuat), `--stroke-strong-950` (focus input) | |
| Ikon | `--icon-strong-950`, `--icon-sub-600`, `--icon-soft-400`, `--icon-disabled-300` | |
| Status | `--state-{success,warning,error,information,away,feature,verified,highlighted,stable,faded}-{base,dark,light,lighter}` | |
| Chart / brand | Blue #1253A5 (`--blue-*`), Gold #B48133 (`--gold-500+`; gold 50–400 sebenarnya biru langit), Purple #543A97 (`--purple-*`) | |
| Overlay | `--overlay-overlay-soft` (+ blur 4px) | |

Pola status: **background `*-lighter` + foreground `*-base`** (badge, alert, medallion).
Alias semantik: `--text-primary/secondary/tertiary`, `--surface-page/card/subtle/sidebar`, `--border-default/strong`, `--accent`, `--accent-hover`, `--brand-gradient`.

**Tipografi** (shorthand `font: var(--…)` + `letter-spacing: var(--…-ls)`):
- Title (Inter Display 500): `--title-h1` 56/64 · h2 48/56 · h3 40/48 · h4 32/40 · h5 24/32 · h6 20/28 — untuk judul halaman & angka saldo ≥20px.
- Label (Inter 500): `--label-lg` 18 · `--label-md` 16 · `--label-sm` 14 · `--label-xs` 12.
- Paragraph (Inter 400): `--paragraph-lg` 18 · md 16 · sm 14 · xs 12.
- Subheading UPPERCASE: `--subheading-xs` 12 (+4% tracking, mis. "UTAMA", "MY CONTACTS (12)"), `--subheading-2xs` 11.
- Mulish (`--font-alt`): Link Button, item Sidebar (aktif = Mulish 700 16px), Bottom Sheet.

**Spacing** `--space-{0,2,4,6,8,10,12,14,16,24,32,40,48}` (px). Kartu widget pad 16; modal/drawer pad 20; halaman pad horizontal 32; gap grid widget 24.

**Radius** `--rounded-*`: 4 checkbox/kbd · 6 tag/status badge/compact button · 8 button sm/input sm/dropdown item · 10 button md/input md/accordion · 12 kartu/alert lg/file upload · 16 widget/menu/popover · 20 modal/drawer/login card · `full` badge/avatar/switch.

**Shadow**: stroke-first. Permukaan = `--shadow-stroke-xs` (inset 1px stroke-soft-200 + bayangan tipis).
Lapisan mengambang (menu, modal, popover) = `--shadow-modal`. Tooltip `--shadow-tooltip`. Focus = `--shadow-focus-primary` (kontrol brand) / `--shadow-focus-neutral` (input). FAB satu-satunya shadow berat (`--shadow-fab`).

**Motion**: `--duration-fast` 120ms, `--duration-base` 200ms, `--ease-standard`; keyframes `ab-fade-in`, `ab-pop-in`, `ab-slide-in-right`, `ab-spin`. Tanpa bounce.

## State interaksi
- Hover: ganti ke `--bg-weak-50` dan **hilangkan stroke**; primary hover → `--primary-darker`.
- Disabled: `--bg-weak-50` + `--text-disabled-300`, tanpa shadow.
- Selected: tint `--primary-alpha-10` + teks primary, atau stroke 1px primary untuk kartu.
- Input focus: stroke `--stroke-strong-950` + ring neutral; error: stroke `--state-error-base`.
