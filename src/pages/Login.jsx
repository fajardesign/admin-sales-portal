import { useState } from 'react';
import { Button, ContentDivider, TextInput } from '@ds/index.js';
import { AuthCard, AuthHero, AuthLayout } from '../components/AuthLayout.jsx';
import { login } from '../api/mockApi.js';

/** W1 · Login Admin (Keycloak themed, realm sales-portal). */
export function Login({ onLoggedIn }) {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const valid = loginId.trim().length > 0 && password.length > 0;

  async function submit(e) {
    e.preventDefault();
    if (!valid || busy) return;
    setBusy(true);
    const session = await login(loginId.trim(), password);
    setBusy(false);
    setPassword('');
    onLoggedIn(session);
  }

  return (
    <AuthLayout label="Sales Portal · Admin"
      footer={<><span>© 2026 Amar Bank</span><span>Didukung Keycloak · realm sales-portal</span></>}>
      <form onSubmit={submit} style={{ display: 'contents' }}>
        <AuthCard>
          <AuthHero icon="User6Line" title="Masuk ke Sales Portal" description="Masukkan email atau nomor telepon dan password Anda." />
          <ContentDivider />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
            <TextInput label="Email atau Nomor Telepon" required leftIcon="MailLine" placeholder="nama@amarbank.co.id atau 0812..."
              value={loginId} onChange={(e) => setLoginId(e.target.value)} autoComplete="username" />
            <TextInput label="Password" required type="password" leftIcon="Lock2Line" placeholder="••••••••"
              value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
          </div>
          <Button type="submit" fullWidth disabled={!valid || busy}>{busy ? 'Memproses...' : 'Masuk'}</Button>
          {import.meta.env.DEV && (
            <div style={{ padding: 'var(--space-10) var(--space-12)', borderRadius: 'var(--rounded-10)', background: 'var(--bg-weak-50)', font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>
              Demo: email berisi "tl" menampilkan halaman Akses ditolak; lainnya masuk ke Manajemen Akun.
            </div>
          )}
        </AuthCard>
      </form>
    </AuthLayout>
  );
}
