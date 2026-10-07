import { DEMO } from '../lib/env.js';
import { setScenario } from './scenario.js';

/**
 * Preset state layar untuk dokumentasi/capture (hanya mode demo).
 * Buka `/?preset=<nama>` — rute, sesi, skenario mock, dan state awal komponen langsung terisi; DevToolbar disembunyikan.
 */
export const PRESETS = {
  'login': { name: 'W1 | Login', route: '/login' },
  'login-error': { name: 'W1 | Login | Error | Wrong Credential', route: '/login', login: { loginId: 'rina.saraswati', error: 'Email/username atau password salah. Silakan coba lagi.' } },
  'login-locked': { name: 'W1 | Login | Error | Locked', route: '/login', login: { loginId: 'rina.saraswati', error: 'Akun terkunci sementara. Coba lagi dalam 15 menit.' } },
  'denied': { name: 'W1 | Access Denied', route: '/denied', session: 'andi.pratama' },
  'beranda': { name: 'W0 | Admin Home', route: '/beranda', session: 'rina.saraswati' },
  'pipeline': { name: 'W3a | Partner Pipeline', route: '/partner-pipeline', session: 'rina.saraswati' },
  'pipeline-all': { name: 'W3a | Partner Pipeline | All', route: '/partner-pipeline?status=semua', session: 'rina.saraswati' },
  'pipeline-loading': { name: 'W3a | Partner Pipeline | Loading', route: '/partner-pipeline', session: 'rina.saraswati', scenario: { tableState: 'loading' } },
  'pipeline-empty': { name: 'W3a | Partner Pipeline | Empty', route: '/partner-pipeline', session: 'rina.saraswati', scenario: { tableState: 'empty' } },
  'pipeline-error': { name: 'W3a | Partner Pipeline | Error', route: '/partner-pipeline', session: 'rina.saraswati', scenario: { tableState: 'error' } },
  'detail-review': { name: 'W3b | Partner Detail | Under Review', route: '/partner-pipeline/REG2026-0147', session: 'rina.saraswati' },
  'detail-docs': { name: 'W3b | Partner Detail | Documents', route: '/partner-pipeline/REG2026-0147', session: 'rina.saraswati', detail: { tab: 'docs' } },
  'detail-revision': { name: 'W3c | Request Revision', route: '/partner-pipeline/REG2026-0146', session: 'rina.saraswati', detail: { revision: true } },
  'detail-verify': { name: 'W3d | Change Status | Verified', route: '/partner-pipeline/REG2026-0148', session: 'rina.saraswati', detail: { action: 'VERIFIED' } },
  'detail-pks-sent': { name: 'W3d | Change Status | PKS Sent', route: '/partner-pipeline/REG2026-0142', session: 'rina.saraswati', detail: { action: 'WAITING_PKS' } },
  'detail-activate': { name: 'W3d | Change Status | Activate', route: '/partner-pipeline/REG2026-0140', session: 'rina.saraswati', detail: { action: 'ACTIVE' } },
  'detail-active-stores': { name: 'W3b | Partner Detail | Stores', route: '/partner-pipeline/REG2026-0139', session: 'rina.saraswati', detail: { tab: 'stores' } },
  'users': { name: 'W2a | Account Management', route: '/account-management', session: 'rina.saraswati' },
  'add-user': { name: 'W2b | Add User', route: '/account-management', session: 'rina.saraswati', users: { adding: true } },
  'add-user-tl': { name: 'W2b | Add User | TL', route: '/account-management', session: 'rina.saraswati', users: { adding: true }, addUser: { form: { email: 'gilang.ramadhan@amarbank.co.id', phone: '81277776666', username: 'gilang.ramadhan', fullName: 'Gilang Ramadhan', role: 'TL', tlLevel: 'JUNIOR', areaIds: [2], leaderId: '4' } } },
  'add-user-no-leader': { name: 'W2b | Add User | Error | No Leader', route: '/account-management', session: 'rina.saraswati', users: { adding: true }, addUser: { form: { role: 'TL', areaIds: [6] } } },
  'activate': { name: 'KC1 | Account Activation', route: '/activate?user=10' },
  'activate-expired': { name: 'KC1 | Account Activation | Expired', route: '/activate?user=14' },
  'apl': { name: 'A1 | APL Summary', route: '/apl', session: 'lestari.wulandari' },
  'apl-performance': { name: 'A4 | APL Performance', route: '/apl/performa?tab=sales', session: 'lestari.wulandari' },
  'apl-incentive': { name: 'A5 | APL Incentive', route: '/apl/insentif?m=2026-09', session: 'hasan.basri' },
  'apl-stores': { name: 'A2 | APL Partner & Toko', route: '/apl/partner', session: 'hasan.basri' },
  'apl-team': { name: 'A3 | APL Team', route: '/apl/tim', session: 'hasan.basri' },
  'schemes': { name: 'S1 | Incentive Schemes', route: '/skema-insentif', session: 'hendra.wijaya' },
  'scheme-edit': { name: 'S2 | Incentive Scheme | Edit', route: '/skema-insentif', session: 'hendra.wijaya', scheme: { open: 'SA', editing: true } },
};

const key = DEMO && typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('preset') : null;
/** Preset aktif (atau null). Dibaca sekali saat load. */
export const preset = (key && PRESETS[key]) || null;

if (preset?.scenario) setScenario(preset.scenario);
if (preset && typeof document !== 'undefined') document.title = preset.name;
