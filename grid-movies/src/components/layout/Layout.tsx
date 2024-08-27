import React, { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { keyboardNavigationStore } from "../../store/keyboard-navigation-store";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const { setActiveItem } = keyboardNavigationStore();

  useEffect(() => {
    setActiveItem(0);
  }, [location, setActiveItem]);

  return (
    <div className="bg-dark-background bg-cover w-full min-h-screen flex flex-col pt-10 bg-gray-darkest">
      <Header />
      <div className="flex flex-col no-scrollbar h-full">
        <SideBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
