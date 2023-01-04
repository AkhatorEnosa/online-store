import React from 'react';
import Item from './Item';
import RelatedItems from './RelatedItems';
import RelatedItems2 from './RelatedItems2';
import {AiOutlineClose} from 'react-icons/ai';
// import { useState } from 'react';

const Cart = ({products, cart, addItem, items, show, handleShow}) => {
  if(items.length < 1) {
    return (
        <div className={show === false ?  'hidden' : 'w-full h-screen fixed z-50 backdrop-blur-lg duration-300'}>
          <div className="w-full h-full flex flex-col items-center justify-center">
            <AiOutlineClose className='w-10 h-10 p-2 hover:bg-black/90 hover:text-white rounded-full text-md md:text-2xl text-black/90 absolute right-10 top-8 duration-300 cursor-pointer' onClick={()=>handleShow(show)}/>
            <div className="w-[80%] h-[80%] bg-white/90 rounded-lg shadow-lg px-4 py-4 grid grid-cols-4 gap-4 items-center">
              <div>
                <h1 className='cart-h text-sm text-black/40 border-b-2 border-black/20 mb-4'>
                  Related items
                </h1>
                {
                  products.map(item => {
                    return (
                      <RelatedItems key={item.id} item={item} handleClick={addItem}/>
                    );
                  }).slice(0,3)}
              </div>
              <div className="h-full col-span-3">
                <div className="flex justify-center">
                  <h1 className='cart-h w-fit border-b-black/10 text-2xl font-black border-b-2 mt-5 mb-10 uppercase text-center'>Your cart({items.length} Item)</h1>
                </div>
                <div className="w-full h-80 flex flex-col justify-center items-center">
                  <p>No item yet oooooo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
    return (
        <div className={show === false ?  'hidden' : 'w-full h-screen fixed z-50 backdrop-blur-lg duration-300' }>
          <div className="w-full h-full flex flex-col items-center justify-center">
            <AiOutlineClose className='w-10 h-10 p-2 hover:bg-black/90 hover:text-white rounded-full text-md md:text-2xl text-black/90 absolute right-10 top-8 duration-300 cursor-pointer' onClick={()=>handleShow(show)}/>
            <div className="w-[80%] h-[80%] bg-white/90 rounded-lg shadow-lg px-4 py-4 grid grid-cols-5 gap-4 items-center">
              <div className='h-full col-span-2'>
                <h1 className='cart-h text-sm text-black/40 border-b-2 border-black/20 mb-4'>
                  Checkout
                </h1>
                {
                  products.map(item => {
                    return (
                      <RelatedItems2 key={item.id} item={item} handleClick={addItem} cart={cart}/>
                    );
                  }).slice(0,3)}
              </div>
              <div className="h-full overflow-scroll col-span-2">
                <div className="flex justify-center">
                  <h1 className='cart-h w-fit h-full border-b-black/10 text-2xl font-black border-b-2 mb-2 uppercase text-center'>Your cart({items.length} Item)</h1>
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                  {items.map((item) => {
                    return(
                      <Item key={item.id} item={item}/>
                    )
                  })}
                </div>
              </div>
              <div className='h-full col-span-1'>
                <h1 className='cart-h text-sm text-black/40 border-b-2 border-black/20 mb-4'>
                  Related items
                </h1>
                {
                  products.map(item => {
                    return (
                      <RelatedItems2 key={item.id} item={item} handleClick={addItem} cart={cart}/>
                    );
                  }).slice(0,3)}
              </div>
            </div>
          </div>
        </div>
    );
};

export default Cart;
