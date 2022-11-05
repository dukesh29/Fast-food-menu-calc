import React from 'react';

interface totalPrice {
  getTotalPrice:number;
}

const Total:React.FC<totalPrice> = ({getTotalPrice}) => {
  return (
    <div>
      <div><strong>Total Price:{getTotalPrice}</strong></div>
    </div>
  );
};

export default Total;