import React from 'react'
import abimg from '../../images/target.jpg'
import { Link } from 'react-router-dom';
import './newsletter.style.scss'
const NewsLetter = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="target-area section-padding" id="about" style={{display:'flex', flexDirection:'column',alignContent:'center', alignItems:'center',justifyContent:'center'}}>
            <div className="container">
                <div className="row">
                <div className="section-title">
                                <span style={{textAlign:'center'}}>NewsLetter</span>

                                <br/>
                                <br/>

                            </div>
                           
                                <div class="container">
                                    <form action="" className='form-css'>
                                        <input type="email" name="email" id="email" placeholder="example@example.com" />
                                        <input style={{backgroundColor:'#78c3e0'}} type="submit" name="submit" value="Iscriviti" />
                                    </form>
                                </div>                                </div>
                </div>
        </section>
    )
}

export default NewsLetter;