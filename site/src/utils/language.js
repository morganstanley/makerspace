import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '../i18n';

export function getLanguage(docs, language) {
  if (!language || language === DEFAULT_LOCALE) {
    const translatedLocales = SUPPORTED_LOCALES.filter(
      (locale) => locale !== DEFAULT_LOCALE
    );
    return docs.filter(
      (doc) =>
        !translatedLocales.some((locale) =>
          doc.fields.slug.includes(`/${locale}/`)
        )
    );
  }

  return docs.filter((doc) => doc.fields.slug.includes(`/${language}/`));
}

export function getCurrentLanguage(slug, languages) {
  let language;
  const slugsAr = slug.split('/');
  languages.forEach((v) => {
    if (slugsAr.includes(v)) {
      language = v;
    }
  });
  return language;
}

export function getTranslationPath(pathname, language) {
  const segments = pathname.split('/').filter(Boolean);

  const exercisesIndex = segments.indexOf('exercises');
  if (exercisesIndex >= 0) {
    const pathSegments = segments.slice(exercisesIndex + 2);
    const suffix = pathSegments.length ? `/${pathSegments.join('/')}/` : '/';
    return `/exercises/${language}${suffix}`;
  }

  if (
    segments.length === 0 ||
    segments[0] === 'fr-CA' ||
    segments[0] === 'pt-BR' ||
    segments[0] === 'en-US'
  ) {
    if (language === 'en-US') {
      return '/';
    }
    return `/${language}/`;
  }

  return pathname;
}
