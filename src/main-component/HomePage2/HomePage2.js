import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero2 from '../../components/hero2';
import Features from '../../components/Features/Features';
import CauseSection from '../../components/CauseSection';
import About2 from '../../components/about2/about2';
import EventsSection from '../../components/EventsSection/EventsSection';
import PartnerSection2 from '../../components/PartnerSection2/PartnerSection2';
import TeamSection from '../../components/TeamSection/TeamSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Instagram from '../../components/Instagram/Instagram';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo-2.png'


const HomePage2 = () => {
    return (
        <Fragment>
            <Navbar hclass={'header-style-2'} Logo={Logo} btnClass={'theme-btn-s7'}/>
            <Hero2 />
            <Features />
            <CauseSection />
            <About2 />
            <PartnerSection2 />
            <EventsSection />
            <TeamSection />
            <BlogSection bClass={'p-t-0'}/>
            <Instagram />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage2;