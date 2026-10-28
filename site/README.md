# Makerspace Site

This directory contains the [GatsbyJS](https://www.gatsbyjs.org) source code for the [Makerspace website](https://morganstanley.github.io/makerspace/). The site is built from `/site` into `/docs` (git-ignored) and deployed to GitHub Pages (`gh-pages` branch) by CI when changes are merged to `main`.

The site is based on the [gatsby-starter-22boxes-uno](https://www.gatsbyjs.org/starters/iamtherealgd/gatsby-starter-22boxes-uno/) starter.

## How to contribute to the site

### Dependencies

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/) `^24` and npm `^12` (see `engines` in `package.json`)
- Text editor ([VSCode](https://code.visualstudio.com), [Sublime Text](https://www.sublimetext.com))

### Language support in VSCode

You can use the C-Spell plugin to validate spelling. English and French are configured in `cspell.json` at the repository root. To add more languages, update that file.

### Develop

Clone this repo, change directory into `/site` and run:

```bash
npm install
```

To run the preview server:

```bash
npm run start
```

Then load [http://localhost:8000](http://localhost:8000) in your browser.

Other useful scripts:

| Command | Purpose |
| --- | --- |
| `npm run develop` | Same as `npm run start` |
| `npm run build` | Production build (with path prefix) into `/docs` |
| `npm run serve` | Serve a production build (run `gatsby build` first; `npm run build` moves its output to `/docs`) |
| `npm test` | Run the Jest tests |
| `npm run format` | Format code with Prettier |

Note: the development server does not serve static `.html` files; use a production build to check those.

### Updating content

All page content lives in [`/site/content`](content), in Markdown (`.md`) or MDX (`.mdx`). See the [Markdown reference](https://daringfireball.net/projects/markdown/syntax). Tables are not supported (no GFM plugin); use lists instead. Raw HTML such as `<details>` works.

### Translation / locale behavior

The site supports three locales:

- `en-US` (default)
- `fr-CA`
- `pt-BR`

#### URL structure

- Default locale pages are unprefixed (example: `/about/`, `/exercises/`).
- Non-default locale pages are prefixed by locale (example: `/fr-CA/about/`, `/pt-BR/exercises/`).
- Exercise content follows the same pattern:
  - English: `/exercises/...`
  - French: `/fr-CA/exercises/...`
  - Portuguese: `/pt-BR/exercises/...`

#### How language switching works

- The **top navigation dropdown** is the only language selector UI.
- The dropdown shows the locale of the page currently being viewed, determined from the URL, and all header navigation links point to that same locale.
- Changing the dropdown switches to the same route in the selected locale when available.
- The most recently viewed locale is recorded in browser storage (`cpx-preferred-locale`) for reference, but does not override the locale detected from the current URL.

#### Content organization

Content is organized by top-level language folders under [`/site/content/`](content):

- [`en-US/`](content/en-US)
- [`fr-CA/`](content/fr-CA)
- [`pt-BR/`](content/pt-BR)

### Exercises

Exercises live under `content/<locale>/exercises/<track>/...`. Current tracks include `makecode` (`intro`, `arcade`, `robotics`), `circuitpython`, `python`, `microbit` and `imagicharm`.

Each exercise has its own folder containing an `index.md` (or `index.mdx`) and its images, for example `content/en-US/exercises/makecode/robotics/E2/index.md`. Each track folder has an `index.mdx` that renders the exercise list.

Every exercise starts with front matter:

```yaml
---
template: exercise
title: Variables and Logic Blocks
level: 3
exercise: 2
category: Robotics
tags: ['MakeCode', 'Variables', 'Logic Blocks']
description: Variables and Logic Blocks
---
```

- `template: exercise` renders the page with the exercise template.
- `category` and `level` group pages into a list on the track's index page.
- `exercise` is the number that orders pages within a level. It also drives the previous/next links at the bottom of each exercise page. To add an exercise, pick the next number in sequence.
- The page title is rendered as the page heading, so don't repeat it as a top-level `#` heading. Start the body with `##` headings; they populate the table of contents.

### Build

```bash
npm run build
```

This cleans the previous build, runs `gatsby build --prefix-paths` and moves the result into `/docs`.

### Publish

Create a pull request and reach out to the contributing team for review and merge. CI builds the site on every pull request to `main` and deploys to GitHub Pages when `main` is updated.

### Implementation notes

GitHub Pages serves this site from a subdirectory (`/makerspace/`), so `gatsby-config.js` defines a [path prefix](https://www.gatsbyjs.org/docs/path-prefix/) of `/makerspace`.

---

## Notes from experienced instructors

### General guidance

- Plan your sessions with clear learning objectives.
- Use hands-on activities and encourage questions.
- Adapt pacing based on student feedback.

---

## Sample timeline and budget

> If images are broken, convert the `.xcf` files in `/site/raw-assets/` to `.png` or `.jpg` using GIMP or an online converter, then place them in `/site/static/images/`.

Sample timeline:
![Sample Timeline](./static/images/timeline.png)

Sample budget:
![Sample Budget](./static/images/budget.png)
