import { BrowserWindow } from "electron";
import is from "electron-is";
import * as pkg from "../config/windows";
import { logger } from "../utils/logger";

const { windowsOptions } = pkg;

export class WindowManager {
  windows;
  windowIds;

  constructor() {
    this.windows = {
      win: null,
    };
    this.windowIds = {
      win: -1,
    };
  }
  openWindow = (windowName) => {
    const pageOptions = windowsOptions[windowName];
    const pageType = pageOptions.pageType;
    if (this.windows[pageType] !== null) {
      // return new Error(`${pageType} window opened again before set to null`);
      // this.windows[pageType].show();
      return this.windows[pageType];
    }
    const window = new BrowserWindow(pageOptions.attrs);
    is.macOS() && window.setWindowButtonVisibility(false);
    logger.info(
      `[Electron Display] new window created, windowName: ${windowName}, ID: ${window.webContents.id}`
    );
    // 此标识主要用于展示器判断自身类型
    // window.windowName = windowName;
    this.windows[pageType] = window;
    this.windowIds[pageType] = window.webContents.id;
    if (is.dev()) {
      window.loadURL(pageOptions.url);
    } else {
      window.loadFile(pageOptions.url);
    }

    return this.windows[pageType];
  };
}
