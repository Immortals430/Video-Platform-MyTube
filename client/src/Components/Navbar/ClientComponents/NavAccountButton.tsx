"use client";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { useGoogleLogin } from "@react-oauth/google";
import "../Navbar.scss";
import axios from "axios";
import { headers } from "next/headers";

export default function NavAccountButton() {
  const login = useGoogleLogin({
    onSuccess: async ({access_token}) => {
      let res = await axios.post("http://localhost:8000/api/v1/user/login", {}, {
        headers: {
          "Authorization": access_token,
        }
      });
     
      
    },
    onError: () => {
      console.log("login failed");
    },
  });

  return (
    <div className="user-logo" onClick={() => login()}>
      <HiOutlineUserCircle />
    </div>
  );
}

