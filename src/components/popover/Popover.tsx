import { Children, cloneElement, FC, ReactNode } from "react";
import useToggle from "../../hooks/useToggle";
interface Props {
  children: ReactNode;
}
const Popover: FC<Props> = ({ children }) => {
  const {
    state: activePopover,
    close: closePopover,
    open: openPopover,
    toggle: togglePopover,
  } = useToggle();
  const childNode = Children.map(children, (child: any) => {
    const clone = cloneElement(child, {
      activePopover,
      closePopover,
      openPopover,
      togglePopover,
    });
    return clone;
  });
  return <div className="relative">{childNode}</div>;
};

export default Popover;
