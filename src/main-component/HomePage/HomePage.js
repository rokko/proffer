import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/hero';
import Targetarea from '../../components/Targetarea/Targetarea';
import CauseSection from '../../components/CauseSection';
import About from '../../components/about/about';
import EventsSection from '../../components/EventsSection/EventsSection';
import PartnerSection from '../../components/PartnerSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import CtaSectionS2 from '../../components/CtaSectionS2/CtaSectionS2';
import BlogSection from '../../components/BlogSection/BlogSection';
import Instagram from '../../components/Instagram/Instagram';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.png'
import Targetarea2 from '../../components/Targetarea/Targetarea2';
import CauseSection2 from '../../components/CauseSection/index2';
import NewsLetter from '../../components/Targetarea/Newsletter';
import Collaborazioni from '../../components/Targetarea/Collaborazioni';
import FormDonazioni from '../../components/Targetarea/FormDonazioni';
import VideoArea from '../../components/Targetarea/VideoArea';
import AnimatedComponent from '../components/AnimatedComponent';

const HomePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'header-style-1'} Logo={Logo} btnClass={'theme-btn-s1'} />
            <AnimatedComponent>
                <Hero />
            </AnimatedComponent>
            <AnimatedComponent>
                <VideoArea />
            </AnimatedComponent>
            <AnimatedComponent>
                <Targetarea2 />
            </AnimatedComponent>
            <AnimatedComponent>
                <CauseSection2 />
            </AnimatedComponent>
            <AnimatedComponent>
                <NewsLetter />
            </AnimatedComponent>
            <AnimatedComponent>
                <Collaborazioni />
            </AnimatedComponent>
            <AnimatedComponent>
                <FormDonazioni />
            </AnimatedComponent>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};
export default HomePage;