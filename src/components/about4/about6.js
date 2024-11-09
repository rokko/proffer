import React from "react";
import Organigramma from "../../images/organigramma.png";
import Statuto from "../../images/statuto.png";
import Bilancio from "../../images/bilancio.png";
const About6 = (props) => {
  return (
    <section className="about-page-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-lg-8 col-md-10">
            <div className="section-title-s3">
    
              <h2>
                Trasparenza
              </h2>
              <p>Per noi, la trasparenza è un valore fondamentale.</p>
              <p>
                Crediamo che la fiducia sia alla base di ogni relazione matura e
                duratura, per questo, ci impegniamo a operare con la massima
                trasparenza in tutte le nostre attività. Non siamo perfetti e a
                volte sbaglieremo, ma quando (e se) succederà saremo qui a
                dirvelo e a rimediare al meglio delle nostre capacità.
              </p>
              <p>
                La fiducia che ci date ogni giorno, come sostenitori e partner,
                è qualcosa di prezioso, e la prendiamo molto seriamente.
              </p>
              <p>
                Anche perché, senza di voi, nulla di quello che facciamo sarebbe
                possibile.
              </p>
              <h2>Donazioni</h2>
              <p>
                Ogni euro donato alla nostra associazione viene gestito con la
                massima cura e responsabilità. Siamo consapevoli dell'importanza
                di utilizzare le risorse in modo efficace ed efficiente, per
                massimizzare l'impatto delle nostre iniziative. Le donazioni
                sono destinate a progetti specifici e dettagliati, che vengono
                costantemente monitorati e valutati per garantirne il successo e
                la sostenibilità.
              </p>
              <h2>Comunicazione</h2>
              <p>
                Ci impegniamo a mantenere una comunicazione aperta e onesta con
                tutti i nostri sostenitori e incoraggiamo la partecipazione ai
                nostri progetti. Infine, forniamo aggiornamenti regolari sui
                progressi dei nostri progetti, sui risultati raggiunti e sulle
                sfide affrontate. Questo ci permette di mantenere un dialogo
                costante con la nostra comunità, coinvolgendola attivamente
                nelle nostre attività e decisioni.
              </p>
              <h2>Rendicontazione</h2>
              <p>
                Ogni anno, pubblichiamo un rapporto dettagliato sulle nostre
                attività, includendo informazioni finanziarie complete e
                trasparenti. Crediamo che rendicontare in modo chiaro e
                comprensibile sia essenziale per mantenere la fiducia di chi ci
                supporta.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <div className="about-features-grid">
              <div
                className="grid asinistra"
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              > <a href="/organigramma.pdf" target="_blank" rel="noopener noreferrer">
                <img src={Organigramma} width={120} />
                </a>
                <div>
               
                  <h3 style={{fontSize:'40px'}}>Organigramma</h3>
                  <p>Scopri la nostra organizzazione.</p>
                  
                </div>
              </div>
              <div
                className="grid asinistra"
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                 <a href="/statuto.pdf" target="_blank" rel="noopener noreferrer">
                <img src={Statuto} width={120} />
                </a>
                <div>
                  <h3 style={{fontSize:'40px'}}>Statuto</h3>
                  <p>Scopri i principi e i nostri scopi sociali.</p>
                </div>
              </div>
              <div
                className="grid "
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              ><a href="/bilancio.pdf" target="_blank" rel="noopener noreferrer">
                <img src={Bilancio} width={120} height={120} />
                </a>
                <div>
                  <h3 style={{fontSize:'40px'}}>Bilancio</h3>
                  <p style={{margin:0, lineHeight:'18px'}}>Scarica l’ultimo bilancio dell’associazione.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About6;
