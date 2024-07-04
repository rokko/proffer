import React, { useState } from 'react'

const About51000 = (props) => {
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
        <section className="about-page-section section-padding">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col col-lg-8 col-md-10">
                    <div className="section-title-s3">
                        <h2>5x1000</h2>
                        <h4>Cos'è il 5x1000</h4>
                        <p>Senza entrare in dettagli complicati, immagina di poter fare una magia che aiuta molte persone, senza dover tirar fuori neanche un centesimo dal portafoglio!</p>
                        <p>Ecco il 5x1000 è un po' così. È una misura fiscale che ti permette di donare una parte delle tasse che devi già pagare, ad una buona causa (per esempio a noi, diciamo così per dire).</p>
                        <p>Ti bastano 3 semplici mosse, una specie di terzo tempo:</p>
                        <h5>Step 1:</h5>
                        <p>Mentre compili il modulo 730 del CU o del Modello Unico, cerca la sezione “Scelta per la destinazione del cinque per mille dell’IRPEF”</p>
                        <h5>Step 2:</h5>
                        <p>Firmare nel primo riquadro dedicato al "Sostegno degli Enti del Terzo settore iscritti nel RUNTS"</p>
                        <h5>Tiro (che se no è passi):</h5>
                        <p>Inserire il codice fiscale di “Vale per Tutti”: {codiceFiscale}</p>
                        <button onClick={copyToClipboard} className="copy-button">
                            {copied ? 'Codice Copiato!' : 'Copia Codice Fiscale'}
                        </button>
                        <br/>                        <br/>

                        <p>Destinare il 5x1000 della tua dichiarazione dei redditi alla nostra associazione è un gesto semplice ma di grande impatto, che ci permette di finanziare progetti e attività a favore di bambini e ragazzi in difficoltà.</p>
                        <p>Per te è solo una firma, per noi molto di più!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About51000;