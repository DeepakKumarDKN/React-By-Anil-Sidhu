import logo from './logo.svg';
import './App.css';
import './index.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './Component/Navbar';
import HomePage from './Component/HomePage';
import AboutPage from './Component/AboutPage';
import ContactPage from './Component/ContactPage'
import Page404 from './Component/Page404';
import User from './Component/User';





function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/about' element = {<AboutPage/>} />
          <Route path="/home" element = {<HomePage/>}/>
          <Route path="/contact" element = {<ContactPage/>}/>
          <Route path="/user/:name" element={<User/>}></Route>
          {/* <Route path="/*" element = {<Page404/>}/> */}
          <Route path="/*" element = {<Navigate to = "/"/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// here i am redirecting it to hoem page if there is no page like 
// products // Login etc etc

