import { Button, Icon } from '@ds/index.js';
import { AdminShell } from './AdminShell.jsx';
import { StatusMessage } from './AuthLayout.jsx';
import { homeFor } from '../lib/nav.js';
import { navigate } from '../lib/router.js';

/** Halaman yang dibuka langsung tanpa feature access role → "Akses ditolak" di dalam shell (API 403). */
export function ForbiddenPage({ user, onLogout }) {
  return (
    <AdminShell active="" icon="ShieldUserLine" title="Akses ditolak" user={user} onLogout={onLogout}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'var(--space-16)', padding: 'var(--space-48) var(--space-24)' }}>
        <StatusMessage status="error" icon="ShieldUserLine" title="Akses ditolak">Akun Anda tidak memiliki akses ke halaman ini.</StatusMessage>
        <Button variant="stroke" tone="neutral" leftIcon={<Icon name="ArrowLeftLine" />} onClick={() => navigate(homeFor(user))}>Ke halaman utama</Button>
      </div>
    </AdminShell>
  );
}
