import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Instagram from '../../components/Instagram/Instagram';
import Footer from '../../components/footer/Footer';
import Team from '../../api/Team'
import Logo from '../../images/logo.png'

const TeamSinglePage = (props) => {
    const { slug } = useParams()

    const TeamDetails = Team.find(item => item.slug === slug)

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <Fragment>
            <Navbar hclass={'header-style-1'} Logo={Logo} btnClass={'theme-btn-s1'} />
            <PageTitle pageTitle={TeamDetails.name} pagesub='Team' />
            <section className="team-sigle-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-4 col-12">
                            <div className="team-single-sidebar">
                                <div className="widget attorney-widget">
                                    <h3>Our team</h3>
                                    <ul>
                                        {Team.map((attorney, aitem) => (
                                            <li key={aitem}><Link onClick={ClickHandler} to={`/team-single/${attorney.slug}`}>{attorney.name}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-8 col-12">
                            <div className="attorney-single-content">
                                <div className="attorney">
                                    <div className="img-holder">
                                        <img src={TeamDetails.AtImg} alt="" />
                                    </div>
                                    <div className="attorney-single-info">
                                        <div className="info">
                                            <h3>Gosu Rosi</h3>
                                            <span>Dedicated volunteer</span>
                                            <ul>
                                                <li><i className="ti-mobile"></i><span>Phone: </span>658-85851-8747</li>
                                                <li><i className="ti-email"></i><span>Email: </span>demo@hotmail.com</li>
                                                <li><i className="ti-timer"></i><span>Experience: </span>11 Years</li>
                                                <li><i className="ti-location-pin"></i><span>Address: </span>35 jain deow street, bang dreen home</li>
                                            </ul>
                                        </div>
                                        <div className="social">
                                            <ul>
                                                <li><Link onClick={ClickHandler} to="/team-single/Michel-Troat"><i className="ti-facebook"></i></Link></li>
                                                <li><Link onClick={ClickHandler} to="/team-single/Michel-Troat"><i className="ti-twitter-alt"></i></Link></li>
                                                <li><Link onClick={ClickHandler} to="/team-single/Michel-Troat"><i className="ti-linkedin"></i></Link></li>
                                                <li><Link onClick={ClickHandler} to="/team-single/Michel-Troat"><i className="ti-pinterest"></i></Link></li>
                                                <li><Link onClick={ClickHandler} to="/team-single/Michel-Troat"><i className="ti-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="attorney-details">
                                    <h2>About Me</h2>
                                    <p>Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather</p>
                                    <h2>Experience</h2>
                                    <p>Above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. </p>
                                    <h2>Education</h2>
                                    <p>Above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa</p>
                                    <h2>Achievements</h2>
                                    <ul>
                                        <li>- Best volunteer award 2017</li>
                                        <li>- Volunteer award 2017</li>
                                        <li>- It showed a lady fitted</li>
                                        <li>- With a fur hat in USA</li>
                                    </ul>
                                    <h2>Skills</h2>
                                    <div className="skills">
                                        <div className="skill">
                                            <h6>Volunteer about</h6>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: `85%` }}></div>
                                            </div>
                                        </div>
                                        <div className="skill">
                                            <h6>Dedicated bang</h6>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: `75%` }}></div>
                                            </div>
                                        </div>
                                        <div className="skill">
                                            <h6>Donation collection</h6>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: `85%` }}></div>
                                            </div>
                                        </div>
                                        <div className="skill">
                                            <h6>Others</h6>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: `95%` }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <h2>Contact Me</h2>
                                    <div className="contact-form">
                                        <form method="post" onSubmit={SubmitHandler}>
                                            <div>
                                                <input type="text" className="form-control" name="name" id="name" placeholder="Name*" />
                                            </div>
                                            <div>
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Email*" />
                                            </div>
                                            <div className="fullwidth">
                                                <textarea className="form-control" name="note" id="note" placeholder="Case Description..."></textarea>
                                            </div>
                                            <div className="submit-area">
                                                <button type="submit" className="theme-btn-s8">Submit It Now</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Instagram />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamSinglePage;
