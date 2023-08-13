/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

import simple from "../../Assets/simple.jpg"; 
import socialgood from "../../Assets/socialgood.jpg"; 
import trust from "../../Assets/trust.jpg"; 


const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      <h1 className="text-textColor text-[40px] py-[2rem] pb-[3rem] 
      font-bold w-[700px] block"> The value that holds us true and to account</h1>

      <div className="grid gap-[10rem] grid-cols-3items-center">
      </div> 
      <div className="flex gap-[8rem] items-center">
        <div className="singleGrid rounded-[5px] p-[1.5rem] bg-greyIsh opacity-[.9]">
          <div className="flex items-center gap-2">
            <div className="imgDiv p-[5px] rounded-[.8rem] h-[30px] w-[40px] flex-center justify-center">
              <img src={simple} alt="" className="w-[80%]" />
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[16px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            Things being made beautiful simple are at the heart of everything we do.
          </p>
        </div>

        <div className="singleGrid rounded-[5px] p-[1.5rem] bg-greyIsh opacity-[.9]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[5px] rounded-[.8rem] h-[30px] w-[40px] flex-center justify-center">
              <img src={socialgood} alt="" className="w-[80%]" />
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Social Good
            </span>
          </div>
          <p className="text-[16px] text-textColor opacity-[.7] py-[1rem] font-semibold">
          We believe in making things better for everyone, even if just by a little bit!          </p>
        </div>

        <div className="singleGrid rounded-[5px] p-[1.5rem] bg-greyIsh opacity-[.9]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[5px] rounded-[.8rem] h-[30px] w-[40px] flex-center justify-center">
              <img src={trust} alt="" className="w-[80%]" />
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Trust
            </span>
          </div>
          <p className="text-[16px] text-textColor opacity-[.7] py-[1rem] font-semibold">
          We work on the basis of creating trust which can be nurtured through </p>
        </div>
      </div>

      <div className="card mt-[5rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px] ">

        <div>
          <h1 className="text-blueColor text-[42px] font-bold">Ready to switch a career
          </h1>
          <h2 className="text-black text-[37px] font-bold">Let's get started!
          </h2>
        </div>

        <button className="border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px]
        font-semibold text-blueColor hover:bg-white bg-black">
          Get Started
        </button>

      </div>
    </div>
  );
};

export default Value;