import { ChangeProfile } from "../Componenets/ChangeProfile"


export const Profile=(props)=>{

   
return <div>This is the Profile of the user:{props.Username}<ChangeProfile SetUsername={props.SetUsername}/></div>
}