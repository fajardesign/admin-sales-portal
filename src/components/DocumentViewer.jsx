import { useState } from 'react';
import { Button, CompactButton, Icon, Modal, ModalFooter, ModalHeader } from '@ds/index.js';
import { useToast } from './Toaster.jsx';

const ZOOMS = [0.5, 0.75, 1, 1.25, 1.5, 2];

/**
 * Pratinjau dokumen (komposisi Modal DS): zoom, navigasi halaman PDF, Unduh.
 * Prototipe tidak menyimpan file asli — halaman dirender sebagai placeholder berisi nama file.
 */
export function DocumentViewer({ doc, file, onClose }) {
  const toast = useToast();
  const [zoom, setZoom] = useState(2);
  const [page, setPage] = useState(1);
  if (!doc) return null;
  const f = file ?? doc.file;
  const pdf = /\.pdf$/i.test(f.name);
  const pages = f.pages ?? 1;
  return (
    <Modal open onClose={onClose} width={760}>
      <ModalHeader title={doc.label} description={`${f.name} · Versi ${f.version}`} icon={pdf ? 'FileTextLine' : 'ImageLine'} onClose={onClose} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-12)', padding: 'var(--space-12) var(--space-24)', boxShadow: 'inset 0 -1px 0 var(--stroke-soft-200)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}>
          <CompactButton variant="stroke" icon={<Icon name="SubtractLine" />} aria-label="Perkecil" disabled={zoom === 0} onClick={() => setZoom((z) => Math.max(0, z - 1))} />
          <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)', minWidth: 48, textAlign: 'center' }}>{Math.round(ZOOMS[zoom] * 100)}%</span>
          <CompactButton variant="stroke" icon={<Icon name="AddLine" />} aria-label="Perbesar" disabled={zoom === ZOOMS.length - 1} onClick={() => setZoom((z) => Math.min(ZOOMS.length - 1, z + 1))} />
        </div>
        {pdf && pages > 1 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}>
            <CompactButton variant="stroke" icon={<Icon name="ArrowLeftSLine" />} aria-label="Halaman sebelumnya" disabled={page === 1} onClick={() => setPage((p) => p - 1)} />
            <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>Hal. {page} / {pages}</span>
            <CompactButton variant="stroke" icon={<Icon name="ArrowRightSLine" />} aria-label="Halaman berikutnya" disabled={page === pages} onClick={() => setPage((p) => p + 1)} />
          </div>
        )}
      </div>
      <div style={{ height: 420, overflow: 'auto', background: 'var(--bg-weak-50)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 'var(--space-24)' }}>
        <div style={{ transform: `scale(${ZOOMS[zoom]})`, transformOrigin: 'top center', transition: 'transform var(--duration-base) var(--ease-standard)' }}>
          <div style={{ width: pdf ? 300 : 360, height: pdf ? 400 : 240, background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke-xs)', borderRadius: 'var(--rounded-8)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-8)', color: 'var(--icon-soft-400)' }}>
            <Icon name={pdf ? 'FileTextLine' : 'ImageLine'} size={40} />
            <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{f.name}</span>
            {pdf && <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-soft-400)' }}>Halaman {page}</span>}
          </div>
        </div>
      </div>
      <ModalFooter>
        <Button variant="stroke" tone="neutral" size="sm" leftIcon={<Icon name="DownloadLine" />} onClick={() => toast('success', `${f.name} diunduh.`)}>Unduh</Button>
        <Button size="sm" onClick={onClose}>Tutup</Button>
      </ModalFooter>
    </Modal>
  );
}
