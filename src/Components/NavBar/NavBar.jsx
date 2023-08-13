/* eslint-disable no-unused-vars */
import React from "react";
import { VscBriefcase } from "react-icons/vsc";

const NavBar = () => {
  return (
    <div className="navBar flex justify p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-[50px] text-white mt-[-2rem]">
          <strong>Carrier</strong>Link
        </h1>
        <ul>
          <h1 className="subTitle font-bold text-[50px] text-white opacity-60 mt-20">
            Find The Perfect Job That You Deserved...
          </h1>
        </ul>
        <h1 className="text-[19px] text-white">
          Your success is our priority,
        </h1>
        <h1 className="text-[19px] text-white">
          Let us help you take the next step in your career journey.
        </h1>
      </div>
      <div className="menu flex gap-10 text-[20] mt-[-1rem]">
        <li className="menuList text-[#6f6f6f] hover:text-white">Jobs</li>
        <li className="menuList text-[#6f6f6f] hover:text-white">Companies</li>
        {/* <li className="menuList text-[#6f6f6f] hover:text-white">Blog</li> */}
        <li className="menuList text-[#6f6f6f] hover:text-white">About</li>
        <li className="menuList text-[#6f6f6f] hover:text-white">Contact</li>
        <li className="menuList text-[#6f6f6f] hover:text-white">Login</li>
        <li className="menuList text-[#6f6f6f] hover:text-white">Register</li>
      </div>
    </div>
  );
};

export default NavBar;
