import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "core/index": "src/core/index.ts",
    "graphite/index": "src/graphite/index.ts",
    "newspaper/index": "src/newspaper/index.ts",
    "business/index": "src/business/index.ts",
    "finchly/index": "src/finchly/index.ts",
    "ledger/index": "src/ledger/index.ts",
    "whitefire/index": "src/whitefire/index.ts",
  },
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  treeshake: true,
});
