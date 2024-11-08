import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonials/img-1.jpg'
import ts2 from '../../images/testimonials/img-2.jpg'

const Testimonial2 = (props) => {

    var settings = {
        dots: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
     
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


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

        <section className="testimoninals-funfact-section testimonials-pg-section  section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                        <div className="section-title-s3">
                            <span>#Testimonials</span>
                            <h2>When  <span>hope is hungry</span> everything feeds it.</h2>
                            <p>Magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather or then turned to look out.</p>
                        </div>
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
            </div>
        </section>
    );
}

export default Testimonial2;