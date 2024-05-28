import React from 'react'
import Organigramma from '../../images/organigramma.png'
import Statuto from '../../images/statuto.png'
import Bilancio from '../../images/bilancio.png'
const About6 = (props) => {

    return (
        <section className="about-page-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-8 col-md-10">
                        <div className="section-title-s3">
                            <span>#Trasparenza</span>
                            <h2>Tra<span>sparenza</span> .</h2>
                            <p>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="about-features-grid">

                            <div className="grid asinistra" style={{display:'flex', flexDirection:'row', gap:'10px'}}>
                                <img src={Organigramma} width={48} />
<div>
                                <h3>Organigramma</h3>
                                <p>ProvaProvaProvaProvaProvaProva.</p>
                                </div>
                            </div>
                            <div className="grid asinistra" style={{display:'flex', flexDirection:'row',gap:'10px'}}>
                                <img src={Statuto} width={48} />
<div>
                                <h3>Statuto</h3>
                                <p>ProvaProvaProvaProvaProvaProvaProva.</p>
                                </div>
                            </div>
                            <div className="grid " style={{display:'flex', flexDirection:'row',gap:'10px'}}>
                                <img src={Bilancio} width={48} />
<div>
                                <h3>Bilancio</h3>
                                <p>ProvaProvaProvaProvaProvaProva.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About6;