# Admin Sales Portal

Portal web Admin Sales Portal Amar Bank (fase 1: Manajemen Akun Team Leader), dibangun dengan **Amar Bank Internal Web DS** (`design-system/`).

```bash
npm install
npm run dev      # http://localhost:5173 — DevToolbar di bawah layar untuk pindah layar & skenario mock
npm test         # Vitest: validasi + flow W1/W2/KC1
npm run build
npm run lint
npm run gen:ds   # regenerate design-system/COMPONENTS.md + index.js dari .d.ts
```

| Rute | Layar |
|---|---|
| `#/login` | W1 Login Admin |
| `#/denied` | W1 Akses ditolak |
| `#/users` | W2 Manajemen Akun (+ modal Tambah Pengguna) |
| `#/activate` | KC1 Aktivasi akun |

- Knowledge (wajib dibaca & dirawat): `knowledge-bundle/` — mulai dari `knowledge-bundle/index.md`.
- Komponen: `import { Button } from '@ds/index.js'` — props di `design-system/COMPONENTS.md`.
- Preset layar (mode demo): `/?preset=<nama>` membuka satu state langsung, mis. `/?preset=add-user-dup-email` — daftar di `src/dev/presets.js`.
- API masih mock: `src/api/mockApi.js`. Sumber desain: `design-sources/sales-portal-web/`.

## Deploy (GitHub Pages)
Demo: https://fajardesign.github.io/admin-sales-portal/ — di-deploy otomatis oleh `.github/workflows/deploy-pages.yml` setiap push ke `main`
(test → build dengan `VITE_BASE=/admin-sales-portal/` dan `VITE_DEMO=true` → deploy). Mode demo menampilkan DevToolbar & catatan demo.
Syarat sekali saja: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
