import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
import bgImg from '../../../assets/bg-right.png'

import '../Slider1/Slider1.css'


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

const Slider3 = () => {
    return (
        <div>

<Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className=""
      >

            {
                imgList.map((ima:any, i) => 
                                       
                        <SwiperSlide><img src={ima.img} alt="" /></SwiperSlide>
                    
                )
            }


      </Swiper>   

        </div>
    );
};

export default Slider3;