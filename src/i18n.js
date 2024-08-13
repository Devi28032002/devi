import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importing JSON translation files
import enTranslation from './locals/en.json';
import hiTranslation from './locals/hi.json';

const resources = {
  en: {
    translation: enTranslation
  },
  hi: {
    translation: hiTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
