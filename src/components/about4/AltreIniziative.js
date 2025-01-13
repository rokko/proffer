import React from "react";
import Causes2 from "../../api/cause";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import ContactForm from "../ContactForm";

const AltreIniziative = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }
  const Causes = Causes2.filter((citem) => {
    if (citem.slug === 'TorneoRoma' || citem.slug==='Excelsior' || citem.slug==='BoxNatale'    ) {
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


              <h2>
              Altre iniziative
              </h2>
              <p>
              Oltre alle nostre iniziative principali, ogni tanto ci piace <strong>uscire dagli schemi</strong>.
              </p>
              <p>
              Che sia una cena tutti insieme, un minitorneo di basket o la collaborazione con un nuovo partner che condivida i nostri valori.

              </p>
              <p>
              In questa pagina puoi trovare tutto ciò, ma soprattutto puoi contattarci per eventuali progetti o collaborazioni future!

              </p>
              
            </div>
        
            <br/>
            <br/>
            <br/>

            <ContactForm/>
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
                <div className="item" key={Causes[1].id} style={{ borderRadius: '20px', height: '200px' }}>
                  <Link onClick={ClickHandler} to={`/cause-single/${Causes[1].slug}`}>
                    <div className="inner">
                      <div className="img-holder">
                        <img src={Causes[1].cImg} alt="" />
                      </div>
                      <div className="overlay">
                        <div className="overlay-content">

                          <h3><Link onClick={ClickHandler} to={`/cause-single/${Causes[1].slug}`}>{Causes[1].cTitle}</Link></h3>
                          <div className="goal-raised">

                            <Link onClick={ClickHandler} to={`/cause-single/${Causes[1].slug}`} className="donate-btn"><i className="fi flaticon-heart-1"></i>Donate</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="item" key={Causes[2].id} style={{ borderRadius: '20px', height: '200px' }}>
                  <Link onClick={ClickHandler} to={`/cause-single/${Causes[2].slug}`}>
                    <div className="inner">
                      <div className="img-holder">
                        <img src={Causes[2].cImg} alt="" />
                      </div>
                      <div className="overlay">
                        <div className="overlay-content">

                          <h3><Link onClick={ClickHandler} to={`/cause-single/${Causes[2].slug}`}>{Causes[2].cTitle}</Link></h3>
                          <div className="goal-raised">

                            <Link onClick={ClickHandler} to={`/cause-single/${Causes[2].slug}`} className="donate-btn"><i className="fi flaticon-heart-1"></i>Donate</Link>
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

export default AltreIniziative;
