import {db} from '../../main-component/firebase'; // o dove hai configurato Firebase
import { collection, getDocs } from "firebase/firestore";

export const  fetchCauses = async () => {
    const articoliNew= []
  try {
    const causesCollection = collection(db, "articoli"); // Riferimento alla collection
    const causesSnapshot = await getDocs(causesCollection); // Recupera i documenti
    const causesArray = causesSnapshot.docs.map(doc => ({
      id: doc.id, 
      ...doc.data()
    })); // Converte i documenti in array

    console.log("Dati recuperati:", causesArray);
    if(causesArray.length>0){
        causesArray.map((cause)=>{
            let nuovaCausa={
                id: cause.id,
                cImg:cause.immagine1,
                process:'65',
                thumb:cause.nomeAccorciato,
                cTitle: cause.titolo,
                slug:cause.nomeAccorciato, 
                Goal:'3,000.00',
                Raised:'2,000.00',
                authorName:'Vale Per tutti',
                fotoArticolo :cause.immagine2? cause.immagine2:'',
                testo :cause.testo,
                padre : cause.progettoPadre,
            }
            articoliNew.push(nuovaCausa)

            
        })
    }
    return articoliNew;
  } catch (error) {
    console.error("Errore nel recupero dei dati:", error);
  }
};

// Esegui la funzione per recuperare i dati
