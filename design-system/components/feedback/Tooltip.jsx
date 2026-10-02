import React from 'react';

/** Tooltip [1.1] — hover bubble. size 2xs | xs | lg (lg adds title); dark inverts to bg-strong-950. placement: top | bottom | left | right. */
export function Tooltip({ content, title, children, size = 'xs', dark = false, placement = 'top', style }) {
  const [open, setOpen] = React.useState(false);
  const lg = size === 'lg';
  const bg = dark ? 'var(--bg-strong-950)' : 'var(--bg-white-0)';
  const pos = { top: { bottom: 'calc(100% + 6px)', left: '50%', transform: 'translateX(-50%)' }, bottom: { top: 'calc(100% + 6px)', left: '50%', transform: 'translateX(-50%)' }, left: { right: 'calc(100% + 6px)', top: '50%', transform: 'translateY(-50%)' }, right: { left: 'calc(100% + 6px)', top: '50%', transform: 'translateY(-50%)' } }[placement];
  return (
    <span style={{ position: 'relative', display: 'inline-flex' }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}>
      {children}
      {open && (
        <span role="tooltip" style={{ position: 'absolute', zIndex: 50, ...pos, width: lg ? 280 : 'max-content', maxWidth: 280, padding: lg ? 12 : size === '2xs' ? '2px 6px' : '4px 10px', borderRadius: lg ? 12 : size === '2xs' ? 4 : 6,
          background: bg, boxShadow: dark ? 'var(--shadow-tooltip)' : '0 0 0 1px var(--stroke-soft-200), var(--shadow-tooltip)', display: 'flex', flexDirection: 'column', gap: 4, pointerEvents: 'none', animation: 'ab-fade-in var(--duration-fast)', ...style }}>
          {title && <span style={{ font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: dark ? 'var(--text-white-0)' : 'var(--text-strong-950)' }}>{title}</span>}
          <span style={{ font: size === 'xs' && !lg ? 'var(--paragraph-sm)' : 'var(--paragraph-xs)', color: dark ? 'var(--text-white-0)' : lg ? 'var(--text-sub-600)' : 'var(--text-strong-950)' }}>{content}</span>
        </span>
      )}
    </span>
  );
}
/* Figma family aliases (source set names) */
export const Tooltip11 = Tooltip;
export default Tooltip;
