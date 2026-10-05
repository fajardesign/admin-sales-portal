import { useCallback, useEffect, useRef, useState } from 'react';
import { Badge, Button, Icon } from '@ds/index.js';
import { AdminShell } from '../../components/AdminShell.jsx';
import { EmptyState } from '../../components/EmptyState.jsx';
import { listTeamLeaders } from '../../api/mockApi.js';
import { useScenario } from '../../dev/scenario.js';
import { TeamLeaderTable } from './TeamLeaderTable.jsx';
import { AddUserModal } from './AddUserModal.jsx';
import { preset } from '../../dev/presets.js';
import emptyUsers from '../../assets/empty-users.png';
import emptyError from '../../assets/empty-error.png';

/** W2a · Manajemen Akun — daftar Team Leader + Tambah Pengguna (W2b). Di-key per skenario tabel agar data dimuat ulang. */
export function AccountManagement(props) {
  const { tableState } = useScenario();
  return <AccountManagementView key={tableState} {...props} />;
}

function AccountManagementView({ user, onLogout }) {
  const { lastNameOptional } = useScenario();
  const [rows, setRows] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | data | error
  const init = preset?.users ?? {};
  const [modalOpen, setModalOpen] = useState(init.modalOpen ?? false);
  const [highlightId, setHighlightId] = useState(init.newUser?.id ?? null);
  const hlTimer = useRef();

  const fetchRows = useCallback((opts) => {
    listTeamLeaders(opts).then((r) => { setRows(preset?.users?.newUser ? [preset.users.newUser, ...r] : r); setStatus('data'); }, () => setStatus('error'));
  }, []);
  useEffect(() => fetchRows(), [fetchRows]);
  const retry = () => { setStatus('loading'); fetchRows({ retry: true }); };
  useEffect(() => () => clearTimeout(hlTimer.current), []);

  function onCreated(u) {
    setRows((r) => [u, ...r]);
    setStatus('data');
    setHighlightId(u.id);
    clearTimeout(hlTimer.current);
    hlTimer.current = setTimeout(() => setHighlightId(null), 3000);
  }

  const view = status === 'data' && rows.length === 0 ? 'empty' : status;
  const addButton = <Button leftIcon={<Icon name="UserAddLine" />} onClick={() => setModalOpen(true)}>Tambah Pengguna</Button>;

  return (
    <AdminShell active="users" icon="TeamLine" title="Manajemen Akun" description="Buat akun Team Leader dan kirim undangan aktivasi." user={user} onLogout={onLogout}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-16)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}>
          <span style={{ font: 'var(--label-md)', color: 'var(--text-strong-950)' }}>Team Leader</span>
          {view === 'data' && <Badge color="gray" type="number">{String(rows.length)}</Badge>}
        </div>
        {(view === 'data' || view === 'loading') && addButton}
      </div>

      <div style={{ borderRadius: 'var(--rounded-16)', boxShadow: 'var(--shadow-stroke)', padding: '4px var(--space-16) var(--space-8)', background: 'var(--bg-white-0)', overflowX: 'auto' }}>
        <TeamLeaderTable rows={view === 'data' ? rows : []} loading={view === 'loading'} highlightId={highlightId} />
        {view === 'empty' && <EmptyState image={emptyUsers} message="Belum ada pengguna. Tambahkan pengguna pertama." action={addButton} />}
        {view === 'error' && (
          <EmptyState image={emptyError} message="Gagal memuat data. Coba lagi."
            action={<Button variant="stroke" tone="neutral" leftIcon={<Icon name="RefreshLine" />} onClick={retry}>Coba lagi</Button>} />
        )}
      </div>

      <AddUserModal open={modalOpen} onClose={() => setModalOpen(false)} onCreated={onCreated} lastNameOptional={lastNameOptional} />
    </AdminShell>
  );
}
