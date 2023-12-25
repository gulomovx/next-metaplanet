"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { exploreWorlds } from "../../constants/data";
import { GoArrowDown } from "react-icons/go";
import bg1 from '../../asset/collect.jpg'
import bg2 from '../../../public/planet-05.png'

import { url } from "inspector";
import Image from "next/image";
const Collection = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className=" h-screen mx-auto  bg-gradie0  ">
      <div className="flex flex-col items-center  text-center    ">
        <h1 className=" text-3xl flex lg:text-5xl my-2 text-title">C<span className="inline-block lg:w-[120px] w-[60px]  lg:border-[7px] my-auto h-[25px] lg:h-[40px] border-[4px] lg:px-6 px-4  mx-[2px] border-[#124660]  lg:rounded-[32px] rounded-[30px]"></span>llection </h1>
        <GoArrowDown
          size={40}
          className="text-center border rounded-full p-2 animate-bounce"
        />
        {/* <h1 className="text-2xl">Inspiration</h1> */}
      </div>
      <div   
        className={`max-w-[1500px]  duration-300 transition-all  lg:mt-4 mt-4 mx-auto p-8 object-cover rounded-[70px] glassmorphis bg-gradient-to-r from-cyan-700 via-blue to-blue-900 text-white`}>
        <h1 className="lg:text-5xl text-3xl tracking-widest text-center ">Meta assets</h1>
        <div className="glassmorphis flex gap-8 items-center text-white  backdrop-blur-sm my-6   duration-300 transition-all isolate  bg-white/30  rounded-[30px] lg:p-8 p-2  text-3xl">
          {/* <h1>asdfgh</h1> */}
          <Image
            alt="img"
            src={bg1}
            // width={200}
            // height={400}
            className='rounded-2xl lg:w-[400px] lg:h-[300px]  object-cover'
          />
          {/* <Image
            alt="img"
            src={bg2}
            // width={200}
            // height={400}
            className='rounded-2xl lg:w-[400px] lg:h-[300px]  object-cover'
          /> */}
          
        </div>
      </div>
    </div>
  );
};

export default Collection;
