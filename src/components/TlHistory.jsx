import { useEffect, useState } from 'react';
import { Alert } from '@ds/index.js';
import { loadStoreTlHistory } from '../api/mockApi.js';
import { formatDateTime } from '../lib/format.js';
import { SectionCard } from './KeyValueGrid.jsx';

/** Riwayat TL satu toko (SCR-TM-04): dimuat lewat API dengan state memuat, galat + "Coba lagi", dan kosong. Dipakai Admin dan APL. */
export function TlHistory({ storeId }) {
  const [history, setHistory] = useState(null);
  const [err, setErr] = useState(false);
  const load = (retry) => { setErr(false); setHistory(null); loadStoreTlHistory(storeId, { retry }).then(setHistory, () => setErr(true)); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(false); }, [storeId]);
  const muted = { font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' };
  return (
    <SectionCard title="Riwayat TL">
      {err ? (
        <Alert status="error" size="sm" title="Gagal memuat riwayat TL." actionLabel="Coba lagi" onAction={() => load(true)} />
      ) : history == null ? (
        <span role="status" style={muted}>Memuat riwayat TL...</span>
      ) : history.length === 0 ? <span style={muted}>Belum ada riwayat TL.</span> : history.map((e, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', padding: 'var(--space-10) var(--space-12)', borderRadius: 'var(--rounded-10)', boxShadow: 'var(--shadow-stroke)' }}>
          <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>{e.text}</span>
          <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{e.by} · {formatDateTime(e.at)} · {e.source}</span>
        </div>
      ))}
    </SectionCard>
  );
}
