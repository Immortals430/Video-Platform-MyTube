import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import HamburgerMenu from "./ClientComponents/HamburgerMenu";
import NavCreateVideoButton from "./ClientComponents/NavCreateVideoButton";
import NavAccountButton from "./ClientComponents/NavAccountButton";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./Navbar.scss";

export default async function Navbar() {

  return (
    <nav>
      <div className="nav-left-sec">
        <div className="hamburger-menu">
          <HamburgerMenu />
        </div>
        <Link href="/">
          <img src="/logo.ico" alt="yt-logo" width={50} />
        </Link>
        <Link href="/">
          <h3>MyTube</h3>
        </Link>
      </div>

      <div className="nav-middle-sec">
        <form>
          <input type="text" />
          <div>
            <IoSearch />
          </div>
        </form>
      </div>

      <div className="nav-right-sec">
        <NavCreateVideoButton />
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}
        >
          <NavAccountButton />
        </GoogleOAuthProvider>
      </div>

      <div className="search-icon-m">
        <div>
          <IoSearch />
        </div>
      </div>
    </nav>
  );
}
