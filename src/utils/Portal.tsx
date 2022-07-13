import { FC, ReactNode, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
  className?: string;
  parent?: HTMLElement;
}
const Portal: FC<Props> = ({ className, parent, children }) => {
  const el = useMemo(() => document.createElement("div"), []);
  useEffect(() => {
    const target = (parent && parent.appendChild) ? parent : document.body;
    const classList = ["portal-container"];
    if (className) className.split(" ").forEach((c) => classList.push(c));
    classList.forEach((c) => el.classList.add(c));
    target.appendChild(el);
    return () => {
      target.removeChild(el);
    };
  }, [className, el, parent]);

  return createPortal(children, el);
};
export default Portal;
