export const Task=(props)=>{
    return (<div>
        <h1 style={{backgroundColor:props.completed?"green":"white"}} >{props.taskName}</h1>
        <button onClick={() => props.CompleteTask(props.id)} >Completed</button>
        <button onClick={() => props.deleteTask(props.id)}>X</button>

          </div>
          );
}