import React from "react";
import pimg1 from '../../images/partners/img-1.png'
import pimg2 from '../../images/partners/img-2.png'
import pimg3 from '../../images/partners/img-3.png'
import pimg4 from '../../images/partners/img-4.png'
import pimg5 from '../../images/partners/img-5.png'
import pimg6 from '../../images/partners/img-6.png'

const partners = [
    {
        pImg: pimg1,
    },
    {
        pImg: pimg2,
    },
    {
        pImg: pimg3,
    },
    {
        pImg: pimg4,
    },
    {
        pImg: pimg5,
    },
    {
        pImg: pimg6,
    }
]


const PartnerSection2 = (props) => {

    return (

        <section className="partner-section-s2">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-5 col-12">
                        <div className="section-title">
                            <span>#Partners</span>
                            <h2>Our clients</h2>
                        </div>
                        <div className="partner-details">
                            <p>Magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window</p>
                        </div>
                    </div>
                    <div className="col col-lg-7 col-12">
                        <div className="partners-area clearfix">
                            {partners.map((partner, pitem) => (
                                <div key={pitem}>
                                    <img src={partner.pImg} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PartnerSection2;