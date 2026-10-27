// Shared Chrome launcher. Set CHROME_PATH if Chrome or Chromium lives somewhere else.
import puppeteer from "puppeteer-core";
import fs from "node:fs";

const CANDIDATES = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome", "/usr/bin/google-chrome-stable", "/usr/bin/chromium", "/usr/bin/chromium-browser",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
];

export function launch() {
  const executablePath = CANDIDATES.find(p => p && fs.existsSync(p));
  if (!executablePath) throw new Error("Chrome not found: set CHROME_PATH to your Chrome or Chromium executable");
  return puppeteer.launch({ executablePath, headless: true });
}
