import React, { useState } from 'react';
import DonaOraImage from '../../images/sfondoDonaOra.jpg';

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
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(${DonaOraImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <form style={{
        width: '100%',
        maxWidth: '1200px',
        padding: '20px',
        background: 'rgba(255, 255, 255, 0.9)', // Sfondo bianco semitrasparente per contrastare con l'immagine
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Leggera ombra per staccare il form dallo sfondo
        borderRadius: '8px'
      }} onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Nome"
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
          />
          <input
            type="text"
            name="cognome"
            value={formData.cognome}
            onChange={handleChange}
            placeholder="Cognome"
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
          />
          <input
            type="text"
            name="cellulare"
            value={formData.cellulare}
            onChange={handleChange}
            placeholder="Cellulare"
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
          <input
            type="text"
            name="codiceFiscale"
            value={formData.codiceFiscale}
            onChange={handleChange}
            placeholder="Codice Fiscale"
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
          <select
            name="tipoPagamento"
            value={formData.tipoPagamento}
            onChange={handleChange}
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
          >
            <option value="singola">Singola</option>
            <option value="periodica">Periodica Mensile</option>
          </select>
          <input
            type="number"
            name="importo"
            value={formData.importo}
            onChange={handleChange}
            placeholder="Importo"
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
          <input
            type="text"
            name="numeroCarta"
            value={formData.numeroCarta}
            onChange={handleChange}
            placeholder="Numero Carta"
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
          />
          <input
            type="text"
            name="scadenzaCarta"
            value={formData.scadenzaCarta}
            onChange={handleChange}
            placeholder="Scadenza MM/AA"
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
          />
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder="CVV"
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
          />
        </div>
        <button type="submit" style={{
          padding: '15px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px'
        }}>
          Invia
        </button>
      </form>
    </div>
  );
}

export default DonaOra;
