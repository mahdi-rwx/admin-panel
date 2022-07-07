import { AiOutlineRight } from "react-icons/ai";
import { sidebarData } from "../../data/sidebar";
import HeadSidebar from "./components/HeadSidebar";
import ListItems from "./components/ListItems";

const Sidebar = () => {
  return (
    <div className="sidebar w-1/6 h-screen overflow-auto inline-block bg-slate-800">
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
