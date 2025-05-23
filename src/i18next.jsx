import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEn from './locales/en/common.json';
import commonFr from './locales/fr/common.json';
import servicesEn from './locales/en/services.json';
import servicesFr from './locales/fr/services.json';
import aboutEn from './locales/en/about.json';
import aboutFr from './locales/fr/about.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: commonEn,
        services: servicesEn,
        about: aboutEn,
      },
      fr: {
        common: commonFr,
        services: servicesFr,
        about: aboutFr,
      },
    },
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;