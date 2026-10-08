import { useState } from 'react';
import { Alert, CheckboxLabel, TextArea, TextInput } from '@ds/index.js';
import { ActionModal } from '../../components/ActionModal.jsx';
import { useToast } from '../../components/Toaster.jsx';
import { ApiError, changeEmail, disableUser, resendInvite, sendResetPassword } from '../../api/mockApi.js';
import { ROLES } from '../../lib/constants.js';
import { EMAIL_RE, MSG, validateReason } from '../../lib/validation.js';

/** Kirim ulang tautan aktivasi (Pending/Expired). */
export function ResendModal({ target, user, onClose, onDone }) {
  const toast = useToast();
  const [busy, setBusy] = useState(false);
  async function send() {
    setBusy(true);
    const u = await resendInvite(target.id, user);
    toast('success', 'Tautan aktivasi berhasil dikirim ulang.');
    onDone(u);
  }
  return (
    <ActionModal open onClose={onClose} title="Kirim ulang tautan aktivasi?" description={`${target.fullName} · ${ROLES[target.role].label}`} icon="SendPlaneLine"
      confirmLabel="Kirim Ulang" busy={busy} onConfirm={send} width={440}>
      <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>
        Tautan baru dikirim ke <strong style={{ color: 'var(--text-strong-950)', fontWeight: 'inherit' }}>{target.email}</strong> dan berlaku 3x24 jam. Tautan sebelumnya tidak berlaku lagi.
      </span>
    </ActionModal>
  );
}

/** Nonaktifkan pengguna (final di fase ini), alasan wajib; peringatan bila masih menjadi atasan pengguna aktif. */
export function DisableModal({ target, user, onClose, onDone }) {
  const toast = useToast();
  const [reason, setReason] = useState('');
  const [touched, setTouched] = useState(false);
  const [busy, setBusy] = useState(false);
  const err = validateReason(reason);
  async function confirm() {
    setTouched(true);
    if (err) return;
    setBusy(true);
    const u = await disableUser(target.id, reason.trim(), user);
    toast('success', 'Pengguna berhasil dinonaktifkan.');
    onDone(u);
  }
  return (
    <ActionModal open onClose={onClose} title={`Nonaktifkan ${target.fullName}?`} description={`${ROLES[target.role].label} · ${target.email}`} icon="ForbidFill" status="error"
      confirmLabel="Nonaktifkan" confirmTone="error" busy={busy} onConfirm={confirm}>
      <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>
        Akun dinonaktifkan di Keycloak, sesi yang aktif berakhir, dan pengguna tidak bisa login lagi. Status ini tidak dapat dikembalikan dari portal.
      </span>
      {target.subordinates.length > 0 && (
        <Alert status="warning" size="lg" title={`Masih menjadi atasan ${target.subordinates.length} pengguna aktif`}>
          {target.subordinates.map((s) => `${s.name} (${s.role})`).join(', ')}. Atasan mereka perlu dipindahkan secara terpisah.
        </Alert>
      )}
      <TextArea label="Alasan" required maxLength={255} rows={3} value={reason} onChange={setReason} placeholder="Contoh: Resign per 31 Okt 2026" error={touched ? err : undefined} />
    </ActionModal>
  );
}

/** US-A03 · Kirim tautan reset password (akun Active). */
export function ResetPasswordModal({ target, user, onClose, onDone }) {
  const toast = useToast();
  const [busy, setBusy] = useState(false);
  async function send() {
    setBusy(true);
    const u = await sendResetPassword(target.id, user);
    toast('success', 'Tautan reset password berhasil dikirim.');
    onDone(u);
  }
  return (
    <ActionModal open onClose={onClose} title={`Kirim tautan reset password ke ${target.email}?`} description={`${target.fullName} · ${ROLES[target.role].label}`} icon="Key2Line"
      confirmLabel="Kirim Tautan" busy={busy} onConfirm={send} width={480}>
      <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>
        Tautan berlaku 24 jam dan hanya bisa dipakai sekali. Sesi pengguna yang aktif akan berakhir; status akun tetap Active.
      </span>
    </ActionModal>
  );
}

/** US-A04 · Ubah email (Pending, Expired, Active): valid & unik, alasan wajib, berlaku langsung. */
export function ChangeEmailModal({ target, user, onClose, onDone }) {
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [sendReset, setSendReset] = useState(false);
  const [touched, setTouched] = useState(false);
  const [serverErr, setServerErr] = useState(null);
  const [busy, setBusy] = useState(false);
  const e = email.trim().toLowerCase();
  const emailErr = serverErr || (!e ? MSG.required : e.length > 254 || !EMAIL_RE.test(e) ? MSG.invalid : e === target.email ? 'Email baru sama dengan email saat ini' : undefined);
  const reasonErr = validateReason(reason);
  const active = target.accountStatus === 'ACTIVE';
  async function save() {
    setTouched(true);
    if (emailErr || reasonErr) return;
    setBusy(true);
    try {
      const u = await changeEmail(target.id, e, reason.trim(), sendReset, user);
      toast('success', 'Email berhasil diubah.');
      onDone(u);
    } catch (err) {
      setBusy(false);
      if (err instanceof ApiError && err.code === 'DUPLICATE') setServerErr('Email sudah terdaftar');
      else toast('error', 'Gagal mengubah email. Coba lagi.');
    }
  }
  return (
    <ActionModal open onClose={onClose} title="Ubah Email" description={`${target.fullName} · ${ROLES[target.role].label}`} icon="MailLine" confirmLabel="Simpan" busy={busy} onConfirm={save}>
      <TextInput label="Email saat ini" disabled value={target.email} />
      <TextInput label="Email baru" required leftIcon="MailLine" placeholder="nama@amarbank.co.id" value={email}
        onChange={(ev) => { setEmail(ev.target.value); setServerErr(null); }} error={touched ? emailErr : undefined} />
      <TextArea label="Alasan" required maxLength={255} rows={2} value={reason} onChange={setReason} placeholder="Contoh: Email kantor berubah" error={touched ? reasonErr : undefined} />
      {active && <CheckboxLabel checked={sendReset} onChange={setSendReset} label="Kirim tautan reset password ke email baru" />}
      <Alert status="information" size="sm" title={target.role === 'PARTNER'
        ? 'Perubahan berlaku langsung. Username akun PIC ikut berubah dan pemberitahuan dikirim ke email lama.'
        : 'Perubahan berlaku langsung dan pemberitahuan dikirim ke email lama.'} />
    </ActionModal>
  );
}
