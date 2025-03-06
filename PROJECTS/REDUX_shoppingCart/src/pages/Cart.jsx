import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
      {cart.length > 0 ? (
        <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-grow space-y-4">
              {cart.map((product, index) => (
                <CartItem
                  product={product}
                  key={product.id}
                  productIndex={index}
                />
              ))}
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md w-full md:w-1/3">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
              <p className="text-gray-700 mb-2">Total Items: {cart.length}</p>
              <p className="text-gray-700 mb-4">Total Amount: <span className="font-bold text-green-600">${totalAmount.toFixed(2)}</span></p>
              <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-12">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Your Cart is Empty</h1>
          <NavLink to="/">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;