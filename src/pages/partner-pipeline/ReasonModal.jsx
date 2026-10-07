import { useState } from 'react';
import { TextArea } from '@ds/index.js';
import { ActionModal } from '../../components/ActionModal.jsx';
import { validateReason } from '../../lib/validation.js';

/** Alasan "Perlu Revisi" untuk dokumen / Data Rekening (wajib, maks. 255). */
export function ReasonModal({ open, title, description, initial = '', onClose, onSubmit }) {
  const [v, setV] = useState(initial);
  const [touched, setTouched] = useState(false);
  const [busy, setBusy] = useState(false);
  const err = validateReason(v);
  async function confirm() {
    setTouched(true);
    if (err) return;
    setBusy(true);
    await onSubmit(v.trim());
    setBusy(false);
  }
  return (
    <ActionModal open={open} onClose={onClose} title={title} description={description} icon="EditLine" confirmLabel="Simpan" busy={busy} onConfirm={confirm}>
      <TextArea label="Alasan" required maxLength={255} rows={3} value={v} onChange={setV}
        placeholder="Contoh: Foto KTP buram, mohon unggah ulang" error={touched ? err : undefined} />
    </ActionModal>
  );
}
