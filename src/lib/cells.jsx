/** Helper sel tabel & skeleton (bukan komponen). */
/** Bar skeleton pulse. */
export const bar = (width, height = 12, round = 'var(--rounded-6)') => (
  <div style={{ width, maxWidth: '100%', height, borderRadius: round, background: 'var(--bg-soft-200)', animation: 'sk-pulse 1.4s ease-in-out infinite' }} />
);

/** Teks satu baris tanpa wrap untuk sel tabel. */
export const nowrap = (v) => <span style={{ whiteSpace: 'nowrap' }}>{v}</span>;
