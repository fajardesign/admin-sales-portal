import { AdminShell } from '../../components/AdminShell.jsx';
import { SectionCard } from '../../components/KeyValueGrid.jsx';
import { StatCard, StatGrid } from '../../components/StatCard.jsx';
import { partnerCounts, userCounts } from '../../api/mockApi.js';
import { FINAL_STATUSES, PARTNER_STATUS, REVIEW_FLOW, statusSlug } from '../../lib/constants.js';
import { navigate } from '../../lib/router.js';

const ICON = { UNDER_REVIEW: 'SearchLine', REVISION_REQUIRED: 'EditLine', VERIFIED: 'ShieldCheckLine', WAITING_PKS: 'FileTextLine', ACTIVE: 'CheckLine', REJECTED: 'CloseLine', CANCELLED: 'ForbidFill', INACTIVE: 'SubtractLine' };
const COLOR = { blue: 'blue', orange: 'orange', teal: 'teal', purple: 'purple', green: 'green', red: 'red', gray: 'gray' };

/** W0 · Beranda Admin — jumlah partner per status dan akun yang menunggu aktivasi; tiap kartu membuka daftar terfilter. */
export function Beranda({ user, onLogout }) {
  const pc = partnerCounts();
  const uc = userCounts();
  const card = (s) => (
    <StatCard key={s} icon={ICON[s]} color={COLOR[PARTNER_STATUS[s].color]} label={PARTNER_STATUS[s].label} value={pc[s]}
      onClick={() => navigate(`/partner-pipeline?status=${statusSlug(s)}`)} />
  );
  return (
    <AdminShell active="/beranda" icon="HomeSmile2Line" title="Beranda" description="Ringkasan Partner Pipeline dan Account Management." user={user} onLogout={onLogout}>
      <SectionCard title="Partner Pipeline · Alur review">
        <StatGrid>{REVIEW_FLOW.map(card)}</StatGrid>
      </SectionCard>
      <SectionCard title="Partner Pipeline · Status akhir">
        <StatGrid>{FINAL_STATUSES.map(card)}</StatGrid>
      </SectionCard>
      <SectionCard title="Account Management">
        <StatGrid>
          <StatCard icon="TimeLine" color="orange" label="Pending" value={uc.PENDING} hint="Tautan aktivasi masih berlaku (24 jam)" onClick={() => navigate('/account-management?status=pending')} />
          <StatCard icon="ErrorWarningFill" color="red" label="Expired" value={uc.EXPIRED} hint="Perlu kirim ulang tautan aktivasi" onClick={() => navigate('/account-management?status=expired')} />
          <StatCard icon="UserLine" color="green" label="Active" value={uc.ACTIVE} onClick={() => navigate('/account-management?status=active')} />
          <StatCard icon="TeamLine" color="gray" label="Semua pengguna" value={uc.ALL} onClick={() => navigate('/account-management')} />
        </StatGrid>
      </SectionCard>
    </AdminShell>
  );
}
