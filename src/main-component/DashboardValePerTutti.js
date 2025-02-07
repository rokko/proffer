import react, {useState} from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from "../main-component/firebase";

const DashboardValePerTutti = () => {

    const salvainput = async(e) =>{

      const formData ={
        progettoPadre : value,
        titolo : titolo,
        testo : testo,
        immagine1:immagine1,
        immagine2:immagine2,
        nomeAccorciato:NomeAccorciato
      }
        e.preventDefault();
          try {
            // Aggiunge i dati a una collezione chiamata "users"
            await addDoc(collection(db, "articoli"), formData);
          } catch (error) {
            console.error("Errore durante il salvataggio: ", error);
          }
       
    }
    const [titolo, setTitolo] = useState()
    const [testo, setTesto] = useState()
    const [immagine1, setImmagine1] = useState()
    const [immagine2, setImmagine2] = useState()
    const [NomeAccorciato, setNomeAccorciato] = useState()
    const [value, setValue] = useState('');
    const [password,setPassword]= useState('')
    const [test,setTest]=useState('')

    const options = ['FeelTheDream', 'FeelTheCourt', 'FeelTheGame', 'FeelTheMoment', 'AltreIniziative', 'WorkInProgress'];
    const accedi=()=> {

      if( password === 'ValePerTutti2024'){
        setTest(true)
      }
      
    }
  
   if (!test) return (
      <div>
        <input onChange={e=>setPassword(e.target.value)}></input>
        <button onClick={()=>accedi()}>Vai</button>
      </div>
   )
    else return(
        <div style={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center',alignItems:'center'}}>
        <p>Dashboard</p>
        <h2>Inserimento nuovo articolo</h2>
        <div>
      <select value={value} onChange={(e) => setValue(e.target.value)}>
        <option value="" disabled>Seleziona un'opzione</option>
        <p>(selezionare in quale sezione andrà l'articolo)</p>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p>Hai selezionato: {value}</p>
    </div>
        <div style={{display:'flex', flexDirection:'column'}}>
            <p>Titolo</p>
            <p>(Inserire il titolo dell'articolo)</p>
        <input id="titolo"  onChange={(e)=> setTitolo(e.target.value)}></input>
        <p>NomeAccorciato</p>
        <p>(inserire un nome all'articolo senza spazi, es. "cameruncourt" </p>
        <input id="titolo"  onChange={(e)=> setNomeAccorciato(e.target.value)}></input>
        <p>Testo</p>
        {"(inserire il testo dell' articolo , per il grassetto utilizzare <strong></strong> es. <strong> valerio </strong> ; per andare a capo usare <br/>) Se vuoi inserire un link devi scriverlo cosi <a href='link'>Testo che vuoi </a>"}
        <textarea id="testo"  rows="5"
        cols="50" onChange={(e)=> setTesto(e.target.value)}></textarea>
        <p>NB Per le immagini bisogna caricarle sul sito https://it.imgbb.com/ , una volta caricata , aprirla , cliccare con il tasto destro sull'immagine e selezionare "copia indirizzo immagine" <br/>
        e incollarla nello spazio qui sotto .es link https://i.ibb.co/vkMzgNC/screen.jpg</p><br/>
        <p>Immagine1 - 1150x968</p>
        <input id="url1" onChange={(e)=> setImmagine1(e.target.value)}></input>
        <p>Immagine 2 opzionale</p>
        <input id="url2" onChange={(e)=> setImmagine2(e.target.value)}></input>
        <button style={{width:'200px'}} onClick={(e)=>salvainput(e)}>INVIA</button>
        </div>
        </div>
    )
}

export default DashboardValePerTutti