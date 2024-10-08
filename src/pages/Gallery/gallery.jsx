import React from 'react'
import './gallery.css'
import {Fade} from "react-awesome-reveal";
import {Slide} from "react-awesome-reveal";
import imageGallery4 from '../../assets/gallery/image-gallery-4.jpeg'
import imageGallery3 from '../../assets/gallery/image-gallery-1.jpeg'
import imageGallery2 from '../../assets/gallery/image-gallery-2.jpeg'
import imageGallery1 from '../../assets/gallery/image-gallery.jpeg'
import Image2 from '../../assets/gallery/image-2.jpeg'
import Image3 from '../../assets/gallery/image-3.jpeg'
import Image4 from '../../assets/gallery/image-4.jpeg'
import Image5 from '../../assets/gallery/image-5.jpeg'
import Image6 from '../../assets/gallery/image-6.jpeg'
import Image7 from '../../assets/gallery/image-7.jpeg'


const gallery = () => {
  return (
    <Fade>
      <div className="gallery">
          <h2>Galería</h2>
        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner h-100">
              <div class="carousel-item active ">
                <img src={imageGallery2} class="d-block" alt="imagen-galleria"/>
              </div>
              <div class="carousel-item">
                <img src={imageGallery1} class="d-block" alt="imagen-galleria"/>
              </div>
              <div class="carousel-item">
                <img src={imageGallery3} class="d-block" alt="imagen-galleria"/>
              </div>
              <div class="carousel-item">
                <img src={imageGallery4} class="d-block" alt="imagen-galleria"/>
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
        <Slide>
          <div className="gallery-photos">
            <img src={Image2} alt="imagen-2" className='image' srcset="" />
            <img src={Image3} alt="imagen-3" className='image' srcset="" />
            <img src={Image4} alt="imagen-4" className='image'srcset="" />
            <img src={Image5} alt="imagen-5" className='image'srcset="" />
            <img src={Image6} alt="imagen-6" className='image'srcset="" />
            <img src={Image7} alt="imagen-7" className='image'srcset="" />
          </div>
        </Slide>
      </div>
    </Fade>
  )
}

export default gallery