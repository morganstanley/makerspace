// Opens every view of docs/index.html in both languages at desktop, tablet and phone widths and
// reports layout problems: inline text split into grid or flex cells, elements wider than the
// screen, and clipped text. Prints "No layout problems found." when everything is fine.
//
// Usage: npm run audit
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { launch } from "./chrome.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PAGE = pathToFileURL(path.join(ROOT, "docs", "index.html")).href;
const VIEWS = ["start", "lesson1", "lesson2", "lesson3", "lesson4", "help"];
const WIDTHS = [1280, 820, 390];

// Runs inside the page. On a phone the browser widens the layout to fit overflowing content,
// so the real screen width is passed in rather than read from the page.
function findProblems(screenWidth) {
  const problems = new Set();
  const describe = el => el.tagName.toLowerCase() + [...el.classList].map(c => "." + c).join("");
  const inlineTags = new Set(["A", "B", "CODE", "EM", "I", "KBD", "SMALL", "SPAN", "STRONG"]);
  // Elements that scroll sideways on purpose.
  const scrollers = ".zones, .trouble, .blocks-canvas, .nav ul, .progress ol";
  for (const el of document.querySelectorAll("body *")) {
    const style = getComputedStyle(el);
    if (!el.offsetParent && style.position !== "fixed") continue;
    // A phase label is a flex row of its name and its duration on purpose.
    if (/grid|flex/.test(style.display) && !el.matches(".phase-label")) {
      const hasText = [...el.childNodes].some(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim());
      const hasInline = [...el.children].some(c => inlineTags.has(c.tagName));
      if (hasText && hasInline) problems.add(`inline text split into cells: ${describe(el)} "${el.textContent.trim().slice(0, 50)}"`);
    }
    if (el.getBoundingClientRect().right > screenWidth + 1 && !el.closest(scrollers)) {
      problems.add(`wider than the screen: ${describe(el)}`);
    }
    const clips = style.overflow === "hidden" || style.textOverflow === "ellipsis";
    if (clips && el.scrollWidth > el.clientWidth + 1 && !el.closest(".timeline")) {
      problems.add(`clipped text: ${describe(el)} "${el.textContent.trim().slice(0, 40)}"`);
    }
  }
  return [...problems];
}

const browser = await launch();
const page = await browser.newPage();
let total = 0;
for (const lang of ["en", "fr"]) {
  await page.evaluateOnNewDocument(l => localStorage.setItem("follow-me-lang", l), lang);
  for (const width of WIDTHS) {
    // Narrow widths emulate a real phone, so a missing viewport tag would show up here.
    await page.setViewport({ width, height: 900, isMobile: width < 700, hasTouch: width < 700 });
    for (const view of VIEWS) {
      await page.goto(`${PAGE}#${view}`, { waitUntil: "load" });
      const problems = await page.evaluate(findProblems, width);
      total += problems.length;
      if (problems.length) console.log(`\n${lang} · ${width}px · #${view}\n  ${problems.join("\n  ")}`);
    }
  }
}
await browser.close();
console.log(total ? `\n${total} layout problem(s) found.` : "No layout problems found.");
process.exitCode = total ? 1 : 0;
