import { useEffect, useState } from 'react';
import { Button, CheckboxLabel, Drawer, DrawerFooter, DrawerHeader, Field, Modal, Select, StatusModal, TextInput } from '@ds/index.js';
import { ApiError, aplAreaHolders, createUser, leaderOptions } from '../../api/mockApi.js';
import { useToast } from '../../components/Toaster.jsx';
import { AREAS, CREATABLE_ROLES, ROLES, TL_LEVEL } from '../../lib/constants.js';
import { validateUserForm } from '../../lib/validation.js';
import { preset } from '../../dev/presets.js';

const EMPTY = { email: '', phone: '', username: '', fullName: '', role: '', tlLevel: '', areaIds: [], leaderId: '' };
const FIELDS = Object.keys(EMPTY);
const DUPLICATE_MSG = { email: 'Email sudah terdaftar', username: 'Username sudah dipakai' };

/**
 * W2b · Tambah Pengguna (PRD §3B). Urutan field tetap; Area & Leader nonaktif sampai role dipilih, Leader sampai area dipilih.
 * Validasi saat blur; Simpan nonaktif sampai semua field wajib valid; backend memvalidasi ulang (409 per field).
 */
export function AddUserDrawer({ user, onClose, onCreated }) {
  const toast = useToast();
  const init = preset?.addUser ?? {};
  const [form, setForm] = useState({ ...EMPTY, ...init.form });
  const [touched, setTouched] = useState(init.touched ?? {});
  const [serverErr, setServerErr] = useState({});
  const [saving, setSaving] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const areaId = form.areaIds[0];
  const leaders = ['TL', 'SR', 'SA'].includes(form.role) ? leaderOptions(form.role, areaId) : [];
  const holders = aplAreaHolders();
  // Leader otomatis: TL → APL pemegang area; SR/SA → bila hanya ada satu TL.
  useEffect(() => {
    if (leaders.length === 1 && form.leaderId !== leaders[0].value) setForm((f) => ({ ...f, leaderId: leaders[0].value }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.role, areaId, leaders.length]);

  const allErrs = validateUserForm(form, { leaders });
  const errs = Object.fromEntries(FIELDS.map((k) => [k, serverErr[k] || (touched[k] ? allErrs[k] : undefined)]));
  // Pesan "Belum ada APL/TL aktif" langsung terlihat setelah area dipilih.
  if (form.areaIds.length && leaders.length === 0 && allErrs.leaderId) errs.leaderId = allErrs.leaderId;
  const saveDisabled = saving || Object.keys(allErrs).length > 0 || Object.values(serverErr).some(Boolean);

  const setField = (k, v) => { setForm((f) => ({ ...f, [k]: v })); setServerErr((s) => ({ ...s, [k]: undefined })); };
  const touch = (k) => setTouched((t) => ({ ...t, [k]: true }));
  const setRole = (role) => { setForm((f) => ({ ...f, role, tlLevel: '', areaIds: [], leaderId: '' })); touch('role'); };
  const setArea = (ids) => { setForm((f) => ({ ...f, areaIds: ids, leaderId: '' })); touch('areaIds'); };

  const dirty = FIELDS.some((k) => (Array.isArray(form[k]) ? form[k].length : form[k]));
  const requestCancel = () => { if (saving) return; if (dirty) setConfirmOpen(true); else onClose(); };

  async function submit() {
    if (Object.keys(allErrs).length) { setTouched(Object.fromEntries(FIELDS.map((k) => [k, true]))); return; }
    if (saving) return;
    setSaving(true);
    try {
      const { user: u, inviteSent } = await createUser(form, user);
      onCreated(u);
      if (inviteSent) toast('success', 'Pengguna berhasil dibuat. Undangan aktivasi telah dikirim.');
      else toast('warning', 'Pengguna dibuat, tetapi email undangan gagal dikirim. Hubungi tim teknis.');
    } catch (e) {
      setSaving(false);
      if (e instanceof ApiError && e.code === 'DUPLICATE') setServerErr({ [e.field]: DUPLICATE_MSG[e.field] });
      else toast('error', 'Gagal membuat akun. Coba lagi.');
    }
  }

  // Blur ditangkap di wrapper: TextInput DS menyebar ...rest setelah onBlur internalnya.
  const text = (k, props) => (
    <div onBlur={() => touch(k)}>
      <TextInput required value={form[k]} error={errs[k]} disabled={saving} {...props} />
    </div>
  );
  const roleChosen = !!form.role;
  const areaControl = () => {
    if (!roleChosen) return <Select label="Area" required disabled placeholder="Pilih role terlebih dahulu" options={[]} />;
    if (form.role === 'REVIEWER') return <TextInput label="Area" required disabled value="Semua area" hint="Admin tidak terikat area." />;
    if (form.role === 'APL') {
      return (
        <Field label="Area" required error={errs.areaIds} hint={errs.areaIds ? undefined : '1 area hanya dipegang 1 APL.'}>
          <div role="group" aria-label="Area APL" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8) var(--space-12)', padding: 'var(--space-12)', borderRadius: 'var(--rounded-10)', boxShadow: 'var(--shadow-stroke)' }}>
            {AREAS.map((a) => {
              const held = holders[a.id];
              return (
                <CheckboxLabel key={a.id} label={a.name} description={held ? `Dipegang ${held}` : undefined} disabled={!!held || saving}
                  checked={form.areaIds.includes(a.id)} onChange={(on) => setArea(on ? [...form.areaIds, a.id] : form.areaIds.filter((x) => x !== a.id))} />
              );
            })}
          </div>
        </Field>
      );
    }
    return <Select label="Area" required placeholder="Pilih area" value={areaId ? String(areaId) : undefined} error={errs.areaIds} disabled={saving}
      options={AREAS.map((a) => ({ value: String(a.id), label: a.name }))} onChange={(v) => setArea([Number(v)])} />;
  };
  const leaderControl = () => {
    if (!roleChosen) return <Select label="Leader (Atasan)" required disabled placeholder="Pilih role terlebih dahulu" options={[]} />;
    if (form.role === 'REVIEWER' || form.role === 'APL') return <TextInput label="Leader (Atasan)" disabled value="-" hint={form.role === 'APL' ? 'APL melapor ke Business Head yang belum memiliki akun portal.' : undefined} />;
    if (!form.areaIds.length) return <Select label="Leader (Atasan)" required disabled placeholder="Pilih area terlebih dahulu" options={[]} />;
    return (
      <Select label="Leader (Atasan)" required placeholder={form.role === 'TL' ? 'Pilih APL' : 'Pilih TL'} value={form.leaderId || undefined} options={leaders}
        disabled={saving || leaders.length <= 1} error={errs.leaderId}
        hint={errs.leaderId ? undefined : form.role === 'TL' ? 'Leader TL adalah APL yang memegang area ini.' : 'Leader SA/SR adalah TL di area yang sama.'}
        onChange={(v) => { setField('leaderId', v); touch('leaderId'); }} />
    );
  };

  return (
    <>
      <Drawer open width={480} onClose={confirmOpen ? undefined : requestCancel}
        header={<DrawerHeader title="Tambah Pengguna" description="Akun dibuat di Keycloak dan tautan aktivasi (berlaku 24 jam, sekali pakai) dikirim ke email pengguna." icon="UserAddLine" onClose={requestCancel} />}
        footer={(
          <DrawerFooter>
            <Button variant="stroke" tone="neutral" size="sm" disabled={saving} onClick={requestCancel}>Batal</Button>
            <Button size="sm" disabled={saveDisabled} onClick={submit}>{saving ? 'Menyimpan...' : 'Simpan'}</Button>
          </DrawerFooter>
        )}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)', padding: 'var(--space-16) var(--space-24) var(--space-24)' }}>
          {text('email', { label: 'Email', leftIcon: 'MailLine', placeholder: 'nama@amarbank.co.id', hint: 'Dipakai untuk login dan email aktivasi.', onChange: (e) => setField('email', e.target.value) })}
          {text('phone', {
            label: 'Nomor Telepon', placeholder: '812 3456 7890', inputMode: 'numeric', hint: errs.phone ? undefined : 'Hanya untuk kontak, tidak dipakai untuk login.',
            prefix: <span style={{ padding: '0 var(--space-12)', font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>+62</span>,
            onChange: (e) => setField('phone', e.target.value.replace(/\D/g, '').slice(0, 14)),
          })}
          {text('username', { label: 'Username', leftIcon: 'User6Line', placeholder: 'budi.santoso', hint: errs.username ? undefined : '4–30 karakter: huruf kecil, angka, titik, garis bawah, atau tanda hubung.', onChange: (e) => setField('username', e.target.value.toLowerCase()) })}
          {text('fullName', { label: 'Nama Lengkap', placeholder: 'Budi Santoso', onChange: (e) => setField('fullName', e.target.value) })}
          <Select label="Role Type" required placeholder="Pilih role" value={form.role || undefined} error={errs.role} disabled={saving}
            options={CREATABLE_ROLES.map((r) => ({ value: r, label: ROLES[r].label }))} onChange={setRole}
            hint={form.role ? `Role Keycloak: ${ROLES[form.role].keycloak.join(' + ')}` : 'Akun Partner dibuat otomatis saat partner Active.'} />
          {form.role === 'TL' && (
            <Select label="Level TL" required placeholder="Pilih level" value={form.tlLevel || undefined} error={errs.tlLevel} disabled={saving}
              options={Object.entries(TL_LEVEL).map(([value, label]) => ({ value, label }))} onChange={(v) => { setField('tlLevel', v); touch('tlLevel'); }} />
          )}
          {areaControl()}
          {leaderControl()}
        </div>
      </Drawer>

      <Modal open={confirmOpen} onClose={() => setConfirmOpen(false)} width={400} style={{ overflow: 'visible', background: 'transparent', boxShadow: 'none' }}>
        <StatusModal status="warning" title="Batalkan penambahan pengguna?"
          actions={<>
            <Button variant="stroke" tone="neutral" size="sm" fullWidth onClick={() => setConfirmOpen(false)}>Lanjutkan Mengisi</Button>
            <Button tone="error" size="sm" fullWidth onClick={onClose}>Ya, Batalkan</Button>
          </>}>
          Data yang sudah diisi akan hilang.
        </StatusModal>
      </Modal>
    </>
  );
}
