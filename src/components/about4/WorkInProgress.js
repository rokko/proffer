import React,{useState, useEffect} from "react";
import Causes2 from "../../api/cause";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { fetchCauses } from "./fetch";

const WorkInProgress = (props) => {
  const [causeOnline, setCauseOnline] = useState()
  const [causeNewOnline, setCauseNewOnline] = useState()
  const [Causes, setCauses] = useState([])
  var causes3=[]
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

 

  useEffect(()=>
    {
      const loadCauses = async () => {
        const fetchedCauses = await fetchCauses();
        setCauseOnline(fetchedCauses);
        console.log(fetchedCauses)
         causes3 =  fetchedCauses.filter((citem) => {
          if (citem.padre=='WorkInProgress') {
            console.log('PROVA ALTRE',citem)
            return citem
          }
        })

        const causeNew = Causes2.filter((citem) => {
          if (!!citem.slug &&   (citem.slug === 'carcereMinorile' || citem.slug==='BoxNatale24'    ) ) {
            console.log(citem)
            return citem
          }
        }).concat(causes3) 
        setCauses(causeNew)
        console.log(causeNew)

        
      };
  
      loadCauses();

     

    }
  ,[causeOnline])

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
                Work in Progress
              </h2>
              <p>
              Un po' come una partita di basket, siamo <strong>sempre in movimento</strong> e guardiamo costantemente al futuro con nuove idee e progetti in cantiere.

              </p>
              <p>
              Un po' come Roma non è stata costruita in un giorno, anche noi abbiamo bisogno del nostro tempo.
              </p>
              <p>
              Qui di seguito, puoi trovare alcuni <strong>piccoli spoiler</strong> sui progetti che stiamo programmando, ma che non sono ancora partiti. A voi la scelta, se rovinarvi la sorpresa o meno!

              </p>
             
            </div>
          </div>
        </div>
        {(!!Causes) &&(
        <section className={`causes-section section-padding ${props.cClass}`} style={{ backgroundColor: '#ced4da', padding: '20px' }}>
          <div className="container-fluid">
            <div className="section-title-s2">
              <span style={{ marginTop: '10px', textAlign: 'center' }}>Ultimi Progetti</span>

            </div>
            <div className="content-area causes-slider" style={{ borderRadius: '20px' }}>
              <Slider {...settings}>


                            {Causes.map((causa, i)=>{console.log('Causa',causa) ;if (causa.slug)return(
                                           
                                            <div className="item" key={Causes[0].id} style={{ borderRadius: '20px', height: '200px' }}>
                                            <Link onClick={ClickHandler} to={`/cause-single/${causa.slug}`}>
                                              <div className="inner">
                                                <div className="img-holder">
                                                  <img src={causa.cImg} alt="" />
                                                </div>
                                                <div className="overlay">
                                                  <div className="overlay-content">
                          
                                                    <h3><Link onClick={ClickHandler} to={`/cause-single/${causa.slug}`}>{causa.cTitle}</Link></h3>
                                                    <div className="goal-raised">
                          
                                                      <Link onClick={ClickHandler} to={`/cause-single/${causa.slug}`} className="donate-btn"><i className="fi flaticon-heart-1"></i>Donate</Link>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </Link>
                                          </div>
                          
                                          )})}



              </Slider>
            </div>
          </div>
        </section>
        )}
      </div>
    </section>
  );
};

export default WorkInProgress;
