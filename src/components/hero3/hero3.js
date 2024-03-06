import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'
import hero1 from '../../images/slider/slide-5.jpg'
import hero2 from '../../images/slider/slide-4.jpg'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Hero3 = () => {
    return (

        <section className="hero-slider hero-style-3">
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                navigation
            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
                        <div className="container">
                            <div data-swiper-parallax="300" className="slide-title">
                                <h2>Don't turn away, Give today!</h2>
                            </div>
                            <div data-swiper-parallax="400" className="slide-text">
                                <p>Magazine and housed in a nice, gilded frame. It showed a lady fitted out with hat and fur boa who sat upright, raising a heavy fur muff that</p>
                            </div>
                            <div className="clearfix"></div>
                            <div data-swiper-parallax="500" className="slide-btns">
                                <Link onClick={ClickHandler} to="/" className="theme-btn-s2">Donate Now <i className="fi flaticon-heart-1"></i></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                        <div className="container">
                            <div data-swiper-parallax="300" className="slide-title">
                                <h2>Don't turn away, Give today!</h2>
                            </div>
                            <div data-swiper-parallax="400" className="slide-text">
                                <p>Magazine and housed in a nice, gilded frame. It showed a lady fitted out with hat and fur boa who sat upright, raising a heavy fur muff that</p>
                            </div>
                            <div className="clearfix"></div>
                            <div data-swiper-parallax="500" className="slide-btns">
                                <Link onClick={ClickHandler} to="/" className="theme-btn-s2">Donate Now <i className="fi flaticon-heart-1"></i></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                ...
            </Swiper>
        </section>
    )
}

export default Hero3;