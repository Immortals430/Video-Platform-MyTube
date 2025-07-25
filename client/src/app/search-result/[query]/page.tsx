import Aside from "@/Components/Aside/Aside";
import SearchResult from "@/Components/SearchResult/SearchResult";
import "./page.scss"

export default function SearchResultpage() {
  return (
    <main className="searchresultpage">
      <Aside />
      <div>
        <SearchResult />
      </div>
    </main>
  );
}
