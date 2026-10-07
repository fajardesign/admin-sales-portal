// Mock database prototipe S&P Portal: pengguna (app_user), partner + toko + dokumen, pinjaman, target, skema insentif.
// Data deterministik (PRNG ber-seed) dan hidup di memori; reload halaman = data kembali ke awal.
import { AREAS, DOC_TYPES } from '../lib/constants.js';

/** Jam demo dimulai Rabu 07 Okt 2026 10:30 WIB lalu berjalan normal, supaya status Expired & sisa waktu tautan stabil. */
const BASE = Date.parse('2026-10-07T03:30:00Z');
const LOADED = Date.now();
export const now = () => new Date(BASE + (Date.now() - LOADED));
const ago = (h) => new Date(BASE - h * 3600e3);
const day = (iso) => new Date(`${iso}T03:00:00Z`);

let seed = 7;
const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
const between = (a, b) => a + Math.floor(rnd() * (b - a + 1));

export const DEMO_PASSWORD = 'Demo1234';

// ---------------------------------------------------------------- pengguna
function user(id, fullName, role, extra = {}) {
  const local = fullName.toLowerCase().replace(/[^a-z ]/g, '').trim().replace(/\s+/g, '.');
  const createdAt = extra.createdAt ?? ago(24 * 30);
  const status = extra.status ?? 'ACTIVE';
  const inviteSentAt = extra.inviteSentAt ?? createdAt;
  return {
    id, fullName, role,
    username: extra.username ?? local,
    email: extra.email ?? `${local}@amarbank.co.id`,
    phone: extra.phone ?? `81${String(200000000 + id * 7919).slice(0, 9)}`,
    tlLevel: extra.tlLevel ?? null,
    areaIds: extra.areaIds ?? [],
    supervisorId: extra.supervisorId ?? null,
    partnerId: extra.partnerId ?? null,
    status, // PENDING | ACTIVE | DISABLED (EXPIRED dihitung)
    inviteSentAt, inviteResendCount: extra.inviteResendCount ?? 0,
    activatedAt: status === 'ACTIVE' ? (extra.activatedAt ?? new Date(createdAt.getTime() + 5 * 3600e3)) : null,
    disabledAt: extra.disabledAt ?? null, disabledBy: extra.disabledBy ?? null, disabledReason: extra.disabledReason ?? null,
    createdBy: extra.createdBy ?? 'Rina Saraswati (Admin)', createdAt,
    password: DEMO_PASSWORD, fails: 0, lockUntil: null,
    log: extra.log ?? [
      { at: createdAt, text: `Akun dibuat, tautan aktivasi dikirim ke ${extra.email ?? `${local}@amarbank.co.id`}` },
      ...(status === 'ACTIVE' ? [{ at: new Date(createdAt.getTime() + 5 * 3600e3), text: 'Password dibuat, akun aktif' }] : []),
    ],
  };
}

export const users = [
  user(1, 'Rina Saraswati', 'REVIEWER', { createdBy: 'Dibuat manual di Keycloak', createdAt: ago(24 * 120), log: [{ at: ago(24 * 120), text: 'Akun dibuat manual di Keycloak' }] }),
  user(2, 'Bayu Prasetyo', 'REVIEWER', { createdAt: ago(24 * 60) }),
  user(3, 'Hasan Basri', 'APL', { areaIds: [1], createdAt: ago(24 * 90) }),
  user(4, 'Lestari Wulandari', 'APL', { areaIds: [2, 5], createdAt: ago(24 * 88) }),
  user(5, 'Joko Susilo', 'APL', { areaIds: [3, 4], createdAt: ago(24 * 85) }),
  user(6, 'Andi Pratama', 'TL', { tlLevel: 'SENIOR', areaIds: [1], supervisorId: 3, createdAt: ago(24 * 80) }),
  user(7, 'Budi Santoso', 'TL', { tlLevel: 'JUNIOR', areaIds: [2], supervisorId: 4, createdAt: ago(24 * 78) }),
  user(8, 'Rahmat Hidayat', 'TL', { tlLevel: 'JUNIOR', areaIds: [3], supervisorId: 5, createdAt: ago(24 * 75) }),
  user(9, 'Maya Anggraini', 'TL', { tlLevel: 'SENIOR', areaIds: [5], supervisorId: 4, createdAt: ago(24 * 70) }),
  user(10, 'Fajar Nugroho', 'TL', { tlLevel: 'SENIOR', areaIds: [4], supervisorId: 5, status: 'PENDING', createdAt: ago(3), inviteSentAt: ago(3) }),
  user(11, 'Siti Rahmawati', 'SR', { areaIds: [1], supervisorId: 6, createdAt: ago(24 * 65) }),
  user(12, 'Dewi Lestari', 'SR', { areaIds: [2], supervisorId: 7, createdAt: ago(24 * 64) }),
  user(13, 'Agus Setiawan', 'SR', { areaIds: [5], supervisorId: 9, createdAt: ago(24 * 60) }),
  user(14, 'Yohana Sitorus', 'SR', { areaIds: [3], supervisorId: 8, status: 'PENDING', createdAt: ago(40), inviteSentAt: ago(40) }),
  user(15, 'Eko Saputra', 'SA', { areaIds: [1], supervisorId: 6, createdAt: ago(24 * 62) }),
  user(16, 'Nurul Hidayah', 'SA', { areaIds: [1], supervisorId: 6, createdAt: ago(24 * 58) }),
  user(17, 'Taufik Hidayat', 'SA', { areaIds: [2], supervisorId: 7, createdAt: ago(24 * 57) }),
  user(18, 'Wulan Sari', 'SA', { areaIds: [5], supervisorId: 9, createdAt: ago(24 * 55) }),
  user(19, 'Putri Ayuningtyas', 'SA', { areaIds: [2], supervisorId: 7, status: 'PENDING', createdAt: ago(5), inviteSentAt: ago(5) }),
  user(20, 'Nanda Kurniawan', 'SA', { areaIds: [3], supervisorId: 8, status: 'PENDING', createdAt: ago(30), inviteSentAt: ago(30) }),
  user(21, 'Rizky Ramadhan', 'SA', {
    areaIds: [1], supervisorId: 6, status: 'DISABLED', createdAt: ago(24 * 100), activatedAt: ago(24 * 99),
    disabledAt: ago(24 * 7), disabledBy: 'Rina Saraswati (Admin)', disabledReason: 'Resign per 30 Sep 2026',
    log: [{ at: ago(24 * 100), text: 'Akun dibuat, tautan aktivasi dikirim ke rizky.ramadhan@amarbank.co.id' }, { at: ago(24 * 99), text: 'Password dibuat, akun aktif' }, { at: ago(24 * 7), text: 'Akun dinonaktifkan: Resign per 30 Sep 2026' }],
  }),
];

/** Super Admin dibuat manual di Keycloak dan tidak tercatat di app_user (enum role PRD tidak memuat SUPER_ADMIN). */
export const superAdmins = [
  { id: 900, fullName: 'Hendra Wijaya', role: 'SUPER_ADMIN', username: 'hendra.wijaya', email: 'hendra.wijaya@amarbank.co.id', status: 'ACTIVE', password: DEMO_PASSWORD, fails: 0, lockUntil: null },
];

// ---------------------------------------------------------------- partner
function docsFor(p, preset = {}) {
  const kind = p.businessEntityType === 'INDIVIDU' ? 'INDIVIDU' : 'COMPANY';
  return DOC_TYPES.filter((d) => d[kind]).map((d) => {
    let req = d[kind];
    if (req === 'K') req = p.pic.status === 'KARYAWAN' ? 'M' : null;
    if (!req) return null;
    const mandatory = req === 'M';
    const uploaded = mandatory || preset.optionalUploaded;
    const st = preset[d.key] ?? preset.all ?? 'UNVERIFIED';
    const ext = d.level === 'STORE' ? 'jpg' : d.key.startsWith('KTP') || d.key === 'BUKU_REKENING' ? 'jpg' : 'pdf';
    return {
      key: d.key, label: d.label, level: d.level, mandatory,
      file: uploaded ? { name: `${d.key.toLowerCase()}_${p.registrationNumber.slice(-4)}.${ext}`, uploadedAt: p.submittedAt, version: 1, pages: ext === 'pdf' ? 3 : 1 } : null,
      verification: uploaded ? st : null,
      note: st === 'NEEDS_REVISION' ? (preset.notes?.[d.key] ?? 'Dokumen tidak terbaca, mohon unggah ulang') : null,
      verifiedBy: st !== 'UNVERIFIED' && uploaded ? 'Rina Saraswati (Admin)' : null,
      verifiedAt: st !== 'UNVERIFIED' && uploaded ? new Date(p.submittedAt.getTime() + 20 * 3600e3) : null,
      older: [], revised: false,
    };
  }).filter(Boolean);
}

function store(p, i, extra = {}) {
  const area = AREAS.find((a) => a.id === p.areaId);
  const branch = extra.branch ?? (i === 0 ? 'Pusat' : `Cabang ${i + 1}`);
  return {
    id: `${p.registrationNumber}-${i + 1}`,
    primary: i === 0,
    code: null,
    name: extra.name ?? (i === 0 ? p.partnerName : `${p.partnerName} ${branch}`),
    address: extra.address ?? `${p.address.replace(/No\. \d+/, `No. ${10 + i * 7}`)}, ${area.village}, ${area.district}, ${area.city}, ${area.province}`,
    lat: +(area.lat + (rnd() - 0.5) * 0.04).toFixed(6),
    lng: +(area.lng + (rnd() - 0.5) * 0.04).toFixed(6),
    omzet: extra.omzet ?? between(45, 220) * 1e6,
    storeType: extra.storeType ?? 'OFFLINE',
    channelOffline: extra.channelOffline ?? 'NON_AGENCY',
    scale: extra.scale ?? (i % 2 ? 'TRADITIONAL' : 'MODERN'),
    productSold: extra.productSold ?? ['BRAND_NEW', 'BLENDED', 'USED'][i % 3],
    location: extra.location ?? ['PINGGIR_JALAN', 'MALL', 'SEPARATE'][i % 3],
    productType: extra.productType ?? 'GADGET',
    addedBy: extra.addedBy ?? p.submittedBy,
    addedAt: extra.addedAt ?? p.submittedAt,
    assigned: extra.assigned ?? [],
    status: 'PENDING',
  };
}

const ADDR = ['Jl. Boulevard No. 12', 'Jl. Ir. H. Juanda No. 88', 'Jl. Gatot Subroto No. 45', 'Jl. Basuki Rahmat No. 21', 'Jl. Tanjung Duren Raya No. 7', 'Jl. Pettarani No. 30', 'Jl. Dago No. 101', 'Jl. Sudirman No. 5'];
const BANK_CODES = ['BCA', 'BRI', 'MANDIRI', 'BNI', 'BSI', 'CIMB'];

function partner(n, name, entity, areaId, status, submitterId, cfg = {}) {
  const area = AREAS.find((a) => a.id === areaId);
  const submittedAt = cfg.submittedAt ?? ago(cfg.submittedH ?? 48);
  const picName = cfg.picName ?? ['Hendra Gunawan', 'Lina Marlina', 'Ahmad Fauzi', 'Rudi Hartono', 'Sri Wahyuni', 'Yusuf Maulana', 'Diana Putri', 'Bambang Irawan'][n % 8];
  const reg = `REG2026-0${n}`;
  const p = {
    id: reg, registrationNumber: reg, partnerName: name, businessEntityType: entity,
    address: ADDR[n % ADDR.length], province: area.province, city: area.city, district: area.district, village: area.village,
    rt: String(between(1, 12)).padStart(3, '0'), rw: String(between(1, 9)).padStart(3, '0'),
    businessEmail: cfg.businessEmail ?? `admin@${name.toLowerCase().replace(/^(pt|cv) /, '').replace(/[^a-z]/g, '')}.co.id`,
    channel: cfg.channel ?? 'STORE',
    businessLocationCount: cfg.locations ?? (cfg.stores ?? 1),
    pic: {
      name: picName,
      email: cfg.picEmail ?? `${picName.toLowerCase().split(' ')[0]}.${name.toLowerCase().replace(/^(pt|cv) /, '').split(' ')[0].replace(/[^a-z]/g, '')}@gmail.com`,
      phone: `85${String(300000000 + n * 104729).slice(0, 9)}`,
      status: cfg.picStatus ?? 'OWNER',
    },
    bank: {
      code: BANK_CODES[n % BANK_CODES.length], branch: `KCP ${area.name} ${['Sudirman', 'Panakkukang', 'Dago', 'Petisah', 'Darmo'][n % 5]}`,
      accountNumber: String(1000000000 + n * 7654321).slice(0, 10), accountName: cfg.accountName ?? (entity === 'INDIVIDU' ? picName : name),
      verification: cfg.bank ?? 'UNVERIFIED', note: cfg.bankNote ?? null,
      verifiedBy: cfg.bank && cfg.bank !== 'UNVERIFIED' ? 'Rina Saraswati (Admin)' : null,
      verifiedAt: cfg.bank && cfg.bank !== 'UNVERIFIED' ? new Date(submittedAt.getTime() + 20 * 3600e3) : null,
    },
    areaId, submittedBy: submitterId, submittedAt,
    verifiedAt: null, verifiedBy: null, activatedAt: null, statusUpdatedAt: submittedAt,
    status, privyId: cfg.privyId ?? null,
    pks: { inviteEmail: null, sentVia: null, sentAt: null, status: 'NOT_SENT', confirmedBy: null, confirmedAt: null, file: null },
    merchantCode: null, picAccountFailed: false,
    revisedSections: [], fieldChanges: [], revisionRequest: null,
    history: [{ at: submittedAt, from: null, to: 'UNDER_REVIEW', by: submitterId, reason: 'Pengajuan dikirim dari aplikasi mobile' }],
    stores: [],
    documents: [],
  };
  p.stores = Array.from({ length: cfg.stores ?? 1 }, (_, i) => store(p, i, cfg.storeCfg?.[i]));
  p.documents = docsFor(p, cfg.docs ?? {});
  return p;
}

const R = 'Rina Saraswati (Admin)';
function advance(p, steps) {
  // Jalankan riwayat status contoh: [ [to, jamSejakSubmit, reason?] ]
  steps.forEach(([to, h, reason]) => {
    const at = new Date(p.submittedAt.getTime() + h * 3600e3);
    const from = p.history[p.history.length - 1].to;
    p.history.push({ at, from, to, by: R, reason: reason ?? null });
    p.status = to; p.statusUpdatedAt = at;
    if (to === 'VERIFIED') { p.verifiedAt = at; p.verifiedBy = R; }
    if (to === 'WAITING_PKS') Object.assign(p.pks, { status: 'WAITING_SIGNATURE', sentAt: at, sentVia: p.privyId ? 'PRIVY_ID' : 'EMAIL', inviteEmail: p.privyId ? null : p.pic.email });
    if (to === 'ACTIVE') {
      p.activatedAt = at;
      Object.assign(p.pks, { status: 'SIGNED', confirmedBy: R, confirmedAt: at });
      p.merchantCode = `MRC-${p.registrationNumber.slice(-4)}`;
      p.stores.forEach((s, i) => { s.status = 'ACTIVE'; s.code = `TK${p.registrationNumber.slice(-4)}-${String(i + 1).padStart(2, '0')}`; });
    }
    if (to === 'INACTIVE') p.stores.forEach((s) => { s.status = 'INACTIVE'; s.assigned = []; });
  });
}
const allValid = (p) => { p.documents.forEach((d) => { if (d.file) { d.verification = 'VALID'; d.verifiedBy = R; d.verifiedAt = new Date(p.submittedAt.getTime() + 20 * 3600e3); } }); Object.assign(p.bank, { verification: 'VALID', verifiedBy: R, verifiedAt: new Date(p.submittedAt.getTime() + 20 * 3600e3) }); };

export const partners = [];
const add = (p) => { partners.push(p); return p; };

add(partner(148, 'Sinar Jaya Ponsel', 'INDIVIDU', 1, 'UNDER_REVIEW', 6, { submittedH: 30, privyId: 'PRV70231', docs: { all: 'VALID' }, bank: 'VALID' }));
add(partner(147, 'CV Maju Bersama Elektronik', 'CV', 2, 'UNDER_REVIEW', 12, { submittedH: 52, docs: { KTP_PIC: 'VALID', NPWP_COMPANY: 'VALID', AKTA: 'NEEDS_REVISION', optionalUploaded: true } }));
add(partner(146, 'Berkah Cell Panakkukang', 'INDIVIDU', 1, 'UNDER_REVIEW', 11, { submittedH: 75, picStatus: 'KARYAWAN', accountName: 'Fitriani Lestari' }));
add(partner(145, 'PT Toko Gadget Nusantara', 'PT', 5, 'UNDER_REVIEW', 9, { submittedH: 6, stores: 1 }));
const p144 = add(partner(144, 'Mitra Abadi Gadget', 'INDIVIDU', 3, 'REVISION_REQUIRED', 8, { submittedH: 24 * 6, docs: { all: 'VALID', FOTO_DEPAN: 'NEEDS_REVISION', notes: { FOTO_DEPAN: 'Foto buram dan terpotong di bagian bawah' } }, bank: 'NEEDS_REVISION', bankNote: 'Nomor rekening tidak sesuai dengan buku rekening' }));
const p143 = add(partner(143, 'CV Cahaya Digital', 'CV', 2, 'REVISION_REQUIRED', 7, { submittedH: 24 * 5, docs: { all: 'VALID', SK_KEMENKUMHAM: 'NEEDS_REVISION', notes: { SK_KEMENKUMHAM: 'SK Kemenkumham kedaluwarsa, mohon unggah versi terbaru' } }, bank: 'VALID' }));
const p142 = add(partner(142, 'Prima Phone Store', 'INDIVIDU', 1, 'UNDER_REVIEW', 6, { submittedH: 24 * 8, privyId: 'PRV55120' }));
const p141 = add(partner(141, 'PT Sentosa Retail Indonesia', 'PT', 5, 'UNDER_REVIEW', 13, { submittedH: 24 * 9 }));
const p140 = add(partner(140, 'Anugerah Gadget', 'INDIVIDU', 4, 'UNDER_REVIEW', 10, { submittedH: 24 * 12, privyId: 'PRV48802' }));
const p139 = add(partner(139, 'Jaya Abadi Cellular', 'INDIVIDU', 1, 'UNDER_REVIEW', 6, {
  submittedAt: day('2026-04-20'), stores: 3, locations: 3, privyId: 'PRV31877',
  storeCfg: [{ assigned: [15] }, { assigned: [11], branch: 'Mall Panakkukang', addedBy: 11, addedAt: day('2026-06-02') }, { assigned: [11], branch: 'Sudiang', addedBy: 6, addedAt: day('2026-07-15') }],
}));
const p138 = add(partner(138, 'CV Sumber Rejeki Elektronik', 'CV', 2, 'UNDER_REVIEW', 7, {
  submittedAt: day('2026-05-11'), stores: 2, locations: 2,
  storeCfg: [{ assigned: [17] }, { assigned: [12], branch: 'Dago', addedBy: 12, addedAt: day('2026-07-20') }],
}));
const p137 = add(partner(137, 'Galaxy Phone Center', 'INDIVIDU', 5, 'UNDER_REVIEW', 9, {
  submittedAt: day('2026-06-01'), stores: 2, locations: 2,
  storeCfg: [{ assigned: [18] }, { assigned: [13], branch: 'Central Park', addedBy: 13, addedAt: day('2026-08-03') }],
}));
const p136 = add(partner(136, 'Medan Selular', 'INDIVIDU', 3, 'UNDER_REVIEW', 8, { submittedAt: day('2026-07-06') }));
const p132 = add(partner(132, 'PT Bintang Gadget Store', 'PT', 1, 'UNDER_REVIEW', 6, {
  submittedAt: day('2026-05-25'), stores: 2, locations: 2,
  storeCfg: [{ assigned: [16] }, { assigned: [11], branch: 'Tamalanrea', addedBy: 6, addedAt: day('2026-08-10') }],
}));
const p131 = add(partner(131, 'Ponsel Kita', 'INDIVIDU', 2, 'UNDER_REVIEW', 12, { submittedAt: day('2026-08-04'), storeCfg: [{ assigned: [12] }] }));
const p135 = add(partner(135, 'Mega Cell Makassar', 'INDIVIDU', 1, 'UNDER_REVIEW', 11, { submittedH: 24 * 20 }));
const p134 = add(partner(134, 'Toko Harapan Baru', 'INDIVIDU', 4, 'UNDER_REVIEW', 10, { submittedH: 24 * 18 }));
const p133 = add(partner(133, 'Global Phone Center', 'INDIVIDU', 4, 'UNDER_REVIEW', 10, { submittedAt: day('2026-03-10'), privyId: 'PRV22014' }));

// Revisi yang sedang berjalan
p144.status = 'REVISION_REQUIRED';
p144.history.push({ at: ago(24 * 2), from: 'UNDER_REVIEW', to: 'REVISION_REQUIRED', by: R, reason: '2 item diminta revisi: Foto Toko – Tampak Depan, Data Rekening' });
p144.statusUpdatedAt = ago(24 * 2);
p144.revisionRequest = { at: ago(24 * 2), by: R, general: 'Mohon diperbaiki maksimal 2 hari kerja.', items: [{ kind: 'DOC', ref: 'FOTO_DEPAN', label: 'Foto Toko – Tampak Depan', note: 'Foto buram dan terpotong di bagian bawah' }, { kind: 'SEC', ref: 'bank', label: 'Data Rekening', note: 'Nomor rekening tidak sesuai dengan buku rekening' }] };
p143.status = 'REVISION_REQUIRED';
p143.history.push({ at: ago(30), from: 'UNDER_REVIEW', to: 'REVISION_REQUIRED', by: R, reason: '2 item diminta revisi: SK Kemenkumham, Informasi PIC' });
p143.statusUpdatedAt = ago(30);
p143.revisionRequest = { at: ago(30), by: R, general: null, items: [{ kind: 'DOC', ref: 'SK_KEMENKUMHAM', label: 'SK Kemenkumham', note: 'SK Kemenkumham kedaluwarsa, mohon unggah versi terbaru' }, { kind: 'SEC', ref: 'pic', label: 'Informasi PIC', note: 'Nomor handphone PIC tidak aktif' }] };

[p142, p141, p140, p139, p138, p137, p136, p132, p131, p133].forEach(allValid);
advance(p142, [['VERIFIED', 40, 'Seluruh dokumen wajib dan data rekening valid']]);
advance(p141, [['VERIFIED', 30, 'Seluruh dokumen wajib dan data rekening valid']]);
advance(p140, [['VERIFIED', 26, 'Seluruh dokumen wajib dan data rekening valid'], ['WAITING_PKS', 50, 'PKS dikirim di Privy web via Privy ID PRV48802']]);
const live = [[p139, 'via Privy ID PRV31877'], [p138, `via email ${p138.pic.email}`], [p137, `via email ${p137.pic.email}`], [p136, `via email ${p136.pic.email}`], [p132, `via email ${p132.pic.email}`], [p131, `via email ${p131.pic.email}`], [p133, 'via Privy ID PRV22014']];
live.forEach(([p, via]) => advance(p, [['VERIFIED', 22, 'Seluruh dokumen wajib dan data rekening valid'], ['WAITING_PKS', 46, `PKS dikirim di Privy web ${via}`], ['ACTIVE', 24 * 6, 'PKS ditandatangani (dicek di Privy web); partner diaktifkan']]));
// Toko tambahan baru aktif setelah ditambahkan (setelah partner Active).
p139.pks.file = { name: 'pks_jaya_abadi_signed.pdf', by: R, at: p139.activatedAt };
advance(p135, [['REJECTED', 30, 'Usaha tidak sesuai kriteria partner (bukan toko gadget)']]);
advance(p134, [['CANCELLED', 50, 'Partner mengundurkan diri sebelum review selesai']]);
advance(p133, [['INACTIVE', 24 * 150, 'Partner berhenti bekerja sama per Oktober 2026']]);

// Akun PIC untuk partner Active/Inactive (PRD §3E)
let uid = 100;
[[p139, 'ACTIVE'], [p138, 'PENDING_EXPIRED'], [p137, 'ACTIVE'], [p136, 'ACTIVE'], [p132, 'ACTIVE'], [p131, 'PENDING'], [p133, 'DISABLED']].forEach(([p, st]) => {
  const created = p.activatedAt;
  const status = st.startsWith('PENDING') ? 'PENDING' : st;
  const inviteSentAt = st === 'PENDING' ? ago(10) : created;
  const u = user(uid++, p.pic.name, 'PARTNER', {
    username: p.pic.email, email: p.pic.email, phone: p.pic.phone, areaIds: [p.areaId], partnerId: p.id, status,
    createdAt: created, inviteSentAt, createdBy: `${R}`,
    disabledAt: st === 'DISABLED' ? p.statusUpdatedAt : null, disabledBy: st === 'DISABLED' ? 'Sistem (partner Inactive)' : null,
    disabledReason: st === 'DISABLED' ? 'Partner dinonaktifkan di Partner Pipeline' : null,
    log: [
      { at: created, text: `Akun partner dibuat otomatis saat partner Active, tautan aktivasi dikirim ke ${p.pic.email}` },
      ...(status === 'ACTIVE' ? [{ at: new Date(created.getTime() + 8 * 3600e3), text: 'Password dibuat, akun aktif' }] : []),
      ...(st === 'PENDING' ? [{ at: inviteSentAt, text: 'Tautan aktivasi dikirim ulang (tautan lama tidak berlaku)' }] : []),
      ...(st === 'DISABLED' ? [{ at: p.statusUpdatedAt, text: 'Akun dinonaktifkan: partner Inactive' }] : []),
    ],
  });
  if (st === 'PENDING') u.inviteResendCount = 1;
  users.push(u);
});

// ---------------------------------------------------------------- pinjaman, target, kehadiran (untuk APL)
/** Bulan data performa: Mei–Okt 2026 (Okt berjalan sampai tanggal 7). */
export const MONTHS = ['2026-05', '2026-06', '2026-07', '2026-08', '2026-09', '2026-10'];
export const CURRENT_MONTH = '2026-10';
const monthStart = (ym) => new Date(`${ym}-01T00:00:00Z`);

/** loans: agregat per toko per bulan, diatribusikan ke SA/SR yang ditugaskan dan TL-nya. */
export const loanStats = [];
/** targets: target paid out amount per entitas per bulan. key `${kind}:${id}:${ym}` */
export const targets = {};
/** attendance: hari kerja hadir per SA/SR/TL per bulan. key `${userId}:${ym}` */
export const attendance = {};
/** mfp: rasio MFP (collection) per toko per bulan, dalam persen. */
export const mfp = {};

partners.filter((p) => p.activatedAt).forEach((p) => {
  p.stores.forEach((s) => {
    const activeFrom = new Date(Math.max(p.activatedAt, s.addedAt));
    MONTHS.forEach((ym) => {
      const end = new Date(monthStart(ym)); end.setUTCMonth(end.getUTCMonth() + 1);
      const stoppedAt = p.status === 'INACTIVE' ? p.statusUpdatedAt : null;
      if (activeFrom >= end || (stoppedAt && stoppedAt < monthStart(ym))) return;
      const frac = (ym === CURRENT_MONTH ? 7 / 31 : 1) * (activeFrom > monthStart(ym) ? 0.5 : 1);
      const submitted = Math.max(1, Math.round(between(22, 64) * frac));
      const accepted = Math.round(submitted * (0.55 + rnd() * 0.2));
      const paidOutApps = Math.round(accepted * (0.7 + rnd() * 0.2));
      const paidOutUnits = paidOutApps + Math.round(paidOutApps * rnd() * 0.3);
      const paidOutAmount = paidOutApps * between(60, 120) * 1e5;
      const salesId = s.assigned[0] ?? null;
      const tlId = salesId ? users.find((u) => u.id === salesId).supervisorId : users.find((u) => u.role === 'TL' && u.areaIds.includes(p.areaId))?.id ?? null;
      loanStats.push({ partnerId: p.id, storeId: s.id, areaId: p.areaId, salesId, tlId, month: ym, submitted, accepted, paidOutApps, paidOutUnits, paidOutAmount });
      // Target bulan berjalan = target s/d hari ini (prorata), agar pencapaian sebanding.
      const expected = (paidOutAmount / frac) * (ym === CURRENT_MONTH ? 7 / 31 : 1);
      targets[`store:${s.id}:${ym}`] = Math.round((expected * (0.75 + rnd() * 0.65)) / 1e6) * 1e6;
      mfp[`${s.id}:${ym}`] = +(6 + rnd() * 9).toFixed(1);
    });
  });
});
// Target SA/SR & TL = jumlah target toko yang dipegang (SA: 1 toko, SR: maks. 3) — tanpa hitung ganda.
loanStats.forEach((l) => {
  const t = targets[`store:${l.storeId}:${l.month}`];
  if (l.salesId) targets[`sales:${l.salesId}:${l.month}`] = (targets[`sales:${l.salesId}:${l.month}`] ?? 0) + t;
  if (l.tlId) targets[`tl:${l.tlId}:${l.month}`] = (targets[`tl:${l.tlId}:${l.month}`] ?? 0) + t;
});
users.filter((u) => ['SA', 'SR', 'TL'].includes(u.role) && u.status === 'ACTIVE').forEach((u) => {
  MONTHS.forEach((ym) => { attendance[`${u.id}:${ym}`] = ym === CURRENT_MONTH ? between(3, 5) : between(19, 24); });
});

// ---------------------------------------------------------------- skema insentif (Super Admin)
// Isi awal dari FSD Salestraxx hlm. 61–62. Tier "above": pencapaian > batas → tarif; di bawah semua batas → 0%.
const SALES_TIERS = [{ above: 120, rate: 1.0 }, { above: 100, rate: 0.9 }, { above: 85, rate: 0.85 }, { above: 70, rate: 0.7 }, { above: 55, rate: 0.55 }];
const LEADER_TIERS = [{ above: 120, rate: 0.33 }, { above: 100, rate: 0.3 }, { above: 85, rate: 0.28 }, { above: 70, rate: 0.23 }, { above: 55, rate: 0.18 }];
const scheme = (id, name, recipient, payday, components) => ({
  id, name, recipient, payday, effectiveFrom: '2026-08', updatedAt: day('2026-07-28'), updatedBy: 'Hendra Wijaya (Super Admin)',
  components, history: [{ at: day('2026-07-28'), by: 'Hendra Wijaya (Super Admin)', text: 'Skema dibuat, berlaku mulai Agu 2026' }],
});
export const schemes = [
  scheme('SA', 'Sales Agent (SA) · Offline Retail', 'SA', 10, [
    { key: 'dailyFee', type: 'fixed', label: 'Daily Fee', amount: 108000, basis: 'per hari kerja' },
    { key: 'paidOut', type: 'tierAbove', label: 'Paid Out Incentive', basis: 'pencapaian target paid out', tiers: SALES_TIERS },
  ]),
  scheme('SR', 'Sales Representative (SR) · Offline Retail', 'SR', 10, [
    { key: 'dailyFee', type: 'fixed', label: 'Daily Fee', amount: 126000, basis: 'per hari kerja' },
    { key: 'paidOut', type: 'tierAbove', label: 'Paid Out Incentive', basis: 'pencapaian target paid out', tiers: SALES_TIERS },
  ]),
  scheme('TL_SENIOR', 'Team Leader Senior · Offline Retail', 'TL_SENIOR', 10, [
    { key: 'dailyFee', type: 'fixed', label: 'Daily Fee', amount: 165000, basis: 'per hari kerja' },
    { key: 'leader', type: 'tierAbove', label: 'Leader Incentive', basis: 'pencapaian target paid out tim', tiers: LEADER_TIERS },
  ]),
  scheme('TL_JUNIOR', 'Team Leader Junior · Offline Retail', 'TL_JUNIOR', 10, [
    { key: 'dailyFee', type: 'fixed', label: 'Daily Fee', amount: 126000, basis: 'per hari kerja' },
    { key: 'leader', type: 'tierAbove', label: 'Leader Incentive', basis: 'pencapaian target paid out tim', tiers: LEADER_TIERS },
  ]),
  scheme('PARTNER_RETAIL', 'Partner · Offline Retailer Store', 'PARTNER_RETAIL', 15, [
    { key: 'volume', type: 'tierAbove', label: 'Volume Incentive', basis: 'pencapaian target paid out toko', tiers: [{ above: 100, rate: 0.3 }, { above: 85, rate: 0.2 }, { above: 70, rate: 0.1 }, { above: 55, rate: 0.05 }] },
    { key: 'collection', type: 'tierBelow', label: 'Collection Incentive (MFP)', basis: 'rasio MFP toko', tiers: [{ below: 10, rate: 0.1 }, { below: 13, rate: 0.05 }] },
  ]),
  scheme('PARTNER_AFFILIATE', 'Partner · Affiliate / Sales Agency', 'PARTNER_AFFILIATE', 15, [
    { key: 'commission', type: 'percent', label: 'Commission', rate: 5, basis: 'dari total paid out' },
  ]),
];
export const RECIPIENT_LABEL = { SA: 'SA', SR: 'SR', TL_SENIOR: 'TL Senior', TL_JUNIOR: 'TL Junior', PARTNER_RETAIL: 'Partner (Offline Retailer)', PARTNER_AFFILIATE: 'Partner (Affiliate)' };
