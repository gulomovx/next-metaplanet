'use client'
import { useState } from "react"
import { motion } from "framer-motion"
import { exploreWorlds } from '../../constants/data'
import {GoArrowDown} from 'react-icons/go'
const Collection = () => {
  const [selectedId, setSelectedId] = useState(null)
  

  return (
    <div className="max-w-7xl h-screen mx-auto ">
      <div className="flex flex-col items-center lg:mt-8 text-center">
        <h1 className=" text-3xl lg:text-7xl my-2 text-title">Collection </h1>
        <GoArrowDown
          size={50}
          className="text-center border rounded-full p-2 animate-bounce"
        />
      </div>{" "}
    </div>
  )
}

export default Collection