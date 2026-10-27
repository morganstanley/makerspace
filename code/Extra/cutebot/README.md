# MakeCode Cutebot curriculum

**Follow Me, Cutebot** is a free beginner coding curriculum for the [BBC micro:bit](https://microbit.org) and the [ELECFREAKS Cutebot Pro](https://github.com/elecfreaks/pxt-cutebot-pro) robot, taught with [Microsoft MakeCode](https://makecode.microbit.org) blocks.

Four 60-minute lessons take 12-year-olds with no coding experience from a beating heart on the LED screen to a robot that follows them and stops at a safe distance.

**Teacher guide: https://ghalichraibi.github.io/makecode-cutebot-curriculum/**

The guide is available in English and French.

## What's in the guide

| Lesson | Pupils build | New ideas |
| --- | --- | --- |
| 1. Hello, micro:bit | A heartbeat, a name badge, a mood badge with coloured headlights | Blocks, simulator, loops, button events, extensions |
| 2. Wake up your robot | First steps, a dance, button driving | Motor speed, pause, stop, repeat |
| 3. The robot can see | A distance meter, a parking sensor, a Mars rover | Sonar sensor, if / else if / else |
| 4. Follow me! | A shy robot, a curious puppy, then the follow-me robot | Variables, "and", the final project |

Every exercise follows the same rhythm: a short story to hook the class, a live demo, then a challenge for pairs. Each one comes with:

- a script to read aloud and a question for the class
- step-by-step demo instructions with the example blocks
- the challenge, which you can project full screen, with an optional reveal of the blocks pupils will need
- the solution as MakeCode blocks
- common mistakes and extras for fast finishers

Teachers don't need a coding background.

## Using it in class

- You need a micro:bit and a Cutebot Pro per pair, a computer with [makecode.microbit.org](https://makecode.microbit.org), and some floor space.
- Pupils add the robot blocks through **Extensions → search "cutebot pro" → Cutebot Pro** by ELECFREAKS.
- Use **Project** on a challenge to show it full screen, and **Show blocks** to reveal the pieces when pupils get stuck.

## Editing the guide

The page is built from plain files, so you can change the text without touching any code.

```
src/content.en.html      English text of the guide
src/content.fr.html      French text (same structure as the English file)
src/shell.html           Styles and scripts shared by both languages
src/challenge-pieces.json   Blocks shown under each challenge in Project mode
src/block-names.json     Block names shown as coloured chips in the text
src/icons.json           Which Lucide icon each part of the page uses
snippets/*.ts            The MakeCode programs shown as block pictures
snippets/pieces/*.ts     Single blocks used by Project mode
blocks/<lang>/           Rendered block pictures (generated)
docs/index.html          The built site served by GitHub Pages (generated)
tools/                   Render, build, layout-check and screenshot scripts
```

You need [Node.js](https://nodejs.org) 18+ and Google Chrome or Chromium. Set `CHROME_PATH` if Chrome isn't in a standard place.

```sh
npm install
npm run build    # rebuild docs/index.html after editing src/
npm run render   # re-render block pictures after editing snippets/ (needs internet)
npm run audit    # check every page, in both languages, at phone, tablet and desktop widths
npm run screenshot -- lesson2 --width=390 --lang=fr   # save shots/lesson2.png to check a change by eye
```

To change a program, edit its file in `snippets/`, then run `npm run render` and `npm run build`.

To change the text, edit `src/content.en.html` and `src/content.fr.html`. In the text, `{{block:name|caption}}` inserts the picture of `snippets/name.ts`.

See [CONTRIBUTING.md](CONTRIBUTING.md) for translations and pull requests.

## License

- The lesson content (text, images, block pictures) is licensed under [CC BY 4.0](LICENSE-CONTENT). You can reuse and adapt it, including for your own school, as long as you give credit.
- The code (`tools/`, `src/shell.html`, build scripts) is licensed under the [MIT License](LICENSE).

See [NOTICE.md](NOTICE.md) for third-party software and trademarks. This project is not affiliated with the Micro:bit Educational Foundation, Microsoft or ELECFREAKS.
