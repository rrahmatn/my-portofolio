import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const Hamburger = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Fungsi untuk mengubah status menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={`w-full text-bold h-fit  text-[#66fcf1] py-2`}>
        <div className={`text-[48px] p-1 bg-[#1f2833]/[0.8] w-fit h-fit ml-2 rounded-full relative`} onClick={toggleMenu}>
          {menuOpen ? <AiOutlineCloseCircle /> : <BiMenu />}
        </div>

        <div
          className={`bg-transparent text-[25px] gap-x-4 text-[#1f2833]/[0.8] p-4 transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform ease-in-out duration-300`}
          style={{ backdropFilter: menuOpen ? "blur(5px)" : "none" }}
        >
          <ul>
            <li>
              <Link
                to="/"
                className={`hover:bg-[#c5c6c7]/[0.5] ${location.pathname === "/" ? "text-[#66fcf1] active" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`hover:bg-[#c5c6c7]/[0.5] ${location.pathname === "/about" ? "text-[#66fcf1] active" : ""}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className={`hover:bg-[#c5c6c7]/[0.5] ${location.pathname === "/project" ? "text-[#66fcf1] active" : ""}`}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`hover:bg-[#c5c6c7]/[0.5] ${location.pathname === "/contact" ? "text-[#66fcf1] active" : ""}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
