import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Causes from '../../api/cause'

const CauseSection2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    var settings = {
        dots: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding:'220px',
        autoplay: true,

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding:'30px',
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <section className={`causes-section section-padding ${props.cClass}`}>
            <div className="container-fluid">
                <div className="section-title-s2">
                    <span>#Progetti</span>
                  
                </div>
                <div className="content-area causes-slider">
                    <Slider {...settings}>
                        {Causes.slice(0, 6).map((Cause, citem) => (
                            <div className="item" key={citem}>
                                <div className="inner">
                                    <div className="img-holder">
                                        <img src={Cause.cImg} alt="" />
                                    </div>
                                    <div className="overlay">
                                        <div className="overlay-content">
                                            <div className="progress">
                                                <div className="progress-bar" style={{ width: `${Cause.process}%` }}>
                                                    <span className="progress-value">{Cause.process}%</span>
                                                </div>
                                            </div>
                                            <h3><Link onClick={ClickHandler} to={`/cause-single/${Cause.slug}`}>{Cause.cTitle}</Link></h3>
                                            <div className="goal-raised">
                                                <span>${Cause.Goal} raised of ${Cause.Raised}</span>
                                                <Link onClick={ClickHandler} to={`/cause-single/${Cause.slug}`} className="donate-btn"><i className="fi flaticon-heart-1"></i>Donate</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default CauseSection2;