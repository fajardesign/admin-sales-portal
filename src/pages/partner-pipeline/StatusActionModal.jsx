import { useState } from 'react';
import { Alert, CheckboxLabel, FileUploadArea, FileUploadCard, LinkButton, TextArea, TextInput } from '@ds/index.js';
import { ActionModal } from '../../components/ActionModal.jsx';
import { ApiError, changeStatus } from '../../api/mockApi.js';
import { useToast } from '../../components/Toaster.jsx';
import { PARTNER_STATUS } from '../../lib/constants.js';
import { validatePksFile, validateReason } from '../../lib/validation.js';
import { PksChannelPicker } from './PksModals.jsx';
import { ACTIONS } from './actions.js';


/** Dampak Nonaktifkan (PRD Scope 1 FR-013, SCR-05): jumlah toko aktif, SA/SR yang ditugaskan, akun PIC. */
function impactText(p) {
  const stores = p.stores.filter((s) => s.status === 'ACTIVE');
  const people = new Set(stores.flatMap((s) => s.assigned)).size;
  return `${stores.length} toko akan nonaktif, ${people} SA/SR dilepas, dan akun PIC dinonaktifkan.`;
}

/** W3d · Konfirmasi "Ubah status menjadi {status}?" dengan isian sesuai aksi. */
export function StatusActionModal({ partner, to, user, onClose, onDone, onGoStores }) {
  const toast = useToast();
  const a = ACTIONS[to];
  const [reason, setReason] = useState('');
  const [via, setVia] = useState(null); // PKS Dikirim: kanal wajib dipilih Admin (PRD Scope 1 v2 FR-009)
  const [privyRef, setPrivyRef] = useState('');
  const [signedChecked, setSignedChecked] = useState(false);
  const [file, setFile] = useState(null);
  const [touched, setTouched] = useState(false);
  const [busy, setBusy] = useState(false);
  const [failure, setFailure] = useState(null);
  // PRD Scope 1 v2 FR-010 / AC-028: aktivasi ditolak bila ada toko tanpa Kode Referral.
  const missingRef = to === 'ACTIVE' ? partner.stores.filter((s) => !s.referralCode) : []; // galat aktivasi ditampilkan di modal, modal tetap terbuka (PRD Scope 1 §11)

  const errs = {
    reason: a.reason ? validateReason(reason) : undefined,
    via: to === 'WAITING_PKS' && !via ? 'Pilih kanal' : undefined,
    signed: to === 'ACTIVE' && !signedChecked ? 'Konfirmasi wajib dicentang' : undefined,
    file: to === 'ACTIVE' ? validatePksFile(file) : undefined,
  };
  const invalid = Object.values(errs).some(Boolean);

  async function confirm() {
    setTouched(true);
    if (invalid) return;
    setBusy(true);
    setFailure(null);
    try {
      const p = await changeStatus(partner.id, to, { reason: reason.trim(), via, privyRef, file }, user);
      toast('success', to === 'WAITING_PKS' ? 'Status diperbarui: Waiting PKS.' : 'Status berhasil diperbarui.');
      onDone(p);
    } catch (e) {
      setBusy(false);
      if (e instanceof ApiError && e.code === 'PIC_FAILED') setFailure('Aktivasi gagal: akun PIC tidak dapat dibuat.');
      else if (e instanceof ApiError && e.code === 'REFERRAL_MISSING') setFailure('Kode referral wajib diisi untuk semua toko sebelum aktivasi.');
      else if (e instanceof ApiError && e.code === 'PIC_CONFLICT') setFailure('Email atau nomor HP PIC sudah digunakan pengguna lain.');
      else toast('error', e instanceof ApiError && e.code === 'CONFLICT' ? 'Status tidak dapat diubah.' : 'Gagal memperbarui status. Coba lagi.');
    }
  }

  return (
    <ActionModal open onClose={onClose} title={to === 'WAITING_PKS' ? 'PKS dikirim' : `Ubah status menjadi ${PARTNER_STATUS[to].label}?`} description={`${partner.partnerName} · ${partner.registrationNumber}`}
      icon={a.icon} status={a.status} confirmLabel={to === 'WAITING_PKS' ? 'Simpan' : a.label} confirmTone={a.status === 'error' ? 'error' : 'primary'} busy={busy} onConfirm={confirm}
      confirmDisabled={(to === 'ACTIVE' && (!signedChecked || missingRef.length > 0)) || (to === 'WAITING_PKS' && !via)}>
      <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{a.desc}</span>
      {a.final && <Alert status="warning" size="sm" title="Status ini final dan tidak dapat diubah kembali." />}
      {to === 'INACTIVE' && <Alert status="error" size="sm" title={impactText(partner)} />}
      {to === 'CANCELLED' && partner.status === 'WAITING_PKS' && <Alert status="warning" size="sm" title="Batalkan juga dokumen PKS di Privy." />}
      {missingRef.length > 0 && (
        <Alert status="error" size="sm" title="Kode referral wajib diisi untuk semua toko sebelum aktivasi.">
          <span style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
            {missingRef.map((s) => <span key={s.id}>{s.name}: Kode referral wajib diisi</span>)}
            {onGoStores && <LinkButton size="sm" onClick={onGoStores}>Buka tab Toko</LinkButton>}
          </span>
        </Alert>
      )}
      {failure && failure !== 'Kode referral wajib diisi untuk semua toko sebelum aktivasi.' && <Alert status="error" size="sm" title={failure} />}
      {to === 'WAITING_PKS' && (
        <>
          <PksChannelPicker partner={partner} value={via} onChange={setVia} />
          <TextInput label="Referensi dokumen Privy (opsional)" value={privyRef} onChange={(e) => setPrivyRef(e.target.value)} placeholder="Contoh: nomor dokumen di Privy" />
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
