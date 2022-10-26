// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import Shoe from '../assets/shoe.png';

const HotSection = (props) => {

  return (
  <div className='hidden md:grid md:grid-cols-3 lg:grid-cols-1 sm:justify-center items-center mt-6 lg:mt-0'>

    <div className='flex flex-col justify-between m-3 lg:m-0 rounded-md shadow-md group overflow-clip cursor-pointer'>
        <h3 className='bg-black/80 font-light text-white w-fit px-1 pr-4 text-center rounded-1xl mb-3'>Latest {props.category0}</h3>
      <div className="w-full flex flex-col justify-between px-2 pb-2">
        <div className="w-full lg:h-[150px] h-[250px] lg:scale-150 flex justify-center py-4 rounded-1xl overflow-hidden">
          <img src={props.products[3].image} alt="product_img" className='p-4 group-hover:scale-125 duration-300'/>
        </div>
        <button className='py-2 w-fit px-3 mx-auto text-sm hover:font-bold mt-4 rounded-1xl text-center tracking-wider duration-300 ease-in-out shadow-md rounded-md bg-[#fe4343] text-black'>Explore</button>
      </div>
    </div>

    <div className='flex flex-col justify-between m-3 lg:m-0 rounded-md shadow-md group overflow-clip cursor-pointer'>
        <h3 className='bg-black/80 font-light text-white w-fit px-1 pr-4 text-center rounded-1xl mb-3'>Latest {props.category1}</h3>
      <div className="w-full flex flex-col justify-between px-2 pb-2">
        <div className="w-full lg:h-[150px] h-[250px] lg:scale-150 flex justify-center py-4 rounded-1xl overflow-hidden">
          <img src={props.products[9].image} alt="product_img" className='p-4 group-hover:scale-125 duration-300'/>
        </div>
        <button className='py-2 w-fit px-3 mx-auto text-sm hover:font-bold mt-4 rounded-1xl text-center tracking-wider duration-300 ease-in-out shadow-md rounded-md bg-[#fe4343] text-black'>Explore</button>
      </div>
    </div>

    <div className='flex flex-col justify-between m-3 lg:m-0 rounded-md shadow-md group overflow-clip cursor-pointer'>
        <h3 className='bg-black/80 font-light text-white w-fit px-1 pr-4 text-center rounded-1xl mb-3'>Latest {props.category2}</h3>
      <div className="w-full flex flex-col justify-between px-2 pb-2">
        <div className="w-full lg:h-[150px] h-[250px] lg:scale-150 flex justify-center py-4 rounded-1xl overflow-hidden">
          <img src={props.products[6].image} alt="product_img" className='p-4 group-hover:scale-125 duration-300'/>
        </div>
        <button className='py-2 w-fit px-3 mx-auto text-sm hover:font-bold mt-4 rounded-1xl text-center tracking-wider duration-300 ease-in-out shadow-md rounded-md bg-[#fe4343] text-black'>Explore</button>
      </div>
    </div>
  </div>
  );
};

export default HotSection;
