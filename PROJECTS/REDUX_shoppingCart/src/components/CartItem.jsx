import React from 'react';
import { useDispatch } from 'react-redux';
import {remove} from "../redux/Slices/CartSlice"
import toast from 'react-hot-toast';
const CartItem = ({ product, productIndex }) => {
  const dispatch=useDispatch();
  const removeFromCart=()=>{
    dispatch(remove(product));
    toast.error("Item Removed from Cart");
  }
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mb-4">
      {/* Product Image */}
      <div className="h-35 w-24">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-1 px-4">
        <p className="text-lg font-semibold text-gray-800">{product.name}</p>
        <p className="text-sm text-gray-500">{product.description}</p>
        <p className="text-md font-bold text-green-600">${product.price}</p>
      </div>

      {/* Remove Button */}
      <button onClick={removeFromCart} className="px-3 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
