'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderMain = () => {
  const path = usePathname()
  console.log(path);
  
  
  
  return (
    <div className="border border-gray-400 py-2 sticky top-0 z-20 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-100">
      <div className="container sm:flex justify-between items-center">
        <div className="font-semibold text-2xl md:text-3xl lg:text-4xl text-center pb-4 sm:pb-0 text-[#124660]">
          <Link href="/">MetaPlanet</Link>
        </div>
        {/*  */}
        <div className=" sm:w-[400px] md:w-[60%] relative bg-slate-300   rounded-2xl p-1 text-slate-900">
          <ul className="flex justify-between gap-4 md:mx-16 mx-2 ">
            <Link className={`${path==`/`? `active`:` `}`} href="/">Home</Link>
            <Link className={`${path==`/About`? `active`:` `}`} href="/About">About</Link>
            <Link className={`${path==`/Gallery`? `active`:` `}`} href="/Gallery">Gallery</Link>
            <Link className={`${path==`/Collection`? `active`:` `}`} href="/Collection">Collection</Link>
          </ul>
        </div>
        <div className="hidden md:block">
          <div className="avatar online">
            <div className="w-10 h-10 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
