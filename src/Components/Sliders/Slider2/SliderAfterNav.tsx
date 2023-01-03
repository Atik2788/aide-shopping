import React from 'react';
import slider1 from '../../../assets/bg1.png'
import ads from '../../../assets/bg-right.png'
import './SliderAfterNav.css'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import './Hero.scss'

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Slider from './SliderSecond';

const heroSliders = [
    {
        image: slider1,
        text1: "Best Online Deal with Atik",
        text2: "ENJOY PEACE IN SHOPPING",
        text3: "UP to 80% OFF"
    },
    {
        image: slider1,
        text1: "Best Online Deal with Atik",
        text2: "ENJOY PEACE IN SHOPPING",
        text3: "UP to 80% OFF"
    },
    {
        image: slider1,
        text1: "Best Online Deal with Atik",
        text2: "ENJOY PEACE IN SHOPPING",
        text3: "UP to 80% OFF"
    }
]

const SliderAfterNav = () => {
    return (
        <section className='sliderAfterNav'>
            <div className='slider-left'>
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    effect={"fade"}
                    autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    loop={true}
                    speed={1000}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="slider-parent"
                >
                    {
                        heroSliders.map((slide: any, i) => (
                            <SwiperSlide key={i}>
                                <Slider slide={slide} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            <div className='Slider-right'>
                <img src={ads} alt="ads" />
            </div>
        </section>
    );
};

export default SliderAfterNav;