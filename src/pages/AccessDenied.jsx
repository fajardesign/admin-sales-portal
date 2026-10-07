import { Button, Icon } from '@ds/index.js';
import { AuthCard, AuthLayout, StatusMessage } from '../components/AuthLayout.jsx';

/** Petunjuk aplikasi yang benar per platform access role (PRD v3 cek #6; copy petunjuk menunggu konfirmasi PO). */
const HINT = {
  'sales-app-access': 'TL, SR, dan SA masuk melalui aplikasi Android Sales Portal.',
  'partner-web-access': 'Partner masuk melalui Partner Dashboard.',
};

/** W1-D · Akses ditolak — akun tanpa platform web-access (TL, SR, SA, Partner). Backend menjawab 403. */
export function AccessDenied({ session, onLogout }) {
  return (
    <AuthLayout footer={null}>
      <AuthCard center gap="var(--space-16)">
        <StatusMessage status="error" icon="ShieldUserLine" title="Akses ditolak">
          Akses ditolak. Akun ini tidak memiliki akses ke aplikasi ini.
        </StatusMessage>
        {HINT[session.platform] && <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{HINT[session.platform]}</span>}
        <div style={{ font: 'var(--paragraph-xs)', color: 'var(--text-soft-400)' }}>Masuk sebagai {session.loginId}</div>
        <Button variant="stroke" tone="neutral" fullWidth leftIcon={<Icon name="LogoutBoxRLine" />} onClick={onLogout}>Keluar</Button>
      </AuthCard>
    </AuthLayout>
  );
}
