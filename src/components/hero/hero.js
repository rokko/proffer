import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'
import hero1 from '../../images/slider/slide-1.jpg'
import hero2 from '../../images/slider/slide-2.jpg'
import VideoModal from "../ModalVideo";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Hero = () => {
    return (

        <section className="hero-slider hero-style-1">
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
                                <h2>Help <span>someone's dream</span> come true.</h2>
                            </div>
                            <div data-swiper-parallax="400" className="slide-text">
                                <p>Magazine and housed in a nice, gilded frame. It showed a lady fitted out with hat and fur boa who sat upright, raising a heavy fur muff that</p>
                            </div>
                            <div className="clearfix"></div>
                            <div data-swiper-parallax="500" className="slide-btns">
                                <Link onClick={ClickHandler} to="/" className="theme-btn-s2">Donate Now <i className="fi flaticon-heart-1"></i></Link>
                            </div>
                            <div className="video-btns">
                                <VideoModal />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                        <div className="container">
                            <div data-swiper-parallax="300" className="slide-title">
                                <h2>Help <span>someone's dream</span> come true.</h2>
                            </div>
                            <div data-swiper-parallax="400" className="slide-text">
                                <p>Magazine and housed in a nice, gilded frame. It showed a lady fitted out with hat and fur boa who sat upright, raising a heavy fur muff that</p>
                            </div>
                            <div className="clearfix"></div>
                            <div data-swiper-parallax="500" className="slide-btns">
                                <Link onClick={ClickHandler} to="/" className="theme-btn-s2">Donate Now <i className="fi flaticon-heart-1"></i></Link>
                            </div>
                            <div className="video-btns">
                                <VideoModal />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                ...
                <div className="social">
                    <ul>
                        <li><Link onClick={ClickHandler} to="/"><i className="ti-facebook"></i></Link></li>
                        <li><Link onClick={ClickHandler} to="/"><i className="ti-twitter-alt"></i></Link></li>
                        <li><Link onClick={ClickHandler} to="/"><i className="ti-pinterest"></i></Link></li>
                        <li><Link onClick={ClickHandler} to="/"><i className="ti-vimeo-alt"></i></Link></li>
                    </ul>
                </div>

                <div className="scroll">
                    <AnchorLink href='#about'><i className="fi flaticon-down-arrow-2"></i></AnchorLink>
                </div>
            </Swiper>
        </section>
    )
}

export default Hero;