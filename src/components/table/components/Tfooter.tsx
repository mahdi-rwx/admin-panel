import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Combobox from "../../combobox/Combobox";
import ComboboxList from "../../combobox/components/ComboboxList";
import ComboboxToggle from "../../combobox/components/ComboboxToggle";
import Paper from "../../paper/Paper";

const Tfooter = () => {
  return (
    <div className="footer-table p-4 flex justify-between items-center">
      <div></div>
      <div className="toolbar-footer-table flex items-center">
        <p>Row Per Page : </p>
        <Combobox>
          <ComboboxToggle>
            <div className="mr-5 ml-2">10</div>
          </ComboboxToggle>
          <ComboboxList>
            <Paper className={`absolute top-${0} left-0 z-50`}>
              <ul className="">
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </Paper>
          </ComboboxList>
        </Combobox>

        <p>1-10 of 50</p>
        <div className="flex items-center mx-4">
          <span className="mx-2 cursor-pointer">
            <BsChevronLeft />
          </span>
          <span className="mx-2 cursor-pointer">
            <BsChevronRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tfooter;
