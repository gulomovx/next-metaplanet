import React from 'react'
import { FaFacebook,FaShoppingCart, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const HeaderTop = () => {
  return (
      <div className='border-b border-slate-200 hidden sm:block bg-[#2a5174]'>
          
          
          <div className="container py-4">
              <div className="flex justify-between items-center">
                  <div className="hidden lg:flex gap-1">
                      <div className="header_top_wrapper">
                        <FaFacebook/>  
                      </div>
                      <div className="header_top_wrapper">
                        <FaTwitter/>  
                      </div>
                      <div className="header_top_wrapper">
                        <FaInstagram/>  
                      </div>
                      <div className="header_top_wrapper">
                        <FaLinkedin/>  
                      </div>
                  </div>
                  {/* icons end */}
                  {/* heading text */}
                  <div className="text-white text-[25px]">
                      <h1 className="font-medium ">Explore metaverse arts</h1>
                  </div>
                  {/* cart icon */}
                  <div className=" rounded-full cursor-pointer p-2 bg-white hover:scale-110 duration-300 hover:bg-inherit hover:text-white ">
                      <FaShoppingCart/>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default HeaderTop