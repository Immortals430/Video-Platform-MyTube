import Image from "next/image";
import { IoMdSettings } from "react-icons/io";
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
                elit. Sequi corporis veritatis dolore mollitia tenetur repellat
                quisquam eum laudantium, delectus quibusdam.
              </h3>
              <div className="views">
                <span className="channel-name">Channel Name</span>
                <span>22 Views</span>
              </div>

              <p className="detail">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Exercitationem, saepe in similique vitae aliquam sequi enim id
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
