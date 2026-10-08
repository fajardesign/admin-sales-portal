import { useEffect, useState } from 'react';
import { Button, Drawer, DrawerFooter, DrawerHeader, Icon, LinkButton } from '@ds/index.js';
import { AccountStatusBadge } from '../../components/Badges.jsx';
import { KeyValueGrid } from '../../components/KeyValueGrid.jsx';
import { Timeline } from '../../components/Timeline.jsx';
import { getUser } from '../../api/mockApi.js';
import { now } from '../../api/db.js';
import { ACTIVATION_TTL_MS, ROLES, TL_LEVEL, areaName } from '../../lib/constants.js';
import { DEMO } from '../../lib/env.js';
import { formatDateTime, formatDuration, formatPhone } from '../../lib/format.js';
import { navigate } from '../../lib/router.js';

const Section = ({ title, children }) => (
  <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
    <h3 style={{ margin: 0, font: 'var(--subheading-xs)', letterSpacing: 'var(--subheading-xs-ls)', textTransform: 'uppercase', color: 'var(--text-soft-400)' }}>{title}</h3>
    {children}
  </section>
);

/** W2c · Detail pengguna (PRD §3C): informasi, role & akses, aktivasi, nonaktif, riwayat; aksi footer sesuai status. */
export function UserDetailDrawer({ userId, user, version, onClose, onResend, onDisable, onReset, onChangeEmail, onChangePhone }) {
  const [u, setU] = useState(null);
  useEffect(() => { getUser(userId).then(setU); }, [userId, version]);
  if (!u) return <Drawer open width={480} onClose={onClose} header={<DrawerHeader title="Detail Pengguna" onClose={onClose} />} />;
  const st = u.accountStatus;
  const pending = st === 'PENDING' || st === 'EXPIRED';
  const expires = new Date(new Date(u.inviteSentAt).getTime() + ACTIVATION_TTL_MS);
  const areas = u.role === 'REVIEWER' ? 'Semua area' : u.areaIds.map(areaName).join(', ');
  return (
    <Drawer open width={480} onClose={onClose}
      header={<DrawerHeader size="lg" title={u.fullName} description={`${ROLES[u.role].label} · ${areas}`} badge={<AccountStatusBadge status={st} />} onClose={onClose} />}
      footer={(
        <DrawerFooter left={st !== 'DISABLED' && u.id !== user.userId && <Button variant="ghost" tone="error" size="sm" onClick={() => onDisable(u)}>Nonaktifkan</Button>}>
          {st !== 'DISABLED' && <Button variant="stroke" tone="neutral" size="sm" onClick={() => onChangePhone(u)}>Ubah Nomor Telepon</Button>}
          {st !== 'DISABLED' && <Button variant="stroke" tone="neutral" size="sm" onClick={() => onChangeEmail(u)}>Ubah Email</Button>}
          {st === 'ACTIVE' && <Button size="sm" onClick={() => onReset(u)}>Reset Password</Button>}
          {pending && <Button size="sm" onClick={() => onResend(u)}>Kirim Ulang Aktivasi</Button>}
          {st === 'DISABLED' && <Button variant="stroke" tone="neutral" size="sm" onClick={onClose}>Tutup</Button>}
        </DrawerFooter>
      )}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-24)', padding: 'var(--space-16) var(--space-24) var(--space-24)' }}>
        <Section title="Informasi Pengguna">
          <KeyValueGrid items={[
            { label: 'Nama Lengkap', value: u.fullName, full: true },
            { label: 'Email', value: u.email }, { label: 'Nomor Telepon', value: formatPhone(u.phone) },
          ]} />
        </Section>
        <Section title="Role & Akses">
          <KeyValueGrid items={[
            { label: 'Role', value: ROLES[u.role].label },
            u.role === 'TL' && { label: 'Level TL', value: TL_LEVEL[u.tlLevel] },
            { label: 'Area', value: areas },
            { label: 'Leader (Atasan)', value: u.leader ? `${u.leader.name} (${u.leader.role})` : null },
            { label: 'Bawahan aktif', value: u.subordinates.length ? u.subordinates.map((s) => `${s.name} (${s.role})`).join(', ') : null, full: true },
            { label: 'Realm role', value: ROLES[u.role].realm }, { label: 'Akses platform', value: ROLES[u.role].platform },
            { label: 'Akses fitur', value: ROLES[u.role].features.join(', '), full: true },
            u.partner && { label: 'Partner terkait', full: true, value: <LinkButton onClick={() => navigate(`/partner-pipeline/${u.partner.id}`)} rightIcon={<Icon name="ArrowRightSLine" size={16} />}>{u.partner.name} · {u.partner.id}</LinkButton> },
          ]} />
        </Section>
        <Section title="Aktivasi">
          <KeyValueGrid items={[
            { label: 'Status', value: <AccountStatusBadge status={st} /> },
            { label: 'Tautan terakhir dikirim', value: formatDateTime(u.inviteSentAt) },
            pending && { label: 'Berlaku sampai', value: formatDateTime(expires), hint: st === 'PENDING' ? `${formatDuration(expires - now())} lagi` : 'Kedaluwarsa' },
            { label: 'Jumlah kirim ulang', value: String(u.inviteResendCount) },
            { label: 'Diaktivasi pada', value: formatDateTime(u.activatedAt) },
            u.resetSentAt && { label: 'Tautan reset terakhir', value: formatDateTime(u.resetSentAt) },
            { label: 'Dibuat oleh / pada', value: `${u.createdBy} · ${formatDateTime(u.createdAt)}`, full: true },
          ]} />
          {DEMO && st === 'ACTIVE' && u.resetSentAt && (
            <Button variant="lighter" tone="neutral" size="xs" leftIcon={<Icon name="ExternalLinkLine" />} onClick={() => navigate(`/activate?user=${u.id}&mode=reset`)} style={{ alignSelf: 'flex-start' }}>
              Mode demo: buka tautan reset password
            </Button>
          )}
          {DEMO && st === 'PENDING' && (
            <Button variant="lighter" tone="neutral" size="xs" leftIcon={<Icon name="ExternalLinkLine" />} onClick={() => navigate(`/activate?user=${u.id}`)} style={{ alignSelf: 'flex-start' }}>
              Mode demo: buka tautan aktivasi
            </Button>
          )}
        </Section>
        {st === 'DISABLED' && (
          <Section title="Nonaktif">
            <KeyValueGrid items={[{ label: 'Dinonaktifkan oleh / pada', value: `${u.disabledBy} · ${formatDateTime(u.disabledAt)}`, full: true }, { label: 'Alasan', value: u.disabledReason, full: true }]} />
          </Section>
        )}
        <Section title="Riwayat">
          <Timeline items={[...u.log].reverse().map((l, i) => ({ key: i, title: l.text, meta: formatDateTime(l.at) }))} />
        </Section>
      </div>
    </Drawer>
  );
}
