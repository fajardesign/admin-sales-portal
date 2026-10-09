import { useEffect, useState } from 'react';
import { useSessionTimeout } from './lib/useSessionTimeout.js';
import { navigate, useHashRoute } from './lib/router.js';
import { DEMO } from './lib/env.js';
import { featureForPath, homeFor } from './lib/nav.js';
import { ToasterProvider } from './components/Toaster.jsx';
import { ForbiddenPage } from './components/ForbiddenPage.jsx';
import { Login } from './pages/Login.jsx';
import { AccessDenied } from './pages/AccessDenied.jsx';
import { Activation } from './pages/Activation.jsx';
import { Beranda } from './pages/admin/Beranda.jsx';
import { PipelineList } from './pages/partner-pipeline/PipelineList.jsx';
import { PartnerDetail } from './pages/partner-pipeline/PartnerDetail.jsx';
import { AccountManagement } from './pages/account-management/AccountManagement.jsx';
import { AplDashboard } from './pages/apl/AplDashboard.jsx';
import { AplSales } from './pages/apl/AplSales.jsx';
import { AplProductivity } from './pages/apl/AplProductivity.jsx';
import { AplPartners } from './pages/apl/AplPartners.jsx';
import { AplTeam } from './pages/apl/AplTeam.jsx';
import { AplIncentive } from './pages/apl/AplIncentive.jsx';
import { IncentiveSchemes } from './pages/super-admin/IncentiveSchemes.jsx';
import { IncentiveResults } from './pages/super-admin/IncentiveResults.jsx';
import { demoSession } from './api/mockApi.js';
import { DevToolbar } from './dev/DevToolbar.jsx';
import { preset } from './dev/presets.js';

/**
 * Rute (hash) — akses mengikuti feature access roles (src/lib/nav.js):
 *  /login, /denied, /activate?user=<id>[&mode=reset]
 *  Admin: /beranda, /partner-pipeline[/<reg>], /account-management
 *  APL: /apl, /apl/kinerja, /apl/produktivitas, /apl/partner, /apl/tim, /apl/insentif
 *  Super Admin: /skema-insentif, /hasil-perhitungan
 */
const PAGES = {
  '/beranda': Beranda, '/partner-pipeline': PipelineList, '/account-management': AccountManagement,
  '/apl': AplDashboard, '/apl/kinerja': AplSales, '/apl/produktivitas': AplProductivity, '/apl/partner': AplPartners, '/apl/tim': AplTeam, '/apl/insentif': AplIncentive,
  '/skema-insentif': IncentiveSchemes, '/hasil-perhitungan': IncentiveResults,
};

const SESSION_KEY = 'sp-portal-session';
const RETURN_KEY = 'sp-portal-return';
const store = {
  get: (k) => { try { return sessionStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { if (v == null) sessionStorage.removeItem(k); else sessionStorage.setItem(k, v); } catch { /* storage tidak tersedia */ } },
};
function loadSession() {
  if (preset?.session) return demoSession(preset.session);
  try { return JSON.parse(store.get(SESSION_KEY)) ?? null; } catch { return null; }
}

export default function App() {
  const route = useHashRoute();
  const { path, query } = route;
  const [session, setSessionState] = useState(loadSession);
  const setSession = (s) => { setSessionState(s); store.set(SESSION_KEY, s ? JSON.stringify(s) : null); };

  const [notice, setNotice] = useState(null);
  const logout = () => { setSession(null); setNotice(null); navigate('/login'); };
  // Idle 30 menit / maks. 12 jam: sesi berakhir, kembali ke login, lalu ke halaman yang sama setelah masuk lagi.
  useSessionTimeout(!!session && !preset, session?.loginAt, () => {
    store.set(RETURN_KEY, `${path}${query.toString() ? `?${query}` : ''}`);
    setSession(null);
    setNotice('Sesi Anda berakhir karena tidak ada aktivitas. Silakan masuk lagi.');
    navigate('/login');
  });
  const feature = featureForPath(path);
  // Setelah login kembali ke halaman yang tadi dibuka (bila diizinkan).
  const onLoggedIn = (s) => {
    setNotice(null);
    setSession({ ...s, loginAt: Date.now() });
    const back = store.get(RETURN_KEY);
    store.set(RETURN_KEY, null);
    if (!s.webAccess) navigate('/denied');
    else navigate(back && s.features.includes(featureForPath(back.split('?')[0])) ? back : homeFor(s));
  };

  const redirect = !session ? (feature ? '/login' : null)
    : !session.webAccess ? (path !== '/denied' && path !== '/activate' ? '/denied' : null)
      : path === '/login' || path === '/denied' || path === '/' || (!feature && path !== '/activate') ? homeFor(session) : null;
  useEffect(() => {
    if (!redirect) return;
    if (!session && feature) store.set(RETURN_KEY, `${path}${query.toString() ? `?${query}` : ''}`);
    navigate(redirect);
  }, [redirect, session, feature, path, query]);

  const props = { user: session, onLogout: logout, query, path };
  let screen;
  if (path === '/activate') screen = <Activation userId={query.get('user') ? Number(query.get('user')) : null} mode={query.get('mode') ?? 'activate'} onBackToLogin={session ? undefined : () => navigate('/login')} />;
  else if (!session || redirect) screen = <Login onLoggedIn={onLoggedIn} notice={notice} />;
  else if (path === '/denied') screen = <AccessDenied session={session} onLogout={logout} />;
  else if (!session.features.includes(feature)) screen = <ForbiddenPage {...props} />;
  else if (path.startsWith('/partner-pipeline/')) screen = <PartnerDetail key={path} {...props} id={decodeURIComponent(path.split('/')[2])} />;
  else { const Page = PAGES[path]; screen = <Page {...props} />; }

  return (
    <ToasterProvider initialToast={preset?.toast}>
      {screen}
      {DEMO && !preset && <DevToolbar path={path} session={session} setSession={setSession} />}
    </ToasterProvider>
  );
}
