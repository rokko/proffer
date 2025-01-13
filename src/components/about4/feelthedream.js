import React from "react";
import { Link } from 'react-router-dom';
import Causes2 from "../../api/cause";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const FeelTheDream = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }
  const Causes = Causes2.filter((citem) => {
    if (citem.slug === 'Khalifa') {
      console.log(citem)
      return citem
    }
  })
  var settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '30px',
    infinite: Causes.length > 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '30px',
          infinite: Causes.length > 1,
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
              <h2>Feel The Dream</h2>
              <p>
                Questo progetto nasce per <strong>sostenere</strong> ed aiutare il sogno di
                ragazze e ragazzi che non hanno possibilità.
                <br />
                Il sogno di VALE PER TUTTI è dare a chiunque l'opportunità di
                innamorarsi di uno sport e procurare loro le attrezzature
                sportive, i contatti e il <strong>supporto</strong> economico affinché possano
                ogni giorno fare un passo in più verso la loro meta, come
                Khalifa, colui che ci ha fornito l'assist per ideare questo
                progetto.
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

export default FeelTheDream;
