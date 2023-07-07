import logo from './logo.svg';
import './App.css';
import PassFunctionInProps from './PassFunction';

function App() {

  function getData(){
    console.log('Hello from getData Function')
  }

  return (
    <div className="App">
      <PassFunctionInProps data = {getData}/>
    </div>
  );
}

export default App;

// created a function called getData
// passing it to a variable called data 
// and calling it in the PassFunction.js file 
// when the button will click the function will get ceated. 

// Two Ways Of Writting it
// we can directly call like {props.data} or {()=> props.data()}
