import { useEffect, useState } from 'react';
import { Button, ContentDivider, Icon, TextInput } from '@ds/index.js';
import { AuthCard, AuthHero, AuthLayout, StatusMessage } from '../components/AuthLayout.jsx';
import { activateAccount, checkActivation } from '../api/mockApi.js';
import { useScenario } from '../dev/scenario.js';
import { passwordPolicy } from '../lib/validation.js';
import { preset } from '../dev/presets.js';

/** Pesan Keycloak (PRD §3C Activation). */
const MESSAGES = {
  expired: { status: 'error', icon: 'TimeLine', title: 'Tautan tidak berlaku', body: 'Tautan aktivasi sudah kedaluwarsa. Hubungi Admin Anda.' },
  already: { status: 'information', icon: 'InformationLine', title: 'Akun sudah aktif', body: 'Akun Anda sudah aktif. Silakan masuk melalui aplikasi.' },
  done: { status: 'success', icon: 'ShieldCheckLine', title: 'Aktivasi berhasil', body: 'Akun Anda sudah aktif. Silakan masuk melalui aplikasi.' },
};

/**
 * KC1 · Aktivasi akun (web view Keycloak dari tautan undangan email).
 * `#/activate?user=<id>` memakai status akun sebenarnya; tanpa parameter memakai skenario DevToolbar.
 */
export function Activation({ userId, onBackToLogin }) {
  const { activationState } = useScenario();
  return <ActivationView key={`${userId}-${activationState}`} userId={userId} onBackToLogin={onBackToLogin} />;
}

function ActivationView({ userId, onBackToLogin }) {
  const [link, setLink] = useState(null);
  const init = preset?.activation ?? {};
  const [pw, setPw] = useState(init.pw ?? '');
  const [pw2, setPw2] = useState(init.pw2 ?? '');
  const [touched2, setTouched2] = useState(init.touched2 ?? false);
  const [submitted, setSubmitted] = useState(init.submitted ?? false);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(init.done ?? false);

  useEffect(() => { checkActivation(userId).then(setLink); }, [userId]);

  if (!link) return <AuthLayout label="Sales & Partner Portal" />;

  const checks = passwordPolicy(pw, link.user.username);
  const pwOk = checks.every((c) => c.ok);
  const matchOk = pw2.length > 0 && pw2 === pw;
  const msg = done ? MESSAGES.done : MESSAGES[link.status];

  async function submit(e) {
    e.preventDefault();
    if (!pwOk || !matchOk) { setSubmitted(true); setTouched2(true); return; }
    setBusy(true);
    await activateAccount(userId, pw);
    setBusy(false);
    setDone(true);
  }

  return (
    <AuthLayout label="Sales & Partner Portal">
      {msg ? (
        <AuthCard center gap="var(--space-16)">
          <StatusMessage status={msg.status} icon={msg.icon} title={msg.title}>{msg.body}</StatusMessage>
          {onBackToLogin && <Button variant="stroke" tone="neutral" fullWidth onClick={onBackToLogin}>Ke halaman masuk</Button>}
        </AuthCard>
      ) : (
        <form onSubmit={submit} style={{ display: 'contents' }}>
          <AuthCard>
            <AuthHero icon="Lock2Line" title="Aktivasi akun Anda" description={`Halo ${link.user.fullName.split(' ')[0]}, buat password untuk ${link.user.email}`} />
            <ContentDivider />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
              <TextInput label="Password Baru" required type="password" leftIcon="Lock2Line" placeholder="••••••••" autoComplete="new-password"
                value={pw} onChange={(e) => setPw(e.target.value)}
                error={submitted && !pwOk ? 'Password belum memenuhi ketentuan' : undefined} />
              <ul aria-label="Ketentuan password" style={{ listStyle: 'none', margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6) var(--space-12)', padding: 'var(--space-12)', borderRadius: 'var(--rounded-10)', background: 'var(--bg-weak-50)' }}>
                {checks.map((c) => (
                  <li key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)', font: 'var(--paragraph-xs)', color: c.ok ? 'var(--state-success-base)' : 'var(--text-sub-600)' }}>
                    <Icon name={c.ok ? 'CheckLine' : 'CloseLine'} size={16} />
                    <span>{c.label}</span>
                  </li>
                ))}
              </ul>
              <TextInput label="Konfirmasi Password" required type="password" leftIcon="Lock2Line" placeholder="••••••••" autoComplete="new-password"
                value={pw2} onChange={(e) => { setPw2(e.target.value); setTouched2(true); }}
                error={(touched2 || submitted) && pw2.length > 0 && !matchOk ? 'Password tidak sama' : undefined} />
            </div>
            <Button type="submit" fullWidth disabled={!pw || !pw2 || busy}>{busy ? 'Memproses...' : 'Simpan'}</Button>
          </AuthCard>
        </form>
      )}
    </AuthLayout>
  );
}
