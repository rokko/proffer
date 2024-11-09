import react, {useState} from 'react'

const DashboardValePerTutti = () => {

    const salvainput = () =>{
        console.log(titolo)
        console.log(testo)
    }
    const [titolo, setTitolo] = useState()
    const [testo, setTesto] = useState()
    const [immagine1, setImmagine1] = useState()
    const [immagine2, setImmagine2] = useState()
    const [NomeAccorciato, setNomeAccorciato] = useState()
    return(
        <div>
        <p>Dashboard</p>
        <h2>Inserimento nuovo articolo</h2>
        <div style={{display:'flex', flexDirection:'column'}}>
            <p>Titolo</p>
        <input id="titolo"  onChange={(e)=> setTitolo(e.target.value)}></input>
        <p>NomeAccorciato</p>
        <input id="titolo"  onChange={(e)=> setNomeAccorciato(e.target.value)}></input>
        <p>Testo</p>
        <textarea id="testo"  rows="5"
        cols="50" onChange={(e)=> setTesto(e.target.value)}></textarea>
       
        <p>Immagine1</p>
        <input id="url1" onChange={(e)=> setImmagine1(e.target.value)}></input>
        <p>Immagine 2 opzionale</p>
        <input id="url2" onChange={(e)=> setImmagine2(e.target.value)}></input>
        <button onClick={()=>salvainput()}>INVIA</button>
        </div>
        </div>
    )
}

export default DashboardValePerTutti