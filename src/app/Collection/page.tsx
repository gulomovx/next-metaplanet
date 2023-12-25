"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { exploreWorlds } from "../../constants/data";
import { GoArrowDown } from "react-icons/go";
const Collection = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className=" h-screen mx-auto  bg-gradie0  ">
      <div className="flex flex-col items-center  text-center    ">
        <h1 className=" text-3xl flex lg:text-7xl my-2 text-title">C<span className="inline-block lg:w-[120px] w-22  lg:border-[10px] my-auto h-[25px] lg:h-[60px] border-[5px] lg:px-6 px-4  mx-[2px] border-[#124660]  lg:rounded-[32px] rounded-[30px]"></span>llection </h1>
        <GoArrowDown
          size={50}
          className="text-center border rounded-full p-2 animate-bounce"
        />
        <h1 className="text-2xl">Inspiration</h1>
      </div>
    </div>
  );
};

export default Collection;
