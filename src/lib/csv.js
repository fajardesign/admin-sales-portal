/**
 * Ekspor laporan sebagai CSV yang dibuka langsung oleh Excel (BOM UTF-8, pemisah titik koma agar cocok dengan
 * pengaturan regional Indonesia). Prototipe tidak memakai pustaka xlsx.
 */
const cell = (v) => {
  const s = v == null ? '' : String(v);
  return /[";\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};
export const toCsv = (headers, rows) => [headers, ...rows].map((r) => r.map(cell).join(';')).join('\r\n');
export function downloadCsv(filename, headers, rows) {
  const blob = new Blob([`﻿${toCsv(headers, rows)}`], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
