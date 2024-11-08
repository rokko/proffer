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
        prevArrow: <img style={{fontSize:'40px',marginLeft:'1000px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrElEQVR4nO1ZTW/TQBC1WsqBY4FTkxtFmYlyQiA48SsQCP4HRfwAyh2qgDjCAaUCxEfhwIFbOmuqSqDwAyicoO058Y60aJxWEU2QvfbEToVH2kPsyH5vd3bm7XMQVFFFFbnDdYL5yDSuMMFdJnhhDXyzBvYtQRQPA/tM2JN78p+IGpedC+bKBx4265bgvjX4kw06n2EN/LAEq45ateKBb587aw08tgQDX+BjRAgGlrDtts6fKQQ8G7xpDezlBT5OBHd5s3FjasDd1oUFS/hEGziPp9YjeZc2+FNM+H7a4Hk0NuSdWuAXCgbv4kH40fXwZG4CRaQN/3tftHOBZ4O3ygLPhyOE65nAO9M4bQl/l03AGtjLVGKlzpcNnkeptJalw2ZvUoRdJrjNBl4rEeh7dWyRBzle9tx9unri8Fl6JGA13ex3gvks2mYS+JhAvBIqBHZSCcBYVSqBl99scFNrL0Sf8VIigVgSK4GX61rgeTjupCCALz0f2hkDL2lI8EwZvGMD62kI9GZw5t3B+JpIwEMqvzoKPks4atXSai1prMkEUtZ/zZOUC5v1lAT6/wEBU3AKhc06E3xQS6Fjv4nZu4zC+uQyik9LKqPg3cgKJLGSSEBMJ1UpIcpUiUAUNi8mEhDBJKbTDIq576ndPJGuanKa4I0KAQP3UoGPV4FaNZUDjRZ4wr7rLi+lJjBcBWxr5a7C7D/wAh+vQhcXZ+JQT7ib2TcVr7JsAmzwWpAnxKssMXUeBnlDGpLonhIIvNPQWiNz1+BGYeAJ3qqZu0fs9XYRaeO0Zn5SiFc5jepkCX/l3rCevumaNBgF4H2p81K2CwH/F5Hu8pLIDjGd/IHDjsgD7w47FSIumBPTSXwbkdZy8JCT3fADHgyGpzz4cnBvRVTlTHxmraKK4PjHH2UAkUkNcEE1AAAAAElFTkSuQmCC" alt="circled-left--v2"></img>,
        nextArrow: <img style={{width:'48px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrElEQVR4nO1ZTW/TQBC1WsqBY4FTkxtFmYlyQiA48SsQCP4HRfwAyh2qgDjCAaUCxEfhwIFbOmuqSqDwAyicoO058Y60aJxWEU2QvfbEToVH2kPsyH5vd3bm7XMQVFFFFbnDdYL5yDSuMMFdJnhhDXyzBvYtQRQPA/tM2JN78p+IGpedC+bKBx4265bgvjX4kw06n2EN/LAEq45ateKBb587aw08tgQDX+BjRAgGlrDtts6fKQQ8G7xpDezlBT5OBHd5s3FjasDd1oUFS/hEGziPp9YjeZc2+FNM+H7a4Hk0NuSdWuAXCgbv4kH40fXwZG4CRaQN/3tftHOBZ4O3ygLPhyOE65nAO9M4bQl/l03AGtjLVGKlzpcNnkeptJalw2ZvUoRdJrjNBl4rEeh7dWyRBzle9tx9unri8Fl6JGA13ex3gvks2mYS+JhAvBIqBHZSCcBYVSqBl99scFNrL0Sf8VIigVgSK4GX61rgeTjupCCALz0f2hkDL2lI8EwZvGMD62kI9GZw5t3B+JpIwEMqvzoKPks4atXSai1prMkEUtZ/zZOUC5v1lAT6/wEBU3AKhc06E3xQS6Fjv4nZu4zC+uQyik9LKqPg3cgKJLGSSEBMJ1UpIcpUiUAUNi8mEhDBJKbTDIq576ndPJGuanKa4I0KAQP3UoGPV4FaNZUDjRZ4wr7rLi+lJjBcBWxr5a7C7D/wAh+vQhcXZ+JQT7ib2TcVr7JsAmzwWpAnxKssMXUeBnlDGpLonhIIvNPQWiNz1+BGYeAJ3qqZu0fs9XYRaeO0Zn5SiFc5jepkCX/l3rCevumaNBgF4H2p81K2CwH/F5Hu8pLIDjGd/IHDjsgD7w47FSIumBPTSXwbkdZy8JCT3fADHgyGpzz4cnBvRVTlTHxmraKK4PjHH2UAkUkNcEE1AAAAAElFTkSuQmCC" alt="circled-left--v2"></img>,


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

        <section className={`causes-section section-padding ${props.cClass}`} style={{ backgroundColor:'#ced4da', padding:'20px'}}>
            <div className="container-fluid">
                <div className="section-title-s2">
                    <span style={{marginTop:'10px', textAlign:'center'}}>Ultime Notizie</span>
                  
                </div>
                <div className="content-area causes-slider" style={{ borderRadius:'20px'}}>
                    <Slider {...settings}>
                     

                        {Causes.slice(0, 6).map((Cause, citem) => (
                           
                            <div className="item" key={citem} style={{borderRadius:'20px', height:'200px'}}>
                                   <Link onClick={ClickHandler} to={`/cause-single/${Cause.slug}`}>
                                <div className="inner">
                                    <div className="img-holder">
                                        <img src={Cause.cImg} alt="" />
                                    </div>
                                    <div className="overlay">
                                        <div className="overlay-content">
                                          
                                            <h3><Link onClick={ClickHandler} to={`/cause-single/${Cause.slug}`}>{Cause.cTitle}</Link></h3>
                                            <div className="goal-raised">
                                              
                                                <Link onClick={ClickHandler} to={`/cause-single/${Cause.slug}`} className="donate-btn"><i className="fi flaticon-heart-1"></i>Donate</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                         
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default CauseSection2;