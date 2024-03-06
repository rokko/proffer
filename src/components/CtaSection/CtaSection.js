import React from 'react'
import cta from '../../images/cta-s1-pic.jpg'
import { Link } from 'react-router-dom';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const CtaSection = (props) => {

    return (
        <section className="cta-s1-section">
            <div className="container">
                <div className="row">
                    <div className="col col-xl-5 col-lg-5 col-12">
                        <div className="img-holder">
                            <img src={cta} alt=""/>
                        </div>
                    </div>
                    <div className="col col-xl-6 offset-xl-1 col-lg-7 col-12">
                        <div className="info-col">
                            <div className="section-title">
                                <span>#Events</span>
                                <h2>We will <span>togather</span> make the world better</h2>
                            </div>

                            <div className="details">
                                <p>Magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the windowIt  showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window</p>
                                <Link onClick={ClickHandler} to="/contact" className="theme-btn-s6"><i className="fi flaticon-like"></i> Donate now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaSection;