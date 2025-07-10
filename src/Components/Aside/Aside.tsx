import React from "react";
import { AiOutlineHome, AiFillPlaySquare, AiOutlineLike } from "react-icons/ai";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import Link from "next/link";
import "./Aside.scss";

export default function Aside() {
  return (
    <aside className="aside">
      <Link href="/" style={{ backgroundColor: "grey" }}>
        <div>
          <AiOutlineHome />
        </div>
        <div>Home</div>
      </Link>
      <Link href="/myuploads">
        <div>
          <AiFillPlaySquare />
        </div>
        <div>Your Videos</div>
      </Link>
      <Link href="/history">
        <div>
          <FaHistory />
        </div>
        <div>History</div>
      </Link>
      <Link href="/likedvideo">
        <div>
          <AiOutlineLike />
        </div>
        <div>Liked Videos</div>
      </Link>
      <Link href="/library">
        <div>
          <MdOutlineVideoLibrary />
        </div>
        <div>Library</div>
      </Link>
    </aside>
  );
}
