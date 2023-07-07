import React, { useState } from "react"


export default function PassFunctionInProps(props){
    return(
        <div>
            <h1>Pass Function As Props</h1>
            <button onClick={props.data}>Call Data Function</button>

            {/* Both the upper one and the below one is right */}
            {/* <button onClick={() => props.data()}>Call Data Function</button> */}
            
        </div>
    )
}
       