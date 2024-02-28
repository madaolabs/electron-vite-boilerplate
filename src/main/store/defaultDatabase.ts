import { getRandom } from "../utils/random";
import { getResourcePath } from "../utils/resourcePath";
import { IDatabase } from "./type";

// 下面的 path 字段不能用 node 的 path.join，不同操作系统拼接出来的路径不一致
export const defaultDatabase: IDatabase = {
  models: [
    {
      id: getRandom(),
      name: "Model Name",
      path: `${getResourcePath()}/path`,
    },
  ],
  animations: [
    {
      name: "Animation Name",
      path: `${getResourcePath()}/resource/animations/stand.vmd`,
    },
  ],
};
