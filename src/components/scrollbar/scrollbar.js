import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './style.css'

const Scrollbar = () => {

    return(
        <div className="col-lg-12">
            <div className="header-menu">
                <ul className="smothscroll">
                    <li><AnchorLink href='#scrool' style={{backgroundColor:'#78c3e0', border:'none'}}><i className="ti-arrow-circle-up"></i></AnchorLink></li>
                </ul>
            </div>
        </div>
        
    )
}

export default Scrollbar;
