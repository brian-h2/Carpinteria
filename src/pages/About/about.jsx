import React from 'react'
import './about.css'
import {Fade} from "react-awesome-reveal";

const About = () => {
  return (
    <Fade>
      <div className='about'>
        <div className='about-content'>
          <h1>¿Quiénes somos?</h1>
          <p>Nos dedicamos a la realización de muebles tanto de cocina,vestidores,baños, sala de estar en una amplia gama de colores con el material melamina, altamente resistente y permanente duración.</p>
        </div>
      </div>
    </Fade>
  )
}

export default About