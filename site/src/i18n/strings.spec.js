import strings from './strings';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, getStrings } from './index';

const topLevelKeys = Object.keys(strings[DEFAULT_LOCALE]);

test('all locales define the same top-level sections', () => {
  SUPPORTED_LOCALES.forEach((locale) => {
    expect(Object.keys(strings[locale])).toEqual(topLevelKeys);
  });
});

test('all locales define the same keys within each section', () => {
  SUPPORTED_LOCALES.forEach((locale) => {
    topLevelKeys.forEach((section) => {
      expect(Object.keys(strings[locale][section])).toEqual(
        Object.keys(strings[DEFAULT_LOCALE][section])
      );
    });
  });
});

test('getStrings returns the correct locale strings', () => {
  expect(getStrings('en-US').exercise.level).toBe('Level');
  expect(getStrings('fr-CA').exercise.level).toBe('Niveau');
  expect(getStrings('pt-BR').exercise.level).toBe('Nível');
});

test('getStrings falls back to en-US for unknown locale', () => {
  expect(getStrings('de-DE').exercise.level).toBe('Level');
  expect(getStrings(undefined).exercise.level).toBe('Level');
});
