import React from "react";
import Causes2 from "../../api/cause";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const FeelTheMoment = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }
  const Causes = Causes2.filter((citem) => {
    if (citem.slug === 'IoTifoSveva') {
      console.log(citem)
      return citem
    }
  })
  var settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    centerMode: Causes.length > 2,
    slidesToScroll: 1,
    slidesToShow: 3,
    centerPadding: '30px',
    infinite: Causes.length > 2,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '30px',
          infinite: Causes.length > 2,
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
    <section className="about-page-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-lg-8 col-md-10">
            <div className="section-title-s3">
              <h2>Feel The Moment</h2>
              <p>
              "VALE PER TUTTI", in collaborazione con L'associazione "IO TIFO SVEVA", sogna di donare dei momenti di felicità ai piccoli appassionati di sport che trascorrono lunghi periodi nei reparti pediatrici, cercando di regalare loro un sorriso in un periodo difficile della loro vita, come ci ha insegnato la piccola Sveva.
              </p>
            </div>
          </div>
        </div>
        <section className={`causes-section section-padding ${props.cClass}`} style={{ backgroundColor: '#ced4da', padding: '20px' }}>
          <div className="container-fluid">
            <div className="section-title-s2">
              <span style={{ marginTop: '10px', textAlign: 'center' }}>Ultimi Progetti</span>

            </div>
            <div className="content-area causes-slider" style={{ borderRadius: '20px' }}>
              <Slider {...settings}>




                <div className="item" key={Causes[0].id} style={{ borderRadius: '20px', height: '200px' }}>
                  <Link onClick={ClickHandler} to={`/cause-single/${Causes[0].slug}`}>
                    <div className="inner">
                      <div className="img-holder">
                        <img src={Causes[0].cImg} alt="" />
                      </div>
                      <div className="overlay">
                        <div className="overlay-content">

                          <h3><Link onClick={ClickHandler} to={`/cause-single/${Causes[0].slug}`}>{Causes[0].cTitle}</Link></h3>
                          <div className="goal-raised">

                            <Link onClick={ClickHandler} to={`/cause-single/${Causes[0].slug}`} className="donate-btn"><i className="fi flaticon-heart-1"></i>Donate</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
            


              </Slider>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default FeelTheMoment;
