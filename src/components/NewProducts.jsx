// import React, { useState } from 'react';
import NewProductsCard from './NewProductsCard';

const NewProducts = (props) => {
  return (
    <div className='md:px-10 px-10 z-30 py-20'>
      <div className="w-full flex flex-col">
          <h1 className='text-2xl font-bold uppercase border-b-2 border-[#fe4343] w-fit pr-5 mt-4 mb-10 '>New Arrivals</h1>
          <div className='grid md:grid-cols-4 grid-cols-2'>
            {
            props.products.map(item => {
              return (
                <NewProductsCard key={item.id} item={item} handleClick={props.addItem} cart={props.cart}/>
              );
            }).slice(0,4)}
          </div>
      </div>
    </div>
  );
};

export default NewProducts;
