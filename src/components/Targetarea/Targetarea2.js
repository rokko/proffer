import React from 'react'
import abimg from '../../images/target.jpg'
import { Link } from 'react-router-dom';

const Targetarea2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="target-area section-padding" id="about">
            <div className="container">
                <div className="row">
                    
                    <div className="col col-lg-7 col-12">
                        <div className="target-content">
                            <div className="section-title">
                                <span>#Brochure</span>
                                
                            </div>
                            <div className="content">
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Targetarea2;