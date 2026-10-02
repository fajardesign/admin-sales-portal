import React from 'react';

/** Content Divider [1.1] — type: line | text-line | text | solid-text. */
export function ContentDivider({ type = 'line', children, style }) {
  const line = <span style={{ flex: 1, height: 1, background: 'var(--stroke-soft-200)' }} />;
  if (type === 'line') return <div role="separator" style={{ height: 1, background: 'var(--stroke-soft-200)', ...style }} />;
  if (type === 'text-line') return <div role="separator" style={{ display: 'flex', alignItems: 'center', gap: 10, ...style }}>{line}<span style={{ font: 'var(--paragraph-xs)', letterSpacing: '0.04em', color: 'var(--text-soft-400)', textTransform: 'uppercase' }}>{children}</span>{line}</div>;
  if (type === 'solid-text') return <div style={{ padding: '6px 20px', background: 'var(--bg-weak-50)', font: 'var(--subheading-xs)', letterSpacing: 'var(--subheading-xs-ls)', textTransform: 'uppercase', color: 'var(--text-sub-600)', ...style }}>{children}</div>;
  return <div style={{ padding: '4px 8px', font: 'var(--subheading-xs)', letterSpacing: 'var(--subheading-xs-ls)', textTransform: 'uppercase', color: 'var(--text-soft-400)', ...style }}>{children}</div>;
}
/* Figma family aliases (source set names) */
export const ContentDivider11 = ContentDivider;
export default ContentDivider;
