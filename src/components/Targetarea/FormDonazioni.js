import React from 'react'
import abimg from '../../images/target.jpg'
import { Link } from 'react-router-dom';
import DonaOra from '../../main-component/CauseSinglePage/DonaOra';

const FormDonazioni = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="target-area section-padding" id="about">
            <div className="container">
                <div className="row">
                    
              
                   
                            <div className="section-title">
                            
                                <span style={{textAlign:'center'}}>Dona Ora</span>
                                <br/>
                                <br/>

                                <br/>
                                <br/>
                                <br/>
                                <br/>

                               
                                
                           
                            <div className="content">
                            <DonaOra />
                                </div>
                            </div>
                        </div>
                    
                </div>
        </section>
    )
}

export default FormDonazioni;