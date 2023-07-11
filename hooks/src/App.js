import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {

  const[data, setData] = useState('Anil')


  return (
    <div className="App">
      <h2>Hooks With useState</h2>
      <h3>Data: {data}</h3>
      <button class = "btn-btn" onClick = {()=> setData('Deepak')}>Click Here To Change The Value Of Data</button>

    </div>
  );
}

export default App;
