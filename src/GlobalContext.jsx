import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

// custom hook

export const useGlobalContext = () => useContext(GlobalContext);

export default function AppContext({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    console.log(isSidebarOpen);
  };
  const openSidebar = () => {
    setIsSidebarOpen(true);
    console.log(isSidebarOpen);
  };

  return (
    <GlobalContext.Provider
      value={{ isSidebarOpen, closeSidebar, openSidebar, pageId, setPageId }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
