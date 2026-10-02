import React from 'react';
import { Icon } from '../icons/Icon.jsx';

const Kbd = ({ children }) => <span style={{ padding: '2px 6px', borderRadius: 4, background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke)', font: 'var(--subheading-xs)', letterSpacing: 'var(--subheading-xs-ls)', color: 'var(--text-soft-400)' }}>{children}</span>;

/** Command Menu Items [1.1] — result row: icon/avatar + title (+ description at md), hover shows ↵ hint. */
export function CommandMenuItem({ icon = 'User6Line', media, title, sublabel, description, size = 'sm', active, onClick }) {
  const [hover, setHover] = React.useState(false);
  const on = active ?? hover;
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', alignItems: size === 'md' ? 'flex-start' : 'center', gap: 12, width: '100%', padding: size === 'md' ? 12 : '10px 12px', borderRadius: 10, border: 'none', cursor: 'pointer', textAlign: 'left', background: on ? 'var(--bg-weak-50)' : 'transparent' }}>
      {media || <span style={{ color: 'var(--icon-sub-600)', display: 'flex' }}><Icon name={icon} /></span>}
      <span style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
        <span style={{ display: 'flex', gap: 4, alignItems: 'baseline' }}>
          <span style={{ font: size === 'md' ? 'var(--label-sm)' : 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: 'var(--text-strong-950)' }}>{title}</span>
          {sublabel && <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{sublabel}</span>}
        </span>
        {size === 'md' && description && <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{description}</span>}
      </span>
      {on && <span style={{ padding: 1, borderRadius: 6, background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-xs)', color: 'var(--icon-sub-600)', display: 'flex' }}><Icon name="ArrowRightSLine" size={18} /></span>}
    </button>
  );
}

/** Command Menu — ⌘K palette: search input (600px), grouped results, footer hints. groups: [{title, items:[CommandMenuItem props]}]. */
export function CommandMenu({ groups = [], query: q, onQueryChange, placeholder = 'Search or jump to…', onSelect, style }) {
  const [inner, setInner] = React.useState('');
  const query = q ?? inner;
  const filtered = groups.map((g) => ({ ...g, items: g.items.filter((it) => !query || String(it.title).toLowerCase().includes(query.toLowerCase())) })).filter((g) => g.items.length);
  return (
    <div style={{ width: 600, maxWidth: '100%', borderRadius: 20, background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke), var(--shadow-modal)', overflow: 'hidden', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 20px', boxShadow: 'inset 0 -1px 0 var(--stroke-soft-200)' }}>
        <span style={{ color: query ? 'var(--icon-strong-950)' : 'var(--icon-soft-400)', display: 'flex' }}><Icon name="Search2Line" /></span>
        <input autoFocus value={query} placeholder={placeholder} onChange={(e) => { setInner(e.target.value); onQueryChange && onQueryChange(e.target.value); }} style={{ flex: 1, border: 'none', outline: 'none', background: 'none', font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: 'var(--text-strong-950)' }} />
        <Kbd>⌘K</Kbd>
      </div>
      <div style={{ maxHeight: 360, overflow: 'auto', padding: '8px 8px', display: 'flex', flexDirection: 'column', gap: 4 }}>
        {filtered.map((g) => (
          <div key={g.title} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ padding: '8px 12px 4px', font: 'var(--subheading-xs)', letterSpacing: 'var(--subheading-xs-ls)', textTransform: 'uppercase', color: 'var(--text-soft-400)' }}>{g.title}</span>
            {g.items.map((it, i) => <CommandMenuItem key={i} {...it} onClick={() => onSelect && onSelect(it)} />)}
          </div>
        ))}
        {!filtered.length && <span style={{ padding: 24, textAlign: 'center', font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>No results for “{query}”</span>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 20px', background: 'var(--bg-weak-50)', font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>
        <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}><Kbd>↑</Kbd><Kbd>↓</Kbd>Navigate</span>
        <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}><Kbd>↵</Kbd>Select</span>
        <span style={{ flex: 1 }} /><span style={{ display: 'flex', gap: 6, alignItems: 'center' }}><Kbd>Esc</Kbd>Close</span>
      </div>
    </div>
  );
}
/* Figma family aliases (source set names) */
export const CommandMenuItems11 = CommandMenuItem;
export const CommandMenuSearchInput11 = CommandMenu;
export const CommandMenuFooter11 = CommandMenu;
export default CommandMenu;
