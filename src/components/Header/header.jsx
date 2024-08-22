import React from 'react'
import './header.css'
import imagen from '../../assets/background/background-header.jpg';
import {Fade} from "react-awesome-reveal";

const header = () => {
  return (
    <Fade>
      <header className='header'>
        <div className='header-background'>
          <img src={imagen} alt='imagen-header'></img>
        </div>
        <div className="header-title">
          <h1>Aporta tu Idea</h1>
          <h2>Nosotros la hacemos realidad.</h2>
        </div>
      </header>
    </Fade>
  )
}

export default header