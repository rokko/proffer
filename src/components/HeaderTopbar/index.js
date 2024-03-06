import React from 'react'
import { Link } from 'react-router-dom'


const HeaderTopbar = (props) => {
    return (
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 offset-lg-2 col-12">
                        <div className="social">
                            <span>Follow us: </span>
                            <ul>
                                <li><Link to="/"><i className="ti-facebook"></i></Link></li>
                                <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link to="/"><i className="ti-linkedin"></i></Link></li>
                                <li><Link to="/"><i className="ti-pinterest"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-7 col-12">
                        <div className="link-donate">
                            <ul>
                                <li><Link to="/">FAQ</Link></li>
                                <li><Link to="/">Become Volunteer</Link></li>
                                <li><Link to="/">Privacy</Link></li>
                                <li><Link to="/">Cookie</Link></li>
                            </ul>
                            <div className="donate-btn-wrap">
                                <Link to="/" className="donate-btn-2">Donate now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;