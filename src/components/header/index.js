/* global google */
// Il resto del tuo codice...


import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import Modal from '../../main-component/Modal';
import DonaOra from '../../main-component/CauseSinglePage/DonaOra';



const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const [cartActive, setcartState] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    useEffect(() => {
        // Funzione per inizializzare Google Translate
        window.googleTranslateElementInit = function() {
          new window.google.translate.TranslateElement({
            pageLanguage: 'it', // Imposta la lingua di partenza
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
          }, 'google_translate_element');
        };
    
        // Carica lo script di Google Translate
        const googleTranslateScript = document.createElement('script');
        googleTranslateScript.type = 'text/javascript';
        googleTranslateScript.async = true;
        googleTranslateScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.body.appendChild(googleTranslateScript);
      }, []);
      const changeLanguageByButtonClick = (language) => {
        const iframe = document.querySelector('.goog-te-menu-frame');
        if (!iframe) return;
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        const elements = doc.querySelectorAll('a');
        Array.from(elements).forEach(element => {
          if (element.innerHTML.includes(language)) {
            element.click();
          }
        });

        console.log('ciao')
      };
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
                                    <li><Link onClick={ClickHandler} to="/ogni-giorno">Ogni Giorno</Link></li>
                                    <li><Link onClick={ClickHandler} to="/causes">Progetti</Link></li>
                                    
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
                <div style={{width:'150px',display:'flex', flexDirection:'row', justifyContent:'center', backgroundColor:'green', color:'white', fontWeight:'bold', borderRadius:'30px', alignItems:'center'}} onClick={handleOpenModal}>DONA ORA</div>
                </div>
                                <div style={{marginLeft:'30px'}}>
                                    <img onClick={()=>changeLanguageByButtonClick('italian')} width="48" height="48" src="https://img.icons8.com/color/48/italy.png" alt="italy"/>
                                    <img onClick={()=>changeLanguageByButtonClick('english')}width="48" height="48" src="https://img.icons8.com/color/48/great-britain.png" alt="great-britain"/>
                                </div>
            </nav>
            <Modal open={isModalOpen} onClose={handleCloseModal}>
        <DonaOra />
      </Modal>
        </header>

    )
}

const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};


export default connect(mapStateToProps, { removeFromCart })(Header);