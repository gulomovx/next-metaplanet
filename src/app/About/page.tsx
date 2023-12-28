"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GoArrowDown } from "react-icons/go";
import { exploreWorlds } from "../../constants/data";
import ReactPlayer from "react-player";
import bg from "../../../public/planet-07.png";
import hero from "../../../public/stamp.png";
import art from "../../../public/planet-07.png";
import art2 from "../../../public/planet-08.png";
import art3 from "../../../public/planet-09.png";
import Link  from "next/link";
import { GoArrowUp } from "react-icons/go";
const About = () => {
  const [data, setData] = useState(exploreWorlds);

  return (
    <div className="h-full  ">
      <div className="flex  flex-col  items-center  text-center bg-no-repeat bg-cover">
        <h1 className=" text-4xl lg:text-7xl my-4 text-title animate-fade-down duration-500">About </h1>
        <GoArrowDown
          // size={50}
          className="text-center lg:text-[60px] text-[40px] border rounded-full 
           p-2 animate-bounce"
        />
        {/* content */}
        <div className=" lg:w-[1400px] animate-fade-up delay-[300ms] w-full mb-8 lg:p-16 p-1  bg-gradient-to-br from-blue-400 to bg-orange-300 border-slate-800 my-2  rounded-lg   ">
          <div className="lg:w-[80%] mx-auto py-4">
            <h1 className=" lg:text-xl text-slate-600 my-4">
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
            <button className="mt-8 text-white py-2 px-8 bg-blue-800">
              Try Us Now
            </button>
          </div>
        </div>
        {/* content end */}
        {/* card grid */}
        <h1 className="lg:text-5xl text-3xl mt-8">Latest Arts</h1>
        <div className="flex mb-24 max-w-8xl mt-8  flex-col md:flex-row lg:flex-row gap-4  ">
          <div className="h-full mx-auto">
            {/* one img */}
            <Image
              src={art}
              alt="art"
              className="lg:w-[800px] lg:h-[500px] h-[200px] w-[400px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col   gap-4 justify-between mx-auto">
            {/* two imges */}
            <div className="h-full ">
              <Image
                src={art2}
                alt="art"
                className="w-[400px] h-full  object-cover rounded-2xl"
              />{" "}
            </div>
            <div className="h-full">
              <Image
                src={art3}
                alt="art"
                className="w-[400px] h-full  object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* banner cntent */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl text-"></h1>
      </div>
      <Link href="/About">
        <GoArrowUp
          color="black"
          className="bg-slate-200 block   w-12 h-12 p-2 ml-auto my-2 animate-bounce text-slate-800 rounded-full"
        />
      </Link>
    </div>
  );
};

export default About;
