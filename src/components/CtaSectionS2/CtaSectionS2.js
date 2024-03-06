import React from 'react'
import VideoModal from '../ModalVideo';


const CtaSectionS2 = (props) => {

    return (
        <section className="cta-s2-section">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-12">
                        <div className="details">
                            <h3>“While the lovely valley teems vapour around me, and the sunda strikes the upper ground”</h3>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-12">
                        <div className="video-holder">
                            <VideoModal />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaSectionS2;