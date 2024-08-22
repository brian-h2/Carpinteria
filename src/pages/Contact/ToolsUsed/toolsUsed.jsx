import React from 'react'
import { useState,useEffect } from 'react'
import './toolsUsed.css'
import infoJs from "./images.json"
import {Slide} from "react-awesome-reveal";

const toolsUsed = () => {

  const [images,setImages] = useState([])

  useEffect(() => {
    setImages(infoJs)
  },[]);
  
  return (
    <div className='images'>
      
      {images.map((image) => ( 
         <Slide direction={image.animation}>
          <div key={image.id} className='image-container'>
            <img src={image.direc} alt={image.direc} />
            <p className='image-title'>{image.title}</p> 
          </div>
        </Slide>
      ))}
     
    </div>
  )
}

export default toolsUsed