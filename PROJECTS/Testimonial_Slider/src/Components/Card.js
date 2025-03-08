import './Card.css'
import React from 'react';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'

const Card= (props)=>{
    let review=props.review;
    return (
        <div>
            <div>
                <img src={review.image}/>
            </div>
            <div className='detail-box'>
            <div className='name'>
                <p>{review.name}</p>
            </div>
            <div className='job-title'>
                <p>{review.job}</p>
            </div>
            <div className='quote'>
                <FaQuoteLeft/>
            </div>
            <div className='job-desc'>
                {review.text}
            </div>
            <div className='quote'>
                <FaQuoteRight/>
            </div>

            </div>
        </div>
    )
}

export default Card