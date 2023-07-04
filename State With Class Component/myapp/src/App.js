import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component{

  constructor(){
    super();
    this.state = {
      data: "anil"
    }
  }
  apple(){
    this.setState({data:"arey bhai"})
  }
  render(){
    return (
    <div className="App">
      <h1>{this.state.data}</h1>
      <button onClick = {()=>{this.apple()}}>Update Button</button>
    </div>
  );
  }
  
}

export default App;
