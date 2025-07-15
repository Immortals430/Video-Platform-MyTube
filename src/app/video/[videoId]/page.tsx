import Player from "@/Components/Player/Player";
import Comment from "@/Components/Comment/Comment";
import Recommendation from "@/Components/Recommendation/Recommendation";
import "./page.scss";

export default function Videopage() {
  return (
    <main className="video-player-page">
      <div>
        <div className="left-sec">
          <Player />
          <Comment />
        </div>
        <div className="right-sec">
          <Recommendation />
        </div>
      </div>
    </main>
  );
}
