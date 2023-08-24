import React from "react";
import "./project.css";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import Hamburger from "../../components/hamburger-menu/hamburger-menu";
import Tittle from "../../components/tittle/tittle";
import BigCard from "../../components/bigcard/bigcard";
import projectData from "../../json/project.json";
import {FaGithubSquare} from "react-icons/fa"

const Project = () => {
  return (
    <>
      <div className="w-full h-fit flex flex-col pt-28 justify-center">
        <Tittle tittle={"My Project"} />
        <div className="w-10/12 mx-auto h-fit md:grid md:grid-cols-2 md:mt-28 mt-20 flex flex-col gap-4">
          {projectData.map((item) => {
            return (
              <a href={`https://${item.url}`} target="_blank" rel="noreferrer" className="w-full h-fit">
                <BigCard judul={item.judul} img={`project/${item.img}`} />
              </a>
            );
          })}
        </div>
        <div className="w-full h-fit flex flex-col items-center my-10 justify-center">
            <div className="text-[#f3f3f3]  font-bold text-[32px]" >For More Project Visit:</div>
            <a href="https://github.com/rrahmatn" className="text-[80px] font-bold text-[#f3f3f3]" target="_blank" rel="noreferrer"><FaGithubSquare/></a>
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
export default Project;
