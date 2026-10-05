import { DEMO } from '../lib/env.js';
import { setScenario } from './scenario.js';

/**
 * Preset state layar untuk dokumentasi/capture ke Figma (hanya mode demo).
 * Buka `/?preset=<nama>` — rute, skenario mock, dan state awal komponen langsung terisi,
 * DevToolbar disembunyikan. Nama preset mengikuti penamaan frame Figma.
 */
const FILLED = { email: 'budi.santoso@amarbank.co.id', phone: '81299998888', firstName: 'Budi', lastName: 'Santoso' };
const ALL_TOUCHED = { email: true, phone: true, firstName: true, lastName: true };
const NEW_USER = { id: 999, firstName: 'Budi', lastName: 'Santoso', email: 'budi.santoso@amarbank.co.id', phone: '81299998888', active: false, createdAt: new Date('2026-10-05T04:30:00Z') };

export const PRESETS = {
  'login': { name: '01 | Admin Login', route: '/login' },
  'login-filled': { name: '01 | Admin Login | Filled', route: '/login', login: { loginId: 'rina.saraswati@amarbank.co.id', password: 'rahasia123' } },
  'denied': { name: '01 | Admin Login | Akses Ditolak', route: '/denied' },
  'users': { name: '02 | Account Management', route: '/users' },
  'users-loading': { name: '02 | Account Management | Loading', route: '/users', scenario: { tableState: 'loading' } },
  'users-empty': { name: '02 | Account Management | Empty', route: '/users', scenario: { tableState: 'empty' } },
  'users-error': { name: '02 | Account Management | Error | Failed to Load Data', route: '/users', scenario: { tableState: 'error' } },
  'users-created': { name: '02 | Account Management | Success | User Created', route: '/users', users: { newUser: NEW_USER }, toast: ['success', 'Pengguna berhasil dibuat. Undangan aktivasi telah dikirim.'] },
  'users-invite-failed': { name: '02 | Account Management | Warning | Invitation Email Failed', route: '/users', users: { newUser: NEW_USER }, toast: ['warning', 'Pengguna dibuat, tetapi email undangan gagal dikirim. Hubungi tim teknis.'] },
  'add-user': { name: '03 | Add User', route: '/users', users: { modalOpen: true } },
  'add-user-filled': { name: '03 | Add User | Filled', route: '/users', users: { modalOpen: true }, addUser: { form: FILLED } },
  'add-user-incomplete': { name: '03 | Add User | Error | Incomplete Information', route: '/users', users: { modalOpen: true }, addUser: { form: { ...FILLED, phone: '', lastName: '' }, touched: ALL_TOUCHED } },
  'add-user-invalid': { name: '03 | Add User | Error | Invalid Format', route: '/users', users: { modalOpen: true }, addUser: { form: { ...FILLED, email: 'budi.santoso@amarbank', phone: '0212345' }, touched: ALL_TOUCHED } },
  'add-user-saving': { name: '03 | Add User | Loading', route: '/users', users: { modalOpen: true }, addUser: { form: FILLED, saving: true } },
  'add-user-dup-email': { name: '03 | Add User | Error | Duplicate Email', route: '/users', users: { modalOpen: true }, addUser: { form: { ...FILLED, email: 'dimas.pratama@amarbank.co.id' }, serverErr: { email: 'Email sudah terdaftar' } } },
  'add-user-dup-phone': { name: '03 | Add User | Error | Duplicate Phone', route: '/users', users: { modalOpen: true }, addUser: { form: { ...FILLED, phone: '81234567890' }, serverErr: { phone: 'Nomor telepon sudah terdaftar' } } },
  'add-user-kc-failed': { name: '03 | Add User | Error | Account Creation Failed', route: '/users', users: { modalOpen: true }, addUser: { form: FILLED }, toast: ['error', 'Gagal membuat akun. Coba lagi.'] },
  'add-user-confirm-cancel': { name: '03 | Add User | Confirm Cancel', route: '/users', users: { modalOpen: true }, addUser: { form: FILLED, confirmOpen: true } },
  'activate': { name: '04 | Account Activation', route: '/activate' },
  'activate-policy': { name: '04 | Account Activation | Error | Password Policy', route: '/activate', activation: { pw: 'rahasia', pw2: 'rahasia1', submitted: true, touched2: true } },
  'activate-success': { name: '04 | Account Activation | Success', route: '/activate', activation: { done: true } },
  'activate-expired': { name: '04 | Account Activation | Error | Link Expired', route: '/activate', scenario: { activationState: 'expired' } },
  'activate-already': { name: '04 | Account Activation | Already Active', route: '/activate', scenario: { activationState: 'already' } },
};

const key = DEMO && typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('preset') : null;
/** Preset aktif (atau null). Dibaca sekali saat load. */
export const preset = (key && PRESETS[key]) || null;

if (preset?.scenario) setScenario(preset.scenario);
if (preset && typeof document !== 'undefined') document.title = preset.name;
