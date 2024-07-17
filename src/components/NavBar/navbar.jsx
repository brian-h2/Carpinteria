import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
const navbar = () => {
  return (
    <nav className='navbar'>
        <ul className='navbar-ul'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <h2 className='navbar-title'>Title</h2>
    </nav>
  )
}

export default navbar