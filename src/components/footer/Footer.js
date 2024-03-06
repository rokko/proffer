import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/footer-logo.png'


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
                                <p>Strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal</p>
                                <div className="social-icons">
                                    <ul>
                                        <li><Link onClick={ClickHandler} to="/"><i className="ti-facebook"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="/"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="/"><i className="ti-linkedin"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="/"><i className="ti-pinterest"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-3 col-md-6 col-12">
                            <div className="widget contact-widget service-link-widget">
                                <div className="widget-title">
                                    <h3>Address Location</h3>
                                </div>
                                <ul>
                                    <li>Upper surface of the impenetrable foliage of my trees, and</li>
                                    <li><span>Phone:</span> 12465246</li>
                                    <li><span>Email:</span> demo@example.com</li>
                                    <li><span>Office Time:</span> 10AM- 5PM</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-3 col-md-6 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/about">About us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/causes">Our services</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Contact us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/team">Meet team</Link></li>
                                </ul>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/contact">Privacy Policy</Link></li>
                                    <li><Link onClick={ClickHandler} to="/testimonials">Testimonials</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog">News</Link></li>
                                    <li><Link onClick={ClickHandler} to="/team">Team</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-3 col-md-6 col-12">
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>Newsletter</h3>
                                </div>
                                <p>You will be notified when somthing new will be appear.</p>
                                <form onSubmit={SubmitHandler}>
                                    <div className="input-1">
                                        <input type="email" className="form-control" placeholder="Email Address *" required />
                                    </div>
                                    <div className="submit clearfix">
                                        <button type="submit"><i className="fi flaticon-paper-plane"></i></button>
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
                            <p className="copyright">Copyright &copy; 2023 Proffer. All rights reserved</p>
                            <div className="extra-link">
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/contact">Privace & Policy</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">terms and conditions</Link></li>
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