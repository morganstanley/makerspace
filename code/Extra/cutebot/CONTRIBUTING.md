# Contributing

Thanks for helping improve the curriculum! Corrections from teachers who have run the lessons are especially welcome: timings that didn't work, mistakes pupils made, clearer wording.

## Small fixes

Typos and wording changes only need an edit to `src/content.en.html` or `src/content.fr.html`, then `npm run build`. Please change both languages when the meaning changes, or say in the pull request that the other language still needs updating.

## Changing a program

1. Edit the program in `snippets/` (MakeCode JavaScript). The easiest way is to build it in MakeCode, switch to the JavaScript view and copy the code.
2. Run `npm run render`, which needs internet: block pictures come from the official MakeCode renderer, in English and French.
3. Run `npm run build` and check the result in `docs/index.html`.

If the program is used in Project mode, check that `src/challenge-pieces.json` still lists the blocks it needs. A `*` marks the block that is new in that exercise.

## Adding a language

1. Copy `src/content.en.html` to `src/content.<code>.html` and translate the text. Keep the HTML structure, ids and `{{block:…}}` placeholders.
2. Name blocks exactly as MakeCode shows them in that language.
3. In `tools/build-page.mjs`, add the language code to `LANGS` and its labels to `TEXT` and `PHASES`. Add the drawer and block names to `src/challenge-pieces.json` and `src/block-names.json`, and the interface labels (Say, Ask the class, Project…) to `src/shell.html`.
4. Render the blocks with `node tools/render-blocks.mjs --lang=<code>` and `--lang=<code> --pieces`.

## Before opening a pull request

- Run `npm run build` and commit the updated `docs/index.html`, which GitHub Pages serves.
- Run `npm run audit`; it should print `No layout problems found.`
- Keep commits small, one change each.

By contributing you agree that your changes are licensed like the rest of the project: content under CC BY 4.0, code under MIT.
