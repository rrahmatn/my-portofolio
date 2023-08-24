import React from "react";

const ImgCard = ({ img }) => {
  return (
    <>
      <div className="w-[370px] h-[500px] rounded-t-[1000px] overflow-hidden shadow-xl">
        <div className="w-fit h-full overflow-hidden">
          <img src={img} alt="" className="w-full h-fit" />
        </div>
      </div>
    </>
  );
};

export default ImgCard;
