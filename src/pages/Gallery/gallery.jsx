import React from 'react'
import './gallery.css'
import imageGallery3 from '../../assets/gallery/image-gallery-3.jpg'
import imageGallery2 from '../../assets/gallery/image-gallery-2.jpg'
import imageGallery1 from '../../assets/gallery/image-gallery.jpg'
import Image2 from '../../assets/gallery/image-2.jpg'
import Image3 from '../../assets/gallery/image-3.jpg'
import Image4 from '../../assets/gallery/image-4.jpg'
import Image5 from '../../assets/gallery/image-5.jpg'

const gallery = () => {
  return (
    <div className="gallery">
        <h2>Galería</h2>
      <div id="carouselExampleCaptions" class="carousel slide h-50 w-100 mb-20">
          <div class="carousel-indicators h-15">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner h-100">
            <div class="carousel-item active ">
              <img src={imageGallery2} class="d-block w-100 h-100" alt="imagen-galleria"/>
            </div>
            <div class="carousel-item">
              <img src={imageGallery1} class="d-block w-100 h-100" alt="imagen-galleria"/>
            </div>
            <div class="carousel-item">
              <img src={imageGallery3} class="d-block w-100 h-100" alt="imagen-galleria"/>
            </div>
          </div>
          <button class="carousel-control-prev h-100" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next h-100" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
      </div>
      <div className="gallery-photos">
        <img src={Image2} alt="imagen-2" className='image' srcset="" />
        <img src={Image3} alt="imagen-3" className='image' srcset="" />
        <img src={Image4} alt="imagen-4" className='image'srcset="" />
        <img src={Image5} alt="imagen-5" className='image'srcset="" />
      </div>
    </div>
  )
}

export default gallery