import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <h1>Router </h1>
      <BrowserRouter>
      <Routes>
        <Route path = '/home' element = {<Home />}/>
        <Route path = '/about' element = {<About />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
