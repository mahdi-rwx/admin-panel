import { useContext } from "react";
import {
  AiOutlineFontSize,
  AiOutlineGlobal,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsArrowsFullscreen, BsFillMoonStarsFill } from "react-icons/bs";
import { SidebarContext } from "../../components/sidebar/context/SidebarContext";

const Header = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <header className="w-100 flex justify-between items-center sticky left-0 top-0 bg-transparent p-4">
      <div className="search-box cursor-pointer">
        <div className="flex p-2 justify-center items-center">
          <span className="mr-4 md:hidden" onClick={toggleSidebar}>
            <AiOutlineMenu size={"1.2rem"} color={"#626477"} />
          </span>
          <span>
            <AiOutlineSearch size={"1.3rem"} color="#626477" />
          </span>
          <span className="ml-4 text-slate-400 hidden md:block">
            Search (Ctril + /)
          </span>
        </div>
      </div>
      <div className="actions-box md:mr-8">
        <div className="flex justify-center items-center">
          <span className="mx-2 cursor-pointer">
            <AiOutlineGlobal size={"1.4rem"} color={"#626477"} />
          </span>
          <span className="mx-2 cursor-pointer">
            <BsFillMoonStarsFill size={"1.2rem"} color={"#626477"} />
            {/* BsFillSunFill */}
          </span>{" "}
          <span className="mx-2 cursor-pointer">
            <BsArrowsFullscreen size={"1.2rem"} color={"#626477"} />
            {/* BsFullscreenExit */}
          </span>{" "}
          <span className="mx-2 cursor-pointer">
            <AiOutlineFontSize size={"1.4rem"} color={"#626477"} />
          </span>
          <span className="mx-2 cursor-pointer">
            <div className="rounded-full w-10 h-10 flex justify-center items-center bg-gray-400">
              M
            </div>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
