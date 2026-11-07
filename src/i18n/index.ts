import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ru from './locales/ru.json';
import en from './locales/en.json';
import sk from './locales/sk.json';

const resources = {
  ru: { translation: ru },
  en: { translation: en },
  sk: { translation: sk }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'sk',
    supportedLngs: ['sk', 'ru', 'en'],
    nonExplicitSupportedLngs: true,
    detection: {
      // hreflang URLs on the site use ?lang=ru / ?lang=en
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lang',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
