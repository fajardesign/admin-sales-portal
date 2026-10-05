import { navigate } from '../lib/router.js';
import { SCENARIO_OPTIONS, setScenario, useScenario } from './scenario.js';

const SCREENS = [['/login', 'W1 Login'], ['/denied', 'Akses ditolak'], ['/users', 'W2 Manajemen Akun'], ['/activate', 'KC1 Aktivasi']];

const pill = (active) => ({
  border: 0, cursor: 'pointer', padding: 'var(--space-6) var(--space-12)', borderRadius: 'var(--rounded-8)', font: 'var(--label-xs)',
  background: active ? 'var(--bg-white-0)' : 'transparent', color: active ? 'var(--text-strong-950)' : 'var(--text-soft-400)',
});
const select = { font: 'var(--label-xs)', borderRadius: 'var(--rounded-6)', border: 0, padding: 'var(--space-4)', background: 'var(--bg-surface-800)', color: 'var(--text-white-0)' };

/** Toolbar prototipe (hanya mode demo: dev server / build Pages): pindah layar + atur skenario mock. */
export function DevToolbar({ path }) {
  const sc = useScenario();
  return (
    <div style={{ position: 'fixed', left: '50%', bottom: 20, transform: 'translateX(-50%)', zIndex: 90, display: 'flex', alignItems: 'center', gap: 'var(--space-4)', padding: 'var(--space-4)', borderRadius: 'var(--rounded-12)', background: 'var(--bg-strong-950)', boxShadow: 'var(--shadow-modal)' }}>
      {SCREENS.map(([p, label]) => <button key={p} type="button" style={pill(path === p)} onClick={() => navigate(p)}>{label}</button>)}
      {Object.entries(SCENARIO_OPTIONS).map(([k, opts]) => (
        <select key={k} title={k} value={sc[k]} style={select} onChange={(e) => setScenario({ [k]: e.target.value })}>
          {opts.map((o) => <option key={o} value={o}>{k}: {o}</option>)}
        </select>
      ))}
      <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', font: 'var(--label-xs)', color: 'var(--text-soft-400)', padding: '0 var(--space-8)' }}>
        <input type="checkbox" checked={sc.lastNameOptional} onChange={(e) => setScenario({ lastNameOptional: e.target.checked })} />
        Nama belakang opsional
      </label>
    </div>
  );
}
