import { useEffect, useState } from 'react';
import { Button, CompactButton, Drawer, DrawerFooter, DrawerHeader, Icon, Select, TextInput } from '@ds/index.js';
import { ActionModal } from '../../components/ActionModal.jsx';
import { KeyValueGrid } from '../../components/KeyValueGrid.jsx';
import { Timeline } from '../../components/Timeline.jsx';
import { useToast } from '../../components/Toaster.jsx';
import { currentMonth, listSchemes, updateScheme } from '../../api/mockApi.js';
import { RECIPIENT_LABEL } from '../../api/db.js';
import { formatDateTime, formatPct, formatRp, monthLabel } from '../../lib/format.js';
import { restLabel, tierLabel } from './schemeText.js';

const Section = ({ title, children }) => (
  <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
    <h3 style={{ margin: 0, font: 'var(--subheading-xs)', letterSpacing: 'var(--subheading-xs-ls)', textTransform: 'uppercase', color: 'var(--text-soft-400)' }}>{title}</h3>
    {children}
  </section>
);
/** Bulan berlaku yang bisa dipilih: bulan berjalan s/d 5 bulan ke depan. */
function futureMonths() {
  const [y, m] = currentMonth().split('-').map(Number);
  return Array.from({ length: 6 }, (_, i) => { const d = new Date(Date.UTC(y, m - 1 + i, 1)); return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`; });
}
const num = (v) => (v === '' || v === null || Number.isNaN(Number(v)) ? null : Number(v));

/** Skema → draf form (angka sebagai string). */
const toDraft = (x) => ({ payday: String(x.payday), effectiveFrom: futureMonths()[1], components: x.components.map((c) => ({ ...c, amount: c.amount != null ? String(c.amount) : undefined, rate: c.rate != null ? String(c.rate) : undefined, tiers: c.tiers?.map((t) => ({ ...t, above: t.above != null ? String(t.above) : undefined, below: t.below != null ? String(t.below) : undefined, rate: String(t.rate) })) })) });

/** Validasi draf skema → { path: pesan }. */
function validate(d) {
  const e = {};
  const p = num(d.payday);
  if (p === null) e.payday = 'Informasi wajib diisi'; else if (!Number.isInteger(p) || p < 1 || p > 28) e.payday = 'Isi tanggal 1–28';
  d.components.forEach((c, ci) => {
    if (c.type === 'fixed') { const a = num(c.amount); if (a === null) e[`${ci}.amount`] = 'Informasi wajib diisi'; else if (a <= 0) e[`${ci}.amount`] = 'Harus lebih dari 0'; }
    if (c.type === 'percent') { const r = num(c.rate); if (r === null) e[`${ci}.rate`] = 'Informasi wajib diisi'; else if (r < 0 || r > 100) e[`${ci}.rate`] = 'Isi 0–100'; }
    if (c.tiers) {
      const key = c.type === 'tierAbove' ? 'above' : 'below';
      c.tiers.forEach((t, ti) => {
        const b = num(t[key]); const r = num(t.rate);
        if (b === null) e[`${ci}.${ti}.${key}`] = 'Wajib'; else if (b < 0) e[`${ci}.${ti}.${key}`] = 'Min. 0';
        if (r === null) e[`${ci}.${ti}.rate`] = 'Wajib'; else if (r < 0 || r > 100) e[`${ci}.${ti}.rate`] = 'Isi 0–100';
        const prev = ti > 0 ? num(c.tiers[ti - 1][key]) : null;
        if (b !== null && prev !== null && (key === 'above' ? b >= prev : b <= prev)) e[`${ci}.${ti}.${key}`] = key === 'above' ? 'Harus lebih kecil dari tier di atas' : 'Harus lebih besar dari tier di atas';
      });
      if (c.tiers.length === 0) e[`${ci}.tiers`] = 'Minimal 1 tier';
    }
  });
  return e;
}

/** S2 · Detail & ubah skema insentif. Simpan meminta konfirmasi; perubahan berlaku mulai bulan yang dipilih. */
export function SchemeDrawer({ id, user, startEditing = false, onClose, onSaved }) {
  const toast = useToast();
  const [s, setS] = useState(null);
  const [draft, setDraft] = useState(null);
  const [touched, setTouched] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [busy, setBusy] = useState(false);
  useEffect(() => { listSchemes({ retry: true }).then((all) => { const x = all.find((y) => y.id === id); setS(x); if (startEditing) setDraft(toDraft(x)); }); }, [id, startEditing]);

  const errs = draft ? validate(draft) : {};
  const show = (k) => (touched ? errs[k] : undefined);
  const setComp = (ci, patch) => setDraft((d) => ({ ...d, components: d.components.map((c, i) => (i === ci ? { ...c, ...patch } : c)) }));
  const setTier = (ci, ti, patch) => setComp(ci, { tiers: draft.components[ci].tiers.map((t, i) => (i === ti ? { ...t, ...patch } : t)) });

  function askSave() { setTouched(true); if (Object.keys(errs).length === 0) setConfirm(true); }
  async function save() {
    setBusy(true);
    const payload = {
      payday: Number(draft.payday), effectiveFrom: draft.effectiveFrom,
      components: draft.components.map((c) => ({ ...c, amount: c.amount != null ? Number(c.amount) : undefined, rate: c.rate != null ? Number(c.rate) : undefined, tiers: c.tiers?.map((t) => ({ ...(t.above != null ? { above: Number(t.above) } : { below: Number(t.below) }), rate: Number(t.rate) })) })),
    };
    const ns = await updateScheme(id, payload, user);
    setBusy(false); setConfirm(false); setDraft(null); setTouched(false); setS(ns);
    onSaved(ns);
    toast('success', 'Skema insentif berhasil diperbarui.');
  }

  if (!s) return <Drawer open width={560} onClose={onClose} header={<DrawerHeader title="Skema Insentif" onClose={onClose} />} />;
  const editing = !!draft;
  const pctInput = (label, value, onChange, error) => (
    <TextInput size="sm" aria-label={label} value={value} onChange={(e) => onChange(e.target.value.replace(/[^\d.]/g, ''))} error={error} inputMode="decimal"
      suffix={<span style={{ padding: '0 var(--space-8)', font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>%</span>} />
  );

  return (
    <>
      <Drawer open width={560} onClose={confirm ? undefined : onClose}
        header={<DrawerHeader title={s.name} description={`Penerima: ${RECIPIENT_LABEL[s.recipient]}`} icon="CoinsLine" onClose={onClose} />}
        footer={editing ? (
          <DrawerFooter>
            <Button variant="stroke" tone="neutral" size="sm" onClick={() => { setDraft(null); setTouched(false); }}>Batal</Button>
            <Button size="sm" onClick={askSave}>Simpan Perubahan</Button>
          </DrawerFooter>
        ) : (
          <DrawerFooter>
            <Button variant="stroke" tone="neutral" size="sm" onClick={onClose}>Tutup</Button>
            <Button size="sm" leftIcon={<Icon name="EditLine" />} onClick={() => setDraft(toDraft(s))}>Ubah Skema</Button>
          </DrawerFooter>
        )}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-24)', padding: 'var(--space-16) var(--space-24) var(--space-24)' }}>
          <Section title="Pembayaran">
            {editing ? (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-12)' }}>
                <TextInput label="Tanggal bayar" required size="sm" value={draft.payday} inputMode="numeric" hint={show('payday') ? undefined : 'Tanggal 1–28 bulan berikutnya'}
                  onChange={(e) => setDraft((d) => ({ ...d, payday: e.target.value.replace(/\D/g, '').slice(0, 2) }))} error={show('payday')} />
                <Select label="Berlaku mulai" required size="sm" value={draft.effectiveFrom} placeholder="Pilih bulan"
                  options={futureMonths().map((m) => ({ value: m, label: monthLabel(m, true) }))} onChange={(v) => setDraft((d) => ({ ...d, effectiveFrom: v }))} />
              </div>
            ) : (
              <KeyValueGrid items={[
                { label: 'Frekuensi', value: 'Sekali sebulan' }, { label: 'Tanggal bayar', value: `Tgl ${s.payday} bulan berikutnya` },
                { label: 'Berlaku mulai', value: monthLabel(s.effectiveFrom, true) }, { label: 'Terakhir diubah', value: `${s.updatedBy} · ${formatDateTime(s.updatedAt)}` },
              ]} />
            )}
          </Section>
          {(editing ? draft.components : s.components).map((c, ci) => (
            <Section key={c.key} title={c.label}>
              <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)', marginTop: 'calc(-1 * var(--space-8))' }}>Dasar: {c.basis}</span>
              {c.type === 'fixed' && (editing
                ? <TextInput label="Nominal" required size="sm" value={c.amount} inputMode="numeric" error={show(`${ci}.amount`)}
                    prefix={<span style={{ padding: '0 var(--space-8)', font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>Rp</span>}
                    onChange={(e) => setComp(ci, { amount: e.target.value.replace(/\D/g, '') })} />
                : <KeyValueGrid items={[{ label: 'Nominal', value: `${formatRp(c.amount)} ${c.basis}` }]} />)}
              {c.type === 'percent' && (editing
                ? <div style={{ maxWidth: 200 }}>{pctInput(`Tarif ${c.label}`, c.rate, (v) => setComp(ci, { rate: v }), show(`${ci}.rate`))}</div>
                : <KeyValueGrid items={[{ label: 'Tarif', value: `${formatPct(c.rate, 2)} ${c.basis}` }]} />)}
              {c.tiers && <TierTable c={c} ci={ci} editing={editing} show={show} setTier={setTier} setComp={setComp} pctInput={pctInput} />}
            </Section>
          ))}
          {!editing && (
            <Section title="Riwayat">
              <Timeline items={s.history.map((h, i) => ({ key: i, title: h.text, meta: `${h.by} · ${formatDateTime(h.at)}` }))} />
            </Section>
          )}
        </div>
      </Drawer>
      <ActionModal open={confirm} onClose={() => setConfirm(false)} title="Simpan perubahan skema?" description={s.name} icon="CoinsLine"
        confirmLabel="Simpan" busy={busy} onConfirm={save}>
        <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>
          Tarif baru berlaku mulai {draft ? monthLabel(draft.effectiveFrom, true) : ''}. Estimasi bulan sebelumnya tetap memakai tarif lama.
        </span>
      </ActionModal>
    </>
  );
}

function TierTable({ c, ci, editing, show, setTier, setComp, pctInput }) {
  const key = c.type === 'tierAbove' ? 'above' : 'below';
  const cell = { padding: 'var(--space-8) var(--space-12)', font: 'var(--paragraph-sm)', color: 'var(--text-strong-950)', textAlign: 'left', verticalAlign: 'top' };
  const head = { ...cell, font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)', background: 'var(--bg-weak-50)' };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
      <table style={{ width: '100%', tableLayout: 'fixed', borderCollapse: 'collapse', borderRadius: 'var(--rounded-12)', overflow: 'hidden', boxShadow: 'var(--shadow-stroke)' }}>
        <thead><tr>
          <th style={head}>{key === 'above' ? 'Batas pencapaian (lebih dari)' : 'Batas MFP (kurang dari)'}</th><th style={head}>Tarif</th>{editing && <th style={{ ...head, width: 56 }} aria-label="Hapus" />}
        </tr></thead>
        <tbody>
          {c.tiers.map((t, ti) => (
            <tr key={ti} style={{ boxShadow: 'inset 0 1px 0 var(--stroke-soft-200)' }}>
              <td style={cell}>{editing ? pctInput(`Batas tier ${ti + 1}`, t[key], (v) => setTier(ci, ti, { [key]: v }), show(`${ci}.${ti}.${key}`)) : tierLabel(c, t)}</td>
              <td style={cell}>{editing ? pctInput(`Tarif tier ${ti + 1}`, t.rate, (v) => setTier(ci, ti, { rate: v }), show(`${ci}.${ti}.rate`)) : formatPct(t.rate, 2)}</td>
              {editing && <td style={cell}><CompactButton variant="ghost" icon={<Icon name="DeleteBinLine" />} aria-label={`Hapus tier ${ti + 1}`} disabled={c.tiers.length === 1} onClick={() => setComp(ci, { tiers: c.tiers.filter((_, i) => i !== ti) })} /></td>}
            </tr>
          ))}
          {!editing && (
            <tr style={{ boxShadow: 'inset 0 1px 0 var(--stroke-soft-200)' }}>
              <td style={{ ...cell, color: 'var(--text-sub-600)' }}>{restLabel(c)}</td><td style={{ ...cell, color: 'var(--text-sub-600)' }}>{formatPct(0, 2)}</td>
            </tr>
          )}
        </tbody>
      </table>
      {editing && (
        <>
          <Button variant="ghost" tone="primary" size="xs" leftIcon={<Icon name="AddLine" />} style={{ alignSelf: 'flex-start' }}
            onClick={() => setComp(ci, { tiers: [...c.tiers, { [key]: '', rate: '' }] })}>Tambah tier</Button>
          <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>
            {key === 'above' ? 'Urutkan dari batas tertinggi. Pencapaian di bawah batas terendah mendapat 0%.' : 'Urutkan dari batas terendah. MFP di atas batas tertinggi mendapat 0%.'}
          </span>
        </>
      )}
    </div>
  );
}
