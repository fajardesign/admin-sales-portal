import { useMemo, useState } from 'react';
import { Alert, CheckboxLabel, Select, TextArea } from '@ds/index.js';
import { ActionModal } from '../../components/ActionModal.jsx';
import { useToast } from '../../components/Toaster.jsx';
import { ApiError, disableUser, handoverPlan, moveSubordinates, releasesAfter } from '../../api/mockApi.js';
import { ROLES, areaName } from '../../lib/constants.js';
import { validateReason } from '../../lib/validation.js';

const STATUS_SUFFIX = { PENDING: ' · Pending', EXPIRED: ' · Expired' };
const noLeader = (role) => (role === 'APL' ? 'Belum ada APL aktif lain di area ini. Buat akun APL baru terlebih dahulu.' : 'Belum ada TL aktif lain di area ini.');

/**
 * Baris serah terima (PRD Scope 1 v2 FR-AM-009 / FR-AM-012): "untuk semua" mengisi setiap baris yang kandidatnya cocok, tiap baris
 * bisa diubah; kandidat per bawahan = Active, role sama dengan atasan lama, memegang area bawahan. Daftar penugasan toko yang
 * akan dilepas (FR-AM-013) tampil sebelum konfirmasi.
 */
function useHandover(target, mode) {
  const plan = useMemo(() => handoverPlan(target.id, mode), [target.id, mode]);
  const [main, setMain] = useState(plan.mainOptions.length === 1 ? plan.mainOptions[0].value : '');
  const [perPerson, setPerPerson] = useState({});
  const [checked, setChecked] = useState(() => new Set());
  const included = plan.subs.filter((x) => mode === 'disable' || checked.has(x.id));
  const leaderOf = (x) => perPerson[x.id] ?? (x.options.some((o) => o.value === main) ? main : '');
  const map = Object.fromEntries(included.map((x) => [x.id, leaderOf(x)]));
  const releases = releasesAfter(plan, target.id, map, main);
  const needsMain = mode === 'disable' && target.role === 'TL' && plan.ownedStores > 0;
  const ready = (mode === 'disable' || included.length > 0) && included.every((x) => leaderOf(x)) && (!needsMain || main);
  return { plan, main, setMain: (v) => { setMain(v); setPerPerson({}); }, perPerson, setPerPerson, checked, setChecked, included, leaderOf, map, releases, needsMain, ready };
}

function HandoverFields({ target, mode, h }) {
  const { plan } = h;
  const roleWord = target.role === 'APL' ? 'APL' : 'TL';
  const mainName = plan.mainOptions.find((o) => o.value === h.main)?.label;
  const toggle = (id) => h.setChecked((c) => { const n = new Set(c); if (n.has(id)) n.delete(id); else n.add(id); return n; });
  const allChecked = plan.subs.length > 0 && plan.subs.every((x) => h.checked.has(x.id));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
      {plan.mainOptions.length === 0
        ? <Alert status="error" size="sm" title={noLeader(target.role)} />
        : (
          <Select label={mode === 'disable' ? 'Leader pengganti untuk semua' : 'Leader baru untuk semua'} required={mode === 'disable'} placeholder={`Pilih ${roleWord}`}
            value={h.main || undefined} options={plan.mainOptions} onChange={h.setMain}
            hint={mode === 'disable' ? (plan.subs.length ? `Masih menjadi atasan ${plan.subs.length} pengguna. Pilih atasan baru sebelum menonaktifkan.` : 'Pilih TL yang menerima toko milik pengguna ini.') : undefined} />
        )}
      {mode === 'move' && plan.subs.length > 1 && (
        <CheckboxLabel label="Pilih semua" checked={allChecked} onChange={() => h.setChecked(allChecked ? new Set() : new Set(plan.subs.map((x) => x.id)))} />
      )}
      {plan.subs.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          {plan.subs.map((x) => {
            const on = mode === 'disable' || h.checked.has(x.id);
            const label = `${x.name} (${x.role}${STATUS_SUFFIX[x.status] ?? ''})`;
            return (
              <div key={x.id} style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 'var(--space-12)', alignItems: 'center' }}>
                {mode === 'move'
                  ? <CheckboxLabel label={label} checked={on} onChange={() => toggle(x.id)} />
                  : <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-strong-950)' }}>{label}</span>}
                {x.options.length === 0
                  ? <span style={{ font: 'var(--paragraph-xs)', color: 'var(--state-error-base)' }}>{noLeader(target.role)}</span>
                  : <Select size="sm" placeholder={mode === 'disable' ? 'Leader pengganti' : 'Leader baru'} disabled={!on} value={(on && h.leaderOf(x)) || undefined} options={x.options}
                    onChange={(v) => h.setPerPerson((pp) => ({ ...pp, [x.id]: v }))} />}
              </div>
            );
          })}
        </div>
      )}
      {h.needsMain && mainName && <Alert status="information" size="sm" title={`${plan.ownedStores} toko yang dipegang ${target.fullName} pindah ke ${mainName}. SA/SR yang atasannya bukan ${mainName} dilepas dari toko tersebut.`} />}
      {h.releases.length > 0 && (
        <Alert status="warning" size="sm" title={`${h.releases.length} penugasan toko dilepas`}>
          {h.releases.map((r) => `${plan.subs.find((x) => x.id === r.subId)?.name} · ${r.storeName} (${r.partnerName})`).join('; ')}
        </Alert>
      )}
    </div>
  );
}

/**
 * FR-AM-009 — Nonaktifkan pengguna dengan serah terima leader (PRD Scope 1 v2). TL/APL yang masih punya bawahan wajib diberi
 * atasan baru untuk setiap bawahan; TL yang masih memegang toko wajib memilih "Leader pengganti untuk semua" (penerima toko).
 * SA/SR: semua penugasan toko dilepas otomatis.
 */
export function DisableModal({ target, user, onClose, onDone }) {
  const toast = useToast();
  const [reason, setReason] = useState('');
  const [touched, setTouched] = useState(false);
  const [busy, setBusy] = useState(false);
  const h = useHandover(target, 'disable');
  const withHandover = h.plan.subs.length > 0 || h.needsMain;
  const gaps = h.plan.aplAreaGaps.map(areaName);
  const err = validateReason(reason);
  async function confirm() {
    setTouched(true);
    if (err || !h.ready) return;
    setBusy(true);
    try {
      const u = await disableUser(target.id, reason.trim(), user, { defaultLeaderId: h.main || undefined, replacements: h.map });
      toast('success', 'Pengguna berhasil dinonaktifkan.');
      onDone(u);
    } catch {
      setBusy(false);
      toast('error', 'Gagal menonaktifkan pengguna. Coba lagi.');
    }
  }
  return (
    <ActionModal open onClose={onClose} title={`Nonaktifkan ${target.fullName}?`} description={`${ROLES[target.role].label} · ${target.email}`} icon="ForbidFill" status="error"
      confirmLabel="Nonaktifkan" confirmTone="error" busy={busy} onConfirm={confirm} confirmDisabled={!h.ready || !reason.trim() || gaps.length > 0} width={withHandover ? 600 : 480}>
      <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>
        Akun dinonaktifkan, sesi yang aktif berakhir, dan pengguna tidak bisa login lagi. Status ini tidak dapat dikembalikan dari portal.
      </span>
      {gaps.length > 0 && <Alert status="error" size="sm" title={`Buat APL baru untuk area ${gaps.join(', ')} sebelum menonaktifkan APL ini.`} />}
      {withHandover && gaps.length === 0 && <HandoverFields target={target} mode="disable" h={h} />}
      {target.assignedStores > 0 && <Alert status="warning" size="sm" title={`${target.assignedStores} toko akan dilepas dari penugasan.`} />}
      <TextArea label="Alasan" required maxLength={255} rows={3} value={reason} onChange={setReason} placeholder="Contoh: Resign per 31 Okt 2026" error={touched ? err : undefined} />
    </ActionModal>
  );
}

/** FR-AM-012 — Pindahkan Bawahan TL Active ke TL Active lain di area yang sama; TL tetap aktif dan tokonya tidak berpindah. */
export function MoveSubordinatesModal({ target, user, onClose, onDone }) {
  const toast = useToast();
  const [reason, setReason] = useState('');
  const [touched, setTouched] = useState(false);
  const [busy, setBusy] = useState(false);
  const h = useHandover(target, 'move');
  const err = validateReason(reason);
  async function confirm() {
    setTouched(true);
    if (err || !h.ready) return;
    setBusy(true);
    try {
      const u = await moveSubordinates(target.id, h.map, reason.trim(), user);
      toast('success', 'Bawahan berhasil dipindahkan.');
      onDone(u);
    } catch (e) {
      setBusy(false);
      if (e instanceof ApiError && e.code === 'STALE') { toast('error', 'Susunan bawahan sudah berubah. Buka ulang lalu coba lagi.'); onClose(); } else toast('error', 'Gagal memindahkan bawahan. Coba lagi.');
    }
  }
  return (
    <ActionModal open onClose={onClose} title={`Pindahkan bawahan ${target.fullName}`} description="Pilih bawahan dan atasan baru di area yang sama."
      icon="TeamLine" confirmLabel="Pindahkan" busy={busy} onConfirm={confirm} confirmDisabled={!h.ready || !reason.trim()} width={600}>
      <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{target.fullName} tetap aktif dan toko miliknya tidak berpindah.</span>
      <HandoverFields target={target} mode="move" h={h} />
      <TextArea label="Alasan" required maxLength={255} rows={3} value={reason} onChange={setReason} placeholder="Contoh: Penyesuaian tim per November 2026" error={touched ? err : undefined} />
    </ActionModal>
  );
}
