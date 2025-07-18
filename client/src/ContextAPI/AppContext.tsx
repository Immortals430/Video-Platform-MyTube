"use client";
import { createContext, ReactNode } from "react";
import { useState } from "react";
import { AppContextType } from "@/types/appContext";
import UploadVideos from "@/Components/UploadVideo/UploadVideos";

function AppProvider({ children }: { children: ReactNode }) {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);
  const [uploadVideoPage, setUploadVideoPage] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        toggleDrawer,
        setToggleDrawer,
        uploadVideoPage,
        setUploadVideoPage,
      }}
    >
      {children}
      {uploadVideoPage && <UploadVideos />}
    </AppContext.Provider>
  );
}

export default AppProvider;

export const AppContext = createContext<AppContextType>({
  toggleDrawer: false,
  setToggleDrawer: () => {},
  uploadVideoPage: false,
  setUploadVideoPage: () => {},
});
