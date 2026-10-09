// Foto selfie contoh untuk bukti check in (prototipe). Foto asli dari aplikasi Android menyusul lewat Supabase.
import s1 from '../assets/selfies/selfie-1.svg';
import s2 from '../assets/selfies/selfie-2.svg';
import s3 from '../assets/selfies/selfie-3.svg';
import s4 from '../assets/selfies/selfie-4.svg';
import s5 from '../assets/selfies/selfie-5.svg';
import s6 from '../assets/selfies/selfie-6.svg';

const SELFIES = [s1, s2, s3, s4, s5, s6];
/** n = 1..6 dari data contoh; null bila tidak ada foto. */
export const selfieUrl = (n) => (n ? SELFIES[(n - 1) % SELFIES.length] : null);
