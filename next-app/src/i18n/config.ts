export const locales = ["ru", "en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ru";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Подписи для переключателя языков в шапке. */
export const localeLabels: Record<Locale, string> = {
  ru: "RU",
  en: "EN",
  es: "ES",
};
