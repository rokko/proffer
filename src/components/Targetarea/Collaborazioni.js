import React from 'react'
import abimg from '../../images/target.jpg'
import { Link } from 'react-router-dom';

const Collaborazioni = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="target-area section-padding" id="about" style={{display:'flex', flexDirection:'column',alignContent:'center', alignItems:'center',justifyContent:'center'}}>
       
               
                    
                   
                            <div className="section-title">
                                <span style={{textAlign:'center'}}>Collaborazioni</span>
                                
                            </div>
                            <div className="content">
                                Qui lista partner e collaborazioni loghi
                                </div>
                     
                   
               
        </section>
    )
}

export default Collaborazioni;