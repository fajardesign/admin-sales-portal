import { useEffect, useState } from 'react';
import { Button, ContentDivider, Icon, TextInput } from '@ds/index.js';
import { AuthCard, AuthHero, AuthLayout, StatusMessage } from '../components/AuthLayout.jsx';
import { activateAccount, checkActivation } from '../api/mockApi.js';
import { useScenario } from '../dev/scenario.js';
import { passwordPolicy } from '../lib/validation.js';

const MESSAGES = {
  expired: { status: 'error', icon: 'TimeLine', title: 'Tautan tidak berlaku', body: 'Tautan sudah kedaluwarsa. Hubungi Admin.' },
  already: { status: 'information', icon: 'InformationLine', title: 'Akun sudah aktif', body: 'Akun Anda sudah aktif. Silakan masuk melalui aplikasi.' },
  done: { status: 'success', icon: 'ShieldCheckLine', title: 'Aktivasi berhasil', body: 'Akun Anda sudah aktif. Silakan buka aplikasi Sales Portal untuk masuk.' },
};

/** KC1 · Aktivasi akun (web view Keycloak dari tautan undangan email). Di-key per skenario agar state form ter-reset. */
export function Activation() {
  const { activationState } = useScenario();
  return <ActivationView key={activationState} />;
}

function ActivationView() {
  const [link, setLink] = useState(null);
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [touched2, setTouched2] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => { checkActivation().then(setLink); }, []);

  if (!link) return <AuthLayout label="Sales Portal" />;

  const checks = passwordPolicy(pw, link.email);
  const pwOk = checks.every((c) => c.ok);
  const matchOk = pw2.length > 0 && pw2 === pw;
  const msg = done ? MESSAGES.done : MESSAGES[link.status];

  async function submit(e) {
    e.preventDefault();
    if (!pwOk || !matchOk) { setSubmitted(true); return; }
    await activateAccount(pw);
    setDone(true);
  }

  return (
    <AuthLayout label="Sales Portal">
      {msg ? (
        <AuthCard center gap="var(--space-16)">
          <StatusMessage status={msg.status} icon={msg.icon} title={msg.title}>{msg.body}</StatusMessage>
        </AuthCard>
      ) : (
        <form onSubmit={submit} style={{ display: 'contents' }}>
          <AuthCard>
            <AuthHero icon="Lock2Line" title="Aktivasi akun Anda" description={`Buat password untuk ${link.email}`} />
            <ContentDivider />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
              <TextInput label="Password Baru" required type="password" leftIcon="Lock2Line" placeholder="••••••••" autoComplete="new-password"
                value={pw} onChange={(e) => setPw(e.target.value)}
                error={submitted && !pwOk ? 'Password belum memenuhi ketentuan' : undefined} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6) var(--space-12)', padding: 'var(--space-12)', borderRadius: 'var(--rounded-10)', background: 'var(--bg-weak-50)' }}>
                {checks.map((c) => (
                  <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)', font: 'var(--paragraph-xs)', color: c.ok ? 'var(--state-success-base)' : 'var(--text-sub-600)' }}>
                    <Icon name={c.ok ? 'CheckLine' : 'CloseLine'} size={14} />
                    <span>{c.label}</span>
                  </div>
                ))}
              </div>
              <TextInput label="Konfirmasi Password" required type="password" leftIcon="Lock2Line" placeholder="••••••••" autoComplete="new-password"
                value={pw2} onChange={(e) => { setPw2(e.target.value); setTouched2(true); }}
                error={(touched2 || submitted) && pw2.length > 0 && !matchOk ? 'Password tidak sama' : undefined} />
            </div>
            <Button type="submit" fullWidth disabled={!pw || !pw2}>Simpan</Button>
          </AuthCard>
        </form>
      )}
    </AuthLayout>
  );
}
