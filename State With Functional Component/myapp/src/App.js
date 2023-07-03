import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  let [count, setCount] = useState(0)
  function increaseCount(){
    setCount(count+1)
  }

  let [data, setData] = useState('Peter Parker')
  function updateData(){
    data = 'Harry Potter'
    setData(data)
  }
  return (

    <div className="App">
      <h2>{count}</h2>
      <button onClick = {increaseCount}>Click Here</button>

      <h1>{data}</h1>
      <button onClick = {updateData}>Click Here To Update the Name</button>
    </div>
  );
}

export default App;


// What is State.? 
// State is basically an object in which we can save some data like we used to sae in variable.

// why do we use state not variable. 
// because if we use variable our componet will not get updated as we have seen in the previous example.
// but if we use state we can do the update.

// if we are using state then our component will re-render so thats why data will also get update.
// but if we are usinh only variable and we want to update the variable then it will not happen because 
// re-render will not happen 

// to use state we hae to import React
// useState('anil') here i have given an default name you can othername as well 
// its just a default value.

// <h1>{data}</h1>
// data = anil

// setData : if we will not write setData then the alue will not get updated.

// So in component it is better to use useState while using data. 