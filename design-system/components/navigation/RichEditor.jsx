import React from 'react';
import { Icon } from '../icons/Icon.jsx';

const SWATCH = ['var(--text-strong-950)', 'var(--state-faded-base)', 'var(--state-information-base)', 'var(--state-error-base)', 'var(--state-warning-base)', 'var(--state-success-base)', 'var(--state-away-base)', 'var(--state-feature-base)', 'var(--state-highlighted-base)', 'var(--state-stable-base)'];

/** Rich Editor Items [1.1] — toolbar button. type icon | text (with caret) | color (swatch + caret). */
export function RichEditorItem({ icon, label, color, active = false, onClick, title }) {
  const [hover, setHover] = React.useState(false);
  const caret = (label || color) && <span style={{ color: 'var(--icon-soft-400)', display: 'flex' }}><Icon name="ArrowDownSFill" /></span>;
  return (
    <button type="button" title={title} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 2, padding: label ? '4px 4px 4px 10px' : color ? '4px 4px 4px 8px' : 4, borderRadius: 6, border: 'none', cursor: 'pointer', background: active || hover ? 'var(--bg-weak-50)' : 'var(--bg-white-0)', color: active ? 'var(--icon-strong-950)' : 'var(--icon-sub-600)', font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)' }}>
      {icon && <Icon name={icon} />}
      {label && <span style={{ color: 'var(--text-sub-600)' }}>{label}</span>}
      {color && <span style={{ width: 16, height: 16, borderRadius: 4, background: color }} />}
      {caret}
    </button>
  );
}

/** Rich Editor [1.1] — toolbar + contentEditable area in a radius-12 bordered box. */
export function RichEditor({ defaultValue = '', placeholder = 'Write something…', minHeight = 140, style }) {
  const ref = React.useRef(null);
  const [color, setColor] = React.useState(SWATCH[0]);
  const exec = (cmd, arg) => { ref.current?.focus(); document.execCommand(cmd, false, arg); };
  const sep = <span style={{ width: 1, height: 20, background: 'var(--stroke-soft-200)', margin: '0 4px' }} />;
  return (
    <div style={{ borderRadius: 12, background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke-xs)', overflow: 'hidden', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 2, padding: 8, flexWrap: 'wrap', boxShadow: 'inset 0 -1px 0 var(--stroke-soft-200)' }}>
        <RichEditorItem label="Paragraph" onClick={() => exec('formatBlock', 'p')} />
        {sep}
        <RichEditorItem icon="Bold" title="Bold" onClick={() => exec('bold')} />
        <RichEditorItem icon="Italic" title="Italic" onClick={() => exec('italic')} />
        <RichEditorItem icon="Underline" title="Underline" onClick={() => exec('underline')} />
        <RichEditorItem icon="Strikethrough" title="Strikethrough" onClick={() => exec('strikeThrough')} />
        {sep}
        <RichEditorItem color={color} title="Text color" onClick={() => { const n = SWATCH[(SWATCH.indexOf(color) + 1) % SWATCH.length]; setColor(n); exec('foreColor', getComputedStyle(document.documentElement).getPropertyValue(n.slice(4, -1)) || '#000'); }} />
        {sep}
        <RichEditorItem icon="ListUnordered" title="Bulleted list" onClick={() => exec('insertUnorderedList')} />
        <RichEditorItem icon="ListOrdered" title="Numbered list" onClick={() => exec('insertOrderedList')} />
        <RichEditorItem icon="AlignLeft" title="Align left" onClick={() => exec('justifyLeft')} />
        <RichEditorItem icon="Link" title="Link" onClick={() => { const u = prompt('URL'); if (u) exec('createLink', u); }} />
      </div>
      <div ref={ref} contentEditable suppressContentEditableWarning data-placeholder={placeholder} dangerouslySetInnerHTML={{ __html: defaultValue }}
        style={{ minHeight, padding: '12px 14px', outline: 'none', font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: 'var(--text-strong-950)' }} />
    </div>
  );
}
/* Figma family aliases (source set names) */
export const RichEditor11 = RichEditor;
export const RichEditorItems11 = RichEditorItem;
export const RichEditorColors11 = RichEditorItem;
export default RichEditor;
