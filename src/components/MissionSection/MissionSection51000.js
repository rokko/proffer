import React , { useState } from "react";

const MissionSection1000 = (props) => {
    const [copied, setCopied] = useState(false);

    const codiceFiscale = "96539310589";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codiceFiscale).then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 2000); // Nasconde il messaggio dopo 2 secondi
        });
    };
    return (
        <section className="mission-vision-section">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="mission-vision-grids clearfix">
                            <div className="grid" style={{padding:'20px', fontSize:'25px', borderRadius:'20px'}}>
                                <div className="overlay"></div>
                               
                                <h2><strong>Step 1</strong>:</h2>
                        <p>Mentre compili il modulo 730 del CU o del Modello Unico, cerca la sezione “Scelta per la destinazione del cinque per mille dell’IRPEF”</p>
                     
                            </div>
                            <div className="grid" style={{padding:'20px', fontSize:'25px', borderRadius:'20px', display:'none'}}>
                                <div className="overlay"></div>
                               
                                <h2><strong>Step 2:</strong></h2>
                                <p>Firmare nel primo riquadro dedicato al "Sostegno degli Enti del Terzo settore iscritti nel RUNTS"</p>
                            </div>
                            <div className="grid" style={{padding:'20px', fontSize:'25px', display:'', borderRadius:'20px'}}>
                                <div className="overlay"></div>
                                <h2><strong>Step 2:</strong></h2>
                                <p>Firmare nel primo riquadro dedicato al "Sostegno degli Enti del Terzo settore iscritti nel RUNTS"</p>
                            
                            </div>
                            <div className="grid" style={{padding:'20px', fontSize:'25px', borderRadius:'20px'}}>
                                <div className="overlay"></div>
                                
                        <h2><strong>Tiro (che se no è passi):</strong></h2>
                        <p>Inserire il codice fiscale di “Vale per Tutti”: {codiceFiscale}</p>
                        <button onClick={copyToClipboard} className="copy-button" style={{borderRadius:'20px'
                        }}>
                            {copied ? 'Codice Copiato!' : 'Copia Codice Fiscale'}
                        </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MissionSection1000;