import React from 'react'
import abimg from '../../images/target.jpg'
import { Link } from 'react-router-dom';
import './newsletter.style.scss'
const NewsLetter = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="target-area section-padding" id="about">
            <div className="container">
                <div className="row">

                    <div className="col col-lg-7 col-12">
                        <div className="target-content">
                            <div className="section-title">
                                <span>#NewsLetter</span>

                            </div>
                                <div class="container">
                                    <h1><strong>Iscriviti </strong> alla nostra newsletter</h1>
                                    <form action="" className='form-css'>
                                        <input type="email" name="email" id="email" placeholder="example@example.com" />
                                        <input type="submit" name="submit" value="Iscriviti" />
                                    </form>
                                </div>                                </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter;