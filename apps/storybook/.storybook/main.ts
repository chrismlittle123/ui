import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import path from "path";

const activeTheme = process.env.STORYBOOK_THEME || "graphite";

const themePathMap: Record<string, string> = {
  graphite: path.resolve(__dirname, "../../../packages/themes/graphite/src"),
  newspaper: path.resolve(__dirname, "../../../packages/themes/newspaper/src"),
  business: path.resolve(__dirname, "../../../packages/themes/business/src"),
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
          "@chrislittle/theme": themePathMap[activeTheme],
          "@chrislittle/theme-core": path.resolve(
            __dirname,
            "../../../packages/themes/core/src"
          ),
          "@chrislittle/ui-primitives": path.resolve(
            __dirname,
            "../../../packages/primitives/src"
          ),
        },
      },
    });
  },
};

export default config;
