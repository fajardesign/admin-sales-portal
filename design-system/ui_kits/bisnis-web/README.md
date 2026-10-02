# Amar Bank Bisnis — Web UI kit

Click-through recreation of the **Finance & Banking Dashboard** example screens from the Figma file, branded with the Amar Bank Bisnis lockup used by the source's Sidebar component.

Flow: Login → Beranda (dashboard widgets) → Transfer (3 steps + success modal) → Riwayat Transaksi (table + detail drawer) → Notifikasi (preferences / inbox). Other sidebar items show a "not in kit" toast.

Files: `Shell.jsx` (Sidebar + PageHeader, shared data), `Login.jsx`, `Dashboard.jsx`, `Transfer.jsx`, `Transactions.jsx` (also Notifications + TxnDrawer). All primitives come from the compiled bundle (`window.AmarBankInternalWebDS_806d63`).

Notes: charts are simple CSS/SVG stand-ins for the Figma chart art. Sample data (Arthur Taylor, Salary Deposit, $14,480.24…) is the source's own; Indonesian nav labels are copied from the source sidebar.
