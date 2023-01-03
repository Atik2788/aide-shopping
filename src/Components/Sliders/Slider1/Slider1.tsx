import React, { useEffect, useState } from 'react';
import imgSlider from './Data';

const Slider1 = () => {


    const [currentState, setCurrentState] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentState === 2) {
                setCurrentState(0)
            }
            else {
                setCurrentState(currentState + 1)
            }
        }, 5000)
        return () => clearTimeout(timer)

    }, [currentState])

    const bgImgStyle = {
        backgroundImage: `url(${imgSlider[currentState].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
    }

    const goToNext = (currentState:number) => {
        setCurrentState(currentState)
    }


    return (
        <div className="bgslide">
            <div className="container-style">
                <div style={bgImgStyle}>
                    <div className='trans-bg'></div>
                    <div className='description text-center'>
                    <div className='text-white lg:mt-20'>
                        <h1 className='text-5xl font-bold mb-2'>{imgSlider[currentState].title}</h1>
                        <p className='text-xl mb-10'>{imgSlider[currentState].body}</p>
                    </div>

                    <div className='carousel-ind lg:mt-60 mt-72'>
                        {
                            imgSlider.map((imgSlider, currentState) => (
                                <span key={currentState} onClick={() => goToNext(currentState)}></span>
                            ))
                        }
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider1;