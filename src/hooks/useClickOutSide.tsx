// import { useEffect, useRef } from "react";
// type Handler = (event: MouseEvent) => void;
// const useClickOutSide = (handler: Handler) => {
//   const domNode = useRef<any>(null);
//   useEffect(() => {
//     const handleClick = (e: MouseEvent) => {
//       if (!domNode?.current?.contains(e.target)) {
//         handler(e);
//       }
//     };
//     document.addEventListener("mousedown", handleClick);
//     return () => {
//       document.removeEventListener("mousedown", handleClick);
//     };
//   }, [handler]);

//   return domNode;
// };
// export default useClickOutSide;
import { RefObject } from "react";

type Handler = (event: MouseEvent) => void;

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  mouseEvent: "mousedown" | "mouseup" = "mousedown"
): void {
  document.addEventListener(mouseEvent, (event) => {
    const el = ref?.current;

    // Do nothing if clicking ref's element or descendent elements
    if (!el || el.contains(event.target as Node)) {
      return;
    }

    handler(event);
  });
}

export default useOnClickOutside;
