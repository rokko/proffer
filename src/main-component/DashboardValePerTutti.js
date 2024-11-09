import react, {useState} from 'react'

const DashboardValePerTutti = () => {

    const salva = () =>{
        console.log(titolo)
        console.log(testo)
    }
    const [titolo, setTitolo] = useState()
    const [testo, setTesto] = useState()
    return(
        <div>
        <p>Dashboard</p>
        <h2>Inserimento nuovo articolo</h2>
        <div style={{display:'flex', flexDirection:'column'}}>
            <p>Titolo</p>
        <input id="titolo"  onChange={(e)=> setTitolo(e.target.value)}></input>
        <p>Testo</p>
        <input id="testo" onChange={(e)=> setTesto(e.target.value)}></input>
        <button onClick={()=>salva()}></button>
        <p>Immagine1</p>
        <input id="url1" onChange={(e)=> setImmagine1(e.target.value)}></input>
        <p>Immagine 2 opzionale</p>
        <input id="url2" onChange={(e)=> setImmagine2(e.target.value)}></input>

        </div>
        </div>
    )
}

export default DashboardValePerTutti