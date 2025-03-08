import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const addToCart = () => {
    dispatch(add(product));
    toast.success("Item Added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(product));
    toast.error("Item Removed from Cart");
  };

  return (
    <div className="shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-lg p-4 flex flex-col items-center m-2 bg-white cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <img
        src={product.image}
        alt={product.title}
        className="h-52 object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg font-bold text-gray-800 text-center mb-2">
        {product.title}
      </h2>
      <div
        className={`text-sm text-gray-600 text-center mb-4 ${
          expanded ? '' : 'overflow-hidden'
        }`}
        style={{ maxHeight: expanded ? 'none' : '60px', overflowY: expanded ? 'auto' : 'hidden' }}
      >
        {product.description}
      </div>
      {!expanded && product.description.length > 100 && (
        <button
          onClick={() => setExpanded(true)}
          className="text-blue-600 text-sm mb-4"
        >
          Read More
        </button>
      )}
      {expanded && (
        <button
          onClick={() => setExpanded(false)}
          className="text-blue-600 text-sm mb-4"
        >
          Show Less
        </button>
      )}
      <div className="flex justify-between items-center w-full">
        <span className="text-lg font-bold text-green-600">
          ${product.price}
        </span>
        {cart.some((item) => item.id === product.id) ? (
          <button
            onClick={removeFromCart}
            className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
          >
            Remove from Cart
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
