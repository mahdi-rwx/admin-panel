import React, { lazy } from "react";
import { SidebarProvider } from "../components/sidebar/context/SidebarContext";
import Sidebar from "../components/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import useToggle from "../hooks/useToggle";
const Main = lazy(() => import("./../screens/main/Main"));

const MainLayout = () => {
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
        <Route path="/" element={<Main />} />
      </Routes>
    </SidebarProvider>
  );
};

export default MainLayout;
