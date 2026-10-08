import { useCallback, useEffect, useState } from 'react';
import { Avatar, Button, Icon, Select } from '@ds/index.js';
import { AdminShell } from '../../components/AdminShell.jsx';
import { DataTable } from '../../components/DataTable.jsx';
import { nowrap } from '../../lib/cells.jsx';
import { ListCard, ListPager } from '../../components/ListCard.jsx';
import { StatusRail } from '../../components/StatusRail.jsx';
import { AccountStatusBadge } from '../../components/Badges.jsx';
import { SearchField } from '../../components/FilterBar.jsx';
import { listUsers } from '../../api/mockApi.js';
import { now } from '../../api/db.js';
import { useScenario } from '../../dev/scenario.js';
import { preset } from '../../dev/presets.js';
import { ACCOUNT_STATUS, AREAS, ACTIVATION_TTL_MS, ROLES, TL_LEVEL, areaName } from '../../lib/constants.js';
import { formatDateWIB, formatDuration, formatPhone } from '../../lib/format.js';
import { navigate, withQuery } from '../../lib/router.js';
import { AddUserDrawer } from './AddUserDrawer.jsx';
import { UserDetailDrawer } from './UserDetailDrawer.jsx';
import { ChangeEmailModal, DisableModal, ResendModal, ResetPasswordModal } from './UserActionModals.jsx';

const ROLE_FILTER = ['REVIEWER', 'APL', 'TL', 'SR', 'SA', 'PARTNER'];

/** W2a · Account Management (PRD §3A). Status, cari, filter Role/Area, dan halaman disimpan di URL. */
export function AccountManagement(props) {
  const { tableState } = useScenario();
  return <AccountManagementView key={tableState} {...props} />;
}

function AccountManagementView({ user, onLogout, query }) {
  const q = Object.fromEntries(query.entries());
  const status = q.status && ACCOUNT_STATUS[q.status.toUpperCase()] ? q.status.toUpperCase() : null;
  const page = Number(q.page) || 1;
  const [data, setData] = useState(null);
  const [view, setView] = useState('loading');
  const [adding, setAdding] = useState(preset?.users?.adding ?? false);
  const [detailId, setDetailId] = useState(null);
  const [version, setVersion] = useState(0);
  const [resend, setResend] = useState(null);
  const [disable, setDisable] = useState(null);
  const [resetPw, setResetPw] = useState(null);
  const [emailEdit, setEmailEdit] = useState(null);
  const [highlightId, setHighlightId] = useState(null);
  const qs = query.toString();

  const set = (patch, keepPage = false) => navigate(withQuery('/account-management', { ...q, ...(keepPage ? {} : { page: '' }), ...patch }));
  const load = useCallback((retry) => {
    setView((v) => (v === 'data' ? v : 'loading'));
    listUsers({ ...q, status }, { retry }).then((r) => { setData(r); setView(r.rows.length ? 'data' : 'empty'); }, () => setView('error'));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qs, version]);
  useEffect(() => { load(false); }, [load]);
  const refresh = () => setVersion((v) => v + 1);

  const filtered = !!(q.q || q.role || q.area || status);
  const addButton = <Button leftIcon={<Icon name="UserAddLine" />} onClick={() => setAdding(true)}>Tambah Pengguna</Button>;
  const roleCell = (u) => {
    const extra = u.role === 'TL' ? TL_LEVEL[u.tlLevel] : u.role === 'PARTNER' ? u.partner?.name : null;
    return { priority: 'regular', title: nowrap(ROLES[u.role].label), description: extra };
  };
  const statusCell = (u) => {
    const left = new Date(u.inviteSentAt).getTime() + ACTIVATION_TTL_MS - now();
    return { misc: true, children: (
      <span style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <AccountStatusBadge status={u.accountStatus} />
        {u.accountStatus === 'PENDING' && <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)', whiteSpace: 'nowrap' }}>{formatDuration(left)} lagi</span>}
      </span>
    ) };
  };
  const actionsCell = (u) => {
    const canResend = ['PENDING', 'EXPIRED'].includes(u.accountStatus);
    const canDisable = u.accountStatus !== 'DISABLED' && u.id !== user.userId;
    if (!canResend && !canDisable) return '-';
    return { misc: true, children: (
      <span style={{ display: 'flex', gap: 'var(--space-4)' }} onClick={(e) => e.stopPropagation()} onKeyDown={(e) => e.stopPropagation()} role="presentation">
        {canResend && <Button size="2xs" variant="ghost" tone="primary" onClick={() => setResend(u)}>Kirim Ulang</Button>}
        {canDisable && <Button size="2xs" variant="ghost" tone="error" onClick={() => setDisable(u)}>Nonaktifkan</Button>}
      </span>
    ) };
  };
  const columns = [
    { key: 'name', header: 'Nama Lengkap', render: (u) => ({ priority: 'leading', media: <Avatar size={40} color={0} name={u.fullName} />, title: nowrap(u.fullName) }) },
    { key: 'username', header: 'Username', render: (u) => nowrap(u.username) },
    { key: 'email', header: 'Email', render: (u) => nowrap(u.email) },
    { key: 'phone', header: 'Telepon', render: (u) => nowrap(formatPhone(u.phone)) },
    { key: 'role', header: 'Role', render: roleCell },
    { key: 'area', header: 'Area', render: (u) => (u.role === 'REVIEWER' ? 'Semua area' : u.areaIds.map(areaName).join(', ')) },
    { key: 'leader', header: 'Atasan', render: (u) => (u.leader ? { priority: 'regular', title: nowrap(u.leader.name), description: u.leader.role } : '-') },
    { key: 'status', header: 'Status', render: statusCell },
    { key: 'created', header: 'Dibuat', render: (u) => { const f = formatDateWIB(u.createdAt); return { priority: 'regular', title: nowrap(f.date), description: f.time }; } },
    { key: 'actions', header: 'Aksi', render: actionsCell },
  ];
  const counts = data?.counts ?? {};
  const after = () => { setResend(null); setDisable(null); setResetPw(null); setEmailEdit(null); refresh(); };

  return (
    <AdminShell active="/account-management" icon="TeamLine" title="Account Management" description="Buat akun login, pantau status aktivasi Keycloak, kirim ulang tautan, dan nonaktifkan akun." user={user} onLogout={onLogout}>
      <div style={{ display: 'flex', gap: 'var(--space-16)', alignItems: 'flex-start' }}>
        <StatusRail ariaLabel="Status akun" value={q.status ?? 'semua'} onChange={(v) => set({ status: v === 'semua' ? '' : v })}
          groups={[{ title: 'Status Keycloak', items: [
            { value: 'semua', label: 'Semua', count: counts.ALL },
            ...Object.keys(ACCOUNT_STATUS).map((s) => ({ value: s.toLowerCase(), label: ACCOUNT_STATUS[s].label, count: counts[s] })),
          ] }]} />
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 220 }}>
              <SearchField placeholder="Cari nama, username, email, atau telepon" value={q.q ?? ''} onChange={(v) => set({ q: v })} width="100%" />
            </div>
            <div style={{ width: 170 }}>
              <Select size="sm" placeholder="Semua role" value={q.role ?? ''} onChange={(v) => set({ role: v })}
                options={[{ value: '', label: 'Semua role' }, ...ROLE_FILTER.map((r) => ({ value: r, label: ROLES[r].label }))]} />
            </div>
            <div style={{ width: 160 }}>
              <Select size="sm" placeholder="Semua area" value={q.area ?? ''} onChange={(v) => set({ area: v })}
                options={[{ value: '', label: 'Semua area' }, ...AREAS.map((a) => ({ value: String(a.id), label: a.name }))]} />
            </div>
            {addButton}
          </div>
          <ListCard view={view} onRetry={() => load(true)}
            emptyMessage={filtered ? 'Tidak ada pengguna yang sesuai dengan pencarian atau filter.' : 'Belum ada pengguna. Tambahkan pengguna pertama.'}
            emptyAction={filtered ? undefined : addButton}
            footer={view === 'data' && <ListPager page={page} total={data.total} noun="pengguna" onChange={(p) => set({ page: String(p) }, true)} />}>
            {(view === 'data' || view === 'loading') && (
              <DataTable columns={columns} rows={view === 'data' ? data.rows : []} highlight={highlightId} loading={view === 'loading'} minWidth={1320}
                onRowClick={(u) => setDetailId(u.id)} />
            )}
          </ListCard>
        </div>
      </div>

      {adding && <AddUserDrawer user={user} onClose={() => setAdding(false)} onCreated={(u) => { setAdding(false); setHighlightId(u.id); set({ status: '', q: '', role: '', area: '' }); refresh(); }} />}
      {detailId && <UserDetailDrawer userId={detailId} user={user} version={version} onClose={resend || disable || resetPw || emailEdit ? undefined : () => setDetailId(null)} onResend={setResend} onDisable={setDisable} onReset={setResetPw} onChangeEmail={setEmailEdit} />}
      {resend && <ResendModal target={resend} user={user} onClose={() => setResend(null)} onDone={after} />}
      {disable && <DisableModal target={disable} user={user} onClose={() => setDisable(null)} onDone={after} />}
      {resetPw && <ResetPasswordModal target={resetPw} user={user} onClose={() => setResetPw(null)} onDone={after} />}
      {emailEdit && <ChangeEmailModal target={emailEdit} user={user} onClose={() => setEmailEdit(null)} onDone={after} />}
    </AdminShell>
  );
}
