import { useState } from 'react';
import { Alert, TextArea, TextInput } from '@ds/index.js';
import { ActionModal } from '../../components/ActionModal.jsx';
import { MapPreview } from '../../components/MapPreview.jsx';
import { useToast } from '../../components/Toaster.jsx';
import { ApiError, updateStoreLocation } from '../../api/mockApi.js';
import { validateReason } from '../../lib/validation.js';

const COORD = /^-?\d{1,3}(\.\d{1,8})?$/;
const latErr = (v) => (!v.trim() ? 'Latitude wajib diisi' : !COORD.test(v.trim()) || +v < -11 || +v > 6 ? 'Latitude harus di wilayah Indonesia (-11 s.d. 6)' : undefined);
const lngErr = (v) => (!v.trim() ? 'Longitude wajib diisi' : !COORD.test(v.trim()) || +v < 94 || +v > 142 ? 'Longitude harus di wilayah Indonesia (94 s.d. 142)' : undefined);

/**
 * Ubah lokasi toko (keputusan 2026-10-19, Q8; PRD 1.1 AC-039): hanya Admin, setelah partner Active, alasan wajib (Simpan nonaktif
 * sampai alasan diisi). Koordinat baru langsung dipakai
 * sebagai titik radius check-in kunjungan; perubahan tercatat di Riwayat Status partner.
 */
export function ChangeLocationModal({ partnerId, store, user, onClose, onSaved }) {
  const toast = useToast();
  const [lat, setLat] = useState(String(store.lat));
  const [lng, setLng] = useState(String(store.lng));
  const [reason, setReason] = useState('');
  const [touched, setTouched] = useState(false);
  const [busy, setBusy] = useState(false);
  const errs = { lat: latErr(lat), lng: lngErr(lng), reason: validateReason(reason) };
  const same = +lat === store.lat && +lng === store.lng;
  const show = (k) => (touched ? errs[k] : undefined);

  async function save() {
    setTouched(true);
    if (Object.values(errs).some(Boolean) || same) return;
    setBusy(true);
    try {
      const p = await updateStoreLocation(partnerId, store.id, lat, lng, reason, user);
      toast('success', 'Lokasi toko diperbarui.');
      onSaved(p);
    } catch (e) {
      setBusy(false);
      toast('error', e instanceof ApiError && e.code === 'CONFLICT' ? 'Lokasi hanya bisa diubah untuk toko aktif.' : 'Gagal mengubah lokasi. Coba lagi.');
    }
  }

  return (
    <ActionModal open onClose={onClose} icon="MapPinLine" title="Ubah lokasi toko" description={store.name} confirmLabel="Simpan lokasi"
      busy={busy} onConfirm={save} confirmDisabled={same || !reason.trim()} width={560}>
      <Alert status="information" size="sm" title="Titik check-in ikut berubah">
        SA/SR dan TL harus check-in dalam radius lokasi baru mulai kunjungan berikutnya.
      </Alert>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'var(--space-12)' }}>
        <TextInput label="Latitude" required value={lat} onChange={(e) => setLat(e.target.value)} placeholder="Contoh: -5.147665" error={show('lat')} />
        <TextInput label="Longitude" required value={lng} onChange={(e) => setLng(e.target.value)} placeholder="Contoh: 119.432732" error={show('lng')} />
      </div>
      {!errs.lat && !errs.lng && <MapPreview lat={+lat} lng={+lng} label={store.name} />}
      <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>Lokasi saat ini: Lat {store.lat} · Long {store.lng}</span>
      <TextArea label="Alasan perubahan" required maxLength={255} rows={2} value={reason} onChange={setReason}
        placeholder="Contoh: Toko pindah ke ruko sebelah" error={show('reason')} />
    </ActionModal>
  );
}
