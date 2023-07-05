import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {

  let [status, setStatus] = useState(true)

  return (
    <div className="App">
      <h3 style = {{fontFamily: "Poppins"}}>Hide and Show Element</h3>
      {
        status ? <h3>Hide and Show Element</h3> : null
      }
  
      {/* <button onClick = {() => setStatus(false)} style = {{marginRight : 5}}>Hide</button>
      <button onClick = {() => setStatus(true)}>Show</button> */}

      {/* Doing it with One Button */}
      <button onClick = {() => setStatus(!status)}>Hide/Show</button>


    </div>
  );
}

export default App;
