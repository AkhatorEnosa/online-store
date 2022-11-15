import React from 'react';

const Cart = (props) => {
  return (
      <div className={!props.show ?  'hidden' : 'w-full h-screen absolute z-50 backdrop-blur-lg' }>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="p-20 bg-white/80 rounded-md w-80 text-center">
              <h1 className='text-4xl'>cart</h1>
          </div>
          <button className='bg-black/90 px-6 py-2 mt-2 rounded text-sm w-fit text-white' onClick={props.handleShow}>Close</button>
        </div>
      </div>
  );
};

export default Cart;
