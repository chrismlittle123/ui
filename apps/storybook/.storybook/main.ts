import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import path from "path";

const activeTheme = process.env.STORYBOOK_THEME || "graphite";

const themePathMap: Record<string, string> = {
  graphite: path.resolve(__dirname, "../../../packages/ui/src/graphite"),
  newspaper: path.resolve(__dirname, "../../../packages/ui/src/newspaper"),
  business: path.resolve(__dirname, "../../../packages/ui/src/business"),
  finchly: path.resolve(__dirname, "../../../packages/ui/src/finchly"),
  ledger: path.resolve(__dirname, "../../../packages/ui/src/ledger"),
  whitefire: path.resolve(__dirname, "../../../packages/ui/src/whitefire"),
};

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@chrislittle/theme-finchly": path.resolve(
            __dirname,
            "../../../packages/ui/src/finchly"
          ),
          "@chrislittle/theme": themePathMap[activeTheme],
          "@chrislittle/theme-core": path.resolve(
            __dirname,
            "../../../packages/ui/src/core"
          ),
        },
      },
    });
  },
};

export default config;
