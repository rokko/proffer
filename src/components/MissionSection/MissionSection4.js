import React from "react";
import { NavLink } from "react-router-dom";
import aste from './images/cardAste.webp'
import diventaVolontario from './images/cardDiventaVolontario.webp'
import cinquepermille from './images/card51000.webp'
const MissionSection4 = (props) => {

    return (
        <section className="mission-vision-section">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                    <div className="mission-vision-grids clearfix" style={{display: 'flex', justifyContent: 'space-between', flexDirection:'column'}}>
                            <NavLink to='/aste'>
                            <div className="grid" style={{width:'100%', display:'flex', flexDirection:'row', gap:'50px', marginTop:'20px',borderRadius:'20px'}}>
                                <div className="overlay"></div>
                                <img src={aste} style={{height:'500px', borderBottomLeftRadius:'20px', borderTopLeftRadius:'20px'}}/>
                                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', paddingRight:'20px'}}   >
                                <h3 style={{fontSize:'50px'}}>Aste</h3>
                                <p style={{fontSize:'25px'}}>Nel corso dei suoi viaggi, Vale ha raccolto molti cimeli sportivi. <br/><span style={{fontWeight:'bold'}}>Scopri di più!</span>
</p></div>
                            </div>
                         
                            </NavLink>
                            <NavLink to="/51000">
                            <div className="grid" style={{width:'100%', display:'flex', flexDirection:'row', gap:'50px', marginTop:'20px',borderRadius:'20px'}}>
                                <div className="overlay"></div>
                                <img src={cinquepermille} style={{height:'500px', borderBottomLeftRadius:'20px', borderTopLeftRadius:'20px'}}/>
                                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', paddingRight:'20px'}}   >
                                <h3 style={{fontSize:'50px'}}>5X1000</h3>
                                <p style={{fontSize:'25px'}}>Per te è solo una firma, per noi molto di più. <br/><span style={{fontWeight:'bold'}}>Scopri come aiutarci!</span>
</p></div>
                            </div>
                         
                            </NavLink>
                            
                            <NavLink to="/diventa-volontario">
                            <div className="grid" style={{width:'100%', display:'flex', flexDirection:'row', gap:'50px', marginTop:'20px',borderRadius:'20px'}}>
                                <div className="overlay"></div>
                                <img src={diventaVolontario} style={{height:'500px', borderBottomLeftRadius:'20px', borderTopLeftRadius:'20px'}}/>
                                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', paddingRight:'20px'}}   >
                                <h3 style={{fontSize:'50px'}}>Diventa Volontario</h3>
                                <p style={{fontSize:'25px'}}>Condividi la nostra Vision e aiutaci a realizzare i Nostri obiettivi. <br/><span style={{fontWeight:'bold'}}>Compila il form!</span>
</p></div>
                            </div>
                         
                            </NavLink>
                          
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MissionSection4;