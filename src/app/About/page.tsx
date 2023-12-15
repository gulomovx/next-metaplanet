"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GoArrowDown } from "react-icons/go";
import { exploreWorlds } from "../../constants/data";
import ReactPlayer from "react-player";
import bg from "../../../public/planet-07.png";
import hero from "../../../public/stamp.png";

const About = () => {
  const [data, setData] = useState(exploreWorlds);

  return (
    <div className="h-full  ">
      <div className="flex  flex-col  items-center  text-center bg-no-repeat bg-cover">
        <h1 className=" text-4xl lg:text-7xl my-4 text-title ">About </h1>
        <GoArrowDown
          // size={50}
          className="text-center lg:text-[60px] text-[40px] border rounded-full 
           p-2 animate-bounce"
        />
        {/* content */}
        <div className=" lg:w-[1400px] w-full mb-96 lg:p-16 p-1  bg-slate-100 border-slate-800 my-2  rounded-lg   ">
          <div className="w-full">
            <h1 className=" lg:text-xl text-slate-400 my-4">
              New web3 technologies
            </h1>
            <h1 className=" text-2xl lg:text-5xl  text-center mx-auto">
              Where Humanity and Technologies Become One
            </h1>
            <p className=" w-[80%] mx-auto text-sm lg:text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              magni impedit consequatur odit ipsa, error aut voluptas odio vitae
              ad.
            </p>
            <button className="mt-8 text-white py-2 px-8 bg-blue-800">Try Us Now</button>
          </div>
        </div>
        {/* content end */}
      </div>
      {/* banner cntent */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl text-"></h1>
      </div>
    </div>
  );
};

export default About;
