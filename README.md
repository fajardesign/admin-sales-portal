# Admin Sales Portal

Web admin untuk tim sales Amar Bank, dibangun dengan **Amar Bank Internal Web DS** (`design-system/`).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run lint
npm run gen:ds   # regenerate design-system/COMPONENTS.md + index.js dari .d.ts
```

- Komponen: `import { Button, Table } from '@ds/index.js'` — props di `design-system/COMPONENTS.md`.
- Panduan desain (wajib dibaca): `knowledge-bundle/design-system/`.
- Struktur: `src/layout/AppShell.jsx` (Sidebar + PageHeader), `src/pages/*`, `src/data/*` (mock data).
