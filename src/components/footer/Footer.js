import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.png'


const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <footer className="site-footer">
            <div className="upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xl-3 col-lg-3 col-md-6 col-12">
                            <div className="widget about-widget">
                                <div className="widget-title">
                                    <h3>
                                        <img src={Logo} alt="" />
                                    </h3>
                                </div>
<p>Dove può condurti la passione per la pallacanestro?</p>                       
                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-3 col-md-6 col-12">
                            <div className="widget contact-widget service-link-widget">
                                <div className="widget-title">
                                    <h3>Contatti</h3>
                                </div>
                                <ul>
                                    <li><span>Telefono:</span> 123456789</li>
                                    <li><span>Email:</span> prova@prova.it</li>
                                    <li><span>Orari:</span> 10AM- 5PM</li>
                                </ul>
                            </div>
                        </div>
                       
                        <div className="col col-xl-3 col-lg-3 col-md-6 col-12">
                            <div className="widget newsletter-widget">
                            <img width="48" height="48" src="https://img.icons8.com/doodle/48/instagram-new.png" alt="instagram-new"/> 
                            <br/><br/>

                             
                                <p>Iscriviti alla newsletter per rimanere aggiornato.</p>
                                <form onSubmit={SubmitHandler}>
                                    <div className="input-1">
                                        <input type="email" className="form-control" placeholder="Email Address *" required />
                                    </div>
                                    <div className="submit clearfix">
                                        <button type="submit" style={{display:'flex',justifyContent:'center',alignItems:'center'}}><i className="fi flaticon-paper-plane"></i></button>
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
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/">Privace & Policy</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">Terms and conditions</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;