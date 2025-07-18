
export interface AppContextType {
  toggleDrawer: boolean;
  setToggleDrawer: Dispatch<React.SetStateAction<boolean>>;
  uploadVideoPage: boolean,
  setUploadVideoPage: Dispatch<React.SetStateAction<boolean>>
}