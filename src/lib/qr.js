/**
 * Gambar QR tiruan untuk data contoh (prototipe): pola kotak 21x21 dari kode referral, sebagai data URI SVG.
 * Bukan QR yang bisa dipindai; QR asli diunggah Admin (PRD Scope 1 v1.1 FR-019).
 */
export function qrPlaceholder(code) {
  let h = 0;
  for (const c of code) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  const N = 21; const cells = [];
  const finder = (x, y) => [[0, 0], [N - 7, 0], [0, N - 7]].some(([fx, fy]) => x >= fx && x < fx + 7 && y >= fy && y < fy + 7);
  for (let y = 0; y < N; y += 1) {
    for (let x = 0; x < N; x += 1) {
      if (finder(x, y)) continue;
      h = (h * 1103515245 + 12345) >>> 0;
      if (h & 0x10000) cells.push(`M${x} ${y}h1v1h-1z`);
    }
  }
  const box = ([fx, fy]) => `M${fx} ${fy}h7v7h-7zM${fx + 1} ${fy + 1}v5h5v-5zM${fx + 2} ${fy + 2}h3v3h-3z`;
  const d = [[0, 0], [N - 7, 0], [0, N - 7]].map(box).join('') + cells.join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 ${N + 2} ${N + 2}" shape-rendering="crispEdges"><rect x="-1" y="-1" width="${N + 2}" height="${N + 2}" fill="white"/><path fill="black" fill-rule="evenodd" d="${d}"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
