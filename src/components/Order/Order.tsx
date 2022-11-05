import React from 'react';

interface OrderList {
  name: string;
  count: number;
  priceForOne: number;
  deleteBtn: React.MouseEventHandler;
}

const Order: React.FC<OrderList> = ({name, count, priceForOne, deleteBtn}) => {
  return (
    <div>
      {name} x{count} {priceForOne} KGS
      <button type="button" onClick={deleteBtn}>X</button>
    </div>
  );
};

export default Order;