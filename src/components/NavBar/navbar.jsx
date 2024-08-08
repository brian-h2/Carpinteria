import { Link } from 'react-scroll';
import React from 'react'
import { useRef } from 'react'
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
          <li><Link to="home" smooth={true} duration={400}>Home</Link></li>
          <li><Link to="gallery" smooth={true} duration={400}>Gallery</Link></li>
          <li><Link to="about" smooth={true} duration={400}>About</Link></li>
          <li><Link to="contact" smooth={true} duration={400}>Contact</Link></li>
        </ul>
        <h2 className='navbar-title'>Carpinteria</h2>
        <img ref={menuHambur} onClick={mostrarMenu} className="navbar-icon-burguer"src={menu} alt="nav" srcset="" />
    </nav>
  )
}

export default navbar