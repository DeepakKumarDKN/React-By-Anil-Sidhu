import React from 'react'
import {Link, NavLink} from 'react-router-dom'


function Navbar() {
  return (
    <>
    <ul className="Navbar">
        <li><NavLink className = "navlink" to="/about">About</NavLink></li>
        <li><NavLink className = "navlink" to="/home">Home</NavLink></li>
        <li><NavLink className = "navlink" to="/contact">Contact</NavLink></li>
        <li><NavLink className = "navlink" to="/user/deepak">Deepak</ NavLink></li>
        <li><NavLink className = "navlink" to="/user/peter">Peter</ NavLink></li>
        <li><NavLink className = "navlink" to="/page404">Page</ NavLink></li>
        

    </ul>
    
    
    </>
  )
}

export default Navbar

// instead of using Link  can also use Navlink
// because Link doesnot allow you to add any class name
// but NavLink Does. 

{/* <Link className = "link" to="/about">About</Link> */}
// we cannot do like this

// But

// <NavLink className = "navlink" to="/about">About</NavLink>
// we can do like this and add some styles to it.

