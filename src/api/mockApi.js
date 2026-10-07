// Mock API — pengganti backend Sales Portal + Keycloak (realm sales-portal). Perilaku mengikuti PRD S&P Portal.
// Semua data di src/api/db.js (memori). Fungsi async dengan jeda kecil agar state loading terlihat.
import { getScenario } from '../dev/scenario.js';
import { normalizePhone } from '../lib/format.js';
import {
  ACCOUNT_STATUS, AREAS, CREATABLE_ROLES, FINAL_STATUSES, INVITE_TTL_MS, PAGE_SIZE, PARTNER_STATUS, ROLES, TRANSITIONS,
} from '../lib/constants.js';
import {
  attendance, CURRENT_MONTH, loanStats, mfp, MONTHS, now, partners, schemes, superAdmins, targets, users,
} from './db.js';

const TEST = import.meta.env.MODE === 'test';
const wait = (ms) => new Promise((r) => setTimeout(r, TEST ? 0 : ms));
const clone = (o) => structuredClone(o);

/** Bus perubahan data (mis. simulasi kirim ulang dari DevToolbar) agar layar terbuka memuat ulang. */
const listeners = new Set();
export const onDataChange = (fn) => { listeners.add(fn); return () => listeners.delete(fn); };
const emitChange = () => listeners.forEach((fn) => fn());

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
export const userById = (id) => users.find((u) => u.id === id) ?? superAdmins.find((u) => u.id === id);
/** Status akun Keycloak dengan Expired terhitung (PRD §3: Pending + tautan 24 jam lewat). */
export function accountStatus(u) {
  if (u.status === 'PENDING' && now() - u.inviteSentAt > INVITE_TTL_MS) return 'EXPIRED';
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
const WEB_ROLES = ['REVIEWER', 'APL', 'SUPER_ADMIN'];
const MAX_FAILS = 5;
const LOCK_MS = 15 * 60000;

/**
 * Login Keycloak: email atau username + password.
 * Error: LOCKED | INVALID | DISABLED | NOT_ACTIVATED. Role tanpa akses web tetap mendapat sesi (web menampilkan Akses ditolak).
 */
export async function login(identifier, password) {
  await wait(600);
  const id = identifier.trim().toLowerCase();
  const u = [...users, ...superAdmins].find((x) => x.email === id || x.username === id);
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
    areaIds: u.areaIds ?? [], webAccess: WEB_ROLES.includes(u.role), accessRoles: ROLES[u.role].keycloak,
  };
}
/** Sesi contoh untuk DevToolbar / preset. */
export const demoSession = (username) => sessionFor([...users, ...superAdmins].find((u) => u.username === username));

// ------------------------------------------------------------------ Partner Pipeline (W3)
function picAccount(p) {
  if (p.picAccountFailed) return { status: 'FAILED' };
  const u = users.find((x) => x.partnerId === p.id);
  return u ? { status: accountStatus(u), userId: u.id, username: u.username } : { status: 'NONE' };
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

/** Verifikasi manual Data Rekening (hanya Under Review). */
export async function setBankVerification(pid, verification, note, session) {
  await wait(250);
  const p = findP(pid);
  if (p.status !== 'UNDER_REVIEW') throw new ApiError('CONFLICT');
  Object.assign(p.bank, { verification, note: verification === 'NEEDS_REVISION' ? note : null, verifiedBy: actorOf(session), verifiedAt: now() });
  return enrich(p);
}

/** Jumlah dokumen wajib + rekening yang belum Valid (syarat "Verifikasi Selesai"). */
export function verificationGap(p) {
  const pending = p.documents.filter((d) => d.mandatory && d.verification !== 'VALID');
  const bankPending = p.bank.verification !== 'VALID';
  return { count: pending.length + (bankPending ? 1 : 0), flagged: pending.filter((d) => d.verification === 'NEEDS_REVISION').length + (p.bank.verification === 'NEEDS_REVISION' ? 1 : 0) };
}

/** US-P01 — Minta Revisi: items [{ kind: 'DOC'|'SEC', ref, label, note }]. */
export async function requestRevision(pid, items, general, session) {
  await wait(500);
  const p = findP(pid);
  if (!TRANSITIONS[p.status].includes('REVISION_REQUIRED')) throw new ApiError('CONFLICT');
  items.forEach((it) => {
    if (it.kind === 'DOC') Object.assign(p.documents.find((d) => d.key === it.ref), { verification: 'NEEDS_REVISION', note: it.note, verifiedBy: actorOf(session), verifiedAt: now() });
    if (it.kind === 'SEC' && it.ref === 'bank') Object.assign(p.bank, { verification: 'NEEDS_REVISION', note: it.note, verifiedBy: actorOf(session), verifiedAt: now() });
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
    reason = 'Seluruh dokumen wajib dan data rekening valid';
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
      if (it.ref === 'bank') { change('bank', 'accountNumber', 'No. Rekening', p.bank, 'accountNumber', String(Number(p.bank.accountNumber) + 3141)); Object.assign(p.bank, { verification: 'UNVERIFIED', note: null, verifiedBy: null, verifiedAt: null }); }
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

/** PRD §3A — daftar pengguna: status, cari (nama/username/email/telepon), role, area; terbaru di atas; 20 per halaman. */
export async function listUsers(q = {}, { retry = false } = {}) {
  const empty = await listGate(retry);
  if (empty) return { rows: [], total: 0, counts: { ALL: 0, PENDING: 0, EXPIRED: 0, ACTIVE: 0, DISABLED: 0 } };
  const term = (q.q ?? '').trim().toLowerCase();
  const rows = users.filter((u) => (!q.status || accountStatus(u) === q.status)
    && (!term || [u.fullName, u.username, u.email, u.phone].some((v) => v.toLowerCase().includes(term.replace(/^\+?62|^0/, ''))))
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
 * Error: DUPLICATE (field email/username, 409) | KEYCLOAK_FAILED.
 */
export async function createUser(form, session) {
  const { saveOutcome } = getScenario();
  await wait(900);
  const email = form.email.trim().toLowerCase();
  const username = form.username.trim().toLowerCase();
  if (!CREATABLE_ROLES.includes(form.role)) throw new ApiError('INVALID');
  if ([...users, ...superAdmins].some((u) => u.email === email)) throw new ApiError('DUPLICATE', 'email');
  if ([...users, ...superAdmins].some((u) => u.username === username)) throw new ApiError('DUPLICATE', 'username');
  if (saveOutcome === 'kcFail') throw new ApiError('KEYCLOAK_FAILED');
  const inviteSent = saveOutcome !== 'emailFail';
  const u = {
    id: Math.max(...users.map((x) => x.id)) + 1, fullName: form.fullName.trim(), role: form.role, username, email,
    phone: normalizePhone(form.phone), tlLevel: form.role === 'TL' ? form.tlLevel : null,
    areaIds: form.role === 'REVIEWER' ? [] : form.areaIds, supervisorId: form.leaderId ? Number(form.leaderId) : null, partnerId: null,
    status: 'PENDING', inviteSentAt: now(), inviteResendCount: 0, activatedAt: null, disabledAt: null, disabledBy: null, disabledReason: null,
    createdBy: actorOf(session), createdAt: now(), password: null, fails: 0, lockUntil: null,
    log: [{ at: now(), text: inviteSent ? `Akun dibuat di Keycloak, tautan aktivasi dikirim ke ${email}` : 'Akun dibuat di Keycloak, email undangan gagal dikirim' }],
  };
  users.push(u);
  return { user: enrichUser(u), inviteSent };
}

/** Kirim ulang tautan aktivasi (Pending/Expired) — tautan lama tidak berlaku, hitung mundur 24 jam diulang. */
export async function resendInvite(id, session) {
  await wait(500);
  const u = userById(id);
  if (!['PENDING', 'EXPIRED'].includes(accountStatus(u))) throw new ApiError('CONFLICT');
  Object.assign(u, { status: 'PENDING', inviteSentAt: now(), inviteResendCount: u.inviteResendCount + 1 });
  u.log.push({ at: now(), text: `Tautan aktivasi dikirim ulang oleh ${actorOf(session)} (tautan lama tidak berlaku)` });
  return enrichUser(u);
}

/** Nonaktifkan akun (final). Admin tidak bisa menonaktifkan akunnya sendiri. */
export async function disableUser(id, reason, session) {
  await wait(500);
  const u = userById(id);
  if (u.id === session.userId || u.status === 'DISABLED') throw new ApiError('CONFLICT');
  Object.assign(u, { status: 'DISABLED', disabledAt: now(), disabledBy: actorOf(session), disabledReason: reason });
  u.log.push({ at: now(), text: `Akun dinonaktifkan: ${reason}` });
  return enrichUser(u);
}

// ------------------------------------------------------------------ Aktivasi (KC1)
/** status: valid | expired | already. Tanpa userId → skenario DevToolbar dengan pengguna contoh. */
export async function checkActivation(userId) {
  await wait(200);
  const u = userId ? userById(userId) : users.find((x) => x.id === 10);
  if (!userId) return { status: getScenario().activationState, user: { id: u.id, fullName: u.fullName, username: u.username, email: u.email, role: u.role } };
  const st = accountStatus(u);
  const status = st === 'ACTIVE' ? 'already' : st === 'PENDING' ? 'valid' : 'expired';
  return { status, user: { id: u.id, fullName: u.fullName, username: u.username, email: u.email, role: u.role } };
}

export async function activateAccount(userId, password) {
  await wait(500);
  const u = userId ? userById(userId) : null;
  if (u && accountStatus(u) === 'PENDING') {
    Object.assign(u, { status: 'ACTIVE', activatedAt: u.activatedAt ?? now(), password });
    u.log.push({ at: now(), text: 'Password dibuat, akun aktif' });
  }
  return { ok: true };
}

// ------------------------------------------------------------------ APL (A1–A5)
const sumStats = (rows) => rows.reduce((a, r) => ({
  submitted: a.submitted + r.submitted, accepted: a.accepted + r.accepted, paidOutApps: a.paidOutApps + r.paidOutApps,
  paidOutUnits: a.paidOutUnits + r.paidOutUnits, paidOutAmount: a.paidOutAmount + r.paidOutAmount,
}), { submitted: 0, accepted: 0, paidOutApps: 0, paidOutUnits: 0, paidOutAmount: 0 });

export const perfMonths = () => MONTHS;
export const currentMonth = () => CURRENT_MONTH;

/** A2 — toko aktif milik partner Active di area APL. */
export async function aplStores(areaIds, q = {}, { retry = false } = {}) {
  const empty = await listGate(retry);
  if (empty) return [];
  const term = (q.q ?? '').trim().toLowerCase();
  return partners.filter((p) => p.status === 'ACTIVE' && inArea(areaIds, p.areaId) && (!q.area || p.areaId === Number(q.area)))
    .flatMap((p) => p.stores.filter((s) => s.status === 'ACTIVE').map((s) => {
      const sales = s.assigned.map(userById).filter(Boolean);
      const tl = sales[0] ? userById(sales[0].supervisorId) : users.find((u) => u.role === 'TL' && u.areaIds.includes(p.areaId) && u.status === 'ACTIVE');
      return {
        id: s.id, storeName: s.name, storeCode: s.code, partnerId: p.id, partnerName: p.partnerName, areaId: p.areaId,
        picName: p.pic.name, picEmail: p.pic.email, picPhone: p.pic.phone, address: s.address, lat: s.lat, lng: s.lng,
        activeSince: new Date(Math.max(p.activatedAt, s.addedAt)),
        sales: sales.map((u) => ({ id: u.id, name: u.fullName, role: u.role })), tl: tl ? { id: tl.id, name: tl.fullName } : null,
      };
    }))
    .filter((r) => !term || [r.storeName, r.partnerName, r.picName].some((v) => v.toLowerCase().includes(term)))
    .sort((a, b) => b.activeSince - a.activeSince);
}

/** A3 — TL & SA/SR aktif di bawah APL (hierarki APL → TL → SA/SR). */
export async function aplTeam(aplId, q = {}, { retry = false } = {}) {
  const empty = await listGate(retry);
  if (empty) return [];
  const tls = users.filter((u) => u.role === 'TL' && u.supervisorId === aplId && u.status === 'ACTIVE');
  const tlIds = tls.map((t) => t.id);
  const sales = users.filter((u) => ['SA', 'SR'].includes(u.role) && tlIds.includes(u.supervisorId) && u.status === 'ACTIVE');
  const term = (q.q ?? '').trim().toLowerCase();
  return [...tls, ...sales]
    .filter((u) => (!q.role || u.role === q.role) && (!term || [u.fullName, u.email].some((v) => v.toLowerCase().includes(term))))
    .map((u) => ({
      id: u.id, name: u.fullName, role: u.role, tlLevel: u.tlLevel, areaId: u.areaIds[0], email: u.email, phone: u.phone,
      registeredAt: u.activatedAt, leader: u.supervisorId ? userById(u.supervisorId).fullName : null,
      stores: partners.flatMap((p) => p.stores.filter((s) => s.assigned.includes(u.id) && s.status === 'ACTIVE')).length,
    }))
    .sort((a, b) => ['TL', 'SR', 'SA'].indexOf(a.role) - ['TL', 'SR', 'SA'].indexOf(b.role) || a.name.localeCompare(b.name));
}

/**
 * A1/A4 — performa pipeline pinjaman (submitted, accepted, paid out apps, paid out unit, paid out amount).
 * months: daftar 'YYYY-MM'. Return total, tren bulanan, breakdown per area/TL/SA-SR/toko.
 */
export async function aplPerformance(areaIds, months, { retry = false } = {}) {
  const empty = await listGate(retry);
  const scope = empty ? [] : loanStats.filter((l) => inArea(areaIds, l.areaId));
  const inRange = scope.filter((l) => months.includes(l.month));
  const group = (keyFn, labelFn, kind) => {
    const m = new Map();
    inRange.forEach((l) => { const k = keyFn(l); if (k == null) return; if (!m.has(k)) m.set(k, []); m.get(k).push(l); });
    return [...m.entries()].map(([k, rows]) => ({ id: k, ...labelFn(k, rows), ...sumStats(rows), target: kind ? months.reduce((t, ym) => t + (targets[`${kind}:${k}:${ym}`] ?? 0), 0) : null }))
      .sort((a, b) => b.paidOutAmount - a.paidOutAmount);
  };
  const storeInfo = (id) => { const p = partners.find((x) => x.stores.some((s) => s.id === id)); return { p, s: p.stores.find((s) => s.id === id) }; };
  return {
    total: sumStats(inRange),
    trend: MONTHS.map((ym) => ({ month: ym, ...sumStats(scope.filter((l) => l.month === ym)) })),
    byArea: group((l) => l.areaId, (k) => ({ name: AREAS.find((a) => a.id === k).name })),
    byTl: group((l) => l.tlId, (k) => { const u = userById(k); return { name: u.fullName, role: 'TL', tlLevel: u.tlLevel, areaId: u.areaIds[0] }; }, 'tl'),
    bySales: group((l) => l.salesId, (k) => { const u = userById(k); return { name: u.fullName, role: u.role, areaId: u.areaIds[0], leader: userById(u.supervisorId)?.fullName }; }, 'sales'),
    byStore: group((l) => l.storeId, (k) => { const { p, s } = storeInfo(k); return { name: s.name, partnerName: p.partnerName, areaId: p.areaId, sales: s.assigned.map((id) => userById(id)?.fullName).join(', ') || null }; }, 'store'),
  };
}

/** Tarif tier: "above" → pencapaian > batas; "below" → nilai < batas. Tanpa tier yang cocok → 0. */
export function tierRate(component, value) {
  if (component.type === 'tierAbove') return [...component.tiers].sort((a, b) => b.above - a.above).find((t) => value > t.above)?.rate ?? 0;
  if (component.type === 'tierBelow') return [...component.tiers].sort((a, b) => a.below - b.below).find((t) => value < t.below)?.rate ?? 0;
  return 0;
}
/** Skema yang berlaku pada bulan tertentu (berlaku mulai ≤ bulan). */
function schemeFor(recipient, ym) {
  const s = schemes.find((x) => x.recipient === recipient);
  const version = [s, ...(s.previous ?? [])].find((v) => v.effectiveFrom <= ym) ?? s;
  return version;
}

/**
 * A5 — estimasi insentif bulan ym.
 * SA/SR: daily fee × hari hadir + tier paid out × total paid out. Partner/Toko (offline retailer): volume tier + collection (MFP) tier × paid out toko.
 */
export async function aplIncentives(areaIds, ym, { retry = false } = {}) {
  const empty = await listGate(retry);
  const rows = empty ? [] : loanStats.filter((l) => inArea(areaIds, l.areaId) && l.month === ym);
  const sales = new Map();
  rows.filter((l) => l.salesId).forEach((l) => { sales.set(l.salesId, [...(sales.get(l.salesId) ?? []), l]); });
  const salesRows = [...sales.entries()].map(([id, ls]) => {
    const u = userById(id);
    const sc = schemeFor(u.role, ym);
    const fee = sc.components.find((c) => c.key === 'dailyFee');
    const po = sc.components.find((c) => c.key === 'paidOut');
    const paid = ls.reduce((a, l) => a + l.paidOutAmount, 0);
    const target = targets[`sales:${id}:${ym}`] ?? 0;
    const achievement = target ? (paid / target) * 100 : 0;
    const rate = tierRate(po, achievement);
    const days = attendance[`${id}:${ym}`] ?? 0;
    const dailyFee = days * fee.amount;
    const paidOutIncentive = (paid * rate) / 100;
    return { id, name: u.fullName, role: u.role, areaId: u.areaIds[0], stores: ls.length, target, paidOutAmount: paid, achievement, rate, days, feePerDay: fee.amount, dailyFee, paidOutIncentive, total: dailyFee + paidOutIncentive };
  }).sort((a, b) => b.total - a.total);
  const storeRows = rows.map((l) => {
    const p = partners.find((x) => x.id === l.partnerId);
    const s = p.stores.find((x) => x.id === l.storeId);
    const sc = schemeFor('PARTNER_RETAIL', ym);
    const vol = sc.components.find((c) => c.key === 'volume');
    const col = sc.components.find((c) => c.key === 'collection');
    const target = targets[`store:${l.storeId}:${ym}`] ?? 0;
    const achievement = target ? (l.paidOutAmount / target) * 100 : 0;
    const mfpPct = mfp[`${l.storeId}:${ym}`];
    const volRate = tierRate(vol, achievement);
    const colRate = tierRate(col, mfpPct);
    const volumeIncentive = (l.paidOutAmount * volRate) / 100;
    const collectionIncentive = (l.paidOutAmount * colRate) / 100;
    return { id: l.storeId, name: s.name, partnerName: p.partnerName, areaId: p.areaId, target, paidOutAmount: l.paidOutAmount, achievement, volRate, mfp: mfpPct, colRate, volumeIncentive, collectionIncentive, total: volumeIncentive + collectionIncentive };
  }).sort((a, b) => b.total - a.total);
  return { sales: salesRows, stores: storeRows, payday: { sales: schemeFor('SA', ym).payday, partner: schemeFor('PARTNER_RETAIL', ym).payday } };
}

// ------------------------------------------------------------------ Skema insentif (S1–S2)
export async function listSchemes({ retry = false } = {}) {
  const empty = await listGate(retry);
  return empty ? [] : clone(schemes.map((s) => ({ ...s, previous: undefined })));
}

/**
 * Ubah skema: patch { payday, effectiveFrom, components }. Versi lama disimpan agar bulan sebelum "berlaku mulai" tetap memakai tarif lama.
 */
export async function updateScheme(id, patch, session) {
  await wait(600);
  const s = schemes.find((x) => x.id === id);
  const prevVersion = clone({ ...s, previous: undefined, history: undefined });
  const changes = [];
  if (patch.payday !== s.payday) changes.push(`tanggal bayar ${s.payday} → ${patch.payday}`);
  patch.components.forEach((c, i) => {
    const o = s.components[i];
    if (c.type === 'fixed' && c.amount !== o.amount) changes.push(`${c.label} Rp ${o.amount.toLocaleString('id-ID')} → Rp ${c.amount.toLocaleString('id-ID')}`);
    if (c.type === 'percent' && c.rate !== o.rate) changes.push(`${c.label} ${o.rate}% → ${c.rate}%`);
    if (c.tiers && JSON.stringify(c.tiers) !== JSON.stringify(o.tiers)) changes.push(`tier ${c.label}`);
  });
  s.previous = [prevVersion, ...(s.previous ?? [])];
  Object.assign(s, { payday: patch.payday, effectiveFrom: patch.effectiveFrom, components: clone(patch.components), updatedAt: now(), updatedBy: actorOf(session) });
  s.history.unshift({ at: now(), by: actorOf(session), text: `Diubah, berlaku mulai ${patch.effectiveFrom}: ${changes.join('; ') || 'tanpa perubahan nilai'}` });
  return clone({ ...s, previous: undefined });
}

export const isFinal = (status) => FINAL_STATUSES.includes(status);
