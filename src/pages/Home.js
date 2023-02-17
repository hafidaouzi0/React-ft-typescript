
///////////////////////////////QUERIES///////////////////////////////


import { useQuery } from "@tanstack/react-query";
import  Axios  from "axios";

export const Home=()=>{

    const {
        data:CatData,
        isLoading,
        isError,
        refetch,
    }=useQuery(["cat"],()=>{

return Axios.get("https://catfact.ninja/fact").then((res)=>res.data)

    })

    
if (isError){
    return <h1>Sorry there is an eroor ,refresh the page.</h1>
}
  
if (isLoading){
    return <h1>Loading...</h1>
}
    return (<div>
 <h1>This is the Homepage </h1> 
 <h1>and the Fact is :{CatData?.fact}</h1>
 <button onClick={refetch}>Update data</button>
    

    </div>
   
    
    ) ;
}

// import { useQuery } from "@tanstack/react-query";
// import  Axios  from "axios";

// export const Home=()=>{

//     const {
//         data:CatData,
//         isLoading,
//         isError,
//         refetch,
//     }=useQuery(["cat"],()=>{

// return Axios.get("https://catfact.ninja/fact").then((res)=>res.data)

//     })

    
// if (isError){
//     return <h1>Sorry there is an eroor ,refresh the page.</h1>
// }
  
// if (isLoading){
//     return <h1>Loading...</h1>
// }
//     return (<div>
//  <h1>This is the Homepage </h1> 
//  <h1>and the Fact is :{CatData?.fact}</h1>
//  <button onClick={refetch}>Update data</button>
    

//     </div>
   
    
//     ) ;
// }









// import { useContext } from "react";
// import { AppContext } from "../App";
// export const Home=()=>{

// const {Username}=useContext(AppContext)    
//     return (<div>
//  <h1>This is the Homepage and the Username is :{Username}</h1>
    

//     </div>
   
    
//     ) ;
//}