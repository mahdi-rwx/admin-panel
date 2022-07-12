import classNames from "classnames";
import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

const ListItems = ({ item }: any) => {
  const [subOpen, setSubOpen] = useState(false);
  return (
    <li
      key={item.id}
      className=" my-3 cursor-pointer mx-1 transition-all"
      onClick={() => setSubOpen((state) => !state)}
    >
      <div className="group flex justify-start items-center hover:bg-slate-700 px-4 py-3 rounded-lg relative">
        <span className="text-slate-400 group-hover:text-white">
          {item.icon}
        </span>
        <span className="ml-3 text-slate-400 group-hover:text-white">
          {item.title}
        </span>
        {item.sub && (
          <span
            className={classNames(
              "text-white absolute right-1 top-1/2 -translate-y-1/2 z-50 transition-all",
              { "rotate-90": subOpen }
            )}
          >
            <AiOutlineRight />
          </span>
        )}
      </div>
      {item.sub && (
        <div
          style={{ height: `${subOpen ? "50px" : "0"}` }}
          className={classNames(
            "sub-list duration-300 min-h-0 transition-all",
            {
              "h-auto visible": subOpen,
              " h-0 invisible": !subOpen,
            }
          )}
        >
          <ul className="mx-3">
            {item.sub.map((i: any) => {
              return (
                <li key={i.id} className=" my-3">
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
