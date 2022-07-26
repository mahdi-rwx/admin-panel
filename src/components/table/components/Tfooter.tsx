import { useContext, useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Combobox from "../../combobox/Combobox";
import ComboboxList from "../../combobox/components/ComboboxList";
import ComboboxToggle from "../../combobox/components/ComboboxToggle";
import Paper from "../../paper/Paper";
import { TableContext } from "../context/TableContext";

const Tfooter = () => {
  const {
    data,
    tableSelected,
    nextPage,
    prevPage,
    setShowItemsPage,
    showItemsPage,
  } = useContext(TableContext);

  return (
    <div className="footer-table p-4 flex justify-between items-center">
      <div>
        {tableSelected.length > 0 && <p>{tableSelected.length} Row Selected</p>}
      </div>
      <div className="toolbar-footer-table flex items-center">
        <p>Row Per Page : </p>
        <Combobox>
          <ComboboxToggle>
            <div className="mr-5 ml-2">{showItemsPage}</div>
          </ComboboxToggle>
          <ComboboxList>
            <Paper className={`absolute top-${0} left-0 z-50`}>
              <ul className="">
                <li onClick={() => setShowItemsPage(10)}>10</li>
                <li onClick={() => setShowItemsPage(25)}>25</li>
                <li onClick={() => setShowItemsPage(50)}>50</li>
              </ul>
            </Paper>
          </ComboboxList>
        </Combobox>

        <p>1-1 of {data?.length}</p>
        <div className="flex items-center mx-4">
          <span className="mx-2 cursor-pointer" onClick={prevPage}>
            <BsChevronLeft />
          </span>
          <span className="mx-2 cursor-pointer" onClick={nextPage}>
            <BsChevronRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tfooter;
