import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/** Accordion [1.1] — radius-10 disclosure row. Icon left (optional), +/− on the right (flipIcon puts it left). */
export function Accordion({ title, children, icon = 'QuestionLine', defaultOpen = false, open: o, onToggle, flipIcon = false, style }) {
  const [inner, setInner] = React.useState(defaultOpen);
  const open = o ?? inner;
  const [hover, setHover] = React.useState(false);
  const toggle = () => { setInner(!open); onToggle && onToggle(!open); };
  const pm = <span style={{ color: 'var(--icon-sub-600)', display: 'flex' }}><Icon name={open ? 'SubtractLine' : 'AddLine'} /></span>;
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', gap: 10, padding: 14, borderRadius: 10, background: open || hover ? 'var(--bg-weak-50)' : 'var(--bg-white-0)', boxShadow: open || hover ? 'none' : 'var(--shadow-stroke-xs)', transition: 'background var(--duration-fast)', ...style }}>
      {flipIcon ? pm : icon && <span style={{ color: 'var(--icon-sub-600)', display: 'flex' }}>{typeof icon === 'string' ? <Icon name={icon} /> : icon}</span>}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <button type="button" onClick={toggle} style={{ border: 'none', background: 'none', padding: 0, textAlign: 'left', cursor: 'pointer', font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: 'var(--text-strong-950)' }}>{title}</button>
        {open && <div style={{ font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: 'var(--text-sub-600)' }}>{children}</div>}
      </div>
      {!flipIcon && <button type="button" onClick={toggle} aria-label="Toggle" style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer', alignSelf: 'flex-start' }}>{pm}</button>}
    </div>
  );
}
/** Figma family alias: "Accordion [1.1]". */
export const Accordion11 = Accordion;
export default Accordion;
