import logo from './logo.svg';
import './App.css';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Component/Navbar';
import HomePage from './Component/HomePage';
import AboutPage from './Component/AboutPage';
import ContactPage from './Component/ContactPage'




function App() {
  return (
    <div className="">


      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/about' element = {<AboutPage/>} />
          <Route path="/home" element = {<HomePage/>}/>
          <Route path="/contact" element = {<ContactPage/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

// no need of using anchor tag because react is usually used for creating single page application 
// and in single page application if we will use the anchor tag then it will reload the page 
// which is not required.

//
