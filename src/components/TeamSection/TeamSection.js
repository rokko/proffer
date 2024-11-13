import React from 'react'
import { Link } from 'react-router-dom'
import Team from '../../api/Team'
import ContactForm from '../ContactForm'


const TeamSection = (props) => {

    const vaiADiventaVolontario = (e) => {
      
            e.preventDefault();
            window.location.href = "/diventa-volontario"; 
        
            // Qui puoi gestire l'invio dei dati, come salvarli o inviarli a un API
        
    }
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
const isMobile = window.innerWidth <= 768;
    return (
        <section className="team-section section-padding" style={{backgroundColor:'white!important'}}>
            <div className="grid info-grid">
                        <div className="section-title" style={{textAlign:'center'}}>
                           
                            <h2>Il nostro consiglio direttivo</h2>
                        </div>
                     
                    </div>
            <div className="content-area" style={{marginTop:'50px', backgroundColor:'white!important'}}>
                {!isMobile&&(
                <div className="first-row clearfix" style={{ backgroundColor:'white!important',display:'flex', flexDirection:'row', justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                    <div className="grid"></div>
                    
                   
                    
                    {Team.map((team, aitem) => (
                        <div className="grid" style={{margin:'5px',maxWidth:'352px', width:'352px'}} key={aitem} >
                            <div >
                                <img src={team.AtImg} alt="" style={{borderRadius:'100%', width:'352px'}} />
                            </div>
                            <div className="member-info">
                                <h4>{team.name}</h4>
                                <p>{team.title}</p>
                                
                            </div>
                        </div>
                    ))}
                </div>
                )}
                {isMobile&&(
                      <div  style={{ backgroundColor:'white!important',display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                    
                      
                     
                      
                      {Team.map((team, aitem) => (
                          <div className="grid" style={{margin:'5px',maxWidth:'352px', width:'352px'}} key={aitem} >
                              <div >
                                  <img src={team.AtImg} alt="" style={{borderRadius:'100%', width:'352px'}} />
                              </div>
                              <div className="member-info">
                                  <h4>{team.name}</h4>
                                  <p>{team.title}</p>
                                  
                              </div>
                          </div>
                      ))}
                  </div>
                )}
                <div style={{display:'flex', flexDirection:'column', marginTop:'100px',justifyContent:'center', alignContent:'center', alignItems:'center'}}>
           <button 
            onClick={(e)=>vaiADiventaVolontario(e)}
            
            style={{
                padding: '15px',
                width:'300px',
                backgroundColor: '#78c3e0',
                color: 'white',
                border: 'none',
                borderRadius: '100px',
                cursor: 'pointer',
                fontSize: '16px'
                
            
              }}><h3 style={{color:'white'}}>Diventa un volontario</h3></button>
         
 
            </div>
            </div>
      
         
        </section>
    )
}

export default TeamSection;
