import { useState } from 'react';
import { Alert, Button, CheckboxLabel, Drawer, DrawerFooter, DrawerHeader, LinkButton, Select, TabMenuHorizontal, TextArea } from '@ds/index.js';
import { ActionModal } from '../../components/ActionModal.jsx';
import { AdminShell } from '../../components/AdminShell.jsx';
import { DataTable } from '../../components/DataTable.jsx';
import { KeyValueGrid, SectionCard } from '../../components/KeyValueGrid.jsx';
import { useToast } from '../../components/Toaster.jsx';
import { MonthStatusBadge } from '../../components/scope3/S3Common.jsx';
import { ApiError, perfMonths } from '../../api/mockApi.js';
import { CURRENT_MONTH, partners } from '../../api/db.js';
import {
  CONFIG_LABEL, MONTH_STATUS, calcPartner, calcSales, configFor, editableMonths, monthStatus, partnerTarget, partnerTargetList, rateLabel, saveConfig,
  setPartnerTarget, tierOf, tierRange,
} from '../../api/scope3.js';
import { nowrap } from '../../lib/cells.jsx';
import { AREAS, areaName } from '../../lib/constants.js';
import { formatDateTime, formatPct, formatRp, monthLabel } from '../../lib/format.js';
import { navigate, withQuery } from '../../lib/router.js';
import { preset } from '../../dev/presets.js';
import { ChangeLog, EffectiveMonth, NumberField, TierEditor, TierTableView, VersionList } from './scope3/ConfigCommon.jsx';

const TABS = [{ value: 'sales', label: 'Insentif Sales' }, { value: 'fee', label: 'Gaji Pokok' }, { value: 'partner', label: 'Insentif Partner' }];
const ROLES3 = ['SA', 'SR', 'TL'];
const muted = { font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' };
const CUTOFF_HINT = 'Pada tanggal ini di bulan M+1, bulan M dikunci: koreksi dan absensi ditutup, file take home pay final diunduh untuk vendor. Vendor butuh 5 hari kalender sebelum tanggal bayar.';
const PARTNER_CUTOFF_HINT = 'Pada tanggal ini di bulan M+1, insentif partner bulan M dikunci: koreksi ditutup, file insentif partner final diunduh untuk Finance.';
const statusKind = (tab) => (tab === 'partner' ? 'PARTNER' : 'SALES');
const allMonths = (tab) => {
  const out = [...perfMonths()];
  editableMonths(tab).forEach((m) => { if (!out.includes(m)) out.push(m); });
  return out.reverse();
};

/**
 * E1 · Skema Insentif (PRD Scope 3 FR-CF-001/003/004, SCR-3-07): konfigurasi berversi per bulan efektif dalam 3 tab — Insentif
 * Sales (target per peran, tier SA/SR dan TL, tanggal cut-off dan bayar sales), Gaji Pokok (daily fee per area × peran, maks. hari
 * dibayar, multiplier, threshold, peran), Insentif Partner (target default, tier volume, tanggal cut-off dan bayar partner, target per
 * partner; versi terpisah dari sales, round 10). Bulan berjalan,
 * bulan menunggu rekonsiliasi, dan bulan mendatang bisa diubah; bulan Final hanya baca. Konfirmasi dan log setiap perubahan.
 */
export function IncentiveSchemes({ user, onLogout, query }) {
  const q = Object.fromEntries(query.entries());
  const tab = TABS.some((t) => t.value === q.tab) ? q.tab : 'sales';
  const months = allMonths(tab);
  const ym = months.includes(q.m) ? q.m : CURRENT_MONTH;
  const [rev, setRev] = useState(0);
  const [editing, setEditing] = useState(!!preset?.scheme?.editing);
  const set = (patch) => navigate(withQuery('/skema-insentif', { ...q, ...patch }));
  const cfg = configFor(tab, ym);
  const final = monthStatus(ym, statusKind(tab)) === 'FINAL';

  return (
    <AdminShell active="/skema-insentif" icon="CoinsLine" title="Skema Insentif" description="Target, tier insentif, gaji pokok, dan insentif partner per bulan. Dipakai untuk semua perhitungan." user={user} onLogout={onLogout}>
      <TabMenuHorizontal value={tab} onChange={(v) => set({ tab: v === 'sales' ? '' : v })} items={TABS} />
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--space-12)', flexWrap: 'wrap' }}>
        <div style={{ width: 280 }}>
          <Select size="sm" value={ym} onChange={(v) => set({ m: v })}
            options={months.map((m) => ({ value: m, label: `${monthLabel(m, true)} · ${m > CURRENT_MONTH ? 'Mendatang' : MONTH_STATUS[monthStatus(m, statusKind(tab))]}` }))} />
        </div>
        <span style={{ ...muted, paddingBottom: 'var(--space-8)' }}>Versi {cfg.version} · berlaku mulai {monthLabel(cfg.effectiveFrom, true)}</span>
        <span style={{ flex: 1 }} />
        <Button size="sm" onClick={() => setEditing(true)}>Ubah konfigurasi</Button>
      </div>
      {final && <Alert status="information" size="sm" title={`${monthLabel(ym, true)} sudah Final dan hanya bisa dilihat. Perubahan dibuat untuk bulan yang belum Final.`} />}
      <div key={`${tab}-${ym}-${rev}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: 'var(--space-16)', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
          {tab === 'sales' && <SalesView cfg={cfg} />}
          {tab === 'fee' && <FeeView cfg={cfg} />}
          {tab === 'partner' && <PartnerView cfg={cfg} ym={ym} user={user} onChanged={() => setRev((x) => x + 1)} />}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
          {tab === 'partner' ? <PartnerSimulator ym={ym} /> : <SalesSimulator ym={ym} />}
          <VersionList kind={tab} />
          <ChangeLog kind={tab} />
        </div>
      </div>
      {editing && <ConfigEditor kind={tab} startMonth={editableMonths(tab).includes(ym) ? ym : CURRENT_MONTH} user={user}
        onClose={() => setEditing(false)} onSaved={(m) => { setEditing(false); setRev((x) => x + 1); set({ m }); }} />}
    </AdminShell>
  );
}

// ------------------------------------------------------------------ tampilan per tab
function SalesView({ cfg }) {
  return (
    <>
      <SectionCard title="Target per peran (per bulan)">
        <KeyValueGrid columns={3} items={ROLES3.map((r) => ({ label: r === 'TL' ? 'TL (Senior dan Junior)' : r, value: formatRp(cfg.targets[r]) }))} />
      </SectionCard>
      <SectionCard title="Tier insentif SA/SR"><TierTableView tiers={cfg.tiers.SALES} /></SectionCard>
      <SectionCard title="Tier insentif TL"><TierTableView tiers={cfg.tiers.TL} /></SectionCard>
      <SectionCard title="Jadwal">
        <KeyValueGrid items={[{ label: 'Tanggal tutup buku (cut-off) sales', value: `Tanggal ${cfg.lockDay} bulan berikutnya` }, { label: 'Tanggal bayar sales', value: `Tanggal ${cfg.payoutDay} bulan berikutnya` }]} />
        <span style={muted}>{CUTOFF_HINT}</span>
      </SectionCard>
    </>
  );
}

function FeeView({ cfg }) {
  const missing = AREAS.filter((a) => !cfg.fees[a.id]);
  return (
    <>
      {missing.map((a) => <Alert key={a.id} status="warning" size="sm" title={`Daily fee belum diatur untuk ${a.name}`} />)}
      <SectionCard title="Daily fee per area dan peran (Rp per hari valid)">
        <DataTable rows={AREAS.filter((a) => cfg.fees[a.id])} rowKey={(a) => a.id} minWidth={420} columns={[
          { key: 'a', header: 'Area', render: (a) => ({ priority: 'leading', title: a.name }) },
          ...ROLES3.map((r) => ({ key: r, header: r, align: 'right', render: (a) => nowrap(formatRp(cfg.fees[a.id][r])) })),
        ]} />
      </SectionCard>
      <SectionCard title="Aturan gaji pokok">
        <KeyValueGrid items={[
          { label: 'Maksimal hari dibayar', value: `${cfg.maxDays} hari per bulan` }, { label: 'Multiplier', value: `×${String(cfg.multiplier).replace('.', ',')}` },
          { label: 'Threshold capaian', value: `di atas ${cfg.threshold}%` }, { label: 'Peran yang mendapat multiplier', value: cfg.roles.join(', ') || '-' },
        ]} />
        <span style={muted}>Gaji pokok = hari absen valid (check in dan check out, maks. {cfg.maxDays} hari) × daily fee area dan peran. Jika capaian di atas {cfg.threshold}%, gaji pokok bulan itu dikali {String(cfg.multiplier).replace('.', ',')}.</span>
      </SectionCard>
    </>
  );
}

function PartnerView({ cfg, ym, user, onChanged }) {
  const toast = useToast();
  const [modal, setModal] = useState(null); // { partnerId?, ym? }
  const list = partnerTargetList();
  return (
    <>
      <SectionCard title="Target dan jadwal">
        <KeyValueGrid items={[{ label: 'Target partner default', value: `${formatRp(cfg.defaultTarget)} per bulan`, full: true },
          { label: 'Tanggal tutup buku (cut-off) partner', value: `Tanggal ${cfg.lockDay} bulan berikutnya` }, { label: 'Tanggal bayar partner', value: `Tanggal ${cfg.payoutDay} bulan berikutnya` }]} />
        <span style={muted}>{PARTNER_CUTOFF_HINT}</span>
      </SectionCard>
      <SectionCard title="Tier insentif volume"><TierTableView tiers={cfg.tiers} /></SectionCard>
      <SectionCard title="Target per partner" actions={<Button size="xs" variant="stroke" tone="neutral" onClick={() => setModal({ ym: editableMonths('partner').includes(ym) ? ym : editableMonths('partner')[0] })}>Atur target partner</Button>}>
        {list.length === 0 ? <span style={muted}>Semua partner memakai target default.</span> : (
          <DataTable rows={list} rowKey={(t) => `${t.partnerId}-${t.ym}`} minWidth={520} columns={[
            { key: 'p', header: 'Partner', render: (t) => ({ priority: 'leading', title: partners.find((p) => p.id === t.partnerId)?.partnerName ?? t.partnerId, description: areaName(partners.find((p) => p.id === t.partnerId)?.areaId) }) },
            { key: 'm', header: 'Bulan', render: (t) => ({ misc: true, children: <span style={{ display: 'inline-flex', gap: 'var(--space-6)', alignItems: 'center' }}>{nowrap(monthLabel(t.ym, true))}<MonthStatusBadge status={monthStatus(t.ym, 'PARTNER')} /></span> }) },
            { key: 'a', header: 'Target', align: 'right', render: (t) => ({ priority: 'regular', title: nowrap(formatRp(t.amount)), description: t.reason || undefined }) },
            { key: 'b', header: 'Diubah oleh', render: (t) => ({ priority: 'regular', title: t.by, description: formatDateTime(t.at) }) },
            { key: 'x', header: '', render: (t) => (monthStatus(t.ym, 'PARTNER') === 'FINAL' ? '' : { misc: true, children: (
              <LinkButton size="sm" onClick={async () => { await setPartnerTarget(t.partnerId, t.ym, null, '', user); toast('success', 'Target partner dihapus, kembali ke default.'); onChanged(); }}>Hapus</LinkButton>
            ) }) },
          ]} />
        )}
      </SectionCard>
      {modal && <PartnerTargetModal init={modal} user={user} onClose={() => setModal(null)} onSaved={() => { setModal(null); toast('success', 'Target partner disimpan.'); onChanged(); }} />}
    </>
  );
}

function PartnerTargetModal({ init, user, onClose, onSaved }) {
  const eligible = partners.filter((p) => p.channel === 'STORE' && p.status === 'ACTIVE');
  const [pid, setPid] = useState(init.partnerId ?? '');
  const [ym, setYm] = useState(init.ym);
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState({});
  async function save() {
    const e = {};
    if (!pid) e.pid = 'Pilih partner';
    if (!(amount > 0)) e.amount = 'Target harus lebih dari 0';
    setErr(e); if (Object.keys(e).length) return;
    setBusy(true);
    try { await setPartnerTarget(pid, ym, amount, reason, user); onSaved(); } catch { setBusy(false); setErr({ amount: 'Gagal menyimpan. Coba lagi.' }); }
  }
  return (
    <ActionModal open onClose={onClose} title="Atur target partner" icon="Building2Line" busy={busy} onConfirm={save} confirmLabel="Simpan target">
      <Select label="Partner" required value={pid || undefined} placeholder="Pilih partner" onChange={setPid} error={err.pid}
        options={eligible.map((p) => ({ value: p.id, label: `${p.partnerName} (${areaName(p.areaId)})` }))} />
      <Select label="Bulan" required value={ym} onChange={setYm} options={editableMonths('partner').map((m) => ({ value: m, label: monthLabel(m, true) }))} />
      {pid && <span style={muted}>Target saat ini {formatRp(partnerTarget(pid, ym))}</span>}
      <NumberField label="Target (Rp)" value={amount} onChange={setAmount} error={err.amount} />
      <TextArea label="Alasan" sublabel="(Opsional)" maxLength={255} rows={2} value={reason} onChange={setReason} placeholder="Contoh: Partner baru, target disesuaikan" />
    </ActionModal>
  );
}

// ------------------------------------------------------------------ simulator
function SalesSimulator({ ym }) {
  const [role, setRole] = useState('SA');
  const [area, setArea] = useState(String(AREAS[0].id));
  const [actual, setActual] = useState(90000000);
  const [days, setDays] = useState(23);
  const r = calcSales(configFor('sales', ym), configFor('fee', ym), role, { actual: Number(actual) || 0, validDays: Number(days) || 0, areaId: Number(area) });
  return (
    <SectionCard title="Simulator">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 'var(--space-12)' }}>
        <Select label="Peran" value={role} onChange={setRole} options={ROLES3.map((x) => ({ value: x, label: x }))} />
        <Select label="Area" value={area} onChange={setArea} options={AREAS.map((a) => ({ value: String(a.id), label: a.name }))} />
        <NumberField label="Cair dihitung (Rp)" value={actual} onChange={setActual} required={false} />
        <NumberField label="Hari valid" value={days} onChange={setDays} required={false} />
      </div>
      <KeyValueGrid items={[
        { label: 'Capaian', value: `${formatPct(r.achievement, 1)} · tier ${tierRange(r.tier)}` }, { label: 'Koefisien', value: rateLabel(r.coefficient) },
        { label: 'Insentif', value: formatRp(r.incentive) },
        { label: 'Gaji pokok', value: `${formatRp(r.basicSalary)}${r.multiplierApplies ? ` (×${r.multiplier})` : ''}` },
        { label: 'Take home pay', value: formatRp(r.takeHomePay) },
      ]} />
    </SectionCard>
  );
}

function PartnerSimulator({ ym }) {
  const cfg = configFor('partner', ym);
  const [actual, setActual] = useState(450000000);
  const [target, setTarget] = useState(cfg.defaultTarget);
  const r = calcPartner(cfg, { actual: Number(actual) || 0, target: Number(target) || 0 });
  return (
    <SectionCard title="Simulator">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 'var(--space-12)' }}>
        <NumberField label="Cair dihitung (Rp)" value={actual} onChange={setActual} required={false} />
        <NumberField label="Target partner (Rp)" value={target} onChange={setTarget} required={false} />
      </div>
      <KeyValueGrid items={[
        { label: 'Capaian', value: `${formatPct(r.achievement, 1)} · tier ${tierRange(tierOf(cfg.tiers, r.achievement))}` },
        { label: 'Koefisien', value: rateLabel(r.coefficient) }, { label: 'Insentif partner', value: formatRp(r.incentive) },
      ]} />
    </SectionCard>
  );
}

// ------------------------------------------------------------------ editor
function ConfigEditor({ kind, startMonth, user, onClose, onSaved }) {
  const toast = useToast();
  const [ym, setYm] = useState(startMonth);
  const [draft, setDraft] = useState(() => structuredClone(configFor(kind, startMonth)));
  const [errors, setErrors] = useState({});
  const [confirm, setConfirm] = useState(false);
  const [busy, setBusy] = useState(false);
  const change = (patch) => setDraft((d) => ({ ...d, ...patch }));
  const pickMonth = (m) => { setYm(m); setDraft(structuredClone(configFor(kind, m))); setErrors({}); };

  async function save() {
    setBusy(true);
    try {
      await saveConfig(kind, ym, draft, user);
      toast('success', `Konfigurasi ${CONFIG_LABEL[kind]} disimpan, berlaku mulai ${monthLabel(ym, true)}.`);
      onSaved(ym);
    } catch (e) {
      setBusy(false); setConfirm(false);
      if (e instanceof ApiError && e.code === 'INVALID') setErrors(e.field);
      else toast('error', 'Gagal menyimpan konfigurasi. Coba lagi.');
    }
  }
  const footer = (
    <DrawerFooter>
      <Button variant="stroke" tone="neutral" size="sm" onClick={onClose}>Batal</Button>
      <Button size="sm" onClick={() => setConfirm(true)}>Simpan</Button>
    </DrawerFooter>
  );
  return (
    <Drawer open width={720} onClose={onClose} footer={footer}
      header={<DrawerHeader size="lg" title={`Ubah ${CONFIG_LABEL[kind]}`} description="Bulan Final tidak bisa diubah." icon="EditLine" onClose={onClose} />}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)', padding: 'var(--space-16) var(--space-24) var(--space-24)' }}>
        <EffectiveMonth kind={kind} value={ym} onChange={pickMonth} />
        {Object.keys(errors).length > 0 && <Alert status="error" size="sm" title="Periksa kembali isian yang ditandai." />}
        {kind === 'sales' && (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 'var(--space-12)' }}>
              {ROLES3.map((r) => <NumberField key={r} label={`Target ${r} (Rp)`} value={draft.targets[r]} error={errors[`target.${r}`]} onChange={(v) => change({ targets: { ...draft.targets, [r]: v } })} />)}
            </div>
            <TierEditor title="Tier insentif SA/SR" tiers={draft.tiers.SALES} error={errors['tiers.SALES']} onChange={(t) => change({ tiers: { ...draft.tiers, SALES: t } })} />
            <TierEditor title="Tier insentif TL" tiers={draft.tiers.TL} error={errors['tiers.TL']} onChange={(t) => change({ tiers: { ...draft.tiers, TL: t } })} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 'var(--space-12)' }}>
              <NumberField label="Tanggal tutup buku (cut-off) sales" value={draft.lockDay} error={errors.lockDay} onChange={(v) => change({ lockDay: v })} hint="2–28, sebelum tanggal bayar" />
              <NumberField label="Tanggal bayar sales" value={draft.payoutDay} error={errors.payoutDay} onChange={(v) => change({ payoutDay: v })} hint="Maksimal 28" />
            </div>
            <span style={muted}>{CUTOFF_HINT}</span>
          </>
        )}
        {kind === 'fee' && (
          <>
            <DataTable rows={AREAS} rowKey={(a) => a.id} minWidth={620} columns={[
              { key: 'a', header: 'Area', render: (a) => ({ priority: 'leading', title: a.name }) },
              ...ROLES3.map((r) => ({ key: r, header: `${r} (Rp)`, render: (a) => ({ misc: true, children: (
                <NumberField value={draft.fees[a.id]?.[r] ?? ''} required={false} error={errors[`fee.${a.id}.${r}`]} width={130}
                  onChange={(v) => change({ fees: { ...draft.fees, [a.id]: { ...(draft.fees[a.id] ?? {}), [r]: v } } })} />
              ) }) })),
              { key: 'copy', header: '', render: (a) => ({ misc: true, children: (
                <LinkButton size="sm" onClick={() => change({ fees: Object.fromEntries(AREAS.map((x) => [x.id, { ...(draft.fees[a.id] ?? {}) }])) })}>Salin ke semua area</LinkButton>
              ) }) },
            ]} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 'var(--space-12)' }}>
              <NumberField label="Maksimal hari dibayar" value={draft.maxDays} error={errors.maxDays} onChange={(v) => change({ maxDays: v })} hint="1–31" />
              <NumberField label="Multiplier" value={draft.multiplier} decimals error={errors.multiplier} onChange={(v) => change({ multiplier: v })} hint="Minimal 1" />
              <NumberField label="Threshold capaian" value={draft.threshold} decimals suffix="%" error={errors.threshold} onChange={(v) => change({ threshold: v })} hint="Berlaku bila capaian di atas nilai ini" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
              <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>Peran yang mendapat multiplier</span>
              <div style={{ display: 'flex', gap: 'var(--space-16)' }}>
                {ROLES3.map((r) => <CheckboxLabel key={r} label={r} checked={draft.roles.includes(r)} onChange={(v) => change({ roles: v ? [...new Set([...draft.roles, r])] : draft.roles.filter((x) => x !== r) })} />)}
              </div>
            </div>
            <span style={muted}>Maksimal hari dibayar, multiplier, threshold, dan peran berlaku untuk semua area di versi ini.</span>
          </>
        )}
        {kind === 'partner' && (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 'var(--space-12)' }}>
              <NumberField label="Target partner default (Rp)" value={draft.defaultTarget} error={errors.defaultTarget} onChange={(v) => change({ defaultTarget: v })} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 'var(--space-12)' }}>
              <NumberField label="Tanggal tutup buku (cut-off) partner" value={draft.lockDay} error={errors.lockDay} onChange={(v) => change({ lockDay: v })} hint="2–28, sebelum tanggal bayar" />
              <NumberField label="Tanggal bayar partner" value={draft.payoutDay} error={errors.payoutDay} onChange={(v) => change({ payoutDay: v })} hint="Maksimal 28" />
            </div>
            <span style={muted}>{PARTNER_CUTOFF_HINT}</span>
            <TierEditor title="Tier insentif volume" tiers={draft.tiers} error={errors.tiers} onChange={(t) => change({ tiers: t })} />
          </>
        )}
      </div>
      {confirm && (
        <ActionModal open onClose={() => setConfirm(false)} title={`Simpan ${CONFIG_LABEL[kind]}?`} icon="CheckLine" busy={busy} onConfirm={save} confirmLabel="Ya, simpan">
          <span style={muted}>Perubahan berlaku mulai {monthLabel(ym, true)} pada pengambilan data berikutnya dan tercatat di riwayat perubahan.</span>
        </ActionModal>
      )}
    </Drawer>
  );
}
