import {
  Children,
  cloneElement,
  Dispatch,
  FC,
  Fragment,
  ReactNode,
  SetStateAction,
} from "react";
import CSS from "csstype";

import { BsCheck2 } from "react-icons/bs";
import classNames from "classnames";
interface Props {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
}
interface ICheckbox extends Props {
  children: ReactNode;
}
interface ILabel {
  children: ReactNode;
  setChecked?: Dispatch<SetStateAction<boolean>>;
  className?: string;
}
interface IInputCheckbox {
  size?: "sm" | "md" | "lg";
  className?: string;
  style?: CSS.Properties;
  checked?: boolean;
  setChecked?: Dispatch<SetStateAction<boolean>>;
  onClick?: () => void;
}
const Checkbox: FC<ICheckbox> = ({ children, checked, setChecked }) => {
  const allChildren = Children.map(children, (child: any) => {
    if (child.type !== LabelCheckbox && child.type !== InputCheckbox)
      return null;

    const clone = cloneElement(child, {
      checked,
      setChecked,
    });
    return clone;
  });
  return <Fragment>{allChildren}</Fragment>;
};

export const InputCheckbox = ({
  checked,
  setChecked,
  className,
  size = "sm",
  style,
  onClick,
}: IInputCheckbox) => {
  return (
    <div
      onClick={() => {
        onClick && onClick();
        if (setChecked) setChecked((state) => !state);
      }}
      style={style}
      className={classNames(
        className,
        "rounded-sm cursor-pointer border-gray-300 bg-slate-200 transition-colors relative overflow-hidden flex justify-center items-center",
        {
          "w-4 h-4": size === "sm",
          "w-6 h-6": size === "md",
          "w-8 h-8": size === "lg",
          "bg-green-500": checked,
          "hover:bg-transparent hover:border-slate-700 hover:border-2":
            !checked,
        }
      )}
    >
      {checked && <BsCheck2 color="#fff" />}
    </div>
  );
};
export const LabelCheckbox = ({ setChecked, className, children }: ILabel) => {
  return (
    <label
      className={classNames(className, "select-none cursor-pointer")}
      onClick={() => {
        setChecked && setChecked((state) => !state);
      }}
    >
      {children}
    </label>
  );
};

export default Checkbox;
