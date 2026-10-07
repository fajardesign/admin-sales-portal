import { SectionCard } from '../../../components/KeyValueGrid.jsx';
import { Timeline } from '../../../components/Timeline.jsx';
import { actorLabel } from '../../../api/mockApi.js';
import { PARTNER_STATUS } from '../../../lib/constants.js';
import { formatDateTime } from '../../../lib/format.js';

/** Tab Riwayat Status: setiap perubahan status + log PKS (dari → ke, aktor, waktu, alasan), terbaru di atas. */
export function HistoryTab({ partner: p }) {
  const items = [...p.history].reverse().map((h, i) => ({
    key: i,
    icon: h.to ? 'ArrowRightLine' : 'FileTextLine',
    title: h.to ? (h.from ? `${PARTNER_STATUS[h.from].label} → ${PARTNER_STATUS[h.to].label}` : `Pengajuan baru · ${PARTNER_STATUS[h.to].label}`) : 'Catatan',
    meta: `${actorLabel(h.by)} · ${formatDateTime(h.at)}`,
    body: h.reason,
  }));
  return <SectionCard title="Riwayat Status"><Timeline items={items} /></SectionCard>;
}
