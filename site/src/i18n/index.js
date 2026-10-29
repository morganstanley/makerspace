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

// Gatsby's location.pathname includes the site's pathPrefix (e.g. /makerspace)
// in production builds, while page paths and navigate() do not.
export function stripPathPrefix(pathname, prefix) {
  const path = pathname || '/';
  const cleanPrefix = (prefix || '').replace(/\/+$/, '');
  if (!cleanPrefix) return path;
  if (path === cleanPrefix) return '/';
  if (path.startsWith(`${cleanPrefix}/`)) {
    return path.slice(cleanPrefix.length);
  }
  return path;
}

const normalizeSlash = (p) => (p.endsWith('/') ? p : `${p}/`);

// Returns the requested path if a page exists for it, otherwise the closest
// existing ancestor, otherwise the locale home page.
export function resolveExistingPath(path, existingPaths, locale) {
  const exists = (p) => existingPaths.has(normalizeSlash(p));
  if (exists(path)) return path;

  const segments = path.split('/').filter(Boolean);
  while (segments.length > 1) {
    segments.pop();
    const candidate = `/${segments.join('/')}/`;
    if (exists(candidate)) return candidate;
  }

  return locale === DEFAULT_LOCALE ? '/' : `/${locale}/`;
}

// Repairs malformed URLs such as /fr-CA/makerspace/exercises/... (locale before
// the site prefix, or duplicated locale/prefix segments). Returns undefined when
// the path cannot be repaired.
export function repairMalformedPath(pathname, prefix) {
  const cleanPrefix = (prefix || '').replace(/^\/+|\/+$/g, '');
  let segments = (pathname || '').split('/').filter(Boolean);
  const locale = segments.find((s) => SUPPORTED_LOCALES.includes(s));
  segments = segments.filter((s) => !SUPPORTED_LOCALES.includes(s));
  while (cleanPrefix && segments[0] === cleanPrefix && segments.length > 1) {
    segments.shift();
  }
  if (!segments.length && !locale) return undefined;
  const base = `/${segments.join('/')}${segments.length ? '/' : ''}`;
  return getLocaleSwitchPath(base, locale || DEFAULT_LOCALE);
}
