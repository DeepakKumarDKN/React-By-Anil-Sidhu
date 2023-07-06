import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {

  const[name, setName] = useState("");
  const[language, setLanguage] = useState("")
  const[terms, setTerms] = useState(false)


  function getFormData(e){
    e.preventDefault()
  }

  return (
    <div className="App">
      <h1 style={{fontFamily:"Poppins"}}>Handle Form With React</h1>
      <form onSubmit = {getFormData}>
        <input type="text" placeholder= "Enter Your Name Here" onChange = {(e)=>setName(e.target.value)}/> <br/>
        <select onChange = {(e)=>setLanguage(e.target.value)}>
          <option>Choose Your Language</option>
          <option>Python</option>
          <option>Javascript</option>
          <option>Django</option>
          <option>React</option>
          <option>HTML/CSS</option>
          <option>Laravel</option>
          <option>C</option>
          <option>C++</option>
        </select><br/>
        <input type="checkbox" onChange = {(e)=> setTerms(e.target.checked)}/><span>Terms and Conditions</span>
        <br/><br/>
        <button type="submit">Submit</button>
        
      </form>
    </div>
  );
}

export default App;
