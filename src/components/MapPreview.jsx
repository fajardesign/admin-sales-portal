import { Icon, LinkButton } from '@ds/index.js';

/**
 * Pratinjau lokasi toko (DS belum punya komponen peta). Prototipe tidak memuat tile peta eksternal:
 * kartu berpola grid + pin, koordinat, dan tautan "Buka di Maps" (Google Maps, tab baru).
 */
export function MapPreview({ lat, lng, label }) {
  const url = `https://www.google.com/maps?q=${lat},${lng}`;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
      <div role="img" aria-label={`Peta lokasi ${label ?? ''} di ${lat}, ${lng}`}
        style={{
          height: 140, borderRadius: 'var(--rounded-12)', boxShadow: 'var(--shadow-stroke)', position: 'relative', overflow: 'hidden',
          background: 'repeating-linear-gradient(0deg, var(--bg-weak-50) 0 23px, var(--stroke-soft-200) 23px 24px), repeating-linear-gradient(90deg, var(--bg-weak-50) 0 23px, var(--stroke-soft-200) 23px 24px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-base)',
        }}>
        <Icon name="MapPinLine" size={32} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-8)', flexWrap: 'wrap' }}>
        <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>Lat {lat} · Long {lng}</span>
        <LinkButton size="sm" rightIcon={<Icon name="ExternalLinkLine" size={16} />}
          onClick={() => window.open(url, '_blank', 'noopener')}>Buka di Maps</LinkButton>
      </div>
    </div>
  );
}
