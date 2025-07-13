import React from "react";
import "./Recommendation.scss";

export default function Recommendation() {
  return (
    <section className="recommendation-sec">
      <h3>Recommendation</h3>
      {Array.from({ length: 6 }).map((elem, i) => (
        <div key={i}>
          <div className="thumb">
            <img src="/thumb.jpg" alt="thumb"  />
          </div>
          <div className="details">
            <h4 className="title">
              Title: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eum, rem. Minus a laborum doloribus et debitis, voluptate ratione
              esse commodi.
            </h4>
            <p className="channel">channel</p>
            <p className="views">views</p>
          </div>
        </div>
      ))}
    </section>
  );
}
