import React from 'react'
import { useState,useEffect } from 'react'
import './toolsUsed.css'
import infoJs from "./images.json"


const toolsUsed = () => {

  const [images,setImages] = useState([])

  useEffect(() => {
    setImages(infoJs)
  },[]);
  
  return (
    <div className='images'>
      {images.map((image) => ( 
        <div key={image.id} className='image-container'>
          <img src={image.direc} alt={image.direc} />
          <p className='image-title'>{image.title}</p> 
        </div>
      ))}
    </div>
  )
}

export default toolsUsed