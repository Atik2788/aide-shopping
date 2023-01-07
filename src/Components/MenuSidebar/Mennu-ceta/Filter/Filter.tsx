import React from 'react';
import './Filter.css'
import { AiOutlineDown } from "react-icons/ai";

const Filter = () => {
    return (
        <div className='filter-details'>
            <h3>Filter/Customization</h3>

            <div className='filter-section'>
                <div className='filter-section-details'>
                    <p>Item Weight</p>
                    <p><AiOutlineDown/></p>
                </div>
                <p className='filter-line'></p>
            </div>

            <div className='filter-section'>
                <div className='filter-section-details'>
                    <p>Packing Type</p>
                    <p><AiOutlineDown/></p>
                </div>
                <p className='filter-line'></p>
            </div>

            <div className='filter-section'>
                <div className='filter-section-details'>
                    <p>Item Form</p>
                    <p><AiOutlineDown/></p>
                </div>
                <p className='filter-line'></p>
            </div>
        </div>
    );
};

export default Filter;