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
import Facebook from '../../images/facebook.png'
import Youtube from '../../images/youtube.png'
import Instagram from '../../images/instagram.png'
import CursoreCanestro from '../../images/cursoreCanestro.png'



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
                          
                            <li className="menu-item-has-children">
                                <Link onClick={ClickHandler} to="/chisiamo" style={{fontSize:'20px'}}>Chi Siamo</Link>
                                <ul className="sub-menu">
                                    <li><Link onClick={ClickHandler} to="/about">Storia</Link></li>
                                    <li><Link onClick={ClickHandler} to="/mission">Mission</Link></li>
                                    <li><Link onClick={ClickHandler} to="/perche-facciamo">Perchè lo facciamo</Link></li>
                                    <li><Link onClick={ClickHandler} to="/team">Team</Link></li>
                                    <li><Link onClick={ClickHandler} to="/trasparenza">Trasparenza</Link></li>
                
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <Link onClick={ClickHandler} to="/cosa-facciamo" style={{fontSize:'20px'}}>Cosa Facciamo</Link>
                                <ul className="sub-menu">
                                    <li><Link onClick={ClickHandler} to="/feelthedream">FEEL THE DREAM
</Link></li>
                                    <li><Link onClick={ClickHandler} to="/feelthecourt">FEEL THE COURT</Link></li>
                                    <li><Link onClick={ClickHandler} to="/feelthegame">FEEL THE GAME</Link></li>
                                    <li><Link onClick={ClickHandler} to="/feelthemoment">FEEL THE MOMENT</Link></li>

                                    
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <Link onClick={ClickHandler} to="/comeaiutarci" style={{fontSize:'20px'}}>Come Aiutarci</Link>
                                <ul className="sub-menu">
                                    <li><Link onClick={ClickHandler} to="/dona-ora">Dona Ora</Link></li>
                                    <li><Link onClick={ClickHandler} to="/51000">5x1000</Link></li>
                                    <li><Link onClick={ClickHandler} to="/dona-materiali">Dona Materiali</Link></li>
                                    <li><Link onClick={ClickHandler} to="/aste">Aste</Link></li>
                                    <li><Link onClick={ClickHandler} to="/diventa-volontario">Diventa un volontario</Link></li>
                                    
                                </ul>
                               
                            </li>
                           
                        </ul>
                    </div>

                  
                </div>
                <div style={{display:'flex', flexDirection:'row',gap:'10px'}}>
                    <a style={{width:'48px', height:'48px'}} href="https://www.instagram.com/valepertutti.it/" target='_blank'>
                <img width="48" height="48" src={Instagram} alt="instagram-new"/> 
                </a>
                <a style={{width:'48px', height:'48px'}} href="https://www.youtube.com/@valepertutti1787" target='_blank'>
                <img width="48" height="48" src={Youtube} alt="instagram-new"/> 
                </a>
                <a style={{width:'48px', height:'48px'}} href="https://www.facebook.com/valepertutti.it" target='_blank'>
                <img width="48" height="48" src={Facebook} alt="instagram-new"/> 
                </a>

                <div className="cursoreColCanestro" style={{fontFamily:'Patrick Hand' ,width:'250px',fontSize:'20px',display:'flex', flexDirection:'row', justifyContent:'center', backgroundColor:'#e21d14', color:'white', fontWeight:'bold', borderRadius:'30px', alignItems:'center'}} onClick={handleOpenModal}>DONA ORA</div>
                </div>
                                <div style={{marginLeft:'30px'}}>
                                    <img onClick={()=>changeLanguageByButtonClick('english')}width="40" height="40" src="https://img.icons8.com/color/48/great-britain.png" alt="great-britain"/>
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