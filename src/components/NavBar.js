import React, { Component } from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom';



export default function NavBar() {
    return (
        <div className="header">
            <div className="logo">
                <div className="logo-image"></div>
                <div className="logo-text">Logo</div>
            </div>
            <nav>
                <ul className="nav-bar">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Services">Services</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                    <li><NavLink to="/SignUp">Sign Up</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}



