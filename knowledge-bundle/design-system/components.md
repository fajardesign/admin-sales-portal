---
title: Components & Assets
description: Catalog of hand-authored components (actions, forms, display, feedback, navigation, brand, icons) and brand assets
type: design-system
tags: [components, assets, icons, logos]
source: claude.ai/design project 806d634a-7101-4e84-b95e-12a21aee38bd (Amar Bank Internal Web DS)
library_path: design-system/
updated: 2026-10-02
---

# Components & Assets

## Katalog komponen (hand-authored, rekomendasi)
Detail props di `design-system/COMPONENTS.md`.
- **actions**: `Button` (variant filled/stroke/lighter/ghost × tone primary/neutral/error × size md40/sm36/xs32/2xs28; secondary default = `stroke`+`neutral`), `LinkButton` ("Lihat Semua"), `CompactButton` (close/more, icon-only), `FancyButton` (hero CTA, jarang), `SocialButton`, `FAB` (Bantuan), `ButtonGroup`/`ButtonGroupItem` (filter periode), `SelectedButton`.
- **forms**: `Field`/`Label`/`HintText`/`CharacterCounter`, `TextInput` (+ `TagInput`, `CounterInput`; `type="password"` ada toggle mata; `leftIcon` nama ikon), `TextArea`, `Select`/`CompactSelect`/`InlineSelect`, `Checkbox(Label)`, `Radio(Label)`/`RadioGroup`, `Switch(Label)`, `CheckboxCard`/`RadioCard`/`SwitchCard`, `DigitInput` (OTP/PIN), `InlineInput`, `Slider`/`RangeSlider`, `Rating`, `ColorDots`, `PasswordStrength`, `FileUploadArea`/`FileUploadCard`/`ImageUpload`, `IntegrationSwitch`.
- **display**: `Badge` (pill, delta "+5%") / `StatusBadge` (radius 6, status transaksi), `Tag`, `Avatar` (+ Status/Badge/Group/CompactGroup; tanpa src → inisial), `KeyIcon` (medallion ikon list), `ContentCard`/`ContentLabel`, `ContentDivider`, `ChartLegend(Dot)`, `ProgressBar`/`ProgressBarLabel`/`CircularProgress`/`StepperDot`, `Accordion`, `Table` (+ HeaderCell/RowCell/SortingIcon; header bg-weak-50).
- **feedback**: `Alert` (+ `Toast`), `Tooltip`, `Popover`(+Footer), `Modal` (+Header/Footer, `StatusModal`), `Drawer` (+Header/Footer), `BottomSheet`, `NotificationItem`, `ActivityFeedItem`/`ActivityFeedFilter`.
- **navigation**: `Sidebar`/`SidebarItem`, `PageHeader`/`SectionHeader`/`WidgetCard`, `Breadcrumbs`, `Pagination`, `TabMenuHorizontal`/`TabMenuVertical`/`SegmentedControl`, `StepIndicatorHorizontal/Vertical`, `Dropdown` (+Item/Search/GroupLabel), `CommandMenu`, `Calendar`/`DateRangePicker`/`DateSelector`/`PeriodRange` (minggu mulai Senin), `TimePicker`, `RichEditor`, `HorizontalFilter`/`VerticalFilterItem`/`ScrollArea`.
- **brand**: `AmarBankLogo` (`lockup`: horizontal | vertical | mark | bisnis-horizontal | bisnis-vertical; `color`: color | white | black, bisnis: color | default; `height`) + alias `AmarBankHorizontal`, dll.
- **icons**: `<Icon name="ArrowRightSLine" size={20} />` — set Remix Icon, 166 glyph (lihat `components/icons/Icon.d.ts`), warna `currentColor`; ukuran 20 default, 16 di badge/hint, 24 di header.
- **illustrations**: `DecorativeIcon` (kategori biller), `TransactionIllustration` (success/pending/failed).
- **flags**: `Flag` (262 negara) — ⚠ `flag-data.js` terpotong, lihat overview.md.

## Aset
- `assets/logos/` — 12 SVG: `amar-bank-{horizontal,vertical}-{color,white,black}`, `amar-bank-without-title-{color,white}`, `amar-bank-bisnis-{horizontal,vertical}-{default,color-text}`. Untuk sidebar gelap pakai varian white/default.
- `assets/illustrations/empty-states/` — 34 PNG (16 `finance-*`, 18 `hr-*`) ilustrasi empty state abu-abu.
- `assets/avatars/` — 7 persona (⚠ terpotong, lihat overview.md). Untuk data nyata pakai `Avatar` dengan inisial.

## Catatan implementasi (gotchas)
- **`TextInput` + `onBlur`**: komponen menyebar `...rest` ke `<input>` *setelah* `onBlur` internalnya — mengoper `onBlur` langsung
  menimpa handler fokus (ring fokus tidak hilang). Tangkap blur di wrapper: `<div onBlur={...}><TextInput … /></div>`
  (contoh: `src/pages/account-management/AddUserModal.jsx`). Prop lain (`autoComplete`, `inputMode`, `aria-*`) aman lewat `...rest`.
- **`StatusModal` `actions`**: setiap child dari `actions` dibungkus `flex: 1` — oper fragment `<>…</>` berisi tombol, bukan `<div>` (style div akan hilang).
  Untuk dialog konfirmasi, bungkus dengan `<Modal width={400} style={{ overflow:'visible', background:'transparent', boxShadow:'none' }}>`.
- **`Modal`** menutup lewat Esc/klik overlay memanggil `onClose`; saat dua modal bertumpuk, kosongkan `onClose` modal bawah agar Esc tidak memicu keduanya.
- **`Toast`** tidak memposisikan diri — letakkan di container `position: fixed; top/right: var(--space-24); z-index: 200`.
- **Tabel kustom**: untuk kolom dengan isi kaya (avatar, 2 baris), pakai `<table>` + `TableHeaderCell` (`first`/`last`/`sort`) + `TableRowCell`
  di dalam kartu `radius 16 + shadow-stroke`, alih-alih `Table`.
- **`AmarBankLogo`** inline SVG semua varian memuat metadata C2PA yang besar — penyumbang utama ukuran bundle JS (±580 KB).
