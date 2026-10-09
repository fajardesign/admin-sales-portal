import { useEffect, useRef } from 'react';

/** Batas sesi web (PRD Scope 1 §Login): idle 30 menit, maksimum 12 jam sejak login. */
export const IDLE_MS = 30 * 60000;
export const MAX_SESSION_MS = 12 * 3600e3;
const EVENTS = ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart'];

/**
 * Panggil onExpire bila tidak ada aktivitas selama IDLE_MS atau sesi lebih lama dari MAX_SESSION_MS.
 * startedAt = waktu login (ms). Tidak aktif bila session kosong.
 */
export function useSessionTimeout(active, startedAt, onExpire) {
  const last = useRef(0);
  const cb = useRef(onExpire);
  useEffect(() => { cb.current = onExpire; });
  useEffect(() => {
    if (!active) return undefined;
    last.current = Date.now();
    const touch = () => { last.current = Date.now(); };
    EVENTS.forEach((e) => window.addEventListener(e, touch, { passive: true }));
    const timer = setInterval(() => {
      const t = Date.now();
      if (t - last.current >= IDLE_MS || (startedAt && t - startedAt >= MAX_SESSION_MS)) cb.current();
    }, 30000);
    return () => { clearInterval(timer); EVENTS.forEach((e) => window.removeEventListener(e, touch)); };
  }, [active, startedAt]);
}
