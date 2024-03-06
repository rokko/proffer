import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Events from '../../api/event'

const EventsSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    var settings = {
        dots: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
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
                    slidesToShow: 1,
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
        <section className={`events-section section-padding ${props.eClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-lg-5 col-12">
                        <div className="section-title">
                            <span>#Events</span>
                            <h2><span>Fundraising </span>events,Please join.</h2>
                        </div>
                        <div className="about-details">
                            <p>Magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window</p>
                        </div>
                    </div>
                    <div className="col col-lg-7 col-12">
                        <div className="events-slider-holder">
                            <div className="events-slider">
                                <Slider {...settings}>
                                    {Events.slice(0, 6).map((event, citem) => (
                                        <div className="events-slider-item" key={citem}>
                                            <div className="grid">
                                                <div className="img-holder">
                                                    <img src={event.eImg} alt="" />
                                                </div>
                                                <div className="details">
                                                    <div className="inner">
                                                        <h3><Link onClick={ClickHandler} to={`/event-single/${event.slug}`}>{event.eTitle}</Link></h3>
                                                        <p>Aug 25, 2020 (10 AM)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventsSection;