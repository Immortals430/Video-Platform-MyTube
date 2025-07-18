import { IoSearch } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi2";
import Link from "next/link";
import HamburgerMenu from "./ClientComponents/HamburgerMenu";
import NavCreateVideoButton from "./ClientComponents/NavCreateVideoButton";
import "./Navbar.scss";

export default function Navbar() {
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
          <div><IoSearch /></div>
        </form>
      </div>

      <div className="nav-right-sec">
        <NavCreateVideoButton />

        <div className="user-logo">
          <HiOutlineUserCircle />
          {/* <img src="/logo.avif" alt="user-logo" /> */}
        </div>
      </div>

      <div className="search-icon-m">
        <div>
          <IoSearch />
        </div>
      </div>
    </nav>
  );
}
