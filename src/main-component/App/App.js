import React, { useState } from 'react';
import AllRoute from '../router'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => { 
  const [test,setTest]=useState(false)
  const [password, setPassword] = useState('')
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
    <div className="App cursor-personalizzato" id='scrool'>
          <AllRoute/>
          <ToastContainer/>
    </div>
  );

}

export default App;