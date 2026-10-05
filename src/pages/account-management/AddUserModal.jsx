import { useState } from 'react';
import { Button, Modal, ModalFooter, ModalHeader, Select, StatusModal, TextInput } from '@ds/index.js';
import { validateUserForm } from '../../lib/validation.js';
import { ApiError, createTeamLeader } from '../../api/mockApi.js';
import { useToast } from '../../components/Toaster.jsx';

const EMPTY = { email: '', phone: '', firstName: '', lastName: '' };
const FIELDS = Object.keys(EMPTY);
const ROLE_OPTIONS = [{ label: 'TL (Team Leader)', value: 'TL' }];
const DUPLICATE_MSG = { email: 'Email sudah terdaftar', phone: 'Nomor telepon sudah terdaftar' };

/** W2b · Tambah Pengguna — form buat akun TL + konfirmasi batal bila form sudah diisi. */
export function AddUserModal({ open, onClose, onCreated, lastNameOptional }) {
  const toast = useToast();
  const [form, setForm] = useState(EMPTY);
  const [touched, setTouched] = useState({});
  const [serverErr, setServerErr] = useState({});
  const [saving, setSaving] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const allErrs = validateUserForm(form, { lastNameOptional });
  const errs = Object.fromEntries(FIELDS.map((k) => [k, serverErr[k] || (touched[k] ? allErrs[k] : undefined)]));
  const saveDisabled = saving || Object.keys(allErrs).length > 0 || Object.values(serverErr).some(Boolean);

  const reset = () => { setForm(EMPTY); setTouched({}); setServerErr({}); };
  const close = () => { reset(); setConfirmOpen(false); onClose(); };
  const setField = (k, v) => { setForm((f) => ({ ...f, [k]: v })); setServerErr((s) => ({ ...s, [k]: undefined })); };
  const blur = (k) => () => setTouched((t) => ({ ...t, [k]: true }));

  function requestCancel() {
    if (saving) return;
    if (FIELDS.some((k) => form[k])) setConfirmOpen(true);
    else close();
  }

  async function submit() {
    if (Object.keys(allErrs).length) { setTouched(Object.fromEntries(FIELDS.map((k) => [k, true]))); return; }
    if (saving) return;
    setSaving(true);
    try {
      const { user, inviteSent } = await createTeamLeader(form);
      setSaving(false);
      close();
      onCreated(user);
      if (inviteSent) toast('success', 'Pengguna berhasil dibuat. Undangan aktivasi telah dikirim.');
      else toast('warning', 'Pengguna dibuat, tetapi email undangan gagal dikirim. Hubungi tim teknis.');
    } catch (e) {
      setSaving(false);
      if (e instanceof ApiError && e.code === 'DUPLICATE') setServerErr({ [e.field]: DUPLICATE_MSG[e.field] });
      else toast('error', 'Gagal membuat akun. Coba lagi.');
    }
  }

  // Blur ditangkap di wrapper: TextInput DS menyebar ...rest setelah onBlur internalnya, jadi onBlur langsung akan merusak state fokusnya.
  const field = (k, props) => (
    <div onBlur={blur(k)}>
      <TextInput required value={form[k]} error={errs[k]} disabled={saving} {...props} />
    </div>
  );

  return (
    <>
      <Modal open={open} onClose={confirmOpen ? undefined : requestCancel} width={480}>
        <ModalHeader title="Tambah Pengguna" description="Undangan aktivasi akan dikirim ke email pengguna." icon="UserAddLine" onClose={requestCancel} />
        <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
          {field('email', { label: 'Email', leftIcon: 'MailLine', placeholder: 'nama@email.com', onChange: (e) => setField('email', e.target.value) })}
          {field('phone', {
            label: 'Telepon', placeholder: '812 3456 7890', inputMode: 'numeric',
            prefix: <span style={{ padding: '0 var(--space-12)', font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>+62</span>,
            onChange: (e) => setField('phone', e.target.value.replace(/\D/g, '').slice(0, 14)),
          })}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'var(--space-12)' }}>
            {field('firstName', { label: 'Nama Depan', placeholder: 'Budi', onChange: (e) => setField('firstName', e.target.value) })}
            {field('lastName', {
              label: 'Nama Belakang', placeholder: 'Santoso', required: !lastNameOptional, sublabel: lastNameOptional ? '(Opsional)' : undefined,
              onChange: (e) => setField('lastName', e.target.value),
            })}
          </div>
          <Select label="Role" required disabled value="TL" options={ROLE_OPTIONS} hint="Fase ini hanya untuk Team Leader." />
        </div>
        <ModalFooter>
          <Button variant="stroke" tone="neutral" size="sm" disabled={saving} onClick={requestCancel}>Batal</Button>
          <Button size="sm" disabled={saveDisabled} onClick={submit}>{saving ? 'Menyimpan...' : 'Simpan'}</Button>
        </ModalFooter>
      </Modal>

      <Modal open={confirmOpen} onClose={() => setConfirmOpen(false)} width={400} style={{ overflow: 'visible', background: 'transparent', boxShadow: 'none' }}>
        <StatusModal status="warning" title="Batalkan penambahan pengguna?"
          actions={<>
            <Button variant="stroke" tone="neutral" size="sm" fullWidth onClick={() => setConfirmOpen(false)}>Lanjutkan Mengisi</Button>
            <Button tone="error" size="sm" fullWidth onClick={close}>Ya, Batalkan</Button>
          </>}>
          Data yang sudah diisi akan hilang.
        </StatusModal>
      </Modal>
    </>
  );
}
