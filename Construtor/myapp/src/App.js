import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
class App extends Component{

  constructor(){
    super();
    this.state={
      data:"Deepak"
    }
  }

  render(){
    return(
      <h1>Hello:{this.state.data} </h1>
    )
  }
}

export default App;


// constructor life cycle is somthing which we cannot use directly inside the functional component
// if we want to use then we have to use with hooks

// but lok at these example i have directly inside the class component.


