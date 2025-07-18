import Image from "next/image";
import { IoMdSettings } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import "./HistoryVideos.scss";

export default function HistoryVideos() {
  return (
    <section className="history-sec">
      <div className="header">
        <h1>History</h1>
        <IoMdSettings className="setting" />
      </div>

      <div className="history-videos">
        {Array.from({ length: 16 }).map((elem, i) => (
          <div className="video-card" key={i}>
            <div className="thumb-container">
              <Image src="/thumb.jpg" alt="" fill />
            </div>

            <div className="video-detail-cont">
              <h3 className="title">
                Video name Lorem ipsum dolor sit amet consectetur adipisicing

              </h3>
              <div className="views">
                <span className="channel-name">Channel Name</span>
                <span>22 Views</span>
              </div>

              <p className="detail">
                Lorem ipsum dolor sit, 
              </p>
            </div>
            <div className="delete">
              <RxCross2 />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
