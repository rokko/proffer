import React from 'react'

const Features = (props) => {

    const FeatureArray = [
        {
            title: 'Education',
            icon: 'flaticon-pencil-case',
        },
        {
            title: 'Food',
            icon: 'flaticon-fruits',
        },
        {
            title: 'Hope',
            icon: 'flaticon-donation',
        },
        {
            title: 'Prayer',
            icon: 'flaticon-pencil-case',
        },
        {
            title: 'Children',
            icon: 'flaticon-charity',
        },
        {
            title: 'Donation',
            icon: 'flaticon-cost',
        },


    ]

    return (
        <section className="feature-section">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="feature-grids">
                            {FeatureArray.map((features, fitem) => (
                                <div className="grid" key={fitem}>
                                    <i className={`fi ${features.icon}`}></i>
                                    <h3>{features.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;