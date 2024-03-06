import React from 'react'
import { Link } from 'react-router-dom';

const CtaSectionS3 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="cta-section-s3">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content-area">
                            <h3>“While the lovely valley teems vapour around me, and the sunda strikes the upper ground”</h3>
                            <div className="btns">
                                <Link onClick={ClickHandler} to="/team" className="theme-btn-s8">Donate Now</Link>
                                <Link onClick={ClickHandler} to="/team" className="theme-btn-s9">Become a volunteer</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaSectionS3;