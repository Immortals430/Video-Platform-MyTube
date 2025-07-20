
export interface AppContextType {
  toggleDrawer: boolean;
  setToggleDrawer: Dispatch<React.SetStateAction<boolean>>;
  toggleVideoUpload: boolean,
  setToggleVideoUpload: Dispatch<React.SetStateAction<boolean>>
  toggleLoginSection: boolean,
  setToggleLoginSection: Dispatch<React.SetStateAction<boolean>>
}