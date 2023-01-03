import React from 'react';
// import './Slider.scss'
import './SliderAfterNav.css'

const Slider = ({ slide }: any) => {
    return (
        <div className='slider-second-sec'>
            <div className='slider-text-content'>
                <h1 data-aos="fade-down" data-aos-duration='1500'>{ slide.text1 }</h1>
                <h2 data-aos="fade-down" data-aos-duration='2000'>{ slide.text2 }</h2>
                <h4 data-aos="fade-down" data-aos-duration='2500'>{ slide.text3 }</h4>
            </div>
            <div className='slider_image'>
                <img className='SliderImg' src={ slide.image } alt="" />
            </div>
        </div>
    );
};

export default Slider;