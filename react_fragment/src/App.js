import logo from './logo.svg';
import './App.css';
import Cols from './Cols'

function App() {
  return (
    <div className="App">
      <h1>React Fragment</h1>
      <table>
        <tbody>
          <tr>
            <Cols />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
