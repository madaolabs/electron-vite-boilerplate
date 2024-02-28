import is from "electron-is";

export const getResourcePath = () => {
  if (is.dev()) {
    return ""; // 用于服务器寻找资源
  } else {
    return process.resourcesPath; // 用于本地加载资源
  }
};
