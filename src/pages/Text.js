import { useState } from "react"

export const Text=()=>{

const [IsVisible,SetIsVisible]=useState(false)

const changeval=()=>{
SetIsVisible(!IsVisible)

}
return (
<div>
<button onClick={changeval}>
    {IsVisible?"Hide":"Show"} </button>

{IsVisible && <h1>Hidden text</h1>}
</div>


);

}