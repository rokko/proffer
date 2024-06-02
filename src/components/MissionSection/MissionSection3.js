import { Link } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const MissionSection = (props) => {

    return (
        <section className="mission-vision-section">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="mission-vision-grids clearfix" style={{display: 'flex', justifyContent: 'space-between', flexDirection:'column'}}>
                            <NavLink to="/dona-ora">
                            <div className="grid" style={{width:'80%'}}>
                                <div className="overlay"></div>
                                <h3>Dona Ora</h3>
                                <p>Aiutaci a portare avanti i nostri sogni e i nostri progetti. Dona ora!
</p>
                            </div>
                            </NavLink>
                            <NavLink to="/dona-materiali">
                            <div className="grid" style={{width:'80%'}}>
                                <div className="overlay"></div>
                                <h3>Dona Materiali</h3>
                                <p>Non sai più cosa fare con i giocattoli per casa? Scopri di più!
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

export default MissionSection;