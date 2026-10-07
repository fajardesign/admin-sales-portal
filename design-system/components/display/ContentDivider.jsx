import React from 'react';

/** Content Divider [1.1] — type: line (1px stroke-sub-300) | text-line (lines + Paragraph/Small soft-400 text, gap 10) | text (Subheading/Small UPPERCASE soft-400, padding 4/8) | solid-text (weak-50 band, Subheading/Small UPPERCASE sub-600, padding 6/20). */
export function ContentDivider({ type = 'line', children, style }) {
  const line = <span style={{ flex: 1, height: 1, background: 'var(--stroke-sub-300)' }} />;
  const sub = { font: 'var(--subheading-sm)', letterSpacing: 'var(--subheading-sm-ls)', textTransform: 'uppercase' };
  if (type === 'line') return <div role="separator" style={{ height: 1, background: 'var(--stroke-sub-300)', ...style }} />;
  if (type === 'text-line') return <div role="separator" style={{ display: 'flex', alignItems: 'center', gap: 10, ...style }}>{line}<span style={{ font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: 'var(--text-soft-400)' }}>{children}</span>{line}</div>;
  if (type === 'solid-text') return <div style={{ padding: '6px 20px', background: 'var(--bg-weak-50)', ...sub, color: 'var(--text-sub-600)', ...style }}>{children}</div>;
  return <div style={{ padding: '4px 8px', ...sub, color: 'var(--text-soft-400)', ...style }}>{children}</div>;
}
/* Figma family aliases (source set names) */
export const ContentDivider11 = ContentDivider;
export default ContentDivider;
