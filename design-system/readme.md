# Amar Bank — Internal Web Design System

Web design system for **internal Amar Bank projects** (back-office tools and the *Amar Bank Bisnis* business-banking web app). It is a faithful extraction of the Figma library **"Internal Project DS Lib - Web.fig"** — a customised build of an AlignUI-style component kit re-themed with Amar Bank's Jewel Blue primary and brand lockups.

**Source:** `Internal Project DS Lib - Web.fig` (attached as a mounted file; no public link was provided). Scope used: Core foundations (Color Palette, Typography, System Icons, Decorative Icons, Illustration, New Illustration), all *Base Components 1.1* pages, Widgets, the Finance & Banking Dashboard example and Presentation Assets. Out of scope pages (Brand, Country Flags, Emojis, App Store Badges, Grid, Shadows, Motion, Corner Radius pages) were not read, except the Amar Bank logo components that the in-scope Sidebar instances.

## Index
- `styles.css` — entry point (imports only) → `tokens/fonts.css`, `tokens/fig-tokens.css` (all 313 Figma Variables, light/dark + theme modes), `tokens/fig-typography.css` (pointer only: the Figma text styles are mapped 1:1 in semantic.css), `tokens/semantic.css` (type scale, px spacing/radius, shadows, aliases), `tokens/base.css`.
- `components/` — React primitives (see list below). `components/icons/` holds `Icon` + `icon-data.js`.
- `guidelines/` — foundation specimen cards (colors, type, spacing, radius, shadows, brand).
- `assets/logos/` — 12 Amar Bank / Amar Bank Bisnis SVG lockups. `assets/avatars/` — 7 persona images. `assets/illustrations/empty-states/` — 34 empty-state PNGs (16 finance, 18 HR).
- `ui_kits/bisnis-web/` — interactive recreation of the Finance & Banking dashboard (login, dashboard, transfer, transactions, notifications).
- `thumbnail.html`, `SKILL.md`.

## Components
Namespace: `window.AmarBankInternalWebDS_806d63`.
- **actions/** Button, LinkButton, CompactButton, FancyButton, SocialButton, FAB, ButtonGroup, ButtonGroupItem, SelectedButton
- **forms/** Field, Label, HintText, CharacterCounter, TextInput, TagInput, CounterInput, DigitInput, InlineInput, TextArea, Select, CompactSelect, InlineSelect, Checkbox, CheckboxLabel, Radio, RadioLabel, RadioGroup, Switch, SwitchLabel, CheckboxCard, RadioCard, SwitchCard, IntegrationSwitch, PasswordStrength, Slider, RangeSlider, ColorDots, ColorDot, Rating, RatingCell, RatingBar, FileUploadArea, FileUploadCard, FileFormatIcon, ImageUpload
- **display/** Badge, StatusBadge, Tag, Avatar, AvatarStatus, AvatarBadge, AvatarGroup, CompactAvatarGroup, KeyIcon, ContentDivider, ContentLabel, ContentCard, ChartLegend, ChartLegendDot, ProgressBar, ProgressBarLabel, CircularProgress, StepperDot, Accordion, Table, TableHeaderCell, TableRowCell, SortingIcon
- **feedback/** Alert, Toast, Tooltip, Popover, PopoverFooter, Modal, ModalHeader, ModalFooter, StatusModal, Drawer, DrawerHeader, DrawerFooter, BottomSheet, BottomSheetHeader, BottomSheetFooter, NotificationItem, ActivityFeedItem, ActivityFeedFilter
- **navigation/** Breadcrumbs, Pagination, PaginationCell, TabMenuHorizontal, TabMenuVertical, SegmentedControl, StepIndicatorHorizontal, StepIndicatorVertical, Sidebar, SidebarItem, PageHeader, SectionHeader, WidgetCard, Dropdown, DropdownItem, DropdownSearch, DropdownGroupLabel, CommandMenu, CommandMenuItem, Calendar, DateRangePicker, DayCell, DateSelector, PeriodRange, TimePicker, TimeSlot, RichEditor, RichEditorItem, HorizontalFilter, VerticalFilterItem, ScrollArea
- **illustrations/** DecorativeIcon, TransactionIllustration · **icons/** Icon

Family mapping: each Figma `… [1.1]` set maps to one export (e.g. *Buttons [1.1]* → Button, *Key Icons [1.1]* → KeyIcon, *Top/Bottom Status* → AvatarBadge/AvatarStatus, *Notifications Tab Menu* → TabMenuHorizontal, *Command Menu Search Input/Footer* → CommandMenu, *Compact Select for Input* → TextInput `prefix` + CompactSelect, *Vertical Filter Header/Footer* → compose with SectionHeader/ModalFooter).

**Intentional additions:** `Field` (shared label/hint wrapper), `RadioGroup`, `Toast` (Alert lg on an elevated surface — the source family is "Alert & Notification & Toast"), `WidgetCard` (shell shared by every Widgets frame), `Icon` (wrapper for the icon set), `ScrollArea` (Scroll [1.1] as a container).

- **flags/** Flag (+ one export per country, e.g. Indonesia, UnitedStates — 262 total, see Flag.d.ts)
- **brand-sets/** (Figma-generated) Apex, Aurora, Catalyst, Horizon, Orandis, Phoenix, Pulse, Synergy, MajorBrandLogos11, AppStoreBadges11, BrandBiller, BrandsEWallet
- **widget-sets/** (Figma-generated) CalendarCardCalendarPage1, CalendarUpcomingCalendarPage1, CardDetailsTabMyCards, CardPositioningCalendarPage1, ChipsMyCards11, ConnectionStatusTopbar10, CreditCardsMyCards1, DonationDetailsTabDonationProfile, EmployeeSpotlightTabsEmployeeSpotlight, FeatureCardsSidebar11, GaugeBarTimeOff1, HeaderCardSidebar11, MyContactsQuickTransfer1, NotesContentNotes11, PromotionalCardsMySubscriptions1, SavedActionsItemsSavedActions, ScheduleCardsSchedule11, ScheduleDateSchedule11, ScheduleDetailTabsScheduleMenu, ChartTooltip11, Empty, InlineTipsDocumentation, SeparatorPage, TaskStatus, TimeTrackerDropdownTimeTracker, TimerTimeTracker11, TopbarNavigation11, TopbarItemButtonTopbar1, TopbarItemsTopbar10, TransactionDetailTabsRecentTransactions, TransactionItemsRecentTransactions1, Tunaiku, UpcomingStatusCalendarPage1, UserProfileTopbar10, MondayCom, Amazon, Shopify2, WalmartPay, Mastercard, Placeholder, UserProfileCardSidebar1, Amex, Bitcoin, BitcoinCash, BlocksDocumentation11, Citadele, ColorPicker11, ColorSpectrum11, DaySelectionSchedule11, EStatementFailed, EStatementPending, EStatementSuccess (each also aliased with its full Figma name, e.g. CreditCardsMyCards11)
- **misc-sets/** (Figma-generated) CMSIllustration, ColorSliders11, HeaderFooterDocumentation, HeroDocumentation, HeroImagesDocumentation, SectionsDocumentation11, Solaris, StackedBarChartBudgetOverview, StackedBarChartItemBudget, Youtube, React, Notion, LemonSqueezy, GlobalLine, MailLine, ArrowLeftSLine, ArrowRightSLine, Buttons11NeutralStroke17
- **variants/** FigmaVariants.jsx — ~350 exports, one per Figma variant-symbol (e.g. `Buttons11ErrorFilledDefaultMedium40Off`, `Badge11BasicPurpleSmall16OffOff`, `LinkButtons11GrayDefaultSmall16On`), each a preset of the hand-authored component. Regenerate from `_names.txt` with `_gen.txt`.
- **widget-sets/** also: WidgetsFinanceBanking11, WidgetsHRManagement11 (full widget catalogs, Figma-generated, ~600 KB / 335 KB), EStatementTrfIn, EStatementTrfOut. Internal helpers in this folder are `_`-prefixed and not exposed.
- **brand/** AmarBankLogo (+ AmarBankHorizontal, AmarBankVertical, AmarBankWithoutTitle, AmarBankBisnisHorizontal, AmarBankBisnisVertical)

Every Figma `… [1.1]` set is also exported under its source name (e.g. `Buttons11`, `KeyIcons11`, `AlertNotificationToast11`) as an alias of the component above.

**Not built (intentionally):** widget-specific sets (Calendar Card, Schedule Cards, Gauge Bar, Credit Cards/Chips [My Cards], Promotional Cards, Donation tabs, Employee Spotlight tabs, Notes Content, Saved Actions items, My Contacts) — these are one-off dashboard compositions, recreated inside the UI kit instead. Glyph libraries counted as "families" by the compiler (≈4,487 system icons, country flags, emoji, Major Brand Logos, App Store badges, Hero Images [Documentation], Header/Footer/Sections [Documentation]) are documentation or asset sets, not components.

### Coverage notes
Every Figma component family is now exported. Hand-authored components are the recommended API; the Figma-generated sets (brand-sets, widget-sets, misc-sets, variants) mirror the file's variant axes 1:1 and are heavier. Known approximations: the empty-state illustrations inside generated widgets are stubbed to their gray circle (use the PNGs in assets/illustrations/empty-states/), Hero Images [Documentation] lost most bitmaps to the extractor's 16 MB asset cap, and the ~4,487 system-icon glyphs ship as 166 Icon entries (more on request). Emoji (609 bitmap glyphs on the Emojies page) are not yet exported.

## Content fundamentals
- **Language:** the product UI is Indonesian (sidebar: *Utama, Informasi Rekening, Transfer, Menunggu Persetujuan, Beli & Bayar, Payroll, Riwayat Transaksi, Mutasi & e-Statement; Atur: Manajemen Pengguna, Batas Transaksi, Atur Personal, Notifikasi*; header actions *Bantuan*, *Keluar*). Component documentation and widget samples in the kit are English ("Total Balance", "Quick Transfer", "Recent Transactions", "See All"). Build product screens in Indonesian unless told otherwise.
- **Tone:** plain, functional, short. Labels are nouns ("Total Expenses", "Budget Overview"); buttons are verbs/short phrases ("Login", "See All", "Advanced", "Save a New Action"). Descriptions are one sentence: "Enter your details to login.", "This score is considered to be Excellent."
- **Casing:** Title Case for headings and buttons in English ("Login to your account" is sentence case for page titles); section eyebrows are UPPERCASE with +4% tracking ("MY CONTACTS (12)", "ENTER AMOUNT", "UTAMA").
- **Person:** second person ("your account", "Your credit score is 710"); no first-person brand voice.
- **Numbers:** money is always formatted with currency + 2 decimals ($14,480.24, $96,000.00); deltas as colored badges ("+5%", "-3%").
- **Field copy:** "Change Label" + red/primary `*` + "(Optional)" sublabel; hint "This is a hint text to help user."
- **Emoji:** never in UI copy. (Figma variant names use emoji as tags, and an Emoji page exists, but product strings don't.)

## Visual foundations
- **Color:** almost entirely neutral (gray ramp #FFFFFF → #171717) with a single accent, **Jewel Blue #009FAF** (`--primary-base`; hover `--primary-darker` #00717C). Theme modes swap the primary to purple / orange / gold (`data-mode`). Charts and the logo wordmark use **Blue #1253A5**, **Gold #B48133** and **Purple #543A97**; the logo mark gradient runs blue → teal → lime (#BBD63F). Status colors are always used as a `*-lighter` tint background + `*-base` foreground (badges, alerts, medallions). Note: the source's `gold-50…400` steps are actually sky blues — use gold 500+.
- **Type:** **Mulish** for everything (synced 2026-10-07 from the live Figma library, whose text styles are all Mulish; the original .fig import had no text styles and guessed Inter). Scale: Title H1–H6 Medium 56/48/40/32/24/20; Label & Paragraph X Large 24/32, Large 18/24, Medium 16/24, Small 16/24, X Small 12/16; Subheading Medium/Small 16/24 (+6%), X Small 12/16 (+4%), 2X Small 11/12 (+2%), uppercase. There is no 14px style. Tracking: -1.5% at 18–24px, -1.1% Medium, -0.6% Small.
- **Spacing:** 2/4/6/8/10/12/14/16/24/32/40/48. Cards pad 16 (widgets) / 20 (modals, drawers); pages pad 32 horizontally; widget grid gap 24.
- **Corner radii:** 4 (checkbox, kbd) · 6 (tags, status badges, compact buttons) · 8 (sm buttons, inputs sm, dropdown items) · 10 (md buttons/inputs, accordion) · 12 (cards, alerts lg, file upload) · 16 (widgets, menus, popovers) · 20 (modals, drawers, login card) · full (badges, avatars, key icons, switches).
- **Borders & shadows:** stroke-first. Surfaces are white with `inset 0 0 0 1px stroke-soft-200` (#EBEBEB) plus a whisper `0 1px 2px rgba(10,13,20,.03)`. Floating layers (menus, modals, popovers) add `0 16px 32px -12px rgba(14,18,27,.1)`. Focus = 2px white gap + 4px 10%-alpha ring (primary for brand controls, slate for neutral inputs). FAB is the only heavy, multi-layer shadow.
- **States:** hover → swap to `bg-weak-50` (#F7F7F7) and *drop* the stroke; primary hover → darker shade; pressed switch knob shrinks 12→10px; disabled → `bg-weak-50` + `text-disabled-300`, no shadow. Selected → primary-alpha-10 tint + primary text, or 1px primary stroke for cards.
- **Backgrounds:** flat white pages; no gradients, textures or photography in product screens. Grays (`bg-weak-50`) separate nested regions (amount entry, table header). The sidebar in the banking example is dark (`bg-surface-800`).
- **Imagery:** illustrated cartoon personas for avatars; empty states are grayscale line illustrations in a soft gray circle with sparkles (they recolor via `--illustration-*` tokens in dark mode).
- **Motion:** the file's Motion page wasn't in scope; components use quick 120–200ms ease-out fades/pops. No bounces.
- **Transparency/blur:** only modal overlays (`overlay-soft` + 4px blur) and alpha tints.
- **Layout:** 1440 artboards, 272px sidebar, page header 88px, 3-column widget grid (two fluid + 352px rail).

## Iconography
- **System icons:** the file's "System Icons" page is a **Remix Icon**-style set (~4,487 glyphs, `*-line` / `*-fill`, 24-grid, single color). 166 commonly needed glyphs were extracted as SVG path data into `components/icons/icon-data.js`; render with `<Icon name="ArrowRightSLine" size={20} />` (kebab names also work). Icons paint with `currentColor`; default UI size 20px, 16px in badges/hints, 24px in headers. Missing a glyph? Ask for it to be extracted (same names as remixicon.com).
- **Key icons:** icons are often wrapped in a round medallion (`KeyIcon`: stroke or lighter-tint).
- **Decorative icons:** biller category medallions (water, gas, electricity, donate, internet, phone, rent, tax) — `DecorativeIcon`.
- **Illustrations:** transaction success/pending/failed (`TransactionIllustration`) and the empty-state PNGs.
- **Emoji / unicode:** emoji are used only inside Rating Bar (emoji faces) — not as icons. No icon font.
- **Logos:** `assets/logos/*.svg` (Amar Bank horizontal/vertical/without-title in color/white/black; Amar Bank Bisnis horizontal/vertical). The logo-mark gradient was reconstructed from the Figma gradient stops (the extractor dropped gradient fills) — verify against official artwork.

## Caveats
- Font binaries were not in the file: Mulish (and Inter, kept as fallback only) load from Google Fonts.
- Spacing/radius Figma variables are unitless; use the `--space-*` / `--rounded-*` px aliases.
