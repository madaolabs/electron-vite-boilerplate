import { create } from "zustand";
import { IControlStore } from "../typings/store";

export const useControlStore = create<IControlStore>((set) => ({
  activeTool: "defaultValue",
  setActiveTool: (activeTool: string) => {
    set({ activeTool });
  },
}));
