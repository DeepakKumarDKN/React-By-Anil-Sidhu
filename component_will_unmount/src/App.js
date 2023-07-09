import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Student from './Student';





class App extends Component{

  constructor(){
    super();
    this.state={
      show:true
    }
  }

  render(){
    return(
      <div className="App">
      <h1>Component WillUnMount Life Cycle Method</h1>
      {
        this.state.show ? <Student/>: ""
      }
      <button className="btn-btn" onClick = {()=>(this.setState({show:!this.state.show}))}>Toggle Child Component</button>
      
    </div>
    )
  }
}
export default App;


// Jab bhi hamara component Dom se remove hoga tab hamara Componenet willunmount method
// call hoga.

// for example jab bhi ham koi component ko hide karte hein tab woh component completely
// dom se remove karte heinaur tab jake component willunmount call hoga 

// lets do that with the help of button when i will hide the button at that time 
// its gets remoe out of the dom completely.

// Interiew Question:
// shouldComponetUpdate and ComponentDidUpdate mein se pehle konsa call hota hai.

// Answer
// shouldComponentUpdate mein aggar hamara writen true hoga toh woh pehle call hoga. 
