import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./PlaylistVideosHeader.scss";

export default function PlaylistVideosHeader() {
  return (
    <section className="playlsitvideos-header">
      <div>
        <div className="thumbnail">
          <Image src="/thumb.jpg" alt="" fill />
        </div>
      </div>

      <div className="playlist-details">
          <h1>Playlist Name</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  
        <div className="buttons-container">
          <Link href="/video/1"><div className="play-btn">Play all</div></Link>
          <Link href="/video/1"><div className="delete-btn">Delete all Videos</div></Link>
        </div>
      </div>
    </section>
  );
}
