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
            <div className="content-area">
                <div className="first-row clearfix">
                    <div className="grid"></div>
                    <div className="grid info-grid">
                        <div className="section-title">
                            <span>#Team</span>
                            <h2>I nostri volontari</h2>
                        </div>
                        <div className="team-details">
                            <p>Lorem Ipsum</p>
                            <Link onClick={ClickHandler} to="/" className="theme-btn-s4">Diventa un volontario</Link>
                        </div>
                    </div>
                    {Team.map((team, aitem) => (
                        <div className="grid"  key={aitem}>
                            <div >
                                <img src={team.AtImg} alt="" style={{borderRadius:'50%'}} />
                            </div>
                            <div className="member-info">
                                <h4><Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>{team.name}</Link></h4>
                                <p>{team.title}</p>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <h2 style={{textAlign:'center'}}>Diventa Volontario</h2>
            <br/>
            <br/>
            <ContactForm/>
        </section>
    )
}

export default TeamSection;
