import { Button, Icon, LinkButton } from '@ds/index.js';
import { KeyValueGrid, SectionCard } from '../../../components/KeyValueGrid.jsx';
import { PKS_STATUS, PKS_VIA } from '../../../lib/constants.js';
import { formatDateTime } from '../../../lib/format.js';

/** Tab PKS (Privy) — fase 1 tanpa integrasi API: reviewer mengirim & mengecek di Privy web, portal hanya mencatat log. */
export function PksTab({ partner: p, onEditDelivery, onUpload, onViewFile }) {
  const k = p.pks;
  const hint = {
    UNDER_REVIEW: 'PKS dikirim setelah status Verified.', REVISION_REQUIRED: 'PKS dikirim setelah status Verified.',
    VERIFIED: 'Kirim PKS di Privy web (via Privy ID atau email undangan), lalu klik "PKS Dikirim" di atas untuk mencatatnya.',
    WAITING_PKS: 'Setelah PKS terlihat sudah ditandatangani di Privy web, klik "Konfirmasi PKS Ditandatangani & Aktifkan" di atas.',
  }[p.status];
  return (
    <SectionCard title="PKS (Privy)"
      actions={<>
        {p.status === 'WAITING_PKS' && <Button size="xs" variant="stroke" tone="neutral" leftIcon={<Icon name="EditLine" />} onClick={onEditDelivery}>Ubah Data Pengiriman PKS</Button>}
        {p.status === 'ACTIVE' && !k.file && <Button size="xs" variant="stroke" tone="neutral" leftIcon={<Icon name="UploadLine" />} onClick={onUpload}>Unggah Dokumen PKS (opsional)</Button>}
      </>}>
      <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>PKS dikirim dan ditandatangani di Privy web. Portal ini hanya mencatat log pengiriman dan konfirmasi tanda tangan.</span>
      <KeyValueGrid items={[
        { label: 'Privy ID', value: p.privyId ?? 'Tidak diisi' },
        { label: 'Email undangan', value: k.inviteEmail },
        { label: 'Dikirim via', value: k.sentVia ? PKS_VIA[k.sentVia] : null },
        { label: 'Tanggal PKS dikirim', value: formatDateTime(k.sentAt) },
        { label: 'Status PKS', value: PKS_STATUS[k.status] },
        { label: 'Dikonfirmasi oleh / pada', value: k.confirmedBy ? `${k.confirmedBy} · ${formatDateTime(k.confirmedAt)}` : null },
        { label: 'Dokumen PKS', value: k.file ? <LinkButton onClick={onViewFile} leftIcon={<Icon name="FileTextLine" size={16} />}>{k.file.name}</LinkButton> : null, hint: k.file ? `Diunggah ${k.file.by} · ${formatDateTime(k.file.at)}` : undefined },
      ]} />
      {hint && <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{hint}</span>}
    </SectionCard>
  );
}
