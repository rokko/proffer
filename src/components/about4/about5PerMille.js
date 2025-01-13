import React, { useState } from 'react';
import mod5100 from '../../images/modulo5x1000.png';
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
                        <p>Ecco il 5x1000 è un po' così. È una misura fiscale che ti permette di donare una parte delle tasse che devi già pagare, ad una <strong>buona causa</strong> (per esempio a noi, diciamo così per dire).</p>
                        <p>Ti bastano 3 semplici mosse, una specie di terzo tempo.</p>
                        <p>Destinare il 5x1000 della tua dichiarazione dei redditi alla nostra associazione è un gesto semplice ma di grande impatto, che ci permette di finanziare progetti e attività a favore di bambini e ragazzi in difficoltà.</p>
                        <p>Per te è solo una firma, per noi molto di più!</p>
                    </div>
                </div>
                <img src={mod5100} alt="5x1000"  style={{width:'70%'}}/>
            </div>
        </div>
    </section>
    )
}

export default About51000;