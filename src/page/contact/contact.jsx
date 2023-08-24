import React from "react";
import "./contact.css";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import Hamburger from "../../components/hamburger-menu/hamburger-menu";
import Tittle from "../../components/tittle/tittle";
import { BsInstagram } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { VscGithub } from "react-icons/vsc";

const Contact = () => {
  return (
    <>
      <div className="w-full h-fit flex flex-col pt-28 justify-center">
        <div className="w-full h-fit mx-auto animate__animated animate__fadeInRight">
          <Tittle
            tittle={"For Cooperation and Work."}
            desc={"Contact One Below."}
            after={"I'm always ready for you"}
          />
        </div>
        <div className=" w-full flex flex-col text-[#f3f3f3] gap-4 items-start pb-7 animate__animated animate__fadeInLeft items-center jusify-center my-10">
          <div className="w-full h-fit flex flex-col md:flex-row items-center justify-center gap-5 flex-row text-[100px]">
            <a
              href="https://instagram.com/rrahmatn_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram />
            </a>
            <a
              href="mailto:rizkyrahmat292@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiOutlineMail />
            </a>
            <a
              href="https://t.me/rrahmatn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram />
            </a>
            <a
              href="https://github.com/rrahmatn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VscGithub />
            </a>
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
export default Contact;
