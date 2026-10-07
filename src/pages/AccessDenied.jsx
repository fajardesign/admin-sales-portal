import { Button, Icon } from '@ds/index.js';
import { AuthCard, AuthLayout, StatusMessage } from '../components/AuthLayout.jsx';

/** W1-D · Akses ditolak — role tanpa akses portal web (TL, SR, SA, Partner). Backend menjawab 403. */
export function AccessDenied({ loginId, onLogout }) {
  return (
    <AuthLayout footer={null}>
      <AuthCard center gap="var(--space-16)">
        <StatusMessage status="error" icon="ShieldUserLine" title="Akses ditolak">
          Akses ditolak. Akun ini tidak memiliki akses ke portal web.
        </StatusMessage>
        <div style={{ font: 'var(--paragraph-xs)', color: 'var(--text-soft-400)' }}>Masuk sebagai {loginId}</div>
        <Button variant="stroke" tone="neutral" fullWidth leftIcon={<Icon name="LogoutBoxRLine" />} onClick={onLogout}>Keluar</Button>
      </AuthCard>
    </AuthLayout>
  );
}
