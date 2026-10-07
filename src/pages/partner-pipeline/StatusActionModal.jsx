import { useState } from 'react';
import { Alert, CheckboxLabel, FileUploadArea, FileUploadCard, RadioGroup, TextArea, TextInput } from '@ds/index.js';
import { ActionModal } from '../../components/ActionModal.jsx';
import { ApiError, changeStatus } from '../../api/mockApi.js';
import { useToast } from '../../components/Toaster.jsx';
import { PARTNER_STATUS } from '../../lib/constants.js';
import { EMAIL_RE, validatePksFile, validateReason } from '../../lib/validation.js';
import { ACTIONS } from './actions.js';


/** W3d · Konfirmasi "Ubah status menjadi {status}?" dengan isian sesuai aksi. */
export function StatusActionModal({ partner, to, user, onClose, onDone }) {
  const toast = useToast();
  const a = ACTIONS[to];
  const [reason, setReason] = useState('');
  const [via, setVia] = useState(partner.privyId ? 'PRIVY_ID' : 'EMAIL');
  const [inviteEmail, setInviteEmail] = useState(partner.pic.email);
  const [signedChecked, setSignedChecked] = useState(false);
  const [file, setFile] = useState(null);
  const [touched, setTouched] = useState(false);
  const [busy, setBusy] = useState(false);

  const errs = {
    reason: a.reason ? validateReason(reason) : undefined,
    inviteEmail: to === 'WAITING_PKS' && via === 'EMAIL' ? (!inviteEmail.trim() ? 'Informasi wajib diisi' : !EMAIL_RE.test(inviteEmail.trim()) ? 'Format tidak valid' : undefined) : undefined,
    signed: to === 'ACTIVE' && !signedChecked ? 'Konfirmasi wajib dicentang' : undefined,
    file: to === 'ACTIVE' ? validatePksFile(file) : undefined,
  };
  const invalid = Object.values(errs).some(Boolean);

  async function confirm() {
    setTouched(true);
    if (invalid) return;
    setBusy(true);
    try {
      const p = await changeStatus(partner.id, to, { reason: reason.trim(), via, inviteEmail: inviteEmail.trim().toLowerCase(), file }, user);
      toast('success', 'Status berhasil diperbarui.');
      onDone(p);
    } catch (e) {
      setBusy(false);
      toast('error', e instanceof ApiError && e.code === 'CONFLICT' ? 'Status tidak dapat diubah.' : 'Gagal memperbarui status. Coba lagi.');
    }
  }

  return (
    <ActionModal open onClose={onClose} title={`Ubah status menjadi ${PARTNER_STATUS[to].label}?`} description={`${partner.partnerName} · ${partner.registrationNumber}`}
      icon={a.icon} status={a.status} confirmLabel={a.label} confirmTone={a.status === 'error' ? 'error' : 'primary'} busy={busy} onConfirm={confirm}
      confirmDisabled={to === 'ACTIVE' && !signedChecked}>
      <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{a.desc}</span>
      {a.final && <Alert status="warning" size="sm" title="Status ini final dan tidak dapat diubah kembali." />}
      {to === 'WAITING_PKS' && (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>Dikirim via</span>
            <RadioGroup value={via} onChange={setVia} options={[
              { value: 'PRIVY_ID', label: 'Privy ID', description: partner.privyId ?? 'Tidak diisi saat pengajuan', disabled: !partner.privyId },
              { value: 'EMAIL', label: 'Email undangan' },
            ]} />
          </div>
          {via === 'EMAIL' && (
            <TextInput label="Email undangan" required leftIcon="MailLine" value={inviteEmail} onChange={(e) => setInviteEmail(e.target.value)}
              error={touched ? errs.inviteEmail : undefined} />
          )}
        </>
      )}
      {to === 'ACTIVE' && (
        <>
          <CheckboxLabel checked={signedChecked} onChange={setSignedChecked} label="Saya sudah memastikan di Privy web bahwa PKS sudah ditandatangani partner." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>Dokumen PKS yang sudah ditandatangani <span style={{ color: 'var(--text-sub-600)', font: 'var(--paragraph-sm)' }}>(Opsional)</span></span>
            {file
              ? <FileUploadCard name={file.name} size={`${(file.size / 1024 / 1024).toFixed(2)} MB`} state={errs.file ? 'error' : 'success'} onRemove={() => setFile(null)} />
              : <FileUploadArea title="Pilih file PDF PKS" description="PDF, maks. 5 MB. Bisa juga diunggah nanti." buttonLabel="Pilih File" onFiles={(fs) => setFile(fs[0] ?? null)} />}
            {errs.file && <span role="alert" style={{ font: 'var(--paragraph-xs)', color: 'var(--state-error-base)' }}>{errs.file}</span>}
          </div>
        </>
      )}
      {a.reason && (
        <TextArea label="Alasan" required maxLength={255} rows={3} value={reason} onChange={setReason}
          placeholder={to === 'INACTIVE' ? 'Contoh: Partner berhenti bekerja sama per Oktober 2026' : 'Tulis alasan perubahan status'}
          error={touched ? errs.reason : undefined} />
      )}
    </ActionModal>
  );
}
