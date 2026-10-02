import React from 'react';
import { Icon } from '../icons/Icon.jsx';
import { Button } from '../actions/Button.jsx';
import { LinkButton } from '../actions/LinkButton.jsx';
import { ProgressBar } from '../display/ProgressBar.jsx';

const FMT = { red: 'var(--state-error-base)', orange: 'var(--state-warning-base)', yellow: 'var(--state-away-base)', green: 'var(--state-success-base)', teal: 'var(--state-verified-base)', blue: 'var(--state-information-base)', purple: 'var(--state-feature-base)', pink: 'var(--state-highlighted-base)', gray: 'var(--state-faded-base)' };
const AUTO = { pdf: 'red', doc: 'blue', docx: 'blue', xls: 'green', xlsx: 'green', csv: 'green', ppt: 'orange', jpg: 'purple', png: 'purple', zip: 'gray', mp4: 'pink', txt: 'gray' };

/** File Format Icons [1.1] — document glyph with colored extension tag. */
export function FileFormatIcon({ format = 'PDF', color, size = 40 }) {
  const c = FMT[color || AUTO[format.toLowerCase()] || 'gray'];
  const k = size / 40;
  return (
    <span style={{ position: 'relative', width: size, height: size, display: 'inline-block', flexShrink: 0 }}>
      <svg width={32 * k} height={40 * k} viewBox="0 0 32 40" style={{ position: 'absolute', left: 4 * k, top: 0 }}>
        <path d="M6 .5h14.5L31.5 11.5V34A5.5 5.5 0 0 1 26 39.5H6A5.5 5.5 0 0 1 .5 34V6A5.5 5.5 0 0 1 6 .5Z" fill="var(--bg-white-0)" stroke="var(--stroke-sub-300)" />
        <path d="M20.5.5V7a4.5 4.5 0 0 0 4.5 4.5h6.5" fill="none" stroke="var(--stroke-sub-300)" />
      </svg>
      <span style={{ position: 'absolute', left: 0, bottom: 7 * k, padding: '2px 3px', borderRadius: 4, background: c, color: 'var(--static-static-white)', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 11 * k, lineHeight: `${12 * k}px`, letterSpacing: '0.02em' }}>{format.toUpperCase()}</span>
    </span>
  );
}

/** File Upload Area [1.1] — dashed drop zone. */
export function FileUploadArea({ title = 'Choose a file or drag & drop it here.', description = 'JPEG, PNG, PDF, and MP4 formats, up to 50 MB.', buttonLabel = 'Browse File', onFiles, style }) {
  const [hover, setHover] = React.useState(false);
  const input = React.useRef(null);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onDragOver={(e) => { e.preventDefault(); setHover(true); }} onDragLeave={() => setHover(false)}
      onDrop={(e) => { e.preventDefault(); setHover(false); onFiles && onFiles([...e.dataTransfer.files]); }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, padding: 32, borderRadius: 12, background: hover ? 'var(--bg-weak-50)' : 'var(--bg-white-0)', border: '1px dashed var(--stroke-sub-300)', textAlign: 'center', ...style }}>
      <span style={{ color: 'var(--icon-sub-600)' }}><Icon name="UploadCloud2Line" size={24} /></span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: 'var(--text-strong-950)' }}>{title}</span>
        <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{description}</span>
      </div>
      <Button variant="stroke" tone="neutral" size="xs" onClick={() => input.current?.click()}>{buttonLabel}</Button>
      <input ref={input} type="file" hidden onChange={(e) => onFiles && onFiles([...e.target.files])} />
    </div>
  );
}

/** File Upload Cards [1.1] — uploaded file row. state: uploading | success | error. */
export function FileUploadCard({ name = 'my-cv.pdf', size = '60 KB of 120 KB', progress = 50, state = 'uploading', onRemove, onRetry, style }) {
  const err = state === 'error';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: '16px 16px 16px 14px', borderRadius: 12, background: 'var(--bg-white-0)', boxShadow: err ? 'inset 0 0 0 1px var(--state-error-base)' : 'var(--shadow-stroke)', ...style }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <FileFormatIcon format={name.split('.').pop()} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
          <span style={{ font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: 'var(--text-strong-950)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{name}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4, font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>
            {size} ∙
            {state === 'uploading' && <><span style={{ color: 'var(--primary-base)', display: 'flex', animation: 'ab-spin 1s linear infinite' }}><Icon name="Loader2Fill" size={16} /></span><span style={{ color: 'var(--text-strong-950)' }}>Uploading…</span></>}
            {state === 'success' && <><span style={{ color: 'var(--state-success-base)' }}><Icon name="SelectBoxCircleFill" size={16} /></span><span style={{ color: 'var(--text-strong-950)' }}>Completed</span></>}
            {err && <><span style={{ color: 'var(--state-error-base)' }}><Icon name="ErrorWarningFill" size={16} /></span><span style={{ color: 'var(--state-error-base)' }}>Failed</span></>}
          </span>
        </div>
        <button type="button" onClick={onRemove} aria-label="Remove" style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer', color: 'var(--icon-sub-600)' }}><Icon name={state === 'success' ? 'DeleteBinLine' : 'CloseLine'} /></button>
      </div>
      {state === 'uploading' && <ProgressBar value={progress} />}
      {err && <LinkButton tone="error" underline onClick={onRetry}>Try Again</LinkButton>}
    </div>
  );
}

/** Image Upload [1.1] — avatar / company logo uploader with actions. */
export function ImageUpload({ image, title = 'Upload Image', description = 'Min 400x400px, PNG or JPEG', type = 'avatar', layout = 'horizontal', onUpload, onRemove, style }) {
  const v = layout === 'vertical';
  return (
    <div style={{ display: 'flex', flexDirection: v ? 'column' : 'row', alignItems: v ? 'center' : 'center', gap: 20, textAlign: v ? 'center' : 'left', ...style }}>
      <div style={{ width: 64, height: 64, borderRadius: type === 'avatar' ? 999 : 12, background: image ? `url(${image}) center/cover` : 'var(--bg-weak-50)', boxShadow: image ? 'none' : 'var(--shadow-stroke)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--icon-soft-400)', flexShrink: 0 }}>
        {!image && <Icon name={type === 'avatar' ? 'User6Line' : 'Building2Line'} size={28} />}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: v ? 'center' : 'flex-start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ font: 'var(--label-md)', letterSpacing: 'var(--label-md-ls)', color: 'var(--text-strong-950)' }}>{title}</span>
          <span style={{ font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: 'var(--text-sub-600)' }}>{description}</span>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          {image && <Button variant="stroke" tone="error" size="xs" onClick={onRemove}>Remove</Button>}
          <Button variant="stroke" tone="neutral" size="xs" onClick={onUpload}>{image ? 'Change' : 'Upload'}</Button>
        </div>
      </div>
    </div>
  );
}
/* Figma family aliases (source set names) */
export const FileUploadArea11 = FileUploadArea;
export const FileUploadCards11 = FileUploadCard;
export const FileFormatIcons11 = FileFormatIcon;
export const ImageUpload11 = ImageUpload;
export default FileUploadArea;
