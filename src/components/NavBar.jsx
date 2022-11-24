import React, { useState } from "react";
import { BiSearchAlt } from 'react-icons/bi';
import { TiShoppingCart } from 'react-icons/ti';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavBar = (props) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='w-full px-6 py-4 mb-4 flex justify-between items-center shadow fixed bg-white z-50'>

      <div className="logo text-black text-5xl font-extrabold items-center">
        <p>Shaup.com</p>
      </div>

      {/* fullscreen menu */}
        <ul className='links hidden lg:flex p-0 tracking-wider text-sm'>
          <li className='mr-8 cursor-pointer duration-300 hover:border-b-[1px] hover:border-b-[#fe4343]'>Home</li>
          <li className='mr-8 cursor-pointer duration-300 hover:border-b-[1px] hover:border-b-[#fe4343]'>Phones & accessories</li>
          <li className='mr-8 cursor-pointer duration-300 hover:border-b-[1px] hover:border-b-[#fe4343]'>Clothing</li>
          <li className='mr-8 cursor-pointer duration-300 hover:border-b-[1px] hover:border-b-[#fe4343]'>Electronics</li>
          <li className='mr-8 cursor-pointer duration-300 hover:border-b-[1px] hover:border-b-[#fe4343]'>Contact</li>
        </ul>

        <ul className='others flex tracking-widest text-sm text-black justify-end align-bottom items-center'>
          <li className='mr-6 hidden lg:flex hover:text-[#fe4343] cursor-pointer duration-300 underline'>Login/Register</li>
          <li className='mr-6 hidden lg:flex cursor-pointer hover:text-[#fe4343]'><BiSearchAlt size={20}/></li>
          <li className='mr-6 p-2' onClick={props.handleShow}>
            <div className="cursor-pointer">
              <span className='absolute w-4 h-4 bg-red-600 rounded-full text-center top-6 text-white font-bold text-xs lg:top-6 lg:right-10'>{props.itemCount}</span>
              <p className="flex justify-center"><TiShoppingCart size={20}/></p>
            </div>
          </li>
        </ul>
        {/* fullscreen menu ends here */}

      <div onClick={handleNav} className="block lg:hidden duration-200">
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>


        {/* mobile side menu */}

        <div className={nav ? 'fixed h-full top-0 left-0 w-[60%] px-6 py-4 bg-white overflow-y-scroll shadow-lg transition-all duration-300 z-50 lg:hidden' : 'fixed top-0 -left-96 lg:hidden transition-all duration-300'}>

        <div className="logo text-black text-5xl font-extrabold items-center">
          <p>Shaup.com</p>
        </div>

          <ul className='links flex flex-col p-4 uppercase tracking-wider text-xs md:text-sm'>
            <li className='p-6 px-3 hover:border-b-[1px] hover:border-b-[#fe4343] hover:translate-x-4 duration-200 cursor-pointer '>Home</li>
            <li className='p-6 px-3 hover:border-b-[1px] hover:border-b-[#fe4343] hover:translate-x-4 duration-200 cursor-pointer '>Phones & accessories</li>
            <li className='p-6 px-3 hover:border-b-[1px] hover:border-b-[#fe4343] hover:translate-x-4 duration-200 cursor-pointer '>Clothing</li>
            <li className='p-6 px-3 hover:border-b-[1px] hover:border-b-[#fe4343] hover:translate-x-4 duration-200 cursor-pointer '>Electronics</li>
            <li className='p-6 px-3 hover:border-b-[1px] hover:border-b-[#fe4343] hover:translate-x-4 duration-200 cursor-pointer '>Contact</li>
          </ul>

          <ul className='others flex flex-col p-7 tracking-widest text-sm text-[#737373] font-thin'>
            <li className='hover:font-extrabold align-left cursor-pointer underline'>Login/Register</li>
            <li className='my-10'> <input className="border border-opacity-50 rounded-md py-4 px-3 w-full active:border-black active:outline-none" type="search" name="search" id="" placeholder="Search..."/></li>
          </ul>
        </div>
    </div>
  );
};

export default NavBar;
