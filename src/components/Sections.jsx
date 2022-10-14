import React from 'react';
import Bag from '../assets/bag.jpg';
import {AiFillStar} from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai';
import { AiFillHeart, AiTwotoneShopping} from "react-icons/ai";

const Sections = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 py-6 px-6'>
      <div className="flex flex-col md:m-6 -mb-2 md:p-4 p-2 -pb-5 w-full">
        <h1 className='uppercase border-b-2 border-[#fed243] w-fit pr-5 mb-10 '>Hot Trend</h1>

        <div className="flex md:flex-row flex-col mb-12 md:items-start items-center bg-yellow-400">
            <img src={Bag} alt="item" className='md:w-24 w-40 md:h-24'/>
            <div className='flex flex-col bg-red-400 h-[100%] md:m-0 md:ml-10 mt-5'>
              <span className=''>School bag</span>
              <div className='text-small flex'>
                <AiFillStar className='text-[#fed243]'/>
                <AiFillStar className='text-[#fed243]'/>
                <AiFillStar className='text-[#fed243]'/>
                <AiFillStar className='text-[#fed243]'/>
                <AiOutlineStar/>
                </div>
              <p className='font-bold text-xl'>₦10,500</p>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default Sections;
