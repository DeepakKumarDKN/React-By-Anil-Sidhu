import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
    <ul className="Navbar">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/page404">Page</Link></li>
        

    </ul>
    
    
    </>
  )
}

export default Navbar