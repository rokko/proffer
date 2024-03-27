import React from "react";
import { NavLink } from "react-router-dom";

const MissionSection4 = (props) => {

    return (
        <section className="mission-vision-section">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                    <div className="mission-vision-grids clearfix" style={{display: 'flex', justifyContent: 'space-between', flexDirection:'column'}}>
                            <NavLink to='/aste'>
                            <div className="grid">
                                <div className="overlay"></div>
                                <p>Aste</p>
                            </div>
                            </NavLink>
                            <NavLink to="/51000">
                            <div className="grid">
                                <div className="overlay"></div>
                                <p>5x1000</p>
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