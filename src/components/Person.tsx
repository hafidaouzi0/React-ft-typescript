interface Props{

    name:string;
    email:string;
    age:number;
    isMarried:boolean;
    friends:string[];
    country:Country;
}

export enum Country{
Brazil='Brazil',
Morocco='Morocco',
Switzerland='Switzerland'

}



export const Person=(props:Props)=>{

    return (
        <div>
<h1>Name: {props.name}</h1>
<h1>Email:{props.email}</h1>
<h1>Age:{props.age}</h1>
<h1>Country:{props.country}</h1>
<h1>isMarried:{props.isMarried}</h1>
<h1>friends:</h1>{props.friends.map((friend)=>{
    return <h1>{friend}</h1>
})}

        </div>
    );




}