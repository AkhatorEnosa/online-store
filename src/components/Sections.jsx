import React from 'react';
import Bag from '../assets/bag.jpg';
import {AiFillStar} from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai';

const Sections = () => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-2 md:p-6 p-8 pb-3'>
      <div className="flex flex-col md:m-6 -mb-2 md:p-4 p-2 -pb-5 w-full md:border-l-2 border-yellow-200/20">
        <h1 className='uppercase border-b-2 border-[#fed243] w-fit pr-5 mb-10 '>Hot Trend</h1>

        <div className="flex mb-12 items-start justify-start text-center">
            <img src={Bag} alt="item" className='md:w-36 w-24 md:h-36'/>
            <div className='flex flex-col justify-between md:m-0 md:ml-10 mt-5 self-center'>
              <span className='text-sm'>School bag</span>
              <div className='text-small flex'>
                <AiFillStar className='text-[#fed243]'/>
                <AiFillStar className='text-[#fed243]'/>
                <AiFillStar className='text-[#fed243]'/>
                <AiFillStar className='text-[#fed243]'/>
                <AiOutlineStar/>
                </div>
              <p className='font-bold text-md'>₦10,500</p>
            </div>
        </div>

        <div className="flex mb-12 items-start justify-start text-center">
            <img src={Bag} alt="item" className='md:w-36 w-24 md:h-36'/>
            <div className='flex flex-col justify-between md:m-0 md:ml-10 mt-5 self-center'>
              <span className='text-sm'>School bag</span>
              <div className='text-small flex'>
                <AiFillStar className='text-[#fed243]'/>
                <AiFillStar className='text-[#fed243]'/>
                <AiFillStar className='text-[#fed243]'/>
                <AiFillStar className='text-[#fed243]'/>
                <AiOutlineStar/>
                </div>
              <p className='font-bold text-md'>₦10,500</p>
            </div>
        </div>

        <div className="flex mb-12 items-start justify-start text-center">
            <img src={Bag} alt="item" className='md:w-36 w-24 md:h-36'/>
            <div className='flex flex-col justify-between md:m-0 md:ml-10 mt-5 self-center'>
              <span className='text-sm'>School bag</span>
              <div className='text-small flex'>
                <AiFillStar className='text-[#fed243]'/>
                <AiFillStar className='text-[#fed243]'/>
                <AiFillStar className='text-[#fed243]'/>
                <AiFillStar className='text-[#fed243]'/>
                <AiOutlineStar/>
                </div>
              <p className='font-bold text-md'>₦10,500</p>
            </div>
        </div>
      </div>
      

      <div className="flex flex-col md:m-6 -mb-2 md:p-4 p-2 -pb-5 w-full md:border-l-2 border-yellow-200/20">
        <h1 className='uppercase border-b-2 border-[#fed243] w-fit pr-5 mb-10 '>Best Sellers</h1>

        <div className="flex mb-12 items-start justify-start text-center">
            <img src={Bag} alt="item" className='md:w-36 w-24 md:h-36'/>
            <div className='flex flex-col justify-between md:m-0 md:ml-10 mt-5 self-center'>
              <span className='text-sm'>School bag</span>
              <div className='text-small flex'>
                <AiFillStar className='text-[#fed243]'/>
                <AiFillStar className='text-[#fed243]'/>
                <AiFillStar className='text-[#fed243]'/>
                <AiFillStar className='text-[#fed243]'/>
                <AiOutlineStar/>
                </div>
              <p className='font-bold text-md'>₦10,500</p>
            </div>
        </div>

        <div className="flex mb-12 items-start justify-start text-center">
            <img src={Bag} alt="item" className='md:w-36 w-24 md:h-36'/>
            <div className='flex flex-col justify-between md:m-0 md:ml-10 mt-5 self-center'>
              <span className='text-sm'>School bag</span>
              <div className='text-small flex'>
                <AiFillStar className='text-[#fed243]'/>
                <AiFillStar className='text-[#fed243]'/>
                <AiFillStar className='text-[#fed243]'/>
                <AiFillStar className='text-[#fed243]'/>
                <AiOutlineStar/>
                </div>
              <p className='font-bold text-md'>₦10,500</p>
            </div>
        </div>

        <div className="flex mb-12 items-start justify-start text-center">
            <img src={Bag} alt="item" className='md:w-36 w-24 md:h-36'/>
            <div className='flex flex-col justify-between md:m-0 md:ml-10 mt-5 self-center'>
              <span className='text-sm'>School bag</span>
              <div className='text-small flex'>
                <AiFillStar className='text-[#fed243]'/>
                <AiFillStar className='text-[#fed243]'/>
                <AiFillStar className='text-[#fed243]'/>
                <AiFillStar className='text-[#fed243]'/>
                <AiOutlineStar/>
                </div>
              <p className='font-bold text-md'>₦10,500</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
