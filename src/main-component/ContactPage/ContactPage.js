import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import Navbar from '../../components/Navbar/Navbar'
import Scrollbar from '../../components/scrollbar/scrollbar';
import Contactpage from '../../components/Contactpage/Contactpage';
import Instagram from '../../components/Instagram/Instagram';
import Footer from '../../components/footer/Footer';
import Logo from '../../images/logo.png'

const AboutPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'header-style-1'} Logo={Logo} btnClass={'theme-btn-s1'} />
            <PageTitle pageTitle={'Contact us'} pagesub={'Contact us'} />
            <Contactpage/>
            <Instagram />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;