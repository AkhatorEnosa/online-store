import React from 'react';
import Bag from '../assets/bag.jpg';
import {AiFillStar} from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai';
import { AiFillHeart, AiTwotoneShopping} from "react-icons/ai";

const NewProducts = () => {
  return (
    <div className='md:px-28 px-10'>
      <div className="w-full flex flex-col">
          <h1 className='text-2xl font-bold uppercase border-b-2 border-[#fed243] w-fit pr-5 mt-4 mb-10 '>New Arrivals</h1>
          <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2'>
            <div className='shadow my-6 rounded-lg flex flex-col justify-center m-2 align-middle items-center overflow-hidden group duration-300'>
                <div className="flex -translate-y-24 group-hover:translate-y-0 bg-gradient-to-b from-[#fed243]/30 to-white/30 max-h-auto backdrop-blur-lg p-4 w-full rounded-t-lg justify-between box-border pt-6 mb-0 z-50 duration-300">
                  <span className='bg-white hover:bg-[#fe4362] hover:text-[#fff] shadow-md px-2 py-2 rounded-full text-black duration-500'><AiFillHeart size={25}/></span>
                  <span className='bg-white hover:bg-[#437efe] hover:text-[#fff] shadow-md px-2 py-2 rounded-full text-blackduration-500'><AiTwotoneShopping size={25}/></span>
                </div>
              <div className="flex flex-col items-center px-4 -mt-10">
                <img src={Bag} alt="bag" className='mb-5 group-hover:scale-125 duration-300'/>
              </div>
              <div className='w-full flex flex-col align-middle justify-center items-center rounded-b-lg px-2 py-4'>
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
            <div className='shadow my-6 rounded-lg flex flex-col justify-center m-2 align-middle items-center overflow-hidden group duration-300'>
                <div className="flex -translate-y-24 group-hover:translate-y-0 bg-gradient-to-b from-[#fed243]/30 to-white/30 max-h-auto backdrop-blur-lg p-4 w-full rounded-t-lg justify-between box-border pt-6 mb-0 z-50 duration-300">
                  <span className='bg-white hover:bg-[#fe4362] hover:text-[#fff] shadow-md px-2 py-2 rounded-full text-black duration-500'><AiFillHeart size={25}/></span>
                  <span className='bg-white hover:bg-[#437efe] hover:text-[#fff] shadow-md px-2 py-2 rounded-full text-blackduration-500'><AiTwotoneShopping size={25}/></span>
                </div>
              <div className="flex flex-col items-center px-4 -mt-10">
                <img src={Bag} alt="bag" className='mb-5 group-hover:scale-125 duration-300'/>
              </div>
              <div className='w-full flex flex-col align-middle justify-center items-center rounded-b-lg px-2 py-4'>
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
            <div className='shadow my-6 rounded-lg flex flex-col justify-center m-2 align-middle items-center overflow-hidden group duration-300'>
                <div className="flex -translate-y-24 group-hover:translate-y-0 bg-gradient-to-b from-[#fed243]/30 to-white/30 max-h-auto backdrop-blur-lg p-4 w-full rounded-t-lg justify-between box-border pt-6 mb-0 z-50 duration-300">
                  <span className='bg-white hover:bg-[#fe4362] hover:text-[#fff] shadow-md px-2 py-2 rounded-full text-black duration-500'><AiFillHeart size={25}/></span>
                  <span className='bg-white hover:bg-[#437efe] hover:text-[#fff] shadow-md px-2 py-2 rounded-full text-blackduration-500'><AiTwotoneShopping size={25}/></span>
                </div>
              <div className="flex flex-col items-center px-4 -mt-10">
                <img src={Bag} alt="bag" className='mb-5 group-hover:scale-125 duration-300'/>
              </div>
              <div className='w-full flex flex-col align-middle justify-center items-center rounded-b-lg px-2 py-4'>
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
            <div className='shadow my-6 rounded-lg flex flex-col justify-center m-2 align-middle items-center overflow-hidden group duration-300'>
                <div className="flex -translate-y-24 group-hover:translate-y-0 bg-gradient-to-b from-[#fed243]/30 to-white/30 max-h-auto backdrop-blur-lg p-4 w-full rounded-t-lg justify-between box-border pt-6 mb-0 z-50 duration-300">
                  <span className='bg-white hover:bg-[#fe4362] hover:text-[#fff] shadow-md px-2 py-2 rounded-full text-black duration-500'><AiFillHeart size={25}/></span>
                  <span className='bg-white hover:bg-[#437efe] hover:text-[#fff] shadow-md px-2 py-2 rounded-full text-blackduration-500'><AiTwotoneShopping size={25}/></span>
                </div>
              <div className="flex flex-col items-center px-4 -mt-10">
                <img src={Bag} alt="bag" className='mb-5 group-hover:scale-125 duration-300'/>
              </div>
              <div className='w-full flex flex-col align-middle justify-center items-center rounded-b-lg px-2 py-4'>
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
            <div className='shadow my-6 rounded-lg flex flex-col justify-center m-2 align-middle items-center overflow-hidden group duration-300'>
                <div className="flex -translate-y-24 group-hover:translate-y-0 bg-gradient-to-b from-[#fed243]/30 to-white/30 max-h-auto backdrop-blur-lg p-4 w-full rounded-t-lg justify-between box-border pt-6 mb-0 z-50 duration-300">
                  <span className='bg-white hover:bg-[#fe4362] hover:text-[#fff] shadow-md px-2 py-2 rounded-full text-black duration-500'><AiFillHeart size={25}/></span>
                  <span className='bg-white hover:bg-[#437efe] hover:text-[#fff] shadow-md px-2 py-2 rounded-full text-blackduration-500'><AiTwotoneShopping size={25}/></span>
                </div>
              <div className="flex flex-col items-center px-4 -mt-10">
                <img src={Bag} alt="bag" className='mb-5 group-hover:scale-125 duration-300'/>
              </div>
              <div className='w-full flex flex-col align-middle justify-center items-center rounded-b-lg px-2 py-4'>
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
            <div className='shadow my-6 rounded-lg flex flex-col justify-center m-2 align-middle items-center overflow-hidden group duration-300'>
                <div className="flex -translate-y-24 group-hover:translate-y-0 bg-gradient-to-b from-[#fed243]/30 to-white/30 max-h-auto backdrop-blur-lg p-4 w-full rounded-t-lg justify-between box-border pt-6 mb-0 z-50 duration-300">
                  <span className='bg-white hover:bg-[#fe4362] hover:text-[#fff] shadow-md px-2 py-2 rounded-full text-black duration-500'><AiFillHeart size={25}/></span>
                  <span className='bg-white hover:bg-[#437efe] hover:text-[#fff] shadow-md px-2 py-2 rounded-full text-blackduration-500'><AiTwotoneShopping size={25}/></span>
                </div>
              <div className="flex flex-col items-center px-4 -mt-10">
                <img src={Bag} alt="bag" className='mb-5 group-hover:scale-125 duration-300'/>
              </div>
              <div className='w-full flex flex-col align-middle justify-center items-center rounded-b-lg px-2 py-4'>
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
            <div className='shadow my-6 rounded-lg flex flex-col justify-center m-2 align-middle items-center overflow-hidden group duration-300'>
                <div className="flex -translate-y-24 group-hover:translate-y-0 bg-gradient-to-b from-[#fed243]/30 to-white/30 max-h-auto backdrop-blur-lg p-4 w-full rounded-t-lg justify-between box-border pt-6 mb-0 z-50 duration-300">
                  <span className='bg-white hover:bg-[#fe4362] hover:text-[#fff] shadow-md px-2 py-2 rounded-full text-black duration-500'><AiFillHeart size={25}/></span>
                  <span className='bg-white hover:bg-[#437efe] hover:text-[#fff] shadow-md px-2 py-2 rounded-full text-blackduration-500'><AiTwotoneShopping size={25}/></span>
                </div>
              <div className="flex flex-col items-center px-4 -mt-10">
                <img src={Bag} alt="bag" className='mb-5 group-hover:scale-125 duration-300'/>
              </div>
              <div className='w-full flex flex-col align-middle justify-center items-center rounded-b-lg px-2 py-4'>
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
            <div className='shadow my-6 rounded-lg flex flex-col justify-center m-2 align-middle items-center overflow-hidden group duration-300'>
                <div className="flex -translate-y-24 group-hover:translate-y-0 bg-gradient-to-b from-[#fed243]/30 to-white/30 max-h-auto backdrop-blur-lg p-4 w-full rounded-t-lg justify-between box-border pt-6 mb-0 z-50 duration-300">
                  <span className='bg-white hover:bg-[#fe4362] hover:text-[#fff] shadow-md px-2 py-2 rounded-full text-black duration-500'><AiFillHeart size={25}/></span>
                  <span className='bg-white hover:bg-[#437efe] hover:text-[#fff] shadow-md px-2 py-2 rounded-full text-blackduration-500'><AiTwotoneShopping size={25}/></span>
                </div>
              <div className="flex flex-col items-center px-4 -mt-10">
                <img src={Bag} alt="bag" className='mb-5 group-hover:scale-125 duration-300'/>
              </div>
              <div className='w-full flex flex-col align-middle justify-center items-center rounded-b-lg px-2 py-4'>
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
    </div>
  );
};

export default NewProducts;
