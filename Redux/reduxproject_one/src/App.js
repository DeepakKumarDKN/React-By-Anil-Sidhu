import logo from './logo.svg';
import './App.css';
import User from './Component/User';

function App() {
  return (
    <div className="App">
      <h1>Redux Tutorial Props Revesion</h1>
      <User data = {{
        name:'Deepak Kumar'
      }}/>
    </div>
  );
}

export default App;
