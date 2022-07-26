import { createContext, ReactNode } from "react";
import { IContextValues } from "../types";

interface Props {
  children: ReactNode;
  values: IContextValues;
}
const vd = () => {};
export const TableContext = createContext({
  currentSort: "DEFAULT",
  setCurrentSort: vd,
  keySort: "",
  setKeySort: vd,
  filtedData: [],
  setFiltedData: vd,
  tableSelected: [],
  setTableSelected: vd,
  data:[]
} as IContextValues);

const TableProvider = ({ values, children }: Props) => {
  return (
    <TableContext.Provider value={values}>{children}</TableContext.Provider>
  );
};
export default TableProvider;
