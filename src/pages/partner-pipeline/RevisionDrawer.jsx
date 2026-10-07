import { useState } from 'react';
import { Button, CheckboxLabel, Drawer, DrawerFooter, DrawerHeader, TextArea } from '@ds/index.js';
import { ActionModal } from '../../components/ActionModal.jsx';
import { useToast } from '../../components/Toaster.jsx';
import { requestRevision } from '../../api/mockApi.js';
import { REVISION_SECTIONS } from '../../lib/constants.js';

const NOTE_MAX = 255;

/**
 * W3c · Minta Revisi (PRD §2C, US-P01): pilih dokumen/bagian data + catatan per item (wajib, maks. 255), catatan umum opsional.
 * Item yang sudah ditandai Perlu Revisi tercentang otomatis beserta alasannya.
 */
export function RevisionDrawer({ partner, user, onClose, onDone }) {
  const toast = useToast();
  const docs = partner.documents.filter((d) => d.file);
  const initial = {};
  docs.filter((d) => d.verification === 'NEEDS_REVISION').forEach((d) => { initial[`DOC:${d.key}`] = d.note ?? ''; });
  if (partner.bank.verification === 'NEEDS_REVISION') initial['SEC:bank'] = partner.bank.note ?? '';
  const [picked, setPicked] = useState(initial); // { "DOC:KTP_PIC": note }
  const [general, setGeneral] = useState('');
  const [touched, setTouched] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [busy, setBusy] = useState(false);

  const keys = Object.keys(picked);
  const noteErr = (k) => (!picked[k]?.trim() ? 'Catatan wajib diisi' : picked[k].length > NOTE_MAX ? 'Maksimal 255 karakter' : undefined);
  const invalid = keys.some((k) => noteErr(k));
  const toggle = (k, on) => setPicked((p) => { const n = { ...p }; if (on) n[k] = n[k] ?? ''; else delete n[k]; return n; });
  const labelOf = (k) => { const [kind, ref] = k.split(':'); return kind === 'DOC' ? docs.find((d) => d.key === ref).label : REVISION_SECTIONS.find((s) => s.key === ref).label; };

  function submit() {
    setTouched(true);
    if (invalid || keys.length === 0) return;
    setConfirm(true);
  }
  async function send() {
    setBusy(true);
    const items = keys.map((k) => { const [kind, ref] = k.split(':'); return { kind, ref, label: labelOf(k), note: picked[k].trim() }; });
    const p = await requestRevision(partner.id, items, general.trim(), user);
    toast('success', 'Status berhasil diperbarui.');
    onDone(p);
  }

  const item = (k, label, description) => (
    <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
      <CheckboxLabel label={label} description={description} checked={k in picked} onChange={(on) => toggle(k, on)} />
      {k in picked && (
        <div style={{ paddingLeft: 'var(--space-24)' }}>
          <TextArea required rows={2} maxLength={NOTE_MAX} value={picked[k]} onChange={(v) => setPicked((p) => ({ ...p, [k]: v }))}
            placeholder="Apa yang harus diperbaiki? Contoh: Foto KTP buram, mohon unggah ulang" error={touched ? noteErr(k) : undefined}
            aria-label={`Catatan revisi ${label}`} />
        </div>
      )}
    </div>
  );
  const group = (title, children) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
      <span style={{ font: 'var(--subheading-xs)', letterSpacing: 'var(--subheading-xs-ls)', textTransform: 'uppercase', color: 'var(--text-soft-400)' }}>{title}</span>
      {children}
    </div>
  );

  return (
    <>
      <Drawer open width={520} onClose={confirm ? undefined : onClose}
        header={<DrawerHeader size="lg" title="Minta Revisi" description={`${partner.partnerName} · ${partner.registrationNumber}`} icon="EditLine" onClose={onClose} />}
        footer={(
          <DrawerFooter left={<span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{keys.length} item dipilih</span>}>
            <Button variant="stroke" tone="neutral" size="sm" onClick={onClose}>Batal</Button>
            <Button size="sm" disabled={keys.length === 0} onClick={submit}>Kirim Permintaan Revisi</Button>
          </DrawerFooter>
        )}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-24)', padding: 'var(--space-16) var(--space-24) var(--space-24)' }}>
          <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>
            Pilih dokumen atau bagian data yang harus diperbaiki {partner.submitter?.name} ({partner.submitter?.role}). Hanya item yang dipilih yang bisa diubah di aplikasi mobile.
          </span>
          {group('Dokumen', docs.map((d) => item(`DOC:${d.key}`, d.label, `${d.file.name} · Versi ${d.file.version}`)))}
          {group('Bagian data', REVISION_SECTIONS.map((s) => item(`SEC:${s.key}`, s.label)))}
          <TextArea label="Catatan umum" sublabel="(Opsional)" rows={3} maxLength={NOTE_MAX} value={general} onChange={setGeneral} placeholder="Contoh: Mohon diperbaiki maksimal 2 hari kerja." />
        </div>
      </Drawer>
      <ActionModal open={confirm} onClose={() => setConfirm(false)} title="Ubah status menjadi Revision Required?" description={`${partner.partnerName} · ${partner.registrationNumber}`}
        icon="EditLine" confirmLabel="Kirim Permintaan Revisi" busy={busy} onConfirm={send}>
        <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>
          {keys.length} item dikirim ke {partner.submitter?.name} untuk diperbaiki: {keys.map(labelOf).join(', ')}. Item lain terkunci selama revisi.
        </span>
      </ActionModal>
    </>
  );
}
