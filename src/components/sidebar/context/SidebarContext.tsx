import { createContext, ReactNode } from "react";
interface IContextValues {
  isOpen: boolean;
  toggle: () => void;
}
interface Props {
  values: IContextValues;
  children: ReactNode;
}
const vd = () => {}
export const SidebarContext = createContext({isOpen:false,toggle:vd} as IContextValues);

export const SidebarProvider = ({ values, children }: Props) => {
  return (
    <SidebarContext.Provider value={values}>{children}</SidebarContext.Provider>
  );
};
