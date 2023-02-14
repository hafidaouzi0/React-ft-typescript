import { useState } from 'react';
import './App.css';
import Axios  from 'axios';
function App() {

const [catFact,SetCatFact]=useState("");

  Axios.get("https://catfact.ninja/fact").then((res)=>{

  console.log(res.data.fact)
  SetCatFact(res.data.fact)
  });



return (
    <div className="App">
    
  
   <div><h1>wtf </h1></div>


<h1>hiiiiiiiiiisiiiiiiiii</h1>

    </div>
  );
}

export default App;
