import React from 'react'
import perche1 from './perche1.webp'
import perche2 from './perche2.webp'
const AboutPerche = (props) => {

    return (
        <section className="about-page-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-8 col-md-10">
                        <div className="section-title-s3">
                        <h2>
                Perchè lo facciamo
              </h2>                           <p>Oltre a voler regalare al mondo ciò che Valerio ci ha donato,<strong> crediamo </strong> nel <strong>valore</strong> educativo a tutto tondo dello sport.
                            </p>
                            <p><strong>Lo sport</strong>, infatti, non è solo un'attività fisica, ma una<strong> potente forza</strong> capace di trasformare le vite.</p>
                            <p>Ci insegna la disciplina, il rispetto, a conoscere e superare i nostri limiti, a lavorare insieme e a scoprire il nostro potenziale.
                            </p>
                            <p>Ed è meraviglioso che tutto ciò <strong>avvenga con gioco</strong>, ovvero attraverso un linguaggio universale e fondamentale nello sviluppo della persona.
                            </p>
                            <img src={perche1} alt='perche1' />
                            <p>Infine, il nostro impegno nasce anche da una triste<strong>consapevolezza</strong>  acquisita nei primi progetti.</p>
                            <p>Purtroppo, infatti, nei luoghi in cui operiamo, quando non sono a scuola, bambini e bambine passano la maggior parte del loro tempo per strada, dove sono esposti a pericoli e influenze negative.
                            </p>
                            <p>La nostra <strong>speranza</strong> è che i nostri campi da basket possano essere nuovi luoghi di aggregazione.
                            </p>
                            <p>Per noi, lo sport è molto <strong>più di un gioco</strong>. È un mezzo per <strong>costruire comunità</strong> più forti, per <strong>educare</strong> alla vita e per dare speranza a chi ne ha più bisogno. È <strong>un'eredità</strong> che vogliamo trasmettere, un sogno che vogliamo condividere con il mondo intero.
                            </p>
                            <img src={perche2} alt='perche2' />
                        </div>
                    </div>
                </div>
               
            </div>
        </section>
    )
}

export default AboutPerche;