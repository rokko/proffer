import React from 'react'
import Organigramma from '../../images/organigramma.png'
import Statuto from '../../images/statuto.png'
import Bilancio from '../../images/bilancio.png'
const About6 = (props) => {

    return (
        <section className="about-page-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-8 col-md-10">
                        <div className="section-title-s3">
                            <span>#Trasparenza</span>
                            <h2>Tra<span>sparenza</span> .</h2>
                            <p>Per noi, la trasparenza è un valore fondamentale.
</p>
<p>Crediamo che la fiducia sia alla base di ogni relazione matura e duratura, per questo, ci impegniamo a operare con la massima trasparenza in tutte le nostre attività. Non siamo perfetti e a volte sbaglieremo, ma quando (e se) succederà saremo qui a dirvelo e a rimediare al meglio delle nostre capacità. 
</p>
<p>La fiducia che ci date ogni giorno, come sostenitori e partner, è qualcosa di prezioso, e la prendiamo molto seriamente.
</p>
<p>Anche perché, senza di voi, nulla di quello che facciamo sarebbe possibile.

</p>
<h3>Donazioni</h3>
<p>Ogni euro donato alla nostra associazione viene gestito con la massima cura e responsabilità. Siamo consapevoli dell'importanza di utilizzare le risorse in modo efficace ed efficiente, per massimizzare l'impatto delle nostre iniziative. Le donazioni sono destinate a progetti specifici e dettagliati, che vengono costantemente monitorati e valutati per garantirne il successo e la sostenibilità.

</p>
<h3>Comunicazione</h3>
<p>Ci impegniamo a mantenere una comunicazione aperta e onesta con tutti i nostri sostenitori e incoraggiamo la partecipazione ai nostri progetti. Infine, forniamo aggiornamenti regolari sui progressi dei nostri progetti, sui risultati raggiunti e sulle sfide affrontate.
Questo ci permette di mantenere un dialogo costante con la nostra comunità, coinvolgendola attivamente nelle nostre attività e decisioni.
</p>
<h3>Rendicontazione</h3>
<p>Ogni anno, pubblichiamo un rapporto dettagliato sulle nostre attività, includendo informazioni finanziarie complete e trasparenti. Crediamo che rendicontare in modo chiaro e comprensibile sia essenziale per mantenere la fiducia di chi ci supporta.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="about-features-grid">

                            <div className="grid asinistra" style={{display:'flex', flexDirection:'row', gap:'10px'}}>
                                <img src={Organigramma} width={48} />
<div>
                                <h3>Organigramma</h3>
                                <p>Scopri la nostra organizzazione.</p>
                                </div>
                            </div>
                            <div className="grid asinistra" style={{display:'flex', flexDirection:'row',gap:'10px'}}>
                                <img src={Statuto} width={48} />
<div>
                                <h3>Statuto</h3>
                                <p>Scopri i principi e i nostri scopi sociali.</p>
                                </div>
                            </div>
                            <div className="grid " style={{display:'flex', flexDirection:'row',gap:'10px'}}>
                                <img src={Bilancio} width={48} />
<div>
                                <h3>Bilancio</h3>
                                <p>Scarica l’ultimo bilancio dell’associazione.
</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About6;