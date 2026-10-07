/** Aksi status di header detail (PRD §2D). */
export const ACTIONS = {
  VERIFIED: { label: 'Verifikasi Selesai', icon: 'ShieldCheckLine', desc: 'Semua dokumen wajib dan Data Rekening sudah Valid. Data partner akan terkunci dan PKS siap dikirim di Privy web.' },
  WAITING_PKS: { label: 'PKS Dikirim', icon: 'SendPlaneLine', desc: 'Catat setelah PKS dikirim di Privy web. Tanggal kirim dicatat otomatis saat ini.' },
  ACTIVE: { label: 'Konfirmasi PKS Ditandatangani & Aktifkan', icon: 'CheckLine', desc: 'Partner dan toko utama menjadi aktif, kode merchant dan kode toko dibuat, dan undangan login dikirim ke PIC.' },
  REJECTED: { label: 'Tolak', icon: 'CloseCircleFill', status: 'error', reason: true, final: true, desc: 'Partner tidak memenuhi persyaratan.' },
  CANCELLED: { label: 'Batalkan', icon: 'ForbidFill', status: 'warning', reason: true, final: true, desc: 'Pendaftaran tidak dilanjutkan, misalnya partner mengundurkan diri atau tidak menandatangani PKS.' },
  INACTIVE: { label: 'Nonaktifkan', icon: 'SubtractLine', status: 'error', reason: true, final: true, desc: 'Semua toko menjadi nonaktif, penugasan SA/SR dilepas, dan login PIC dinonaktifkan.' },
};
