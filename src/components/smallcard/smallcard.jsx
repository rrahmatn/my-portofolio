import React from "react";
import "./smallCard.css"; // Buat file CSS terpisah untuk komponen SmallCard

const SmallCard = ({judul , img}) => {

  return (
    <>
      <div className="small-card w-full md:w-1/3 h-[30rem] rounded-3xl overflow-hidden  relative flex flex-col">
        <div
          className="small-card-image"
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
          {/* Tambahkan lapisan (overlay) */}
          <div className="overlay"></div>
          {/* Konten teks di bawah gambar */}
          <div className="text">
            <h2 className="text-2xl font-semibold">{judul}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallCard;
