import React, { useState } from 'react';
import DonaOraImage from '../../images/nuovoDonaOra.webp';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
function DonaOra() {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    tipoPagamento: 'singola', // Default value
    importo: '',
  });


  const [selectedTaglio, setSelectedTaglio] = useState({
    taglio5: false,
    taglio10: false,
    taglio25: false,
  });

  const [step, setStep] = useState(1); // Stato per gestire gli step del form
  const [formErrors, setFormErrors] = useState({
    nome: false,
    cognome: false,
    email: false,
    tipoPagamento: false,
    importo: false,

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

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      // Aggiunge i dati a una collezione chiamata "users"
      await addDoc(collection(db, "donazioni"), formData);
    } catch (error) {
      console.error("Errore durante il salvataggio: ", error);
    }

    window.location.href = "https://www.paypal.com/ncp/payment/P8EUAH2ZXMWTW"; 

    // Qui puoi gestire l'invio dei dati, come salvarli o inviarli a un API
  };

  const nextStep = () => {



    setStep(prevStep => prevStep + 1);

  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const isMobile = window.innerWidth <= 768;
  return (
    <div style={{
      width: '100%',
      height: '80vh',
      backgroundImage: `url(${DonaOraImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <form onSubmit={handleSubmit} style={{
        width:isMobile?'320px':'40%',
        maxWidth: '1200px',
        padding:'20px',
       
        background: 'rgba(255, 255, 255, 1)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px'
      }}>
        {step === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
            <h3>SOSTIENI I NOSTRI PROGETTI</h3>
            <select
              name="tipoPagamento"
              value={formData.tipoPagamento}
              onChange={handleChange}
              style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
            >
              <option value="singola">Singola</option>
              <option value="periodica">Periodica Mensile</option>
            </select>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
              <div onClick={() => {
                setSelectedTaglio({ taglio5: !selectedTaglio.taglio5, taglio10: false, taglio25: false })
                setFormData(prevState => ({
                  ...prevState,
                  ['importo']: 5
                }))
              }} style={{ background: selectedTaglio.taglio5 ? '#78c3e0' : 'white', color: selectedTaglio.taglio5 ? 'white' : 'black', padding: '5px', width: '100px', height: '100px', borderRadius: '4px', border: '1px solid #ccc', display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center', fontSize: '35px' }}>
                5 €
              </div>
              <div onClick={() => {
                setSelectedTaglio({ taglio5: false, taglio10: !selectedTaglio.taglio10, taglio25: false })
                setFormData(prevState => ({
                  ...prevState,
                  ['importo']: 10
                }))
              }} style={{ background: selectedTaglio.taglio10 ? '#78c3e0' : 'white', color: selectedTaglio.taglio10 ? 'white' : 'black', padding: '5px', width: '100px', height: '100px', borderRadius: '4px', border: '1px solid #ccc', display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center', fontSize: '35px' }}>
                10 €
              </div>
              <div onClick={() => {
                setSelectedTaglio({ taglio5: false, taglio10: false, taglio25: !selectedTaglio.taglio25 })
                setFormData(prevState => ({
                  ...prevState,
                  ['importo']: 25
                }))
              }} style={{ background: selectedTaglio.taglio25 ? '#78c3e0' : 'white', color: selectedTaglio.taglio25 ? 'white' : 'black', padding: '5px', width: '100px', height: '100px', borderRadius: '4px', border: '1px solid #ccc', display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center', fontSize: '35px' }}>
                25 €
              </div>

            </div>
            <input
              type="number"
              name="importo"
              value={formData.importo}
              onChange={handleChange}
              placeholder="Inserisci importo personalizzato"
              style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
            />


            <button type="button" onClick={nextStep} style={{
              padding: '15px',
              backgroundColor: '#78c3e0',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              display: Object.values(formErrors).every(error => !error) ? 'block' : 'none' // Mostra solo se tutti i campi sono compilati correttamente
            }}>
              Vai al prossimo STEP
            </button>
          </div>
        )}
        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
            <h3>I tuoi dati</h3>
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
              <a href='https://www.paypal.com/ncp/payment/P8EUAH2ZXMWTW' target='_blank'>
              <button style={{
                padding: '15px',
                backgroundColor: '#78c3e0',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px'
              }}>
                Dona Ora
              </button>
              </a>
            </div>
          </div>
        )}

      </form>
    </div>
  );
}

export default DonaOra;
