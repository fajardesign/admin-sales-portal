/** Rp 24.000.000 */
export const rupiah = (n) => 'Rp ' + n.toLocaleString('id-ID', { maximumFractionDigits: 0 });

/** Rp 1,2 M / Rp 850 jt — ringkas untuk KPI */
export const rupiahShort = (n) =>
  n >= 1e9 ? `Rp ${(n / 1e9).toLocaleString('id-ID', { maximumFractionDigits: 1 })} M`
    : n >= 1e6 ? `Rp ${(n / 1e6).toLocaleString('id-ID', { maximumFractionDigits: 0 })} jt`
      : rupiah(n);
