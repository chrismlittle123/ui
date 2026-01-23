import { chromium } from "@playwright/test";
import path from "path";
import fs from "fs";

const STORYBOOK_URL = "http://localhost:6010";
const SCREENSHOTS_DIR = path.join(__dirname, "../screenshots");

const themes = [
  { name: "graphite", colorModes: ["dark"] }, // Graphite is always dark
  { name: "newspaper", colorModes: ["light", "dark"] },
  { name: "business", colorModes: ["light", "dark"] },
];

const stories = [
  { path: "showcase-color-palette--default", name: "ColorPalette" },
  { path: "showcase-blog-post--default", name: "BlogPost" },
];

async function takeScreenshots() {
  // Create screenshots directory
  if (!fs.existsSync(SCREENSHOTS_DIR)) {
    fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
  }

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1200, height: 1600 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  console.log("Taking theme screenshots...\n");

  for (const story of stories) {
    for (const theme of themes) {
      for (const colorMode of theme.colorModes) {
        const url = `${STORYBOOK_URL}/iframe.html?id=${story.path}&globals=theme:${theme.name};colorMode:${colorMode}`;
        const filename = `${story.name}-${theme.name}-${colorMode}.png`;
        const filepath = path.join(SCREENSHOTS_DIR, filename);

        console.log(`📸 ${filename}`);
        await page.goto(url);

        // Wait for styles to load and render
        await page.waitForTimeout(1000);

        // Take screenshot of viewport
        await page.screenshot({
          path: filepath,
        });
      }
    }
  }

  await browser.close();

  console.log(`\n✅ Screenshots saved to: ${SCREENSHOTS_DIR}`);
  console.log("\nFiles:");
  const files = fs.readdirSync(SCREENSHOTS_DIR);
  files.forEach(f => console.log(`  - ${f}`));
}

takeScreenshots().catch(console.error);
