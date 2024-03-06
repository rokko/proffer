import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer';
import Instagram from '../../components/Instagram/Instagram';
import Events from '../../api/event'
import esImg from '../../images/event-single/img-2.jpg'
import Logo from '../../images/logo.png'


const EventSinglePage = (props) => {
    const { slug } = useParams()

    const eventDetails = Events.find(item => item.slug === slug)

    return (
        <Fragment>
            <Navbar hclass={'header-style-1'} Logo={Logo} btnClass={'theme-btn-s1'} />
            <PageTitle pageTitle={eventDetails.eTitle} pagesub={'Event'} />
            <section className="event-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-md-8">
                            <div className="event-single-img">
                                <img src={eventDetails.eImg} alt=""/>
                            </div>
                        </div>
                        <div className="col col-md-4">
                            <div className="event-info">
                                <h3>Event info</h3>
                                <ul>
                                    <li>
                                        <i className="fi flaticon-alarm"></i>
                                        <h5>Start time</h5>
                                        <p>10AM</p>
                                    </li>
                                    <li>
                                        <i className="fi flaticon-guarantee"></i>
                                        <h5>End Time</h5>
                                        <p>1 PM</p>
                                    </li>
                                    <li>
                                        <i className="fi flaticon-down-arrow-3"></i>
                                        <h5>Address</h5>
                                        <p>Under omnis iste natus error</p>
                                    </li>
                                    <li>
                                        <i className="fi flaticon-like"></i>
                                        <h5>Organization</h5>
                                        <p>Big bang organization</p>
                                    </li>
                                    <li>
                                        <i className="fi flaticon-envelope"></i>
                                        <h5>Contact</h5>
                                        <p>example@demo.com</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="event-text">
                                <h2>Employee giving funds - Corporate generosity</h2>
                                <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size16 pxOne morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs</p>
                                <p>He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size16 pxOne morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back</p>
                                <div className="img-holder">
                                    <img src={esImg} alt=""/>
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
export default EventSinglePage;
