import React from 'react';

/** Page Header [1.1] — top of a page: optional media (48 avatar / 32 icon), Label/X Large title (+ optional description, local addition), right-aligned actions, bottom divider stroke-sub-300 inset 32. */
export function PageHeader({ media, title, description, actions, divider = true, style }) {
  return (
    <header style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 12, padding: '20px 32px', background: 'var(--bg-white-0)', ...style }}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 14, minWidth: 0 }}>
        {media}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
          <span style={{ font: 'var(--label-xl)', letterSpacing: 'var(--label-xl-ls)', color: 'var(--text-strong-950)' }}>{title}</span>
          {description && <span style={{ font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: 'var(--text-sub-600)' }}>{description}</span>}
        </div>
      </div>
      {actions && <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>{actions}</div>}
      {divider && <span aria-hidden="true" style={{ position: 'absolute', left: 32, right: 32, bottom: 0, height: 1, background: 'var(--stroke-sub-300)' }} />}
    </header>
  );
}

/** Section Header [1.1] — section title row (padding 16/32) with bottom divider; media slot for key icon / avatar / brand. */
export function SectionHeader({ media, title, description, actions, divider = true, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 32px', boxShadow: divider ? 'inset 0 -1px 0 var(--stroke-soft-200)' : 'none', ...style }}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 14, minWidth: 0 }}>
        {media}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ font: 'var(--label-lg)', letterSpacing: 'var(--label-lg-ls)', color: 'var(--text-strong-950)' }}>{title}</span>
          {description && <span style={{ font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: 'var(--text-sub-600)' }}>{description}</span>}
        </div>
      </div>
      {actions && <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>{actions}</div>}
    </div>
  );
}

/** Widget card shell used across dashboard screens — radius 16, stroke + xs shadow, 16px header row. */
export function WidgetCard({ icon, title, action, children, padding = 16, style }) {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: 16, padding, borderRadius: 16, background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke-xs)', boxSizing: 'border-box', minWidth: 0, ...style }}>
      {(title || action) && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingBottom: 16, boxShadow: 'inset 0 -1px 0 var(--stroke-soft-200)', minHeight: 36 }}>
          {icon && <span style={{ color: 'var(--icon-strong-950)', display: 'flex' }}>{icon}</span>}
          <span style={{ flex: 1, font: 'var(--label-md)', letterSpacing: 'var(--label-md-ls)', color: 'var(--text-strong-950)' }}>{title}</span>
          {action}
        </div>
      )}
      {children}
    </section>
  );
}
/* Figma family aliases (source set names) */
export const PageHeader11 = PageHeader;
export const SectionHeader11 = SectionHeader;
export default PageHeader;
