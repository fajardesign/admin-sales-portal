import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/** Breadcrumb Items [1.1] + Breadcrumbs Group [1.1] — items: [{label, icon?, href?, onClick?}]; last item is current. divider: arrow | slash | dot. */
export function Breadcrumbs({ items = [], divider = 'arrow', style }) {
  return (
    <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', ...style }}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            <Crumb {...it} current={last} />
            {!last && <span style={{ color: 'var(--icon-soft-400)', display: 'flex', font: 'var(--paragraph-sm)' }}>{divider === 'arrow' ? <Icon name="ArrowRightSLine" size={20} /> : divider === 'slash' ? '/' : '•'}</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
function Crumb({ label, icon, href, onClick, current }) {
  const [hover, setHover] = React.useState(false);
  const color = current ? 'var(--text-strong-950)' : hover ? 'var(--text-strong-950)' : 'var(--text-sub-600)';
  return (
    <a href={href} onClick={onClick} aria-current={current ? 'page' : undefined} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color, textDecoration: hover && !current ? 'underline' : 'none', cursor: current ? 'default' : 'pointer' }}>
      {icon && <span style={{ color: current ? 'var(--icon-strong-950)' : 'var(--icon-sub-600)', display: 'flex' }}><Icon name={icon} /></span>}{label}
    </a>
  );
}
/* Figma family aliases (source set names) */
export const BreadcrumbItems11 = Breadcrumbs;
export const BreadcrumbsGroup11 = Breadcrumbs;
export default Breadcrumbs;
