/* global google */
// Il resto del tuo codice...


import React, { useState, useEffect } from 'react'
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
import dona from './dona.png'
import { isMobile } from 'react-device-detect';



const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const [cartActive, setcartState] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleTranslate = () => {
        console.log('ciao')
        const translateElement = document.querySelector('.goog-te-combo');
        if (translateElement) {
            translateElement.value = 'en'; // Imposta la lingua su inglese
            translateElement.dispatchEvent(new Event('change'));
        }
    };


    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    useEffect(() => {
        // Funzione per inizializzare Google Translate
        window.googleTranslateElementInit = function () {
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
    isMobile = window.innerWidth <= 768
    console.log(isMobile)
    return (
        <header id="header" className={`site-header ${props.hclass}`}>
            <nav className="navigation navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <MobileMenu />
                        <Link onClick={ClickHandler} className="navbar-brand" to="/home"><img src={props.Logo} style={{ width: isMobile ? '120px' : '200px' }} alt="" /></Link>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse navigation-holder">
                        <button className="close-navbar"><i className="ti-close"></i></button>

                        <ul className="nav navbar-nav mb-2 mb-lg-0">

                            <li className="menu-item-has-children">
                                <Link onClick={ClickHandler} to="/chisiamo" style={{ fontSize: '20px' }}>Chi Siamo</Link>
                                <ul className="sub-menu">
                                    <li><Link onClick={ClickHandler} to="/about"><a style={{ fontSize: '16px' }}>Storia</a></Link></li>
                                    <li><Link onClick={ClickHandler} to="/mission"><a style={{ fontSize: '16px' }}>Mission</a></Link></li>
                                    <li><Link onClick={ClickHandler} to="/perche-facciamo"><a style={{ fontSize: '16px' }}>Perchè lo facciamo</a></Link></li>
                                    <li><Link onClick={ClickHandler} to="/team"><a style={{ fontSize: '16px' }}>Team</a></Link></li>
                                    <li><Link onClick={ClickHandler} to="/trasparenza"><a style={{ fontSize: '16px' }}>Trasparenza</a></Link></li>

                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <Link onClick={ClickHandler} to="/cosa-facciamo" style={{ fontSize: '20px' }}>Cosa Facciamo</Link>
                                <ul className="sub-menu" >
                                    <li><Link onClick={ClickHandler} to="/feelthedream"><a style={{ fontSize: '16px' }}>FEEL THE DREAM </a>
                                    </Link></li>
                                    <li><Link onClick={ClickHandler} to="/feelthecourt"><a style={{ fontSize: '16px' }}>FEEL THE COURT</a></Link></li>
                                    <li><Link onClick={ClickHandler} to="/feelthegame"><a style={{ fontSize: '16px' }}>FEEL THE GAME</a></Link></li>
                                    <li><Link onClick={ClickHandler} to="/feelthemoment"><a style={{ fontSize: '16px' }}>FEEL THE MOMENT</a></Link></li>
                                    <li><Link onClick={ClickHandler} to="/work-in-progress"><a style={{ fontSize: '16px' }}>WORK IN PROGRESS</a></Link></li>
                                    <li><Link onClick={ClickHandler} to="/altre-iniziative"><a style={{ fontSize: '16px' }}>ALTRE INIZIATIVE</a></Link></li>



                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <Link onClick={ClickHandler} to="/comeaiutarci" style={{ fontSize: '20px' }}>Come Aiutarci</Link>
                                <ul className="sub-menu">
                                    <li><Link onClick={ClickHandler} to="/dona-ora"><a style={{ fontSize: '16px' }}>Dona Ora</a></Link></li>
                                    <li><Link onClick={ClickHandler} to="/51000"><a style={{ fontSize: '16px' }}>5x1000</a></Link></li>
                                    <li><Link onClick={ClickHandler} to="/dona-materiali"><a style={{ fontSize: '16px' }}>Dona Materiali</a></Link></li>
                                    <li><Link onClick={ClickHandler} to="/aste"><a style={{ fontSize: '16px' }}>Aste</a></Link></li>
                                    <li><Link onClick={ClickHandler} to="/diventa-volontario"><a style={{ fontSize: '16px' }}>Diventa un volontario</a></Link></li>

                                </ul>

                            </li>

                        </ul>
                    </div>


                </div>
                {!isMobile &&
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                        <a style={{ width: '48px', height: '48px' }} href="https://www.instagram.com/valepertutti.it/" target='_blank'>
                            <img width="48" height="48" src={Instagram} alt="instagram-new" />
                        </a>
                        <a style={{ width: '48px', height: '48px' }} href="https://www.youtube.com/@valepertutti1787" target='_blank'>
                            <img width="48" height="48" src={Youtube} alt="instagram-new" />
                        </a>
                        <a style={{ width: '48px', height: '48px' }} href="https://www.facebook.com/valepertutti.it" target='_blank'>
                            <img width="48" height="48" src={Facebook} alt="instagram-new" />
                        </a>


                    </div>}
                {!isMobile && <>
                    <img width="250" height={48} src={dona} style={{ marginLeft: '20px' }} onClick={handleOpenModal} alt="great-britain" />
                    <div style={{ marginLeft: '30px' }}>
                        <img onClick={() => handleTranslate()} width="40" height="40" src="https://img.icons8.com/color/48/great-britain.png" alt="great-britain" />
                    </div>
                </>
                }
            </nav>
            <Modal style={{ width: '80%' }} open={isModalOpen} onClose={handleCloseModal}>
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