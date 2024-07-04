import React from "react";
import { NavLink } from "react-router-dom";

import court from "./imageCard/court.webp";
import dream from "./imageCard/dream.webp";
import game from "./imageCard/game.webp";
import moment from "./imageCard/moment.webp";
import work from "./imageCard/work.webp";
import altre from "./imageCard/altre.webp";
import { handleScroll } from "../../main-component/genericFunction";
const AboutCosaFacciamo = (props) => {
  return (
    <section className="mission-vision-section">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div
              className="mission-vision-grids clearfix"
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                marginTop: "30px",
              }}
            >
              <NavLink onClick={handleScroll} to="/feelthedream">
                <div
                  className="grid"
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    gap: "50px",
                    marginTop: "20px",
                    borderRadius: "20px",
                  }}
                >
                  <div className="overlay"></div>
                  <img
                    src={dream}
                    style={{
                      height: "500px",
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      paddingRight: "20px",
                    }}
                  >
                    <h3 style={{ fontSize: "50px" }}>Feel The Dream</h3>
                    <p style={{ fontSize: "25px" }}>
                      Aiutaci a SOGNARE <br />
                      <span style={{ fontWeight: "bold" }}>Scopri di più.</span>
                    </p>
                  </div>
                </div>
              </NavLink>
              <NavLink onClick={handleScroll} to="/feelthecourt">
                <div
                  className="grid"
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    gap: "50px",
                    marginTop: "20px",
                    borderRadius: "20px",
                  }}
                >
                  <div className="overlay"></div>
                  <img
                    src={court}
                    style={{
                      height: "500px",
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      paddingRight: "20px",
                    }}
                  >
                    <h3 style={{ fontSize: "50px" }}>Feel The Court</h3>
                    <p style={{ fontSize: "25px" }}>
                      Aiutaci a COSTRUIRE <br />
                      <span style={{ fontWeight: "bold" }}>Scopri di più.</span>
                    </p>
                  </div>
                </div>
              </NavLink>
              <NavLink onClick={handleScroll} to="/feelthegame">
                <div
                  className="grid"
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    gap: "50px",
                    marginTop: "20px",
                    borderRadius: "20px",
                  }}
                >
                  <div className="overlay"></div>
                  <img
                    src={game}
                    style={{
                      height: "500px",
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      paddingRight: "20px",
                    }}
                  >
                    <h3 style={{ fontSize: "50px" }}>Feel The Game</h3>
                    <p style={{ fontSize: "25px" }}>
                      Aiutaci a TRASMETTERE <br />
                      <span style={{ fontWeight: "bold" }}>Scopri di più.</span>
                    </p>
                  </div>
                </div>
              </NavLink>
              <NavLink onClick={handleScroll} to="/feelthemoment">
                <div
                  className="grid"
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    gap: "50px",
                    marginTop: "20px",
                    borderRadius: "20px",
                  }}
                >
                  <div className="overlay"></div>
                  <img
                    src={moment}
                    style={{
                      height: "500px",
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      paddingRight: "20px",
                    }}
                  >
                    <h3 style={{ fontSize: "50px" }}>Feel The Moment</h3>
                    <p style={{ fontSize: "25px" }}>
                      Aiutaci a VIVERE <br />
                      <span style={{ fontWeight: "bold" }}>Scopri di più.</span>
                    </p>
                  </div>
                </div>
              </NavLink>
              <NavLink onClick={handleScroll} to="/altre-iniziative">
                <div
                  className="grid"
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    gap: "50px",
                    marginTop: "20px",
                    borderRadius: "20px",
                  }}
                >
                  <div className="overlay"></div>
                  <img
                    src={altre}
                    style={{
                      height: "500px",
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      paddingRight: "20px",
                    }}
                  >
                    <h3 style={{ fontSize: "50px" }}>Altre Iniziative</h3>
                    <p style={{ fontSize: "25px" }}>
                      Non abbiamo paura di uscire dagli schemi <br />
                      <span style={{ fontWeight: "bold" }}>Scopri di più.</span>
                    </p>
                  </div>
                </div>
              </NavLink>
              <NavLink onClick={handleScroll} to="/work-in-progress">
                <div
                  className="grid"
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    gap: "50px",
                    marginTop: "20px",
                    borderRadius: "20px",
                  }}
                >
                  <div className="overlay"></div>
                  <img
                    src={work}
                    style={{
                      height: "500px",
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      paddingRight: "20px",
                    }}
                  >
                    <h3 style={{ fontSize: "50px" }}>Work in progress</h3>
                    <p style={{ fontSize: "25px" }}>
                      Prova a sbirciare cosa bolle in cantiere! <br />
                      <span style={{ fontWeight: "bold" }}>Scopri di più.</span>
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="" style={{backgroundColor:'#efefef', padding:'20px'}}>
        <div className="row justify-content-center">
          <div className="col col-lg-8 col-md-10" style={{marginTop:'30px'}}>
            <div className="section-title-s3">
              <span>OgniGiorno</span>

              <p>
                Il nostro impegno non si ferma mai: anche quando non stiamo
                costruendo nuove strutture sportive o non siamo in missione per
                realizzare progetti, il nostro lavoro continua incessantemente
                dietro le quinte. Ogni giorno è un'opportunità per fare la
                differenza, e ci dedichiamo con passione a numerose attività
                essenziali per il successo delle nostre iniziative.
              </p>

              <h4>
                <strong>Monitoraggio dei Progetti</strong>
              </h4>
              <p>
                Uno degli aspetti fondamentali del nostro lavoro quotidiano è il
                monitoraggio continuo dei progetti in corso. Verifichiamo
                costantemente i progressi, risolviamo eventuali problemi e
                assicuriamo che ogni attività proceda secondo i piani stabiliti.
              </p>

              <h4>
                <strong>
                  Pianificazione e Organizzazione di Nuovi Progetti
                </strong>
              </h4>
              <p>
                Il futuro è sempre al centro dei nostri pensieri. Ogni giorno
                lavoriamo per ideare e pianificare nuovi progetti che possano
                portare beneficio alle comunità che supportiamo. Dalle riunioni
                di brainstorming alle telefonate con i partner locali, c’è
                sempre qualcosa di nuovo da fare.
              </p>

              <h4>
                <strong>Comunicazione</strong>
              </h4>
              <p>
                La comunicazione efficace è alla base del nostro operato.
                Rispondere alle mail, effettuare telefonate ed organizzare
                incontri ci consente di mantenere un contatto costante con i
                nostri partner, i volontari e i sostenitori, garantendo una
                collaborazione fluida e produttiva. Ogni interazione è
                un'opportunità per rafforzare la nostra rete e mettere le basi
                per nuovi progetti.
              </p>

              <h4>
                <strong>Raccogliere Fondi</strong>
              </h4>
              <p>
                Le raccolte fondi sono cruciali per il finanziamento dei nostri
                progetti, per questo è fondamentale pianificare e organizzare
                eventi e campagne di fundraising. Dall'ideazione di nuove
                iniziative alla gestione degli aspetti logistici, lavoriamo con
                impegno per coinvolgere sempre più persone e raccogliere i fondi
                necessari. La creatività e la determinazione sono i nostri
                alleati in questa missione, ma non è mai facile.
              </p>

              <h4>
                <strong>Gestione Amministrativa</strong>
              </h4>
              <p>
                Dietro ogni grande progetto c'è una solida gestione
                amministrativa. Ci occupiamo della gestione delle risorse, della
                contabilità e della rendicontazione, assicurando trasparenza e
                responsabilità in ogni transazione. Questo ci permette di
                mantenere una gestione finanziaria rigorosa e di garantire che
                ogni donazione venga utilizzata in modo efficace.
              </p>

              <p>
                Per noi, ogni giorno è una nuova opportunità per fare la
                differenza. Che si tratti di monitorare un progetto in corso,
                pianificare nuove iniziative o organizzare raccolte fondi,
                lavoriamo con passione e dedizione per portare avanti la legacy
                di Valerio e per creare un futuro migliore attraverso lo sport.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCosaFacciamo;
