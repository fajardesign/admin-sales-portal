import { useEffect, useState } from 'react';
import { Alert, Button, Checkbox, CheckboxLabel, Drawer, DrawerHeader, Icon, LinkButton, Select, TabMenuHorizontal, TextArea, TextInput, Tooltip } from '@ds/index.js';
import { ActionModal } from '../../components/ActionModal.jsx';
import { AdminShell } from '../../components/AdminShell.jsx';
import { DataTable } from '../../components/DataTable.jsx';
import { KeyValueGrid, SectionCard } from '../../components/KeyValueGrid.jsx';
import { ListCard, ListPager } from '../../components/ListCard.jsx';
import { SearchField } from '../../components/FilterBar.jsx';
import { StatCard, StatGrid } from '../../components/StatCard.jsx';
import { StickyBar } from '../../components/StickyBar.jsx';
import { useToast } from '../../components/Toaster.jsx';
import { MonthSelect, PaymentBadge, correctionText, paymentText } from '../../components/scope3/S3Common.jsx';
import { ApiError } from '../../api/mockApi.js';
import {
  CLOSED_MSG, PAYMENT_STATUS, exportPayments, lockDate, markPaid, markUnpaid, markable, monthStatus, partnerRows, payoutDate, s3Today,
  salesRows, setCorrection,
} from '../../api/scope3.js';
import { useScenario } from '../../dev/scenario.js';
import { nowrap } from '../../lib/cells.jsx';
import { AREAS, areaName } from '../../lib/constants.js';
import { downloadCsv } from '../../lib/csv.js';
import { formatDateTime, formatNumber, formatRp, formatYmd, monthLabel } from '../../lib/format.js';
import { navigate, withQuery } from '../../lib/router.js';
import { defaultPaymentMonth, signedRp } from '../../lib/s3.js';

const PAGE_SIZE = 20;
const AREA_OPTS = [{ value: '', label: 'Semua area' }, ...AREAS.map((a) => ({ value: String(a.id), label: a.name }))];
const FINAL_STATUSES = ['MENUNGGU', 'TIDAK_DIBAYAR', 'TIDAK_ADA', 'DIBAYAR'];
const STATUS_OPTS = [{ value: '', label: 'Semua status' }, ...FINAL_STATUSES.map((value) => ({ value, label: PAYMENT_STATUS[value] }))];
const ORDER = Object.fromEntries(['REKONSILIASI', ...FINAL_STATUSES].map((s, i) => [s, i]));
const STALE_MSG = 'Sebagian data sudah berubah. Muat ulang lalu coba lagi.';
const muted = { font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' };
const LOG_LABEL = { CORRECTION: 'Koreksi', MARK_PAID: 'Ditandai Dibayar', MARK_UNPAID: 'Ditandai Tidak dibayar' };

/**
 * Pembayaran Insentif (PRD Scope 3 §3.7 FR-PY-001–007, SCR-3-09, round 10): proses bayar bulanan untuk tab Sales (take home pay,
 * dibayar vendor) dan Partner (insentif partner, dibayar Finance). Bulan Menunggu rekonsiliasi: Isi koreksi dan Unduh draf. Mulai
 * cut-off: file final, lalu Admin menandai Dibayar (tanggal bayar) atau Tidak dibayar (keterangan) per batch. Filter area, status,
 * cari; Pilih semua sesuai filter lintas halaman. Super Admin melihat dan mengunduh saja.
 */
export function IncentivePayment(props) {
  const { tableState, s3Today: today } = useScenario();
  return <IncentivePaymentView key={`${tableState}|${today}`} {...props} />;
}

/** Langkah proses bayar (FR-PY-001): Rekonsiliasi → Tutup buku → Pencatatan. */
function stepOf(ym, kind) {
  const pay = formatYmd(payoutDate(ym, kind));
  if (monthStatus(ym, kind) === 'REKONSILIASI') return { n: 0, text: `Rekonsiliasi — cut-off ${formatYmd(lockDate(ym, kind))} · bayar ${pay}` };
  if (s3Today() < payoutDate(ym, kind)) return { n: 1, text: `Tutup buku — file final siap · bayar ${pay}` };
  return { n: 2, text: 'Pencatatan — tandai hasil pembayaran' };
}

function IncentivePaymentView({ user, onLogout, query }) {
  const toast = useToast();
  const q = Object.fromEntries(query.entries());
  const tab = q.tab === 'partner' ? 'partner' : 'sales';
  const kind = tab === 'sales' ? 'SALES' : 'PARTNER';
  const ym = defaultPaymentMonth(q.m, kind);
  const recon = ym && monthStatus(ym, kind) === 'REKONSILIASI';
  const areaId = q.area ? Number(q.area) : null;
  const canEdit = user.role === 'REVIEWER';
  const [data, setData] = useState(null);
  const [view, setView] = useState('loading');
  const [picked, setPicked] = useState(() => new Set());
  const [correct, setCorrect] = useState(null);
  const [mark, setMark] = useState(null); // 'PAID' | 'UNPAID'
  const [detail, setDetail] = useState(null);
  const [downloading, setDownloading] = useState(false);
  const set = (patch) => navigate(withQuery('/pembayaran-insentif', { ...q, page: '', ...patch }));
  const load = (retry) => {
    if (!ym) { setView('none'); return; }
    setView('loading'); setPicked(new Set());
    (tab === 'sales' ? salesRows(ym, {}, { retry }) : partnerRows(ym, {}, { retry }))
      .then((r) => { setData(r); setView(r.rows.length ? 'data' : 'empty'); }, () => setView('error'));
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(false); }, [tab, ym]);
  // Pilihan berlaku dalam filter; mengubah filter mengosongkannya (AC-054).
  useEffect(() => { setPicked(new Set()); }, [q.area, q.status, q.q]);

  const idOf = (r) => (tab === 'sales' ? r.userId : r.partnerId);
  const term = (q.q ?? '').trim().toLowerCase();
  const all = data?.rows ?? [];
  const rows = all.filter((r) => (areaId == null || r.areaId === areaId) && (recon || !q.status || r.payment.status === q.status)
    && (!term || r.name.toLowerCase().includes(term)))
    .sort((a, b) => ORDER[a.payment.status] - ORDER[b.payment.status] || a.name.localeCompare(b.name));
  const page = Math.max(1, Math.min(Number(q.page) || 1, Math.ceil(rows.length / PAGE_SIZE) || 1));
  const pageRows = rows.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const actionable = canEdit && !recon ? rows.filter((r) => markable(r.payment)) : [];
  const chosen = all.filter((r) => picked.has(idOf(r)));
  const chosenTotal = chosen.reduce((a, r) => a + r.payment.finalAmount, 0);
  const allPicked = actionable.length > 0 && actionable.every((r) => picked.has(idOf(r)));
  const count = (s) => rows.filter((r) => r.payment.status === s).length;
  const sum = (f) => rows.reduce((a, r) => a + f(r), 0);
  const toggle = (id) => setPicked((c) => { const n = new Set(c); if (n.has(id)) n.delete(id); else n.add(id); return n; });
  const stop = (node) => <span role="presentation" onClick={(e) => e.stopPropagation()}>{node}</span>;
  const step = ym ? stepOf(ym, kind) : null;
  const downloadLabel = recon ? 'Unduh draf' : tab === 'sales' ? 'Unduh take home pay final' : 'Unduh insentif partner final';

  async function download() {
    setDownloading(true);
    try {
      const f = await exportPayments(kind, ym, { areaId }, user);
      downloadCsv(f.filename, f.headers, f.rows);
      toast('success', `${f.kind === 'DRAFT' ? 'Draf' : 'File final'} diunduh: ${formatNumber(f.count)} baris · ${formatRp(f.total)}.`);
    } catch {
      toast('error', 'Gagal mengunduh file. Coba lagi.');
    }
    setDownloading(false);
  }

  const columns = [
    ...(canEdit && !recon ? [{ key: 'pick', header: '', render: (r) => (markable(r.payment)
      ? { misc: true, children: stop(<label style={{ display: 'flex' }} aria-label={`Pilih ${r.name}`}><Checkbox checked={picked.has(idOf(r))} onChange={() => toggle(idOf(r))} /></label>) } : '') }] : []),
    { key: 'name', header: tab === 'sales' ? 'Nama' : 'Partner', render: (r) => ({ priority: 'leading', title: nowrap(r.name),
      description: tab === 'sales' ? `${r.role === 'TL' ? `TL ${r.tlLevel === 'SENIOR' ? 'Senior' : 'Junior'}` : r.role} · ${areaName(r.areaId)}` : `${areaName(r.areaId)} · ${r.storeCount} toko` }) },
    { key: 'calc', header: 'Jumlah dihitung', align: 'right', render: (r) => ({ priority: 'regular', title: nowrap(formatRp(r.payment.calculated)),
      description: tab === 'sales' ? `Gaji pokok ${formatRp(r.basicSalary)} · insentif ${formatRp(r.incentive)}` : undefined }) },
    { key: 'corr', header: 'Koreksi', align: 'right', render: (r) => (r.payment.correction ? { priority: 'regular', title: nowrap(signedRp(r.payment.correction)), description: r.payment.note || undefined } : '-') },
    { key: 'final', header: 'Jumlah final', align: 'right', render: (r) => ({ priority: 'regular', title: nowrap(formatRp(r.payment.finalAmount)) }) },
    { key: 'when', header: 'Tanggal bayar / keterangan', render: (r) => {
      const p = r.payment;
      const t = p.status === 'DIBAYAR' ? formatYmd(p.paidAt) : p.status === 'TIDAK_DIBAYAR' ? p.unpaidNote
        : p.status === 'MENUNGGU' ? `Jadwal ${formatYmd(p.scheduledAt)}` : p.status === 'REKONSILIASI' ? `Final ${formatYmd(p.lockAt)}` : '-';
      return { priority: 'regular', title: t };
    } },
    { key: 'status', header: 'Status', render: (r) => ({ misc: true, children: <PaymentBadge payment={r.payment} /> }) },
    ...(canEdit && recon ? [{ key: 'act', header: 'Aksi', render: (r) => ({ misc: true, children: stop(<Button size="2xs" variant="stroke" tone="neutral" onClick={() => setCorrect(r)}>Isi koreksi</Button>) }) }] : []),
  ];

  return (
    <AdminShell active="/pembayaran-insentif" icon="Wallet3Line" title="Pembayaran Insentif" description="Rekonsiliasi, file final, dan pencatatan pembayaran take home pay sales dan insentif partner." user={user} onLogout={onLogout}>
      <StickyBar flush>
        <TabMenuHorizontal value={tab} onChange={(v) => set({ tab: v === 'sales' ? '' : v, status: '', m: '' })} items={[{ value: 'sales', label: 'Sales' }, { value: 'partner', label: 'Partner' }]} />
      </StickyBar>
      {!canEdit && <Alert status="information" size="sm" title="Hanya Admin yang dapat mencatat koreksi dan pembayaran. Super Admin melihat dan mengunduh saja." />}
      {view === 'none' ? (
        <ListCard view="empty" emptyMessage="Belum ada bulan yang menunggu rekonsiliasi atau final." />
      ) : (
        <>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--space-12)', flexWrap: 'wrap' }}>
            <MonthSelect value={ym} onChange={(v) => set({ m: v, status: '' })} kind={kind} closedOnly />
            <div style={{ width: 200 }}><Select size="sm" value={q.area ?? ''} placeholder="Semua area" onChange={(v) => set({ area: v })} options={AREA_OPTS} /></div>
            {!recon && <div style={{ width: 220 }}><Select size="sm" value={q.status ?? ''} placeholder="Semua status" onChange={(v) => set({ status: v })} options={STATUS_OPTS} /></div>}
            <SearchField placeholder={tab === 'sales' ? 'Cari nama' : 'Cari partner'} value={q.q ?? ''} onChange={(v) => set({ q: v })} width={260} />
            <span style={{ flex: 1 }} />
            <Tooltip content={downloading ? 'Menyiapkan file…' : downloadLabel} placement="left">
              <Button size="sm" variant="stroke" tone="neutral" iconOnly leftIcon={<Icon name="DownloadLine" />} aria-label={downloading ? 'Menyiapkan file…' : downloadLabel}
                disabled={view !== 'data' || downloading} onClick={download} />
            </Tooltip>
          </div>
          <StepLine step={step} />
          {view === 'data' && (
            <StatGrid min={200}>
              <StatCard icon="FileList2Line" color="blue" label="Jumlah dihitung" value={formatRp(sum((r) => r.payment.calculated))} hint={`${formatNumber(rows.length)} baris · ${monthLabel(ym, true)}`} />
              <StatCard icon="EditLine" color="purple" label="Total koreksi" value={signedRp(sum((r) => r.payment.correction))} hint={`${formatNumber(rows.filter((r) => r.payment.correction).length)} baris`} />
              <StatCard icon="Wallet3Line" color="green" label="Jumlah final" value={formatRp(sum((r) => r.payment.finalAmount))} />
              {recon
                ? <StatCard icon="TimeLine" color="orange" label="Rekonsiliasi" value={`${formatNumber(rows.length)} baris`} hint={`Final ${formatYmd(lockDate(ym, kind))}`} />
                : <StatCard icon="TimeLine" color="orange" label="Menunggu pembayaran" value={`${formatNumber(count('MENUNGGU'))} baris`}
                  hint={`${formatNumber(count('DIBAYAR'))} dibayar · ${formatNumber(count('TIDAK_DIBAYAR'))} tidak dibayar · ${formatNumber(count('TIDAK_ADA'))} tidak ada pembayaran`} />}
            </StatGrid>
          )}
          {view === 'data' && !recon && all.every((r) => r.payment.status !== 'MENUNGGU') && <Alert status="success" size="sm" title="Semua pembayaran bulan ini sudah dicatat." />}
          {actionable.length > 0 && view === 'data' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)', flexWrap: 'wrap', padding: 'var(--space-10) var(--space-16)', borderRadius: 'var(--rounded-12)', background: 'var(--bg-weak-50)' }}>
              <CheckboxLabel label={`Pilih semua sesuai filter (${actionable.length})`} checked={allPicked}
                onChange={(v) => setPicked(v ? new Set(actionable.map(idOf)) : new Set())} />
              <span style={{ flex: 1 }} />
              {picked.size > 0 && (
                <>
                  <span role="status" style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>{picked.size} dipilih · {formatRp(chosenTotal)}</span>
                  <LinkButton size="sm" onClick={() => setPicked(new Set())}>Batalkan pilihan</LinkButton>
                  <Button size="sm" variant="stroke" tone="neutral" onClick={() => setMark('UNPAID')}>{`Tandai Tidak dibayar (${picked.size})`}</Button>
                  <Button size="sm" onClick={() => setMark('PAID')}>{`Tandai Dibayar (${picked.size})`}</Button>
                </>
              )}
            </div>
          )}
          <ListCard view={view} onRetry={() => load(true)} emptyMessage="Belum ada baris pada bulan ini."
            footer={view === 'data' && rows.length > 0 && <ListPager page={page} total={rows.length} pageSize={PAGE_SIZE} noun="baris" onChange={(p) => navigate(withQuery('/pembayaran-insentif', { ...q, page: String(p) }))} />}>
            {view === 'data' && rows.length === 0 && <span style={{ display: 'block', padding: 'var(--space-16)', font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>Tidak ada baris yang sesuai dengan filter.</span>}
            {(view === 'loading' || (view === 'data' && rows.length > 0)) && <DataTable loading={view === 'loading'} rows={pageRows} rowKey={idOf} columns={columns} minWidth={1080} onRowClick={setDetail} />}
          </ListCard>
          <span style={muted}>Status Dibayar tidak bisa diubah. Pertanyaan atas angka final diajukan di luar portal; koreksi yang disepakati dimasukkan di rekonsiliasi bulan berikutnya.</span>
        </>
      )}
      {correct && (
        <CorrectionModal row={correct} kind={kind} ym={ym} user={user} onClose={() => setCorrect(null)}
          onSaved={() => { toast('success', `Koreksi ${correct.name} disimpan.`); setCorrect(null); load(true); }}
          onFail={(msg) => { toast('error', msg); setCorrect(null); load(true); }} />
      )}
      {mark === 'PAID' && (
        <MarkPaidModal count={chosen.length} total={chosenTotal} scheduled={payoutDate(ym, kind)} onClose={() => setMark(null)}
          onConfirm={(date) => markPaid(ym, chosen.map((x) => ({ kind, id: idOf(x) })), date, user)}
          onDone={(r, err) => { toast(err ? 'error' : 'success', err ?? `${r.count} pembayaran ditandai Dibayar.`); setMark(null); load(true); }} />
      )}
      {mark === 'UNPAID' && (
        <MarkUnpaidModal count={chosen.length} total={chosenTotal} onClose={() => setMark(null)}
          onConfirm={(note) => markUnpaid(ym, chosen.map((x) => ({ kind, id: idOf(x) })), note, user)}
          onDone={(r, err) => { toast(err ? 'error' : 'success', err ?? `${r.count} pembayaran ditandai Tidak dibayar.`); setMark(null); load(true); }} />
      )}
      {detail && <PaymentDrawer row={detail} kind={kind} onClose={() => setDetail(null)} />}
    </AdminShell>
  );
}

/** Garis langkah (FR-PY-001): langkah aktif tebal dengan tanggal, langkah lain redup. */
function StepLine({ step }) {
  if (!step) return null;
  const labels = ['Rekonsiliasi', 'Tutup buku', 'Pencatatan'];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)', flexWrap: 'wrap', padding: 'var(--space-10) var(--space-16)', borderRadius: 'var(--rounded-12)', background: 'var(--bg-weak-50)' }}>
      {labels.map((l, i) => (
        <span key={l} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-8)' }}>
          {i > 0 && <span aria-hidden="true" style={{ color: 'var(--text-soft-400)' }}>·</span>}
          <span aria-current={i === step.n ? 'step' : undefined} style={i === step.n ? { font: 'var(--label-sm)', color: 'var(--text-strong-950)' } : { font: 'var(--paragraph-sm)', color: 'var(--text-soft-400)' }}>
            {i === step.n ? step.text : l}
          </span>
        </span>
      ))}
    </div>
  );
}

const STALE_OR = (e, fallback) => (e instanceof ApiError && e.code === 'STALE' ? STALE_MSG : fallback);

/** "Isi koreksi" (FR-PY-002): selama rekonsiliasi; Koreksi + atau −, catatan opsional; jumlah final = dihitung + koreksi, tidak boleh negatif. */
function CorrectionModal({ row, kind, ym, user, onClose, onSaved, onFail }) {
  const calc = row.payment.calculated;
  const [value, setValue] = useState(row.payment.correction ? String(row.payment.correction) : '0');
  const [note, setNote] = useState(row.payment.note ?? '');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState(null);
  const n = /^[+-]?\d+$/.test(value.replace(/\./g, '').trim()) ? Number(value.replace(/\./g, '').trim()) : NaN;
  const invalid = Number.isNaN(n) ? 'Masukkan angka, contoh 150000 atau -50000' : calc + n < 0 ? 'Jumlah dibayar tidak boleh negatif.' : null;
  async function save() {
    if (invalid) { setErr(invalid); return; }
    setBusy(true);
    try {
      await setCorrection(kind, kind === 'SALES' ? row.userId : row.partnerId, ym, n, note, user);
      onSaved();
    } catch (e) {
      setBusy(false);
      if (e instanceof ApiError && e.code === 'CLOSED') onFail(CLOSED_MSG);
      else if (e instanceof ApiError && e.code === 'STALE') onFail(STALE_MSG);
      else setErr('Gagal menyimpan koreksi. Coba lagi.');
    }
  }
  return (
    <ActionModal open onClose={onClose} title="Isi koreksi" description={`${row.name} · ${monthLabel(ym, true)}`} icon="EditLine" busy={busy} onConfirm={save} confirmLabel="Simpan koreksi" confirmDisabled={!!invalid}>
      <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>
        Jumlah dihitung {formatRp(calc)}{kind === 'SALES' ? ` (gaji pokok ${formatRp(row.basicSalary)} + insentif ${formatRp(row.incentive)})` : ''}
      </span>
      <TextInput label="Koreksi (Rp)" required value={value} onChange={(e) => { setValue(e.target.value); setErr(null); }} placeholder="0"
        hint={err || invalid ? undefined : 'Pakai tanda minus untuk mengurangi, contoh -50000. Isi 0 untuk menghapus koreksi.'} error={err ?? invalid ?? undefined} />
      <TextArea label="Catatan" sublabel="(Opsional)" maxLength={255} rows={2} value={note} onChange={setNote} placeholder="Contoh: Potongan seragam hilang" />
      <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>Jumlah final: {Number.isNaN(n) ? '-' : formatRp(Math.max(0, calc + n))}</span>
      <span style={muted}>Koreksi bisa diubah sampai cut-off {formatYmd(row.payment.lockAt)} dan langsung terlihat oleh orang tersebut, TL, dan APL.</span>
    </ActionModal>
  );
}

/**
 * "Tandai Dibayar" (FR-PY-004): jumlah baris, total, tanggal bayar wajib (bawaan = tanggal bayar skema), peringatan final. Sebelum
 * tanggal bayar terjadwal, minta konfirmasi dulu (AC-055).
 */
function MarkPaidModal({ count, total, scheduled, onClose, onConfirm, onDone }) {
  const [date, setDate] = useState(scheduled);
  const [busy, setBusy] = useState(false);
  const [early, setEarly] = useState(false);
  async function confirm() {
    if (s3Today() < scheduled && !early) { setEarly(true); return; }
    setBusy(true);
    try { onDone(await onConfirm(date)); } catch (e) { onDone(null, STALE_OR(e, 'Gagal menyimpan pembayaran. Coba lagi.')); }
  }
  return (
    <ActionModal open onClose={onClose} title={`Tandai ${count} pembayaran sebagai Dibayar?`} icon="CheckLine" busy={busy} confirmDisabled={!date}
      onConfirm={confirm} confirmLabel={early ? 'Lanjutkan' : `Tandai Dibayar (${count})`}>
      <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-strong-950)' }}>{count} baris · total {formatRp(total)}</span>
      <TextInput label="Tanggal bayar" required type="date" value={date} onChange={(e) => { setDate(e.target.value); }} error={date ? undefined : 'Tanggal bayar wajib diisi'} />
      <Alert status="warning" size="sm" title="Status Dibayar tidak bisa diubah." />
      {early && <Alert status="information" size="sm" title={`Tanggal bayar terjadwal ${formatYmd(scheduled)} belum lewat. Lanjutkan?`} />}
    </ActionModal>
  );
}

/** "Tandai Tidak dibayar" (FR-PY-004): keterangan wajib (maks. 255); baris bisa ditandai Dibayar nanti. */
function MarkUnpaidModal({ count, total, onClose, onConfirm, onDone }) {
  const [note, setNote] = useState('');
  const [touched, setTouched] = useState(false);
  const [busy, setBusy] = useState(false);
  const empty = !note.trim();
  async function confirm() {
    setBusy(true);
    try { onDone(await onConfirm(note)); } catch (e) { onDone(null, STALE_OR(e, 'Gagal menyimpan pembayaran. Coba lagi.')); }
  }
  return (
    <ActionModal open onClose={onClose} title={`Tandai ${count} pembayaran sebagai Tidak dibayar?`} icon="CloseCircleFill" busy={busy} confirmDisabled={empty}
      onConfirm={confirm} confirmTone="error" confirmLabel={`Tandai Tidak dibayar (${count})`}>
      <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-strong-950)' }}>{count} baris · total {formatRp(total)}</span>
      <TextArea label="Keterangan" required maxLength={255} rows={2} value={note} onChange={(v) => { setNote(v); setTouched(true); }}
        placeholder="Contoh: Rekening tidak valid" error={touched && empty ? 'Keterangan wajib diisi untuk Tidak dibayar.' : undefined} />
      <span style={muted}>Keterangan terlihat oleh orang tersebut, TL, dan APL. Baris ini masih bisa ditandai Dibayar nanti.</span>
    </ActionModal>
  );
}

/** Rincian baris dengan riwayat koreksi dan pencatatan (SCR-3-09 "row detail with history"). */
function PaymentDrawer({ row: r, kind, onClose }) {
  const p = r.payment;
  return (
    <Drawer open width={560} onClose={onClose}
      header={<DrawerHeader size="lg" title={r.name} description={`${kind === 'SALES' ? r.role : `${r.storeCount} toko`} · ${areaName(r.areaId)} · ${monthLabel(r.ym, true)}`} icon="Wallet3Line" onClose={onClose} />}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)', padding: 'var(--space-16) var(--space-24) var(--space-24)' }}>
        <SectionCard title="Pembayaran" badge={<PaymentBadge payment={p} />}>
          <KeyValueGrid items={[
            { label: 'Jumlah dihitung', value: formatRp(p.calculated) },
            { label: 'Koreksi', value: p.correction ? correctionText(p).replace(/^Koreksi /, '') : '-' },
            { label: 'Jumlah final', value: formatRp(p.finalAmount) },
            { label: 'Status', value: paymentText(p) },
          ]} />
        </SectionCard>
        <SectionCard title="Riwayat">
          {p.log.length === 0 ? <span style={muted}>Belum ada koreksi atau pencatatan.</span> : [...p.log].reverse().map((e, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', padding: 'var(--space-8) 0', borderTop: i ? '1px solid var(--stroke-soft-200)' : 'none' }}>
              <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>
                {LOG_LABEL[e.action ?? 'CORRECTION']}
                {(e.action ?? 'CORRECTION') === 'CORRECTION' && ` ${signedRp(e.from)} → ${signedRp(e.to)}`}
                {e.action === 'MARK_PAID' && ` · ${formatYmd(e.paidAt)} · ${formatRp(e.amount)}`}
              </span>
              {e.note && <span style={muted}>{e.note}</span>}
              {e.previousNote && <span style={muted}>Sebelumnya Tidak dibayar: {e.previousNote}</span>}
              <span style={muted}>{e.by} · {formatDateTime(e.at)}</span>
            </div>
          ))}
        </SectionCard>
      </div>
    </Drawer>
  );
}
