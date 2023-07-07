import React, {useState} from "react";
import './Login.css'
export default function LoginForm(){

    const[username, setUser] = useState("");
    const[password, setPassword] = useState("")
    const[userError, setUserError] = useState(false)
    const[userPassword, setUserPassword] = useState(false)


    function loginHandler(e){

        username.length<=3 || password.length <=3 ? alert('login Again') : alert('Login successfull')

        e.preventDefault()
    }

    function userHandler(e){
        const user = e.target.value 
        user.length<=3 ? setUserError(true):setUserError(false)
        setUser(user)
    }

    function passwordHandler(e){
        const userPassword = e.target.value 
        userPassword.length <=5 ? setUserPassword(true):setUserPassword(false)
        setPassword(userPassword)

    }


    return(
        <div>
            <form className="form fontFamily" onSubmit={loginHandler}>
                Name: <input type="text" placeholder = "Enter Your Name" onChange={userHandler}/><br/>
                {userError? "UserName is Not Valid":" "}<br/>
                Password : <input type="text" placeholder = "Enter Your Password" onChange={passwordHandler}/><br />
                {userPassword? "Password length Is Very Small":" "}<br/>

                <button type="submit" className="login-btn">Login</button>
            </form>
        </div>
    )
}