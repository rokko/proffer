import React from 'react'
import abimg from '../../images/about.jpg'
import { Link } from 'react-router-dom';

const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="about-section">
            <div className="content-area">
                <div className="left-col">
                    <div className="about-area">
                        <div className="section-title">
                            <span>#Target</span>
                            <h2>When <span>hope is hungry, </span>everything feeds it.</h2>
                        </div>
                        <div className="about-details">
                            <p>Magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather or then turned to look out.</p>
                            <div className="btns">
                                <Link onClick={ClickHandler} to="/" className="theme-btn-s4">More about us</Link>
                                <Link onClick={ClickHandler} to="/" className="theme-btn-s5">Become a Volunteer Now</Link>
                            </div>
                            <div className="about-features">
                                <div>
                                    <div className="icon">
                                        <i className="fi flaticon-pencil-case"></i>
                                    </div>
                                    <h3>Education</h3>
                                    <p>Magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur.</p>
                                </div>
                                <div>
                                    <div className="icon">
                                        <i className="fi flaticon-fruits"></i>
                                    </div>
                                    <h3>Food</h3>
                                    <p>Magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur.</p>
                                </div>
                                <div>
                                    <div className="icon">
                                        <i className="fi flaticon-donation"></i>
                                    </div>
                                    <h3>Hope</h3>
                                    <p>Magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur.</p>
                                </div>
                                <div>
                                    <div className="icon">
                                        <i className="fi flaticon-charity"></i>
                                    </div>
                                    <h3>Prayer</h3>
                                    <p>Magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur.</p>
                                </div>
                                <div>
                                    <div className="icon">
                                        <i className="fi flaticon-smile"></i>
                                    </div>
                                    <h3>Education</h3>
                                    <p>Magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur.</p>
                                </div>
                                <div>
                                    <div className="icon">
                                        <i className="fi flaticon-like"></i>
                                    </div>
                                    <h3>Education</h3>
                                    <p>Magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-col data-bg-image" style={{ backgroundImage: `url(${abimg})` }}>
                    <div className="img-holder">
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;