import { useState } from 'react';
import { Button, FileUploadArea, FileUploadCard, StatusBadge, TextArea, TextInput } from '@ds/index.js';
import { ActionModal } from '../../components/ActionModal.jsx';
import { useToast } from '../../components/Toaster.jsx';
import { ApiError, REFERRAL_EDITABLE, setStoreReferral } from '../../api/mockApi.js';
import { REFERRAL_FORMAT_MSG, validateQrFile, validateReason, validateReferralCode } from '../../lib/validation.js';

const ERR = {
  FORMAT: ['code', REFERRAL_FORMAT_MSG], DUPLICATE: ['code', 'Kode referral sudah dipakai toko lain'], QR_REQUIRED: ['qr', 'QR wajib diunggah'],
  QR_NEW_REQUIRED: ['qr', 'Kode berubah, unggah QR yang baru.'], QR_TYPE: ['qr', 'Format file harus PNG atau JPG.'], QR_SIZE: ['qr', 'Ukuran file maksimal 2 MB.'],
  REASON_REQUIRED: ['reason', 'Informasi wajib diisi'],
};
const readAsUrl = (file) => new Promise((resolve) => {
  try { const r = new FileReader(); r.onload = () => resolve(r.result); r.onerror = () => resolve(''); r.readAsDataURL(file); } catch { resolve(''); }
});

/** Pratinjau QR kecil (FR-004: Toko tab dan Toko Aktif menampilkan QR). */
export function QrThumb({ qr, size = 40 }) {
  if (!qr) return <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>Belum diunggah</span>;
  return <img src={qr.url} alt={`QR ${qr.name}`} title={qr.name} width={size} height={size}
    style={{ width: size, height: size, display: 'block', borderRadius: 'var(--rounded-8)', boxShadow: 'var(--shadow-stroke)', background: 'var(--bg-white-0)' }} />;
}

/**
 * SCR-07 Kode Referral + QR per toko (PRD Scope 1 v1.1 FR-019): tampilan kode + QR dan tombol yang membuka modal. Hanya Admin;
 * Under Review s.d. Active (Rejected, Cancelled, Inactive: hanya baca). Kosong → "Belum diisi" (chip "Kode referral wajib diisi"
 * saat aktivasi menunggu).
 */
export function ReferralCodeField({ partnerId, partnerStatus, store, user, required = false, showQr = true, onSaved }) {
  const [open, setOpen] = useState(false);
  const canEdit = user?.role === 'REVIEWER' && REFERRAL_EDITABLE.includes(partnerStatus);
  const waiting = store.status === 'WAITING_REFERRAL';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-8)', flexWrap: 'wrap' }}>
      {store.referralCode
        ? <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>{store.referralCode}</span>
        : <StatusBadge status={required ? 'failed' : 'pending'}>{required ? 'Kode referral wajib diisi' : 'Belum diisi'}</StatusBadge>}
      {showQr && store.referralCode && <QrThumb qr={store.referralQr} size={32} />}
      {canEdit && (
        <Button size="2xs" variant={waiting ? 'filled' : 'stroke'} tone={waiting ? 'primary' : 'neutral'} onClick={() => setOpen(true)}>
          {waiting ? 'Isi kode & aktifkan' : store.referralCode ? 'Ubah kode & QR' : 'Isi kode & QR'}
        </Button>
      )}
      {open && <ReferralModal partnerId={partnerId} partnerStatus={partnerStatus} store={store} user={user} onClose={() => setOpen(false)} onSaved={(p) => { setOpen(false); onSaved?.(p); }} />}
    </span>
  );
}

/** Modal kode + QR. Permintaan tambah toko (FR-023): "Isi kode referral dan aktifkan toko" + "Simpan & aktifkan". */
function ReferralModal({ partnerId, partnerStatus, store, user, onClose, onSaved }) {
  const toast = useToast();
  const waiting = store.status === 'WAITING_REFERRAL';
  const [code, setCode] = useState(store.referralCode ?? '');
  const [file, setFile] = useState(null);
  const [reason, setReason] = useState('');
  const [errs, setErrs] = useState({});
  const [touched, setTouched] = useState(false);
  const [busy, setBusy] = useState(false);
  const trimmed = code.trim().toUpperCase();
  const codeChanged = !!store.referralCode && trimmed !== store.referralCode;
  const needReason = partnerStatus === 'ACTIVE' && codeChanged;
  const local = {
    code: validateReferralCode(code),
    qr: file ? validateQrFile(file) : !store.referralQr ? 'QR wajib diunggah' : codeChanged ? 'Kode berubah, unggah QR yang baru.' : undefined,
    reason: needReason ? validateReason(reason) : undefined,
  };
  const shown = (k) => errs[k] ?? (touched ? local[k] : undefined);

  async function save() {
    setTouched(true);
    if (Object.values(local).some(Boolean)) return;
    setBusy(true); setErrs({});
    try {
      const qr = file ? { name: file.name, size: file.size, type: file.type, url: await readAsUrl(file) } : null;
      const p = await setStoreReferral(partnerId, store.id, code, qr, reason, user);
      toast('success', waiting ? 'Toko aktif. Menunggu penugasan TL oleh APL.' : 'Kode referral dan QR disimpan.');
      onSaved(p);
    } catch (e) {
      setBusy(false);
      if (e instanceof ApiError && ERR[e.code]) setErrs({ [ERR[e.code][0]]: ERR[e.code][1] });
      else toast('error', 'Gagal menyimpan kode referral. Coba lagi.');
    }
  }

  return (
    <ActionModal open onClose={onClose} icon="Hashtag" busy={busy} onConfirm={save}
      title={waiting ? 'Isi kode referral dan aktifkan toko' : store.referralCode ? 'Ubah kode referral' : 'Isi kode referral'}
      description={store.name} confirmLabel={waiting ? 'Simpan & aktifkan' : 'Simpan'}>
      {waiting && (
        <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>
          Toko ditambahkan dari aplikasi mobile dan belum aktif. Setelah kode dan QR disimpan, toko langsung aktif dan muncul sebagai "Belum ada TL" untuk APL area ini.
        </span>
      )}
      <TextInput label="Kode Referral" required value={code} placeholder="Masukkan kode referral" aria-label={`Kode referral ${store.name}`}
        onChange={(e) => { setCode(e.target.value); setErrs((x) => ({ ...x, code: undefined })); }}
        hint={shown('code') ? undefined : 'Huruf dan angka, maks. 20 karakter. Contoh: T1225009 atau PARCEL01.'} error={shown('code')} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
        <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>Upload QR <span style={{ color: 'var(--state-error-base)' }}>*</span></span>
        {file
          ? <FileUploadCard name={file.name} size={`${(file.size / 1024).toFixed(0)} KB`} state={local.qr ? 'error' : 'success'} onRemove={() => setFile(null)} />
          : store.referralQr && !codeChanged
            ? (
              <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)' }}>
                <QrThumb qr={store.referralQr} size={64} />
                <span style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
                  <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{store.referralQr.name}</span>
                  <label style={{ font: 'var(--label-sm)', color: 'var(--primary-base)', cursor: 'pointer' }}>
                    Ganti QR
                    <input type="file" accept="image/png,image/jpeg" aria-label="Ganti QR" style={{ display: 'none' }} onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
                  </label>
                </span>
              </span>
            )
            : <FileUploadArea title="Pilih gambar QR" description="QR untuk kode ini. PNG atau JPG, maks. 2 MB." buttonLabel="Pilih File" onFiles={(fs) => setFile(fs[0] ?? null)} />}
        {shown('qr') && <span role="alert" style={{ font: 'var(--paragraph-xs)', color: 'var(--state-error-base)' }}>{shown('qr')}</span>}
      </div>
      {needReason && (
        <TextArea label="Alasan perubahan" required maxLength={255} rows={2} value={reason} onChange={setReason} placeholder="Contoh: Kode referral diganti" error={shown('reason')} />
      )}
    </ActionModal>
  );
}
