import logo from './logo.svg';
import './App.css';
import React, { Component, setState } from 'react';


class App extends Component{



  constructor(){
    super();
    this.state = {
      name: 'anil'
    }

  }
  render(){
    return(
      <div className="App">
        <h1>Component Did Mount</h1>
        <h5>Name: {this.state.name}</h5>
        <button onClick= {()=>(this.setState({name:'Deepak'}))}>Click Here To Update Name</button>
      </div>
    )
  }
}
export default App
// Component DidMount Life Cycle Method.
// In this life cycle method there is no ueffect if anything is getting update
// because of state or prop. 

// it is basically used during API Call
// which one is getting called first render or didMount 
  // a.) render and then didMount

// component didMount html dom ready hone ke baad call hoga last mein hota hai 
// we should not update state inside the render