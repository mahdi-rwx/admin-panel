import { lazy } from "react";
import "./assets/app.scss";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import { SidebarProvider } from "./components/sidebar/context/SidebarContext";
import useToggle from "./hooks/useToggle";
const Main = lazy(() => import("./screens/main/Main"));
const App = () => {
  const {
    state: isOpenSidebar,
    toggle: toggleSidebar,
    close: closeSidebar,
    open: openSidebar,
  } = useToggle(true);
  const {
    state: stateHoverSidebar,
    toggle: hoverSidebar,
    close: closeHoverSidebar,
    open: openHoverSidebar,
  } = useToggle();

  return (
    <div className="wrapper">
      <SidebarProvider
        values={{
          isOpenSidebar,
          toggleSidebar,
          closeSidebar,
          openSidebar,
          stateHoverSidebar,
          hoverSidebar,
          closeHoverSidebar,
          openHoverSidebar,
        }}
      >
        <Sidebar />
        <Routes>
          <Route path="/">
            <Route index element={<Main />} />
          </Route>
        </Routes>
      </SidebarProvider>
    </div>
  );
};

export default App;
