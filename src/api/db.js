// Mock database prototipe S&P Portal: pengguna (app_user), partner + toko + dokumen, pinjaman, target, skema insentif.
// Data deterministik (PRNG ber-seed) dan hidup di memori; reload halaman = data kembali ke awal.
import { AREAS, DOC_TYPES, OFFICES } from '../lib/constants.js';

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
    username: extra.email ?? `${local}@amarbank.co.id`, // username Keycloak = email (internal, tidak ditampilkan)
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
    password: DEMO_PASSWORD, fails: 0, lockUntil: null, resetSentAt: null,
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
  user(14, 'Yohana Sitorus', 'SR', { areaIds: [3], supervisorId: 8, status: 'PENDING', createdAt: ago(80), inviteSentAt: ago(80) }),
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
  { id: 900, fullName: 'Hendra Wijaya', role: 'SUPER_ADMIN', username: 'hendra.wijaya@amarbank.co.id', email: 'hendra.wijaya@amarbank.co.id', phone: null, status: 'ACTIVE', password: DEMO_PASSWORD, fails: 0, lockUntil: null },
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
    referralCode: cfg.referralCode ?? `AMR${submitterId}${n}`,
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
    },
    areaId, submittedBy: submitterId, submittedAt,
    verifiedAt: null, verifiedBy: null, activatedAt: null, statusUpdatedAt: submittedAt,
    status, privyId: cfg.privyId ?? null,
    pks: { inviteEmail: null, sentVia: null, sentAt: null, status: 'NOT_SENT', confirmedBy: null, confirmedAt: null, file: null },
    merchantCode: null, picAccountFailed: false,
    revisedSections: [], fieldChanges: [], changeLog: [], revisionRequest: null,
    revisionRound: 0, // bertambah 1 setiap TL/SR mengirim ulang perbaikan (PRD Scope 1 FR-007, AC-010)
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
const allValid = (p) => { p.documents.forEach((d) => { if (d.file) { d.verification = 'VALID'; d.verifiedBy = R; d.verifiedAt = new Date(p.submittedAt.getTime() + 20 * 3600e3); } }); };

export const partners = [];
const add = (p) => { partners.push(p); return p; };

add(partner(148, 'Sinar Jaya Ponsel', 'INDIVIDU', 1, 'UNDER_REVIEW', 6, { submittedH: 30, privyId: 'PRV70231', docs: { all: 'VALID' } }));
add(partner(147, 'CV Maju Bersama Elektronik', 'CV', 2, 'UNDER_REVIEW', 12, { submittedH: 52, docs: { KTP_PIC: 'VALID', NPWP_COMPANY: 'VALID', AKTA: 'NEEDS_REVISION', optionalUploaded: true } }));
add(partner(146, 'Berkah Cell Panakkukang', 'INDIVIDU', 1, 'UNDER_REVIEW', 11, { submittedH: 75, picStatus: 'KARYAWAN', accountName: 'Fitriani Lestari' }));
add(partner(145, 'PT Toko Gadget Nusantara', 'PT', 5, 'UNDER_REVIEW', 9, { submittedH: 6, stores: 1 }));
const p144 = add(partner(144, 'Mitra Abadi Gadget', 'INDIVIDU', 3, 'REVISION_REQUIRED', 8, { submittedH: 24 * 6, docs: { all: 'VALID', FOTO_DEPAN: 'NEEDS_REVISION', notes: { FOTO_DEPAN: 'Foto buram dan terpotong di bagian bawah' } } }));
const p143 = add(partner(143, 'CV Cahaya Digital', 'CV', 2, 'REVISION_REQUIRED', 7, { submittedH: 24 * 5, docs: { all: 'VALID', SK_KEMENKUMHAM: 'NEEDS_REVISION', notes: { SK_KEMENKUMHAM: 'SK Kemenkumham kedaluwarsa, mohon unggah versi terbaru' } } }));
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
advance(p142, [['VERIFIED', 40, 'Seluruh dokumen wajib valid']]);
advance(p141, [['VERIFIED', 30, 'Seluruh dokumen wajib valid']]);
advance(p140, [['VERIFIED', 26, 'Seluruh dokumen wajib valid'], ['WAITING_PKS', 50, 'PKS dikirim di Privy web via Privy ID PRV48802']]);
const live = [[p139, 'via Privy ID PRV31877'], [p138, `via email ${p138.pic.email}`], [p137, `via email ${p137.pic.email}`], [p136, `via email ${p136.pic.email}`], [p132, `via email ${p132.pic.email}`], [p131, `via email ${p131.pic.email}`], [p133, 'via Privy ID PRV22014']];
live.forEach(([p, via]) => advance(p, [['VERIFIED', 22, 'Seluruh dokumen wajib valid'], ['WAITING_PKS', 46, `PKS dikirim di Privy web ${via}`], ['ACTIVE', 24 * 6, 'PKS ditandatangani (dicek di Privy web); partner diaktifkan']]));
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

// ---------------------------------------------------------------- pinjaman, absensi, kunjungan (APL, PRD v3 §B)
/** Bulan data: Mei–Okt 2026 (Okt berjalan sampai 07 Okt 2026 10:30 WIB). */
export const MONTHS = ['2026-05', '2026-06', '2026-07', '2026-08', '2026-09', '2026-10'];
export const CURRENT_MONTH = '2026-10';
const DATA_START = Date.parse('2026-05-01T00:00:00+07:00');
const DAY_MS = 864e5;
/** Tanggal WIB "YYYY-MM-DD" dari Date. */
export const wibDate = (d) => new Date(new Date(d).getTime() + 7 * 3600e3).toISOString().slice(0, 10);
/** Date dari tanggal WIB + jam:menit WIB. */
const atWib = (ymd, h, m = 0) => new Date(`${ymd}T${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:00+07:00`);
const isWorkday = (ymd) => new Date(`${ymd}T12:00:00+07:00`).getUTCDay() !== 0; // Senin–Sabtu
const TODAY = wibDate(BASE);
/** Daftar tanggal WIB dari `from` (Date) s/d hari ini. */
function daysFrom(from) {
  const out = [];
  for (let t = Math.max(DATA_START, new Date(`${wibDate(from)}T00:00:00+07:00`).getTime()); wibDate(t) <= TODAY; t += DAY_MS) out.push(wibDate(t));
  return out;
}

/** TL pemilik partner: TL yang mengajukan, atau TL atasan SR yang mengajukan (PRD v3 §C). */
export function owningTl(p) {
  const sub = users.find((u) => u.id === p.submittedBy);
  return sub?.role === 'TL' ? sub.id : sub?.supervisorId ?? null;
}

const FIRST = ['Ahmad', 'Siti', 'Budi', 'Dewi', 'Rizal', 'Nur', 'Agus', 'Rina', 'Hendra', 'Yuni', 'Fajar', 'Lia', 'Dodi', 'Maya', 'Joko', 'Intan', 'Wahyu', 'Ratna', 'Bayu', 'Sari'];
const LAST = ['Saputra', 'Wijaya', 'Lestari', 'Hidayat', 'Pratama', 'Kusuma', 'Siregar', 'Nasution', 'Santoso', 'Rahayu', 'Gunawan', 'Halim', 'Utami', 'Purnomo', 'Sitompul'];
const REJECT = ['Skor kredit tidak memenuhi syarat', 'Data penghasilan tidak sesuai', 'Dokumen identitas tidak valid', 'Pengajuan ganda'];

/**
 * loans: aplikasi pinjaman hasil sinkronisasi CRM (read-only). status CRM disederhanakan:
 * SUBMITTED Pengajuan · IN_PROCESS Diproses · APPROVED Disetujui · REJECTED Ditolak · PAID_OUT Dicairkan.
 */
export const loans = [];
let loanSeq = 4100000;
partners.filter((p) => p.activatedAt).forEach((p) => {
  const tlId = owningTl(p);
  p.stores.forEach((s) => {
    const start = new Date(Math.max(p.activatedAt, s.addedAt));
    const stop = p.status === 'INACTIVE' ? wibDate(p.statusUpdatedAt) : '9999';
    const rate = 0.9 + rnd() * 1.4; // rata-rata aplikasi per hari kerja
    daysFrom(start).filter((d) => d < stop && isWorkday(d)).forEach((d) => {
      const n = Math.floor(rate + rnd() - 0.5 + (rnd() < 0.15 ? 1 : 0));
      for (let i = 0; i < n; i += 1) {
        const submittedAt = atWib(d, between(9, 19), between(0, 59));
        if (submittedAt > new Date(BASE)) continue;
        const ageDays = (BASE - submittedAt) / DAY_MS;
        const r = rnd();
        const status = ageDays < 1 ? (r < 0.6 ? 'SUBMITTED' : 'IN_PROCESS') : ageDays < 3 ? (r < 0.3 ? 'IN_PROCESS' : r < 0.55 ? 'APPROVED' : r < 0.75 ? 'REJECTED' : 'PAID_OUT')
          : (r < 0.28 ? 'REJECTED' : r < 0.36 ? 'APPROVED' : 'PAID_OUT');
        const amount = between(30, 150) * 1e5;
        const updatedAt = new Date(Math.min(BASE, submittedAt.getTime() + between(2, 72) * 3600e3));
        loans.push({
          id: `APP${++loanSeq}`, partnerId: p.id, storeId: s.id, areaId: p.areaId, channel: p.channel, salesId: s.assigned[0] ?? null, tlId,
          customer: `${FIRST[between(0, FIRST.length - 1)]} ${LAST[between(0, LAST.length - 1)]}`,
          amount, units: rnd() < 0.2 ? 2 : 1, submittedAt, status,
          rejectionReason: status === 'REJECTED' ? REJECT[between(0, REJECT.length - 1)] : null,
          paidOutAt: status === 'PAID_OUT' ? updatedAt : null, updatedAt,
        });
      }
    });
  });
});

/**
 * Customer Referral Program (CRP, skema E1): sebagian pinjaman berasal dari referensi nasabah lain. Data contoh ditandai
 * deterministik (tanpa PRNG agar data lain tetap sama dengan Android): tiap pinjaman ke-15 mulai indeks 7 mereferensikan nasabah
 * pinjaman 3 baris sebelumnya.
 */
loans.forEach((l, i) => { l.crpReferrer = i >= 7 && i % 15 === 7 ? loans[i - 3].customer : null; });

/** targets: target nominal paid out per toko per bulan (read-only; sumber target masih TBD). Bulan berjalan = prorata s/d hari ini. */
export const targets = {};
/** mfp: rasio MFP (collection) per toko per bulan, dalam persen. */
export const mfp = {};
partners.filter((p) => p.activatedAt).forEach((p) => p.stores.forEach((s) => MONTHS.forEach((ym) => {
  const paid = loans.filter((l) => l.storeId === s.id && l.status === 'PAID_OUT' && wibDate(l.paidOutAt).startsWith(ym)).reduce((a, l) => a + l.amount, 0);
  if (!paid) return;
  targets[`${s.id}:${ym}`] = Math.round((paid * (0.75 + rnd() * 0.65)) / 1e6) * 1e6;
  mfp[`${s.id}:${ym}`] = +(6 + rnd() * 9).toFixed(1);
})));

/** Jarak dua titik (km, haversine). */
export function distanceKm(a, b) {
  const R = 6371; const rad = (x) => (x * Math.PI) / 180;
  const dLat = rad(b.lat - a.lat); const dLng = rad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
/** Date dari tanggal "YYYY-MM-DD" + jam:menit waktu lokal area (offset UTC 7 WIB / 8 WITA). */
const atLocal = (ymd, area, h, m = 0) => new Date(Date.parse(`${ymd}T${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:00Z`) - area.utcOffset * 3600e3);
/** Titik acak di sekitar `c` dalam radius ± `km` (data contoh, selalu di dalam radius check in). */
const near = (c, km) => ({ lat: +(c.lat + (rnd() - 0.5) * (km / 55.5)).toFixed(6), lng: +(c.lng + (rnd() - 0.5) * (km / 55.5)).toFixed(6) });
const storesOf = (uid) => partners.flatMap((p) => p.stores.filter((s) => s.assigned.includes(uid) && s.status === 'ACTIVE').map((s) => ({ p, s })));
/** Toko yang sah untuk check in: toko yang ditugaskan (SA/SR) atau toko partner milik TL. */
export const validStoresOf = (u) => (u.role === 'TL'
  ? partners.filter((p) => p.status === 'ACTIVE' && owningTl(p) === u.id).flatMap((p) => p.stores.filter((s) => s.status === 'ACTIVE').map((s) => ({ p, s })))
  : storesOf(u.id));

/**
 * attendance: absensi harian (Senin–Sabtu) TL, SR, SA aktif (revisi stakeholder 2026-10-08).
 * Check in/out dengan selfie + lokasi dalam radius 3 km dari titik lat/long yang tercatat (review 2026-10-09): kantor = titik kantor
 * terdaftar (`OFFICES`), toko = lokasi saat pendaftaran/Tambah Toko. distanceKm = jarak dari titik itu.
 * status ON_TIME (check in ≤ 10:00 lokal) | LATE (> 10:00) | ABSENT (tidak check in sampai akhir hari). Hari ini bisa belum check in.
 * place: { kind: 'OFFICE' | 'STORE', name }, distanceKm dari titik referensi.
 */
export const attendance = [];
users.filter((u) => ['TL', 'SR', 'SA'].includes(u.role) && u.status === 'ACTIVE').forEach((u) => {
  const area = AREAS.find((a) => a.id === u.areaIds[0]);
  const office = OFFICES.find((o) => o.areaId === area.id);
  const stores = validStoresOf(u);
  daysFrom(u.activatedAt).filter(isWorkday).forEach((d) => {
    const today = d === TODAY;
    const r = rnd();
    if (today && r < 0.15) return; // belum check in
    const status = r < 0.05 && !today ? 'ABSENT' : r < 0.22 ? 'LATE' : 'ON_TIME';
    if (status === 'ABSENT') { attendance.push({ userId: u.id, date: d, status, clockInAt: null, clockOutAt: null, lat: null, lng: null, place: null, distanceKm: null, tz: area.tz, utcOffset: area.utcOffset, selfie: null }); return; }
    // Hari ini jam demo 10:30 WIB / 11:30 WITA: check in terlambat hari ini sebelum jam demo.
    const inAt = status === 'LATE' ? atLocal(d, area, 10, between(1, today && area.tz === 'WIB' ? 29 : 59)) : atLocal(d, area, between(8, 9), between(0, 59));
    const atStore = stores.length && rnd() < 0.4 ? stores[between(0, stores.length - 1)].s : null;
    const ref = atStore ?? office;
    const pt = near(ref, 1.2);
    attendance.push({
      userId: u.id, date: d, status, clockInAt: inAt,
      clockOutAt: today ? null : atLocal(d, area, between(17, 18), between(0, 59)),
      ...pt, place: { kind: atStore ? 'STORE' : 'OFFICE', name: ref.name }, distanceKm: +distanceKm(ref, pt).toFixed(2),
      // Zona waktu perangkat saat check in (PRD Scope 2 §2.1: WIB/WITA/WIT) dan foto selfie contoh 1–6.
      tz: area.tz, utcOffset: area.utcOffset, selfie: (u.id + d.length + inAt.getUTCMinutes()) % 6 + 1,
    });
  });
});

/**
 * visits: check-in kunjungan (PRD Scope 2 §2.2 + keputusan review 2026-10-09). Target per minggu = setiap toko yang ditugaskan
 * (SA/SR) atau toko partner milik TL dikunjungi sekali; boleh lebih dari satu toko per hari. Check in mulai 12:00 lokal, radius
 * 3 km dari titik lokasi toko yang tercatat (distanceKm). Hari absen tidak ada kunjungan; hari ini belum ada (jam demo < 12:00).
 */
export const visits = [];
let visitSeq = 0;
const mondayOfYmd = (ymd) => { const t = Date.parse(`${ymd}T12:00:00Z`); const w = (new Date(t).getUTCDay() + 6) % 7; return new Date(t - w * DAY_MS).toISOString().slice(0, 10); };
users.filter((u) => ['TL', 'SR', 'SA'].includes(u.role) && u.status === 'ACTIVE').forEach((u) => {
  const own = validStoresOf(u);
  if (!own.length) return;
  const area = AREAS.find((a) => a.id === u.areaIds[0]);
  const present = new Set(attendance.filter((a) => a.userId === u.id && a.status !== 'ABSENT' && a.date !== TODAY).map((a) => a.date));
  const weeks = new Map();
  daysFrom(u.activatedAt).filter((d) => isWorkday(d) && d !== TODAY && present.has(d)).forEach((d) => { const k = mondayOfYmd(d); weeks.set(k, [...(weeks.get(k) ?? []), d]); });
  weeks.forEach((days) => own.forEach(({ p, s }) => {
    if (rnd() > 0.85) return; // toko ini tidak dikunjungi minggu itu
    const d = days[between(0, days.length - 1)];
    if (s.addedAt > atLocal(d, area, 23)) return;
    const inAt = atLocal(d, area, between(12, 16), between(0, 59));
    const pt = near(s, 0.8);
    visits.push({
      id: ++visitSeq, userId: u.id, partnerId: p.id, storeId: s.id, date: d,
      checkInAt: inAt, checkOutAt: new Date(inAt.getTime() + between(25, 110) * 60000), ...pt, distanceKm: +distanceKm(s, pt).toFixed(2),
      tz: area.tz, utcOffset: area.utcOffset, selfie: (u.id + visitSeq) % 6 + 1,
    });
  }));
});

// ---------------------------------------------------------------- skema insentif (Super Admin, PRD v3 §E)
/**
 * Versi skema per penerima. Tier memakai rentang: cocok bila nilai ≥ from dan < to (to null = tak terbatas; review 2026-10-09).
 * Isi awal dari BRD V2.2 (PRD v3 §E1). status versi: ACTIVE | SCHEDULED | ARCHIVED; draft disimpan terpisah.
 */
const T = (rows) => rows.map(([from, to, rate]) => ({ from, to, rate }));
const SALES_TIERS = T([[0, 55, 0], [55, 70, 0.55], [70, 85, 0.7], [85, 100, 0.85], [100, 120, 0.9], [120, null, 1.0]]);
const LEADER_TIERS = T([[0, 55, 0], [55, 70, 0.18], [70, 85, 0.23], [85, 100, 0.28], [100, 120, 0.3], [120, null, 0.33]]);
const HS = 'Hendra Wijaya (Super Admin)';
const scheme = (id, name, recipient, payday, components) => ({
  id, name, recipient, draft: null,
  versions: [{ version: 1, status: 'ACTIVE', effectiveFrom: '2026-08', payday, components, createdBy: HS, createdAt: day('2026-07-28'), publishedAt: day('2026-07-28') }],
});
export const schemes = [
  scheme('SA', 'Sales Agent (SA)', 'SA', 10, [
    { key: 'dailyFee', type: 'fixed', label: 'Daily Fee', amount: 108000, basis: 'per hari kerja' },
    { key: 'paidOut', type: 'tier', label: 'Paid Out Incentive', basis: 'pencapaian target paid out', metric: 'Pencapaian', tiers: SALES_TIERS },
  ]),
  scheme('SR', 'Sales Representative (SR)', 'SR', 10, [
    { key: 'dailyFee', type: 'fixed', label: 'Daily Fee', amount: 126000, basis: 'per hari kerja' },
    { key: 'paidOut', type: 'tier', label: 'Paid Out Incentive', basis: 'pencapaian target paid out', metric: 'Pencapaian', tiers: SALES_TIERS },
  ]),
  scheme('TL_SENIOR', 'Team Leader Senior', 'TL_SENIOR', 10, [
    { key: 'dailyFee', type: 'fixed', label: 'Daily Fee', amount: 165000, basis: 'per hari kerja' },
    { key: 'leader', type: 'tier', label: 'Leader Incentive', basis: 'pencapaian target paid out tim', metric: 'Pencapaian', tiers: LEADER_TIERS },
  ]),
  scheme('TL_JUNIOR', 'Team Leader Junior', 'TL_JUNIOR', 10, [
    { key: 'dailyFee', type: 'fixed', label: 'Daily Fee', amount: 126000, basis: 'per hari kerja' },
    { key: 'leader', type: 'tier', label: 'Leader Incentive', basis: 'pencapaian target paid out tim', metric: 'Pencapaian', tiers: LEADER_TIERS },
  ]),
  scheme('PARTNER_RETAIL', 'Partner · Offline Retailer', 'PARTNER_RETAIL', 15, [
    { key: 'volume', type: 'tier', label: 'Volume Incentive', basis: 'pencapaian target paid out partner', metric: 'Pencapaian', tiers: T([[0, 55, 0], [55, 70, 0.05], [70, 85, 0.1], [85, 100, 0.2], [100, null, 0.3]]) },
    { key: 'collection', type: 'tier', label: 'Collection Incentive (MFP)', basis: 'rasio MFP partner', metric: 'MFP', tiers: T([[0, 10, 0.1], [10, 13, 0.05], [13, null, 0]]) },
  ]),
  scheme('PARTNER_AFFILIATE', 'Partner · Affiliate / Sales Agency', 'PARTNER_AFFILIATE', 15, [
    { key: 'commission', type: 'percent', label: 'Commission', rate: 5, basis: 'dari total disbursement' },
  ]),
  scheme('CRP', 'Customer Referral Program (CRP)', 'CRP', 15, [
    { key: 'commission', type: 'percent', label: 'CRP Commission', rate: 3, basis: 'dari total disbursement' },
  ]),
];
export const RECIPIENT_LABEL = { SA: 'SA', SR: 'SR', TL_SENIOR: 'TL Senior', TL_JUNIOR: 'TL Junior', PARTNER_RETAIL: 'Partner (Offline Retailer)', PARTNER_AFFILIATE: 'Partner (Affiliate)', CRP: 'Customer (CRP)' };
