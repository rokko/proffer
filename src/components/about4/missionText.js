import React from 'react'
import mission1 from './mission1.webp'
import mission2 from './mission2.webp'
const MissionText = (props) => {

    return (
        <section className="about-page-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-8 col-md-10">
                        <div className="section-title-s3">
                        <h2>
                Mission
              </h2>                            <p>Proprio come Valerio ha fatto con noi, la nostra <strong> mission</strong> è quella di <strong>regalare l’amore per il basket e per lo sport</strong> in generale, a tutte quelle persone che hanno bisogno di sognare e di porsi degli obiettivi, nella speranza di cambiare in meglio le loro vite.

                            </p>
                            <p>Per farlo, partiamo dalla <strong>riqualificazione e realizzazione</strong> di spazi destinati allo sport per bambini e ragazzi che vivono in situazioni difficili e sono meno fortunati di noi.
</p>
<img src={mission1} alt='mission1' />
                            <p>Il secondo passo è offrire <strong> corsi di formazione</strong> per il personale locale, così da mettere a disposizione tutti gli ingredienti necessari per la nascita di nuove realtà sportive.
                            </p>
                            <p>Le nostre iniziative si svilupperanno in Italia, in Africa o in qualsiasi altra parte del mondo. Tutto ciò è e <strong>sarà possibile</strong> solo grazie alle <strong>donazioni</strong> di chi sceglierà di sostenerci.

                            </p>
                            <p>I nostri progetti saranno dinamici, ambiziosi e <strong>senza confini</strong>, un po' come Valerio stesso.

                            </p>
                            <img src={mission2} alt='mission2' />
                            
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default MissionText;