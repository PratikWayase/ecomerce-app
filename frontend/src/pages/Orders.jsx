import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16">
      {/* Title Section */}
      <div className="text-2xl">
        <Title text1="MY" text2="ORDERS" />
      </div>

      {/* Orders List */}
      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-600 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            {/* Product Details */}
            <div className="flex items-start gap-6 text-sm">
              {/* Product Image */}
              <img className="w-16 sm:w-20" src={item.image[0]} alt={item.name} />

              {/* Product Info */}
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className="mt-2">
                  Date: <span className="text-gray-500">27, Jan, 2025</span>
                </p>
              </div>
            </div>

            {/* Order Status and Action */}
            <div className="md:w-1/2 flex justify-between">
              {/* Order Status */}
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">Ready to Ship</p>
              </div>

              {/* Track Order Button */}
              <button className="border px-4 py-2 text-sm font-medium rounded">
                Track Orders
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
