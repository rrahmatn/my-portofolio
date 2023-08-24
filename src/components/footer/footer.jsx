import React from "react";
import { BsInstagram , BsWhatsapp } from "react-icons/bs";
import {HiOutlineMail} from "react-icons/hi"
import {VscGithub} from "react-icons/vsc"
 
const Footer = () => {
  const copyright = "© 2023 Rizky Rahmat. All Rights Reserved";
  return (
    <>
      <div className="w-full mt-5 h-fit flex md:flex-row flex-col-reverse text-[#f3f3f3] justify-around items-center border-x-black-500 border-y-[1px]">
        <div className="md:w-1/4  w-full h-full flex flex-col text-center">
          <p>{copyright}</p>
        </div>
        <div className=" md:w-1/4  w-full hidden md:flex flex justify-center">
          <img
            className="w-1/2 "
            src="porto/footer.png"
            alt=""
          />
        </div>
        <div className="md:w-1/4  w-full flex flex-col gap-4 items-start pb-7 items-center jusify-center">
          <div className="flex w-full text-center justify-center">Contact :</div>
          <div className="w-full h-fit flex  items-center justify-center gap-5 flex-row text-[24px]">
            <a href="https://instagram.com/rrahmatn_" target="_blank" rel="noopener noreferrer">
              <BsInstagram />
            </a>
            <a href="mailto:rizkyrahmat292@gmail.com" target="_blank" rel="noopener noreferrer">
              <HiOutlineMail />
            </a>
            <a href="https://api.whatsapp.com/send?phone=083817381943" target="_blank" rel="noopener noreferrer">
              <BsWhatsapp />
            </a>
            <a href="https://github.com/rrahmatn" target="_blank" rel="noopener noreferrer">
              <VscGithub />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
