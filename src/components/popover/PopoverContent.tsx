import { FC, useRef } from "react";
import useOnClickOutside from "../../hooks/useClickOutSide";
interface Props {
  children: JSX.Element | JSX.Element[];
  closePopover?: any;
  activePopover?: any;
}
const PopoverContent: FC<Props> = ({
  children,
  closePopover,
  activePopover,
}) => {
  const refClosePopover = useRef(null);
  useOnClickOutside(refClosePopover, closePopover);
  return activePopover ? (
    <div className="content-popover" ref={refClosePopover}>
      {children}
    </div>
  ) : null;
};

export default PopoverContent;
