import { useState } from "react";

export const ChangeProfile = (props) => {
const [Text,SetText]=useState("")
const ChangeUsername=()=>{
    props.SetUsername(Text)
}
return(


<div><br/>
<h1>Change Username down below:</h1>
    <input onChange={(event)=>{SetText(event.target.value)}}></input>
    <h1>{Text}</h1>
    <button onClick={ChangeUsername}>SAVE</button>
</div>

);
};