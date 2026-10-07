import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/* Rich Editor Colors [1.1] palette — Figma binds each swatch to a `*-500` primitive (Sky is bound to gold/500 in Figma). */
export const RICH_EDITOR_COLORS = { gray: 'var(--neutral-gray-500)', blue: 'var(--jewel-blue-500)', orange: 'var(--orange-500)', red: 'var(--red-500)', green: 'var(--green-500)', yellow: 'var(--yellow-500)', purple: 'var(--purple-500)', sky: 'var(--gold-500)', pink: 'var(--pink-500)', teal: 'var(--teal-500)' };
const COLOR_KEYS = Object.keys(RICH_EDITOR_COLORS);
const swatch = (c) => RICH_EDITOR_COLORS[c] || c;

/** Rich Editor Colors [1.1] — 16px circle swatch. color: gray | blue | orange | red | green | yellow | purple | sky | pink | teal (or any CSS colour). */
export function RichEditorColor({ color = 'gray', style }) {
  return <span style={{ width: 16, height: 16, borderRadius: 96, background: swatch(color), flexShrink: 0, ...style }} />;
}

/** Rich Editor Items [1.1] — r6, gap 2, white → hover/active weak-50. Types: icon (pad 4, icon sub-600 → active primary-base) | dropdown (`icon` + `dropdown`, pad 4, active icon strong-950)
 * | text (`label`, pad 4/4/4/10, Label/Small sub-600 → active strong-950) | color (`color`, pad 4/4/4/8, 16px circle). Caret arrow-down-s-fill soft-400 → active arrow-up-s-fill primary-base. */
export function RichEditorItem({ icon, label, color, dropdown = false, active = false, onClick, title }) {
  const [hover, setHover] = React.useState(false);
  const hasCaret = Boolean(label || color || dropdown);
  const iconColor = active ? (hasCaret ? 'var(--icon-strong-950)' : 'var(--primary-base)') : 'var(--icon-sub-600)';
  return (
    <button type="button" title={title} aria-label={title} aria-pressed={hasCaret ? undefined : active} aria-expanded={hasCaret ? active : undefined} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 2, padding: label ? '4px 4px 4px 10px' : color ? '4px 4px 4px 8px' : 4, borderRadius: 6, border: 'none', cursor: 'pointer', flexShrink: 0, background: active || hover ? 'var(--bg-weak-50)' : 'var(--bg-white-0)', font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)' }}>
      {icon && <span style={{ color: iconColor, display: 'flex' }}><Icon name={icon} /></span>}
      {label && <span style={{ color: active ? 'var(--text-strong-950)' : 'var(--text-sub-600)', whiteSpace: 'nowrap' }}>{label}</span>}
      {color && <span style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><RichEditorColor color={color} /></span>}
      {hasCaret && <span style={{ color: active ? 'var(--primary-base)' : 'var(--icon-soft-400)', display: 'flex' }}><Icon name={active ? 'ArrowUpSFill' : 'ArrowDownSFill'} /></span>}
    </button>
  );
}

/** Rich Editor divider — 4×16 frame holding a 1px stroke-soft-200 line. */
export function RichEditorDivider() {
  return <span aria-hidden="true" style={{ width: 4, height: 16, display: 'flex', justifyContent: 'center', flexShrink: 0 }}><span style={{ width: 1, background: 'var(--stroke-soft-200)' }} /></span>;
}

/* Figma variant presets. '|' = divider. */
const TOOL = {
  heading: { label: 'Judul', title: 'Gaya teks' },
  size: { label: '14px', title: 'Ukuran teks' },
  bold: { icon: 'Bold', title: 'Tebal' },
  italic: { icon: 'Italic', title: 'Miring' },
  underline: { icon: 'Underline', title: 'Garis bawah' },
  strikethrough: { icon: 'Strikethrough', title: 'Coret' },
  align: { icon: 'AlignLeft', dropdown: true, title: 'Perataan' },
  comment: { icon: 'Chat1Line', title: 'Komentar' },
  link: { icon: 'Link', title: 'Tautan' },
  mention: { icon: 'AtLine', title: 'Sebut' },
  more: { icon: 'More2Line', title: 'Lainnya' },
};
const VARIANTS = {
  '01': ['heading', '|', 'size', '|', 'bold', 'italic', 'underline', 'strikethrough', '|', 'align', '|', 'comment', 'link', 'mention', '|', 'more'],
  '02': ['heading', '|', 'size', '|', 'more'],
  '03': ['bold', 'italic', 'underline', 'strikethrough', '|', 'align', '|', 'more'],
  '04': ['comment', 'link', 'mention', '|', 'more'],
};

/** Rich Editor [1.1] toolbar — r8, pad 2, gap 2, white, 1px outside stroke-soft-200 + regular-shadow/x-small. variant 01 (full) | 02 (text) | 03 (format) | 04 (insert);
 * presets call `onAction(key)` and highlight keys in `active`. Pass `children` (RichEditorItem / RichEditorDivider) for a custom set. */
export function RichEditorToolbar({ variant = '01', active = [], onAction, children, style }) {
  const keys = VARIANTS[variant] || VARIANTS['01'];
  return (
    <div role="toolbar" style={{ display: 'inline-flex', alignItems: 'center', flexWrap: 'wrap', gap: 2, padding: 2, borderRadius: 8, background: 'var(--bg-white-0)', boxShadow: '0 0 0 1px var(--stroke-soft-200), var(--shadow-xs)', ...style }}>
      {children || keys.map((k, i) => (k === '|' ? <RichEditorDivider key={i} /> : <RichEditorItem key={i} {...TOOL[k]} active={active.includes(k)} onClick={() => onAction && onAction(k)} />))}
    </div>
  );
}

/** Rich Editor (local composition) — RichEditorToolbar over a contentEditable area in a radius-12 bordered box. Figma ships the toolbar only. */
export function RichEditor({ defaultValue = '', placeholder = 'Tulis sesuatu…', minHeight = 140, style }) {
  const ref = React.useRef(null);
  const [color, setColor] = React.useState(COLOR_KEYS[0]);
  const exec = (cmd, arg) => { ref.current?.focus(); document.execCommand(cmd, false, arg); };
  const nextColor = () => {
    const n = COLOR_KEYS[(COLOR_KEYS.indexOf(color) + 1) % COLOR_KEYS.length];
    setColor(n);
    const probe = document.createElement('span');
    probe.style.color = RICH_EDITOR_COLORS[n];
    document.body.appendChild(probe);
    const rgb = getComputedStyle(probe).color;
    probe.remove();
    exec('foreColor', rgb);
  };
  return (
    <div style={{ borderRadius: 12, background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke-xs)', overflow: 'hidden', ...style }}>
      <div style={{ padding: 8, boxShadow: 'inset 0 -1px 0 var(--stroke-soft-200)' }}>
        <RichEditorToolbar>
          <RichEditorItem label="Paragraf" title="Paragraf" onClick={() => exec('formatBlock', 'p')} />
          <RichEditorDivider />
          <RichEditorItem icon="Bold" title="Tebal" onClick={() => exec('bold')} />
          <RichEditorItem icon="Italic" title="Miring" onClick={() => exec('italic')} />
          <RichEditorItem icon="Underline" title="Garis bawah" onClick={() => exec('underline')} />
          <RichEditorItem icon="Strikethrough" title="Coret" onClick={() => exec('strikeThrough')} />
          <RichEditorDivider />
          <RichEditorItem color={color} title="Warna teks" onClick={nextColor} />
          <RichEditorDivider />
          <RichEditorItem icon="ListUnordered" title="Daftar berpoin" onClick={() => exec('insertUnorderedList')} />
          <RichEditorItem icon="ListOrdered" title="Daftar bernomor" onClick={() => exec('insertOrderedList')} />
          <RichEditorItem icon="AlignLeft" title="Rata kiri" onClick={() => exec('justifyLeft')} />
          <RichEditorItem icon="Link" title="Tautan" onClick={() => { const u = prompt('URL'); if (u) exec('createLink', u); }} />
        </RichEditorToolbar>
      </div>
      <div ref={ref} contentEditable suppressContentEditableWarning data-placeholder={placeholder} dangerouslySetInnerHTML={{ __html: defaultValue }}
        style={{ minHeight, padding: '12px 14px', outline: 'none', font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: 'var(--text-strong-950)' }} />
    </div>
  );
}
/* Figma family aliases (source set names) */
export const RichEditor11 = RichEditorToolbar;
export const RichEditorItems11 = RichEditorItem;
export const RichEditorColors11 = RichEditorColor;
export default RichEditor;
