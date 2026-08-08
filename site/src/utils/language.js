export function getLanguage(docs, language) {
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
  const pathSegments =
    exercisesIndex >= 0 ? segments.slice(exercisesIndex + 2) : [];
  const suffix = pathSegments.length ? `/${pathSegments.join('/')}/` : '/';

  return `/exercises/${language}${suffix}`;
}
