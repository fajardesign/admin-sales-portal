// Mock API — ganti dengan integrasi Keycloak + backend Sales Portal.
// Perilaku mengikuti prototipe "Sales Portal Web" (lihat knowledge-bundle/flows/).
import { getScenario } from '../dev/scenario.js';
import { normalizePhone } from '../lib/format.js';

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

let users = [
  { id: 1, firstName: 'Dimas', lastName: 'Pratama', email: 'dimas.pratama@amarbank.co.id', phone: '81234567890', active: false, createdAt: new Date('2026-10-02T03:15:00Z') },
  { id: 2, firstName: 'Siti', lastName: 'Rahmawati', email: 'siti.rahmawati@amarbank.co.id', phone: '85711223344', active: true, createdAt: new Date('2026-10-01T08:42:00Z') },
  { id: 3, firstName: 'Andreas', lastName: 'Wijaya', email: 'andreas.wijaya@amarbank.co.id', phone: '81398765432', active: true, createdAt: new Date('2026-09-30T02:05:00Z') },
  { id: 4, firstName: 'Putri', lastName: 'Lestari', email: 'putri.lestari@amarbank.co.id', phone: '87855667788', active: false, createdAt: new Date('2026-09-29T06:30:00Z') },
  { id: 5, firstName: 'Rizky', lastName: 'Hidayat', email: 'rizky.hidayat@amarbank.co.id', phone: '81122334455', active: true, createdAt: new Date('2026-09-28T01:20:00Z') },
];

export class ApiError extends Error {
  constructor(code, field) { super(code); this.code = code; this.field = field; }
}

/** W1 — login via Keycloak (realm sales-portal). Demo: local-part berisi "tl" → role TL (tidak punya akses web). */
export async function login(loginId) {
  await wait(700);
  const role = /tl/i.test(loginId.split('@')[0]) ? 'TL' : 'ADMIN';
  return role === 'ADMIN'
    ? { loginId, role, name: 'Rina Saraswati', roleLabel: 'Admin' }
    : { loginId, role };
}

/** W2a — daftar Team Leader, terbaru di atas. Skenario error/empty diabaikan saat retry (seperti prototipe). */
export async function listTeamLeaders({ retry = false } = {}) {
  const { tableState } = getScenario();
  await wait(900);
  if (!retry && tableState === 'error') throw new ApiError('LOAD_FAILED');
  if (!retry && tableState === 'empty') return [];
  return [...users].sort((a, b) => b.createdAt - a.createdAt);
}

/**
 * W2b — buat akun TL di Keycloak + kirim undangan aktivasi.
 * Return { user, inviteSent }. Error: DUPLICATE (field email/phone) atau KEYCLOAK_FAILED.
 */
export async function createTeamLeader(form) {
  const { saveOutcome } = getScenario();
  await wait(1200);
  const email = form.email.trim().toLowerCase();
  const phone = normalizePhone(form.phone);
  if (saveOutcome === 'dupEmail' || users.some((u) => u.email === email)) throw new ApiError('DUPLICATE', 'email');
  if (saveOutcome === 'dupPhone' || users.some((u) => u.phone === phone)) throw new ApiError('DUPLICATE', 'phone');
  if (saveOutcome === 'kcFail') throw new ApiError('KEYCLOAK_FAILED');
  const user = { id: Date.now(), firstName: form.firstName.trim(), lastName: form.lastName.trim(), email, phone, active: false, createdAt: new Date() };
  users = [user, ...users];
  return { user, inviteSent: saveOutcome !== 'emailFail' };
}

/** KC1 — cek tautan aktivasi. status: valid | expired | already. */
export async function checkActivation() {
  const { activationState } = getScenario();
  return { status: activationState, email: 'dimas.pratama@amarbank.co.id' };
}

export async function activateAccount() {
  await wait(600);
  return { ok: true };
}
