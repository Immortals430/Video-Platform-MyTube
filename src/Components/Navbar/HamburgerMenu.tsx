'use client'
import { useContext } from "react";
import Hamburger from "hamburger-react";
import { AppContext } from "@/ContextAPI/AppContext";


export default function HamburgerMenu() {
  const { setToggleDrawer } = useContext(AppContext);
  return (
    <Hamburger
      onToggle={(state) => setToggleDrawer(state)}
      direction="right"
      size={22}
    />
  );
}
