import { useState } from "react";
import {login,logout} from '../store'
import {useDispatch,useSelector} from 'react-redux'
export const Login=()=>{

const [newUsername,SetNewUserName]=useState("")
const dispatch =useDispatch()
const username=useSelector((state:any)=>state.user.value.username)
    return (
    <div>
        <h1>This is login page </h1>
        <h1>{username}</h1>
        <input onChange={(event)=>SetNewUserName(event.target.value)} />
        <button  onClick={()=>dispatch(login({username:newUsername}))}>Submit Login</button>
        <button >Logout</button>
    </div>
    );
    
    }