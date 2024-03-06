import React from 'react'
import ContactFrom from '../ContactFrom';

const Contactpage = (props) => {
    return (
        <div>
            <section className="contact-section section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col col-lg-8 col-md-10 col-12">
                            <div className="section-title-s3">
                                <span>#Contact with us</span>
                                <h2>Lets get in touch!</h2>
                                <p>Raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather or then turned to look out.</p>
                            </div>
                        </div>
                        <div className="col col-xs-12 col-12">
                            <div className="contact-info-grids">
                                <div className="grid">
                                    <i className="fi flaticon-house"></i>
                                    <h4>Head Office</h4>
                                    <p>with a fur hat and fur boa who sat upright raising</p>
                                </div>
                                <div className="grid">
                                    <i className="fi flaticon-email"></i>
                                    <h4>Email Address</h4>
                                    <p>demo@example.com <br />example@hotmao.com</p>
                                </div>
                                <div className="grid">
                                    <i className="fi flaticon-call"></i>
                                    <h4>Phone Number</h4>
                                    <p>++249671296741 <br />++8245475176547</p>
                                </div>
                                <div className="grid">
                                    <i className="fi flaticon-alarm"></i>
                                    <h4>Opening Hours</h4>
                                    <p>Mon day - Sun day  <br />10Am - 6PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-area">
                        <div className="row">
                            <div className="col col-lg-4 col-12">
                                <div className="contact-text">
                                    <h3>Still have query, then fill out the form!</h3>
                                    <p>With a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the</p>
                                </div>
                            </div>
                            <div className="col col-lg-8 col-12">
                                <ContactFrom />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-map-section">
                <div className="contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671" allowFullScreen></iframe>
                </div>
            </section>
        </div>
    )
}

export default Contactpage;