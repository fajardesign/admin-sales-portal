import { Button, Modal, ModalFooter, ModalHeader } from '@ds/index.js';

/**
 * Dialog aksi standar: header (ikon/status) + isi + footer Batal / aksi utama.
 * Satu aksi utama per dialog; tombol utama nonaktif saat busy atau confirmDisabled.
 */
export function ActionModal({ open, onClose, title, description, icon, status, confirmLabel, confirmTone = 'primary', confirmDisabled, busy, onConfirm, width = 480, children }) {
  const close = busy ? undefined : onClose;
  return (
    <Modal open={open} onClose={close} width={width}>
      <ModalHeader title={title} description={description} icon={icon} status={status} onClose={close} />
      {children && <div style={{ padding: 'var(--space-16) var(--space-24) var(--space-24)', display: 'flex', flexDirection: 'column', gap: 'var(--space-16)', maxHeight: '60vh', overflowY: 'auto' }}>{children}</div>}
      <ModalFooter>
        <Button variant="stroke" tone="neutral" size="sm" disabled={busy} onClick={onClose}>Batal</Button>
        <Button size="sm" tone={confirmTone} disabled={busy || confirmDisabled} onClick={onConfirm}>{busy ? 'Memproses...' : confirmLabel}</Button>
      </ModalFooter>
    </Modal>
  );
}
