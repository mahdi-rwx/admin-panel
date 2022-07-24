import { useEffect, useMemo, useRef, useState } from "react";
import {
  BsChevronLeft,
  BsChevronRight,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsFillDiamondFill,
  BsGripVertical,
} from "react-icons/bs";
import Combobox from "../../components/combobox/Combobox";
import ComboboxList from "../../components/combobox/components/ComboboxList";
import ComboboxToggle from "../../components/combobox/components/ComboboxToggle";
import Container from "../../components/container/Container";
import Paper from "../../components/paper/Paper";
import { userData } from "../../data/user";
import useScrollPosition from "../../hooks/useScrollPosition";
type Sort = "DEFAULT" | "DOWN" | "UP";
const Main = () => {
  const [currentSort, setCurrentSort] = useState<Sort>("DEFAULT");
  const [filtedData, setFiltedData] = useState([...userData]);
  const [keySort, setKeySort] = useState("");

  const columns = [
    {
      key: "__check__",
      title: <input type="checkbox" />,
    },
    {
      key: "phone",
      title: "phone",
    },
    {
      key: "chance",
      title: "chance",
    },
    {
      key: "maxScore",
      title: "maxScore",
    },
    {
      key: "createAt",
      title: "createAt",
    },
  ];

  const sortUp = (key: string) => {
    const copyData = [...userData];
    const sortData = copyData.sort((a: any, b: any) =>
      typeof a[key] === "string" && typeof b[key] === "string"
        ? a[key].localeCompare(b[key])
        : a[key] - b[key]
    );
    setFiltedData(sortData);
  };

  const sortDown = (key: string) => {
    const copyData = [...userData];
    const reverseData = copyData.sort((a: any, b: any) =>
      typeof a[key] === "string" && typeof b[key] === "string"
        ? b[key].localeCompare(a[key])
        : b[key] - a[key]
    );
    setFiltedData(reverseData);
  };
  const sortDefault = () => {
    setFiltedData([...userData]);
  };

  const sortTypes: any = useMemo(
    () => ({
      up: {
        icon: <BsFillCaretUpFill />,
        fn: (key: string) => sortUp(key),
      },
      down: {
        icon: <BsFillCaretDownFill />,
        fn: (key: string) => sortDown(key),
      },
      default: {
        icon: <BsFillDiamondFill />,
        fn: () => sortDefault(),
      },
    }),
    []
  );
  const handleSort = () => {
    if (currentSort === "DEFAULT") setCurrentSort("DOWN");
    else if (currentSort === "DOWN") setCurrentSort("UP");
    else if (currentSort === "UP") setCurrentSort("DEFAULT");
  };

  useEffect(() => {
    sortTypes[currentSort.toLowerCase()].fn(keySort);
  }, [currentSort, keySort, sortTypes]);
  const {x,y} = useScrollPosition(100,0.5)
  console.log(y)
  return (
    <Container>
      <h1>main</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto rounded-md bg-slate-300">
          <div className="inline-block min-w-full">
            {" "}
            {/* class py-2 for head table */}
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b bg-light-100 select-none">
                  <tr>
                    {columns &&
                      columns.length > 0 &&
                      columns.map((c: any) => {
                        if (c.key === "__check__") {
                          return (
                            <th
                              key={c.key}
                              scope="col"
                              className="w-10 px-6 py-4"
                            >
                              {c.title}
                            </th>
                          );
                        }
                        return (
                          <th
                            key={c.key}
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left group"
                          >
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                <span>{c.title}</span>
                                <span
                                  className="mx-3 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                                  onClick={() => {
                                    handleSort();
                                    setKeySort(c.key);
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
                  </tr>
                </thead>
                <tbody>
                  {userData &&
                    filtedData.length > 0 &&
                    filtedData.map((i: any) => {
                      return (
                        <tr
                          className="border-b border-b-slate-50 bg-slate-200"
                          key={i.id}
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <input type="checkbox" />
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {i.phone}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {i.chance}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {i.maxScore}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {i.createAt}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
            <div className="footer-table p-4 flex justify-between items-center">
              <div></div>
              <div className="toolbar-footer-table flex items-center">
                <p>Row Per Page : </p>
                <Combobox>
                  <ComboboxToggle>
                  <div className="mr-5 ml-2">10</div>
                  </ComboboxToggle>
                  <ComboboxList>
                    <Paper className={`absolute top-${y} left-0 z-50`} >
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
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Main;
