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
                                <ul className="sub-menu">
                                    <li className="current-menu-item"><Link onClick={ClickHandler} to="/home">Home style 1</Link></li>
                                    <li><Link onClick={ClickHandler} to="/home-2">Home style 2</Link></li>
                                    <li><Link onClick={ClickHandler} to="/home-3">Home style 3</Link></li>
                                    <li className="menu-item-has-children">
                                        <Link onClick={ClickHandler} to="/Level3">Third level</Link>
                                        <ul className="sub-menu">
                                            <li><Link onClick={ClickHandler} to="/">Level 3</Link></li>
                                            <li><Link onClick={ClickHandler} to="/">Level 3</Link></li>
                                            <li><Link onClick={ClickHandler} to="/">Level 3</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <Link onClick={ClickHandler} to="/">Pages</Link>
                                <ul className="sub-menu">
                                    <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                    <li><Link onClick={ClickHandler} to="/testimonials">Testimonials</Link></li>
                                    <li><Link onClick={ClickHandler} to="/team">Team</Link></li>
                                    <li><Link onClick={ClickHandler} to="/team-single/Michel-Troat">Team single</Link></li>
                                    <li><Link onClick={ClickHandler} to="/404">404</Link></li>
                                    <li><Link onClick={ClickHandler} to="/events">Events</Link></li>
                                    <li><Link onClick={ClickHandler} to="/event-single/Help-The-Poor">Event single</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <Link onClick={ClickHandler} to="/">Causes</Link>
                                <ul className="sub-menu">
                                    <li><Link onClick={ClickHandler} to="/causes">Causes</Link></li>
                                    <li><Link onClick={ClickHandler} to="/cause-single/Childrens-voices">Causes single</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <Link onClick={ClickHandler} to="/">Blog</Link>
                                <ul className="sub-menu">
                                    <li><Link onClick={ClickHandler} to="/blog">Blog default</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog-left-sidebar">Blog left sidebar</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog-fullwidth">Blog full width</Link></li>
                                    <li className="menu-item-has-children">
                                        <Link onClick={ClickHandler} to="/Level3">Blog details</Link>
                                        <ul className="sub-menu">
                                            <li><Link onClick={ClickHandler} to="/blog-single/Canna-Law-Blog-is-a-forum-for-discussing-the-practical">Blog details</Link></li>
                                            <li><Link onClick={ClickHandler} to="/blog-single-left-sidebar/Canna-Law-Blog-is-a-forum-for-discussing-the-practical">Blog details left sidebar</Link></li>
                                            <li><Link onClick={ClickHandler} to="/blog-single-fullwidth/Canna-Law-Blog-is-a-forum-for-discussing-the-practical">Blog details full width</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <Link onClick={ClickHandler} to="/">Shop</Link>
                                <ul className="sub-menu">
                                    <li><Link onClick={ClickHandler} to="/shop">Shop</Link></li>
                                    <li><Link onClick={ClickHandler} to="/product-single/Ninja-Hoodi">Shop single</Link></li>
                                    <li><Link onClick={ClickHandler} to="/cart">Cart</Link></li>
                                    <li><Link onClick={ClickHandler} to="/checkout">Checkout</Link></li>
                                </ul>
                            </li>
                            <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="cart-search-contact">

                        <div className="header-search-form-wrapper">
                            <button onClick={() => setMenuState(!menuActive)} className="search-toggle-btn"><i
                                className={`fi ti-search ${menuActive ? "ti-close" : "fi "}`}></i></button>
                            <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                <form onSubmit={SubmitHandler}>
                                    <div>
                                        <input type="text" className="form-control"
                                            placeholder="Search here..." />
                                        <button type="submit"><i
                                            className="ti-search"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="mini-cart">
                            <button className="cart-toggle-btn" onClick={() => setcartState(!cartActive)}>
                                {" "}
                                <i className="fi flaticon-shopping-basket"></i>{" "}
                                <span className="cart-count">{carts.length}</span>
                            </button>
                            <div className={`mini-cart-content ${cartActive ? "mini-cart-content-toggle" : ""}`}>
                                <button className="mini-cart-close" onClick={() => setcartState(!cartActive)}><i className="ti-close"></i></button>
                                <div className="mini-cart-items">
                                    {carts &&
                                        carts.length > 0 &&
                                        carts.map((catItem, crt) => (
                                            <div className="mini-cart-item clearfix" key={crt}>
                                                <div className="mini-cart-item-image">
                                                    <span>
                                                        <img src={catItem.proImg} alt="icon" />
                                                    </span>
                                                </div>
                                                <div className="mini-cart-item-des">
                                                    <p>{catItem.title} </p>
                                                    <span className="mini-cart-item-price">
                                                        ${catItem.price} x {" "} {catItem.qty}
                                                    </span>
                                                    <span className="mini-cart-item-quantity">
                                                        <button
                                                            onClick={() =>
                                                                props.removeFromCart(catItem.id)
                                                            }
                                                            className="btn btn-sm btn-danger"
                                                        >
                                                            <i className="ti-close"></i>
                                                        </button>{" "}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                                <div className="mini-cart-action clearfix">
                                    <span className="mini-checkout-price">Subtotal: <span> ${totalPrice(carts)}</span></span>
                                    <div className="mini-btn">
                                        <Link to="/cart" className="view-cart-btn">View Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="donate-btn">
                            <Link onClick={ClickHandler} to="/cause-single/Childrens-voices" className={props.btnClass}><i className="fi flaticon-like"></i> Donate Now</Link>
                        </div>
                    </div>
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