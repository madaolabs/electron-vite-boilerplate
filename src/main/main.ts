import { app } from "electron";
import { Application } from "./Application";

class Entry {
  application;
  constructor() {
    this.application = new Application();
  }

  start() {
    this.application.startApp();
  }
}

app.on("ready", () => {
  new Entry().start();
});
