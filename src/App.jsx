import { useEffect, useState } from 'react';
import { navigate, useHashRoute } from './lib/router.js';
import { DEMO } from './lib/env.js';
import { ToasterProvider } from './components/Toaster.jsx';
import { HOME_BY_ROLE } from './lib/nav.js';
import { Login } from './pages/Login.jsx';
import { AccessDenied } from './pages/AccessDenied.jsx';
import { Activation } from './pages/Activation.jsx';
import { Beranda } from './pages/admin/Beranda.jsx';
import { PipelineList } from './pages/partner-pipeline/PipelineList.jsx';
import { PartnerDetail } from './pages/partner-pipeline/PartnerDetail.jsx';
import { AccountManagement } from './pages/account-management/AccountManagement.jsx';
import { AplSummary } from './pages/apl/AplSummary.jsx';
import { AplPerformance } from './pages/apl/AplPerformance.jsx';
import { AplIncentive } from './pages/apl/AplIncentive.jsx';
import { AplStores } from './pages/apl/AplStores.jsx';
import { AplTeam } from './pages/apl/AplTeam.jsx';
import { IncentiveSchemes } from './pages/super-admin/IncentiveSchemes.jsx';
import { demoSession } from './api/mockApi.js';
import { DevToolbar } from './dev/DevToolbar.jsx';
import { preset } from './dev/presets.js';

/**
 * Rute (hash):
 *  /login                         W1 Login
 *  /denied                        W1-D Akses ditolak (TL, SR, SA, Partner)
 *  /activate?user=<id>            KC1 Aktivasi akun (tanpa sesi)
 *  /beranda                       W0 Beranda Admin
 *  /partner-pipeline[?status…]    W3a Partner Pipeline
 *  /partner-pipeline/<reg>        W3b Partner Detail
 *  /account-management[?status…]  W2a Account Management
 *  /apl, /apl/performa, /apl/insentif, /apl/partner, /apl/tim   A1–A5 APL
 *  /skema-insentif                S1 Skema Insentif (Super Admin)
 */
const ROUTE_ROLE = [
  [/^\/beranda$/, 'REVIEWER'], [/^\/partner-pipeline(\/.+)?$/, 'REVIEWER'], [/^\/account-management$/, 'REVIEWER'],
  [/^\/apl(\/.*)?$/, 'APL'], [/^\/skema-insentif$/, 'SUPER_ADMIN'],
];

const SESSION_KEY = 'sp-portal-session';
function loadSession() {
  if (preset?.session) return demoSession(preset.session);
  try { return JSON.parse(sessionStorage.getItem(SESSION_KEY)) ?? null; } catch { return null; }
}
function saveSession(s) {
  try { if (s) sessionStorage.setItem(SESSION_KEY, JSON.stringify(s)); else sessionStorage.removeItem(SESSION_KEY); } catch { /* storage tidak tersedia */ }
}

export default function App() {
  const { path, query } = useHashRoute();
  const [session, setSessionState] = useState(loadSession);
  const setSession = (s) => { setSessionState(s); saveSession(s); };

  const logout = () => { setSession(null); navigate('/login'); };
  const onLoggedIn = (s) => { setSession(s); navigate(s.webAccess ? HOME_BY_ROLE[s.role] : '/denied'); };

  const need = ROUTE_ROLE.find(([re]) => re.test(path))?.[1];
  // Sesi tanpa akses web hanya boleh di /denied; rute milik role lain → ke beranda role sendiri.
  const redirect = session && !session.webAccess && path !== '/denied' && path !== '/activate' ? '/denied'
    : session?.webAccess && path !== '/activate' && need !== session.role ? HOME_BY_ROLE[session.role]
      : null;
  useEffect(() => { if (redirect) navigate(redirect); }, [redirect]);

  const props = { user: session, onLogout: logout, query, path };
  let screen;
  if (path === '/activate') screen = <Activation userId={query.get('user') ? Number(query.get('user')) : null} onBackToLogin={session ? undefined : () => navigate('/login')} />;
  else if (!session || redirect) screen = <Login onLoggedIn={onLoggedIn} />;
  else if (path === '/denied') screen = <AccessDenied loginId={session.loginId} onLogout={logout} />;
  else if (path === '/beranda') screen = <Beranda {...props} />;
  else if (path === '/partner-pipeline') screen = <PipelineList {...props} />;
  else if (path.startsWith('/partner-pipeline/')) screen = <PartnerDetail key={path} {...props} id={decodeURIComponent(path.split('/')[2])} />;
  else if (path === '/account-management') screen = <AccountManagement {...props} />;
  else if (path === '/apl') screen = <AplSummary {...props} />;
  else if (path === '/apl/performa') screen = <AplPerformance {...props} />;
  else if (path === '/apl/insentif') screen = <AplIncentive {...props} />;
  else if (path === '/apl/partner') screen = <AplStores {...props} />;
  else if (path === '/apl/tim') screen = <AplTeam {...props} />;
  else if (path === '/skema-insentif') screen = <IncentiveSchemes {...props} />;
  else screen = <Login onLoggedIn={onLoggedIn} />;

  return (
    <ToasterProvider initialToast={preset?.toast}>
      {screen}
      {DEMO && !preset && <DevToolbar path={path} session={session} setSession={setSession} />}
    </ToasterProvider>
  );
}
