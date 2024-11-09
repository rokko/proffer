import React, { Fragment, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer';
import Causes from '../../api/cause'
import Logo from '../../images/logo.png'
import DonaOra from './DonaOra';
import Instagram from '../../images/instagram.png'

const CauseSinglePage = (props) => {
    const { slug } = useParams()
    var numeroArticolo = 0

    const caseDetails = Causes.find(item => item.slug === slug)
    console.log(caseDetails)
    const convertTextAndLinks = (text) => {
        // RegEx per rilevare i link
        const urlRegex = /(https?:\/\/[^\s]+)/g;
      
        // Dividiamo il testo in base ai link
        return text.split(urlRegex).map((part, index) => {
          // Se il frammento corrisponde al pattern di un URL, lo rendiamo un link cliccabile
          if (urlRegex.test(part)) {
            numeroArticolo = numeroArticolo+1
            return (
              <a key={index} href={part} target="_blank" rel="noopener noreferrer">
                Articolo Approfondimento {numeroArticolo}
                <br/>
              </a>
            );
          }
          // Se non è un link, restituisci solo il testo, ignorando i frammenti vuoti
          if (part.trim() === '') {
            return null; // Ignora i frammenti vuoti
          }
          return part.split('\n').map((line, i) => (
            <p key={i}>
              {line}
              <br />
            </p>
          ));
        });
      };
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Navbar hclass={'header-style-1'} Logo={Logo} btnClass={'theme-btn-s1'} />
            <section className="case-single-section " style={{padding:'120px'}}>
                <div className="container">
                <div className="section-title-s3" style={{marginTop:'30px'}}>
                
                <h2 style={{marginBottom:'-40px'}}>
                {caseDetails.cTitle} </h2>
                </div>
                        <div className="col col-xl-8 col-lg-7 col-12">
                            <div className="img-holder details-img">
                                <img src={caseDetails.fotoArticolo} alt="" />
                            </div>
                        </div>
                        <div >
                            <div className="case-info-area section-title-s3 .testo-paragraph">
                               {convertTextAndLinks(caseDetails.testo)}
                               
                               
                                
                                
                            </div>
                            {caseDetails.fotoArticolo2 && <img src={caseDetails.fotoArticolo2} alt="" />}
                        <div style={{display:'flex', flexDirection:'row', gap:'2rem'}}>
                            <h3>Seguici su Instagram </h3>
                        <a style={{ width: '48px', height: '48px' }} href="https://www.instagram.com/valepertutti.it/" target='_blank'>
                        <img width="48" height="48" src={Instagram} alt="instagram-new" />
                    </a>
                    </div>
                        </div>

                    <div className="row donate-area-bottom">
                    
                        <div className="col col-lg-8 col-12">
                            <div className="donate-area-wrapper">
                                <h3>Dona Ora</h3>
                                <DonaOra/>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-12">
                            <div className="case-single-sidebar">
                                <div className="widget contact-widget" style={{marginTop:'34px' , backgroundColor:'#78C3E0'}}>
                                    <div>
                                        <p>Numero di telefono:</p>
                                        <h4>+39 3487303525</h4>
                                    </div>
                                    <div>
                                        <p>Email:</p>
                                        <h4>valepertutti.info@gmail.com</h4>
                                    </div>
                                </div>

                                <div className="widget urgent-case-widget">
                                    <div className="cases">
                                        {Causes.slice(0, 3).map((Cause, citem) => (
                                            <div className="case" key={citem}>
                                                <div className="img-holder">
                                                    <img src={Cause.cImg} alt="" />
                                                </div>
                                                <div className="details">
                                                    <h4><Link onClick={ClickHandler} to={`/cause-single/${Cause.slug}`}>{Cause.cTitle}</Link></h4>
                                                   
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default CauseSinglePage;
