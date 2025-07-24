"use client";
import { handleSearchVideo, videoSelector } from "@/redux/reducers/video_reducer";
import { useAppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";

export default function NavSearchBar() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const searchVideo = async (e: FormEvent) => {
    e.preventDefault();
    const query =
      (e.target as HTMLFormElement)["search-query"].value 

    if (!query) return;
    dispatch(handleSearchVideo(query));
    router.push("/video/1");
  };

  return (
    <form onSubmit={searchVideo}>
      <input
        type="text"
        name="search-query"
        placeholder="Search"
        // onChange={searchVideo}
      />
      <button type="submit">
        <div>
          <IoSearch />
        </div>
      </button>
    </form>
  );
}
