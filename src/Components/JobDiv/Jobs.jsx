/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";

import { BiTimeFive } from "react-icons/bi";

import logo1 from "../../Assets/logo1.jpg";
import logo2 from "../../Assets/logo2.jpg";
import logo3 from "../../Assets/logo3.jpg";
import logo4 from "../../Assets/logo4.jpg";
import logo5 from "../../Assets/logo5.jpg";
import logo6 from "../../Assets/logo6.jpg";
import logo7 from "../../Assets/logo7.jpg";
import logo8 from "../../Assets/logo8.jpg";
import logo9 from "../../Assets/logo9.jpg";
import logo10 from "../../Assets/logo10.jpg";
import logo11 from "../../Assets/logo11.jpg";
import logo12 from "../../Assets/logo12.jpg";
import logo13 from "../../Assets/logo13.png";
import logo14 from "../../Assets/logo14.jpg";
import logo15 from "../../Assets/logo15.jpg";




const Data = [
  {
    id: 1,
    image: logo1,
    title: "Project Manager",
    time: "Now",
    location: "USA",
    desc: "Good in planning, organizing, coordinating, and overseeing the successful execution of a project, while ensuring it meets the defined objectives, timelines, and budget.",
    company: "Cardinal Group Co.",
  },
  {
    id: 2,
    image: logo2,
    title: "Data Analyst",
    time: "14Hrs",
    location: "South America",
    desc: "They have analyzes & interprets large datasets to uncover insights, trends & patterns that drive informed decision-making & strategic actions within an organization.",
    company: "Williams Companies",
  },
  {
    id: 3,
    image: logo3,
    title: "Web Developer",
    time: "18Hrs",
    location: "Mexico",
    desc: "Good in   designs, builds, and maintains websites and web applications, utilizing coding languages and technologies to create functional and visually appealing online experiences.",
    company: "Patterson Companies",
  },
  {
    id: 4,
    image: logo4,
    title: "Software Engi",
    time: "22Hrs",
    location: "Pune",
    desc: "Develop maintain software systems, applying engineering principles and programming skills to create efficient and reliable solutions as per requirement.",
    company: "Salesforce",
  },
  {
    id: 5,
    image: logo5,
    title: "Business Analyst",
    time: "1day",
    location: "Hyderabad",
    desc: " Identifies, analyzes, and translates business needs and requirements into actionable solutions and driving successful project outcomes for the company.",
    company: "Patterson Companies",
  },
  {
    id: 6,
    image: logo6,
    title: "Sr Manager",
    time: "2day",
    location: "Texas",
    desc: "Strategic leadership and guides a team towards achieving organizational goals and fostering high-performance work environment.",
    company: "Intel Corporation",
  },
  {
    id: 7,
    image: logo7,
    title: "React Developer",
    time: "3day",
    location: "Ireland",
    desc: "Specializes in building user interfaces and web applications using react technology for efficient and interactive front-end development.",
    company: "Wipro",
  },
  {
    id: 8,
    image: logo8,
    title: "Data Scientist",
    time: "4day",
    location: "Norway",
    desc: "Analyze the machine learning techniques, and programming skills to extract insights from complex data sets and solving complex business problems.",
    company: "Microsoft",
  },
  {
    id: 9,
    image: logo9,
    title: ".net Developer",
    time: "5day",
    location: "Banglore",
    desc: "Develop and maintains software applications to create robust and scalable solutions for various platforms and systems.",
    company: "Capgemini",
  },
  {
    id: 10,
    image: logo10,
    title: "Senior Engineer",
    time: "6day",
    location: "Mumbai",
    desc: "Demonstrates extensive technical expertise provides leadership, guidance to a team and contributes to strategic planning.",
    company: "TCS",
  },
  {
    id: 11,
    image: logo11,
    title: "Financial Expert",
    time: "7day",
    location: "Turkey",
    desc: " Professional with deep knowledge and expertise in finance and investment strategies, providing advice and guidance to individuals, businesses.",
  },
  {
    id: 12,
    image: logo12,
    title: "Ui/Ux Designer",
    time: "8day",
    location: "Manchester",
    desc: "Responsible for creating intuitive and visually appealing interfaces that enhance user experiences & optimize usability across digital platforms.",
    company: "Quolum",
  },
  {
    id: 13,
    image: logo13,
    title: "AWS Architect",
    time: "9day",
    location: "Norway",
    desc: "Designing, implementing, managing scalable, secure, cost-effective cloud solutions to meet the organization business & technical requirements.",
    company: "Persistent",
  },
  {
    id: 14,
    image: logo14,
    title: "Java Developer",
    time: "10day",
    location: "Chicago",
    desc:"Handle, designing, implementing, and maintaining Java-based applications, collaborating with cross-functional teams, debugging.",
    company:"Coforage",
  },
  {
    id: 15,
    image: logo15,
    title: "Sells Manager",
    time: "11day",
    location: "Delhi",
    desc: "Responsible to executing ,defining  strategy, roadmap, conducting market research, gathering and analyzing customer feedback.",
    company: "Jio",
  },
 
];

const Jobs = () => {
  return (
    <div>
      <div className="mb-[2rem] mt-[6rem] text-center grid gap-[0.5rem]">
        <div className="singleGrid rounded-[5px] p-[-2rem]"></div>
        <div className="flex items-center gap-2"></div>
        <h1 className="bg-greyIsh text-[40px] py-[2rem] pb-[2rem] font-size-[36px] font-bold w-[400px] block mx-auto">
  Explore the Jobs...
</h1>

      </div>

      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <div className="group group-items singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive />
                  {time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{location}</h6>
              <p className="text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {desc}
              </p>
              <div className="company flex items-center gap-2">
                <img src={image} alt="Company Logo" className="w-[20%]" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>
              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black">
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
