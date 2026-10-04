export const LOCALES = ['en', 'fr', 'de', 'nl', 'da', 'sv', 'es', 'it', 'pt', 'ro', 'ja'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_NATIVE_NAMES: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  nl: 'Nederlands',
  da: 'Dansk',
  sv: 'Svenska',
  es: 'Español',
  it: 'Italiano',
  pt: 'Português',
  ro: 'Română',
  ja: '日本語',
};

export const isLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);
