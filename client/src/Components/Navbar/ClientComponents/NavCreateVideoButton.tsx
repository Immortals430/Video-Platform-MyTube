"use client"
import { AppContext } from "@/ContextAPI/AppContext";
import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import "../Navbar.scss"

export default function NavCreateVideoButton() {
  const { setUploadVideoPage } = useContext(AppContext);
  return (
    <div className="create-btn" onClick={() => setUploadVideoPage(true)}>
      <FaPlus />
      <span>Create</span>
    </div>
  );
}
