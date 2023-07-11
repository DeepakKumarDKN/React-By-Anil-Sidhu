import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [count, setCount] = useState(0)


  useEffect(()=>{
    consolee.warn('useEffect')
  })

  // useEffect(()=>{
  //     console.log('This is will only on data2')
  // },[data2])

  // useEffect(()=>{
  //    console.log('more than one useEffcet we can use') 
  //    console.log('This usEffect will work on data')
  // },[data])

  // useEffect(()=>{
      
  // })
  // so this is how we can use it according to to our need more than 
  // one useEffect we can use


  return (
     <div className="App">
      <h1>Using useEffect without any condition</h1>
      <h3>Count: {count}</h3>
      <button  onClick = {() =>setCount(count+1)}>Change Count Value</button>
    </div>
  );
}

export default App;
