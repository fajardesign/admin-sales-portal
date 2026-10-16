import { useState } from 'react';
import { Alert, Select, TextArea } from '@ds/index.js';
import { ActionModal } from '../../components/ActionModal.jsx';
import { useToast } from '../../components/Toaster.jsx';
import { areaChangeImpact, changePartnerArea } from '../../api/mockApi.js';
import { AREAS, areaName } from '../../lib/constants.js';
import { validateReason } from '../../lib/validation.js';

/**
 * FR-021 Ubah Area Partner (PRD Scope 1 v1.1 C6): Admin, Under Review s.d. Active, alasan wajib. Area berlaku untuk semua toko;
 * kursi TL/SA/SR yang terisi dilepas dan toko tampil sebagai "Belum ada TL" untuk APL area baru.
 */
export function ChangeAreaModal({ partner, user, onClose, onDone }) {
  const toast = useToast();
  const [areaId, setAreaId] = useState('');
  const [reason, setReason] = useState('');
  const [touched, setTouched] = useState(false);
  const [busy, setBusy] = useState(false);
  const impact = areaChangeImpact(partner.id);
  const err = validateReason(reason);
  async function save() {
    setTouched(true);
    if (!areaId || err) return;
    setBusy(true);
    try {
      const p = await changePartnerArea(partner.id, areaId, reason.trim(), user);
      toast('success', 'Area partner diubah.');
      onDone(p);
    } catch {
      setBusy(false);
      toast('error', 'Gagal mengubah area partner. Coba lagi.');
    }
  }
  return (
    <ActionModal open onClose={onClose} title="Ubah Area Partner" description={`${partner.partnerName} · area saat ini ${areaName(partner.areaId)}`} icon="MapPinLine"
      confirmLabel="Simpan" busy={busy} onConfirm={save} confirmDisabled={!areaId || !reason.trim()}>
      <Select label="Area baru" required placeholder="Pilih area" value={areaId || undefined} onChange={setAreaId}
        options={AREAS.filter((a) => a.id !== partner.areaId).map((a) => ({ value: String(a.id), label: a.name }))} hint="Berlaku untuk semua toko partner ini." />
      {impact.seats > 0 && <Alert status="warning" size="sm" title={`${impact.stores} toko dan ${impact.seats} penugasan TL/SA/SR akan dilepas.`} />}
      <TextArea label="Alasan" required maxLength={255} rows={2} value={reason} onChange={setReason} placeholder="Contoh: Partner pindah lokasi usaha" error={touched ? err : undefined} />
    </ActionModal>
  );
}
