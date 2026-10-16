import { useState } from 'react';
import { Button, StatusBadge, TextInput } from '@ds/index.js';
import { useToast } from '../../components/Toaster.jsx';
import { ApiError, REFERRAL_EDITABLE, setStoreReferral } from '../../api/mockApi.js';
import { REFERRAL_FORMAT_MSG, validateReason, validateReferralCode } from '../../lib/validation.js';

const ERR = { FORMAT: REFERRAL_FORMAT_MSG, DUPLICATE: 'Kode referral sudah dipakai toko lain', REASON_REQUIRED: 'Informasi wajib diisi' };

/**
 * SCR-07 Kode Referral per toko (PRD Scope 1 v2 FR-019): hanya Admin; Under Review s.d. Active (Rejected, Cancelled, Inactive:
 * hanya baca). Kosong → "Belum diisi" + chip peringatan ("Kode referral wajib diisi" saat aktivasi menunggu). Mengubah kode yang
 * sudah ada saat partner Active wajib alasan. Disimpan per baris.
 */
export function ReferralCodeField({ partnerId, partnerStatus, store, user, required = false, onSaved }) {
  const toast = useToast();
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(store.referralCode ?? '');
  const [reason, setReason] = useState('');
  const [error, setError] = useState(null);
  const [touched, setTouched] = useState(false);
  const [busy, setBusy] = useState(false);
  const canEdit = user?.role === 'REVIEWER' && REFERRAL_EDITABLE.includes(partnerStatus);
  const needReason = partnerStatus === 'ACTIVE' && !!store.referralCode;
  const formatErr = validateReferralCode(value);
  const reasonErr = needReason ? validateReason(reason) : undefined;

  async function save() {
    setTouched(true);
    if (formatErr || reasonErr) return;
    setBusy(true); setError(null);
    try {
      const p = await setStoreReferral(partnerId, store.id, value, reason, user);
      toast('success', 'Kode referral disimpan.');
      setEditing(false); setBusy(false); setTouched(false); setReason('');
      onSaved?.(p);
    } catch (e) {
      setBusy(false);
      if (e instanceof ApiError && ERR[e.code]) setError(ERR[e.code]);
      else toast('error', 'Gagal menyimpan kode referral. Coba lagi.');
    }
  }

  if (!editing) {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-8)', flexWrap: 'wrap' }}>
        {store.referralCode
          ? <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>{store.referralCode}</span>
          : <StatusBadge status={required ? 'failed' : 'pending'}>{required ? 'Kode referral wajib diisi' : 'Belum diisi'}</StatusBadge>}
        {canEdit && <Button size="2xs" variant="stroke" tone="neutral" onClick={() => { setValue(store.referralCode ?? ''); setEditing(true); }}>{store.referralCode ? 'Ubah' : 'Isi kode'}</Button>}
      </span>
    );
  }
  return (
    <span style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)', minWidth: 260 }}>
      <TextInput size="sm" value={value} placeholder="Masukkan kode dari AppsFlyer" aria-label={`Kode referral ${store.name}`}
        onChange={(e) => { setValue(e.target.value); setError(null); }}
        hint={touched && formatErr ? undefined : 'Diawali "OF", huruf dan angka, maks. 20 karakter. Contoh: OFSAS001.'}
        error={error ?? (touched ? formatErr : undefined)} />
      {needReason && (
        <TextInput size="sm" label="Alasan perubahan" required value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Contoh: Kode diganti di AppsFlyer"
          error={touched ? reasonErr : undefined} />
      )}
      <span style={{ display: 'flex', gap: 'var(--space-8)' }}>
        <Button size="2xs" onClick={save} disabled={busy}>{busy ? 'Menyimpan...' : 'Simpan'}</Button>
        <Button size="2xs" variant="stroke" tone="neutral" disabled={busy} onClick={() => { setEditing(false); setError(null); setTouched(false); }}>Batal</Button>
      </span>
    </span>
  );
}
