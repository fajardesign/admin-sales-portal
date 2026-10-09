// Enum, label, dan master data prototipe S&P Portal (PRD "Final Prompt - Sales and partner Dashboard").

/** Master area (hard-coded fase 1, PRD §3 F2). Wilayah dipakai untuk alamat partner contoh. */
export const AREAS = [
  { id: 1, code: 'MKS', tz: 'WITA', utcOffset: 8, name: 'Makassar', province: 'Sulawesi Selatan', city: 'Kota Makassar', district: 'Panakkukang', village: 'Pandang', lat: -5.1477, lng: 119.4327 },
  { id: 2, code: 'BDG', tz: 'WIB', utcOffset: 7, name: 'Bandung', province: 'Jawa Barat', city: 'Kota Bandung', district: 'Coblong', village: 'Dago', lat: -6.8915, lng: 107.6107 },
  { id: 3, code: 'MDN', tz: 'WIB', utcOffset: 7, name: 'Medan', province: 'Sumatera Utara', city: 'Kota Medan', district: 'Medan Petisah', village: 'Sei Sikambing D', lat: 3.5952, lng: 98.6722 },
  { id: 4, code: 'SBY', tz: 'WIB', utcOffset: 7, name: 'Surabaya', province: 'Jawa Timur', city: 'Kota Surabaya', district: 'Tegalsari', village: 'Kedungdoro', lat: -7.2575, lng: 112.7521 },
  { id: 5, code: 'JKT', tz: 'WIB', utcOffset: 7, name: 'Jakarta', province: 'DKI Jakarta', city: 'Kota Jakarta Barat', district: 'Grogol Petamburan', village: 'Tanjung Duren Selatan', lat: -6.1767, lng: 106.7905 },
  { id: 6, code: 'DPS', tz: 'WITA', utcOffset: 8, name: 'Denpasar', province: 'Bali', city: 'Kota Denpasar', district: 'Denpasar Barat', village: 'Dauh Puri', lat: -8.6705, lng: 115.2126 },
  { id: 7, code: 'PLG', tz: 'WIB', utcOffset: 7, name: 'Palembang', province: 'Sumatera Selatan', city: 'Kota Palembang', district: 'Ilir Timur I', village: 'Sungai Pangeran', lat: -2.9761, lng: 104.7754 },
];
export const areaName = (id) => AREAS.find((a) => a.id === id)?.name ?? '-';

// Absensi & kunjungan (revisi stakeholder 2026-10-08). Jam memakai waktu lokal area (WIB/WITA).
/** Kantor terdaftar untuk check in absensi: data contoh 1 kantor per area. */
export const OFFICES = AREAS.map((a) => ({ areaId: a.id, name: `Kantor Amar Bank ${a.name}`, lat: +(a.lat + 0.004).toFixed(6), lng: +(a.lng - 0.003).toFixed(6) }));
/** Radius check in absensi (kantor atau toko partner) dan kunjungan (toko), km. */
export const CHECK_IN_RADIUS_KM = 3;
/** Zona waktu Indonesia yang didukung (PRD Scope 2 §2.1): offset UTC dalam jam. */
export const TIME_ZONES = { WIB: 7, WITA: 8, WIT: 9 };
/** Check in absensi ≤ 10:00 waktu lokal = Tepat Waktu; kunjungan bisa check in mulai 12:00 waktu lokal. */
export const ON_TIME_LIMIT = '10:00';
export const VISIT_START = '12:00';
/** Label laporan absensi (Bahasa Indonesia, pemetaan dari Check in / On time / Late / Check out / Absen). */
export const ATTENDANCE_LABEL = { CHECKED_IN: 'Sudah Check In', ON_TIME: 'Tepat Waktu', LATE: 'Terlambat', CHECKED_OUT: 'Sudah Check Out', ABSENT: 'Absen' };

/** Status partner (PRD §2). */
export const PARTNER_STATUS = {
  UNDER_REVIEW: { label: 'Under Review', color: 'blue' },
  REVISION_REQUIRED: { label: 'Revision Required', color: 'orange' },
  VERIFIED: { label: 'Verified', color: 'teal' },
  WAITING_PKS: { label: 'Waiting PKS', color: 'purple' },
  ACTIVE: { label: 'Active', color: 'green' },
  REJECTED: { label: 'Rejected', color: 'red' },
  CANCELLED: { label: 'Cancelled', color: 'gray' },
  INACTIVE: { label: 'Inactive', color: 'gray' },
};
export const REVIEW_FLOW = ['UNDER_REVIEW', 'REVISION_REQUIRED', 'VERIFIED', 'WAITING_PKS', 'ACTIVE'];
export const FINAL_STATUSES = ['REJECTED', 'CANCELLED', 'INACTIVE'];
/** Slug URL (?status=under_review) ↔ enum. */
export const statusSlug = (s) => s.toLowerCase();
export const statusFromSlug = (slug) => (slug && PARTNER_STATUS[slug.toUpperCase()] ? slug.toUpperCase() : null);

/** Perpindahan status yang diizinkan (PRD §2D). Selain ini backend menjawab 409. */
export const TRANSITIONS = {
  UNDER_REVIEW: ['REVISION_REQUIRED', 'VERIFIED', 'REJECTED', 'CANCELLED'],
  REVISION_REQUIRED: ['UNDER_REVIEW', 'REJECTED', 'CANCELLED'],
  VERIFIED: ['WAITING_PKS', 'CANCELLED'],
  WAITING_PKS: ['ACTIVE', 'CANCELLED'],
  ACTIVE: ['INACTIVE'],
  REJECTED: [], CANCELLED: [], INACTIVE: [],
};

export const ENTITY = { INDIVIDU: 'Individu', PT: 'PT', CV: 'CV' };
export const CHANNEL = { STORE: 'Store', NON_STORE: 'Non-Store' };
export const PIC_STATUS = { OWNER: 'Owner', KARYAWAN: 'Karyawan' };
export const STORE_TYPE = { ONLINE: 'Online', OFFLINE: 'Offline' };
export const CHANNEL_OFFLINE = { AGENCY: 'Agency', NON_AGENCY: 'Non-Agency' };
export const SCALE = { MODERN: 'Modern', TRADITIONAL: 'Tradisional' };
export const PRODUCT_SOLD = { BRAND_NEW: 'Baru', USED: 'Bekas', BLENDED: 'Campuran' };
export const STORE_LOCATION = { SEPARATE: 'Terpisah', PINGGIR_JALAN: 'Pinggir Jalan', MALL: 'Mall' };
export const PRODUCT_TYPE = { GADGET: 'Gadget', NON_GADGET: 'Non-Gadget' };
export const STORE_STATUS = { PENDING: 'Menunggu partner Active', ACTIVE: 'Aktif', INACTIVE: 'Nonaktif' };

export const BANKS = { BCA: 'BCA', BRI: 'BRI', MANDIRI: 'Mandiri', BNI: 'BNI', BTN: 'BTN', BSI: 'BSI', CIMB: 'CIMB Niaga', PERMATA: 'Permata' };

/** Status verifikasi dokumen & rekening. */
export const VERIFICATION = {
  UNVERIFIED: { label: 'Belum Dicek', status: 'disabled' },
  VALID: { label: 'Valid', status: 'completed' },
  NEEDS_REVISION: { label: 'Perlu Revisi', status: 'failed' },
};

export const PKS_STATUS = { NOT_SENT: 'Belum dikirim', WAITING_SIGNATURE: 'Menunggu tanda tangan', SIGNED: 'Sudah ditandatangani' };
export const PKS_VIA = { PRIVY_ID: 'Privy ID', EMAIL: 'Email undangan' };

/** Bagian data yang bisa diminta revisi (PRD §2C). */
export const REVISION_SECTIONS = [
  { key: 'partner', label: 'Informasi Partner' },
  { key: 'business', label: 'Data Bisnis' },
  { key: 'pic', label: 'Informasi PIC' },
  { key: 'bank', label: 'Data Rekening' },
  { key: 'store', label: 'Toko Utama' },
];

/**
 * Matriks dokumen (PRD §2B Tab Dokumen). req: M wajib, O opsional, K wajib bila Status PIC = Karyawan, null = tidak perlu.
 * level PARTNER = Dokumen Partner, STORE = Foto Toko.
 */
export const DOC_TYPES = [
  { key: 'KTP_PIC', label: 'KTP PIC', level: 'PARTNER', INDIVIDU: 'M', COMPANY: 'M' },
  { key: 'KTP_OWNER', label: 'KTP Pemilik', level: 'PARTNER', INDIVIDU: 'K', COMPANY: null },
  { key: 'NPWP', label: 'NPWP (pribadi)', level: 'PARTNER', INDIVIDU: 'M', COMPANY: null },
  { key: 'NPWP_COMPANY', label: 'NPWP Perusahaan', level: 'PARTNER', INDIVIDU: null, COMPANY: 'M' },
  { key: 'NIB', label: 'NIB / SIUP', level: 'PARTNER', INDIVIDU: 'O', COMPANY: 'O' },
  { key: 'ANGGARAN_DASAR', label: 'Anggaran Dasar', level: 'PARTNER', INDIVIDU: null, COMPANY: 'M' },
  { key: 'AKTA', label: 'Akta Pendirian', level: 'PARTNER', INDIVIDU: null, COMPANY: 'M' },
  { key: 'SK_KEMENKUMHAM', label: 'SK Kemenkumham', level: 'PARTNER', INDIVIDU: null, COMPANY: 'M' },
  { key: 'DOMISILI', label: 'Keterangan Domisili', level: 'PARTNER', INDIVIDU: null, COMPANY: 'M' },
  { key: 'IJIN', label: 'Ijin Lokasi & Ijin Usaha', level: 'PARTNER', INDIVIDU: null, COMPANY: 'M' },
  { key: 'BUKU_REKENING', label: 'Halaman Depan Buku Rekening / Rekening Koran', level: 'PARTNER', INDIVIDU: 'M', COMPANY: 'M' },
  { key: 'FOTO_DEPAN', label: 'Foto Toko – Tampak Depan', level: 'STORE', INDIVIDU: 'M', COMPANY: 'M' },
  { key: 'FOTO_SAMPING', label: 'Foto Toko – Tampak Samping', level: 'STORE', INDIVIDU: 'M', COMPANY: 'M' },
];

/**
 * Role akun & pemetaan Keycloak (PRD v3 "Role mapping"): realm role, platform access role, feature access roles.
 * Menu dan API mengikuti feature access roles; login web butuh platform "web-access".
 */
const SALES_COMMON = ['ATTENDANCE', 'VISIT_EXECUTION', 'LOAN_TRACKING', 'SALES_PERFORMANCE', 'PRODUCTIVITY_PERFORMANCE_CHECK_IN', 'PRODUCTIVITY_PERFORMANCE_VISIT', 'INCENTIVE_ESTIMATION', 'PARTNER_VIEW'];
export const ROLES = {
  REVIEWER: { label: 'Admin (Reviewer)', short: 'Admin', realm: 'ADMIN', platform: 'web-access', features: ['DASHBOARD', 'PARTNER_PIPELINE', 'ACCOUNT_CREATION'] },
  APL: { label: 'APL', short: 'APL', realm: 'APL', platform: 'web-access', features: ['SALES_PERFORMANCE', 'PRODUCTIVITY_PERFORMANCE_CHECK_IN', 'PRODUCTIVITY_PERFORMANCE_VISIT', 'INCENTIVE_ESTIMATION', 'PARTNER_VIEW', 'TEAM_VIEW'] },
  TL: { label: 'TL', short: 'TL', realm: 'TL', platform: 'sales-app-access', features: ['PARTNER_ACQUISITION', 'SALES_ASSIGNMENT', 'VISIT_PLAN_MANAGEMENT', ...SALES_COMMON, 'TEAM_VIEW'] },
  SR: { label: 'SR', short: 'SR', realm: 'SR', platform: 'sales-app-access', features: ['PARTNER_ACQUISITION', ...SALES_COMMON] },
  SA: { label: 'SA', short: 'SA', realm: 'SA', platform: 'sales-app-access', features: SALES_COMMON },
  PARTNER: { label: 'Partner (PIC)', short: 'Partner', realm: 'PARTNER', platform: 'partner-web-access', features: ['PARTNER_SALES_DASHBOARD', 'PARTNER_COMMISSION', 'PARTNER_PROFILE', 'TRANSACTION_INQUIRY', 'DOCUMENT_REPOSITORY'] },
  SUPER_ADMIN: { label: 'Super Admin', short: 'Super Admin', realm: 'SUPER_ADMIN', platform: 'web-access', features: ['INCENTIVE_SCHEME'] },
};
export const CREATABLE_ROLES = ['REVIEWER', 'APL', 'TL', 'SR', 'SA'];
export const TL_LEVEL = { JUNIOR: 'Junior', SENIOR: 'Senior' };

/** Status akun Keycloak (PRD §3). EXPIRED dihitung, tidak disimpan. */
export const ACCOUNT_STATUS = {
  PENDING: { label: 'Pending', status: 'pending' },
  EXPIRED: { label: 'Expired', status: 'failed' },
  ACTIVE: { label: 'Active', status: 'completed' },
  DISABLED: { label: 'Disabled', status: 'disabled' },
};

/** Label Status Akun Login PIC di Partner Detail (PRD §2B). */
export const PIC_ACCOUNT_LABEL = { NONE: 'Belum dibuat', PENDING: 'Undangan terkirim', EXPIRED: 'Undangan terkirim', ACTIVE: 'Aktif', DISABLED: 'Dinonaktifkan', FAILED: 'Akun PIC gagal dibuat' };

export const PAGE_SIZE = 20;
/** Tautan aktivasi berlaku 3x24 jam (revisi stakeholder 2026-10-08); tautan reset password tetap 24 jam. */
export const ACTIVATION_TTL_MS = 72 * 3600e3;
export const RESET_TTL_MS = 24 * 3600e3;
