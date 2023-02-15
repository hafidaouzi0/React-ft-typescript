import { useEffect, useState } from 'react';
import './App.css';
import Axios  from 'axios';
function App() {

const [catFact,SetCatFact]=useState("");

  const FetchCat=()=>{
    Axios.get("https://catfact.ninja/fact").then((res)=>{

    console.log(res.data.fact)
    SetCatFact(res.data.fact)
    });
  }

  useEffect(()=>{
    FetchCat()
  },[])



return (
    <div className="App">
    
  
<button onClick={FetchCat}>Click to fetch cats</button>

<h1>{catFact}</h1>

    </div>
  );
}

export default App;
