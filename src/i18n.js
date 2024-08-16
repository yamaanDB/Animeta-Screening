import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
// import LanguageDetector from 'i18next-browser-languagedetector'; //OPTIONAL

i18n
  .use(Backend)
  // .use(LanguageDetector) // OPTIONAL
  .use(initReactI18next)
  .init({
    //  Set default language
    lng: "eng",
    //  language to use if translations in user language are not available
    fallbackLng: "eng",
    debug: false,
    //  string or array of namespaces to load
    ns: "translation",
    //  default namespace used if not passed to 'translation function'
    ns: "translation",
    defaultNS: "translation",
    resources: {
      eng: {
        translation: {
          Welcome: "welcome",
          // here we will place our translations...
        },
      },
      tam: {
        translation: {
          Welcome: `வரவேற்பு`,
          // here we will place our translations...
        },
      },
      tel: {
        translation: {
          Welcome: `స్వాగతం`,
          // here we will place our translations...
        },
      },
      kan: {
        translation: {
          Welcome: `ಸ್ವಾಗತ`,
          // here we will place our translations...
        },
      },
      hin: {
        translation: {
          Welcome: `स्वागत`,
          // here we will place our translations...
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
