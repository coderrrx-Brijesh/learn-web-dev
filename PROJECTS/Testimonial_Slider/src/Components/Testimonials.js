import React, { useState } from "react";
import Card from './Card';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = (props) => {
    let reviews = props.reviews;
    let [index, setIndex] = useState(0);

    function leftShiftHandler() {
        setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    }

    function rightShiftHandler() {
        setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }

    function ShiftHandler() {
        let value = Math.floor(Math.random() * reviews.length);
        setIndex(value);
    }

    return (
        <div className="content-box">
            <Card review={reviews[index]} />
            <div className='switch'>
                <button onClick={leftShiftHandler} className='switch-button'><FaChevronLeft /></button>
                <button onClick={rightShiftHandler} className='switch-button'><FaChevronRight /></button>
            </div>
            <div className='surprise-button'>
                <button onClick={ShiftHandler}>Surprise! Me</button>
            </div>
        </div>
    );
}

export default Testimonials;
