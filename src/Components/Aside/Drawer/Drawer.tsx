"use client";
import React, { useContext } from "react";

import { AiFillPlaySquare, AiOutlineHome, AiOutlineLike } from "react-icons/ai";
import {
  MdOutlinePlaylistPlay,
  MdOutlineExplore,
  MdOutlineVideoLibrary,
  MdOutlineSubscriptions,
  MdOutlineWatchLater,
} from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { AppContext } from "@/ContextAPI/AppContext";
import Link from "next/link";
import "./Drawer.scss";

export default function Drawer() {
  const { toggleDrawer } = useContext(AppContext);

  return (
    <aside className={`${toggleDrawer && "active"} drawer`}>
      <div className="drawer-sec">
        <Link href="/" style={{ backgroundColor: "darkgrey" }}>
          <div>
            <AiOutlineHome />
          </div>
          <div>Home</div>
        </Link>
        {/* <div>
          <div>
            <SiYoutubeshorts />
          </div>
          <div>Shorts</div>
        </div> */}
        <div>
          <div>
            <MdOutlineSubscriptions />
          </div>
          <div>Subscriptions</div>
        </div>
      </div>
      <div className="drawer-sec">
        <Link href="/playlist">
          <div>
            <MdOutlinePlaylistPlay />
          </div>
          <div>Playlist</div>
        </Link>
        <Link href="/history">
          <div>
            <FaHistory />
          </div>
          <div>History</div>
        </Link>
        <Link href="/channel">
          <div>
            <AiFillPlaySquare />
          </div>
          <div>Your Videos</div>
        </Link>
        <Link href="/watch-later">
          <div>
            <MdOutlineWatchLater />
          </div>
          <div>Watch Later</div>
        </Link>
        <Link href="/likes">
          <div>
            <AiOutlineLike />
          </div>
          <div>Liked Videos</div>
        </Link>
      </div>
      <div className="drawer-sec">
        <h3>Your Subscriptions</h3>
        <div>
          <div>a</div>
          <div></div>
        </div>
        <div>
          <div>b</div>
          <div></div>
        </div>
        <div>
          <div>c</div>
          <div></div>
        </div>
        <div>
          <div>d</div>
          <div></div>
        </div>
        <div>
          <div>a</div>
          <div></div>
        </div>
        <div>
          <div>b</div>
          <div></div>
        </div>
        <div>
          <div>c</div>
          <div></div>
        </div>
        <div>
          <div>d</div>
          <div></div>
        </div>
      </div>
    </aside>
  );
}
