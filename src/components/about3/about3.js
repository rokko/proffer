import React from 'react'
import abimg from '../../images/about-s3.jpg'
import { Link } from 'react-router-dom';


const About3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="about-s3-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-4 col-12">
                        <div className="about-title-area">
                            <div className="section-title">
                                <span>#About</span>
                                <h2>Charity is a continuous process toward success and happiness</h2>
                            </div>
                            <Link onClick={ClickHandler} to="/" className="theme-btn-s4">More about us</Link>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-12">
                        <div className="img-holder">
                            <img src={abimg} alt="" />
                        </div>
                    </div>
                    <div className="col col-lg-4 col-12">
                        <div className="about-text-area">
                            <p>Throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath</p>
                            <h5>Michel Jhon</h5>
                            <span>CEO of the instute</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About3;