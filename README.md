# Admin Sales Portal

Prototipe web **Sales & Partner (S&P) Portal** (PRD v3, 7 Okt 2026) Amar Bank untuk role operasional **Admin (Reviewer)**, **APL**, dan **Super Admin**, dibangun dengan **Amar Bank Internal Web DS** (`design-system/`). Data dan API masih mock.

```bash
npm install
npm run dev      # http://localhost:5173 — DevToolbar di bawah layar untuk pindah layar & skenario mock
npm test         # Vitest: validasi + alur login, Partner Pipeline, Account Management, APL, Skema Insentif
npm run build
npm run lint
npm run gen:ds   # regenerate design-system/COMPONENTS.md + index.js dari .d.ts
```

| Rute | Layar | Role / feature access |
|---|---|---|
| `#/login` | W1 Login (email atau username, Lupa password, halaman gangguan) | – |
| `#/denied` | W1-D Akses ditolak (platform bukan web-access) | TL, SR, SA, Partner |
| `#/activate?user=<id>[&mode=reset]` | KC1 Aktivasi akun / reset password | – |
| `#/beranda` | A1 Beranda | Admin · DASHBOARD |
| `#/partner-pipeline`, `#/partner-pipeline/<REG>` | A2 Partner Pipeline (daftar, detail, Ubah Data Partner) | Admin · PARTNER_PIPELINE |
| `#/account-management` | A3 Account Management (Reset Password, Ubah Email) | Admin · ACCOUNT_CREATION |
| `#/apl`, `#/apl/kinerja`, `#/apl/produktivitas`, `#/apl/partner`, `#/apl/tim`, `#/apl/insentif` | B1–B6 Dashboard, Kinerja Penjualan, Produktivitas, Partner, Tim, Insentif | APL |
| `#/skema-insentif`, `#/hasil-perhitungan` | E1–E3 Skema Insentif (versi), Hasil Perhitungan | Super Admin · INCENTIVE_SCHEME |

Menu dan akses rute mengikuti feature access roles (`src/lib/nav.js`); rute tanpa feature menampilkan "Akses ditolak".

Akun demo (password semua `Demo1234`, juga tampil di halaman login mode demo): `rina.saraswati` (Admin), `hasan.basri` / `lestari.wulandari` (APL), `hendra.wijaya` (Super Admin), `andi.pratama` (TL → Akses ditolak), `fajar.nugroho` (Pending), `rizky.ramadhan` (Disabled).

- Knowledge (wajib dibaca & dirawat): `/Users/amarbank/Documents/okf_repository_design/products/sales_dashboard/` — mulai dari `index.md` (aturan di `/Users/amarbank/Documents/okf_repository_design/CLAUDE.md`).
- Komponen: `import { Button } from '@ds/index.js'` — props di `design-system/COMPONENTS.md`.
- Preset layar (mode demo): `/?preset=<nama>` membuka satu state langsung, mis. `/?preset=detail-review` — daftar di `src/dev/presets.js`.
- DevToolbar (mode demo): ganti sesi, skenario tabel (loading/empty/error), gangguan layanan login, hasil simpan pengguna, kegagalan akun PIC, dan tombol "Simulasikan kirim ulang TL/SR" di detail partner berstatus Revision Required.
- API masih mock: `src/api/mockApi.js` (data di `src/api/db.js`, jam demo mulai 07 Okt 2026 10:30 WIB). Komponen komposisi lokal di `src/components/`.

## Deploy (GitHub Pages)
Demo: https://fajardesign.github.io/admin-sales-portal/ — di-deploy otomatis oleh `.github/workflows/deploy-pages.yml` setiap push ke `main`
(test → build dengan `VITE_BASE=/admin-sales-portal/` dan `VITE_DEMO=true` → deploy). Mode demo menampilkan DevToolbar & catatan demo.
Syarat sekali saja: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
