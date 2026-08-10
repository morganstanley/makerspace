import { SHORTCODES } from './mdx-shortcodes';

test('registers only supported MDX shortcodes', () => {
  expect(Object.keys(SHORTCODES).sort()).toEqual(['Hero', 'Link', 'SummaryCard']);
});
