import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import menu from '../../assets/icons/menu.svg'
import './navbar.css'
const navbar = () => {

  const menuHambur = useRef()
  const menuOptions = useRef()

  const mostrarMenu = () => {
    menuHambur.current.classList.toggle('active');
    menuOptions.current.classList.toggle('active');
  }

  return (
    <nav className='navbar'>
        <ul className='navbar-ul' ref={menuOptions}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <h2 className='navbar-title'>Carpinteria</h2>
        <img ref={menuHambur} onClick={mostrarMenu} className="navbar-icon-burguer"src={menu} alt="nav" srcset="" />
    </nav>
  )
}

export default navbar