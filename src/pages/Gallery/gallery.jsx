import React from 'react'
import './gallery.css'
import Image1 from '../../assets/gallery/armario.jpg'

export const Gallery = () => {
  return (
    <div className='gallery'>
      <div className="gallery-1">
        <div className="gallery-1-text">
          <h1>Titulo</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quos nihil impedit sunt eius quaerat ipsam nemo illo sequi neque, cupiditate ex hic quas tenetur, ipsa qui aut accusamus ratione.</p>
        </div >
        <div className="gallery-1-img">
          <img src={Image1} alt='armario'/>
        </div>
      </div>
      {/* <div className="gallery-2">
        <div className="gallery-2-text">
            <h1>Titulo</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quos nihil impedit sunt eius quaerat ipsam nemo illo sequi neque, cupiditate ex hic quas tenetur, ipsa qui aut accusamus ratione.</p>
          </div>
          <div className="gallery-2-img">
            <img src={Image1} alt='armario'/>
        </div>
      </div> */}
    </div>
  )
}
