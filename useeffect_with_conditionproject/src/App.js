import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import User from './User';

function App() {

  const[count, setCount] = useState(0)
  const [data, setData] = useState(100)
  const [name, setName] = useState('Anil')

  return (
    <div className="App">
      <h1>Using useEffect with condition</h1>
      <h3>Count: {count}</h3>
      <h3>Data: {data} </h3>
      <button onClick= {() => setCount(count+1)}>Update Count</button><br />
      <button onClick = {() =>setData(data-1)}>Set Data</button><br />

      <br/>
      <User name = {name} />
      <button onClick = {() => setName('Deepak')}>Update Name</button>
    </div>
  );
}

export default App;
