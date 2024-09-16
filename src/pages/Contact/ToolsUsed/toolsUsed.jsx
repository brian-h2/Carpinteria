import React from 'react';
import { useState,useEffect } from 'react'
import './toolsUsed.css'
import infoJs from "./images.json"
import {Slide} from "react-awesome-reveal";

const ToolsUsed = () => {

  const [images,setImages] = useState([])

  useEffect(() => {
    setImages(infoJs)
  },[]);
  
  return (
    <div className='images'>
      {images.map((image) => ( 
         // eslint-disable-next-line react/jsx-key
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

export default ToolsUsed