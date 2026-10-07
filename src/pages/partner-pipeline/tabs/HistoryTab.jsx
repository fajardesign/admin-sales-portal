import { SectionCard } from '../../../components/KeyValueGrid.jsx';
import { Timeline } from '../../../components/Timeline.jsx';
import { actorLabel } from '../../../api/mockApi.js';
import { PARTNER_STATUS } from '../../../lib/constants.js';
import { formatDateTime } from '../../../lib/format.js';

/** Tab Riwayat Status: perubahan status + log PKS, dan log Ubah Data Partner (field, lama → baru, Admin, waktu, alasan). */
export function HistoryTab({ partner: p }) {
  const items = [...p.history].reverse().map((h, i) => ({
    key: i,
    icon: h.to ? 'ArrowRightLine' : 'FileTextLine',
    title: h.to ? (h.from ? `${PARTNER_STATUS[h.from].label} → ${PARTNER_STATUS[h.to].label}` : `Pengajuan baru · ${PARTNER_STATUS[h.to].label}`) : 'Catatan',
    meta: `${actorLabel(h.by)} · ${formatDateTime(h.at)}`,
    body: h.reason,
  }));
  const changes = [...(p.changeLog ?? [])].reverse().map((c, i) => ({ key: `c${i}`, icon: 'EditLine', title: `${c.field}: ${c.old} → ${c.new}`, meta: `${c.by} · ${formatDateTime(c.at)}`, body: `Alasan: ${c.reason}` }));
  return (
    <>
      <SectionCard title="Riwayat Status"><Timeline items={items} /></SectionCard>
      {changes.length > 0 && <SectionCard title="Riwayat Perubahan Data"><Timeline items={changes} /></SectionCard>}
    </>
  );
}
