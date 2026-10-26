/**
 * PRD Scope 3 — Sales Pipeline & Incentive Monitoring (PRD 3.0, draft 11 2026-10-26; proses bayar bulanan round 10).
 *
 * Fondasi data dan aturan (tahap 1), terpisah dari skema insentif lama di mockApi.js:
 * - status portal 4 (Diajukan, Disetujui, Ditolak, Cair) dari status LMS (FR-LP-003);
 * - bulan kinerja WIB: pinjaman dihitung bila diajukan DAN cair di bulan yang sama (Performance month);
 * - status bulan Berjalan → Menunggu rekonsiliasi → Final, dikunci pada cut-off bulan berikutnya, terpisah untuk sales
 *   (default tanggal 5) dan partner (default tanggal 10) (FR-IN-002, FR-PI-004);
 * - hari valid = check in dan check out (atau dikoreksi TL sebelum lock), gaji pokok = min(hari valid, maks) × daily fee
 *   area × role, ×multiplier bila capaian di atas threshold (FR-DF-001/002);
 * - insentif = koefisien tier × Cair dihitung, tier "> dari, ≤ sampai" (keputusan user 2026-10-22: ikut PRD);
 * - insentif partner volume saja untuk partner offline retail (FR-PI-001/002);
 * - pembayaran (FR-PY, round 10): koreksi saat rekonsiliasi, unduh draf/final, tandai Dibayar atau Tidak dibayar setelah cut-off.
 * Semua angka dibulatkan ke bawah ke rupiah.
 */
import { attendance, CURRENT_MONTH, loans, now, partners, s3Config, s3Payments, users, wibDate } from './db.js';
import { ApiError, actorOf, listGate, monthRange, userById, wait } from './mockApi.js';
import { getScenario } from '../dev/scenario.js';
import { BANKS, areaName } from '../lib/constants.js';

/** Hari ini untuk status bulan Scope 3; DevToolbar "Tanggal Scope 3" bisa memundurkannya ke sebelum lock. */
export const s3Today = () => getScenario().s3Today ?? '2026-10-07';

// ------------------------------------------------------------------ status pinjaman (FR-LP-003)
/** Status LMS (data contoh: status CRM lama) → status portal. Status tidak dikenal = Diajukan (dan dicatat untuk ditinjau). */
const LMS_TO_PORTAL = { SUBMITTED: 'DIAJUKAN', IN_PROCESS: 'DIAJUKAN', APPROVED: 'DISETUJUI', REJECTED: 'DITOLAK', CANCELLED: 'DITOLAK', PAID_OUT: 'CAIR' };
export const PORTAL_STATUS = { DIAJUKAN: 'Diajukan', DISETUJUI: 'Disetujui', DITOLAK: 'Ditolak', CAIR: 'Cair' };
export const portalStatus = (l) => LMS_TO_PORTAL[l.status] ?? 'DIAJUKAN';

// ------------------------------------------------------------------ bulan
const ymOf = (d) => wibDate(d).slice(0, 7);
const nextYm = (ym) => { const [y, m] = ym.split('-').map(Number); return m === 12 ? `${y + 1}-01` : `${y}-${String(m + 1).padStart(2, '0')}`; };
const dayIn = (ym, day) => `${ym}-${String(day).padStart(2, '0')}`;

/** Versi konfigurasi yang berlaku di bulan ym: effectiveFrom terbesar yang ≤ ym. kind: 'sales' | 'fee' | 'partner'. */
export function configFor(kind, ym) {
  const vs = [...s3Config[kind]].sort((a, b) => (a.effectiveFrom < b.effectiveFrom ? 1 : -1));
  return vs.find((v) => v.effectiveFrom <= ym) ?? vs[vs.length - 1];
}
const cfgKind = (kind) => (kind === 'PARTNER' ? 'partner' : 'sales');
/** Tanggal cut-off (tutup buku) bulan ym (YYYY-MM-DD, 00:00 WIB) = lockDay skema itu di bulan berikutnya. kind: 'SALES' | 'PARTNER'. */
export const lockDate = (ym, kind = 'SALES') => dayIn(nextYm(ym), configFor(cfgKind(kind), ym).lockDay);
/** Jadwal bayar bulan ym: sales tanggal payoutDay bulan berikutnya (default 10), partner default 15. */
export const payoutDate = (ym, kind = 'SALES') => dayIn(nextYm(ym), configFor(cfgKind(kind), ym).payoutDay);
/** BERJALAN | REKONSILIASI | FINAL (relatif terhadap hari ini WIB) menurut cut-off skema kind. */
export function monthStatus(ym, kind = 'SALES') {
  if (ym >= CURRENT_MONTH) return 'BERJALAN';
  return s3Today() >= lockDate(ym, kind) ? 'FINAL' : 'REKONSILIASI';
}
export const MONTH_STATUS = { BERJALAN: 'Berjalan', REKONSILIASI: 'Menunggu rekonsiliasi', FINAL: 'Final' };
/** Batas koreksi absensi TL untuk tanggal ymd: akhir minggu berikutnya (Scope 2 FR-014) atau sebelum lock bulannya, mana yang lebih dulu. */
export function correctionDeadline(ymd) {
  const d = new Date(`${ymd}T12:00:00Z`);
  const sunday = new Date(d.getTime() + (((7 - d.getUTCDay()) % 7) + 7) * 864e5).toISOString().slice(0, 10);
  const lock = lockDate(ymd.slice(0, 7));
  const beforeLock = new Date(Date.parse(`${lock}T12:00:00Z`) - 864e5).toISOString().slice(0, 10);
  return sunday < beforeLock ? sunday : beforeLock;
}

// ------------------------------------------------------------------ perhitungan murni (diuji dengan contoh PRD)
/** Tier dengan capaian > from dan ≤ to (from null = sejak 0, to null = tanpa batas atas). */
export function tierOf(tiers, achievement) {
  return tiers.find((t) => (t.from == null || achievement > t.from) && (t.to == null || achievement <= t.to)) ?? tiers[0];
}
/** Tier di atas tier sekarang: { tier, needed } — kekurangan Cair agar capaian > batas bawah tier itu. */
function nextTierOf(tiers, achievement, actual, target) {
  const sorted = [...tiers].sort((a, b) => (a.from ?? -1) - (b.from ?? -1));
  const i = sorted.indexOf(tierOf(sorted, achievement));
  const next = sorted.slice(i + 1).find((t) => t.rate > tierOf(sorted, achievement).rate);
  if (!next || !target) return null;
  return { tier: next, needed: Math.max(1, Math.floor((target * next.from) / 100) - actual + 1) };
}
export const tierRange = (t) => (t.from == null ? `≤ ${t.to}%` : t.to == null ? `> ${t.from}%` : `> ${t.from}% – ${t.to}%`);
export const rateLabel = (r) => `${r.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`;
/** Status capaian (FSD §12): Tercapai ≥ 100 · On Track 70–99,9 · Berisiko < 70. */
export const achievementBand = (a) => (a >= 100 ? 'TERCAPAI' : a >= 70 ? 'ON_TRACK' : 'BERISIKO');
export const BAND_LABEL = { TERCAPAI: 'Tercapai', ON_TRACK: 'On Track', BERISIKO: 'Berisiko' };

/**
 * Hitung satu baris sales. role: 'SA' | 'SR' | 'TL'. input: { actual, validDays, areaId }.
 * Menghasilkan target, capaian, tier, insentif, hari dibayar, daily fee, multiplier, gaji pokok, take home pay.
 */
export function calcSales(sales, fee, role, { actual, validDays, areaId }) {
  const target = sales.targets[role];
  const achievement = target ? (actual / target) * 100 : 0;
  const tiers = role === 'TL' ? sales.tiers.TL : sales.tiers.SALES;
  const tier = tierOf(tiers, achievement);
  const incentive = Math.floor((actual * tier.rate) / 100);
  const paidDays = Math.min(validDays, fee.maxDays);
  const dailyFee = fee.fees[areaId]?.[role] ?? 0;
  const multiplierApplies = fee.roles.includes(role) && achievement > fee.threshold;
  const basicSalary = Math.floor(paidDays * dailyFee * (multiplierApplies ? fee.multiplier : 1));
  return {
    target, actual, achievement, tier, coefficient: tier.rate, incentive, next: nextTierOf(tiers, achievement, actual, target),
    validDays, paidDays, capped: validDays > fee.maxDays, maxDays: fee.maxDays, dailyFee, multiplier: fee.multiplier, threshold: fee.threshold,
    multiplierApplies, multiplierEligible: fee.roles.includes(role), basicSalary, takeHomePay: basicSalary + incentive, band: achievementBand(achievement),
  };
}
/** Hitung satu baris partner: target (override atau default), capaian, tier volume, insentif. */
export function calcPartner(cfg, { actual, target }) {
  const achievement = target ? (actual / target) * 100 : 0;
  const tier = tierOf(cfg.tiers, achievement);
  return { target, actual, achievement, tier, coefficient: tier.rate, incentive: Math.floor((actual * tier.rate) / 100), next: nextTierOf(cfg.tiers, achievement, actual, target), band: achievementBand(achievement) };
}

// ------------------------------------------------------------------ data per bulan
const inMonth = (d, ym) => d != null && ymOf(d) === ym;
/** Pinjaman dihitung = diajukan dan cair di bulan yang sama (WIB). */
export const countsFor = (l, ym) => portalStatus(l) === 'CAIR' && inMonth(l.submittedAt, ym) && inMonth(l.paidOutAt, ym);
/** Hari valid (FR-DF-001): ada check in dan check out, bukan Absen/Tidak check in. Tanggal lokal zona area utama (Scope 2). */
export const isValidDay = (a) => !!a.clockInAt && !!a.clockOutAt && a.status !== 'ABSENT' && a.status !== 'NO_CHECKIN';
const validDaysOf = (uid, ym) => attendance.filter((a) => a.userId === uid && a.date.startsWith(ym) && isValidDay(a)).length;
const roleOf = (u) => (u.role === 'TL' ? 'TL' : u.role);

const finals = new Map(); // `${kind}:${ym}` → Map — baris Final dibekukan saat pertama dibaca setelah cut-off skemanya.

function salesFigures(u, ym) {
  const ls = loans.filter((l) => (u.role === 'TL' ? l.tlId === u.id : l.salesId === u.id) && inMonth(l.submittedAt, ym));
  const actual = ls.filter((l) => countsFor(l, ym)).reduce((a, l) => a + l.amount, 0);
  const areaId = u.areaIds[0];
  return {
    userId: u.id, name: u.fullName, role: roleOf(u), tlLevel: u.tlLevel ?? null, leaderId: u.role === 'TL' ? null : u.supervisorId ?? null, areaId,
    accountStatus: u.status, loanCount: ls.length,
    ...calcSales(configFor('sales', ym), configFor('fee', ym), roleOf(u), { actual, validDays: validDaysOf(u.id, ym), areaId }),
  };
}
/** SA/SR/TL yang punya baris di bulan ym: punya pinjaman teratribusi atau absensi di bulan itu, atau masih aktif. */
function salesPeople(ym) {
  const ids = new Set();
  loans.forEach((l) => { if (inMonth(l.submittedAt, ym)) { if (l.salesId) ids.add(l.salesId); if (l.tlId) ids.add(l.tlId); } });
  attendance.forEach((a) => { if (a.date.startsWith(ym)) ids.add(a.userId); });
  if (ym === CURRENT_MONTH) users.filter((u) => ['SA', 'SR', 'TL'].includes(u.role) && u.status === 'ACTIVE').forEach((u) => ids.add(u.id));
  return [...ids].map(userById).filter((u) => u && ['SA', 'SR', 'TL'].includes(u.role));
}
const eligiblePartners = (ym) => partners.filter((p) => p.channel === 'STORE' && p.activatedAt && ymOf(p.activatedAt) <= ym
  && (p.status === 'ACTIVE' || (p.status === 'INACTIVE' && ymOf(p.statusUpdatedAt) >= ym)) && p.stores.length > 0);
export function partnerTarget(pid, ym) {
  const o = [...s3Config.partnerTargets].filter((t) => t.partnerId === pid && t.ym <= ym).sort((a, b) => (a.ym < b.ym ? 1 : -1))[0];
  return o && o.ym === ym ? o.amount : configFor('partner', ym).defaultTarget;
}
function partnerFigures(p, ym) {
  const actual = loans.filter((l) => l.partnerId === p.id && countsFor(l, ym)).reduce((a, l) => a + l.amount, 0);
  return { partnerId: p.id, name: p.partnerName, areaId: p.areaId, storeCount: p.stores.filter((s) => s.status === 'ACTIVE' || s.status === 'INACTIVE').length, ...calcPartner(configFor('partner', ym), { actual, target: partnerTarget(p.id, ym) }) };
}
/** Baris bulan ym per skema (kind 'SALES' | 'PARTNER'): Map id → angka; dibekukan saat Final. */
function monthRows(kind, ym) {
  const key = `${kind}:${ym}`;
  const status = monthStatus(ym, kind);
  if (status === 'FINAL' && finals.has(key)) return finals.get(key);
  const rows = kind === 'SALES' ? new Map(salesPeople(ym).map((u) => [u.id, salesFigures(u, ym)]))
    : new Map(eligiblePartners(ym).map((p) => [p.id, partnerFigures(p, ym)]));
  if (status === 'FINAL') finals.set(key, rows);
  return rows;
}

// ------------------------------------------------------------------ pembayaran (FR-PY)
const payKey = (kind, id, ym) => `${kind}:${id}:${ym}`;
const calculatedOf = (kind, r) => (kind === 'SALES' ? r.takeHomePay : r.incentive);
/**
 * Status pembayaran baris (§ Month and payment status): REKONSILIASI (1 M+1 sampai cut-off, koreksi boleh) | MENUNGGU |
 * DIBAYAR | TIDAK_DIBAYAR | TIDAK_ADA (jumlah final Rp 0); null selama bulan Berjalan. Jumlah final = dihitung + koreksi.
 */
export function paymentOf(kind, id, ym, calculated) {
  const st = monthStatus(ym, kind);
  if (st === 'BERJALAN') return null;
  const r = s3Payments.records[payKey(kind, id, ym)] ?? {};
  const correction = r.correction ?? 0;
  const finalAmount = Math.max(0, calculated + correction);
  const scheduledAt = payoutDate(ym, kind);
  const base = { calculated, correction, note: r.note ?? '', finalAmount, scheduledAt, lockAt: lockDate(ym, kind), log: r.log ?? [] };
  if (st === 'REKONSILIASI') return { ...base, status: 'REKONSILIASI', paidAt: null, paidAmount: null, unpaidNote: '', overdue: false };
  const paidAt = r.paidAt ?? (ym <= s3Payments.paidThrough && finalAmount > 0 ? scheduledAt : null);
  const status = paidAt ? 'DIBAYAR' : finalAmount === 0 ? 'TIDAK_ADA' : r.unpaidNote ? 'TIDAK_DIBAYAR' : 'MENUNGGU';
  return { ...base, status, paidAt, paidAmount: paidAt ? finalAmount : null, unpaidNote: status === 'TIDAK_DIBAYAR' ? r.unpaidNote : '', overdue: status === 'MENUNGGU' && s3Today() > scheduledAt };
}
export const PAYMENT_STATUS = { REKONSILIASI: 'Rekonsiliasi', MENUNGGU: 'Menunggu pembayaran', DIBAYAR: 'Dibayar', TIDAK_DIBAYAR: 'Tidak dibayar', TIDAK_ADA: 'Tidak ada pembayaran' };
/** Baris yang bisa ditandai setelah cut-off (FR-PY-004). */
export const markable = (p) => p?.status === 'MENUNGGU' || p?.status === 'TIDAK_DIBAYAR';
/** Pesan saat koreksi ditolak setelah cut-off (FR-PY-002, AC-049). */
export const CLOSED_MSG = 'Bulan ini sudah tutup buku. Koreksi dimasukkan di rekonsiliasi bulan berikutnya.';

const withMeta = (kind, ym, r, id) => ({
  ...r, ym, monthStatus: monthStatus(ym, kind),
  payment: paymentOf(kind, id, ym, calculatedOf(kind, r)),
});

// ------------------------------------------------------------------ API baca
/** Waktu data terakhir (FR-LP-001 "Data per {jam}"); prototipe: saat panggilan. */
export const dataAsOf = () => now();

/**
 * Baris sales bulan ym dalam lingkup penonton (FR-IN-006): { userId } diri sendiri, { leaderId } TL + timnya,
 * { areaIds } APL (area yang dipegang), {} semua (Super Admin/Admin).
 */
export async function salesRows(ym, scope = {}, { retry = false } = {}) {
  const empty = await listGate(retry);
  if (empty) return { rows: [], asOf: dataAsOf(), monthStatus: monthStatus(ym) };
  const rows = [...monthRows('SALES', ym).values()].filter((r) => (scope.userId == null || r.userId === scope.userId)
    && (scope.leaderId == null || r.userId === scope.leaderId || r.leaderId === scope.leaderId)
    && (!scope.areaIds?.length || scope.areaIds.includes(r.areaId)))
    .map((r) => withMeta('SALES', ym, r, r.userId))
    .sort((a, b) => ['TL', 'SR', 'SA'].indexOf(a.role) - ['TL', 'SR', 'SA'].indexOf(b.role) || a.name.localeCompare(b.name));
  return { rows, asOf: dataAsOf(), monthStatus: monthStatus(ym) };
}
/** Satu baris sales (Penghasilan bulan ym) dengan riwayat 12 bulan bila diminta. */
export function salesRow(uid, ym) {
  const r = monthRows('SALES', ym).get(uid);
  return r ? withMeta('SALES', ym, r, uid) : null;
}
export function salesHistory(uid, months) {
  return months.map((ym) => salesRow(uid, ym)).filter(Boolean);
}
/** Total tim (TL sendiri + SA/SR yang dipimpin) dan total area/semua untuk APL. */
export function totalsOf(rows) {
  const sum = (k) => rows.reduce((a, r) => a + r[k], 0);
  return { basicSalary: sum('basicSalary'), incentive: sum('incentive'), takeHomePay: sum('takeHomePay'), actual: sum('actual'), people: rows.length };
}
export async function partnerRows(ym, scope = {}, { retry = false } = {}) {
  const empty = await listGate(retry);
  if (empty) return { rows: [], asOf: dataAsOf(), monthStatus: monthStatus(ym, 'PARTNER') };
  const rows = [...monthRows('PARTNER', ym).values()].filter((r) => (!scope.partnerId || r.partnerId === scope.partnerId) && (!scope.areaIds?.length || scope.areaIds.includes(r.areaId)))
    .map((r) => withMeta('PARTNER', ym, r, r.partnerId)).sort((a, b) => b.incentive - a.incentive || a.name.localeCompare(b.name));
  return { rows, asOf: dataAsOf(), monthStatus: monthStatus(ym, 'PARTNER') };
}

/**
 * Pipeline bulan ym (FR-LP-004/005): pinjaman yang diajukan di bulan ym melalui toko dalam lingkup, dengan status saat ini.
 * scope: { salesId } | { tlId } | { areaIds } | { partnerId }. Funnel per status + "Dihitung untuk insentif".
 */
export async function pipeline(ym, scope = {}, f = {}, { retry = false } = {}) {
  const empty = await listGate(retry);
  const inScope = (l) => (scope.salesId == null || l.salesId === scope.salesId) && (scope.tlId == null || l.tlId === scope.tlId)
    && (!scope.areaIds?.length || scope.areaIds.includes(l.areaId)) && (!scope.partnerId || l.partnerId === scope.partnerId);
  const all = empty ? [] : loans.filter((l) => inMonth(l.submittedAt, ym) && inScope(l));
  const funnel = Object.fromEntries(Object.keys(PORTAL_STATUS).map((k) => [k, { count: 0, amount: 0 }]));
  all.forEach((l) => { const k = portalStatus(l); funnel[k].count += 1; funnel[k].amount += l.amount; });
  const counted = all.filter((l) => countsFor(l, ym));
  const term = (f.q ?? '').trim().toLowerCase();
  const list = all.filter((l) => (!f.status || portalStatus(l) === f.status) && (!f.storeId || l.storeId === f.storeId)
    && (f.salesId === undefined || (f.salesId === 'none' ? l.salesId == null : l.salesId === Number(f.salesId)))
    && (!term || l.id.toLowerCase().includes(term)))
    .sort((a, b) => b.submittedAt - a.submittedAt)
    .map((l) => ({ ...l, portalStatus: portalStatus(l), counted: countsFor(l, ym), paidLater: portalStatus(l) === 'CAIR' && !countsFor(l, ym) }));
  return {
    funnel, total: all.length, countedAmount: counted.reduce((a, l) => a + l.amount, 0), countedCount: counted.length,
    paidLaterCount: all.filter((l) => portalStatus(l) === 'CAIR' && !countsFor(l, ym)).length, rows: list, asOf: dataAsOf(), monthStatus: monthStatus(ym, scope.partnerId ? 'PARTNER' : 'SALES'),
  };
}

// ------------------------------------------------------------------ API tulis: pembayaran (Admin)
const rowOf = (kind, ym, id) => monthRows(kind, ym).get(id);
const recordOf = (kind, id, ym) => s3Payments.records[payKey(kind, id, ym)] ?? { correction: 0, note: '', paidAt: null, paidBy: null, unpaidNote: '', log: [] };
/** Bulan yang tampil di Pembayaran Insentif (FR-PY-001): Menunggu rekonsiliasi atau Final menurut cut-off skema kind. */
export const paymentMonths = (months, kind) => [...months].reverse().filter((m) => monthStatus(m, kind) !== 'BERJALAN');

/**
 * "Isi koreksi" (FR-PY-002): hanya selama rekonsiliasi (1 M+1 sampai cut-off skema); jumlah final tidak boleh negatif.
 * Setelah cut-off ditolak CLOSED (pesan CLOSED_MSG). Bisa diubah atau dikosongkan (0) sampai cut-off; setiap simpan dicatat.
 */
export async function setCorrection(kind, id, ym, correction, note, session) {
  await wait(300);
  if (session.role !== 'REVIEWER') throw new ApiError('FORBIDDEN');
  const st = monthStatus(ym, kind);
  if (st === 'FINAL') throw new ApiError('CLOSED');
  if (st !== 'REKONSILIASI') throw new ApiError('CONFLICT');
  const row = rowOf(kind, ym, id);
  if (!row) throw new ApiError('CONFLICT');
  const c = Math.trunc(Number(correction) || 0);
  if (calculatedOf(kind, row) + c < 0) throw new ApiError('NEGATIVE');
  if ((note ?? '').length > 255) throw new ApiError('NOTE_TOO_LONG');
  const rec = recordOf(kind, id, ym);
  const n = (note ?? '').trim();
  rec.log = [...(rec.log ?? []), { action: 'CORRECTION', at: now(), by: actorOf(session), from: rec.correction ?? 0, to: c, note: n }];
  Object.assign(rec, { correction: c, note: n });
  s3Payments.records[payKey(kind, id, ym)] = rec;
  return paymentOf(kind, id, ym, calculatedOf(kind, row));
}

/** Baris yang dipilih untuk dicatat; STALE bila ada yang sudah tidak bisa ditandai (berubah sejak daftar dimuat). */
function markRows(ym, keys, session) {
  if (session.role !== 'REVIEWER') throw new ApiError('FORBIDDEN');
  if (!keys.length || keys.some(({ kind }) => monthStatus(ym, kind) !== 'FINAL')) throw new ApiError('CONFLICT');
  const rows = keys.map(({ kind, id }) => {
    const row = rowOf(kind, ym, id);
    return { kind, id, p: row && paymentOf(kind, id, ym, calculatedOf(kind, row)) };
  });
  if (rows.some((r) => !markable(r.p))) throw new ApiError('STALE');
  return rows;
}
function saveBatch(ym, rows, action, session, apply) {
  const batchId = `B${s3Payments.batches.length + 1}`;
  rows.forEach(({ kind, id, p }) => {
    const rec = recordOf(kind, id, ym);
    const entry = apply(rec, p);
    rec.log = [...(rec.log ?? []), { action, at: now(), by: actorOf(session), batchId, ...entry }];
    s3Payments.records[payKey(kind, id, ym)] = rec;
  });
  const total = rows.reduce((a, r) => a + r.p.finalAmount, 0);
  s3Payments.batches.push({ id: batchId, action, ym, count: rows.length, total, by: actorOf(session), at: now() });
  return { count: rows.length, total, batchId };
}
/**
 * "Tandai Dibayar" (FR-PY-004): baris Menunggu pembayaran atau Tidak dibayar; satu batch disimpan utuh atau tidak sama sekali
 * (STALE). Dibayar final; keterangan Tidak dibayar sebelumnya tetap di riwayat (OQ-3-37).
 */
export async function markPaid(ym, keys, paidAt, session) {
  await wait(500);
  const rows = markRows(ym, keys, session);
  if (!paidAt) throw new ApiError('DATE_REQUIRED');
  return saveBatch(ym, rows, 'MARK_PAID', session, (rec, p) => {
    Object.assign(rec, { paidAt, paidBy: actorOf(session), unpaidNote: '' });
    return { paidAt, amount: p.finalAmount, previousNote: p.unpaidNote || undefined };
  });
}
/** "Tandai Tidak dibayar" (FR-PY-004): keterangan wajib (maks. 255); baris tetap bisa ditandai Dibayar nanti. */
export async function markUnpaid(ym, keys, note, session) {
  await wait(500);
  const rows = markRows(ym, keys, session);
  const n = (note ?? '').trim();
  if (!n) throw new ApiError('NOTE_REQUIRED');
  if (n.length > 255) throw new ApiError('NOTE_TOO_LONG');
  return saveBatch(ym, rows, 'MARK_UNPAID', session, (rec) => { rec.unpaidNote = n; return { note: n }; });
}

/**
 * Unduhan Pembayaran Insentif (FR-PY-003): selama rekonsiliasi "Unduh draf" (setiap baris ditandai DRAF), mulai cut-off file final
 * (isi beku). Ikut filter area (areaId null = semua). Setiap unduhan dicatat (payment_export_log). Admin dan Super Admin.
 * Hasil { kind: DRAFT | FINAL, filename, headers, rows, count, total }.
 */
export async function exportPayments(kind, ym, { areaId = null } = {}, session) {
  await wait(400);
  if (session.role !== 'REVIEWER' && session.role !== 'SUPER_ADMIN') throw new ApiError('FORBIDDEN');
  const st = monthStatus(ym, kind);
  if (st === 'BERJALAN') throw new ApiError('CONFLICT');
  const draft = st === 'REKONSILIASI';
  const list = (kind === 'SALES' ? (await salesRows(ym, {}, { retry: true })).rows : (await partnerRows(ym, {}, { retry: true })).rows)
    .filter((r) => areaId == null || r.areaId === areaId);
  const mark = draft ? ['DRAF'] : [];
  const headers = kind === 'SALES'
    ? [...(draft ? ['Status'] : []), 'Bulan', 'ID karyawan', 'Nama', 'Peran', 'Area', 'TL', 'Hari valid', 'Hari dibayar', 'Daily fee', 'Multiplier', 'Gaji pokok', 'Insentif', 'Koreksi', 'Catatan', 'Take home pay final']
    : [...(draft ? ['Status'] : []), 'Bulan', 'Partner', 'Area', 'Bank', 'Nama rekening', 'Nomor rekening', 'Insentif', 'Koreksi', 'Catatan', 'Jumlah final'];
  const rows = list.map((r) => {
    const p = r.payment;
    if (kind === 'SALES') {
      return [...mark, ym, r.userId, r.name, r.role, areaName(r.areaId), r.leaderId ? userById(r.leaderId)?.fullName ?? '' : '', r.validDays, r.paidDays,
        r.dailyFee, r.multiplierApplies ? r.multiplier : 1, r.basicSalary, r.incentive, p.correction, p.note, p.finalAmount];
    }
    const bank = partners.find((x) => x.id === r.partnerId)?.bank ?? {};
    return [...mark, ym, r.name, areaName(r.areaId), BANKS[bank.code] ?? bank.code ?? '', bank.accountName ?? '', bank.accountNumber ?? '', r.incentive, p.correction, p.note, p.finalAmount];
  });
  const total = list.reduce((a, r) => a + r.payment.finalAmount, 0);
  const area = areaId == null ? 'semua-area' : areaName(areaId).toLowerCase().replace(/\s+/g, '-');
  const filename = `${draft ? 'draf' : 'final'}-${kind === 'SALES' ? 'take-home-pay' : 'insentif-partner'}-${ym}-${area}.csv`;
  s3Payments.exports.push({ ym, subjectType: kind, kind: draft ? 'DRAFT' : 'FINAL', areaId, count: rows.length, total, by: actorOf(session), at: now(), filename });
  return { kind: draft ? 'DRAFT' : 'FINAL', filename, headers, rows, count: rows.length, total };
}

/** Bulan yang tersedia untuk riwayat (12 terakhir, terbaru dulu) dari rentang data contoh. */
export const historyMonths = (months) => [...months].reverse().slice(0, 12);
/** Rentang tanggal bulan ym (re-ekspor untuk layar). */
export const rangeOf = monthRange;

// ------------------------------------------------------------------ konfigurasi (Super Admin, FR-CF-001/003/004)
export const CONFIG_LABEL = { sales: 'Insentif Sales', fee: 'Gaji Pokok', partner: 'Insentif Partner' };
const ROLES3 = ['SA', 'SR', 'TL'];
const rp = (n) => `Rp ${Math.round(n).toLocaleString('id-ID')}`;
/** Bulan yang boleh diubah: bulan Menunggu rekonsiliasi, bulan berjalan, dan 3 bulan ke depan (bulan Final skema itu hanya baca). */
export function editableMonths(kind = 'sales') {
  const out = [];
  for (let m = '2026-05', i = 0; i < 12; m = nextYm(m), i += 1) out.push(m);
  const upto = nextYm(nextYm(nextYm(CURRENT_MONTH)));
  return out.filter((m) => m <= upto && monthStatus(m, kind === 'partner' ? 'PARTNER' : 'SALES') !== 'FINAL');
}
/** Status versi relatif bulan berjalan: ACTIVE | SCHEDULED | ARCHIVED. */
export function versionState(kind, v) {
  if (configFor(kind, CURRENT_MONTH).version === v.version) return 'ACTIVE';
  return v.effectiveFrom > CURRENT_MONTH ? 'SCHEDULED' : 'ARCHIVED';
}
export const listVersions = (kind) => [...s3Config[kind]].sort((a, b) => b.version - a.version).map((v) => ({ ...v, state: versionState(kind, v) }));
export const configLog = (kind) => s3Config.log.filter((e) => !kind || e.kind === kind).sort((a, b) => b.at - a.at);

/** Tier bersambung: mulai dari kosong (≤), tiap batas bawah = batas atas sebelumnya, terakhir tanpa batas atas; koefisien 0–100%. */
export function tierErrors(tiers) {
  if (!tiers?.length) return 'Isi minimal satu tier';
  const t = [...tiers];
  if (t[0].from != null) return 'Tier pertama harus mulai dari 0% (tanpa batas bawah)';
  if (t[t.length - 1].to != null) return 'Tier terakhir harus tanpa batas atas';
  for (let i = 0; i < t.length; i += 1) {
    if (!(t[i].rate >= 0 && t[i].rate <= 100)) return 'Koefisien harus 0–100%';
    if (i > 0 && t[i].from !== t[i - 1].to) return 'Tier harus bersambung tanpa celah atau tumpang tindih';
    if (t[i].from != null && t[i].to != null && !(t[i].to > t[i].from)) return 'Batas atas harus lebih besar dari batas bawah';
  }
  return null;
}
/** Cut-off 2–28 dan sebelum tanggal bayar; tanggal bayar ≤ 28 (FR-CF-001, FR-CF-004). */
function dayErrors(v) {
  const e = {};
  if (!(Number.isInteger(v.lockDay) && v.lockDay >= 2 && v.lockDay <= 28)) e.lockDay = 'Tanggal cut-off 2–28';
  if (!(Number.isInteger(v.payoutDay) && v.payoutDay >= 1 && v.payoutDay <= 28)) e.payoutDay = 'Tanggal bayar 1–28';
  else if (!e.lockDay && !(v.lockDay < v.payoutDay)) e.payoutDay = 'Tanggal bayar harus setelah tanggal cut-off';
  return e;
}
/** Validasi nilai versi; hasil { field: pesan } (kosong = valid). */
export function validateConfig(kind, v, ym) {
  const e = {};
  const pos = (x) => typeof x === 'number' && Number.isFinite(x) && x > 0;
  if (kind === 'sales') {
    ROLES3.forEach((r) => { if (!pos(v.targets?.[r])) e[`target.${r}`] = 'Target harus lebih dari 0'; });
    ['SALES', 'TL'].forEach((k) => { const m = tierErrors(v.tiers?.[k]); if (m) e[`tiers.${k}`] = m; });
    Object.assign(e, dayErrors(v));
  } else if (kind === 'fee') {
    Object.keys(v.fees ?? {}).forEach((a) => ROLES3.forEach((r) => { if (!pos(v.fees[a]?.[r])) e[`fee.${a}.${r}`] = 'Wajib diisi'; }));
    if (!(Number.isInteger(v.maxDays) && v.maxDays >= 1 && v.maxDays <= 31)) e.maxDays = 'Maksimal hari dibayar 1–31';
    if (!(v.multiplier >= 1)) e.multiplier = 'Multiplier minimal 1';
    if (!(v.threshold > 0)) e.threshold = 'Threshold harus lebih dari 0';
  } else {
    if (!pos(v.defaultTarget)) e.defaultTarget = 'Target harus lebih dari 0';
    const m = tierErrors(v.tiers); if (m) e.tiers = m;
    Object.assign(e, dayErrors(v));
  }
  return e;
}
/** Ringkasan perubahan lama → baru untuk log. */
function diffLines(kind, a, b) {
  const out = [];
  const same = (x, y) => JSON.stringify(x) === JSON.stringify(y);
  if (kind === 'sales') {
    ROLES3.forEach((r) => { if (a.targets[r] !== b.targets[r]) out.push(`Target ${r}: ${rp(a.targets[r])} → ${rp(b.targets[r])}`); });
    if (!same(a.tiers.SALES, b.tiers.SALES)) out.push('Tabel tier SA/SR diubah');
    if (!same(a.tiers.TL, b.tiers.TL)) out.push('Tabel tier TL diubah');
    if (a.lockDay !== b.lockDay) out.push(`Tanggal cut-off sales: ${a.lockDay} → ${b.lockDay}`);
    if (a.payoutDay !== b.payoutDay) out.push(`Tanggal bayar sales: ${a.payoutDay} → ${b.payoutDay}`);
  } else if (kind === 'fee') {
    Object.keys(b.fees).forEach((ar) => ROLES3.forEach((r) => {
      if (a.fees[ar]?.[r] !== b.fees[ar][r]) out.push(`Daily fee ${areaName(Number(ar))} ${r}: ${a.fees[ar]?.[r] ? rp(a.fees[ar][r]) : '-'} → ${rp(b.fees[ar][r])}`);
    }));
    if (a.maxDays !== b.maxDays) out.push(`Maksimal hari dibayar: ${a.maxDays} → ${b.maxDays}`);
    if (a.multiplier !== b.multiplier) out.push(`Multiplier: ${a.multiplier} → ${b.multiplier}`);
    if (a.threshold !== b.threshold) out.push(`Threshold capaian: ${a.threshold}% → ${b.threshold}%`);
    if (!same([...a.roles].sort(), [...b.roles].sort())) out.push(`Peran multiplier: ${a.roles.join(', ') || '-'} → ${b.roles.join(', ') || '-'}`);
  } else {
    if (a.defaultTarget !== b.defaultTarget) out.push(`Target partner default: ${rp(a.defaultTarget)} → ${rp(b.defaultTarget)}`);
    if (!same(a.tiers, b.tiers)) out.push('Tabel tier volume diubah');
    if (a.lockDay !== b.lockDay) out.push(`Tanggal cut-off partner: ${a.lockDay} → ${b.lockDay}`);
    if (a.payoutDay !== b.payoutDay) out.push(`Tanggal bayar partner: ${a.payoutDay} → ${b.payoutDay}`);
  }
  return out.length ? out : ['Tanpa perubahan nilai'];
}
const FIELDS = { sales: ['targets', 'tiers', 'lockDay', 'payoutDay'], fee: ['fees', 'maxDays', 'multiplier', 'threshold', 'roles'], partner: ['defaultTarget', 'tiers', 'lockDay', 'payoutDay'] };

/**
 * Simpan versi konfigurasi berlaku mulai bulan ym (bukan bulan Final). Versi dengan bulan yang sama diganti; selain itu versi
 * baru. Berlaku pada pengambilan data berikutnya. Error: FORBIDDEN | CONFLICT (bulan Final) | INVALID (field = { field: pesan }).
 */
export async function saveConfig(kind, ym, values, session) {
  await wait(400);
  if (session.role !== 'SUPER_ADMIN') throw new ApiError('FORBIDDEN');
  if (!editableMonths(kind).includes(ym)) throw new ApiError('CONFLICT');
  const errors = validateConfig(kind, values, ym);
  if (Object.keys(errors).length) throw new ApiError('INVALID', errors);
  const before = configFor(kind, ym);
  const picked = Object.fromEntries(FIELDS[kind].map((k) => [k, structuredClone(values[k])]));
  const list = s3Config[kind];
  const same = list.find((x) => x.effectiveFrom === ym);
  const version = same ? same.version : Math.max(...list.map((x) => x.version)) + 1;
  const entry = { version, effectiveFrom: ym, ...picked, by: actorOf(session), at: now() };
  if (same) Object.assign(same, entry); else list.push(entry);
  s3Config.log.push({ kind, at: now(), by: actorOf(session), effectiveFrom: ym, version, lines: diffLines(kind, before, entry) });
  return entry;
}
/** Override target partner untuk bulan ym (amount null = hapus, pakai target default). Bulan Final tidak bisa diubah. */
export async function setPartnerTarget(pid, ym, amount, reason, session) {
  await wait(300);
  if (session.role !== 'SUPER_ADMIN') throw new ApiError('FORBIDDEN');
  if (monthStatus(ym, 'PARTNER') === 'FINAL') throw new ApiError('CONFLICT');
  if (amount != null && !(amount > 0)) throw new ApiError('INVALID', { amount: 'Target harus lebih dari 0' });
  const p = partners.find((x) => x.id === pid);
  const before = partnerTarget(pid, ym);
  s3Config.partnerTargets = s3Config.partnerTargets.filter((t) => !(t.partnerId === pid && t.ym === ym));
  if (amount != null) s3Config.partnerTargets.push({ partnerId: pid, ym, amount, reason: (reason ?? '').trim(), by: actorOf(session), at: now() });
  s3Config.log.push({ kind: 'partner', at: now(), by: actorOf(session), effectiveFrom: ym, version: null,
    lines: [`Target ${p?.partnerName ?? pid} ${ym}: ${rp(before)} → ${amount != null ? rp(amount) : `default ${rp(configFor('partner', ym).defaultTarget)}`}${reason ? ` (${reason.trim()})` : ''}`] });
  return partnerTarget(pid, ym);
}
export const partnerTargetList = () => [...s3Config.partnerTargets].sort((a, b) => (a.ym < b.ym ? 1 : -1));
