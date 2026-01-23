import type { Preview } from "@storybook/react";
import { useEffect } from "react";

// Import base Tailwind and component styles
import "@chrislittle/theme/styles/globals.css";
// Import theme variable overrides (scoped by data-theme attribute)
import "../styles/themes.css";
import "../styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "fullscreen",
  },
  globalTypes: {
    theme: {
      description: "Theme",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          { value: "business", title: "Business (Stripe)" },
          { value: "newspaper", title: "Newspaper (Editorial)" },
        ],
        dynamicTitle: true,
      },
    },
    colorMode: {
      description: "Color mode",
      toolbar: {
        title: "Mode",
        icon: "moon",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "business",
    colorMode: "light",
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "business";
      const colorMode = context.globals.colorMode || "light";

      const isDark = colorMode === "dark";

      useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        if (isDark) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }, [theme, isDark]);

      return (
        <div
          data-theme={theme}
          className={`min-h-screen w-full bg-background text-foreground p-8 flex items-center justify-center ${isDark ? "dark" : ""}`}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
