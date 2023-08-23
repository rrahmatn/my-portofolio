import React from "react";
import "./dashboard.css";
import Navbar from "../../components/navbar/navbar";
import Hamburger from "../../components/hamburger-menu/hamburger-menu";

const Dashboard = () => {
  return (
    <>
      <div className="w-full h-fit flex flex-cols justify-center">
        <div className="hidden md:flex flex-row w-full justify-center fixed">
          <Navbar />
        </div>
        <div className="md:hidden w-full h-fit flex-start justify-start">
          <Hamburger />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
