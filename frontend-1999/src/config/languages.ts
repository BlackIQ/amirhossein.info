import enLocale from "@/locales/en.json";
import ruLocale from "@/locales/ru.json";
import deLocale from "@/locales/de.json";
import zhLocale from "@/locales/zh.json";

export const languages = {
  en: "English",
  ru: "Русский",
  de: "Deutsch",
  zh: "中文",
} as const;

export type Language = keyof typeof languages;

export const languageFlags: Record<Language, string> = {
  en: "gb",
  ru: "ru",
  de: "de",
  zh: "cn",
};

export const translations: Record<Language, Record<string, string>> = {
  en: enLocale,
  ru: ruLocale,
  de: deLocale,
  zh: zhLocale,
};
