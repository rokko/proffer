import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer';
import Causes from '../../api/cause'
import Logo from '../../images/logo.png'
import DonaOra from './DonaOra';

const CauseSinglePage = (props) => {
    const { slug } = useParams()

    const caseDetails = Causes.find(item => item.slug === slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Navbar hclass={'header-style-1'} Logo={Logo} btnClass={'theme-btn-s1'} />
            <PageTitle pageTitle={caseDetails.cTitle} pagesub={'Progetto'} />
            <section className="case-single-section section-padding">
                <div className="container">
                <h3>Titolo del progetto </h3>
                        <div className="col col-xl-8 col-lg-7 col-12">
                            <div className="img-holder details-img">
                                <img src={caseDetails.cImg} alt="" />
                            </div>
                        </div>
                        <div >
                            <div className="case-info-area">
                               
                               
                                
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non felis varius, lacinia nisi vel, scelerisque dui. Donec suscipit condimentum ornare. Ut massa velit, maximus in placerat nec, feugiat at urna. Etiam arcu massa, interdum dapibus mattis sed, auctor a ante. Proin non porttitor tortor, id facilisis purus. Nullam blandit erat nec ipsum volutpat vehicula. Sed convallis vehicula hendrerit. Aenean velit urna, pretium at hendrerit non, ullamcorper sed ipsum.</p>
                                
                            </div>
                        </div>

                    <div className="row donate-area-bottom">
                        <div className="col col-lg-8 col-12">
                            <div className="donate-area-wrapper">
                                <h3>Dona Ora</h3>
                                <DonaOra/>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-12">
                            <div className="case-single-sidebar">
                                <div className="widget contact-widget">
                                    <div>
                                        <p>Numero di telefono:</p>
                                        <h4>+39 347654321</h4>
                                    </div>
                                    <div>
                                        <p>Email:</p>
                                        <h4>prova@gmail.com</h4>
                                    </div>
                                </div>

                                <div className="widget urgent-case-widget">
                                    <div className="cases">
                                        {Causes.slice(0, 3).map((Cause, citem) => (
                                            <div className="case" key={citem}>
                                                <div className="img-holder">
                                                    <img src={Cause.cImg} alt="" />
                                                </div>
                                                <div className="details">
                                                    <h4><Link onClick={ClickHandler} to={`/cause-single/${Cause.slug}`}>{Cause.cTitle}</Link></h4>
                                                    <span className="g-r">${Cause.Goal} raised of ${Cause.Raised}</span>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default CauseSinglePage;
