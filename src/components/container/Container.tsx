import { FC, ReactNode, useContext } from "react";
import { IContextValues, SidebarContext } from "../sidebar/context/SidebarContext";
interface Props {
  children: ReactNode;
}
const Container: FC<Props> = ({ children }) => {
  const { isOpenSidebar } = useContext(SidebarContext) as IContextValues;
  return (
    <div
      className="inline-block float-right"
      style={{
        width: `${isOpenSidebar ? "calc(100% - 250px)" : "calc(100% - 90px)"}`,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
