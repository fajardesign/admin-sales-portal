import { OTHER_VERSION, PRD_LABEL } from '../lib/version.js';

/** Penanda versi PRD prototipe + tautan ke versi lain (footer login, DevToolbar). `dark` untuk latar gelap DevToolbar. */
export function VersionTag({ dark = false }) {
  const color = dark ? 'var(--text-white-0)' : 'var(--text-sub-600)';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-8)', font: 'var(--paragraph-sm)', color, whiteSpace: 'nowrap', padding: dark ? '0 var(--space-8)' : 0 }}>
      <span>{PRD_LABEL}</span>
      {OTHER_VERSION && <a href={OTHER_VERSION.href} style={{ color: dark ? 'var(--text-white-0)' : 'var(--primary-base)', font: 'var(--label-sm)' }}>{OTHER_VERSION.label}</a>}
    </span>
  );
}
