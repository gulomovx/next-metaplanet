"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { exploreWorlds } from "../../constants/data";
import { GoArrowDown } from "react-icons/go";
import bg1 from "../../asset/collect.jpg";
import bg2 from "../../../public/planet-05.png";
import data from '../../constants/data'
// import { url } from "inspector";
import Image from "next/image";
const Collection = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [img, setImg] = useState(data)
console.log(img);

  return (
    <div className="  mx-auto   ">
      <div className="flex flex-col items-center  text-center    ">
        <h1 className=" text-3xl flex lg:text-5xl my-2 mt-2 text-title animate-fade-down">
          C
          <span className="inline-block lg:w-[120px] w-[6 0px]  lg:border-[7px] my-auto h-[25px] lg:h-[40px] border-[4px] lg:px-6 px-4  mx-[2px] border-[#124660]  lg:rounded-[32px] rounded-[30px]"></span>
          llection{" "}
        </h1>
        <GoArrowDown
          size={40}
          className="text-center border rounded-full p-2 animate-bounce"
        />
        {/* <h1 className="text-2xl">Inspiration</h1> */}
      </div>
      <div
        className={`max-w-[1500px] py-12 animate-fade-up  duration-300 transition-all  lg:mt-4 mb-36 mx-auto  object-cover rounded-[70px] glassmorphis bg-gradient-to-r from-cyan-700 via-blue to-blue-900 text-white`}
      >
        {/* <h1 className="lg:text-3xl text-3xl py-6 mt-[-20px]  tracking-widest text-center ">
          Meta assets
        </h1> */}
        <div className="max-w-[90%] animate-fade-right animate-delay-500  mx-auto  flex flex-col lg:flex-row justify-center gap-12 items-center text-white  backdrop-blu    duration-300 transition-all   bg-whit  rounded-[30px] lg:p-8 p-2  text-3xl">
          {/* <Image
            alt="img"
            src={bg1}
            className="rounded-2xl lg:w-[400px] lg:h-[300px]  object-cover"
          /> */}
          <div style={{
              backgroundImage: `url(${bg1.src})`,
              // width: "100%",
              // height: "100%",
            }} className="lg:w-[500px] p-8  lg:h-[400px] w-full h-full  rounded-2xl">
            <div className=" h-full flex flex-col text-title p-4 items-cente backdrop-blur-md bg-white/20  bg rounded-2xl">
              

              <Image alt="img" src={bg2} className={`rounded-lg w-full h-full object-cover`} />
              <h1 className="text-white text-md my-2 ">Meta Asset</h1>
              <p className="text-white text-sm my-2">Lorem ipsum dolor sit amet consectetur.</p>
              {/* <h1 className="text-4xl text-title ">Web</h1> */}
              {/* <p className="text-[22px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, quia!</p> */}
                <button className="bg-slate-700 rounded-2xl text-white text-[20px]">Explore</button>
              
                {/* <div className=""></div> */}
            </div>
          </div>
          <div className="lg:w-[50%] w-full">
            <h1 className="lg:text-5xl text-3xl font-bold my-4"> Bring all meta arts together</h1>
            <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab fuga, facere pariatur doloribus odio tempora aliquid voluptatibus dolore provident veniam!</p>
          </div>
        </div>
        
      </div>
      {/* img grid */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center animate-fade-up  lg:text-6xl text-3xl text-title mb-8">Art collecti<span className="inline-block lg:w-[100px] w-[40px]  lg:border-[7px] my-auto h-[20px] lg:h-[38px] border-[4px] lg:px-6 px-4  mx-[2px] border-[#124660]  lg:rounded-[32px] rounded-[30px]"></span>ns</h1>
        {/* grid */}
        
        
      </div>
    </div>
  );
};

export default Collection;
