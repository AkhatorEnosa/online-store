import React from 'react';
import Bag from '../assets/bag.jpg';
import {AiFillStar} from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai';
import { AiFillHeart, AiTwotoneShopping} from "react-icons/ai";

const Sections = () => {
  return (
    <div className='grid grid-cols-3 lg:grid-cols-1 py-6 px-6'>
      <div className="flex flex-col">
        <h1>Hot Trend</h1>
        <div className="flex border-2 py-0">
          <img src={Bag} alt="item" className='scale-[.4]'/>
          <div className='w-full flex flex-col align-middle justify-center items-centerpx-2'>
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
