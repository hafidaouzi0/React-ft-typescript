// import {  useState } from 'react';
// import './App.css';
// import Axios  from 'axios';
// function App() {

//   const [Age,SetAge]=useState({})
//   const [Text,SetText]=useState("")

// const GetText=(event)=>{

//     SetText(event.target.value)
//     }
// const Predict=()=>{

 
//     Axios.get(`https://api.agify.io/?name=${Text}`).then((res)=>{
//       SetAge(res.data)
//       console.log(res.data)

//     })
 
 


// }

// return (
//     <div className="App">
//    <div  className='container'>
 
//   <input type='text' onChange={GetText} />
// <button onClick={Predict}>Predict Age</button>


// <h1>Name:{Age?.name}</h1>
// <h1>Age:{Age?.age}</h1>
// <h1>Count:{Age?.count}</h1>
//    </div>

//     </div>
//   );
// }

// export default App;
