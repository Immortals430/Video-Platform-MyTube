import Aside from "@/Components/Aside/Aside";
import Filter from "@/Components/Filter/Filter";


import Videos from "@/Components/Videos/Videos";
import "./page.scss"
export default function Home() {
  return (
    <main className="homepage">
      <Aside />
      <div>
        <Filter />
        <Videos />
      </div>
    </main>
  );
}
