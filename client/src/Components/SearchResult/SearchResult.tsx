import { IoMdSettings } from "react-icons/io";
import Image from "next/image";

import { HiDotsVertical } from "react-icons/hi";
import "./SearchResult.scss";
import Link from "next/link";

export default function SearchResult() {

  return (
    <section className="searchresult-sec">
      <div className="header">
        <h1>Search Result</h1>
        <IoMdSettings className="setting" />
      </div>

      <div className="history-videos">
        {Array.from({ length: 16 }).map((elem, i) => (
          <Link href={"/video/1"}>
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

              <p className="detail">Lorem ipsum dolor sit,</p>
            </div>
            <div className="delete">
              <HiDotsVertical />
            </div>
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
