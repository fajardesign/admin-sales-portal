// Mock API — pengganti backend Sales Portal + Keycloak (realm sales-portal). Perilaku mengikuti PRD S&P Portal.
// Semua data di src/api/db.js (memori). Fungsi async dengan jeda kecil agar state loading terlihat.
import { getScenario } from '../dev/scenario.js';
import { formatPhone, normalizePhone } from '../lib/format.js';
import {
  ACCOUNT_STATUS, AREAS, CREATABLE_ROLES, ACTIVATION_TTL_MS, FINAL_STATUSES, PAGE_SIZE, RESET_TTL_MS, PARTNER_STATUS, ROLES, TRANSITIONS,
} from '../lib/constants.js';
import {
  attendance, CURRENT_MONTH, loans, mfp, MONTHS, now, owningTl, partners, schemes, superAdmins, targets, users, visits, wibDate,
} from './db.js';
import { hydrateUsers, syncUser } from './supabaseSync.js';

const TEST = import.meta.env.MODE === 'test';
const wait = (ms) => new Promise((r) => setTimeout(r, TEST ? 0 : ms));
const clone = (o) => structuredClone(o);

/** Bus perubahan data (mis. simulasi kirim ulang dari DevToolbar) agar layar terbuka memuat ulang. */
const listeners = new Set();
export const onDataChange = (fn) => { listeners.add(fn); return () => listeners.delete(fn); };
const emitChange = () => listeners.forEach((fn) => fn());
// Akun dari Supabase (bila sinkronisasi aktif) menimpa data contoh, lalu layar yang terbuka dimuat ulang.
hydrateUsers(users).then((changed) => { if (changed) emitChange(); });

export class ApiError extends Error {
  constructor(code, field) { super(code); this.code = code; this.field = field; }
}

/** Skenario tabel dari DevToolbar (loading/empty/error) — diabaikan saat "Coba lagi". */
async function listGate(retry) {
  const { tableState } = getScenario();
  if (!retry && tableState === 'loading') return new Promise(() => {});
  await wait(450);
  if (!retry && tableState === 'error') throw new ApiError('LOAD_FAILED');
  return !retry && tableState === 'empty';
}

// ------------------------------------------------------------------ util
const allAccounts = () => [...users, ...superAdmins];
/** Cari akun dari identitas login: berisi "@" = email; selain itu nomor telepon (08…, 62…, +62…, 8… dianggap sama). */
export function findByIdentifier(identifier) {
  const id = (identifier || '').trim().toLowerCase();
  if (!id) return undefined;
  if (id.includes('@')) return allAccounts().find((x) => x.email === id);
  const phone = normalizePhone(id);
  return phone ? allAccounts().find((x) => x.phone && x.phone === phone) : undefined;
}
const phoneTaken = (phone, exceptId) => allAccounts().some((x) => x.phone === phone && x.id !== exceptId);

/**
 * No. Handphone PIC unik per partner (keputusan review 2026-10-09; sama dengan Android `picPhoneTaken`): dibanding nomor PIC
 * partner lain kecuali Rejected/Cancelled, termasuk partner yang belum Active (belum punya akun login PIC).
 */
export function picPhoneTaken(phone, exceptPartnerId) {
  const n = normalizePhone(phone);
  return !!n && partners.some((p) => p.id !== exceptPartnerId && !['REJECTED', 'CANCELLED'].includes(p.status) && normalizePhone(p.pic.phone) === n);
}

export const userById = (id) => users.find((u) => u.id === id) ?? superAdmins.find((u) => u.id === id);
/** Status akun Keycloak dengan Expired terhitung (Pending + tautan aktivasi 3x24 jam lewat). */
export function accountStatus(u) {
  if (u.status === 'PENDING' && now() - u.inviteSentAt > ACTIVATION_TTL_MS) return 'EXPIRED';
  return u.status;
}
export const actorLabel = (by) => {
  if (typeof by !== 'number') return by ?? '-';
  const u = userById(by);
  return u ? `${u.fullName} (${ROLES[u.role].short})` : '-';
};
const actorOf = (session) => `${session.name} (${ROLES[session.role].short})`;
const inArea = (ids, areaId) => !ids || ids.length === 0 || ids.includes(areaId);

// ------------------------------------------------------------------ auth (W1)
const MAX_FAILS = 5;
const LOCK_MS = 15 * 60000;

/**
 * Login Keycloak: email atau nomor telepon + password (revisi stakeholder 2026-10-08; username tidak dipakai).
 * Error: OUTAGE | LOCKED | INVALID | DISABLED | NOT_ACTIVATED. Role tanpa platform web-access tetap mendapat sesi (web menampilkan Akses ditolak).
 */
export async function login(identifier, password) {
  await wait(600);
  if (getScenario().service === 'outage') throw new ApiError('OUTAGE');
  const u = findByIdentifier(identifier);
  if (u?.lockUntil && now() < u.lockUntil) throw new ApiError('LOCKED');
  if (!u || u.password !== password) {
    if (u) {
      u.fails += 1;
      if (u.fails >= MAX_FAILS) { u.fails = 0; u.lockUntil = new Date(now().getTime() + LOCK_MS); throw new ApiError('LOCKED'); }
    }
    throw new ApiError('INVALID');
  }
  u.fails = 0;
  const st = u.role === 'SUPER_ADMIN' ? 'ACTIVE' : accountStatus(u);
  if (st === 'DISABLED') throw new ApiError('DISABLED');
  if (st === 'PENDING' || st === 'EXPIRED') throw new ApiError('NOT_ACTIVATED');
  return sessionFor(u, identifier.trim());
}

export function sessionFor(u, loginId = u.email) {
  return {
    userId: u.id, loginId, role: u.role, name: u.fullName, roleLabel: ROLES[u.role].label,
    areaIds: u.areaIds ?? [], platform: ROLES[u.role].platform, webAccess: ROLES[u.role].platform === 'web-access', features: ROLES[u.role].features,
  };
}
/** Sesi contoh untuk DevToolbar / preset. */
export const demoSession = (handle) => sessionFor(allAccounts().find((u) => u.email === handle || u.email.startsWith(`${handle}@`)));
// handle = email atau bagian sebelum "@" (mis. 'rina.saraswati'), hanya untuk DevToolbar/preset/tes.

// ------------------------------------------------------------------ Partner Pipeline (W3)
function picAccount(p) {
  if (p.picAccountFailed) return { status: 'FAILED' };
  const u = users.find((x) => x.partnerId === p.id);
  return u ? { status: accountStatus(u), userId: u.id } : { status: 'NONE' };
}
function enrich(p) {
  const sub = userById(p.submittedBy);
  return { ...clone(p), submitter: sub ? { id: sub.id, name: sub.fullName, role: sub.role } : null, picAccount: picAccount(p) };
}

export function partnerCounts(areaIds) {
  const scope = partners.filter((p) => inArea(areaIds, p.areaId));
  const counts = { ALL: scope.length };
  Object.keys(PARTNER_STATUS).forEach((s) => { counts[s] = scope.filter((p) => p.status === s).length; });
  return counts;
}

/** Pemilih "Diajukan oleh" pada filter = TL/SR yang pernah mengajukan. */
export const submitterOptions = () => [...new Set(partners.map((p) => p.submittedBy))].map(userById).filter(Boolean)
  .map((u) => ({ value: String(u.id), label: `${u.fullName} (${u.role})` }));

const SORTERS = {
  registrationNumber: (p) => p.registrationNumber,
  partnerName: (p) => p.partnerName.toLowerCase(),
  submittedBy: (p) => actorLabel(p.submittedBy),
  storeCount: (p) => p.stores.length,
  area: (p) => AREAS.find((a) => a.id === p.areaId).name,
  submittedAt: (p) => p.submittedAt.getTime(),
  statusUpdatedAt: (p) => p.statusUpdatedAt.getTime(),
};

/** PRD §2A — daftar partner: filter status/area/badan usaha/channel/pengaju/tanggal, cari, sort, 20 per halaman. */
export async function listPartners(q = {}, { retry = false } = {}) {
  const empty = await listGate(retry);
  const counts = partnerCounts();
  if (empty) return { rows: [], total: 0, counts: Object.fromEntries(Object.keys(counts).map((k) => [k, 0])) };
  const term = (q.q ?? '').trim().toLowerCase();
  const from = q.from ? new Date(`${q.from}T00:00:00+07:00`) : null;
  const to = q.to ? new Date(`${q.to}T23:59:59+07:00`) : null;
  let rows = partners.filter((p) => (!q.status || p.status === q.status)
    && (!term || p.partnerName.toLowerCase().includes(term) || p.registrationNumber.toLowerCase().includes(term))
    && (!q.area || p.areaId === Number(q.area))
    && (!q.entity || p.businessEntityType === q.entity)
    && (!q.channel || p.channel === q.channel)
    && (!q.submitter || p.submittedBy === Number(q.submitter))
    && (!from || p.submittedAt >= from) && (!to || p.submittedAt <= to));
  const [key, dir] = (q.sort || 'submittedAt:desc').split(':');
  const f = SORTERS[key] ?? SORTERS.submittedAt;
  rows = rows.sort((a, b) => { const x = f(a); const y = f(b); return (x < y ? -1 : x > y ? 1 : 0) * (dir === 'asc' ? 1 : -1); });
  const page = Math.max(1, Number(q.page) || 1);
  return { rows: rows.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map(enrich), total: rows.length, counts };
}

export async function getPartner(id) {
  await wait(300);
  const p = partners.find((x) => x.id === id);
  if (!p) throw new ApiError('NOT_FOUND');
  return enrich(p);
}
const findP = (id) => partners.find((x) => x.id === id);
const log = (p, entry) => { p.history.push({ at: now(), ...entry }); p.statusUpdatedAt = now(); };

/** Verifikasi manual dokumen (hanya Under Review). */
export async function setDocVerification(pid, key, verification, note, session) {
  await wait(250);
  const p = findP(pid);
  if (p.status !== 'UNDER_REVIEW') throw new ApiError('CONFLICT');
  const d = p.documents.find((x) => x.key === key);
  Object.assign(d, { verification, note: verification === 'NEEDS_REVISION' ? note : null, verifiedBy: actorOf(session), verifiedAt: now() });
  return enrich(p);
}

/**
 * Jumlah dokumen wajib yang belum Valid (syarat "Verifikasi Selesai").
 * Data Rekening tidak diverifikasi terpisah (revisi stakeholder 2026-10-08); dokumen buku rekening tetap diverifikasi.
 */
export function verificationGap(p) {
  const pending = p.documents.filter((d) => d.mandatory && d.verification !== 'VALID');
  return { count: pending.length, flagged: pending.filter((d) => d.verification === 'NEEDS_REVISION').length };
}

/** US-P01 — Minta Revisi: items [{ kind: 'DOC'|'SEC', ref, label, note }]. */
export async function requestRevision(pid, items, general, session) {
  await wait(500);
  const p = findP(pid);
  if (!TRANSITIONS[p.status].includes('REVISION_REQUIRED')) throw new ApiError('CONFLICT');
  items.forEach((it) => {
    if (it.kind === 'DOC') Object.assign(p.documents.find((d) => d.key === it.ref), { verification: 'NEEDS_REVISION', note: it.note, verifiedBy: actorOf(session), verifiedAt: now() });
  });
  p.revisionRequest = { at: now(), by: actorOf(session), general: general || null, items };
  log(p, { from: p.status, to: 'REVISION_REQUIRED', by: actorOf(session), reason: `${items.length} item diminta revisi: ${items.map((i) => i.label).join(', ')}${general ? `. Catatan umum: ${general}` : ''}` });
  p.status = 'REVISION_REQUIRED';
  return enrich(p);
}

/**
 * US-P03…P08 — ubah status. opts: { reason, via, inviteEmail, file }.
 * Efek samping sesuai PRD: Verified mengunci data; Waiting PKS mencatat pengiriman; Active membuat kode merchant/toko + akun PIC;
 * Inactive menonaktifkan toko, melepas penugasan SA/SR, dan menonaktifkan akun PIC.
 */
export async function changeStatus(pid, to, opts, session) {
  await wait(600);
  const p = findP(pid);
  if (!TRANSITIONS[p.status].includes(to) || to === 'UNDER_REVIEW') throw new ApiError('CONFLICT');
  const actor = actorOf(session);
  const from = p.status;
  let reason = opts.reason || null;
  if (to === 'VERIFIED') {
    if (verificationGap(p).count > 0) throw new ApiError('CONFLICT');
    p.verifiedAt = now(); p.verifiedBy = actor;
    reason = 'Seluruh dokumen wajib valid';
  }
  if (to === 'WAITING_PKS') {
    Object.assign(p.pks, { status: 'WAITING_SIGNATURE', sentAt: now(), sentVia: opts.via, inviteEmail: opts.via === 'EMAIL' ? opts.inviteEmail : null });
    reason = `PKS dikirim di Privy web via ${opts.via === 'PRIVY_ID' ? `Privy ID ${p.privyId}` : `email ${opts.inviteEmail}`}`;
  }
  if (to === 'ACTIVE') {
    p.activatedAt = now();
    Object.assign(p.pks, { status: 'SIGNED', confirmedBy: actor, confirmedAt: now() });
    if (opts.file) p.pks.file = { name: opts.file.name, by: actor, at: now() };
    p.merchantCode = `MRC-${p.registrationNumber.slice(-4)}`;
    p.stores.forEach((s, i) => { s.status = 'ACTIVE'; s.code = `TK${p.registrationNumber.slice(-4)}-${String(i + 1).padStart(2, '0')}`; });
    reason = `PKS ditandatangani (dicek di Privy web)${opts.file ? ', dokumen PKS diunggah' : ''}; partner diaktifkan`;
    createPicAccount(p, actor);
  }
  if (to === 'INACTIVE') {
    p.stores.forEach((s) => { s.status = 'INACTIVE'; s.assigned = []; });
    const u = users.find((x) => x.partnerId === p.id);
    if (u && u.status !== 'DISABLED') {
      Object.assign(u, { status: 'DISABLED', disabledAt: now(), disabledBy: 'Sistem (partner Inactive)', disabledReason: 'Partner dinonaktifkan di Partner Pipeline' });
      u.log.push({ at: now(), text: 'Akun dinonaktifkan: partner Inactive' });
      syncUser(u);
    }
  }
  if (to === 'REVISION_REQUIRED') throw new ApiError('CONFLICT'); // lewat requestRevision
  log(p, { from, to, by: actor, reason });
  p.status = to;
  return enrich(p);
}

function createPicAccount(p, actor) {
  if (getScenario().picAccount === 'fail') { p.picAccountFailed = true; log(p, { from: null, to: null, by: 'Sistem', reason: 'Akun PIC gagal dibuat di Keycloak' }); return; }
  p.picAccountFailed = false;
  const id = Math.max(...users.map((u) => u.id)) + 1;
  users.push({
    id, fullName: p.pic.name, role: 'PARTNER', username: p.pic.email, email: p.pic.email, phone: p.pic.phone, tlLevel: null,
    areaIds: [p.areaId], supervisorId: null, partnerId: p.id, status: 'PENDING', inviteSentAt: now(), inviteResendCount: 0,
    activatedAt: null, disabledAt: null, disabledBy: null, disabledReason: null, createdBy: actor, createdAt: now(),
    password: null, fails: 0, lockUntil: null,
    log: [{ at: now(), text: `Akun partner dibuat otomatis saat partner Active, tautan aktivasi dikirim ke ${p.pic.email}` }],
  });
  syncUser(users.at(-1));
}

/** "Coba buat ulang" bila akun PIC gagal dibuat saat aktivasi. */
export async function retryPicAccount(pid, session) {
  await wait(500);
  const p = findP(pid);
  const prev = getScenario().picAccount;
  if (prev === 'fail') throw new ApiError('KEYCLOAK_FAILED');
  createPicAccount(p, actorOf(session));
  log(p, { from: null, to: null, by: actorOf(session), reason: `Akun PIC dibuat ulang, tautan aktivasi dikirim ke ${p.pic.email}` });
  return enrich(p);
}

/** Waiting PKS — catat pengiriman ulang ke Privy ID/email lain. Tanggal kirim pertama tidak berubah. */
export async function updatePksDelivery(pid, { via, inviteEmail }, session) {
  await wait(400);
  const p = findP(pid);
  if (p.status !== 'WAITING_PKS') throw new ApiError('CONFLICT');
  Object.assign(p.pks, { sentVia: via, inviteEmail: via === 'EMAIL' ? inviteEmail : p.pks.inviteEmail });
  log(p, { from: null, to: null, by: actorOf(session), reason: `Data pengiriman PKS diperbarui: via ${via === 'PRIVY_ID' ? `Privy ID ${p.privyId}` : `email ${inviteEmail}`}` });
  return enrich(p);
}

/** Active — unggah PKS bertanda tangan bila belum diunggah saat aktivasi. */
export async function uploadPks(pid, file, session) {
  await wait(500);
  const p = findP(pid);
  p.pks.file = { name: file.name, by: actorOf(session), at: now() };
  log(p, { from: null, to: null, by: actorOf(session), reason: 'Dokumen PKS diunggah' });
  return enrich(p);
}

/**
 * Demo US-P02 — TL/SR memperbaiki item yang diminta dari aplikasi mobile lalu mengirim ulang.
 * Dokumen → versi baru (Belum Dicek); rekening → Belum Dicek; nilai field yang berubah dicatat (lama → baru).
 */
export async function simulateResubmit(pid) {
  await wait(300);
  const p = findP(pid);
  if (p.status !== 'REVISION_REQUIRED') throw new ApiError('CONFLICT');
  const editor = p.submittedBy;
  const changes = [];
  const change = (section, field, label, obj, key, value) => { changes.push({ section, field, label, old: obj[key], new: value, by: editor, at: now() }); obj[key] = value; };
  p.revisionRequest.items.forEach((it) => {
    if (it.kind === 'DOC') {
      const d = p.documents.find((x) => x.key === it.ref);
      d.older.unshift({ ...d.file, verification: d.verification, note: d.note });
      d.file = { ...d.file, name: d.file.name.replace(/(_v\d+)?\.(\w+)$/, `_v${d.file.version + 1}.$2`), uploadedAt: now(), version: d.file.version + 1 };
      Object.assign(d, { verification: 'UNVERIFIED', note: null, verifiedBy: null, verifiedAt: null, revised: true });
    } else {
      if (it.ref === 'bank') { change('bank', 'accountNumber', 'No. Rekening', p.bank, 'accountNumber', String(Number(p.bank.accountNumber) + 3141)); }
      if (it.ref === 'pic') change('pic', 'phone', 'No. Handphone', p.pic, 'phone', `85${String(Number(p.pic.phone.slice(2)) + 271828).slice(0, 9)}`);
      if (it.ref === 'partner') change('partner', 'address', 'Alamat Partner (sesuai legalitas)', p, 'address', `${p.address} (Ruko Blok B)`);
      if (it.ref === 'business') change('business', 'businessEmail', 'Email Bisnis', p, 'businessEmail', p.businessEmail.replace('admin@', 'info@'));
      if (it.ref === 'store') change('store', 'name', 'Nama Toko', p.stores[0], 'name', `${p.stores[0].name} Utama`);
      if (!p.revisedSections.includes(it.ref)) p.revisedSections.push(it.ref);
    }
  });
  p.fieldChanges.push(...changes);
  const summary = changes.map((c) => `${c.label}: ${c.old} → ${c.new}`).join('; ');
  log(p, { from: 'REVISION_REQUIRED', to: 'UNDER_REVIEW', by: editor, reason: `Perbaikan dikirim ulang dari aplikasi mobile${summary ? `. ${summary}` : ''}` });
  p.status = 'UNDER_REVIEW';
  p.revisionRequest = null;
  emitChange();
  return enrich(p);
}

// ------------------------------------------------------------------ Account Management (W2)
function enrichUser(u) {
  const leader = u.supervisorId ? userById(u.supervisorId) : null;
  const partner = u.partnerId ? findP(u.partnerId) : null;
  return {
    ...clone({ ...u, password: undefined }),
    accountStatus: accountStatus(u),
    leader: leader ? { id: leader.id, name: leader.fullName, role: leader.role } : null,
    partner: partner ? { id: partner.id, name: partner.partnerName } : null,
    subordinates: users.filter((x) => x.supervisorId === u.id && x.status !== 'DISABLED').map((x) => ({ id: x.id, name: x.fullName, role: x.role })),
  };
}

export function userCounts() {
  const counts = { ALL: users.length };
  Object.keys(ACCOUNT_STATUS).forEach((s) => { counts[s] = users.filter((u) => accountStatus(u) === s).length; });
  return counts;
}

/** PRD §3A — daftar pengguna: status, cari (nama/email/telepon), role, area; terbaru di atas; 20 per halaman. */
export async function listUsers(q = {}, { retry = false } = {}) {
  const empty = await listGate(retry);
  if (empty) return { rows: [], total: 0, counts: { ALL: 0, PENDING: 0, EXPIRED: 0, ACTIVE: 0, DISABLED: 0 } };
  const term = (q.q ?? '').trim().toLowerCase();
  const rows = users.filter((u) => (!q.status || accountStatus(u) === q.status)
    && (!term || [u.fullName, u.email, u.phone].some((v) => v.toLowerCase().includes(term.replace(/^\+?62|^0/, ''))))
    && (!q.role || u.role === q.role)
    && (!q.area || u.areaIds.includes(Number(q.area))))
    .sort((a, b) => b.createdAt - a.createdAt);
  const page = Math.max(1, Number(q.page) || 1);
  return { rows: rows.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map(enrichUser), total: rows.length, counts: userCounts() };
}

export async function getUser(id) {
  await wait(200);
  return enrichUser(userById(id));
}

/** Area APL: area yang sudah dipegang APL lain (tidak Disabled) → { areaId: nama APL }. */
export function aplAreaHolders() {
  const map = {};
  users.filter((u) => u.role === 'APL' && u.status !== 'DISABLED').forEach((u) => u.areaIds.forEach((a) => { map[a] = u.fullName; }));
  return map;
}

/** Leader valid: TL → APL pemegang area; SR/SA → TL di area yang sama. Akun Disabled tidak bisa jadi leader. */
export function leaderOptions(role, areaId) {
  if (!areaId) return [];
  const want = role === 'TL' ? 'APL' : role === 'SR' || role === 'SA' ? 'TL' : null;
  if (!want) return [];
  return users.filter((u) => u.role === want && u.status !== 'DISABLED' && u.areaIds.includes(areaId))
    .map((u) => ({ value: String(u.id), label: `${u.fullName}${accountStatus(u) !== 'ACTIVE' ? ` (${ACCOUNT_STATUS[accountStatus(u)].label})` : ''}` }));
}

/**
 * PRD §3B — POST /api/v1/users. Return { user, inviteSent }.
 * Error: DUPLICATE (field email/phone, 409) | KEYCLOAK_FAILED. Username Keycloak = email.
 */
export async function createUser(form, session) {
  const { saveOutcome } = getScenario();
  await wait(900);
  const email = form.email.trim().toLowerCase();
  const phone = normalizePhone(form.phone);
  if (!CREATABLE_ROLES.includes(form.role)) throw new ApiError('INVALID');
  if ([...users, ...superAdmins].some((u) => u.email === email)) throw new ApiError('DUPLICATE', 'email');
  if (phoneTaken(phone) || picPhoneTaken(phone)) throw new ApiError('DUPLICATE', 'phone');
  if (saveOutcome === 'kcFail') throw new ApiError('KEYCLOAK_FAILED');
  const inviteSent = saveOutcome !== 'emailFail';
  const u = {
    id: Math.max(...users.map((x) => x.id)) + 1, fullName: form.fullName.trim(), role: form.role, username: email, email,
    phone, tlLevel: form.role === 'TL' ? form.tlLevel : null,
    areaIds: form.role === 'REVIEWER' ? [] : form.areaIds, supervisorId: form.leaderId ? Number(form.leaderId) : null, partnerId: null,
    status: 'PENDING', inviteSentAt: now(), inviteResendCount: 0, activatedAt: null, disabledAt: null, disabledBy: null, disabledReason: null,
    createdBy: actorOf(session), createdAt: now(), password: null, fails: 0, lockUntil: null,
    log: [{ at: now(), text: inviteSent ? `Akun dibuat di Keycloak, tautan aktivasi dikirim ke ${email}` : 'Akun dibuat di Keycloak, email undangan gagal dikirim' }],
  };
  users.push(u);
  syncUser(u);
  return { user: enrichUser(u), inviteSent };
}

/** Kirim ulang tautan aktivasi (Pending/Expired) — tautan lama tidak berlaku, hitung mundur 3x24 jam diulang. */
export async function resendInvite(id, session) {
  await wait(500);
  const u = userById(id);
  if (!['PENDING', 'EXPIRED'].includes(accountStatus(u))) throw new ApiError('CONFLICT');
  Object.assign(u, { status: 'PENDING', inviteSentAt: now(), inviteResendCount: u.inviteResendCount + 1 });
  u.log.push({ at: now(), text: `Tautan aktivasi dikirim ulang oleh ${actorOf(session)} (tautan lama tidak berlaku)` });
  syncUser(u);
  return enrichUser(u);
}

/** Nonaktifkan akun (final). Admin tidak bisa menonaktifkan akunnya sendiri. */
export async function disableUser(id, reason, session) {
  await wait(500);
  const u = userById(id);
  if (u.id === session.userId || u.status === 'DISABLED') throw new ApiError('CONFLICT');
  Object.assign(u, { status: 'DISABLED', disabledAt: now(), disabledBy: actorOf(session), disabledReason: reason });
  u.log.push({ at: now(), text: `Akun dinonaktifkan: ${reason}` });
  syncUser(u);
  return enrichUser(u);
}

// ------------------------------------------------------------------ Aktivasi (KC1)
/**
 * status: valid | expired | already. mode 'reset' = tautan reset password (24 jam, sekali pakai).
 * Tanpa userId → skenario DevToolbar dengan pengguna contoh.
 */
export async function checkActivation(userId, mode = 'activate') {
  await wait(200);
  const u = userId ? userById(userId) : users.find((x) => x.id === 10);
  if (!userId) return { status: getScenario().activationState, user: { id: u.id, fullName: u.fullName, phone: u.phone, email: u.email, role: u.role } };
  if (mode === 'reset') {
    const ok = u.status === 'ACTIVE' && u.resetSentAt && now() - u.resetSentAt <= RESET_TTL_MS;
    return { status: ok ? 'valid' : 'expired', user: { id: u.id, fullName: u.fullName, phone: u.phone, email: u.email, role: u.role } };
  }
  const st = accountStatus(u);
  const status = st === 'ACTIVE' ? 'already' : st === 'PENDING' ? 'valid' : 'expired';
  return { status, user: { id: u.id, fullName: u.fullName, phone: u.phone, email: u.email, role: u.role } };
}

export async function activateAccount(userId, password, mode = 'activate') {
  await wait(500);
  const u = userId ? userById(userId) : null;
  if (u && mode === 'reset' && u.resetSentAt) {
    Object.assign(u, { password, resetSentAt: null });
    u.log.push({ at: now(), text: 'Password diatur ulang melalui tautan reset' });
    syncUser(u, password);
    return { ok: true };
  }
  if (u && accountStatus(u) === 'PENDING') {
    Object.assign(u, { status: 'ACTIVE', activatedAt: u.activatedAt ?? now(), password });
    u.log.push({ at: now(), text: 'Password dibuat, akun aktif' });
    syncUser(u, password);
  }
  return { ok: true };
}

// ------------------------------------------------------------------ Reset password & ubah email (PRD v3 US-A03, US-A04)
/** Kirim tautan reset password (akun Active): tautan 24 jam sekali pakai, sesi berakhir, status tetap Active. */
export async function sendResetPassword(id, session) {
  await wait(500);
  const u = userById(id);
  if (accountStatus(u) !== 'ACTIVE') throw new ApiError('CONFLICT');
  u.resetSentAt = now();
  u.log.push({ at: now(), text: `Tautan reset password dikirim ke ${u.email} oleh ${actorOf(session)}; sesi aktif diakhiri` });
  syncUser(u);
  return enrichUser(u);
}

/**
 * Ubah email (Pending, Expired, Active): valid & unik, alasan wajib, berlaku langsung. Username Keycloak (= email) ikut berubah;
 * untuk Partner (PIC) email PIC di data partner diperbarui. Pemberitahuan dikirim ke email lama. Opsional kirim tautan reset ke email baru (akun Active).
 */
export async function changeEmail(id, newEmail, reason, sendReset, session) {
  await wait(600);
  const u = userById(id);
  const email = newEmail.trim().toLowerCase();
  if (accountStatus(u) === 'DISABLED') throw new ApiError('CONFLICT');
  if ([...users, ...superAdmins].some((x) => x.email === email && x.id !== id)) throw new ApiError('DUPLICATE', 'email');
  const old = u.email;
  u.email = email;
  u.username = email;
  if (u.role === 'PARTNER') {
    const p = findP(u.partnerId);
    if (p) { p.changeLog.push({ at: now(), by: actorOf(session), section: 'pic', field: 'Email PIC', old, new: email, reason }); p.pic.email = email; }
  }
  u.log.push({ at: now(), text: `Email diubah dari ${old} ke ${email} oleh ${actorOf(session)}: ${reason}. Pemberitahuan dikirim ke email lama` });
  if (sendReset && accountStatus(u) === 'ACTIVE') { u.resetSentAt = now(); u.log.push({ at: now(), text: `Tautan reset password dikirim ke ${email}` }); }
  syncUser(u);
  return enrichUser(u);
}

/**
 * Ubah nomor telepon (Pending, Expired, Active; revisi stakeholder 2026-10-08): nomor dipakai untuk login, wajib valid & unik,
 * alasan wajib, berlaku langsung. Untuk Partner (PIC) No. Handphone PIC di data partner ikut diperbarui.
 */
export async function changePhone(id, newPhone, reason, session) {
  await wait(600);
  const u = userById(id);
  const phone = normalizePhone(newPhone);
  if (accountStatus(u) === 'DISABLED') throw new ApiError('CONFLICT');
  if (phoneTaken(phone, id) || picPhoneTaken(phone, u.partnerId)) throw new ApiError('DUPLICATE', 'phone');
  const old = u.phone;
  u.phone = phone;
  if (u.role === 'PARTNER') {
    const p = findP(u.partnerId);
    if (p) { p.changeLog.push({ at: now(), by: actorOf(session), section: 'pic', field: 'No. Handphone PIC', old: formatPhone(old), new: formatPhone(phone), reason }); p.pic.phone = phone; }
  }
  u.log.push({ at: now(), text: `Nomor telepon diubah dari ${formatPhone(old)} ke ${formatPhone(phone)} oleh ${actorOf(session)}: ${reason}` });
  syncUser(u);
  return enrichUser(u);
}

// ------------------------------------------------------------------ Ubah Data Partner (PRD v3 US-P09)
/**
 * Hanya partner Active. changes: [{ section, field, label, storeId?, value, display? }]. Rekening tidak bisa diubah.
 * Setiap perubahan dicatat (field, lama, baru, alasan, Admin, waktu) di changeLog dan Riwayat.
 */
/** Partner yang dihitung untuk cek unik (Kode Referral, No. Handphone PIC): semua kecuali Rejected/Cancelled. */
const registeredPartners = (exceptId) => partners.filter((p) => p.id !== exceptId && !['REJECTED', 'CANCELLED'].includes(p.status));
/**
 * Kode Referral di level partner menjadi penghubung loan yang diajukan dari partner itu (lewat PIC-nya), jadi unik per partner:
 * dibandingkan setelah trim, tanpa beda huruf besar/kecil (keputusan review 2026-10-09; sama dengan Android `referralTaken`).
 */
export function referralTaken(code, exceptId) {
  const c = (code || '').trim().toLowerCase();
  return !!c && registeredPartners(exceptId).some((p) => p.referralCode.trim().toLowerCase() === c);
}

const EDITABLE = {
  partnerName: (p) => [p, 'partnerName'], address: (p) => [p, 'address'], referralCode: (p) => [p, 'referralCode'], businessEmail: (p) => [p, 'businessEmail'], channel: (p) => [p, 'channel'],
  businessLocationCount: (p) => [p, 'businessLocationCount'], picName: (p) => [p.pic, 'name'], picPhone: (p) => [p.pic, 'phone'], picStatus: (p) => [p.pic, 'status'],
};
export async function updatePartnerData(pid, changes, reason, session) {
  await wait(600);
  const p = findP(pid);
  if (p.status !== 'ACTIVE') throw new ApiError('CONFLICT');
  const account = users.find((x) => x.partnerId === p.id);
  const referralChange = changes.find((c) => c.field === 'referralCode');
  if (referralChange && referralTaken(referralChange.value, p.id)) throw new ApiError('DUPLICATE', 'referralCode');
  const phoneChange = changes.find((c) => c.field === 'picPhone');
  if (phoneChange && (phoneTaken(phoneChange.value, account?.id) || picPhoneTaken(phoneChange.value, p.id))) throw new ApiError('DUPLICATE', 'picPhone');
  changes.forEach((c) => {
    let obj; let key;
    if (c.storeId) { obj = p.stores.find((s) => s.id === c.storeId); key = c.field; } else [obj, key] = EDITABLE[c.field](p);
    if (String(obj[key]) === String(c.value)) return;
    p.changeLog.push({ at: now(), by: actorOf(session), section: c.section, field: c.label, storeId: c.storeId ?? null, old: c.display?.old ?? obj[key], new: c.display?.new ?? c.value, reason });
    obj[key] = c.value;
  });
  // Nama dan No. Handphone PIC ikut ke akun login PIC (nomor telepon dipakai untuk login).
  if (account) {
    if (phoneChange && account.phone !== p.pic.phone) account.log.push({ at: now(), text: `Nomor telepon diubah dari ${formatPhone(account.phone)} ke ${formatPhone(p.pic.phone)} lewat Ubah Data Partner oleh ${actorOf(session)}` });
    Object.assign(account, { fullName: p.pic.name, phone: p.pic.phone });
    syncUser(account);
  }
  log(p, { from: null, to: null, by: actorOf(session), reason: `Data partner diubah (${changes.map((c) => c.label).join(', ')}): ${reason}` });
  return enrich(p);
}

// ------------------------------------------------------------------ Beranda Admin (PRD v3 §A1)
/** Usia sejak tanggal: "< 1 jam", "N jam", "N hari" (informatif, tanpa SLA). */
export function ageLabel(d) {
  const h = (now() - new Date(d)) / 3600e3;
  return h < 1 ? '< 1 jam' : h < 24 ? `${Math.floor(h)} jam` : `${Math.floor(h / 24)} hari`;
}
export async function adminHome(areaId, { retry = false } = {}) {
  await listGate(retry);
  const a = areaId ? Number(areaId) : null;
  const ps = partners.filter((p) => !a || p.areaId === a);
  const us = users.filter((u) => !a || u.areaIds.includes(a));
  const by = (st) => ps.filter((p) => p.status === st);
  const oldest = (list, key) => (list.length ? list.reduce((m, p) => (p[key] < m[key] ? p : m))[key] : null);
  const uReview = by('UNDER_REVIEW'); const verified = by('VERIFIED'); const waiting = by('WAITING_PKS');
  const counts = Object.fromEntries(Object.keys(PARTNER_STATUS).map((s) => [s, by(s).length]));
  const accountTable = (keyFn, keys) => keys.map((k) => {
    const rows = us.filter((u) => keyFn(u).includes(k));
    return { key: k, PENDING: rows.filter((u) => accountStatus(u) === 'PENDING').length, EXPIRED: rows.filter((u) => accountStatus(u) === 'EXPIRED').length, ACTIVE: rows.filter((u) => accountStatus(u) === 'ACTIVE').length, DISABLED: rows.filter((u) => accountStatus(u) === 'DISABLED').length, total: rows.length };
  });
  const events = [
    ...ps.flatMap((p) => p.history.map((h) => ({ at: h.at, text: h.to && h.from ? `${p.partnerName}: ${PARTNER_STATUS[h.from].label} → ${PARTNER_STATUS[h.to].label}` : h.to ? `${p.partnerName}: pengajuan baru` : `${p.partnerName}: ${h.reason}`, by: actorLabel(h.by) }))),
    ...us.flatMap((u) => u.log.map((l) => ({ at: l.at, text: `${u.fullName} (${ROLES[u.role].short}): ${l.text}`, by: null }))),
  ].sort((x, y) => y.at - x.at).slice(0, 8);
  return {
    counts,
    underReview: { count: uReview.length, oldest: oldest(uReview, 'statusUpdatedAt') },
    verified: { count: verified.length },
    waitingPks: { count: waiting.length, oldestSent: waiting.length ? waiting.reduce((m, p) => (p.pks.sentAt < m ? p.pks.sentAt : m), waiting[0].pks.sentAt) : null },
    expiredUsers: us.filter((u) => accountStatus(u) === 'EXPIRED').map(enrichUser),
    revision: counts.REVISION_REQUIRED, pendingUsers: us.filter((u) => accountStatus(u) === 'PENDING').length,
    active: { count: counts.ACTIVE, stores: by('ACTIVE').reduce((s, p) => s + p.stores.filter((x) => x.status === 'ACTIVE').length, 0) },
    reviewQueue: [...uReview].sort((x, y) => x.statusUpdatedAt - y.statusUpdatedAt).slice(0, 5).map(enrich),
    pksFollowUp: [...verified, ...waiting].sort((x, y) => x.statusUpdatedAt - y.statusUpdatedAt).map(enrich),
    accountsByRole: accountTable((u) => [u.role], ['REVIEWER', 'APL', 'TL', 'SR', 'SA', 'PARTNER']),
    accountsByArea: accountTable((u) => u.areaIds, (a ? AREAS.filter((x) => x.id === a) : AREAS).map((x) => x.id)),
    events,
  };
}

// ------------------------------------------------------------------ periode & util APL (PRD v3 §B)
export const perfMonths = () => MONTHS;
export const currentMonth = () => CURRENT_MONTH;
export const todayDate = () => wibDate(now());
const DAY = 864e5;
const addDays = (ymd, n) => new Date(Date.parse(`${ymd}T12:00:00Z`) + n * DAY).toISOString().slice(0, 10);
const daysBetween = (a, b) => Math.round((Date.parse(`${b}T12:00:00Z`) - Date.parse(`${a}T12:00:00Z`)) / DAY) + 1;
/** Rentang tanggal bulan ym, dipotong sampai hari ini untuk bulan berjalan. */
export const monthRange = (ym) => {
  const [y, m] = ym.split('-').map(Number);
  const last = new Date(Date.UTC(y, m, 0)).getUTCDate();
  const to = `${ym}-${String(last).padStart(2, '0')}`;
  return { from: `${ym}-01`, to: to > todayDate() ? todayDate() : to };
};
/** Periode sebelumnya: bulan sebelumnya (jumlah hari sama bila bulan berjalan) atau rentang sama panjang tepat sebelumnya. */
export function previousPeriod(period) {
  const len = daysBetween(period.from, period.to);
  if (period.month) {
    const [y, m] = period.month.split('-').map(Number);
    const d = new Date(Date.UTC(y, m - 2, 1));
    const ym = `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`;
    const r = monthRange(ym);
    return { month: ym, from: r.from, to: addDays(r.from, Math.min(len, daysBetween(r.from, r.to)) - 1) };
  }
  return { from: addDays(period.from, -len), to: addDays(period.from, -1) };
}
const inP = (ymd, p) => ymd >= p.from && ymd <= p.to;
const isWorkday = (ymd) => new Date(`${ymd}T12:00:00Z`).getUTCDay() !== 0;
const workdays = (p) => { let n = 0; for (let d = p.from; d <= p.to; d = addDays(d, 1)) if (isWorkday(d)) n += 1; return n; };
const pct = (a, b) => (b ? (a / b) * 100 : 0);

/** Samaran PRD v3 §B2: ID "APP-••••1234", nama "Bu•• Sa•••••". */
export const maskId = (id) => `APP-••••${id.slice(-4)}`;
export const maskName = (n) => n.split(' ').map((w) => w.slice(0, 2) + '•'.repeat(Math.max(1, w.length - 2))).join(' ');
export const CRM_STATUS = { SUBMITTED: 'Pengajuan', IN_PROCESS: 'Diproses', APPROVED: 'Disetujui', REJECTED: 'Ditolak', PAID_OUT: 'Dicairkan' };

/** Agregat metrik penjualan dari daftar pinjaman (berdasarkan tanggal pengajuan). */
function salesStats(rows) {
  const submitted = rows.length;
  const accepted = rows.filter((l) => l.status === 'APPROVED' || l.status === 'PAID_OUT').length;
  const paid = rows.filter((l) => l.status === 'PAID_OUT');
  return { submitted, accepted, paidOut: paid.length, paidOutUnits: paid.reduce((a, l) => a + l.units, 0), paidOutAmount: paid.reduce((a, l) => a + l.amount, 0), acceptanceRate: pct(accepted, submitted) };
}
const scopeLoans = (areaIds, period, f = {}) => loans.filter((l) => inArea(areaIds, l.areaId) && inP(wibDate(l.submittedAt), period) && (!f.channel || l.channel === f.channel));

const fieldUsers = (areaIds) => users.filter((u) => ['TL', 'SR', 'SA'].includes(u.role) && u.status === 'ACTIVE' && inArea(areaIds, u.areaIds[0]));
/**
 * Kunjungan = hanya pemenuhan target per minggu, sama dengan Android (keputusan review 2026-10-09).
 * Target satu minggu penuh = hari kerja Senin–Sabtu (6), dikurangi hari libur bila datanya ada (web belum punya data libur);
 * maks. 1 kunjungan dihitung per hari. Contoh: Jumat dengan 3 hari terkunjungi = "Belum lengkap 3/6".
 */
const WEEK_WORKDAYS = 6;
const mondayOf = (ymd) => { const d = new Date(`${ymd}T12:00:00Z`); return addDays(ymd, -((d.getUTCDay() + 6) % 7)); };
function visitWeek(uid, start) {
  const days = new Set(visits.filter((v) => v.userId === uid && v.date >= start && v.date <= addDays(start, 5)).map((v) => v.date));
  const target = WEEK_WORKDAYS;
  return { start, visited: Math.min(days.size, target), target, closed: addDays(start, 5) < todayDate(), complete: days.size >= target };
}
/** "Lengkap 6/6" / "Belum lengkap 3/6". */
export const weekStatusLabel = (w) => `${w.complete ? 'Lengkap' : 'Belum lengkap'} ${w.visited}/${w.target}`;
/** Minggu kunjungan satu orang yang hari Seninnya ada di periode (minggu masuk periode yang memuat hari Seninnya). */
export function visitWeeks(uid, period) {
  const out = [];
  for (let w = mondayOf(period.from) < period.from ? addDays(mondayOf(period.from), 7) : period.from; w <= period.to && w <= todayDate(); w = addDays(w, 7)) out.push(visitWeek(uid, w));
  return out;
}
/** Minggu berjalan (hari ini). */
export const currentVisitWeek = (uid) => visitWeek(uid, mondayOf(todayDate()));

function productivity(userIds, period) {
  const att = attendance.filter((a) => userIds.includes(a.userId) && inP(a.date, period));
  const present = att.filter((a) => a.status !== 'ABSENT').length;
  const weeks = userIds.flatMap((id) => visitWeeks(id, period)).filter((w) => w.closed);
  const weeksComplete = weeks.filter((w) => w.complete).length;
  const scheduled = userIds.reduce((a, id) => {
    const start = wibDate(userById(id).activatedAt);
    const from = start > period.from ? start : period.from;
    return a + (from <= period.to ? workdays({ from, to: period.to }) : 0);
  }, 0);
  return { attendanceRate: pct(present, scheduled), visitWeeksComplete: weeksComplete, visitWeeks: weeks.length, visitRate: pct(weeksComplete, weeks.length), onTimeRate: pct(att.filter((a) => a.status === 'ON_TIME').length, present) };
}

// ------------------------------------------------------------------ APL B1 Dashboard
export async function aplDashboard(areaIds, period, { retry = false } = {}) {
  const empty = await listGate(retry);
  const prev = previousPeriod(period);
  const ids = empty ? [] : fieldUsers(areaIds).map((u) => u.id);
  const cur = empty ? [] : scopeLoans(areaIds, period);
  // Tren per minggu (Senin–Minggu): 8 minggu terakhir sampai akhir periode; minggu di dalam periode disorot.
  const weeks = [];
  const endDow = (new Date(`${period.to}T12:00:00Z`).getUTCDay() + 6) % 7;
  const lastMonday = addDays(period.to, -endDow);
  const scoped = empty ? [] : loans.filter((l) => inArea(areaIds, l.areaId) && l.status === 'PAID_OUT');
  for (let i = 7; i >= 0; i -= 1) {
    const from = addDays(lastMonday, -7 * i); const to = addDays(from, 6) > period.to ? period.to : addDays(from, 6);
    weeks.push({ from, to, inPeriod: to >= period.from, amount: scoped.filter((l) => inP(wibDate(l.submittedAt), { from, to })).reduce((a, l) => a + l.amount, 0) });
  }
  const tls = (empty ? [] : fieldUsers(areaIds)).filter((u) => u.role === 'TL')
    .map((u) => ({ id: u.id, name: u.fullName, tlLevel: u.tlLevel, areaId: u.areaIds[0], paidOutAmount: cur.filter((l) => l.tlId === u.id && l.status === 'PAID_OUT').reduce((a, l) => a + l.amount, 0) }))
    .sort((a, b) => b.paidOutAmount - a.paidOutAmount);
  const ps = empty ? [] : partners.filter((p) => p.status === 'ACTIVE' && inArea(areaIds, p.areaId));
  const team = empty ? [] : fieldUsers(areaIds);
  return {
    sales: { cur: salesStats(cur), prev: salesStats(empty ? [] : scopeLoans(areaIds, prev)) },
    productivity: { cur: productivity(ids, period), prev: productivity(ids, prev) },
    weeks, top: tls.slice(0, 5), bottom: [...tls].reverse().slice(0, 5),
    partnerCount: ps.length, storeCount: ps.reduce((a, p) => a + p.stores.filter((s) => s.status === 'ACTIVE').length, 0),
    team: { TL: team.filter((u) => u.role === 'TL').length, SR: team.filter((u) => u.role === 'SR').length, SA: team.filter((u) => u.role === 'SA').length },
  };
}

// ------------------------------------------------------------------ APL B2 Kinerja Penjualan
const filterPath = (rows, path) => rows.filter((l) => (!path.area || l.areaId === Number(path.area))
  && (!path.tl || String(l.tlId ?? 'none') === String(path.tl))
  && (!path.sales || String(l.salesId ?? 'none') === String(path.sales))
  && (!path.partner || l.partnerId === path.partner)
  && (!path.store || l.storeId === path.store));
/**
 * Baris drill-down Area → TL → SA/SR → Partner → Toko. path: { area, tl, sales, partner } (yang sudah dipilih).
 * f: { channel, q } — q mencari nama baris pada level ini.
 */
export async function aplSalesRows(areaIds, period, path = {}, f = {}, { retry = false } = {}) {
  const empty = await listGate(retry);
  const rows = empty ? [] : filterPath(scopeLoans(areaIds, period, { channel: f.channel }), path);
  const level = !path.area ? 'area' : !path.tl ? 'tl' : !path.sales ? 'sales' : !path.partner ? 'partner' : 'store';
  const keyOf = { area: (l) => l.areaId, tl: (l) => l.tlId ?? 'none', sales: (l) => l.salesId ?? 'none', partner: (l) => l.partnerId, store: (l) => l.storeId }[level];
  const label = (k) => {
    if (level === 'area') return { name: AREAS.find((a) => a.id === k).name };
    if (k === 'none') return { name: level === 'sales' ? 'Belum ditugaskan' : 'Tanpa TL' };
    if (level === 'tl' || level === 'sales') { const u = userById(k); return { name: u.fullName, sub: level === 'tl' ? `TL ${u.tlLevel === 'SENIOR' ? 'Senior' : 'Junior'}` : u.role }; }
    if (level === 'partner') { const p = findP(k); return { name: p.partnerName, sub: p.registrationNumber }; }
    const p = partners.find((x) => x.stores.some((st) => st.id === k)); const st = p.stores.find((x) => x.id === k); return { name: st.name, sub: st.code };
  };
  const m = new Map();
  rows.forEach((l) => { const k = keyOf(l); m.set(k, [...(m.get(k) ?? []), l]); });
  const term = (f.q ?? '').trim().toLowerCase();
  const out = [...m.entries()].map(([k, ls]) => ({ key: String(k), level, ...label(k), ...salesStats(ls) }))
    .filter((r) => !term || r.name.toLowerCase().includes(term))
    .sort((a, b) => b.paidOutAmount - a.paidOutAmount);
  const crumbs = [];
  if (path.area) crumbs.push({ level: 'area', name: AREAS.find((a) => a.id === Number(path.area))?.name });
  if (path.tl) crumbs.push({ level: 'tl', name: path.tl === 'none' ? 'Tanpa TL' : userById(Number(path.tl))?.fullName });
  if (path.sales) crumbs.push({ level: 'sales', name: path.sales === 'none' ? 'Belum ditugaskan' : userById(Number(path.sales))?.fullName });
  if (path.partner) crumbs.push({ level: 'partner', name: findP(path.partner)?.partnerName });
  return { level, rows: out, total: salesStats(rows), crumbs };
}

/** Daftar pinjaman untuk satu baris drill-down (read-only, disamarkan). scope: { area, tl, sales, partner, store }. */
export async function aplLoans(areaIds, period, scope, f = {}, page = 1) {
  await wait(250);
  const rows = filterPath(scopeLoans(areaIds, period, { channel: f.channel }), scope).sort((a, b) => b.updatedAt - a.updatedAt);
  return {
    total: rows.length,
    rows: rows.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map((l) => {
      const p = findP(l.partnerId);
      return { id: l.id, maskedId: maskId(l.id), customer: maskName(l.customer), store: p.stores.find((x) => x.id === l.storeId).name, sales: l.salesId ? userById(l.salesId).fullName : null, amount: l.amount, status: l.status, rejectionReason: l.rejectionReason, updatedAt: l.updatedAt };
    }),
  };
}

/** Pemilih bawahan (TL & SA/SR) di area APL untuk filter. */
export const subordinateOptions = (areaIds, roles = ['TL', 'SR', 'SA']) => fieldUsers(areaIds).filter((u) => roles.includes(u.role))
  .map((u) => ({ value: String(u.id), label: `${u.fullName} (${u.role})`, role: u.role, areaId: u.areaIds[0], tlId: u.role === 'TL' ? u.id : u.supervisorId }));

// ------------------------------------------------------------------ APL B3 Produktivitas
/** Per orang: absensi & kunjungan pada periode. f: { tl, role }. */
export async function aplProductivity(areaIds, period, f = {}, { retry = false } = {}) {
  const empty = await listGate(retry);
  const people = empty ? [] : fieldUsers(areaIds).filter((u) => (!f.role || u.role === f.role) && (!f.tl || u.id === Number(f.tl) || u.supervisorId === Number(f.tl)));
  return people.map((u) => {
    const area = AREAS.find((a) => a.id === u.areaIds[0]);
    const att = attendance.filter((a) => a.userId === u.id && inP(a.date, period));
    const present = att.filter((a) => a.status !== 'ABSENT');
    const mins = present.map((a) => { const t = new Date(new Date(a.clockInAt).getTime() + area.utcOffset * 3600e3); return t.getUTCHours() * 60 + t.getUTCMinutes(); });
    const avg = mins.length ? Math.round(mins.reduce((a, b) => a + b, 0) / mins.length) : null;
    const weeks = visitWeeks(u.id, period).filter((w) => w.closed);
    return {
      id: u.id, name: u.fullName, role: u.role, tlLevel: u.tlLevel, areaId: u.areaIds[0], leader: u.supervisorId ? userById(u.supervisorId).fullName : null,
      attendance: {
        days: att.length, present: present.length, onTime: att.filter((a) => a.status === 'ON_TIME').length, late: att.filter((a) => a.status === 'LATE').length,
        checkedOut: att.filter((a) => a.clockOutAt).length, absent: att.filter((a) => a.status === 'ABSENT').length,
        avgCheckIn: avg == null ? null : `${String(Math.floor(avg / 60)).padStart(2, '0')}:${String(avg % 60).padStart(2, '0')} ${area.tz}`,
      },
      visits: { thisWeek: currentVisitWeek(u.id), weeksComplete: weeks.filter((w) => w.complete).length, weeks: weeks.length },
    };
  }).sort((a, b) => ['TL', 'SR', 'SA'].indexOf(a.role) - ['TL', 'SR', 'SA'].indexOf(b.role) || a.name.localeCompare(b.name));
}
/** Detail harian absensi satu orang (terbaru di atas). */
export async function attendanceDetail(userId, period) {
  await wait(200);
  return attendance.filter((a) => a.userId === userId && inP(a.date, period)).sort((a, b) => (a.date < b.date ? 1 : -1)).map(clone);
}
/** Detail kunjungan satu orang (terbaru di atas) + minggu kunjungan di periode (Lengkap n/n / Belum lengkap n/m). */
export async function visitDetail(userId, period) {
  await wait(200);
  const rows = visits.filter((v) => v.userId === userId && inP(v.date, period)).sort((a, b) => b.checkInAt - a.checkInAt).map((v) => {
    const p = findP(v.partnerId);
    return { ...clone(v), storeName: p.stores.find((x) => x.id === v.storeId).name, partnerName: p.partnerName };
  });
  return { rows, weeks: visitWeeks(userId, period) };
}

// ------------------------------------------------------------------ APL B4 Partner
export async function aplPartners(areaIds, period, f = {}, { retry = false } = {}) {
  const empty = await listGate(retry);
  if (empty) return [];
  const term = (f.q ?? '').trim().toLowerCase();
  return partners.filter((p) => p.status === 'ACTIVE' && inArea(areaIds, p.areaId) && (!f.channel || p.channel === f.channel) && (!f.tl || owningTl(p) === Number(f.tl)))
    .map((p) => {
      const tl = userById(owningTl(p));
      const paid = (storeId) => loans.filter((l) => l.partnerId === p.id && (!storeId || l.storeId === storeId) && l.status === 'PAID_OUT' && inP(wibDate(l.submittedAt), period)).reduce((a, l) => a + l.amount, 0);
      return {
        id: p.id, name: p.partnerName, areaId: p.areaId, channel: p.channel, entity: p.businessEntityType, tl: tl ? tl.fullName : null, activatedAt: p.activatedAt, paidOutAmount: paid(),
        picName: p.pic.name, picEmail: p.pic.email, picPhone: p.pic.phone, address: `${p.address}, ${p.village}, ${p.district}, ${p.city}`,
        stores: p.stores.filter((s) => s.status === 'ACTIVE').map((s) => ({
          id: s.id, name: s.name, code: s.code, primary: s.primary, address: s.address, lat: s.lat, lng: s.lng, activeSince: new Date(Math.max(p.activatedAt, s.addedAt)),
          sales: s.assigned.map((id) => userById(id)).filter(Boolean).map((u) => `${u.fullName} (${u.role})`), paidOutAmount: paid(s.id),
        })),
      };
    })
    .filter((p) => !term || p.name.toLowerCase().includes(term) || p.stores.some((s) => s.name.toLowerCase().includes(term)))
    .sort((a, b) => b.paidOutAmount - a.paidOutAmount);
}

// ------------------------------------------------------------------ APL B5 Tim
/** Absensi hari ini (revisi stakeholder 2026-10-08): label Bahasa Indonesia. */
export const ATTENDANCE_TODAY = { ON_TIME: 'Sudah Check In · Tepat Waktu', LATE: 'Sudah Check In · Terlambat', CHECKED_OUT: 'Sudah Check Out', NONE: 'Belum Check In', OFF: 'Libur' };
export async function aplTeam(areaIds, f = {}, { retry = false } = {}) {
  const empty = await listGate(retry);
  if (empty) return [];
  const today = todayDate();
  const term = (f.q ?? '').trim().toLowerCase();
  return fieldUsers(areaIds)
    .filter((u) => (!f.role || u.role === f.role) && (!term || [u.fullName, u.email].some((v) => v.toLowerCase().includes(term))))
    .map((u) => {
      const a = attendance.find((x) => x.userId === u.id && x.date === today);
      const ps = u.role === 'TL' ? partners.filter((p) => p.status === 'ACTIVE' && owningTl(p) === u.id) : partners.filter((p) => p.stores.some((s) => s.assigned.includes(u.id) && s.status === 'ACTIVE'));
      return {
        id: u.id, name: u.fullName, role: u.role, tlLevel: u.tlLevel, areaId: u.areaIds[0], email: u.email, phone: u.phone, registeredAt: u.activatedAt,
        leader: u.supervisorId ? userById(u.supervisorId).fullName : null, partners: ps.map((p) => p.partnerName),
        today: !isWorkday(today) ? 'OFF' : !a ? 'NONE' : a.clockOutAt ? 'CHECKED_OUT' : a.status,
      };
    })
    .sort((a, b) => ['TL', 'SR', 'SA'].indexOf(a.role) - ['TL', 'SR', 'SA'].indexOf(b.role) || a.name.localeCompare(b.name));
}
/** Ringkasan orang pada periode: penjualan & produktivitas. */
export async function personSummary(userId, period) {
  await wait(200);
  const u = userById(userId);
  const ls = loans.filter((l) => (u.role === 'TL' ? l.tlId === u.id : l.salesId === u.id) && inP(wibDate(l.submittedAt), period));
  return { sales: salesStats(ls), productivity: productivity([u.id], period), thisWeek: currentVisitWeek(u.id) };
}

// ------------------------------------------------------------------ Insentif (APL B6, Super Admin E3)
/** Versi skema yang berlaku pada bulan ym: effectiveFrom terbesar yang ≤ ym. */
export function versionFor(recipient, ym) {
  const s = schemes.find((x) => x.recipient === recipient);
  return [...s.versions].sort((a, b) => (a.effectiveFrom < b.effectiveFrom ? 1 : -1)).find((v) => v.effectiveFrom <= ym) ?? s.versions[0];
}
/** Status versi dihitung dari bulan berjalan: ACTIVE | SCHEDULED | ARCHIVED. */
export function versionStatus(s, v) {
  const active = versionFor(s.recipient, CURRENT_MONTH);
  if (v.version === active.version) return 'ACTIVE';
  return v.effectiveFrom > CURRENT_MONTH ? 'SCHEDULED' : 'ARCHIVED';
}
/** Tier yang cocok: nilai > from (tier pertama ≥ 0) dan ≤ to (to null = tak terbatas). */
export function tierFor(component, value) {
  const tiers = [...component.tiers].sort((a, b) => a.from - b.from);
  return tiers.find((t, i) => (i === 0 ? value >= t.from : value > t.from) && (t.to == null || value <= t.to)) ?? tiers[tiers.length - 1];
}
export const tierLabel = (t) => (t.to == null ? `> ${t.from}%` : t.from === 0 ? `0% s/d ${t.to}%` : `> ${t.from}% s/d ${t.to}%`);
const fmtRp = (n) => `Rp\u00A0${Math.round(n).toLocaleString("id-ID")}`;
const rate = (r) => `${String(r).replace('.', ',')}%`;

/**
 * Hasil (estimasi) insentif bulan ym untuk TL, SA/SR, dan partner di area (null = semua). Target read-only (sumber TBD).
 * Baris: { kind, id, name, role, areaId, target, paidOutAmount, achievement, tier, components:[{label, amount, detail}], total, version, status }.
 */
export function computeIncentives(areaIds, ym) {
  const range = monthRange(ym);
  const paidIn = loans.filter((l) => l.status === 'PAID_OUT' && inArea(areaIds, l.areaId) && inP(wibDate(l.paidOutAt), range));
  const tgt = (storeIds) => [...new Set(storeIds)].reduce((a, id) => a + (targets[`${id}:${ym}`] ?? 0), 0);
  const days = (uid) => attendance.filter((a) => a.userId === uid && inP(a.date, range) && a.status !== 'ABSENT').length;
  const status = ym === CURRENT_MONTH ? 'ESTIMATE' : 'PAID';
  const rows = [];
  const group = (key) => { const m = new Map(); paidIn.forEach((l) => { const k = l[key]; if (k == null) return; m.set(k, [...(m.get(k) ?? []), l]); }); return m; };
  const person = (kind, id, ls, recipient, compKey, compLabel, extra) => {
    const u = userById(id); const v = versionFor(recipient, ym);
    const fee = v.components.find((c) => c.key === 'dailyFee'); const comp = v.components.find((c) => c.key === compKey);
    const paid = ls.reduce((a, l) => a + l.amount, 0); const target = tgt(ls.map((l) => l.storeId)); const ach = pct(paid, target); const t = tierFor(comp, ach); const d = days(id);
    const components = [{ label: 'Daily Fee', amount: d * fee.amount, detail: `${d} hari × ${fmtRp(fee.amount)}` }, { label: compLabel, amount: (paid * t.rate) / 100, detail: `Tarif ${rate(t.rate)}${extra}` }];
    rows.push({ kind, id, name: u.fullName, role: kind === 'TL' ? 'TL' : u.role, tlLevel: u.tlLevel, areaId: u.areaIds[0], target, paidOutAmount: paid, achievement: ach, tier: tierLabel(t), components, total: components.reduce((a, c) => a + c.amount, 0), version: v.version, status });
  };
  group('salesId').forEach((ls, id) => person('SALES', id, ls, userById(id).role, 'paidOut', 'Paid Out Incentive', ''));
  group('tlId').forEach((ls, id) => person('TL', id, ls, userById(id).tlLevel === 'SENIOR' ? 'TL_SENIOR' : 'TL_JUNIOR', 'leader', 'Leader Incentive', ' × paid out tim'));
  group('partnerId').forEach((ls, id) => {
    const p = findP(id); const paid = ls.reduce((a, l) => a + l.amount, 0); const target = tgt(ls.map((l) => l.storeId)); const ach = pct(paid, target);
    if (p.channel === 'NON_STORE') {
      const v = versionFor('PARTNER_AFFILIATE', ym); const c = v.components[0];
      const components = [{ label: c.label, amount: (paid * c.rate) / 100, detail: `${rate(c.rate)} dari disbursement` }];
      rows.push({ kind: 'PARTNER', id, name: p.partnerName, role: 'Partner', areaId: p.areaId, target, paidOutAmount: paid, achievement: ach, tier: '-', components, total: components[0].amount, version: v.version, status });
      return;
    }
    const v = versionFor('PARTNER_RETAIL', ym); const vol = v.components.find((c) => c.key === 'volume'); const col = v.components.find((c) => c.key === 'collection');
    const storeIds = [...new Set(ls.map((l) => l.storeId))];
    const m = storeIds.reduce((a, sid) => a + (mfp[`${sid}:${ym}`] ?? 0), 0) / storeIds.length;
    const tv = tierFor(vol, ach); const tc = tierFor(col, m);
    const components = [
      { label: 'Volume Incentive', amount: (paid * tv.rate) / 100, detail: `Tarif ${rate(tv.rate)}` },
      { label: 'Collection Incentive (MFP)', amount: (paid * tc.rate) / 100, detail: `MFP ${m.toFixed(1).replace('.', ',')}% · tier ${tierLabel(tc)} · tarif ${rate(tc.rate)}` },
    ];
    rows.push({ kind: 'PARTNER', id, name: p.partnerName, role: 'Partner', areaId: p.areaId, target, paidOutAmount: paid, achievement: ach, tier: tierLabel(tv), components, total: components.reduce((a, c) => a + c.amount, 0), version: v.version, status });
  });
  return rows.sort((a, b) => b.total - a.total);
}
/** Hasil insentif dengan filter { kind, role, area }. */
export async function incentiveResults(areaIds, ym, f = {}, { retry = false } = {}) {
  const empty = await listGate(retry);
  if (empty) return [];
  return computeIncentives(areaIds, ym).filter((r) => (!f.kind || r.kind === f.kind) && (!f.role || r.role === f.role) && (!f.area || r.areaId === Number(f.area)));
}

// ------------------------------------------------------------------ Skema insentif (Super Admin E1–E2)
const schemeView = (s) => ({
  ...clone(s), active: clone(versionFor(s.recipient, CURRENT_MONTH)),
  versions: s.versions.map((v) => ({ ...clone(v), status: versionStatus(s, v) })).sort((a, b) => b.version - a.version),
});
export async function listSchemes({ retry = false } = {}) {
  const empty = await listGate(retry);
  return empty ? [] : schemes.map(schemeView);
}
export async function getScheme(id) {
  await wait(150);
  return schemeView(schemes.find((x) => x.id === id));
}
/** "Buat Versi Baru": salin versi terbaru menjadi draf (atau kembalikan draf yang ada). */
export async function createDraft(id, session) {
  await wait(250);
  const s = schemes.find((x) => x.id === id);
  if (!s.draft) {
    const latest = [...s.versions].sort((a, b) => b.version - a.version)[0];
    s.draft = { payday: latest.payday, components: clone(latest.components), createdBy: actorOf(session), createdAt: now(), updatedAt: now() };
  }
  return schemeView(s);
}
export async function saveDraft(id, draft) {
  await wait(300);
  const s = schemes.find((x) => x.id === id);
  s.draft = { ...s.draft, payday: draft.payday, components: clone(draft.components), updatedAt: now() };
  return schemeView(s);
}
export async function discardDraft(id) {
  await wait(200);
  const s = schemes.find((x) => x.id === id);
  s.draft = null;
  return schemeView(s);
}
/** "Terbitkan": draf menjadi versi baru, berlaku mulai bulan depan atau setelahnya (tidak pernah mundur). */
export async function publishDraft(id, effectiveFrom, session) {
  await wait(500);
  const s = schemes.find((x) => x.id === id);
  if (!s.draft || effectiveFrom <= CURRENT_MONTH) throw new ApiError('CONFLICT');
  // Versi terjadwal di bulan yang sama atau setelahnya digantikan versi baru.
  s.versions = s.versions.filter((v) => !(v.effectiveFrom >= effectiveFrom && v.effectiveFrom > CURRENT_MONTH));
  const version = Math.max(0, ...s.versions.map((v) => v.version)) + 1;
  s.versions.push({ version, effectiveFrom, payday: s.draft.payday, components: s.draft.components, createdBy: s.draft.createdBy, createdAt: s.draft.createdAt, publishedBy: actorOf(session), publishedAt: now() });
  s.draft = null;
  return schemeView(s);
}

export const isFinal = (status) => FINAL_STATUSES.includes(status);
