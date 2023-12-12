"use client";
import Image from "next/image";
import Link from "next/link";
import bg from "../../public/cover.png";
import bg1 from "../../public/planet-08.png";
import { GoArrowRight } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";

export default function Home() {
  return (
    <div
      className="max-w-7xl mx-auto"
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
            <h1 className="text-6xl backdrop-blur-sm">Meta</h1>
            <GoArrowRight size={80} className="border rounded-full p-2 animate"/>
          </div>
        </div>
        {/*  */}
      </div>
      {/* hero content */}
      <div className="flex flex-col items-center lg:mt-24 text-center">

      <h1 className=" text-3xl lg:text-7xl my-2">Get started</h1>
        <GoArrowDown size={50} className="text-center border rounded-full p-2 animate-bounce" />
      </div>
        
      <div className=" w-full flex mb-36   flex-col md:flex-row gap-4 md:gap-8 mt-12 lg:gap-16 md:items-center ">
        <Image
          alt="sdf"
          src={bg1}
          width={1000}
          height={800}
          className="w-[700px] h-[400px] object-cover rounded-xl"
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
      <div
        className=" "
        
      >
        
      </div>
    </div>
  );
}
