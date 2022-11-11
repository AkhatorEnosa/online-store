import React from 'react'
import Shoe from '../assets/shoe.png'

const Hero = () => {
  return (
    <div className="w-full h-auto md:h-screen bg-grey flex flex-col lg:grid grid-cols-7 py-20 lg:py-0 mt-6 lg:mt-16 px-8 md:px-16 lg:px-32 md:gap-8 lg:gap-10 justify-around md:justify-evenly items-center bg-[#f6f6f6]">
      <div className="col-span-full lg:col-span-3 lg:py-6 flex flex-col justify-between lg:justify-evenly h-[300px] lg:h-[550px] z-40 order-last lg:order-first lg:text-left text-justify">
        <h1 className="w-fit mt-0 md:mt-14 z-40 bg-[#444]/10">
          <span className="text-[#fe4343] animate-pulse">&#x3C;</span> Hottest
          Sale <span className="text-[#fe4343] animate-pulse">&#62;</span>
        </h1>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-wide">
          Nike Air Max 270
        </h1>
        <p>
          Legendary Air gets lifted First lifestyle Air Max brings you styke, comfort and 270 degrees of Air. Its tinted Air winddow lets you showcase one of our greatest innovations.
        </p>
        <button className="px-10 py-2 lg:py-4 w-fit lg:mt-4 lg:w-full hover:bg-[#fe4343] hover:text-black bg-[#000]/90 text-white shadow-md duration-300">
          Add to cart
        </button>
      </div>

      <div className="img col-span-full lg:col-span-4 order-first lg:order-last z-30 lg:scale-115">
        <img src={Shoe} alt="This is a Product" />
      </div>
    </div>
  )
}

export default Hero
