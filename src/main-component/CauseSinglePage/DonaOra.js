import React, { useState } from 'react';
import './donaora.style.scss';
import DonaOraImage from '../../images/sfondoDonaOra.jpg'

function DonaOra() {
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
    <div style={{width:'100%!important',backgroundImage:`url(${DonaOraImage}`}}>
    <form  className="form-dona" onSubmit={handleSubmit}>
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
    </div>
  );
}

export default DonaOra;