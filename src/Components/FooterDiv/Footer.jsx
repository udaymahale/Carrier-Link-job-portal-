/* eslint-disable no-unused-vars */
import React from "react";

import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer flex justify">
      <div
        className=" p-[7rem] mb-[5rem] bg-blueColor rounded-[10px] gap-10 grid
    grid-cols-5 m-auto items-center justify-center"
      >
        <div>
          <div className="logoDiv">
            <h1 className="logo text-[40px] text-white pb-[1.5rem]">
              <strong>Carrier</strong>
              Link
            </h1>
          </div>

          <p className="text-white text-[16px] pb-[25px] opacity-70 leading-7">
            We always make our seekers and companies find the best jobs and
            employees find the best candidates.
          </p>
        </div>

        <div className="grid">
          <span className="divTitle text-[20px] font-semibold pb-[1.5rem] text-white">
            Company
          </span>

          <div className="grid gap-3">
            <h1 className="text-white opacity-[.7] hover:opacity-[1]">
              About Us
            </h1>
            <h1 className="text-white opacity-[.7] hover:opacity-[1]">
              Feature{" "}
            </h1>
            <li className="text-white opacity-[.7] hover:opacity-[1]">News</li>
            <h1 className="text-white opacity-[.7] hover:opacity-[1]">FAQ</h1>
          </div>
        </div>

        <div className="grid">
          <span className="divTitle text-[20px] font-semibold pb-[1.5rem] text-white">
            Resources
          </span>
          <div className="grid gap-3">
            <h1 className="text-white opacity-[.7] hover:opacity-[1]">
              Account
            </h1>
            <h1 className="text-white opacity-[.7] hover:opacity-[1]">
              Support Center
            </h1>
            <li className="text-white opacity-[.7] hover:opacity-[1]">
              Feedback
            </li>
            <h1 className="text-white opacity-[.7] hover:opacity-[1]">
              Contact Us
            </h1>
          </div>
        </div>

        <div className="grid">
          <span className="divTitle text-[20px] font-semibold pb-[1.5rem] text-white">
            Support
          </span>

          <div className="grid gap-3">
            <h1 className="text-white opacity-[.7] hover:opacity-[1]">Event</h1>
            <h1 className="text-white opacity-[.7] hover:opacity-[1]">
              Promo{" "}
            </h1>
            <li className="text-white opacity-[.7] hover:opacity-[1]">
              Req Demo
            </li>
            <h1 className="text-white opacity-[.7] hover:opacity-[1]">
              Careers
            </h1>
          </div>
        </div>

        <div className="grid">
          <span className="divTitle text-[20px] font-semibold pb-[1rem] text-white">
            Contact Info
          </span>
          <div>
            <li className="text-[16px] text-white">+91-8485803522</li>
            <li className="text-[16px] text-white">udaymahale30@outlook.com</li>
           
            <div className="icons  flex gap-4 py-[1rem]">
              <AiFillInstagram className="bg-white p-[8px] h-[35px] w-[35px]  rounded-full icon text-blueColor" />
              <AiOutlineTwitter className="bg-white p-[8px] h-[35px]  w-[35px] rounded-full icon text-blueColor" />
              <BsFacebook className="bg-white p-[8px] h-[35px]  w-[35px] rounded-full icon text-blueColor" />
            </div>
            <div className="grid">
            <small className="divTitle text-[10.5px] text-white flex justify-center items-center ">
              © Copyright All Right Reserved By Uday Mahale
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
