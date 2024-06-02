import { Link } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const ChisiamoSection1 = (props) => {

    return (
        <section className="mission-vision-section">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="mission-vision-grids clearfix" style={{display: 'flex', justifyContent: 'space-between', flexDirection:'column'}}>
                            <NavLink to="/about">
                            <div className="grid" style={{width:'80%'}}>
                                <div className="overlay"></div>
                                <h3>Storia</h3>
                                <p>L’Associazione Vale Per Tutti nasce in memoria di Valerio D’Angelo, la sua storia ci ha regalato l’ambizione di creare nuove realtà. <span style={{fontWeight:'bold'}}>Scopri di più.</span>
</p>
                            </div>
                            </NavLink>
                            <NavLink to="/mission">
                            <div className="grid" style={{width:'80%'}}>
                                <div className="overlay"></div>
                                <h3>Mission</h3>
                                <p>L’obiettivo dell’associazione è quello di riqualificare e realizzare degli spazi destinati allo sport per bambini e ragazzi che vivono in situazioni difficili. Scopri di più!
</p>
                            </div>
                            </NavLink>
                            <NavLink to="/perche-facciamo">
                            <div className="grid" style={{width:'80%'}}>
                                <div className="overlay"></div>
                                <h3>Perchè lo facciamo?</h3>
                                <p>Crediamo fortemente nel valore educativo dello sport e nel suo potenziale nascosto. Scopri di più!

</p>
                            </div>
                            </NavLink>
                            <NavLink to="/trasparenza">
                            <div className="grid" style={{width:'80%'}}>
                                <div className="overlay"></div>
                                <h3>Trasparenza</h3>
                                <p>Ci piace fare tutto alla luce del sole! Scopri di più!


</p>
                            </div>
                            </NavLink>
                            <NavLink to="/team">
                            <div className="grid" style={{width:'80%'}}>
                                <div className="overlay"></div>
                                <h3>Team</h3>
                                <p>I valori della nostra associazione hanno un volto. Scopri il nostro Team!


</p>
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