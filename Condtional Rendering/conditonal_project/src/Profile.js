import React, { useState } from "react"



export default function Profile(){
    const [Login, setLogin] = useState(true)
     
    return(
        <div>
            {/* Ternary Operator if else */}
            {Login? "Welcome Deepak": "Welcome Guest"} 
        </div>
    )
}