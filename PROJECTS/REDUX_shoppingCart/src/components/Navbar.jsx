import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import logo from "./logo.png";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="flex items-center justify-between p-4 text-black">
      {/* Logo */}
      <NavLink to="/">
        <img src={logo} alt="Logo" className="h-8" />
      </NavLink>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <NavLink to="/" className="text-lg hover:text-gray-400">
          Home
        </NavLink>

        <NavLink to="/cart" className="relative flex items-center space-x-2">
          <FaCartShopping className="text-xl" />
          {cart.length > 0 && (
            <span className="absolute -top-2 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
          <span>Cart</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
