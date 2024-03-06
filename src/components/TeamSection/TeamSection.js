import React from 'react'
import { Link } from 'react-router-dom'
import Team from '../../api/Team'


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
                            <h2>Our Volunteer</h2>
                        </div>
                        <div className="team-details">
                            <p>Magazine and housed in a nice, gilded frame. It showed a lady fitted out</p>
                            <Link onClick={ClickHandler} to="/" className="theme-btn-s4">Become A Volunteer</Link>
                        </div>
                    </div>
                    {Team.map((team, aitem) => (
                        <div className="grid" key={aitem}>
                            <div className="img-holder">
                                <img src={team.AtImg} alt="" />
                            </div>
                            <div className="member-info">
                                <h4><Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>{team.name}</Link></h4>
                                <p>{team.title}</p>
                                <ul>
                                    <li><Link to="/"><i className="ti-facebook"></i></Link></li>
                                    <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                                    <li><Link to="/"><i className="ti-linkedin"></i></Link></li>
                                    <li><Link to="/"><i className="ti-pinterest"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TeamSection;
