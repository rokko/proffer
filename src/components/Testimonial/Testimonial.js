import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonials/img-1.jpg'
import ts2 from '../../images/testimonials/img-2.jpg'
import CountUp from 'react-countup';

const Testimonial = (props) => {

    var settings = {
        dots: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    };

    const funFact = [
        {
            title: '25',
            subTitle: 'Volunteer',
            Symbol: '+',
        },
        {
            title: '2500',
            subTitle: 'Happy Children',
            Symbol: '+',
        },
        {
            title: '45',
            subTitle: ' Donated',
            Symbol: 'M',
        },
        {
            title: '2515',
            subTitle: 'campaigns',
            Symbol: '+',
        },
    ]

    const testimonial = [
        {
            tsImg: ts1,
            Des: "Recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer",
            Title: 'Michel Jone',
            Sub: "Creative Designer",
        },
        {
            tsImg: ts2,
            Des: "Recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer",
            Title: 'Aliza Anney',
            Sub: "Model Belarus",
        },
        {
            tsImg: ts1,
            Des: "Recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer",
            Title: 'David Miller',
            Sub: "Designer UK",
        }
    ]

    return (

        <section className="testimoninals-funfact-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xl-8 col-lg-7 col-12">
                        <div className="section-title">
                            <span>#Testimonials</span>
                            <h2>Client feedbacks</h2>
                        </div>
                        <div className="testimonials-slider testimonials-slider-area">
                            <Slider {...settings}>
                                {testimonial.map((tesmnl, tsm) => (
                                    <div className="grid" key={tsm}>
                                        <div className="author">
                                            <div className="author-img">
                                                <img src={tesmnl.tsImg} alt="" />
                                            </div>
                                            <h5>{tesmnl.Title}</h5>
                                            <span>{tesmnl.Sub}</span>
                                        </div>
                                        <p>{tesmnl.Des}</p>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="col col-xl-4 col-lg-5 col-12">
                        <div className="fun-fact-area">
                            <div className="fun-fact-grids clearfix">
                                {funFact.map((funfact, fitem) => (
                                    <div className="grid" key={fitem}>
                                        <div className="info">
                                            <div>
                                                <h3><span><CountUp end={funfact.title} enableScrollSpy /></span>{funfact.Symbol}</h3>
                                            </div>
                                            <div>
                                                <p>{funfact.subTitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;