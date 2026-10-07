# Admin Sales Portal

Prototipe web **Sales & Partner (S&P) Portal** Amar Bank untuk role operasional **Admin (Reviewer)**, **APL**, dan **Super Admin**, dibangun dengan **Amar Bank Internal Web DS** (`design-system/`). Data dan API masih mock.

```bash
npm install
npm run dev      # http://localhost:5173 — DevToolbar di bawah layar untuk pindah layar & skenario mock
npm test         # Vitest: validasi + alur login, Partner Pipeline, Account Management, APL, Skema Insentif
npm run build
npm run lint
npm run gen:ds   # regenerate design-system/COMPONENTS.md + index.js dari .d.ts
```

| Rute | Layar | Role |
|---|---|---|
| `#/login` | W1 Login (email atau username) | – |
| `#/denied` | W1-D Akses ditolak | TL, SR, SA, Partner |
| `#/activate?user=<id>` | KC1 Aktivasi akun | – |
| `#/beranda` | W0 Beranda | Admin |
| `#/partner-pipeline`, `#/partner-pipeline/<REG>` | W3 Partner Pipeline (daftar & detail) | Admin |
| `#/account-management` | W2 Account Management | Admin |
| `#/apl`, `#/apl/performa`, `#/apl/insentif`, `#/apl/partner`, `#/apl/tim` | A1–A5 Ringkasan, Performa, Insentif, Partner & Toko, Tim | APL |
| `#/skema-insentif` | S1–S2 Skema Insentif | Super Admin |

Akun demo (password semua `Demo1234`, juga tampil di halaman login mode demo): `rina.saraswati` (Admin), `hasan.basri` / `lestari.wulandari` (APL), `hendra.wijaya` (Super Admin), `andi.pratama` (TL → Akses ditolak), `fajar.nugroho` (Pending), `rizky.ramadhan` (Disabled).

- Knowledge (wajib dibaca & dirawat): `/Users/amarbank/Documents/okf_repository_design/products/sales_dashboard/` — mulai dari `index.md` (aturan di `/Users/amarbank/Documents/okf_repository_design/CLAUDE.md`).
- Komponen: `import { Button } from '@ds/index.js'` — props di `design-system/COMPONENTS.md`.
- Preset layar (mode demo): `/?preset=<nama>` membuka satu state langsung, mis. `/?preset=detail-review` — daftar di `src/dev/presets.js`.
- DevToolbar (mode demo): ganti sesi, skenario tabel (loading/empty/error), hasil simpan pengguna, kegagalan akun PIC, dan tombol "Simulasikan kirim ulang TL/SR" di detail partner berstatus Revision Required.
- API masih mock: `src/api/mockApi.js` (data di `src/api/db.js`, jam demo mulai 07 Okt 2026 10:30 WIB). Komponen komposisi lokal di `src/components/`.

## Deploy (GitHub Pages)
Demo: https://fajardesign.github.io/admin-sales-portal/ — di-deploy otomatis oleh `.github/workflows/deploy-pages.yml` setiap push ke `main`
(test → build dengan `VITE_BASE=/admin-sales-portal/` dan `VITE_DEMO=true` → deploy). Mode demo menampilkan DevToolbar & catatan demo.
Syarat sekali saja: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
