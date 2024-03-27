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
      <p>Testo testo testo testo testo testo testo</p>
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
          <option value="periodica">Periodica</option>
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