import { useState } from 'react';
import { Alert, TextArea } from '@ds/index.js';
import { ActionModal } from '../../components/ActionModal.jsx';
import { useToast } from '../../components/Toaster.jsx';
import { disableUser, resendInvite } from '../../api/mockApi.js';
import { ROLES } from '../../lib/constants.js';
import { validateReason } from '../../lib/validation.js';

/** Kirim ulang tautan aktivasi (Pending/Expired). */
export function ResendModal({ target, user, onClose, onDone }) {
  const toast = useToast();
  const [busy, setBusy] = useState(false);
  async function send() {
    setBusy(true);
    const u = await resendInvite(target.id, user);
    toast('success', 'Tautan aktivasi berhasil dikirim ulang.');
    onDone(u);
  }
  return (
    <ActionModal open onClose={onClose} title="Kirim ulang tautan aktivasi?" description={`${target.fullName} · ${ROLES[target.role].label}`} icon="SendPlaneLine"
      confirmLabel="Kirim Ulang" busy={busy} onConfirm={send} width={440}>
      <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>
        Tautan baru dikirim ke <strong style={{ color: 'var(--text-strong-950)', fontWeight: 'inherit' }}>{target.email}</strong> dan berlaku 24 jam. Tautan sebelumnya tidak berlaku lagi.
      </span>
    </ActionModal>
  );
}

/** Nonaktifkan pengguna (final di fase ini), alasan wajib; peringatan bila masih menjadi atasan pengguna aktif. */
export function DisableModal({ target, user, onClose, onDone }) {
  const toast = useToast();
  const [reason, setReason] = useState('');
  const [touched, setTouched] = useState(false);
  const [busy, setBusy] = useState(false);
  const err = validateReason(reason);
  async function confirm() {
    setTouched(true);
    if (err) return;
    setBusy(true);
    const u = await disableUser(target.id, reason.trim(), user);
    toast('success', 'Pengguna berhasil dinonaktifkan.');
    onDone(u);
  }
  return (
    <ActionModal open onClose={onClose} title={`Nonaktifkan ${target.fullName}?`} description={`${ROLES[target.role].label} · ${target.email}`} icon="ForbidFill" status="error"
      confirmLabel="Nonaktifkan" confirmTone="error" busy={busy} onConfirm={confirm}>
      <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>
        Akun dinonaktifkan di Keycloak, sesi yang aktif berakhir, dan pengguna tidak bisa login lagi. Status ini tidak dapat dikembalikan dari portal.
      </span>
      {target.subordinates.length > 0 && (
        <Alert status="warning" size="lg" title={`Masih menjadi atasan ${target.subordinates.length} pengguna aktif`}>
          {target.subordinates.map((s) => `${s.name} (${s.role})`).join(', ')}. Atasan mereka perlu dipindahkan secara terpisah.
        </Alert>
      )}
      <TextArea label="Alasan" required maxLength={255} rows={3} value={reason} onChange={setReason} placeholder="Contoh: Resign per 31 Okt 2026" error={touched ? err : undefined} />
    </ActionModal>
  );
}
