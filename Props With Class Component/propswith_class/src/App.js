import logo from './logo.svg';
import './App.css';
import Student from './Student';
import React, { Component } from 'react';


class App extends Component{
  constructor(){
    super();
    this.state = {
      name :'Deepak',
      email : "deepak@gmail.com"
    }
  }
  render(){
    return(
      <div className = "App">
        <h1>Props With Class Component</h1>
        <Student name = {this.state.name} 
        email = {this.state.email}
        />
        <button className = "font-Family" style = {{backgroundColor: "orange", padding: 10, border: 0, color: "white", borderRadius : 20}}
          onClick = {() =>{this.setState({name:'Peter', email:'peter@gmail.com' })}}>Update Name and Email
        </button>
        {/* <button onClick = {() =>{this.setState({email:'peter@gmail.com'})}}>Change Email</button> */}
      </div>
    )
  }
  
}

export default App

// basically it is used in component to render data.
// when i want to transfer data from one component to another then we will use props.
// jaise app ek function ke andar parameter pass kate hein waise hi ham ek component ke andar 
// props ko pass karenge

// here i have created two buttons for changing the name and email but i can still do it with one button 
// just click on the Update Name and Email and you can see the changes in both name and email
