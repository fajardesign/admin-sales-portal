import { useState } from 'react';
import { FileUploadArea, FileUploadCard, RadioGroup, TextInput } from '@ds/index.js';
import { ActionModal } from '../../components/ActionModal.jsx';
import { useToast } from '../../components/Toaster.jsx';
import { updatePksDelivery, uploadPks } from '../../api/mockApi.js';
import { EMAIL_RE, validatePksFile } from '../../lib/validation.js';

/** Waiting PKS — "Ubah Data Pengiriman PKS": catat pengiriman ulang; tanggal kirim pertama tidak berubah. */
export function PksDeliveryModal({ partner, user, onClose, onDone }) {
  const toast = useToast();
  const [via, setVia] = useState(partner.pks.sentVia ?? 'EMAIL');
  const [email, setEmail] = useState(partner.pks.inviteEmail ?? partner.pic.email);
  const [touched, setTouched] = useState(false);
  const [busy, setBusy] = useState(false);
  const err = via === 'EMAIL' ? (!email.trim() ? 'Informasi wajib diisi' : !EMAIL_RE.test(email.trim()) ? 'Format tidak valid' : undefined) : undefined;
  async function save() {
    setTouched(true);
    if (err) return;
    setBusy(true);
    const p = await updatePksDelivery(partner.id, { via, inviteEmail: email.trim().toLowerCase() }, user);
    toast('success', 'Data pengiriman PKS diperbarui.');
    onDone(p);
  }
  return (
    <ActionModal open onClose={onClose} title="Ubah Data Pengiriman PKS" description="Catat bila PKS dikirim ulang di Privy web ke Privy ID atau email lain. Tanggal kirim pertama tidak berubah."
      icon="SendPlaneLine" confirmLabel="Simpan" busy={busy} onConfirm={save}>
      <RadioGroup value={via} onChange={setVia} options={[
        { value: 'PRIVY_ID', label: 'Privy ID', description: partner.privyId ?? 'Tidak diisi saat pengajuan', disabled: !partner.privyId },
        { value: 'EMAIL', label: 'Email undangan' },
      ]} />
      {via === 'EMAIL' && <TextInput label="Email undangan" required leftIcon="MailLine" value={email} onChange={(e) => setEmail(e.target.value)} error={touched ? err : undefined} />}
    </ActionModal>
  );
}

/** Active — "Unggah Dokumen PKS (opsional)": PDF maks. 5 MB. */
export function PksUploadModal({ partner, user, onClose, onDone }) {
  const toast = useToast();
  const [file, setFile] = useState(null);
  const [touched, setTouched] = useState(false);
  const [busy, setBusy] = useState(false);
  const err = !file ? 'Pilih file PDF PKS.' : validatePksFile(file);
  async function save() {
    setTouched(true);
    if (err) return;
    setBusy(true);
    const p = await uploadPks(partner.id, file, user);
    toast('success', 'Dokumen PKS diunggah.');
    onDone(p);
  }
  return (
    <ActionModal open onClose={onClose} title="Unggah Dokumen PKS" description={`${partner.partnerName} · ${partner.registrationNumber}`} icon="UploadLine"
      confirmLabel="Unggah" busy={busy} onConfirm={save}>
      {file
        ? <FileUploadCard name={file.name} size={`${(file.size / 1024 / 1024).toFixed(2)} MB`} state={err ? 'error' : 'success'} onRemove={() => setFile(null)} />
        : <FileUploadArea title="Pilih file PDF PKS" description="PDF yang sudah ditandatangani, diunduh dari Privy web. Maks. 5 MB." buttonLabel="Pilih File" onFiles={(fs) => setFile(fs[0] ?? null)} />}
      {touched && err && <span role="alert" style={{ font: 'var(--paragraph-xs)', color: 'var(--state-error-base)' }}>{err}</span>}
    </ActionModal>
  );
}
