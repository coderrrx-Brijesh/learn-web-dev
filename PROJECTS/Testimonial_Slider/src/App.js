import React from "react";
import reviews from "./data";
import Testimonials from "./Components/Testimonials";
import './App.css'
const App = () => {
  return (
    <div className="container">
      <div className="testimonial-box">
        <h1>Our Testimonials</h1>
        <div className="line"></div>
        <Testimonials reviews={reviews}></Testimonials>
      </div>
    </div>
  );
};

export default App;
