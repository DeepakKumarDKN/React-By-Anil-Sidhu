import logo from './logo.svg';
import './App.css';

function App() {
 
  let data = "Deepak Kumar Nayak"

  function apple(){
    data = "Peter"
    alert(data)
  }

  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick = {apple}>Click Me</button>
    </div>
  );
}

export default App;

// calling the apple function when we will click on 
// button the apple function will be called. 

// no neeed of writting: 
// <button onClick = {apple()}>Click Me</button> : This is wrong
// <button onClick = {apple}>Click Me</button> : This is right
// <button onClick = {()=>apple()}>Click Me</button> : this is also right but pefer the 2nd one.

// Though i hae changed the alye from Deepak Kumar Nayak to peter 
// but still the value will not change on the screen 
// alert is working we will see peter but the alue on the screen is still 
// Deepak Kumar Nayak

// so for this we need to understand Props and State which we will discuss in the upcomming videos