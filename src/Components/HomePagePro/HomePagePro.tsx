import React from 'react';
import './HomePagePro.css';
import pro1 from '../../assets/pro/Image (1).png';

import vec1 from '../../assets/cart logo/Vector (3).png';
import vec2 from '../../assets/cart logo/Vector (4).png';
import vec3 from '../../assets/cart logo/Vector (5).png';
import vec4 from '../../assets/cart logo/Vector (6).png';

import { AiOutlineShoppingCart } from "react-icons/ai";

const HomePagePro = () => {
    return (
        <div className='home-pro-sec'>

                <h3>November Super Sale <span></span></h3>


            <div className='products-div'>


            {
                [...Array(15)].map((arr, i) => <div className='product'>                   

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
                            <p className='pro-current-price'>৳422.75</p>
                            <p className='pro-prev-price'>৳422.75</p>
                            <p className='pro-cross'></p>
                        </div>
                        <p className='off-price'>-58%</p>                    
                    </div>
                </div>
                
                <div className='product-delivery-side'>
                    <div className='product-delivery-side-div'>
                        <p className='deli-icon1'><img src={vec1} alt="" /></p>
                        <p className='deli-icon2'><img src={vec2} alt="" /></p>
                        <p className='deli-icon3'><img src={vec3} alt="" /></p>
                        <p className='deli-icon4'><AiOutlineShoppingCart className='shopping-icon'/></p>
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
                        <p>Chose Option</p>
                        <p>30 min</p>
                    </div>
                </div>


                
                </div>)
            }





            </div>

        </div>
    );
};

export default HomePagePro;