import { useState } from 'react';
import './App.css';
import { Task } from './Task';

function App() {

const [InputText,SetText]=useState("")
const [Tasks,SetTask]=useState([])
const [colVal,Set]
const GetText=(event)=>{
SetText(event.target.value)
}
const SubmitTask=()=>{
  const task={
    id: Tasks.length === 0 ? 1 : Tasks[Tasks.length - 1].id + 1,
    taskName:InputText,
    completed:false
  }
SetTask([...Tasks,task])
}
const deleteTask=(id)=>{
    SetTask(Tasks.filter((task)=>{
     return task.id !== id}) )
}
  return (
    <div className="App">
    <div className='AddTask'>
<input onChange={GetText} type='text'/>
<button onClick={SubmitTask}>Add Task</button>
    </div>
<div className='ListTask'>
{Tasks.map((task)=>{
  return (<Task taskName={task.taskName} id={task.id}  deleteTask={deleteTask}/>
  )
})}
    </div>




    </div>
  );
}

export default App;
