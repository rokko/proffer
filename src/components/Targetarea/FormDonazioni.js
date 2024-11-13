import React from 'react'
import abimg from '../../images/target.jpg'
import { Link } from 'react-router-dom';
import DonaOra from '../../main-component/CauseSinglePage/DonaOra';

const FormDonazioni = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
     
                <div className="row" style={{marginBottom:'-40px', background:'white'}}>
                    
              
                   
                            <div className="section-title">
                            <br/>
                            <br/>
                            
                                <span style={{textAlign:'center'}}>Dona Ora</span>
                                <br/>
                        

                               
                                
                           
                            <div className="content">
                            <DonaOra />
                                </div>
                            </div>
                        </div>
                    
           
    )
}

export default FormDonazioni;