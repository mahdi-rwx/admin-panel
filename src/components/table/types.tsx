import { Dispatch, SetStateAction } from "react";

export type ISort = "DEFAULT" | "DOWN" | "UP";
export interface IColumns {
  key: string;
  title: string | JSX.Element | null;
}
export interface IContextValues {
  currentSort: ISort;
  setCurrentSort: Dispatch<SetStateAction<ISort>>;
  keySort: string;
  setKeySort: Dispatch<SetStateAction<string>>;
  filtedData: Object[];
  setFiltedData: Dispatch<SetStateAction<Object[]>>;
  tableSelected: number[];
  setTableSelected: Dispatch<SetStateAction<number[]>>;
  data:Object[]
}
