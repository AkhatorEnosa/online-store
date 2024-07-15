import React from 'react';
import {AiFillCloseCircle, AiFillPlusSquare, AiFillMinusSquare} from 'react-icons/ai';

const Item = ({ item, itemNum, handleSum, handleMinus, handleRemoveItem }) => {
  const { image, title, price } = item;
  return (
    <div className='w-full grid grid-cols-4 shadow-md px-4 py-2 m-2 rounded-lg justify-between items-center'>
      <img src={image} alt={title} className="col-span-1 h-20"/>
      <div className="col-span-3">
        <div className="flex flex-col text-xs justify-between">
          <div className="w-full flex justify-between">
            <div>
              <p>{title}</p>
              <p className='font-bold'>₦ {(price) * 500}</p>
            </div>
            <AiFillCloseCircle size={20} className="cursor-pointer" onClick={()=>handleRemoveItem(item)}/>
          </div>

          <div className='w-56 grid grid-cols-3 px-2 mt-4 justify-center items-center'>
            <AiFillMinusSquare className='col-span-1 text-xl hover:2xl cursor-pointer duration-75' onClick={() => handleMinus()}/>
            <span className='col-span-1 text-xl font-bold'>{itemNum}</span>
            <AiFillPlusSquare className='col-span-1 text-xl hover:2xl cursor-pointer duration-75' onClick={() => handleSum()}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
