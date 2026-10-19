import { useState } from 'react';
import { TextArea } from '@ds/index.js';
import { ActionModal } from '../../components/ActionModal.jsx';
import { useToast } from '../../components/Toaster.jsx';
import { ApiError, cancelStoreRequest } from '../../api/mockApi.js';
import { validateReason } from '../../lib/validation.js';

/**
 * Batalkan permintaan tambah toko (keputusan 2026-10-19, Q4): hanya Admin, alasan wajib. Toko menjadi "Dibatalkan", tidak aktif,
 * tanpa kode referral. Bila toko sudah tidak menunggu kode (diaktifkan/dibatalkan orang lain), tampil pesan muat ulang.
 */
export function CancelStoreRequestModal({ store, user, onClose, onDone }) {
  const toast = useToast();
  const [reason, setReason] = useState('');
  const [touched, setTouched] = useState(false);
  const [busy, setBusy] = useState(false);
  const err = validateReason(reason);

  async function confirm() {
    setTouched(true);
    if (err) return;
    setBusy(true);
    try {
      await cancelStoreRequest(store.partnerId, store.id, reason, user);
      toast('success', `Permintaan tambah toko ${store.name} dibatalkan.`);
      onDone();
    } catch (e) {
      setBusy(false);
      if (e instanceof ApiError && e.code === 'STALE') { toast('error', 'Status toko ini sudah berubah. Daftar dimuat ulang.'); onDone(); return; }
      toast('error', 'Gagal membatalkan permintaan. Coba lagi.');
    }
  }

  return (
    <ActionModal open onClose={onClose} icon="CloseLine" status="error" busy={busy} onConfirm={confirm} confirmTone="error"
      title="Batalkan permintaan tambah toko?" description={`${store.name} · ${store.partnerName}`} confirmLabel="Batalkan permintaan">
      <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>
        Toko tidak akan diaktifkan dan tidak muncul di daftar Toko Aktif. Riwayat pembatalan tercatat di partner ini.
      </span>
      <TextArea label="Alasan pembatalan" required maxLength={255} rows={2} value={reason} onChange={setReason}
        placeholder="Contoh: Toko ditambahkan ganda" error={touched ? err : undefined} />
    </ActionModal>
  );
}
