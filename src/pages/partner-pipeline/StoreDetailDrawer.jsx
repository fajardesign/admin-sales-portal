import { Drawer, DrawerHeader, LinkButton, StatusBadge } from '@ds/index.js';
import { KeyValueGrid, SectionCard } from '../../components/KeyValueGrid.jsx';
import { MapPreview } from '../../components/MapPreview.jsx';
import { TlHistory } from '../../components/TlHistory.jsx';
import { CHANNEL, STORE_STATUS, areaName } from '../../lib/constants.js';
import { formatDate, formatDateTime } from '../../lib/format.js';
import { navigate } from '../../lib/router.js';
import { QrThumb } from './ReferralCodeField.jsx';

const BADGE = { WAITING_REFERRAL: 'pending', ACTIVE: 'completed' };

/**
 * Detail toko Admin (keputusan 2026-10-20): dibuka dengan klik baris di Toko Aktif (kedua tab). Data toko, kode referral + QR,
 * TL dan SA/SR, lokasi, partner (tautan ke detail partner), dan Riwayat TL untuk toko aktif. Aksi tetap di kolom Aksi tabel.
 */
export function StoreDetailDrawer({ store: s, onClose }) {
  const waiting = s.status === 'WAITING_REFERRAL';
  const loc = s.lastLocationChange;
  return (
    <Drawer open width={640} onClose={onClose}
      header={<DrawerHeader size="lg" title={s.name} description={`${s.partnerName} · ${areaName(s.areaId)}`} icon="ShoppingBagLine" onClose={onClose} />}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)', padding: 'var(--space-16) var(--space-24) var(--space-24)' }}>
        <SectionCard title="Toko" badge={<StatusBadge status={BADGE[s.status]} dot>{STORE_STATUS[s.status]}</StatusBadge>}>
          <KeyValueGrid items={[
            { label: 'Kode Toko', value: s.code ?? 'Dibuat setelah kode referral diisi' },
            { label: 'Jenis', value: s.primary ? 'Toko Utama' : 'Toko Tambahan' },
            { label: 'Kode Referral', value: s.referralCode ?? 'Belum diisi' },
            { label: 'QR', value: s.referralCode ? <QrThumb qr={s.referralQr} size={64} /> : '-' },
            { label: 'TL', value: s.tl ? `${s.tl} · sejak ${formatDate(s.tlSince)}` : waiting ? '-' : 'Belum ada TL' },
            { label: 'SA/SR', value: waiting ? '-' : s.sales.join(', ') || 'Belum ditugaskan' },
            { label: 'Ditambahkan oleh', value: `${s.addedBy} · ${formatDateTime(s.addedAt)}`, full: true },
            { label: 'Alamat', value: s.address, full: true },
          ]} />
          <MapPreview lat={s.lat} lng={s.lng} label={s.name} />
          {loc && (
            <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>
              Lokasi diubah {formatDateTime(loc.at)}. Sebelumnya: {loc.from.lat}, {loc.from.lng}
            </span>
          )}
        </SectionCard>
        <SectionCard title="Partner"
          actions={<LinkButton size="sm" onClick={() => navigate(`/partner-pipeline/${s.partnerId}`)}>Lihat detail partner</LinkButton>}>
          <KeyValueGrid items={[
            { label: 'Nama Partner', value: s.partnerName }, { label: 'Area', value: areaName(s.areaId) },
            { label: 'Channel', value: CHANNEL[s.channel] ?? '-' }, { label: 'No. Registrasi', value: s.partnerId },
          ]} />
        </SectionCard>
        {!waiting && <TlHistory storeId={s.id} />}
      </div>
    </Drawer>
  );
}
