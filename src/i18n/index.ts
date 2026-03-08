import in18 from 'i18next';
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
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
