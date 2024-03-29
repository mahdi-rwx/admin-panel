import { FC, useContext, useEffect, useState } from "react";
import { AiOutlineLine } from "react-icons/ai";
import { BsGripVertical } from "react-icons/bs";
import { InputCheckbox } from "../../checkbox/Checkbox";
import { TableContext } from "../context/TableContext";
import { IActions, IColumns } from "../types";
interface Props {
  columns: IColumns[];
  handleSort: () => void;
  sortTypes: any;
}
const Thead: FC<Props> = ({ columns, handleSort, sortTypes }) => {
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const {
    currentSort,
    setKeySort,
    data,
    setTableSelected,
    tableSelected,
    checkbox,
    actions,
  } = useContext(TableContext);

  useEffect(() => {
    if (data && data.length > 0) {
      if (selectAll) {
        const ids = data.map((i: any) => i?.id);
        setTableSelected([...ids]);
      } else {
        setTableSelected([]);
      }
    }
  }, [data, selectAll, setTableSelected]);

  return (
    <thead className="border-b bg-slate-500 select-none">
      <tr>
        {checkbox && (
          <th scope="col" className="w-10 px-6 py-4">
            {tableSelected.length !== data.length ? (
              <InputCheckbox
                checked={selectAll}
                setChecked={setSelectAll}
                component={<AiOutlineLine color="#fff" />}
              />
            ) : (
              <InputCheckbox checked={selectAll} setChecked={setSelectAll} />
            )}
          </th>
        )}
        {columns &&
          columns.length > 0 &&
          columns.map((c: any) => {
            return (
              <th
                key={c.key}
                scope="col"
                className="text-sm font-medium text-gray-900 pl-6 py-4 text-left group"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span>{c.title}</span>
                    <span
                      className="mx-3 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => {
                        handleSort();
                        setKeySort(c?.key);
                      }}
                    >
                      {sortTypes[currentSort.toLowerCase()].icon}
                    </span>
                  </div>
                  <div>
                    <span className="cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                      <BsGripVertical />
                    </span>
                  </div>
                </div>
              </th>
            );
          })}
        {actions &&
          actions.length > 0 &&
          actions.map((a: IActions, index) => {
            return (
              <th
                key={index}
                scope="col"
                className="text-sm font-medium text-gray-900 pl-6 py-4 text-left group"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span>{a.title}</span>
                  </div>
                  <div>
                    <span className="cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                      <BsGripVertical />
                    </span>
                  </div>
                </div>
              </th>
            );
          })}
      </tr>
    </thead>
  );
};

export default Thead;
