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

  const [step, setStep] = useState(1); // Stato per gestire gli step del form
  const [formErrors, setFormErrors] = useState({
    nome: false,
    cognome: false,
    email: false,
    cellulare: false,
    codiceFiscale: false,
    tipoPagamento: false,
    importo: false,
    numeroCarta: false,
    scadenzaCarta: false,
    cvv: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Validazione dei campi
    if (value.trim() === '') {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [name]: true
      }));
    } else {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [name]: false
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Qui puoi gestire l'invio dei dati, come salvarli o inviarli a un API
  };

  const nextStep = () => {
    // Verifica che tutti i campi obbligatori siano compilati correttamente prima di procedere
    const requiredFields = ['nome', 'cognome', 'email', 'cellulare', 'codiceFiscale'];
    const isValid = requiredFields.every(field => formData[field].trim() !== '' && !formErrors[field]);
    
    if (isValid) {
      setStep(prevStep => prevStep + 1);
    } else {
      alert("Per favore, compila correttamente tutti i campi obbligatori prima di procedere.");
    }
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
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
      <form onSubmit={handleSubmit} style={{
        width: '40%',
        maxWidth: '1200px',
        padding: '20px',
        background: 'rgba(255, 255, 255, 0.9)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px'
      }}>
        {step === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Nome"
              style={{ padding: '10px', border: formErrors.nome ? '1px solid red' : '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
            />
            <input
              type="text"
              name="cognome"
              value={formData.cognome}
              onChange={handleChange}
              placeholder="Cognome"
              style={{ padding: '10px', border: formErrors.cognome ? '1px solid red' : '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              style={{ padding: '10px', border: formErrors.email ? '1px solid red' : '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
            />
            <input
              type="text"
              name="cellulare"
              value={formData.cellulare}
              onChange={handleChange}
              placeholder="Cellulare"
              style={{ padding: '10px', border: formErrors.cellulare ? '1px solid red' : '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
            />
            <input
              type="text"
              name="codiceFiscale"
              value={formData.codiceFiscale}
              onChange={handleChange}
              placeholder="Codice Fiscale"
              style={{ padding: '10px', border: formErrors.codiceFiscale ? '1px solid red' : '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
            />
            <button type="button" onClick={nextStep} style={{
              padding: '15px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              display: Object.values(formErrors).every(error => !error) ? 'block' : 'none' // Mostra solo se tutti i campi sono compilati correttamente
            }}>
              Avanti
            </button>
          </div>
        )}
        {step === 2 && (
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
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button type="button" onClick={prevStep} style={{
                padding: '15px',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px'
              }}>
                Indietro
              </button>
              <button type="button" onClick={nextStep} style={{
                padding: '15px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px'
              }}>
                Avanti
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
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
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button type="button" onClick={prevStep} style={{
                padding: '15px',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px'
              }}>
                Indietro
              </button>
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
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default DonaOra;
