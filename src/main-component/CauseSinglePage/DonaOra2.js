import React, { Fragment, useState } from 'react';
import './donaora.style.scss';
import Navbar from '../../components/Navbar/Navbar';
import Logo from '../../images/logo.png'
import Footer from '../../components/footer/Footer';

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
    <Fragment>
    
    <Navbar hclass={'header-style-1'} Logo={Logo} btnClass={'theme-btn-s1'} />
    <br/>
      <br/>
      <br/>
      <br/><br/>
      <br/>
      <h1 style={{ textAlign: 'center' }}>Dona ora</h1>
      <p>La tua donazione è fondamentale per continuare il nostro lavoro. Ogni contributo, grande o piccolo, ci permette di portare avanti progetti che fanno la differenza nella vita di molti bambini e ragazzi. Grazie al tuo sostegno, possiamo costruire nuovi campi da basket, riqualificare spazi esistenti e offrire corsi di formazione per il personale locale.<br/>


Puoi decidere di fare una donazione singola, o di attivare quella mensile.<br/>

Quest’ultima è veramente speciale: Roma non è nata in un giorno, e poter contare sul tuo aiuto nel lungo periodo ci permettere di progettarci ancora meglio!<br/>

Unisciti a noi nella missione di trasformare la passione per il basket in uno strumento di cambiamento sociale. Dona ora e aiuta a costruire un futuro migliore per tanti giovani.<br/>
</p>
      <br/>
      <br/> <br/>
      <br/>
    <form className="form-dona" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Nome"
        />
        <input
          type="text"
          name="cognome"
          value={formData.cognome}
          onChange={handleChange}
          placeholder="Cognome"
        />
      </div>
      <div className="input-group">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="cellulare"
          value={formData.cellulare}
          onChange={handleChange}
          placeholder="Cellulare"
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          name="codiceFiscale"
          value={formData.codiceFiscale}
          onChange={handleChange}
          placeholder="Codice Fiscale"
        />
      </div>
      <div className="input-group">
        <select name="tipoPagamento" value={formData.tipoPagamento} onChange={handleChange}>
          <option value="singola">Singola</option>
          <option value="periodica">Periodica Mensile</option>
        </select>
        <input
          type="number"
          name="importo"
          value={formData.importo}
          onChange={handleChange}
          placeholder="Importo"
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          name="numeroCarta"
          value={formData.numeroCarta}
          onChange={handleChange}
          placeholder="Numero Carta"
        />
        <input
          type="text"
          name="scadenzaCarta"
          value={formData.scadenzaCarta}
          onChange={handleChange}
          placeholder="Scadenza MM/AA"
        />
        <input
          type="text"
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
          placeholder="CVV"
        />
      </div>
      <button type="submit">Invia</button>
    </form>
    <Footer/>
    </Fragment>
  );
}

export default DonaOra2;