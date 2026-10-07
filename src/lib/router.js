import { useEffect, useState } from 'react';
import { preset } from '../dev/presets.js';

/** Hash router minimal: "#/partner-pipeline?status=active" → { path: '/partner-pipeline', query: URLSearchParams }. */
function parse() {
  // Hash non-rute (mis. #figmacapture=… saat capture ke Figma) → pakai rute preset.
  const hash = window.location.hash.slice(1);
  const [path, qs] = (hash.startsWith('/') ? hash : preset?.route || '/login').split('?');
  return { path, query: new URLSearchParams(qs) };
}

export function useHashRoute() {
  const [route, setRoute] = useState(parse);
  useEffect(() => {
    const on = () => setRoute(parse());
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return route;
}

export const navigate = (path) => { window.location.hash = path; };

/** Bangun query string dari objek; nilai kosong dibuang. */
export function withQuery(path, params) {
  const qs = new URLSearchParams(Object.entries(params).filter(([, v]) => v !== undefined && v !== null && v !== '')).toString();
  return qs ? `${path}?${qs}` : path;
}
