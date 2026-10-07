import { useEffect, useState } from 'react';
import { Badge, Button, CompactButton, Drawer, DrawerFooter, DrawerHeader, Icon, LinkButton, Select, TextInput } from '@ds/index.js';
import { ActionModal } from '../../components/ActionModal.jsx';
import { KeyValueGrid } from '../../components/KeyValueGrid.jsx';
import { TbdCallout } from '../../components/TbdCallout.jsx';
import { useToast } from '../../components/Toaster.jsx';
import { createDraft, currentMonth, discardDraft, getScheme, publishDraft, saveDraft } from '../../api/mockApi.js';
import { RECIPIENT_LABEL } from '../../api/db.js';
import { formatDateTime, formatPct, formatRp, monthLabel } from '../../lib/format.js';
import { VERSION_STATUS, tierLabel } from './schemeText.js';

const Section = ({ title, children, right }) => (
  <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-8)' }}>
      <h3 style={{ margin: 0, font: 'var(--subheading-xs)', letterSpacing: 'var(--subheading-xs-ls)', textTransform: 'uppercase', color: 'var(--text-soft-400)' }}>{title}</h3>
      {right}
    </div>
    {children}
  </section>
);
/** Bulan berlaku yang bisa dipilih saat terbit: bulan depan s/d 6 bulan ke depan (tidak pernah mundur). */
function futureMonths() {
  const [y, m] = currentMonth().split('-').map(Number);
  return Array.from({ length: 6 }, (_, i) => { const d = new Date(Date.UTC(y, m + i, 1)); return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`; });
}
const num = (v) => (v === '' || v === null || v === undefined || Number.isNaN(Number(v)) ? null : Number(v));
const prevMonth = (ym) => { const [y, m] = ym.split('-').map(Number); const d = new Date(Date.UTC(y, m - 2, 1)); return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`; };

/** Draf → string untuk form. */
const toForm = (d) => ({ payday: String(d.payday), components: d.components.map((c) => ({ ...c, amount: c.amount != null ? String(c.amount) : undefined, rate: c.rate != null ? String(c.rate) : undefined, tiers: c.tiers?.map((t) => ({ from: t.from, to: t.to == null ? '' : String(t.to), rate: String(t.rate) })) })) });
/** Form → draf: "dari" tiap tier = "sampai" tier sebelumnya (tanpa celah/tumpang tindih). */
const fromForm = (f) => ({
  payday: Number(f.payday),
  components: f.components.map((c) => ({ ...c, amount: c.amount != null ? Number(c.amount) : undefined, rate: c.rate != null ? Number(c.rate) : undefined,
    tiers: c.tiers?.map((t, i, all) => ({ from: i === 0 ? 0 : Number(all[i - 1].to), to: i === all.length - 1 ? null : Number(t.to), rate: Number(t.rate) })) })),
});

/** Validasi PRD v3 §E2: tier mencakup 0% ke atas tanpa celah/tumpang tindih; tarif ≥ 0; tanggal bayar 1–28. */
function validate(f) {
  const e = {};
  const p = num(f.payday);
  if (p === null) e.payday = 'Informasi wajib diisi'; else if (!Number.isInteger(p) || p < 1 || p > 28) e.payday = 'Isi tanggal 1–28';
  f.components.forEach((c, ci) => {
    if (c.type === 'fixed') { const a = num(c.amount); if (a === null) e[`${ci}.amount`] = 'Informasi wajib diisi'; else if (a < 0) e[`${ci}.amount`] = 'Minimal 0'; }
    if (c.type === 'percent') { const r = num(c.rate); if (r === null) e[`${ci}.rate`] = 'Informasi wajib diisi'; else if (r < 0 || r > 100) e[`${ci}.rate`] = 'Isi 0–100'; }
    c.tiers?.forEach((t, ti) => {
      const from = ti === 0 ? 0 : num(c.tiers[ti - 1].to);
      if (ti < c.tiers.length - 1) { const to = num(t.to); if (to === null) e[`${ci}.${ti}.to`] = 'Wajib'; else if (from !== null && to <= from) e[`${ci}.${ti}.to`] = `Harus lebih dari ${from}%`; }
      const r = num(t.rate); if (r === null) e[`${ci}.${ti}.rate`] = 'Wajib'; else if (r < 0 || r > 100) e[`${ci}.${ti}.rate`] = 'Isi 0–100';
    });
  });
  return e;
}

/** E1–E2 · Detail skema, riwayat versi, dan editor draf versi baru + modal Terbitkan. */
export function SchemeDrawer({ id, user, startEditing = false, onClose, onChanged }) {
  const toast = useToast();
  const [s, setS] = useState(null);
  const [form, setForm] = useState(null);
  const [touched, setTouched] = useState(false);
  const [publish, setPublish] = useState(false);
  const [month, setMonth] = useState(futureMonths()[0]);
  const [busy, setBusy] = useState(false);
  const [openVersion, setOpenVersion] = useState(null);
  useEffect(() => {
    getScheme(id).then(async (x) => {
      if (startEditing) { const y = await createDraft(id, user); setS(y); setForm(toForm(y.draft)); } else setS(x);
    });
  }, [id, startEditing, user]);

  const errs = form ? validate(form) : {};
  const show = (k) => (touched ? errs[k] : undefined);
  const setComp = (ci, patch) => setForm((d) => ({ ...d, components: d.components.map((c, i) => (i === ci ? { ...c, ...patch } : c)) }));
  const setTier = (ci, ti, patch) => setComp(ci, { tiers: form.components[ci].tiers.map((t, i) => (i === ti ? { ...t, ...patch } : t)) });

  async function startDraft() { setBusy(true); const x = await createDraft(id, user); setBusy(false); setS(x); setForm(toForm(x.draft)); onChanged(); }
  async function save() {
    setTouched(true); if (Object.keys(errs).length) return;
    setBusy(true); const x = await saveDraft(id, fromForm(form)); setBusy(false); setS(x); toast('success', 'Draf skema disimpan.'); onChanged();
  }
  async function discard() { setBusy(true); const x = await discardDraft(id); setBusy(false); setS(x); setForm(null); setTouched(false); toast('success', 'Draf skema dihapus.'); onChanged(); }
  function askPublish() { setTouched(true); if (Object.keys(errs).length === 0) setPublish(true); }
  async function doPublish() {
    setBusy(true);
    await saveDraft(id, fromForm(form));
    const x = await publishDraft(id, month, user);
    setBusy(false); setPublish(false); setForm(null); setTouched(false); setS(x);
    toast('success', 'Versi skema berhasil diterbitkan.'); onChanged();
  }

  if (!s) return <Drawer open width={600} onClose={onClose} header={<DrawerHeader title="Skema Insentif" onClose={onClose} />} />;
  const editing = !!form;
  const pctInput = (label, value, onChange, error, disabled) => (
    <TextInput size="sm" aria-label={label} value={value} disabled={disabled} onChange={(e) => onChange(e.target.value.replace(/[^\d.]/g, ''))} error={error} inputMode="decimal"
      suffix={<span style={{ padding: '0 var(--space-8)', font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>%</span>} />
  );
  const components = (comps, edit) => comps.map((c, ci) => (
    <Section key={c.key} title={c.label}>
      <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)', marginTop: 'calc(-1 * var(--space-8))' }}>Dasar: {c.basis}</span>
      {c.type === 'fixed' && (edit
        ? <TextInput label="Nominal" required size="sm" value={c.amount} inputMode="numeric" error={show(`${ci}.amount`)}
            prefix={<span style={{ padding: '0 var(--space-8)', font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>Rp</span>}
            onChange={(e) => setComp(ci, { amount: e.target.value.replace(/\D/g, '') })} />
        : <KeyValueGrid items={[{ label: 'Nominal', value: `${formatRp(c.amount)} ${c.basis}` }]} />)}
      {c.type === 'percent' && (edit
        ? <div style={{ maxWidth: 200 }}>{pctInput(`Tarif ${c.label}`, c.rate, (v) => setComp(ci, { rate: v }), show(`${ci}.rate`))}</div>
        : <KeyValueGrid items={[{ label: 'Tarif', value: `${formatPct(c.rate, 2)} ${c.basis}` }]} />)}
      {c.tiers && <TierTable c={c} ci={ci} edit={edit} show={show} setTier={setTier} setComp={setComp} pctInput={pctInput} />}
    </Section>
  ));

  return (
    <>
      <Drawer open width={600} onClose={publish || busy ? undefined : onClose}
        header={<DrawerHeader size="lg" title={s.name} description={`Penerima: ${RECIPIENT_LABEL[s.recipient]}${editing ? ' · Draf versi baru' : ''}`} icon="CoinsLine" onClose={onClose} />}
        footer={editing ? (
          <DrawerFooter left={<Button variant="ghost" tone="error" size="sm" disabled={busy} onClick={discard}>Hapus Draf</Button>}>
            <Button variant="stroke" tone="neutral" size="sm" disabled={busy} onClick={save}>Simpan Draf</Button>
            <Button size="sm" disabled={busy} onClick={askPublish}>Terbitkan</Button>
          </DrawerFooter>
        ) : (
          <DrawerFooter>
            <Button variant="stroke" tone="neutral" size="sm" onClick={onClose}>Tutup</Button>
            <Button size="sm" leftIcon={<Icon name={s.draft ? 'EditLine' : 'AddLine'} />} disabled={busy} onClick={startDraft}>{s.draft ? 'Lanjutkan Draf' : 'Buat Versi Baru'}</Button>
          </DrawerFooter>
        )}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-24)', padding: 'var(--space-16) var(--space-24) var(--space-24)' }}>
          {editing ? (
            <>
              <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>Draf disalin dari versi terbaru. Versi aktif tidak berubah sampai draf diterbitkan dan bulan berlakunya tiba.</span>
              <Section title="Pembayaran">
                <div style={{ maxWidth: 240 }}>
                  <TextInput label="Tanggal bayar" required size="sm" value={form.payday} inputMode="numeric" hint={show('payday') ? undefined : 'Tanggal 1–28 bulan berikutnya'}
                    onChange={(e) => setForm((d) => ({ ...d, payday: e.target.value.replace(/\D/g, '').slice(0, 2) }))} error={show('payday')} />
                </div>
              </Section>
              {components(form.components, true)}
            </>
          ) : (
            <>
              {s.draft && <TbdNoteDraft s={s} />}
              <Section title={`Versi aktif · Versi ${s.active.version}`} right={<Badge color="green" size="md">Aktif</Badge>}>
                <KeyValueGrid items={[
                  { label: 'Frekuensi', value: 'Bulanan' }, { label: 'Tanggal bayar', value: `Tgl ${s.active.payday} bulan berikutnya` },
                  { label: 'Berlaku mulai', value: monthLabel(s.active.effectiveFrom, true) }, { label: 'Diterbitkan', value: `${s.active.publishedBy ?? s.active.createdBy} · ${formatDateTime(s.active.publishedAt)}` },
                ]} />
              </Section>
              {components(s.active.components, false)}
              <Section title="Riwayat versi">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
                  {s.versions.map((v) => (
                    <div key={v.version} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)', padding: 'var(--space-12)', borderRadius: 'var(--rounded-12)', boxShadow: 'var(--shadow-stroke)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)', flexWrap: 'wrap' }}>
                        <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>Versi {v.version}</span>
                        <Badge color={VERSION_STATUS[v.status].color} size="md">{VERSION_STATUS[v.status].label}</Badge>
                        <span style={{ flex: 1, font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>Berlaku {monthLabel(v.effectiveFrom, true)} · {v.publishedBy ?? v.createdBy} · {formatDateTime(v.publishedAt)}</span>
                        <LinkButton size="sm" onClick={() => setOpenVersion(openVersion === v.version ? null : v.version)}>{openVersion === v.version ? 'Tutup' : 'Lihat'}</LinkButton>
                      </div>
                      {openVersion === v.version && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)', paddingTop: 'var(--space-8)' }}>
                          <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>Tanggal bayar: Tgl {v.payday}</span>
                          {components(v.components, false)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Section>
            </>
          )}
        </div>
      </Drawer>
      <ActionModal open={publish} onClose={() => setPublish(false)} title="Terbitkan versi baru?" description={s.name} icon="SendPlaneLine" confirmLabel="Terbitkan" busy={busy} onConfirm={doPublish}>
        <Select label="Berlaku mulai" required value={month} onChange={setMonth} placeholder="Pilih bulan" options={futureMonths().map((m) => ({ value: m, label: monthLabel(m, true) }))} />
        <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>
          Versi {s.active.version} tetap berlaku sampai {monthLabel(prevMonth(month), true)}. Versi yang diterbitkan disimpan read-only di riwayat dan tidak berlaku mundur.
        </span>
        <TbdCallout>Apakah versi baru perlu persetujuan approver kedua sebelum terbit?</TbdCallout>
      </ActionModal>
    </>
  );
}

const TbdNoteDraft = ({ s }) => (
  <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>Ada draf versi baru yang belum diterbitkan (terakhir disimpan {formatDateTime(s.draft.updatedAt)}).</span>
);

function TierTable({ c, ci, edit, show, setTier, setComp, pctInput }) {
  const cell = { padding: 'var(--space-8) var(--space-12)', font: 'var(--paragraph-sm)', color: 'var(--text-strong-950)', textAlign: 'left', verticalAlign: 'top' };
  const head = { ...cell, font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)', background: 'var(--bg-weak-50)' };
  const metric = c.metric ?? 'Nilai';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
      <table style={{ width: '100%', tableLayout: 'fixed', borderCollapse: 'collapse', borderRadius: 'var(--rounded-12)', overflow: 'hidden', boxShadow: 'var(--shadow-stroke)' }}>
        <thead><tr>
          {edit ? <><th style={head}>{metric} lebih dari</th><th style={head}>Sampai (≤)</th></> : <th style={head}>{metric}</th>}
          <th style={head}>Tarif</th>{edit && <th style={{ ...head, width: 56 }} aria-label="Hapus" />}
        </tr></thead>
        <tbody>
          {c.tiers.map((t, ti) => {
            const last = ti === c.tiers.length - 1;
            const from = ti === 0 ? 0 : (c.tiers[ti - 1].to === '' ? '…' : c.tiers[ti - 1].to);
            return (
              <tr key={ti} style={{ boxShadow: 'inset 0 1px 0 var(--stroke-soft-200)' }}>
                {edit ? (
                  <>
                    <td style={{ ...cell, color: 'var(--text-sub-600)', paddingTop: 'var(--space-14)' }}>{ti === 0 ? '0% (termasuk)' : `${from}%`}</td>
                    <td style={cell}>{last ? <span style={{ display: 'block', paddingTop: 'var(--space-6)', color: 'var(--text-sub-600)' }}>Tak terbatas</span> : pctInput(`Sampai tier ${ti + 1}`, t.to, (v) => setTier(ci, ti, { to: v }), show(`${ci}.${ti}.to`))}</td>
                  </>
                ) : <td style={cell}>{tierLabel(t)}</td>}
                <td style={cell}>{edit ? pctInput(`Tarif tier ${ti + 1}`, t.rate, (v) => setTier(ci, ti, { rate: v }), show(`${ci}.${ti}.rate`)) : formatPct(t.rate, 2)}</td>
                {edit && <td style={cell}><CompactButton variant="ghost" icon={<Icon name="DeleteBinLine" />} aria-label={`Hapus tier ${ti + 1}`} disabled={c.tiers.length <= 2}
                  onClick={() => setComp(ci, { tiers: c.tiers.filter((_, i) => i !== ti).map((x, i, all) => (i === all.length - 1 ? { ...x, to: '' } : x)) })} /></td>}
              </tr>
            );
          })}
        </tbody>
      </table>
      {edit && (
        <>
          <Button variant="ghost" tone="primary" size="xs" leftIcon={<Icon name="AddLine" />} style={{ alignSelf: 'flex-start' }}
            onClick={() => setComp(ci, { tiers: [...c.tiers.slice(0, -1), { ...c.tiers[c.tiers.length - 1], to: '' }, { to: '', rate: '' }].map((x, i, all) => (i === all.length - 1 ? { ...x, to: '' } : x)) })}>Tambah tier</Button>
          <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>Tier berurutan mulai 0%. Batas bawah tiap tier mengikuti batas atas tier sebelumnya, jadi tidak ada celah atau tumpang tindih.</span>
        </>
      )}
    </div>
  );
}
