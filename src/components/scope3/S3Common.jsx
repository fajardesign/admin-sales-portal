import { useEffect, useState } from 'react';
import { Drawer, DrawerHeader, Icon, LinkButton, Select, StatusBadge } from '@ds/index.js';
import { KeyValueGrid, SectionCard } from '../KeyValueGrid.jsx';
import {
  BAND_LABEL, configFor, MONTH_STATUS, PAYMENT_STATUS, monthStatus, pipeline, rateLabel, tierRange,
} from '../../api/scope3.js';
import { perfMonths } from '../../api/mockApi.js';
import { partners } from '../../api/db.js';
import { areaName } from '../../lib/constants.js';
import { formatDateTime, formatPct, formatRp, formatYmd, monthLabel } from '../../lib/format.js';
import { monthNote, signedRp } from '../../lib/s3.js';

/** Komponen bersama layar PRD Scope 3 (web). */
const MONTH_BADGE = { BERJALAN: 'information', REKONSILIASI: 'pending', FINAL: 'completed' };
const PAY_BADGE = { MENUNGGU: 'pending', DIBAYAR: 'completed', TIDAK_ADA: 'disabled' };
const BAND_BADGE = { TERCAPAI: 'completed', ON_TRACK: 'information', BERISIKO: 'failed' };
const muted = { font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' };

export const MonthStatusBadge = ({ status }) => <StatusBadge status={MONTH_BADGE[status]}>{MONTH_STATUS[status]}</StatusBadge>;
export const PaymentBadge = ({ payment }) => (payment ? <StatusBadge status={PAY_BADGE[payment.status]}>{PAYMENT_STATUS[payment.status]}</StatusBadge> : null);
export const BandBadge = ({ band }) => <StatusBadge status={BAND_BADGE[band]}>{BAND_LABEL[band]}</StatusBadge>;


/** Baris pembayaran di bawah take home pay / insentif (FR-PY-006). */
export function PaymentLine({ payment }) {
  if (!payment) return null;
  const text = payment.status === 'DIBAYAR' ? `Dibayar ${formatYmd(payment.paidAt)} · ${formatRp(payment.paidAmount)}`
    : payment.status === 'MENUNGGU' ? `Menunggu pembayaran (jadwal ${formatYmd(payment.scheduledAt)})` : PAYMENT_STATUS.TIDAK_ADA;
  return (
    <span style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      <span style={{ ...muted, color: payment.status === 'DIBAYAR' ? 'var(--state-success-base)' : payment.status === 'MENUNGGU' ? 'var(--state-warning-base)' : 'var(--text-sub-600)' }}>{text}</span>
      {payment.correction !== 0 && <span style={muted}>Koreksi {signedRp(payment.correction)}{payment.note ? ` · ${payment.note}` : ''}</span>}
    </span>
  );
}

/** "Data per {tanggal jam}" + "Perbarui" (FR-LP-001); Perbarui tidak tampil untuk bulan Final. */
export function AsOf({ asOf, onRefresh, ym }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-8)', ...muted }}>
      <Icon name="TimeLine" size={16} />Data per {formatDateTime(asOf)}
      {onRefresh && monthStatus(ym) !== 'FINAL' && <LinkButton size="sm" onClick={onRefresh}>Perbarui</LinkButton>}
    </span>
  );
}

/** Pemilih bulan dengan status bulan, terbaru dulu (12 bulan terakhir). */
export function MonthSelect({ value, onChange, finalOnly = false, width = 260 }) {
  const months = [...perfMonths()].reverse().slice(0, 12).filter((m) => !finalOnly || monthStatus(m) === 'FINAL');
  return (
    <div style={{ width }}>
      <Select size="sm" value={value} placeholder="Pilih bulan" onChange={onChange}
        options={months.map((m) => ({ value: m, label: `${monthLabel(m, true)} · ${MONTH_STATUS[monthStatus(m)]}` }))} />
    </div>
  );
}

/** Tabel tier dengan tier yang dicapai disorot. */
function TierTable({ tiers, reached }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', font: 'var(--paragraph-sm)' }}>
      <thead><tr>{['Capaian', 'Koefisien'].map((h) => <th key={h} style={{ textAlign: 'left', padding: 'var(--space-6) var(--space-8)', ...muted }}>{h}</th>)}</tr></thead>
      <tbody>
        {[...tiers].sort((a, b) => (b.from ?? -1) - (a.from ?? -1)).map((t) => {
          const on = t === reached || (t.from === reached.from && t.to === reached.to);
          return (
            <tr key={`${t.from}-${t.to}`} style={{ background: on ? 'var(--state-information-lighter)' : 'transparent' }}>
              <td style={{ padding: 'var(--space-6) var(--space-8)', color: 'var(--text-strong-950)', font: on ? 'var(--label-sm)' : 'var(--paragraph-sm)' }}>{tierRange(t)}</td>
              <td style={{ padding: 'var(--space-6) var(--space-8)', color: 'var(--text-strong-950)', font: on ? 'var(--label-sm)' : 'var(--paragraph-sm)' }}>{rateLabel(t.rate)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

/** Blok gaji pokok (FR-DF-003): hari valid, daily fee area, multiplier, gaji pokok. */
export function BasicSalaryBlock({ r }) {
  const mult = r.multiplierEligible && (r.multiplierApplies
    ? `×${String(r.multiplier).replace('.', ',')} karena capaian ${formatPct(r.achievement, 1)} > ${r.threshold}%`
    : `Belum ×${String(r.multiplier).replace('.', ',')}: capaian ${formatPct(r.achievement, 1)}, butuh > ${r.threshold}%`);
  return (
    <KeyValueGrid items={[
      { label: 'Hari valid', value: `${r.validDays} hari valid${r.capped ? ` · maks. ${r.maxDays} hari dibayar` : ''}` },
      { label: 'Daily fee', value: r.dailyFee ? `× ${formatRp(r.dailyFee)} / hari (${areaName(r.areaId)})` : 'Belum diatur' },
      mult && { label: 'Multiplier', value: mult, full: true },
      { label: 'Gaji pokok', value: formatRp(r.basicSalary) },
    ]} />
  );
}

/** Blok insentif (FR-IN-001/004): target, Cair dihitung, capaian, tier, insentif, kekurangan untuk tier berikutnya. */
export function IncentiveBlock({ r, tiers }) {
  return (
    <>
      <KeyValueGrid items={[
        { label: 'Target', value: formatRp(r.target) }, { label: 'Cair dihitung', value: formatRp(r.actual) },
        { label: 'Capaian', value: <span style={{ display: 'inline-flex', gap: 'var(--space-8)', alignItems: 'center' }}>{formatPct(r.achievement, 1)}<BandBadge band={r.band} /></span> },
        { label: 'Koefisien', value: rateLabel(r.coefficient) },
        { label: 'Insentif dihitung', value: formatRp(r.incentive) },
        r.next && r.monthStatus !== 'FINAL' && { label: 'Tier berikutnya', value: `Butuh ${formatRp(r.next.needed)} lagi untuk tier ${rateLabel(r.next.tier.rate)}`, full: true },
      ]} />
      <TierTable tiers={tiers} reached={r.tier} />
    </>
  );
}

/**
 * Rincian penghasilan satu orang di satu bulan (FR-IN-004, FR-DF-003): gaji pokok, insentif, take home pay, pembayaran,
 * pinjaman yang dihitung dan yang dicoret (cair beda bulan). Dipakai APL Insentif dan Super Admin Hasil Perhitungan.
 */
export function IncomeDrawer({ row: r, onClose }) {
  const [loans, setLoans] = useState(null);
  useEffect(() => {
    pipeline(r.ym, r.role === 'TL' ? { tlId: r.userId } : { salesId: r.userId }, {}, { retry: true })
      .then((p) => setLoans(p.rows.filter((l) => l.counted || l.paidLater)));
  }, [r.ym, r.userId, r.role]);
  const tiers = configFor('sales', r.ym).tiers[r.role === 'TL' ? 'TL' : 'SALES'];
  return (
    <Drawer open width={640} onClose={onClose}
      header={<DrawerHeader size="lg" title={r.name} description={`${r.role === 'TL' ? `TL ${r.tlLevel === 'SENIOR' ? 'Senior' : 'Junior'}` : r.role} · ${areaName(r.areaId)} · ${monthLabel(r.ym, true)}`} icon="HandCoinLine" onClose={onClose} />}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)', padding: 'var(--space-16) var(--space-24) var(--space-24)' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)', flexWrap: 'wrap' }}>
          <MonthStatusBadge status={r.monthStatus} /><span style={muted}>{monthNote(r.ym)}</span>
        </span>
        <SectionCard title="Gaji pokok"><BasicSalaryBlock r={r} /></SectionCard>
        <SectionCard title="Insentif"><IncentiveBlock r={r} tiers={tiers} /></SectionCard>
        <SectionCard title={`Take home pay ${formatRp(r.takeHomePay)}`}>
          <span style={muted}>Gaji pokok {formatRp(r.basicSalary)} + insentif {formatRp(r.incentive)}</span>
          <PaymentLine payment={r.payment} />
        </SectionCard>
        <SectionCard title="Pinjaman bulan ini">
          {loans == null ? <span role="status" style={muted}>Memuat pinjaman...</span> : loans.length === 0 ? <span style={muted}>Belum ada pinjaman cair di bulan ini.</span> : loans.map((l) => (
            <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-12)', padding: 'var(--space-8) 0', borderTop: '1px solid var(--stroke-soft-200)' }}>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', textDecoration: l.counted ? 'none' : 'line-through', color: l.counted ? 'var(--text-strong-950)' : 'var(--text-soft-400)' }}>
                <span style={{ font: 'var(--label-sm)' }}>{l.id} · {formatRp(l.amount)}</span>
                <span style={{ font: 'var(--paragraph-xs)' }}>Diajukan {formatDateTime(l.submittedAt)} · Cair {formatDateTime(l.paidOutAt)}</span>
              </span>
              {!l.counted && <span style={{ ...muted, textAlign: 'right' }}>Cair {formatDateTime(l.paidOutAt).split(',')[0]}, beda bulan, tidak dihitung</span>}
            </div>
          ))}
        </SectionCard>
      </div>
    </Drawer>
  );
}

/** Rincian insentif partner satu bulan (FR-PI-002/006): target, Cair dihitung, capaian, tier volume, per toko, pembayaran. */
export function PartnerIncomeDrawer({ row: r, onClose }) {
  const [stores, setStores] = useState(null);
  useEffect(() => {
    pipeline(r.ym, { partnerId: r.partnerId }, {}, { retry: true }).then((p) => {
      const m = new Map();
      p.rows.filter((l) => l.counted).forEach((l) => m.set(l.storeId, (m.get(l.storeId) ?? 0) + l.amount));
      const partner = partners.find((x) => x.id === r.partnerId);
      setStores(partner.stores.filter((s) => s.status === 'ACTIVE' || m.has(s.id)).map((s) => ({ id: s.id, name: s.name, amount: m.get(s.id) ?? 0 })));
    });
  }, [r.ym, r.partnerId]);
  return (
    <Drawer open width={600} onClose={onClose}
      header={<DrawerHeader size="lg" title={r.name} description={`${areaName(r.areaId)} · ${r.storeCount} toko · ${monthLabel(r.ym, true)}`} icon="Building2Line" onClose={onClose} />}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)', padding: 'var(--space-16) var(--space-24) var(--space-24)' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)', flexWrap: 'wrap' }}>
          <MonthStatusBadge status={r.monthStatus} /><span style={muted}>{monthNote(r.ym)}</span>
        </span>
        <SectionCard title={`Insentif partner ${formatRp(r.incentive)}`}>
          <IncentiveBlock r={r} tiers={configFor('partner', r.ym).tiers} />
          <PaymentLine payment={r.payment} />
        </SectionCard>
        <SectionCard title="Cair dihitung per toko">
          {stores == null ? <span role="status" style={muted}>Memuat toko...</span> : stores.map((s) => (
            <div key={s.id} style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-12)', font: 'var(--paragraph-sm)', color: 'var(--text-strong-950)' }}>
              <span>{s.name}</span><span>{formatRp(s.amount)}</span>
            </div>
          ))}
        </SectionCard>
      </div>
    </Drawer>
  );
}
