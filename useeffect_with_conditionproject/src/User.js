import { useEffect } from "react";



export default function User(props){
    useEffect(()=>{
        console.log('Use Effect Called on User')
    },[props.name])

    return(
        <div>
            Use Effect On Props
            <p>Name : {props.name}</p>
        </div>
    ) 
}