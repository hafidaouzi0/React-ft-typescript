import { ChangeProfile } from "../Componenets/ChangeProfile"
import { useContext } from "react"
import { AppContext } from "../App"
export const Profile=()=>{

const {Username}=useContext(AppContext)
   
return <div>This is the Profile of the user:{Username}<ChangeProfile /></div>
}