import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer';
import Causes from '../../api/cause'
import Logo from '../../images/logo.png'

const CauseSinglePage = (props) => {
    const { slug } = useParams()

    const caseDetails = Causes.find(item => item.slug === slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Navbar hclass={'header-style-1'} Logo={Logo} btnClass={'theme-btn-s1'} />
            <PageTitle pageTitle={caseDetails.cTitle} pagesub={'Progetto'} />
            <section className="case-single-section section-padding">
                <div className="container">
                <h3>Titolo del progetto </h3>
                        <div className="col col-xl-8 col-lg-7 col-12">
                            <div className="img-holder details-img">
                                <img src={caseDetails.cImg} alt="" />
                            </div>
                        </div>
                        <div >
                            <div className="case-info-area">
                               
                               
                                
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non felis varius, lacinia nisi vel, scelerisque dui. Donec suscipit condimentum ornare. Ut massa velit, maximus in placerat nec, feugiat at urna. Etiam arcu massa, interdum dapibus mattis sed, auctor a ante. Proin non porttitor tortor, id facilisis purus. Nullam blandit erat nec ipsum volutpat vehicula. Sed convallis vehicula hendrerit. Aenean velit urna, pretium at hendrerit non, ullamcorper sed ipsum.</p>
                                
                            </div>
                        </div>
                    <div className="row donate-area-bottom">
                        <div className="col col-lg-8 col-12">
                            <div className="donate-area-wrapper">
                                <h3>Dona Ora</h3>
                                <p><span>1</span> Choose your donate amount</p>
                                <form id="give-form-232-1" className="give-form give-form-232 give-form-type-multi" action="https://wpocean.com/wp/nasarna/donations/ensure-education-for-every-poor-children/?payment-mode=manual" data-id="232-1" data-currency_symbol="&#36;" data-currency_code="USD" data-currency_position="before" data-thousands_separator="," data-decimal_separator="." data-number_decimals="2" method="post">
                                    <div className="give-total-wrap">
                                        <div className="give-donation-amount form-row-wide give-custom-amount-focus-in">
                                            <span className="give-currency-symbol give-currency-position-before">$</span>
                                            <label className="give-hidden" htmlFor="give-amount">Donation Amount:</label>
                                            <input className="give-text-input give-amount-top" id="give-amount" name="give-amount" type="tel" value="20.00" autoComplete="off" data-amount="150" />
                                        </div>
                                    </div>
                                    <ul id="give-donation-level-button-wrap" className="give-donation-levels-wrap give-list-inline">
                                        <li>
                                            <button type="button" data-price-id="0" className="give-donation-level-btn give-btn give-btn-level-0 give-default-level" value="20.00" data-default="1">Medical</button>
                                        </li>
                                        <li>
                                            <button type="button" data-price-id="1" className="give-donation-level-btn give-btn give-btn-level-1 " value="50.00" data-default="0">Education</button>
                                        </li>
                                        <li>
                                            <button type="button" data-price-id="2" className="give-donation-level-btn give-btn give-btn-level-2 " value="100.00" data-default="0">Sports</button>
                                        </li>
                                        <li>
                                            <button type="button" data-price-id="3" className="give-donation-level-btn give-btn give-btn-level-3 " value="150.00" data-default="0">Creative</button>
                                        </li>
                                        <li>
                                            <button type="button" data-price-id="custom" className="give-donation-level-btn give-btn give-btn-level-custom" value="custom">Custom Amount</button>
                                        </li>
                                    </ul>

                                    <fieldset id="give-payment-mode-select">
                                        <legend className="give-payment-mode-label">Select Payment Method
                                            <span className="give-loading-text">
                                                <span className="give-loading-animation"></span>
                                            </span>
                                        </legend>

                                        <div id="give-payment-mode-wrap">
                                            <ul id="give-gateway-radio-list">
                                                <li className="give-gateway-option-selected">
                                                    <input type="radio" name="payment-mode" className="give-gateway"
                                                        id="give-gateway-manual-232-1"
                                                        value="manual" checked='checked' />

                                                    <label htmlFor="give-gateway-manual-232-1" className="give-gateway-option" id="give-gateway-option-manual"> Test Donation</label>
                                                </li>
                                                <li>
                                                    <input type="radio" name="payment-mode" className="give-gateway"
                                                        id="give-gateway-offline-232-1" value="offline" />

                                                    <label htmlFor="give-gateway-offline-232-1" className="give-gateway-option" id="give-gateway-option-offline"> Offline Donation</label>
                                                </li>
                                                <li>
                                                    <input type="radio" name="payment-mode" className="give-gateway" id="give-gateway-paypal-232-1" value="paypal" />

                                                    <label htmlFor="give-gateway-paypal-232-1" className="give-gateway-option" id="give-gateway-option-paypal"> PayPal</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </fieldset>

                                    <div id="give_purchase_form_wrap">
                                        <fieldset id="give_checkout_user_info" className="">
                                            <legend> Personal Info</legend>
                                            <p id="give-first-name-wrap" className="form-row form-row-first form-row-responsive">
                                                <label className="give-label" htmlFor="give-first"> First Name
                                                    <span className="give-required-indicator">*</span>
                                                    <span className="give-tooltip hint--top hint--medium hint--bounce" aria-label="First Name is used to personalize your donation record." rel="tooltip">
                                                        <i className="give-icon give-icon-question"></i>
                                                    </span>
                                                </label>
                                                <input className="give-input required" type="text" name="give_first" autoComplete=" given-name" placeholder="First Name" id="give-first"
                                                    value="" required aria-required="true" />
                                            </p>

                                            <p id="give-last-name-wrap" className="form-row form-row-last form-row-responsive">
                                                <label className="give-label" htmlFor="give-last">
                                                    Last Name
                                                    <span className="give-tooltip hint--top hint--medium hint--bounce" aria-label="First Name is used to personalize your donation record." rel="tooltip">
                                                        <i className="give-icon give-icon-question"></i>
                                                    </span>
                                                </label>

                                                <input className="give-input" type="text" name="give_last" autoComplete="family-name" id="give-last" placeholder="Last Name" value="" />
                                            </p>


                                            <p id="give-email-wrap" className="form-row form-row-wide">
                                                <label className="give-label" htmlFor="give-email">
                                                    Email Address
                                                    <span className="give-required-indicator">*</span>
                                                    <span className="give-tooltip hint--top hint--medium hint--bounce" aria-label="First Name is used to personalize your donation record." rel="tooltip">
                                                        <i className="give-icon give-icon-question"></i>
                                                    </span>
                                                </label>
                                                <input className="give-input required" type="email" name="give_email" autoComplete="email" placeholder="Email Address" id="give-email"
                                                    value="" required aria-required="true" />
                                            </p>

                                            <p id="give-anonymous-donation-wrap" className="form-row form-row-wide">
                                                <label className="give-label" htmlFor="give-anonymous-donation">
                                                    <input type="checkbox" className="give-input" name="give_anonymous_donation" id="give-anonymous-donation" value="1"
                                                    /> Make this an anonymous donation.
                                                    <span className="give-tooltip hint--top hint--medium hint--bounce" aria-label="First Name is used to personalize your donation record." rel="tooltip">
                                                        <i className="give-icon give-icon-question"></i>
                                                    </span>
                                                </label>
                                            </p>

                                            <p id="give-comment-wrap" className="form-row form-row-wide">
                                                <label className="give-label" htmlFor="give-comment">
                                                    Comment
                                                    <span className="give-tooltip hint--top hint--medium hint--bounce" aria-label="First Name is used to personalize your donation record." rel="tooltip">
                                                        <i className="give-icon give-icon-question"></i>
                                                    </span>
                                                </label>

                                                <textarea className="give-input" name="give_comment" placeholder="Leave a comment" id="give-comment"></textarea>
                                            </p>
                                        </fieldset>

                                        <fieldset id="give_purchase_submit" className="give-donation-submit">
                                            <p id="give-final-total-wrap" className="form-wrap ">
                                                <span className="give-donation-total-label"> Donation Total:</span>
                                                <span className="give-final-total-amount" data-total="20.00"> &#36;20.00</span>
                                            </p>
                                            <input type="hidden" name="give_action" value="purchase" />
                                            <input type="hidden" name="give-gateway" value="manual" />
                                            <div className="give-submit-button-wrap give-clearfix">
                                                <input type="submit" className="give-submit give-btn" id="give-purchase-button" name="give-purchase" value="Donate Now" data-before-validation-label="Donate Now" />
                                                <span className="give-loading-animation"></span>
                                            </div>
                                        </fieldset>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-12">
                            <div className="case-single-sidebar">
                                <div className="widget contact-widget">
                                    <div>
                                        <p>Numero di telefono:</p>
                                        <h4>+39 347654321</h4>
                                    </div>
                                    <div>
                                        <p>Email:</p>
                                        <h4>prova@gmail.com</h4>
                                    </div>
                                </div>

                                <div className="widget urgent-case-widget">
                                    <div className="cases">
                                        {Causes.slice(0, 3).map((Cause, citem) => (
                                            <div className="case" key={citem}>
                                                <div className="img-holder">
                                                    <img src={Cause.cImg} alt="" />
                                                </div>
                                                <div className="details">
                                                    <h4><Link onClick={ClickHandler} to={`/cause-single/${Cause.slug}`}>{Cause.cTitle}</Link></h4>
                                                    <span className="g-r">${Cause.Goal} raised of ${Cause.Raised}</span>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default CauseSinglePage;
