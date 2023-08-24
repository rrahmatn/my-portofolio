import React, { useEffect, useState } from "react";
import "./dashboard.css";
import Navbar from "../../components/navbar/navbar";
import Hamburger from "../../components/hamburger-menu/hamburger-menu";
import Tittle from "../../components/tittle/tittle";
import Footer from "../../components/footer/footer";
import SmallCard from "../../components/smallcard/smallcard";
import jsonDataSmallCard from "./../../json/album.json";
import jsonDataBigCard from "./../../json/project.json";
import { Link } from "react-router-dom";
import BigCard from "../../components/bigcard/bigcard";
import TicTacToeGame from "../../components/game/game";
import "animate.css/animate.min.css";

const Dashboard = () => {
  const name = "Hi. I'm Rahmat.";
  const desc = "A Front-End Developer.";
  const after = "I'm proficient in user interface on websites.";

  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [currentCardIndex1, setCurrentCardIndex1] = useState(0);

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
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex1((prevIndex) =>
        prevIndex === jsonDataBigCard.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

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
        <div className="w-full h-fit md:px-14 flex flex-col animate__animated animate__fadeInLeft gap-7 md:gap-3 md:flex-row px-6 py-4">
          <Link to="/about" className="md:w-1/3 w-full text-[#f3f3f3] gap-2 text-center text-[24px] font-bold ">
            <h2 className="font-bold text-[32px]">This Is Me</h2>
            <SmallCard
              img={`album/${jsonDataSmallCard[currentCardIndex].img}`}
            />
          </Link>
          <Link to="/project" className=" md:w-2/3 w-full text-[#f3f3f3] gap-2 text-center text-[24px] font-bold">
            <h2 className="font-bold text-[32px]">My Project</h2>
            <BigCard
              judul={jsonDataBigCard[currentCardIndex1].judul}
              img={`project/${jsonDataBigCard[currentCardIndex1].img}`}
            />
          </Link>
        </div>
        <div className="text-center w-full h-fit font-bold text-[24px] md:text-[30px] text-[#f3f3f3]">Wanna play game with me ?</div>
        <div className="w-full p-2 md:w-2/3 mx-auto h-fit rounded-3xl overflow-hidden">
          <TicTacToeGame/>
        </div>
        <div className="w-full h-fit ">
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
