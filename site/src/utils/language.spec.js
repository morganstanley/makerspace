import {
  getCurrentLanguage,
  getLanguage,
  getTranslationPath,
} from './language';
import { allExercises, slug, languages } from '../../__mocks__/exercises';

test('Gets documentation by version', () => {
  expect(getLanguage(allExercises, 'en-US')).toEqual([
    {
      id: 'a9756c78-5cc2-5d50-9434-22fbd314e502',
      fields: {
        slug: '/exercises/circuitpython/',
      },
    },
    {
      id: '6698d395-fd02-5ca8-a485-0dd1ff1de0bc',
      fields: {
        slug: '/exercises/makecode/',
      },
    },
    {
      id: 'c7600476-3796-5367-af93-631c77005380',
      fields: {
        slug: '/exercises/circuitpython/setup_bluefruit/',
      },
    },
  ]);

  expect(getLanguage(allExercises, 'fr-CA')).toEqual([
    {
      id: '32212966-4d2e-5868-81ef-5a40324a2891',
      fields: {
        slug: '/fr-CA/exercises/circuitpython/',
      },
    },
  ]);
});

test('Gets language of current exercise', () => {
  expect(getCurrentLanguage('/exercises/index.mdx', languages)).toEqual(
    'en-US'
  );
  expect(getCurrentLanguage('/fr-CA/exercises/index.mdx', languages)).toEqual(
    'fr-CA'
  );
  expect(
    getCurrentLanguage('/exercises/stuff/components/', [...languages, 'stuff'])
  ).toEqual('stuff');
  expect(
    getCurrentLanguage('/exercises/3.4.1-rc3/components/', [
      ...languages,
      '3.4.1-rc3',
    ])
  ).toEqual('3.4.1-rc3');
  expect(
    getCurrentLanguage('/exercises/3.4.1-rc3/components/', languages)
  ).toEqual('en-US');
});

test('Builds translated paths for base-level pages', () => {
  expect(
    getTranslationPath('/exercises/circuitpython/', 'fr-CA')
  ).toEqual('/fr-CA/exercises/circuitpython/');
  expect(getTranslationPath('/exercises/', 'pt-BR')).toEqual(
    '/pt-BR/exercises/'
  );
  expect(getTranslationPath('/exercises/', 'fr-CA')).toEqual(
    '/fr-CA/exercises/'
  );
  expect(
    getTranslationPath('/fr-CA/exercises/circuitpython/', 'en-US')
  ).toEqual('/exercises/circuitpython/');
});

test('Builds translated paths for homepage', () => {
  expect(getTranslationPath('/', 'fr-CA')).toEqual('/fr-CA/');
  expect(getTranslationPath('/', 'pt-BR')).toEqual('/pt-BR/');
  expect(getTranslationPath('/fr-CA/', 'en-US')).toEqual('/');
  expect(getTranslationPath('/pt-BR/', 'en-US')).toEqual('/');
  expect(getTranslationPath('/fr-CA/', 'pt-BR')).toEqual('/pt-BR/');
});
