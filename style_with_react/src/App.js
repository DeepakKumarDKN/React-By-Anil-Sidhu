import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>How Style Used In React</h1>
      <p className="red">First Way</p>
      <p style={{color: 'white', backgroundColor: 'green', width: 'max-content', margin: '0 auto', padding:'5px'}}>2nd Way</p>

    </div>
  );
}

export default App;
