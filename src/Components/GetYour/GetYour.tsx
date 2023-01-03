import React from 'react';
import './GetYour.css'
import { FaArrowRight } from 'react-icons/fa';

const GetYour = () => {
    return (
            <div className='get-your'>
                <h4>SIGN UP AND GET YOUR FIRST 5 DELIVERY FREE </h4>
                <div className='get-your-input'>
                    <input type="text" placeholder='Your Mobile number' className='input-login' />
                    <button className='arrow-btn' type='submit'><FaArrowRight /></button>
                </div>
            </div>

    );
};

export default GetYour;