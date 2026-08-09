import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  getLocaleFromPath,
  getLocaleSegmentFromPath,
  getLocalePath,
  getStoredLocale,
  getLocaleSwitchPath,
  LOCALE_STORAGE_KEY,
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

  describe('getLocaleSegmentFromPath', () => {
    test('returns locale segment when present in path', () => {
      expect(getLocaleSegmentFromPath('/fr-CA/about/')).toBe('fr-CA');
      expect(getLocaleSegmentFromPath('/exercises/pt-BR/python/')).toBe('pt-BR');
    });

    test('returns undefined when locale segment is missing', () => {
      expect(getLocaleSegmentFromPath('/about/')).toBe(undefined);
      expect(getLocaleSegmentFromPath('/')).toBe(undefined);
      expect(getLocaleSegmentFromPath(null)).toBe(undefined);
    });
  });

  describe('getStoredLocale', () => {
    beforeEach(() => {
      window.localStorage.clear();
    });

    test('returns default locale when nothing stored', () => {
      expect(getStoredLocale()).toBe(DEFAULT_LOCALE);
    });

    test('returns stored locale when supported', () => {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, 'fr-CA');
      expect(getStoredLocale()).toBe('fr-CA');
    });

    test('falls back to default locale when unsupported value is stored', () => {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, 'de-DE');
      expect(getStoredLocale()).toBe(DEFAULT_LOCALE);
    });
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
    expect(getLocalePath('/exercises/en-US/python/E1/', 'fr-CA')).toBe(
      '/exercises/fr-CA/python/E1/'
    );
  });

  test('returns original path when no locale is provided', () => {
    expect(getLocalePath('/about', undefined)).toBe('/about');
  });
});

describe('getLocaleSwitchPath', () => {
  test('switches locale for non-exercise pages', () => {
    expect(getLocaleSwitchPath('/about/', 'fr-CA')).toBe('/fr-CA/about/');
    expect(getLocaleSwitchPath('/fr-CA/about/', 'pt-BR')).toBe('/pt-BR/about/');
    expect(getLocaleSwitchPath('/pt-BR/about/', 'en-US')).toBe('/about/');
  });

  test('switches locale for exercise pages while preserving route', () => {
    expect(getLocaleSwitchPath('/exercises/en-US/python/E1/', 'fr-CA')).toBe(
      '/exercises/fr-CA/python/E1/'
    );
    expect(getLocaleSwitchPath('/exercises/fr-CA/python/E1/', 'en-US')).toBe(
      '/exercises/en-US/python/E1/'
    );
  });

  test('handles exercise root pages', () => {
    expect(getLocaleSwitchPath('/exercises/', 'fr-CA')).toBe(
      '/exercises/fr-CA/'
    );
    expect(getLocaleSwitchPath('/exercises/', 'en-US')).toBe('/exercises/');
  });

  test('does not inject default locale into unscoped exercise paths', () => {
    expect(getLocaleSwitchPath('/exercises/python/E1/', 'en-US')).toBe(
      '/exercises/python/E1/'
    );
    expect(getLocaleSwitchPath('/exercises/python/E1/', 'fr-CA')).toBe(
      '/exercises/fr-CA/python/E1/'
    );
  });
});
