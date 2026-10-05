import { useState } from 'react';
import { navigate, useHashRoute } from './lib/router.js';
import { DEMO } from './lib/env.js';
import { ToasterProvider } from './components/Toaster.jsx';
import { Login } from './pages/Login.jsx';
import { AccessDenied } from './pages/AccessDenied.jsx';
import { AccountManagement } from './pages/account-management/AccountManagement.jsx';
import { Activation } from './pages/Activation.jsx';
import { DevToolbar } from './dev/DevToolbar.jsx';

// Sesi contoh untuk membuka layar langsung via DevToolbar.
const DEV_ADMIN = { loginId: 'rina.saraswati@amarbank.co.id', role: 'ADMIN', name: 'Rina Saraswati', roleLabel: 'Admin' };
const DEV_TL = { loginId: 'tl.andi@amarbank.co.id', role: 'TL' };

/**
 * Rute:
 *  #/login     W1 Login Admin
 *  #/denied    W1 Akses ditolak (role tanpa akses web)
 *  #/users     W2 Manajemen Akun (hanya ADMIN)
 *  #/activate  KC1 Aktivasi akun (tautan undangan; tanpa sesi)
 */
/** Demo: buka layar terproteksi langsung tanpa login (sesi contoh). Production: sesi apa adanya. */
function devSession(path, session) {
  if (!DEMO) return session;
  if (path === '/users' && session?.role !== 'ADMIN') return DEV_ADMIN;
  if (path === '/denied' && !session) return DEV_TL;
  return session;
}

export default function App() {
  const { path } = useHashRoute();
  const [loggedIn, setSession] = useState(null);
  const session = devSession(path, loggedIn);

  const logout = () => { setSession(null); navigate('/login'); };
  const onLoggedIn = (s) => { setSession(s); navigate(s.role === 'ADMIN' ? '/users' : '/denied'); };

  let screen;
  if (path === '/activate') screen = <Activation />;
  else if (path === '/users' && session?.role === 'ADMIN') screen = <AccountManagement user={session} onLogout={logout} />;
  else if (path === '/denied' && session) screen = <AccessDenied loginId={session.loginId} onLogout={logout} />;
  else screen = <Login onLoggedIn={onLoggedIn} />;

  return (
    <ToasterProvider>
      {screen}
      {DEMO && <DevToolbar path={path} />}
    </ToasterProvider>
  );
}
