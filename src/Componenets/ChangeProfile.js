import { useState } from "react";
import { useContext } from "react"
import { AppContext } from "../App"
export const ChangeProfile = () => {
const {SetUsername}=useContext(AppContext)

const [Text,SetText]=useState("")
const ChangeUsername=()=>{
   SetUsername(Text)
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