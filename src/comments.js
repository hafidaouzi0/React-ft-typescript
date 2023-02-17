// import { useState } from 'react';
// import './App.css';
// import { Task } from './Task';

// function App() {

// const [InputText,SetText]=useState("")
// const [Tasks,SetTask]=useState([])

// const GetText=(event)=>{
// SetText(event.target.value)
// }
// const SubmitTask=()=>{
//   const task={
//     id: Tasks.length === 0 ? 1 : Tasks[Tasks.length - 1].id + 1,
//     taskName:InputText,
//     completed:false,
//   }
// SetTask([...Tasks,task])
// }
// const deleteTask=(id)=>{
//     SetTask(Tasks.filter((task)=>{
//      return task.id !== id}) )
// }

// const CompleteTask=(id)=>{
// SetTask(
// Tasks.map((task)=>{
// if(task.id===id){
//   return {...task,completed:true}
// }
// else return task

// })

// )
// }




 
// return (
//     <div className="App">
//     <div className='AddTask'>
// <input onChange={GetText} type='text'/>
// <button onClick={SubmitTask}>Add Task</button>
//     </div>
// <div className='ListTask'>
// {Tasks.map((task)=>{
//   return (<Task completed={task.completed} taskName={task.taskName} id={task.id} CompleteTask={CompleteTask} deleteTask={deleteTask} />
//   )
// })}
//     </div>




//     </div>
//   );
// }

// export default App;


//////////////////////////////////////////////////////////////////////////:
////////////////////USECONTEXT LESSON/////////////////////////////////////:
// import './App.css';
// import  {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
// import {Home} from "./pages/Home"
// import { Menu } from './pages/Menu';
// import { Contact } from './pages/Contact';
// import { Navbar } from './Navbar';
// import { Profile } from './pages/Profile';
// import { useState,createContext } from 'react';

// export const AppContext=createContext()

// function App() {
// const [Username,SetUsername]=useState("Hafida")

// return (
//     <div className="App">
//       <AppContext.Provider value={{Username,SetUsername}}>
// <Router>
//    <Navbar/>
// <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/menu" element={<Menu/>} />
//   <Route path="/profile" element={<Profile  />} />
//   <Route path="/contact" element={<Contact/>} />
//   <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />

// </Routes>


// </Router>
// </AppContext.Provider>

//     </div>
//   );
// }

// export default App;
/////////////////QUERIES///////////////////////////////////////

// import './App.css';
// import  {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
// import {Home} from "./pages/Home"
// import { Menu } from './pages/Menu';
// import { Contact } from './pages/Contact';
// import { Navbar } from './Navbar';
// import { Profile } from './pages/Profile';
// import { QueryClient,QueryClientProvider } from '@tanstack/react-query';


// function App() {
// const client=new QueryClient({defaultOptions:{
// queries:{
//   refetchOnWindowFocus:false
// }

// }});
// return (
//     <div className="App">
//       <QueryClientProvider client={client}>
// <Router>
//    <Navbar/>
// <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/menu" element={<Menu/>} />
//   <Route path="/profile" element={<Profile  />} />
//   <Route path="/contact" element={<Contact/>} />
//   <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />

// </Routes>


// </Router>
// </QueryClientProvider>
//     </div>
//   );
// }

// export default App;
