import React from 'react'
import abimg from '../../images/target.jpg'
import { Link } from 'react-router-dom';
import PdfViewer from '../Brochure';

const VideoArea = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const isMobile = window.innerWidth <= 768;

    return (
        <section className="target-area section-padding" id="about" style={{display:'flex', flexDirection:'column',alignContent:'center', alignItems:'center',justifyContent:'center'}}>
            <div className="container">
                <div className="row">
                    
                  
                            <div className="section-title">
                                <span style={{textAlign:'center'}}>I FEEL THIS GAME : IL PRIMO CAMPO DEDICATO A VALERIO</span>
                                
                            </div>
                            <iframe style={{borderRadius:isMobile?'30px':'40px',marginTop:'20px'}} width={isMobile?'500':"1070" }height={isMobile?"281":"729"} src="https://www.youtube.com/embed/0v8O2ot4lNg?si=4QZvMA84wDP4t_5F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                      
                </div>
            </div>
        </section>
    )
}

export default VideoArea;