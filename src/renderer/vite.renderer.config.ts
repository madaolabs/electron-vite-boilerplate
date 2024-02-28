import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

import { resolve, join } from "node:path";
import react from "@vitejs/plugin-react";
import { DEV_SERVER_PORT } from "../constants";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: DEV_SERVER_PORT,
  },
  root: __dirname,
  plugins: [react(), svgr()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  publicDir: join(__dirname, "./public"),
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "./index.html"),
      },
    },
  },
  resolve: {
    alias: {
      renderer: __dirname,
    },
  },
});
