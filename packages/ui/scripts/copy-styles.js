import { cpSync, existsSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const themes = [
  "core",
  "graphite",
  "newspaper",
  "business",
  "finchly",
  "ledger",
  "whitefire",
];

for (const theme of themes) {
  const src = join(root, "src", theme, "styles", "globals.css");
  const dest = join(root, "dist", theme, "styles.css");

  if (existsSync(src)) {
    mkdirSync(dirname(dest), { recursive: true });
    cpSync(src, dest);
    console.log(`Copied ${theme}/styles.css`);
  } else {
    console.warn(`No styles found for ${theme}`);
  }
}
