# Makerspace Training Workshops

![Lifecycle Active](https://badgen.net/badge/Lifecycle/Active/green)

This repository houses the materials that support the Morgan Stanley Makerspace workshops, which teach kids to code with the [Circuit Playground Express](https://www.adafruit.com/product/3333) (CPX), [micro:bit](https://microbit.org) and related boards.

**Website: https://morganstanley.github.io/makerspace/**

## Repository layout

| Path | Contents |
| --- | --- |
| `site/` | [GatsbyJS](https://www.gatsbyjs.org) source for the website. Pages live in `site/content/` in English (`en-US`), French (`fr-CA`) and Portuguese (`pt-BR`) |
| `code/` | Raw source files for the exercises, organised by level and lesson |
| `.github/workflows/` | CI that builds the site on pull requests and deploys it when changes land on `main` |
| `cspell.json` | Spelling configuration (English and French) |

## Learning tracks

Exercise pages are under `site/content/en-US/exercises/`.

| Track | Platform | Grades |
| --- | --- | --- |
| [Introduction to MakeCode](https://morganstanley.github.io/makerspace/exercises/makecode/intro) | CPX + MakeCode blocks | 5–7 |
| [Introduction to CircuitPython](https://morganstanley.github.io/makerspace/exercises/circuitpython) (Level 1 and Level 2) | CPX + CircuitPython | 6–9 |
| Robotics | MakeCode and CircuitPython robotics (E1–E7), plus the Cutebot course | 8–11 |
| Introduction to Python | Python | 6–11 |
| [MakeCode Arcade](https://morganstanley.github.io/makerspace/exercises/makecode/arcade) | MakeCode Arcade games | 6–8 |
| [ImagiCharm](https://morganstanley.github.io/makerspace/exercises/imagicharm) | ImagiCharm (3 levels) | |
| [micro:bit](https://morganstanley.github.io/makerspace/exercises/microbit) | micro:bit, including Code Club (4 levels) | |

## Source code (`code/`)

- `Level 1 - Intro to CPX`: blink, lights, buttons, touch, acceleration, temperature
- `Level 2 - Intro to Programming`: variables, statements and expressions, built-in functions, functions
- `Extra`: additional examples (4-touch, handy temp/light meter, light meter, play song, range thermometer, shake acceleration, switch light, touch console light)

## Contributing

To learn how to contribute, including how to preview your changes locally, read the [site README](site/README.md). In short, from `site/` run `npm install` and then `npm run start`.

## Workshops

- **CPX Training Workshop**: teach kids to code the CPX.
- **Train the Trainer Workshop**: train the teachers to teach the CPX training workshop.
- **Make a Makerspace Workshop**: coach community leaders and educators how to make their own Makerspace program based on the workshops above.

## License

See [LICENSE](LICENSE).
