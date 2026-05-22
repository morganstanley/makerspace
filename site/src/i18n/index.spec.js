import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  getLocaleFromPath,
  getLocalePath,
} from './index';

test('DEFAULT_LOCALE is en-US', () => {
  expect(DEFAULT_LOCALE).toBe('en-US');
});

test('SUPPORTED_LOCALES contains en-US, fr-CA, pt-BR', () => {
  expect(SUPPORTED_LOCALES).toEqual(['en-US', 'fr-CA', 'pt-BR']);
});

describe('getLocaleFromPath', () => {
  test('detects en-US from path', () => {
    expect(getLocaleFromPath('/exercises/en-US/circuitpython/')).toBe('en-US');
  });

  test('detects fr-CA from path', () => {
    expect(getLocaleFromPath('/exercises/fr-CA/circuitpython/')).toBe('fr-CA');
  });

  test('detects pt-BR from path', () => {
    expect(getLocaleFromPath('/exercises/pt-BR/makecode/')).toBe('pt-BR');
  });

  test('detects locale from non-exercise path', () => {
    expect(getLocaleFromPath('/fr-CA/about/')).toBe('fr-CA');
  });

  test('returns DEFAULT_LOCALE when no locale segment is present', () => {
    expect(getLocaleFromPath('/about/')).toBe(DEFAULT_LOCALE);
    expect(getLocaleFromPath('/')).toBe(DEFAULT_LOCALE);
    expect(getLocaleFromPath('')).toBe(DEFAULT_LOCALE);
    expect(getLocaleFromPath(null)).toBe(DEFAULT_LOCALE);
  });
});

describe('getLocalePath', () => {
  test('returns original path for en-US', () => {
    expect(getLocalePath('/about', 'en-US')).toBe('/about');
    expect(getLocalePath('/teach', 'en-US')).toBe('/teach');
  });

  test('prefixes path with locale for non-English locales', () => {
    expect(getLocalePath('/about', 'fr-CA')).toBe('/fr-CA/about');
    expect(getLocalePath('/teach', 'pt-BR')).toBe('/pt-BR/teach');
  });

  test('returns locale exercises root for exercise paths', () => {
    expect(getLocalePath('/exercises', 'fr-CA')).toBe('/exercises/fr-CA/');
    expect(getLocalePath('/exercises/en-US/', 'pt-BR')).toBe(
      '/exercises/pt-BR/'
    );
  });

  test('returns original path when no locale is provided', () => {
    expect(getLocalePath('/about', undefined)).toBe('/about');
  });
});
