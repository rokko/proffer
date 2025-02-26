import React,{useState} from 'react'
import abimg from '../../images/target.jpg'
import { Link } from 'react-router-dom';
import './newsletter.style.scss'
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../main-component/firebase"
const NewsLetter = (props) => {
    const [emailNewsletter, setEmailNewsletter]=useState('')
    const [inviato, setInviato] = useState(false)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const saveEmail=async (e)=>{
        e.preventDefault();
        try{ 
            await addDoc(collection(db, "users"), {email:emailNewsletter})
            setInviato(true)
        }
        catch(err){
            console.error(err)
        }
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
                            {inviato ? (<div style={{marginTop:'10px',display: 'flex', flexDirection: 'row'}}><img style={{width:'32px' , height:'32px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABN0lEQVR4nO2YTUsDMRCGc/YDFcSbIP4MEQKZduZg8P8V1AmVXvwRtaLg11W8ir9EWWFx3d2WblubBN4HctnD5nlnwmZYYwAAAAAAQJL0h/1NUr62KkcmN/zAb5DKmIJ8OZVPuqRjk1PlnfKkkP9d/MFXfGhyqjxVllO+tzd2y6SMh3wkPCofCY/KRwKVjwUq34Vi7qDAw2IuMSuZKuWuZTyYrOL9bRseOJX3cgY5uTjfzubY2JHfJ+W3+maLhIhy5k9HZ3tO5bVt0y4hZskv09G1hIgqX2LV7rrALw2JIA+zJJKQr4Ygled5QyQl3zVEkvIlvUFvh1SepoVIWr7WiUaInwuq5ZIqnv3LJbVsJ1zgx4ZsypWf75dHJvJ/QgS+zVJ+Wois5GtT5jhL+WqI5L42AABg1sU3ZcAexnacT8QAAAAASUVORK5CYII=" alt="checkmark--v1"></img><p>Registrazione effettuata</p></div>):''}

                        </div>                
                        </div>                
                        </div>
                </div>
        </section>
    )
}

export default NewsLetter;