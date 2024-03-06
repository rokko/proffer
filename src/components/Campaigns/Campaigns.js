import React from "react";
import { Link } from 'react-router-dom';
import bg from '../../images/campain-bg.jpg'


const Campaigns = (props) => {

    const Campain = [
        {
            Des: "Throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants",
            Title: 'Save the cheildren',
            Goal: "500",
            Raised: "300",
            progress: "80",
        },
        {
            Des: "Throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants",
            Title: 'Need the Water',
            Goal: "800",
            Raised: "400",
            progress: "70",
        }
    ]
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="campain-section section-padding">
            <div className="content-area">
                <div className="left-col">
                    <div className="campain-area">
                        <div className="section-title">
                            <span>#Need your help</span>
                            <h2>Featured campaigns</h2>
                        </div>

                        <div className="campain-slider">
                                {Campain.map((campain, cmn) => (
                                    <div className="item" key={cmn}>
                                        <div>
                                            <h3><Link onClick={ClickHandler} to="/">{campain.Title}</Link></h3>
                                            <p>{campain.Des}</p>
                                            <div className="goal-raised">
                                                <div><span>Goal:</span> ${campain.Goal}</div>
                                                <div><span>Raised:</span> ${campain.Raised}</div>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar" style={{ width: `${campain.progress}%` }}>
                                                    <span className="progress-value">{campain.progress}%</span>
                                                </div>
                                            </div>
                                            <Link onClick={ClickHandler} to="/" className="dontate-now">Donate now</Link>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="right-col">
                    <div className="data-bg-image" style={{ backgroundImage: `url(${bg})` }}></div>
                </div>
            </div>
        </section>
    );
}

export default Campaigns;