import { LowSync } from "lowdb";
import { JSONFileSync } from "lowdb/node";
import { APP_DATABASE_PATH } from "../config/paths";
import { BrowserWindow, dialog } from "electron";
import path from "path";
import { IDatabase } from "./type";
import { defaultDatabase } from "./defaultDatabase";

const db = new LowSync<IDatabase>(
  new JSONFileSync(APP_DATABASE_PATH),
  defaultDatabase
);

export async function addDataToDatabase(browserWindow: BrowserWindow) {
  const dialogResult = dialog.showOpenDialogSync(browserWindow, {
    properties: ["openFile"],
  });
  if (dialogResult) {
    const { name } = path.parse(dialogResult[0]);
    db.update((data) => {
      data.models.push({
        id: dialogResult[0],
        name,
        path: new URL(`file://${dialogResult[0]}`).toString(),
      });
    });
  }
  return db.data.models;
}

export async function getDataFromDatabase() {
  return db.data.models;
}
