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
        <img key={image.id} src={image.direc} alt={image.direc} />
      ))}
    </div>
  )
}

export default toolsUsed