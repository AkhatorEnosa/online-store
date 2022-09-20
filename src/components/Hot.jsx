import React from 'react';
import Shoe  from '../assets/shoe.png';

const Hot = () => {
  return (
    <div className='w-full h-screen'>
          {/* <h1 className='bg-[#ff1c1c] text-white rounded-br-lg shadow-md w-fit px-2 py-2 pr-20 tracking-widest uppercase'>Hot Sale</h1> */}
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className='z-10 w-full'>
              <div className="flex px-6 items-start">
                <p className='absolute uppercase font-bold text-4xl bg-red-600 px-6 py-4 rounded-full text-white text-center'>50<span className='text-black'>% </span><br/><span className='font-light text-2xl '>OFF</span></p>
                <div className="w-full flex justify-end z-10 ">
                  <img src={Shoe} alt="shoe" className='-scale-x-100'/>
                </div>
              </div>

              <div className='mt-2'>
              <p className='text-2xl z-20 font-light'><span className='line-through text-gray-500 opacity-75'>₦30,000</span> ₦15,0000</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum placeat numquam ipsam dolor ut, voluptate voluptas voluptatem deserunt eligendi itaque omnis optio fuga provident dignissimos debitis tempore rem tenetur repudiandae!</p>
                <button className='px-8 py-2 rounded-md hover:bg-[#ff1c1c] bg-[#ff9123] text-white my-4 duration-300'>Buy Now</button>
              </div>
          </div>

          <div className='grid grid-cols-2'>
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
