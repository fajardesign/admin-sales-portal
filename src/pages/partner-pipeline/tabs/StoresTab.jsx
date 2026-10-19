import { useState } from 'react';
import { Button, Icon, StatusBadge } from '@ds/index.js';
import { KeyValueGrid, RevisedBadge, SectionCard } from '../../../components/KeyValueGrid.jsx';
import { MapPreview } from '../../../components/MapPreview.jsx';
import { actorLabel, userById } from '../../../api/mockApi.js';
import { CHANNEL_OFFLINE, PRODUCT_SOLD, PRODUCT_TYPE, SCALE, STORE_LOCATION, STORE_STATUS, STORE_TYPE } from '../../../lib/constants.js';
import { formatDateTime, formatRp } from '../../../lib/format.js';
import { ReferralCodeField } from '../ReferralCodeField.jsx';
import { ChangeLocationModal } from '../ChangeLocationModal.jsx';

const STATUS_BADGE = { PENDING: 'pending', WAITING_REFERRAL: 'pending', ACTIVE: 'completed', INACTIVE: 'disabled', CANCELLED: 'failed' };

/**
 * Tab Toko (PRD §2B): satu kartu per toko — Toko Utama dari pengajuan, Toko Tambahan dari mobile. PRD Scope 1 v2: setiap toko
 * punya Kode Referral sendiri (diisi Admin, FR-019) dan TL sendiri (keputusan 2026-10-16). Admin bisa "Ubah lokasi" toko aktif
 * setelah partner Active (keputusan 2026-10-19, Q8).
 */
export function StoresTab({ partner: p, user, onSaved }) {
  const [moving, setMoving] = useState(null);
  const canMove = (s) => user?.role === 'REVIEWER' && p.status === 'ACTIVE' && s.status === 'ACTIVE';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
      {p.stores.map((s, i) => {
        const changed = i === 0 && p.fieldChanges.find((c) => c.section === 'store' && c.field === 'name');
        return (
          <SectionCard key={s.id} title={s.primary ? 'Toko Utama' : 'Toko Tambahan'}
            badge={<>{i === 0 && p.revisedSections.includes('store') && <RevisedBadge />}<StatusBadge status={STATUS_BADGE[s.status]} dot>{STORE_STATUS[s.status]}</StatusBadge></>}
            actions={canMove(s) && <Button size="xs" variant="stroke" tone="neutral" leftIcon={<Icon name="MapPinLine" size={16} />} onClick={() => setMoving(s)}>Ubah lokasi</Button>}>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(240px, 1fr)', gap: 'var(--space-24)' }}>
              <KeyValueGrid items={[
                { label: 'Kode Toko', value: s.code ?? (s.status === 'WAITING_REFERRAL' ? 'Dibuat setelah kode referral diisi' : 'Dibuat saat partner Active') },
                { label: 'Kode Referral', value: <ReferralCodeField key={`${s.id}-${s.referralCode}`} partnerId={p.id} partnerStatus={p.status} store={s} user={user} required={p.status === 'WAITING_PKS'} onSaved={onSaved} />, full: true },
                { label: 'TL', value: s.tlId ? userById(s.tlId)?.fullName : s.status === 'ACTIVE' ? 'Belum ada TL' : '-' },
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
                <MapPreview lat={s.lat} lng={s.lng} label={s.name} />
                {s.locationLog?.length > 0 && (
                  <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>
                    Lokasi diubah {formatDateTime(s.locationLog.at(-1).at)} oleh {actorLabel(s.locationLog.at(-1).by)}. Sebelumnya: {s.locationLog.at(-1).from.lat}, {s.locationLog.at(-1).from.lng}
                  </span>
                )}
              </div>
            </div>
          </SectionCard>
        );
      })}
      {moving && <ChangeLocationModal partnerId={p.id} store={moving} user={user} onClose={() => setMoving(null)} onSaved={(np) => { setMoving(null); onSaved?.(np); }} />}
    </div>
  );
}
