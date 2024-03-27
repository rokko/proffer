import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";


const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const [cartActive, setcartState] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { carts } = props;

    return (
        <header id="header" className={`site-header ${props.hclass}`}>
            <nav className="navigation navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <MobileMenu />
                        <Link onClick={ClickHandler} className="navbar-brand" to="/home"><img src={props.Logo} alt="" /></Link>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse navigation-holder">
                        <button className="close-navbar"><i className="ti-close"></i></button>

                        <ul className="nav navbar-nav mb-2 mb-lg-0">
                            <li className="menu-item-has-children current-menu-parent">
                                <Link onClick={ClickHandler} to="/">Home</Link>
                             
                            </li>
                            <li className="menu-item-has-children">
                                <Link onClick={ClickHandler} to="/">Chi Siamo</Link>
                                <ul className="sub-menu">
                                    <li><Link onClick={ClickHandler} to="/about">STORIA</Link></li>
                                    <li><Link onClick={ClickHandler} to="/mission">MISSION</Link></li>
                
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <Link onClick={ClickHandler} to="/">Cosa Facciamo</Link>
                                <ul className="sub-menu">
                                    <li><Link onClick={ClickHandler} to="/causes">Ogni Giorno / Progetti</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <Link onClick={ClickHandler} to="/comeaiutarci">Come Aiutarci</Link>
                               
                            </li>
                           
                        </ul>
                    </div>

                  
                </div>
                <div style={{display:'flex', flexDirection:'row',gap:'10px'}}>
                <img width="48" height="48" src="https://img.icons8.com/doodle/48/instagram-new.png" alt="instagram-new"/> 
                <div style={{width:'150px',display:'flex', flexDirection:'row', justifyContent:'center', backgroundColor:'green', color:'white', fontWeight:'bold', borderRadius:'30px', alignItems:'center'}}>DONA ORA</div>
                </div>
            </nav>
        </header>

    )
}

const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};


export default connect(mapStateToProps, { removeFromCart })(Header);