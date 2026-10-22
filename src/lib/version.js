/**
 * Versi PRD yang dibangun (keputusan 2026-10-17, diperluas 2026-10-22 untuk PRD 3.0): `main` = PRD terbaru (dalam pengerjaan) di
 * alamat utama GitHub Pages; setiap versi lama beku di tag git `prd-v<versi>` dan dibangun ulang ke `/v<versi>/` oleh workflow
 * deploy (VITE_PRD_VERSION). Workflow menyalin file ini dan VersionTag dari `main` ke build versi lama agar pemilih versinya
 * selalu lengkap dan tautannya benar.
 */
export const VERSIONS = ['1.1', '2.0', '3.0'];
export const LATEST = VERSIONS[VERSIONS.length - 1];
export const PRD_VERSION = import.meta.env.VITE_PRD_VERSION || LATEST;
export const PRD_LABEL = PRD_VERSION === LATEST ? `PRD ${PRD_VERSION} (dalam pengerjaan)` : `PRD ${PRD_VERSION}`;
const PAGES = import.meta.env.VITE_DEMO === 'true' && !import.meta.env.DEV;
// Akar situs = BASE_URL tanpa akhiran `v<versi>/` milik build versi lama.
const ROOT = (import.meta.env.BASE_URL || '/').replace(/v\d+\.\d+\/$/, '');
const hrefOf = (v) => (v === LATEST ? ROOT : `${ROOT}v${v}/`);
/** Versi lain di GitHub Pages (terbaru dulu); kosong di lokal karena hanya satu versi yang jalan. */
export const OTHER_VERSIONS = !PAGES ? [] : [...VERSIONS].reverse().filter((v) => v !== PRD_VERSION).map((v) => ({ version: v, label: `PRD ${v}`, href: hrefOf(v) }));
