"use client";
import Image from "next/image";
import Link from "next/link";
import bg from "../../public/cover.png";
import bg1 from "../../public/planet-08.png";
import bg2 from "../../public/planet-02.png";
import { GoArrowRight, GoArrowUp } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import { BsHeadsetVr } from "react-icons/bs";

export default function Home() {
  return (
    <div
      className="max-w-7xl mx-auto "
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // width:'500px'
      }}
    >
      <div className=" w-full my-8 ">
        <h1 className="text-4xl md:text-5xl lg:text-7xl mb-8 text-center text-slate-700">
          {" "}
          Through Metaverse
        </h1>
        <div className="relative">
          <Image
            alt="sdf"
            src={bg}
            // width={1000}
            // height={300}
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-xl"
          />
          <div className="absolute flex items-center gap-8 animate-pulse h-24  text-white  top-[100px] md:top-[200px] lg:top-[300px] left-12">
            <h1 className=" text-6xl lg:text-8xl backdrop-blur-sm">Meta</h1>
            <GoArrowRight
              size={80}
              className="border animate animate-infinite animate-fade-right delay-200 animate-duration-1000 rounded-full p-2 animate"
            />
          </div>
        </div>
        {/*  */}
      </div>
      {/* hero content */}
      <div className="flex flex-col items-center lg:mt-24 text-center">
        <h1 className=" text-3xl lg:text-7xl my-2">Explore MetaPlanet </h1>
        <GoArrowDown
          size={50}
          className="text-center border rounded-full p-2 animate-bounce"
        />
      </div>

      <div className=" w-full flex mb-36    flex-col md:flex-row gap-4 md:gap-8 mt-12 lg:gap-16 md:items-center ">
        <Image
          alt="sdf"
          src={bg1}
          width={1000}
          height={800}
          className=" w-full md:w-[500px] lg:w-[700px] h-[400px] object-cover rounded-xl "
        />
        {/* hero content text info */}
        <div className="text-center md:text-start">
          <h1 className="text-3xl md:text-5xl ">Metaverse</h1>
          <p className="my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            repellendus culpa sunt, eum quia expedita nostrum rem tempore
            ratione recusandae iusto magnam ex neque aspernatur minus eos
            inventore deserunt qui.
          </p>
          <Link
            href="/About"
            className="bg-blue-500 mx-auto flex items-center group gap-4 w-[200px] md:w-[250px] md:ml-0     relative   py-2 px-16  text-white"
          >
            Explore
            <GoArrowRight
              color=""
              size={20}
              className="group-hover:ml-2 duration-200  "
            />
          </Link>
        </div>
      </div>
      {/* home content */}
      {/* another content */}
      <h1 className=" text-3xl lg:text-7xl text-center">Metaverse arts</h1>
      <div className="text-center mx-auto my-2 border-2 border-slate-700 w-[150px]"></div>
      <div className=" my-8  text-white flex flex-col lg:flex-row justify-between items-center   h-full w-full bg-[#052465] rounded-md 
"
      >
        <div className=" w-full lg:w-[50%] p-8">
          
          <h1 className=" text-3xl lg:text-5xl">Pick your best one</h1>
          <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam consequuntur obcaecati aut quam nemo illum consequatur aspernatur atque error distinctio.</p>
          <Link href={'/Gallery'} className="bg-white w-[180px] flex group items-center gap-2 my-8 text-slate-700 py-2 px-12">
            Send
            <GoArrowRight className="group-hover:translate-x-1 duration-300" size={30}/>
          </Link>
        </div>
        
        <div className="p-2 lg:p-8">
          <Image
            className=" w-full lg:w-[500px] h-[300px] rounded-2xl object-cover"
            src={bg2}
            alt="sdf"
          />
        </div>
      </div>
      {/* end */}
      <Link href={'/'}>

        <GoArrowUp color="black"  className="bg-slate-200 block   w-12 h-12 p-2 ml-auto my-2 animate-bounce text-slate-800 rounded-full"/>
      </Link>
      <div className=" ">
      </div>
    </div>
  );
}
