import { FC, useCallback, useContext } from "react";
import { InputCheckbox } from "../../checkbox/Checkbox";
import { TableContext } from "../context/TableContext";

interface Props {
  data: Object[];
}
const Tbody: FC<Props> = ({ data }) => {
  const { filtedData, setTableSelected, tableSelected } =
    useContext(TableContext);

  const handleIsChecked = useCallback(
    (id: number): boolean => {
      if (tableSelected.some((i) => i === id)) return true;
      return false;
    },
    [tableSelected]
  );

  const handleSelectItem = useCallback(
    (id: number) => {
      if (tableSelected.some((i) => i === id)) {
        let copyDataSelectData = [...tableSelected];
        copyDataSelectData = copyDataSelectData.filter((i: any) => i !== id);
        setTableSelected([...copyDataSelectData]);
      } else {
        let copyDataSelectData = [...tableSelected];
        copyDataSelectData.push(id);
        setTableSelected([...copyDataSelectData]);
      }
    },
    [setTableSelected, tableSelected]
  );
  return (
    <tbody>
      {data &&
        filtedData.length > 0 &&
        filtedData.map((i: any) => {
          return (
            <tr
              className="border-b border-b-slate-50 bg-slate-100 hover:bg-slate-300 transition-colors"
              key={i.id}
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <InputCheckbox
                  checked={handleIsChecked(i.id)}
                  onClick={() => handleSelectItem(i.id)}
                />
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
  );
};

export default Tbody;
