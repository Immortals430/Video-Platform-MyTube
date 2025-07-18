import { RiDeleteBin6Line } from "react-icons/ri";
import { IoPauseOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import "./HistoryRightSection.scss";

export default function HistoryRightSection() {
  return (
    <section className="history-right-sec">
      <div className="searchbar">
        <form action="">
          <IoSearch className="search-icon" />
          <input type="text" name="" id="" placeholder="Search watch history" />
        </form>
      </div>

      <div>
        <div><RiDeleteBin6Line /></div>
        <div>Clear all watch history</div>
      </div>

      <div>
        <div><IoPauseOutline /></div>
        <div>Pause Watch History</div>
      </div>

      {/* <div>
        <div></div>
        <div>Clear all watch history</div>
      </div> */}
    </section>
  );
}
