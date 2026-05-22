import strings from './strings';

export const DEFAULT_LOCALE = 'en-US';
export const SUPPORTED_LOCALES = ['en-US', 'fr-CA', 'pt-BR'];
export const LOCALE_NAMES = {
  'en-US': 'English',
  'fr-CA': 'Français',
  'pt-BR': 'Português',
};

export function getStrings(locale) {
  return strings[locale] || strings[DEFAULT_LOCALE];
}

export function getLocaleFromPath(pathname) {
  if (!pathname) return DEFAULT_LOCALE;
  const segments = pathname.split('/').filter(Boolean);
  for (const segment of segments) {
    if (SUPPORTED_LOCALES.includes(segment)) {
      return segment;
    }
  }
  return DEFAULT_LOCALE;
}

export function getLocalePath(path, locale) {
  if (!locale || locale === DEFAULT_LOCALE) return path;
  if (path.startsWith('/exercises')) return `/exercises/${locale}/`;
  return `/${locale}${path}`;
}
