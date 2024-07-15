import React from 'react';
import Item from './Item';
import RelatedItems from './RelatedItems';
import RelatedItems2 from './RelatedItems2';
import {AiOutlineClose} from 'react-icons/ai';
import Checkout from './Checkout';
// import { useState } from 'react';

const Cart = ({products, cart, addItem, removeItem, items, show, handleShow}) => {
  if(items.length < 1) {
    return (
        <div className={show === false ?  'hidden' : 'w-full h-screen fixed z-50 backdrop-blur-lg duration-300'}>
          <div className="w-full h-full flex flex-col items-center justify-center">
            <AiOutlineClose className='w-10 h-10 p-2 hover:bg-black/90 hover:text-white rounded-full text-md md:text-2xl text-black/90 absolute right-10 top-8 duration-300 cursor-pointer' onClick={()=>handleShow(show)}/>
            <div className="w-[80%] h-[80%] bg-white/90 rounded-lg shadow-lg px-4 py-4 grid grid-cols-4 gap-4 items-center">
              <div className="h-full grid grid-rows-5 col-span-3">
                  <div className='w-full row-span-1 flex justify-center items-center'>
                    <h1 className='cart-h w-fit border-b-black/10 text-2xl font-black border-b-2 mt-5 mb-10 uppercase text-center'>Your cart({items.length} Item)</h1>
                  </div>
                <div className="relative w-full h-full row-span-4 flex flex-col ">
                  <div className='mt-24 flex flex-col justify-center items-center h-44'>
                    <svg width="706" height="631" viewBox="0 0 706 631" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="Group 2">
                      <path id="Vector" d="M171 631C189.225 631 204 616.225 204 598C204 579.775 189.225 565 171 565C152.775 565 138 579.775 138 598C138 616.225 152.775 631 171 631Z" fill="#563D3D"/>
                      <path id="Vector_2" d="M496 631C514.225 631 529 616.225 529 598C529 579.775 514.225 565 496 565C477.775 565 463 579.775 463 598C463 616.225 477.775 631 496 631Z" fill="#563D3D"/>
                        <g id="Group 1">
                        <path id="Vector_3" d="M550 554H114V550.86H546.862V398.514H150.653L131.406 358.359L134.234 357L152.627 395.372H550V554Z" fill="#412E2E"/>
                        <path id="Vector_4" d="M596.689 346H106.143L0 0H706L705.358 2.03574L596.689 346ZM108.465 342.869H594.386L701.72 3.13115H4.24359L108.465 342.869Z" fill="#412E2E"/>
                        <path id="Vector_5" d="M558.006 329H127.213L34 21H654L653.436 22.8135L558.006 329Z" fill="#F2F2F2"/>
                        <path id="Vector_6" d="M671 105H34V108H671V105Z" fill="#412E2E"/>
                        <path id="Vector_7" d="M634 221H69V224H634V221Z" fill="#412E2E"/>
                        <path id="Vector_8" d="M354 1H351V345H354V1Z" fill="#412E2E"/>
                        <path id="Vector_9" d="M495.018 0.943723L472.467 344.928L475.602 345.134L498.153 1.14927L495.018 0.943723Z" fill="#412E2E"/>
                        <path id="Vector_10" d="M210.641 0.940089L207.506 1.14444L229.926 345.138L233.061 344.933L210.641 0.940089Z" fill="#412E2E"/>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <h1 className='cart-h text-sm text-black/40 border-b-2 border-black/20 mb-4'>
                  Quick Picks
                </h1>
                {
                  products.map(item => {
                    return (
                      <RelatedItems key={item.id} item={item} handleClick={addItem}/>
                    );
                  }).slice(0,3)}
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
            <div className="w-[80%] h-[80%] bg-white/90 rounded-lg shadow-lg px-4 py-4 grid grid-cols-3 lg:grid-cols-5 gap-4 items-center">
              <div className="h-full overflow-scroll col-span-1 lg:col-span-3">
                <div className="flex justify-center">
                  <h1 className='cart-h w-fit h-full border-b-black/10 text-2xl font-black border-b-2 mb-2 uppercase text-center'>Your cart({items.length} Item)</h1>
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                  {items.map((item) => {
                    return(
                      <Item key={item.id} item={item} handleRemoveItem={removeItem}/>
                    )
                  })}
                </div>
              </div>
              <div className='h-full col-span-2'>
                <h1 className='cart-h text-sm text-black/40 border-b-2 border-black/20 mb-4'>
                  Checkout
                </h1>
                <Checkout />
                <div className=''>
                  <h1 className='cart-h text-sm text-black/40 border-b-2 border-black/20 mb-4'>
                    Related items
                  </h1>
                  <div className='grid grid-cols-3 gap-1 overflow-scroll'>
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
          </div>
        </div>
    );
};

export default Cart;
