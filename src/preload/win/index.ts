import { contextBridge } from "electron";
import * as model from "./model";

contextBridge.exposeInMainWorld("toMainProcess", {
  ...model,
});
