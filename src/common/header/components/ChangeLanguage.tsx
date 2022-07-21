import { useEffect } from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import List from "../../../components/list/List";
import Paper from "../../../components/paper/Paper";
import Popover from "../../../components/popover/Popover";
import PopoverContent from "../../../components/popover/PopoverContent";
import PopoverToggle from "../../../components/popover/PopoverToggle";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { set_lang } from "../../../redux/features/multiLang/multiLangSlice";
import { RootState } from "../../../redux/store";
import { setLocal } from "../../../utils/LocalStorage";

const ChangeLanguage = () => {
  // const { storedValue, setValue } = useLocalStorage("lang", "en");
  const { language } = useSelector((state: RootState) => state.language);
  const dispatch = useDispatch();
  useEffect(() => {
    setLocal("lang", language);
  }, [language]);

  const data = [
    {
      id: 1,
      content: <span>English</span>,
      active: language === "en",
      set: () => {
        dispatch(set_lang("en"));
      },
    },
    {
      id: 2,
      content: <span>Persion</span>,
      active: language === "fa",
      set: () => {
        dispatch(set_lang("fa"));
      },
    },
  ];
  return (
    <Popover>
      <PopoverToggle>
        <span className="mx-2 cursor-pointer">
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
