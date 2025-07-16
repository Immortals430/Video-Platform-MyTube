import Aside from "@/Components/Aside/Aside";
import PlaylistVideos from "@/Components/PlaylistVideos/PlaylistVideos/PlaylistVideos";
import PlaylistVideosHeader from "@/Components/PlaylistVideos/PlaylistVideosHeader/PlaylistVideosHeader";
import "./page.scss";

export default function page() {
  return (
    <main className="playlist-videos-page">
      <Aside />
      <div>
        <PlaylistVideosHeader />
        <PlaylistVideos />
        
      </div>
    </main>
  );
}
