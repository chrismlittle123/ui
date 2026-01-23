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
          { value: "graphite", title: "Graphite (Linear)" },
          { value: "paper", title: "Paper (Typewriter)" },
          { value: "business", title: "Business (Stripe)" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "graphite",
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "graphite";

      useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
      }, [theme]);

      return (
        <div
          data-theme={theme}
          className="min-h-screen w-full bg-background text-foreground p-8 flex items-center justify-center"
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
