import React from 'react';
import Shoe from '../assets/shoe.png';

const Hero = () => {
  return (
    <div className='w-full h-auto md:h-screen bg-grey flex flex-col lg:grid grid-cols-7 py-20 lg:py-0 mt-6 lg:mt-16 px-8 md:px-16 lg:px-32 md:gap-8 lg:gap-10 justify-around md:justify-evenly items-center bg-[#f6f6f6]'>

      <div className='col-span-full lg:col-span-3 lg:py-6 flex flex-col justify-between lg:justify-evenly h-[300px] lg:h-[550px] z-40 order-last lg:order-first lg:text-left text-justify'>

      <h1 className='w-fit px-5 md:px-10 py:1 md:py-2 bg-[#fe4343] text-white rounded-tl-lg mt-0 md:mt-14 z-40 animate-bounce'><span className='animate-pulse'>Hottest Sale</span></h1>
        <h1 className='text-4xl md:text-5xl lg:text-7xl font-black tracking-wide'>Select Your New and Perfect Style</h1>
        <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore odio tenetur illum doloremque officiis labore, pariatur molestiae dolorum alias placeat numquam, facilis repudiandae soluta maiores. Quidem molestiae exercitationem sunt illo!</p>
        <button className='px-8 py-4 w-fit lg:mt-4 lg:w-full mx-auto hover:bg-[#fed243] hover:text-black bg-[#000] text-white shadow-md duration-300'>Buy Now</button>
      </div>

      <div className="img col-span-full lg:col-span-4 order-first lg:order-last z-30 lg:scale-125">
        <img src={Shoe} alt="This is a Product" />
      </div>

    </div>
  );
};

export default Hero;
