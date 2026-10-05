import { useSyncExternalStore } from 'react';

/**
 * Skenario mock (hanya untuk development) — padanan "props" prototipe di claude.ai/design.
 * Dipakai mock API untuk mensimulasikan state tabel, hasil simpan, dan status tautan aktivasi.
 */
export const SCENARIO_OPTIONS = {
  tableState: ['data', 'loading', 'empty', 'error'],
  saveOutcome: ['success', 'emailFail', 'kcFail', 'dupEmail', 'dupPhone'],
  activationState: ['valid', 'expired', 'already'],
};

let state = { tableState: 'data', saveOutcome: 'success', activationState: 'valid', lastNameOptional: false };
const subs = new Set();

export const getScenario = () => state;
export function setScenario(patch) {
  state = { ...state, ...patch };
  subs.forEach((f) => f());
}
export const useScenario = () => useSyncExternalStore((f) => { subs.add(f); return () => subs.delete(f); }, getScenario);
