import React from 'react'
import abimg from '../../images/about-s2.jpg'
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

const About2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const funFact = [
        {
            title: '25',
            subTitle: 'Volunteer',
            Symbol: '+',
        },
        {
            title: '2500',
            subTitle: 'Happy Children',
            Symbol: '+',
        },
        {
            title: '45',
            subTitle: ' Donated',
            Symbol: 'M',
        },
        {
            title: '2515',
            subTitle: 'campaigns',
            Symbol: '+',
        },
    ]

    return (
        <section className="about-section-s2">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7 col-12">
                        <div className="about-area">
                            <div className="section-title">
                                <span>#Target</span>
                                <h2>Help make this world a fairer place for all animals</h2>
                            </div>
                            <Link onClick={ClickHandler} to="/" className="theme-btn-s4">More about us</Link>
                            <img src={abimg} alt="" />
                        </div>
                    </div>
                    <div className="col col-xl-4 col-lg-5 col-12">
                        <div className="fun-fact-area">
                            <div className="fun-fact-grids clearfix">
                                {funFact.map((funfact, fitem) => (
                                    <div className="grid" key={fitem}>
                                        <div className="info">
                                            <div>
                                                <h3><span><CountUp end={funfact.title} enableScrollSpy /></span>{funfact.Symbol}</h3>
                                            </div>
                                            <div>
                                                <p>{funfact.subTitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;