import React from 'react';
import Shoe  from '../assets/shoe.png';

const Hot = () => {
  return (
    <div className='w-full h-screen'>
          {/* <h1 className='bg-[#ff1c1c] text-white rounded-br-lg shadow-md w-fit px-2 py-2 pr-20 tracking-widest uppercase'>Hot Sale</h1> */}
          <div className="grid md:grid-cols-2 grid-cols-1 px-4">
            <div className='z-10 w-full bg-[#f6f6f6] px-4 shadow-lg'>
                  <h3 className='bg-[#fed243] w-fit mb-2 px-2 m-2 uppercase text-center'>New</h3>
              <div className="flex px-6 items-start">
                  <p className='absolute uppercase font-bold text-4xl text-center'>50<span className='text-[#313030]'>% </span><span className='text-sm text-red-500'>OFF</span></p>
                <div className="w-full flex justify-end">
                  <img src={Shoe} alt="shoe" className='w-full'/>
                </div>
              </div>

              <div className='mt-2'>
                <h2 className='font-bold text-4xl'>Nike Air Max 270</h2>
                <p className='text-2xl z-20 font-light'><span className='line-through text-gray-500 opacity-75'>₦30,000</span> ₦15,0000</p>
                <p>Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colors.</p>
                <button className='px-8 py-2 hover:bg-[#fed243] hover:text-black bg-[#000] text-white my-4 shadow-md duration-300'>Buy Now</button>
              </div>
          </div>

          <div className='grid grid-cols-2 ml-3'>
            <div className='bg-orange-500 mr-2 mb-2'>
              grid2-1
            </div>
            <div className='bg-gray-500 mb-2'>
              grid2-2
            </div>
            <div className='bg-blue-500 mr-2'>
              grid2-3
            </div>
            <div className='bg-pink-500'>
              grid2-4
            </div>
          </div>
          </div>
    </div>
  );
};

export default Hot;
