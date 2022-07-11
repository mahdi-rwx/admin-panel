import { sidebarData } from "../../data/sidebar";
import useToggle from "../../hooks/useToggle";
import HeadSidebar from "./components/HeadSidebar";
import ListItems from "./components/ListItems";
import { SidebarProvider } from "./context/SidebarContext";

const Sidebar = () => {
  const { state: isOpen, toggle } = useToggle();
  return (
    <SidebarProvider values={{ isOpen, toggle }}>
      <div
        className="sidebar h-screen overflow-y-auto overflow-x-hidden inline-block bg-slate-800 fixed z-50 transition-all"
        style={{ width: `${isOpen ? '250px' : '90px'}` }}
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
    </SidebarProvider>
  );
};

export default Sidebar;
