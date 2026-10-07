import { useEffect, useState } from 'react';
import { Button, SegmentedControl, Select } from '@ds/index.js';
import { AdminShell } from '../../components/AdminShell.jsx';
import { SectionCard } from '../../components/KeyValueGrid.jsx';
import { StatCard, StatGrid } from '../../components/StatCard.jsx';
import { Timeline } from '../../components/Timeline.jsx';
import { ListCard } from '../../components/ListCard.jsx';
import { PartnerStatusBadge } from '../../components/Badges.jsx';
import { adminHome, ageLabel } from '../../api/mockApi.js';
import { now } from '../../api/db.js';
import { useScenario } from '../../dev/scenario.js';
import { bar } from '../../lib/cells.jsx';
import { AREAS, FINAL_STATUSES, PARTNER_STATUS, REVIEW_FLOW, ROLES, areaName, statusSlug } from '../../lib/constants.js';
import { formatDateTime, MONTHS_LONG } from '../../lib/format.js';
import { navigate, withQuery } from '../../lib/router.js';
import { ResendModal } from '../account-management/UserActionModals.jsx';

const DAYS = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
function greeting() {
  const w = new Date(now().getTime() + 7 * 3600e3);
  const h = w.getUTCHours();
  const g = h < 11 ? 'Selamat pagi' : h < 15 ? 'Selamat siang' : h < 18 ? 'Selamat sore' : 'Selamat malam';
  return { g, date: `${DAYS[w.getUTCDay()]}, ${String(w.getUTCDate()).padStart(2, '0')} ${MONTHS_LONG[w.getUTCMonth()]} ${w.getUTCFullYear()}` };
}
const BAR_COLOR = { blue: 'var(--state-information-base)', orange: 'var(--state-warning-base)', teal: 'var(--state-verified-base)', purple: 'var(--state-feature-base)', green: 'var(--state-success-base)', red: 'var(--state-error-base)', gray: 'var(--state-faded-base)' };

/** W0 · Beranda Admin (PRD v3 §A1). Usia antrean informatif (tanpa SLA). Semua kartu membuka daftar terfilter. */
export function Beranda(props) {
  const { tableState } = useScenario();
  return <BerandaView key={tableState} {...props} />;
}

function BerandaView({ user, onLogout, query }) {
  const area = query.get('area') ?? '';
  const [d, setD] = useState(null);
  const [view, setView] = useState('loading');
  const [mode, setMode] = useState('role');
  const [resend, setResend] = useState(null);
  const [v, setV] = useState(0);
  const load = (retry) => { setView('loading'); adminHome(area, { retry }).then((r) => { setD(r); setView('data'); }, () => setView('error')); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(false); }, [area, v]);
  const { g, date } = greeting();
  const pl = (status) => navigate(withQuery('/partner-pipeline', { status: statusSlug(status), area }));
  const am = (status) => navigate(withQuery('/account-management', { status, area }));
  const ld = view === 'loading';
  const val = (x) => (ld ? '…' : x);

  return (
    <AdminShell active="/beranda" icon="HomeSmile2Line" title={`${g}, ${user.name.split(' ')[0]}`} description={date} user={user} onLogout={onLogout}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ width: 220 }}>
          <Select size="sm" value={area} placeholder="Semua area" onChange={(x) => navigate(withQuery('/beranda', { area: x }))}
            options={[{ value: '', label: 'Semua area' }, ...AREAS.map((a) => ({ value: String(a.id), label: a.name }))]} />
        </div>
      </div>
      {view === 'error' ? <ListCard view="error" onRetry={() => load(true)} /> : (
        <>
          <SectionCard title="Perlu tindakan Anda">
            <StatGrid min={240}>
              <StatCard icon="SearchLine" color="blue" label="Menunggu review" value={val(d?.underReview.count)} hint={d?.underReview.oldest ? `Terlama ${ageLabel(d.underReview.oldest)}` : 'Tidak ada antrean'} onClick={() => pl('UNDER_REVIEW')} />
              <StatCard icon="SendPlaneLine" color="teal" label="PKS perlu dikirim" value={val(d?.verified.count)} hint="Status Verified" onClick={() => pl('VERIFIED')} />
              <StatCard icon="FileTextLine" color="purple" label="Menunggu tanda tangan PKS" value={val(d?.waitingPks.count)} hint={d?.waitingPks.oldestSent ? `Terlama dikirim ${ageLabel(d.waitingPks.oldestSent)} lalu` : 'Tidak ada'} onClick={() => pl('WAITING_PKS')} />
              <StatCard icon="ErrorWarningFill" color="red" label="Tautan aktivasi kedaluwarsa" value={val(d?.expiredUsers.length)} hint="Akun Expired" onClick={() => am('expired')} />
            </StatGrid>
          </SectionCard>
          <SectionCard title="Menunggu pihak lain">
            <StatGrid min={240}>
              <StatCard icon="EditLine" color="orange" label="Revisi oleh TL/SR" value={val(d?.revision)} hint="Status Revision Required" onClick={() => pl('REVISION_REQUIRED')} />
              <StatCard icon="TimeLine" color="yellow" label="Akun belum diaktivasi" value={val(d?.pendingUsers)} hint="Tautan masih berlaku (24 jam)" onClick={() => am('pending')} />
              <StatCard icon="CheckLine" color="green" label="Partner aktif" value={val(d?.active.count)} hint={d ? `${d.active.stores} toko aktif` : undefined} onClick={() => pl('ACTIVE')} />
            </StatGrid>
          </SectionCard>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 'var(--space-16)' }}>
            <SectionCard title="Partner Pipeline">
              {ld ? bar('100%', 160, 'var(--rounded-12)') : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                  {[...REVIEW_FLOW, ...FINAL_STATUSES].map((s) => {
                    const max = Math.max(1, ...Object.values(d.counts));
                    return (
                      <button key={s} type="button" onClick={() => pl(s)} aria-label={`${PARTNER_STATUS[s].label}: ${d.counts[s]}`}
                        style={{ display: 'grid', gridTemplateColumns: '150px 1fr 32px', alignItems: 'center', gap: 'var(--space-12)', border: 0, background: 'none', padding: 'var(--space-4) 0', cursor: 'pointer', textAlign: 'left' }}>
                        <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{PARTNER_STATUS[s].label}</span>
                        <span style={{ height: 'var(--space-12)', borderRadius: 'var(--rounded-full)', background: 'var(--bg-weak-50)', overflow: 'hidden' }}>
                          <span style={{ display: 'block', height: '100%', width: `${(d.counts[s] / max) * 100}%`, background: BAR_COLOR[PARTNER_STATUS[s].color], borderRadius: 'var(--rounded-full)' }} />
                        </span>
                        <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)', textAlign: 'right' }}>{d.counts[s]}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </SectionCard>
            <SectionCard title="Antrean review terlama">
              {ld ? bar('100%', 160, 'var(--rounded-12)') : d.reviewQueue.length === 0 ? <Empty>Tidak ada antrean review.</Empty> : (
                <List items={d.reviewQueue.map((p) => ({ key: p.id, title: p.partnerName, sub: `${p.registrationNumber} · ${p.submitter?.name} (${p.submitter?.role}) · ${areaName(p.areaId)}`, right: ageLabel(p.statusUpdatedAt), onClick: () => navigate(`/partner-pipeline/${p.id}`) }))} />
              )}
            </SectionCard>
            <SectionCard title="Tindak lanjut PKS">
              {ld ? bar('100%', 120, 'var(--rounded-12)') : d.pksFollowUp.length === 0 ? <Empty>Tidak ada PKS yang perlu ditindaklanjuti.</Empty> : (
                <List items={d.pksFollowUp.map((p) => ({
                  key: p.id, title: p.partnerName, badge: <PartnerStatusBadge status={p.status} />,
                  sub: p.status === 'VERIFIED' ? 'Kirim PKS di Privy web, lalu catat' : `Dikirim ${ageLabel(p.pks.sentAt)} lalu via ${p.pks.sentVia === 'PRIVY_ID' ? 'Privy ID' : 'email undangan'}`,
                  onClick: () => navigate(`/partner-pipeline/${p.id}`),
                }))} />
              )}
            </SectionCard>
            <SectionCard title="Akun pengguna" actions={<SegmentedControl value={mode} onChange={setMode} items={[{ value: 'role', label: 'Per role' }, { value: 'area', label: 'Per area' }]} />}>
              {ld ? bar('100%', 160, 'var(--rounded-12)') : (
                <>
                  <AccountTable rows={mode === 'role' ? d.accountsByRole : d.accountsByArea} label={(k) => (mode === 'role' ? ROLES[k].label : areaName(k))} />
                  {mode === 'area' && <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>Admin tidak terikat area; APL dihitung di setiap area yang dipegangnya.</span>}
                  {d.expiredUsers.length > 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
                      <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>Perlu kirim ulang</span>
                      {d.expiredUsers.slice(0, 4).map((u) => (
                        <div key={u.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-8)' }}>
                          <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{u.fullName} · {ROLES[u.role].label}</span>
                          <Button size="2xs" variant="stroke" tone="neutral" onClick={() => setResend(u)}>Kirim Ulang</Button>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </SectionCard>
          </div>
          <SectionCard title="Aktivitas terbaru">
            {ld ? bar('100%', 200, 'var(--rounded-12)') : <Timeline items={d.events.map((e, i) => ({ key: i, title: e.text, meta: `${e.by ? `${e.by} · ` : ''}${formatDateTime(e.at)}` }))} empty="Belum ada aktivitas." />}
          </SectionCard>
        </>
      )}
      {resend && <ResendModal target={resend} user={user} onClose={() => setResend(null)} onDone={() => { setResend(null); setV((x) => x + 1); }} />}
    </AdminShell>
  );
}

const Empty = ({ children }) => <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{children}</span>;

function List({ items }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {items.map((it, i) => (
        <button key={it.key} type="button" onClick={it.onClick}
          style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)', padding: 'var(--space-10) 0', border: 0, borderTop: i ? '1px solid var(--stroke-soft-200)' : 0, background: 'none', cursor: 'pointer', textAlign: 'left' }}>
          <span style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)', font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>{it.title}{it.badge}</span>
            <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{it.sub}</span>
          </span>
          {it.right && <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)', whiteSpace: 'nowrap' }}>{it.right}</span>}
        </button>
      ))}
    </div>
  );
}

function AccountTable({ rows, label }) {
  const cols = [['PENDING', 'Pending'], ['EXPIRED', 'Expired'], ['ACTIVE', 'Active'], ['DISABLED', 'Disabled'], ['total', 'Total']];
  const cell = { padding: 'var(--space-6) var(--space-8)', font: 'var(--paragraph-sm)', color: 'var(--text-strong-950)', textAlign: 'right' };
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead><tr>
        <th style={{ ...cell, textAlign: 'left', font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)', background: 'var(--bg-weak-50)' }}>{''}</th>
        {cols.map(([k, l]) => <th key={k} style={{ ...cell, font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)', background: 'var(--bg-weak-50)' }}>{l}</th>)}
      </tr></thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.key} style={{ boxShadow: 'inset 0 -1px 0 var(--stroke-soft-200)' }}>
            <td style={{ ...cell, textAlign: 'left', color: 'var(--text-sub-600)' }}>{label(r.key)}</td>
            {cols.map(([k]) => <td key={k} style={{ ...cell, font: k === 'total' ? 'var(--label-sm)' : cell.font }}>{r[k] || '-'}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
