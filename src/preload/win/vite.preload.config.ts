import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./index.ts"),
      name: "main",
      formats: ["cjs"],
      fileName: (format) => `win-preload.${format}.js`,
    },
  },
});
