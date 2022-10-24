import { createI18n } from "vue-i18n";
import enUS from "@/locales/en.json";
import arEg from "@/locales/ar.json";
const messages = {
  en: {
    ...enUS,
  },
  ar: {
    ...arEg,
  },
};

const options: object = {
  strategy: "prefix",
  locale: "ar",
  defaultDirection: "ltr",
  fallbackLocale: "en",
  detectBrowserLanguage: false,
  lazy: true,
  messages,
};
const i18n = createI18n(options);


export default i18n;
