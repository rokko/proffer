import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import EventsSection from '../../components/EventsSection/EventsSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '../../images/logo.png'

const EventPage =() => {
    return(
        <Fragment>
            <Navbar hclass={'header-style-1'} Logo={Logo} btnClass={'theme-btn-s1'} />
            <PageTitle pageTitle={'Events'} pagesub={'Events'}/> 
            <EventsSection eClass={'pb-120'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default EventPage;

