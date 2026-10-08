import { Alert, Icon, LinkButton } from '@ds/index.js';
import { KeyValueGrid, RevisedBadge, SectionCard } from '../../../components/KeyValueGrid.jsx';
import { PartnerStatusBadge } from '../../../components/Badges.jsx';
import { actorLabel } from '../../../api/mockApi.js';
import { BANKS, CHANNEL, ENTITY, PIC_ACCOUNT_LABEL, PIC_STATUS, areaName } from '../../../lib/constants.js';
import { formatDateTime, formatPhone } from '../../../lib/format.js';

/** Tab Data Partner (PRD §2B) — read-only. Data Rekening tanpa verifikasi terpisah (revisi stakeholder 2026-10-08). */
export function DataPartnerTab({ partner: p, onGoStores, onRetryPic, retrying }) {
  const sec = (k) => p.revisedSections.includes(k);
  const changed = (field) => [...p.fieldChanges].reverse().find((c) => c.field === field);
  const fv = (label, value, field, extra = {}) => {
    const c = field && changed(field);
    return { label, value, revised: !!c, hint: c ? `Sebelumnya: ${c.old}` : undefined, ...extra };
  };
  const mismatch = ![p.partnerName, p.pic.name].some((n) => n.trim().toLowerCase() === p.bank.accountName.trim().toLowerCase());
  const editable = p.status === 'UNDER_REVIEW';
  const pa = p.picAccount;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
      <SectionCard title="Informasi Partner" badge={sec('partner') && <RevisedBadge />}>
        <KeyValueGrid items={[
          fv('No. Registrasi', p.registrationNumber), fv('Nama Partner', p.partnerName), fv('Jenis Badan Usaha', ENTITY[p.businessEntityType]),
          fv('Alamat Partner (sesuai legalitas)', p.address, 'address', { full: true }),
          fv('Provinsi', p.province), fv('Kabupaten/Kota', p.city), fv('Kecamatan', p.district), fv('Kelurahan', p.village), fv('RT / RW', `${p.rt} / ${p.rw}`), fv('Kode Referral', p.referralCode, 'referralCode'),
        ]} />
      </SectionCard>

      <SectionCard title="Data Bisnis" badge={sec('business') && <RevisedBadge />}>
        <KeyValueGrid items={[
          fv('Email Bisnis', p.businessEmail, 'businessEmail'), fv('Channel', CHANNEL[p.channel]), fv('Jumlah Tempat Usaha', String(p.businessLocationCount)),
          fv('Jumlah Toko Terdaftar', <LinkButton size="md" onClick={onGoStores} rightIcon={<Icon name="ArrowRightSLine" size={16} />}>{p.stores.length} toko</LinkButton>),
        ]} />
      </SectionCard>

      <SectionCard title="Informasi PIC & Akun Login" badge={sec('pic') && <RevisedBadge />}>
        {pa.status === 'FAILED' && (
          <Alert status="error" size="lg" title="Akun PIC gagal dibuat" actionLabel={retrying ? 'Memproses...' : 'Coba buat ulang'} onAction={retrying ? undefined : onRetryPic}>
            Partner tetap Active dan operasional. Buat ulang akun agar PIC menerima undangan login.
          </Alert>
        )}
        <KeyValueGrid items={[
          fv('Nama PIC', p.pic.name), fv('Email PIC', p.pic.email), fv('No. Handphone', formatPhone(p.pic.phone), 'phone'), fv('Status PIC', PIC_STATUS[p.pic.status]),
          fv('Status Akun Login', PIC_ACCOUNT_LABEL[pa.status])
        ]} />
        <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>PIC berada di level partner, bukan per toko. Akun login partner dibuat untuk PIC saat partner menjadi Active.</span>
      </SectionCard>

      <SectionCard title="Data Rekening" badge={sec('bank') && <RevisedBadge />}>
        {mismatch && <Alert status="warning" size="sm" title="Nama rekening berbeda dengan nama partner/PIC" />}
        <KeyValueGrid items={[
          fv('Bank', BANKS[p.bank.code]), fv('Cabang', p.bank.branch), fv('No. Rekening', p.bank.accountNumber, 'accountNumber'), fv('Nama Rekening', p.bank.accountName),
        ]} />
        {(editable || p.status === 'ACTIVE') && (
          <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>
            {editable ? 'Cocokkan bank, nomor, dan nama rekening dengan dokumen buku rekening yang diunggah. Minta revisi Data Rekening bila tidak sesuai.' : 'Data rekening tidak dapat diubah setelah partner aktif.'}
          </span>
        )}
      </SectionCard>

      <SectionCard title="Info Pengajuan">
        <KeyValueGrid items={[
          fv('Status', <PartnerStatusBadge status={p.status} />), fv('Diajukan oleh', actorLabel(p.submittedBy)), fv('Area', areaName(p.areaId)),
          fv('Tanggal Diajukan', formatDateTime(p.submittedAt)), fv('Tanggal Verifikasi', formatDateTime(p.verifiedAt)), fv('Tanggal Aktif', formatDateTime(p.activatedAt)),
          fv('Terakhir Diperbarui', formatDateTime(p.statusUpdatedAt)), fv('Kode Merchant', p.merchantCode),
        ]} />
      </SectionCard>
    </div>
  );
}
