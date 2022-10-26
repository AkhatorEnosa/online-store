import React from 'react';
import ShopBag from '../assets/happy.png';

const MegaSales = () => {
  return (
    <div className="w-full flex justify-center align-middle bg-[#f7f5ed] items-center px:10 sm:px-20 py-20 shadow-sm z-30">
        <img src={ShopBag} alt="shopping bag" className='lg:w-[30rem] md:w-[25rem] w-[10rem]'/>
      <div className="flex flex-col ml-10 z-50">
        <p className='md:text-base text-xs'>THE BIGGEST SALE OF THE YEAR</p>
        <h1 className='lg:text-7xl text-3xl tracking-tight font-extrabold'>Mega Shopping Fiesta</h1>
        <button className="px-8 py-2 hover:bg-[#fe4343] hover:text-black bg-[#000] text-white my-4 shadow-md duration-300">
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default MegaSales
