// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import Shoe from '../assets/shoe.png';

const HotSection = (props) => {
  let img = "";
  let img2 = "";

  return (
  <div className='flex md:flex-col justify-evenly'>

    <div className='w-full h-fit flex flex-col justify-between rounded-md shadow-sm bg-[#f6f6f6] overflow-clip group cursor-pointer'> 

        {
          props.products.filter(x => {
            if((x.category === props.category1) && (x.id === 12)){
              img = x.image;
            }
          })
        }
        <h3 className='bg-[#fed243] w-fit px-1 pr-4 text-center rounded-1xl mb-3'>Latest {props.category1}</h3>
      <div className="w-full flex flex-col justify-between px-2 pb-2">
        <div className="w-full h-[250px] flex justify-center bg-white rounded-1xl overflow-hidden">
          <img src={img} alt="product_img" className='p-4 group-hover:scale-125 duration-300'/>
        </div>
        <button className='py-2 w-full rounded-sm text-sm hover:font-bold mt-4 rounded-1xl text-center underline tracking-wider duration-300 ease-in-out'>Explore</button>
      </div>
    </div>

    <div className='w-full h-fit flex flex-col justify-between rounded-md shadow-sm bg-[#f6f6f6] overflow-clip group cursor-pointer'> 

        {
          props.products.filter(y => {
            if((y.category === props.category2)){
              img2 = y.image;
            }
          })
        }
        <h3 className='bg-[#fed243] w-fit px-1 pr-4 text-center rounded-1xl mb-3'>Latest {props.category2}</h3>
      <div className="w-full flex flex-col justify-between px-2 pb-2">
        <div className="w-full h-[250px] flex justify-center bg-white rounded-1xl overflow-hidden">
          <img src={img2} alt="product_img" className='p-4 group-hover:scale-125 duration-300'/>
        </div>
        <button className='py-2 w-full rounded-sm text-sm hover:font-bold mt-4 rounded-1xl text-center underline tracking-wider duration-300 ease-in-out'>Explore</button>
      </div>
    </div>
  </div>
  );
};

export default HotSection;
