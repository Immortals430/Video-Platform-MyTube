import Link from "next/link";
import Image from "next/image";
import "./Videos.scss";

export default function Videos() {
  return (
    <section className="videos-sec">
      {Array.from({ length: 16 }).map((elem, i) => (
        <Link href="/video/1" key={i}>
          <div className="card">

            <div className="thumb-container">
              <Image src="/thumb.jpg" alt="thumb" fill   />
            </div>
       
            <div className="details-container">
              <div className="channel-logo">
                <Image src="/thumb.jpg" alt="logo" fill/>
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
}
