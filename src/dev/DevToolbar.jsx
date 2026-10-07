import { useEffect, useState } from 'react';
import { navigate } from '../lib/router.js';
import { homeFor } from '../lib/nav.js';
import { demoSession, getPartner, onDataChange, simulateResubmit } from '../api/mockApi.js';
import { useToast } from '../components/Toaster.jsx';
import { SCENARIO_LABELS, SCENARIO_OPTIONS, setScenario, useScenario } from './scenario.js';

const SESSIONS = [['', 'Keluar'], ['rina.saraswati', 'Admin'], ['hasan.basri', 'APL Makassar'], ['lestari.wulandari', 'APL Bandung+Jakarta'], ['hendra.wijaya', 'Super Admin'], ['andi.pratama', 'TL (ditolak)']];

const pill = (active) => ({
  border: 0, cursor: 'pointer', padding: 'var(--space-6) var(--space-12)', borderRadius: 'var(--rounded-8)', font: 'var(--label-xs)',
  background: active ? 'var(--bg-white-0)' : 'transparent', color: active ? 'var(--text-strong-950)' : 'var(--text-soft-400)',
});
const select = { font: 'var(--label-xs)', borderRadius: 'var(--rounded-6)', border: 0, padding: 'var(--space-4)', background: 'var(--bg-surface-800)', color: 'var(--text-white-0)' };

/** Toolbar prototipe (hanya mode demo): ganti sesi, atur skenario mock, simulasi kirim ulang revisi dari mobile (US-P02). */
export function DevToolbar({ path, session, setSession }) {
  const sc = useScenario();
  const toast = useToast();
  const [open, setOpen] = useState(true);
  const [revision, setRevision] = useState(null);
  const detailId = path.startsWith('/partner-pipeline/') ? decodeURIComponent(path.split('/')[2]) : null;

  useEffect(() => {
    if (!detailId) return undefined;
    const check = () => getPartner(detailId).then((p) => setRevision(p.status === 'REVISION_REQUIRED' ? p : null), () => setRevision(null));
    check();
    const t = setInterval(check, 1500);
    const off = onDataChange(check);
    return () => { clearInterval(t); off(); };
  }, [detailId]);

  function switchSession(username) {
    if (!username) { setSession(null); navigate('/login'); return; }
    const s = demoSession(username);
    setSession(s);
    navigate(s.webAccess ? homeFor(s) : '/denied');
  }
  async function resubmit() {
    await simulateResubmit(revision.id);
    toast('success', 'TL/SR mengirim ulang perbaikan. Status kembali Under Review.');
  }

  return (
    <div style={{ position: 'fixed', left: '50%', bottom: 'var(--space-16)', transform: 'translateX(-50%)', zIndex: 90, display: 'flex', alignItems: 'center', gap: 'var(--space-4)', padding: 'var(--space-4)', borderRadius: 'var(--rounded-12)', background: 'var(--bg-strong-950)', boxShadow: 'var(--shadow-modal)', maxWidth: 'calc(100vw - var(--space-32))', flexWrap: 'wrap' }}>
      <button type="button" style={pill(open)} onClick={() => setOpen((o) => !o)} aria-expanded={open}>Demo</button>
      {open && (
        <>
          <select title="Sesi" aria-label="Masuk sebagai" value={SESSIONS.find(([u]) => u && demoSession(u).userId === session?.userId)?.[0] ?? ''} style={select} onChange={(e) => switchSession(e.target.value)}>
            {SESSIONS.map(([u, label]) => <option key={u} value={u}>Sesi: {label}</option>)}
          </select>
          {Object.entries(SCENARIO_OPTIONS).map(([k, opts]) => (
            <select key={k} title={SCENARIO_LABELS[k]} aria-label={SCENARIO_LABELS[k]} value={sc[k]} style={select} onChange={(e) => setScenario({ [k]: e.target.value })}>
              {opts.map((o) => <option key={o} value={o}>{SCENARIO_LABELS[k]}: {o}</option>)}
            </select>
          ))}
          {revision && detailId === revision.id && <button type="button" style={pill(true)} onClick={resubmit}>Simulasikan kirim ulang TL/SR</button>}
        </>
      )}
    </div>
  );
}
