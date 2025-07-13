import React from "react";
import "./HistoryVideos.scss";
import Image from "next/image";

export default function HistoryVideos() {
  return (
    <>
      <section className="history-sec">
        <h1>History</h1>

        <div>
          <div className="history-videos">
            {Array.from({ length: 16 }).map((elem, i) => (
              <div className="video-card" key={i}>
                <div className="thumb-container">
                  <Image src="/thumb.jpg" alt="" fill />
                </div>

                <div className="video-detail-cont">
                  <h3 className="title">Video name</h3>
                  <p className="views">Views</p>
                  <p className="detail">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Exercitationem, saepe in similique vitae aliquam sequi enim
                    id nisi quas amet?
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="history-right-sec"></div>
        </div>
      </section>
    </>
  );
}
