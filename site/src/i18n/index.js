import strings from './strings';

export const DEFAULT_LOCALE = 'en-US';
export const SUPPORTED_LOCALES = ['en-US', 'fr-CA', 'pt-BR'];
export const LOCALE_NAMES = {
  'en-US': 'English',
  'fr-CA': 'Français',
  'pt-BR': 'Português',
};
export const LOCALE_STORAGE_KEY = 'cpx-preferred-locale';

export function getStrings(locale) {
  return strings[locale] || strings[DEFAULT_LOCALE];
}

export function getLocaleFromPath(pathname) {
  const localeFromSegment = getLocaleSegmentFromPath(pathname);
  return localeFromSegment || DEFAULT_LOCALE;
}

export function getLocaleSegmentFromPath(pathname) {
  if (!pathname) return undefined;
  const segments = pathname.split('/').filter(Boolean);
  for (const segment of segments) {
    if (SUPPORTED_LOCALES.includes(segment)) {
      return segment;
    }
  }
  return undefined;
}

export function getStoredLocale() {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE;
  }

  const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  if (SUPPORTED_LOCALES.includes(storedLocale)) {
    return storedLocale;
  }
  return DEFAULT_LOCALE;
}

function getExercisePathParts(path) {
  const segments = path.split('/').filter(Boolean);

  if (segments[0] === 'exercises') {
    return {
      isExercisePath: true,
      parts: segments.slice(1),
    };
  }

  if (SUPPORTED_LOCALES.includes(segments[0]) && segments[1] === 'exercises') {
    return {
      isExercisePath: true,
      parts: segments.slice(2),
    };
  }

  return {
    isExercisePath: false,
    parts: [],
  };
}

export function getLocalePath(path, locale) {
  if (!locale || locale === DEFAULT_LOCALE) return path;

  const hasTrailingSlash = path.endsWith('/');
  const { isExercisePath, parts } = getExercisePathParts(path);

  if (isExercisePath) {
    const suffix = parts.length ? `${parts.join('/')}${hasTrailingSlash ? '/' : ''}` : '';
    return `/${locale}/exercises/${suffix}`;
  }

  return `/${locale}${path}`;
}

export function getLocaleSwitchPath(pathname, locale) {
  const path = pathname || '/';
  const segments = path.split('/').filter(Boolean);
  const hasTrailingSlash = path.endsWith('/');
  const { isExercisePath, parts } = getExercisePathParts(path);

  if (segments.length === 0) {
    return locale === DEFAULT_LOCALE ? '/' : `/${locale}/`;
  }

  if (isExercisePath) {
    const suffix = parts.length ? `/${parts.join('/')}` : '';
    if (locale === DEFAULT_LOCALE) {
      return `/exercises${suffix}${hasTrailingSlash || !parts.length ? '/' : ''}`;
    }
    return `/${locale}/exercises${suffix}${hasTrailingSlash || !parts.length ? '/' : ''}`;
  }

  if (SUPPORTED_LOCALES.includes(segments[0])) {
    segments.shift();
  }

  if (locale !== DEFAULT_LOCALE) {
    segments.unshift(locale);
  }

  if (segments.length === 0) {
    return locale === DEFAULT_LOCALE ? '/' : `/${locale}/`;
  }

  return `/${segments.join('/')}${hasTrailingSlash ? '/' : ''}`;
}
