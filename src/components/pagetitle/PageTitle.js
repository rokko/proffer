import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import chisiamo from './imagesCopertina/chisiamo.webp'
const PageTitle = (props) => {

const [imagePagine, setImagePagine]= useState('')

    useEffect(() => {
        if( props.nomepagina==='chi-siamo') {
            setImagePagine(chisiamo)
            
        }
        
    })
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    return (
        <section className="page-title" style={{backgroundImage: `url(${imagePagine})`}}>
            <div className="page-title-container" >
                <div className="page-title-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col col-xs-12">
                                <h2>{props.pageTitle}</h2>
                                <ol className="breadcrumb">
                                    <li><Link onClick={ClickHandler} to="/">Home</Link></li>
                                    <li>{props.pagesub}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitle;