import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Testimonial2 from '../../components/Testimonial2/Testimonial2';
import Footer from '../../components/footer/Footer';
import Logo from '../../images/logo.png'

const TestimonialPage =() => {
    return(
        <Fragment>
            <Navbar hclass={'header-style-1'} Logo={Logo} btnClass={'theme-btn-s1'}/>
            <PageTitle pageTitle={'Testimonial'} pagesub={'Testimonial'}/> 
            <Testimonial2/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default TestimonialPage;
