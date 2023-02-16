import { useContext } from "react";
import { AppContext } from "../App";
export const Home=()=>{

const {Username}=useContext(AppContext)    
    return (<div>
 <h1>This is the Homepage and the Username is :{Username}</h1>
    

    </div>
   
    
    ) ;
}