import { Badge, StatusBadge } from '@ds/index.js';
import { ACCOUNT_STATUS, PARTNER_STATUS, VERIFICATION } from '../lib/constants.js';

/** Chip status partner (PRD §2: label status sesuai PRD). */
export const PartnerStatusBadge = ({ status }) => (
  <Badge color={PARTNER_STATUS[status].color} type="dot" size="md">{PARTNER_STATUS[status].label}</Badge>
);

/** Status akun Keycloak: Pending / Expired / Active / Disabled. */
export const AccountStatusBadge = ({ status }) => (
  <StatusBadge status={ACCOUNT_STATUS[status].status} dot>{ACCOUNT_STATUS[status].label}</StatusBadge>
);

/** Status verifikasi dokumen/rekening: Belum Dicek / Valid / Perlu Revisi. */
export const VerificationBadge = ({ value }) => (
  <StatusBadge status={VERIFICATION[value].status}>{VERIFICATION[value].label}</StatusBadge>
);
