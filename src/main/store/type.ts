export interface IModel {
  id: string;
  name: string;
  path: string;
}

export interface IAnimation {
  name: string;
  path: string;
}

export interface IDatabase {
  models: Array<IModel>;
  animations: Array<IAnimation>;
}
