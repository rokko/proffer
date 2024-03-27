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
                            <div className="grid">
                                <div className="overlay"></div>
                                <h3></h3>
                                <p>Dona Ora</p>
                            </div>
                            </NavLink>
                            <NavLink to="/dona-materiali">
                            <div className="grid">
                                <div className="overlay"></div>
                                <p>Dona Materiali</p>
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