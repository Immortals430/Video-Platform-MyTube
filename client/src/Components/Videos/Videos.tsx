import Link from "next/link";
import Image from "next/image";
import "./Videos.scss";
import axios from "axios";

export default async function Videos() {
  try {
    let videos = await axios.get(
      "http://localhost:8000/api/v1/get-home-videos"
    );
    let videoList = videos.data.data;

    return (
      <section className="videos-sec">
        {videoList.map((_, i: number) => (
          <Link href="/video/1" key={i}>
            <div className="card">
              <div className="thumb-container">
                <Image src="/thumb.jpg" alt="thumb" fill />
              </div>

              <div className="details-container">
                <div className="channel-logo">
                  <Image src="/thumb.jpg" alt="logo" fill />
                </div>
                <div className="details">
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
      </section>
    );
  } catch (err) {
    console.log(err);
  }
}
