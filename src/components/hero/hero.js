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
            <br/>
            <br/>
            <br/>
            
            
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
                        <div className="container"  style={{marginTop:'50px'}}>
                            <div data-swiper-parallax="300" className="slide-title">
                                <br/>
                                <br/>

                                <h2>Chi siamo? </h2>
                            </div>
                            <div data-swiper-parallax="400" className="slide-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac blandit lacus. Maecenas eu augue vitae nibh placerat semper molestie a elit. Morbi hendrerit ipsum vitae nulla placerat convallis. Aliquam a facilisis quam, in euismod sapien. Nunc dapibus mauris at lorem tincidunt, quis sollicitudin orci elementum. Mauris lacinia ut urna a rhoncus. Vivamus id nisl non ante blandit sagittis. Cras mattis semper lorem. Vestibulum augue dolor, tristique nec pharetra sed, eleifend eu dui. Aenean ex massa, tempus ut bibendum a, aliquam in purus. Integer vel laoreet nibh, dignissim facilisis erat. Nam sit amet magna sed elit porttitor rutrum eu eget sapien. Sed eu malesuada odio. Mauris nec felis ac felis accumsan laoreet.

                                </p>                            </div>
                           
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                        <div className="container">
                            <div data-swiper-parallax="300" className="slide-title">
                            <br/>
                                <br/>
                                <h2>Cosa facciamo?</h2>
                            </div>
                            <div data-swiper-parallax="400" className="slide-text">
                           <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac blandit lacus. Maecenas eu augue vitae nibh placerat semper molestie a elit. Morbi hendrerit ipsum vitae nulla placerat convallis. Aliquam a facilisis quam, in euismod sapien. Nunc dapibus mauris at lorem tincidunt, quis sollicitudin orci elementum. Mauris lacinia ut urna a rhoncus. Vivamus id nisl non ante blandit sagittis. Cras mattis semper lorem. Vestibulum augue dolor, tristique nec pharetra sed, eleifend eu dui. Aenean ex massa, tempus ut bibendum a, aliquam in purus. Integer vel laoreet nibh, dignissim facilisis erat. Nam sit amet magna sed elit porttitor rutrum eu eget sapien. Sed eu malesuada odio. Mauris nec felis ac felis accumsan laoreet.</p>

</div>
                            
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                        <div className="container">
                            <div data-swiper-parallax="300" className="slide-title">
                            <br/>
                                <br/>
                                <h2>Come aiutarci</h2>
                            </div>
                            <div data-swiper-parallax="400" className="slide-text">
                           <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac blandit lacus. Maecenas eu augue vitae nibh placerat semper molestie a elit. Morbi hendrerit ipsum vitae nulla placerat convallis. Aliquam a facilisis quam, in euismod sapien. Nunc dapibus mauris at lorem tincidunt, quis sollicitudin orci elementum. Mauris lacinia ut urna a rhoncus. Vivamus id nisl non ante blandit sagittis. Cras mattis semper lorem. Vestibulum augue dolor, tristique nec pharetra sed, eleifend eu dui. Aenean ex massa, tempus ut bibendum a, aliquam in purus. Integer vel laoreet nibh, dignissim facilisis erat. Nam sit amet magna sed elit porttitor rutrum eu eget sapien. Sed eu malesuada odio. Mauris nec felis ac felis accumsan laoreet.</p>

</div>
                           
                            
                        </div>
                    </div>
                </SwiperSlide>
                ...
               

                <div className="scroll">
                    <AnchorLink href='#about'><i className="fi flaticon-down-arrow-2"></i></AnchorLink>
                </div>
            </Swiper>
        </section>
    )
}

export default Hero;