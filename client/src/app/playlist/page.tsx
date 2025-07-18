import Playlist from "@/Components/Playlist/Playlist";
import Aside from "@/Components/Aside/Aside";
import "./page.scss"

export default function Playlistpage() {
  return (
    <main className="playlistpage">
      <Aside />
      <div>
        <Playlist />
        {/* <Playlist /> */}
      </div>
    </main>
  );
}
