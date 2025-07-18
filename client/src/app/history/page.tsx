import React from "react";
import Aside from "@/Components/Aside/Aside";
import HistoryVideos from "@/Components/History/HistoryVideos/HistoryVideos";
import HistoryRightSection from "@/Components/History/HistoryRightSection/HistoryRightSection";
import "./page.scss";

export default function History() {
  return (
    <main className="historypage">
      <Aside />
      <div>
        <div className="videos-container">
          <HistoryVideos />
        </div>

        <div className="right-sec-container">
          <HistoryRightSection />
        </div>
      </div>
    </main>
  );
}
