import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.png'
import sfondo from '../../images/footersfondo.webp'
import Facebook from '../../images/facebook.png'
import Youtube from '../../images/youtube.png'
import Instagram from '../../images/instagram.png'
const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <footer className="site-footer" style={{ backgroundColor:'#1b1b1b' }}>
            <div className="upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xl-4 col-lg-3 col-md-6 col-12">
                            <div className="widget about-widget">
                                <div className="widget-title">
                                    <h3>
                                        <img src={Logo} style={{width:'200px'}} alt="" />
                                    </h3>
                                </div>
<p style={{fontSize:'25px', lineHeight:'40px', fontStyle:'italic'}}>"Dove può condurti la passione per la pallacanestro?"</p>                       
                            </div>
                        </div>
                        <div className="col col-xl-4 col-lg-3 col-md-6 col-12">
                            <div className="widget contact-widget service-link-widget">
                                <div className="widget-title">
                                    <h3>Contatti</h3>
                                </div>
                                <ul>
                                    <li><span>Sede Legale:</span>  Via Sabrata, 9 00198 Roma
</li>
                                    <li><span>Email:</span> valepertutti.info@gmail.com</li>
                                    <li><span>Codice Fiscale:</span> 96539310589</li>
                                    <li><span>Numero di telefono:</span> 3487303525</li>
                                    
                                </ul>
                            </div>
                        </div>
                       
                        <div className="col col-xl-4 col-lg-3 col-md-6 col-12">
                            <div className="widget newsletter-widget">
                            <img width="48" height="48" src={Instagram} alt="instagram-new"/> 
                <img width="48" height="48" src={Youtube} alt="instagram-new"/> 
                <img width="48" height="48" src={Facebook} alt="instagram-new"/> 
                            <br/><br/>

                             
                                <h3 style={{color:'white', fontSize:'1.25rem'}}>Iscriviti alla newsletter per rimanere aggiornato.</h3>
                                <form onSubmit={SubmitHandler}>
                                    <div className="input-1" style={{colore:'white'}}>
                                        <input type="email" className="form-control" placeholder="Email Address *" required style={{color:'white', opacity:'1'}} />
                                    </div>
                                    <div className="submit clearfix">
                                        <button type="submit" style={{display:'flex',justifyContent:'center',alignItems:'center', backgroundColor:'#78c3e0'}}><i className="fi flaticon-paper-plane"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="separator"></div>
                        <div className="col col-xs-12">
                            <p className="copyright">Copyright &copy; 2024 Valepertutti. All rights reserved Powered By Besteam</p>
                            <div className="extra-link">
                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;