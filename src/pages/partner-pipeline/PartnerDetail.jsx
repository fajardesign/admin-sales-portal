import { useCallback, useEffect, useState } from 'react';
import { Alert, Breadcrumbs, Button, Icon, TabMenuHorizontal } from '@ds/index.js';
import { AdminShell } from '../../components/AdminShell.jsx';
import { PartnerStatusBadge } from '../../components/Badges.jsx';
import { DocumentViewer } from '../../components/DocumentViewer.jsx';
import { EmptyState } from '../../components/EmptyState.jsx';
import { bar } from '../../lib/cells.jsx';
import { useToast } from '../../components/Toaster.jsx';
import {
  ApiError, getPartner, isFinal, onDataChange, retryPicAccount, setBankVerification, setDocVerification, verificationGap,
} from '../../api/mockApi.js';
import { formatDateTime } from '../../lib/format.js';
import { navigate } from '../../lib/router.js';
import { lastPipelineQuery } from './PipelineList.jsx';
import { StatusActionModal } from './StatusActionModal.jsx';
import { ACTIONS } from './actions.js';
import { RevisionDrawer } from './RevisionDrawer.jsx';
import { ReasonModal } from './ReasonModal.jsx';
import { PksDeliveryModal, PksUploadModal } from './PksModals.jsx';
import { EditPartnerDrawer } from './EditPartnerDrawer.jsx';
import { DataPartnerTab } from './tabs/DataPartnerTab.jsx';
import { StoresTab } from './tabs/StoresTab.jsx';
import { DocumentsTab } from './tabs/DocumentsTab.jsx';
import { PksTab } from './tabs/PksTab.jsx';
import { HistoryTab } from './tabs/HistoryTab.jsx';
import emptyError from '../../assets/empty-error.png';
import { preset } from '../../dev/presets.js';

/** Tombol aksi per status (PRD §2D). Aksi pertama di daftar `primary` = aksi utama layar. */
const BUTTONS = {
  UNDER_REVIEW: ['REVISION_REQUIRED', 'REJECTED', 'CANCELLED', 'VERIFIED'],
  REVISION_REQUIRED: ['REJECTED', 'CANCELLED'],
  VERIFIED: ['CANCELLED', 'WAITING_PKS'],
  WAITING_PKS: ['CANCELLED', 'ACTIVE'],
  ACTIVE: ['EDIT', 'INACTIVE'],
};
const PRIMARY = ['VERIFIED', 'WAITING_PKS', 'ACTIVE'];

/** W3b · Partner Detail (PRD §2B) — header + aksi per status, tab Data Partner, Toko, Dokumen, PKS (Privy), Riwayat Status. */
export function PartnerDetail({ id, user, onLogout }) {
  const toast = useToast();
  const [p, setP] = useState(null);
  const [error, setError] = useState(false);
  const [tab, setTab] = useState(preset?.detail?.tab ?? 'data');
  const [action, setAction] = useState(preset?.detail?.action ?? null); // status tujuan
  const [revision, setRevision] = useState(preset?.detail?.revision ?? false);
  const [reason, setReason] = useState(null); // { kind: 'doc'|'bank', doc? }
  const [viewer, setViewer] = useState(null); // { doc, file }
  const [pksModal, setPksModal] = useState(null); // 'delivery' | 'upload'
  const [retrying, setRetrying] = useState(false);
  const [editing, setEditing] = useState(preset?.detail?.editing ?? false);

  const load = useCallback(() => { getPartner(id).then((np) => { setP(np); setError(false); }, () => setError(true)); }, [id]);
  useEffect(() => { load(); return onDataChange(load); }, [load]);

  const back = () => navigate(`/partner-pipeline${lastPipelineQuery ? `?${lastPipelineQuery}` : ''}`);
  const done = (np) => { setP(np); setAction(null); setRevision(false); setReason(null); setPksModal(null); setEditing(false); };

  const shell = (children) => (
    <AdminShell active="/partner-pipeline" icon="Building2Line" title="Partner Pipeline" description="Tinjau pengajuan partner, verifikasi dokumen, catat PKS, dan ubah status partner." user={user} onLogout={onLogout}>
      <Breadcrumbs items={[{ label: 'Partner Pipeline', icon: 'Building2Line', onClick: back }, { label: id }]} />
      {children}
    </AdminShell>
  );
  if (error) return shell(<EmptyState image={emptyError} message="Partner tidak ditemukan atau gagal dimuat."
    action={<Button variant="stroke" tone="neutral" leftIcon={<Icon name="ArrowLeftLine" />} onClick={back}>Kembali</Button>} />);
  if (!p) return shell(<div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>{bar(280, 28)}{bar(420)}{bar('100%', 240, 'var(--rounded-16)')}</div>);

  const gap = verificationGap(p);
  const buttons = BUTTONS[p.status] ?? [];
  const gapMsg = p.status === 'UNDER_REVIEW' && gap.count > 0
    ? `Verifikasi Selesai aktif setelah semua dokumen wajib dan Data Rekening ditandai Valid (${gap.count} belum valid${gap.flagged ? `, ${gap.flagged} perlu revisi` : ''}).`
    : null;

  async function verifyDoc(doc, value, note) {
    try { setP(await setDocVerification(p.id, doc.key, value, note, user)); setReason(null); } catch (e) { if (e instanceof ApiError) toast('error', 'Status tidak dapat diubah.'); }
  }
  async function verifyBank(value, note) {
    try { setP(await setBankVerification(p.id, value, note, user)); setReason(null); } catch (e) { if (e instanceof ApiError) toast('error', 'Status tidak dapat diubah.'); }
  }
  async function retryPic() {
    setRetrying(true);
    try { setP(await retryPicAccount(p.id, user)); toast('success', 'Akun PIC berhasil dibuat. Undangan aktivasi telah dikirim.'); } catch { toast('error', 'Gagal membuat akun. Coba lagi.'); }
    setRetrying(false);
  }

  const uploaded = p.documents.filter((d) => d.file).length;
  return shell(
    <>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-16)', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-10)', flexWrap: 'wrap' }}>
            <h2 style={{ margin: 0, font: 'var(--title-h5)', color: 'var(--text-strong-950)' }}>{p.partnerName}</h2>
            <PartnerStatusBadge status={p.status} />
          </div>
          <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>
            {p.registrationNumber} · Diajukan oleh {p.submitter?.name} ({p.submitter?.role}) · {formatDateTime(p.submittedAt)} · {p.stores.length} toko
          </span>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-8)', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button variant="ghost" tone="neutral" size="sm" leftIcon={<Icon name="ArrowLeftLine" />} onClick={back}>Kembali</Button>
          {buttons.map((to) => {
            const isPrimary = PRIMARY.includes(to);
            if (to === 'EDIT') return <Button key={to} size="sm" variant="stroke" tone="neutral" leftIcon={<Icon name="EditLine" />} onClick={() => setEditing(true)}>Ubah Data Partner</Button>;
            const label = to === 'REVISION_REQUIRED' ? 'Minta Revisi' : ACTIONS[to].label;
            return (
              <Button key={to} size="sm" variant={isPrimary ? 'filled' : 'stroke'} tone={['REJECTED', 'INACTIVE'].includes(to) ? 'error' : isPrimary ? 'primary' : 'neutral'}
                disabled={to === 'VERIFIED' && gap.count > 0} aria-describedby={to === 'VERIFIED' && gapMsg ? 'verify-gap' : undefined}
                onClick={() => (to === 'REVISION_REQUIRED' ? setRevision(true) : setAction(to))}>{label}</Button>
            );
          })}
        </div>
      </div>
      {gapMsg && <span id="verify-gap" style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)', marginTop: 'calc(-1 * var(--space-8))', textAlign: 'right' }}>{gapMsg}</span>}
      {isFinal(p.status) && <Alert status="information" size="sm" title="Status final. Data partner hanya dapat dilihat." />}
      {p.status === 'REVISION_REQUIRED' && p.revisionRequest && (
        <Alert status="warning" size="lg" title={`Menunggu perbaikan dari ${p.submitter?.name} (${p.submitter?.role})`}>
          <span style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            {p.revisionRequest.items.map((it) => <span key={it.ref}>{it.label}: {it.note}</span>)}
            {p.revisionRequest.general && <span>Catatan umum: {p.revisionRequest.general}</span>}
          </span>
        </Alert>
      )}

      <TabMenuHorizontal value={tab} onChange={setTab} items={[
        { value: 'data', label: 'Data Partner' }, { value: 'stores', label: `Toko (${p.stores.length})` },
        { value: 'docs', label: `Dokumen (${uploaded})` }, { value: 'pks', label: 'PKS (Privy)' }, { value: 'history', label: 'Riwayat Status' },
      ]} />
      {tab === 'data' && <DataPartnerTab partner={p} onGoStores={() => setTab('stores')} retrying={retrying} onRetryPic={retryPic}
        onBank={(v) => (v === 'VALID' ? verifyBank('VALID') : setReason({ kind: 'bank' }))} />}
      {tab === 'stores' && <StoresTab partner={p} />}
      {tab === 'docs' && <DocumentsTab partner={p} onView={(doc, file) => setViewer({ doc, file })}
        onVerify={(doc, v) => (v === 'VALID' ? verifyDoc(doc, 'VALID') : setReason({ kind: 'doc', doc }))} />}
      {tab === 'pks' && <PksTab partner={p} onEditDelivery={() => setPksModal('delivery')} onUpload={() => setPksModal('upload')}
        onViewFile={() => setViewer({ doc: { label: 'Dokumen PKS' }, file: { ...p.pks.file, version: 1, pages: 3 } })} />}
      {tab === 'history' && <HistoryTab partner={p} />}

      {action && <StatusActionModal partner={p} to={action} user={user} onClose={() => setAction(null)} onDone={done} />}
      {revision && <RevisionDrawer partner={p} user={user} onClose={() => setRevision(false)} onDone={done} />}
      {reason && (
        <ReasonModal open title={`Perlu revisi: ${reason.kind === 'bank' ? 'Data Rekening' : reason.doc.label}`}
          description={reason.kind === 'bank' ? 'Tulis alasan, misalnya nomor rekening tidak sama dengan buku rekening.' : 'Tulis alasan agar TL/SR tahu apa yang harus diperbaiki.'}
          initial={(reason.kind === 'bank' ? p.bank.note : reason.doc.note) ?? ''} onClose={() => setReason(null)}
          onSubmit={(note) => (reason.kind === 'bank' ? verifyBank('NEEDS_REVISION', note) : verifyDoc(reason.doc, 'NEEDS_REVISION', note))} />
      )}
      {viewer && <DocumentViewer doc={viewer.doc} file={viewer.file} onClose={() => setViewer(null)} />}
      {pksModal === 'delivery' && <PksDeliveryModal partner={p} user={user} onClose={() => setPksModal(null)} onDone={done} />}
      {editing && <EditPartnerDrawer partner={p} user={user} onClose={() => setEditing(false)} onDone={done} />}
      {pksModal === 'upload' && <PksUploadModal partner={p} user={user} onClose={() => setPksModal(null)} onDone={done} />}
    </>,
  );
}
