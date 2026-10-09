import { useState } from 'react';
import { Alert, Button, Drawer, DrawerFooter, DrawerHeader, Icon, LinkButton, Select, TextArea, TextInput } from '@ds/index.js';
import { KeyValueGrid } from '../../components/KeyValueGrid.jsx';
import { useToast } from '../../components/Toaster.jsx';
import { ApiError, updatePartnerData } from '../../api/mockApi.js';
import { BANKS, CHANNEL, PIC_STATUS } from '../../lib/constants.js';
import { formatPhone, normalizePhone } from '../../lib/format.js';
import { navigate } from '../../lib/router.js';
import { EMAIL_RE, MSG, validateReason, validateReferralCode } from '../../lib/validation.js';

const NAME_RE = /^[A-Za-zÀ-ÿ .'-]+$/;
const len = (v, a, b) => { const t = v.trim(); return !t ? MSG.required : t.length < a ? `Minimal ${a} karakter` : t.length > b ? `Maksimal ${b} karakter` : undefined; };

/**
 * US-P09 · Ubah Data Partner (hanya Active). Alasan wajib; setiap perubahan dicatat (field, lama, baru, Admin, waktu).
 * Email PIC lewat Ubah Email di Account Management; Data Rekening terkunci setelah Active.
 */
export function EditPartnerDrawer({ partner: p, user, onClose, onDone }) {
  const toast = useToast();
  const stores = p.stores.filter((s) => s.status === 'ACTIVE');
  const init = {
    partnerName: p.partnerName, address: p.address, referralCode: p.referralCode, businessEmail: p.businessEmail, channel: p.channel, businessLocationCount: String(p.businessLocationCount),
    picName: p.pic.name, picPhone: p.pic.phone, picStatus: p.pic.status,
    ...Object.fromEntries(stores.flatMap((s) => [[`${s.id}|name`, s.name], [`${s.id}|address`, s.address]])),
  };
  const [f, setF] = useState(init);
  const [reason, setReason] = useState('');
  const [touched, setTouched] = useState(false);
  const [busy, setBusy] = useState(false);
  const [dup, setDup] = useState({}); // { referralCode: true, picPhone: true } dari 409 backend
  const set = (k, v) => setF((x) => ({ ...x, [k]: v }));
  const changedKeys = Object.keys(init).filter((k) => String(init[k]) !== String(f[k]));

  const errs = {
    partnerName: len(f.partnerName, 3, 100), address: len(f.address, 5, 255), referralCode: validateReferralCode(f.referralCode) ?? (dup.referralCode ? 'Kode referral sudah dipakai partner lain' : undefined),
    businessEmail: !f.businessEmail.trim() ? MSG.required : EMAIL_RE.test(f.businessEmail.trim()) ? undefined : MSG.invalid,
    businessLocationCount: /^\d+$/.test(f.businessLocationCount) && Number(f.businessLocationCount) >= 1 ? undefined : 'Minimal 1',
    picName: len(f.picName, 3, 100) ?? (NAME_RE.test(f.picName.trim()) ? undefined : MSG.invalid),
    picPhone: !f.picPhone ? MSG.required : !/^8\d{7,11}$/.test(normalizePhone(f.picPhone)) ? MSG.invalid : dup.picPhone ? 'Nomor telepon sudah terdaftar' : undefined,
    reason: validateReason(reason),
    ...Object.fromEntries(stores.flatMap((s) => [[`${s.id}|name`, len(f[`${s.id}|name`], 3, 100)], [`${s.id}|address`, len(f[`${s.id}|address`], 5, 255)]])),
  };
  const show = (k) => (touched ? errs[k] : undefined);
  const invalid = Object.values(errs).some(Boolean);

  const LABEL = { partnerName: 'Nama Partner', address: 'Alamat Partner', referralCode: 'Kode Referral', businessEmail: 'Email Bisnis', channel: 'Channel', businessLocationCount: 'Jumlah Tempat Usaha', picName: 'Nama PIC', picPhone: 'No. Handphone PIC', picStatus: 'Status PIC' };
  const SECTION = { partnerName: 'partner', address: 'partner', referralCode: 'partner', businessEmail: 'business', channel: 'business', businessLocationCount: 'business', picName: 'pic', picPhone: 'pic', picStatus: 'pic' };
  async function save() {
    setTouched(true);
    if (invalid || changedKeys.length === 0) return;
    setBusy(true);
    const changes = changedKeys.map((k) => {
      if (k.includes('|')) {
        const [storeId, field] = k.split('|');
        const s = stores.find((x) => x.id === storeId);
        return { section: 'store', storeId, field, label: `${field === 'name' ? 'Nama Toko' : 'Alamat Toko'} (${s.name})`, value: f[k].trim() };
      }
      const value = k === 'businessLocationCount' ? Number(f[k]) : k === 'picPhone' ? normalizePhone(f[k]) : typeof f[k] === 'string' ? f[k].trim() : f[k];
      const display = k === 'channel' ? { old: CHANNEL[init[k]], new: CHANNEL[f[k]] } : k === 'picStatus' ? { old: PIC_STATUS[init[k]], new: PIC_STATUS[f[k]] } : k === 'picPhone' ? { old: formatPhone(init[k]), new: formatPhone(value) } : undefined;
      return { section: SECTION[k], field: k, label: LABEL[k], value, display };
    });
    try {
      const np = await updatePartnerData(p.id, changes, reason.trim(), user);
      toast('success', 'Data partner berhasil diperbarui.');
      onDone(np);
    } catch (e) {
      setBusy(false);
      if (e instanceof ApiError && e.code === 'DUPLICATE') setDup((d) => ({ ...d, [e.field]: true }));
      else toast('error', 'Gagal menyimpan perubahan. Coba lagi.');
    }
  }

  const text = (k, label, props = {}) => <TextInput label={label} required value={f[k]} onChange={(e) => set(k, e.target.value)} error={show(k)} {...props} />;
  const group = (title, children) => (
    <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
      <h3 style={{ margin: 0, font: 'var(--subheading-xs)', letterSpacing: 'var(--subheading-xs-ls)', textTransform: 'uppercase', color: 'var(--text-soft-400)' }}>{title}</h3>
      {children}
    </section>
  );
  return (
    <Drawer open width={560} onClose={busy ? undefined : onClose}
      header={<DrawerHeader size="lg" title="Ubah Data Partner" description={`${p.partnerName} · ${p.registrationNumber}`} icon="EditLine" onClose={onClose} />}
      footer={(
        <DrawerFooter left={<span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{changedKeys.length} field diubah</span>}>
          <Button variant="stroke" tone="neutral" size="sm" disabled={busy} onClick={onClose}>Batal</Button>
          <Button size="sm" disabled={busy || changedKeys.length === 0} onClick={save}>{busy ? 'Menyimpan...' : 'Simpan Perubahan'}</Button>
        </DrawerFooter>
      )}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-24)', padding: 'var(--space-16) var(--space-24) var(--space-24)' }}>
        <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>Ubah data atas permintaan partner. Setiap perubahan dicatat di Riwayat Status beserta alasannya.</span>
        {group('Informasi Partner', <>{text('partnerName', 'Nama Partner')}{text('address', 'Alamat Partner (sesuai legalitas)')}{text('referralCode', 'Kode Referral', { hint: 'Huruf dan angka, maks. 20 karakter. Unik per partner.', onChange: (e) => { set('referralCode', e.target.value); setDup((d) => ({ ...d, referralCode: false })); } })}</>)}
        {group('Data Bisnis', (
          <>
            {text('businessEmail', 'Email Bisnis', { leftIcon: 'MailLine' })}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-12)' }}>
              <Select label="Channel" required value={f.channel} onChange={(v) => set('channel', v)} placeholder="Pilih channel" options={Object.entries(CHANNEL).map(([value, label]) => ({ value, label }))} />
              {text('businessLocationCount', 'Jumlah Tempat Usaha', { inputMode: 'numeric', onChange: (e) => set('businessLocationCount', e.target.value.replace(/\D/g, '')) })}
            </div>
          </>
        ))}
        {group('Informasi PIC', (
          <>
            {text('picName', 'Nama PIC')}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-12)' }}>
              {text('picPhone', 'No. Handphone', { inputMode: 'numeric', prefix: <span style={{ padding: '0 var(--space-12)', font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>+62</span>, hint: 'Juga dipakai untuk login akun PIC.', onChange: (e) => { set('picPhone', e.target.value.replace(/\D/g, '').slice(0, 14)); setDup((d) => ({ ...d, picPhone: false })); } })}
              <Select label="Status PIC" required value={f.picStatus} onChange={(v) => set('picStatus', v)} placeholder="Pilih status" options={Object.entries(PIC_STATUS).map(([value, label]) => ({ value, label }))} />
            </div>
            <TextInput label="Email PIC" disabled value={p.pic.email} hint="Email PIC (dipakai untuk login akun PIC) diubah melalui Account Management › Ubah Email." />
            {p.picAccount.userId && (
              <LinkButton size="sm" onClick={() => navigate(`/account-management?q=${encodeURIComponent(p.pic.email)}`)} rightIcon={<Icon name="ArrowRightSLine" size={16} />} style={{ alignSelf: 'flex-start' }}>
                Buka akun PIC di Account Management
              </LinkButton>
            )}
          </>
        ))}
        {stores.map((s) => group(s.primary ? 'Toko Utama' : `Toko Tambahan · ${s.code}`, <>{text(`${s.id}|name`, 'Nama Toko')}{text(`${s.id}|address`, 'Alamat Toko')}</>))}
        {group('Data Rekening', (
          <>
            <Alert status="information" size="sm" title="Data rekening tidak dapat diubah setelah partner aktif." />
            <KeyValueGrid items={[{ label: 'Bank', value: BANKS[p.bank.code] }, { label: 'Cabang', value: p.bank.branch }, { label: 'No. Rekening', value: p.bank.accountNumber }, { label: 'Nama Rekening', value: p.bank.accountName }]} />
          </>
        ))}
        <TextArea label="Alasan perubahan" required maxLength={255} rows={3} value={reason} onChange={setReason} placeholder="Contoh: Partner pindah alamat usaha per Oktober 2026" error={show('reason')} />
      </div>
    </Drawer>
  );
}
