'use client'
import Image from "next/image";
import React, { useState } from "react";
import { GoArrowDown } from "react-icons/go";
import {exploreWorlds} from '../../constants/data'
const About = () => {
  const [data, setData]=useState(exploreWorlds)
  // console.log(data);
  
  return (
    <div className="max-w-7xl h-screen mx-auto ">
      <div className="flex flex-col items-center lg:mt-8 text-center">
        <h1 className=" text-3xl lg:text-7xl my-2 text-title">About </h1>
        <GoArrowDown
          size={50}
          className="text-center border rounded-full p-2 animate-bounce"
        />
      </div>
      {/* banner cntent */}
      <div className="">
        
      </div>
    </div>
  );
};

export default About;
