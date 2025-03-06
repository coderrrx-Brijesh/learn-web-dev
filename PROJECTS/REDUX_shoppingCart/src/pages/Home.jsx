import { useState, useEffect } from "react";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [products, setProduct] = useState([]);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.log("Error in fetching data", error);
      setProduct([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {loading ? (
        <div className="text-center text-xl font-semibold text-gray-800">Loading...</div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product,index) => (
              <Product product={product} key={index} />
          ))}
        </div>
      ) : (
        <div className="text-center text-lg font-medium text-gray-700">No Data Found</div>
      )}
    </div>
  );
};

export default Home;