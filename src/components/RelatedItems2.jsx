import React from 'react';
import {AiFillStar} from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai';
// import { AiFillHeart, AiTwotoneShopping} from "react-icons/ai";

const RelatedItems2 = ({ cart, item, handleClick }) => {
  const {image, title, price} = item;
  
    return (
      <div className='shadow my-6 rounded-lg flex flex-col justify-center md:text-xs lg:text-base m-2 items-center duration-300 text-center'>
  
          <div className="flex flex-col items-center px-2 overflow-hidden">
            <img src={image} alt="bag" className='mb-2 lg:h-10'/>
          </div>
  
          <div className='relative w-full flex flex-col justify-center items-center rounded-b-lg px-2 py-2 text-xs '>
            <span className='tip w-full px-2 text-ellipsis overflow-hidden whitespace-nowrap cursor-pointer z-50'>{title}</span>
            <span className='tooltip absolute w-full px-2 py-2 bg-black/90 text-white text-[10px] text-center -top-1 rounded-sm opacity-0 transition-all duration-300'>{title}</span>
            <div className='text-xs flex'>
              <AiFillStar className='text-[#fe4343]'/>
              <AiFillStar className='text-[#fe4343]'/>
              <AiFillStar className='text-[#fe4343]'/>
              <AiFillStar className='text-[#fe4343]'/>
              <AiOutlineStar/>
              </div>
            <p className='font-bold text-sm'>₦{(price) * 500}</p>
            {/* <p className='bg-slate-600/20 rounded-md text-xs'>{category}</p> */}
            
            <button className={!cart.includes(item) ? "p-2 py-2 w-fit lg:mt-2 hover:bg-[#fe4343] bg-[#000]/90 text-white rounded-md shadow-md duration-300": "p-2 py-2 w-fit lg:mt-2 bg-[#fe4343] text-white rounded-md opacity-30 cursor-not-allowed"} onClick={()=>handleClick(item)}>
              {cart.includes(item) ? "Already In Cart" : "Add to Cart"}
            </button>
          </div>
  
      </div>
    );
};

export default RelatedItems2;
