import React, { useEffect } from 'react';
import { useState } from 'react';
import HotSection from './HotSection';

const Hot = (props) => {
const [category, setCategory] = useState([]);

  useEffect(()=> {
    let mounted = true;

    fetch('https://fakestoreapi.com/products/categories')
    .then(response => {
      if(response.ok) {
        return response.json()
      }
      throw response;
    })
    .then(data => {
      if(mounted) {
        setCategory(data);
      }
    })
    .catch(error => {
      console.error(error)
    })

    return () => mounted  = false;
  }, []);

  if(props.loading && props.error) {
    return (
      <div className='w-full flex flex-col justify-center h-fit pb-6 pt-0 md:py-8'>
            <h1 className='w-fit px-2 pb-4 pr-20 text-sm text-white'>Welcome, Guest</h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 px-4">
    
                <div className='z-10 w-full col-span-2 bg-[#f6f6f6] shadow-sm rounded-md mb-4 md:mb-0'>
                      <h3 className='bg-[#fed243] text-[#fed243] w-fit h-6  mb-2 px-2 uppercase text-center animate-pulse'>d n nvd smn v</h3>
                  <div className="flex px-3 items-start">
                      {/* <p className='absolute uppercase font-bold text-6xl text-center tracking-tighter'>{props.discountPercentage}<span className='text-[#313030]'>% </span><span className='text-red-500'>OFF</span></p> */}
                    <div className="w-full h-[350px] overflow-auto">
                      <div className="w-full h-[350px] flex justify-center items-center align-middle bg-white rounded-1xl animate-pulse">
                        <h3 className='text-3xl uppercase'>Product Image Loading</h3>
                      </div>
                    </div>
                  </div>
    
                        {/* unused code for future purpose, maybe */}
                        {/* PRICE: <span className='line-through text-gray-500 opacity-75'>{((props.price*100)/props.discountPercentage)*500}</span> {props.price*500}</p>
                                        <p>{props.description} */}
    
                  <div className='mt-2 px-3'>
                    <h2 className='font-extrabold text-4xl bg-white text-white rounded-1xl animate-pulse'>Lorem ipsum dolor sit amet consectetur</h2>
                    <p className='text-[1.2rem] mb-3 mt-2 z-20 font-bold bg-white text-white rounded-1xl animate-pulse'>PRICE: ₦{props.price*500} </p>
                    <p className='bg-white text-white rounded-1xl animate-pulse'>21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness</p>
                  </div>
                </div>

              <div className='flex sm:flex-col md:flex-row lg:flex-col justify-between items-center'>

                <div className='w-full flex flex-col justify-between rounded-md shadow-sm mb-6 bg-[#f6f6f6] item'>
                      <h3 className='bg-[#fed243] w-fit px-1 text-center text-[#fed243] rounded-1xl animate-pulse'>Latest phones</h3>
                    <div className="w-full flex flex-col justify-between px-2 pb-2">
                      <div className="w-full h-[250px] flex justify-center items-center align-middle bg-white rounded-1xl animate-pulse">
                        <h3 className='text-sm uppercase items-stretch'>Product Image Loading</h3>
                      </div>
                      <p className='text-sm sm:text-xs text-white bg-white rounded-1xl '>Nike's first lifestyle Air Max brings you style.</p>
                      <button className='px-2 w-full rounded-sm text-sm py-2 text-white mt-4  bg-white rounded-1xl text-white'>Shop Now</button>
                    </div>
                </div>

                <div className='w-full flex flex-col justify-between rounded-md shadow-sm bg-[#f6f6f6]'>
                      <h3 className='bg-[#fed243] w-fit px-1 text-center text-[#fed243] rounded-1xl animate-pulse'>Latest phones</h3>
                    <div className="w-full flex flex-col justify-between px-2 pb-2">
                      <div className="w-full h-[250px] flex justify-center items-center align-middle bg-white rounded-1xl animate-pulse">
                        <h3 className='text-sm uppercase items-stretch'>Product Image Loading</h3>
                      </div>
                      <p className='text-sm sm:text-xs text-white bg-white rounded-1xl '>Nike's first lifestyle Air Max brings you style.</p>
                      <button className='px-2 w-fit rounded-sm text-sm py-2 text-white mt-4  bg-white rounded-1xl'>Shop Now</button>
                    </div>
                </div>
              </div>
          </div>
      </div>
    )
  } else {
      return (
        <div className='w-full flex flex-col pb-6 pt-0 md:py-8'>
          {/* <h1 className='w-fit px-2 pb-4 pr-20 text-sm'>Welcome, Guest</h1> */}
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-0 px-4 overflow-scroll">

            <div className='z-10 w-full col-span-2 bg-[#fcfcfc] rounded-md mb-4 md:mb-0 overflow-clip shadow-md shadow-[#e7e7e7]'>
                  <h3 className='bg-[#fed243] w-fit mb-2 px-2 uppercase text-center'>New</h3>
              <div className="flex px-3 py-5">
                  {/* <p className='absolute uppercase font-bold text-6xl text-center tracking-tighter'>{props.discountPercentage}<span className='text-[#313030]'>% </span><span className='text-red-500'>OFF</span></p> */}
                <div className="w-full h-[450px] overflow-auto rounded-lg">
                  <img src={props.image} alt="shoe" className='w-full'/>
                </div>
              </div>

                    {/* unused code for future purpose, maybe */}
                    {/* PRICE: <span className='line-through text-gray-500 opacity-75'>{((props.price*100)/props.discountPercentage)*500}</span> {props.price*500}</p>
                                    <p>{props.description} */}

              <div className='mt-2 px-3 text-center lg:text-left'>
                <h2 className='font-extrabold text-4xl'>{props.title}</h2>
                <p className='text-[1.2rem] mb-3 mt-2 z-20 font-bold'>PRICE: ₦{(props.price)*500} </p>
                <p>{props.description}</p>
                <button className='px-8 py-2 hover:bg-[#fed243] hover:text-black bg-[#000] text-white my-4 shadow-md duration-300'>Buy Now</button>
              </div>
            </div>

            <HotSection 
              category0={category[2]}
              category1={category[0]}
              category2={category[1]}

              products={props.product}
              category={props.category}
            />
          </div>
        </div>
      );
  }
};

export default Hot;
