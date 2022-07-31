import React, { Children, FC, ReactNode } from "react";
import CSS from "csstype";
import classNames from "classnames";
interface Props {
  open: boolean;
  IsClose: () => void;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  style?: CSS.Properties;
  className?: string;
  children: ReactNode;
}
interface IHead {
  style?: CSS.Properties;
  className?: string;
  children: ReactNode;
}
const sizes = {
  xs: "444px",
  sm: "600px",
  md: "900px",
  lg: "1200px",
  xl: "1560px",
};
const getChildrenOnDisplayName = (children: any, displayName: string) => {
  Children.map(children, (child): any =>
    child?.type?.displayName === displayName ? child : null
  );
};

const Dialog = ({
  open,
  IsClose,
  size = "md",
  style,
  className,
  children,
}: Props) => {
  const header:any = getChildrenOnDisplayName(children, "Header");
  return (
    <div className="dialog w-full h-screen fixed z-50  flex justify-center items-center inset-0">
      <div className="layer bg-black/[0.5] w-full -z-10 h-screen fixed transition-opacity top-0 left-0" />
      <div
        className={classNames(
          "dialog-box h-44 z-50 text-zinc-100 bg-slate-800 p-3"
        )}
        style={{ ...style, maxWidth: sizes[size] }}
      >
        {header}
      </div>
    </div>
  );
};

const Header: FC<IHead> = ({ className, style, children, ...rest }) => {
  return (
    <div
      className={classNames(className, "border-b-2 border-stone-100")}
      style={{ ...style }}
      {...rest}
    >
      {children}
    </div>
  );
};
Header.displayName = "Header";
Dialog.Header = Header;

export default Dialog;
