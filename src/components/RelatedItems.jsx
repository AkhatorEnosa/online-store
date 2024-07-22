import React from 'react';
import {AiFillStar} from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai';
// import { AiFillHeart, AiTwotoneShopping} from "react-icons/ai";

const RelatedItems = ({ item, handleClick }) => {
  const {image, title, price} = item;
  return (
    <div className='shadow my-6 rounded-lg flex flex-col justify-center lg:justify-between md:text-xs lg:text-base m-2 align-middle items-center overflow-hidden group duration-300 text-center'>

        <div className="flex flex-col items-center px-2 overflow-scroll">
          <img src={image} alt="bag" className='mb-2 h-20 md:h-32 lg:h-40 '/>
        </div>

        <div className='w-full flex flex-col align-middle justify-center gap-1 items-center rounded-b-lg px-2 py-2 text-xs'>
          <span className='px-2 text-xs'>{title}</span>
          <div className='flex flex-col text-xs'>
          <span className='flex'>
            <AiFillStar className='text-[#fe4343]'/>
            <AiFillStar className='text-[#fe4343]'/>
            <AiFillStar className='text-[#fe4343]'/>
            <AiFillStar className='text-[#fe4343]'/>
            <AiOutlineStar/>
          </span>
          <p className='font-bold text-xs'>₦{(price) * 500}</p>
          {/* <p className='bg-slate-600/20 rounded-md text-xs'>{category}</p> */}
            </div>
          
          <button className="p-2 py-2 w-fit lg:mt-2 hover:bg-[#fe4343] bg-[#000]/90 text-white rounded-md shadow-md duration-300" onClick={()=>handleClick(item)}>
            Add to cart
          </button>
        </div>

    </div>
  );
};

export default RelatedItems;
