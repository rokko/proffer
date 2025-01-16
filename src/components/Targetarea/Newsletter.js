import React,{useState} from 'react'
import abimg from '../../images/target.jpg'
import { Link } from 'react-router-dom';
import './newsletter.style.scss'
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../main-component/firebase"
const NewsLetter = (props) => {
    const [emailNewsletter, setEmailNewsletter]=useState('')

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const saveEmail=(e)=>{
        e.preventDefault();
         addDoc(collection(db, "users"), {email:emailNewsletter})
    }

    const isMobile = window.innerWidth <= 768;

    return (
        <section className="target-area section-padding" id="about" style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
            <div className="container">
                <div className="row">
                    <div className="section-title" >
                        <span style={{ textAlign: 'center' }}>NewsLetter</span>

                        <br />
                        <br />

                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>

                        <div style={{width:isMobile?'500px':"700px",  fontSize:isMobile?'1.5rem':'2rem',display:'flex', flexDirection:'column', alignContent:'center', alignItems:'center',justifyContent:'center'}}>
                            <form action="" className='form-css'>
                                <input type="email" name="email" id="email" placeholder="email@email.it" onChange={(e)=>setEmailNewsletter(e.target.value)} />
                                <input style={{ backgroundColor: '#78c3e0' }} type="submit" name="submit" value="Iscriviti" onClick={(e)=>saveEmail(e)} />
                            </form>
                        </div>                
                        </div>                
                        </div>
                </div>
        </section>
    )
}

export default NewsLetter;