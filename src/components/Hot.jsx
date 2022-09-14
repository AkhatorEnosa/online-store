import React from 'react';
import Shoe  from '../assets/shoe.png';

const Hot = () => {
  return (
    <div className='w-full h-screen grid grid-cols-2'>
      <div className='bg-red-900 mr-2'>
        <div className=''>
          <img src={Shoe} alt="shoe" />
          <h1>Hot Sale</h1>
          <h2>50% off</h2>
          <p><span className='line-through'>₦30,000</span> ₦15,0000</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum placeat numquam ipsam dolor ut, voluptate voluptas voluptatem deserunt eligendi itaque omnis optio fuga provident dignissimos debitis tempore rem tenetur repudiandae!</p>
          <button className='px-3 py-2 bg-[#c67019] w-44'>Buy Now</button>
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
