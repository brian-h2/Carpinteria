import React from 'react'
import './footer.css'
import contactSVG from '../../assets/contact/contact-video.svg'
import {Fade} from "react-awesome-reveal";


const footer = () => {
  return (
  <Fade>
    <div className="footer">
      <div className="footer-elements">
      <img src={contactSVG} alt='imagen-contacto'></img>
        <div className='footer-title'>
          <h1>Contactanos</h1>
        </div>
        <div className='footer-dates'>
          <p><span>Email:</span>brianheredia200309@gmail.com</p>
          <h2><span>Telefono:</span>+54 9 3525 45-8195</h2>
        </div>
      </div>
    </div>
  </Fade>
  )
}

export default footer