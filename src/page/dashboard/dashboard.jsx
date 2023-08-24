import React, { useEffect, useState } from "react";
import "./dashboard.css";
import Navbar from "../../components/navbar/navbar";
import Hamburger from "../../components/hamburger-menu/hamburger-menu";
import Tittle from "../../components/tittle/tittle";
import Footer from "../../components/footer/footer";
import SmallCard from "../../components/smallcard/smallcard";
import jsonDataSmallCard from "./../../json/album.json";

const Dashboard = () => {
  const name = "Hi. I'm Rahmat.";
  const desc = "A Front-End Web Developer.";
  const after = "I'm proficient in user interface field.";

  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    setAnimateTitle(true);
    setAnimateImage(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) =>
        prevIndex === jsonDataSmallCard.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full h-fit flex flex-col justify-center">
        <div className="w-full h-fit flex flex-col-reverse md:flex-row justify-around pl-10 gap-4 py-4 pr-6 ">
          <Tittle
            tittle={name}
            desc={desc}
            after={after}
            animate={animateTitle}
          />
          <div
            className={`w-full md:w-1/2 h-fit flex items-center justify-center ${
              animateImage ? "animate-in-right" : ""
            }`}
          >
            <img src="porto/almet.png" className="" alt="foto saya" />
          </div>
        </div>
        <div className="w-full h-fit md:px-14 flex flex-col gap-7 md:gap-3 md:flex-row px-6 py-4">
          <SmallCard
            judul={jsonDataSmallCard[currentCardIndex].judul}
            img={`album/${jsonDataSmallCard[currentCardIndex].img}`}
          />
        </div>
        <div className="w-full h-fit">
          <Footer />
        </div>
        <div className="hidden md:flex flex-row w-full top-0 justify-center fixed">
          <Navbar />
        </div>
        <div className="md:hidden w-full h-fit flex top-0 flex-start justify-start fixed">
          <Hamburger />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
