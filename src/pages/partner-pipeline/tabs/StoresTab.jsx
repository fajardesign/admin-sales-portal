import { StatusBadge } from '@ds/index.js';
import { KeyValueGrid, RevisedBadge, SectionCard } from '../../../components/KeyValueGrid.jsx';
import { MapPreview } from '../../../components/MapPreview.jsx';
import { actorLabel, userById } from '../../../api/mockApi.js';
import { CHANNEL_OFFLINE, PRODUCT_SOLD, PRODUCT_TYPE, SCALE, STORE_LOCATION, STORE_STATUS, STORE_TYPE } from '../../../lib/constants.js';
import { formatDateTime, formatRp } from '../../../lib/format.js';

const STATUS_BADGE = { PENDING: 'pending', ACTIVE: 'completed', INACTIVE: 'disabled' };

/** Tab Toko (PRD §2B): satu kartu per toko — Toko Utama dari pengajuan, Toko Tambahan dari mobile. */
export function StoresTab({ partner: p }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
      {p.stores.map((s, i) => {
        const changed = i === 0 && p.fieldChanges.find((c) => c.section === 'store' && c.field === 'name');
        return (
          <SectionCard key={s.id} title={s.primary ? 'Toko Utama' : 'Toko Tambahan'}
            badge={<>{i === 0 && p.revisedSections.includes('store') && <RevisedBadge />}<StatusBadge status={STATUS_BADGE[s.status]} dot>{STORE_STATUS[s.status]}</StatusBadge></>}>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(240px, 1fr)', gap: 'var(--space-24)' }}>
              <KeyValueGrid items={[
                { label: 'Kode Toko', value: s.code ?? 'Dibuat saat partner Active' },
                { label: 'Nama Toko', value: s.name, revised: !!changed, hint: changed ? `Sebelumnya: ${changed.old}` : undefined },
                { label: 'Alamat Toko', value: s.address, full: true },
                { label: 'Omzet', value: formatRp(s.omzet) },
                { label: 'Tipe Toko', value: STORE_TYPE[s.storeType] },
                s.storeType === 'OFFLINE' && { label: 'Channel Offline', value: CHANNEL_OFFLINE[s.channelOffline] },
                { label: 'Skala Toko', value: SCALE[s.scale] },
                { label: 'Produk Dijual', value: PRODUCT_SOLD[s.productSold] },
                { label: 'Lokasi Toko', value: STORE_LOCATION[s.location] },
                { label: 'Jenis Produk', value: PRODUCT_TYPE[s.productType] },
                { label: 'Ditambahkan oleh', value: `${actorLabel(s.addedBy)} · ${formatDateTime(s.addedAt)}` },
                { label: 'SA/SR ditugaskan', value: s.assigned.length ? s.assigned.map((id) => { const u = userById(id); return `${u.fullName} (${u.role})`; }).join(', ') : 'Belum ditugaskan' },
              ]} />
              <MapPreview lat={s.lat} lng={s.lng} label={s.name} />
            </div>
          </SectionCard>
        );
      })}
    </div>
  );
}
