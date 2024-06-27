import { Link } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import donaora from './images/CardDonaOra.webp'
import donamateriali from './images/cardDona.webp'
import { handleScroll } from "../../main-component/genericFunction";
const MissionSection = (props) => {

    return (
        <section className="mission-vision-section">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="mission-vision-grids clearfix" style={{display: 'flex', justifyContent: 'space-between', flexDirection:'column'}}>
                            <NavLink onClick={handleScroll} to="/dona-ora">
                            <div className="grid" style={{width:'100%', display:'flex', flexDirection:'row', gap:'50px', marginTop:'20px', borderRadius:'20px'}}>
                                <div className="overlay"></div>
                                <img src={donaora} style={{height:'500px', borderBottomLeftRadius:'20px', borderTopLeftRadius:'20px'}}/>
                                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', paddingRight:'20px'}}   >
                                <h3 style={{fontSize:'50px'}}>Dona Ora</h3>
                                <p style={{fontSize:'25px'}}>Aiutaci a portare avanti i nostri sogni e i nostri progetti. <br/><span style={{fontWeight:'bold'}}>Dona Ora.</span>
</p></div>
                            </div>
                       
                            
                            </NavLink>
                            <NavLink onClick={handleScroll} to="/dona-materiali">
                            <div className="grid" style={{width:'100%', display:'flex', flexDirection:'row', gap:'50px', marginTop:'20px',borderRadius:'20px'}}>
                                <div className="overlay"></div>
                                <img src={donamateriali} style={{height:'500px', borderBottomLeftRadius:'20px', borderTopLeftRadius:'20px'}}/>
                                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', paddingRight:'20px'}}   >
                                <h3 style={{fontSize:'50px'}}>Dona Materiali</h3>
                                <p style={{fontSize:'25px'}}>Non sai più cosa fare con i giocattoli per casa?. <br/><span style={{fontWeight:'bold'}}>Scopri di più!</span>
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

export default MissionSection;