import React from 'react';
import './HomePagePro.css';
import pro1 from '../../assets/pro/Image (1).png';

import vec1 from '../../assets/cart logo/Vector (3).png';
import vec2 from '../../assets/cart logo/Vector (4).png';
import vec3 from '../../assets/cart logo/Vector (5).png';
import vec4 from '../../assets/cart logo/Vector (6).png';

import chooseIdon from '../../assets/cart logo/choseIcon.png'

import { AiOutlineShoppingCart } from "react-icons/ai";
import {  AiOutlineEye, AiOutlineQuestionCircle } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import AddToCard from './AddToCardModal/AddToCard';

const HomePagePro = () => {
    return (
        <div className='home-pro-sec'>

                <h3>November Super Sale <span></span></h3>


            <div className='products-div'>
                {/* <img src="" alt="" /> */}


            {
                [...Array(15)].map((arr, i) => 
                <div className='product' key={i}>                   

                <div className='product-left-side'>
                    <div className='product-top'>
                        <img className='pro-img' src={pro1} alt="" />
                        <div className='pro-details'>
                            <p className='pro-title'>Rupchanda Fortified Pure Soybean Oil for Cooking</p>
                            <p className='pro-litter'>5 Liter</p>
                            
 
                        </div>
                    </div>
                
                    <div className='pro-price-sec'>
                        <div>
                            <p className='pro-current-price pro-price-font-hover font-14-12'>৳422.75</p>
                            <p className='pro-prev-price pro-price-font-hover font-14-12'>৳86.40</p>
                            <p className='pro-cross'></p>
                        </div>
                        <p className='off-price pro-price-fon-hover font-14-12'>-58%</p>                    
                    </div>
                </div>
                
                <div className='product-delivery-side'>
                    <div className='product-delivery-side-div'>
                        <div className='deli-icon1'>
                            
                            <p ><img src={vec1} alt="" /></p>
                            <p className='add-to-fav margin-bottom-zero'>add-to-favorite</p>
                        </div>

                        <div className='deli-icon2'>
                            <p><img src={vec2} alt="" /></p>
                            <p className='schedule-shopping margin-bottom-zero'>schedule-shopping</p>
                        </div>

                        <div className='deli-icon3'>
                            <p><img src={vec3} alt="" /></p>
                            <p className='add-to-gift margin-bottom-zero'>add-to-gift-cart</p>
                        </div>

                        <div  className='deli-icon4'>
                            <p><a className="" href="#popup1"><AiOutlineShoppingCart className='shopping-icon'/></a></p>
                            <p className='add-to-cart'>add-to-cart</p>
                        </div>

                    </div>
                </div>

                <div className='hover-details'>
                    <div className='hover-details-div'>
                        <p>Product of: Bangladesh Edible Oils Ltd</p>
                        <p>Brand: Rupchanda</p>
                        <p>Tag: Cooking Oil, Soyben Oil, Edible Oil,</p>
                        <p>Available in: 8 Size, 4 Flavor, 2 Peaking Variant</p>
                    </div>
                    <div className='hover-details-option'>
                        <p className='choose-opt'> <img className='choose-img' src={chooseIdon} alt="" /> <span className='choose-text'>Choose Option</span></p>
                        <p className='deli-opt'><TbTruckDelivery className='deli-icon'/> <span>30 min</span></p>
                    </div>
                </div>



                <div className='view-all-sec'>
                    <p className='divider'></p>
                    <div className='view-all'>
                        <div className='view-details'>
                            <AiOutlineEye className='view-eye'/>
                            <p>View Details</p>
                        </div>

                        <div className='view-question'>
                            <AiOutlineQuestionCircle className='view-question-mark'/>
                            <p className=''>Ask Question</p>
                        </div>
                    </div>
                </div>

                
                </div>)
            }


<AddToCard></AddToCard>



            </div>

        </div>
    );
};

export default HomePagePro;