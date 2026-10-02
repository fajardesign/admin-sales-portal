import React from 'react';

/** Content Label [1.1] — media (icon / avatar / logo) + label/sublabel + description. size md | lg. */
export function ContentLabel({ media, label, sublabel, description, badge, size = 'md', style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, ...style }}>
      {media && <div style={{ flexShrink: 0, display: 'flex' }}>{media}</div>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0, flex: 1 }}>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <span style={{ font: size === 'lg' ? 'var(--label-md)' : 'var(--label-sm)', letterSpacing: size === 'lg' ? 'var(--label-md-ls)' : 'var(--label-sm-ls)', color: 'var(--text-strong-950)' }}>{label}</span>
          {sublabel && <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{sublabel}</span>}
          {badge}
        </div>
        {description && <span style={{ font: size === 'lg' ? 'var(--paragraph-sm)' : 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{description}</span>}
      </div>
    </div>
  );
}

/** Content Card [1.1] — ContentLabel inside a radius-12 bordered card with an optional trailing action. */
export function ContentCard({ action, style, ...rest }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 16, borderRadius: 12, background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke-xs)', boxSizing: 'border-box', ...style }}>
      <ContentLabel {...rest} style={{ flex: 1 }} />
      {action}
    </div>
  );
}
/* Figma family aliases (source set names) */
export const ContentCard11 = ContentCard;
export const ContentLabel11 = ContentLabel;
export default ContentCard;
