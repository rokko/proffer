import React,{useEffect, useState} from 'react'
import abimg from '../../images/target.jpg'
import { Link } from 'react-router-dom';
import PdfViewer from '../Brochure';

const Targetarea2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      // Verifica iniziale
      handleResize();
  
      // Aggiungi l'event listener per il resize
      window.addEventListener('resize', handleResize);
  
      // Rimuovi l'event listener al momento della pulizia
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  

    return (
        <section className="target-area section-padding" id="about" style={{display:'flex', flexDirection:'column',alignContent:'center', alignItems:'center',justifyContent:'center'}}>
            <div className="container">
                <div className="row">
                    
                  
                            <div className="section-title">
                                <span style={{textAlign:'center'}}>Brochure</span>
                                
                            </div>
                            {isMobile &&(
                                <a href='/valepertuttimobile.pdf' target='_blank'>
                                 <div className="content">
                                 <PdfViewer/>
                                 </div>
                                 </a>
                            ) }
                             {!isMobile &&(
                                
                                 <div className="content">
                                 <PdfViewer/>
                                 </div>
                                 
                            ) }
                           
                            </div>
                      
                </div>
        </section>
    )
}

export default Targetarea2;