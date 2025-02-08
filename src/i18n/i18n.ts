import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en.json";
import ruTranslations from "./locales/ru.json";

const storedLanguage = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    ru: {
      translation: ruTranslations,
    },
  },
  lng: storedLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
