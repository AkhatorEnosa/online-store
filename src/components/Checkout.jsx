import React from 'react';

const Checkout = ({vat, subtotal, total}) => {
  return (
    <div className='w-full px-4 py-4 bg-yellow-400/10 rounded-md text-sm'>
      <div className="my-2">
        <p className='text-xs text-[#fe4343]'>Have Coupon code?</p>
        <div className="flex justify-between mt-4 text-sm">
          <input type="text" name="coupon" id="coupon" className='px-6 py-2 lg:py-4 w-80 shadow-sm rounded-lg rounded-tr-none rounded-br-none'/>
          <button className="px-6 py-2 lg:py-4 w-fit hover:bg-[#fe4343] bg-[#000]/90 text-white rounded-tr-lg rounded-br-lg shadow-md">Apply</button>
        </div>
      </div>
      <div className="w-full flex justify-between my-2 font-bold">
        <span>Subtotal:</span>
        <span>₦ {subtotal}</span>
      </div>
      <div className="w-full flex justify-between my-2 font-bold">
        <span>VAT: <p className='font-base text-[10px] text-black/70'>Approx. 7.5%</p></span>
        <span>₦ {vat}</span>
      </div>
      <div className="cart-h lg:text-2xl w-full flex justify-between my-2 font-bold">
        <span>Grand Total:</span>
        <span>₦ {total}</span>
      </div>
      <div className="w-full flex justify-between my-2">
          <button className="px-6 py-2 lg:py-4 w-full hover:bg-[#fe4343] bg-[#000]/90 text-white shadow-md">Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;
