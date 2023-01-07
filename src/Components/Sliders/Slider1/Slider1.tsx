import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css";


import { Autoplay, Navigation } from "swiper";




import bgImg from '../../../assets/bg-right.png'

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

const Slider1 = () => {

  return (
    <div>
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
        slidesPerView={5}

                spaceBetween={13}
                // centeredSlides={true}
                // effect={"fade"}
                autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                }}
                // pagination={{
                // clickable: true,
                // }}
                loop={true}
                speed={200}
                navigation={true}
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

export default Slider1;