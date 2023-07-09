import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';

class App extends Component{

  constructor(){
    super();
    this.state = {
      count:0
    }
  }

  shouldComponentUpdate(){
    console.warn(this.state.count)
    if(this.state.count>0 && this.state.count<10){
      return true
    }
    return false
    
    // False is the bydefault value it doesnt allow you to update
    // if you want to update it then you have to write return true instead of 
    // return false

    // here i hae applied some condition we can also perfom operation like that 
    // executinh with some random conditions.
  }
  render(){
    return(
      <div className="App">
        <h2>Should Component Update</h2>
        <p>Value of count : {this.state.count}</p>
        <button className="Update" onClick = {()=> this.setState({count: this.state.count+1})}>Update Counter</button>
      </div>
    )
  }
}

export default App;


// Notes:- 

// Should Component Update Mean its asks You a question that whether should i update the component or not.
// It can stop Rendering 
// used with state and props.

// Bascially it comes during update. whenever will state and props will update at that time 
// only it will run.

// Question
// Can we call an api inside componentDidUpdate
// yes we can if we want to do conditional call then we can 

// and if you dnt want to do conditonal call then we can do inside the 
// componentDidMount


