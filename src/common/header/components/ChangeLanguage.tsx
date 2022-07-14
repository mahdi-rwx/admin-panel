import { useMemo } from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import List from "../../../components/list/List";
import Paper from "../../../components/paper/Paper";
import Popover from "../../../components/popover/Popover";
import PopoverContent from "../../../components/popover/PopoverContent";
import PopoverToggle from "../../../components/popover/PopoverToggle";

const ChangeLanguage = () => {
  const data = useMemo(
    () => [
      {
        id: 1,
        content: <span>English</span>,
        active: true,
      },
      {
        id: 2,
        content: <span>Persion</span>,
      },
    ],
    []
  );
  return (
    <Popover>
      <PopoverToggle>
        <span
          className="mx-2 cursor-pointer"
          onClick={() => console.log("change language")}
        >
          <AiOutlineGlobal size={"1.4rem"} color={"#626477"} />
        </span>
      </PopoverToggle>
      <PopoverContent>
        <Paper className="absolute left-1/2 top-full -translate-x-1/2 w-28">
          <List data={data} hover={true} />
        </Paper>
      </PopoverContent>
    </Popover>
  );
};

export default ChangeLanguage;
