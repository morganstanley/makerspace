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
  if (path.startsWith('/exercises')) {
    const hasTrailingSlash = path.endsWith('/');
    const parts = path.replace(/^\/exercises\/?/, '').split('/').filter(Boolean);

    if (SUPPORTED_LOCALES.includes(parts[0])) {
      parts.shift();
    }

    if (parts.length === 0) {
      return `/exercises/${locale}/`;
    }

    return `/exercises/${locale}/${parts.join('/')}${hasTrailingSlash ? '/' : ''}`;
  }
  return `/${locale}${path}`;
}

export function getLocaleSwitchPath(pathname, locale) {
  const path = pathname || '/';
  const segments = path.split('/').filter(Boolean);
  const hasTrailingSlash = path.endsWith('/');

  if (segments.length === 0) {
    return locale === DEFAULT_LOCALE ? '/' : `/${locale}/`;
  }

  if (segments[0] === 'exercises') {
    if (segments.length === 1) {
      return locale === DEFAULT_LOCALE ? '/exercises/' : `/exercises/${locale}/`;
    }

    if (SUPPORTED_LOCALES.includes(segments[1])) {
      segments[1] = locale;
    } else if (locale !== DEFAULT_LOCALE) {
      segments.splice(1, 0, locale);
    }

    return `/${segments.join('/')}${hasTrailingSlash ? '/' : ''}`;
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
