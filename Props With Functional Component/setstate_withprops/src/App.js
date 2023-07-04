import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {

  let[name, setState] = useState('Deepak')

  function UpdateName(){
    name = "Peter Parker"
    setState(name)
  }

  return (
    <div className="App">
      <h1>Updating value With Props</h1>
      <h2>Student Name: {name}</h2>
      <button onClick = {UpdateName}>Click Here To Change The Name</button>
    </div>
  );
}

export default App;


// by creating a function and then inside the function using 
// setState we can change the name otherwise we can directly 
// write an arrow function on button for Example:

//<button onClick = {()=>{setState('PeterParker')}}>Click Here To Change The Name</button>
// if we are writting like this then there is no need of creating a function.


