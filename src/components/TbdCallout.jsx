import { Alert } from '@ds/index.js';

/** Callout kuning "[TBD: …]" untuk hal yang belum ditetapkan PRD (PRD v3 "Do not invent"); dicatat juga di Open decisions. */
export const TbdCallout = ({ children }) => <Alert status="warning" size="sm" title={`[TBD: ${children}]`} />;
