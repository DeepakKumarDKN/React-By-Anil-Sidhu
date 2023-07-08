import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import User from './User';



export default function App(){
  return(
    <div className = "App">
      <h1>Render Method In React</h1>
      <User email = "deepak@gmail.com"/>
    </div>
  )
}





// use of render method
// whenever any state or any props will get update then render method
// will run automatically by itself.

// when the render method will run: 
  // 1. state update
  // 2. props update

// Render is used in class Component not in functional component.
// Render mean execution and representing. (Execute karke represent karna)
// Class Component mein ham jo bhi HTML Likhte hein woh ham sara ka sara render method ke andar hi likhte hein. 
