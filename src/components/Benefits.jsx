import React from 'react';
import {AiFillCar} from 'react-icons/ai';
import {FaMoneyBill} from 'react-icons/fa';
import {BsHeadphones} from 'react-icons/bs';
import {FaUserShield} from 'react-icons/fa';

const Countdown = () => {
  return (
    <div className='w-full grid md:grid-cols-4 grid-cols-2 justify-between bg-amber-500/20 p-10 -mt-10'>
      <div className="flex flex-col mx-auto font-bold items-center p-7 text-center">
        <AiFillCar className='text-[#3b3521]' size={60}/>
        Free Shipping
        <p className='font-light text-sm mt-2'>For all order above 50,000</p>
      </div>
      <div className="flex flex-col mx-auto font-bold items-center p-7 text-center">
        <FaMoneyBill className='text-[#3b3521]' size={60}/>
        Money Back Guarantee
        <p className='font-light text-sm mt-2'>For all order above 50,000</p>
      </div>
      <div className="flex flex-col mx-auto font-bold items-center p-7 text-center">
        <BsHeadphones className='text-[#3b3521]' size={60}/>
        24/7 Online Support
        <p className='font-light text-sm mt-2'>For all order above 50,000</p>
      </div>
      <div className="flex flex-col mx-auto font-bold items-center p-7 text-center">
        <FaUserShield className='text-[#3b3521]' size={60}/>
        Secure Payment
        <p className='font-light text-sm mt-2'>For all order above 50,000</p>
      </div>
    </div>
  );
};

export default Countdown;
