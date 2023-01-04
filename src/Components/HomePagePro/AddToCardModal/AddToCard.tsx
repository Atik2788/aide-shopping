import React, { useState } from 'react';
import './AddToCard.css'
import tic from '../../../assets/tic.svg'
import imgBottle from '../../../assets/pro/Image (1).png'

const AddToCard = () => {

    const [quantity, setQuantity] = useState(1)

    return (
        <div id="popup1" className="overlay">
            <div className="popup">

                <div className="content">

                    <div className='popup-sec'>

                        <div className='popUp-left'>
                            <div className='popUp-left-1div'>
                                <img src={tic} alt="" />
                                <h2>Added to cart successfully</h2>
                            </div>

                            <div className='bottle-div'>
                                <img src={imgBottle} alt="" />
                             </div>
                             <div className='price-quantity'>
                                <p className=''>Price: <span className='price-quan-span'>৳422.75</span></p>
                                <p className=''>Quantity: <span className='price-quan-span'>sss</span></p>
                                <p className=''>Cart Total: <span className='price-quan-span'>৳844.75</span></p>
                             </div>
                             <div className='left-btn-sec'>
                                <button>CONTINUE SHOPPING</button>
                                <button>GO TO CART</button>
                             </div>
                        </div>
                        
                        <div className="pop-divider">
                            <div className="inner"></div>
                        </div>
                        
                        <div className='popUp-right'>
                            <h2>Rupchanda Fortified Pure Soybean Oil for Cooking</h2>
                            <div className='pro-price-sec-cart'>
                                <div>
                                    <p className='pro-current-price pro-price-font-hover font-14-12'>৳422.75</p>
                                    <p className='pro-prev-price pro-price-font-hover font-14-12'>৳86.40</p>
                                    <p className='pro-cross-cart '></p>
                                </div>
                                <p className='off-price pro-price-fon-hover font-14-12'>-58%</p>                    
                                <p className='pro-litter'>5 Liter</p>
                            </div>


                            <div className='counter-sec'>                                    
                                <p className='counter-sec-p1'>
                                    {
                                        quantity === 1 ?
                                            <button className="counter-btn">-</button>
                                            :
                                            <button className="counter-btn" onClick={() => setQuantity(quantity - 1)}>-</button>
                                    }
                                    <span className="">{quantity}</span>
                                    <button className="counter-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
                                </p>

                                <p className='counter-sec-p2'>Explore more details</p>
                            </div>


                        </div>


                        <a className="close" href="#">&times;</a>

                    </div>


                </div>

            </div>
        </div>
    );
};

export default AddToCard;