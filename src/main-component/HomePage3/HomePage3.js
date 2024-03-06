import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2'
import Hero3 from '../../components/hero3/hero3';
import Features2 from '../../components/Features2/Features2';
import About3 from '../../components/about3/about3';
import Campaigns from '../../components/Campaigns/Campaigns';
import CtaSectionS3 from '../../components/CtaSectionS3/CtaSectionS3';
import EventsSection from '../../components/EventsSection/EventsSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import TeamSection from '../../components/TeamSection/TeamSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Instagram from '../../components/Instagram/Instagram';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';


const HomePage3 = () => {
    return (
        <Fragment>
            <Navbar2/>
            <Hero3 />
            <Features2 />
            <About3 />
            <Campaigns />
            <CtaSectionS3 />
            <Testimonial />
            <EventsSection />
            <TeamSection />
            <BlogSection bClass={'p-t-0'}/>
            <Instagram />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage3;