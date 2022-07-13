import { AiOutlineFontSize, AiOutlineGlobal } from "react-icons/ai";
import { BsArrowsFullscreen, BsFillMoonStarsFill } from "react-icons/bs";

const Actions = () => {
  const actions = [
    {
      id: 1,
      name: "CHANGE_LANGUAGE",
      content: <AiOutlineGlobal size={"1.4rem"} color={"#626477"} />,
      event: () => {
        console.log(this);
      },
    },
    {
      id: 2,
      name: "MODE",
      content: <BsFillMoonStarsFill size={"1.4rem"} color={"#626477"} />,
      event: () => {
        console.log("MODE");
      },
    },
    {
      id: 3,
      name: "SCREEN",
      content: <BsArrowsFullscreen size={"1.4rem"} color={"#626477"} />,
      event: () => {
        console.log("screen");
      },
    },
    {
      id: 4,
      name: "FONT_SIZE",
      content: <AiOutlineFontSize size={"1.4rem"} color={"#626477"} />,
      event: () => {
        console.log("FONT SIZE");
      },
    },
    {
      id: 5,
      name: "PRODILE",
      content: (
        <div className="rounded-full w-10 h-10 flex justify-center items-center bg-gray-400">
          M
        </div>
      ),
      event: () => {
        console.log("profile");
      },
    },
  ];
  return (
    <div className="actions-box md:mr-8">
      <div className="flex justify-center items-center">
        {actions.map((action) => {
          return (
            <span
              key={action.id}
              className="mx-2 cursor-pointer"
              onClick={() => action.event()}
            >
              {action.content}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Actions;
{
  /* <span className="mx-2 cursor-pointer">
<AiOutlineGlobal size={"1.4rem"} color={"#626477"} />
</span>
<span className="mx-2 cursor-pointer">
<BsFillMoonStarsFill size={"1.2rem"} color={"#626477"} />
BsFillSunFill
</span>
<span className="mx-2 cursor-pointer">
<BsArrowsFullscreen size={"1.2rem"} color={"#626477"} />
BsFullscreenExit
</span>
<span className="mx-2 cursor-pointer">
<AiOutlineFontSize size={"1.4rem"} color={"#626477"} />
</span>
<span className="mx-2 cursor-pointer">
<div className="rounded-full w-10 h-10 flex justify-center items-center bg-gray-400">
  M
</div>
</span> */
}
