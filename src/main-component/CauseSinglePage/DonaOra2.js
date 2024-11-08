import React, { Fragment, useState } from 'react';
import './donaora.style.scss';
import Navbar from '../../components/Navbar/Navbar';
import Logo from '../../images/logo.png'
import Footer from '../../components/footer/Footer';
import FormDonazioni from '../../components/Targetarea/FormDonazioni';
import DonaOra from './DonaOra';

function DonaOra2() {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    cellulare: '',
    codiceFiscale: '',
    tipoPagamento: 'singola', // Default value
    importo: '',
    numeroCarta: '',
    scadenzaCarta: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui puoi gestire l'invio dei dati, come salvarli o inviarli a un API
    console.log(formData);
  };

  const [copied, setCopied] = useState(false);

  const codiceFiscale = "IT65U0306909606100000189567";

  const copyToClipboard = () => {
      navigator.clipboard.writeText(codiceFiscale).then(() => {
          setCopied(true);
          setTimeout(() => {
              setCopied(false);
          }, 2000); // Nasconde il messaggio dopo 2 secondi
      });
  };

  return (
    <>
    <section className="about-page-section section-padding">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col col-lg-8 col-md-10">
          <div className="section-title-s3">
 
      <h2 style={{ textAlign: 'left' }}>Dona ora</h2>
 <p>La tua donazione è fondamentale per continuare il nostro lavoro.<br/> Ogni contributo, grande o piccolo, ci permette di portare avanti progetti che fanno la differenza nella vita di molti bambini e ragazzi. <br/>Grazie al tuo sostegno, possiamo costruire nuovi campi da basket, riqualificare spazi esistenti e offrire corsi di formazione per il personale locale.
<br/><br/>
Puoi decidere di fare una donazione singola, o di attivare quella mensile.<br/>


Quest’ultima è veramente speciale: Roma non è nata in un giorno, e poter contare sul tuo aiuto nel lungo periodo ci permettere di progettarci ancora meglio!<br/>


Per donare, puoi compilare il form e utilizzare PayPal, oppure tramite bonifico, specificando nella causale “donazione” o “erogazione liberale”<br/>


Unisciti a noi nella missione di trasformare la passione per il basket in uno strumento di cambiamento sociale.<br/> <br/>

Dona ora e aiuta a costruire un futuro migliore per tanti giovani.<br/>


P.S.
In Italia DONARE è detraibile dalle tasse (lo sappiamo, sembra incredibile?!)<br/><br/>


<strong>Per le persone fisiche</strong>, le donazioni liberali sono <br/>


    - detraibili dall’Irpef per il 30% dell’importo, nel limite massimo di € 30.000 per periodo d’imposta<br/>


    - deducibili dal reddito dell’erogatore nel limite del 10% del reddito dichiarato (per aziende e persone fisiche, l’eccedenza può essere riportata fino al 4° anno successivo).<br/><br/>


<strong>Per le aziende</strong>, le donazioni sono detraibili senza limite assoluto ma entro il 10% del reddito complessivo dichiarato.</p>
  
   <p> IBAN IT65U0306909606100000189567 </p>
   <button onClick={copyToClipboard} className="copy-button" style={{borderRadius:'20px'
                        }}>
                            {copied ? 'IBAN Copiato!' : 'Copia IBAN negli appunti'}
                        </button>

    </div>
    </div>
    </div>
    </div>
    </section>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <DonaOra />
      </div>
     </>
  );
}

export default DonaOra2;