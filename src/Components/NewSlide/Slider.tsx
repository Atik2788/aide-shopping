import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules

import { Autoplay, Pagination, Navigation } from "swiper";

import bgImg from '../../assets/bg-right.png'

import './SliderNew.css'

const imgList = [
    {
      img: bgImg
    },
    {
      img: bgImg
    },
    {
      img: bgImg
    },
    {
      img: bgImg
    },
    {
      img: bgImg
    },
    {
      img: bgImg
    },
    {
      img: bgImg
    },
    {
      img: bgImg
    }
  ]

const SliderNew = () => {
    return (

            <div className='slider-left-new'>

                <div className='slider-des'>
                    <h2>Now Favorite to Chose</h2>
                    <h4>Special Features</h4>
                </div>


                <Swiper


                breakpoints={{
                    576: {
                    slidesPerView: 2,
                    },
                    768: {
                    slidesPerView: 3,
                    },
                    992: {
                    slidesPerView: 5,
                    },
                }}


                spaceBetween={13}

                autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                }}

                loop={true}
                speed={200}
                // navigation={true}
                modules={[Autoplay, Navigation]}
                className="slider-parent"
                >
                    
                {
                    imgList.map((slide: any, i) => (
                        <SwiperSlide key={i}>
                            <img src={slide.img} alt="" />
                        </SwiperSlide>
                    ))
                }
                </Swiper>
            </div>



    );
};

export default SliderNew;