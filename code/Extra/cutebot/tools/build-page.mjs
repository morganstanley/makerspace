// Builds docs/index.html, the site served by GitHub Pages.
//
// src/shell.html holds the styles and scripts; each src/content.<lang>.html holds the text of one
// language. The build inlines block pictures from blocks/<lang>/, adds the Project-mode block
// pieces, colours block names, tags phases for their icons, and puts every language in one page.
//
// Usage: npm run build
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const LANGS = ["en", "fr"];

const TEXT = {
  en: { copy: "Copy the code: paste it in MakeCode’s JavaScript view to get these blocks", blocksAlt: "MakeCode blocks", piecesTitle: "Blocks you’ll need", isNew: "New" },
  fr: { copy: "Copier le code : collez-le dans la vue JavaScript de MakeCode pour obtenir ces blocs", blocksAlt: "Blocs MakeCode", piecesTitle: "Les blocs dont vous aurez besoin", isNew: "Nouveau" },
};

// Phase labels in every language, mapped to the icon each phase gets.
const PHASES = {
  hook: ["Hook", "Accroche"],
  tour: ["Tour", "Visite"],
  demo: ["Demo", "Démo"],
  build: ["Build", "Pratique"],
  wrap: ["Wrap", "Bilan"],
  plan: ["Plan it", "Planifier"],
  parade: ["Parade", "Défilé"],
};

const read = file => fs.readFileSync(path.join(ROOT, file), "utf8");
const readJson = file => JSON.parse(read(file));
const escapeHtml = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const PIECES = readJson("src/challenge-pieces.json");
const NAMES = readJson("src/block-names.json");
const ICONS = readJson("src/icons.json");
const SIZES = Object.fromEntries(LANGS.map(lang => [lang, readJson(`blocks/${lang}/sizes.json`)]));

// Returns a rendered block picture as base64 with its display size.
function blockImage(lang, name) {
  const size = SIZES[lang][name];
  if (!size) throw new Error(`blocks/${lang}/${name}.png is missing: run npm run render`);
  const data = fs.readFileSync(path.join(ROOT, "blocks", lang, `${name}.png`)).toString("base64");
  return { data, width: size[0], height: size[1] };
}

// {{block:name|caption}} becomes a figure with the picture of snippets/name.ts and a button that
// copies its JavaScript, to paste into MakeCode's JavaScript view.
function insertFigures(lang, html) {
  return html.replace(/\{\{block:([\w-]+)\|([^}]+)\}\}/g, (_, name, caption) => {
    const { data, width, height } = blockImage(lang, name);
    // Narrow programs can sit beside the demo steps; wide ones need the full column to stay readable.
    const narrow = width <= 480 ? " narrow" : "";
    const code = read(`snippets/${name}.ts`).trimEnd();
    return `<figure class="blocks${narrow}" style="--w: ${width}">
  <div class="blocks-frame">
    <div class="blocks-canvas"><img src="data:image/png;base64,${data}" width="${width}" height="${height}" alt="${TEXT[lang].blocksAlt}: ${escapeHtml(caption)}" loading="lazy"></div>
    <button type="button" class="copy-btn" aria-label="${TEXT[lang].copy}" title="${TEXT[lang].copy}"></button>
    <template class="code">${escapeHtml(code)}</template>
  </div>
  <figcaption>${escapeHtml(caption)}</figcaption>
</figure>`;
  });
}

// Each challenge gets a hidden <template> listing the loose blocks it needs; only Project mode
// shows it. Piece images are shared between challenges, so each is embedded once in PIECE_IMAGES.
const pieceImages = {};
function piecesTemplate(lang, list) {
  const items = list.map(entry => {
    const name = entry.replace(/\*$/, "");
    const isNew = entry.endsWith("*");
    const key = `${lang}/${name}`;
    const { data, width, height } = blockImage(lang, `pieces/${name}`);
    pieceImages[key] = `data:image/png;base64,${data}`;
    const drawers = PIECES.pieces[name].map(d => PIECES.drawers[d][lang]).join(" · ");
    const badge = isNew ? `<em>${TEXT[lang].isNew}</em>` : "";
    return `<li class="piece${isNew ? " is-new" : ""}" style="--w: ${width}"><img data-piece="${key}" width="${width}" height="${height}" alt=""><span class="drawer">${drawers}</span>${badge}</li>`;
  });
  return `<template class="pieces"><h5>${TEXT[lang].piecesTitle}</h5><ul class="pieces-list">${items.join("")}</ul></template>`;
}
function insertPieces(lang, html) {
  const open = `<div class="challenge">`;
  for (const [ex, list] of Object.entries(PIECES.challenges)) {
    const article = html.search(new RegExp(`<article class="ex" id="ex-${ex}"[ >]`));
    if (article < 0) throw new Error(`content.${lang}.html has no exercise ex-${ex}`);
    const at = html.indexOf(open, article) + open.length;
    html = html.slice(0, at) + piecesTemplate(lang, list) + html.slice(at);
  }
  return html;
}

// Bold block names become chips in their MakeCode drawer colour; bold drawer names get a colour dot.
const blockDrawer = new Map(Object.entries(NAMES.blocks).flatMap(([d, names]) => names.map(n => [n, d])));
const drawerNames = new Map(Object.entries(NAMES.drawers).flatMap(([d, names]) => names.map(n => [n, d])));
function colourBlockNames(html) {
  return html.replace(/<b>([^<]+)<\/b>/g, (bold, text) => {
    // French text uses non-breaking spaces (as in "50 %"); names in the JSON use plain ones.
    const name = text.replace(/[\u00a0\u202f]/g, " ");
    if (blockDrawer.has(name)) return `<b class="blk" style="--dc: ${NAMES.colors[blockDrawer.get(name)]}">${text}</b>`;
    if (drawerNames.has(name)) return `<b class="drawer-name" style="--dc: ${NAMES.colors[drawerNames.get(name)]}">${text}</b>`;
    return bold;
  });
}

function tagPhases(lang, html) {
  return html.replace(/<div class="phase"><div class="phase-label">([^<]+)<small>/g, (_, label) => {
    const phase = Object.keys(PHASES).find(key => PHASES[key].includes(label));
    if (!phase) throw new Error(`content.${lang}.html: phase "${label}" has no icon; add it to PHASES`);
    return `<div class="phase" data-phase="${phase}"><div class="phase-label">${label}<small>`;
  });
}

// Both languages live in one page, so their ids get a language prefix.
function prefixIds(lang, html) {
  return html
    .replace(/ id="([^"]+)"/g, ` id="${lang}-$1"`)
    .replace(/ data-jump="([^"]+)"/g, ` data-jump="${lang}-$1"`);
}

function buildLanguage(lang) {
  let html = read(`src/content.${lang}.html`);
  html = insertPieces(lang, html);
  html = insertFigures(lang, html);
  html = colourBlockNames(html);
  html = tagPhases(lang, html);
  html = prefixIds(lang, html);
  return `<div class="lang" data-lang="${lang}" lang="${lang}">\n${html}</div>`;
}

// src/icons.json maps each icon the shell uses to a Lucide icon (https://lucide.dev, ISC license).
// The shell draws them as CSS masks, so they take the colour of their context.
function iconVariables() {
  return Object.entries(ICONS).map(([name, lucideName]) => {
    const file = path.join(ROOT, "node_modules", "lucide-static", "icons", `${lucideName}.svg`);
    if (!fs.existsSync(file)) throw new Error(`Lucide icon "${lucideName}" not found: run npm install`);
    const svg = fs.readFileSync(file, "utf8")
      .replace(/<!--[\s\S]*?-->/, "")
      .replace(/\s+/g, " ")
      .replace('stroke="currentColor"', 'stroke="black"')
      .trim();
    return `  --i-${name}: url("data:image/svg+xml,${encodeURIComponent(svg)}");`;
  }).join("\n");
}

const content = LANGS.map(buildLanguage).join("\n")
  + `\n<script>window.PIECE_IMAGES = ${JSON.stringify(pieceImages)};</script>`;
const page = read("src/shell.html")
  .replace("{{icons}}", () => iconVariables())
  .replace("{{content}}", () => content);

fs.mkdirSync(path.join(ROOT, "docs"), { recursive: true });
fs.writeFileSync(path.join(ROOT, "docs", "index.html"), page);
console.log(`docs/index.html ${(Buffer.byteLength(page) / 1e6).toFixed(2)} MB`);
