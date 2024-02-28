// import { LowSync } from "lowdb";
// import { JSONFileSync } from "lowdb/node";
import { WindowManager } from "./ui/WindowManager";
import { ipcMain, app } from "electron";
import is from "electron-is";
import { database } from "./store/index";

const win_panel = "winPanel";
const control = "control";

export class Application {
  windowManager: WindowManager;
  // configDB: LowSync<any>;

  constructor() {
    this._init();
  }

  _init() {
    this.initWindowManager();
    this.handleIpcMessages();
  }

  initWindowManager() {
    this.windowManager = new WindowManager();
  }

  startApp() {
    this.openWindow(win_panel);
  }

  openWindow(windowName: string) {
    this.windowManager.openWindow(windowName);
  }

  handleIpcMessages() {
    ipcMain.handle("win:get-data-from-database", database.getDataFromDatabase);
    ipcMain.handle("win:close-app", async () => {
      app.quit();
    });
  }
}
