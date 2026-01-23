import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@chrislittle/theme-core": path.resolve(
        __dirname,
        "../../packages/themes/core/src"
      ),
    },
  },
});
