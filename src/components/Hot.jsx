import React from 'react';
import Shoe  from '../assets/shoe.png';

const Hot = () => {
  return (
    <div className='w-full flex flex-col justify-center h-fit py-12 -mt-8 md:py-8'>
          <h1 className='w-fit px-2 pb-4 pr-20 text-sm'>Welcome, Guest</h1>
          <div className="grid md:grid-cols-2 grid-cols-1 px-4">

            <div className='z-10 w-full bg-[#f6f6f6] shadow-sm rounded-md mb-4 md:mb-0'>
                  <h3 className='bg-[#fed243] w-fit mb-2 px-2 uppercase text-center'>New</h3>
              <div className="flex px-3 items-start">
                  <p className='absolute uppercase font-bold text-6xl text-center tracking-tighter'>50<span className='text-[#313030]'>% </span><span className='text-red-500'>OFF</span></p>
                <div className="w-full flex justify-end">
                  <img src={Shoe} alt="shoe" className='w-full '/>
                </div>
              </div>

              <div className='mt-2 px-3'>
                <h2 className='font-extrabold text-4xl'>Nike Air Max 270</h2>
                <p className='text-[1.2rem] mb-3 mt-2 z-20 font-light'>PRICE: <span className='line-through text-gray-500 opacity-75'>₦50,000</span> ₦25,000</p>
                <p>Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colors.</p>
                <button className='px-8 py-2 hover:bg-[#fed243] hover:text-black bg-[#000] text-white my-4 shadow-md duration-300'>Buy Now</button>
              </div>
            </div>

            <div className='grid grid-cols-2 md:ml-3 md:mt-0 ml-0 mt-5'>

              <div className='flex flex-col justify-between rounded-md mr-2 mb-2  shadow-sm bg-[#f6eaea]'>
                    <h3 className='bg-[#fed243] w-fit px-1 text-center'>Latest phones</h3>
                  <div className="w-full flex flex-col justify-between px-2 items-start pb-2">
                    <img src={Shoe} alt="shoe" className='w-full'/>
                    <p className='text-sm sm:text-xs'>Nike's first lifestyle Air Max brings you style.</p>
                    <button className='px-2 w-fit rounded-sm text-sm py-2 hover:bg-[#fed243] hover:text-black bg-[#000] text-white mt-4 duration-300'>Shop Now</button>
                  </div>
              </div>

              <div className='flex flex-col justify-between shadow-sm rounded-md mb-2 bg-[#f6eaea]'>
                    <h3 className='bg-[#fed243] w-fit px-1 text-center'>Latest phones</h3>
                  <div className="w-full flex flex-col justify-between px-2 items-start pb-2">
                    <img src={Shoe} alt="shoe" className='w-full'/>
                    <p className='text-sm sm:text-xs'>Nike's first lifestyle Air Max brings you style.</p>
                    <button className='px-2 w-fit rounded-sm text-sm py-2 hover:bg-[#fed243] hover:text-black bg-[#000] text-white mt-4 duration-300'>Shop Now</button>
                  </div>
              </div>

              <div className='flex flex-col justify-between shadow-sm mr-2 rounded-md bg-[#f6eaea]'>
                    <h3 className='bg-[#fed243] w-fit px-1 text-center'>Latest phones</h3>
                  <div className="w-full flex flex-col justify-between px-2 items-start pb-2">
                    <img src={Shoe} alt="shoe" className='w-full'/>
                    <p className='text-sm sm:text-xs'>Nike's first lifestyle Air Max brings you style.</p>
                    <button className='px-2 w-fit rounded-sm text-sm py-2 hover:bg-[#fed243] hover:text-black bg-[#000] text-white mt-4 duration-300'>Shop Now</button>
                  </div>
              </div>

              <div className='flex flex-col justify-between shadow-sm rounded-md bg-[#f6eaea]'>
                    <h3 className='bg-[#fed243] w-fit px-1 text-center'>Latest phones</h3>
                  <div className="w-full flex flex-col justify-between px-2 items-start pb-2">
                    <img src={Shoe} alt="shoe" className='w-full'/>
                    <p className='text-sm sm:text-xs'>Nike's first lifestyle Air Max brings you style.</p>
                    <button className='px-2 w-fit rounded-sm text-sm py-2 hover:bg-[#fed243] hover:text-black bg-[#000] text-white mt-4 duration-300'>Shop Now</button>
                  </div>
              </div>
            </div>
        </div>
    </div>
  );
};

export default Hot;
