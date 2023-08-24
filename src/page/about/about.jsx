import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import Hamburger from "../../components/hamburger-menu/hamburger-menu";
import Tittle from "../../components/tittle/tittle";
import ImgCard from "../../components/imgcard/imgcard";
import "animate.css/animate.min.css";
import VerySmallCard from "../../components/verysmallcard/verysmallcard";
import skillData from "../../json/skills.json";
import {Link} from "react-router-dom";
import {IoIosArrowDroprightCircle} from "react-icons/io"

const About = () => {
  const [suhuKelvin, setSuhuKelvin] = useState(null);
  const [suhuCelsius, setSuhuCelsius] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=Bandung,id&appid=4cd5692833b9f7858982c9464e1c12b0"
        );
        if (!response.ok) {
          throw new Error("Gagal mengambil data cuaca");
        }
        const data = await response.json();
        setSuhuKelvin(data.main.temp);
        setSuhuCelsius(data.main.temp - 273.15); // Konversi ke Celsius
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <>
      <div className="w-full h-fit flex flex-col justify-center pt-28 md:pt-32 ">
        <div className="w-full animate__animated animate__fadeInRight">
          <Tittle tittle={"I'm Rahmat"} />
        </div>
        <div className="w-full mt-8 h-fit flex flex-col md:flex-row items-center md:justify-evenly">
          <ImgCard
            className="animate__animated animate__fadeInLeft"
            img={"porto/formal.png"}
          />
          <div className="md:w-1/2 w-full h-1/2 px-8 mt-4 md:h-full text-[#f3f3f3] ">
            <h1 className="text-[36px] font-bold md:text-[48px] animate__animated animate__fadeInRight">
              I come from{" "}
              {suhuCelsius !== null ? suhuCelsius.toFixed(2) + "°C" : ""}{" "}
              Bandung, Indonesia.
            </h1>
            <h2 className="text-[24px] md:text-[28px] animate__animated animate__fadeInRight">
              Hello my name is Rizky Rahmat Nugraha , I am currently majoring in educational informatics engineering at
              the Bandung State Islamic University, Sunan Gunung Djati.
            </h2>
            <br />
            <h3 className="text-[24px] md:text-[28px] animate__animated animate__fadeInRight">
              I really love this field, because several people helped me to know
              how beautiful this front end developer field is.
            </h3>
            <Link to="/contact" className="font-bold flex flex-row items-center hover:text-slate-900 ">for cooperation and work visit the contact page <IoIosArrowDroprightCircle className="text-[24px]"/></Link>
          </div>
        </div>
        <div className="w-full h-fit flex text-center animate__animated animate__fadeInLeft mt-10 text-[#f3f3f3] text-[48px] flex-col">
          <h1 className="font-bold my-4 ">My Skills</h1>
          <div className="w-full h-fit flex  flex-col md:flex-row md:px-14 justify-center items-center md:grid gap-4 grid-cols-3 ">
            {skillData.map((item) => {
              return (
                <VerySmallCard img={`skills/${item.img}`} isi={item.name} />
              );
            })}
          </div>
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

export default About;
