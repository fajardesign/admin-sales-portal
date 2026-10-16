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
  remapWindow: ['auto', 'open'],
};
export const SCENARIO_LABELS = { tableState: 'Tabel', service: 'Layanan login', saveOutcome: 'Simpan pengguna', picAccount: 'Akun PIC', activationState: 'Tautan contoh', remapWindow: 'Ganti TL toko (tgl 1–3)' };
export const DEFAULT_SCENARIO = { tableState: 'data', service: 'ok', saveOutcome: 'success', picAccount: 'ok', activationState: 'valid', remapWindow: 'auto' };

let state = { ...DEFAULT_SCENARIO };
const subs = new Set();

export const getScenario = () => state;
export function setScenario(patch) {
  state = { ...state, ...patch };
  subs.forEach((f) => f());
}
export const useScenario = () => useSyncExternalStore((f) => { subs.add(f); return () => subs.delete(f); }, getScenario);
