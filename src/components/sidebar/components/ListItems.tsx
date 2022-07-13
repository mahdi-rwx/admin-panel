import classNames from "classnames";
import { useContext, useEffect } from "react";
import { AiOutlineRight } from "react-icons/ai";
import useToggle from "../../../hooks/useToggle";
import { SidebarContext } from "../context/SidebarContext";

const ListItems = ({ item }: any) => {
  const { state: subIsOpen, toggle: setSubOpen, close: subClose } = useToggle();
  const { isOpenSidebar, stateHoverSidebar } = useContext(SidebarContext);
  useEffect(() => {
    if (!isOpenSidebar && !stateHoverSidebar) {
      subClose();
    }
  }, [isOpenSidebar, stateHoverSidebar, subClose]);

  return (
    <li
      key={item.id}
      className=" cursor-pointer mx-1 transition-all block"
      onClick={setSubOpen}
    >
      <div className="group flex justify-start items-center hover:bg-slate-700 px-4 py-3 rounded-lg relative">
        <span
          className={classNames("text-slate-400 group-hover:text-white", {
            "text-2xl ml-2": !isOpenSidebar && !stateHoverSidebar,
          })}
        >
          {item.icon}
        </span>
        <span
          className={classNames(
            "ml-3 text-slate-400 transition-all group-hover:text-white",
            { invisible: !isOpenSidebar && !stateHoverSidebar }
          )}
        >
          {item.title}
        </span>
        {item.sub && (
          <span
            className={classNames(
              "text-white absolute right-1 top-1/2 -translate-y-1/2 z-50 transition-all",
              {
                "rotate-90": subIsOpen,
                invisible: !isOpenSidebar && !stateHoverSidebar,
              }
            )}
          >
            <AiOutlineRight />
          </span>
        )}
      </div>
      {item.sub && (
        <div
          className={classNames("sub-list min-h-0 transition-all", {
            "h-auto visible": subIsOpen,
            "h-0 invisible": !subIsOpen,
          })}
        >
          <ul className="mx-3">
            {item.sub.map((i: any) => {
              return (
                <li key={i.id} className="">
                  <div className="group hover:bg-slate-700 rounded-lg transition-all py-3">
                    <span className="text-slate-400 group-hover:text-white px-3">
                      {i.title}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </li>
  );
};

export default ListItems;
