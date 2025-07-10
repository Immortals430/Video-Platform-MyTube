'use client'
import { createContext, Dispatch, ReactNode } from "react";
import { useState } from "react";
import { AppContextType } from "@/types/appContext";


export const AppContext = createContext<AppContextType>({
  toggleDrawer: false,
  setToggleDrawer: () => {}
});

function AppProvider({ children } : { children : ReactNode}) {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(true);
  return (
  <AppContext.Provider value = {{toggleDrawer, setToggleDrawer}}>
    {children}
  </AppContext.Provider>);
}

export default AppProvider