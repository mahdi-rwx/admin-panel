import { Fragment, memo } from "react";
import { AiOutlineFontSize } from "react-icons/ai";
import { BsArrowsFullscreen, BsFillMoonStarsFill } from "react-icons/bs";
import ChangeLanguage from "./ChangeLanguage";

const Mode = memo(() => {
  return (
    <span className="mx-2 cursor-pointer" onClick={() => console.log("mode")}>
      <BsFillMoonStarsFill size={"1.4rem"} color={"#626477"} />
    </span>
  );
});
const Screen = memo(() => {
  return (
    <span className="mx-2 cursor-pointer" onClick={() => console.log("screen")}>
      <BsArrowsFullscreen size={"1.4rem"} color={"#626477"} />
    </span>
  );
});
const FontSize = memo(() => {
  return (
    <span
      className="mx-2 cursor-pointer"
      onClick={() => console.log("font size")}
    >
      <AiOutlineFontSize size={"1.4rem"} color={"#626477"} />
    </span>
  );
});
const Profile = memo(() => {
  return (
    <span
      className="mx-2 cursor-pointer"
      onClick={() => console.log("profile")}
    >
      <div className="rounded-full w-10 h-10 flex justify-center items-center bg-gray-400">
        M
      </div>
    </span>
  );
});
const Actions = () => {
  const actions = {
    actions: [
      {
        id: 1,
        name: "CHANGE_LANGUAGE",
        content: <ChangeLanguage />,
      },
      {
        id: 2,
        name: "MODE",
        content: <Mode />,
      },
      {
        id: 3,
        name: "SCREEN",
        content: <Screen />,
      },
      {
        id: 4,
        name: "FONT_SIZE",
        content: <FontSize />,
      },
      {
        id: 5,
        name: "PRODILE",
        content: <Profile />,
      },
    ],
  };
  return (
    <div className="actions-box md:mr-8">
      <div className="flex justify-center items-center">
        {actions.actions.map((action) => {
          return <Fragment key={action.id}>{action.content}</Fragment>;
        })}
      </div>
    </div>
  );
};

export default Actions;
