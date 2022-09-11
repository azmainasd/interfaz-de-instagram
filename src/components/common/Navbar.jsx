import React from "react"
import {Link} from 'react-router-dom'
import './css/navbar.css'

const Navbar = () =>{
    return (
        <nav className="_main">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">
                    <img src="images\logo\logo.png" alt="Logo" />
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar