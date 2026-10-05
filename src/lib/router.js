import { useEffect, useState } from 'react';
import { preset } from '../dev/presets.js';

/** Hash router minimal: "#/users?x=1" → { path: '/users', query: URLSearchParams }. */
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
