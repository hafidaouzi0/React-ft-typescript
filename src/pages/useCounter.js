import { useState } from "react"

export const useCounter=()=>{

const [val,setVal]=useState(0)

const increase=()=>{
setVal(val+1)
}
const decrease=()=>{
    setVal(val-1)
    }
    
const restart=()=>{
        setVal(0)
        }


        return{val,increase,decrease,restart}
}