import React from 'react';
import Shoe  from '../assets/shoe.png';

const Hot = () => {
  return (
    <div className='w-full h-screen flex flex-col'>
        <div className='z-10 w-full h-full p-5'>
          <h1 className='bg-[#ff1c1c] text-white rounded-br-lg shadow-md w-fit px-2 py-2 pr-20 tracking-widest uppercase'>Hot Sale</h1>
          <div className="flex">
            <p className='my-5 uppercase text-[250px] font-black flex items-center'>50<span className='text-[50px] font-light text-[#ff1c1c]'>% </span></p>
            <img src={Shoe} alt="shoe" className='-scale-x-100 ml-28 w-[600px] z-10'/>
          </div>

          <div className='mt-16'>
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
  );
};

export default Hot;
