import React from 'react';

const Item = ({ item }) => {
  const { title } = item;
  return (
    <div>
     <p>{title}</p>
    </div>
  );
};

export default Item;
