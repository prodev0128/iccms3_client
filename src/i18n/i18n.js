import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import enJSON from './translations/en';
import kpJSON from './translations/kp';

const resources = {
  en: { translation: enJSON },
  kp: { translation: kpJSON },
};

i18next.use(initReactI18next).init({
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  keySeparator: false,
  lng: 'en',
  react: {
    useSuspense: true,
  },
  resources,
});

export default i18next;
