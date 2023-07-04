import logo from './logo.svg';
import './App.css';
import Student from './Student';
import React, { useState } from 'react';

  

function App() {
  return (
    <div className="App">
      <h1>Props With Functional Component</h1>
      <Student name = {"Peter Parker"} 
      email = {'peter@gmail.com'}
      address = {'London Parkstreet LaneNo.10 Near HighWay Colony'} 
      />
      <Student name = {"Harry Potter"} 
      email = {'harry@gmail.com'}
      address = {'London Parkstreet LaneNo.10 Near HighWay Colony'} 
      />
      <Student name = {"Hermione Granger"} 
      email = {'hermoine@gmail.com'}
      address = {'London Parkstreet LaneNo.10 Near HighWay Colony'} 
      />
    </div>
  );
}

export default App;


// in javascript in a function we used parameter just like that in react in the 
// component props is used. 

// its just an example but props and parameter are not same.

// <Student name = {"Peter Parker"} /> sending parameter or props
// now move to the Student.js file to see how it is being access. 