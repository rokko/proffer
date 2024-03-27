import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import Navbar from '../../components/Navbar/Navbar'
import Scrollbar from '../../components/scrollbar/scrollbar';
import About4 from '../../components/about4/about4';
import CauseSection from '../../components/CauseSection';
import MissionSection from '../../components/MissionSection/MissionSection';
import Targetarea from '../../components/Targetarea/Targetarea';
import EventsSection from '../../components/EventsSection/EventsSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import CtaSectionS2 from '../../components/CtaSectionS2/CtaSectionS2';
import PartnerSection from '../../components/PartnerSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Instagram from '../../components/Instagram/Instagram';
import Footer from '../../components/footer/Footer';
import Logo from '../../images/logo.png'
import MissionSection2 from '../../components/MissionSection/MissionSection2';
import AboutAste from '../../components/about4/AboutAste';

const Aste= () => {
    return (
        <Fragment>
            <Navbar hclass={'header-style-1'} Logo={Logo} btnClass={'theme-btn-s1'} />
            <PageTitle pageTitle={'Aste'} pagesub={'Aste'} />
            <AboutAste /> 
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default Aste;
