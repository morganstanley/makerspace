// Renders the MakeCode programs in snippets/ to PNG pictures in blocks/<lang>/, using the official
// MakeCode micro:bit block renderer (https://makecode.com/blocks-embed). Needs internet.
//
// Usage: node tools/render-blocks.mjs [--lang=en|fr] [--pieces] [name ...]
//   --lang     language of the block labels (default en)
//   --pieces   render snippets/pieces/ as single loose blocks, for Project mode
//   name ...   only these snippets (default: all)
//
// Pictures are stored at 1.5x pixel density; their display sizes go in blocks/<lang>/sizes.json.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { launch } from "./chrome.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DENSITY = 1.5;
const EXTENSION = "cutebotpro=github:elecfreaks/pxt-cutebot-pro";

const args = process.argv.slice(2);
const lang = args.find(a => a.startsWith("--lang="))?.slice("--lang=".length) ?? "en";
const pieces = args.includes("--pieces");
const only = args.filter(a => !a.startsWith("--"));

const sourceDir = path.join(ROOT, "snippets", pieces ? "pieces" : "");
const outDir = path.join(ROOT, "blocks", lang, pieces ? "pieces" : "");
const sizesFile = path.join(ROOT, "blocks", lang, "sizes.json");
const sizes = fs.existsSync(sizesFile) ? JSON.parse(fs.readFileSync(sizesFile, "utf8")) : {};
const names = fs.readdirSync(sourceDir)
  .filter(f => f.endsWith(".ts"))
  .map(f => path.basename(f, ".ts"))
  .filter(name => !only.length || only.includes(name));

fs.mkdirSync(outDir, { recursive: true });
const browser = await launch();
const page = await browser.newPage();

// Load the renderer as the page itself so it answers messages posted to the same window.
// Renderers in other languages than English never send "renderready", so we don't wait for it.
await page.goto(`https://makecode.microbit.org/---docs?render=1&lang=${lang}`, { waitUntil: "networkidle2", timeout: 90000 });
await page.evaluate(() => {
  window.pending = {};
  window.addEventListener("message", ev => {
    const msg = ev.data;
    if (msg?.source === "makecode" && msg.type === "renderblocks" && window.pending[msg.id]) {
      window.pending[msg.id](msg);
      delete window.pending[msg.id];
    }
  });
});

function render(name, code) {
  return page.evaluate((id, code, extension, snippetMode) => new Promise(resolve => {
    window.pending[id] = resolve;
    window.postMessage({ type: "renderblocks", id, code, options: { package: extension, snippetMode } }, "*");
    setTimeout(() => resolve({ error: "no reply in 60s" }), 60000);
  }), name, code, EXTENSION, pieces);
}

// The renderer returns a high-density PNG; scale it down in the browser to keep the page light.
function downscale(uri, width, height) {
  return page.evaluate((uri, width, height) => new Promise(resolve => {
    const img = new Image();
    img.onload = () => {
      const canvas = Object.assign(document.createElement("canvas"), { width, height });
      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL("image/png"));
    };
    img.src = uri;
  }), uri, Math.round(width * DENSITY), Math.round(height * DENSITY));
}

let failed = 0;
for (const name of names) {
  const result = await render(name, fs.readFileSync(path.join(sourceDir, `${name}.ts`), "utf8"));
  if (!result.uri) {
    console.error(`✗ ${name}: ${result.error || "no picture returned"}`);
    failed++;
    continue;
  }
  const width = Math.round(result.width), height = Math.round(result.height);
  const png = await downscale(result.uri, width, height);
  fs.writeFileSync(path.join(outDir, `${name}.png`), Buffer.from(png.split(",")[1], "base64"));
  sizes[pieces ? `pieces/${name}` : name] = [width, height];
  console.log(`✓ ${name} ${width}×${height}`);
}
await browser.close();

const lines = Object.keys(sizes).sort().map(key => `  ${JSON.stringify(key)}: [${sizes[key].join(", ")}]`);
fs.writeFileSync(sizesFile, `{\n${lines.join(",\n")}\n}\n`);
if (failed) process.exit(1);
