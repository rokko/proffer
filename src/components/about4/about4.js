import React from "react";
import storiaImg from './storia.webp'
import slid1 from './slider1/Foto Page Storia slider 1 (1).jpg'
import slid2 from './slider1/Foto Page Storia slider 1 (2).jpg'
import slid3 from './slider1/Foto Page Storia slider 1 (3).jpg'
import slid4 from './slider1/Foto Page Storia slider 1 (4).jpg'
import slid5 from './slider1/Foto Page Storia slider 1 (5).jpg'
import slid6 from './slider1/Foto Page Storia slider 1 (6).jpg'
import slid7 from './slider1/Foto Page Storia slider 1 (7).jpg'

import slid8 from './slider2/foto1.jpeg'
import slid9 from './slider2/foto2.jpg'
import slid10 from './slider2/foto3.jpg'
import slid11 from './slider2/foto4.jpg'
import slid12 from './slider2/foto5.jpeg'

import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
      <div
          className={className}
          style={{ ...style, display: "block" ,backgroundColor:'rgba(0,0,0,0.5)'}}
          onClick={onClick}
      />
  );
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
      <div
          className={className}
          style={{ ...style, display: "block" ,backgroundColor:'rgba(0,0,0,0.5)'}}
          onClick={onClick}
      />
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 10,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, // Abilita l'autoplay
  autoplaySpeed: 2000, 
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};


const About4 = (props) => {

  const images=[
    slid1, slid2, slid3, slid4, slid5, slid6, slid7
  ]
  const images2=[
    slid8, slid9, slid10, slid11, slid12
  ]


  return (
    <section className="about-page-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-lg-8 col-md-10">
            <div className="section-title-s3">
              <h2>
                Dove può condurre e spingerti la passione per la pallacanestro?
              </h2>
              <p>
                Se lo è sempre chiesto Valerio D’Angelo, ragazzo romano con gli
                occhi grandi e luminosi, e un sorriso un po’ buffo, che ha
                girato il mondo e incontrato tutti gli idoli della sua vita come
                Ginobili, Kobe Bryant, Nowitzki, Garnett, Ray Allen, Bodiroga, i
                fratelli Gasol.
              </p>
          
              <Slider {...settings}>
                {images.map((image, index) => (
                  <div key={index} style={{display:"flex", alignContent:'center',alignItems:'center', justifyContent:'center'}}>
                    <img src={image} alt={image} />
                  </div>
                ))}
              </Slider>
            
              <p>
                Valerio era una mente eccelsa, nel lavoro e nelle passioni. Ha
                soprattutto scritto libri (<a href="https://www.lagiornatatipo.it/basket-i-feel-this-game/" target="_blank">scopri di più</a>), giocato
                a basket, girato il mondo, spiccato il volo dalla sua Ostia
                verso Dublino, Londra, Los Angeles. Perché mentre la
                pallacanestro ha sempre rappresentato il suo “paese delle
                meraviglie”, nella vita di tutti i giorni, da ingegnere
                informatico, da ragazzo dotato di un’intelligenza straordinaria,
                è diventato manager di alcune delle aziende più famose al mondo
                come Google, Facebook e Whatsapp.
              </p>
              <p>
                Spesso, quando si parla delle persone, si tende a minimizzare i
                difetti e ad esaltare i pregi, ma con Valerio non è così.
              </p>
              <p>
                Valerio ha scoperto di avere un destino infame a 26 anni. Non si
                è mai fatto crollare il mondo addosso e ha sempre cercato di
                godersi ogni attimo della vita. Lo ha fatto costruendosi una
                straordinaria carriera lavorativa, lo ha fatto coltivando una
                passione smisurata per la pallacanestro, lo ha fatto con le sue
                incredibili collezioni di canotte (oltre 200…), di cimeli e di
                memorabilia. Lo ha fatto infondendo positività nelle persone.
              </p>
              <p>
                Ha vissuto 8 anni tra l’illusione di essersi messo tutto alle
                spalle e l’angoscia di ritrovarsi quel maledetto baratro dietro
                l’angolo. Che puntualmente si è ripresentato quando sembrava
                essere sparito per sempre.
              </p>
              <p>
                Quella di Valerio è la più stronza e tristemente fedele storia
                sulla ingiustizia della vita, un bastardo copione che è andato a
                colpire un ragazzo intraprendente, coraggioso, bravo, preparato,
                talentuoso e meravigliosamente sorridente.
              </p>

              <Slider {...settings}>
                {images2.map((image, index) => (
                  <div key={index} style={{display:"flex", alignContent:'center',alignItems:'center', justifyContent:'center'}}>
                    <img src={image} alt={image} />
                  </div>
                ))}
              </Slider>


         
              <p>
                Valerio se ne è andato a 34 anni, ma ha contaminato le persone
                che ha conosciuto, con la sua splendida voglia di fare, creare,
                sognare, realizzarsi nella vita, lasciando un'eredità
                importante.
              </p>
              <p>Legacy, così la chiamano in America.</p>
              <p>
                Il 20 settembre 2022 nasce VALE PER TUTTI e noi, tramite questa
                associazione, vogliamo contaminare il mondo con la legacy di
                Valerio. O almeno, ci proveremo.
              </p>
              <img src={storiaImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About4;
