import React from 'react';
import {AiFillStar} from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai';
import { AiFillHeart, AiTwotoneShopping} from "react-icons/ai";

const NewProducts = (props) => {
  return (
    <div className='md:px-28 px-10 z-30 py-20'>
      <div className="w-full flex flex-col">
          <h1 className='text-2xl font-bold uppercase border-b-2 border-[#fe4343] w-fit pr-5 mt-4 mb-10 '>New Arrivals</h1>
          <div className='grid md:grid-cols-4 grid-cols-2'>
            {
            props.products.map(x => {
              return (
                <div key={x.id} className='shadow my-6 rounded-lg flex flex-col justify-between m-2 align-middle items-center overflow-hidden group duration-300 text-center'>

                    <div className="flex -translate-y-24 group-hover:translate-y-0 bg-gradient-to-b from-[#fe4343]/30 to-white/30 max-h-auto backdrop-blur-lg p-4 w-full rounded-t-lg justify-between box-border pt-6 mb-0 z-30 duration-300">
                      <span className='bg-white hover:bg-[#fe4362] hover:text-[#fff] shadow-md px-2 py-2 rounded-full text-black duration-500'><AiFillHeart size={25}/></span>
                      <span className='bg-white hover:bg-[#437efe] hover:text-[#fff] shadow-md px-2 py-2 rounded-full text-blackduration-500'><AiTwotoneShopping size={25}/></span>
                    </div>

                    <div className="flex flex-col items-center px-4 -mt-10 overflow-hidden">
                      <img src={x.image} alt="bag" className='mb-5 group-hover:scale-125 duration-300'/>
                    </div>

                    <div className='w-full flex flex-col align-middle justify-center items-center rounded-b-lg px-2 py-4'>
                      <span className=''>{props.title}</span>
                      <div className='text-small flex'>
                        <AiFillStar className='text-[#fe4343]'/>
                        <AiFillStar className='text-[#fe4343]'/>
                        <AiFillStar className='text-[#fe4343]'/>
                        <AiFillStar className='text-[#fe4343]'/>
                        <AiOutlineStar/>
                        </div>
                      <p className='font-bold text-xl'>₦{(x.price) * 500}</p>
                      <p className='bg-slate-600/20 rounded-md text-xs'>{x.category}</p>
                    </div>

                </div>
              );
            }).slice(0,4)}
          </div>
      </div>
    </div>
  );
};

export default NewProducts;
