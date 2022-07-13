import { useState } from "react";

const useToggle = (initialState?: boolean) => {
  const [state, setState] = useState<boolean>(!!initialState);
  const close = () => setState(false);
  const open = () => setState(true);
  const toggle = () => setState((state) => !state);
  return { state, close, open, toggle };
};
export default useToggle;
