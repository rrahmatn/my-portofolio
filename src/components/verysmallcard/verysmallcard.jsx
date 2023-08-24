import React from "react";
import "./verysmallcard.css"

const VerySmallCard = ({ img , isi}) => {
  return (
    <>
      <div className="w-[370px] ww cursor-pointer h-[500px] bg-[#48285fc2]/[0.3] overflow-hidden shadow-xl">
        <div className="w-auto h-[420px] p-5 flex items-center justify-center overflow-hidden">
          <img src={img} alt="skill" className="w-fit h-full" />
        </div>
        <div className="w-full h-[80px] bg-[#48285fc2] font-bold flex items-center justify-center text-center">{isi}</div>
      </div>
    </>
  );
};

export default VerySmallCard;
