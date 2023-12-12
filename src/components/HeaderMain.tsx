import React from "react";
import Link from "next/link";
const HeaderMain = () => {
  return (
    <div className="border-b border-gray-400 py-6">
      <div className="container sm:flex justify-between items-center">
        <div className="font-semibold text-2xl md:text-3xl lg:text-4xl text-center pb-4 sm:pb-0 text-[#0e5274]">
          <Link href="/">MetaPlanet</Link>
        </div>
        {/*  */}
        <div className=" sm:w-[400px] md:w-[60%] relative bg-slate-300   rounded-2xl p-1 text-slate-900">
          <ul className="flex justify-between gap-4 md:mx-16 mx-2 ">
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Gallery">Gallery</Link>
            <Link href="/Collection">Collection</Link>
          </ul>
        </div>
        <div className="hidden md:block">
          <div className="avatar online">
            <div className="w-8 h-8 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
