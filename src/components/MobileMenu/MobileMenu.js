import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Chi Siamo',
        link: '/chisiamo',
        submenu: [
            {
                id: 11,
                title: 'Storia',
                link: '/about'
            },
            {
                id: 12,
                title: 'Mission',
                link: '/mission'
            },
            {
                id: 13,
                title: 'Perchè lo facciamo',
                link: '/perche-facciamo'
            },
            {
                id: 13,
                title: 'Team',
                link: '/team'
            },
            {
                id: 13,
                title: 'Trasparenza',
                link: '/trasparenza'
            }
        ]
    },

    {
        id: 3,
        title: 'Cosa Facciamo',
        link: '/cosa-facciamo',
        submenu: [
            {
                id: 31,
                title: 'Feel The Dream',
                link: '/feelthedream'
            },
            {
                id: 3222,
                title: 'Feel The Court',
                link: '/feelthecourt'
            },
            {
                id: 322,
                title: 'Feel The Game',
                link: '/feelthegame'
            },
            {
                id: 34,
                title: 'Feel The Moment',
                link: '/feelthemoment'
            },
            {
                id: 3454,
                title: 'Work in progress',
                link: '/work-in-progress'
            },
            {
                id: 36,
                title: 'Altre Iniziative',
                link: '/altre-iniziative'
            },
           
        ]
    },
    {
        id: 4,
        title: 'Come Aiutarci',
        link: '/comeaiutarci',
        submenu: [
            {
                id: 41,
                title: 'Dona Ora',
                link: '/dona-ora',
            },
            {
                id: 42,
                title: '5x1000',
                link: '/51000'
            },
            {
                id: 43,
                title: 'Dona Materiali',
                link: '/dona-materiali'
            },
            {
                id: 44,
                title: 'Aste',
                link: '/aste'
            },
            {
                id: 44,
                title: 'Diventa un volontario',
                link: '/diventa-volontario'
            }
        ]
    },
   
        
    
]

const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler} className="active"
                                                                    to={submenu.link}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link className="active"
                                        to={item.link}>{item.title}</Link>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;