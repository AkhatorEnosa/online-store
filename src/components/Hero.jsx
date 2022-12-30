import React, {useState} from 'react'
import Shoe from '../assets/shoe.png'

const Hero = ({ item, handleClick }) => {
  const [headerProduct, setHeaderProduct] = useState({
    category: "men's clothing",
    description: "Legendary Air gets lifted First lifestyle Air Max brings you styke, comfort and 270 degrees of Air. Its tinted Air winddow lets you showcase one of our greatest innovations.",
    id: 444,
    image: {Shoe},
    price: 109.95,
    rating: {rate: 3.9, count: 120},
    title: "Nike Air Max 270"
  });

  const {image, title, price} = item;

  return (
    <div className="w-full h-auto md:h-screen bg-grey flex flex-col lg:grid grid-cols-7 py-20 lg:py-0 mt-6 lg:mt-16 px-8 md:px-16 lg:px-32 md:gap-8 lg:gap-10 justify-around md:justify-evenly items-center bg-[#f6f6f6]">
      <div className="col-span-full lg:col-span-3 lg:py-6 flex flex-col justify-between lg:justify-evenly h-[200px] md:h-[400px] lg:h-[550px] z-40 order-last lg:order-first lg:text-left text-justify">
        <h1 className="w-fit sm:mt-0 md:mt-14 lg:mt-0 z-40 bg-[#444]/10">
          <span className="text-[#fe4343] animate-pulse">&#x3C;</span> Hottest
          Sale <span className="text-[#fe4343] animate-pulse">&#62;</span>
        </h1>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-wide">
          {headerProduct.title}
        </h1>
        <p>
          {headerProduct.description}
        </p>
        <button className="px-10 py-2 lg:py-4 w-fit lg:mt-4 lg:w-full hover:bg-[#fe4343] bg-[#000]/90 text-white shadow-md duration-300" onClick={()=> { handleClick(item) }}>
          Add to cart
        </button>
      </div>

      <div className="img col-span-full lg:col-span-4 order-first lg:order-last z-30 lg:scale-115">
        <img src={headerProduct.image} alt="This is a Product" />
      </div>
    </div>
  )
}

export default Hero
