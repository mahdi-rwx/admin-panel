import { useContext } from "react";
import { sidebarData } from "../../data/sidebar";
import HeadSidebar from "./components/HeadSidebar";
import ListItems from "./components/ListItems";
import { SidebarContext } from "./context/SidebarContext";
import "./assets/sidebar.scss";
const Sidebar = () => {
  const { isOpenSidebar } = useContext(SidebarContext);
  return (
    <div
      className="sidebar h-screen overflow-y-auto overflow-x-hidden inline-block bg-slate-800 fixed z-50 transition-all select-none"
      style={{ width: `${isOpenSidebar ? "250px" : "90px"}` }}
    >
      <HeadSidebar />
      <div className="list">
        {sidebarData.map((c) => {
          return (
            <div key={c.id} className="my-5">
              <span className="text-sm text-gray-400 px-5">{c.category}</span>
              <ul>
                {c.items.map((i) => {
                  return <ListItems item={i} key={i.id} />;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
