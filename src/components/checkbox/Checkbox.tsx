import {
  Children,
  cloneElement,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
interface ICheckBox {
  children: ReactNode;
}
interface Props {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
}
interface ILabel {
  children: ReactNode;
  setChecked?: Dispatch<SetStateAction<boolean>>;
  checked?: boolean;
}
const Checkbox = ({ children }: ICheckBox) => {
  const [checked, setChecked] = useState(true);

  const allChildren = Children.map(children, (child: any) => {
    if (child.type !== Label && child.type !== InputCheckbox) {
      return null;
    }
    const clone = cloneElement(child, {
      checked,
      setChecked,
    });
    return clone;
  });
  return allChildren;
};

const InputCheckbox = ({ checked, setChecked }: Props) => {
  const [_checked, _setChecked] = useState<boolean>(!!checked);
  useEffect(() => {
    if (!setChecked) {
      console.warn("single element");
    }
  }, [_checked, checked, setChecked]);
  return (
    <input
      type="checkbox"
      checked={!setChecked ? _checked : checked}
      onChange={(e) => {
        if (setChecked) {
          setChecked(e.target.checked);
        }
        _setChecked(e.target.checked);
      }}
    />
  );
};
const Label = ({ setChecked, children }: ILabel) => {
  if (!setChecked) {
    throw new Error("single element");
  }
  return (
    <label
      style={{ userSelect: "none" }}
      onClick={() => {
        setChecked((state) => !state);
      }}
    >
      {children}
    </label>
  );
};

export default Checkbox;
