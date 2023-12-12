import React from 'react'

const Footer = () => {
  return (
      <div className='w-full bg-[#2a5174]  bottom-0'>
          
          <div className="max-w-7xl mx-auto text-white p-8">
              <h1 className="text-2xl text-center">MetaPlanet {new Date().getFullYear()}</h1>
              <p className="text-center">By ⚡</p>
          </div>
      </div>
  )
}

export default Footer