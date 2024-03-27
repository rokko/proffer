import React from 'react'
import abimg from '../../images/target.jpg'
import { Link } from 'react-router-dom';

const Targetarea2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="target-area section-padding" id="about" style={{display:'flex', flexDirection:'column',alignContent:'center', alignItems:'center',justifyContent:'center'}}>
            <div className="container">
                <div className="row">
                    
                  
                            <div className="section-title">
                                <span style={{textAlign:'center'}}>#Brochure</span>
                                
                            </div>
                            <div className="content">
                                
                                </div>
                            </div>
                      
                </div>
        </section>
    )
}

export default Targetarea2;