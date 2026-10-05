import { useEffect, useState } from 'react';

/** Hash router minimal: "#/users?x=1" → { path: '/users', query: URLSearchParams }. */
function parse() {
  const [path, qs] = (window.location.hash.slice(1) || '/login').split('?');
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
