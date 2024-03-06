import React from 'react'
import abimg from '../../images/target.jpg'
import { Link } from 'react-router-dom';

const Targetarea = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="target-area section-padding" id="about">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-5 col-12">
                        <div className="img-holder">
                            <img src={abimg} alt=""/>
                        </div>
                    </div>
                    <div className="col col-lg-7 col-12">
                        <div className="target-content">
                            <div className="section-title">
                                <span>#Target</span>
                                <h2>We have <span>reached</span> so far!</h2>
                            </div>
                            <div className="content">
                                <p>Magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather or then turned to look out.</p>

                                <div className="goal-raised">
                                    <div>
                                        <span>Donation goal </span>
                                        <h3>$45,000</h3>
                                    </div>
                                    <div>
                                        <span>Donation raised </span>
                                        <h3>$35,000</h3>
                                    </div>
                                </div>
                                <Link onClick={ClickHandler} to="/cause-single/Childrens-voices" className="theme-btn-s3"><i className="fi flaticon-like"></i> Donate Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Targetarea;