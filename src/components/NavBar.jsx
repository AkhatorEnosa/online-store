import React, { useState } from "react";
import { BiSearchAlt } from 'react-icons/bi';
import { TiShoppingCart } from 'react-icons/ti';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='w-full px-6 py-4 mb-4 flex justify-between items-center shadow'>

      <div className="logo text-black text-5xl font-extrabold items-center">
        <p>Shopaman.com</p>
      </div>

      {/* fullscreen menu */}
        <ul className='links hidden lg:flex p-0 uppercase tracking-wider'>
          <li className='mr-8 hover:text-[#c67019] cursor-pointer duration-300'>Home</li>
          <li className='mr-8 hover:text-[#c67019] cursor-pointer duration-300'>Men's</li>
          <li className='mr-8 hover:text-[#c67019] cursor-pointer duration-300'>Women's</li>
          <li className='mr-8 hover:text-[#c67019] cursor-pointer duration-300'>Shop</li>
          <li className='mr-8 hover:text-[#c67019] cursor-pointer duration-300'>Contact</li>
        </ul>

        <ul className='others flex tracking-widest text-sm text-[#737373] font-thin'>
          <li className='mr-6 hidden lg:flex hover:text-black cursor-pointer duration-300'>Login/Register</li>
          <li className='mr-6 hidden lg:flex'><BiSearchAlt size={20}/></li>
          <li className='mr-6'>
            <div>
              <span className='absolute w-4 h-4 bg-red-600 rounded-full text-center top-6 text-white text-xs lg:top-6 lg:right-10'>2</span>
              <p><TiShoppingCart size={20}/></p>
            </div>
          </li>
        </ul>
        {/* fullscreen menu ends here */}

      <div onClick={handleNav} className="block lg:hidden duration-200">
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>


        {/* mobile menu */}

        <div className={nav ? 'fixed h-[87%] top-[5.2rem] left-0 w-[60%] bg-white  overflow-y-scroll shadow transition-all duration-400 lg:hidden' : 'fixed left-[100%] lg:hidden'}>

          <ul className='links flex flex-col p-4 uppercase tracking-wider'>
            <li className='p-6 px-3 hover:text-[#c67019] hover:border-b-[1px] hover:border-b-[#c67019] hover:translate-x-4 duration-200 cursor-pointer '>Home</li>
            <li className='p-6 px-3 hover:text-[#c67019] hover:border-b-[1px] hover:border-b-[#c67019] hover:translate-x-4 duration-200 cursor-pointer '>Men's</li>
            <li className='p-6 px-3 hover:text-[#c67019] hover:border-b-[1px] hover:border-b-[#c67019] hover:translate-x-4 duration-200 cursor-pointer '>Women's</li>
            <li className='p-6 px-3 hover:text-[#c67019] hover:border-b-[1px] hover:border-b-[#c67019] hover:translate-x-4 duration-200 cursor-pointer '>Shop</li>
            <li className='p-6 px-3 hover:text-[#c67019] hover:border-b-[1px] hover:border-b-[#c67019] hover:translate-x-4 duration-200 cursor-pointer '>Contact</li>
          </ul>

          <ul className='others flex flex-col p-7 tracking-widest text-sm text-[#737373] font-thin'>
            <li className='text-[#c67019] align-left cursor-pointer '>Login/Register</li>
            <li className='my-10'> <input className="border border-[#c67019] border-opacity-50 rounded-md py-4 px-3 w-full" type="search" name="search" id="" placeholder="Search..."/></li>
          </ul>
        </div>
    </div>
  );
};

export default NavBar;
