import { Alert, Button, Icon, LinkButton } from '@ds/index.js';
import { KeyValueGrid, RevisedBadge, SectionCard } from '../../../components/KeyValueGrid.jsx';
import { PartnerStatusBadge, VerificationBadge } from '../../../components/Badges.jsx';
import { actorLabel } from '../../../api/mockApi.js';
import { BANKS, CHANNEL, ENTITY, PIC_ACCOUNT_LABEL, PIC_STATUS, areaName } from '../../../lib/constants.js';
import { formatDateTime, formatPhone } from '../../../lib/format.js';

/** Tab Data Partner (PRD §2B) — read-only; verifikasi Data Rekening hanya saat Under Review. */
export function DataPartnerTab({ partner: p, onGoStores, onBank, onRetryPic, retrying }) {
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
          fv('Provinsi', p.province), fv('Kabupaten/Kota', p.city), fv('Kecamatan', p.district), fv('Kelurahan', p.village), fv('RT / RW', `${p.rt} / ${p.rw}`),
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
          fv('Status Akun Login', PIC_ACCOUNT_LABEL[pa.status]), fv('Username', pa.username ?? null),
        ]} />
        <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>PIC berada di level partner, bukan per toko. Akun login partner dibuat untuk PIC saat partner menjadi Active.</span>
      </SectionCard>

      <SectionCard title="Data Rekening" badge={<>{sec('bank') && <RevisedBadge />}<VerificationBadge value={p.bank.verification} /></>}
        actions={editable && (
          <>
            <Button size="xs" variant={p.bank.verification === 'VALID' ? 'lighter' : 'stroke'} tone={p.bank.verification === 'VALID' ? 'primary' : 'neutral'} leftIcon={<Icon name="CheckLine" />} onClick={() => onBank('VALID')}>Valid</Button>
            <Button size="xs" variant="stroke" tone="error" leftIcon={<Icon name="CloseLine" />} onClick={() => onBank('NEEDS_REVISION')}>Perlu Revisi</Button>
          </>
        )}>
        {mismatch && <Alert status="warning" size="sm" title="Nama rekening berbeda dengan nama partner/PIC" />}
        {p.bank.verification === 'NEEDS_REVISION' && p.bank.note && <Alert status="error" size="sm" title={`Alasan: ${p.bank.note}`} />}
        <KeyValueGrid items={[
          fv('Bank', BANKS[p.bank.code]), fv('Cabang', p.bank.branch), fv('No. Rekening', p.bank.accountNumber, 'accountNumber'), fv('Nama Rekening', p.bank.accountName),
          fv('Status Verifikasi', <VerificationBadge value={p.bank.verification} />),
          fv('Diverifikasi oleh / pada', p.bank.verifiedBy ? `${p.bank.verifiedBy} · ${formatDateTime(p.bank.verifiedAt)}` : null),
        ]} />
        <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>
          {editable ? 'Fase 1 tanpa inquiry otomatis: cocokkan bank, nomor, dan nama rekening dengan dokumen buku rekening yang diunggah.' : p.status === 'ACTIVE' ? 'Data rekening tidak dapat diubah setelah partner aktif.' : 'Verifikasi hanya dapat diubah saat status Under Review.'}
        </span>
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
