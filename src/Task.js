export const Task=(props)=>{
    return (<div>
        <h1>{props.taskName}</h1>
        <button onClick={ChangeColor} style={{color:colVal}}>Completed</button>
        <button onClick={() => props.deleteTask(props.id)}>X</button>

          </div>
          );
}