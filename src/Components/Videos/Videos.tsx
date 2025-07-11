import Link from "next/link";
import "./Videos.scss";

export default function Videos() {
  return (
    <div className="grid">
      {Array.from({ length: 16 }).map((elem, i) => (
        <Link href="/video/1" key={i}>
          <div className="video-card">
            <img src="./thumb.jpg" alt="thumb" />
            <div className="video-detail-cont">
              <div className="channel-logo">
                <img src="./thumb.jpg" alt="logo" />
              </div>
              <div className="video-detail">
                <h4 className="title">
                  WWE Wrestlemania 28-Triple H vs Undertaker full match Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus, inventore?
                </h4>
                <p className="channel">WWE</p>
                <p className="views">6.3 crore views</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
