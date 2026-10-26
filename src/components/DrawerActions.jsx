import { Children, Fragment, cloneElement, isValidElement } from 'react';
import { DrawerFooter } from '@ds/index.js';

/**
 * Footer drawer dengan tombol yang mengisi lebar footer (keputusan 2026-10-26). Tombol (Button DS) dibagi rata dan membungkus
 * ke baris berikutnya bila tidak muat. Padding keterangan = padding DrawerFooter (20px, tanpa token --space-20). note = keterangan atau aksi sekunder (mis. "2 field diubah", Nonaktifkan) di atas tombol.
 */
export function DrawerActions({ note, children }) {
  const items = Children.toArray(children).filter(isValidElement);
  // Fragment tanpa isi (semua aksi sekunder tersembunyi) tidak menampilkan baris keterangan kosong.
  const hasNote = isValidElement(note) && note.type === Fragment ? Children.toArray(note.props.children).length > 0 : !!note;
  return (
    <>
      {hasNote && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)', flexWrap: 'wrap', padding: 'var(--space-12) calc(var(--space-16) + var(--space-4)) 0', background: 'var(--bg-white-0)', boxShadow: 'inset 0 1px 0 var(--stroke-soft-200)' }}>
          {note}
        </div>
      )}
      <DrawerFooter style={hasNote ? { boxShadow: 'none' } : undefined}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-12)', flex: 1 }}>
          {items.map((c) => <div key={c.key} style={{ flex: '1 1 0', minWidth: 'max-content', display: 'flex' }}>{cloneElement(c, { fullWidth: true })}</div>)}
        </div>
      </DrawerFooter>
    </>
  );
}
