/**
 * Versi PRD yang dibangun (keputusan 2026-10-17): `main` = PRD 2.0 (dalam pengerjaan) di alamat utama GitHub Pages; PRD 1.1
 * beku di tag git `prd-v1.1`, dibangun ulang ke `/v1.1/` oleh workflow deploy (VITE_PRD_VERSION=1.1).
 */
export const PRD_VERSION = import.meta.env.VITE_PRD_VERSION || '2.0';
export const PRD_LABEL = PRD_VERSION === '2.0' ? 'PRD 2.0 (dalam pengerjaan)' : `PRD ${PRD_VERSION}`;
const PAGES = import.meta.env.VITE_DEMO === 'true' && !import.meta.env.DEV;
/** Tautan ke versi lain di GitHub Pages; null di lokal (hanya satu versi yang jalan). */
export const OTHER_VERSION = !PAGES ? null : PRD_VERSION === '1.1'
  ? { label: 'Lihat PRD 2.0', href: `${import.meta.env.BASE_URL}../` }
  : { label: 'Lihat PRD 1.1', href: `${import.meta.env.BASE_URL}v1.1/` };
