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
                            <div className="grid" style={{width:'80%'}}>
                                <div className="overlay"></div>
                                <h3>Aste</h3>
                                <p>Nel corso dei suoi viaggi, Vale ha raccolto molti cimeli sportivi. Scopri di più!
</p>
                            </div>
                            </NavLink>
                            <NavLink to="/51000">
                            <div className="grid" style={{width:'80%'}}>
                                <div className="overlay"></div>
                                <h3>5X1000</h3>
                                <p>Per te è solo una firma, per noi molto di più. Scopri come aiutarci!
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

export default MissionSection4;