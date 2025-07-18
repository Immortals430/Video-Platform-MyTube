"use client";
import React, { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FadeLoader } from "react-spinners";
import { FcOk } from "react-icons/fc";
import { AppContext } from "@/ContextAPI/AppContext";
import "./UploadVideos.scss";

export default function UploadVideos() {
  const [uploadStatus, setuploadStatus] = useState<string>("none");
  const { setUploadVideoPage } = useContext(AppContext);

  const upload = (e: React.FormEvent) => {
    e.preventDefault();
    setuploadStatus("loading");
    setTimeout(() => {
      setuploadStatus("success");
    }, 3000);
  };

  return (
    <section className="uploadvideos-sec">
      <div className="uploadvideos-cont">
        <div className="uploadvideos-header">
          <h1>Upload Videos</h1>
          <RxCross2
            className="close-btn"
            onClick={() => setUploadVideoPage(false)}
          />
        </div>
        <div className="status">
          {uploadStatus === "loading" ? (
            <FadeLoader color="grey" />
          ) : uploadStatus === "success" ? (
            <FcOk size={60} />
          ) : null}
        </div>

        <form onSubmit={upload}>
          <input type="text" name="title" placeholder="Video Title" />
          <input type="file" />
          <button type="submit">Upload</button>
        </form>
      </div>
    </section>
  );
}
