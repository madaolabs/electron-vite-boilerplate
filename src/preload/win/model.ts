import { ipcRenderer } from "electron";

export async function testIPC() {
  const models = await ipcRenderer.invoke("win:get-data-from-database");
  return models;
}

export async function closeApp() {
  await ipcRenderer.invoke("win:close-app");
}
