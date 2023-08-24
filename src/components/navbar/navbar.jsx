import React, { useEffect , useState } from "react";
import { useLocation , Link } from "react-router-dom";

const Navbar = () => {
  const [activeBot, setActivebot] = useState("home");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActivebot("home");
    }
    if (location.pathname === "/about" || location.pathname === "/about/") {
      setActivebot("about");
    }
    if (location.pathname === "/project" || location.pathname === "/project/") {
      setActivebot("project");
    }
    if (location.pathname === "/contact" || location.pathname === "/contact/") {
      setActivebot("contact");
    }
  }, [location.pathname]);

  const activeNav = "border-2 border-indigo-100 border-b-indigo-400 text-[#f3f3f3] font-bold transition"; // Tambahkan properti 'transition' di sini

  return (
    <>
      <div className="fixed mt-5 w-1/3 md:w-1/2 h-fit shadow-xl flex text-[#66fcf1] flex-row bg-[#1f2833]/[0.8] font-bold justify-evenly px-2 py-1 text-xl rounded-3xl">
        <Link to="/"
            id={activeBot === "home" ? "bg-[#c5c6c7]/[0.5] text-[#1f2833]" : ""}
          onClick={() => {
            setActivebot("home");
          }}
          className={`items-center  text-center cursor-pointer w-1/4 px-2 md:px-auto py-2 rounded-3xl hover:bg-[#c5c6c7]/[0.5]  ${activeBot === "home" ? activeNav : ""}`}
        >
          Home
        </Link>
        <Link to="/about"
          onClick={() => {
            setActivebot("about");
          }}
          className={`items-center text-center cursor-pointer w-1/4 px-2 md:px-auto py-2 rounded-3xl hover:bg-[#c5c6c7]/[0.5]  ${activeBot === "about" ? activeNav : ""}`}
        >
          About
        </Link>
        <Link to="/project"
          onClick={() => {
            setActivebot("project");
          }}
          className={`items-center text-center cursor-pointer w-1/4 px-2 md:px-auto py-2 rounded-3xl hover-bg-[#c5c6c7]/[0.5]  ${activeBot === "project" ? activeNav : ""}`}
        >
          Project
        </Link>
        <Link to="/contact"
          onClick={() => {
            setActivebot("contact");
          }}
          className={`items-center text-center cursor-pointer w-1/4 px-2 md:px-auto py-2 rounded-3xl hover-bg-[#c5c6c7]/[0.5]  ${activeBot === "contact" ? activeNav : ""}`}
        >
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
