// Saves a screenshot of the built page, for checking changes by eye.
//
// Usage: node tools/screenshot.mjs <view> [options]
//   view            start, lesson1 … lesson4 or help
//   --width=1280    viewport width; below 700 a phone is emulated
//   --lang=en       en or fr
//   --theme=light   light or dark
//   --at=ex-2-1     scroll to this element id (without the language prefix)
//   --project=ex-2-1  open Project mode on this exercise and reveal its blocks
//   --full          capture the whole page instead of the first screen
//   --out=shots/<view>.png
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { launch } from "./chrome.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const [view = "start", ...flags] = process.argv.slice(2);
const option = (name, fallback) => flags.find(f => f.startsWith(`--${name}=`))?.split("=")[1] ?? fallback;
const width = Number(option("width", 1280));
const lang = option("lang", "en");
const out = path.resolve(option("out", `shots/${view}.png`));

const browser = await launch();
const page = await browser.newPage();
await page.evaluateOnNewDocument((lang, theme) => {
  localStorage.setItem("follow-me-lang", lang);
  localStorage.setItem("follow-me-theme", theme);
}, lang, option("theme", "light"));
await page.setViewport({ width, height: 900, isMobile: width < 700, hasTouch: width < 700 });
await page.goto(`${pathToFileURL(path.join(ROOT, "docs", "index.html")).href}#${view}`, { waitUntil: "networkidle0" });

const at = option("at");
if (at) {
  await page.evaluate(id => {
    document.documentElement.style.scrollBehavior = "auto";
    document.getElementById(id).scrollIntoView();
  }, `${lang}-${at}`);
}
const project = option("project");
if (project) {
  await page.evaluate(id => {
    document.querySelector(`#${id} .project-btn`).click();
    document.querySelector(".projector .pieces-btn")?.click();
  }, `${lang}-${project}`);
}
await new Promise(resolve => setTimeout(resolve, 400));

fs.mkdirSync(path.dirname(out), { recursive: true });
await page.screenshot({ path: out, fullPage: flags.includes("--full") });
await browser.close();
console.log(path.relative(ROOT, out));
