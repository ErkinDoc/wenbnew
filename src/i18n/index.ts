import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from './locales/ru.json';
import en from './locales/en.json';
import sk from './locales/sk.json';

export const LANGS = ['sk', 'ru', 'en'] as const;
export type Lang = (typeof LANGS)[number];

export const SITE_URL = 'https://www.drerkin.eu';

/** Home page path for each language: "/" (sk), "/ru", "/en". */
export const homePath = (lang: Lang) => (lang === 'sk' ? '/' : `/${lang}`);

export const isLang = (v: unknown): v is Lang =>
  typeof v === 'string' && (LANGS as readonly string[]).includes(v);

/** "/ru" or "/ru/..." -> "ru"; "/" or anything else -> null */
export function langFromPath(pathname: string): Lang | null {
  const seg = pathname.split('/')[1];
  return seg === 'ru' || seg === 'en' ? seg : null;
}

const STORAGE_KEY = 'i18nextLng';

function initialLang(): Lang {
  if (typeof window === 'undefined') return 'sk';
  const { pathname, search } = window.location;
  const fromPath = langFromPath(pathname);
  if (fromPath) return fromPath;
  const q = new URLSearchParams(search).get('lang');
  if (isLang(q)) return q;
  // The Slovak home page "/" is always Slovak (so search engines index it correctly)
  if (pathname === '/' || pathname === '') return 'sk';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) return stored;
  } catch {
    /* storage unavailable */
  }
  return 'sk';
}

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    en: { translation: en },
    sk: { translation: sk },
  },
  lng: initialLang(),
  fallbackLng: 'sk',
  supportedLngs: [...LANGS],
  initAsync: false,
  interpolation: { escapeValue: false },
});

i18n.on('languageChanged', (lng) => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, lng);
  } catch {
    /* ignore */
  }
  document.documentElement.lang = lng;
});

export default i18n;
