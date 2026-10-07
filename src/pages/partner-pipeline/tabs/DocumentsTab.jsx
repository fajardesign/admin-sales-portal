import { useState } from 'react';
import { Badge, Button, Icon, LinkButton } from '@ds/index.js';
import { RevisedBadge, SectionCard } from '../../../components/KeyValueGrid.jsx';
import { VerificationBadge } from '../../../components/Badges.jsx';
import { formatDateTime } from '../../../lib/format.js';

/** Tab Dokumen (PRD §2B): Dokumen Partner & Foto Toko, verifikasi Belum Dicek / Valid / Perlu Revisi (hanya Under Review). */
export function DocumentsTab({ partner: p, onView, onVerify }) {
  const editable = p.status === 'UNDER_REVIEW';
  const group = (level, title, hint) => (
    <SectionCard title={title}>
      <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)', marginTop: 'calc(-1 * var(--space-8))' }}>{hint}</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
        {p.documents.filter((d) => d.level === level).map((d) => <DocRow key={d.key} doc={d} editable={editable} onView={onView} onVerify={onVerify} />)}
      </div>
    </SectionCard>
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
      {!editable && <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>Verifikasi hanya dapat diubah saat status Under Review.</span>}
      {group('PARTNER', 'Dokumen Partner', 'JPG, PNG atau PDF, maks. 5 MB.')}
      {group('STORE', 'Foto Toko', 'Foto toko utama dari kamera saat pendaftaran.')}
    </div>
  );
}

function DocRow({ doc: d, editable, onView, onVerify }) {
  const [showOld, setShowOld] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)', padding: 'var(--space-12) var(--space-16)', borderRadius: 'var(--rounded-12)', boxShadow: 'var(--shadow-stroke)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)', flexWrap: 'wrap' }}>
        <Icon name={d.level === 'STORE' ? 'ImageLine' : 'FileTextLine'} />
        <div style={{ flex: 1, minWidth: 240, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)', flexWrap: 'wrap', font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>
            {d.label}
            <Badge color={d.mandatory ? 'blue' : 'gray'} size="sm">{d.mandatory ? 'Wajib' : 'Opsional'}</Badge>
            {d.revised && <RevisedBadge />}
          </span>
          <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>
            {d.file ? `${d.file.name} · Diunggah ${formatDateTime(d.file.uploadedAt)} · Versi ${d.file.version}` : 'Tidak diunggah'}
          </span>
        </div>
        {d.file && <VerificationBadge value={d.verification} />}
        {d.file && (
          <div style={{ display: 'flex', gap: 'var(--space-8)' }}>
            <Button size="xs" variant="stroke" tone="neutral" leftIcon={<Icon name="EyeLine" />} onClick={() => onView(d)}>Lihat</Button>
            {editable && <>
              <Button size="xs" variant={d.verification === 'VALID' ? 'lighter' : 'stroke'} tone={d.verification === 'VALID' ? 'primary' : 'neutral'} leftIcon={<Icon name="CheckLine" />} onClick={() => onVerify(d, 'VALID')} aria-label={`Valid: ${d.label}`}>Valid</Button>
              <Button size="xs" variant="stroke" tone="error" leftIcon={<Icon name="CloseLine" />} onClick={() => onVerify(d, 'NEEDS_REVISION')} aria-label={`Perlu Revisi: ${d.label}`}>Perlu Revisi</Button>
            </>}
          </div>
        )}
      </div>
      {d.verification === 'NEEDS_REVISION' && d.note && <span style={{ font: 'var(--paragraph-xs)', color: 'var(--state-error-base)', paddingLeft: 'var(--space-32)' }}>Alasan: {d.note}</span>}
      {!d.file && <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-soft-400)', paddingLeft: 'var(--space-32)' }}>Dokumen opsional tidak diunggah dan tidak menghalangi proses.</span>}
      {d.older.length > 0 && (
        <div style={{ paddingLeft: 'var(--space-32)', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          <LinkButton size="sm" tone="gray" onClick={() => setShowOld((s) => !s)} rightIcon={<Icon name={showOld ? 'ArrowUpSLine' : 'ArrowDownSLine'} size={16} />}>
            Versi sebelumnya ({d.older.length})
          </LinkButton>
          {showOld && d.older.map((o) => (
            <div key={o.version} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)', font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>
              <span>{o.name} · Versi {o.version} · {formatDateTime(o.uploadedAt)}{o.note ? ` · Alasan revisi: ${o.note}` : ''}</span>
              <LinkButton size="sm" onClick={() => onView(d, o)}>Lihat</LinkButton>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
