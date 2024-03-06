import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import Navbar from '../../components/Navbar/Navbar'
import Scrollbar from '../../components/scrollbar/scrollbar';
import TeamSection from '../../components/TeamSection/TeamSection';
import Instagram from '../../components/Instagram/Instagram';
import Footer from '../../components/footer/Footer';
import Logo from '../../images/logo.png'


const TeamPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'header-style-1'} Logo={Logo} btnClass={'theme-btn-s1'} />
            <PageTitle pageTitle={'Team'} pagesub={'Team'} />
            <TeamSection />
            <Instagram />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamPage;
