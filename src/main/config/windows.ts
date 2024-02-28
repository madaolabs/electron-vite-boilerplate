import is from "electron-is";
import { resolve, join } from "path";

export const windowsOptions = {
  winPanel: {
    attrs: {
      title: "Win Panel",
      height: 700,
      width: 900,
      // titleBarStyle: "hidden",
      trafficLightPosition: { x: 10, y: 10 },
      webPreferences: {
        devTool: is.dev(),
        preload: resolve(__dirname, "win-preload.cjs.js"),
      },
    },
    url: is.dev()
      ? join(MAIN_WINDOW_VITE_DEV_SERVER_URL, "index.html")
      : join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`),
    pageType: "win",
    dev: {
      autoOpenDevTool: false,
    },
  },
};
