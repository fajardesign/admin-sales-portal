import { useEffect, useState } from 'react';
import { Alert, Button, Checkbox, CheckboxLabel, LinkButton, Select, TabMenuHorizontal, TextArea, TextInput } from '@ds/index.js';
import { ActionModal } from '../../components/ActionModal.jsx';
import { AdminShell } from '../../components/AdminShell.jsx';
import { DataTable } from '../../components/DataTable.jsx';
import { ListCard } from '../../components/ListCard.jsx';
import { SearchField } from '../../components/FilterBar.jsx';
import { StatCard, StatGrid } from '../../components/StatCard.jsx';
import { useToast } from '../../components/Toaster.jsx';
import { MonthSelect, PaymentBadge } from '../../components/scope3/S3Common.jsx';
import { ApiError } from '../../api/mockApi.js';
import { PAYMENT_STATUS, markPaid, partnerRows, payoutDate, s3Today, salesRows, setCorrection } from '../../api/scope3.js';
import { useScenario } from '../../dev/scenario.js';
import { nowrap } from '../../lib/cells.jsx';
import { areaName } from '../../lib/constants.js';
import { formatNumber, formatRp, formatYmd, monthLabel } from '../../lib/format.js';
import { navigate, withQuery } from '../../lib/router.js';
import { defaultMonth, signedRp } from '../../lib/s3.js';

const STATUS_OPTS = [{ value: '', label: 'Semua status' }, ...Object.entries(PAYMENT_STATUS).map(([value, label]) => ({ value, label }))];
const ORDER = { MENUNGGU: 0, TIDAK_ADA: 1, DIBAYAR: 2 };
const STALE_MSG = 'Sebagian data sudah berubah. Muat ulang lalu coba lagi.';
const muted = { font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' };

/**
 * Pembayaran Insentif (PRD Scope 3 §3.7 FR-PY-001–004, SCR-3-09): Admin mencatat pembayaran yang sudah dilakukan untuk bulan
 * Final, tab Sales (take home pay) dan Partner (insentif partner). Isi koreksi per baris, tandai dibayar banyak baris sekaligus
 * (semua atau tidak sama sekali). Dibayar final, tanpa aksi. Super Admin hanya melihat.
 */
export function IncentivePayment(props) {
  const { tableState, s3Today: today } = useScenario();
  return <IncentivePaymentView key={`${tableState}|${today}`} {...props} />;
}

function IncentivePaymentView({ user, onLogout, query }) {
  const toast = useToast();
  const q = Object.fromEntries(query.entries());
  const tab = q.tab === 'partner' ? 'partner' : 'sales';
  const kind = tab === 'sales' ? 'SALES' : 'PARTNER';
  const ym = defaultMonth(q.m, true);
  const canEdit = user.role === 'REVIEWER';
  const [data, setData] = useState(null);
  const [view, setView] = useState('loading');
  const [picked, setPicked] = useState(() => new Set());
  const [correct, setCorrect] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const set = (patch) => navigate(withQuery('/pembayaran-insentif', { ...q, ...patch }));
  const load = (retry) => {
    if (!ym) { setView('none'); return; }
    setView('loading'); setPicked(new Set());
    (tab === 'sales' ? salesRows(ym, {}, { retry }) : partnerRows(ym, {}, { retry }))
      .then((r) => { setData(r); setView(r.rows.length ? 'data' : 'empty'); }, () => setView('error'));
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(false); }, [tab, ym]);

  const idOf = (r) => (tab === 'sales' ? r.userId : r.partnerId);
  const finalOf = (r) => (tab === 'sales' ? r.takeHomePay : r.incentive);
  const term = (q.q ?? '').trim().toLowerCase();
  const all = data?.rows ?? [];
  const rows = all.filter((r) => (!q.status || r.payment.status === q.status) && (!term || r.name.toLowerCase().includes(term)))
    .sort((a, b) => ORDER[a.payment.status] - ORDER[b.payment.status] || a.name.localeCompare(b.name));
  const waiting = all.filter((r) => r.payment.status === 'MENUNGGU');
  const visibleWaiting = rows.filter((r) => r.payment.status === 'MENUNGGU');
  const chosen = all.filter((r) => picked.has(idOf(r)));
  const chosenTotal = chosen.reduce((a, r) => a + r.payment.amountToPay, 0);
  const paid = all.filter((r) => r.payment.status === 'DIBAYAR');
  const toggle = (id) => setPicked((c) => { const n = new Set(c); if (n.has(id)) n.delete(id); else n.add(id); return n; });
  const allPicked = visibleWaiting.length > 0 && visibleWaiting.every((r) => picked.has(idOf(r)));
  const stop = (node) => <span role="presentation" onClick={(e) => e.stopPropagation()}>{node}</span>;

  const columns = [
    ...(canEdit ? [{ key: 'pick', header: '', render: (r) => (r.payment.status === 'MENUNGGU'
      ? { misc: true, children: stop(<label style={{ display: 'flex' }} aria-label={`Pilih ${r.name}`}><Checkbox checked={picked.has(idOf(r))} onChange={() => toggle(idOf(r))} /></label>) } : '') }] : []),
    { key: 'name', header: tab === 'sales' ? 'Nama' : 'Partner', render: (r) => ({ priority: 'leading', title: nowrap(r.name),
      description: tab === 'sales' ? `${r.role === 'TL' ? `TL ${r.tlLevel === 'SENIOR' ? 'Senior' : 'Junior'}` : r.role} · ${areaName(r.areaId)}` : `${areaName(r.areaId)} · ${r.storeCount} toko` }) },
    { key: 'final', header: 'Jumlah final', align: 'right', render: (r) => ({ priority: 'regular', title: nowrap(formatRp(finalOf(r))),
      description: tab === 'sales' ? `Gaji pokok ${formatRp(r.basicSalary)} · insentif ${formatRp(r.incentive)}` : undefined }) },
    { key: 'corr', header: 'Koreksi', align: 'right', render: (r) => (r.payment.correction ? { priority: 'regular', title: nowrap(signedRp(r.payment.correction)), description: r.payment.note || undefined } : '-') },
    { key: 'pay', header: 'Jumlah dibayar', align: 'right', render: (r) => (r.payment.status === 'DIBAYAR'
      ? { priority: 'regular', title: nowrap(formatRp(r.payment.paidAmount)), description: formatYmd(r.payment.paidAt) }
      : { priority: 'regular', title: nowrap(formatRp(r.payment.amountToPay)), description: r.payment.status === 'MENUNGGU' ? `Jadwal ${formatYmd(r.payment.scheduledAt)}` : undefined }) },
    { key: 'status', header: 'Status', render: (r) => ({ misc: true, children: <PaymentBadge payment={r.payment} /> }) },
    ...(canEdit ? [{ key: 'act', header: 'Aksi', render: (r) => (r.payment.status === 'DIBAYAR' ? '' : { misc: true, children: stop(<Button size="2xs" variant="stroke" tone="neutral" onClick={() => setCorrect(r)}>Isi koreksi</Button>) }) }] : []),
  ];

  return (
    <AdminShell active="/pembayaran-insentif" icon="Wallet3Line" title="Pembayaran Insentif" description="Catat pembayaran take home pay sales dan insentif partner untuk bulan yang sudah final." user={user} onLogout={onLogout}>
      <TabMenuHorizontal value={tab} onChange={(v) => set({ tab: v === 'sales' ? '' : v, status: '' })} items={[{ value: 'sales', label: 'Sales' }, { value: 'partner', label: 'Partner' }]} />
      {!canEdit && <Alert status="information" size="sm" title="Hanya Admin yang dapat mencatat pembayaran. Super Admin melihat saja." />}
      {view === 'none' ? (
        <ListCard view="empty" emptyMessage="Belum ada bulan yang final." />
      ) : (
        <>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--space-12)', flexWrap: 'wrap' }}>
            <MonthSelect value={ym} onChange={(v) => set({ m: v })} finalOnly />
            <div style={{ width: 220 }}><Select size="sm" value={q.status ?? ''} placeholder="Semua status" onChange={(v) => set({ status: v })} options={STATUS_OPTS} /></div>
            <span style={{ ...muted, paddingBottom: 'var(--space-8)' }}>Jadwal bayar {formatYmd(payoutDate(ym, kind))}</span>
          </div>
          <SearchField placeholder={tab === 'sales' ? 'Cari nama' : 'Cari partner'} value={q.q ?? ''} onChange={(v) => set({ q: v })} />
          {view === 'data' && (
            <StatGrid min={220}>
              <StatCard icon="FileList2Line" color="blue" label="Jumlah final" value={formatRp(all.reduce((a, r) => a + finalOf(r), 0))} hint={`${formatNumber(all.length)} baris · ${monthLabel(ym, true)}`} />
              <StatCard icon="CheckLine" color="green" label="Sudah dibayar" value={formatRp(paid.reduce((a, r) => a + r.payment.paidAmount, 0))} hint={`${formatNumber(paid.length)} baris`} />
              <StatCard icon="EditLine" color="purple" label="Total koreksi" value={signedRp(all.reduce((a, r) => a + r.payment.correction, 0))} />
              <StatCard icon="TimeLine" color="orange" label="Menunggu pembayaran" value={formatRp(waiting.reduce((a, r) => a + r.payment.amountToPay, 0))} hint={`${formatNumber(waiting.length)} baris`} />
            </StatGrid>
          )}
          {view === 'data' && waiting.length === 0 && <Alert status="success" size="sm" title="Semua pembayaran bulan ini sudah dicatat." />}
          {canEdit && view === 'data' && visibleWaiting.length > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)', flexWrap: 'wrap', padding: 'var(--space-10) var(--space-16)', borderRadius: 'var(--rounded-12)', background: 'var(--bg-weak-50)' }}>
              <CheckboxLabel label="Pilih semua yang menunggu" checked={allPicked}
                onChange={(v) => setPicked(v ? new Set(visibleWaiting.map(idOf)) : new Set())} />
              <span style={{ flex: 1 }} />
              {picked.size > 0 && (
                <>
                  <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>{picked.size} dipilih · {formatRp(chosenTotal)}</span>
                  <LinkButton size="sm" onClick={() => setPicked(new Set())}>Batalkan pilihan</LinkButton>
                  <Button size="sm" onClick={() => setConfirm(true)}>{`Tandai dibayar (${picked.size})`}</Button>
                </>
              )}
            </div>
          )}
          <ListCard view={view} onRetry={() => load(true)} emptyMessage="Belum ada baris final pada bulan ini.">
            {view === 'data' && rows.length === 0 && <span style={{ display: 'block', padding: 'var(--space-16)', font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>Tidak ada baris yang sesuai dengan filter.</span>}
            {(view === 'loading' || (view === 'data' && rows.length > 0)) && <DataTable loading={view === 'loading'} rows={rows} rowKey={idOf} columns={columns} minWidth={980} />}
          </ListCard>
          <span style={muted}>Status Dibayar adalah catatan pembayaran yang sudah dilakukan dan tidak bisa diubah. Pertanyaan atas angka final diajukan di luar portal; koreksinya dibayar di bulan berikutnya.</span>
        </>
      )}
      {correct && (
        <CorrectionModal row={correct} kind={kind} ym={ym} finalAmount={finalOf(correct)} user={user} onClose={() => setCorrect(null)}
          onSaved={() => { toast('success', `Koreksi ${correct.name} disimpan.`); setCorrect(null); load(true); }}
          onStale={() => { toast('error', STALE_MSG); setCorrect(null); load(true); }} />
      )}
      {confirm && (
        <MarkPaidModal count={chosen.length} total={chosenTotal} user={user} onClose={() => setConfirm(false)}
          onConfirm={async (date) => {
            try {
              const r = await markPaid(ym, chosen.map((x) => ({ kind, id: idOf(x) })), date, user);
              toast('success', `${r.count} pembayaran ditandai Dibayar.`);
            } catch (e) {
              toast('error', e instanceof ApiError && e.code === 'STALE' ? STALE_MSG : 'Gagal menyimpan pembayaran. Coba lagi.');
            }
            setConfirm(false); load(true);
          }} />
      )}
    </AdminShell>
  );
}

/** "Isi koreksi" (FR-PY-002): koreksi + atau −, catatan opsional; jumlah dibayar = final + koreksi, tidak boleh negatif. */
function CorrectionModal({ row, kind, ym, finalAmount, user, onClose, onSaved, onStale }) {
  const [value, setValue] = useState(row.payment.correction ? String(row.payment.correction) : '0');
  const [note, setNote] = useState(row.payment.note ?? '');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState(null);
  const n = /^[+-]?\d+$/.test(value.replace(/\./g, '').trim()) ? Number(value.replace(/\./g, '').trim()) : NaN;
  const invalid = Number.isNaN(n) ? 'Masukkan angka, contoh 150000 atau -50000' : finalAmount + n < 0 ? 'Jumlah dibayar tidak boleh negatif' : null;
  async function save() {
    if (invalid) { setErr(invalid); return; }
    setBusy(true);
    try {
      await setCorrection(kind, kind === 'SALES' ? row.userId : row.partnerId, ym, n, note, user);
      onSaved();
    } catch (e) {
      setBusy(false);
      if (e instanceof ApiError && e.code === 'STALE') onStale(); else setErr('Gagal menyimpan koreksi. Coba lagi.');
    }
  }
  return (
    <ActionModal open onClose={onClose} title="Isi koreksi" description={`${row.name} · ${monthLabel(ym, true)}`} icon="EditLine" busy={busy} onConfirm={save} confirmLabel="Simpan koreksi">
      <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>
        Jumlah final {formatRp(finalAmount)}{kind === 'SALES' ? ` (gaji pokok ${formatRp(row.basicSalary)} + insentif ${formatRp(row.incentive)})` : ''}
      </span>
      <TextInput label="Koreksi (Rp)" required value={value} onChange={(e) => { setValue(e.target.value); setErr(null); }} placeholder="0"
        hint={err ? undefined : 'Pakai tanda minus untuk mengurangi, contoh -50000'} error={err ?? undefined} />
      <TextArea label="Catatan" sublabel="(Opsional)" maxLength={255} rows={2} value={note} onChange={setNote} placeholder="Contoh: Koreksi Agustus 2026" />
      <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>Jumlah dibayar: {Number.isNaN(n) ? '-' : formatRp(Math.max(0, finalAmount + n))}</span>
    </ActionModal>
  );
}

/** Konfirmasi "Tandai dibayar" (FR-PY-003): jumlah baris, total, tanggal bayar wajib, peringatan final. */
function MarkPaidModal({ count, total, onClose, onConfirm }) {
  const [date, setDate] = useState(s3Today());
  const [busy, setBusy] = useState(false);
  return (
    <ActionModal open onClose={onClose} title={`Tandai ${count} pembayaran sebagai Dibayar?`} icon="CheckLine" busy={busy} confirmDisabled={!date}
      onConfirm={async () => { setBusy(true); await onConfirm(date); }} confirmLabel="Tandai dibayar">
      <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-strong-950)' }}>{count} baris · total {formatRp(total)}</span>
      <TextInput label="Tanggal bayar" required type="date" value={date} onChange={(e) => setDate(e.target.value)} error={date ? undefined : 'Tanggal bayar wajib diisi'} />
      <Alert status="warning" size="sm" title="Pastikan konfirmasi pembayaran final sudah dikirim ke vendor. Status Dibayar tidak bisa diubah." />
    </ActionModal>
  );
}
