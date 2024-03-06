import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogList from '../../components/BlogList/BlogList.js'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Logo from '../../images/logo.png'


const BlogPageLeft =() => {
    return(
        <Fragment>
            <Navbar hclass={'header-style-1'} Logo={Logo} btnClass={'theme-btn-s1'} />
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogList blLeft={'order-lg-1'} blRight={'order-lg-2'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogPageLeft;

