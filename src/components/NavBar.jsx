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
    <div className='w-full px-6 py-4 flex justify-between items-center shadow'>

      <div className="logo text-black text-5xl font-extrabold items-center">
        <p>Weshop.com</p>
      </div>

      {/* fullscreen menu */}
        <ul className='links hidden lg:flex p-0 uppercase tracking-wider'>
          <li className='mr-8 hover:border-b-2 hover:border-[#c67019]'>Home</li>
          <li className='mr-8 hover:border-b-2 hover:border-[#c67019]'>Men's</li>
          <li className='mr-8 hover:border-b-2 hover:border-[#c67019]'>Women's</li>
          <li className='mr-8 hover:border-b-2 hover:border-[#c67019]'>Shop</li>
          <li className='mr-8 hover:border-b-2 hover:border-[#c67019]'>Contact</li>
        </ul>

        <ul className='others flex tracking-widest text-sm text-[#737373] font-thin'>
          <li className='mr-6 hidden lg:flex'>Login/Register</li>
          <li className='mr-6 hidden lg:flex'><BiSearchAlt size={20}/></li>
          <li className='mr-6'>
            <div>
              <span className='absolute w-4 h-4 bg-red-600 rounded-full text-center top-6 text-white text-xs lg:top-6 lg:right-10'>2</span>
              <p><TiShoppingCart size={20}/></p>
            </div>
          </li>
        </ul>
        {/* fullscreen menu ends here */}

      <div onClick={handleNav} className="block lg:hidden">
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>


        {/* mobile menu */}

        <div className={nav ? 'fixed h-[85%] top-[5.2rem] left-0 w-[60%] shadow transition-all ease-in-out duration-500 lg:hidden' : 'fixed left-[-100%] lg:hidden'}>

          <ul className='links flex flex-col p-4 uppercase tracking-wider'>
            <li className='p-6 px-3 hover:text-white hover:border-b-2 hover:bg-[#c67019] hover:translate-x-4 duration-200'>Home</li>
            <li className='p-6 px-3 hover:text-white hover:border-b-2 hover:bg-[#c67019] hover:translate-x-4 duration-200'>Men's</li>
            <li className='p-6 px-3 hover:text-white hover:border-b-2 hover:bg-[#c67019] hover:translate-x-4 duration-200'>Women's</li>
            <li className='p-6 px-3 hover:text-white hover:border-b-2 hover:bg-[#c67019] hover:translate-x-4 duration-200'>Shop</li>
            <li className='p-6 px-3 hover:text-white hover:border-b-2 hover:bg-[#c67019] hover:translate-x-4 duration-200'>Contact</li>
          </ul>

          <ul className='others flex flex-col p-7 tracking-widest text-sm text-[#737373] font-thin'>
            <li className='text-[#c67019] align-left'>Login/Register</li>
            <li className='my-10'> <input className="border border-[#c67019] border-opacity-50 rounded-md py-4 px-3 w-64 sm:w-80" type="search" name="search" id="" placeholder="Search..."/></li>
          </ul>
        </div>
    </div>
  );
};

export default NavBar;
