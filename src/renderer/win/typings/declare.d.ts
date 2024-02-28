

export {};

declare global {
  interface Window {
    toMainProcess: {
      testIPC: () => Promise<IModel[]>;
      closeApp: () => Promise<void>;
    };
  }
}
