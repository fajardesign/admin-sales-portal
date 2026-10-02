import { useState } from 'react';
import { Button, Icon } from '@ds/index.js';
import { AppShell } from './layout/AppShell.jsx';
import { Dashboard } from './pages/Dashboard.jsx';
import { Leads } from './pages/Leads.jsx';
import { ComingSoon } from './pages/ComingSoon.jsx';
import { NAV, PAGE_META } from './data/nav.js';

const labelOf = (v) => NAV.flatMap((s) => s.items).find((it) => it.value === v)?.label ?? v;

export default function App() {
  const [page, setPage] = useState('home');
  const meta = PAGE_META[page] ?? { title: labelOf(page) };

  return (
    <AppShell page={page} onNavigate={setPage} title={meta.title} description={meta.description}
      actions={page === 'leads' && <Button leftIcon={<Icon name="AddLine" />}>Tambah Lead</Button>}>
      {page === 'home' && <Dashboard onNavigate={setPage} />}
      {page === 'leads' && <Leads />}
      {!['home', 'leads'].includes(page) && <ComingSoon title={meta.title} />}
    </AppShell>
  );
}
