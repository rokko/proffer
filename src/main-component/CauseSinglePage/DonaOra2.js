import React, { Fragment, useState } from 'react';
import './donaora.style.scss';
import Navbar from '../../components/Navbar/Navbar';
import Logo from '../../images/logo.png'
import Footer from '../../components/footer/Footer';
import FormDonazioni from '../../components/Targetarea/FormDonazioni';

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

  return (
    <section className="about-page-section section-padding">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col col-lg-8 col-md-10">
          <div className="section-title-s3">
 
      <h1 style={{ textAlign: 'center' }}>Dona ora</h1>
      <p>La tua donazione è fondamentale per continuare il nostro lavoro.<br/> Ogni contributo, grande o piccolo, ci permette di portare avanti progetti che fanno la differenza nella vita di molti bambini e ragazzi.<br/> Grazie al tuo sostegno, possiamo costruire nuovi campi da basket, riqualificare spazi esistenti e offrire corsi di formazione per il personale locale.<br/>


Puoi decidere di fare una donazione singola, o di attivare quella mensile.<br/>

Quest’ultima è veramente speciale: Roma non è nata in un giorno, e poter contare sul tuo aiuto nel lungo periodo ci permettere di progettarci ancora meglio!<br/>

Unisciti a noi nella missione di trasformare la passione per il basket in uno strumento di cambiamento sociale.<br/> Dona ora e aiuta a costruire un futuro migliore per tanti giovani.<br/>
</p>
    
    <FormDonazioni />
    

    </div>
    </div>
    </div>
    </div>
    </section>
  );
}

export default DonaOra2;