import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';


class App extends Component{

  constructor(){
    super();
    console.warn('constructor')
    this.state = {
      name:'deepak',
      email:'deepak1234@gmail.com'
    }
  }

  componentDidUpdate(){
    console.warn('Component did update')
  }

  render(){
    console.warn('render')
    return(
      <div className ="App">
        <h1>Component Did Update Life Cycle Method</h1>
        Name: {this.state.name}<br />
        Email: {this.state.email}<br />
        <button onClick = {()=>(this.setState({name:'Rahul Krishna Vaidya',email:'rahul@gmail.com'}))}>Click Here To Update</button>
      </div>
    )
  }


}


export default App;

// so this component called ComponentDidUpdate Life Cycle Method just use them 
// when you wants to update something. 

// if you will create a new component then it will not execute or run.
// koi bhi state ya phir props update hoga tab chalega.
// toh aggr aap koi bhi state ke andar ya pht sabi ke sabhi state ke andar aggar apko
// event perform karana hai toh phir aap ComponentDidUpdate ko use kar sakhte ho.

// never update the sate directly inside the ComponentDidUpdate and why whts the reason behind it 
// kyun ki aggar aap ek name ko update kar rahe ho toh phir inside ComponentDidUpdate toh ComponentDidUpdate execute hoga 
// aggar aap email update kar rahe ho toh phir ComponentDidUpdate execute hoga 
// so aisa ek loop ban jaega kyun ki yeah toh har state ke  update hone par call hoga
// why i am using state word here because state is basically used for making updates
// so thats why if we want to update any state inside the ComponentDidMount Never do it directly 
// just do it with an condition.


// Question 
// Kya ham kabhi ComponentDidMount ko rok sakhte hein
// The answer is yes we can there is a function called ShouldComponentUpdate if that return false
// then we can stop ComponentDidMount. 

//Question
// can we use setState inside the render
// no 