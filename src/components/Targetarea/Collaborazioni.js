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
import wecare from '../../images/partner/wecare.png'

const Collaborazioni = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const isMobile = window.innerWidth <= 768;

    return (
        <section className="target-area section-padding" id="about" style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', justifyContent: 'center', backgroundColor: '#efefef!important' }}>




            <div className="section-title">
                <span style={{ textAlign: 'center' }}>Collaborazioni</span>

            </div>
            <div className="content" style={{ 
                display: 'flex', 
                flexDirection: 'row', 
                flexWrap: 'wrap',
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: isMobile ? '30px' : '50px',
                padding: '10px 20px'
            }}>
                <img width={isMobile ? 90 : 110} src={faro} />
                <img width={isMobile ? 90 : 110} src={westin} />
                <img width={isMobile ? 90 : 110} src={avaz} />
                <img width={isMobile ? 90 : 110} src={iotifo} />
                <img width={isMobile ? 90 : 110} src={lagiornata} />
                <img width={isMobile ? 110 : 170} src={wecare} />
            </div>



        </section>
    )
}

export default Collaborazioni;