import type { Preview } from "@storybook/react";

// Import the active theme's styles - Vite will resolve @chrislittle/theme based on STORYBOOK_THEME
import "@chrislittle/theme/styles/globals.css";
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
  decorators: [
    (Story) => {
      return (
        <div className="min-h-screen w-full bg-background text-foreground p-8 flex items-center justify-center">
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
