import React from "react";
import "./tittle.css";

const Tittle = ({ tittle, desc, after, animate }) => {
  return (
    <>
      <div className={`bungkus-tittle flex flex-cols ${animate ? "animate-in-title" : ""}`}>
        {tittle}
        <div className="desc">{desc}</div>
        <div className="after">{after}</div>
      </div>
    </>
  );
};

export default Tittle;
