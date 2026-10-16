import { useState } from 'react';
import { FileUploadArea, FileUploadCard, RadioGroup, TextArea } from '@ds/index.js';
import { ActionModal } from '../../components/ActionModal.jsx';
import { useToast } from '../../components/Toaster.jsx';
import { updatePksDelivery, uploadPks } from '../../api/mockApi.js';
import { validatePksFile, validateReason } from '../../lib/validation.js';

/**
 * Pilihan kanal PKS (PRD Scope 1 v2 FR-009, C3): Privy ID (nonaktif bila tidak diisi) atau Email PIC. Tidak ada isian email
 * terpisah; email PKS = Email PIC. Dipakai modal "PKS Dikirim" dan "Ubah Data Pengiriman PKS".
 */
export function PksChannelPicker({ partner, value, onChange }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
      <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>Pilih kanal yang dipakai untuk mengirim PKS:</span>
      <RadioGroup value={value ?? undefined} onChange={onChange} options={[
        { value: 'PRIVY_ID', label: partner.privyId ? `Privy ID: ${partner.privyId}` : 'Privy ID', description: partner.privyId ? undefined : 'Privy ID tidak diisi', disabled: !partner.privyId },
        { value: 'EMAIL_PIC', label: `Email PIC: ${partner.pic.email}` },
      ]} />
    </div>
  );
}

/** Waiting PKS — "Ubah Data Pengiriman PKS": kanal yang sama dengan PKS Dikirim; tanggal kirim pertama tidak berubah. */
export function PksDeliveryModal({ partner, user, onClose, onDone }) {
  const toast = useToast();
  const [via, setVia] = useState(partner.pks.sentVia);
  const [busy, setBusy] = useState(false);
  async function save() {
    if (!via) return;
    setBusy(true);
    const p = await updatePksDelivery(partner.id, { via }, user);
    toast('success', 'Data pengiriman PKS diperbarui.');
    onDone(p);
  }
  return (
    <ActionModal open onClose={onClose} title="Ubah Data Pengiriman PKS" description="Catat bila PKS dikirim ulang di Privy web lewat kanal lain. Tanggal kirim pertama tidak berubah."
      icon="SendPlaneLine" confirmLabel="Simpan" busy={busy} onConfirm={save} confirmDisabled={!via}>
      <PksChannelPicker partner={partner} value={via} onChange={setVia} />
    </ActionModal>
  );
}

/**
 * Active — "Unggah Dokumen PKS" (belum ada) atau "Ganti Dokumen PKS" (PRD Scope 1 v1.1 FR-024): PDF maks. 5 MB; mengganti wajib
 * alasan, versi lama tetap tersimpan di "Versi sebelumnya".
 */
export function PksUploadModal({ partner, user, onClose, onDone }) {
  const toast = useToast();
  const replacing = !!partner.pks.file;
  const [file, setFile] = useState(null);
  const [reason, setReason] = useState('');
  const [touched, setTouched] = useState(false);
  const [busy, setBusy] = useState(false);
  const err = !file ? 'Pilih file PDF PKS.' : validatePksFile(file);
  const reasonErr = replacing ? validateReason(reason) : undefined;
  async function save() {
    setTouched(true);
    if (err || reasonErr) return;
    setBusy(true);
    try {
      const p = await uploadPks(partner.id, file, user, reason);
      toast('success', replacing ? 'Dokumen PKS diganti.' : 'Dokumen PKS diunggah.');
      onDone(p);
    } catch {
      setBusy(false);
      toast('error', 'Gagal menyimpan dokumen PKS. Coba lagi.');
    }
  }
  return (
    <ActionModal open onClose={onClose} title={replacing ? 'Ganti Dokumen PKS' : 'Unggah Dokumen PKS'} description={`${partner.partnerName} · ${partner.registrationNumber}`} icon="UploadLine"
      confirmLabel={replacing ? 'Ganti' : 'Unggah'} busy={busy} onConfirm={save}>
      {replacing && <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>Dokumen saat ini: {partner.pks.file.name}. Versi lama tetap tersimpan.</span>}
      {file
        ? <FileUploadCard name={file.name} size={`${(file.size / 1024 / 1024).toFixed(2)} MB`} state={err ? 'error' : 'success'} onRemove={() => setFile(null)} />
        : <FileUploadArea title="Pilih file PDF PKS" description="PDF yang sudah ditandatangani, diunduh dari Privy web. Maks. 5 MB." buttonLabel="Pilih File" onFiles={(fs) => setFile(fs[0] ?? null)} />}
      {touched && err && <span role="alert" style={{ font: 'var(--paragraph-xs)', color: 'var(--state-error-base)' }}>{err}</span>}
      {replacing && <TextArea label="Alasan penggantian" required maxLength={255} rows={2} value={reason} onChange={setReason} placeholder="Contoh: Adendum PKS perubahan rekening" error={touched ? reasonErr : undefined} />}
    </ActionModal>
  );
}
