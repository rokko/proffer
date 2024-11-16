import React, { useState } from 'react';
import AllRoute from '../router'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => { 
  const [test,setTest]=useState(false)
  const [password, setPassword] = useState('')

 return(
    <div className="App cursor-personalizzato" id='scrool'>
          <AllRoute/>
          <ToastContainer/>
    </div>
  );

}

export default App;