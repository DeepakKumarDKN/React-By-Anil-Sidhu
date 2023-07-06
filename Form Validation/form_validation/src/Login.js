import React, { useState } from "react";


export default function Login(){

    const[userName, setUserName] = useState("")
    const[password, setPassword] = useState("")
    const[userError, setError] = useState(false)
    const[passwordError, setPasswordError] = useState(false)


    function loginHandle(e){

        if(userName.length<=3 || password.length<=5){
            alert('Login Not Successfull')
        }
        else{
            alert('Login Successfull')
        }

        e.preventDefault()
    }
 
    function userHandler(e){
        let name = e.target.value
        name.length<=3? setError(true):setError(false)
        
        setUserName(name)
    }
    function passwordHandler(e){
        let name = e.target.value
        name.length <=5? setPasswordError(true): setPasswordError(false)
        setPassword(name)
    }
    return(
        <div>
            
            <h3>Login Validation</h3>
            <form onSubmit={loginHandle}>
            <input type="text" placeholder ="Enter Your UserId/Name" onChange= {userHandler}/>
            {userError ? <span>Username is too small</span> : ""}
            <br />
            <input type="text" placeholder ="Enter Your Password" onChange = {passwordHandler}/> 
            {passwordError ? <span>invalid password</span>: ""}
            <br />
            <button type="submit">Login</button>
            </form>

        </div>
    )
}