import React from 'react'

const Features2 = (props) => {

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
            title: 'Human hope',
            icon: 'flaticon-coffee-cup',
        }

    ]

    return (
        <section className="feature-section-s2">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="feature-grids clearfix">
                            {FeatureArray.map((features, fitem) => (
                                <div className="grid" key={fitem}>
                                    <i className={`fi ${features.icon}`}></i>
                                    <h3>{features.title}</h3>
                                    <div>
                                        <p>Close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features2;