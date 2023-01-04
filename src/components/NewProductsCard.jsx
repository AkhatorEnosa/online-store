import React from 'react';
import {AiFillStar} from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai';
// import { AiFillHeart, AiTwotoneShopping} from "react-icons/ai";

const NewProductsCard = ({ cart, item, handleClick }) => {
  const {image, title, price} = item;
  return (
    <div className='shadow my-6 rounded-lg flex flex-col justify-center lg:justify-between md:text-xs lg:text-base m-2 align-middle items-center overflow-hidden group duration-300 text-center hover:scale-110'>

                    {/* <div className="flex -translate-y-24 group-hover:translate-y-0 bg-gradient-to-b from-[#fe4343]/30 to-white/30 max-h-auto backdrop-blur-lg p-4 w-full rounded-t-lg justify-between box-border pt-6 mb-0 z-30 duration-300 ">
                      <span className='bg-white hover:bg-[#fe4362] hover:text-[#fff] shadow-md px-2 py-2 rounded-full text-black duration-500'><AiFillHeart size={25}/></span>
                      <span className='bg-white hover:bg-[#437efe] hover:text-[#fff] shadow-md px-2 py-2 rounded-full text-blackduration-500'><AiTwotoneShopping size={25}/></span>
                    </div> */}

                    <div className="flex flex-col items-center px-4 overflow-hidden">
                      <img src={image} alt="bag" className='mb-5 lg:h-64'/>
                    </div>

                    <div className='w-full flex flex-col align-middle justify-center items-center rounded-b-lg px-2 py-4'>
                      <span className=''>{title}</span>
                      <div className='text-small flex'>
                        <AiFillStar className='text-[#fe4343]'/>
                        <AiFillStar className='text-[#fe4343]'/>
                        <AiFillStar className='text-[#fe4343]'/>
                        <AiFillStar className='text-[#fe4343]'/>
                        <AiOutlineStar/>
                        </div>
                      <p className='font-bold text-xl'>₦{(price) * 500}</p>
                      {/* <p className='bg-slate-600/20 rounded-md text-xs'>{category}</p> */}
                      
                      <button className={!cart.includes(item) ? "p-4 py-2 w-fit lg:mt-2 hover:bg-[#fe4343] bg-[#000]/90 text-white rounded-md shadow-md duration-300" : "p-4 py-2 w-fit lg:mt-2 bg-[#fe4343] text-white opacity-30 rounded-md cursor-not-allowed"} onClick={()=>handleClick(item)}>
                       {cart.includes(item) ? "Already In Cart" : "Add to Cart"}
                      </button>
                    </div>

                </div>
  );
};

export default NewProductsCard;
