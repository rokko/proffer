import { Link } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import cardStoria from './images/cardStoria.webp'
import cardPerche from './images/cardPerche.webp'
import cardMission from './images/cardMission.webp'
import cardTeam from './images/cardTeam.webp'
import cardTrasparenza from './images/cardTrasparenza.webp'
import { handleScroll } from "../../main-component/genericFunction";
const ChisiamoSection1 = (props) => {

    return (
        <section className="mission-vision-section">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="mission-vision-grids clearfix" style={{display: 'flex', justifyContent: 'space-between', flexDirection:'column',marginTop:'30px'}}>
                            <NavLink onClick={handleScroll} to="/about">
                            <div className="grid" style={{width:'100%', display:'flex', flexDirection:'row', gap:'50px', marginTop:'20px', borderRadius:'20px'}}>
                                <div className="overlay"></div>
                                <img src={cardStoria} style={{height:'500px', borderTopLeftRadius:'20px', borderBottomLeftRadius:'20px'}}/>
                                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', paddingRight:'20px'}}   >
                                <h3 style={{fontSize:'50px'}}>Storia</h3>
                                <p style={{fontSize:'25px'}}>L’Associazione Vale Per Tutti nasce in memoria di Valerio D’Angelo, la sua storia ci ha regalato l’ambizione di creare nuove realtà. <br/><span style={{fontWeight:'bold'}}>Scopri di più.</span>
</p></div>
                            </div>
                            </NavLink>
                            <NavLink onClick={handleScroll} to="/mission">
                            <div className="grid" style={{width:'100%', display:'flex', flexDirection:'row', gap:'50px', marginTop:'20px', borderRadius:'20px'}}>
                                <div className="overlay"></div>
                                <img src={cardMission} style={{height:'500px',borderTopLeftRadius:'20px', borderBottomLeftRadius:'20px'}}/>
                                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', paddingRight:'20px'}}   >
                                <h3 style={{fontSize:'50px'}}>Mission</h3>
                                <p style={{fontSize:'25px'}}>L’obiettivo dell’associazione è quello di riqualificare e realizzare degli spazi destinati allo sport per bambini e ragazzi che vivono in situazioni difficili.<br/><span style={{fontWeight:'bold'}}>Scopri di più.</span>
</p></div>
                            </div>
                           
                            </NavLink>
                            <NavLink onClick={handleScroll} to="/perche-facciamo">
                            <div className="grid" style={{width:'100%', display:'flex', flexDirection:'row', gap:'50px', marginTop:'20px', borderRadius:'20px'}}>
                                <div className="overlay"></div>
                                <img src={cardPerche} style={{height:'500px',borderTopLeftRadius:'20px', borderBottomLeftRadius:'20px'}}/>
                                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', paddingRight:'20px'}}   >
                                <h3 style={{fontSize:'50px'}}>Perchè lo facciamo?</h3>
                                <p style={{fontSize:'25px'}}>Crediamo fortemente nel valore educativo dello sport e nel suo potenziale nascosto. <br/><span style={{fontWeight:'bold'}}>Scopri di più.</span>
</p></div>
                            </div>
                            </NavLink>
                            <NavLink onClick={handleScroll} to="/trasparenza">
                            <div className="grid" style={{width:'100%', display:'flex', flexDirection:'row', gap:'50px', marginTop:'20px', borderRadius:'20px'}}>
                                <div className="overlay"></div>
                                <img src={cardTrasparenza} style={{height:'500px',borderTopLeftRadius:'20px', borderBottomLeftRadius:'20px'}}/>
                                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', paddingRight:'20px'}}   >
                                <h3 style={{fontSize:'50px'}}>Trasparenza</h3>
                                <p style={{fontSize:'25px'}}>Ci piace fare tutto alla luce del sole!  <br/><span style={{fontWeight:'bold'}}>Scopri di più.</span>
</p></div>
                            </div>
                            </NavLink>
                            <NavLink onClick={handleScroll} to="/team">
                            <div className="grid" style={{width:'100%', display:'flex', flexDirection:'row', gap:'50px', marginTop:'20px', borderRadius:'20px'}}>
                                <div className="overlay"></div>
                                <img src={cardTeam} style={{height:'500px',borderTopLeftRadius:'20px', borderBottomLeftRadius:'20px'}}/>
                                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', paddingRight:'20px'}}   >
                                <h3 style={{fontSize:'50px'}}>Team</h3>
                                <p style={{fontSize:'25px'}}>I valori della nostra associazione hanno un volto. Scopri il nostro Team! <br/><span style={{fontWeight:'bold'}}>Scopri di più.</span>
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

export default ChisiamoSection1;