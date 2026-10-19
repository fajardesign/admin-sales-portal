// Penyesuaian pasca handover (2026-10-19): batalkan permintaan tambah toko, ubah lokasi toko, cek stale, Riwayat TL async.
// File terpisah karena mengubah data contoh.
import { beforeEach, describe, expect, it } from 'vitest';
import { DEFAULT_SCENARIO, setScenario } from '../dev/scenario.js';
import { partners } from '../api/db.js';
import { activeStores, cancelStoreRequest, changeStatus, loadStoreTlHistory, releaseTl, setStoreReferral, updateStoreLocation } from '../api/mockApi.js';

const admin = { userId: 1, name: 'Rina Saraswati', role: 'REVIEWER' };
const hasan = { userId: 3, name: 'Hasan Basri', role: 'APL' };
const find = (id) => partners.find((p) => p.id === id);
const png = { name: 'qr.png', size: 2048, type: 'image/png', url: 'data:image/png;base64,AA==' };

beforeEach(() => setScenario(DEFAULT_SCENARIO));

describe('Permintaan tambah toko', () => {
  it('tab permintaan hanya berisi toko menunggu kode; cari nama partner dan TL', async () => {
    const r = await activeStores({ tab: 'permintaan' });
    expect(r.rows.length).toBe(r.summary.waiting);
    expect(r.rows.every((x) => x.status === 'WAITING_REFERRAL')).toBe(true);
    expect((await activeStores({ q: 'jaya abadi' })).rows.every((x) => x.partnerName === 'Jaya Abadi Cellular')).toBe(true);
    const withTl = (await activeStores({})).rows.find((x) => x.tl);
    expect((await activeStores({ q: withTl.tl.toLowerCase() })).rows.some((x) => x.id === withTl.id)).toBe(true);
  });

  it('hanya Admin, alasan wajib; toko menjadi Dibatalkan dan tercatat; kedua kali ditolak STALE', async () => {
    const p = find('REG2026-0139'); const s = p.stores.find((x) => x.status === 'WAITING_REFERRAL');
    await expect(cancelStoreRequest(p.id, s.id, 'Ganda', hasan)).rejects.toMatchObject({ code: 'FORBIDDEN' });
    await expect(cancelStoreRequest(p.id, s.id, ' ', admin)).rejects.toMatchObject({ code: 'REASON_REQUIRED' });
    await cancelStoreRequest(p.id, s.id, 'Ganda', admin);
    expect(s.status).toBe('CANCELLED');
    expect(p.history.at(-1).reason).toContain('dibatalkan: Ganda');
    await expect(cancelStoreRequest(p.id, s.id, 'Ganda', admin)).rejects.toMatchObject({ code: 'STALE' });
    await expect(setStoreReferral(p.id, s.id, 'BATAL01', png, '', admin)).rejects.toMatchObject({ code: 'STALE' });
    expect((await activeStores({})).rows.some((x) => x.id === s.id)).toBe(false);
  });

  it('partner Inactive: toko yang menunggu kode otomatis Dibatalkan', async () => {
    const p = find('REG2026-0137');
    p.stores.push({ ...p.stores[0], id: 'REG2026-0137-9', name: 'Toko Uji', code: null, referralCode: null, referralQr: null, status: 'WAITING_REFERRAL', assigned: [], tlId: null, tlLog: [], assignLog: [] });
    await changeStatus(p.id, 'INACTIVE', { reason: 'Berhenti kerja sama' }, admin);
    expect(p.stores.at(-1).status).toBe('CANCELLED');
    expect(p.stores[0].status).toBe('INACTIVE');
  });
});

describe('Ubah lokasi toko', () => {
  it('Admin, toko aktif, koordinat Indonesia, alasan wajib; tercatat di locationLog dan riwayat', async () => {
    const p = find('REG2026-0139'); const s = p.stores[0];
    const old = { lat: s.lat, lng: s.lng };
    await expect(updateStoreLocation(p.id, s.id, -5.1, 119.4, 'Pindah', hasan)).rejects.toMatchObject({ code: 'FORBIDDEN' });
    await expect(updateStoreLocation(p.id, s.id, 40, 119.4, 'Pindah', admin)).rejects.toMatchObject({ code: 'INVALID' });
    await expect(updateStoreLocation(p.id, s.id, -5.1, 119.4, '', admin)).rejects.toMatchObject({ code: 'REASON_REQUIRED' });
    await expect(updateStoreLocation('REG2026-0140', 'REG2026-0140-1', -5.1, 119.4, 'Pindah', admin)).rejects.toMatchObject({ code: 'CONFLICT' });
    await updateStoreLocation(p.id, s.id, '-5.123456', '119.412345', 'Toko pindah ke ruko sebelah', admin);
    expect([s.lat, s.lng]).toEqual([-5.123456, 119.412345]);
    expect(s.locationLog.at(-1)).toMatchObject({ from: old, reason: 'Toko pindah ke ruko sebelah' });
    expect(p.history.at(-1).reason).toContain('Lokasi');
  });
});

describe('Stale dan Riwayat TL', () => {
  it('kode referral sudah diubah orang lain: STALE', async () => {
    const p = find('REG2026-0139'); const s = p.stores[1];
    await expect(setStoreReferral(p.id, s.id, 'BARU0001', png, 'Ganti', admin, 'KODELAMA')).rejects.toMatchObject({ code: 'STALE' });
    await setStoreReferral(p.id, s.id, 'BARU0001', png, 'Ganti', admin, s.referralCode);
    expect(s.referralCode).toBe('BARU0001');
  });

  it('lepas TL yang sudah diganti: STALE', async () => {
    const s = find('REG2026-0139').stores[2];
    expect(s.tlId).not.toBeNull();
    await expect(releaseTl(s.id, hasan, s.tlId + 1000)).rejects.toMatchObject({ code: 'STALE' });
    await releaseTl(s.id, hasan, s.tlId);
    await expect(releaseTl(s.id, hasan)).rejects.toMatchObject({ code: 'STALE' });
  });

  it('Riwayat TL dimuat lewat API; skenario galat menolak', async () => {
    expect((await loadStoreTlHistory('REG2026-0132-2')).length).toBeGreaterThan(0);
    setScenario({ ...DEFAULT_SCENARIO, tableState: 'error' });
    await expect(loadStoreTlHistory('REG2026-0132-2')).rejects.toBeTruthy();
  });
});
