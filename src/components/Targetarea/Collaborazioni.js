import React from 'react'
import abimg from '../../images/target.jpg'
import { Link } from 'react-router-dom';
import nike from '../../images/nike.png'
import avaz from '../../images/partner/avaz.png'
import dondolo from '../../images/partner/dondolo.png'
import faro from '../../images/partner/faro.png'
import iotifo from '../../images/partner/iotifo.png'
import lagiornata from '../../images/partner/lagiornata.png'
import westin from '../../images/partner/westin.png'

const Collaborazioni = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="target-area section-padding" id="about" style={{display:'flex', flexDirection:'column',alignContent:'center', alignItems:'center',justifyContent:'center',  backgroundColor:'#efefef!important'}}>
       
               
                    
                   
                            <div className="section-title">
                                <span style={{textAlign:'center'}}>Collaborazioni</span>
                                
                            </div>
                            <div className="content" style={{display:'flex', flexDirection:'row', alignContent:'center', alignItems:'center', gap:'50px'}}>
                               
                                <img width={100} src={faro} />
                                <img width={100} src={westin} />
                                <img width={100} src={avaz} />
                                <img width={100} src={iotifo} />
                                <img width={100} src={lagiornata} />
                              

                               
                                </div>
                     
                   
               
        </section>
    )
}

export default Collaborazioni;