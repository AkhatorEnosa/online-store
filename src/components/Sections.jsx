import React from 'react';
// import Bag from '../assets/bag.jpg';
import {AiFillStar} from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai';

const Sections = (props) => {
  return (
    <div className='w-full h-fit grid md:grid-cols-2 grid-cols-1 py-20'>
      <div className="flex flex-col mx-2 -mb-2 md:p-4 p-2 -pb-5">
        <h1 className='uppercase border-b-2 border-[#fe4343] w-fit pr-5 mb-10 font-bold'>Hot Trend</h1>

        {

            props.products.map(x => {
              return (
                <div key={x.id} className="flex mb-12 items-start justify-start px-5">
                    <img src={x.image} alt="item" className='md:w-36 w-40 md:h-36'/>
                    <div className='flex flex-col justify-between md:m-0 ml-10 md:ml-10 mt-5 self-center'>
                      <span className='text-sm mb-2'>{x.title}</span>
                      <div className='text-small flex'>
                        <AiFillStar className='text-[#fe4343]'/>
                        <AiFillStar className='text-[#fe4343]'/>
                        <AiFillStar className='text-[#fe4343]'/>
                        <AiFillStar className='text-[#fe4343]'/>
                        <AiOutlineStar/>
                        </div>
                      <p className='font-bold text-md mt-2'>₦{(x.price) * 500}</p>
                    </div>
                </div> 
                )
          }).slice(0,3)
        }
      </div>

      <div className="flex flex-col mx-2 -mb-2 md:p-4 p-2 -pb-5">
        <h1 className='uppercase border-b-2 border-[#fe4343] w-fit pr-5 mb-10 font-bold'>Best Sellers</h1>

        {

            props.products.map(x => {
              return (
                <div key={x.id} className="flex mb-12 items-start justify-start px-5">
                    <img src={x.image} alt="item" className='md:w-36 w-40 md:h-36'/>
                    <div className='flex flex-col justify-between md:m-0 ml-10 md:ml-10 mt-5 self-center'>
                      <span className='text-sm mb-2'>{x.title}</span>
                      <div className='text-small flex'>
                        <AiFillStar className='text-[#fe4343]'/>
                        <AiFillStar className='text-[#fe4343]'/>
                        <AiFillStar className='text-[#fe4343]'/>
                        <AiFillStar className='text-[#fe4343]'/>
                        <AiOutlineStar/>
                        </div>
                      <p className='font-bold text-md mt-2'>₦{(x.price) * 500}</p>
                    </div>
                </div> 
                )
          }).reverse().slice(0,3)
        }
      </div>
    </div>
  );
};

export default Sections;
