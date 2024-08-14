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
    <nav className='navbar-box'>
        <ul className='navbar-ul' ref={menuOptions}>
          <li><Link to="home" smooth={false} duration={200}>Home</Link></li>
          <li><Link to="about" smooth={false} duration={200}>About</Link></li>
          <li><Link to="gallery" smooth={false} duration={200}>Gallery</Link></li>
          <li><Link to="contact" smooth={false} duration={200}>Contact</Link></li>
        </ul>
        <h2 className='navbar-title'>Carpinteria</h2>
        <img ref={menuHambur} onClick={mostrarMenu} className="navbar-icon-burguer"src={menu} alt="nav" srcset="" />
    </nav>
  )
}

export default navbar