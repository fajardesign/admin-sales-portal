import { useState } from 'react';
import { Alert, Button, ContentDivider, Icon, LinkButton, TextInput } from '@ds/index.js';
import { AuthCard, AuthHero, AuthLayout, StatusMessage } from '../components/AuthLayout.jsx';
import { ApiError, login } from '../api/mockApi.js';
import { DEMO_PASSWORD, users } from '../api/db.js';
import { DEMO } from '../lib/env.js';
import { preset } from '../dev/presets.js';

/** Pesan error login (PRD §1 tabel cek; identitas = email atau username sesuai keputusan Q1). */
const LOGIN_ERRORS = {
  INVALID: 'Email/username atau password salah. Silakan coba lagi.',
  DISABLED: 'Akun Anda tidak aktif. Hubungi Admin.',
  NOT_ACTIVATED: 'Akun belum diaktivasi. Cek email undangan Anda.',
  LOCKED: 'Akun terkunci sementara. Coba lagi dalam 15 menit.',
};

/** Akun contoh mode demo (password sama untuk semua). */
const DEMO_ACCOUNTS = [
  ['rina.saraswati', 'Admin (Reviewer)'],
  ['hasan.basri', 'APL · Makassar'],
  ['lestari.wulandari', 'APL · Bandung, Jakarta'],
  ['hendra.wijaya', 'Super Admin'],
  ['andi.pratama', 'TL → Akses ditolak'],
  [users.find((u) => u.role === 'PARTNER' && u.status === 'ACTIVE')?.username, 'Partner (PIC) → Akses ditolak'],
  ['fajar.nugroho', 'Pending → belum diaktivasi'],
  ['rizky.ramadhan', 'Disabled → akun tidak aktif'],
];

/** W1 · Login (Keycloak themed, realm sales-portal). */
export function Login({ onLoggedIn, notice }) {
  const init = preset?.login ?? {};
  const [loginId, setLoginId] = useState(init.loginId ?? '');
  const [password, setPassword] = useState(init.password ?? '');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(init.error ?? null);
  const [forgot, setForgot] = useState(false);
  const [outage, setOutage] = useState(init.outage ?? false);
  const valid = loginId.trim().length > 0 && password.length > 0;

  async function submit(e) {
    e.preventDefault();
    if (!valid || busy) return;
    setBusy(true);
    setError(null);
    try {
      const session = await login(loginId, password);
      setBusy(false);
      onLoggedIn(session);
    } catch (err) {
      setBusy(false);
      if (err instanceof ApiError && err.code === 'OUTAGE') { setOutage(true); return; }
      setPassword('');
      setError(err instanceof ApiError ? LOGIN_ERRORS[err.code] ?? LOGIN_ERRORS.INVALID : LOGIN_ERRORS.INVALID);
    }
  }

  // Halaman gangguan layanan (PRD v3: full-page error dengan "Coba lagi").
  if (outage) {
    return (
      <AuthLayout label="Sales & Partner Portal">
        <AuthCard center gap="var(--space-16)">
          <StatusMessage status="error" icon="ErrorWarningFill" title="Layanan tidak tersedia">Gagal memuat data. Coba lagi.</StatusMessage>
          <Button fullWidth leftIcon={<Icon name="RefreshLine" />} onClick={() => setOutage(false)}>Coba lagi</Button>
        </AuthCard>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout label="Sales & Partner Portal"
      footer={<><span>© 2026 Amar Bank</span><span>Didukung Keycloak · realm sales-portal</span></>}>
      <form onSubmit={submit} style={{ display: 'contents' }}>
        <AuthCard>
          <AuthHero icon="User6Line" title="Masuk ke S&P Portal" description="Masukkan email atau username dan password Anda." />
          <ContentDivider />
          {error && <Alert status="error" size="sm" title={error} />}
          {!error && notice && <Alert status="information" size="sm" title={notice} />}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
            <TextInput label="Email atau Username" required leftIcon="MailLine" placeholder="nama@amarbank.co.id atau username"
              value={loginId} onChange={(e) => setLoginId(e.target.value)} autoComplete="username" />
            <TextInput label="Password" required type="password" leftIcon="Lock2Line" placeholder="••••••••"
              value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
          </div>
          <Button type="submit" fullWidth disabled={!valid || busy}>{busy ? 'Memproses...' : 'Masuk'}</Button>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-8)' }}>
            <LinkButton onClick={() => setForgot((f) => !f)}>Lupa password?</LinkButton>
            {forgot && <Alert status="information" size="sm" title="Hubungi Admin untuk mengatur ulang password Anda." />}
          </div>
          {DEMO && !preset && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', padding: 'var(--space-12)', borderRadius: 'var(--rounded-10)', background: 'var(--bg-weak-50)' }}>
              <span style={{ font: 'var(--label-xs)', color: 'var(--text-sub-600)' }}>Mode demo · password semua akun: {DEMO_PASSWORD}</span>
              {DEMO_ACCOUNTS.map(([u, label]) => (
                <button key={u} type="button" onClick={() => { setLoginId(u); setPassword(DEMO_PASSWORD); setError(null); }}
                  style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-8)', border: 0, background: 'none', padding: 'var(--space-2) 0', cursor: 'pointer', font: 'var(--paragraph-xs)', color: 'var(--text-strong-950)', textAlign: 'left' }}>
                  <span>{u}</span><span style={{ color: 'var(--text-sub-600)' }}>{label}</span>
                </button>
              ))}
              <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-soft-400)' }}>Salah password 5 kali berturut-turut untuk melihat pesan akun terkunci.</span>
            </div>
          )}
        </AuthCard>
      </form>
    </AuthLayout>
  );
}
