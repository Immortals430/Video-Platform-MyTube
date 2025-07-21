"use client";
import { createContext, ReactNode } from "react";
import { useState } from "react";
import { AppContextType } from "@/types/appContext";
import UploadVideos from "@/Components/UploadVideo/UploadVideos";
import Login from "@/Components/Login/Login";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

function AppProvider({ children }: { children: ReactNode }) {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);
  const [toggleVideoUpload, setToggleVideoUpload] = useState<boolean>(false);
  const [toggleLoginSection, setToggleLoginSection] = useState<boolean>(false);


  return (
    <Provider store={store}>
    <AppContext.Provider
      value={{
        toggleDrawer,
        setToggleDrawer,
        toggleVideoUpload,
        setToggleVideoUpload,
        toggleLoginSection,
        setToggleLoginSection
      }}
    >
      {children}
      {toggleVideoUpload && <UploadVideos />}
      {toggleLoginSection && <Login />}
    </AppContext.Provider>
    </Provider>
  );
}

export default AppProvider;

export const AppContext = createContext<AppContextType>({
  toggleDrawer: false,
  setToggleDrawer: () => {},
  toggleVideoUpload: false,
  setToggleVideoUpload: () => {},
  toggleLoginSection: false,
  setToggleLoginSection: () => {},
});
