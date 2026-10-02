// Data contoh (mock) — ganti dengan API.
export const LEADS = [
  { id: 'LD-1042', name: 'PT Sinar Jaya Abadi', pic: 'Budi Santoso', product: 'Kredit Modal Kerja', amount: 750000000, sales: 'Laura Perez', status: 'pending', stage: 'Verifikasi', date: '01 Okt 2026' },
  { id: 'LD-1041', name: 'CV Maju Bersama', pic: 'Siti Rahma', product: 'Pinjaman Usaha', amount: 250000000, sales: 'James Brown', status: 'completed', stage: 'Disetujui', date: '30 Sep 2026' },
  { id: 'LD-1040', name: 'PT Nusantara Logistik', pic: 'Andi Wijaya', product: 'Kredit Investasi', amount: 1200000000, sales: 'Wei Chen', status: 'information', stage: 'Negosiasi', date: '29 Sep 2026' },
  { id: 'LD-1039', name: 'Toko Berkah Elektronik', pic: 'Dewi Lestari', product: 'Pinjaman Usaha', amount: 85000000, sales: 'Laura Perez', status: 'failed', stage: 'Ditolak', date: '28 Sep 2026' },
  { id: 'LD-1038', name: 'PT Agro Lestari', pic: 'Rudi Hartono', product: 'Kredit Modal Kerja', amount: 500000000, sales: 'Emma Wright', status: 'completed', stage: 'Disetujui', date: '27 Sep 2026' },
  { id: 'LD-1037', name: 'CV Karya Mandiri', pic: 'Rina Kusuma', product: 'Pinjaman Usaha', amount: 150000000, sales: 'James Brown', status: 'information', stage: 'Kontak Awal', date: '26 Sep 2026' },
  { id: 'LD-1036', name: 'PT Samudra Teknik', pic: 'Hendra Gunawan', product: 'Kredit Investasi', amount: 900000000, sales: 'Wei Chen', status: 'pending', stage: 'Verifikasi', date: '25 Sep 2026' },
  { id: 'LD-1035', name: 'UD Sumber Rezeki', pic: 'Agus Salim', product: 'Pinjaman Usaha', amount: 60000000, sales: 'Emma Wright', status: 'information', stage: 'Kontak Awal', date: '24 Sep 2026' },
];

export const STATUS_LABEL = {
  completed: 'Disetujui',
  pending: 'Menunggu Verifikasi',
  information: 'Dalam Proses',
  failed: 'Ditolak',
};

export const TEAM = [
  { name: 'Laura Perez', achieved: 82 },
  { name: 'James Brown', achieved: 64 },
  { name: 'Wei Chen', achieved: 91 },
  { name: 'Emma Wright', achieved: 47 },
];
