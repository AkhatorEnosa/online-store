import React from 'react';
import ShopBag from '../assets/happy.png';

const MegaSales = () => {
  return (
    <div className="w-full flex justify-center align-middle bg-[#f7f5ed] items-center px-20 py-10">
        <img src={ShopBag} alt="shopping bag" className='lg:w-[30rem] md:w-[25rem] w-[10rem]'/>
      <div className="flex flex-col ml-10 z-50">
        <p>THE BIGGEST SALE OF THE YEAR</p>
        <h1 className='lg:text-7xl text-3xl tracking-tight font-extrabold fiesta'>Mega Shopping Fiesta</h1>
        <button className="px-8 py-2 hover:bg-[#fed243] hover:text-black bg-[#000] text-white my-4 shadow-md duration-300">
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default MegaSales
