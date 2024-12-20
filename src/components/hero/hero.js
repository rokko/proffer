import React,{useState, useEffect} from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'
import hero1 from '../../images/chisiamoscura.webp'
import hero2 from '../../images/cosafacciamoscura.webp'
import hero3 from '../../images/comeaiutarciscura.webp'
import VideoModal from "../ModalVideo";
import AnimatedComponent from "../../main-component/components/AnimatedComponent";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      // Verifica iniziale
      handleResize();
  
      // Aggiungi l'event listener per il resize
      window.addEventListener('resize', handleResize);
  
      // Rimuovi l'event listener al momento della pulizia
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
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
                                <AnimatedComponent>
                                    <Link to="/chisiamo">
                                <h2>Chi siamo? </h2>
                                </Link>
                                </AnimatedComponent>
                            </div>
                            <AnimatedComponent>
                            <div data-swiper-parallax="400" className="slide-text big-text">
                                <p style={{fontSize:isMobile?'18px':'', fontWeight:isMobile?'bold':'', lineHeight:isMobile?'20px':''}}>Siamo una giovane associazione che ha il sogno di regalare l'amore per il basket e la possibilità di giocarlo a chi è meno fortunato.

                                </p>                            </div></AnimatedComponent>
                           
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                        <div className="container">
                            <div data-swiper-parallax="300" className="slide-title">
                            <br/>
                                <br/><AnimatedComponent>
                                    <Link to="/cosa-facciamo">
                                <h2>Cosa facciamo</h2>
                                </Link></AnimatedComponent>
                            </div>
                            <AnimatedComponent>
                            <div data-swiper-parallax="400" className="slide-text">
                            <p style={{fontSize:isMobile?'18px':'', fontWeight:isMobile?'bold':'', lineHeight:isMobile?'20px':''}}> Creiamo e sosteniamo realtà sportive, riqualificando spazi e fornendo formazione e attrezzature.</p>

</div></AnimatedComponent>
                            
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero3})` }}>
                        <div className="container">
                            <div data-swiper-parallax="300" className="slide-title">
                            <br/>
                                <br/>
                                <AnimatedComponent>
                                    <Link to="/comeaiutarci">
                                <h2>Come aiutarci</h2>
                                </Link>
                                </AnimatedComponent>
                            </div>
                            <AnimatedComponent>
                            <div data-swiper-parallax="400" className="slide-text">
                            <p style={{fontSize:isMobile?'18px':'', fontWeight:isMobile?'bold':'', lineHeight:isMobile?'20px':''}}>Puoi sostenere i nostri progetti, puoi aiutarci economicamente, con il tuo tempo o donando materiali.</p>

</div></AnimatedComponent>
                           
                            
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