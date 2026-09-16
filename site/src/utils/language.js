export function getLanguage(docs, language) {
  if (language === 'en-US') {
    return docs.filter(
      (doc) =>
        !doc.fields.slug.includes('/fr-CA/') &&
        !doc.fields.slug.includes('/pt-BR/')
    );
  }

  return docs.filter((doc) => doc.fields.slug.includes(`/${language}/`));
}

export function getCurrentLanguage(slug, languages) {
  const slugsAr = slug.split('/');
  return languages.find((language) => slugsAr.includes(language)) || 'en-US';
}

export function getTranslationPath(pathname, language) {
  const segments = pathname.split('/').filter(Boolean);
  const locale = segments.find((segment) =>
    ['en-US', 'fr-CA', 'pt-BR'].includes(segment)
  );
  const exercisesIndex = segments.indexOf('exercises');
  if (exercisesIndex >= 0) {
    const pathSegments = segments.slice(exercisesIndex + 1);
    if (pathSegments[0] === locale) {
      pathSegments.shift();
    }
    const suffix = pathSegments.length ? `/${pathSegments.join('/')}/` : '/';
    return language === 'en-US'
      ? `/exercises${suffix}`
      : `/${language}/exercises${suffix}`;
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
