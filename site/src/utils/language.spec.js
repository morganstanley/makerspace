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
        slug: '/exercises/en-US/circuitpython/',
      },
    },
    {
      id: '6698d395-fd02-5ca8-a485-0dd1ff1de0bc',
      fields: {
        slug: '/exercises/en-US/makecode/',
      },
    },
    {
      id: 'c7600476-3796-5367-af93-631c77005380',
      fields: {
        slug: '/exercises/en-US/circuitpython/setup_bluefruit/',
      },
    },
  ]);

  expect(getLanguage(allExercises, 'fr-CA')).toEqual([
    {
      id: '32212966-4d2e-5868-81ef-5a40324a2891',
      fields: {
        slug: '/exercises/fr-CA/circuitpython/',
      },
    },
  ]);
});

test('Gets language of current exercise', () => {
  expect(getCurrentLanguage('/exercises/en-US/index.mdx', languages)).toEqual(
    'en-US'
  );
  expect(getCurrentLanguage('/exercises/fr-CA/index.mdx', languages)).toEqual(
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
  ).toEqual(undefined);
});

test('Builds translated paths for base-level pages', () => {
  expect(
    getTranslationPath('/exercises/en-US/circuitpython/', 'fr-CA')
  ).toEqual('/exercises/fr-CA/circuitpython/');
  expect(getTranslationPath('/exercises/en-US/', 'pt-BR')).toEqual(
    '/exercises/pt-BR/'
  );
  expect(getTranslationPath('/exercises/', 'fr-CA')).toEqual(
    '/exercises/fr-CA/'
  );
});
