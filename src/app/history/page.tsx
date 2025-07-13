import React from "react";
import Aside from "@/Components/Aside/Aside";
import HistoryVideos from "@/Components/HistoryVideos/HistoryVideos"
import "./page.scss"

export default function History() {
  return (
    <main className="historypage">
      <Aside />
      <div>
          <HistoryVideos />
      </div>
    </main>
  );
}
