import React from "react";
import Volontari from "../../api/volontari";
import { Link } from "react-router-dom";
import ContactForm from "../ContactForm";

const DiventaVolontario = (props) => {
    return (
        <section className="about-page-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-8 col-md-10">
                        <div className="section-title-s3">
                          

                            <h2>Diventa un volontario                            </h2>
                            <p>
                                Il <strong>volontariato</strong> è il <strong>cuore</strong> pulsante di Vale per Tutti.<br /> Senza il supporto dei nostri volontari, non potremmo realizzare le nostre attività e raggiungere i nostri obiettivi. Perché alla fine, un po' come il basket, questa associazione è uno sport di squadra!

                            </p>
                            <p>
                                <strong>Diventare volontario</strong>, quindi, significa mettere a disposizione il proprio tempo, le proprie competenze e la propria passione per contribuire a realizzare la nostra Mission!

                            </p>
                            <p>
                                Se vuoi darci una mano, ti invitiamo a unirti a noi. Compila il modulo di iscrizione e scopri come puoi fare la differenza. <strong>Insieme</strong>, possiamo continuare a costruire un futuro migliore per tanti giovani.
</p>
                        </div>
                    </div>
                </div>
            </div>
          
            <div className="content-area" style={{marginTop:'50px'}}>
                <div className="first-row clearfix" style={{display:'flex', flexDirection:'row', justifyContent:'center', alignContent:'center',flexWrap:'wrap'}}>
                    <div className="grid"></div>
                    
                   
                    
                    {Volontari.map((team, aitem) => (
                        <div className="grid" style={{margin:'5px',maxWidth:'352px', width:'352px'}} key={aitem} >
                            <div >
                                <img src={team.AtImg} alt="" style={{borderRadius:'50%', width:'352px'}} />
                            </div>
                            <div className="member-info">
                                <h4>{team.name}</h4>
                                <p>{team.title}</p>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{marginTop:'150px'}}>
            <ContactForm/>
            </div>
         
        </section>
    );
};

export default DiventaVolontario;
