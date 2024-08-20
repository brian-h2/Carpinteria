import React from 'react'
import { useState,useEffect } from 'react'
import './toolsUsed.css'
import infoJs from "./images.json"

const toolsUsed = () => {

  const [images,setImages] = useState([])

  useEffect(() => {
    setImages(infoJs)
  },[]);

  console.log(images)


  return (
    <div>
      <h1>hola</h1>
      {images.map((image) => (
        <div>
          <h2>{image.id}</h2>
          <img src={image.direc} alt={image.alt}/>
        </div>
      ))}
    </div>
  )
}

export default toolsUsed