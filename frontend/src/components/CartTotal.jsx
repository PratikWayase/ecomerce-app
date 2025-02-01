import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const { currency, getCartAmount, getCartQuantity } = useContext(ShopContext);

  // Calculate dynamic delivery fee (10% of subtotal)
  const subtotal = getCartAmount();
  const delivery_fee = subtotal === 0 ? 0 : (subtotal * 0.1).toFixed(2);

  return (
    <div className="w-full pt-5  p-4rounded-lg min-h-[150px]">
      {/* Title Section */}
      <div className="text-2xl mb-4">
        <Title text1="CART" text2="TOTALS" />
      </div>

      {/* Cart Totals */}
      <div className="flex flex-col gap-4 text-sm">
        {/* Subtotal */}
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency}
            {subtotal.toFixed(2)}
          </p>
        </div>

        {/* Shipping Fee */}
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency}
            {delivery_fee}
          </p>
        </div>

        {/* Total */}
        <div className="flex justify-between font-bold text-lg">
          <p>Total</p>
          <p>
            {currency}
            {(subtotal + parseFloat(delivery_fee)).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
