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

  let [number1, setNumberOne] = useState(0)
  let [number2, setNumberTwo] = useState(0)
  let [total, setTotal] = useState(null)
  function AddData(){
    number1 = 10 
    setNumberOne(number1)

    number2 = 40 
    setNumberTwo(number2)

    setTotal(total = number1+ number2)
  }



  return (

    <div className="App">
      <button onClick = {AddData}>Total : {total}</button><br />
      <button onClick = {increaseCount}>Click Here : {count}</button><br />
      <button onClick = {updateData}>Update the Name : {data}</button><br/>
      
    </div>
  );
}

export default App;


// What is State.? 
// State is basically an object in which we can save some data like we used to save in variable.

// why do we use state not variable. 
// because if we use variable our componet will not get updated as we have seen in the previous example.
// but if we use state we can do the update.

// if we are using state then our component will re-render so thats why data will also get update.
// but if we are using only variable and we want to update the variable then it will not happen because 
// re-render will not happen 

// to use state we have to import React
// useState('anil') here i have given an default name you can give othername's as well 
// its just a default value.

// <h1>{data}</h1>
// data = anil
// the value we have in the data is getting displayed in the screen

// setData : if we will not write setData then the value will not get updated.

// So in component it is better to use useState while using data. 