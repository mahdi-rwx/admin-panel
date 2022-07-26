import {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsFillDiamondFill,
} from "react-icons/bs";
import Tbody from "./components/Tbody";
import Tfooter from "./components/Tfooter";
import Thead from "./components/Thead";
import TableProvider from "./context/TableContext";
import { IColumns, ISort } from "./types";
interface Props {
  columns: IColumns[];
  data: Object[];
  tableSelected: number[];
  setTableSelected: Dispatch<SetStateAction<number[]>>;
}

const Table: FC<Props> = ({
  columns,
  data,
  tableSelected,
  setTableSelected,
}) => {
  const [currentSort, setCurrentSort] = useState<ISort>("DEFAULT");
  const [filtedData, setFiltedData] = useState([...data]);
  const [keySort, setKeySort] = useState("");

  const sortUp = useCallback(
    (key: string) => {
      const copyData = [...data];
      const sortData = copyData.sort((a: any, b: any) =>
        typeof a[key] === "string" && typeof b[key] === "string"
          ? a[key].localeCompare(b[key])
          : a[key] - b[key]
      );
      setFiltedData(sortData);
    },
    [data]
  );

  const sortDown = useCallback(
    (key: string) => {
      const copyData = [...data];
      const reverseData = copyData.sort((a: any, b: any) =>
        typeof a[key] === "string" && typeof b[key] === "string"
          ? b[key].localeCompare(a[key])
          : b[key] - a[key]
      );
      setFiltedData(reverseData);
    },
    [data]
  );

  const sortDefault = useCallback(() => {
    setFiltedData([...data]);
  }, [data]);

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
    [sortDefault, sortDown, sortUp]
  );

  const handleSort: () => void = useCallback(() => {
    if (currentSort === "DEFAULT") setCurrentSort("DOWN");
    else if (currentSort === "DOWN") setCurrentSort("UP");
    else if (currentSort === "UP") setCurrentSort("DEFAULT");
  }, [currentSort]);

  useEffect(() => {
    sortTypes[currentSort.toLowerCase()].fn(keySort);
  }, [currentSort, keySort, sortTypes]);

  return (
    <TableProvider
      values={{
        currentSort,
        setCurrentSort,
        keySort,
        setKeySort,
        filtedData,
        setFiltedData,
        tableSelected,
        setTableSelected,
        data,
      }}
    >
      <div className="flex flex-col">
        <div className="overflow-x-auto rounded-md bg-slate-300">
          <div className="inline-block min-w-full">
            {/* class py-2 for head table */}
            {/* <Theader /> */}
            <div className="overflow-hidden">
              <table className="min-w-full">
                <Thead
                  columns={columns}
                  handleSort={handleSort}
                  sortTypes={sortTypes}
                />
                <Tbody data={data} />
              </table>
            </div>
            <Tfooter />
          </div>
        </div>
      </div>
    </TableProvider>
  );
};

export default Table;
