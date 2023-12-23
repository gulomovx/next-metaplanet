'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCartShopping } from "react-icons/fa6";

const HeaderMain = () => {
  const path = usePathname()
  
  
  
  return (
    <div className="border-b    border-slate-800 shadow-sm py-2 sticky top-0 z-20 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-100">
      <div className="container  sm:flex justify-between items-center ">
        <div className="font-semibold   text-2xl md:text-3xl lg:text-4xl text-center pb-4 sm:pb-0 text-[#0b4b66]">
          <Link href="/">MetaPlanet </Link>
        </div>
        {/*  */}
        <div className=" sm:w-[400px] md:w-[60%] relative bg-orange-30    p-1 text-slate-900">
          <ul className="flex justify-between  gap-2  md:mx-16 mx-2 ">
            <Link className={`${path==`/`? `active`:` `}`} href="/">Home</Link>
            <Link className={`${path==`/About`? `active`:` `}`} href="/About">About</Link>
            <Link className={`${path==`/Gallery`? `active`:` `}`} href="/Gallery">Gallery</Link>
            <Link className={`${path==`/Collection`? `active`:` `}`} href="/Collection">Collection</Link>
          </ul>
        </div>
        <div className="hidden md:block">
          <div className="">
            <div className="  flex justify-center cursor-pointer hover:scale-110 duration-300 items-center">
              <FaCartShopping size={30} color='#0d3e67'/>
              {/* <img src="https://www.pexels.com/photo/fashion-photography-of-woman-hands-on-chin-with-glitter-makeup-1081685" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
