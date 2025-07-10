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
import "./Drawer.scss";

export default function Drawer() {
  const { toggleDrawer } = useContext(AppContext);

  return (
    <aside className={`${toggleDrawer && "active"} drawer`}>
      <div className="drawer-sec">
        <div style={{ backgroundColor: "darkgrey" }}>
          <div>
            <AiOutlineHome />
          </div>
          <div>Home</div>
        </div>
        {/* <div>
          <div>
            <MdOutlineExplore />
          </div>
          <div>Explore</div>
        </div> */}
        <div>
          <div>
            <SiYoutubeshorts />
          </div>
          <div>Shorts</div>
        </div>
        <div>
          <div>
            <MdOutlineSubscriptions />
          </div>
          <div>Subscriptions</div>
        </div>
      </div>
      <div className="drawer-sec">
        <div>
          <div>
            <MdOutlinePlaylistPlay />
          </div>
          <div>Playlist</div>
        </div>
        <div>
          <div>
            <FaHistory />
          </div>
          <div>History</div>
        </div>
        <div>
          <div>
            <AiFillPlaySquare />
          </div>
          <div>Your Videos</div>
        </div>
        <div>
          <div>
            <MdOutlineWatchLater />
          </div>
          <div>Watch Later</div>
        </div>
        <div>
          <div>
            <AiOutlineLike />
          </div>
          <div>Liked Videos</div>
        </div>
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
