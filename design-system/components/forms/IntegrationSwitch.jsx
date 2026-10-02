import React from 'react';
import { Switch } from './Switch.jsx';

/** Integration Switch [1.1] — app/integration row with logo, title, description and switch. layout: horizontal | vertical; style: card | list. */
export function IntegrationSwitch({ logo, title, description, checked, defaultChecked = false, onChange, layout = 'horizontal', variant = 'card', action, style }) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked ?? inner;
  const set = (x) => { setInner(x); onChange && onChange(x); };
  const vertical = layout === 'vertical';
  const card = variant === 'card';
  return (
    <div style={{ display: 'flex', flexDirection: vertical ? 'column' : 'row', alignItems: vertical ? 'stretch' : 'center', gap: 14, padding: card ? 16 : 0, borderRadius: card ? 12 : 0,
      background: card ? 'var(--bg-white-0)' : 'transparent', boxShadow: card ? 'var(--shadow-stroke-xs)' : 'none', boxSizing: 'border-box', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ padding: 8, borderRadius: vertical ? 8 : 999, background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke-xs)', display: 'flex' }}>
          <span style={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{logo}</span>
        </div>
        {vertical && <Switch checked={on} onChange={set} />}
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: 'var(--text-strong-950)' }}>{title}</span>
        {description && <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{description}</span>}
      </div>
      {action}
      {!vertical && <Switch checked={on} onChange={set} />}
    </div>
  );
}
/* Figma family aliases (source set names) */
export const IntegrationSwitch11 = IntegrationSwitch;
export default IntegrationSwitch;
