import React from 'react'
import { Link } from 'react-router-dom';
import inImg1 from '../../images/instagram/img-1.jpg'
import inImg2 from '../../images/instagram/img-2.jpg'
import inImg3 from '../../images/instagram/img-3.jpg'
import inImg4 from '../../images/instagram/img-4.jpg'
import inImg5 from '../../images/instagram/img-5.jpg'
import inImg6 from '../../images/instagram/img-6.jpg'
import inImg7 from '../../images/instagram/img-7.jpg'
import inImg8 from '../../images/instagram/img-8.jpg'
import inImg9 from '../../images/instagram/img-9.jpg'
import inImg10 from '../../images/instagram/img-10.jpg'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const InstagramArray = [
    {
        inImg: inImg1,
    },
    {
        inImg: inImg2,
    },
    {
        inImg: inImg3,
    },
    {
        inImg: inImg4,
    },
    {
        inImg: inImg5,
    },
    {
        inImg: inImg6,
    },
    {
        inImg: inImg7,
    },
    {
        inImg: inImg8,
    },
    {
        inImg: inImg9,
    },
    {
        inImg: inImg10,
    },
]


const Instagram = (props) => {
    return (

        <section className="instagram-section">
            <div className="instagram-grids">
                {InstagramArray.map((instagram, iitem) => (
                    <div className="grid" key={iitem}>
                        <Link onClick={ClickHandler} to="/"><img src={instagram.inImg} alt="" /></Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Instagram;