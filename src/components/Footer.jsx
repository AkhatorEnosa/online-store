import React from 'react';
import {AiFillCar} from 'react-icons/ai';
import {FaMoneyBill} from 'react-icons/fa';
import {BsHeadphones} from 'react-icons/bs';
import {FaUserShield} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full flex justify-around p-10 pt-0'>
      <div className='flex flex-col bg-slate-500 max-w-[450px] px-5 py-2'>
        <div className="logo text-black text-5xl font-extrabold items-center mb-6">
          <p>Shaup.com</p>
        </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt sequi nostrum at explicabo. Ullam tempora quisquam vel non!</p>
          <div className="flex">
            <AiFillCar className='text-[#3b3521]' size={60}/>
            <AiFillCar className='text-[#3b3521]' size={60}/>
            <AiFillCar className='text-[#3b3521]' size={60}/>
            <AiFillCar className='text-[#3b3521]' size={60}/>
          </div>
      </div>

      <div className="flex flex-col bg-red-500 px-5 py-2">
        <h1 className='text-1xl font-bold uppercase mb-4'>Quick Links</h1>
        <div className="flex flex-col">
          <ul className='font-extralight'>
            <li className='my-2'>About</li>
            <li className='my-2'>Blogs</li>
            <li className='my-2'>Contact</li>
            <li className='my-2'>FAQ</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col bg-red-500 px-5 py-2">
        <h1 className='text-1xl font-bold uppercase mb-4'>Account</h1>
        <div className="flex flex-col">
          <ul className='font-extralight'>
            <li className='my-2'>About</li>
            <li className='my-2'>Blogs</li>
            <li className='my-2'>Contact</li>
            <li className='my-2'>FAQ</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col bg-red-500 py-2 pl-2 pr-10">
        <h1 className='text-1xl font-bold uppercase mb-4'>Newsletter</h1>
        <div className="flex border-[1px] border-[#ccc] rounded-full py-1 px-2">
          <input type="text" placeholder='Email' className='mr-6'/>
          <button className="bg-black text-white font-sm py-2 px-5 rounded-full">
            Subscribe
          </button>
          </div>
          <div className="flex mt-7">
            <span className='bg-[#fed243] rounded-full p-2 mx-2'>
              <AiFillCar className='text-[#3b3521]' size={20}/>
            </span>
            <span className='bg-[#fed243] rounded-full p-2 mx-2'>
              <AiFillCar className='text-[#3b3521]' size={20}/>
            </span>
            <span className='bg-[#fed243] rounded-full p-2 mx-2'>
              <AiFillCar className='text-[#3b3521]' size={20}/>
            </span>
            <span className='bg-[#fed243] rounded-full p-2 mx-2'>
              <AiFillCar className='text-[#3b3521]' size={20}/>
            </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
