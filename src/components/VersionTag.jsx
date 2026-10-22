import { OTHER_VERSIONS, PRD_LABEL } from '../lib/version.js';

/** Penanda versi PRD prototipe + tautan ke versi lain (footer login, DevToolbar). `dark` untuk latar gelap DevToolbar. */
export function VersionTag({ dark = false }) {
  const color = dark ? 'var(--text-white-0)' : 'var(--text-sub-600)';
  const link = dark ? 'var(--text-white-0)' : 'var(--primary-base)';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-8)', flexWrap: 'wrap', font: 'var(--paragraph-sm)', color, padding: dark ? '0 var(--space-8)' : 0 }}>
      <span style={{ whiteSpace: 'nowrap' }}>{PRD_LABEL}</span>
      {OTHER_VERSIONS.length > 0 && (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-8)', whiteSpace: 'nowrap' }}>
          <span>Lihat versi:</span>
          {OTHER_VERSIONS.map((v) => <a key={v.version} href={v.href} style={{ color: link, font: 'var(--label-sm)' }}>{v.label}</a>)}
        </span>
      )}
    </span>
  );
}
