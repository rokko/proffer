import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import CauseSection from '../../components/CauseSection';
import Instagram from '../../components/Instagram/Instagram';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '../../images/logo.png'


const CasePage =() => {
    return(
        <Fragment>
            <Navbar hclass={'header-style-1'} Logo={Logo} btnClass={'theme-btn-s1'} />
            <PageTitle pageTitle={'Progetti'} pagesub={'Progetti in corso'}/> 
            <CauseSection cClass={'pt-120'}/>
            <Instagram />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CasePage;

