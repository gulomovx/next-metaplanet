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
          <ul className="flex justify-between     gap-2  md:mx-16 mx-2 ">
            <Link className={`${path==`/`? `active `:` `}`} href="/">Home</Link>
            <Link className={`${path==`/About`? `active`:` `}`} href="/About">About</Link>
            <Link className={`${path==`/Gallery`? `active`:` `}`} href="/Gallery">Gallery</Link>
            <Link className={`${path==`/Collection`? `active`:` `}`} href="/Collection">Collection</Link>
          </ul>
        </div>
        <div className="hidden md:block">
          <div className="">
            <div className="h-16 w-16  rounded-full flex justify-center cursor-pointer  items-center">
              {/* <FaCartShopping size={30} color='#0d3e67'/> */}
              <img className="hover:scale-110 duration-300 rounded-full z-0 h-12 w-12 object-cover" src="data:image/jpeg;base64,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" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
