import type { Preview } from "@storybook/react";
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
      name: "Theme",
      description: "Select component theme",
      defaultValue: "graphite",
      toolbar: {
        icon: "paintbrush",
        items: [
          { value: "graphite", title: "Graphite (Linear)" },
          { value: "paper", title: "Paper (Tldraw)" },
          { value: "business", title: "Business (Stripe)" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "graphite";
      return (
        <div
          data-theme={theme}
          className={`theme-${theme} min-h-screen w-full bg-background text-foreground p-8 flex items-center justify-center`}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
