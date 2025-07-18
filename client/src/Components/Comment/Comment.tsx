"use client";
import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import "./Comment.scss";

export default function Comment() {
  const [translatedText, setTranslatedText] = useState("");

  const translateText = async (e: React.ChangeEvent, text = "elephant") => {
    const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=en|${e.target.value}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setTranslatedText(data.responseData.translatedText);
    } catch (error) {
      console.error("Translation error:", error);
      return "Translation failed";
    }
  };

  return (
    <section className="comment-sec">
      <h2>1,354 Comment</h2>
      <div className="comment">
        <div className="user-icon">
          <img src="/thumb.jpg" alt="logo" width={"30px"} />
        </div>
        <div className="input">
          <form action="">
            <input type="text" placeholder="Comment..." />
            <button className="comment-btn">
              <small>Comment</small>
            </button>
          </form>
        </div>
      </div>

      <div className="comment-list">
        <div className="user-icon">
          <img src="/thumb.jpg" alt="logo" width={30} />
        </div>
        <div className="user-comment">
          <div className="user-info">
            <p>@User</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A qui earum
            expedita omnis voluptatem deleniti quis vel saepe animi et? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Pariatur quis
            quibusdam architecto. Sapiente repudiandae sed perspiciatis quae
            velit consectetur animi reiciendis sit repellat eius accusamus
            asperiores pariatur praesentium sint amet corporis ducimus voluptas
            odio, ad debitis maiores nesciunt? Dolore adipisci sit excepturi
            eligendi saepe quaerat maiores ullam totam odio non.
          </p>
          <div className="like-dislike">
            <AiOutlineLike size={20} />
            <AiOutlineDislike size={20} />
          </div>

          <div className="translate">
            <span>Translate</span>
            <select onChange={(e) => translateText(e)}>
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              <option value="de">German</option>
              <option value="it">Italian</option>
            </select>
          </div>

          <p>{translatedText}</p>
        </div>
      </div>
    </section>
  );
}
