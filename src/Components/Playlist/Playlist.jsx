import Link from "next/link";
import "./Playlist.scss";
import Image from "next/image";
import { MdOutlinePlaylistPlay } from "react-icons/md";

export default function Playlist() {
  return (
    <section className="playlist-sec">
      <h1>Playlist</h1>

      <div className="playlist">
        {Array.from({ length: 16 }).map((elem, i) => (
          <Link href="/video/1" key={i}>
            <div className="card playlist-card">
              <div className="thumb-container playlist-thumb">
                <Image src="/thumb.jpg" alt="thumb" fill />
                <div className="total-videos">
                  <MdOutlinePlaylistPlay /> 21 videos
                </div>
              </div>

              <div className="details-container">
                <div className="details">
                  <h4 className="title">
                    WWE Wrestlemania 28-Triple H vs Undertaker full match Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus, inventore?
                  </h4>
                  <p className="channel">Playlist Name</p>
                  <p className="views">View full playlist</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
