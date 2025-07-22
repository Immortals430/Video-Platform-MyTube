"use client";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { useGoogleLogin } from "@react-oauth/google";
import "../Navbar.scss";
import { useAppDispatch } from "@/redux/store";
import {
  handleAuthentication,
  userSelector,
} from "@/redux/reducers/user_reducer";
import { useSelector } from "react-redux";

export default function NavAccountButton() {
  const dispatch = useAppDispatch();
  const { loggedUser } = useSelector(userSelector);
 
  const login = useGoogleLogin({
    onSuccess: ({ access_token }) => {
      dispatch(handleAuthentication(access_token));
    },
    onError: (err) => console.log(err),
  });

  return (
    <div className="user-logo" onClick={() => login()}>
      {loggedUser.avatarUrl ? <img src={loggedUser.avatarUrl} alt="" /> : <HiOutlineUserCircle />}
    </div>
  );
}
