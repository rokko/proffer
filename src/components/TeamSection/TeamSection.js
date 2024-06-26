import React from 'react'
import { Link } from 'react-router-dom'
import Team from '../../api/Team'
import ContactForm from '../ContactForm'


const TeamSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="team-section section-padding">
            <div className="grid info-grid">
                        <div className="section-title" style={{textAlign:'center'}}>
                           
                            <h2>I nostri volontari</h2>
                        </div>
                     
                    </div>
            <div className="content-area" style={{marginTop:'50px'}}>
                <div className="first-row clearfix" style={{display:'flex', flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
                    <div className="grid"></div>
                    
                   
                    
                    {Team.map((team, aitem) => (
                        <div className="grid" style={{margin:'5px',maxWidth:'352px', width:'352px'}} key={aitem} >
                            <div >
                                <img src={team.AtImg} alt="" style={{borderRadius:'50%', width:'352px'}} />
                            </div>
                            <div className="member-info">
                                <h4><Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>{team.name}</Link></h4>
                                <p>{team.title}</p>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
         
        </section>
    )
}

export default TeamSection;
