import { useSyncExternalStore } from 'react';

/**
 * Skenario mock (hanya untuk development) — dipakai mock API untuk mensimulasikan state tabel, hasil simpan,
 * pembuatan akun PIC saat aktivasi partner, dan status tautan aktivasi contoh.
 */
export const SCENARIO_OPTIONS = {
  tableState: ['data', 'loading', 'empty', 'error'],
  service: ['ok', 'outage'],
  saveOutcome: ['success', 'emailFail', 'kcFail'],
  picAccount: ['ok', 'fail'],
  activationState: ['valid', 'expired', 'already'],
  // PRD Scope 3: tanggal hari ini untuk status bulan. Cut-off September: sales 5 Okt, partner 10 Okt; bayar sales 10, partner 15.
  // 2026-10-03 = keduanya rekonsiliasi; 2026-10-07 = sales Final, partner rekonsiliasi; 2026-10-12 = sales pencatatan, partner Final.
  s3Today: ['2026-10-07', '2026-10-03', '2026-10-12'],
};
export const SCENARIO_LABELS = { tableState: 'Tabel', service: 'Layanan login', saveOutcome: 'Simpan pengguna', picAccount: 'Akun PIC', activationState: 'Tautan contoh', s3Today: 'Tanggal Scope 3' };
export const DEFAULT_SCENARIO = { tableState: 'data', service: 'ok', saveOutcome: 'success', picAccount: 'ok', activationState: 'valid', s3Today: '2026-10-07' };

let state = { ...DEFAULT_SCENARIO };
const subs = new Set();

export const getScenario = () => state;
export function setScenario(patch) {
  state = { ...state, ...patch };
  subs.forEach((f) => f());
}
export const useScenario = () => useSyncExternalStore((f) => { subs.add(f); return () => subs.delete(f); }, getScenario);
