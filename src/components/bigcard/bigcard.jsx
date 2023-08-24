import React from "react";
import "./bigcard.css"; // Buat file CSS terpisah untuk komponen BigCard

const BigCard = ({ judul, img }) => {

  return (
    <div className="big-card shadow-xl w-full md:h-[30rem] h-fit rounded-3xl overflow-hidden relative">
      <div className="big-card-image flex w-full h-full items-center justify-center" >
        <img src={img} alt="img" className="w-full h-fit flex " />
        <div className="overlay"></div>
        {/* Konten teks di bawah gambar */}
        <div className="text">
          <h2 className="text-2xl font-semibold">{judul}</h2>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
