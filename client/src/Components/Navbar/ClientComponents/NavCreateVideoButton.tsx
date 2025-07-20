"use client";
import { AppContext } from "@/ContextAPI/AppContext";
import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import "../Navbar.scss";

export default function NavCreateVideoButton() {
  const { setToggleVideoUpload } = useContext(AppContext);
  return (
    <div className="create-btn" onClick={() => setToggleVideoUpload(true)}>
      <FaPlus />
      <span>Create</span>
    </div>
  );
}
