
import Image from "next/image";
import "./Player.scss";

export default function Player() {

  return (
    <section>
      <div className="player">
        <video autoPlay controls muted>
          <source src="/video.mp4" />
        </video>
      </div>
      <div className="player-desc">
        <h2>Demo Video Title </h2>
        <div className="flex">
          <div className="channel-desc">
            <div className="channel-logo">
              <Image src="/thumb.jpg" alt="logo" fill />
            </div>
            <div className="channel-detail">
              <p>WWE</p>
              <p>
                <small>6.09 crore subscribers</small>
              </p>
            </div>
            <div>
              <div className="subscribe">Subscribe</div>
            </div>
          </div>

          <div className="options">
            <div>Like</div>
            <div>Share</div>
            <div>Download</div>
            <div>Save</div>
          </div>
        </div>
      </div>
    </section>
  );
}
