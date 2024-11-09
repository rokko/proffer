import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import chisiamo from './imagesCopertina/chisiamo.webp'
import comeaiutarci from './imagesCopertina/comeaiutarci.webp'
import trasparenza from './imagesCopertina/trasparenza.webp'
import perchelofacciamo from './imagesCopertina/Copertina Page Perchè lo facciamo NUOVA.webp'
import mission from './imagesCopertina/Copertina Page Mission NUOVA.webp'
import storia from './imagesCopertina/storia.webp'
import cosafacciamo from './imagesCopertina/cosafacciamo.webp'
import feelthedream from './imagesCopertina/cftd.webp'
import feelthegame from './imagesCopertina/cftg.webp'
import feelthecourt from './imagesCopertina/cftc.webp'
import feelthemoment from './imagesCopertina/cftt.webp'
import aste from './imagesCopertina/Copertina Page Aste.webp'
import workinpgrossecard from './imagesCopertina/workinprogress.webp'
import altreiniziative from './imagesCopertina/altreiniziative.webp'
import cinquepermillecard from './imagesCopertina/51000.webp'
import donaora from './imagesCopertina/Copertina Page Dona Ora NUOVA.webp'
import donamateriali from './imagesCopertina/donamateriale.webp'
import diventavolontario from './imagesCopertina/diventaunvolontario.webp'
import diventaVolontario2 from './imagesCopertina/Copertina Page Diventa un volontario NUOVA.webp'
const PageTitle = (props) => {

const [imagePagine, setImagePagine]= useState('')

    useEffect(() => {
       
        if( props.nomepagina==='chi-siamo'|| props.nomepagina==='team') {
            setImagePagine(chisiamo)
            
        }
        if( props.nomepagina==='come-aiutarci') {
            setImagePagine(comeaiutarci)
            
        }
        if( props.nomepagina==='trasparenza') {
            setImagePagine(trasparenza)
            
        }
        if( props.nomepagina==='perche-lo-facciamo') {
            setImagePagine(perchelofacciamo)
            
        }
        if( props.nomepagina==='mission') {
            setImagePagine(mission)
            
        }
        if( props.nomepagina==='storia') {
            setImagePagine(storia)
            
        }
        if(props.nomepagina==='cosa-facciamo') {
            setImagePagine(cosafacciamo)
        
        }
        if (props.nomepagina==='feel-the-dream') {
            setImagePagine(feelthedream)
        }
        if(props.nomepagina==='feel-the-game') {
            setImagePagine(feelthegame)
        }
        if(props.nomepagina==='feel-the-court') {
            setImagePagine(feelthecourt)
        }
        if(props.nomepagina==='feel-the-moment') {
            setImagePagine(feelthemoment)
        }
        if(props.nomepagina==='aste'){
            setImagePagine(aste)
        }
        if(props.nomepagina==='work-in-progress'){
            setImagePagine(workinpgrossecard)
        }
        if(props.nomepagina==='altre-iniziative'){
            setImagePagine(altreiniziative)
        }
        if(props.nomepagina==='5x1000'){
            setImagePagine(cinquepermillecard)
        }
        if(props.nomepagina==='dona-ora'){
            setImagePagine(donaora)
        }
        if(props.nomepagina==='dona-materiali'){
            setImagePagine(donamateriali)
        }
        if(props.nomepagina==='diventa-volontario'){
            setImagePagine(diventaVolontario2)
        }
    
        
        
    })
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const isMobile = window.innerWidth <= 768;
    
    return (
       
        <section className="page-title" style={{backgroundImage: `url(${imagePagine})` , backgroundSize:'cover'}}>
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