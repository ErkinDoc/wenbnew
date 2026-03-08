import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import sk from './locales/sk.json';
import en from './locales/en.json';
import ru from './locales/ru.json';

const resources = {
  sk: { translation: sk },
  en: { translation: en },
  ru: { translation: ru },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    // Если язык не определен, ставим словацкий (основная локация клиники)
    fallbackLng: 'sk', 
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // ПРИОРЯТЕТ: 
      // 1. Ссылка (?lang=ru) - ВАЖНО ДЛЯ SEO
      // 2. Память браузера (localStorage)
      // 3. Настройки системы (navigator)
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lang', // Ищем именно этот ключ в URL
      caches: ['localStorage'],
    },
  });

export default i18n;

export const languages = [
  { code: 'sk', label: 'SK', flag: '🇸🇰' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'ru', label: 'RU', flag: '🇷🇺' },
];
