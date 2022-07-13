import { useContext, useRef } from "react";
import { sidebarData } from "../../data/sidebar";
import HeadSidebar from "./components/HeadSidebar";
import ListItems from "./components/ListItems";
import { SidebarContext } from "./context/SidebarContext";
import "./assets/sidebar.scss";
import classNames from "classnames";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Portal from "../../utils/Portal";
import useClickOutSide from "../../hooks/useClickOutSide";
const Sidebar = () => {
  const { width } = useWindowDimensions();
  const {
    isOpenSidebar,
    stateHoverSidebar,
    openHoverSidebar,
    closeHoverSidebar,
    closeSidebar,
  } = useContext(SidebarContext);
  const refSidebarTest = useRef(null);
  useClickOutSide(refSidebarTest, closeSidebar);
  const statusSidebar = () => {
    if (!isOpenSidebar && stateHoverSidebar) {
      return "250px";
    } else if (!isOpenSidebar && !stateHoverSidebar) {
      return "80px";
    } else if (isOpenSidebar) {
      return "250px";
    } else if (!isOpenSidebar) {
      return "80px";
    }
  };
  return width > 768 ? (
    <div
      className="sidebar h-screen overflow-y-auto overflow-x-hidden inline-block bg-slate-800 fixed z-50 transition-all select-none"
      style={{ width: `${statusSidebar()}` }}
      onMouseOver={openHoverSidebar}
      onMouseLeave={closeHoverSidebar}
    >
      <HeadSidebar />
      <div className="list">
        {sidebarData.map((c) => {
          return (
            <div key={c.id} className="my-5">
              <div className="relative">
                <span
                  className={classNames(
                    "text-sm text-gray-400 px-5 ml-2 transition-all",
                    { invisible: !isOpenSidebar && !stateHoverSidebar }
                  )}
                >
                  {c.category}
                </span>
                <span
                  className={classNames(
                    "absolute w-4 h-0.5 bg-slate-700 left-0 top-1/2",
                    {
                      "w-8 left-1/2 -translate-x-1/2":
                        !isOpenSidebar && !stateHoverSidebar,
                    }
                  )}
                />
              </div>
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
  ) : (
    <Portal>
      {isOpenSidebar && (
        <div className="fixed w-full h-screen bg-black/30 -z-10 backdrop-blur-3xl" />
      )}
      <div
        ref={refSidebarTest}
        className={classNames(
          "sidebar h-screen overflow-y-auto overflow-x-hidden inline-block bg-slate-800 fixed z-50 transition-all select-none w-64",
          { "left-0": isOpenSidebar, "-left-full": !isOpenSidebar }
        )}
      >
        <HeadSidebar />
        <div className="list">
          {sidebarData.map((c) => {
            return (
              <div key={c.id} className="my-5">
                <div className="relative">
                  <span
                    className={classNames(
                      "text-sm text-gray-400 px-5 ml-2 transition-all"
                    )}
                  >
                    {c.category}
                  </span>
                  <span
                    className={classNames(
                      "absolute w-4 h-0.5 bg-slate-700 left-0 top-1/2"
                    )}
                  />
                </div>
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
    </Portal>
  );
};

export default Sidebar;
